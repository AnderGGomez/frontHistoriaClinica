import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Cirugia } from '../model/cirugia';
import { CirugiasService } from '../services/cirugias.service';


@Component({
  selector: 'lib-consultar-cirugias',
  templateUrl: './consultar-cirugias.component.html',
  styleUrls: ['./consultar-cirugias.component.css']
})
export class ConsultarCirugiasComponent implements OnInit {
  cols: any[] | undefined;
  
  constructor(
    private cirugiaServicio : CirugiasService,
    private router : Router,
  ) { }

  ngOnInit(): void {

    this.cols = [
      { field: 'id',                  header: 'Registro' },
      { field: 'fechaProcedimiento',  header: 'Fecha Procedimiento' },
      { field: 'procedimiento',       header: 'Procedimiento' },
      { field: 'descripcion',         header: 'Descripcion' },
      { field: 'fechaCreacion',       header: 'Fecha del Registro' },
    ];
  }

  public cirugias  : Array<Cirugia> = Array();
  public sended     : boolean = false;
  @Input() historia_id : number | undefined;

  formQuery = new FormGroup({
    id : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })

  ngOnChanges():void{
    this.buscarcirugias(this.historia_id)
  }

  async buscarcirugias(historia_id:number|undefined):Promise<void>{
    if(historia_id != undefined){
      this.cirugias = await lastValueFrom(this.cirugiaServicio.obtenerCirugiasByHistoria(historia_id));
      console.log(this.cirugias)
      this.sended=true;
    }
  }

  editarCirugia(pk:number):void{
    this.router.navigate(['historia-clinica/cirugias/edit-cirugias',pk])
  }

  eliminarCirugia(pk:number):void{
    this.router.navigate(['historia-clinica/cirugias/del-cirugias',pk])
  }

  addCirugia(pkHistory:number | undefined):void{
    this.router.navigate(['historia-clinica/cirugias/add-cirugias',pkHistory])
  }

}
