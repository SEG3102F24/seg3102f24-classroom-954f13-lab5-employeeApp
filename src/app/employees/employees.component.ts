import {Component, inject, OnInit} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { Employee } from '../model/employee';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { Timestamp } from '@firebase/firestore';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent implements OnInit {
  employees$!: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {}

  //ngOnInit() {
  //  this.employees$ = this.employeeService.getEmployees();
  //}
  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees().pipe(
      map(employees => employees.map(emp => ({
        ...emp,
        dateOfBirth: emp.dateOfBirth instanceof Timestamp ?
          new Date(emp.dateOfBirth.seconds * 1000) : emp.dateOfBirth // Convert Timestamp to Date
      })))
    );
  }
}
