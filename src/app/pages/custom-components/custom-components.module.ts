import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "../../../../projects/ngx-wave-ui/src/lib/components/components.module";
import {CustomComponentsComponent} from "./custom-components.component";
import {RouterOutlet} from "@angular/router";




@NgModule({
  declarations: [CustomComponentsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterOutlet,
  ]
})
export class CustomComponentsModule { }
