class ComposePage {
    getOrderNowBtn(){
        return cy.get('[data-testid="button-order-now"]')
    }

    getTotalPrice(){
        return cy.get('{data-testid="total-price"}')
    }

    getDurationList(){
        return cy.get('[data-testid="edition-duration"]')
    }

    getKilometersList(){
        return cy.get('[data-testid="edition-kilometers"]')
    }

    getColoursList(){
        return cy.get('[data-testid="edition-color"]')
    }


    getWithoutTradeInBtn(){
        return cy.get('[data-testid="without-trade-in"]')
    }

    getMaxDownPayAmount() {
        return cy.get('.MuiTypography-body1 > span > .MuiTypography-root').invoke('text').then((text) => {
            // Log the initial text 
            console.log('Initial Text:', text);
    
            if (text && text.length > 4) { // Check if text has at least 2 characters at the start and 2 characters at the end
                // Return the substring excluding the first two and last two characters
                const updatedText = text.substring(2, text.length - 2);
    
                // Log the updated text
                console.log('Updated Text:', updatedText);
    
                return updatedText;
            } else {
                // Log a message if the text doesn't need modification
                console.log('Text doesn\'t need modification:', text);
                // Return the original text if it doesn't need modification
                return text;
            }
        });
    }

    getMaxDownPayInput(){
        return cy.get('[id="without_trade_in-downPayment"]')
    }

    getErrorMessage(){
       return cy.get('.MuiFormHelperText-root')
    }

}

export default ComposePage