class Filters {
    setMinPrice(minPrice){
        cy.get('[name="price.from"]').select(minPrice).should('have.value', minPrice)
    }

    setMaxPrice(maxPrice){
        cy.get('[name="price.to"]').select(maxPrice).should('have.value', maxPrice)
    }

    getPriceList(){
        let priceList
        cy.get('[data-testid="from_price"]').then((elements) =>{
            priceList = elements;
        })
        return priceList
    }
}
export default Filters