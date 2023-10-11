import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  dataSource: Employee[] = [];
  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber',
    'employeeAddress', 'employeeGender', 'employeeDepartment', 'employeeSkills',
    "edit", "delete"];

  constructor(private employeService: EmployeeService, private router: Router) {
    this.getEmployeeList();
  }

  ngOnInit(): void {

  }

  getEmployeeList(): void {
    this.employeService.getAllsEmployees().subscribe(
      {
        next: (res: Employee[]) => {
          //console.log(res);
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }

  updateEmployee(employeeId: number): void {
    this.router.navigate(["/employee", { employeeId: employeeId }]);
  }

  deleteEmployee(employeeId: number): void {
    //console.log(employeeId);
    this.employeService.deteleEmployeById(employeeId).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getEmployeeList();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }

}
