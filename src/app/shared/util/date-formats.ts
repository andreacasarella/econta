export class DateFormats {

  public static settings = {
    parse: {
      dateInput: 'DD.MM.YYYY'
    },
    display: {
      dateInput: 'DD.MM.YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
      fullDateTime: 'DD MMMM YYYY HH:mm:ss',
      fullDateTimeZoned: 'DD MMMM YYYY HH:mm:ss ZZ',
      backend: 'YYYY-MM-DD[T]HH:mm:ss.SSSZZ',
      hoursMinutes: 'HH:mm',
    },
  };

  public static input(): string {
    return this.settings.parse.dateInput;
  }

  public static getDisplay(fmtName: string): string {
    return this.settings.display[fmtName];
  }

}
