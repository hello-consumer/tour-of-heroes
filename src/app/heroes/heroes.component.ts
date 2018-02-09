import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService) { }
    ngOnInit() {
        this.getHeroes();
    }
    heroes: Hero[];
    
    getHeroes(): void {
        this.heroService.getHeroes().subscribe(results => {this.heroes = results});
    }
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.addHero({ name } as Hero).subscribe(hero => {this.heroes.push(hero);});
    }
}
