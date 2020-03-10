import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { isNullOrUndefined } from 'util';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_SERVER = `http://localhost:3000`;

  constructor(private httpClient: HttpClient) { }

  public userLogin(iUser: IUser): Observable<IUser> {
    const { user, password } = iUser;

    return this.httpClient
      .post<IUser>(this.REST_API_SERVER + '/users', { user, password} )
      .pipe(
        map((user) => { return (user.status) ? new User(user.data) : null }) ,
        catchError(this.handleError )
      );
  }

  setUser(user: IUser): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  getCurrentUser(): IUser {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: IUser = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  userLogout(){
    localStorage.removeItem("currentUser");
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }



}
