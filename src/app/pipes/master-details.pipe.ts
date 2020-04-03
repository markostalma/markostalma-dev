import { Pipe, PipeTransform } from '@angular/core';
import { Items } from '../data/works'

@Pipe({
  name: 'masterDetails'
})
export class MasterDetailsPipe implements PipeTransform {

  transform(allItems: Items[], itemSlug: string): any {
    return allItems.filter(item => item.slugname === itemSlug);
  }

}
