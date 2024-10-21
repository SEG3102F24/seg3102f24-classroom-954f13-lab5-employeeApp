<<<<<<< HEAD
import {Component, inject, OnInit} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
=======
import {Component, inject} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
>>>>>>> 33610684676a2b0825f0904491c247c9e83382fc
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';

@Component({
<<<<<<< HEAD
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent implements OnInit{
  protected employeeService: EmployeeService = inject(EmployeeService);
  employees$: Observable<readonly Employee[]> | undefined;

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees();
  }

=======
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent {
  protected employees: EmployeeService = inject(EmployeeService);
>>>>>>> 33610684676a2b0825f0904491c247c9e83382fc
}
