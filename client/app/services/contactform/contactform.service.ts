import { Injectable } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';


@Injectable()
export class ContactFormService {

  constructor(public formBuilder: FormBuilder, private http: Http) { }

  contactForm: FormGroup;
  formSubmitted: boolean = false;


  buildForm() {
    this.contactForm = this.formBuilder.group({
      userFirstName: this.formBuilder.control(null, Validators.required),
      userLastName: this.formBuilder.control(null, Validators.required)
    });
  }

  onSubmitForm() {
    console.log(this.contactForm.value);
    this.formSubmitted = true;
    this.contactForm.reset();
  }

  public VerifyEmail() {
    return this.http.post(`http://localhost:3000/sendmail`, null, null).map(res => res.json());
  }

}