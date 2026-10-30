# CODEX MASTER PROMPT — EBBAD NAZIR
## The Art of Precision | Premium Cinematic 3D Medical Portfolio

> **Role:** You are acting as a world-class creative director, award-winning UI/UX designer, senior React/Next.js engineer, expert WebGL/Three.js artist, GSAP motion designer, accessibility specialist, SEO engineer, and QA lead. **Your job is to DESIGN AND BUILD the complete functional website in this repository, not merely write a plan or mockup.**
>
> **Priority:** Build something distinctive, cinematic, sophisticated, polished, and usable. The site must feel like a premium personal medical portfolio for an **MBBS student and aspiring surgeon**, not a hospital, gaming site, agency template, generic landing page, or already-qualified doctor's clinical practice.

---

## 0. MANDATORY INSTRUCTIONS — READ FIRST

1. **Build a real MULTI-PAGE website.** This is the single most important product requirement. **DO NOT create a long one-page/landing-page site** with About, Education, Clinical Experience, and other sections stacked on Home. Home is a concise introduction and navigation hub; full content lives on distinct routes/pages.
2. **Use the profile photograph that I have already placed in the project ROOT directory, named `profile`**, with an image extension that may be `.png`, `.jpg`, `.jpeg`, `.webp`, or `.avif`. Discover the actual file. Preserve the person's appearance. Do not use fake or generated substitute faces. Copy the file into an appropriate public asset location if needed and retain its original resolution/source.
3. **Create the original logo and favicon yourself in code.** Produce actual usable SVG assets (and PNG/ICO equivalents if feasible) as part of implementation. The branding should feel like luxury editorial medicine: an **EN monogram with a subtle pulse/anatomy-inspired line motif**, not a stock icon, generic template, Red Cross emblem, or overcomplicated hospital logo. Implement appropriate light and dark variants, a favicon, and app/Apple-touch icon if practical.
4. **Use only the verified personal facts in Section 3.** Never fabricate medical qualifications, doctor registration, surgical procedures, internships duties, patient contact, awards, research, societies, publications, certificates, campaign roles, or dates. All copy must represent Ebbad accurately as a current medical student. **Never prefix his name with “Dr.”**
5. Make an **exceptionally polished black, white, graphite, and metallic-silver aesthetic** with genuinely interactive 3D rendered in Three.js, cinematic but controlled GSAP storytelling, outstanding typography and whitespace, natural mouse/touch interactions, and superb mobile performance.
6. **No placeholder content:** no lorem ipsum, fake testimonies, nonexistent projects, stock doctors, invented institutions, generic unverified hospital photographs, broken links, empty routes, “coming soon” cards, or fake contact-form submission success.
7. **Do not stop after a design proposal.** Inspect repository files, make sensible decisions independently, write the production-ready code, run quality checks, fix errors, and provide a brief summary of completed work plus any genuine limitations. Do not ask routine questions when the instructions here are sufficient.
8. If the repository already contains an app, understand its structure first and integrate safely; do not wipe unrelated work unnecessarily. Reuse the project's existing package manager where possible.

---

## 1. CREATIVE DIRECTION — THE ART OF PRECISION

### Visual identity

**Design concept:** **THE ART OF PRECISION** — a sophisticated, cinematic, 3D-enabled medical student portfolio exploring learning, clinical experience, and an ambition to pursue surgery.

The visual mood is **luxury editorial design × scientific visualization × modern medical professionalism**. Think exquisite contrast, detailed micro-interactions, physically inspired studio lighting, restrained Swiss typography, art-directed composition, and a personal story that feels credible and aspirational.

### Non-negotiable palette

| Token | Color | Use |
|---|---|---|
| `--background` | `#08090B` | Core cinematic black canvas |
| `--surface` | `#111317` | Elevated cards and navigation |
| `--surface-soft` | `#1B1E23` | Secondary surfaces |
| `--foreground` | `#F6F5F1` | Warm-white primary text |
| `--muted` | `#A8ADB5` | Secondary text |
| `--metallic` | `#C1C5CC` | Silver lines, selected highlights |
| `--border` | `rgba(255,255,255,0.12)` | Hairline dividers |
| `--paper` | `#F4F3EF` | Purposeful light editorial moments |
| `--ink` | `#0D0F12` | Text on light sections |

- Dominant atmosphere: **black/graphite 75–85%**, neutral white about 10–20%, silver accents ~5%. This is a visual guideline, not a strict CSS requirement.
- No rainbow gradients, bright cyan glow, purple neon, overused glassmorphism, colorful medical clip-art, loud animated backgrounds, or thick card borders.
- Restrained gradients are acceptable for realistic lighting, chrome reflections, shadows, and object atmosphere.
- Use a light/off-white section strategically (e.g., Education editorial split) to provide premium contrast.

### Typography

- Headings / UI: **Geist** or **Manrope** (choose best workable font).
- Editorial accent: **Cormorant Garamond** or another high-quality serif with proper web loading and fallbacks.
- Display large but readable headings; precise typography, comfortable line lengths, strong contrast, tasteful negative space, thin uppercase eyebrow labels, small section numbers.
- Text should be legible and mature, not tiny for the sake of style.

### Signature design language

- Artistic black hero with **one central anatomically inspired silver heart sculpture** (not a cartoon love heart).
- Soft white rim lights, brushed-platinum highlights, subtle fog/shadows, optional restrained atmospheric particles.
- Custom asymmetric but balanced responsive grids, editorial typography, smooth section transitions, image masks and light parallax.
- UI surfaces can have subtle noise/grain via CSS or tiny procedural texture (no huge assets).
- Cursor effects only where they improve interaction; maintain standard usable pointer behavior and no cursor replacement on touch devices.
- Make this website **recognizably custom-designed**, not a common portfolio theme.

---

## 2. TECHNOLOGY / ENGINEERING REQUIREMENTS

**Primary stack:**

- **Next.js (App Router) + React + JavaScript (JS/JSX)**. Prefer JavaScript as requested; do not unnecessarily convert to TypeScript.
- **Tailwind CSS** for styling, with design tokens/CSS variables and a maintainable architecture.
- **Three.js + React Three Fiber + Drei** for true interactive 3D scenes.
- **GSAP + ScrollTrigger** for cinematic scroll-based timelines and reveals; apply cleanup with React-safe lifecycle patterns.
- **Motion / Framer Motion** only where useful for UI micro-interactions, menus, and navigation transitions. Avoid competing animation systems that fight over the same DOM transforms.
- **Lucide React** for small UI icons where suitable. **Do not use Lucide as a substitute for custom brand artwork**.
- Use current compatible stable package versions and verify that the project builds. Avoid experimental dependencies unless essential.

### Engineering conventions

- Server-render/index content wherever possible; isolate WebGL and browser-only interactive components as client components.
- Lazy-load expensive 3D scenes using safe dynamic imports and loading/fallback states; avoid hydration errors.
- Do not load the heavy hero model on every page when unnecessary.
- Use modular components and data-driven content, not massive monolithic files.
- Scope GSAP animations to components and revert on unmount. Properly tear down observers, controls, event handlers, and render loops.
- Protect layout stability; defer below-the-fold work and optimize font/image loading.
- Enable keyboard navigation, visible focus, accessible labels, appropriate HTML semantics and reduced-motion preferences.
- Honor `prefers-reduced-motion` and offer a graceful non-WebGL static fallback; never make basic navigation dependent on JS animation or graphics performance.

---

## 3. APPROVED / VERIFIED PERSONAL INFORMATION — SINGLE SOURCE OF TRUTH

Use these facts accurately throughout the site:

- **Full name:** Ebbad Nazir
- **Professional identity:** Fourth-Year MBBS Student | Aspiring Surgeon
- **Medical college:** Rai Medical College, Sargodha, Pakistan
- **MBBS session:** **2022–2027**
- **Current status:** In fourth year (portfolio content prepared in 2026); degree **in progress**
- **Medical admission aggregate:** **83%** (admission aggregate, not MBBS CGPA or examination marks)
- **F.Sc. (Pre-Medical):** Punjab College — **94%**
- **Matriculation (Science):** Taleem-ul-Islam School, Bhalwal — **88%**
- **Clinical experience:** Surgery Department Internship, **Federal Government Polyclinic Hospital (FGPC), Islamabad**
- **Internship dates:** **14 June – 15 July**. **Year not provided, so DO NOT guess a year**; display the date range without a year or in an equally honest format.
- **Public health:** Participant in an **Expanded Programme on Immunization (EPI) awareness campaign**. **Exact role/duties not supplied** — describe participation only, no claimed leading/organizing, giving vaccinations, fieldwork, or named results.
- **Specialty interest / future ambition:** **Surgery**; aspiring to pursue surgical training. Not a surgeon yet.
- **Email:** `ebbadnazir@gmail.com`
- **Phone:** `+92 306 9188839`
- **Professional location:** **Bhalwal, District Sargodha, Punjab, Pakistan**.
- **LinkedIn:** `https://www.linkedin.com/in/ebbad-nazir-225316280`

**Privacy:** A full residential street address was privately provided, but do **not** publish it on the portfolio. Show city/district only. The contact details above are approved to display.

**Not provided, therefore do not invent:** internship activities or formal evaluations, exact EPI role, certifications, courses, workshop attendance, publications, research projects, leadership, hobbies, medical registration, patient outcomes, scholarship awards, university ranking, teaching experience, recommendation quotes, real photos other than `profile`, or social-media accounts other than LinkedIn.

**Important medical accuracy:** Do not call the student “Dr. Ebbad Nazir”, “surgeon”, “specialist”, “consultant”, “licensed practitioner”, or describe practicing independently. Appropriate terms: “MBBS Student,” “Medical Student,” “Aspiring Surgeon,” “Surgery Enthusiast,” and “Surgical Department Intern.”

---

## 4. INFORMATION ARCHITECTURE — MULTI-PAGE, NOT A LANDING PAGE

Implement **these real, separately navigable routes**:

```text
/                         Home — SHORT cinematic introduction only
/about                    About Ebbad — full personal/professional story
/education                Education — academic journey and verified scores
/clinical-experience      Clinical Experience — FGPC surgical internship
/public-health            Public Health — EPI awareness participation
/interests                Medical Interests & Career Vision — surgery focus
/contact                  Contact — real contact methods and accessible form
```

Use a persistent minimal desktop navigation (wordmark left, menu links center/right, tasteful contact CTA) and an excellent functional mobile menu. Display active route. Provide breadcrumb context when useful on inner pages. Site logo click routes to `/`. Ensure route navigation actually works through client routing, refresh, browser history and direct deep links.

### IMPORTANT HOME-PAGE LENGTH RULE

**Home must not become a long scrolling landing page.** It should contain only:

1. A strong cinematic introductory hero, ideally approximately one viewport tall (mobile adjusted for readability).
2. A compact personal introduction (2–3 sentences maximum).
3. A beautifully composed strip of **3–4 verified highlights** and one concise CTA area linking to the detailed pages.
4. Footer / social links.

Do **not** put full About, Education timeline, full Clinical Experience, EPI content, Medical Interests and Contact forms all on Home. Other pages are where detailed content belongs. Keep Home high-impact and quick to explore.

---

## 5. PAGE-BY-PAGE DESIGN & CONTENT SPECIFICATIONS

### A. HOME `/` — The cinematic first impression

**Hero:**

- Background: rich black, dramatic restrained studio spotlights, subtle texture.
- A **distinctive Three.js anatomical-inspired silver heart sculpture** occupies the right or center-right visual field on desktop; balanced around the text. It moves slowly, responds gently to pointer/touch/scroll, and never competes with text. On mobile, move 3D above/below copy or reduce size to preserve hierarchy.
- Main content:
  - Eyebrow: `MEDICAL PORTFOLIO  /  2026`
  - Name: `EBBAD NAZIR.`
  - Title: `MBBS STUDENT  /  ASPIRING SURGEON`
  - Signature line: **`The Art of Precision.`**
  - Intro: `Fourth-year MBBS student at Rai Medical College, Sargodha, driven by curiosity, clinical learning, and a growing interest in surgery.`
  - Primary CTA: `Explore My Journey` → `/about`
  - Secondary CTA: `View Clinical Experience` → `/clinical-experience`
- Small, quiet scroll cue / section index.
- Verified editorial highlights only: `2022–2027 MBBS`, `83% Admission Aggregate`, `FGPC Surgical Internship`, `Surgery — Career Interest`. Ensure these do not imply professional certification.
- Add a short navigation prompt near the lower part of Home: `Discover my education, clinical experience and path toward surgery.` with links to main pages.

**First-load motion sequence:** deliberate, polished and quick; optional subtle animated ECG/stroke preloader that does not hold users hostage, then typography reveal, then heart light/rotation. Do not block usability for many seconds. Subsequent internal navigations should feel fast.

**Hero 3D technical direction:**

- This **must be genuinely rendered 3D**, not a pre-rendered GIF, basic CSS rotation of a 2D PNG, or a cartoon heart emoji.
- Aim for an **anatomically inspired sculptural heart with visible major vessel shapes and organic chamber forms**, refined metallic-silver PBR material, realistic lighting, soft reflections, slow controlled rotation, and parallax response. Avoid a scientifically misleading claim that it is an anatomically accurate clinical teaching model unless it genuinely is.
- Favor an original procedural/assembled Three.js model or a properly licensed, credited local asset. Do not scrape proprietary models or depend on a third-party hotlinked asset at runtime. If no verified model can be obtained, create a beautiful **original anatomy-inspired silver sculpture in R3F** with thoughtfully shaped geometry/tubes and detailed materials — **do not fall back to an ordinary Valentine's heart icon**.
- Limit draw calls, particles and texture sizes. Have a refined static SVG/CSS/locally generated poster fallback for unsupported devices or reduced motion.

### B. ABOUT `/about` — The person behind the ambition

**Page heading:** `Beyond the White Coat.`

**Supporting headline:** `A passion for medicine. A future shaped by curiosity and care.`

**Body copy (faithful, may polish grammar without inventing facts):**

> I am Ebbad Nazir, a fourth-year MBBS student at Rai Medical College, Sargodha, pursuing my medical education as part of the 2022–2027 session. My interest in medicine is driven by a desire to understand human health, continue learning, and contribute meaningfully to patient-centered care. I have a growing interest in surgery, where knowledge, precision, judgment, and teamwork come together. My exposure to the Surgery Department at Federal Government Polyclinic Hospital and participation in an immunization awareness campaign have further strengthened my motivation to learn and serve.

**Visual design:**

- **Use the actual `profile` photograph prominently.** A distinctive black-and-white editorial portrait treatment is encouraged; no identity alteration, face replacement, or AI-generated face.
- On-scroll tasteful image mask reveal, subtle parallax, small vertical editorial caption `EBBAD NAZIR / MBBS 2022–2027`.
- Split layout with image and readable story; switch order elegantly on mobile.
- Compact verified personal detail tiles: college, MBBS session, surgery interest, location.
- A brief **Values** section (these are aspirational values, not achievements): `Compassion`, `Integrity`, `Discipline`, `Continuous Learning`, each with one sentence, no fake testimonials.
- CTA: `View My Education`.

### C. EDUCATION `/education` — Academic foundation

**Page heading:** `Built on Dedication.`

**Intro:** `A focused academic journey toward a career in medicine.`

**Three main timeline entries, in clear chronological order:**

1. **Matriculation (Science)** — **Taleem-ul-Islam School, Bhalwal** — **88%**.
2. **F.Sc. Pre-Medical** — **Punjab College** — **94%**.
3. **MBBS (In Progress)** — **Rai Medical College, Sargodha** — **Session 2022–2027** — **83% Medical Admission Aggregate** — Current: fourth year.

**Very important:** `83%` is specifically the admission aggregate; do not portray it as an MBBS exam grade.

**Design:**

- Award-worthy **interactive scrolling timeline** with elegant moving progress line, staggered typography and refined statistic typography.
- Use subtle graphic representations of anatomy/science (original CSS/SVG, never invented diplomas).
- Optionally use off-white paper background for the central editorial timeline; otherwise maintain an art-directed black-to-paper transition.
- On mobile, an elegant vertical timeline with no horizontal overflow.
- CTA to `/clinical-experience`.

### D. CLINICAL EXPERIENCE `/clinical-experience` — Surgery exposure

**Page heading:** `Inside the Clinical Environment.`

**Institution:** `Federal Government Polyclinic Hospital (FGPC), Islamabad`

**Role:** `Surgery Department Intern`

**Duration:** `14 June – 15 July` **(year unspecified — do not invent).**

**Approved description:**

> My internship in the Surgery Department at Federal Government Polyclinic Hospital offered an opportunity to experience a professional hospital environment and broaden my understanding of the clinical setting of surgical medicine. The experience strengthened my appreciation of clinical professionalism, collaboration, patient-centered healthcare, and my developing interest in surgery.

**Allowed themes (present as learning/exposure, not attested performed duties):**

- Exposure to the surgical department setting.
- Understanding professional clinical environments.
- Appreciation of healthcare teamwork and patient-centered care.
- Exploration of surgery as a future career interest.

**Do not claim:** assisting surgery, conducting procedures, taking clinical histories, ward rounds, operating-room scrub-in, independent examination or treatment, outcomes, or any other specific responsibility. Those were **not supplied**.

**Design:**

- Cinematic medical editorial aesthetic using **original sculptural linework / 3D surgical instrument-inspired abstract geometry** (if feasible), subtle depth and graceful scroll transitions.
- No fabricated real-world internship photos; use profile image only if needed, otherwise original generative vector/Three.js illustrations.
- Organize the content into an institution/date/role hero and a concise reflective narrative.
- Internal CTA to `/interests`.

### E. PUBLIC HEALTH `/public-health` — A wider view of care

**Page heading:** `Care Beyond the Clinic.`

**Initiative:** `Expanded Programme on Immunization (EPI) — Awareness Campaign`

**Role:** `Campaign Participant` — no more specific responsibility disclosed.

**Approved copy:**

> I participated in an awareness initiative associated with the Expanded Programme on Immunization (EPI). This involvement reflects my interest in preventive medicine and the value of public awareness in supporting community health. It reinforced the importance of immunization awareness and disease prevention alongside clinical healthcare.

**Support themes:** `Immunization Awareness`, `Disease Prevention`, `Preventive Healthcare`, `Community Well-being`.

**Design:**

- Modern interactive 3D micro-scene of gently orbiting molecules / cellular structures as **artistic scientific decoration**, not an inaccurate illustration of an actual vaccine molecule.
- Refined four-item interest grid with subtle motion.
- No made-up campaign year, location, organization details or individual duties.

### F. MEDICAL INTERESTS `/interests` — Ambition & future

**Page heading:** `Focused on What Comes Next.`

**Featured interest:** **`SURGERY`** — future specialty ambition.

**Body copy:**

> Surgery is the medical specialty that most strongly captures my interest. I am drawn to the combination of detailed medical knowledge, technical precision, clinical judgment, and teamwork. As I advance through MBBS, my goal is to strengthen my clinical foundations, gain further learning exposure, and prepare for the possibilities of future postgraduate surgical training.

**Additional interest cards (clearly interests, not professional competencies):**

- **Clinical Medicine:** Building understanding of disease, clinical reasoning, and patient care.
- **Human Anatomy & Physiology:** Studying the structure and function of the human body.
- **Preventive Medicine:** Understanding immunization and awareness-based approaches to health.
- **Continuous Medical Learning:** A commitment to growing knowledge throughout a medical career.

**Career vision statement:**

> My ambition is to develop into an ethical, knowledgeable and compassionate medical professional, with the long-term goal of pursuing a career in surgery and contributing positively to patient care.

**Design:**

- Distinctive editorial feature for Surgery, with a sophisticated sculptural anatomical detail and controlled silver particles/lighting.
- A short multi-step **aspirational path**, worded as future goals rather than completed achievements: `Complete MBBS` → `Expand Clinical Exposure` → `Explore Postgraduate Surgical Training` → `Contribute to Patient Care`.
- Differentiate future goals from real achievements visually and verbally.
- CTA to `/contact`.

### G. CONTACT `/contact` — Polished, accessible, functional

**Page heading:** `Let's Connect.`

**Supporting copy:**

> I welcome opportunities to connect with medical professionals, educators, mentors, fellow students, and people interested in medical learning and public health initiatives.

**Display functional direct links:**

- Email: `ebbadnazir@gmail.com` → `mailto:ebbadnazir@gmail.com`
- Phone: `+92 306 9188839` → `tel:+923069188839`
- LinkedIn: `https://www.linkedin.com/in/ebbad-nazir-225316280` → external link opening safely with appropriate `rel` attributes
- Location: `Bhalwal, District Sargodha, Punjab, Pakistan` (no residential street address)

**Contact form:**

- Fields: name, email, subject, message, client-side and server-side validation as applicable, accessible error messages, anti-spam basics and graceful feedback.
- There is no authorized email server/API key provided. **Do not fake success.** Choose one of two honest implementations:
  1. If a configured, secure backend or verified form provider is already available in this repository, integrate and test it properly; or
  2. Offer a clearly labelled `Compose Email` action that opens the default email client with correctly encoded subject/message; state that the user's email application will open and do not claim the message has been sent.
- Include a direct email CTA as a reliable alternative.

---

## 6. SHARED BRAND ELEMENTS AND ORIGINAL LOGO/FAVICON CREATION

**You must create the assets, not leave design instructions for someone else.**

### Logo direction

Design original, modern, minimal **`EN`** monogram with a subtle pulse line, flowing anatomical curve, or fine concentric geometric motif. It should feel distinctive and professional at large and small sizes.

Deliver actual SVG sources, e.g.:

```text
public/brand/logo-light.svg
public/brand/logo-dark.svg
public/brand/monogram.svg
public/favicon.svg
public/apple-touch-icon.png  (if generating PNG is possible)
```

Use correct routes/files for framework metadata and favicon loading. You may create icon variations with scriptable SVG/raster methods. Ensure the favicon is recognizable at 16×16 and 32×32. Use no medical institution seals or protected Red Cross emblem. Don't use caduceus imagery that implies professional medical accreditation.

### Images and assets

- Find the root `profile.*` image and use it on `/about` and perhaps a small mini-profile on Home/other page as appropriate.
- Use `next/image` for image optimization, correct dimensions and alt text.
- Do not artificially change facial identity or misrepresent the photograph.
- Do not need external photography. Prefer custom-created procedural graphics to stock photos.
- Ensure all resources work **locally without runtime third-party asset hotlinks**.

---

## 7. MOTION & THREE.JS SYSTEM — MAKE IT MIND-BLOWING, NOT CHAOTIC

### Sequence language

1. On first visit, a **short, skippable/nonblocking** pulse-line/typographic reveal. No long splash screens.
2. Heading text appears with refined staggered fade/slide or mask reveal.
3. The hero heart has continuous slow ambient movement, subdued camera drift, realistic silver lighting, subtle pointer response (clamped), and optional scroll-linked rotation.
4. Page transitions: seamless short fade/wipe/crossfade without flashes or broken focus state. Navigation should remain instant and reliable.
5. ScrollTrigger only for targeted moments: Education timeline, About photo reveal, Clinical visual reveal and select headings. Avoid excessive pinning and giant scroll distances.
6. Hover interactions: gentle lift, thin border highlight, magnetic CTA effect (desktop only). The cards must remain easy to click.
7. Public Health / Interests can have a lighter secondary R3F micro-scene, only if performance remains strong.
8. Add a low-motion mode when OS requests reduced motion. Pause nonessential animated effects and reduce 3D rendering overhead when hidden/offscreen.

### Performance/quality gates

- Use device pixel ratio limits and responsive 3D complexity; e.g. cap DPR according to capability rather than hardcoding an expensive 3× render.
- Avoid giant assets, excessive real-time shadows, dense particle fields, memory leaks, high-frequency state updates in React rendering and expensive post-processing stacks.
- Prefer transform/opacity animations for UI and keep layout thrashing minimal.
- Prioritize smooth experience on mid-range phones and laptops. Provide static fallback if WebGL unavailable or hardware is constrained.
- Use meaningful skeleton/fallback states that preserve layout and communicate the content independently of 3D.
- Make navigation and information fully functional even with WebGL disabled.

---

## 8. RESPONSIVE, UX, AND ACCESSIBILITY REQUIREMENTS

- Must look bespoke and intentional on **mobile (320px and above), tablet, laptop, desktop, and widescreen**.
- Desktop navigation with refined hover treatment; mobile menu with appropriate accessible open/close controls, focus management, ESC-to-close, correct aria attributes and no body scroll issues.
- Sufficient color contrast, actual button labels, link names, sensible heading order and keyboard operability.
- Respect `prefers-reduced-motion` and consider a no-pointer / touch version of every meaningful interaction.
- No text hidden under a model, no unreadable silver-on-gray body copy, no clipped portraits, no content overflow or horizontal scrollbar.
- Provide hover and focus states for every interaction; don't rely on hover-only controls.
- Use descriptive alt text; treat decorative 3D canvases as decorative when they don't convey unique content.
- Use subtle inner-page navigation and breadcrumbs where appropriate; maintain obvious context as user navigates.
- Ensure no link points to `#` or an unimplemented route.

---

## 9. SITE COMPONENTS & PROJECT STRUCTURE (SUGGESTED)

Adapt intelligently to existing structure; do not force this verbatim if the current repo already has good conventions:

```text
app/
  layout.jsx
  page.jsx
  about/page.jsx
  education/page.jsx
  clinical-experience/page.jsx
  public-health/page.jsx
  interests/page.jsx
  contact/page.jsx
  globals.css
components/
  layout/
    Header.jsx
    MobileMenu.jsx
    Footer.jsx
    PageTransition.jsx
  brand/
    Logo.jsx
  three/
    HeroHeartScene.jsx
    HeartSculpture.jsx
    ScientificAccentScene.jsx
    SceneFallback.jsx
  sections/
    HomeHero.jsx
    PageHero.jsx
    EducationTimeline.jsx
    ClinicalStory.jsx
    ValuesGrid.jsx
    ContactPanel.jsx
  ui/
    AnimatedHeading.jsx
    MagneticButton.jsx
    SectionEyebrow.jsx
    Reveal.jsx
content/
  profile.js
public/
  images/profile.[actual-extension]
  brand/logo-light.svg
  brand/logo-dark.svg
  brand/monogram.svg
  favicon.svg
```

### Architectural rules

- Put verified site information in one `content/profile.js` or equivalent so changes propagate accurately and do not create discrepancies.
- Use shared components for navigation, titles, transitions, buttons, spacing, footer and typography.
- Do not duplicate the whole site in a single huge page; each route has its own purpose and content.
- Provide custom, attractive 404 / not-found page fitting the brand and a clear return-home link.
- Use semantic metadata and Open Graph image artwork generated from original design if feasible.

---

## 10. SEO, METADATA, CONTENT INTEGRITY

- Default title: `Ebbad Nazir | MBBS Student & Aspiring Surgeon`
- Default description: `Explore the professional portfolio of Ebbad Nazir, a fourth-year MBBS student at Rai Medical College, Sargodha (2022–2027), with surgical department internship experience at FGPC Islamabad and an interest in surgery.`
- Give each inner page a unique, accurate title and description.
- Add canonical metadata if a verified production domain is configured; do not invent a domain.
- Generate robots/sitemap if appropriate. Ensure important factual content is crawlable outside the WebGL canvas.
- Use relevant image alt attributes and social preview meta.
- Do not use misleading JSON-LD credentials or physician/medical-business schema; `Person` + student/alumni-related honest descriptors are acceptable if used accurately.
- Use consistent dates: **MBBS 2022–2027**, **internship 14 June – 15 July (no year)**; footer copyright may be 2026 or dynamic as appropriate.
- Keep copy polished, first-person, authentic, concise and credible. No exaggerated claims such as `world-class surgeon`, `saving lives daily`, or `award-winning medical practitioner`.

---

## 11. VISUAL QUALITY BAR / DO-NOT-DO LIST

**Aim:** An unusually refined, portfolio-gallery-grade experience with personality — **not** a collection of standard Tailwind cards and template headings.

Required:

- Stunning custom hero composition with a genuine anatomical-inspired 3D asset.
- Real usable profile picture integrated elegantly and without face alteration.
- Excellent dark/light contrast and luxury editorial spacing.
- Smooth route navigation and compelling inner pages that feel as designed as Home.
- Strong typographic hierarchy and original monogram/favicon assets.
- Tasteful animations throughout, but actual content remains the center of the experience.

Avoid:

- Long single-page scrolling landing page.
- Repeated nearly identical full-height hero sections on every page.
- Generic startup SaaS pricing/testimonial cards.
- Inaccurate medical content or fake academic achievements.
- Giant animations that delay the content or make the site unusable.
- Generic 2D red heart icons instead of meaningful 3D work.
- Unlicensed copied website visuals or hotlinked 3D models.
- Bright cyberpunk colors, constant glow, overloaded particle systems.
- Fake contact submission notifications.
- Placeholder text and unfinished components.

---

## 12. IMPLEMENTATION EXECUTION PLAN — DO THE WORK

Execute this sequence **without asking me to approve each stage**:

**Phase 1 — Inspect & establish project**

- Identify current framework, file tree, package manager, existing build and root `profile.*` image.
- Set up compatible Next.js/React JavaScript structure if starting from an empty project. Preserve existing work if present.
- Verify imports, dependencies and font strategy.

**Phase 2 — Brand & layout system**

- Set up color/design tokens, typography, global layout and page spacing.
- Generate actual original EN logo/favicon SVGs in the repo.
- Create sophisticated header, mobile navigation, footer and shared page layout components.

**Phase 3 — Content & separate routes**

- Put all approved content in one structured source.
- Build `/`, `/about`, `/education`, `/clinical-experience`, `/public-health`, `/interests`, `/contact` with genuine route files and the copy above.
- Keep Home intentionally concise. All detailed storytelling is located on the inner routes.

**Phase 4 — High-impact visuals and motion**

- Build and integrate the R3F silver anatomical-inspired heart hero.
- Add GSAP reveal system, educational timeline and page-specific motion with clean lifecycle handling.
- Implement responsive page transitions, mobile fallbacks, reduced-motion support.

**Phase 5 — Polish, accessibility & quality assurance**

- Test image loading (actual `profile.*`), favicon rendering, all nav links and direct deep links.
- Verify no fabricated claims or internship year.
- Run lint/build and fix all material errors and warnings.
- Inspect responsive layouts and fix clipping/overlap; test keyboard navigation and reduced-motion behavior.
- Ensure the 3D scene is polished and that site content and navigation remain accessible without it.
- Confirm functional contact actions and proper feedback.

**Phase 6 — Deliver**

- Summarize what files/routes/assets were created, exact commands to run locally, and any settings required for deployment.
- If a backend contact provider is unconfigured, clearly say you used the `mailto` composer fallback; don't claim email was sent.
- State any remaining non-blocking issues transparently; otherwise deliver a working finished website.

---

## 13. FINAL ACCEPTANCE CHECKLIST — SELF-TEST BEFORE FINISHING

- [ ] Real **multi-page** website with all seven routes.
- [ ] Home contains **only brief introduction, cinematic hero, short verified highlights, and navigation** — not all page content.
- [ ] Deep black / white / metallic-silver premium visual direction is consistent.
- [ ] Real React Three Fiber/Three.js 3D heart, not a simple CSS 2D heart.
- [ ] GSAP effects are tasteful, functional and cleaned up properly.
- [ ] Actual root `profile.*` photograph is displayed; no substitute face.
- [ ] Original EN medical-inspired SVG logo and working favicon physically exist.
- [ ] Education shows **Matric 88%, F.Sc. 94%, MBBS admission aggregate 83%, MBBS 2022–2027** accurately.
- [ ] Internship shows **FGPC Islamabad, Surgery Department, 14 June – 15 July**, without inventing year/duties.
- [ ] EPI involvement is described honestly, without invented responsibilities.
- [ ] Surgery is described as a **future career interest**, not an achieved specialization.
- [ ] Name is **Ebbad Nazir**, without a `Dr.` prefix.
- [ ] Contact links actually work, and no residential street address is published.
- [ ] Navigation, keyboard operation, mobile menu, reduced motion and WebGL fallback work.
- [ ] No lorem ipsum, fake testimonials, stock doctor faces, broken buttons or dead links.
- [ ] Build and lint pass (or explain precisely why any check cannot run).
- [ ] Site feels **premium, cinematic, memorable, fast and professionally credible**.

### FINAL CREATIVE DIRECTOR'S NOTE

Treat this project like a commissioned luxury personal portfolio, **not** a quick student assignment. Give the composition the same attention as a high-end editorial website, but maintain the clarity, humility, and trustworthiness appropriate for a medical student. The best outcome is a cinematic and unforgettable introduction to **Ebbad Nazir**, followed by useful, refined and detailed pages that tell his verified story.

**START IMPLEMENTING NOW.**
