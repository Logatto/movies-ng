import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.sass']
})
export class SearchNavComponent implements OnInit {
  wordSearch: any;

  constructor() { }

  goSearch(){
    console.log("buscando" , this.wordSearch);
  }

  ngOnInit(): void {
  }

}
