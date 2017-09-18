import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    MovieComponent,
  ],
  exports: [
    MovieComponent,
  ],
  providers: [
    MovieService,
  ]
})
export class MovieModule { }
