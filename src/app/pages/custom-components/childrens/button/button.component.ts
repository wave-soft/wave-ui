import {Component, ElementRef, HostListener, Type, ViewChild} from '@angular/core';
import {ComponentsModule} from "../../../../components/components.module";
import {jamAirbnb, jamBaseball, jamHome} from "@ng-icons/jam-icons";
import {CustomComponentsComponent} from "../../custom-components.component";

@Component({
  selector: 'app-button',

  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {


  codeExample = `
<div [style]="{
display:'flex',
gap:'5px'
}">
  <wave-button type="default">Default</wave-button>
  <wave-button type="primary">Primary</wave-button>
</div>
  `;
  codeExample2 = `
<div [style]="{
display:'flex',
gap:'5px'
}">
  <wave-button [icon]="jamHome" type="default">Click me</wave-button>
  <wave-button [icon]="jamBaseball" type="primary">Click me</wave-button>
</div>
  `;

  protected readonly jamAirbnb = jamAirbnb;
  protected readonly jamHome = jamHome;
  protected readonly jamBaseball = jamBaseball;
}
