import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente, PacientesService } from 'dist/pacientes/';
import { lastValueFrom } from 'rxjs';
import { Historia } from '../model/historia';
import { HistoriaClinicaService } from '../services/historia-clinica.service';

@Component({
  selector: 'lib-agregar-historia',
  templateUrl: './agregar-historia.component.html',
  styleUrls: ['./agregar-historia.component.css']
})
export class AgregarHistoriaComponent implements OnInit {

  constructor(private historiaServicio: HistoriaClinicaService,
    private _router : ActivatedRoute,
    private router: Router,
    private pacienteServicio : PacientesService) { }

  public paciente : Paciente = new Paciente;
  public isPulse  : any;
  public have     : boolean = false;
  public exist    : boolean = false;

  ngOnInit(): void {
    this.buscarPaciente(Number(this._router.snapshot.paramMap.get('id')))
  }

  async buscarPaciente(pk:number):Promise<void>{
    /**Buscar primero si el paciente existe. */
    this.paciente = await lastValueFrom(this.pacienteServicio.obtenerPaciente(pk))
    if(this.paciente != null){
      this.isPulse=true;
      this.matchHistoria(pk);
    }else{
      this.router.navigate(['pacientes/add-paciente'])
    }
  }

  async matchHistoria(pk:number):Promise<void>{
    this.have=await lastValueFrom(this.historiaServicio.haveHistoria(pk));
    if(this.have == true){
      this.router.navigate(['historia-clinica/query-historia', pk])
    }else{
      this.isPulse=false;
    }
  }


  formHistoria = new FormGroup({
    id      : new FormControl(''),
    eps  : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\\s]*'), Validators.minLength(3), Validators.maxLength(15)]),
  })

  async enviarDatos():Promise<void>{
    let historia: Historia = new Historia;
    historia.eps        =this.formHistoria.get("eps")?.value;
    historia.paciente   =this.paciente;

    this.formHistoria.reset()
    console.log(historia)
    let dataReturn = await lastValueFrom(this.historiaServicio.agregarHistoria(historia))
    console.log(dataReturn)
    this.isPulse=false;
    this.ngOnInit();
  }
}
