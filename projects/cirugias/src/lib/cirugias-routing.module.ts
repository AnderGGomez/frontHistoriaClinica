import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCirugiasComponent } from './agregar-cirugias/agregar-cirugias.component';
import { ConsultarCirugiasComponent } from './consultar-cirugias/consultar-cirugias.component';
import { EliminarCirugiasComponent } from './eliminar-cirugias/eliminar-cirugias.component';
import { EditarCirugiasComponent } from './editar-cirugias/editar-cirugias.component';

const routes: Routes = [
  {path: 'add-cirugias/:id', component:   AgregarCirugiasComponent},
  {path: 'del-cirugias/:id', component:   EliminarCirugiasComponent},
  {path: 'query-cirugias/:id', component: ConsultarCirugiasComponent},
  {path: 'edit-cirugias/:id', component:  EditarCirugiasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CirugiasRoutingModule { }
