# TASKS.md — Printing Shop Website Development

## Project Objective

Build and verify a printing shop website using the template selected and approved by the project owner.

The website must allow customers to explore printing services, select supported product specifications, view prices based on verified business rates, and contact the shop.

The target is to complete the initial website within the current working day.

## Phase 1 — Project Preparation

- [ ] Read all applicable project instruction files.
- [ ] Inspect the selected template and its documentation.
- [ ] Identify the framework, language, styling system, and package manager.
- [ ] Inspect the existing project structure and dependencies.
- [ ] Check Git status and preserve existing work.
- [ ] Identify compatibility issues and missing requirements.
- [ ] Finalize the technology stack after template inspection.
- [ ] Confirm the implementation plan before consequential changes.

## Phase 2 — Template Integration

- [ ] Set up the approved template.
- [ ] Preserve its existing structure and functionality where practical.
- [ ] Confirm the project starts locally.
- [ ] Resolve setup or dependency issues.
- [ ] Integrate the approved requirements without independently changing the design direction.

## Phase 3 — Website Sections

- [ ] Homepage.
- [ ] Printing services catalogue.
- [ ] Product selection and customization.
- [ ] Pricing calculator.
- [ ] Our Work / Gallery.
- [ ] About the business.
- [ ] Contact and enquiry.
- [ ] Navigation and footer.

Only display services and business information confirmed by the owner.

## Phase 4 — Pricing Functionality

- [ ] Obtain or confirm the actual business rates.
- [ ] Identify valid options for each product.
- [ ] Document the calculation rules.
- [ ] Implement pricing calculations.
- [ ] Validate quantities and dimensions.
- [ ] Handle applicable additional charges and rounding.
- [ ] Support quotation requests when prices cannot be calculated reliably.
- [ ] Verify calculations against independently calculated expected results.

Do not invent prices or present demonstration values as real rates.

If pricing information is missing, record the dependency and avoid displaying misleading totals.

## Phase 5 — Contact and Enquiry

- [ ] Confirm the business's contact details.
- [ ] Configure the approved WhatsApp or phone links.
- [ ] Include selected product specifications in the enquiry.
- [ ] Include the estimated price when available.
- [ ] Validate required inputs.
- [ ] Test the complete enquiry flow.
- [ ] Ensure that opening WhatsApp is not represented as a confirmed order.

## Phase 6 — Business Content and Assets

- [ ] Add the confirmed business name.
- [ ] Add the approved logo, if available.
- [ ] Add verified service descriptions.
- [ ] Add confirmed phone number, address, and opening hours.
- [ ] Add approved images and real work samples where available.
- [ ] Identify any remaining placeholders.
- [ ] Avoid fabricated business claims, testimonials, and prices.

## Phase 7 — Testing and Quality Assurance

- [ ] Run the available production build.
- [ ] Run applicable type checks and linting.
- [ ] Run relevant automated tests.
- [ ] Test service selection.
- [ ] Test pricing calculations and invalid inputs.
- [ ] Test enquiry and contact links.
- [ ] Check representative mobile and desktop viewports.
- [ ] Investigate relevant browser errors.
- [ ] Check for regressions.
- [ ] Review the final Git diff.
- [ ] Record any incomplete or unverified functionality.

## Phase 8 — Final Review

- [ ] Confirm the approved requirements are implemented.
- [ ] Confirm prices are based on verified rates.
- [ ] Confirm the customer journey works end to end.
- [ ] Confirm excluded features have not been introduced.
- [ ] Confirm existing work and configuration are preserved.
- [ ] Report test results honestly.
- [ ] Document remaining issues and required decisions.
- [ ] Leave deployment and publication untouched unless explicitly authorized.

## Explicitly Out of Scope

- Home delivery and delivery scheduling.
- Shipping charges and shipment tracking.
- Customer accounts and order history.
- Online payments.
- Unapproved admin dashboards.
- Unapproved backend or database infrastructure.
- Unapproved redesigns or template replacements.
- Deployment, publication, and remote Git pushes.

## Progress Tracking Rules

- Mark a task complete only after performing the work and the relevant verification.
- Record blockers when business information or approval is missing.
- Do not mark a failed or untested feature as complete.
- Do not silently skip tasks.
- Prioritize essential customer-facing functionality over optional improvements.
- Obtain approval before significant scope changes or restricted operations.

## Definition of Done

The website is ready for owner review when the approved sections and functionality are implemented, the pricing and enquiry flows have been verified as far as the available information permits, relevant tests have been performed, and outstanding issues are documented.

Completion does not authorize deployment or publication.