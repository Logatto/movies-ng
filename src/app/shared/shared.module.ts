import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [MovieCardComponent],
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
    MovieCardComponent
  ]
})
export class SharedModule { }
