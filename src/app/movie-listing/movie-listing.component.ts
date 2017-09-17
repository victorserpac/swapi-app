import { Component } from '@angular/core';
import { MovieService } from '../movie/movie.service';
// import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'movie-listing',
  templateUrl: './movie-listing.component.html',
})

export class MovieListingComponent {
  message: string;
  movies;
  service;

  constructor(service: MovieService) {
    this.service = service;
    
    service.list()
      .then(movies => this.movies = movies)
      .catch(msg => this.message = msg);
  }
}
