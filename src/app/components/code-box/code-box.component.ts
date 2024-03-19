import {Component, Input} from '@angular/core';
import {Highlight} from "ngx-highlightjs";

@Component({
  selector: 'app-code-box',

  templateUrl: './code-box.component.html',
  styleUrl: './code-box.component.scss'
})
export class CodeBoxComponent {
  @Input() code: string;


}
