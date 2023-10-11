import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpCliente: HttpClient) { }

  api = 'http://localhost:9090';

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpCliente.post<Employee>(`${this.api}/save/employee`, employee);
  }

  public getAllsEmployees(): Observable<Employee[]> {
    return this.httpCliente.get<Employee[]>(`${this.api}/get/employees`);
  }

  public deteleEmployeById(employeId: number) {
    return this.httpCliente.delete(`${this.api}/delete/employee/${employeId}`);
  }

  public getEmployee(employeeId: number) {
    return this.httpCliente.get<Employee>(`${this.api}/get/employee/${employeeId}`);
  }

  public updateEmployee(employee: Employee) {
    return this.httpCliente.put<Employee>(`${this.api}/update/employee`, employee);
  }

}
