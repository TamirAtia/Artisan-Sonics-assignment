import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})

// calculate age in years and months
export class AgePipe implements PipeTransform {
  transform(value: Date): string {
    const birthDate = moment(value);
    const today = moment();
    const years = today.diff(birthDate, 'years');
    const months = today.diff(birthDate, 'months') % 12;
    return `${years} years ${months} months`;
  }
}
