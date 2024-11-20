import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {
  transform(array: any[], key: string): any[] {
    return array.reduce((result, currentItem) => {
      const groupKey = currentItem[key];
      (result[groupKey] = result[groupKey] || []).push(currentItem);
      return result;
    }, {});
  }
}
