import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get('http://localhost:40123/api/Candidate/GetAll');

    
  }
  delete(id:any)
  {
    return this.http.delete('http://localhost:40123/api/Candidate/Delete?id='+id);
  }

}
