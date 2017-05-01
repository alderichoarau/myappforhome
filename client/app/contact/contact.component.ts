import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../services/data.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

  messages = [];
  isLoading = true;

  message = {};
  isEditing = false;

  addMessageForm: FormGroup;
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  subject = new FormControl('', Validators.required);
  messageClient = new FormControl('', Validators.required);

  constructor(private http: Http,
              private dataService: DataService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getMessages();

    this.addMessageForm = this.formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      subject: this.subject,
      email: this.email,
      messageClient: this.messageClient
    });
  }

  getMessages() {
    this.dataService.getMessages().subscribe(
      data => this.messages = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addMessage() {
    this.dataService.addMessage(this.addMessageForm.value).subscribe(
      res => {
        const newMessage = res.json();
        this.messages.push(newMessage);
        this.addMessageForm.reset();
        this.toast.setMessage('Message envoyé. Nous reviendrons vers vous.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(message) {
    this.isEditing = true;
    this.message = message;
  }

  cancelEditing() {
    this.isEditing = false;
    this.message = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the messages to reset the editing
    this.getMessages();
  }

  editMessage(message) {
    this.dataService.editMessage(message).subscribe(
      res => {
        this.isEditing = false;
        this.message = message;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteMessage(message) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.dataService.deleteMessage(message).subscribe(
        res => {
          const pos = this.messages.map(elem => { return elem._id; }).indexOf(message._id);
          this.messages.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}