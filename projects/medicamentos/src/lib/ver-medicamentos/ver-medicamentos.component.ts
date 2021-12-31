import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Medicamento } from '../model/medicamento';
import { MedicamentosService } from '../services/medicamentos.service';


@Component({
  selector: 'lib-ver-medicamentos',
  templateUrl: './ver-medicamentos.component.html',
  styleUrls: ['./ver-medicamentos.component.css']
})
export class VerMedicamentosComponent implements OnInit {

  constructor(
    private medicamentoServicio : MedicamentosService
  ) { }

  ngOnInit(): void {
  }
  public medicamentos: Array<Medicamento> = new Array();
  @Input() update : boolean | undefined;

  ngOnChanges(changes:SimpleChange){
    this.obtenerMedicamentos();
  }

  async obtenerMedicamentos():Promise<void>{
    this.medicamentos = await lastValueFrom(this.medicamentoServicio.obtenerMedicamentos())
  }
}
