import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {NgxWaveUiModule} from "../../projects/ngx-wave-ui/src/lib/ngx-wave-ui.module";
import {ComponentsModule} from "../../projects/ngx-wave-ui/src/lib/components/components.module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    NgxWaveUiModule,
    ComponentsModule]
})
export class AppModule { }
