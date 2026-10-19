# TESTING.md — Testing and Quality Assurance Rules

## 1. Purpose

This file defines the testing and verification requirements for the project.

The coding agent must verify functionality rather than assume that code works because it has been written or because the application starts successfully.

Testing must follow the approved project requirements and the selected template's technical setup.

## 2. Inspect the Existing Test Setup

Before creating or modifying tests:

- Inspect the project's existing test configuration.
- Identify available testing tools and scripts.
- Reuse existing test utilities where appropriate.
- Check the framework's recommended testing approach.
- Avoid installing unnecessary testing dependencies.
- Do not change existing test configuration without a clear reason.

Do not assume that a particular test command exists. Inspect `package.json` and the project documentation first.

## 3. Build and Code Quality Checks

Run the applicable checks supported by the project:

- Production build.
- Type checking, if applicable.
- Linting, if configured.
- Unit tests.
- Integration tests.
- Browser or end-to-end tests, where appropriate.

For each check, report whether it passed, failed, or could not be executed.

Investigate failures caused by the implementation. Do not hide errors or disable checks merely to make the project appear successful.

## 4. Functional Testing

For every implemented feature:

1. Identify its expected behaviour.
2. Test the normal successful scenario.
3. Test relevant invalid inputs and failure scenarios.
4. Verify the resulting behaviour against the requirement.
5. Check related functionality for regressions.

Test actual functionality, not merely the presence of buttons, components, or source files.

## 5. Printing Shop Website Tests

These checks apply when the printing shop website is implemented.

### 5.1 Navigation and Sections

- Verify all required sections are present.
- Verify navigation links work.
- Verify calls to action lead to the intended sections or actions.
- Check for broken links and non-functional buttons.
- Verify the page remains usable at supported viewport sizes.

### 5.2 Service Selection

- Verify each confirmed printing service is displayed correctly.
- Verify product options match the selected service.
- Verify changing a service updates its applicable options.
- Verify incompatible selections are not accidentally retained.
- Verify unconfirmed services are not represented as available.

### 5.3 Pricing Calculator

Test pricing independently against expected calculations derived from the approved rate card.

Verify:

- Quantity changes.
- Valid and invalid dimensions, where applicable.
- Product-specific options.
- Material and finishing selections.
- Single-sided and double-sided printing, where applicable.
- Quantity-based and size-based pricing.
- Minimum quantities and additional charges, when configured.
- Currency rounding.
- Missing or unsupported pricing configurations.
- Empty, negative, non-numeric, and excessively large input values.

The calculator must not display a fabricated price when the necessary rate or pricing rule is missing.

