import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalesService } from '../services/personales.service';
import { MedicosService } from '@utp/medicos';
import { lastValueFrom } from 'rxjs';
import { Personal } from '../model/personal';
import { EnfermedadesService } from '@utp/enfermedades';


@Component({
  selector: 'lib-editar-personales',
  templateUrl: './editar-personales.component.html',
  styleUrls: ['./editar-personales.component.css']
})
export class EditarPersonalesComponent implements OnInit {


  public personal: Personal = new Personal;
  public listEnfermedades : Array<any> = new Array;
  public medicos : Array<any> = new Array;
  public isExist: boolean = false;
  public update: boolean = true;

  constructor(
    private personalServicio: PersonalesService,
    private fb              : FormBuilder,
    private _router         : ActivatedRoute,
    private router          : Router,
    private medicoServicios : MedicosService,
    private enfermedadServicio : EnfermedadesService
    ) { 
      this.getMedicos();
      this.getEnfermedades();
    }

  ngOnInit(): void {
    this.buscarPersonal(Number(this._router.snapshot.paramMap.get('id')));
  }


  async buscarPersonal(pk:number):Promise<void>{
    let valid : boolean = await lastValueFrom(this.personalServicio.existePersonal(pk))
    if(valid){
      this.personal = await lastValueFrom(this.personalServicio.obtenerPersonal(pk));
      this.updateForm()
      this.isExist=valid;
    }else{
      this.isExist=valid;
      this.router.navigate(['index'])
    }
  }

  async getMedicos():Promise<void>{
    this.medicos = await lastValueFrom(this.medicoServicios.obtenerMedicos());
  }

  async getEnfermedades():Promise<void>{
    this.listEnfermedades = await lastValueFrom(this.enfermedadServicio.obtenerEnfermedades());
  }


  formBuilderPersonales = this.fb.group({
    id              : new FormControl(''),
    descripcion     : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(254)]),
    estado          : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(30)]),
    fecha           : new FormControl('',[Validators.required]),
    historia        : this.fb.group({
      id              : new FormControl(''),
      eps             : new FormControl('',),
      paciente        : new FormControl('')
    }),
    medico          : new FormControl(this.personal.medico, Validators.required),
    enfermedades      : this.fb.array([this.fb.group
        ({
          id      : new FormControl('', Validators.required)
        })
      ])
  })

  newEnfermedad():FormGroup{
    return this.fb.group({
          id      : new FormControl('', Validators.required),
          });
  }


  addEnfermedad():void{
    this.enfermedades.push(this.newEnfermedad());
    console.log(this.formBuilderPersonales);
  }

  removeEnfermedad(i:number):void{
    this.enfermedades.removeAt(i);
  }

  get enfermedades(): FormArray{
    return this.formBuilderPersonales.get('enfermedades') as FormArray;
  }
  
  updateForm(): void{
    for (let index = 0; index < this.personal.enfermedades.length; index++) {
      const element = this.formBuilderPersonales.get('enfermedades') as FormArray;
      element.push(this.newEnfermedad());
    }
    this.formBuilderPersonales.patchValue(this.personal);
    this.formBuilderPersonales.get('medico')?.setValue(this.medicos.find(x => x.id == this.personal.medico.id))

  }

  async enviarDatos():Promise<void>{
    let pk = this.formBuilderPersonales.get("id")?.value;
    let dataReturn: boolean | false;
    console.log(this.formBuilderPersonales)
    dataReturn = await lastValueFrom(this.personalServicio.editarPersonal(pk, this.formBuilderPersonales.value))
    console.log(dataReturn);
    if(dataReturn){
      for (let index = 0; index < this.formBuilderPersonales.get("enfermedades")?.value.length; index++) {
        this.removeEnfermedad(index);
      }
      this.formBuilderPersonales.reset();
      this.ngOnInit();
    }
    
  }

}
