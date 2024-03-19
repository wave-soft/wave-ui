import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeBoxComponent} from "./code-box/code-box.component";
import {HighlightModule} from "ngx-highlightjs";



@NgModule({
  declarations: [CodeBoxComponent],
  imports: [
    HighlightModule,
    CommonModule
  ]
})
export class ComponentsModule { }
