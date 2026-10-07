ROLE
Senior creative developer and brand designer. Build a production-quality multi-view marketing site for Verdant Telemetry as ONE index.html (HTML + CSS + JS), hash-routed. Output only code. No lorem ipsum, no invented stats, clients or awards. Use only the facts below.

BRAND FACTS (source of truth)
- Verdant Telemetry & Antenna Systems Pvt. Ltd. Designs and manufactures airborne, terrestrial, shipborne, tactical, conformal antennas and radomes.
- Founded 1997 (Cochin). Started as a small workshop. HQ: 26/411 A, Konthuruthy, Cochin – 682 013, India. Tel 0091-484-2663104 / 0091-484-2663576. info@verdanttelemetry.com
- Customers: HAL, ISRO, DRDO, ECIL, NPOL; also worked with Elbit (LCA Tejas EW antennas), Sierra Nevada Corp (V/UHF blade).
- Quality: AS9100 Rev D (since June 2009), ISO 9001:2015, CEMILAC design approval (2008), regular audits.
- Awards: SIATI Excellence in Aerospace Indigenisation (2001, 2016), ADE Creative Partnership Award (2020), honoured at Aero India 2023.
- Test facility: indoor anechoic chamber up to 20 GHz; outdoor ranges 20–500 MHz; 32 ft ground plane (20–400 MHz, MIL-DTL-85670C); gain, VSWR, pattern and radome tests; RF instrumentation to 40 GHz.
- Design centre in Coimbatore (2023). Latest: ultra-light UAV antenna (2025), conformal Satcom antennas (2024).
- Leadership: Louis George (CEO, 30+ yrs composite design, Physics MGU, composites at IIT Chennai); Kuruvilla George (CTO, 30+ yrs, RF design/simulation/execution); Tony G. Thomas (Chief Mentor; ex-AT&T Bell Labs, co-founder AdventNet/Zoho, IIT Madras, Johns Hopkins PhD).
- Strategy: domestic defence supplier -> globally recognised brand with own products. Theme: "From Kerala to the world. From India to the world."
- Goal: an overseas buyer should trust Verdant before contacting.

AUDIENCE AND CONVERSION
- Visitors: international defence/aerospace procurement leads, engineers, integrators.
- Within 5 seconds the page answers: who, what, why it matters, what next.
- Primary CTA: "Talk to our engineers" (-> #contact). Secondary: "Learn more" (-> #how).
- Motivating, scannable: one idea per screen, short lines, clear hierarchy.

ROUTES (hash router, no reload, scroll reset, focus moved to <h1>, document.title updated per view, active nav state)
- #/ Home (one-page scroll with sections below)
- #/products Products page (fully working)
- #/about About Us (Kerala-to-the-world story)
- #/capabilities overview + #/capabilities/design, /manufacturing, /customisation, /testing (lightweight detail views)
- #/careers placeholder view (clear "Open roles: editable" content field)
- #/contact contact view (same form as home contact)
- #how "How we build" view
- Unknown hash -> friendly 404 view with link home.

NAVIGATION (use the established mega-nav pattern of sites like Stripe/Vercel/Linear)
- Items: Products, About Us, Capabilities, Career, Contact Us. Logo left, links centre, CTA "Talk to our engineers" right, search icon opens a command-palette style overlay (searches products + pages, keyboard: "/" to open, Esc to close).
- Capabilities dropdown: Design & Development, Manufacturing, Customisation, Testing, each with icon + one-line description. Career dropdown: Open roles, Life at Verdant, Internships (all routed to #/careers with anchors).
- Dropdowns: open on hover/focus (desktop), click on touch; full ARIA (aria-expanded, aria-haspopup, roving focus, Esc closes, arrow keys navigate).
- Behaviour: fully visible at page top; hides on scroll down, reappears on scroll up with blurred dark translucent background.
- Mobile: full-screen overlay with accordion submenus, focus trap, body scroll lock.

VISUAL SYSTEM (CSS variables)
- Dark. bg #05090D, surface #0B1217, elevated #111B22, border rgba(255,255,255,.08).
- Text: #EAF2F0 / #8FA3A0 / #5B6E6C. Accent #03BC9F, glow rgba(3,188,159,.35). Secondary #1E6F8C (sparingly).
- Semantic: success #2ECC8F, warning #F2B84B, error #FF5C6C, info #4DB6FF.
- Fonts: Space Grotesk (display, tight tracking, fluid clamp, hero 72–140px), Inter (body), JetBrains Mono (uppercase labels).
- Buttons: primary solid accent pill with dark text; secondary ghost 1px border; hover glow + 2px lift; accent focus ring; min 44px target.
- Icons: one inline-SVG set, 1.5px stroke, round caps. No emoji.
- Illustration: line-art only (waveforms, radiation rings, dotted globe, antenna silhouettes), inline SVG/canvas.

ANTI-CLUTTER RULES
- Per viewport: 1 headline, 1 supporting line, 1–2 CTAs. Max 2 accent elements.
- Section padding >= 12vh; 12-col grid, max 1280px. Thin-border cards, no heavy shadows/gradients. No carousels, no autoplay noise.

ASSETS
- Load media from ./assets/ with a single ASSETS config object at the top of the script (logo, product images, team photos, hero video, etc.). Every asset has a graceful fallback (SVG placeholder / initials avatar) if the file is missing, so the page works with an empty folder.

HOME SECTIONS
1. Hero I (100vh): full-bleed WebGL (Three.js, CDN, pinned) dot-matrix wireframe Earth, slow rotation, signal arcs and pulses from Kochi (highlighted origin) to world nodes. Drag/move/touch rotates with easing. Do NOT depend on the supplied 2D polygon shader's missing data; use lat/long grid + procedural dot-matrix land mask, keeping its mouse-rotation idea. Eyebrow "AEROSPACE & DEFENCE ANTENNAS · COCHIN, INDIA". Headline e.g. "Signals that cross every border." with one accent word. One supporting line. Buttons: Learn more, Talk to our engineers. Scroll cue.
2. Hero II (pinned purpose): dimmed globe; large sentence reveals word by word on scroll (muted -> white, key words accent): "We design and build the antennas and radomes that keep aircraft, ships and ground forces connected, from Kerala to the world." Then the next section slides up over it while hero scales down/fades.
3. Capabilities: sticky left title, right list of 4 (Design & Development, Manufacturing, Customisation, Testing): number, icon, one-line outcome, thin animated waveform on hover/in view; each links to its capability view. Trust row (text only): "AS9100 · ISO 9001 · CEMILAC-approved · Trusted by HAL, ISRO, DRDO".
4. Featured products teaser: 3 products from the catalogue + "View all products ->".
5. About teaser: one line of the Kerala-to-the-world story + "Read our story ->" (-> #/about).
6. Meet our people (contact): large quote "We're a diverse team of thinkers and doers, united by a steadfast commitment to serving our customers."; 3 minimal leadership cards (photo from assets or initials); line-art map/globe locating Cochin with pulsing marker and rings; contact form (name, work email, organisation, message; inline validation; success/error states; mailto fallback) + real address/phone/email from facts above.
7. Newsroom: 3 cards from real items (date, tag, title, Read more ->): SIATI Award for Excellence in Aerospace Indigenisation; Verdant on Manorama Channel; AS 9100 Revision C Certification. Hover: arrow + accent underline. Body text is an editable field.
8. Footer: logo, one-line brand statement, Useful Links (Home, About Us, Products, Capabilities, Contact Us), Capabilities links, contact info, certifications, social icon placeholders, (c) 2026 Verdant. Large faint "VERDANT" wordmark with a signal line through it.

PRODUCTS PAGE (#/products) - must fully work
- Header: "Products", short intro (RF + composite expertise, tailored antennas/radomes, low-to-medium volume, airborne/naval/ground), button "Make an enquiry" (opens modal form prefilled with selected product; focus trap).
- Data: a PRODUCTS array in JS (name, code, category, application, frequency band, type, image, datasheet URL). Seed with these real items: JC 07 C Band Omni; JC 1003 and JC 1006 Radio Altimeter; JC 50 C-Band Blade; JC 62 C Band Omni; JD 118 V/UHF Blade; JD 120 T1B-A, JD 120 T1B, JD 120 T2G V/UHF Top-Load Blade; JD 201 VHF/UHF Blade; JD 202 V/UHF Blade; JD 252 A HT Triband Dual Connector Blade; JD 300 B02, D02, L02 V/UHF Blade. Fields I don't know (frequency band, image, datasheet) are clearly marked editable placeholders, not invented specs.
- Filters (left rail desktop, bottom sheet mobile): Application (Navigation, Communication, EW, Identification, Datalink & Telemetry), Frequency, Type. Multi-select checkboxes with counts, "Clear all", active filter chips.
- Controls: search box, sort (Default, Name A-Z, Name Z-A), per-page (15/30/60), pagination with prev/next + page numbers, result count, aria-live updates. State kept in URL query (#/products?app=...&page=2).
- Product card: image/placeholder illustration, code, name, application tag, buttons "Show details" and "Download datasheet". Details open in a side drawer/modal (specs table, enquiry CTA), deep-linkable (#/products/jd-118).
- Empty state with "Clear filters". Skeleton loading state. Keyboard and screen-reader friendly.

ABOUT US PAGE (#/about) - reframed as "Kerala to the world"
- Hero line + short story arc, not a corporate dump. Scroll-driven narrative:
  1. Origin: 1997, a small workshop in Cochin.
  2. Craft: first antennas for NPOL, ECIL, DRDO, HAL (Jaguar, AN-32, Cheetah/Chetak).
  3. Standards: CEMILAC approval (2008), AS9100 (2009), anechoic chamber (2011), upgrades.
  4. Recognition: SIATI awards, ADE award, Aero India honour.
  5. Platforms: LCA Tejas, supersonic conformal antennas, Satcom, UAV ultra-light antenna.
  6. Next: global expansion with own products; Coimbatore design centre; global visitors (Thales, Raytheon, Lockheed Martin, Chelton visits as "partners who came to see us" - phrase factually as visits, not contracts).
- Visual: a line that draws from Kerala outward across the globe as the user scrolls, milestones pinned along it.
- Interactive milestone timeline (1997–2025) from the supplied list; filter by Awards / Products / Certifications; collapsed by default, no wall of text.
- Mission, Vision and 4 Values as 6 compact cards.
- Facility overview (test ranges and chamber as a spec grid), Quality (certs + quality policy quote), Social commitment (4 short items).
- Leadership with bios (shortened), MD message as a pull-quote.
- Closing CTA -> contact.

CAPABILITY VIEWS
- Each: outcome-led headline, 3-4 short bullets drawn from the facts (e.g. Testing: chamber to 20 GHz, ranges, ground plane, VSWR/gain/pattern/radome tests), one line illustration, link to products + contact. No fabricated claims.

HOW VIEW (#how)
- Full-screen, back control. 4-step vertical timeline (Design -> Build -> Customise -> Test), short description + line illustration each, closing CTA to contact.

MOTION
- GSAP + ScrollTrigger (CDN, pinned), optional Lenis. Pinned hero text, 24px reveal-on-scroll, globe parallax, section overlap transitions, view-transition fade between routes. power3.out, 0.6–1s, stagger 60–90ms. One motion language.
- prefers-reduced-motion: no pinning/parallax/globe animation; static globe image.

QUALITY
- Responsive 360–1920px. Mobile: fewer particles, simpler pins.
- DPR cap 2; pause rendering when tab/hero offscreen; lazy-init per route; destroy WebGL and ScrollTriggers when leaving Home.
- Accessibility: landmarks, skip link, WCAG AA, aria-labels, visible focus, canvas aria-hidden, SVG titles.
- SEO: title, meta description, OG, Organization JSON-LD; per-route titles.
- Code organised and commented by module: config/assets, data, router, nav, globe, home, products, about, capabilities, forms, footer.

DELIVERABLE
One complete index.html that works opened directly (hash routing, no server). Placeholders only in clearly marked editable content fields.
