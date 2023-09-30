import { IMenuService } from "@/common/services/menu-service.interface";

export class MenuService implements IMenuService {
  private _isHamburgerOpen = false;

  get isHamburgerOpen(): boolean {
    return this._isHamburgerOpen;
  }

  set isHamburgerOpen(value: boolean) {
    this._isHamburgerOpen = value;
  }

  togglesHamburger(): void {
    this._isHamburgerOpen = !this._isHamburgerOpen;
  }
}
