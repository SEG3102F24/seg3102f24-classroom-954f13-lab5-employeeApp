import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private firestore: Firestore) {}

  addEmployee(employee: Employee) {
    const employeesCollection = collection(this.firestore, 'employees');
    return addDoc(employeesCollection, employee);
  }

  getEmployees(): Observable<Employee[]> {
    const employeesCollection = collection(this.firestore, 'employees');
    return collectionData(employeesCollection, { idField: 'id' }) as Observable<Employee[]>;
  }
}
