# Project Name: Stack Overflow Test Automation with Playwright

> A TypeScript Playwright project for automated testing of Stack Overflow using Playwright.

## Table of Contents

- Project Description
- Installation
- Usage

## Project Description

This project contains automated tests for Stack Overflow using Playwright. It includes two test scenarios:

1. **Filter Questions by Tags and Recent Activity**:
    - Open the Stack Overflow page.
    - Navigate to the "Questions" section.
    - Apply filters (no accepted answer, recent activity, and "Typescript" tag).
    - Assert the success of the filtering process.

2. **Search for the "Typescript" Tag**:
    - Open the Stack Overflow page.
    - Navigate to the "Tags" section.
    - Search for the "typescript" tag.
    - Assert the success of the search process.

## Installation

1. Clone this repository:

   git clone https://github.com/De-vidas/QA_Test.git

2. Install dependencies:
    npm install

Usage
Run the tests using the following command:

  npx playwright test
