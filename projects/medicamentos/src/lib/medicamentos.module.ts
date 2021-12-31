import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { AgregarMedicamentoComponent } from './agregar-medicamento/agregar-medicamento.component';
import { VerMedicamentosComponent } from './ver-medicamentos/ver-medicamentos.component';
import { EliminarMedicamentoComponent } from './eliminar-medicamento/eliminar-medicamento.component';
import { ConsultarMedicamentoComponent } from './consultar-medicamento/consultar-medicamento.component';
import { EditarMedicamentoComponent } from './editar-medicamento/editar-medicamento.component';




@NgModule({
  declarations: [
    AgregarMedicamentoComponent,
    VerMedicamentosComponent,
    EliminarMedicamentoComponent,
    ConsultarMedicamentoComponent,
    EditarMedicamentoComponent
  ],
  imports: [
    MedicamentosRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
  ],
  exports: [
    AgregarMedicamentoComponent,
    VerMedicamentosComponent,
    EliminarMedicamentoComponent,
    ConsultarMedicamentoComponent,
    EditarMedicamentoComponent
  ]
})
export class MedicamentosModule { }
