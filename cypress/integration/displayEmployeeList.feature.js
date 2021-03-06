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
