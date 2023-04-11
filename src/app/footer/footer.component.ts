import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users:any;
  apiUsers:any[]=[];
  limit=5;
  constructor(private userdata : UserdataService){
    console.log(userdata.users());
    this.users = userdata.users();


    // fetching api data
    userdata.usersWithApi().subscribe((apiData:any)=>{
      // console.log('api---',apiData);
      this.apiUsers = apiData;
    })

  }

  ngOnInit(): void {
  }

}
