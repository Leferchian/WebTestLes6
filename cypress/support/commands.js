Cypress.Commands.add("login", (email, password) => {
    cy.contains("Log in").click();
    if (email) {
      cy.get("#mail").type(email);
    }
    if (password) {
      cy.get("#pass").type(password);
    }
    cy.contains("Submit").click();
  });
  
  Cypress.Commands.add(
    "addNewBook",
    (title, description, cover, file, authors, addFavorites) => {
      cy.contains("Add new").click();
  
      if (title) {
        cy.get("#title").type(title);
      }
      if (description) {
        cy.get("#description").type(description);
      }
  
      if (cover) {
        cy.get("#fileCover").type(cover);
      }
  
      if (file) {
        cy.get("#fileBook").type(file);
      }
  
      if (authors) {
        cy.get("#authors").type(authors);
      }
  
      if (addFavorites) {
        cy.get("#favorite").click();
      }
  
      cy.contains("Submit").click();
    }
  );