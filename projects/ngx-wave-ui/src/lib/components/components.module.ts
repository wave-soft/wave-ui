import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "./button/button.component";
import { MenuComponent } from './menu/menu.component';
import { MenuButtonComponent } from './menu/menu-button/menu-button.component';
import {NgIcon} from "@ng-icons/core";
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [ButtonComponent, MenuComponent, MenuButtonComponent],
  imports: [
    CommonModule,
    NgIcon,
    RouterLink,
    RouterLinkActive
  ],
  exports: [ButtonComponent, MenuComponent]
})
export class ComponentsModule { }
