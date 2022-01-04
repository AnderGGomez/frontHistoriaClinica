import { NgModule } from '@angular/core';
import { MedicosRoutingModule} from  './medicos-routing.module'
import { AgregarMedicoComponent } from './agregar-medico/agregar-medico.component';
import { VerMedicosComponent } from './ver-medicos/ver-medicos.component';
import { ConsultarMedicoComponent } from './consultar-medico/consultar-medico.component';
import { EliminarMedicoComponent } from './eliminar-medico/eliminar-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MedicosService } from './services/medicos.service';


@NgModule({
  declarations: [
    AgregarMedicoComponent,
    VerMedicosComponent,
    ConsultarMedicoComponent,
    EliminarMedicoComponent,
    EditarMedicoComponent
  ],
  imports: [
    MedicosRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
  ],
  exports: [
    AgregarMedicoComponent,
    VerMedicosComponent,
    ConsultarMedicoComponent,
    EliminarMedicoComponent,
    EditarMedicoComponent
  ],
  providers:[
    MedicosService,
  ]
})
export class MedicosModule { }
