import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password-change',
    loadChildren: () => import('./password-change/password-change.module').then( m => m.PasswordChangePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },

  {
    path: 'barcode-scanning',
    loadChildren: () => import('./barcode-scanning/barcode-scanning.module').then( m => m.BarcodeScanningPageModule)
  },


  {
    path: 'controller',
    loadChildren: () => import('./Admin/controller/controller.module').then( m => m.ControllerPageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
