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

  cols: any[] =[];

  constructor(
    private personalServicio : PersonalesService,
    private router : Router,
  ) { 
    
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'id',              header: 'Registro' },
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
    this.buscarPersonal(this.historia_id);
  }

  async buscarPersonal(historia_id:number|undefined):Promise<void>{
    if(historia_id != undefined){
      this.personales = await lastValueFrom(this.personalServicio.obtenerPersonalByHistoria(historia_id));
      console.log(this.personales)
      this.sended=true;
    }
  }

  editarPersonal(pk:number):void{
    this.router.navigate(['historia-clinica/personales/edit-personales',pk])
  }

  eliminarPersonal(pk:number):void{
    this.router.navigate(['historia-clinica/personales/del-personales',pk])
  }

  addPersonal(pkHistory:number | undefined):void{
    this.router.navigate(['historia-clinica/personales/add-personales',pkHistory])
  }

}
