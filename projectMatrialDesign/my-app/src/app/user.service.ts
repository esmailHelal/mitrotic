import { Injectable } from "@angular/core";
import { Users } from "./userModel";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  baseUrl = "http://localhost:3000";
  constructor(private _HttpClient: HttpClient) {}

  getuser():Observable<any> {
    return this._HttpClient.get(this.baseUrl + "/users");
  }
  getuser1(id):Observable<any> {
    return this._HttpClient.get<any>(this.baseUrl + "/users/" + id);
  }
  adduser(user):Observable<any> {
    return this._HttpClient.post(this.baseUrl + "/users", user);
  }
  deletuser(id):Observable<any> {
    return this._HttpClient.delete(this.baseUrl + "/users/" + id);
  }
  updateuser(id, user):Observable<any> {
    return this._HttpClient.patch(this.baseUrl + "/users/" + id, user);
  }
}
