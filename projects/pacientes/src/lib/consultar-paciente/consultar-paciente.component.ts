import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'lib-consultar-paciente',
  templateUrl: './consultar-paciente.component.html',
  styleUrls: ['./consultar-paciente.component.css']
})
export class ConsultarPacienteComponent implements OnInit {

  cols: any[] | undefined;
  constructor(
    private pacienteServicio: PacientesService,
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
  }

  public pacientes: Array<Paciente> = new Array();
  public sended: boolean = false;

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  async buscarPaciente():Promise<void>{
      this.pacientes.pop();
      let pk = this.formQuery.get("id")?.value;
      let data: Paciente = new Paciente;
      
      data = await lastValueFrom(this.pacienteServicio.obtenerPaciente(pk));
      this.pacientes.push(data)
      this.sended = true;
    }

  verHistoria(paciente: Paciente){
    this.router.navigate(['historia-clinica/query-historia', paciente.id])
  }

}
