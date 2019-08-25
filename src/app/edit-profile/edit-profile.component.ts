import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
userObj={}
profilePicError = false;
@ViewChild('fileInput') el: ElementRef;
  constructor(private userService:UserService) { 

  }

  ngOnInit() {
    this.userService.userSource.subscribe(data => {
      //do what ever needs doing when data changes
      console.log('userSource : ', data);
    },(error)=>{
      console.log('userSource error : ', error);
    })
  }

}
