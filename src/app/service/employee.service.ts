import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<readonly Employee[]>([]);
  private employeeCollection = collection(this.firestore, 'employees');

  constructor(private firestore: Firestore) {}

  get $(): Observable<readonly Employee[]> {
    return this.employees$;
  }

  addEmployee(employee: Employee) {
    this.employees$.next([...this.employees$.getValue(), employee]);
    return addDoc(this.employeeCollection, { ...employee });
  }

  getEmployees(): Observable<readonly Employee[]> {
    return collectionData(this.employeeCollection, { idField: 'id' }).pipe(
      map(employees =>
        employees.map(employee => ({
          ...employee,
          dateOfBirth: (employee as any).dateOfBirth.toDate(),
        }))
      )
    ) as unknown as Observable<readonly Employee[]>;
  }
}
