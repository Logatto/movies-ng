import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from 'src/app/core/models/movie.class';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  movieId: String;
  movie: Movie;

  constructor(private movieService: MovieService, route: ActivatedRoute) {
    const { movieId } = route.params.getValue();
    if(movieId){
      this.movieId = movieId;
    }
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.movieId).subscribe((movie: Movie) => {
      console.log("MOVI ", movie);
      this.movie = movie;
    });
  }

}
