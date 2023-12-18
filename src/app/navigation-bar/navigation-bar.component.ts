import { Component, effect } from '@angular/core';
import { ProfileUpdateService } from '../_services/profile-update.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  title = 'Angular Signals';
  imageUrl!: string;

  constructor(public profileUpdateService: ProfileUpdateService) {
    effect(() => {
      this.imageUrl = profileUpdateService.imageUrlSignal();
    });
  }
}
