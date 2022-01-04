import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Nacimiento } from '../model/nacimiento';
import { NacimientosService } from '../services/nacimientos.service';

@Component({
  selector: 'lib-consultar-nacimiento',
  templateUrl: './consultar-nacimiento.component.html',
  styleUrls: ['./consultar-nacimiento.component.css']
})
export class ConsultarNacimientoComponent implements OnInit {

  cols: any[] | undefined;
  
  constructor(
    private nacimientoServicio : NacimientosService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id',              header: 'Registro' },
      { field: 'fechaNacimiento',      header: 'fecha de Nacimiento' },
      { field: 'tipoParto',          header: 'Tipo de parto' },
      { field: 'tipoNacimiento',   header: 'Tipo de nacimiento' },
    ];
  }

  public nacimientos  : Array<Nacimiento> = new Array;
  public sended     : boolean = false;
  @Input() historia_id : number | undefined;

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  ngOnChanges():void{
    this.buscarNacimientos(this.historia_id)
  }

  async buscarNacimientos(historia_id:number|undefined):Promise<void>{
    if(historia_id != undefined){
      let data : Nacimiento = await lastValueFrom(this.nacimientoServicio.obtenerNacimientoByHistoria(historia_id));
      if (data != null){
        this.nacimientos.push(data);
      }
    }
  }

  editarNacimiento(pk:number):void{
    this.router.navigate(['historia-clinica/nacimientos/edit-nacimiento',pk])
  }

  eliminarNacimiento(pk:number):void{
    this.router.navigate(['historia-clinica/nacimientos/del-nacimiento',pk])
  }

  addNacimiento(pkHistory:number | undefined):void{
    this.router.navigate(['historia-clinica/nacimientos/add-nacimiento',pkHistory])
  }

}
