import { useContext, useEffect, useState } from "react"
import { APIContext } from "../../contexts/APIContext"
import { Company } from "../../types/Company"

interface Params {
  readonly id: string
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
        const response = await api.findOne({
          type: "companies",
          id,
        })
        const company = response as Company

        setCompany(company)
      } catch (err) {
        console.error(err)
      }
    }

    loadCompany()
  }, [api, company, id])

  return company
}
