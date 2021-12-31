import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicamento } from '../model/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor(private http: HttpClient) { }
  apiURL="http://localhost:8080/medicamento/";

  public agregarMedicamento(medicamento: Medicamento): any{
    return this.http.post<any>(this.apiURL, medicamento)
  }

  public obtenerMedicamentos(): any{
    return this.http.get<any>(this.apiURL+"getAll");
  }

  public obtenerMedicamento(id:number): any {
    return this.http.get<any>(this.apiURL+id);
  }

  public editarMedicamento(id: number, medicamento: Medicamento): any{
    return this.http.put<any>(this.apiURL+id, medicamento);
  }
  
  public eliminarMedicamento(id: number | undefined): any{
    return this.http.delete<any>(this.apiURL+id);
  }
}
