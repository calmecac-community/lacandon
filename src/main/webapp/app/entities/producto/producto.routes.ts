import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import ProductoResolve from './route/producto-routing-resolve.service';

const productoRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/producto.component').then(m => m.ProductoComponent),
    data: {
      defaultSort: `id,${ASC}`,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    loadComponent: () => import('./detail/producto-detail.component').then(m => m.ProductoDetailComponent),
    resolve: {
      producto: ProductoResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    loadComponent: () => import('./update/producto-update.component').then(m => m.ProductoUpdateComponent),
    resolve: {
      producto: ProductoResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./update/producto-update.component').then(m => m.ProductoUpdateComponent),
    resolve: {
      producto: ProductoResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default productoRoute;
