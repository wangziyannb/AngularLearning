import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobRequirementService {
  baseUrl: string = "http://localhost:40123/api/JobRequirement/"
  constructor(private http: HttpClient) {

  }

  create(jr: any) {
    return this.http.post(this.baseUrl + 'Create', jr);
  }

  get(id: any) {
    return this.http.get(this.baseUrl + 'Get?id=' + id);
  }

  getAll() {
    return this.http.get(this.baseUrl + 'GetAll');
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + 'Delete?id=' + id);
  }

  update(jr: any) {
    return this.http.post(this.baseUrl + 'Update', jr);
  }
}
