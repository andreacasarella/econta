import { Pipe, PipeTransform } from '@angular/core';
import { DateFormats } from '../util/date-formats';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
/**
 * See {DateFormats} for available display formats
*/
export class MomentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    const format = DateFormats.getDisplay(args || 'dateInput');
    if (format == null) {
      throw new Error(`UnknownFormat : ${format}`);
    }
    return (value as moment.Moment).format(format);
  }


}
