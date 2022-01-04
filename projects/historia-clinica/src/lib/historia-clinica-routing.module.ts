import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarHistoriaComponent } from './agregar-historia/agregar-historia.component';
import { ConsultarHistoriaComponent } from './consultar-historia/consultar-historia.component';
import { EliminarHistoriaComponent } from './eliminar-historia/eliminar-historia.component';
import { VerHistoriasComponent } from './ver-historias/ver-historias.component';
import { EditarHistoriaComponent } from './editar-historia/editar-historia.component';
import { JoinHistoriaComponent } from './join-historia/join-historia.component';

const routes: Routes = [
  {path: 'add-historia/:id', component:   AgregarHistoriaComponent},
  {path: 'see-historias', component:  VerHistoriasComponent},
  {path: 'del-historia', component:   EliminarHistoriaComponent},
  {path: 'query-historia/:id', component: ConsultarHistoriaComponent},
  {path: 'edit-historia', component:  EditarHistoriaComponent},
  {path: 'join-historia', component:  JoinHistoriaComponent},
  {
    path: 'herencias',
    loadChildren: ()=> import('@utp/herencias').then((mod) => mod.HerenciasModule)
  },
  {
    path: 'nacimientos',
    loadChildren: ()=> import('@utp/nacimientos').then((mod) => mod.NacimientosModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriaClinicaRoutingModule { }
