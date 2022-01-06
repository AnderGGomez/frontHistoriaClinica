import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'lib-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit {
  constructor(
    private medicoServicio: MedicosService
  ) { 
  }

  ngOnInit(): void {
  }

  @Output() isAdded = new EventEmitter<boolean>();

  formMedico = new FormGroup({
    nombre          : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoNombre   : new FormControl('',[Validators.pattern('[a-zA-Z]*'), Validators.minLength(5), Validators.maxLength(15)]),
    primerApellido  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    segundoApellido : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)]),
    identificacion  : new FormControl('',[Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(15)]),
    fechaNacimiento : new FormControl('',[Validators.required]),
    email           : new FormControl('',[Validators.required, Validators.email, Validators.maxLength(40)]),
    telefono        : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    sexo            : new FormControl('',[Validators.required, Validators.maxLength(1), Validators.pattern('[a-zA-Z]*')]),
    especialidad    : new FormControl('cirujano',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z\\s]*')]),
    cargo           : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z\\s]*')]),
    ips             : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z\\s]*')]),
  })

  async enviarDatos():Promise<void>{
    let dataReturn = await lastValueFrom(this.medicoServicio.agregarMedico(this.formMedico.value))
    if(dataReturn != null){
      this.formMedico.reset();
      this.isAdded.emit(true);
    }
  }

}
