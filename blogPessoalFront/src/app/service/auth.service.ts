import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(usuario: User): Observable<User> {
    return this.http.post <User>('https://blogdobrocco.herokuapp.com/cadastrar', usuario)
  }

}
