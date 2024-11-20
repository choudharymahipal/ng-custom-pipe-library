import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
})
export class FlattenPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.reduce(
      (acc, val) => acc.concat(Array.isArray(val) ? this.flatten(val) : val),
      []
    );
  }

  private flatten(array: any[]): any[] {
    return array.reduce(
      (acc, val) => acc.concat(Array.isArray(val) ? this.flatten(val) : val),
      []
    );
  }
}
