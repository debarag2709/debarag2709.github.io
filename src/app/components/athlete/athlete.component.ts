import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import { MatSort, Sort } from '@angular/material/sort'
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit{
  users: any[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'age', 'phone', 'bloodGroup', 'height', 'weight'];
  dataSource = new MatTableDataSource<any>;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getData().subscribe((data: any) => {
      this.users = data.users;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort = new MatSort();

  pageSizes = [3, 5, 7];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
