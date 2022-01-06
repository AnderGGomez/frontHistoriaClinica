import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicosService } from '@utp/medicos';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { Farmaco } from '../model/farmaco';
import { FarmacosService } from '../services/farmacos.service';
import { MedicamentosService } from '@utp/medicamentos';


@Component({
  selector: 'lib-editar-farmacos',
  templateUrl: './editar-farmacos.component.html',
  styleUrls: ['./editar-farmacos.component.css']
})
export class EditarFarmacosComponent implements OnInit {
  public farmaco: Farmaco = new Farmaco;
  public listMedicamentos : Array<any> = new Array;
  public medicos : Array<Medico> = new Array;
  public isExist: boolean = false;
  public update: boolean = true;

  constructor(
    private farmacoServicio     : FarmacosService,
    private fb                  : FormBuilder,
    private _router             : ActivatedRoute,
    private router              : Router,
    private medicoServicios     : MedicosService,
    private medicamentoServicio : MedicamentosService
    ) { 
      this.getMedicos();
      this.getMedicamentos();
    }

  ngOnInit(): void {
    this.buscarFarmaco(Number(this._router.snapshot.paramMap.get('id')));
  }

  async buscarFarmaco(pk:number):Promise<void>{
    let valid : boolean = await lastValueFrom(this.farmacoServicio.existeFarmaco(pk))
    if(valid){
      this.farmaco= await lastValueFrom(this.farmacoServicio.obtenerFarmaco(pk));
      this.updateForm();
      this.isExist=valid;
    }else{
      this.isExist=valid;
      console.log("este antecedente farmacologico no existe")    
   }
  }

  calculateDate():string{
    let today: Date = new Date();
    return today.toISOString().split("T")[0]
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
    for (let index = 0; index < this.farmaco.medicamentos.length; index++) {
      const element = this.formBuilderFarmaco.get('medicamentos') as FormArray;
      element.push(this.newMedicamento());
    }
    this.formBuilderFarmaco.patchValue(this.farmaco);
    this.formBuilderFarmaco.get('medico')?.setValue(this.medicos.find(x => x.id == this.farmaco.medico.id))
    this.formBuilderFarmaco.get('fecha')?.setValue(this.calculateDate());
  }

  async enviarDatos():Promise<void>{
    let pk = this.formBuilderFarmaco.get("id")?.value;
    let paciente = this.farmaco.historia.paciente.id;
    let dataReturn: boolean | false;
    dataReturn = await lastValueFrom(this.farmacoServicio.editarFarmaco(pk, this.formBuilderFarmaco.value))
    console.log(dataReturn);
    if(dataReturn){
      for (let index = 0; index < this.formBuilderFarmaco.get("medicamentos")?.value.length; index++) {
        this.removeMedicamento(index);
      }
      this.formBuilderFarmaco.reset();
      this.router.navigate(['historia-clinica/query-historia/', paciente]);
    }
    
  }

}
