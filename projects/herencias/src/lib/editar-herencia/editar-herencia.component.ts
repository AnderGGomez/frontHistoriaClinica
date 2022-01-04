import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Herencia } from '../model/herencia';
import { HerenciasService } from '../services/herencias.service';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnfermedadesService } from 'dist/enfermedades/';
import { MedicosService } from 'dist/medicos/';
import { Medico } from '../model/medico';

@Component({
  selector: 'lib-editar-herencia',
  templateUrl: './editar-herencia.component.html',
  styleUrls: ['./editar-herencia.component.css']
})


export class EditarHerenciaComponent implements OnInit {

  public herencia: Herencia = new Herencia;
  public listEnfermedades : Array<any> = new Array;
  public medicos : Array<Medico> = new Array;
  public sended: boolean = false;
  public update: boolean = true;

  constructor(
    private herenciaServicio: HerenciasService,
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
    this.buscarHerencia(Number(this._router.snapshot.paramMap.get('id')));
  }


  async buscarHerencia(pk:number):Promise<void>{
    this.herencia = await lastValueFrom(this.herenciaServicio.obtenerHerencia(pk));
    if(this.herencia != null){
      this.updateForm()
    }else{
      /**Manejo de error */
      this.router.navigate(['index'])
    }
  }

  async getMedicos():Promise<void>{
    this.medicos = await lastValueFrom(this.medicoServicios.obtenerMedicos());
  }

  async getEnfermedades():Promise<void>{
    this.listEnfermedades = await lastValueFrom(this.enfermedadServicio.obtenerEnfermedades());
  }


  formBuilderHerencia = this.fb.group({
    id              : new FormControl(''),
    parentesco      : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    nombre          : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoNombre   : new FormControl('',[Validators.pattern('[a-zA-Z]*'), Validators.minLength(5), Validators.maxLength(15)]),
    primerApellido  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoApellido : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    fechaCreacion   : new FormControl('',[Validators.required]),
    historia        : this.fb.group({
      id              : new FormControl(''),
      eps             : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(3), Validators.maxLength(15)]),
      paciente        : new FormControl('')
    }),
    medico            : new FormControl(this.herencia.medico, Validators.required),
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
    return this.formBuilderHerencia.get('enfermedades') as FormArray;
  }
  
  updateForm(): void{
    for (let index = 0; index < this.herencia.enfermedades.length; index++) {
      const element = this.formBuilderHerencia.get('enfermedades') as FormArray;
      element.push(this.newEnfermedad());
    }
    this.formBuilderHerencia.patchValue(this.herencia);
    this.formBuilderHerencia.get('medico')?.setValue(this.medicos.find(x => x.id == this.herencia.medico.id))

  }

  async enviarDatos():Promise<void>{
    let pk = this.formBuilderHerencia.get("id")?.value;
    let dataReturn: boolean | false;
    console.log(this.formBuilderHerencia)
    dataReturn = await lastValueFrom(this.herenciaServicio.editarHerencia(pk, this.formBuilderHerencia.value))
    console.log(dataReturn);
    if(dataReturn){
      for (let index = 0; index < this.formBuilderHerencia.get("enfermedades")?.value.length; index++) {
        this.removeEnfermedad(index);
      }
      this.formBuilderHerencia.reset();
      this.ngOnInit();
    }
    
  }

}
