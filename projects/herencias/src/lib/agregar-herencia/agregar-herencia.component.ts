import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HerenciasService } from '../services/herencias.service';
import { MedicosService } from '@utp/medicos';
import { lastValueFrom } from 'rxjs';
import { Herencia } from '../model/herencia';
import { HistoriaClinicaService } from '../services/historia-clinica.service';
import { EnfermedadesService } from '@utp/enfermedades';

@Component({
  selector: 'lib-agregar-herencia',
  templateUrl: './agregar-herencia.component.html',
  styleUrls: ['./agregar-herencia.component.css']
})
export class AgregarHerenciaComponent implements OnInit {

  public medicos : Array<any> = new Array;
  public listEnfermedades : Array<any> = new Array;

  constructor(
    private _router : ActivatedRoute,
    private router : Router,
    private fb : FormBuilder,
    private medicoServicios : MedicosService,
    private herenciaServicio : HerenciasService,
    private historiaServicio : HistoriaClinicaService,
    private enfermedadServicio : EnfermedadesService
    
  ) { 
    this.getMedicos();
    this.getEnfermedades();
  }

  ngOnInit(): void {
    this.setHerencia(Number(this._router.snapshot.paramMap.get('id')));
  }

  public herencia:Herencia = new Herencia;
  public isExist : boolean = false;

  async setHerencia(pk:number){
    let valid : boolean = await lastValueFrom(this.historiaServicio.existeHistoria(pk))
    if(valid){
      this.herencia.historia = await lastValueFrom(this.historiaServicio.obtenerHistoria(pk));
      this.updateForm();
      this.isExist=valid;
    }else{
      this.isExist=valid;
      console.log("esta historia no existe")
   }
    
  }

  calculateDate():string{
    let today: Date = new Date();
    return today.toISOString().split("T")[0]
  }

  async getMedicos():Promise<void>{
    this.medicos = await lastValueFrom(this.medicoServicios.obtenerMedicos());
  }

  async getEnfermedades():Promise<void>{
    this.listEnfermedades = await lastValueFrom(this.enfermedadServicio.obtenerEnfermedades());
  }

  formBuilderHerencia = this.fb.group({
    id              : new FormControl(''),
    parentesco      : new FormControl('madre',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    nombre          : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoNombre   : new FormControl('',[Validators.pattern('[a-zA-Z]*'), Validators.minLength(5), Validators.maxLength(15)]),
    primerApellido  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoApellido : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    fechaCreacion   : new FormControl('',[Validators.required]),
    historia        : this.fb.group({
      id              : new FormControl(''),
      eps             : new FormControl('',),
      paciente        : new FormControl('')
    }),
    medico          : new FormControl(this.herencia.medico, Validators.required),
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
    return this.formBuilderHerencia.get('enfermedades') as FormArray;
  }

  updateForm(): void{
    this.formBuilderHerencia.patchValue(this.herencia);
    this.formBuilderHerencia.get('medico')?.setValue(this.medicos[0]);
    this.formBuilderHerencia.get('fechaCreacion')?.setValue(this.calculateDate());
  }

  async enviarDatos(){
    console.log(this.formBuilderHerencia);
    let dataReturn = await lastValueFrom(this.herenciaServicio.agregarHerencia(this.formBuilderHerencia.value))
    if(dataReturn != null){
      for (let index = 0; index < this.formBuilderHerencia.get("enfermedades")?.value.length; index++) {
        this.removeEnfermedad(index);
      }
      this.formBuilderHerencia.reset();
      let pacientePK = this.herencia.historia.paciente.id;
      this.router.navigate(['historia-clinica/query-historia/', pacientePK]);
    }
    
  }

}
