import { Component, Input } from '@angular/core';
import { MovieDetailsService } from '../movie-details/movie-details.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input() title;
  @Input() episodeId;
  @Input() url;
  service;

  constructor (service: MovieDetailsService) {
    this.service = service;
  }

  showDetails(url) {
    this.service.showDetails(url);
  }
}
