import { Component, OnInit, computed, signal } from '@angular/core';
import { ProfileUpdateService } from '../_services/profile-update.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  firstName = signal<string>("");
  lastName = signal<string>("");

  fullName = computed(() => {
    return  `${this.firstName()} ${this.lastName()}`;
  });

  constructor(private profileUpdateService: ProfileUpdateService) { }

  ngOnInit() {
  }
  saveChanges(form: any) {
    if (form.valid) {
      // Perform saving changes logic here
      console.log('Form submitted:', form.value);
      this.profileUpdateService.updateFullName(this.fullName());
    } else {
      // Handle form validation errors
      console.error('Form is invalid');
    }
  }
}
