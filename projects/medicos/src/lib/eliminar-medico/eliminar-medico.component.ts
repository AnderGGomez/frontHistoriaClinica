import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'lib-eliminar-medico',
  templateUrl: './eliminar-medico.component.html',
  styleUrls: ['./eliminar-medico.component.css']
})
export class EliminarMedicoComponent implements OnInit {

  constructor(private medicoServicio: MedicosService) { }

  ngOnInit(): void {
  }

  public medico : Medico  = new Medico;
  public sended : boolean = false;
  @Output() isDelete = new EventEmitter<boolean>();



  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  formDelete = new FormGroup({
    opcion: new FormControl('', [Validators.required, Validators.pattern('true')])
  })

  async buscarPaciente():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.medico = await lastValueFrom(this.medicoServicio.obtenerMedico(pk))
    this.sended = true;
    this.formQuery.reset();
  }

  async eliminarMedico():Promise<void>{
    let data = await lastValueFrom(this.medicoServicio.eliminarMedico(this.medico.id))
    if(data){
      this.isDelete.emit(true);
      this.formDelete.reset
      this.sended=false;
    }
    
  }

}
