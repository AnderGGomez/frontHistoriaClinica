import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Farmaco } from '../model/farmaco';
import { FarmacosService } from '../services/farmacos.service';


@Component({
  selector: 'lib-eliminar-farmacos',
  templateUrl: './eliminar-farmacos.component.html',
  styleUrls: ['./eliminar-farmacos.component.css']
})
export class EliminarFarmacosComponent implements OnInit {

  constructor(
    private farmacoServicio : FarmacosService,
    private _router          : ActivatedRoute,
    private router           : Router,
  ) { }

  ngOnInit(): void {
    this.buscarHerencia(Number(this._router.snapshot.paramMap.get('id')));
  }

  public farmaco : Farmaco = new Farmaco;
  public exist    : boolean  = false;

  async buscarHerencia(pk:number):Promise<void>{
    let valid : boolean = await lastValueFrom(this.farmacoServicio.existeFarmaco(pk));
    if (valid){
      this.farmaco = await lastValueFrom(this.farmacoServicio.obtenerFarmaco(pk));
      let pacientePK = this.farmaco.historia.paciente.id;
      this.farmaco = new Farmaco;
      let isDelete : boolean = await lastValueFrom(this.farmacoServicio.eliminarFarmaco(pk))
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
