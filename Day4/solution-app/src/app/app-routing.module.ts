import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sandbox',
    pathMatch: 'full'
  },
  {
    path: 'sandbox',
    loadChildren: () =>
      import('./pages/sandbox/sandbox.module')
        .then(m => m.SandboxPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
