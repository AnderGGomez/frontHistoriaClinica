import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }

  public agregarPaciente(paciente: any): any{
    return this.http.post<any>("http://localhost:8080/paciente", paciente)
  }

  public obtenerPacientes(): any{
    return this.http.get<any>("http://localhost:8080/paciente/getAll");
  }

  public obtenerPaciente(id:number): any {
    return this.http.get<any>("http://localhost:8080/paciente/"+id);
  }

  public editarPaciente(id: number, paciente: any): any{
    return this.http.put<any>("http://localhost:8080/paciente/"+id, paciente);
  }
  
  public eliminarPaciente(id: number | undefined): any{
    return this.http.delete<any>("http://localhost:8080/paciente/"+id);
  }



}
