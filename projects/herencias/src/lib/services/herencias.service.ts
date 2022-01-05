import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HerenciasService {

  constructor(private http: HttpClient,
    private router          : Router) { }

  private apiURL = "http://localhost:8080/herencia/"

  public agregarHerencia(herencia: any): any{
    return this.http.post<any>(this.apiURL, herencia)
  }

  public obtenerHerencias(): any{
    return this.http.get<any>(this.apiURL+"getAll");
  }

  public obtenerHerenciasByHistoria(id : number | undefined): any{
    return this.http.get<any>(this.apiURL+"getAll/"+ id);
  }

  public obtenerHerencia(id:number): any {
    
    return this.http.get<any>(this.apiURL+id);
  }

  public editarHerencia(id: number, herencia: any): any{
    return this.http.put<any>(this.apiURL+id, herencia);
  }
  
  public eliminarHerencia(id: number | undefined): any{
    return this.http.delete<any>(this.apiURL+id);
  }

  public existeHerencia(id: number): any{
    return this.http.get<any>(this.apiURL+"exist/"+id);
  }

}
