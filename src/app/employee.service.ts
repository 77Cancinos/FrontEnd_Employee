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

}
