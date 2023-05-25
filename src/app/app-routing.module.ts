import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {environment} from "../environments/environment";

import {HomeComponent} from "./features/public/home/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: environment.config.homePageRoute, pathMatch: 'full'},
  {path: '**', redirectTo: environment.config.homePageRoute}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
