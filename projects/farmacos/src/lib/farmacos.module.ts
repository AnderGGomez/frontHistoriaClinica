import { NgModule } from '@angular/core';
import { AgregarFarmacosComponent } from './agregar-farmacos/agregar-farmacos.component';
import { ConsultarFarmacosComponent } from './consultar-farmacos/consultar-farmacos.component';
import { EliminarFarmacosComponent } from './eliminar-farmacos/eliminar-farmacos.component';
import { EditarFarmacosComponent } from './editar-farmacos/editar-farmacos.component';
import { FarmacosRoutingModule } from './farmacos-routing.module';
import { CommonModule } from '@angular/common';
import { MedicosModule } from 'dist/medicos/';
import { MedicamentosModule } from 'dist/medicamentos/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';



@NgModule({
  declarations: [
    AgregarFarmacosComponent,
    ConsultarFarmacosComponent,
    EliminarFarmacosComponent,
    EditarFarmacosComponent
  ],
  imports: [
    FarmacosRoutingModule,
    CommonModule,
    MedicosModule,
    MedicamentosModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    SelectButtonModule,
    MultiSelectModule,
    ListboxModule,
  ],
  exports: [
    AgregarFarmacosComponent,
    ConsultarFarmacosComponent,
    EliminarFarmacosComponent,
    EditarFarmacosComponent
  ]
})
export class FarmacosModule { }
