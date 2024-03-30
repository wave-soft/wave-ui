import { Component } from '@angular/core';
import {jamAlert, jamHome} from "@ng-icons/jam-icons";

@Component({
  selector: 'app-menu',

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  codeExample: string = `
  <wave-menu [items]="[
  {
    title:'First item',
    icon:jamHome
  },{
    title:'Second item',
    icon:jamAlert
  }
  ]" direction="row"/>
  `;
  codeExample2: string = `
  <wave-menu [items]="[
  {
    title:'First item',
    icon:jamHome
  },{
    title:'Second item',
    icon:jamAlert
  }
  ]" direction="column"/>
  `;

  protected readonly jamHome = jamHome;
  protected readonly jamAlert = jamAlert;
}
