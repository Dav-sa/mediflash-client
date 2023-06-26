describe("Mediflash test app", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000")
  })

  describe("Navigation", () => {
    it("should navigate to the likes page", () => {
      cy.get('a[href*="likes"]').click()

      cy.url().should("include", "/likes")
    })
  })

  describe("Likes", () => {
    it("should display the title and likes", () => {
      cy.get("p").contains("Title")
      cy.get("p").contains("Liked by :")
    })
  })
})
