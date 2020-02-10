import { useContext, useEffect, useState } from "react"
import { Context as API } from "../../contexts/API"
import { Company } from "../../types/Company"

interface Params {
  readonly id: string
}

export function useCompany({ id }: Params) {
  const api = useContext(API)
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
