export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  public get tokenExpirationDate(): Date {
    return this._tokenExpirationDate;
  }

  public get token(): string {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
      return '';

    return this._token;
  }
}
