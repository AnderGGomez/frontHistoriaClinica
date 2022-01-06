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
  cols: any[] | undefined;
  public medicos : Array<Medico> = new Array();
  constructor(
    private medicoServicio: MedicosService
  ) {
    this.cols = [
      { field: 'id',              header: 'Identificacion' },
      { field: 'nombre',          header: 'Nombre' },
      { field: 'segundoNombre',   header: 'S. Nombre' },
      { field: 'primerApellido',  header: 'Apellido' },
      { field: 'segundoApellido', header: 'S. Apellido' },
      { field: 'identificacion',  header: 'CC' },
      { field: 'fechaNacimiento', header: 'fecha nacimiento' },
      { field: 'email',           header: 'email' },
      { field: 'especialidad',    header: 'especialidad' },
      { field: 'cargo',           header: 'cargo' },
      { field: 'ips',             header: 'ips' },
    ];
  }

  ngOnInit(): void {
  }
  
  public medico: Medico = new Medico;
  public sended: boolean = false;

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  async buscarMedico():Promise<void>{
    let pk = this.formQuery.get("id")?.value;
    this.medicos.push(await lastValueFrom(this.medicoServicio.obtenerMedico(pk)));
    this.sended = true;
  }

}
