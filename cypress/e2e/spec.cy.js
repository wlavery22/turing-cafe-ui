describe("Visit the homepage", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "reservations.json",
    })
    cy.visit("http://localhost:3000");
  });

  it("should display homepage with reservations", () => {
    cy.get("h1").contains("Turing Cafe Reservations").should("be.visible");
    cy.get('input[name="firstName"]')
    cy.get('input[name="date"]')
    cy.get('input[name="time"]')
    cy.get('input[name="number"]')
    cy.get("button").contains("SUBMIT RESERVATION").should("be.visible");
    cy.get('.card').should('have.length', 3);
    cy.get('.card').first().contains('Christie')
    cy.get('.card').first().contains("12/29")
    cy.get('.card').first().contains("7:00")
    cy.get('.card').first().get(".number").contains("12")
    cy.get('.card').last().get(".number").contains("4")
    cy.get('.card').last().contains("Pam")
    cy.get('.card').last().contains("1/21")
    cy.get('.card').last().contains("6:00")
  })

  it("should hold the value in the form input when data is entered into the input", () => {
    cy.get('input[name="firstName"]').type("Leta").should('have.value', 'Leta')
    cy.get('input[name="date"]').type("4/5").should('have.value', '4/5')
    cy.get('input[name="time"]').type("7:00").should('have.value', '7:00')
    cy.get('input[name="number"]').type("2").should('have.value', '02')
  })
  // it('should add a new reservation to the page when a user fills out the form and clicks the Submit button', () => {
  //   cy.get('input[name="firstName"]').type("Leta")
  //   cy.get('input[name="date"]').type("4/5")
  //   cy.get('input[name="time"]').type("7:00")
  //   cy.get('input[name="number"]').type("2")
  //   cy.get('.reservation').click()
  //   cy.get('.card').last().get(".number").contains("2")
  //   cy.get('.card').last().contains("Leta")
  //   cy.get('.card').last().contains("4/5")
  //   cy.get('.card').last().contains("7:00")
  //   });  
  })

describe("Make a reservation", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "reservations.json",
    })
    cy.intercept("POST", "http://localhost:3001/api/v1/reservations", {
      statusCode: 201,
      fixture: "reservations.json",
    })
      cy.visit("http://localhost:3000");
    });

  it('should add a new reservation to the page when a user fills out the form and clicks the Submit button', () => {
    cy.get('input[name="firstName"]').type("Leta")
    cy.get('input[name="date"]').type("4/5")
    cy.get('input[name="time"]').type("7:00")
    cy.get('input[name="number"]').type("2")
    cy.get('.reservation').click()
    cy.get('.card').last().get(".number").contains("2")
    cy.get('.card').last().contains("Leta")
    cy.get('.card').last().contains("4/5")
    cy.get('.card').last().contains("7:00")
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "newReservations.json",
    })
    cy.reload()
    cy.get('.card').last().get(".number").contains("2")
    cy.get('.card').last().contains("Leta")
    cy.get('.card').last().contains("4/5")
    cy.get('.card').last().contains("7:00")
  });  

  })

// })


 


// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })