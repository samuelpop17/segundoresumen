import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environmet';
import { Personajes } from '../models/personajes';
import { Seguridad } from '../models/seguridad';
@Injectable()
export class ServiceSeries {
  constructor(private _http: HttpClient) { }


  getSeries():Observable<any>{

    var request="api/series";
    var url=environment.url + request
    return this._http.get(url)

  }

  getSeriesId(id:string):Observable<any>{

    var request="api/series/"+id;
    var url=environment.url + request
    return this._http.get(url)

  }

  getPersonajes(id:string):Observable<any>{

    var request="api/Series/PersonajesSerie/"+id;
    var url=environment.url + request
    return this._http.get(url)

  }

  getAllPersonajes():Observable<any>{

    var url="https://apiseriespersonajes.azurewebsites.net/api/Personajes"
    return this._http.get(url)

  }

  modificarperosnaje(id1:string,id2:string):Observable<any>{
    var header = new HttpHeaders().set('content-type', 'application/json');
    var url="https://apiseriespersonajes.azurewebsites.net/api/Personajes/"+id1+"/"+id2
    return this._http.put(url,{},{headers:header})

  }


nuevoPersonaje(per:Personajes):Observable<any>{

    var header = new HttpHeaders().set('content-type', 'application/json');
    var json = JSON.stringify(per);
    var url="https://apiseriespersonajes.azurewebsites.net/api/Personajes"

    return this._http.post(url,json,{headers:header})

  }


  seguridad(usu:Seguridad):Observable<any>{
  
    var header = new HttpHeaders().set('content-type', 'application/json');
    var json = JSON.stringify(usu);
    var url="https://apiempleadoscoreoauth.azurewebsites.net/Auth/Login"

    return this._http.post(url,json,{headers:header})

  }

  getEmpleados():Observable<any>{

    var header = new HttpHeaders().set('authorization', 'bearer '+environment.token);
    var url="https://apiempleadoscoreoauth.azurewebsites.net/api/Empleados"
    return this._http.get(url,{headers:header})

  }
 
}