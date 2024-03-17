import {IconType} from "@ng-icons/core";

export interface MenuItemModel {
  title: string;
  icon: IconType;
  route?: string;
  click?: () => void;
  children?: MenuItemModel[];
}
