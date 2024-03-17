import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DesignComponent} from "./pages/design/design.component";
import {CustomComponentsComponent} from "./pages/custom-components/custom-components.component";
import {ButtonComponent} from "./pages/custom-components/childrens/button/button.component";
import {MenuComponent} from "./pages/custom-components/childrens/menu/menu.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"

  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "design",
    component: DesignComponent
  },

  {
    path: "components",
    component: CustomComponentsComponent,
    children: [
      {
        path: "button",
        component: ButtonComponent
      },
      {
        path: "menu",
        component: MenuComponent
      },
      {
        path: "**",
        redirectTo: "button"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
