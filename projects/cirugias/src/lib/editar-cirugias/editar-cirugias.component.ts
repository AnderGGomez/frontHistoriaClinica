import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CirugiasService } from '../services/cirugias.service';
import { MedicosService } from '@utp/medicos';
import { lastValueFrom } from 'rxjs';
import { Cirugia } from '../model/cirugia';

@Component({
  selector: 'lib-editar-cirugias',
  templateUrl: './editar-cirugias.component.html',
  styleUrls: ['./editar-cirugias.component.css']
})
export class EditarCirugiasComponent implements OnInit {

  public medicos : Array<any> = new Array;
  dia : string | undefined;

  constructor(
    private _router : ActivatedRoute,
    private fb : FormBuilder,
    private medicoServicios : MedicosService,
    private cirugiaServicio : CirugiasService,
  ) { 
    this.dia = this.calculateDate();
    this.getMedicos();
  }

  ngOnInit(): void {
    this.setCirugia(Number(this._router.snapshot.paramMap.get('id')));
  }

  public cirugia:Cirugia = new Cirugia;
  public isExist : boolean = false;

  async setCirugia(pk:number){
    let valid : boolean = await lastValueFrom(this.cirugiaServicio.existeCirugia(pk))
    if(valid){
      this.cirugia = await lastValueFrom(this.cirugiaServicio.obtenerCirugia(pk));
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
    this.formBuilderCirugia.get('medico')?.setValue(this.medicos.find(x => x.id == this.cirugia.medico.id))
    this.formBuilderCirugia.get('fechaCreacion')?.setValue(this.calculateDate());

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
