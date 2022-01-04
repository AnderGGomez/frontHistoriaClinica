import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Historia } from '../model/historia';
import { HistoriaClinicaService } from '../services/historia-clinica.service';

@Component({
  selector: 'lib-ver-historias',
  templateUrl: './ver-historias.component.html',
  styleUrls: ['./ver-historias.component.css']
})
export class VerHistoriasComponent implements OnInit {

  constructor(private historiaServicio : HistoriaClinicaService) { }

  ngOnInit(): void {
    this.obtenerEnfermedades();
  }

  public historias: Array<Historia> = new Array();
  @Input() update: boolean | undefined;
 
  ngOnChanges(changes: SimpleChanges) {
     this.obtenerEnfermedades();
  }


  async obtenerEnfermedades():Promise<void>{
    this.historias=await lastValueFrom(this.historiaServicio.obtenerHistorias());
  }
}
