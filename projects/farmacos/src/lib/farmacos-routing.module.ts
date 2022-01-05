import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarFarmacosComponent } from './agregar-farmacos/agregar-farmacos.component';
import { ConsultarFarmacosComponent } from './consultar-farmacos/consultar-farmacos.component';
import { EliminarFarmacosComponent } from './eliminar-farmacos/eliminar-farmacos.component';
import { EditarFarmacosComponent } from './editar-farmacos/editar-farmacos.component';

const routes: Routes = [
  {path: 'add-farmaco/:id', component: AgregarFarmacosComponent},
  {path: 'del-farmaco/:id', component: EliminarFarmacosComponent},
  {path: 'query-farmaco/:id', component: ConsultarFarmacosComponent},
  {path: 'edit-farmaco/:id', component: EditarFarmacosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmacosRoutingModule { }
