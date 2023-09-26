import { IMenuService } from "@/common/menu-service.interface";

export class MenuService implements IMenuService {
  private _isHamburgerOpen = false;

  get isHamburger(): boolean {
    return true;
  }

  get isHamburgerOpen(): boolean {
    if (!this.isHamburger) {
      return false;
    }

    return this._isHamburgerOpen;
  }

  set isHamburgerOpen(value: boolean) {
    this._isHamburgerOpen = value;
  }
}
