import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoriaClinicaRoutingModule } from './historia-clinica-routing.module';
import { AgregarHistoriaComponent} from './agregar-historia/agregar-historia.component';
import { EliminarHistoriaComponent} from './eliminar-historia/eliminar-historia.component';
import { EditarHistoriaComponent} from './editar-historia/editar-historia.component';
import { VerHistoriasComponent} from './ver-historias/ver-historias.component';
import { JoinHistoriaComponent} from './join-historia/join-historia.component';
import { ConsultarHistoriaComponent} from './consultar-historia/consultar-historia.component';
import { PacientesModule } from '@utp/pacientes';
import { HerenciasModule } from '@utp/herencias';
import { HistoriaClinicaService } from './services/historia-clinica.service';
import { NacimientosModule } from '@utp/nacimientos';
import { FarmacosModule } from '@utp/farmacos';
import { PersonalesModule} from '@utp/personales';
import { CirugiasModule } from '@utp/cirugias';
import {TabViewModule} from 'primeng/tabview';
import {FieldsetModule} from 'primeng/fieldset';


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
    TabViewModule,
    FieldsetModule,
    PacientesModule,
    HerenciasModule,
    NacimientosModule,
    FarmacosModule,
    PersonalesModule,
    CirugiasModule,
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
