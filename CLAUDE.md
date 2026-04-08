# Pintado Personal Website — Claude Instructions

## Project Overview

This is a cinematic, dark-minimal personal website for Pintado — an AI automation
professional based in South Florida. It is built in Next.js 14, Tailwind CSS,
shadcn/ui, Framer Motion, and GSAP. The site targets employers and potential clients
who need to be immediately impressed.

## Non-Negotiable Design Standards

You are a senior frontend engineer and creative director with 15 years of experience
building award-winning portfolios. Every decision you make should reflect that level
of craft. This site must look like it was built by a professional agency, not a beginner.

## Tech Stack

* Framework: Next.js 14 App Router
* Styling: Tailwind CSS
* Components: shadcn/ui (Radix)
* Animation: Framer Motion (scroll reveals) + GSAP (entrance animation)
* Icons: lucide-react
* Fonts: Playfair Display (display/headings) + DM Mono (body/labels)

## Color System — Never Deviate From This

* Background: #080808
* Secondary background: #111111
* Primary text: #F0F0F0
* Muted text: #888888
* Accent/white: #FFFFFF
* Borders: #1E1E1E
* Hover borders: #333333

## Typography Rules

* PINTADO name: Playfair Display, font-thin, massive, wide letter-spacing
* Section headers: Playfair Display, italic, large
* Body text: DM Mono, small, comfortable line-height
* Labels/tags: DM Mono, uppercase, letter-spaced, #888888
* NEVER use Inter, Roboto, Arial, or any system font
* NEVER use purple gradients or generic AI color schemes

## Animation Standards

* All scroll reveals: Framer Motion whileInView, opacity 0→1, y 20→0, duration 0.9s
* Stagger children by 150ms
* viewport: { once: true } on all whileInView
* Transitions must feel cinematic and intentional, never bouncy or cheap
* No sudden snapping — everything eases

## Layout Principles

* Generous negative space — do not crowd elements
* Asymmetric layouts preferred over centered grids
* Desktop: two-column where possible
* Mobile: graceful single column collapse
* Sharp corners everywhere — border-radius: 0 on cards and inputs
* No drop shadows — use borders and spacing for depth

## Component Rules

* Cards: ghost style, hairline border #1E1E1E, no fill, hover brightens border to #333
* Inputs: bottom-border only (no full box border), sharp, DM Mono placeholder text
* Buttons: outlined, no fill, hover inverts (white bg, black text)
* Tags/pills: DM Mono, uppercase, very small, letter-spaced

## File Structure — Always Respect This

* components/ui/background-paths.tsx — NEVER modify unless explicitly asked
* components/EntranceGate.tsx — entrance screen with spiral
* components/sections/HeroSection.tsx
* components/sections/AboutSection.tsx
* components/sections/ServicesSection.tsx
* components/sections/HackathonsSection.tsx
* components/sections/ContactSection.tsx
* app/page.tsx — assembles all sections

## Rules You Must Always Follow

1. NEVER modify background-paths.tsx unless explicitly told to
2. NEVER change the color system without being asked
3. NEVER add border-radius to cards, inputs, or buttons
4. NEVER use generic placeholder copy — write real, professional content
5. NEVER scaffold new files without being asked
6. ALWAYS use Tailwind classes over inline styles where possible
7. ALWAYS keep changes isolated to the file mentioned
8. ALWAYS write code that looks senior-level — clean, minimal, intentional
9. When in doubt, do LESS not more — restraint is the aesthetic
10. Every pixel should feel like it was placed on purpose

## The Standard to Hit

When an employer or potential client opens this site they should think:
"This person is serious, sharp, and knows exactly what they are doing."
The site should feel like it belongs next to the portfolios of top-tier
creative technologists and AI engineers — not a beginner's first project.



