import { useState, useEffect } from "react"

interface Params {
  readonly id: string
}

interface Company {
  displayName: string
  shortName: string
  id: string
}

export function useCompany({ id }: Params) {
  const [company, setCompany] = useState<Company>({
    displayName: "No company",
    shortName: "none",
    id,
  })

  useEffect(() => {
    const loadCompany = async () => {
      // dispatch({ type: "FETCH_INIT" })
      try {
        // const document = await api.findOne({ type: "company", id })
        const document = {
          displayName: "Crema",
          shortName: "crema",
          id,
        }
        setCompany(document)
        // dispatch({ type: "FETCH_SUCCESS", payload: result.data })
      } catch (error) {
        // dispatch({ type: "FETCH_FAILURE" })
      }
    }

    loadCompany()
  }, [id])

  return company
}
