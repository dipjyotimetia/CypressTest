/// <reference types="Cypress" />

describe('Testing the hero list page', function () {

    it('should contain the word heroes', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
        cy.screenshot();
    })

});