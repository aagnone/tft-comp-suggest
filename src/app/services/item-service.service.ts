import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import itemList from '../../assets/json/items.json';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  constructor() {}

  private items: Item[] = itemList;

  getItems() {
    return this.items;
  }
}
