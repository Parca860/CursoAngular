import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './components/services/heroes.services';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import {BusquedaHeroeComponent } from './components/busquedaHeroes/busquedaHeroes.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaHeroeComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
