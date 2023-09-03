import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {Sort, MatSortModule} from '@angular/material/sort';


import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import { PaginatorComponent } from './components/paginator/paginator.component';


const appRoute: Routes = [
  {path: '', component: TasksComponent},
  {path: 'athlete', component: AthleteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTasksComponent,
    NavbarComponent,
    AthleteComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoute, {enableTracing: true}),
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
