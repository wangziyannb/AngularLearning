import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  baseUrl: string = "http://20.246.201.206/api/Submission/"
  constructor(private http: HttpClient) {

  }

  create(obj: any) {
    return this.http.post(this.baseUrl + 'Create', obj);
  }

  get(id: any) {
    return this.http.get(this.baseUrl + 'Get/' + id);
  }

  getAll() {
    return this.http.get(this.baseUrl + 'GetAll');
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + 'Delete?id=' + id);
  }

  update(obj: any) {
    return this.http.put(this.baseUrl + 'Update', obj);
  }
}
