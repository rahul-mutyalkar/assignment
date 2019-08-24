import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modalService.open(RegisterComponent);
    // modalRef.componentInstance.user = {random:Math.random()};
    modalRef.result.then((result) => {
      console.log('modalRef.result : ',result);
      if (result) {
      }
      });
  }
}
