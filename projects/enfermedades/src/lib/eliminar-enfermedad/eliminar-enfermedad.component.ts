import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Enfermedad } from '../model/enfermedad';
import { EnfermedadesService } from '../services/enfermedades.service';

@Component({
  selector: 'lib-eliminar-enfermedad',
  templateUrl: './eliminar-enfermedad.component.html',
  styleUrls: ['./eliminar-enfermedad.component.css']
})
export class EliminarEnfermedadComponent implements OnInit {

  constructor(
    private enfermedadServicio : EnfermedadesService
  ) { }

  ngOnInit(): void {
  }

  public enfermedad : Enfermedad = new Enfermedad;
  public sended   : boolean = false;

  @Output() isEliminated = new EventEmitter<boolean>();


  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  formDelete = new FormGroup({
    opcion: new FormControl('', [Validators.required, Validators.pattern('true')])
  })

  async buscarEnfermedad():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.enfermedad = await lastValueFrom(this.enfermedadServicio.obtenerEnfermedad(pk))
    this.sended = true;
    this.formQuery.reset();
  }

  async eliminarEnfermedad():Promise<void>{

    if(this.formDelete.get("opcion")?.value=='true'){
      let data = await lastValueFrom(this.enfermedadServicio.eliminarEnfermedad(this.enfermedad.id))
      if(data){
        this.isEliminated.emit(true);
        this.formDelete.reset
        this.sended=false;
      }
    }else{
      this.sended=true;
    }
    
  }
}
