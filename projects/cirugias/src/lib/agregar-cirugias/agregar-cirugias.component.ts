import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CirugiasService } from '../services/cirugias.service';
import { MedicosService } from 'dist/medicos/';
import { lastValueFrom } from 'rxjs';
import { Cirugia } from '../model/cirugia';
import { HistoriaClinicaService } from '../services/historia-clinica.service';


@Component({
  selector: 'lib-agregar-cirugias',
  templateUrl: './agregar-cirugias.component.html',
  styleUrls: ['./agregar-cirugias.component.css']
})
export class AgregarCirugiasComponent implements OnInit {

  public medicos : Array<any> = new Array;

  constructor(
    private _router : ActivatedRoute,
    private fb : FormBuilder,
    private medicoServicios : MedicosService,
    private cirugiaServicio : CirugiasService,
    private historiaServicio : HistoriaClinicaService,
  ) { 
    this.getMedicos();
  }

  ngOnInit(): void {
    this.setCirugia(Number(this._router.snapshot.paramMap.get('id')));
  }

  public cirugia:Cirugia = new Cirugia;
  public isExist : boolean = false;

  async setCirugia(pk:number){
    let valid : boolean = await lastValueFrom(this.historiaServicio.existeHistoria(pk))
    if(valid){
      this.cirugia.historia = await lastValueFrom(this.historiaServicio.obtenerHistoria(pk));
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

  formBuilderCirugia = this.fb.group({
    id              : new FormControl(''),
    fechaProcedimiento      : new FormControl('',Validators.required),
    procedimiento           : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(5), Validators.maxLength(50)]),
    descripcion             : new FormControl('',[Validators.required, Validators.pattern('[#.a-zA-Z0-9\\s-]*'), Validators.minLength(5), Validators.maxLength(254)]),
    fechaCreacion           : new FormControl('',Validators.required),
    historia                : this.fb.group({
      id              : new FormControl(''),
      eps             : new FormControl('',),
      paciente        : new FormControl('')
    }),
    medico                  : new FormControl(this.cirugia.medico, Validators.required),
  })

  updateForm(): void{
    this.formBuilderCirugia.patchValue(this.cirugia);
    this.formBuilderCirugia.get('medico')?.setValue(this.medicos[0]);
  }

  async enviarDatos(){
    console.log(this.formBuilderCirugia);
    let dataReturn = await lastValueFrom(this.cirugiaServicio.agregarCirugia(this.formBuilderCirugia.value))
    if(dataReturn != null){
      this.formBuilderCirugia.reset();
      this.ngOnInit();
    }
    
  }

}