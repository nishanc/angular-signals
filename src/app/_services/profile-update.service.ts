import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {
  imageUrlSignal = signal<string>(''); // <---- create signal

  constructor() { }

  updateImage(image: string){
    this.imageUrlSignal.set(image);
  }
}
