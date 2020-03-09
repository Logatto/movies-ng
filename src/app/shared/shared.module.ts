import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SearchNavComponent } from './components/search-nav/search-nav.component';

@NgModule({
  declarations: [SearchNavComponent, MovieCardComponent, MovieListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SearchNavComponent,
    MovieCardComponent,
    MovieListComponent,
  ]
})
export class SharedModule { }
