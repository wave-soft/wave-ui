import { NgModule } from '@angular/core';
import { NgxWaveUiComponent } from './ngx-wave-ui.component';
import { ButtonComponent } from './components/button/button.component';
import {MenuComponent} from "./components/menu/menu.component";
import {MenuButtonComponent} from "./components/menu/menu-button/menu-button.component";
import {NgIcon} from "@ng-icons/core";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({

  declarations: [ButtonComponent, MenuComponent, MenuButtonComponent,NgxWaveUiComponent],

  imports: [
    NgIcon,
    NgIf,
    RouterLink,
    RouterLinkActive,
    NgForOf

  ],
  exports: [
    ButtonComponent,
    MenuComponent
  ]
})
export class NgxWaveUiModule { }
