import { Component } from '@angular/core';
import {ComponentsModule} from "../../../../components/components.module";

@Component({
  selector: 'app-button',

  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  codeExample = `
  <wave-button>Click me</wave-button>
  `;

}
