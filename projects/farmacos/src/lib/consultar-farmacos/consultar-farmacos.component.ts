import { FarmacosService } from '../services/farmacos.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Farmaco } from '../model/farmaco';

@Component({
  selector: 'lib-consultar-farmacos',
  templateUrl: './consultar-farmacos.component.html',
  styleUrls: ['./consultar-farmacos.component.css']
})
export class ConsultarFarmacosComponent implements OnInit {
  cols: any[] | undefined;
  
  constructor(
    private farmacoServicio : FarmacosService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id',              header: 'Registro' },
      { field: 'prescripcion',      header: 'prescripcion' },
      { field: 'duracion',   header: 'Duracion(Dias)' },
      { field: 'fecha',   header: 'Fecha de Creacion' },
    ];
  }

  public farmacos  : Array<Farmaco> = new Array;
  public sended     : boolean = false;
  @Input() historia_id : number | undefined;

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  ngOnChanges():void{
    this.buscarFarmacos(this.historia_id)
  }

  async buscarFarmacos(historia_id:number|undefined):Promise<void>{
    if(historia_id != undefined){
      this.farmacos = await lastValueFrom(this.farmacoServicio.obtenerFarmacosByHistoria(historia_id));
    }
  }

  editarFarmaco(pk:number):void{
    this.router.navigate(['historia-clinica/farmacos/edit-farmaco',pk])
  }

  eliminarFarmaco(pk:number):void{
    this.router.navigate(['historia-clinica/farmacos/del-farmaco',pk])
  }

  addFarmaco(pkHistory:number | undefined):void{
    this.router.navigate(['historia-clinica/farmacos/add-farmaco',pkHistory])
  }


}
