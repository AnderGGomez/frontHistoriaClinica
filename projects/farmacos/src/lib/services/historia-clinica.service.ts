import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  constructor(private http: HttpClient) { }
  apiURL="http://localhost:8080/historia/";


  public obtenerHistoria(id:number): any {
    return this.http.get<any>(this.apiURL+id);
  }

  public existeHistoria(id: number | undefined): any{
    return this.http.get<any>(this.apiURL+"exist/"+id);
  }
}
