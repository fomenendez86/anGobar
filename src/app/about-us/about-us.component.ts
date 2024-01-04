import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  subSuccessMessage = '';
  subErrorMessage = '';

  applyForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl('')
  });

  subscribeEmail() {}
}
