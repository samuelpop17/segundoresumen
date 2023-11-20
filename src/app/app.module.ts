import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';
import { NuevopersonajeComponent } from './components/nuevopersonaje/nuevopersonaje.component';
import { PersonajeserieComponent } from './components/personajeserie/personajeserie.component';
import { SerieComponent } from './components/serie/serie.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { routing, appRoutingProviders } from './app.routing';
import { ServiceSeries } from './services/service.series';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ModificarpersonajeComponent,
    NuevopersonajeComponent,
    PersonajeserieComponent,
    SerieComponent,
    SeguridadComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders,ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
