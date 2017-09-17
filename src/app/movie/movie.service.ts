import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class MovieService {
  http: Http;
  headers: Headers;
  url: string = 'https://swapi.co/api/films/';

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append( 'Content-Type', 'application/json' );
  }

  list() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .subscribe(res => {
          const movies = res.json().results;

          resolve(movies);
        });
    });
  }

}
