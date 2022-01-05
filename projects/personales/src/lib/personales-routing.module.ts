import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPersonalesComponent } from './agregar-personales/agregar-personales.component';
import { ConsultarPersonalesComponent } from './consultar-personales/consultar-personales.component';
import { EliminarPersonalesComponent } from './eliminar-personales/eliminar-personales.component';
import { EditarPersonalesComponent } from './editar-personales/editar-personales.component';

const routes: Routes = [
  {path: 'add-personales/:id', component:   AgregarPersonalesComponent},
  {path: 'del-personales/:id', component:   EliminarPersonalesComponent},
  {path: 'query-personales/:id', component: ConsultarPersonalesComponent},
  {path: 'edit-personales/:id', component:  EditarPersonalesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalesRoutingModule { }
