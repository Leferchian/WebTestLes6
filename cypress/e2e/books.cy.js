it("Should successfully add new book", () => {
  cy.visit("/");

  cy.login("test@test.com", "test");

  cy.addNewBook(
    "Fight Club",
    "Fight Club centers on an anonymous narrator, who works as a product recall specialist for an unnamed car company. ",
    "",
    "",
    "Chuck Palahniuk"
  );

  cy.contains("Fight Club").should("be.visible");
});

it("Should not add new book without title", () => {
  cy.visit("/");

  cy.login("test@test.com", "test");

  cy.addNewBook(
    "",
    "Fight Club centers on an anonymous narrator, who works as a product recall specialist for an unnamed car company",
    "",
    "",
    "Chuck Palahniuk"
  );

  cy.get("#title")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Should successfully add book to favourites ", () => {
  cy.visit("/");

  cy.login("test@test.com", "test");

  cy.addNewBook(
    "Sherlock Holmes",
    "Sherlock Holmes is a fictional detective created by British author Arthur Conan Doyle",
    "",
    "",
    "Arthur Conan Doyle",
    "+"
  );
  cy.contains("Favorites").click();

  cy.contains("Sherlock Holmes").should("be.visible");
});