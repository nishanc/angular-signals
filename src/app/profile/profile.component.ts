import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, catchError, finalize } from 'rxjs';
import { ProfileUpdateService } from '../_services/profile-update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
  imageUrl!: string; // Default image URL
  fetchedImageData: string = ''; // Fetched image
  isLoading: boolean = false; // Loading indicator

  constructor(
    private http: HttpClient,
    private profileUpdateService: ProfileUpdateService) {}

  ngOnInit(): void {
    this.fetchedImageData = this.profileUpdateService.imageUrlSignal();
  }

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
        this.fetchedImageData = reader.result as string;
        this.profileUpdateService.updateImage(this.fetchedImageData);
      };
      reader.readAsDataURL(response);
    });
  }
}
