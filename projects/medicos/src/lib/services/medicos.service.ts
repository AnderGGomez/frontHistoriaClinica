import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '../model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) { }

  public agregarMedico(medico: Medico): any{
    return this.http.post<any>("http://localhost:8080/medico", medico)
  }

  public obtenerMedicos(): any{
    return this.http.get<any>("http://localhost:8080/medico/getAll");
  }

  public obtenerMedico(id:number): any {
    return this.http.get<any>("http://localhost:8080/medico/"+id);
  }

  public editarMedico(id: number, medico: Medico): any{
    return this.http.put<any>("http://localhost:8080/medico/"+id, medico);
  }
  
  public eliminarMedico(id: number | undefined): any{
    return this.http.delete<any>("http://localhost:8080/medico/"+id);
  }
}
