import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicamentosService } from 'dist/medicamentos/';
import { MedicosService } from 'dist/medicos/';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { Farmaco } from '../model/farmaco';
import { HistoriaClinicaService } from '../services/historia-clinica.service';
import { FarmacosService } from '../services/farmacos.service';

@Component({
  selector: 'lib-agregar-farmacos',
  templateUrl: './agregar-farmacos.component.html',
  styleUrls: ['./agregar-farmacos.component.css']
})
export class AgregarFarmacosComponent implements OnInit {
  public medicos : Array<Medico> = new Array;
  public listMedicamentos : Array<any> = new Array;

  constructor(
    private _router : ActivatedRoute,
    private fb : FormBuilder,
    private router : Router,
    private medicoServicios     : MedicosService,
    private farmacoServicio     : FarmacosService,
    private historiaServicio    : HistoriaClinicaService,
    private medicamentoServicio : MedicamentosService
    
  ) { 
    this.getMedicos();
    this.getMedicamentos();
  }

  ngOnInit(): void {
    this.setHistoria(Number(this._router.snapshot.paramMap.get('id')));
  }

  public farmaco  : Farmaco = new Farmaco;
  public isExist  : boolean = false;

  async setHistoria(pk:number){
    let valid : boolean = await lastValueFrom(this.historiaServicio.existeHistoria(pk))
    if(valid){
      this.farmaco.historia = await lastValueFrom(this.historiaServicio.obtenerHistoria(pk));
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

  async getMedicamentos():Promise<void>{
    this.listMedicamentos = await lastValueFrom(this.medicamentoServicio.obtenerMedicamentos());
  }

  formBuilderFarmaco = this.fb.group({
    id              : new FormControl(''),
    prescripcion    : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(254), Validators.pattern('^[#.a-zA-Z0-9\\s-]*')]),
    duracion        : new FormControl('',[Validators.required, Validators.min(0) ,Validators.max(365) ,Validators.pattern('[0-9]*')]),
    fecha           : new FormControl('',[Validators.required]),
    historia        : this.fb.group({
      id            : new FormControl(''),
      eps           : new FormControl('',),
      paciente      : new FormControl('')
    }),
    medico          : new FormControl(this.farmaco.medico,Validators.required),
    medicamentos      : this.fb.array([this.fb.group
        ({
          id      : new FormControl('', Validators.required)
        })
      ])
  })

  newMedicamento():FormGroup{
    return this.fb.group({
          id      : new FormControl('', Validators.required),
          });
  }


  addMedicamento():void{
    this.medicamentos.push(this.newMedicamento());
  }

  removeMedicamento(i:number):void{
    this.medicamentos.removeAt(i);
  }

  get medicamentos(): FormArray{
    return this.formBuilderFarmaco.get('medicamentos') as FormArray;
  }

  updateForm(): void{
    this.formBuilderFarmaco.patchValue(this.farmaco);
    this.formBuilderFarmaco.get('medico')?.setValue(this.medicos[0]);
  }

  async enviarDatos(){
    console.log(this.formBuilderFarmaco);
    let dataReturn = await lastValueFrom(this.farmacoServicio.agregarFarmaco(this.formBuilderFarmaco.value))
    if(dataReturn != null){
      for (let index = 0; index < this.formBuilderFarmaco.get("medicamentos")?.value.length; index++) {
        this.removeMedicamento(index);
      }
      this.formBuilderFarmaco.reset();
      this.ngOnInit();
    } 
  }
}
