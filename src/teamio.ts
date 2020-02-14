/* eslint-disable @typescript-eslint/no-explicit-any */
import { Team, TeamService } from "./services/TeamService"

interface TeamioOptions {
  readonly baseURL: string
}

export class Teamio implements TeamService {
  private _baseURL: string
  private _token: string

  public constructor(opts: TeamioOptions) {
    this._baseURL = opts.baseURL
    this._token = "abc"
  }

  public get baseURL() {
    return this._baseURL
  }

  public get token() {
    return this._token
  }

  public setToken({ token }: { token: string }) {
    this._token = token
  }

  public async find({ id }: { id: string }) {
    try {
      const response = await Promise.resolve({
        name: "Crema",
        id,
      })
      return new Team(response)
    } catch (err) {
      throw new Error(`failed to find team: ${err.message}`)
    }
  }
}
