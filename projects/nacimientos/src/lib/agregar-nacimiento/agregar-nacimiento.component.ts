import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnfermedadesService } from 'dist/enfermedades/';
import { MedicosService } from 'dist/medicos/';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { Nacimiento } from '../model/nacimiento';
import { HistoriaClinicaService } from '../services/historia-clinica.service';
import { NacimientosService } from '../services/nacimientos.service';

@Component({
  selector: 'lib-agregar-nacimiento',
  templateUrl: './agregar-nacimiento.component.html',
  styleUrls: ['./agregar-nacimiento.component.css']
})
export class AgregarNacimientoComponent implements OnInit {

  public medicos : Array<Medico> = new Array;
  public listEnfermedades : Array<any> = new Array;

  constructor(
    private _router : ActivatedRoute,
    private fb : FormBuilder,
    private router : Router,
    private medicoServicios : MedicosService,
    private nacimientoServicio : NacimientosService,
    private historiaServicio : HistoriaClinicaService,
    private enfermedadServicio : EnfermedadesService
    
  ) { 
    this.getMedicos();
    this.getEnfermedades();
  }

  ngOnInit(): void {
    this.setHistoria(Number(this._router.snapshot.paramMap.get('id')));
  }

  public nacimiento:Nacimiento = new Nacimiento;
  public isExist : boolean = false;

  async setHistoria(pk:number){
    let valid : boolean = await lastValueFrom(this.historiaServicio.existeHistoria(pk))
    if(valid){
      this.nacimiento.historia = await lastValueFrom(this.historiaServicio.obtenerHistoria(pk));
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

  formBuilderNacimiento = this.fb.group({
    id              : new FormControl(''),
    fechaNacimiento : new FormControl('',[Validators.required]),
    tipoParto       : new FormControl('termino',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    tipoNacimiento  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    historia        : this.fb.group({
      id            : new FormControl(''),
      eps           : new FormControl('',),
      paciente      : new FormControl('')
    }),
    medico          : new FormControl(this.nacimiento.medico,Validators.required),
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
  }

  removeEnfermedad(i:number):void{
    this.enfermedades.removeAt(i);
  }

  get enfermedades(): FormArray{
    return this.formBuilderNacimiento.get('enfermedades') as FormArray;
  }

  updateForm(): void{
    this.formBuilderNacimiento.patchValue(this.nacimiento);
    this.formBuilderNacimiento.get('medico')?.setValue(this.medicos[0]);
  }

  async enviarDatos(){
    console.log(this.formBuilderNacimiento);
    let dataReturn = await lastValueFrom(this.nacimientoServicio.agregarNacimiento(this.formBuilderNacimiento.value))
    if(dataReturn != null){
      for (let index = 0; index < this.formBuilderNacimiento.get("enfermedades")?.value.length; index++) {
        this.removeEnfermedad(index);
      }
      this.formBuilderNacimiento.reset();
      this.ngOnInit();
    }else{
      console.log("ya existe un nacimiento.")
      let data : Nacimiento= await lastValueFrom(this.nacimientoServicio.obtenerNacimientoByHistoria(this.nacimiento.historia.id))
      this.router.navigate(['historia-clinica/nacimientos/edit-nacimiento',data.id])
    }
    
  }

}
