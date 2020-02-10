import React from "react"
import td from "testdouble"
import { APIClient } from "../../api"
import { Context } from "../../contexts/API"
import { renderWithTheme } from "../../utils/test-utils"
import { CompanyDrawer } from "."

describe("CompanyDrawer", () => {
  it("loads the company from the API", async () => {
    const companyId = "124"
    const api = td.object<APIClient>()
    td.when(api.findOne({ type: "companies", id: "124" })).thenResolve({
      displayName: "Crema",
      shortName: "crema",
      id: "124",
    })

    const { findByText } = renderWithTheme(
      <Context.Provider value={api}>
        <CompanyDrawer companyId={companyId} />
      </Context.Provider>,
    )
    const received = await findByText("Crema")

    expect(received).toHaveTextContent("Crema")
  })
})
