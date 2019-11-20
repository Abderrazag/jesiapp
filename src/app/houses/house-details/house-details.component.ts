import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../houses.service';
import { House } from '../House';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent implements OnInit {

  public house$!: Observable<House>;

  constructor(private route: ActivatedRoute, private housesService: HousesService) {}


  public ngOnInit(): void {
    this.getHouseModel();
  }

  private getHouseId(): string {
    return this.route.snapshot.params.id;
  }

  private getHouseModel(): void {
    const id = parseInt(this.getHouseId(), 10);
    this.house$ = this.housesService.getHouse(id);
    console.log('houseModel: ', this.house$);
  }

}
