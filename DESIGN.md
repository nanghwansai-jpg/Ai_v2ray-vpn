---
name: Copper Compass
colors:
  surface: '#101418'
  surface-dim: '#101418'
  surface-bright: '#36393f'
  surface-container-lowest: '#0a0f13'
  surface-container-low: '#181c21'
  surface-container: '#1c2025'
  surface-container-high: '#262a2f'
  surface-container-highest: '#31353a'
  on-surface: '#e0e2e9'
  on-surface-variant: '#dac2b7'
  inverse-surface: '#e0e2e9'
  inverse-on-surface: '#2d3136'
  outline: '#a28c83'
  outline-variant: '#54433b'
  surface-tint: '#ffb690'
  primary: '#ffb690'
  on-primary: '#552100'
  primary-container: '#d07b4d'
  on-primary-container: '#4a1c00'
  inverse-primary: '#924b20'
  secondary: '#f3bc7d'
  on-secondary: '#472a00'
  secondary-container: '#67410c'
  on-secondary-container: '#e4ae71'
  tertiary: '#c1c7cf'
  on-tertiary: '#2b3138'
  tertiary-container: '#8b9199'
  on-tertiary-container: '#242a31'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcb'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#75340a'
  secondary-fixed: '#ffddb9'
  secondary-fixed-dim: '#f3bc7d'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#643f0a'
  tertiary-fixed: '#dde3ec'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#101418'
  on-background: '#e0e2e9'
  surface-variant: '#31353a'
  steel-base: '#2C3035'
  tray-surface: '#3F454C'
  highlight-bevel: '#5A626C'
  shadow-deep: '#0E1013'
  deep-ink: '#06070A'
  copper-needle: '#C87547'
  copper-highlight: '#E8C99A'
  copper-bevel: '#7A4A1F'
  copper-glow: '#E8B274'
  engrave-light: '#9AA1A8'
  status-red-led: '#E53935'
  online-green-led: '#4CAF50'
  offline-border: '#B89A5C'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  telemetry-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.05em
  telemetry-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.16em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the tactile rigor of a precision analog instrument console fused with modern cryptographic networking. Inspired by nautical brass compasses, avionics telemetry consoles, and brushed-steel laboratory measurement hardware, the interface establishes an emotional tone of absolute structural permanence, security, and mechanical certainty.

The aesthetic philosophy is **Tactile / Skeuomorphic Precision**. Rather than flattening UI elements into immaterial shapes, every interface layer exists in physical space:
- Recessed steel trays machined into deep chassis ground.
- Top-lit 45-degree chamfers and metallic bevel cuts.
- Burnished copper instrumentation dials and embossed physical switchgear.
- Optoelectronic LED diodes and warm filament luminous auras.

The target audience encompasses network engineers, privacy specialists, and tech enthusiasts who appreciate deliberate mechanical craft, explicit tactile state feedback, and telemetry-grade data density over ephemeral digital abstraction.

## Colors

The palette establishes an authentic metallic dichotomy between cool, dark brushed steel and warm, burnished mechanical copper.

### Metal Chassis Foundations
- **Chassis & Base (`#2C3035`)**: The core brushed structural faceplate across all toolbars and views.
- **Tray Surface (`#3F454C`)**: Intermediate metal plate elevation used inside milled cavities and grouped functional modules.
- **Deep Cavity (`#06070A` & `#0E1013`)**: The absolute baseline; used for milled interior drop shadows, slot insets, and unlit CRT background wells.
- **Specular Steel Bevel (`#5A626C`)**: Top and left edge highlight lines simulating light striking a 45-degree chamfer.

### Instrumentation & Copper Accents
- **Burnished Copper Needle (`#C87547`)**: Primary visual vector for live active indicators, active instrument needles, and authoritative brand titling.
- **Copper Glow & Filament (`#E8B274`)**: High-luminance radial falloff around active power switches, connected states, and energetic badges.
- **Copper Specular & Shade (`#E8C99A` & `#7A4A1F`)**: Two-tone structural beveling pairing bright rim reflections with dark mechanical brass shadows.

### Diodes & Hardware Status
- **Telemetry Readout (`#9AA1A8`)**: Stamped and engraved technical text with tactile depth.
- **Diodes (`#4CAF50`, `#E53935`, `#B89A5C`)**: Convex lens indicators displaying instantaneous machine connection states.

## Typography

The typographic strategy balances raw industrial telemetry with structural clarity through three distinct type families:

1. **Space Grotesk (Headings & Gauges)**: Carries mathematical angularity and retro-futuristic chassis branding. Headers should lean into high contrast, rendered with tight tracking and copper gradient fills.
2. **Hanken Grotesk (Body & Configuration)**: Ensures high-density readability across network configuration manifests, log readouts, and parameter forms.
3. **JetBrains Mono (Telemetry & Engravings)**: Simulates stamped sheet-metal type, numeric data streams, packet counters, and millisecond latency timers.

Text intended to simulate stamped metal (`#9AA1A8`) must use `label-caps` or `label-micro` in all-caps with positive tracking and a crisp 1px drop-shadow (`0 1px 0 #06070A`) to emulate physical stamping.

## Layout & Spacing

The interface utilizes a rigid modular layout inspired by physical 19-inch rack units and cockpit instrument clusters.

### Spatial Mechanics
- **Layout Approach**: Fluid containment grid centered inside a maximum 960px master console shell. On mobile viewports (under 768px), the layout compresses into a unified vertical column, preserving instrument dial sizing via an adaptive 3-column cluster that collapses gracefully.
- **Rhythm & Grid**: Built strictly upon a 4px/8px industrial metric cadence. Modules sit snugly inside milled steel trays separated by strict `space-md` gaps.
- **Cluster Hierarchy**: The primary interface is anchored by a three-column mechanical instrument grouping:
  - Left: 270-degree Latency Ping Gauge.
  - Center: Master Recessed Power Actuator.
  - Right: 270-degree Throughput Rate Dial.

## Elevation & Depth

Depth in this design system is physical and directional, calculated from an overhead light source at 90 degrees with a slight 45-degree top-left bias. Surfaces do not float ambiguously—they are either milled inward (cavities) or machined outward (keycaps, dials, bezels).

### Depth Levels
1. **Cavity / Well (Negative Depth)**:
   - Base canvas: `#2C3035`.
   - Box-shadow: `inset 0 3px 6px #06070A, inset 0 1px 2px #0E1013, 0 1px 0 #5A626C`.
   - Used for the steel tray backgrounds, gauge wells, and inset toggle tracks.

2. **Ground Plate (Level 0)**:
   - Primary surface: `#3F454C`.
   - Outlines: 1px continuous border with `#0E1013` at bottom/right and `#5A626C` at top/left to construct an authentic metallic chamfer.

3. **Raised Keycap / Dial (Level 1)**:
   - Surface: Radial or vertical gradient from `#3F454C` to `#2C3035`.
   - Shadows: `0 4px 8px #06070A, 0 1px 2px #0E1013, inset 0 1px 0 #5A626C`.
   - Active press transition: Translates `1px` downward, collapsing outer shadows into a tight inset cavity shadow.

4. **Filament Luminous Aura (Level 2 Glow)**:
   - Engaged state around the central power actuator and active copper nodes.
   - Illumination: Dual outer glow using `0 0 24px rgba(232, 178, 116, 0.4), 0 0 48px rgba(200, 117, 71, 0.2)`.

## Shapes

The geometric framework follows machined metal specifications: industrial equipment avoids purely rounded cartoon aesthetics in favor of tight, precision-cut corners punctuated by purposeful functional discs.

- **Primary Geometry (`roundedness: 1`)**: Standard buttons, cards, steel trays, and input modules use a tight `0.25rem` (4px) or `0.5rem` (8px) radius with chamfered visual borders.
- **Instrument Circulars (100% / Discs)**: Dials, master actuation power buttons, and LED indicator lenses remain pristine 360-degree radial geometries to mimic machined analog gauges.
- **Recessed Control Pills**: Sub-navigation racks and status chips use full pill radiuses (`rounded-xl` or 9999px) paired with deep inner shadows to simulate stamped metal trackways.

## Components

### Buttons & Actuators
- **Master Center Power Button**:
  - Circular disc with a concentric brushed-metal finish.
  - Machined copper perimeter ring (`#7A4A1F` to `#E8C99A`).
  - Center features an embossed lightning glyph with tactile light edge.
  - Hover triggers an ambient warmth; active state generates a radiant `#E8B274` radial glow and depresses 2px inward.
- **Tactile Keycaps**:
  - Compact rectangular buttons with an engraved bevel.
  - Text uses `#9AA1A8` (`label-caps`), stamped with inset text-shadow.

### Gauges & Needle Instrumentation
- **270° Sweep Dials (Ping & Throughput)**:
  - Inset into a circular dark tray well (`#06070A`).
  - Circular tick marks stamped every 15 degrees in `#5A626C`.
  - Tapered analog needle rendered in `#C87547` with a central pivot cap highlighted in `#E8C99A`.
  - Center hub features real-time digital numeric readouts in `telemetry-md` (`JetBrains Mono`).

### Status LED Indicators
- **Optoelectronic Diodes**:
  - 8px convex circular lenses set inside a 10px `#0E1013` recessed bezel.
  - Connected: `#4CAF50` with `0 0 8px #4CAF50` radial bloom.
  - Disconnected: `#E53935` with `0 0 8px #E53935` radial bloom.
  - Idle / Standby: Muted amber `#B89A5C`.

### Inset Trays & Cards (`SteelTray`)
- Machined recessed containment zones with a `#3F454C` surface.
- Edges defined by a 1px double chamfer: bright `#5A626C` top bevel line, deep `#06070A` cavity shadow below.
- Used to group routing settings, transport protocol selections (VLESS, VMess, Trojan), and real-time packet monitors.

### Inputs & Terminal Fields
- Inset into dark cavities (`#0E1013`) with `#06070A` fill.
- Caret and active text highlighted in `#E8C99A`.
- Selection border turns `#C87547` with an ambient copper inner glow on focus.

### Navigation Pill
- Recessed steel trackway containing flush metal tabs.
- Active tab features a raised brushed plate finish (`#3F454C`) with a crisp `#C87547` indicator notch.