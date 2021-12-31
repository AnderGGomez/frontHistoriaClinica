import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enfermedad } from '../model/enfermedad';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadesService {

  constructor(private http: HttpClient) { }
  apiURL="http://localhost:8080/enfermedad/"

  public agregarEnfermedad(enfermedad: Enfermedad): any{
    return this.http.post<any>(this.apiURL, enfermedad)
  }

  public obtenerEnfermedades(): any{
    return this.http.get<any>(this.apiURL+"getAll");
  }

  public obtenerEnfermedad(id:number): any {
    return this.http.get<any>(this.apiURL+id);
  }

  public editarEnfermedad(id: number, enfermedad: Enfermedad): any{
    return this.http.put<any>(this.apiURL+id, enfermedad);
  }
  
  public eliminarEnfermedad(id: number | undefined): any{
    return this.http.delete<any>(this.apiURL+id);
  }
}
