import { NgModule } from '@angular/core';
import { AgregarNacimientoComponent } from './agregar-nacimiento/agregar-nacimiento.component';
import { ConsultarNacimientoComponent } from './consultar-nacimiento/consultar-nacimiento.component';
import { EliminarNacimientoComponent } from './eliminar-nacimiento/eliminar-nacimiento.component';
import { EditarNacimientoComponent } from './editar-nacimiento/editar-nacimiento.component';
import { NacimientosRoutingModule } from './nacimientos-routing.module';
import { CommonModule } from '@angular/common';
import { MedicosModule } from '@utp/medicos';
import { EnfermedadesModule } from '@utp/enfermedades';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect'
import { ListboxModule} from 'primeng/listbox';
import { NacimientosService } from './services/nacimientos.service';



@NgModule({
  declarations: [
    AgregarNacimientoComponent,
    ConsultarNacimientoComponent,
    EliminarNacimientoComponent,
    EditarNacimientoComponent
  ],
  imports: [
    NacimientosRoutingModule,
    CommonModule,
    MedicosModule,
    EnfermedadesModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    SelectButtonModule,
    MultiSelectModule,
    ListboxModule,
  ],
  exports: [
    AgregarNacimientoComponent,
    ConsultarNacimientoComponent,
    EliminarNacimientoComponent,
    EditarNacimientoComponent
  ],
  providers:[
    NacimientosService
  ]
})
export class NacimientosModule { }
