import {Component, HostBinding, Input} from '@angular/core';
import {IconType} from "@ng-icons/core";

@Component({
  selector: 'wave-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @HostBinding('class') @Input() type:'default' | 'primary' = 'default'
  @Input() icon: IconType;
}
