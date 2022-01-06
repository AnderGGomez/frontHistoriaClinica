import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CirugiasRoutingModule } from './cirugias-routing.module';
import { AgregarCirugiasComponent } from './agregar-cirugias/agregar-cirugias.component';
import { EditarCirugiasComponent } from './editar-cirugias/editar-cirugias.component';
import { EliminarCirugiasComponent } from './eliminar-cirugias/eliminar-cirugias.component';
import { ConsultarCirugiasComponent } from './consultar-cirugias/consultar-cirugias.component';
import { CirugiasService } from './services/cirugias.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect'
import { ListboxModule} from 'primeng/listbox';
import { MedicosModule } from '@utp/medicos';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  declarations: [
    AgregarCirugiasComponent,
    EditarCirugiasComponent,
    EliminarCirugiasComponent,
    ConsultarCirugiasComponent
  ],
  imports: [
    CirugiasRoutingModule,
    CommonModule,
    MedicosModule,
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
    AgregarCirugiasComponent,
    EditarCirugiasComponent,
    EliminarCirugiasComponent,
    ConsultarCirugiasComponent
  ],
  providers:[
    CirugiasService,
  ]
})
export class CirugiasModule { }
