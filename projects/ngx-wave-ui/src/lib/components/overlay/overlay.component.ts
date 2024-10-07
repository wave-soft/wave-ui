import {Component, HostBinding, model} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {heroXMark} from "@ng-icons/heroicons/outline";
import {NgIf} from "@angular/common";

@Component({
  selector: 'wv-overlay',
  standalone: true,
  imports: [
    NgIcon,
    NgIf
  ],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {

  open= model(false);
  protected readonly heroXMark = heroXMark;

  constructor() {
  }

  @HostBinding('class.open')
  get openClass() {
    return this.open();
  }
}
