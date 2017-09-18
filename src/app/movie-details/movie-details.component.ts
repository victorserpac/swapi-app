import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from './movie-details.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  service: MovieDetailsService;
  status: boolean;

  openingCrawl: string;
  title: string;
  director: string;
  producer: string;
  releaseDate: string;
  episodeId: string;


  constructor(service: MovieDetailsService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.setComponent(this);
  }

  setData(data) {
    this.title = data.title;
    this.openingCrawl = data.opening_crawl;
    this.director = data.director;
    this.producer = data.producer;
    this.episodeId = data.episode_id;
    this.releaseDate = data.release_date.split('-').reverse().join('/')
  }

  openComponent() {
    this.status = true;
  }

  closeComponent() {
    this.status = false;
  }

}
