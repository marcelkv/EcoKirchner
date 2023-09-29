import { ref } from "vue";
import { IResponsiveService } from "./responsive-service.interface";
import { DeviceType } from "@/common/device-type";

export class ResponsiveService implements IResponsiveService {
  deviceType = ref<DeviceType>();

  private breakpoints = {
    xs: 375,
    sm: 768,
    md: 992,
    lg: 1200,
  };

  constructor() {
    this._setDeviceType();
    this._startListening();
  }

  private _setDeviceType(): void {
    this.deviceType.value = this._getDeviceType(window.innerWidth);
  }

  private _getDeviceType(windowWidth: number): DeviceType {
    if (windowWidth < this.breakpoints.xs) {
      return DeviceType.ExtraSmall;
    } else if (windowWidth < this.breakpoints.sm) {
      return DeviceType.Small;
    } else if (windowWidth < this.breakpoints.md) {
      return DeviceType.Medium;
    }
    return DeviceType.Large;
  }

  private _startListening() {
    window.addEventListener("resize", this._updateWindowWidth);
  }

  private _stopListening() {
    window.removeEventListener("resize", this._updateWindowWidth);
  }

  private _updateWindowWidth = throttle(() => {
    this._setDeviceType();
  }, 200);

  destroy() {
    this._stopListening();
  }
}
