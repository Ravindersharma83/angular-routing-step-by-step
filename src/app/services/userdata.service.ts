import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // for calling api

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http:HttpClient) { }

  users(){
    return [
      {name:'anil', email:'anil@test.com'},
      {name:'ravinder', email:'ravinder@test.com'},
      {name:'nik', email:'nik@test.com'},
    ]
  }

  usersWithApi(){
    return this.http.get(this.url); // calling get api
    // call and import HttpClientModule in app.module.ts
  }

  // now import this service function in app.component.ts and footer.component.ts or in any other component where we want to use it.
}
