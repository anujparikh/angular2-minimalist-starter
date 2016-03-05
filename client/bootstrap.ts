import {enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {HttpUtil} from './core/http.util';
import {AppComponent} from './components/app/app.component';
import {ContactService} from './components/contact/contact.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

if (window['IS_PROD'] === 'true') {
  enableProdMode();
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  HttpUtil,
  ContactService
]);
