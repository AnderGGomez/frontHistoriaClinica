import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'lib-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.css']
})

export class AgregarPacienteComponent implements OnInit {

  constructor(
    private pacienteServicio: PacientesService
  ) { }

  ngOnInit(): void {
  }

  @Output() isAdded = new EventEmitter<boolean>();

  formPaciente = new FormGroup({
    nombre          : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoNombre   : new FormControl('',[Validators.pattern('[a-zA-Z]*'), Validators.minLength(5), Validators.maxLength(15)]),
    primerApellido  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoApellido : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    identificacion  : new FormControl('',[Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(15)]),
    fechaNacimiento : new FormControl('',[Validators.required]),
    email           : new FormControl('',[Validators.required, Validators.email, Validators.maxLength(40)]),
    telefono        : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    sexo            : new FormControl('',[Validators.required, Validators.maxLength(1), Validators.pattern('[a-zA-Z]*')]),
    estadoCivil     : new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern('[a-zA-Z]*')]),
    estrato         : new FormControl('',[Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(1)]),
    ocupacion       : new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]),
    etnia           : new FormControl('No aplica',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z\\s]*')]),
    discapacidad    : new FormControl('No aplica',[Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('^[a-zA-Z\\s]*')]),
    direccion       : new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(20), Validators.pattern('^[#.a-zA-Z0-9\\s-]*')]),
    religion        : new FormControl('No profesa',[Validators.required, Validators.minLength(7), Validators.maxLength(20), Validators.pattern('[a-zA-Z\\s]*')]),
  })


  async enviarDatos():Promise<void>{
    let paciente : Paciente = new Paciente;
    paciente.nombre=this.formPaciente.get("nombre")?.value;
    paciente.segundoNombre=this.formPaciente.get("segundoNombre")?.value;
    paciente.primerApellido=this.formPaciente.get("primerApellido")?.value;
    paciente.segundoApellido=this.formPaciente.get("segundoApellido")?.value;
    paciente.identificacion=this.formPaciente.get("identificacion")?.value;
    paciente.fechaNacimiento=this.formPaciente.get("fechaNacimiento")?.value;
    paciente.email=this.formPaciente.get("email")?.value;
    paciente.telefono=this.formPaciente.get("telefono")?.value;
    paciente.sexo=this.formPaciente.get("sexo")?.value;
    paciente.estadoCivil=this.formPaciente.get("estadoCivil")?.value;
    paciente.estrato=this.formPaciente.get("estrato")?.value;
    paciente.ocupacion=this.formPaciente.get("ocupacion")?.value;
    paciente.etnia=this.formPaciente.get("etnia")?.value;
    paciente.discapacidad=this.formPaciente.get("discapacidad")?.value;
    paciente.direccion=this.formPaciente.get("direccion")?.value;
    paciente.religion=this.formPaciente.get("religion")?.value;

    this.formPaciente.reset();
    let dataReturn: Paciente = new Paciente;

    dataReturn = await lastValueFrom(this.pacienteServicio.agregarPaciente(paciente))
    if(dataReturn != null){
      this.isAdded.emit(true);
      console.log(dataReturn);
    }
    

  }



}

