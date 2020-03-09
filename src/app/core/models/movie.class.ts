import { IMovie } from './movie';

export class Movie implements IMovie{
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  imdbRating: string;

  constructor(movie: IMovie){
    this.Title = movie.Title;
    this.Year = movie.Year;
    this.imdbID = movie.imdbID;
    this.Type = movie.Type;
    this.Poster = movie.Poster;
    this.Rated = movie.Rated;
    this.Released = movie.Released;
    this.Runtime = movie.Runtime;
    this.Genre = movie.Genre;
    this.Director = movie.Director;
    this.Writer = movie.Writer;
    this.Actors = movie.Actors;
    this.Plot = movie.Plot;
    this.Language = movie.Language;
    this.Country = movie.Country;
    this.Awards = movie.Awards;
    this.imdbRating = movie.imdbRating;
  }


}
