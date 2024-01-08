describe("Visit the homepage", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "reservations",
    }).as("homepage");
    cy.visit("http://localhost:3000");
  });
  it("should display homepage with reservations", () => {
    cy.intercept("POST", "http://localhost:3001/sightings", {
      statusCode: 201,
      fixture: "post",
    }).as("postSightings");
})




// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })