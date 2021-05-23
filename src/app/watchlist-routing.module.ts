import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserComponent } from './watchlist/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './watchlist/dashboard-admin/dashboard-admin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardUserComponent,
  },
  {
    path: 'home-admin',
    component: DashboardAdminComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class WatchlistRoutingModule {}