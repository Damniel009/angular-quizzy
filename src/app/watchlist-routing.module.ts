import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserComponent } from './watchlist/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './watchlist/dashboard-admin/dashboard-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './watchlist/user-page/user-page.component';
import { WatchlistPageComponent } from './watchlist/watchlist-page/watchlist-page.component';
import { LoginComponent } from './watchlist/login/login.component';
import { AuthenticationWatchlistGuard } from './watchlist/services/guard/authentication-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardUserComponent,
    canActivate: [AuthenticationWatchlistGuard],
  },
  {
    path: 'home-admin',
    component: DashboardAdminComponent,
    canActivate: [AuthenticationWatchlistGuard],
  },
  {
    path: 'user',
    component: UserPageComponent,
    canActivate: [AuthenticationWatchlistGuard],
  },
  {
    path: 'watchlist',
    component: WatchlistPageComponent,
    canActivate: [AuthenticationWatchlistGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationWatchlistGuard],
})
export class WatchlistRoutingModule {}
