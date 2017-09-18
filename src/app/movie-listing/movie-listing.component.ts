import { Component } from '@angular/core';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: [
    './movie-listing.component.css',
  ]
})

export class MovieListingComponent {
  message: string;
  movies;
  service;

  constructor(service: MovieService) {
    this.service = service;
    
    service.list()
      .then(movies => {
        this.movies = movies;
      })
      .catch(msg => this.message = msg);
  }
}
