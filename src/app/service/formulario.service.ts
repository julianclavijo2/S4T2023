import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getRegistrosAnteriores(email:string , id:number){
    return this.http.get(`https://api.spfco.cheil.com.co/v1/api/Registros/ChekRegistrosAnteriores/${email}/${id}`);
  }

  postRegitro(form:any){
    return this.http.post(`https://api.spfco.cheil.com.co/v1/api/Registros/PostRegistro` , form , {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }



}
