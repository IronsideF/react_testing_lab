
describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should update the display using operators', () => {
    cy.get('#number1').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3');
  });
  it('should be able to chain operation', () => {
    cy.get('#number1').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '12');
  });
  it('should have expected outputs for large numbers', () => {
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5.4e+29')})
it('should give expected outputs for decimal numbers', () => {
  cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3');
});
it('should give expected outputs for negative numbers', () => {
  cy.get('#number5').click();
  cy.get('#operator-subtract').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#operator-multiply').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-25');
});
it('should give expected outputs for positive numbers', () => {
  cy.get('#number5').click();
  cy.get('#operator-plus').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('have.text', '10');
});

  it('should return math error when dividing by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Math Error');})
  });
