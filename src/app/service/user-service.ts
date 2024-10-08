import { Injectable } from '@angular/core';
import { GenericResponse } from '../models/GenericResponse';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../models/models.dto';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environment';
const baseUrl = `${environment.apiUrl}/User`;
@Injectable({
  providedIn: 'root'

})
export class UserService {

  private hash: string = "D2F1E5A3-4D3A-4A3A-8D3A-4D3A4A3A8D3A";

  private loginSubject: BehaviorSubject<User> = new BehaviorSubject<User|null>(null);

  loginSubject$ = this.loginSubject.asObservable();
  constructor(private http: HttpClient,
  ) { }

  setLogin(user: User): void {
    this.loginSubject.next(user);
    sessionStorage.setItem(
      'token',
      JSON.stringify(user)
    );
  }

  getToken(): User | null {
    const token = JSON.parse(this.getTokenLocalStorage()) ?? null;
    return token ? new User(token) : null;
  }

  isLogged(): boolean {
    return this.getTokenLocalStorage() != null;
  }
  getTokenLocalStorage(): string | null {
    return localStorage.getItem('token') ?? null;
  }
  // getTokenSessionStorage(): boolean {
  //   return sessionStorage.getItem('token') != null;
  // }
 

  logout(): void {
    localStorage.removeItem('token');
    this.setLogin(null);
  }

  findUser() {
    var itemString = sessionStorage.getItem('loginUser') ?? null;
    var sessionStorageItem;
    if (
      itemString != 'undefined' &&
      itemString != undefined &&
      itemString != null
    ) {
      sessionStorageItem = JSON.parse(itemString);
    }
    // if (sessionStorageItem) {
    //     this.setSelectedOption(sessionStorageItem);
    // } else {
    //     var defaultOption = result.data.find((x) => x.isDefault);
    //     if (defaultOption != undefined && defaultOption != null)
    //         this.setSelectedOption(defaultOption);
    //     else if(result.data && result.data.length > 0)
    //         this.setSelectedOption(result.data.find(x=>x))
    // }
  }

  Edit(user: User) {
    return this.http.post<GenericResponse<User>>(
      `${baseUrl}/Edit`,
      {
        Phone: user.phone,
        email: user.email,
        FirstName: user.firstName,
        LastName: user.lastName,
        Login: user.login,
        Password: user.password,

      });
  }

  Add(user: User) {
    return this.http.post<GenericResponse<User>>(
      `${baseUrl}/Add`,
      {
        FirstName: user.firstName,
        email: user.email,
        LastName: user.lastName,
        Login: user.login,
        Password: user.password,

      }, {
        withCredentials: true, headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Credentials': 'true',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
          // 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin',
        }
    });
  }

  login(Login: string, Password: string) {
    return this.http.post<GenericResponse<User>>(
      `${baseUrl}/Login`,
      {
        Login: Login,
        Password: Password

      }, {
        withCredentials: true, headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin',
        }
    });
  }
}