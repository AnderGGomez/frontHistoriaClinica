import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'lib-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent implements OnInit {

  constructor(
    private medicoServicio: MedicosService
  ) { }

  ngOnInit(): void {
  }

  public medico: Medico = new Medico;
  public sended: boolean = false;
  @Output() isEdit = new EventEmitter<boolean>();

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  formMedico = new FormGroup({
    id              : new FormControl(''),
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

  async buscarMedico():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.medico = await lastValueFrom(this.medicoServicio.obtenerMedico(pk))
    this.sended = true;
    this.formQuery.reset();

    this.updateForm();
  }

  updateForm(): void{
    this.formMedico.patchValue(this.medico);
  }

  async enviarDatos():Promise<void>{
    let pk = this.formMedico.get("id")?.value;
    let dataReturn: boolean | false;
    dataReturn = await lastValueFrom(this.medicoServicio.editarMedico(pk, this.formMedico.value))
    if(dataReturn){
      this.isEdit.emit(true);
      this.formMedico.reset();
      this.sended=false;
      console.log(dataReturn)
    }
  }
}
