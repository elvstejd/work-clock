import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  links = [
    {
      label: 'Time tracker',
      path: '/',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'Clients',
      path: '/clients',
    },
  ];
}
