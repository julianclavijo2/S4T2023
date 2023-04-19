import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {


  constructor(
  public http: HttpClient
  ) { }

  getDepartamentos() {
    return this.http.get('https://api.spfco.cheil.com.co/v1/api/Registros/GetDepartamentos');
  }
  getCiudades(id:number) {
    return this.http.get('https://api.spfco.cheil.com.co/v1/api/Registros/GetCiudadesByDeptoID/'+id);
  }
}
