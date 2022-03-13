import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

const baseUrl = 'http://localhost:8080/api/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = {
    username: '',
    isAdmin: false
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // load from local storage here
  }

  login(username: String, password: String): Observable<User> {
    const b64Pass = btoa(`${username}:${password}`)
    const authHeader = `Basic ${b64Pass}`
    console.log(authHeader)
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: authHeader
      })
    }

    return this.http.get<User>(baseUrl, httpOptions)
  }

  setUser(user: User) {
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(this.user))
  }

  checkLocalUser() {
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(sessionStorage.getItem('user') as string)
      console.log(this.user);
    }
  }
}
