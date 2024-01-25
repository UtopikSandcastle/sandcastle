import { initFederation } from '@angular-architects/module-federation';
import { environment } from './environments/environment.development';

initFederation(environment.mfManifest, false)
  .catch((err: unknown) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err: unknown) => console.error(err));
