import { NgModule } from '@angular/core';
import { AgregarHerenciaComponent } from './agregar-herencia/agregar-herencia.component';
import { EditarHerenciaComponent } from './editar-herencia/editar-herencia.component';
import { EliminarHerenciaComponent } from './eliminar-herencia/eliminar-herencia.component';
import { ConsultarHerenciaComponent } from './consultar-herencia/consultar-herencia.component';
import { HerenciasRoutingModule } from './herencias-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect'
import { ListboxModule} from 'primeng/listbox';
import { MedicosModule } from 'dist/medicos/';
import { EnfermedadesModule } from 'dist/enfermedades/';

@NgModule({
  declarations: [
    AgregarHerenciaComponent,
    EditarHerenciaComponent,
    EliminarHerenciaComponent,
    ConsultarHerenciaComponent,
  ],
  imports: [
    HerenciasRoutingModule,
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
    AgregarHerenciaComponent,
    EditarHerenciaComponent,
    EliminarHerenciaComponent,
    ConsultarHerenciaComponent,
  ],
  
})
export class HerenciasModule { }