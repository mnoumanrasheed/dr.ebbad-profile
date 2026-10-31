# CODEX — STRICT HERO NAME POSITION & OVERLAP FIX

## Objective (implement, do not just explain)
Fix the current Ebbad Nazir portfolio hero visible in the latest screenshot. The last implementation is WRONG: it shows NAZIR on the left, EBBAD on the right, both too big, clipped at screen edges, and crossing behind the portrait's head. Correct the design precisely as below; do not redesign the whole website.

## Project and assets
- Existing Next.js 15 / React / Tailwind / GSAP portfolio.
- Locate the ACTUAL current hero source (`components/sections/HomeHero.jsx` or whichever file now owns the hero), and associated CSS. Inspect the real local files before editing. Do not blindly apply advice to an outdated repository snapshot.
- Use the existing portrait image already used by the hero, sourced from the existing root `profile.png` or its current valid public-asset copy. Do NOT modify, regenerate, filter, distort, or swap the portrait.
- Preserve all existing routes, navigation, content, animations, buttons, and functional components except where these adjustments require changes.

## Non-negotiable placement
1. The person's full name is **EBBAD NAZIR**. Make it read in that order: **EBBAD on the LEFT; NAZIR on the RIGHT**. NEVER reverse the words.
2. Place **EBBAD** in the LEFT UPPER part of the hero, clearly to the left of the portrait. Make the font SIGNIFICANTLY SMALLER than the current giant banner (e.g., desktop around 68–96px depending on actual available space). All five letters must be visible.
3. Place **NAZIR** in the RIGHT part of the hero, clearly to the right of the portrait, and **LOWER than EBBAD** (a staggered two-level layout, e.g., NAZIR roughly 100–150px lower at desktop width around 1366px). All five letters must be visible.
4. The two words must NOT sit on the same horizontal line. They should create a diagonal progression from upper-left EBBAD to lower-right NAZIR.
5. **NOT EVEN ONE LETTER may overlap the portrait's HEAD, HAIR, or FACE**. Aim to keep all typography clear of the full portrait silhouette too. Reserve a protected center zone for the portrait and make the text occupy separate left and right zones. No text visible behind the face, no letters hidden by the portrait, no letters clipped by viewport edges.
6. Use the CURRENT premium hero palette; adjust giant metallic/gold styling only enough to make names tasteful, legible, and balanced (avoid a wall of type). The portrait remains the focal point.
7. The left introductory headline, description, and both CTA buttons must remain readable and NOT overlap EBBAD. Reposition or decrease its size/line breaks if needed, without deleting content.
8. Do not change the existing header, brand logo, portrait, or routes as part of this targeted correction.

## Concrete layout blueprint — desktop (1200px+)
- Header / navigation remains at the top.
- Use a relative hero container with THREE independently positioned zones instead of one giant text row: left-name zone, protected center portrait zone, right-name zone.
- Suggested planning ratios (tune against real screenshot): left 8%–34% of viewport width; portrait protected ~38%–72%; right 75%–94%.
- EBBAD starts around 17–24% of hero height; NAZIR starts around 34–43% of hero height. NAZIR must be visibly lower, not baseline-aligned.
- EBBAD ~clamp(3.6rem, 6vw, 6rem); NAZIR ~clamp(3.2rem, 5.5vw, 5.6rem). These are starting points, not mandatory values if they collide. Reduce font size based on available safe width; use fluid typography, responsive max-width, and measured spacing. Keep both words in a single line each.
- Do not use `white-space: nowrap` on a 100vw full-name heading that overflows the screen; never use negative left/right offsets or `scaleX` distortion to fake fit.
- Use a visually hidden/accessible full-name heading (`h1`: "Ebbad Nazir") or other sound semantic structure if visual word spans are separate. Avoid duplicate visible H1 headings.
- Keep background names lower visual priority than the portrait and foreground introduction; avoid aggressive movement.

## Mobile / tablet
- At 768–1199px: reduce typography to fit around portrait, adjust positions safely. Never allow clipping or portrait overlap.
- Below 768px: prioritize a clean stacked composition. If side-by-side placement cannot fit without overlapping, place EBBAD top-left and NAZIR lower-right in their own rows ABOVE or BELOW the portrait, preserving word order and staggered relationship, never crossing the face. Make intro and CTA accessible without horizontal scroll.
- Ensure no horizontal page overflow and text contrast remains readable.

## Animation / implementation
- Reuse GSAP if existing. Animate each word from opacity 0 and a restrained vertical offset (e.g., 20px); keep positions fixed at rest.
- Respect `prefers-reduced-motion`; kill/revert animations on unmount.
- Do not introduce a video, 3D avatar, new libraries, or unnecessary redesign.
- Use responsive CSS grid/positioning and isolate new styles to hero selectors. Avoid global CSS changes that impact other routes.

## Mandatory verification before completion
1. Actually modify the local project files.
2. Test the hero at **1366×768, 1440×900, 1024×768, 768×1024, 390×844, 375×812** in browser/devtools or screenshot tooling available in your workspace. If visual browser testing is unavailable, explicitly report the limitation rather than claiming it was done.
3. Confirm visually at EACH size: EBBAD LEFT, NAZIR RIGHT AND LOWER, correct spelling, no head overlap, no cropped letters, intro and CTA not obscured, nav intact, no horizontal overflow.
4. Run `npm run build` and fix any build errors.
5. Report exactly which files changed and give a short desktop/mobile verification summary.

## Acceptance test
At 1366x768, I should see a smaller complete **EBBAD** to the LEFT of the doctor's head in the upper hero, a smaller complete **NAZIR** on the RIGHT and BELOW the first word, and Ebbad's face unobstructed with no text running behind his head. The lower-left intro must stay beautiful, readable, and clickable.

**This is a strict layout correction, not a creative reinterpretation. Do the work, do not stop with a plan.**
