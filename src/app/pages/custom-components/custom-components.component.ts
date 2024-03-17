import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {jamHome} from "@ng-icons/jam-icons";

@Component({
  selector: 'app-components',

  templateUrl: './custom-components.component.html',
  styleUrl: './custom-components.component.scss'
})
export class CustomComponentsComponent {

  menuItems = [
    {
      title: 'Button',
      route: 'button',
      icon: jamHome,
    },
    {
      title: 'Menu',
      route: 'menu',
      icon: jamHome,
    },
  ];

}
