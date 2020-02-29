/* eslint-disable @typescript-eslint/no-explicit-any */
export class Team {
  private _id: string
  private _name: string

  constructor(data: any) {
    if (typeof data.id !== "string") {
      throw new Error("id must be a string")
    }
    if (typeof data.name !== "string") {
      throw new Error("name must be a string")
    }

    this._id = data.id
    this._name = data.name
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }
}
