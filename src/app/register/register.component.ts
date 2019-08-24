import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() user;
  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
  }
  passBack() {
    this.activeModal.close({random:Math.random()});
    }
  
}
