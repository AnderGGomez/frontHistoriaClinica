import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPacienteComponent } from './agregar-paciente/agregar-paciente.component';
import { ConsultarPacienteComponent } from './consultar-paciente/consultar-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { EliminarPacienteComponent } from './eliminar-paciente/eliminar-paciente.component';
import { VerPacientesComponent } from './ver-pacientes/ver-pacientes.component';

const routes: Routes = [
  {path: 'add-paciente', component: AgregarPacienteComponent},
  {path: 'see-pacientes', component: VerPacientesComponent},
  {path: 'del-paciente', component: EliminarPacienteComponent},
  {path: 'query-paciente', component: ConsultarPacienteComponent},
  {path: 'edit-paciente', component: EditarPacienteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
