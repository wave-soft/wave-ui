import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomComponentsComponent} from "./custom-components.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {ButtonComponent} from "./childrens/button/button.component";
import {MenuComponent} from "./childrens/menu/menu.component";
import {NgxWaveUiModule} from "../../../../projects/ngx-wave-ui/src/lib/ngx-wave-ui.module";
import {ComponentsModule} from "../../components/components.module";




@NgModule({
  declarations: [
    CustomComponentsComponent,ButtonComponent,MenuComponent],
  imports: [
    CommonModule,
    NgxWaveUiModule,
    RouterModule,
    ComponentsModule
  ]
})
export class CustomComponentsModule { }
