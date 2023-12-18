import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {
  imageUrlSignal = signal<string>('https://i.imgur.com/o9fpo46.png'); // <---- create signal default value

  constructor() { }

  updateImage(image: string){
    this.imageUrlSignal.set(image);
  }
}
