import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Medicamento } from '../model/medicamento';
import { MedicamentosService } from '../services/medicamentos.service';


@Component({
  selector: 'lib-eliminar-medicamento',
  templateUrl: './eliminar-medicamento.component.html',
  styleUrls: ['./eliminar-medicamento.component.css']
})
export class EliminarMedicamentoComponent implements OnInit {
  constructor(private medicamentoServicio: MedicamentosService) { }

  ngOnInit(): void {
  }

  public medicamento: Medicamento = new Medicamento;
  public sended     : boolean     = false;
  @Output() isDeleted = new EventEmitter<boolean>();


  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  formDelete = new FormGroup({
    opcion: new FormControl('', [Validators.required, Validators.pattern('true')])
  })

  async buscarMedicamento():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.medicamento = await lastValueFrom(this.medicamentoServicio.obtenerMedicamento(pk))
    this.sended = true;
    this.formQuery.reset();
  }

  async eliminarMedicamento():Promise<void>{

    if(this.formDelete.get("opcion")?.value=='true'){
      let data = await lastValueFrom(this.medicamentoServicio.eliminarMedicamento(this.medicamento.id))
      if(data){
        this.isDeleted.emit(true);
        this.formDelete.reset
        this.sended=false;
      }
    }else{
      this.sended=true;
    }
    
  }


}
