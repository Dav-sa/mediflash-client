describe("page should load", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/")
    cy.contains("venusaur")
  })
})

describe("button click should work", () => {
  it("passes", () => {
    cy.get(".bg-slate-700").should("exist")

    cy.contains("More details").click()

    cy.url().should("include", "/pokemon/")
  })
})
