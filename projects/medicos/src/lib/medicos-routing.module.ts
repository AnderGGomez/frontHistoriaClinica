import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarMedicoComponent } from './agregar-medico/agregar-medico.component';
import { ConsultarMedicoComponent } from './consultar-medico/consultar-medico.component';
import { EliminarMedicoComponent } from './eliminar-medico/eliminar-medico.component';
import { VerMedicosComponent } from './ver-medicos/ver-medicos.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';

const routes: Routes = [
  {path: 'add-medico', component: AgregarMedicoComponent},
  {path: 'see-medicos', component: VerMedicosComponent},
  {path: 'del-medico', component: EliminarMedicoComponent},
  {path: 'query-medico', component: ConsultarMedicoComponent},
  {path: 'edit-medico', component: EditarMedicoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
