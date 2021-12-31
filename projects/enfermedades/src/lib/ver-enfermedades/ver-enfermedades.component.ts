import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Enfermedad } from '../model/enfermedad';
import { EnfermedadesService } from '../services/enfermedades.service';

@Component({
  selector: 'lib-ver-enfermedades',
  templateUrl: './ver-enfermedades.component.html',
  styleUrls: ['./ver-enfermedades.component.css']
})
export class VerEnfermedadesComponent implements OnInit {

  constructor(private enfermedadServicio : EnfermedadesService) { }

  ngOnInit(): void {
    this.obtenerEnfermedades();
  }

  public enfermedades: Array<Enfermedad> = new Array();
  @Input() update: boolean | undefined;
 
  ngOnChanges(changes: SimpleChanges) {
     this.obtenerEnfermedades();
  }


  async obtenerEnfermedades():Promise<void>{
    this.enfermedades=await lastValueFrom(this.enfermedadServicio.obtenerEnfermedades());
  }
}
