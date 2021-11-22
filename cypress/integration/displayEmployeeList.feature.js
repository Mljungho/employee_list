/* eslint-disable no-undef */

import { within } from "@testing-library/dom";

describe("Display list of employees", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to see a header", () => {
    cy.get("#header").should("contain.text", "Employee List");
  });

  it("displays a list with 6 items", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item").should("have.length", 6);
    });
  });

  it("the list items display the expected content", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item")
        .first()
        .should("contain", "George Bluth");
    });
  });

  // it("tthe list items displays an image", () => {
  //   cy.get("#employee-list").within(() => {
  //     cy.get(".employee-item")
  //       .first()
  //       .find('.avatar')
  //       .should("be.visible");
  //   });
  // });
});

describe('Display of employee modal', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#employee-list').within(() => {
      cy.get('.employee-item').first().find('.view-button').click()
    })
  })

  it('opens up a modal when view button is clicked', () => {
    cy.get('#modal-container').should('be.visible')
  })

  it('the modal features expected content', () => {
    cy.get('#modal-container').within(() => {
      cy.get('.name').should('contain', 'George Bluth')
      cy.get('.image').should('be.visible')
      cy.get('.email').should('contain', 'george.bluth@reqres.in')
    })
  })
})
