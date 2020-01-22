import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { CarListComponent } from './car-list/car-list.component';


const routes: Routes = [

  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {path:'cars',component:CarListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
