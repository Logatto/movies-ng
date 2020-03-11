import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.class';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  actionFavorite(){
    this.movieService.addOrRemoveFavorite(this.movie);
  }

  colorFavorite(){
    return this.movieService.existMovie(this.movie) ? 'primary' : 'accent';
  }

}
