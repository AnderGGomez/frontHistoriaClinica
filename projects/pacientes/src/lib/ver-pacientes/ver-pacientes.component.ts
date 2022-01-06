import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'lib-ver-pacientes',
  templateUrl: './ver-pacientes.component.html',
  styleUrls: ['./ver-pacientes.component.css']
})
export class VerPacientesComponent implements OnInit {
  cols: any[] | undefined;
  constructor(
    private pacienteServicio : PacientesService,
    private router : Router
  ) { 
    this.cols = [
      { field: 'id',              header: 'Identificacion' },
      { field: 'nombre',          header: 'Nombre' },
      { field: 'segundoNombre',   header: 'S. Nombre' },
      { field: 'primerApellido',  header: 'Apellido' },
      { field: 'segundoApellido', header: 'S. Apellido' },
      { field: 'identificacion',  header: 'CC' },
      { field: 'fechaNacimiento', header: 'fecha nacimiento' },
      { field: 'email',           header: 'email' },
    ];
  }

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
  verHistoria(paciente: Paciente){
    this.router.navigate(['historia-clinica/query-historia', paciente.id])
  }
}
