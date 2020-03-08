import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [MovieCardComponent, MovieListComponent],
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
    MovieCardComponent,
    MovieListComponent
  ]
})
export class SharedModule { }
