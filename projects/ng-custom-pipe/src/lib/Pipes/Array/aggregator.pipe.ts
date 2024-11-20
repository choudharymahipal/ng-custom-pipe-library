import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aggregator',
})
export class AggregatorPipe implements PipeTransform {
  transform(array: number[], operation: 'sum' | 'average'): number {
    if (!array || !array.length) return 0;
    return operation === 'average'
      ? array.reduce((acc, curr) => acc + curr, 0) / array.length
      : array.reduce((acc, curr) => acc + curr, 0);
  }
}
