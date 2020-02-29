/* eslint-disable @typescript-eslint/no-explicit-any */
import { TeamService } from "../../services/TeamService"
import { Team } from "../../services/TeamService/structures"

interface TeamioOptions {
  readonly baseURL: string
}

/**
 * Adapts a fake "Teamio" data source to the TeamService interface.
 */
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
    const delayedResponse = async () => {
      return new Promise(resolve => {
        setTimeout(() => resolve({ name: "Crema", id }), 2000)
      })
    }

    try {
      const response = await delayedResponse()
      return new Team(response)
    } catch (err) {
      throw new Error(`failed to find team: ${err.message}`)
    }
  }
}