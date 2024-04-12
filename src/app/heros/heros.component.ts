import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeros();
  }

  heros: Hero[] = [];
  
  getHeros(): void {
    this.messageService.add(`HerosComponent : got Heros`)
    this.heroService.getHeros()
    .subscribe(heros => this.heros = heros);
  }
  
  getHero(id: number): Observable<Hero>  {
    this.messageService.add(`HerosComponent : got hero #${id}`)
    return this.heroService.getHero(id);
  }
}
