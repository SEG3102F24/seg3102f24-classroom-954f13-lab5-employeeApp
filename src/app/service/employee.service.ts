import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";
<<<<<<< HEAD
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
=======
>>>>>>> 33610684676a2b0825f0904491c247c9e83382fc

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<readonly Employee[]>([]);
<<<<<<< HEAD
  private employeeCollection = collection(this.firestore, 'employees');

  constructor(private firestore: Firestore) {}
=======
>>>>>>> 33610684676a2b0825f0904491c247c9e83382fc

  get $(): Observable<readonly Employee[]> {
    return this.employees$;
  }

  addEmployee(employee: Employee) {
    this.employees$.next([...this.employees$.getValue(), employee]);
<<<<<<< HEAD
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
=======
    return true;
>>>>>>> 33610684676a2b0825f0904491c247c9e83382fc
  }
}
