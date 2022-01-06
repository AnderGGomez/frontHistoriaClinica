import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  agregarPaciente():void{
    this.router.navigate(['pacientes/add-paciente']);
  }

  agregarMedico():void{
    this.router.navigate(['medicos/add-medico']);
  }

  agregarMedicamento():void{
    this.router.navigate(['medicamentos/add-medicamento']);
  }

  agregarEnfermedad():void{
    this.router.navigate(['enfermedades/add-enfermedad']);
  }

  editarPaciente():void{
    this.router.navigate(['pacientes/edit-paciente']);
  }

  editarMedico():void{
    this.router.navigate(['medicos/edit-medico']);
  }

  editarMedicamento():void{
    this.router.navigate(['medicamentos/edit-medicamento']);
  }

  editarEnfermedad():void{
    this.router.navigate(['enfermedades/edit-enfermedad']);
  }

  eliminarPaciente():void{
    this.router.navigate(['pacientes/del-paciente']);
  }

  eliminarMedico():void{
    this.router.navigate(['medicos/del-medico']);
  }

  eliminarMedicamento():void{
    this.router.navigate(['medicamentos/del-medicamento']);

  }

  eliminarEnfermedad():void{
    this.router.navigate(['enfermedades/del-enfermedad']);
  }

  verPaciente():void{
    this.router.navigate(['pacientes/see-pacientes']);
  }

  verMedico():void{
    this.router.navigate(['medicos/see-medicos']);
  }

  verMedicamento():void{
    this.router.navigate(['medicamentos/see-medicamentos']);
  }

  verEnfermedad():void{
    this.router.navigate(['enfermedades/see-enfermedades']);
  }

  consultarPaciente():void{
    this.router.navigate(['pacientes/query-paciente']);
  }

  consultarMedico():void{
    this.router.navigate(['medicos/query-medico']);
  }

  consultarMedicamento():void{
    this.router.navigate(['medicamentos/query-medicamento']);
  }

  consultarEnfermedad():void{
    this.router.navigate(['enfermedades/query-enfermedad']);
  }


}
