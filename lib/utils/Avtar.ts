export class Avtar {
  private _avtarId: String;
  private _avtarName: String;
  private _associatedUrl: String;

  public get avtarId(): String {
    return this._avtarId;
  }
  public set avtarId(value: String) {
    this._avtarId = value;
  }

  public get avtarName(): String {
    return this._avtarName;
  }
  public set avtarName(value: String) {
    this._avtarName = value;
  }

  public get associatedUrl(): String {
    return this._associatedUrl;
  }
  public set associatedUrl(value: String) {
    this._associatedUrl = value;
  }
}
