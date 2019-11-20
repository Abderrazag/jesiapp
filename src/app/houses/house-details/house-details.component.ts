import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { HousesService } from '../houses.service';
import { House } from '../House';
import { Character } from '../../characters/Character';
import { Observable } from 'rxjs';
import { CharactersService } from 'src/app/characters/characters.service';


@Component({
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent implements OnInit {

  public house$!: Observable<House>;
  public characters$!: Observable<Character[]>;

  constructor(private route: ActivatedRoute, private readonly router: Router, private housesService: HousesService, private charactersService: CharactersService) {}


  public ngOnInit(): void {
    this.getHouseModel();
    this.getCharacterModel();
  }

  private getHouseId(): string {
    return this.route.snapshot.params.id;
  }

  private getHouseModel(): void {
    const id = parseInt(this.getHouseId(), 10);
    this.house$ = this.housesService.getHouse(id);
  }

  public goHome() {
    this.router.navigateByUrl('/houses');
  }

  private getCharacterModel(): void {
    const id = parseInt(this.getHouseId(), 10);
    this.characters$ = this.charactersService.listHouseCharacters(id);
  }

}
