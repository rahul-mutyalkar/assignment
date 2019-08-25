import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject({});
  userSource = this.user.asObservable();
  constructor(private http:HttpClient) { }

  registerUser(user)
  {
    return this.http.post(environment.API_ENPOINT+'/users',user);
  }

  editUserProfile()
  {

  }

  updateUser(data)
  {
    this.user.next(data);
  }
}
