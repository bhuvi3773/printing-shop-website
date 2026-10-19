# TECH_STACK.md — Printing Shop Website

## 1. Purpose

This document defines the technical requirements, technology-selection process, project structure guidelines, and implementation constraints for the printing shop website.

The project owner will select the website design template separately.

**Important:** Do not finalize or change the technology stack until the selected template has been inspected and its compatibility requirements are understood.

## 2. Template-First Technology Selection

Before implementing the website:

1. Inspect the selected template and its documentation.
2. Identify its framework, programming language, styling system, build tool, and package manager.
3. Inspect its existing project structure and dependencies.
4. Determine whether the template is a complete project, a component library, or static HTML/CSS/JavaScript.
5. Identify the simplest reliable approach for integrating the required functionality.
6. Explain any compatibility issues and obtain approval for consequential technology changes.

### Selection rules

- Reuse the selected template's existing framework whenever practical.
- Do not force React + Vite if the selected template uses another suitable framework.
- Do not convert the template to another framework without explicit approval.
- Do not replace the template with a different template.
- Do not introduce a new styling framework simply because it is familiar.
- Preserve the template's existing dependencies and configuration unless a change is necessary.
- Avoid rebuilding working template components unnecessarily.

The initially proposed stack is React + Vite + JavaScript + CSS, but this is a provisional option rather than a mandatory requirement.

## 3. Framework and Language

Choose the framework and language based on the approved template.

Possible technologies include:

- React
- Vite
- Next.js
- JavaScript
- TypeScript
- HTML
- CSS
- Other technologies required by the approved template

Use only the technologies appropriate to the actual project.

Do not introduce multiple frameworks or duplicate application architectures without a clear requirement.

If the template already uses TypeScript, retain it unless an approved reason supports a change. If it uses JavaScript, do not migrate the entire project to TypeScript without approval.

## 4. Styling and UI Dependencies

The selected template determines the styling system.

Possible approaches include:

- Standard CSS
- CSS Modules
- Tailwind CSS
- Sass or SCSS
- CSS-in-JS
- The template's existing component library or styling framework

Rules:

- Follow the selected template's existing styling approach.
- Do not independently choose colours, typography, layouts, animations, or visual effects.
- Do not introduce a new design system before receiving the approved design instructions.
- Avoid adding multiple styling frameworks for the same purpose.
- Do not remove existing styles or dependencies without understanding their effects.
- Keep styling changes focused on the approved template integration.

Design specifications will be provided separately after the project owner selects the template.

## 5. Package Manager and Dependencies

Use the package manager already established by the selected project.

Examples include npm, pnpm, yarn, and other supported package managers.

Before adding a dependency:

1. Check whether the functionality already exists in the project.
2. Determine whether the dependency is compatible with the template.
3. Explain why it is necessary when it introduces meaningful complexity.
4. Prefer maintained packages and established integration methods.
5. Avoid unnecessary packages that increase installation time, bundle size, or maintenance effort.

Do not replace the package manager or regenerate the dependency lockfile unnecessarily.

Do not upgrade major framework versions merely to use the latest available release.

## 6. Project Structure

Follow the selected template's existing directory structure unless a change is necessary.

Organize application code by responsibility where practical.

Potential areas include:

- Components
- Pages or routes
- Business data
- Pricing calculations
- Utility functions
- Assets
- Application configuration
- Tests

Do not create directories merely to match an example structure if the template already has a suitable organization.

Avoid unnecessary restructuring, duplicate components, and oversized files.

## 7. Printing Shop Business Logic

Implement the printing shop's functionality using clear, maintainable modules appropriate to the chosen stack.

### Service catalogue

Maintain the approved printing services and their available options in an organized, reusable structure.

Potential services include:

- Visiting cards and stationery
- Flex banners and signboards
- Flyers, brochures, and pamphlets
- Stickers and labels
- Digital printing and document services
- Other services confirmed by the business

Do not display unconfirmed services as available offerings.

### Pricing calculator

Implement pricing calculations separately from presentation where practical.

Requirements:

- Use verified business prices and approved calculation rules.
- Validate quantities and dimensions before calculating.
- Support product-specific pricing where required.
- Handle minimum quantities, additional charges, and quantity-based pricing when confirmed by the business.
- Avoid floating-point rounding errors in currency calculations.
- Display an estimated price only when sufficient pricing information is available.
- Provide a quotation enquiry when the price cannot be calculated reliably.
- Do not hardcode invented prices or present sample values as real rates.

Use a consistent currency representation and appropriate rounding rules.

### Enquiry integration

Support the approved enquiry method, initially expected to be WhatsApp or phone.

Where applicable, prepare an enquiry containing:

- Selected service
- Quantity
- Relevant specifications
- Estimated price, if available
- Customer-provided instructions

Do not claim that an enquiry was sent or an order confirmed when the implementation cannot verify that result.

## 8. Backend and Database

A backend and database are not mandatory for the initial version.

Prefer the simplest architecture that satisfies the approved requirements.

The initial implementation may use locally maintained service and pricing data when the rates are public and do not require centralized management.

Do not introduce Express, a database, authentication, or an administrative dashboard without an approved need.

If future requirements introduce private pricing management, persistent enquiry storage, or administrative tools, evaluate the need for a backend and database separately.

Never store secrets or private credentials in client-side code.

## 9. API and External Integrations

Use only the external integrations required by the approved project.

Potential integrations may include:

- WhatsApp click-to-chat
- Maps or location links
- A future backend API, if approved

Rules:

- Use documented integration methods.
- Do not invent endpoints, credentials, SDK methods, or configuration keys.
- Validate external data.
- Handle failures gracefully.
- Keep secrets on the server when applicable.
- Do not introduce payment processing, delivery integrations, or other excluded functionality.

## 10. Environment Configuration

Preserve the template's existing environment configuration.

- Never overwrite existing environment files without authorization.
- Do not expose secret values in frontend bundles.
- Do not commit credentials or private tokens.
- Use environment variables only when required by the actual architecture.
- Document required environment variable names without exposing their values.
- Keep development and production configuration separate when applicable.

Do not create unnecessary environment files for functionality that does not require them.

## 11. Performance and Accessibility

Implement the website with appropriate technical quality for a small business website.

- Avoid unnecessary dependencies and oversized bundles.
- Optimize image usage where practical.
- Avoid unnecessary network requests.
- Use semantic HTML and accessible form controls.
- Support keyboard interaction where applicable.
- Provide meaningful error and status messages.
- Ensure the implementation works across supported browsers and viewport sizes.
- Follow the selected template's technical requirements without unnecessarily rewriting its components.

Performance and accessibility improvements must not introduce unrelated architectural changes.

## 12. Testing Tools

Use testing tools compatible with the selected stack.

Where appropriate, configure or reuse:

- Framework-supported build tools
- Type checking
- Linting
- Unit tests for pricing calculations
- Integration tests for relevant interactions
- Browser testing for important customer journeys

Do not install an extensive testing framework if a suitable existing setup already meets the requirements.

Verify pricing calculations independently of the UI when practical.

## 13. Build and Development Commands

Inspect the existing package configuration and documentation before running commands.

Use the project's actual scripts for development, builds, linting, type checking, and testing.

Do not invent package scripts or assume that a particular command exists.

Do not run commands that could delete data, reset project state, or change production systems without authorization.

Report failed commands and unresolved issues honestly.

## 14. Security and Data Integrity

- Validate user-controlled values.
- Protect secrets and environment configuration.
- Avoid unsafe handling of uploaded files if file uploads are introduced.
- Do not execute destructive database operations without explicit authorization.
- Do not introduce authentication or authorization mechanisms unless required.
- Do not use production services for tests when a safe isolated alternative is available.
- Preserve existing integrations and application behaviour.

Follow the project's `GLOBAL_RULES.md` and `AGENTS.md` for additional safety requirements.

## 15. Deadline and Implementation Priorities

The initial website is intended to be completed within the current working day.

Prioritize the following:

1. Compatible integration of the approved template.
2. Required website sections and navigation.
3. Printing service selection.
4. Accurate pricing calculations using confirmed rates.
5. WhatsApp or phone enquiry functionality.
6. Responsive behaviour and essential accessibility.
7. Testing and correction of critical issues.

Avoid unnecessary dependencies, complex backend infrastructure, and optional features that threaten the deadline.

Do not sacrifice correctness or invent business information merely to claim completion.

## 16. Prohibited Changes

Unless explicitly approved, do not:

- Replace the selected template.
- Convert the project to a different framework.
- Rewrite the entire project structure.
- Introduce an unapproved database or backend.
- Add online payments or delivery features.
- Invent business prices or contact details.
- Remove working functionality.
- Deploy or publish the website.
- Push code to a remote repository.
- Perform destructive Git or database operations.

## 17. Completion Criteria

Before reporting completion:

- Confirm that the implementation matches the selected template's technical requirements.
- Confirm that the approved functionality is implemented.
- Verify the pricing calculations using known test cases.
- Verify the enquiry flow and relevant links.
- Run the available build and applicable tests.
- Inspect the final changes for unrelated modifications.
- Report incomplete functionality and unverified behaviour.
- Leave deployment and publication untouched unless separately authorized.

## 18. Final Rule

**Inspect the selected template first, finalize the compatible technology stack, preserve the template's existing structure, implement only approved functionality, and verify the result.**

Do not make independent technology or design changes that conflict with the project owner's instructions.
