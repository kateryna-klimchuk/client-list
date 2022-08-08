describe("Testing modal window", () => {
  beforeEach(() => {
    cy.visit("https://kateryna-klimchuk.github.io/client-list/");
  });

  it("Check open modal, compare modal info contact list info", () => {
    cy.get(".itemButton, tr").click();
    cy.get(".Modal_modalList__KZBqf, div").should("be.visible");
    cy.get('[data-list="847A937E"]').contains("Viva");
    cy.get(".Modal_modalList__KZBqf, div").contains("Viva");
  });
  it("Disabled Button", () => {
    cy.get("#decrement, div").should("be.disabled");
  });
  it("Show correct option value", () => {
    cy.get("select").select("20").should("have.value", "20");
  });
  it("Check modal info with the main contact info", () => {
    cy.get('[data-list="847A937E"]').contains("Viva");
  });
});
