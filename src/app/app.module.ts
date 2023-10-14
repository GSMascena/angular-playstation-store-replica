import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { CardPricingPriceComponent } from './components/card/card-pricing/card-pricing-price/card-pricing-price.component';
import { CardPricingConsoleInfoComponent } from './components/card/card-pricing/card-pricing-console-info/card-pricing-console-info.component';
import { MenuBarNavComponent } from './components/menu-bar/menu-bar-nav/menu-bar-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    CardPricingPriceComponent,
    CardPricingConsoleInfoComponent,
    MenuBarNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
