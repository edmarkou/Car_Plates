import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarPlatesComponent } from './components/car-plates/car-plates.component';
import { CarPlateComponent } from './components/car-plate/car-plate.component';
import { CarPlateSearchComponent } from './components/car-plate-search/car-plate-search.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CarPlateEditComponent } from './views/car-plate-edit/car-plate-edit.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { CarPlateEditorComponent } from './components/car-plate-editor/car-plate-editor.component';
import { NgxPaginationModule } from 'ngx-pagination';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarPlatesComponent,
    CarPlateComponent,
    CarPlateSearchComponent,
    CarPlateEditComponent,
    MainPageComponent,
    CarPlateEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
