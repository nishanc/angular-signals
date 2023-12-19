import { Component, computed } from '@angular/core';
import { ProfileUpdateService } from '../_services/profile-update.service';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  title = 'Angular Signals';
  cartCount = computed(() => this.cartService.cartItems().reduce(
    (acc, item) => acc + item.quantity, 0));
  
  constructor(
    public profileUpdateService: ProfileUpdateService,
    private cartService: CartService) {}
}
