import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    score: 9,
    name: "Speedy"
  };

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
