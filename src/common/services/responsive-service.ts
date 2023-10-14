import { ref } from "vue";
import { IResponsiveService } from "./responsive-service.interface";
import { SizeType } from "@/common/services/size-type";
import throttle from "lodash/throttle";

export class ResponsiveService implements IResponsiveService {
  widthSize = ref<SizeType>();
  heightSize = ref<SizeType>();
  windowWidth = ref<number>();
  windowHeight = ref<number>();

  private widthBreakpoints = {
    xs: 375,
    sm: 768,
    md: 992,
    lg: 1200,
  };

  private heightBreakpoints = {
    xs: 375,
    sm: 560,
    md: 768,
    lg: 992,
  };

  constructor() {
    this._setSizes();
    this._startListening();
  }

  init(): void {
    this._updateWindowWidth();
  }

  private _setSizes(): void {
    this.widthSize.value = this._getWidthSize(window.innerWidth);
    this.heightSize.value = this._getHeightSize(window.innerHeight);
  }

  private _getWidthSize(windowWidth: number): SizeType {
    if (windowWidth < this.widthBreakpoints.xs) {
      return SizeType.ExtraSmall;
    } else if (windowWidth < this.widthBreakpoints.sm) {
      return SizeType.Small;
    } else if (windowWidth < this.widthBreakpoints.md) {
      return SizeType.Medium;
    }
    return SizeType.Large;
  }

  private _getHeightSize(windowHeight: number): SizeType {
    if (windowHeight < this.heightBreakpoints.xs) {
      return SizeType.ExtraSmall;
    } else if (windowHeight < this.heightBreakpoints.sm) {
      return SizeType.Small;
    } else if (windowHeight < this.heightBreakpoints.md) {
      return SizeType.Medium;
    }
    return SizeType.Large;
  }

  private _startListening() {
    window.addEventListener("resize", this._updateWindowWidth);
  }

  private _stopListening() {
    window.removeEventListener("resize", this._updateWindowWidth);
  }

  private _updateWindowWidth = throttle(() => {
    this.windowWidth.value = window.innerWidth;
    this.windowHeight.value = window.innerHeight;
    this._setSizes();
  }, 200);

  destroy() {
    this._stopListening();
  }
}
