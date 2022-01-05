import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Personal } from '../model/personal';
import { PersonalesService } from '../services/personales.service';

@Component({
  selector: 'lib-eliminar-personales',
  templateUrl: './eliminar-personales.component.html',
  styleUrls: ['./eliminar-personales.component.css']
})
export class EliminarPersonalesComponent implements OnInit {
  
  constructor(
    private personalServicio : PersonalesService,
    private _router          : ActivatedRoute,
    private router           : Router,
  ) { }

  ngOnInit(): void {
    this.buscarPersonal(Number(this._router.snapshot.paramMap.get('id')));
  }

  public personal : Personal = new Personal;
  public exist    : boolean  = false;

  async buscarPersonal(pk:number):Promise<void>{
    let valid : boolean = await lastValueFrom(this.personalServicio.existePersonal(pk));
    if (valid){
      this. personal = await lastValueFrom(this.personalServicio.obtenerPersonal(pk));
      let pacientePK = this.personal.historia.paciente.id;
      this.personal = new Personal;
      let isDelete : boolean = await lastValueFrom(this.personalServicio.eliminarPersonal(pk))
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
