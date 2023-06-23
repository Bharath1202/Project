import { Component, OnInit } from '@angular/core';
import { navItems, navItems2 } from '../_nav';

@Component({
  selector: 'app-default-sidebar',
  templateUrl: './default-sidebar.component.html',
  styleUrls: ['./default-sidebar.component.scss']
})
export class DefaultSidebarComponent implements OnInit {

  public admin = navItems;
  public user = navItems2;
  public loginType;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
  ngOnInit(): void {
    this.loginType = localStorage.getItem('loginType')
  }
}
