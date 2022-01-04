import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Historia } from '../model/historia';
import { HistoriaClinicaService } from '../services/historia-clinica.service';

@Component({
  selector: 'lib-editar-historia',
  templateUrl: './editar-historia.component.html',
  styleUrls: ['./editar-historia.component.css']
})
export class EditarHistoriaComponent implements OnInit {
  constructor(
    private historiaServicio: HistoriaClinicaService
  ) { }

  ngOnInit(): void {
  }
  public historia   : Historia  = new Historia;
  public sended     : boolean   = false;
  public exist      : boolean   = true;

  @Output() isEdit = new EventEmitter<boolean>();

  formHistoria = new FormGroup({
    id      : new FormControl(''),
    eps  : new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(15)]),
  })

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  async buscarHistoria():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.historia = await lastValueFrom(this.historiaServicio.obtenerHistoria(pk))
    if(this.historia != null){
      this.sended = true;
      this.formQuery.reset()
    }else{
      this.exist = false;
    }

    this.updateForm();
  }

  updateForm(): void{
    this.formHistoria.patchValue({
      id      :this.historia.id,
      eps  :this.historia.eps,
    })
  }

  async enviarDatos():Promise<void>{
    this.exist = true;
    let pk = this.formHistoria.get("id")?.value;
    let editHistoria: Historia = new Historia;

    editHistoria.id     = this.formHistoria.get("id")?.value;
    editHistoria.eps = this.formHistoria.get("eps")?.value;
    editHistoria.paciente = this.historia.paciente;

    this.formHistoria.reset();
    this.sended=false;

    let dataReturn = await lastValueFrom(this.historiaServicio.editarHistoria(pk, editHistoria));

    if(dataReturn){
      this.isEdit.emit(true);
    }
  }
}
