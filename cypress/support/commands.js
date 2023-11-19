Cypress.Commands.add('clickRandomElementAndVerifyText', { prevSubject: true }, (subject, targetSelector) => {
  return cy.wrap(subject).then(elements => {
    const randomIndex = Cypress._.random(0, elements.length - 1);
    const randomElement = elements.eq(randomIndex);
    const randomElementText = randomElement.text().trim();
    cy.wrap(randomElement).click();

    const indexOfPlus = randomElementText.indexOf('+');
    let partBeforePlus;

    if (indexOfPlus !== -1) {
      // If '+' is found, return the part before the '+'
      partBeforePlus = randomElementText.substring(0, indexOfPlus).trim();
      cy.get(targetSelector).should('contain.text', partBeforePlus);
    } else {
      // If no '+', return the entire text 
      cy.get(targetSelector).should('contain.text', randomElementText);
      partBeforePlus = randomElementText;
    }

    return cy.wrap(partBeforePlus);
  });
});
  



  Cypress.Commands.add('checkConfirmationEmail', () => {
    const inboxId = 'Y2488911'; // FakeID
    const apiToken = '846443e0e3a7f865620196ea416f3c1b'; // Fake token
  
    // Use an API request to check for the confirmation email
    return cy.request({
      method: 'GET',
      url: `https://mailtrap.io/api/v1/inboxes/${inboxId}/messages`,
      headers: {
        'Api-Token': apiToken,
      },
    }).then((response) => {
      // Identify the confirmation email in the response using email subject
      const confirmationEmail = response.body.find((email) =>
        email.subject.includes('Alstublieft, uw persoonlijke berekening')
      );
  
      // Assertions on the confirmation email
      expect(confirmationEmail).to.exist;
    });
  });

  Cypress.Commands.add('clickRandomCompareCheckboxes', (count) => {
    // Get all cards with the specified data-testid
    cy.get('[data-testid="card"]').then((cards) => {
      // Get random indices for cards
      const cardIndices = getRandomIndices(cards.length, count);
  
      // Iterate over the selected random card indices
      cardIndices.forEach((cardIndex) => {
        // Find checkboxes within the selected random card
        cy.wrap(cards).eq(cardIndex).find('.MuiFormControlLabel-root input[type="checkbox"]').check({ force: true });
      });
    });
  });
  
  function getRandomIndices(maxIndex, count) {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Cypress._.random(0, maxIndex - 1);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }
  

  Cypress.Commands.add('validatePriceRange', { prevSubject: true }, (subject, min, max) => {
    cy.wrap(subject).each(($el) => {
    
      const priceValue = $el.attr('data-testvalue');  
      // Convert the price value to a number for comparison
      const priceNumber = parseFloat(priceValue.replace(/[^\d.-]/g, ''));  
      // Check if the price is within the specified range
      expect(priceNumber).to.be.within(min, max);
    });
  });
  