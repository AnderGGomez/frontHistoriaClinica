import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Medico } from '../model/medico';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'lib-ver-medicos',
  templateUrl: './ver-medicos.component.html',
  styleUrls: ['./ver-medicos.component.css']
})
export class VerMedicosComponent implements OnInit {
  cols: any[] | undefined;
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
    this.obtenerMedicos();
  }

  public medicos: Array<Medico> = new Array();
  @Input() update: boolean | undefined;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.obtenerMedicos();
  }
  async obtenerMedicos(): Promise<void> {
    this.medicos = await lastValueFrom(this.medicoServicio.obtenerMedicos())
  }

}
