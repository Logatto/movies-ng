import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from 'src/app/core/services/movie.service';
import { IMovie } from 'src/app/core/models/movie';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.sass']
})
export class SearchNavComponent implements OnInit {
  @Output() moviesSearched = new EventEmitter<IMovie[]>();

  public searchForm = new FormGroup({
    search: new FormControl("", Validators.required),
  });

  constructor(private router: Router, private movieService: MovieService) { }

  search(searchValues: any){
    const { search } = searchValues;
    this.movieService.searchMovies(search).subscribe((movies) => {
      this.moviesSearched.emit(movies);
    });
  }

  ngOnInit(): void {
  }

}
