import { Routes } from '@angular/router';
<<<<<<< HEAD
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeesComponent} from "./employees/employees.component";

export const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path: '**', component: EmployeesComponent}
];

=======

export const routes: Routes = [];
>>>>>>> 8632924 (initial commit)
