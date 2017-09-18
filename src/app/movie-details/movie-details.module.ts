import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsService } from './movie-details.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MovieDetailsComponent,
  ],
  exports: [
    MovieDetailsComponent,
  ],
  providers: [
    MovieDetailsService,
  ]
})
export class MovieDetailsModule { }
