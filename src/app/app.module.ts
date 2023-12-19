import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [			
    AppComponent,
    DashboardComponent,
    NavigationBarComponent,
      ProfileComponent,
      GroceryListComponent,
      FormsComponent
   ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
