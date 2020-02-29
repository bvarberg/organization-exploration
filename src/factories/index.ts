import { register } from "fishery"
import { teamFactory } from "./team"
import { Factories } from "./types"

export const factories: Factories = register({
  team: teamFactory,
})
