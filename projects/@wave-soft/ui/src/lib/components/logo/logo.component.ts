import {Component, computed, HostListener, input} from '@angular/core';
import {NgClass} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'wv-logo',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  constructor(private router:Router) {

  }
  @HostListener('click')
  onClick() {
    this.router.navigate([''])
  }


  variant = input<'large'|'small'>('large');
  color = input<'black'|'white'|'default'>('default');
  viewBox = computed(()=>`0 0 ${this.variant() === "large" ? 396 : 90} 90`)

}
