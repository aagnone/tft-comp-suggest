import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { ItemControllerComponent } from './components/items/item-controller/item-controller.component';
import { CompControllerComponent } from './components/compositions/comp-controller/comp-controller.component';
import { SuggestedItemsComponent } from './components/compositions/suggested-items/suggested-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemControllerComponent,
    CompControllerComponent,
    SuggestedItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
