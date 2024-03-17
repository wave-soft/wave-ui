import {Component, HostBinding, Input} from '@angular/core';
import {MenuItemModel} from "../../models/components/menu/menu-item.model";

@Component({
  selector: 'wave-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @HostBinding('class') @Input() direction: 'row' | 'column' = 'row';
  @Input() items: MenuItemModel[] = [];
  @Input() @HostBinding('class.collapsed') collapsed: boolean = false;
}
