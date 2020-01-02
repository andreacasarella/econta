import {Inject, Injectable, Injector, LOCALE_ID} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {SUPPORTED_LANGUAGES} from './supported-languages';
import * as moment from 'moment';
import {DateAdapter} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
/**
 * Facade handling i18n functionality for ngx-translate's {@link TranslateService}, Angular Material's {@link DateAdapter} and moment.js
 */
export class I18nService {

  private _languageUpdates = new BehaviorSubject<string>('en');
  language$ = this._languageUpdates.asObservable();

  private _localeUpdates = new BehaviorSubject<string>('en_US');
  locale$ = this._localeUpdates.asObservable();

  constructor(
    private _translateService: TranslateService,
    private _materialDateAdapter: DateAdapter<Date>,
    @Inject(LOCALE_ID) private locale
  ) {
    this._translateService.addLangs(SUPPORTED_LANGUAGES);
    const language = locale.substr(0, 2);
    this._setLanguage(language);
    this._setLocale(locale);
  }

  currentLanguage(): string {
    return this._translateService.currentLang;
  }

  currentLocale(): string {
    return this._localeFromLanguage(this.currentLanguage());
  }

  translate(key: string, interpolateParams?: Object): string | any {
    return this._translateService.instant(key, interpolateParams);
  }

  translateAsync(key: string, interpolations?: Object): Observable<string | any> {
    return this._translateService.get(key, interpolations);
  }

  mergeTranslations(translations: any) {
    this._translateService.setTranslation(this._translateService.currentLang, translations, true);
  }

  private _setLanguage(lang: string) {
    this._translateService.use(lang); // translations
    moment.locale(lang); // moment
    this._languageUpdates.next(lang);
  }

  /**
   * Clients of this service are supposed to set this using {setLanguageAndLocale}
   * @param lang
   * @private
   */
  private _setLocale(locale: string) {
    this._materialDateAdapter.setLocale(locale);
    this._localeUpdates.next(locale);
  }

  private _localeFromLanguage(lang: string): string {
    switch (lang) {
      case 'it':
        return 'it-CH';
      case 'en':
        return 'en-CH';
      case 'de':
        return 'de-CH';
      case 'fr':
        return 'fr-CH';
      default:
        return 'it-CH';
    }
  }

}
