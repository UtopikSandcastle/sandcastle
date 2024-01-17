import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'security',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'security',
        exposedModule: './Component'
      })
      .then((m: { AppComponent: any; }) => m.AppComponent)
  }
];
