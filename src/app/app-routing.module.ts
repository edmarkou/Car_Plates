import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './views/main-page/main-page.component';
import { CarPlateEditComponent } from './views/car-plate-edit/car-plate-edit.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'edit/:id', component: CarPlateEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
