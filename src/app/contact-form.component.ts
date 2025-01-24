import { Component } from '@angular/core';
import { ContactService } from './contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact = {
    name: '',
    mobile: '',
    email: '',
    interest: '',
    message: ''
  };

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.contactService.submitContactForm(this.contact).subscribe(
        (      response: any) => {
        console.log('Form submitted successfully:', response);
      },
        (      error: any) => {
        console.error('Error submitting form:', error);
      }
    );
  }
}
