/* eslint-disable no-undef */
describe('Phonebook App', function () {
  it('Front page can be opened', function () {
    cy.visit('http://localhost:3001')
    cy.contains('Phonebook')
    cy.contains('Filter shown with:')
    cy.contains('Add a new')
    cy.contains('Numbers')
  })
})

describe('Add Registers', function () {
  it('Add new registers', function () {
    cy.visit('http://localhost:3001')
    cy.get('#name').type('John Doe')
    cy.get('#number').type('12-345678')
    cy.get('#add-number').click()
    cy.contains('John Doe')
    cy.contains('12-345678')

    cy.get('#name').type('Jane Doe')
    cy.get('#number').type('98-7654321')
    cy.get('#add-number').click()
    cy.contains('Jane Doe')
    cy.contains('98-7654321')
  })
})

describe('Filter Registers', function () {
  it('Filter registers', function () {
    cy.visit('http://localhost:3001')
    cy.get('#search').type('Jane')
    cy.contains('Jane Doe')
    cy.contains('98-7654321')

    cy.get('html').should('not.contain', 'John Doe')
    cy.get('html').should('not.contain', '12-345678')
  })
})

describe('Delete Registers', function () {
  it('Delete registers', function () {
    cy.visit('http://localhost:3001')
    cy.get('#search').type('Jane')
    cy.contains('Jane Doe')
    cy.contains('98-7654321')

    cy.get('.delete-button').click()
    cy.get('html').should('not.contain', 'Jane Doe')
    cy.get('html').should('not.contain', '98-7654321')

    cy.get('#search').clear()

    cy.get('#search').type('John')
    cy.contains('John Doe')
    cy.contains('12-345678')

    cy.get('.delete-button').click()
    cy.get('html').should('not.contain', 'John Doe')
    cy.get('html').should('not.contain', '12-345678')
  })
})
