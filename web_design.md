# Printing Shop Website — Web Design Plan

## 1. Project Goal

Create a polished, modern, mobile-responsive website for a local printing shop. The site should help customers explore printing services, customize their requirements, view an estimated price when approved pricing rules are available, and contact the shop directly.

**Current stage:** Design and requirements approved. This file is the design reference for implementation.

## 2. Visual Direction

### Approved colour palette — keep unchanged

Use the colours from the **first approved design reference**:

- Deep charcoal / near-black for the navigation, hero, process section, and footer.
- Warm beige / champagne tones for subtle highlights.
- Restrained gold accents for small details and emphasis.
- White or warm-white surfaces where needed to keep content readable.

**Important:** Do not switch to the brighter orange-and-pink palette from the later mockup. Improve spacing and layout while retaining the first design's palette.

### Overall look and feel

- Premium, clean, professional, and product-focused.
- Strong typography and a clear visual hierarchy.
- Generous spacing; avoid cramming too many elements into a section.
- Consistent image sizes, card proportions, alignment, and spacing.
- Subtle borders and restrained effects; avoid unnecessary animations.
- No 3D visuals.
- Do not reuse the unrelated portraits or specific people from the reference websites.
- Use relevant printing-product imagery: business cards, brochures, flyers, flex banners, stickers, labels, and stationery.
- Design mobile-first and verify the layout on small screens.

## 3. Design References

### Reference 1 — Navigation bar

URL: https://zenwood.studio/?ref=navbar.gallery

**Use for:** Navigation-bar inspiration only.

**Direction:** Take inspiration from the navigation's visual treatment and polish. Do not copy the entire website or assume its other sections are approved.

### Reference 2 — Overall page presentation

URL: https://epiminds.com/

**Use for:** Overall presentation, strong hero, typography, section composition, visual rhythm, and responsive layout.

**Do not copy:** 3D visuals, unrelated portraits, AI-specific content, or the site's exact copy and branding.

**Direction:** Borrow general design principles, not the website itself. Adapt them to a local printing business.

### Approved design direction

Combine the navigation inspiration from Reference 1 with the page presentation principles from Reference 2, using the first generated mockup's dark charcoal, warm beige, and gold colour palette. Make the layout less crowded than the first mockup.

## 4. Homepage Structure

Build the homepage in this order. Header and footer are shared site elements.

### 4.1 Navigation bar

- Business logo/name (use a placeholder until the real name is provided).
- Home
- Services
- Pricing
- Our Work
- About
- Contact
- A clear **Get a Price** call-to-action.

Keep the navigation uncluttered. On mobile, use a working, accessible menu and ensure the price/enquiry action remains easy to find.

### 4.2 Hero section

This is the most visually important section.

Include:
- A short, bold headline about professional printing.
- One brief supporting sentence.
- A high-quality, relevant image or composition of printed products.
- Primary button: **Get a Price**.
- Secondary button: **Explore Services**.
- Optional trust/quality points only if they are accurate and approved by the business.

Keep the hero focused. Do not fill it with multiple competing messages, too many badges, or decorative effects.

### 4.3 Services

Show a consistent grid of service cards with:
- Relevant image.
- Service name.
- Short description.
- A clear action to view or customize that service.

Potential categories to confirm with the shop:
- Visiting cards / business cards
- Flex banners and signboards
- Flyers, pamphlets, posters, and brochures
- Stickers and labels
- Letterheads and business stationery
- Other services the shop actually provides

Do not advertise unconfirmed services as available.

### 4.4 Pricing / Choose and Customize

Allow customers to select a service and the relevant options, such as:
- Size
- Material or paper type
- Quantity
- Finish or other service-specific options

Show an estimate only when the shop's actual rates and calculation rules have been supplied and approved. If the price depends on design, material, or other custom factors that are not covered by the approved rules, offer a **Request a Quote** option instead.

Do not invent rates or present sample/demo rates as real prices.

### 4.5 Why Choose Us

Use a simple, balanced layout with a small number of approved benefits, such as quality, product variety, value, or service. Do not publish unsupported claims, fake statistics, or fabricated testimonials.

### 4.6 Our Work / Gallery

- Display real, approved work where available.
- Use consistent image proportions and neat spacing.
- If real business images are not available yet, use clearly temporary, relevant placeholders and replace them before launch.
- Do not imply that sample imagery is the shop's own completed work.

### 4.7 How It Works

Keep this section short and clear:
1. Choose a printing service.
2. Customize the requirements and view an estimate, if approved rates are available.
3. Contact the shop to discuss or confirm the order.

Do not include delivery or shipping steps.

### 4.8 Final call-to-action

Use a clear invitation to get a price or contact the shop. Avoid adding multiple competing calls-to-action.

### 4.9 Footer

Include only confirmed information:
- Business name/logo
- Useful page links
- Actual service categories
- Shop phone number and WhatsApp number, if provided
- Shop address and opening hours, if provided
- Social links, if provided
- Relevant legal links if needed

Do not invent contact details or business hours.

## 5. Customer Journey

1. Customer opens the website.
2. Customer explores the services.
3. Customer selects a service.
4. Customer chooses the available specifications.
5. Website calculates an estimate using approved rates, or directs the customer to request a quote.
6. Customer contacts the shop by WhatsApp or phone.
7. Customer and shop discuss and confirm the order directly.

A WhatsApp click only opens the contact conversation. Do not claim that the order is confirmed or that a message has successfully been delivered.

## 6. WhatsApp and Contact Behaviour

- Add WhatsApp enquiry actions where useful.
- Where technically practical, prefill a message with the selected service, options, quantity, and displayed estimate.
- Let the customer review and send the message themselves.
- Include phone/contact alternatives if the business provides them.
- Do not add online ordering, payment, customer accounts, order history, or an admin dashboard unless separately approved.

## 7. Explicit Exclusions

**Do not add delivery features or delivery-related wording.** This includes:
- Delivery or shipping options
- Delivery scheduling or dates
- Delivery charges or estimates
- Shipment tracking
- Claims that the shop delivers orders

Customers will contact or visit the physical shop to discuss and arrange their orders.

Also exclude:
- Invented prices, claims, reviews, testimonials, business details, and statistics
- Unnecessary 3D visuals or heavy animation
- Unapproved redesigns or changes to the selected colour palette
- Online payments, accounts, order history, or backend functionality unless approved later

## 8. Technical Approach

The final technology stack is **not locked yet**. Before implementation:
1. Check whether the project is starting from an existing folder or a selected code template.
2. Inspect its framework, dependencies, scripts, and package manager.
3. Recommend the simplest suitable approach and confirm it before making major stack changes.
4. Avoid replacing or converting a template's stack without a clear reason and approval.

The initial website can likely be frontend-only, with services and approved public pricing rules stored in project data. A backend or database is not required unless a later requirement justifies one.

## 9. Quality Checklist

Before calling the website ready, verify:

- [ ] The original approved dark charcoal, warm beige, and gold palette is preserved.
- [ ] The page is visually balanced and not crowded.
- [ ] Hero content and calls-to-action are clear.
- [ ] Navigation and mobile menu work.
- [ ] Service cards are consistent and usable.
- [ ] Pricing uses only approved rates and rules.
- [ ] Unknown/custom pricing routes to a quote enquiry.
- [ ] WhatsApp/contact links use confirmed business details.
- [ ] No delivery features or delivery wording appear.
- [ ] No invented business information, prices, or testimonials appear.
- [ ] Layout works on mobile, tablet, and desktop.
- [ ] Buttons, links, and form controls work and provide appropriate feedback.
- [ ] Build, lint/type checks, and relevant tests are run where supported.
- [ ] Temporary imagery and placeholder business details are identified for replacement.

## 10. Implementation Safety

- Inspect the project before changing files.
- Preserve existing user work and configuration.
- Make small, reviewable changes.
- Do not deploy, publish, push to a remote repository, or modify production without explicit permission.
- Report what changed, what was tested, and any remaining blockers honestly.
- Do not begin implementation in a different project folder or overwrite an existing project without confirming the target.
