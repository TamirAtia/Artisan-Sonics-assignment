import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'lmp'
})

// calculate gestational age in weeks and days
export class LmpPipe implements PipeTransform {
  transform(value: Date): string {
    const lmp = moment(value);
    const now = moment();
    const diff = now.diff(lmp, 'weeks', true);
    const weeks = Math.floor(diff);
    const days = Math.round((diff - weeks) * 7);
    return `${weeks}w${days}d`;
  }
}
