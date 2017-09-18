import { RouterModule, Routes } from '@angular/router';
import { MovieListingComponent } from './movie-listing/movie-listing.component';

const appRoutes: Routes = [
  { path: '', component: MovieListingComponent }
];

export const routing = RouterModule.forRoot( appRoutes );
