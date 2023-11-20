import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ModificarpersonajeComponent } from "./components/modificarpersonaje/modificarpersonaje.component";
import { NuevopersonajeComponent } from "./components/nuevopersonaje/nuevopersonaje.component";
import { PersonajeserieComponent } from "./components/personajeserie/personajeserie.component";
import { SeguridadComponent } from "./components/seguridad/seguridad.component";
import { SerieComponent } from "./components/serie/serie.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "modificarpersonaje", component: ModificarpersonajeComponent },
  { path: "nuevo", component: NuevopersonajeComponent },
  { path: "personajes/:id", component: PersonajeserieComponent },
  { path: "seguridad", component: SeguridadComponent },
  { path: "serie/:id", component: SerieComponent },
  

]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);