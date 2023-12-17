import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, catchError, finalize } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  imageUrl: string = 'https://i.imgur.com/o9fpo46.png'; // Default image URL
  fetchedImageUrl: string = ''; // Fetched image URL
  isLoading: boolean = false; // Loading indicator

  constructor(private http: HttpClient) {}

  saveImage() {
    this.isLoading = true;
    this.http.get(this.imageUrl, { responseType: 'blob' }).pipe(
      catchError(() => {
        console.error('Error fetching image');
        return EMPTY; // Return an empty observable to continue the stream
      }),
      finalize(() => this.isLoading = false) // Set isLoading to false when the request completes (success or error)
    ).subscribe((response: Blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.fetchedImageUrl = reader.result as string;
      };
      reader.readAsDataURL(response);
    });
  }
}
