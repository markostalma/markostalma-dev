import { Injectable } from '@angular/core';
import { ITEMS } from '../data/works';

@Injectable()
export class DataService {

  constructor() { }

  loadItems(){
    return ITEMS;
  }

}
