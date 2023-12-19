import { Component, OnInit } from '@angular/core';
import { CartService, GroceryItem } from '../_services/cart.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  groceryItems: GroceryItem[] = [
    { name: 'Apples' },
    { name: 'Bananas' },
    { name: 'Milk' },
    { name: 'Bread' }
    // Add more items as needed
  ];

  addToCart(item: GroceryItem) {
    if (item) {
      this.cartService.addToCart(item.name);
    }
  }
}
