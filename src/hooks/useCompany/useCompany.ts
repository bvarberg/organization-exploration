import { useState, useEffect, useContext } from "react"
import { APIContext } from "../../contexts/APIContext"

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
      try {
        // const document = await api.findOne({ type: "company", id })
        await api.findOne()
        const document = {
          displayName: "Crema",
          shortName: "crema",
          id,
        }
        setCompany(document)
      } catch (err) {
        console.error(err)
      }
    }

    loadCompany()
  }, [api, id])

  return company
}
