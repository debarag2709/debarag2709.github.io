import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {athletesData} from 'src/app/mock-athlete';
import { Athlete } from 'src/app/Athlete';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  pageIndex:number = 0;
    pageSize:number = 50;
    lowValue:number = 0;
    highValue:number = 50;  
    athletesData: Athlete[] = athletesData;

  getPaginatorData(event: PageEvent) : PageEvent{
     console.log(event);
     if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
       }
    else if(event.pageIndex === this.pageIndex - 1){
       this.lowValue = this.lowValue - this.pageSize;
       this.highValue =  this.highValue - this.pageSize;
      }   
       this.pageIndex = event.pageIndex;
       return event;
 }
}








