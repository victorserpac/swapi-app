import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { MovieService } from '../movie/movie.service';

@Injectable()
export class MovieDetailsService {
  service;
  component;

  constructor(service: MovieService) {
    this.service = service;
  }

  setComponent(component) {
    this.component = component;
  }

  showDetails(url) {
    this.service.getByUrl(url)
      .then(movie => {
        this.component.setData(movie);
        this.component.openComponent();
      });
  }

}
