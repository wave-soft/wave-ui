import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeBoxComponent} from "./code-box/code-box.component";
import {HighlightModule} from "ngx-highlightjs";
import {LogoComponent} from "./logo/logo.component";



@NgModule({
    declarations: [CodeBoxComponent,LogoComponent],
    exports: [
        CodeBoxComponent,LogoComponent
    ],
    imports: [
        HighlightModule,
        CommonModule
    ]
})
export class ComponentsModule { }
