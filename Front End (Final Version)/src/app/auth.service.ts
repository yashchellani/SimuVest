import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  email = "";
  constructor(private http:HttpClient) { }

  logout(){
    this.loggedIn = false;
    localStorage.clear();
  }

  createIndex(email:string){
    return this.http.post("/api/createIndex", {email:email})
  }

  updateIndex( index:string){
    return this.http.post("/api/updateIndex", {email:this.email, index:index})
  }

  getIndex(){
    return this.http.get<any[]>("/api/getIndex/" + this.email)
  }
}
