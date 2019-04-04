import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataentryComponent } from './dataentry/dataentry.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'senddata', component: DataentryComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
