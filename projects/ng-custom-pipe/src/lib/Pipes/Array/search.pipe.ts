import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchFields: string[]): any[] {
    if (!items || !searchText) return items;
    return items.filter((item) =>
      searchFields.some((field) =>
        item[field].toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }
}
