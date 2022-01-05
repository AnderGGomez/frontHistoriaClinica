import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnfermedadesService } from '@utp/enfermedades';
import { MedicosService } from '@utp/medicos';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { Nacimiento } from '../model/nacimiento';
import { NacimientosService } from '../services/nacimientos.service';

@Component({
  selector: 'lib-editar-nacimiento',
  templateUrl: './editar-nacimiento.component.html',
  styleUrls: ['./editar-nacimiento.component.css']
})
export class EditarNacimientoComponent implements OnInit {
  public nacimiento: Nacimiento = new Nacimiento;
  public listEnfermedades : Array<any> = new Array;
  public medicos : Array<Medico> = new Array;
  public isExist: boolean = false;
  public update: boolean = true;

  constructor(
    private nacimientoServicio  : NacimientosService,
    private fb                  : FormBuilder,
    private _router             : ActivatedRoute,
    private router              : Router,
    private medicoServicios     : MedicosService,
    private enfermedadServicio  : EnfermedadesService
    ) { 
      this.getMedicos();
      this.getEnfermedades();
    }

  ngOnInit(): void {
    this.buscarNacimiento(Number(this._router.snapshot.paramMap.get('id')));
  }

  async buscarNacimiento(pk:number):Promise<void>{
    let valid : boolean = await lastValueFrom(this.nacimientoServicio.existeNacimiento(pk))
    if(valid){
      this.nacimiento= await lastValueFrom(this.nacimientoServicio.obtenerNacimiento(pk));
      this.updateForm();
      this.isExist=valid;
    }else{
      this.isExist=valid;
      console.log("esta nacimiento no existe")    
   }
  }

  async getMedicos():Promise<void>{
    this.medicos = await lastValueFrom(this.medicoServicios.obtenerMedicos());
  }

  async getEnfermedades():Promise<void>{
    this.listEnfermedades = await lastValueFrom(this.enfermedadServicio.obtenerEnfermedades());
  }


  formBuilderNacimiento = this.fb.group({
    id              : new FormControl(''),
    fechaNacimiento : new FormControl('',[Validators.required]),
    tipoParto       : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    tipoNacimiento  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    historia        : this.fb.group({
      id              : new FormControl(''),
      eps             : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(3), Validators.maxLength(15)]),
      paciente        : new FormControl('')
    }),
    medico            : new FormControl(this.nacimiento.medico, Validators.required),
    enfermedades      : this.fb.array([this.fb.group({
      id      : new FormControl('', Validators.required),
      })
    ])

  })

  newEnfermedad():FormGroup{
    return this.fb.group({
          id      : new FormControl('', Validators.required),
          });
  }

  addEnfermedad():void{
    this.enfermedades.push(this.newEnfermedad())
  }

  removeEnfermedad(i:number):void{
    this.enfermedades.removeAt(i);
  }

  get enfermedades(): FormArray{
    return this.formBuilderNacimiento.get('enfermedades') as FormArray;
  }
  
  updateForm(): void{
    for (let index = 0; index < this.nacimiento.enfermedades.length; index++) {
      const element = this.formBuilderNacimiento.get('enfermedades') as FormArray;
      element.push(this.newEnfermedad());
    }
    this.formBuilderNacimiento.patchValue(this.nacimiento);
    this.formBuilderNacimiento.get('medico')?.setValue(this.medicos.find(x => x.id == this.nacimiento.medico.id))
  
    console.log(this.formBuilderNacimiento)
    console.log(this.nacimiento)
  }

  async enviarDatos():Promise<void>{
    let pk = this.formBuilderNacimiento.get("id")?.value;
    let dataReturn: boolean | false;
    console.log(this.formBuilderNacimiento)
    dataReturn = await lastValueFrom(this.nacimientoServicio.editarNacimiento(pk, this.formBuilderNacimiento.value))
    console.log(dataReturn);
    if(dataReturn){
      for (let index = 0; index < this.formBuilderNacimiento.get("enfermedades")?.value.length; index++) {
        this.removeEnfermedad(index);
      }
      this.formBuilderNacimiento.reset();
      this.ngOnInit();
    }
    
  }

}
