/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from "./config"

export interface APIClient {
  setToken(opts: Readonly<{ token: string }>): void
  findAll(opts: Readonly<{ type: string }>): Promise<any[]>
  findOne(opts: Readonly<{ type: string; id: string }>): Promise<any>
}

interface APIOptions {
  readonly baseUrl: string
}

class API implements APIClient {
  private _baseUrl: string
  private _token: string

  public constructor(opts: APIOptions) {
    this._baseUrl = opts.baseUrl
    this._token = "abc"
  }

  public get baseUrl() {
    return this._baseUrl
  }

  public get token() {
    return this._token
  }

  public setToken({ token }: { token: string }) {
    this._token = token
  }

  public async findAll() {
    console.log(`findAll at ${this.baseUrl}`)
    console.log(`token is ${this.token}`)
    return []
  }

  public async findOne() {
    console.log(`findOne at ${this.baseUrl}`)
    console.log(`token is ${this.token}`)
    return {
      // displayName: "Crema",
      // shortName: "crema",
      // id: "124",
    }
  }
}

export function createApi(): APIClient {
  return new API({
    baseUrl: config.api.baseUrl,
  })
}
