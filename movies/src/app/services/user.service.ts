import { iFavourite } from './../interfaces/ifavourite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { iUser } from '../interfaces/iuser';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  user$ = new BehaviorSubject<Partial<iUser> | null>(null);

  usersUrl = environment.users;

  getAllUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.usersUrl);
  }

  getUserById(userId: number): Observable<iUser> {
    return this.http.get<iUser>(`${this.usersUrl}/${userId}`);
  }
}
