type Params = Readonly<{
  id: string
}>

export function useClient({ id }: Params) {
  // TODO: load or otherwise procure a client record/object

  return {
    displayName: "Crema",
    shortName: "crema",
    id,
  }
}
