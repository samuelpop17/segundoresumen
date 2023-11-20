import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Series } from 'src/app/models/series';
import { Personajes } from 'src/app/models/personajes';
import { ServiceSeries } from 'src/app/services/service.series';
import { Route, Params, ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit {
  public personajes!: Array<Personajes>
  public series!: Array<Series>
  @ViewChild('cajapersonaje') cajaPersonajeRef!: ElementRef;
  @ViewChild('cajaserie') cajaSerieRef!: ElementRef;

  constructor(private _serviceSeries: ServiceSeries, private _router: Router) {

  }

  ngOnInit(): void {
    this._serviceSeries.getAllPersonajes().subscribe((response) => {
      this.personajes = response
    })
    this._serviceSeries.getSeries().subscribe((response) => {
      this.series = response
    })
  }
  ModificarPersonaje() {

    var per=this.cajaPersonajeRef.nativeElement.value
    var ser=this.cajaSerieRef.nativeElement.value

    this._serviceSeries.modificarperosnaje(per,ser).subscribe((response)=>{
      this._router.navigate(['/personajes/'+ser])
    })
  }
}
