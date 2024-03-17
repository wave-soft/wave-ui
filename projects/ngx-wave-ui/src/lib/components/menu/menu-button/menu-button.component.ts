import {Component, HostBinding, Input} from '@angular/core';
import {MenuItemModel} from "../../../models/components/menu/menu-item.model";

@Component({
  selector: 'wave-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {
  get item(): MenuItemModel {
    return this._item;
  }
  @Input()
  set item(value: MenuItemModel) {
    console.log(value);
    this._item = value;
  }
  private _item : MenuItemModel;

  @HostBinding('class') @Input() direction: "row" | "column" = "row";
  @Input() @HostBinding('class.collapsed') collapsed: boolean = false;
}
