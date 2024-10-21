import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesComponent } from './employees.component';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [EmployeesComponent]
    });
=======
    imports: [EmployeesComponent]
});
>>>>>>> 33610684676a2b0825f0904491c247c9e83382fc
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
