import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CustomManifest } from "./config";
import { routes } from '../app.routes';

export function buildRoutes(options: CustomManifest): Routes {
  const lazyRoutes: Routes = [];

  // Iterate through the manifest and load dynamic routes
  for (const key of Object.keys(options)) {
    const entry = options[key];

    lazyRoutes.push({
      title: entry.displayName,
      path: entry.routePath,
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: entry.remoteName,
          exposedModule: entry.exposedModule,
        })
          .then(m => m[entry.ngModuleName])
          .catch(error => {
            console.error(error);
          })
    });
  }

  // Merge the remote routes with the dynamic routes
  const allRoutes: Routes = [
    ...routes,  // Add the remote route configuration
    ...lazyRoutes     // Add the dynamically generated routes
  ];

  return allRoutes;
}
