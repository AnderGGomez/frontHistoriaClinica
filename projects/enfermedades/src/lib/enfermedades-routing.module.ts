import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEnfermedadComponent } from './agregar-enfermedad/agregar-enfermedad.component';
import { ConsultarEnfermedadComponent } from './consultar-enfermedad/consultar-enfermedad.component';
import { EliminarEnfermedadComponent } from './eliminar-enfermedad/eliminar-enfermedad.component';
import { VerEnfermedadesComponent } from './ver-enfermedades/ver-enfermedades.component';
import { EditarEnfermedadComponent } from './editar-enfermedad/editar-enfermedad.component';

const routes: Routes = [
  {path: 'add-enfermedad', component: AgregarEnfermedadComponent},
  {path: 'see-enfermedades', component: VerEnfermedadesComponent},
  {path: 'del-enfermedad', component: EliminarEnfermedadComponent},
  {path: 'query-enfermedad', component: ConsultarEnfermedadComponent},
  {path: 'edit-enfermedad', component: EditarEnfermedadComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnfermedadesRoutingModule { }
