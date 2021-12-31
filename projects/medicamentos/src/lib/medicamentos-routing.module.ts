import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarMedicamentoComponent } from './agregar-medicamento/agregar-medicamento.component';
import { ConsultarMedicamentoComponent } from './consultar-medicamento/consultar-medicamento.component';
import { EliminarMedicamentoComponent } from './eliminar-medicamento/eliminar-medicamento.component';
import { VerMedicamentosComponent } from './ver-medicamentos/ver-medicamentos.component';
import { EditarMedicamentoComponent } from './editar-medicamento/editar-medicamento.component';

const routes: Routes = [
  {path: 'add-medicamento', component: AgregarMedicamentoComponent},
  {path: 'see-medicamentos', component: VerMedicamentosComponent},
  {path: 'del-medicamento', component: EliminarMedicamentoComponent},
  {path: 'query-medicamento', component: ConsultarMedicamentoComponent},
  {path: 'edit-medicamento', component: EditarMedicamentoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
