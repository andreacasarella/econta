import {I18nService} from "./i18n.service";
import {Injector} from "@angular/core";
import {constants} from "../../environments/constants";

export const i18nAppInitializer = (injector: Injector) => async () => {
  const i18n = injector.get(I18nService);
  // await on this translation to make sure that initializer completes only once translations are available (have been loaded)
  await i18n.translateAsync(constants.i18nTranslationsAvailabilityCheck).toPromise();
};
