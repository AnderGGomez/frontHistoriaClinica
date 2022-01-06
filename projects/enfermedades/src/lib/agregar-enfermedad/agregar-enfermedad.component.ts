import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Enfermedad } from '../model/enfermedad';
import { EnfermedadesService } from '../services/enfermedades.service';

@Component({
  selector: 'lib-agregar-enfermedad',
  templateUrl: './agregar-enfermedad.component.html',
  styleUrls: ['./agregar-enfermedad.component.css']
})
export class AgregarEnfermedadComponent implements OnInit {


  constructor(private enfermedadServicio : EnfermedadesService) { }

  ngOnInit(): void {
  }

  @Output() isAdded = new EventEmitter<boolean>();

  formEnfermedad = new FormGroup({
    id      : new FormControl(''),
    nombre  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(30)]),
    tipo    : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(20)]),
  })

  async enviarDatos():Promise<void>{
    
    let dataReturn = await lastValueFrom(this.enfermedadServicio.agregarEnfermedad(this.formEnfermedad.value));
    if(dataReturn != null){
      this.formEnfermedad.reset()
      console.log(dataReturn)
      this.isAdded.emit(true);
    }
    
  }

}
