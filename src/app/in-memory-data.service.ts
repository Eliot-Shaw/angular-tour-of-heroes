import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, nom_legendaire: "Clacloum", lvl: 99 },
      { id: 2, nom_legendaire: "Docteur Gentil", lvl: 10 },
      { id: 3, nom_legendaire: "Bombasto", lvl: 25 },
      { id: 4, nom_legendaire: "Celeritas", lvl: 40 },
      { id: 5, nom_legendaire: "Magnéta", lvl: 15 },
      { id: 6, nom_legendaire: "Homme Caoutchouc", lvl: 5 },
      { id: 7, nom_legendaire: "Dynama", lvl: 3 },
      { id: 8, nom_legendaire: "Docteur QI", lvl: 45 },
      { id: 9, nom_legendaire: "Magma", lvl: 30 },
      { id: 10, nom_legendaire: "Tornade", lvl: 7 },
      { id: 11, nom_legendaire: "Foudre", lvl: 20 },
      { id: 12, nom_legendaire: "Tempête de Feu", lvl: 35 },
      { id: 13, nom_legendaire: "Brise-Glace", lvl: 12 },
      { id: 14, nom_legendaire: "Ouilliam", lvl: 100 },
      { id: 15, nom_legendaire: "Frappe d'Ombre", lvl: 8 },
      { id: 16, nom_legendaire: "Tourbillon", lvl: 55 },
      { id: 17, nom_legendaire: "Éclat de Soleil", lvl: 70 },
      { id: 18, nom_legendaire: "Rayon de Lune", lvl: 25 },
      { id: 19, nom_legendaire: "Morsure de Gel", lvl: 45 },
      { id: 20, nom_legendaire: "Étoile Filante", lvl: 30 },
      { id: 21, nom_legendaire: "Flamme", lvl: 80 },
      { id: 22, nom_legendaire: "Fureur", lvl: 55 },
      { id: 23, nom_legendaire: "Vague de Marée", lvl: 40 },
      { id: 24, nom_legendaire: "Ombre de Nuit", lvl: 15 },
      { id: 25, nom_legendaire: "Phénix", lvl: 65 },
      { id: 26, nom_legendaire: "Éclipse", lvl: 5 },
      { id: 27, nom_legendaire: "Tempête", lvl: 50 },
      { id: 28, nom_legendaire: "Spectre", lvl: 8 },
      { id: 29, nom_legendaire: "Avalanche", lvl: 60 },
      { id: 30, nom_legendaire: "Enfer", lvl: 75 },
      { id: 31, nom_legendaire: "Çof", lvl: 87 },
      { id: 32, nom_legendaire: "Radiance", lvl: 5 },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}