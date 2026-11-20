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

<!-- impeccable:design-map -->
Name: Adnan Raza Portfolio
Colors: primary: bioelectric-cyan hsl(199, 89%, 52%); secondary: neural-violet hsl(282, 85%, 65%); neutral: deep-space-black #0C0C0C; accent: terminal-green hsl(110, 100%, 70%) (+4 more in the sidecar)
Fonts: Kanit (display, headline, body, label); JetBrains Mono (mono)
Spacing: xs 0.5rem, sm 1rem, md 1.5rem, lg 2rem, xl 2.5rem, section 6rem
Radius: sm 0.5rem, md 0.625rem, lg 0.75rem, card 1.5rem, section-sm 2.5rem, section-md 3.125rem, section-lg 3.75rem, full 9999px
North Star: “The Cinematic Systems Observatory”
Don't:
- Don't flatten the interface into a generic grid of same-sized cards.
- Don't distribute glow, shadow, blur, or 3D effects evenly; atmosphere needs focal hierarchy.
- Don't introduce unrelated hues or warm neutral surfaces without redefining the system deliberately.
- Don't fabricate scientific imagery, metrics, endorsements, or claims to create visual drama.
- Don't let particle motion, sticky stacking, or animated gradients compromise reading, focus visibility, or reduced-motion expectations.
Do:
- Do preserve the contrast between cinematic spectacle and inspectable project evidence.
- Do use scale, overlap, tonal chapters, and selective elevation to create a clear top-to-bottom eye path.
- Do keep cyan and violet attached to signals, state, biological energy, and computational connection.
- Do use fluid type and responsive spacing so the monumental hierarchy survives small screens.
- Do reserve JetBrains Mono for commands, code-adjacent metadata, dates, and technical readouts.
Full: .impeccable/design-full.md (read a section when you need its detail)
