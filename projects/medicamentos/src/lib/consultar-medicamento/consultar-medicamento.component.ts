import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Medicamento } from '../model/medicamento';
import { MedicamentosService } from '../services/medicamentos.service';


@Component({
  selector: 'lib-consultar-medicamento',
  templateUrl: './consultar-medicamento.component.html',
  styleUrls: ['./consultar-medicamento.component.css']
})
export class ConsultarMedicamentoComponent implements OnInit {

  constructor(private medicamentoServicio: MedicamentosService) { }

  ngOnInit(): void {
  }

  public medicamento : Medicamento = new Medicamento;
  public sended      : boolean     = false;

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  async buscarMedicamento():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.medicamento = await lastValueFrom(this.medicamentoServicio.obtenerMedicamento(pk))
    this.sended = true;
  }

}
