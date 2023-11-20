import Filters from "../pages/Filters"
import ComposePage from "../pages/ComposePage";
import ResultsPage from "../pages/ResultsPage";
import { email } from "../support/credentials";
describe('LD test assignment', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.toyota.nl/private-lease/modellen')
    cy.get('#onetrust-accept-btn-handler').should('be.visible').click()
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught Exception:', err.message);
      return false;
    }); 
  })

  it('TC_1 Check cars specifications', () => {
    const resultsPage = new ResultsPage ()
    resultsPage.getSpecificationsBtn().first().should('be.visible').click()
    cy.get('.MuiIconButton-label > .MuiBox-root').should('be.visible').click()
  })

  it('TC_2 Compare cars', () => {
    const resultsPage = new ResultsPage ()
    cy.clickRandomCompareCheckboxes(3)
    resultsPage.getCompareBtn().click()
    resultsPage.getResetBtn().first().click()  
  })

  it('TC_3 Send overview by email ', () => {
    const resultsPage = new ResultsPage ()
    resultsPage.getComposeBtn().first().click()
    cy.get('[data-testid="button-email"]').click()
    cy.get('[id="email"]').type(email) 
    cy.get('[data-testid="send"]').click()
    cy.checkConfirmationEmail() //It will fail because of the connection   
  })

  it('TC_4 Without trade-in booking', () => {
    const resultsPage = new ResultsPage ()
    const composePage = new ComposePage ()
    resultsPage.getComposeBtn().first().click();
    composePage.getWithoutTradeInBtn().click();
    composePage.getMaxDownPayAmount().then((maxDownPayment) => {
      // Remove the dot (,) and convert the string to an integer
      const numericValue = parseInt(maxDownPayment.replace('.', ''), 10);
  
      // Ensure numericValue is a valid number
      if (!isNaN(numericValue)) {
        
          const maxDownPaymentInc = (numericValue+1).toString();
          composePage.getMaxDownPayInput().clear().should('be.empty').type(maxDownPaymentInc).then(() => {
              cy.get('[data-testid="calculate-monthy-payment"]').click();
              composePage.getErrorMessage().should('be.visible');
  
              // Reset the input value
              composePage.getMaxDownPayInput().clear().type(maxDownPayment);
              cy.get('[data-testid="calculate-monthy-payment"]').click();
          });
      } else {
          // Handle the case where numericValue is not a valid number
          cy.log('Invalid maxDownPayment value');
      }
  });
  
  
});

  it('TC_5 E2E up to Customer details', () => {
  
    const filters = new Filters ()
    const resultsPage = new ResultsPage ()
    const composePage = new ComposePage ()
    filters.setMinPrice('300')
    filters.setMaxPrice('400')
    resultsPage.getPriceList().validatePriceRange(300, 400);
    resultsPage.getComposeBtn().first().click()

    composePage.getColoursList().clickRandomElementAndVerifyText('[data-testid="color-price"]')
    composePage.getDurationList().clickRandomElementAndVerifyText('[data-testid="duration-price"]')
    composePage.getKilometersList().clickRandomElementAndVerifyText('[data-testid="kilometers-price"]')
    composePage.getOrderNowBtn().click()
    cy.get('#person_initials').should('be.visible')

  })
});


