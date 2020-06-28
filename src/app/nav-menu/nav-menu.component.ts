import { Component, OnInit } from '@angular/core';

declare const changeActiveNav: any;

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.toggleNavSelector();
  }

  toggleNavSelector() {
    changeActiveNav();
  }

}
