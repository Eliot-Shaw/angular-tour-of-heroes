import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './faux_heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    const heros = of(HEROS);
    this.messageService.add(`HeroService : got ${HEROS.length} heros !`);
    return heros;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROS.find(h => h.id === id);
    if(hero) {
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(hero);
    }
    else this.messageService.add(`HeroService: could not fetch hero id=${id} !`);
    return of(hero!); // todo sould not be returning anything
  }
}