import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'lib-ver-pacientes',
  templateUrl: './ver-pacientes.component.html',
  styleUrls: ['./ver-pacientes.component.css']
})
export class VerPacientesComponent implements OnInit {

  constructor(
    private pacienteServicio : PacientesService
  ) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }
  public pacientes: Array<Paciente> = new Array();
  @Input() update : boolean | undefined;

  ngOnChanges(changes: SimpleChange){
    this.obtenerPacientes();
  }
  
  async obtenerPacientes():Promise<void>{
    this.pacientes = await lastValueFrom(this.pacienteServicio.obtenerPacientes())
  }
}
