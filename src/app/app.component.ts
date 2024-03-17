import { Component } from '@angular/core';
import {MenuItemModel} from "../../projects/ngx-wave-ui/src/lib/models/components/menu/menu-item.model";
import {jamHome} from "@ng-icons/jam-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wave-ui';
  colors= [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"]
  menuItems :MenuItemModel[]= [
    {
      title: 'Home',
      route: '/',
      icon: jamHome,

    },{
      title: 'About',
      route: '/about',
      icon: jamHome,
    },{
      title: 'Contact',
      route: '/contact',
      icon: jamHome,
    }]
  protected readonly console = console;
  collapsed: boolean = false;
}
