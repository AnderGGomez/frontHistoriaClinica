import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonalesService {

 
  constructor(private http: HttpClient,
    private router          : Router) { }

  private apiURL = "http://localhost:8080/personal/"

  public agregarPersonal(herencia: any): any{
    return this.http.post<any>(this.apiURL, herencia)
  }

  public obtenerPersonales(): any{
    return this.http.get<any>(this.apiURL+"getAll");
  }

  public obtenerPersonalByHistoria(id : number | undefined): any{
    return this.http.get<any>(this.apiURL+"getAll/"+ id);
  }

  public obtenerPersonal(id:number): any {
    
    return this.http.get<any>(this.apiURL+id);
  }

  public editarPersonal(id: number, herencia: any): any{
    return this.http.put<any>(this.apiURL+id, herencia);
  }
  
  public eliminarPersonal(id: number | undefined): any{
    return this.http.delete<any>(this.apiURL+id);
  }

  public existePersonal(id: number): any{
    return this.http.get<any>(this.apiURL+"exist/"+id);
  }
}
