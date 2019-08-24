import {Component, OnInit, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Options} from 'ng5-slider';

@Component({selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.scss']})
export class RegisterComponent implements OnInit {

  @Input()user;
  stateList = [
    "choose state",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Punjab",
    "Pondicherry",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  countryList = ["choose country", "India"];
  addressType = ["choose address","home", "company"];
  options : Options = {
    floor: 0,
    ceil: 100,
    enforceStep: false,
    enforceRange: false,
    showSelectionBar: true
  };
  constructor(public activeModal : NgbActiveModal) {}

  ngOnInit() {}
  passBack() {
    this.activeModal.close({
        random: Math.random()
      });
  }

}
