import {Component, OnInit, Input,ElementRef,ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Options} from 'ng5-slider';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import { UserService } from '../services/user.service';

@Component({selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.scss']})
export class RegisterComponent implements OnInit {
	@ViewChild('fileInput') el: ElementRef;

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
  profilePicError = false;
  registerForm:FormGroup;
  constructor(
    public activeModal : NgbActiveModal,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private userService:UserService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.registerForm = this.fb.group({
      firstName:['',[Validators.required, Validators.maxLength(20)]],
      lastName:[''],
      profilePic:[''],
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
    console.log('this.registerForm : ',this.registerForm);
    const finalObj = this.registerForm.value;
    if(this.registerForm.valid==true)
    {
      finalObj.id = (Math.random()*10000).toString();
        console.log('finalObj : ',finalObj,this.registerForm.status);
        this.userService.registerUser(finalObj).subscribe((response)=>{
          console.log('response : ',response)
        },(error)=>{
          console.log('error : ',error);
        })
    }
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
      var tagList = this.registerForm.controls['tags'].value;
      console.log('tags : ',tagList);
      tagList.push(interest);
      this.registerForm.patchValue({tags:tagList});
      this.registerForm.patchValue({interest:''});
    }
    
  }
  changeProfilePic(event)
  {
    const file = event.target.files[0];
    console.log('changeProfilePic file : ',file);
    if(file==undefined)
    {
      return false;
    }
   const finalPath = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
   console.log('finalPath : ',finalPath);
   this.getFileDimension(file).then(({width, height}) => {
    console.log(width, height);
    if(width<=325 && height<=310)
    {
      this.profilePicError = false;
    }
    else{
      this.profilePicError = true;
    }
    });
    this.registerForm.patchValue({profilePic:finalPath});
  }

  getFileDimension(file)
  {
    return new Promise((resolve, reject) => {
      try {
          let img = new Image()
          img.onload = () => {
              const width  = img.naturalWidth,
                    height = img.naturalHeight
              window.URL.revokeObjectURL(img.src)
              return resolve({width, height})
          }
          img.src = window.URL.createObjectURL(file)
      } catch (exception) {
          return reject(exception)
      }
  });
  }

  
}
