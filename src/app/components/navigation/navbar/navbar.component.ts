import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private appService: AppServiceService) {}

  display: string = 'Items';

  ngOnInit(): void {}

  updateSetting(e) {
    this.appService.changeView();
    this.display = this.appService.getIsItem() ? 'Items' : 'Comps';
  }
}
