import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Personal } from '../model/personal';
import { PersonalesService } from '../services/personales.service';


@Component({
  selector: 'lib-consultar-personales',
  templateUrl: './consultar-personales.component.html',
  styleUrls: ['./consultar-personales.component.css']
})
export class ConsultarPersonalesComponent implements OnInit {

  cols: any[] | undefined;
  
  constructor(
    private personalServicio : PersonalesService,
    private router : Router,
  ) { }

  ngOnInit(): void {

    this.cols = [
      { field: 'id',              header: 'Identificacion' },
      { field: 'descripcion',     header: 'Descripcion' },
      { field: 'estado',          header: 'Estado' },
      { field: 'fecha',           header: 'Fecha' },
    ];
  }

  public personales  : Array<Personal> = Array();
  public sended     : boolean = false;
  @Input() historia_id : number | undefined;

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  ngOnChanges():void{
    this.buscarHerencias(this.historia_id)
  }

  async buscarHerencias(historia_id:number|undefined):Promise<void>{
    if(historia_id != undefined){
      this.personales = await lastValueFrom(this.personalServicio.obtenerPersonalByHistoria(historia_id));
      console.log(this.personales)
      this.sended=true;
    }
  }

  editarHerencia(pk:number):void{
    this.router.navigate(['historia-clinica/personales/edit-personales',pk])
  }

  eliminarHerencia(pk:number):void{
    this.router.navigate(['historia-clinica/personales/del-personales',pk])
  }

  addHerencia(pkHistory:number | undefined):void{
    this.router.navigate(['historia-clinica/personales/add-personales',pkHistory])
  }

}
