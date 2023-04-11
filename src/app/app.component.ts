import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-tutorial';
  users:any;
  apiUsers:any[]=[];
  limit=5;
  constructor(private userdata : UserdataService){
    // console.log(userdata.users());
    this.users = userdata.users();

    // fetching api data
    userdata.usersWithApi().subscribe((apiData:any)=>{
      // console.log('api---',apiData);
      this.apiUsers = apiData;
    })

  }
  // memberData = [
  //   {name:'anil', email:'anil@test.com'},
  //   {name:'ravinder', email:'ravinder@test.com'},
  //   {name:'nik', email:'nik@test.com'},
  // ];
}
