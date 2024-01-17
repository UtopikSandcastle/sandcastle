import { initFederation } from '@angular-architects/module-federation';

initFederation('/assets/mf.manifest.json')
  .catch((err: any) => console.error(err))
  .then((_: any) => import('./bootstrap'))
  .catch((err: any) => console.error(err));
