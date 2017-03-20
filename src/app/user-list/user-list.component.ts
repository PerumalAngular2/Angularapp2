import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private UserServiceService: UserServiceService,
              private router:Router
              ) { }

  userList: any;
  ngOnInit() {
    this.UserServiceService.getUserList().then(response => this.userList = response);
  }
viewMore(id:number){
  console.log(id);
  this.router.navigate(['/user-details',id]);

}

}
