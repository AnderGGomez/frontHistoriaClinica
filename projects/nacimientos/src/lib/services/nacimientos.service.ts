import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NacimientosService {
  
  constructor(private http: HttpClient,
    private router          : Router) { }

  private apiURL = "http://localhost:8080/nacimiento/"

  public agregarNacimiento(herencia: any): any{
    return this.http.post<any>(this.apiURL, herencia)
  }

  public obtenerNacimientos(): any{
    return this.http.get<any>(this.apiURL+"getAll");
  }

  public obtenerNacimientoByHistoria(id : number | undefined): any{
    return this.http.get<any>(this.apiURL+"getAll/"+ id);
  }

  public obtenerNacimiento(id:number | undefined): any {
    
    return this.http.get<any>(this.apiURL+id);
  }

  public editarNacimiento(id: number, herencia: any): any{
    return this.http.put<any>(this.apiURL+id, herencia);
  }
  
  public eliminarNacimiento(id: number | undefined): any{
    return this.http.delete<any>(this.apiURL+id);
  }

  public existeNacimiento(id: number): any{
    return this.http.get<any>(this.apiURL+"exist/"+id);
  }
}
