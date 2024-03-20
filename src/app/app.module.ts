import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxWaveUiModule} from "../../projects/ngx-wave-ui/src/lib/ngx-wave-ui.module";
import {CustomComponentsModule} from "./pages/custom-components/custom-components.module";
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    NgxWaveUiModule,
    CustomComponentsModule
  ],

  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js')
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule {



}
