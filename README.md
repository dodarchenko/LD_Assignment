# Project Name - LD Cypress test assignment

## Test Strategy

### Overview

This Cypress test suite is designed to validate critical user journeys for different user types based on data and UX research. 
Two main user types have been identified: **Novice** and **Advanced**. Each user type has specific critical user journeys, and for each journey, a set of required test cases has been defined.

### User Types and Critical Journeys

#### 1. User Type: Novice (Exploratory search for a car)

This user has no strict requirements to the car. Usually just explore the options.


- **Important Features:**
  - Compare car models
  - View car specifications
  - Email car overview

#### 2. User Type: Advanced (Targeted search for a car)

This user has a specific set of the requirements to the car. Use a lot of filters to get most relevant options.

- **Important Features:**
  - Filters: Duration, Kilometers, Min-Max Price, Colours


## Setup and Run Cypress Tests

### Prerequisites

- Node.js installed
- Dependencies installed: `npm install`
- Cypress install: `npm install cypress --save-dev`

### Running Tests

1. Open a terminal and navigate to the project directory.

2. Run the following command to open the Cypress Test Runner:
   ```bash
   npx cypress run
