import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Herencia } from '../model/herencia';
import { HerenciasService } from '../services/herencias.service';

@Component({
  selector: 'lib-eliminar-herencia',
  templateUrl: './eliminar-herencia.component.html',
  styleUrls: ['./eliminar-herencia.component.css']
})
export class EliminarHerenciaComponent implements OnInit {

  constructor(
    private herenciaServicio : HerenciasService,
    private _router          : ActivatedRoute,
    private router           : Router,
  ) { }

  ngOnInit(): void {
    this.buscarHerencia(Number(this._router.snapshot.paramMap.get('id')));
  }

  public herencia : Herencia = new Herencia;
  public exist    : boolean  = false;

  async buscarHerencia(pk:number):Promise<void>{
    let valid : boolean = await lastValueFrom(this.herenciaServicio.existeHerencia(pk));
    if (valid){
      this. herencia = await lastValueFrom(this.herenciaServicio.obtenerHerencia(pk));
      let pacientePK = this.herencia.historia.paciente.id;
      this.herencia = new Herencia;
      let isDelete : boolean = await lastValueFrom(this.herenciaServicio.eliminarHerencia(pk))
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
