import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {}
  getRepos() : Observable<any> {
    const url = 'https://api.github.com/users/munjitso/repos?sort=updated_at';
    return this.http.get(url);
  }
}
