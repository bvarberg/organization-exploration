import { useState, useEffect, useContext } from "react"
import { APIContext } from "../../contexts/api"

interface Params {
  readonly id: string
}

interface Company {
  displayName: string
  shortName: string
  id: string
}

export function useCompany({ id }: Params) {
  const api = useContext(APIContext)
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
        api.request()
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
  }, [api, id])

  return company
}
