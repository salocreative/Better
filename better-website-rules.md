# Better website: rules and guardrails

The rules every stage of the Better website follows, from tokens to launch. Written in 2026 from the reference kit, the brand guidelines, the plan and the decisions made while building the kit. Claude reads this file before any Better website work, alongside the reference kit page.

## 0. How to use this file

- **Order of authority.** Brand guidelines, then this file, then the reference kit page, then general good practice. If two of them disagree, stop and ask Toby. Never pick one quietly.
- **Read before every stage.** Claude Code and Cowork sessions load this file, the kit page and the tokens before generating anything.
- **Rules are pass or fail.** Every section is checked against the checklists in section 13 before it goes to Toby.
- **Gaps get flagged, not filled.** If a rule doesn't cover a case, say so and propose a rule. Add it here once Toby agrees.
- **Status.** Written 21 October 2026 with the first reference kit. Colour, type and imagery come from Better's live site. The B-grid, the switch, product moments, the button refinements, image treatments and the motion system are our proposals, awaiting Toby's sign-off and Better's review at concept stage. Better has no brand guidelines, so this file and the kit are the standard until they do.

## 1. Open items to settle before stage 3

These block or shape the design. Each needs an owner's answer. Remove a row once it's settled.

| Item | Why it matters | Owner |
| --- | --- | --- |
| Accent: Better yellow #FEC459 or Better lime #E2FFBA | The site uses yellow; the favicon and share image use lime. Lime fails as a highlight on white | Better, at concept review |
| Figures on the current site: 99.98% uptime, 14 minute ticket resolution, 500,000+ minutes a month, 65+ team, 750+ and 1,000+ customers | Every counter and claim rests on them; the two customer counts conflict | Better, via Duncan Marsh (Intergage) |
| Partner logos (Salesforce, Yealink, Yeastar, Gamma, CallSwitch, HubSpot) and the Julia's House logo | Permission to show them, and the Julia's House story, are not confirmed | Better, via Duncan Marsh (Intergage) |
| Original photos, stock licences and vector logo files | The kit uses compressed site copies and stand-in logos | Better, via Duncan Marsh (Intergage) |
| CMS: HubSpot CMS, built by Intergage | The brief says HubSpot, so sections map to HubSpot modules, not WordPress blocks. Who builds and who hosts staging is still open | Duncan Marsh (Intergage) and Toby |
| Project status | On hold since 9 September 2026 while Better weighs the value | Duncan Marsh (Intergage) |

## 2. Process guardrails

- **One source of truth.** Tokens, components, the sitemap and copy live in the private repo. Nothing exists only in a chat or a local file.
- **Tokens before pages.** No colour, size, spacing, radius, easing or duration is typed into a component. Everything is a token.
- **Sections as blocks.** Every section is self-contained and maps one-to-one to a HubSpot module. No section depends on the one above or below it.
- **Targeted edits only.** Once a section is approved, change it with small edits. Never regenerate an approved section. Commit every approved round and log it in the changelog.
- **Real content from the start.** Copy from the agreed copy doc. Gaps are marked [TBC] in the design, never filled with invented text.
- **Desktop and mobile every round.** A section isn't reviewed until it's been seen at 1440px and 390px.
- **Gates are fixed.** Toby signs off each stage. Better's contacts (via Duncan Marsh at Intergage) sign off messages, accent, copy and claims. No stage starts while the previous gate is open, unless Toby says so.
- **Decisions are logged.** Any choice made during a stage goes in the decision log with who made it and when.

## 3. Content and evidence

- **Only supplied or approved claims.** No invented figures, dates, client names, quotes, testimonials or results. If a number isn't in a source, mark it [TBC] and list it.
- **Every claim traces to a source.** The copy doc records the source for each figure, date, client name and project name.
- **Unconfirmed items stay marked.** Anything in section 1 still open is shown as [TBC] or labelled "to confirm" on staging.
- **Client logos and names** go live only with written confirmation that they can be shown.
- **Photos.** Better's own team and product photos only, described correctly. AI images only as clearly labelled placeholders in the concept, never on the live site.
- **No competitor names**, and no other company's work presented as Better's.

### Words

- Write **Better** in copy, with a capital B. "Better Comms (VOIP) Ltd" only in legal text. The logo is the only place the name appears in its logo form.
- The strapline, exactly: "Making business communication Better." Singular "communication", capital B, full stop. The page title currently says "Communications"; use the singular.
- Product names, consistently: On-hold marketing, Call recording, Call reporting, CRM integration, Softphone app (never "Soft phone App"), Mobile and desktop app, WhatsApp integration, Business broadband, Anti-fraud.
- The pun on Better is allowed once per page, in the hero or the closing panel. Not in every heading.
- The web address is **better.co**.
- UK English. Dates written as 2 September 2026.
- Sentence case for headings, navigation and buttons ("Our work", "Learn more"). Capitals only for short labels and eyebrows.
- No em dashes in copy.
- Follow the writing style in the brand guidelines: "we" and "you", active voice, numerals, no exclamation marks, "and" not "&" in sentences.
- Words to avoid (Better has no list; these are ours, from the current site's problems): rock-solid, seamless, future-proof, innovative, business-class, cutting-edge, "actually delivers", "double productivity", BIG in capitals, and any claim without a source.

### Voice

- Lead with the outcome for the client, not Better's output.
- Specific over adjectival. "Your CRM opens customer notes when they call" beats "Seamless CRM integration".
- Short sentences. One idea per sentence.

## 4. Colour

### Neutral tones (fixed in every accent)

| Token | Hex | Use |
| --- | --- | --- |
| `--n-950` Better navy | #001A6E | Text on white, dark backgrounds |
| `--n-700` | #33488B | Rules and dividers on dark, secondary text on white |
| `--n-600` | #4D5F9A | Secondary text on white |
| `--n-500` | #6575A6 | Captions and labels on white |
| `--n-400` | #99A3C5 | Grid lines in demos, labels on dark |
| `--n-100` | #E6E8F0 | Rules and dividers on white |
| `--n-50` | #F2F4F8 | Surfaces on white |
| `--n-0` White | #FFFFFF | Text on dark, page background |

### Accents

| Accent | `--acc` | `--acc-ink` (4.5:1 on white) | `--acc-ink3` (3:1 on white) |
| --- | --- | --- | --- |
| Better yellow | #FEC459 | #917033 | #B78D40 |
| Better lime | #E2FFBA | #6C7A59 | #889970 |

Brand neutrals outside the scale, as tokens: `--stone` #F5F6F4 (section backgrounds), `--slate` #4B5852 (body copy, 7.5:1 on white), `--navy-deep` #001558 (gradients and the grid floor).

Contrast: navy on yellow 9.65:1, navy on lime 14.02:1. White on either accent is not allowed (1.58:1 and 1.09:1). Lime as a highlight block on white is invisible (1.09:1): with lime, highlights on white use the navy underline instead.

`tools/skin.py` prints these values, worked out from `brand.json`. Copy them here.

- The accent is switched with one attribute on the page root (`data-accent`). Components only ever reference `--acc`, `--acc-ink` and `--acc-ink3`. Never a hex.
- **Small doses.** Highlights, eyebrow bars, the accent button, accent icons, indicator lines and counters. Never a large background area, never body text.
- **Allowed pairings:**
  - Better navy text on the accent (check 4.5:1 for every accent).
  - The accent as text, numbers or icons on Better navy (check 4.5:1 for every accent).
  - The accent as a fill, bar or line on white, when it's decoration or backed by another cue.
- **Not allowed:**
  - White text on the accent, unless the contrast check passes for that accent.
  - The accent as text or as the only state cue on white. Use `--acc-ink` for small text and icons, `--acc-ink3` for large text (24px, or 18.66px at weight 600 and above).
  - Two accents on one page.
- **Photography is not the accent.** Colours inside photos stay as photographed and are never matched to the accent.

## 5. Type

- **Display:** Plus Jakarta Sans ExtraBold (800) for headlines, Bold (700) for card and small headings, SemiBold (600) for buttons. Tracking −3.5% at 48px and above, −2% below.
- **Body:** Inter Regular (400) for body in slate, SemiBold (600) for labels and chips. No other families: drop Carmen Sans, Archivo and Outfit from the current site.
- **Type scale (screen):** H1 72px / 1.02, H2 48px / 1.06, H3 28px / 1.15, H4 22px / 1.1, subhead 20px / 1.5, body 16px / 1.65, label 12px capitals with +14% tracking. Reduce headings by about a quarter on mobile. Display type in compositions (heroes, text treatments) can go larger.
- Left-aligned. Never justify or centre long text. Arial is the fallback where brand fonts aren't available.
- Components use the tokens only.
- **Line length:** 45 to 75 characters for body copy.
- **No text below 12px** on the live site, except legal small print.
- **Numbers** use tabular figures where they change (counters).

## 6. Signature device

- **The B-grid.** Better's own outlined B tile (alternating B and mirrored B, from the live hero and footer), used as a mask so it takes the section's colour. Tile file: `assets/website/shapes/b-pattern-tile.png` (827 × 515, repeats exactly). Shown at 414px wide on desktop. Three strengths: feature 42%, structure 15%, ambient 7%. One strength per view, feature once per page.
- **The grid floor.** Better's perspective grid hero background (`hero-grid-floor.webp`). Heroes only. The B-grid can fade into it.
- **The switch.** A pill toggle (`role="switch"`) for anything that switches to Better. It must switch something; never a decorative icon.
- **Sparingly.** Where it adds structure: a hero, a feature, a project grid. Most layouts stay clean.
- **On mobile** the device scales down and stays at ambient or structure strength.

## 7. Layout and components

Each component follows its reference kit figure. These are the rules that keep it right.

- **Corners.** Pill (999px) for buttons, chips and the switch. `--radius` 16px for cards, UI cards and inputs. 28px for panels, heroes and photo frames. 10px for small elements.
- **Hero.** One eyebrow, one headline, one sentence, one button. A dark gradient always sits behind copy on a photo.
- **Navigation.** Logo left, four to five links, one accent "Let's chat" button right. White over light sections, navy over the navy hero. Hides on the way down, returns on the way up. On phones, a full-screen menu with the same button.
- **Text and image.** Stone background, chip, heading with one highlight, two lines of copy, up to three ticks, one button, one image in a 28px frame.
- **Cards.** The whole card is one link, with one arrow box.
- **Buttons.** Pill, 52px tall (40px small): label then a round 40px arrow. Dark, accent, light and ghost. Hover lifts 2px, the arrow turns forward; pressed scales to 98%. Sentence case labels of two or three words. One accent button per view.
- **Steps.** Numbered navy circles, title, one line. Four steps for how switching works.
- **Text treatments.** One lead move per layout, with at most one supporting move. Marker for a figure or date. Block for key words.
- **Eyebrows.** Chips: a pill with an accent dot, white on light, translucent on navy. The live chip pulses only for something genuinely live.
- **Product moments.** HTML UI cards (incoming call, recording, routing, reports, CRM, app). 16px radius, long soft shadow. One or two per scene. Sample names, numbers and times in square brackets.
- **Counters.** The number counts up once, when it comes into view. The label sits outside the number.
- **Icons.** Material Symbols Rounded, weight 300, in a 52px tile with a 14px radius: navy tile on light, accent tile for the one that matters. Always with a text label. Replaces the current mix of spot illustrations.
- **Logo.** Stand-in files until Better supplies masters. Clear space: the height of the B. Minimum 72px wide, monogram 24px.
- **Partner logos.** Greyscale in a slow marquee, full colour on hover and focus. Only with permission.
- **No generic filler.** No stock icons in grids, no "three benefits" cards and no placeholder testimonials. If content is missing, mark it [TBC].

## 8. Images

- **Treatments.** Rounded frame (28px) for team photos, the default. Photo and product: a product moment floating over a real photo, the lead treatment. Navy duotone (mono under navy multiply) for stock and anything behind type. Capsule crop once per page. Offset accent block (Better's own, 14px). Cut-out on navy with the vertical wordmark for the closing panel.
- **Order of preference.** Better's team photos, then product, then stock in duotone. Stock never leads.
- **Text on photos** always has a scrim: Better navy, at least 0.9 opacity at the text edge, fading out. Test with the brightest photo the slot could hold.
- **Alt text** on every content image, saying what and where. Decorative images get empty alt text or `aria-hidden`.
- **Formats.** WebP or AVIF, served at the size used, with `srcset`. Hero no wider than 2400px. Cards and grid images no wider than 1200px.
- **Loading.** The hero image loads first. Everything below the first screen lazy-loads.
- **Crops.** Set a focal point for each photo so it crops well from 21:9 down to 4:3 on mobile.

## 9. Motion

- **Character.** Quick and sure, like a call that connects first time. Short rises, clean wipes, a small spring on objects that pop into place.
- **Depth and motion are standard.** Every site has the full motion and interaction system, shown as live demos in the reference kit: load-ins (headings rise word by word, photos wipe or settle in, lists stagger); depth (layered parallax, scale and drift tied to scroll); at least one sticky section (a scroll story or stacked cards); at least one horizontal section (a pinned rail or timeline that scrolling moves sideways, with arrows and keyboard focus moving it too); hover and focus states on every card, link and button, with cursor-led effects on fine pointers and a touch equivalent for each; ambient motion (marquees, crossfades, counters) with pause controls; and a header that hides on the way down and returns on the way up. The brief decides how far to push it, not whether it's there.
- **Better's set (kit numbers).** Load-ins: 1 headline rises word by word, 2 photo wipes up in its frame, 3 product moments spring in, 4 highlight paints in, 5 lists and chips stagger. Depth: 6 layered parallax, 7 frame grows to full width, 8 grid floor drifts and the B-grid draws in. Sticky and sideways: 9 scroll story for how switching works, 10 stacked feature cards, 11 horizontal feature rail. Interaction: 12 magnetic primary button, 13 card tilt and spotlight, 14 the switch flips a panel, 15 spotlight on the B-grid, 20 FAQ answers rise in. Ambient and header: 16 live waveform, 17 ringing call, 18 score counts up and stars fill, 19 returning header, 21 partner marquee.
- **Better's set, round 2 (kit numbers).** Headline load-ins: 22 letter cascade, 23 accent wipe, 24 lines slide out of a mask, 25 departures board, 26 rotating word, 27 number scramble. Type and cursor: 28 weight follows the cursor, 29 outline type moves with the scroll, 30 spotlight reveals the copy, 31 feature words open a product moment. Imagery: 32 hover list with a following image, 33 colour torch, 34 photo fan, 35 slideshow with a slow zoom, 36 drag to compare. Cards and hover: 37 cards flip, 38 panels expand, 39 border glow, 40 button hovers (sweep, pass, roll, ring), 41 sliding nav pill, 42 team cards. Parallax and backgrounds: 43 layers follow the cursor, 44 B-grid drifts, 45 ripple across the B-grid, 46 Better's glow follows the cursor, 47 grid floor tilts. Icons: 48 every feature icon has its own move, 49 spot icons float, 50 features orbit the B. The switch: 51 a card turns into Better, 52 a missed call becomes an answered one, 53 a whole section switches, 54 Better mode flips every part in turn. Interactive heroes: 55 switch the hero, 56 answer the call, 57 layers and light follow the cursor. Interactive CTA banners: 58 slide to switch, 59 pick what you need, 60 the accent panel. Round 3 replaced 33 (the photo grows out of the word), 35 (strip slideshow with progress), 46 (signal dots answer the cursor), 47 (the Better room turns to the cursor) and 49 (notifications stack in).
- **Better's set, round 3 (kit numbers).** Load-ins: 61 the message types itself, 62 signal bars then words, 63 a waveform settles into words, 64 two halves connect, 65 Better's number dials in. The room: 66 the floor runs forward, 67 signals travel the floor, 68 the floor lights under the cursor, 69 the room builds as you scroll. Sticky and sideways: 70 the phone stays and the screen changes, 71 the photo stays and the text moves past, 72 switching step by step, sideways, 73 cards slide in from the side, 74 photos run sideways and lean with your speed. Switches: 75 out of hours, 76 switch a sentence, 77 build your setup. Cards: 78 navy floods in from where you enter, 79 the card opens its product moment, 80 the deck spreads, 81 accent rises and the arrow points the way, 82 the photo steps back into a frame.
- **The Better room.** Better's grid floor and B-grid wall are rebuilt in CSS (a wall plane and a floor plane in perspective) instead of the flat image, so they stay sharp, follow the accent and can move. One room per page, usually the hero. The floor turns no more than about 7 degrees with the cursor.
- **The switch drives the component.** When a switch is in a component, flipping it changes the whole component, not just the toggle: the navy floods out from the switch, the copy swaps from today to Better, icons pop and the button lights up. The off state is the customer's world as it is (muted, greyscale photo, dashes for bullets); the on state is Better. Both states hold the same layout so nothing jumps. One switch per view.
- **Magnetic pull is subtle.** The primary button moves a few pixels at most, and only when the cursor is close to it (within about one button width). It should feel noticed, not dragged.
- **Interactive banners still work without playing.** Every interactive hero or CTA has a plain button or phone link that works without touching the interaction. Sliders are range inputs (arrow keys work), chips are toggle buttons with `aria-pressed`, and changes are announced through `aria-live`.
- **Page blocks.** The kit's page blocks chapter is the starting point for stage 2: header with mega menu and full-screen phone menu, the room hero, text and image both ways (photo slower, product moment faster), a full-width photo band, contact (details plus the HubSpot form styled to match), form field states and the yellow footer with the wordmark that thins under the cursor.
- **Where.** Home hero: the room hero (page blocks), or 1, 3, 8 and 18. Features: 10 or 11, plus 13. How switching works: 9. About: 6 and 7. Closing panel: 14, or one of 58 to 60. Home hero alternatives: 55 to 57. Feature pages: one of 51 to 54 near the top, 48 for the icon set. Every page: 19, 22 or 23 for section headings, 40 for buttons, the footer wordmark. Feature pages: 70 or 71 for the walkthrough, 72 for switching, 78 or 82 for card grids. Contact: 61 or 65. Pick one lead motion per section from this list.
- **Spring** (`cubic-bezier(.34,1.56,.64,1)`) only on things that pop into place as one object: product moments, the switch and its parts, cards, chips, tooltips and the magnetic button's return. Never on text, panels or whole sections.
- **Easing.** Ease out `cubic-bezier(.2,.7,.2,1)` for entrances and hovers. Ease in-out `cubic-bezier(.65,0,.35,1)` for transitions between states.
- **Durations.** Use the timing table in the kit. Hovers 200 to 500ms (colour and lift at the short end, sweeps and rolls at the long end), reveals 600 to 1000ms, nothing over 1.5s except loops and parallax.
- **One lead motion per section.** At most one supporting motion with it.
- **Animate only transform, opacity and clip-path.** Never animate width, height, top or left on page content. The one exception is an accordion opening, eased over 320 to 420ms.
- **Only while visible.** Loops, intervals and parallax run only while their section is on screen.
- **No scroll-jacking.** Scrolling always moves the page at its normal speed. Pinned and horizontal sections are driven by the page scroll, release at both ends and never trap the reader.
- **Hover is an extra.** Cursor effects run only on devices with a fine pointer. Nothing important is only available on hover.
- **Pause control.** Anything that moves on its own for more than 5 seconds needs a visible pause control (WCAG 2.2.2).
- **Reduced motion.** With `prefers-reduced-motion`, every animation shows its final state, loops stop and parallax is off.
- **No flashing.** Nothing flashes more than 3 times a second.

## 10. Accessibility (WCAG 2.2 AA)

- **Contrast.** Body text 4.5:1. Large text (24px, or 18.66px at weight 600 and above) 3:1. UI parts and meaningful graphics 3:1. Check every accent, not just the current one.
- **State, not just colour.** The switch knob turns navy when on, so its state reads at 3:1 or more on yellow, lime, navy and white. Toggle chips change icon (plus to cross) as well as fill.
- **Forms.** Labels sit above fields and stay visible. Errors appear in words under the field and are linked with aria-describedby; the first error gets focus and a live region says how many things need fixing. Interest chips are real checkboxes.
- **Text over photos.** Captions on photos sit on a white chip or over a navy gradient that reaches at least 85%, never straight on the image.
- **Focus.** Every interactive element has a visible focus state, at least a 2px outline that contrasts with its background.
- **Keyboard.** Everything works with the keyboard alone, in a sensible order. Menus open, close with Escape, and return focus to the button.
- **Targets.** At least 24 × 24px, aiming for 44 × 44px on mobile.
- **Headings.** One H1 per page. Headings in order, never skipping a level for size.
- **Split text.** When a headline is split for motion, the full sentence stays readable to screen readers.
- **Links and buttons.** Links go somewhere, buttons do something. Labels make sense on their own.
- **Forms.** Visible labels, errors in text not only colour, and the contact form works without JavaScript.
- **Language.** `lang="en-GB"` on every page.

## 11. Performance

The optimisation standard. Every round and every launch meets it.

- **Lighthouse:** performance 80+ on a phone (aim for 90) and 95+ on desktop; accessibility and best practice 95+.
- **Targets on a mid-range phone over 4G:** Largest Contentful Paint under 2.5s, Cumulative Layout Shift under 0.1, Interaction to Next Paint under 200ms.
- **Page weight:** under 1.5MB on first load for the homepage on a phone, aiming for 1MB, excluding photos below the first screen.
- **Code:** one shared stylesheet under 50KB gzipped; one shared deferred script under 25KB gzipped; each page's HTML under 30KB gzipped. No framework or library for what a few lines can do. A value-safe minifier only (comments and spaces, every value unchanged).
- **Photos:** WebP (AVIF where it's worth it), responsive copies from 480 to 2000px plus the original, `sizes` from the drawn width, portrait crops for full-screen phone heroes, lazy below the first screen, carousels and hover photos loaded ahead.
- **Fonts.** Two families, only the weights used, subset and self-hosted, with `font-display: swap`, the main two preloaded; under 100KB in all.
- **Icons.** The Material Symbols font is subset to the icons used.
- **Images.** Never inside the HTML or CSS as data. Separate files, a lighter phone version, loaded as they near the screen.
- **JavaScript.** One shared IntersectionObserver for visibility. One `requestAnimationFrame` loop per effect, stopped when idle.
- **Never store images in CSS custom properties.** It slows pages badly.
- **Reserve space** for every image and embed with width and height or `aspect-ratio`.

## 12. Code rules

- **Tokens only.** Colours, sizes, spacing, radii, easing and durations come from `tokens.css`, mirrored in `theme fields so HubSpot only offers brand values.
- **Prefixed class names per block** (`bx-hero__title`). Short shared names clash and break components.
- **Container queries** for components, so a block works in any column.
- **Semantic HTML first.** ARIA only where HTML can't do it.
- **No inline styles** except for per-item values set by JavaScript.
- **Progressive enhancement.** Content and links work before JavaScript runs. Motion is added on top.
- **One block, one folder.** Markup, styles, script and a short readme with its rules and states.

## 13. Checklists

### Before a section goes to Toby

- [ ] Matches its kit figure and the rules above
- [ ] Desktop 1440px and mobile 390px, no sideways scroll
- [ ] Every accent checked, contrast passes in each
- [ ] Reduced motion checked
- [ ] Keyboard only: reachable, visible focus, sensible order
- [ ] No hard-coded colours, sizes or timings
- [ ] Every claim and name traces to the copy doc. Open items marked [TBC]
- [ ] Alt text written
- [ ] No console errors

### Before launch

- [ ] Every item in section 1 settled
- [ ] Accessibility review across all templates, including a screen reader pass
- [ ] Core Web Vitals within targets on the real staging server
- [ ] Original photos in place, credited to the right projects
- [ ] Client logo permissions confirmed
- [ ] Pause controls on all auto-moving content
- [ ] Redirects, metadata, sitemap, analytics and cookie consent in place
- [ ] Contact form tested end to end

## 14. Prompt preamble for Claude Code

Paste this at the start of every design or build session:

> Better website. Before generating, read `better-website-rules.md`, the reference kit page and `tokens.css`. Follow them as hard rules. Use tokens only, Plus Jakarta Sans and Inter, the accent through `--acc` variables only. Build each page in sitemap order from the kit's compositions, with real copy from the copy doc, and mark gaps [TBC]. Never invent figures, clients, quotes or project names. Build one self-contained section at a time and show it at 1440px and 390px. Make small targeted edits to approved sections, never regenerate them. If a rule doesn't cover something, ask before deciding.
