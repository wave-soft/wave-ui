import {Component, input, TemplateRef, ViewChild} from '@angular/core';
import { NgForOf, NgIf, NgTemplateOutlet } from "@angular/common";
import {DragScrollComponent, DragScrollItemDirective} from "ngx-drag-scroll";
import {ButtonComponent} from "../button/button.component";
import {heroChevronLeft, heroChevronRight} from "@ng-icons/heroicons/outline";
import {Router} from "@angular/router";

export type CarouselItem = {
  image: string,
  data: any,
  path: any[]
  tpl?: TemplateRef<any>
}

@Component({
  selector: 'wv-carousel',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgIf,
    NgForOf,
    DragScrollComponent,
    DragScrollItemDirective,
    ButtonComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @ViewChild(DragScrollComponent) dragScroll:DragScrollComponent;
  items = input<CarouselItem[]>([]);

  height = input<string>("150px");
  width = input<string>("150px");
  showRight =false;
  showLeft = false;

  protected readonly heroChevronLeft = heroChevronLeft;
  protected readonly heroChevronRight = heroChevronRight;
constructor(private router:Router) {
}

  onClick(item: CarouselItem) {
    if (item.path) {
      this.router.navigate(item.path)
    }
  }
}
