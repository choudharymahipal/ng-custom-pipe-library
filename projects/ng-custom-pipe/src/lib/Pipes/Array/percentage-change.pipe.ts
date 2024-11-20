import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageChange',
})
export class PercentageChangePipe implements PipeTransform {
  transform(oldValue: number, newValue: number): number {
    if (oldValue === 0) return 0;
    return ((newValue - oldValue) / oldValue) * 100;
  }
}
