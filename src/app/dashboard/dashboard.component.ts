import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  useCases: NavMenu[] = [
    {
      path: 'profile',
      text: '1️⃣ Profile'
    },
    {
      path: 'shop',
      text: '2️⃣ Grocery Shop'
    },
    {
      path: 'forms',
      text: '3️⃣ Angular Forms'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}


interface NavMenu {
  path: string,
  text: string
}
