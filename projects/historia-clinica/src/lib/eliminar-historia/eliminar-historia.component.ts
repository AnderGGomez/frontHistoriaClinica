import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Historia } from '../model/historia';
import { HistoriaClinicaService } from '../services/historia-clinica.service';

@Component({
  selector: 'lib-eliminar-historia',
  templateUrl: './eliminar-historia.component.html',
  styleUrls: ['./eliminar-historia.component.css']
})
export class EliminarHistoriaComponent implements OnInit {
  constructor(
    private historiaServicio : HistoriaClinicaService
  ) { }

  ngOnInit(): void {
  }

  public historia : Historia = new Historia;
  public sended   : boolean = false;
  public exist    : boolean = true;

  @Output() isEliminated = new EventEmitter<boolean>();


  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  formDelete = new FormGroup({
    opcion: new FormControl('', [Validators.required, Validators.pattern('true')])
  })

  async buscarHistoria():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.historia = await lastValueFrom(this.historiaServicio.obtenerHistoria(pk))
    if(this.historia != null)
    {
      this.sended = true;
      this.formQuery.reset();
      this.exist  = true;
    }else{
      this.exist  = false;
    }
    
  }

  async eliminarHistoria():Promise<void>{

    if(this.formDelete.get("opcion")?.value=='true'){
      let data = await lastValueFrom(this.historiaServicio.eliminarHistoria(this.historia.id))
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
