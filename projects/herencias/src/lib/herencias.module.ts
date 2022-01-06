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
import { MedicosModule } from '@utp/medicos';
import { EnfermedadesModule } from '@utp/enfermedades';
import { HerenciasService } from './services/herencias.service';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';

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
    ButtonModule,
    SplitButtonModule,
  ],
  exports: [
    AgregarHerenciaComponent,
    EditarHerenciaComponent,
    EliminarHerenciaComponent,
    ConsultarHerenciaComponent,
  ],
  providers:[
    HerenciasService,
  ]
})
export class HerenciasModule { }
