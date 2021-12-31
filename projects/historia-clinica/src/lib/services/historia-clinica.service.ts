import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historia } from '../model/historia';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  constructor(private http: HttpClient) { }
  apiURL="http://localhost:8080/historia/";

  public agregarHistoria(historia: Historia): any{
    return this.http.post<any>(this.apiURL, historia)
  }

  public obtenerHistorias(): any{
    return this.http.get<any>(this.apiURL+"getAll");
  }

  public obtenerHistoriaByPaciente(id:number): any {
    return this.http.get<any>(this.apiURL+"getAll/"+id);
  }

  public obtenerHistoria(id:number): any {
    return this.http.get<any>(this.apiURL+id);
  }

  public editarHistoria(id: number, historia: Historia): any{
    return this.http.put<any>(this.apiURL+id, historia);
  }
  
  public eliminarHistoria(id: number | undefined): any{
    return this.http.delete<any>(this.apiURL+id);
  }

  public haveHistoria(id: number | undefined): any{
    return this.http.get<any>(this.apiURL+"paciente/"+id);
  }

  ///provisional.
  public obtenerPaciente(id:number): any {
    return this.http.get<any>("http://localhost:8080/paciente/"+id);
  }
}
