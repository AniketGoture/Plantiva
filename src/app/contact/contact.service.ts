import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = '/contact';  // This will be proxied to your backend

  constructor(private http: HttpClient) {}

  submitContactForm(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
// test