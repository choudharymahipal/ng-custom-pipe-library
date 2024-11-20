import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapper',
})
export class MapperPipe implements PipeTransform {
  transform(array: any[], mappingFunction: (item: any) => any): any[] {
    return array.map(mappingFunction);
  }
}
