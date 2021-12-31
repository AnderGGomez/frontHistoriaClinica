import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HistoriaClinicaRoutingModule } from './historia-clinica-routing.module';
import { AgregarHistoriaComponent } from './agregar-historia/agregar-historia.component';
import { ConsultarHistoriaComponent } from './consultar-historia/consultar-historia.component';
import { EliminarHistoriaComponent } from './eliminar-historia/eliminar-historia.component';
import { EditarHistoriaComponent } from './editar-historia/editar-historia.component';
import { VerHistoriasComponent } from './ver-historias/ver-historias.component';



@NgModule({
  declarations: [
    AgregarHistoriaComponent,
    ConsultarHistoriaComponent,
    EliminarHistoriaComponent,
    EditarHistoriaComponent,
    VerHistoriasComponent
  ],
  imports: [
    HistoriaClinicaRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
  ],
  exports: [
    AgregarHistoriaComponent,
    ConsultarHistoriaComponent,
    EliminarHistoriaComponent,
    EditarHistoriaComponent,
    VerHistoriasComponent
  ]
})
export class HistoriaClinicaModule { }
