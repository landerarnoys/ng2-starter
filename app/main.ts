import '../semantic/src/definitions/modules/transition.js';

// angular bootstrap dependencies
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';

// application styles & fonts
require('font-awesome/scss/font-awesome.scss');

// bootstrap
if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [ HTTP_PROVIDERS ]);

