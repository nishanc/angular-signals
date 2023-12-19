import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);
  constructor() { }

  addToCart(item: string): void {
    const index = this.cartItems().findIndex(cartItem =>
      cartItem.item === item);
    if (index === -1) {
      // Not already in the cart, so add new item
      this.cartItems.update(items => [...items, { item, quantity: 1 }]);
    } else {
      // Already in the cart, so increase the quantity by 1
      this.cartItems.update(items =>
        [
          ...items.slice(0, index),
          { ...items[index], quantity: items[index].quantity + 1 },
          ...items.slice(index + 1)
        ]);
    }
  }
}

export interface CartItem {
  item: string;
  quantity: number;
}

export interface GroceryItem {
  name: string;
}
