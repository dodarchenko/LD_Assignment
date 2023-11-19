class ResultsPage {
    getCompareCheckbox(){
        return cy.get('[data-testid="card"] .MuiTypography-root')
    }
    getCompareBtn(){
        return cy.get('.MuiBottomOverlay-root [type="button"] span.MuiButton-label:contains("Vergelijk")');
    }
    getResetBtn(){
        return cy.get('.MuiBottomOverlay-header .MuiButton-label:contains("Reset")').eq(1) 
        .should('exist');      
    }

    getListToCompare(){
        cy.get('.MuiGrid-root .MuiGrid-item')
    }

    getComposeBtn(){
       return cy.get('[data-testid="card-content"] [role="button"]')
    }

    getSpecificationsBtn(){
        return cy.get('[data-testid="specification"]')
    }

    getDurationPrice(){
        return cy.get('[data-testid="duration-price"]')
    }

    getPriceList(){
        return cy.get('[data-testid="from_price"]')
    }
}
export default ResultsPage