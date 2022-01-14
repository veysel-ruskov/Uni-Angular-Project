import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  colors: string[]
  favoriteColor!: string;

  constructor() {
    this.colors = ['red', 'green', 'blue']
    
  }

  ngOnInit(): void {
  }

}
