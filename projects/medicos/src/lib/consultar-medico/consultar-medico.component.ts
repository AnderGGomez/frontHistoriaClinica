import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'lib-consultar-medico',
  templateUrl: './consultar-medico.component.html',
  styleUrls: ['./consultar-medico.component.css']
})
export class ConsultarMedicoComponent implements OnInit {

  constructor(
    private medicoServicio: MedicosService
  ) { }

  ngOnInit(): void {
  }
  
  public medico: Medico = new Medico;
  public sended: boolean = false;

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  async buscarMedico():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.medico = await lastValueFrom(this.medicoServicio.obtenerMedico(pk))
    this.sended = true;
  }

}
