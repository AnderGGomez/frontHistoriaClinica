import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Enfermedad } from '../model/enfermedad';
import { EnfermedadesService } from '../services/enfermedades.service';

@Component({
  selector: 'lib-editar-enfermedad',
  templateUrl: './editar-enfermedad.component.html',
  styleUrls: ['./editar-enfermedad.component.css']
})
export class EditarEnfermedadComponent implements OnInit {

  constructor(
    private enfermedadServicio: EnfermedadesService
  ) { }

  ngOnInit(): void {
  }
  public enfermedad : Enfermedad = new Enfermedad;
  public sended     : boolean    = false;

  @Output() isEdit = new EventEmitter<boolean>();

  formEnfermedad = new FormGroup({
    id      : new FormControl(''),
    nombre  : new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(15)]),
    tipo    : new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z\\s]*'), Validators.minLength(4), Validators.maxLength(15)]),
  })

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  async buscarEnfermedad():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.enfermedad = await lastValueFrom(this.enfermedadServicio.obtenerEnfermedad(pk))
    this.sended = true;
    this.formQuery.reset()

    this.updateForm();
  }

  updateForm(): void{
    this.formEnfermedad.patchValue({
      id      :this.enfermedad.id,
      nombre  :this.enfermedad.nombre,
      tipo    :this.enfermedad.tipo,
    })
  }

  async enviarDatos():Promise<void>{
    let pk = this.formEnfermedad.get("id")?.value;
    let editEnfermedad: Enfermedad = new Enfermedad;

    editEnfermedad.id     = this.formEnfermedad.get("id")?.value;
    editEnfermedad.nombre = this.formEnfermedad.get("nombre")?.value;
    editEnfermedad.tipo   = this.formEnfermedad.get("tipo")?.value;

    this.formEnfermedad.reset();
    this.sended=false;

    let dataReturn = await lastValueFrom(this.enfermedadServicio.editarEnfermedad(pk, editEnfermedad));

    if(dataReturn){
      this.isEdit.emit(true);
    }
  }


}
