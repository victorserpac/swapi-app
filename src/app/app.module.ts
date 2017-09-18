// Importando dependencias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importando o router
import { routing } from './app.routes';

// Importando componentes
import { AppComponent } from './app.component';
import { MovieListingComponent } from './movie-listing/movie-listing.component';

// Importando modulos
import { MovieModule } from './movie/movie.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

// Declarando modulo
@NgModule({
  imports: [
    BrowserModule,
    routing,
    MovieModule,
  ],
  declarations: [
    AppComponent,
    MovieListingComponent,
    MovieDetailsComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
