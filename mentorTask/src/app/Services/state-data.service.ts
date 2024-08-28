import { Injectable } from '@angular/core';
import { state } from '../models/state';

@Injectable({
  providedIn: 'root',
})
export class StateDataService {
  constructor() {}

  stateList: state[] = [
    { id: 1, stateName: 'Alabama' },
    { id: 2, stateName: 'Alaska' },
    { id: 3, stateName: 'Arizona' },
    { id: 4, stateName: 'Arkansas' },
    { id: 5, stateName: 'California' },
    { id: 6, stateName: 'Colorado' },
    { id: 7, stateName: 'Connecticut' },
    { id: 8, stateName: 'Delaware' },
    { id: 9, stateName: 'Florida' },
  ];
}
