import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'owner', loadChildren: './../owner/owner.module#OwnerModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class RoutingModule {}
