import {Component, HostBinding, input} from '@angular/core';
import {IconType, NgIcon} from "@ng-icons/core";
import {NgIf} from "@angular/common";


type Type = "primary" | "dark" | "glass" | "white"
@Component({
  selector: '[wvButton]',
  standalone: true,
  imports: [
    NgIcon,
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  icon = input<IconType>('')
  type = input<Type>("primary")


  @HostBinding("style.color")
  get color():string {
    return ["primary","white"].includes(this.type()) ? "var(--color-black)" : "var(--color-light)"
  }
  @HostBinding("style.background-color")
  get bgColor():string {
    return `var(--color-${this.getBgColorPrefix(false)})`
  }
  @HostBinding("style.--hover-background-color")
  get bgColorHover():string {
    return `var(--color-${this.getBgColorPrefix(true)})`
  }


  getBgColorPrefix(hover:boolean) {
    let data = {
      white:'light',
      glass:'light-10',
      dark:'dark',
      primary:'yellow',
    }
    if (hover) {
      data = {
        white:'graylight',
        glass:'light-20',
        dark:'black',
        primary:'yellight',
      }
    }
    return data[this.type()]
  }
}
