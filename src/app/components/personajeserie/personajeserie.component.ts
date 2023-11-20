import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { ServiceSeries } from 'src/app/services/service.series';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajeserie',
  templateUrl: './personajeserie.component.html',
  styleUrls: ['./personajeserie.component.css']
})
export class PersonajeserieComponent implements OnInit{

  public personajes!:Array<Personajes>
  constructor(private _serviceSeries: ServiceSeries,private _activeRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
      this._activeRoute.params.subscribe((parametros:Params)=>{
        var id = parametros['id']
        this._serviceSeries.getPersonajes(id).subscribe((response)=>{
          this.personajes=response
        })
      })
  }

}
