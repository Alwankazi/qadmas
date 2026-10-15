---
name: Qadmas Technologies
description: Minimal editorial presentation for a software engineering studio.
colors:
  apple-blue: "#0284c7"
  gallery-white: "#f8fafc"
  studio-mist: "#ffffff"
  paper-frost: "#f1f5f9"
  hairline-silver: "#e2e8f0"
  ink: "#0f172a"
  slate: "#64748b"
typography:
  display:
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(34px, 4.5vw, 60px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(28px, 4vw, 44px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "14px"
    fontWeight: 500
  serif-accent:
    fontFamily: '"Instrument Serif", Georgia, serif'
rounded:
  sm: "4px"
  lg: "12px"
  cards: "20px"
  largepanels: "24px"
  buttons: "9999px"
spacing:
  card-padding: "24px"
  section-gap: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.studio-mist}"
    typography: "{typography.label}"
    rounded: "{rounded.buttons}"
    padding: "4px 56px 4px 22px"
    height: "48px"
  button-ghost:
    backgroundColor: "{colors.studio-mist}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.buttons}"
    padding: "4px 52px 4px 22px"
    height: "48px"
  button-compact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.studio-mist}"
    rounded: "{rounded.buttons}"
    padding: "2px 46px 2px 18px"
    height: "40px"
  card-light:
    backgroundColor: "{colors.studio-mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.cards}"
    padding: "{spacing.card-padding}"
---

# Design System: Qadmas Technologies

## Overview

The existing Qadmas studio system pairs a minimal, open presentation with precise system typography and a restrained blue accent. Preserve the Qadmas identity and the SF / Instrument Serif pairing confirmed in PRODUCT.md.

This is an extraction of the shipped system, not a replacement identity. The About page applies it as an open letter; that composition is specific to the surface contract in .impeccable/surfaces/src-pages-about-tsx.md.

**Key Characteristics:**
- Open light surfaces and dark ink.
- System sans typography with selective serif emphasis.
- Blue accents and pill-shaped actions.
- Quiet dividers and generous reading space.

## Colors

Qadmas blue punctuates a cool white and slate palette.

### Primary
- **Qadmas Blue** (apple-blue): emphasized words, interaction highlights, selection and the About action focus outlines.

### Neutral
- **Gallery White** (gallery-white): page canvas.
- **Studio White** (studio-mist): controls and raised surfaces.
- **Paper Frost** (paper-frost): quiet inset areas and icon discs.
- **Hairline Silver** (hairline-silver): borders and separators.
- **Deep Ink** (ink): headings and primary actions.
- **Reading Slate** (slate): supporting copy.

The About letter also uses Tailwind sky-50, sky-900, sky-950 and sky-800 for its pale-blue paper and text. These are surface-specific applications, not new global brand tokens. Source CSS has legacy aliases; use the semantic names above when extending the current system.

## Typography

**Display Font:** SF Pro Display with platform sans fallbacks.
**Body Font:** the SF / system sans stack.
**Accent Font:** Instrument Serif with Georgia and serif fallbacks.

Use the frontmatter scale for shared roles. About has deliberate overrides: hero (42 / 60 / 72px), letter heading (42 / 60px), body (16 / 17px) and letter line-height (1.85). Its blue italic serif title span contrasts with the medium sans opening; the letter heading uses the same serif without italics.

**The Existing Fonts Rule.** Preserve the system sans and Instrument Serif families; do not introduce a third display family.

## Layout

Shared content caps at (1200px), with horizontal gutters of (24px). About narrows its letter surface to (1152px), reading measure to (720px), and proof / principles sections to (1056px). Its fixed navigation is cleared by top padding (160px), increasing to (192px) at the small breakpoint.

About paragraphs align left on mobile and justify from the small breakpoint. Statistics stack on mobile and become three columns from small; principles switch to two columns at medium. These page arrangements belong to About, not a mandatory template for other screens.

## Elevation & Depth

The system combines open surfaces with restrained control shadows. About's letter and principles remain flat; the shared fixed navigation gains translucent white, blur and shadow on scroll. Existing cards have soft shadows; do not infer that every content group needs a card.

## Shapes

Actions and navigation use full pills. Shared cards use gently rounded corners; the About letter remains rectangular and its principle rows use fine separators. Preserve the distinction between controls and reading surfaces.

## Components

### Buttons
Primary and ghost sliding pills carry a circular arrow disc. Hover swaps the label's side padding and moves the disc to the left while rotating its arrow. The compact navigation variant reduces height and disc size. About explicitly supplies blue keyboard focus outlines (2px) offset by (4px); retain these when reusing its actions.

### Cards / Containers
The shared light card has a white background, fine border, soft shadow and the card padding in frontmatter. About uses an open letter and divider rows instead of card containers.

### Navigation
The fixed navigation has a transparent initial state and a compact, blurred white pill after scrolling. Desktop links use small medium-weight text, a white selected pill, and subtle hover fills. Below the medium breakpoint, the menu button opens a full-screen light overlay. Footer links sit in a wide, divided grid.

### Chips
The existing badge primitive uses a full pill, small semibold text, fine border and a focus ring. Variants include dark default, pale secondary, destructive and outline. About does not use badges.

## Do's and Don'ts

### Do:
- **Do** retain Qadmas blue, the existing font families and minimal presentation.
- **Do** preserve visible keyboard focus and readable mobile paragraph alignment.
- **Do** reuse existing button and navigation behavior.

### Don't:
- **Don't** turn the About open-letter arrangement into a mandatory site-wide layout.
- **Don't** introduce new imagery or claims as part of documenting this system.

