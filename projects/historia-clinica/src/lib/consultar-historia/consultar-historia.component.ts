import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Historia } from '../model/historia';
import { HistoriaClinicaService } from '../services/historia-clinica.service';

@Component({
  selector: 'lib-consultar-historia',
  templateUrl: './consultar-historia.component.html',
  styleUrls: ['./consultar-historia.component.css'],
})
export class ConsultarHistoriaComponent implements OnInit {

  constructor(
    private historiaServicio : HistoriaClinicaService,
    private _router : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.encuentraHistoria(Number(this._router.snapshot.paramMap.get('id')))
  }

  public historia : Historia = new Historia;
  public pkHistoria : number | undefined;

  async encuentraHistoria(pk:number):Promise<void>{
    let haveHistory : boolean | undefined;
    haveHistory = await lastValueFrom(this.historiaServicio.haveHistoria(pk));
    console.log(haveHistory)
    if (haveHistory){
      this.historia = await lastValueFrom(this.historiaServicio.obtenerHistoriaByPaciente(pk))
      this.pkHistoria = this.historia.id;
    }else{
      this.router.navigate(['historia-clinica/add-historia', pk])
    }
  }
}
