/// <reference types="cypress" />

// Load Chance
let Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();

context('Register', () => {
  it('new user registration', () => {
    cy.visit('index.php');

    //signin
    cy.get('.login').click();

    //create account
    cy.get('input#email_create').type(chance.email());
    cy.get('button#SubmitCreate').click();

    //Personal Information
    cy.get('div#uniform-id_gender2').click();
    cy.get('input#customer_firstname').type(chance.first());
    cy.get('input#customer_lastname').type(chance.last());
    cy.get('input#passwd').type('12345');
    cy.get('select#days').select('1');
    cy.get('select#months').select('February');
    cy.get('select#years').select('1999');

    //ADDRESS
    cy.get('input#firstname').type(chance.first());
    cy.get('input#lastname').type(chance.last());
    cy.get('input#company').type(chance.company());
    cy.get('input#address1').type(chance.address());
    cy.get('input#city').type(chance.city());
    cy.get('input#postcode').type(chance.zip());
    cy.get('select#id_country').select('United States');
    cy.get('select#id_state').select('Georgia');
    cy.get('input#phone_mobile').type(chance.phone());
    cy.get('button#submitAccount').click();

    cy.url().should('contain', 'controller=my-account');
    cy.contains('Welcome to your account').should('be.visible');
  });
});
