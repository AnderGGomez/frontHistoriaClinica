import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Cirugia } from '../model/cirugia';
import { CirugiasService } from '../services/cirugias.service';


@Component({
  selector: 'lib-eliminar-cirugias',
  templateUrl: './eliminar-cirugias.component.html',
  styleUrls: ['./eliminar-cirugias.component.css']
})
export class EliminarCirugiasComponent implements OnInit {

  constructor(
    private cirugiaServicio : CirugiasService,
    private _router          : ActivatedRoute,
    private router           : Router,
  ) { }

  ngOnInit(): void {
    this.buscarCirugia(Number(this._router.snapshot.paramMap.get('id')));
  }

  public cirugia : Cirugia = new Cirugia;
  public exist    : boolean  = false;

  async buscarCirugia(pk:number):Promise<void>{
    let valid : boolean = await lastValueFrom(this.cirugiaServicio.existeCirugia(pk));
    if (valid){
      this. cirugia = await lastValueFrom(this.cirugiaServicio.obtenerCirugia(pk));
      let pacientePK = this.cirugia.historia.paciente.id;
      this.cirugia = new Cirugia;
      let isDelete : boolean = await lastValueFrom(this.cirugiaServicio.eliminarCirugia(pk))
      if(isDelete){
        this.router.navigate(['historia-clinica/query-historia/', pacientePK]);
      }else{
        console.log('algo fallo');
      }
    }else{
      this.router.navigate(['index'])
    }
  }

}
