import { Injectable, OnDestroy, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { takeWhile } from 'rxjs/operators';
import { config } from 'process';

export let APP_CONFIG_SERVICE = new InjectionToken<string>('APP_CONFIG_SERVICE');

export let APP_CONFIG: any;

@Injectable({
  providedIn: 'root'
})
export class AppConfigService implements OnDestroy {

  private subscriptionAlive = true;

  constructor(public http: HttpClient) { 
  }

  ngOnDestroy(): void {
    this.subscriptionAlive = false;
  }

  public loadEnvironmentConfig() {
    return this.http.get('/assets/config/environment.config.json')
    .toPromise()
    .then(config => {
      APP_CONFIG = config;
    });
  }
}
