import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EspecificacionesComponent } from "./components/especificaciones/especificaciones.component";
import { HomeComponent } from "./components/home/home.component";


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "espe", component: EspecificacionesComponent },
  

]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);