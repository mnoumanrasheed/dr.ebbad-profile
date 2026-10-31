# CODEX MASTER PROMPT — DR EBBAD PREMIUM HERO REFINEMENT

## Role and objective
Act as a senior art director, award-winning UI/UX designer, and expert Next.js/React frontend engineer. I am NOT asking for another generic homepage redesign. I need a meticulous, production-quality refinement of the current live hero section to match the composition described below.

**Project:** `mnoumanrasheed/dr.ebbad-profile` (existing Next.js portfolio).
**Main file to inspect:** `components/sections/HomeHero.jsx`. Also inspect `app/page.jsx`, `app/globals.css`, `components/layout/Header.jsx`, `components/brand/Logo.jsx`, and `content/profile.js` as relevant.
**Portrait:** the original `profile.png` is located in the repository ROOT; the project may also contain `public/images/profile.png`. Determine the correct public asset path and reuse that original image. Do not change the subject's face, clothing, body, skin, or pose.

**Scope:** Improve ONLY the homepage hero, with minor shared styling adjustments strictly necessary for consistency. Keep existing navigation, routes, inner pages, user content, metadata, and functionality. Do not rebuild the entire site, change the design identity wholesale, or install unnecessary packages.

## Critical visual correction — split the oversized background name
The current hero has a GIANT single horizontal `EBBAD NAZIR` wordmark behind the portrait. This is the principal design error. It extends past the viewport and parts of it disappear behind the photograph.

**Remove that oversized one-line background name entirely.** Replace it with **TWO INDEPENDENT, FULLY READABLE, ELEGANT WORDS:**

- `NAZIR` on the **LEFT** side of the hero.
- `EBBAD` on the **RIGHT** side of the hero.
- **NAZIR must sit noticeably but subtly LOWER than EBBAD** (approximately 60–100 px lower at desktop sizes; adapt fluidly to viewport height).
- Each word must be **much smaller than the current huge background text**, still striking and premium, ideally desktop `clamp(3.5rem, 6vw, 6.5rem)` with responsive optical adjustments and thoughtful tracking. Use fluid sizes, not blindly fixed numbers.
- Both words MUST be entirely visible inside the viewport. No clipping on either left or right screen edge. **No part of any letter should be covered by the portrait**. There must be clear space between the text and portrait silhouette — leave at least ~20–32 px breathing space at desktop sizes.
- Do not solve this by overlaying text across Ebbad's FACE, making the lettering excessively transparent, or putting text in front of the body. The two wordmarks need spatially separated, clearly readable positions around the portrait.
- Treat the lettering as a refined display feature, not an advertisement banner. Prefer elegant high-contrast editorial serif, controlled weight and tracking, refined off-white/soft-platinum tone. If keeping champagne from the current design, use it as a VERY subtle accent; NO harsh shiny gold gradient and no huge metallic text dominating the portrait.
- Position the words as part of ONE cohesive art-directed composition. Do not create separate conventional cards or boxes behind them.

### Desktop composition at ~1366 × 768 (use as a visual calibration target)

Keep the current header at the top. Beneath it, build a strong three-zone visual balance:

1. **Portrait:** Center or subtly right-of-center, bottom-aligned, portrait focal point. Ensure the entire head remains comfortably beneath the navbar and the portrait never covers either name. If needed, slightly REDUCE the portrait scale or move it modestly toward the center (rather than hiding the wordmarks).
2. **Right word `EBBAD`:** Position near the UPPER-RIGHT of the hero, in available negative space to the RIGHT of the portrait head/shoulders, roughly the upper-middle band. Align away from the right edge with a generous safe margin. Ensure the FULL `EBBAD` word fits between portrait silhouette and right viewport padding.
3. **Left word `NAZIR`:** Position to the LEFT of the portrait, approx. 60–100 px BELOW the visual baseline/top position of `EBBAD`. Keep it visually separate from the left editorial text block below.
4. **Lower-left content block:** Under `NAZIR`, refined heading, supporting sentence and CTAs, with clear spacing and an intentional type hierarchy.
5. **Lower-right supporting detail:** Existing MBBS / college micro-information can remain, but restyle if necessary for consistency. Do not clutter the screen.

The composition must be balanced from edge to edge, like a carefully art-directed medical professional editorial portfolio cover. Ensure photo, both words, intro, and CTAs all coexist without collisions at 1366×768 and 1440×900.

### Responsive rule (non-negotiable)
On tablet and mobile, do NOT force the exact desktop split positions if they cause overlap. Re-compose intentionally:

- Desktop (≥1200px): `NAZIR` left / `EBBAD` right, visibly offset in vertical position, portrait between them.
- Medium widths (768–1199px): reduce the words proportionally and reconsider their anchors relative to actual portrait bounds; preserve readable spelling with zero intersection.
- Small mobile (≤767px): either stack `EBBAD` and `NAZIR` cleanly above/beside the portrait or arrange the typography in two coherent lines; maintain premium hierarchy and preserve the portrait. Never hide text behind the portrait or let it render outside the screen.
- Avoid horizontal page overflow and unexpected word wrapping. Use `white-space: nowrap` only in conjunction with sizes and available widths that actually support it.

## Redesign the LEFT LOWER hero text into a premium editorial introduction
The current left headline appears as four cramped, bold uppercase lines:
`LEARNING / MEDICINE. / WITH / PURPOSE.`
It feels generic and visually too heavy. Replace the PRESENTATION (not the factual meaning) with a restrained luxury editorial typographic treatment.

Desired copy and typographic hierarchy:

**Micro-eyebrow:** `MEDICAL PORTFOLIO  /  2026` (tiny, clean, tracked uppercase; optional short horizontal line).

**Main headline:**
`Learning medicine.`
`With purpose.`

- Use a visually sophisticated mixed-style headline: first line in elegant clean sans or refined serif and **`With purpose.` in editorial italic serif**, or another clearly superior type pairing.
- Use off-white and restrained silver (or tasteful warm ivory) rather than bright yellow/gold. Avoid the current heavy all-caps block.
- Give the heading elegant line-height, well-judged contrast, controlled tracking and intentional negative space. It should look premium, contemporary, and appropriate for a future medical professional.
- Keep it readable in the screenshot's left column and ensure it does NOT overlap `NAZIR` or the portrait.

**Supporting description:** Use the verified information from `content/profile.js`, e.g.: 
"Fourth-year MBBS student at Rai Medical College, Sargodha, with a growing interest in surgery and patient-centred learning."

Avoid inventing credentials. Ebbad is an MBBS STUDENT, not yet a qualified doctor; do not add `Dr.` as a professional credential unless separately verified.

**CTAs:** Keep their actual destinations and link behavior: `Explore My Journey` → `/about`; `Clinical Experience` → `/clinical-experience`.
- Primary CTA: elegant solid ivory/off-white pill or softly squared premium button, not oversized.
- Secondary CTA: refined outlined/quiet text action with arrow icon.
- Match button height, spacing and hover easing; polished focus-visible treatment; no flashy hover glow or excessive scaling.

**Optional:** Tiny bottom hairline, minimal label or index for an editorial touch. NO big stats blocks, cards or duplicate text in this hero.

## Visual system
- Overall mood: **Black & white luxury medical editorial**, almost-black graphite, refined ivory, muted cool gray, subtle platinum.
- Maintain credible personal medical identity. This is NOT a nightclub poster, gamer homepage, crypto landing page, or jewelry ad.
- Clean grid, generous whitespace, precise baseline alignment, intentional asymmetry.
- Keep the existing `Manrope` and `Cormorant Garamond` fonts if appropriate, rather than importing multiple unnecessary typefaces. If you select a new font, justify it by visual consistency and loading performance.
- Subtle grid/architectural lines are fine. Simplify backgrounds if the current layers reduce text readability.
- Preserve original portrait aspect ratio and pixels. Use object-fit `contain` and careful positioning; no skin retouching, cutout alterations, animation of facial features or fabricated 3D head motion.
- Make sure the portrait's white coat does not look abruptly cut off at small heights; a bottom crop that aligns naturally to the viewport is acceptable.

## Motion (GSAP, already installed)
Use GSAP only for sophisticated, subtle entrance motion:
1. Wordmarks fade + translate slightly into their respective fixed positions, staggered.
2. Portrait reveals with tasteful opacity/vertical translation (no distortion, wobble, spinning or fake head turn).
3. Left eyebrow, headline, description and CTAs reveal in a short intentional sequence.
4. Optional extremely subtle pointer parallax for non-touch desktops, bounded to just a few pixels, without breaking visual safe zones.

Respect `prefers-reduced-motion`, cancel GSAP contexts and listeners on teardown, and ensure the initial page is fully readable with JavaScript or motion disabled.

## Implementation discipline
1. Read the current code and establish the actual portrait and headline positioning first.
2. Keep the existing project structure and Next.js/React conventions; use reusable classes and scoped component styles or Tailwind as appropriate.
3. Create a resilient layout: use responsive grid/flex and/or constrained absolute-position layers, not a fragile pile of hard-coded `left: 15%` values that only work at one viewport. Control text, portrait and intro z-index intentionally.
4. Where overlap is possible, solve by resizing/reflowing at breakpoints; **never hide letters behind the image or apply clipping as a workaround**.
5. Do not rewrite `content/profile.js` to invent new facts. Keep other sections and pages unchanged.
6. Check browser console and image loading for errors. If using root `profile.png`, copy/reuse the asset correctly under `public/` as necessary WITHOUT removing or altering the root copy. Do not use an unresolved path.
7. Run `npm run build` and any available lint/static checks. Fix errors introduced by your changes.
8. If screenshot/browser tooling is available, inspect at 1366×768, 1440×900, 1024×768, 768×1024 and 390×844. At a minimum reason carefully from rendered layout/code and be honest about any untested widths.
9. Compare before and after against my supplied current screenshot. Perform another polishing pass on spacing, hierarchy, line wrapping, contrast, CTA alignment, and visual balance.

## Acceptance criteria — must pass
- [ ] `NAZIR` is on the left and slightly lower than `EBBAD`.
- [ ] `EBBAD` is on the right.
- [ ] Both words are smaller and fully visible, inside the viewport.
- [ ] No letters are cut by the portrait, screen edge, navbar, or other content.
- [ ] Original `profile.png` portrait remains recognizable and unedited.
- [ ] Lower-left copy is visually premium, elegant and easy to read.
- [ ] Existing CTA links work; no page/navigation regressions.
- [ ] Mobile and tablet layouts adapt properly with no overlap or horizontal scroll.
- [ ] Build succeeds and no new runtime errors appear.

## Output
Implement the changes directly; **do not stop with a plan or pseudocode**. Then report:
- Exact files changed.
- Summary of placement and design improvements.
- Build/test results (be truthful about what was actually checked).
- Any remaining visual limitation, if there is one.

**Art direction:** I want a premium, understated medical personal-brand homepage. Think editorial magazine cover, restrained cinematic photography, and beautiful typography — NOT massive yellow/gold lettering and crowded marketing content. Prioritize meticulous visual polish over more effects.
