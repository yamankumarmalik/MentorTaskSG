import { Component, OnInit } from '@angular/core';
import { StateDataService } from '../Services/state-data.service';
import { state } from '../models/state';

interface State {
  id: number;
  stateName: string;
  selected?: boolean;
}

@Component({
  selector: 'app-multi-select-list',
  templateUrl: './multi-select-list.component.html',
  styleUrl: './multi-select-list.component.css',
})
export class MultiSelectListComponent implements OnInit {
  // Inject the StateDataService into the component
  constructor(public stateService: StateDataService) {}

  // Array to hold the list of states
  states: State[] = [];

  // Variable to hold the search term for filtering states
  searchState: string = '';

  // Lifecycle hook to initialize states array when component is loaded
  ngOnInit(): void {
    // Initialize the states array with data from the service
    this.states = this.stateService.stateList;
  }

  // Method to get the list of selected states
  getSelectedStates(): State[] {
    // Filter the states array to return only the selected states
    return this.states.filter((state) => state.selected);
  }
}
