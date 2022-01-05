import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CirugiasService {

  constructor(private http: HttpClient,
    private router          : Router) { }

  private apiURL = "http://localhost:8080/cirugia/"

  public agregarCirugia(cirugias: any): any{
    return this.http.post<any>(this.apiURL, cirugias)
  }

  public obtenerCirugias(): any{
    return this.http.get<any>(this.apiURL+"getAll");
  }

  public obtenerCirugiasByHistoria(id : number | undefined): any{
    return this.http.get<any>(this.apiURL+"getAll/"+ id);
  }

  public obtenerCirugia(id:number): any {
    
    return this.http.get<any>(this.apiURL+id);
  }

  public editarCirugia(id: number, cirugias: any): any{
    return this.http.put<any>(this.apiURL+id, cirugias);
  }
  
  public eliminarCirugia(id: number | undefined): any{
    return this.http.delete<any>(this.apiURL+id);
  }

  public existeCirugia(id: number): any{
    return this.http.get<any>(this.apiURL+"exist/"+id);
  }

}
