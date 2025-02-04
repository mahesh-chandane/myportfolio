import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
// import { Form } from '@angular/forms';
import { FormControl,  Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { PortfolioServiceService } from '../portfolio-service.service';
import { NgModel } from '@angular/forms';
import { Form } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  
  
})
export class PortfolioComponent {
  activeTab: string = 'skills'; // Set the initial active tab

  showTab(tabName: string) {
    this.activeTab = tabName;
  }


  closeNavbar(): void {
    const navbar = document.getElementById('navbarNavDropdown');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  constructor(private userService:PortfolioServiceService, private route:Router )
  { }

  // user_id: number;
  user_name:string;
  user_email: string;
  message: string;
  emailMessage='';

  
  onSubmit(): void {
    console.log(this.user_name, this.user_email, this.message);
  
    this.userService.saveUser(this.user_name, this.user_email, this.message).subscribe(
      response => {
        console.log('User saved successfully:', response);
        this.resetForm(); // Reset the form after submission
      },
      error => {
        console.error('Error saving user:', error);
        this.resetForm();// Reset the form even on error
      }
    );
  }
  

  checkEmail() {
    if (this.user_email.trim() === '') {
      this.emailMessage = 'Email is blank';
    } else {
      this.emailMessage = 'Email is present: ' + this.user_email;
    }
  }
  // user_email: string = '';
  // user_name: string = '';
  // user_message: string = '';
  errorMessage: string = '';

  submitForm() {
    if (this.user_email.trim() === '' || this.user_name.trim() === '' || this.message.trim() === '') {
      this.errorMessage = 'Please fill in all required fields.';
    } else {
      console.log('Form submitted successfully.');
      // Reset error message
      this.errorMessage = '';
    }
  }

  resetForm(): void {

    this.user_name='';
    this.user_email = '';
    this.message = '';
  }

  reset(){
    window.location.reload();
  }
}