import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Mfe2Module } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(Mfe2Module)
  .catch((err) => console.error(err));
