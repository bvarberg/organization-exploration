export class Team {
  private _name: string

  constructor(data: any) {
    if (typeof data.name !== "string") {
      throw new Error("name must be a string")
    }

    this._name = data.name
  }

  get name() {
    return this._name
  }
}
