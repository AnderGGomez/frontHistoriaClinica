import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonalesService } from '../services/personales.service';
import { MedicosService } from '@utp/medicos';
import { lastValueFrom } from 'rxjs';
import { Personal } from '../model/personal';
import { HistoriaClinicaService } from '../services/historia-clinica.service';
import { EnfermedadesService } from '@utp/enfermedades';


@Component({
  selector: 'lib-agregar-personales',
  templateUrl: './agregar-personales.component.html',
  styleUrls: ['./agregar-personales.component.css']
})
export class AgregarPersonalesComponent implements OnInit {

  public medicos : Array<any> = new Array;
  public listEnfermedades : Array<any> = new Array;

  constructor(
    private _router : ActivatedRoute,
    private fb : FormBuilder,
    private medicoServicios : MedicosService,
    private personalServicio : PersonalesService,
    private historiaServicio : HistoriaClinicaService,
    private enfermedadServicio : EnfermedadesService
    
  ) { 
    this.getMedicos();
    this.getEnfermedades();
  }

  ngOnInit(): void {
    this.setPersonal(Number(this._router.snapshot.paramMap.get('id')));
  }

  public personal:  Personal = new Personal;
  public isExist : boolean = false;

  async setPersonal(pk:number){
    let valid : boolean = await lastValueFrom(this.historiaServicio.existeHistoria(pk))
    if(valid){
      this.personal.historia = await lastValueFrom(this.historiaServicio.obtenerHistoria(pk));
      this.updateForm();
      this.isExist=valid;
    }else{
      this.isExist=valid;
      console.log("esta historia no existe")
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
    this.formBuilderPersonales.patchValue(this.personal);
    this.formBuilderPersonales.get('medico')?.setValue(this.medicos[0]);
    this.formBuilderPersonales.get('fecha')?.setValue(this.calculateDate());
    console.log(this.formBuilderPersonales)
  }

  calculateDate():string{
    let today: Date = new Date();
    return today.toISOString().split("T")[0]
  }

  async enviarDatos(){
    console.log(this.formBuilderPersonales);
    let dataReturn = await lastValueFrom(this.personalServicio.agregarPersonal(this.formBuilderPersonales.value))
    if(dataReturn != null){
      for (let index = 0; index < this.formBuilderPersonales.get("enfermedades")?.value.length; index++) {
        this.removeEnfermedad(index);
      }
      this.formBuilderPersonales.reset();
      this.ngOnInit();
    }
    
  }
}
