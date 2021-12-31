import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Medicamento } from '../model/medicamento';
import { MedicamentosService } from '../services/medicamentos.service';

@Component({
  selector: 'lib-agregar-medicamento',
  templateUrl: './agregar-medicamento.component.html',
  styleUrls: ['./agregar-medicamento.component.css']
})
export class AgregarMedicamentoComponent implements OnInit {

  constructor(
    private medicamentoServicio : MedicamentosService
  ) { }

  ngOnInit(): void {
  }

  @Output() isAdded = new EventEmitter<boolean>();

  formMedicamento = new FormGroup({
    id              : new FormControl(''),
    nombre          : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(20)]),
    marca           : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(20)]),
    dosis           : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9\\s]*'), Validators.minLength(3), Validators.maxLength(40)]),
    presentacion    : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(20)]),
    fechaCaducidad  : new FormControl('',[Validators.required]),
  })

  async enviarDatos():Promise<void>{
    let medicamento : Medicamento = new Medicamento;
    medicamento.nombre          = this.formMedicamento.get("nombre")?.value;
    medicamento.marca           = this.formMedicamento.get("marca")?.value;
    medicamento.dosis           = this.formMedicamento.get("dosis")?.value;
    medicamento.presentacion    = this.formMedicamento.get("presentacion")?.value;
    medicamento.fechaCaducidad  = this.formMedicamento.get("fechaCaducidad")?.value;

    this.formMedicamento.reset()

    let dataReturn = await lastValueFrom(this.medicamentoServicio.agregarMedicamento(medicamento))
    if(dataReturn != undefined){
      this.isAdded.emit(true);
      console.log(dataReturn)
    }
  }
}
