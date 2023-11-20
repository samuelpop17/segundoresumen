import { Component,OnInit , ElementRef, ViewChild} from '@angular/core';
import { Series } from 'src/app/models/series';
import { ServiceSeries } from 'src/app/services/service.series';
import { Router } from '@angular/router';
import { Personajes } from 'src/app/models/personajes';

@Component({
  selector: 'app-nuevopersonaje',
  templateUrl: './nuevopersonaje.component.html',
  styleUrls: ['./nuevopersonaje.component.css']
})
export class NuevopersonajeComponent implements OnInit{

  public series!:Array<Series>
  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajaimagen') cajaImagenRef!: ElementRef;
  @ViewChild('cajaserie') cajaSerieRef!: ElementRef;

  constructor(private _serviceSeries: ServiceSeries,
    private _router: Router) {
    
  }
  ngOnInit(): void {
      this._serviceSeries.getSeries().subscribe((response)=>{
        this.series=response
      })
  }
  CrearPersonaje(){
    var id = 0
    var nom = this.cajaNombreRef.nativeElement.value;
    var img = this.cajaImagenRef.nativeElement.value;
    var ser = parseInt(this.cajaSerieRef.nativeElement.value);
    var nper =new Personajes(id,nom,img,ser)
    this._serviceSeries.nuevoPersonaje(nper).subscribe((response)=>{
      this._router.navigate(['/personajes/'+ser])
    })
  }
}
