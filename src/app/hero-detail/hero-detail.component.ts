import {Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  
  @Input() hero?: Hero;
  
  experience = 0;
  
  ngOnInit(): void {
    this.getHero();
  }
  
  neededXP(lvl: number) {
    var res = Math.round(lvl*Math.PI);
    if(res == 0) res = 1;
    return res;
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

  saveChanges(){
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  pex(){
    if (this.hero) {
      this.experience++;

      
      if(this.experience >= this.neededXP(this.hero.lvl)){
        this.hero.lvl++;
        this.experience=0;

        this.heroService.updateHero(this.hero)
          .subscribe(() => this.annonceLvlUp());
      }
    }
  }

  annonceLvlUp(){
    window.alert("Vous avez monté de niveau !");
  }
}