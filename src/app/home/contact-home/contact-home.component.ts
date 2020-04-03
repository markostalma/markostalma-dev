import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'markostalma-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})
export class ContactHomeComponent implements OnInit {
  contactForm: any;
  submitedValid: boolean = false;
  submitedInvalid: boolean = false;
  serviceSelectDefault = null;

  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      nameSurname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      service: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(3),
      ])),
      textarea: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(450),
        Validators.minLength(5),
      ]))
    });
  }

  onSubmit() {
    if (this.contactForm.dirty && this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.submitedValid = true;
      setTimeout( () => {
        this.submitedValid = false;
      }, 2500);
    } else{
      this.submitedInvalid = true;
      setTimeout( () => {
        this.submitedInvalid = false;
      }, 2500);
    }
    this.contactForm.reset();
  }

  closeMessage(){
    this.submitedValid = false;
    this.submitedInvalid = false;
  }

  form_validation_messages = {
    'nameSurname': [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Name must be at least 3 characters long' },
      { type: 'maxlength', message: 'Name cannot be more than 30 characters long' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'minlength', message: 'Email must be at least 5 characters long' },
      { type: 'maxlength', message: 'Email cannot be more than 35 characters long' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'service': [
      { type: 'required', message: 'Please choose service from list!' },
    ],
    'subject': [
      { type: 'required', message: 'Subject is required' },
      { type: 'minlength', message: 'Subject must be at least 3 characters long' },
      { type: 'maxlength', message: 'Subject must be at max 35 characters long' }
    ],
    'textarea': [
      { type: 'required', message: 'Message is required' },
      { type: 'minlength', message: 'Message must be at least 5 characters long' },
      { type: 'maxlength', message: 'Message cannot be more than 450 characters long' }
    ]
  }


  ngOnInit() {
  }

}
