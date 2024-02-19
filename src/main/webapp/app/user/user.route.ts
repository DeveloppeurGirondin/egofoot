import { Routes } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRouteAccessService } from '../core/auth/user-route-access.service';

const userRoutes: Routes = [
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [UserRouteAccessService],
  },
];

export default userRoutes;
