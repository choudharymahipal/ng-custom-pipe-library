import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomItem',
})
export class RandomItemPipe implements PipeTransform {
  transform(array: any[]): any {
    return array.length
      ? array[Math.floor(Math.random() * array.length)]
      : null;
  }
}
