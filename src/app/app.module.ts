import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import {NgOptimizedImage} from "@angular/common";
import {LogoComponent} from "../../projects/ngx-wave-ui/src/lib/components/logo/logo.component";
import {HeaderComponent} from "../../projects/ngx-wave-ui/src/lib/components/header/header.component";
import {NavLinkComponent} from "../../projects/ngx-wave-ui/src/lib/components/nav-link/nav-link.component";
import {ButtonComponent} from "ngx-wave-ui";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    NgOptimizedImage,
    LogoComponent,
    ButtonComponent,
    HeaderComponent,
    NavLinkComponent,
    ButtonComponent
  ],

  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
