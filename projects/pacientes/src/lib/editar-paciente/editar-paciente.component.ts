import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'lib-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  constructor(
    private pacienteServicio: PacientesService
  ) { }

  ngOnInit(): void {
  }

  public paciente: Paciente = new Paciente;
  public sended: boolean = false;
  @Output() isEdited = new EventEmitter<boolean>();

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  formPaciente = new FormGroup({
    id              : new FormControl(''),
    nombre          : new FormControl(this.paciente.nombre,[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoNombre   : new FormControl('',[Validators.pattern('[a-zA-Z]*'), Validators.minLength(5), Validators.maxLength(15)]),
    primerApellido  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoApellido : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    identificacion  : new FormControl('',[Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(15)]),
    fechaNacimiento : new FormControl('',[Validators.required]),
    email           : new FormControl('',[Validators.required, Validators.email, Validators.maxLength(40)]),
    telefono        : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    sexo            : new FormControl('',[Validators.required, Validators.maxLength(1), Validators.pattern('[a-zA-Z]*')]),
    estadoCivil     : new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[a-zA-Z]*')]),
    estrato         : new FormControl('',[Validators.required, Validators.pattern('[0-6]'), Validators.maxLength(1)]),
    ocupacion       : new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]),
    etnia           : new FormControl('No aplica',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z\\s]*')]),
    discapacidad    : new FormControl('No aplica',[Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('^[a-zA-Z\\s]*')]),
    direccion       : new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(20), Validators.pattern('^[#.a-zA-Z0-9\\s-]*')]),
    religion        : new FormControl('No profesa',[Validators.required, Validators.minLength(7), Validators.maxLength(20), Validators.pattern('[a-zA-Z\\s]*')]),
  })

  /**Esta comunicacion se puede hacer hermano-hermano */
  async buscarPaciente():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.paciente = await lastValueFrom(this.pacienteServicio.obtenerPaciente(pk))
    this.sended = true;
    this.formQuery.reset();

    this.updateForm();
  }

  updateForm(): void{
    this.formPaciente.patchValue({
      id              :this.paciente.id,
      nombre          :this.paciente.nombre,
      segundoNombre   :this.paciente.segundoNombre,
      primerApellido  :this.paciente.primerApellido,
      segundoApellido :this.paciente.segundoApellido,
      identificacion  :this.paciente.identificacion,
      fechaNacimiento :this.paciente.fechaNacimiento,
      email           :this.paciente.email,
      telefono        :this.paciente.telefono,
      sexo            :this.paciente.sexo,
      estadoCivil     :this.paciente.estadoCivil,
      estrato         :this.paciente.estrato,
      ocupacion       :this.paciente.ocupacion,
      etnia           :this.paciente.etnia,
      discapacidad    :this.paciente.discapacidad,
      direccion       :this.paciente.direccion,
      religion        :this.paciente.religion,
    });
  }


  async enviarDatos():Promise<void>{
    let pk = this.formPaciente.get("id")?.value;
    let editPaciente : Paciente = new Paciente;
    editPaciente.id               =this.formPaciente.get("id")?.value,
    editPaciente.nombre           =this.formPaciente.get("nombre")?.value;
    editPaciente.segundoNombre    =this.formPaciente.get("segundoNombre")?.value;
    editPaciente.primerApellido   =this.formPaciente.get("primerApellido")?.value;
    editPaciente.segundoApellido  =this.formPaciente.get("segundoApellido")?.value;
    editPaciente.identificacion   =this.formPaciente.get("identificacion")?.value;
    editPaciente.fechaNacimiento  =this.formPaciente.get("fechaNacimiento")?.value;
    editPaciente.email            =this.formPaciente.get("email")?.value;
    editPaciente.telefono         =this.formPaciente.get("telefono")?.value;
    editPaciente.sexo             =this.formPaciente.get("sexo")?.value;
    editPaciente.estadoCivil      =this.formPaciente.get("estadoCivil")?.value;
    editPaciente.estrato          =this.formPaciente.get("estrato")?.value;
    editPaciente.ocupacion        =this.formPaciente.get("ocupacion")?.value;
    editPaciente.etnia            =this.formPaciente.get("etnia")?.value;
    editPaciente.discapacidad     =this.formPaciente.get("discapacidad")?.value;
    editPaciente.direccion        =this.formPaciente.get("direccion")?.value;
    editPaciente.religion         =this.formPaciente.get("religion")?.value;

    this.formPaciente.reset();
    this.sended=false;
    let dataReturn: boolean | false;
    dataReturn = await lastValueFrom(this.pacienteServicio.editarPaciente(pk, editPaciente))
    if(dataReturn){
      this.isEdited.emit(true);
    }
    console.log(dataReturn)
  }


}
