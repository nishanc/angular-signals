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
      text: 'Profile'
    },
    {
      path: 'case2',
      text: 'Case 2'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}


interface NavMenu {
  path: string,
  text: string
}
