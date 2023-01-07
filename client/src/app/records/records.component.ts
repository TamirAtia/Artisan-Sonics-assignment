import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IRecord } from '../IRecord.interface';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  records: IRecord[] = [];
  filteredRecords: IRecord[] = [];
  searchTerm: string = '';
  searchControl = new FormControl();
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getRecords().subscribe((data) => {
      this.records = data;
      this.filteredRecords = data;
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.searchTerm = value;
        this.filterRecords();
      });
  }

  filterRecords() {
    this.filteredRecords = this.records.filter((record: IRecord) => {
      return (
        record.id.toString().includes(this.searchTerm) ||
        record.first_name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        record.last_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }

  sortRecords(sortBy: 'ga' | 'age') {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    if (sortBy === 'ga') {
      this.filteredRecords.sort((a: IRecord, b: IRecord) =>
        this.sortColumn(a.lmp, b.lmp, this.sortOrder)
      );
    } else {
      this.filteredRecords.sort((a: IRecord, b: IRecord) =>
        this.sortColumn(a.dob, b.dob, this.sortOrder)
      );
    }
  }

  sortColumn(a: Date, b: Date, sortOrder: 'asc' | 'desc') {
    if (sortOrder === 'asc') {
      return new Date(a).getTime() - new Date(b).getTime();
    } else {
      return new Date(b).getTime() - new Date(a).getTime();
    }
  }
}
