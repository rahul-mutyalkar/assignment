import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private modalService: NgbModal,private router:Router,private userService:UserService) { }

  ngOnInit() {
  }

  openModal() {
    this.userService.updateUser({});
    const modalRef = this.modalService.open(RegisterComponent,{ size: 'lg', backdrop: 'static' });
     
      modalRef.result.then((result) => {
        console.log('modalRef.result : ',result);
        if (result) {
          this.router.navigateByUrl('/edit-profile/'+result.id)
        }
        }).catch((error)=>{ 
          console.log('error : ',error);
        });
  }
}
