import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor() {}

  private isItem: boolean = true;

  getIsItem() {
    return this.isItem;
  }

  changeView(): void {
    this.isItem = !this.isItem;
  }
}
