import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { Item } from '../../../models/Item';
@Component({
  selector: 'app-item-controller',
  templateUrl: './item-controller.component.html',
  styleUrls: ['./item-controller.component.scss'],
})
export class ItemControllerComponent implements OnInit {
  constructor(private itemService: ItemServiceService) {}

  items: Item[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.items.push(this.itemService.getItems()[i]);
    }
  }

  selectedValue = {
    Sword: 0,
    Bow: 0,
    Rod: 0,
    Tear: 0,
    Vest: 0,
    Cloak: 0,
    Belt: 0,
    Spat: 0,
    Glove: 0,
  };
  updateSetting(event, itemType) {
    this.selectedValue[itemType] = event.value;
  }
}
