import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
