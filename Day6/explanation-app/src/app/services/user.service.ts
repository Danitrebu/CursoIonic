import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  public getStaticUser(): User {

    return {
      name: 'Posti',
      birthDate: '1985-05-10',
      sex: 'male',
      phone: 2324,
      email: 'japostigo@atsistemas.com'
    };
  }

  public getRemoteUser(): Observable<User> {

    return this.http.get<User>(`${environment.apiUrl}/users/1`);
  }
}
