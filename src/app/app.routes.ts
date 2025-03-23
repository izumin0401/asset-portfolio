import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NavigationComponent } from './features/navigation/navigation.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'menu', component: NavigationComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
