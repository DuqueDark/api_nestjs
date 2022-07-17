export class Game {
  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  private _studio: string;
  public get studio(): string {
    return this._studio;
  }
  public set studio(value: string) {
    this._studio = value;
  }
  private _precoCompra: number;
  public get precoCompra(): number {
    return this._precoCompra;
  }
  public set precoCompra(value: number) {
    this._precoCompra = value;
  }
  private _lucro: number;
  public get lucro(): number {
    return this._lucro * 100;
  }
  public set lucro(value: number) {
    this._lucro = value;
  }
  public get precoVenda(): number {
    return this.precoCompra * this._lucro;
  }
}
