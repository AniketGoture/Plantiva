/* import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    mobile: '',
    email: '',
    interest: '',
    message: ''
  }
  successMessage: any;
  errorMessage: any;
  constructor(private http: HttpClient) { }

  // Define the onSubmit method with NgForm parameter
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      console.log('Form Submitted!', contactForm.value);

      // Sending the form data to the backend (replace with your backend URL)
      this.http.post('http://localhost:4200/contact', contactForm.value).subscribe({
        next: (response: any) => {
          console.log('Form submitted successfully:', response);
          alert('Your message has been sent successfully!');
          contactForm.reset();  // Reset the form on successful submission
        },
        error: (error: any) => {
          console.error('Error submitting form:', error);
          alert('There was an error submitting your form. Please try again later.');
        }
      });
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
 */

// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {
//   formData = {
//     name: '',
//     mobile: '',
//     email: '',
//     interest: '',
//     message: ''
//   }
//   successMessage: any;
//   errorMessage: any;

//   constructor(private http: HttpClient) { }

//   // Define the onSubmit method with NgForm parameter
//   onSubmit(contactForm: NgForm) {
//     if (contactForm.valid) {
//       console.log('Form Submitted!', contactForm.value);

//       // Sending the form data to the backend (replace with your backend URL)
//       this.http.post('http://localhost:3000/contact', contactForm.value).subscribe({
//         next: (response: any) => {
//           console.log('Form submitted successfully:', response);
//           alert('Your message has been sent successfully!');
//           contactForm.reset();  // Reset the form on successful submission
//         },
//         error: (error: any) => {
//           console.error('Error submitting form:', error);
//           const errorMessage = error.error?.message || 'There was an error submitting your form. Please try again later.';
//           alert(errorMessage);
//         }
//       });
//     } else {
//       alert('Please fill out all fields correctly.');
//     }
//   }
// }


/* import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    mobile: '',
    email: '',
    interest: '',
    message: ''
  };
  successMessage: any;
  errorMessage: any;

  constructor(private http: HttpClient) { }

  // Define the onSubmit method with NgForm parameter
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      console.log('Form Submitted!', contactForm.value);

      // Use environment variables for the backend URL (production or localhost)
      const apiUrl = process.env['API_URL'] || 'http://localhost:3000';  // Default to localhost in development

      this.http.post(`${apiUrl}/contact`, contactForm.value).subscribe({
        next: (response: any) => {
          console.log('Form submitted successfully:', response);
          alert('Your message has been sent successfully!');
          contactForm.reset();  // Reset the form on successful submission
        },
        error: (error: any) => {
          console.error('Error submitting form:', error);
          const errorMessage = error.error?.message || 'There was an error submitting your form. Please try again later.';
          alert(errorMessage);
        }
      });
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
} */

  import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';  // Import environment

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    mobile: '',
    email: '',
    interest: '',
    message: ''
  };
  successMessage: any;
  errorMessage: any;

  constructor(private http: HttpClient) { }

  // Define the onSubmit method with NgForm parameter
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      console.log('Form Submitted!', contactForm.value);

      // Use the correct backend URL based on the environment (dev or prod)
      const apiUrl = environment.apiUrl;  // This will either use localhost or production URL

      this.http.post(`${apiUrl}/contact`, contactForm.value).subscribe({
        next: (response: any) => {
          console.log('Form submitted successfully:', response);
          alert('Your message has been sent successfully!');
          contactForm.reset();  // Reset the form on successful submission
        },
        error: (error: any) => {
          console.error('Error submitting form:', error);
          const errorMessage = error.error?.message || 'There was an error submitting your form. Please try again later.';
          alert(errorMessage);
        }
      });
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}


