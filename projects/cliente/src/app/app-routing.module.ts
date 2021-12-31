import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'pacientes',
    loadChildren: ()=> import('@utp/pacientes').then((mod) => mod.PacientesModule)
  },
  {
    path: 'medicos',
    loadChildren: ()=> import('@utp/medicos').then((mod) => mod.MedicosModule)
  },
  {
    path: 'enfermedades',
    loadChildren: ()=> import('@utp/enfermedades').then((mod) => mod.EnfermedadesModule)
  },
  {
    path: 'historia-clinica',
    loadChildren: ()=> import('@utp/historia-clinica').then((mod) => mod.HistoriaClinicaModule)
  },
  {
    path: 'medicamentos',
    loadChildren: ()=> import('@utp/medicamentos').then((mod) => mod.MedicamentosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
