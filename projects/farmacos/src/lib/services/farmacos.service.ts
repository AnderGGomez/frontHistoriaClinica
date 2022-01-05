import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FarmacosService {

  constructor(private http: HttpClient,
    private router          : Router) { }

  private apiURL = "http://localhost:8080/farmacos/"

  public agregarFarmaco(herencia: any): any{
    return this.http.post<any>(this.apiURL, herencia)
  }

  public obtenerFarmacos(): any{
    return this.http.get<any>(this.apiURL+"getAll");
  }

  public obtenerFarmacosByHistoria(id : number | undefined): any{
    return this.http.get<any>(this.apiURL+"getAll/"+ id);
  }

  public obtenerFarmaco(id:number | undefined): any {
    
    return this.http.get<any>(this.apiURL+id);
  }

  public editarFarmaco(id: number, herencia: any): any{
    return this.http.put<any>(this.apiURL+id, herencia);
  }
  
  public eliminarFarmaco(id: number | undefined): any{
    return this.http.delete<any>(this.apiURL+id);
  }

  public existeFarmaco(id: number): any{
    return this.http.get<any>(this.apiURL+"exist/"+id);
  }
}
