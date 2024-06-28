import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface NameData {
  name: string;
  count: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  names: NameData[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const rawData = this.dataService.getNames();
    this.names = this.getDistinctNames(rawData);
  }

  getDistinctNames(data: { name: string, count: number }[]): NameData[] {
    const nameCountMap: { [key: string]: number } = {};
    data.forEach(item => {
      if (nameCountMap[item.name]) {
        nameCountMap[item.name] += item.count;
      } else {
        nameCountMap[item.name] = item.count;
      }
    });

    return Object.keys(nameCountMap).map(name => ({ name, count: nameCountMap[name] }));
  }

  getRowClass(count: number): string {
    if (count > 2 && count < 10) {
      return 'yellow';
    } else if (count > 10) {
      return 'green';
    } else if (count > 0 && count <= 2) {
      return 'red';
    } else {
      return '';
    }
  }

}
