import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarPacienteComponent } from './agregar-paciente/agregar-paciente.component';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { VerPacientesComponent } from './ver-pacientes/ver-pacientes.component';
import { EliminarPacienteComponent } from './eliminar-paciente/eliminar-paciente.component';
import { ConsultarPacienteComponent } from './consultar-paciente/consultar-paciente.component';
import { TableModule } from 'primeng/table';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';

@NgModule({
  declarations: [
    AgregarPacienteComponent,
    VerPacientesComponent,
    EliminarPacienteComponent,
    ConsultarPacienteComponent,
    EditarPacienteComponent
  ],
  imports: [
    PacientesRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
  ],
  exports: [
    AgregarPacienteComponent,
    VerPacientesComponent,
    EliminarPacienteComponent,
    ConsultarPacienteComponent,
    EditarPacienteComponent,
  ]
})
export class PacientesModule { }
