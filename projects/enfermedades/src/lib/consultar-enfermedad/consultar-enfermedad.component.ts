import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Enfermedad } from '../model/enfermedad';
import { EnfermedadesService } from '../services/enfermedades.service';

@Component({
  selector: 'lib-consultar-enfermedad',
  templateUrl: './consultar-enfermedad.component.html',
  styleUrls: ['./consultar-enfermedad.component.css']
})
export class ConsultarEnfermedadComponent implements OnInit {

  constructor(private enfermedadServicio: EnfermedadesService) { }

  ngOnInit(): void {
  }

  public enfermedad : Enfermedad = new Enfermedad;
  public sended     : boolean    = false;

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  async buscarEnfermedad():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.enfermedad = await lastValueFrom(this.enfermedadServicio.obtenerEnfermedad(pk))
    this.sended = true;
  }


}
