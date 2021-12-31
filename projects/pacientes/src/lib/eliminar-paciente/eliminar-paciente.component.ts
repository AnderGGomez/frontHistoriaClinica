import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'lib-eliminar-paciente',
  templateUrl: './eliminar-paciente.component.html',
  styleUrls: ['./eliminar-paciente.component.css']
})
export class EliminarPacienteComponent implements OnInit {

  constructor(
    private pacienteServicio: PacientesService
  ) { }

  ngOnInit(): void {
  }

  public paciente : Paciente = new Paciente;
  public sended   : boolean = false;
  @Output() isDeleted = new EventEmitter<boolean>();

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  formDelete = new FormGroup({
    opcion: new FormControl('', [Validators.required, Validators.pattern('true')])
  })

  async buscarPaciente():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.paciente = await lastValueFrom(this.pacienteServicio.obtenerPaciente(pk))
    this.sended = true;
    this.formQuery.reset();
  }

  async eliminarPaciente():Promise<void>{
    let data = await lastValueFrom(this.pacienteServicio.eliminarPaciente(this.paciente.id))
    if(data){
      console.log(data);
      this.formDelete.reset;
      this.sended=false;
      this.isDeleted.emit(true);
    }
    
  }
}
