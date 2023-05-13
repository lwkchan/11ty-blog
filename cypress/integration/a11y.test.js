/// <reference types="Cypress" />

function throwViolations(violations) {
  throw violations;
}

describe("Accessibility", () => {
  it("homepage has no detectable a11y violations on load", () => {
    cy.visit("/");
    cy.injectAxe();
    cy.checkA11y();
  });

  it("blogpage has no detectable a11y violations on load", () => {
    cy.visit("/blog");
    cy.injectAxe();
    cy.checkA11y();
  });

  it("latest blogpost has no detectable a11y violations on load", () => {
    cy.get("article")
      .first()
      .within(() => {
        cy.get("a").click();
      });
    cy.injectAxe();
    cy.checkA11y(null, null, throwViolations);
  });
});
