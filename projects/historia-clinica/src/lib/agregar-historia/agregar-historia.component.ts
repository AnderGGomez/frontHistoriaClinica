import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Historia } from '../model/historia';
import { Paciente } from '../model/paciente';
import { HistoriaClinicaService } from '../services/historia-clinica.service';

@Component({
  selector: 'lib-agregar-historia',
  templateUrl: './agregar-historia.component.html',
  styleUrls: ['./agregar-historia.component.css']
})
export class AgregarHistoriaComponent implements OnInit {

  constructor(private historiaServicio: HistoriaClinicaService,
    private _router : ActivatedRoute) { }

  public paciente : Paciente = new Paciente;
  public isPulse  : boolean = true;
  ngOnInit(): void {
    this.buscarPaciente(Number(this._router.snapshot.paramMap.get('id')))
  }

  async buscarPaciente(pk:number):Promise<void>{
    /**Buscar primero si el paciente existe. */
    this.paciente=await lastValueFrom(this.historiaServicio.obtenerPaciente(pk))
  }

  crearHistoria():void{
    console.log("me pulsaste we");
  }

  formHistoria = new FormGroup({
    id      : new FormControl(''),
    eps  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(3), Validators.maxLength(15)]),
  })

  async enviarDatos():Promise<void>{
    let historia: Historia = new Historia;
    historia.eps        =this.formHistoria.get("eps")?.value;
    historia.pacienteDTO   =this.paciente;

    this.formHistoria.reset()
    console.log(historia)
    let dataReturn = await lastValueFrom(this.historiaServicio.agregarHistoria(historia))
    console.log(dataReturn)
    this.isPulse=true;
  }
}
