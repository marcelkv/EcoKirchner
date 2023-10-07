export class InfoPopUpVm {
  readonly textMain: string;
  readonly textCancel: string;
  readonly textOk: string;
  readonly redirectCancel: string;
  readonly redirectOk: string;

  constructor(
    textMain: string,
    textCancel: string,
    textOk: string,
    redirectCancel: string,
    redirectOk: string
  ) {
    this.textMain = textMain;
    this.textCancel = textCancel;
    this.textOk = textOk;
    this.redirectCancel = redirectCancel;
    this.redirectOk = redirectOk;
  }
}
