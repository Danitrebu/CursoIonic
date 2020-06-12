import { Component, OnInit } from '@angular/core';

import { Fruit } from '../../models/fruit.model';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruits-list-page',
  templateUrl: 'fruits-list.page.html',
  styleUrls: ['fruits-list.page.scss'],
})
export class FruitsListPage implements OnInit {

  public fruits: Fruit[];

  constructor(
    private fruitsService: FruitsService
  ) {

  }

  public ngOnInit(): void {

    this.fruits = this.fruitsService.getFruits();
  }

  public deleteFruit(index: number): void {

    console.log('TODO: Remove fruit index', index);
  }
}
