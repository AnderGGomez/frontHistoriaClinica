import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Herencia } from '../model/herencia';
import { HerenciasService } from '../services/herencias.service';

@Component({
  selector: 'lib-consultar-herencia',
  templateUrl: './consultar-herencia.component.html',
  styleUrls: ['./consultar-herencia.component.css']
})
export class ConsultarHerenciaComponent implements OnInit {
  constructor(
    private herenciaServicio : HerenciasService,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  public herencias  : Array<Herencia> = Array();
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
      this.herencias = await lastValueFrom(this.herenciaServicio.obtenerHerenciasByHistoria(historia_id));
      console.log(this.herencias)
      this.sended=true;
    }
  }

  editarHerencia(pk:number):void{
    this.router.navigate(['historia-clinica/herencias/edit-herencia',pk])
  }

  eliminarHerencia(pk:number):void{
    this.router.navigate(['historia-clinica/herencias/del-herencia',pk])
  }

  addHerencia(pkHistory:number | undefined):void{
    this.router.navigate(['historia-clinica/herencias/add-herencia',pkHistory])
  }
}

