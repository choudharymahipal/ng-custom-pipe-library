import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distinct',
})
export class DistinctPipe implements PipeTransform {
  transform(value: any[], key?: string): any[] {
    return key
      ? [...new Map(value.map((item) => [item[key], item])).values()]
      : [...new Set(value)];
  }
}
