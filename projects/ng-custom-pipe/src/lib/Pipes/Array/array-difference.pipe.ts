import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayDifference',
})
export class ArrayDifferencePipe implements PipeTransform {
  transform(arr1: any[], arr2: any[]): any[] {
    return arr1.filter((item) => arr2.includes(item));
  }
}
