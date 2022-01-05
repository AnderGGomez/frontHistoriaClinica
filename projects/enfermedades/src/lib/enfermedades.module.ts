import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { EnfermedadesRoutingModule } from './enfermedades-routing.module';
import { AgregarEnfermedadComponent } from './agregar-enfermedad/agregar-enfermedad.component';
import { ConsultarEnfermedadComponent } from './consultar-enfermedad/consultar-enfermedad.component';
import { EliminarEnfermedadComponent } from './eliminar-enfermedad/eliminar-enfermedad.component';
import { VerEnfermedadesComponent } from './ver-enfermedades/ver-enfermedades.component';
import { EditarEnfermedadComponent } from './editar-enfermedad/editar-enfermedad.component';
import { EnfermedadesService } from './services/enfermedades.service';


@NgModule({
  declarations: [
    AgregarEnfermedadComponent,
    ConsultarEnfermedadComponent,
    EliminarEnfermedadComponent,
    VerEnfermedadesComponent,
    EditarEnfermedadComponent
  ],
  imports: [
    EnfermedadesRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
  ],
  exports: [
    AgregarEnfermedadComponent,
    ConsultarEnfermedadComponent,
    EliminarEnfermedadComponent,
    VerEnfermedadesComponent,
    EditarEnfermedadComponent
  ],
  providers: [
    EnfermedadesService,
  ]
})
export class EnfermedadesModule { }
