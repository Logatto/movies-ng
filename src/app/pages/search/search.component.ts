import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from 'src/app/core/models/movie.class';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [MovieService]
})
export class SearchComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  word: String;

  constructor(private movieService: MovieService, route: ActivatedRoute) {
    const { word } = route.params.getValue();
    if(word){
      this.word = word;
    }
  }

  ngOnInit(): void {
    // this.movieService.searchMovies(this.word).subscribe((movies: Movie[]) => {
    //   console.log("MOVIE ", movies);
    //   this.movies = movies;

    // });
  }

  ngOnDestroy(){
  }

  getMoviesSearched($event){
    this.movies = $event;
  }

}
