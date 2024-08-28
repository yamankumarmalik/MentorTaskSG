import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStates',
})
export class SearchStatesPipe implements PipeTransform {
  transform(states: any[] | undefined, searchTerm: string): any[] {
    if (!states) {
      return [];
    }
    if (!searchTerm) {
      return states;
    }
    return states.filter((state) =>
      state.stateName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
