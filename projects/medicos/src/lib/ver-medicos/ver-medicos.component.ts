import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'lib-ver-medicos',
  templateUrl: './ver-medicos.component.html',
  styleUrls: ['./ver-medicos.component.css']
})
export class VerMedicosComponent implements OnInit {

  constructor(
    private medicoServicio: MedicosService
  ) { }

  ngOnInit(): void {
    this.obtenerMedicos();
  }

  public medicos: Array<Medico> = new Array();
  @Input() update: boolean | undefined;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.obtenerMedicos();
  }
  async obtenerMedicos(): Promise<void> {
    this.medicos = await lastValueFrom(this.medicoServicio.obtenerMedicos())
  }

}
