import { Component,OnInit } from '@angular/core';
import { Series } from '../../models/series';
import { ServiceSeries } from 'src/app/services/service.series';
import {  Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit{

  constructor(private _serviceSeries: ServiceSeries, private _activeRoute: ActivatedRoute) {}

  public serie!:Series
  ngOnInit(): void {

    this._activeRoute.params.subscribe((parametros:Params)=>{
       var id=parametros['id']
      this._serviceSeries.getSeriesId(id).subscribe((response)=>{
        this.serie=response
      })
    })
   
  }
}
