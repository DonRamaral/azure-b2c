import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalService, BroadcastService, MsalModule } from '@azure/msal-angular';
import { AppConfigService } from './services/app-config/app-config.service';
import { fetchMsalModuleConfigSynchronously } from './shared/functions/fetchMsalModuleConfigSynchronously';
import { MSAL_CONFIG } from '@azure/msal-angular/dist/msal.service';
import { CoreModule } from './core/core.module';
import { CustomInterceptorService } from './services/interceptors/custom-interceptor.service';
import { Router, RouterModule } from '@angular/router';
import { async } from '@angular/core/testing';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { UsersModule } from './modules/users/users.module';

export function loadEnvironmentConfigService(configService: AppConfigService): Function {
  return () => { return configService.loadEnvironmentConfig() };
}

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    DashboardModule,
    UsersModule,
    AuthModule
  ],
  providers: [
    AppConfigService,
    MsalService,
    BroadcastService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadEnvironmentConfigService,
      deps: [AppConfigService],
      multi: true
    },
    {
      provide: MSAL_CONFIG,
      useFactory: () => {
        return fetchMsalModuleConfigSynchronously();
      } 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      deps: [
        MsalService,
        Router
      ],
      multi: true
    }
  ],
  exports: [
    MsalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
