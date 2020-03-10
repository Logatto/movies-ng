import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../models/movie.class';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private REST_API_KEY = "f12ba140";
  private REST_API_SERVER = `https://www.omdbapi.com?apiKey=${this.REST_API_KEY}`;

  constructor(private httpClient: HttpClient) { }

  public searchMovies(search: String = "game"): Observable<Movie[]> {
    const options = { params: new HttpParams({fromString: `s=${search}`}) };
    return this.httpClient
      .get<Movie[]>(this.REST_API_SERVER, options )
      .pipe(
        map((data) => { return 'Search' in data ? data.Search.map(movie => new Movie(movie)) : [] }) ,
        catchError(this.handleError )
      );
  }


  public getMovieById(movieId: String): Observable<Movie> {
    const options = { params: new HttpParams({fromString: `i=${movieId}&plot=full`}) };
    return this.httpClient
      .get<Movie>(this.REST_API_SERVER, options )
      .pipe(
        map((movie) => { return ('Response' in movie && movie['Response'] == 'True') ? new Movie(movie) : null }) ,
        catchError(this.handleError )
      );
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
