import {Component} from '@angular/core';
import {LogoComponent} from "../logo/logo.component";
import {ButtonComponent} from "../button/button.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: '[wvHeader]',
  standalone: true,
  imports: [
    LogoComponent,
    ButtonComponent,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
