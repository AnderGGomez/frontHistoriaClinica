import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { TableModule } from 'primeng/table';
import { HistoriaClinicaRoutingModule } from './historia-clinica-routing.module';
import { AgregarHistoriaComponent} from './agregar-historia/agregar-historia.component';
import { EliminarHistoriaComponent} from './eliminar-historia/eliminar-historia.component';
import { EditarHistoriaComponent} from './editar-historia/editar-historia.component';
import { VerHistoriasComponent} from './ver-historias/ver-historias.component';
import { JoinHistoriaComponent} from './join-historia/join-historia.component';
import { ConsultarHistoriaComponent} from './consultar-historia/consultar-historia.component';
import { PacientesModule } from 'dist/pacientes/';
import { HerenciasModule } from 'dist/herencias/';
import { HistoriaClinicaService } from './services/historia-clinica.service';
import { NacimientosModule } from 'dist/nacimientos/';



@NgModule({
  declarations: [
    AgregarHistoriaComponent,
    ConsultarHistoriaComponent,
    EliminarHistoriaComponent,
    EditarHistoriaComponent,
    VerHistoriasComponent,
    JoinHistoriaComponent,
  ],
  imports: [
    HistoriaClinicaRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PacientesModule,
    HerenciasModule,
    NacimientosModule
  ],
  exports: [
    AgregarHistoriaComponent,
    ConsultarHistoriaComponent,
    EliminarHistoriaComponent,
    EditarHistoriaComponent,
    VerHistoriasComponent,
    JoinHistoriaComponent,
  ],
  providers:[
    HistoriaClinicaService
  ]
})
export class HistoriaClinicaModule { }
