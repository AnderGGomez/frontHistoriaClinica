import { NgModule } from '@angular/core';
import { AgregarPersonalesComponent } from './agregar-personales/agregar-personales.component';
import { ConsultarPersonalesComponent } from './consultar-personales/consultar-personales.component';
import { EliminarPersonalesComponent } from './eliminar-personales/eliminar-personales.component';
import { EditarPersonalesComponent } from './editar-personales/editar-personales.component';
import { PersonalesRoutingModule } from './personales-routing.module';
import { CommonModule } from '@angular/common';
import { PersonalesService } from './services/personales.service';
import { MedicosModule } from '@utp/medicos';
import { EnfermedadesModule} from '@utp/enfermedades';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule} from 'primeng/listbox';


@NgModule({
  declarations: [
    AgregarPersonalesComponent,
    ConsultarPersonalesComponent,
    EliminarPersonalesComponent,
    EditarPersonalesComponent
  ],
  imports: [
    PersonalesRoutingModule,
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
    AgregarPersonalesComponent,
    ConsultarPersonalesComponent,
    EliminarPersonalesComponent,
    EditarPersonalesComponent
  ],
  providers: [
    PersonalesService,
  ]
})
export class PersonalesModule { }
