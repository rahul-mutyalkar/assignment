import {Component, OnInit, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Options} from 'ng5-slider';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

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
  registerForm:FormGroup;
  constructor(public activeModal : NgbActiveModal,private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.registerForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      mobile:[''],
      email:[''],
      age:[10],
      state:['choose state'],
      country:['choose country'],
      addressType:['choose address'],
      address1:[''],
      address2:[''],
      
      interest:[''],
      tags:[['cricket','hockey']]
  });
  }

  passBack() {
    this.activeModal.close({
        random: Math.random()
      });
  }
  submit()
  {
    console.log('this.registerForm : ',this.registerForm.value);
  }
  removeItem(item)
  {
    var tagList = this.registerForm.controls['tags'].value;
    let tagIndex;
    tagList.forEach(function(value, index){
      if(value.toLowerCase() == item.toLowerCase()){
        console.log('value,index : ',value,index);
        tagIndex = index;
        return false
      }
  });
  tagList.splice(tagIndex,1);
  this.registerForm.patchValue({tags:tagList});
  console.log('removeItem tagList : ',tagList,tagIndex)
  }
  addTag()
  {
    const interest = this.registerForm.controls['interest'].value;
    if(interest && interest.length>0)
    {
      // console.log('addTag() : ',this.registerForm.controls['interest'].value);
      var tagList = this.registerForm.controls['tags'].value;
      console.log('tags : ',tagList);
      tagList.push(interest);
      this.registerForm.patchValue({tags:tagList});
      this.registerForm.patchValue({interest:''});
    }
    
  }

}
