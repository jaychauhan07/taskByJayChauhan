import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getNames(): { name: string, count: number }[] {
    return [
      { name: 'Jay', count: 2 },
      { name: 'Jony', count: 1 },
      { name: 'Jigar', count: 12 },
      { name: 'Jignasha', count: 0 },
      { name: 'Jay', count: 2 },
      { name: 'Jony', count: 0 },
      { name: 'Jigar', count: 12 },
      { name: 'Jignasha', count: 0 },
      { name: 'Jay', count: 2 },
      { name: 'Jony', count: 1 },
      { name: 'Jigar', count: 12 },
      { name: 'Jignasha', count: 0 }
    ];
  }

}
