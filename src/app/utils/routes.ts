import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { routes } from '../app.routes';
import { CustomManifest } from "./config";

export function buildRoutes(options: CustomManifest): Routes {
  const lazyRoutes: Routes = Object.keys(options).map(key => {
    const entry = options[key];
    return {
      path: entry.routePath,
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: key,
          exposedModule: './routes'
        })
          .then(m => m['routes'])
    }
  });

  return [...routes, ...lazyRoutes];
}