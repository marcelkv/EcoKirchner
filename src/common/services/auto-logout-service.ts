import { IAutoLogoutService } from "@/common/services/auto-logout-service.interface";

export class AutoLogoutService implements IAutoLogoutService {
  private _autoLogoutTimeout: NodeJS.Timeout;
  private readonly _logoutCallback: () => void;
  private readonly _timeoutDuration_ms: number;

  constructor(logoutCallback: () => void, timeoutDuration_ms: number) {
    this._logoutCallback = logoutCallback;
    this._timeoutDuration_ms = timeoutDuration_ms;
    this._setupAutoLogout();
  }

  resetAutoLogout() {
    clearTimeout(this._autoLogoutTimeout);
    this._setupAutoLogout();
  }

  private _setupAutoLogout() {
    this._autoLogoutTimeout = setTimeout(() => {
      this._logoutCallback();
    }, this._timeoutDuration_ms);
  }
}
