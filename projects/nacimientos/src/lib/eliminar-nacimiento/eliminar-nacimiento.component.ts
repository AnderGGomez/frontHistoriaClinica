import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Nacimiento } from '../model/nacimiento';
import { NacimientosService } from '../services/nacimientos.service';

@Component({
  selector: 'lib-eliminar-nacimiento',
  templateUrl: './eliminar-nacimiento.component.html',
  styleUrls: ['./eliminar-nacimiento.component.css']
})
export class EliminarNacimientoComponent implements OnInit {

  constructor(
    private nacimientoServicio : NacimientosService,
    private _router          : ActivatedRoute,
    private router           : Router,
  ) { }

  ngOnInit(): void {
    this.buscarHerencia(Number(this._router.snapshot.paramMap.get('id')));
  }

  public nacimiento : Nacimiento = new Nacimiento;
  public exist    : boolean  = false;

  async buscarHerencia(pk:number):Promise<void>{
    let valid : boolean = await lastValueFrom(this.nacimientoServicio.existeNacimiento(pk));
    if (valid){
      this.nacimiento = await lastValueFrom(this.nacimientoServicio.obtenerNacimiento(pk));
      let pacientePK = this.nacimiento.historia.paciente.id;
      this.nacimiento = new Nacimiento;
      let isDelete : boolean = await lastValueFrom(this.nacimientoServicio.eliminarNacimiento(pk))
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
