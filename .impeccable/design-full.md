---
name: Adnan Raza Portfolio
description: A cinematic systems observatory for computational biology and open-source engineering.
colors:
  deep-space-black: "#0C0C0C"
  ion-mist: "#D7E2EA"
  bioelectric-cyan: "hsl(199, 89%, 52%)"
  neural-violet: "hsl(282, 85%, 65%)"
  obsidian-surface: "hsl(222, 14%, 8%)"
  deep-system-blue: "hsl(217, 33%, 12%)"
  muted-system-blue: "hsl(217, 33%, 14%)"
  muted-foreground: "hsl(215, 20.2%, 70%)"
  destructive: "hsl(0, 62.8%, 30.6%)"
  terminal-green: "hsl(110, 100%, 70%)"
  pure-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Kanit, sans-serif"
    fontSize: "clamp(3rem, 12vw, 10rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Kanit, sans-serif"
    fontSize: "clamp(1.2rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "Kanit, sans-serif"
    fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)"
    fontWeight: 300
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Kanit, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.1em"
  mono:
    fontFamily: "JetBrains Mono, Fira Code, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "0.5rem"
  md: "0.625rem"
  lg: "0.75rem"
  card: "1.5rem"
  section-sm: "2.5rem"
  section-md: "3.125rem"
  section-lg: "3.75rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "2.5rem"
  section: "6rem"
components:
  button-contact:
    backgroundColor: "{colors.neural-violet}"
    textColor: "{colors.pure-white}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.75rem 2rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ion-mist}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.75rem 2rem"
  card-dark:
    backgroundColor: "{colors.deep-space-black}"
    textColor: "{colors.ion-mist}"
    rounded: "{rounded.card}"
    padding: "2rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ion-mist}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1rem"
---

# Design System: Adnan Raza Portfolio

## Overview

**Creative North Star: “The Cinematic Systems Observatory”**

The interface behaves like a futuristic scientific observatory where biological intelligence, computational machinery, and verifiable engineering work are all in motion. It combines the scale and pacing of cinema with the precision of a research instrument: deep spatial backgrounds, monumental labels, orbital color, and technical readouts create spectacle while real projects remain the evidence at the center.

The personality is quirky, cinematic, and futuristic rather than sterile. A full-viewport WebGL particle system gives the hero and page background a living, neuromorphic presence; alternating black and white architectural sections then control pace and legibility. Atmospheric effects are layered, but elevation is purposeful: contrast, scale, overlap, blur, and shadows direct the eye toward the next important idea or action.

**Key Characteristics:**

- Monumental uppercase typography against deep-space surfaces.
- Bioelectric cyan and neural violet used as signals, not ambient decoration everywhere.
- Living 3D particles and measured motion suggest biological computation.
- Large rounded section transitions and sticky stacking create cinematic chapters.
- Technical mono details ground expressive moments in engineering credibility.

## Colors

The palette pairs near-black space and cool luminous text with sparse cyan–violet energy, interrupted by pure-white chapters for sharp narrative contrast.

### Primary

- **Bioelectric Cyan** (`hsl(199, 89%, 52%)`): Primary signal for active navigation, links, focus, circuit nodes, and technical emphasis.
- **Neural Violet** (`hsl(282, 85%, 65%)`): Secondary energy signal used in the cyan–violet gradient, terminal accents, and paired circuit details.

### Neutral

- **Deep Space Black** (`#0C0C0C`): Dominant page, project, and terminal background.
- **Ion Mist** (`#D7E2EA`): Principal dark-surface text, borders, outlines, and quiet interface chrome, usually reduced with opacity for hierarchy.
- **Obsidian Surface** (`hsl(222, 14%, 8%)`): Elevated card and popover surface.
- **Deep System Blue** (`hsl(217, 33%, 12%)`): Secondary surface and input layer.
- **Pure White** (`#FFFFFF`): High-contrast Expertise chapter background; paired with Deep Space Black copy.

### Named Rules

**The Signal, Not Wallpaper Rule.** Cyan and violet identify energy, state, and connection. Preserve broad neutral fields so the signals remain meaningful.

**The Alternating Chapter Rule.** White is a deliberate narrative interruption, not a general-purpose card color within dark sections.

## Typography

**Display Font:** Kanit (sans-serif fallback)

**Body Font:** Kanit (sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (Fira Code, monospace fallbacks)

**Character:** Kanit's geometric construction supports both monumental cinematic titles and approachable technical prose. JetBrains Mono is reserved for literal terminal language, roles, dates, tags, and compact technical metadata.

### Hierarchy

- **Display** (900, `clamp(3rem, 12vw, 10rem)`, 1): Full-width names and chapter titles; uppercase, tightly tracked, and often rendered in the cool-metal hero gradient.
- **Headline** (500, `clamp(1.2rem, 3vw, 2.5rem)`, 1.1): Project, expertise, and experience titles; usually uppercase.
- **Body** (300, `clamp(0.9rem, 1.6vw, 1.25rem)`, 1.625): Explanations and project narratives, constrained primarily to `max-w-2xl` or roughly 65–70 characters.
- **Label** (500, 0.875rem, 0.1em, uppercase): Navigation, categories, tags, and calls to action.
- **Mono** (400, 0.875rem, 1.6): Terminal content and technical metadata only.

### Named Rules

**The Monument and Readout Rule.** Kanit creates the monument; JetBrains Mono supplies the readout. Do not use monospace merely to make ordinary prose appear technical.

## Layout

The page is a vertical sequence of full-width cinematic chapters with content held in `max-w-5xl` containers; fixed navigation expands to `max-w-6xl`. Horizontal padding moves from 1.25–1.5rem on small screens to 2–2.5rem on larger screens. Section spacing is generous—typically 5–8rem vertically—while related content uses tighter 1–2.5rem gaps.

The hero occupies the viewport and distributes identity, positioning, and actions across its height. Expertise and Projects use overlapping rounded section tops at 40px, 50px, and 60px by breakpoint. Project cards form an 85vh sticky stack, using scale and overlap to create narrative progression. Lists and record-like sections remain single-column for scanability; metadata rows wrap rather than compress.

Responsive behavior preserves the same hierarchy rather than creating a separate visual language. Fluid `clamp()` typography carries cinematic scale across widths, mobile navigation becomes a translucent menu, and controls increase their padding at `sm` and `md`. Breakpoints follow Tailwind defaults: 640px, 768px, 1024px, 1280px, and 1536px.

## Elevation & Depth

The system is layered and atmospheric. A fixed WebGL particle field establishes deep space; translucent navigation and circuit surfaces sit above it with 10–20px backdrop blur; chapter overlap, sticky stacking, and tonal contrast establish structural depth. Shadows are reserved for moments that need attention or spatial separation. Hovered project and circuit cards lift 6–8px and gain a broad shadow plus restrained cyan glow; important controls may carry an inset light or animated signal gradient.

### Shadow Vocabulary

- **Bioelectric Glow** (`0 0 20px hsl(199, 89%, 52% / 0.3)`): Focused energy around active or elevated technical elements.
- **Neural Glow** (`0 0 20px hsl(282, 85%, 65% / 0.3)`): Paired accent for alternating energy states.
- **Card Lift** (`0 20px 40px hsl(0 0% 0% / 0.3)`): Hover separation for major dark cards, paired with Bioelectric Glow where appropriate.
- **Circuit Depth** (`0 15px 35px rgba(0, 0, 0, 0.4)`): Resting depth for translucent circuit surfaces.

### Named Rules

**The Eye-Path Rule.** Elevation must identify the current focal point or next action. If everything glows or floats, remove elevation until the hierarchy is clear.

## Shapes

The form language combines engineered geometry with soft, large-scale silhouettes. Major chapter boundaries and project cards use unusually generous 40–60px radii, creating physical layers against the full-bleed background. Standard information cards use 24px corners. Buttons, chips, dates, and social controls use full pills or circles. Utility surfaces use the smaller 8–12px token scale.

Borders provide technical definition: 1–2px Ion Mist strokes at 10–30% opacity at rest, brightening toward 50% on hover. Signature circuit cards use two small luminous corner nodes as connection points. Avoid arbitrary radius mixing within a component family.

## Components

### Buttons

Luminous, tactile, and engineered, with elevation reserved for directing attention.

- **Shape:** Full pill (`9999px`) with generous horizontal padding.
- **Primary:** White text over a violet-led multicolor energy gradient; 0.75–1rem vertical and 2–3rem horizontal padding; inset light and a 2px white inner outline.
- **Hover / Focus:** Movement or glow should be brief and directional. Preserve a visible keyboard focus treatment using the Bioelectric Cyan ring role.
- **Secondary / Ghost:** Transparent with a 2px Ion Mist border; hover introduces only a 10% Ion Mist surface.

### Chips

- **Style:** Transparent pill with Ion Mist text, 1px border at 30% opacity, uppercase tracked label typography.
- **State:** Tags are informational and remain quiet; do not give non-interactive tags button-like elevation.

### Cards / Containers

- **Corner Style:** 24px for records; 40–60px for cinematic project and chapter structures.
- **Background:** Deep Space Black for major projects; transparent or low-opacity Obsidian layers where the WebGL field should remain visible.
- **Shadow Strategy:** Flat or lightly layered at rest; lift and glow only for interactive emphasis.
- **Border:** Ion Mist at 20–30% opacity, typically 2px; active borders strengthen to 50%.
- **Internal Padding:** 1.5rem on small screens and 2rem on larger screens.

### Inputs / Fields

- **Style:** The signature terminal input is transparent and borderless within a full-screen Deep Space Black overlay, using mono typography and Ion Mist text.
- **Focus:** Focus remains on the terminal prompt and blinking cursor without introducing an unrelated field shell.
- **Error / Disabled:** No established visual state exists; future additions must use the current semantic destructive token and preserve readable contrast.

### Navigation

Navigation is fixed, translucent Deep Space Black with medium backdrop blur, a quiet lower border, and broad ambient shadow. Desktop links use uppercase tracked Kanit labels; active state shifts to Bioelectric Cyan. Mobile collapses to a rounded translucent Obsidian menu with full-row targets and cyan-tinted hover surfaces.

### Living Particle Field

The full-screen Three.js background is the signature environmental component. Particle morphs reference DNA, neural systems, and computation, supporting the portfolio's subject matter while remaining behind readable content. It establishes atmosphere; foreground surfaces must regulate its visibility rather than compete with it.

### Terminal Overlay

The Konami-triggered terminal is a full-screen technical mode using JetBrains Mono, a 95% Deep Space Black surface, heavy backdrop blur, Ion Mist output, and Neural Violet prompts. Its behavior and language are literal, not decorative.

## Do's and Don'ts

### Do:

- **Do** preserve the contrast between cinematic spectacle and inspectable project evidence.
- **Do** use scale, overlap, tonal chapters, and selective elevation to create a clear top-to-bottom eye path.
- **Do** keep cyan and violet attached to signals, state, biological energy, and computational connection.
- **Do** use fluid type and responsive spacing so the monumental hierarchy survives small screens.
- **Do** reserve JetBrains Mono for commands, code-adjacent metadata, dates, and technical readouts.

### Don't:

- **Don't** flatten the interface into a generic grid of same-sized cards.
- **Don't** distribute glow, shadow, blur, or 3D effects evenly; atmosphere needs focal hierarchy.
- **Don't** introduce unrelated hues or warm neutral surfaces without redefining the system deliberately.
- **Don't** fabricate scientific imagery, metrics, endorsements, or claims to create visual drama.
- **Don't** let particle motion, sticky stacking, or animated gradients compromise reading, focus visibility, or reduced-motion expectations.
