import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarPlatesComponent } from './components/car-plates/car-plates.component';
import { CarPlateComponent } from './components/car-plate/car-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarPlatesComponent,
    CarPlateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
