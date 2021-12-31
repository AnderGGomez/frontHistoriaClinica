import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Medicamento } from '../model/medicamento';
import { MedicamentosService } from '../services/medicamentos.service';


@Component({
  selector: 'lib-editar-medicamento',
  templateUrl: './editar-medicamento.component.html',
  styleUrls: ['./editar-medicamento.component.css']
})
export class EditarMedicamentoComponent implements OnInit {
  constructor(private medicamentoServicio: MedicamentosService) { }

  ngOnInit(): void {
  }
  public medicamento  : Medicamento = new Medicamento;
  public sended       : boolean     = false;

  @Output() isEdited = new EventEmitter<boolean>();


  formMedicamento = new FormGroup({
    id              : new FormControl(''),
    nombre          : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(20)]),
    marca           : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(20)]),
    dosis           : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9\\s]*'), Validators.minLength(3), Validators.maxLength(40)]),
    presentacion    : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(20)]),
    fechaCaducidad  : new FormControl('',[Validators.required]),
  })

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  async buscarMedicamento():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.medicamento = await lastValueFrom(this.medicamentoServicio.obtenerMedicamento(pk))
    this.sended = true;
    this.formQuery.reset();
    this.updateForm();
  }

  updateForm(): void{
      this.formMedicamento.patchValue({
        id              : this.medicamento.id,
        nombre          : this.medicamento.nombre,
        marca           : this.medicamento.marca,
        dosis           : this.medicamento.dosis,
        presentacion    : this.medicamento.presentacion,
        fechaCaducidad  : this.medicamento.fechaCaducidad,
      })
  }

  async enviarDatos():Promise<void>{
    let pk = this.formMedicamento.get("id")?.value;
    let editMedicamento : Medicamento = new Medicamento;

    editMedicamento.id              =this.formMedicamento.get("id")?.value;
    editMedicamento.nombre          = this.formMedicamento.get("nombre")?.value;
    editMedicamento.marca           = this.formMedicamento.get("marca")?.value;
    editMedicamento.dosis           = this.formMedicamento.get("dosis")?.value;
    editMedicamento.presentacion    = this.formMedicamento.get("presentacion")?.value;
    editMedicamento.fechaCaducidad  = this.formMedicamento.get("fechaCaducidad")?.value;

    this.formMedicamento.reset()

    let dataReturn = await lastValueFrom(this.medicamentoServicio.editarMedicamento(pk, editMedicamento))
    if(dataReturn){
      this.isEdited.emit(true);
      console.log(dataReturn)
    }
  }
}
