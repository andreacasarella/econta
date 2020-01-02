import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, APP_INITIALIZER, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import {I18nModule} from './i18n/i18n.module';
import {i18nAppInitializer} from './i18n/i18n-app-initializer';
import { SharedModulesModule } from './shared/shared-modules.module';
import { SharedComponentsModule } from './shared/shared-components.module';
import { AuthModule } from './auth/auth.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
registerLocaleData(localeEn);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModulesModule,
    SharedComponentsModule,
    AuthModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    I18nModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: i18nAppInitializer, deps: [Injector], multi: true},
    {provide: LOCALE_ID, useValue: 'en'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
