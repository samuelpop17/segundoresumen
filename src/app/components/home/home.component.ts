import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/models/empleado';
import { ServiceSeries } from 'src/app/services/service.series';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
public empleados!:Array<Empleados>

constructor(private _serviceSeries: ServiceSeries,) {
  
}
ngOnInit(): void {
    this._serviceSeries.getEmpleados().subscribe((response)=>{

      this.empleados=response
    })
}
}
