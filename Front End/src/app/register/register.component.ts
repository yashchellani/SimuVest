import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  hide = true
  hide2=true
  age = []
  preferredIndustry = ["Technology", "Real Estate", "Finance"]
  purposeOfInvestment = ["Build wealth", "Retirement", "Reach financial goals", "Start business", "Support others"]
  selectedIndustries = []
  desktop =true


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if(window.innerWidth < 700){
      this.desktop = false
      
    }
    this.firstFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      name: ['',Validators.required],
      pwSet: this.formBuilder.group ({
        pw: ['', [Validators.required, Validators.minLength(6)]],
        cfmPw: ['',[Validators.required]]
      }, {validator: this.passwordMatchValidator}),
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    for(var i = 12 ; i < 120; i++){
      this.age.push(i + 1)
    }
  }

  passwordMatchValidator(myForm: FormGroup) {

    var userpassword = myForm.controls.pw.value;
    var confirmpassword = myForm.controls.cfmPw.value;

    if (!(userpassword === confirmpassword)) return { 'notmatch': true };
    return null;
  }


  register(stepper: MatStepper){
    console.log("test")
    stepper.next();
  }

  saveProfile(stepper:MatStepper){
    stepper.next()
  }

  selectIndustry(i:number, industry:string){

    if(this.selectedIndustries.includes(industry)){
      this.selectedIndustries.splice(this.selectedIndustries.indexOf(industry),1)
      document.getElementById("preferred-industry-" + i).classList.remove("active")
    }
    else {
      this.selectedIndustries.push(industry)
      document.getElementById("preferred-industry-" + i).classList.add("active")
    }
    console.log(this.selectedIndustries)
  }
}
