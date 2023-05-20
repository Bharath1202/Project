import { Component } from '@angular/core';
import { navItems } from '../_nav';

@Component({
  selector: 'app-default-sidebar',
  templateUrl: './default-sidebar.component.html',
  styleUrls: ['./default-sidebar.component.scss']
})
export class DefaultSidebarComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}
