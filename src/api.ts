import { config } from "./config"

export interface APIClient {
  findAll: () => Promise<void>
  findOne: () => Promise<void>
}

interface APIOptions {
  readonly baseUrl: string
}

class API implements APIClient {
  private _baseUrl: string

  public constructor(opts: APIOptions) {
    this._baseUrl = opts.baseUrl
  }

  public get baseUrl() {
    return this._baseUrl
  }

  public async findAll() {
    console.log(`findAll at ${this.baseUrl}`)
  }

  public async findOne() {
    console.log(`findOne at ${this.baseUrl}`)
  }
}

export function createApi(): APIClient {
  return new API({
    baseUrl: config.api.baseUrl,
  })
}
