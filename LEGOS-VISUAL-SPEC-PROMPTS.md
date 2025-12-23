# LEGOS Tetrad Analyzer — Visual Spec → Image Prompt Pack
## Mobile-First TUI OS (iPhone 14 / 390×844)

---

# 1) CANONICAL UI LAYOUT ANCHOR

```
┌─────────────────────────────────────────┐ ← Safe area top
│ ◎ [RING ●●●●○○○○○○○○ 12-slot] ? ⇆ ＋   │ ← Corner buttons
├─────────────────────────────────────────┤
│ ┌──────┐ ┌────────────┐ ┌──────┐        │
│ │CH 0  │ │ ACTIVE CH  │ │CH 2  │        │ ← 3 channel columns
│ │52px  │ │ FULL WIDTH │ │52px  │        │    (center = active)
│ │rail  │ │            │ │rail  │        │
│ │      │ │ ┌────────┐ │ │      │        │
│ │ ● 3  │ │ │ GRID   │ │ │ ● 1  │        │ ← GridSection
│ │ ● 1  │ │ │ 3×3    │ │ │      │        │    (macro default)
│ │      │ │ │ macro  │ │ │      │        │
│ │      │ │ └────────┘ │ │      │        │
│ │      │ │ ═══════════│ │      │        │ ← Resize bar
│ │      │ │ ┌────────┐ │ │      │        │
│ │      │ │ │CHAT    │ │ │      │        │ ← ChatStream
│ │      │ │ │●●●●    │ │ │      │        │    (dot rail side)
│ │      │ │ │::::::::│ │ │      │        │
│ │      │ │ │[TETRAD]│ │ │      │        │ ← Tetrad chips inline
│ │      │ │ │[INPUT ]│ │ │      │        │
│ │      │ │ └────────┘ │ │      │        │
│ └──────┘ └────────────┘ └──────┘        │
├─────────────────────────────────────────┤
│ [▼ Reactor Cascade ▼][✦][📸][🔴]       │ ← Global footer
└─────────────────────────────────────────┘ ← Safe area bottom
```

**Spacing Constants:**
- Safe area: 16px top/bottom, 8px sides
- Corner buttons: 48×48px, fixed corners
- Channel column: min-width 52px (collapsed), max 100vw (active)
- Grid cells: 9×9 total, macro 3×3 default (each ~100px)
- Touch targets: ≥44×44px all interactive elements
- Typography: 11-13px base (clamp), 8-9px labels, 7-8px lineage

---

# 2) SCREEN LIST (8 Required)

| ID | Screen Name | Focus |
|----|-------------|-------|
| 01 | MAIN_3CHANNELS_ACTIVE | Default view, center channel active |
| 02 | CHANNEL_GRID_VISIBLE | Macro 3×3 grid with "expand to 9×9" button |
| 03 | CHANNEL_GRID_FULL9X9 | Full 9×9 grid, entity types L/E/G/O/S/U visible |
| 04 | CHANNEL_GRID_COLLAPSED | Grid collapsed to 52px strip, chat emphasized |
| 05 | RAIL_COLLAPSED_MODE | 52px channel rail with badges + unread dots |
| 06 | OVERLAY_SNAPSHOTS | Bottom sheet: list, restore, pin-to-ring |
| 07 | OVERLAY_RING_MEMORY | Bottom sheet: 12 slots, pin/unpin, restore |
| 08 | OVERLAY_TETRAD | Lens selector + scope + example output |

---

# 3) WIREFRAME IMAGE PROMPTS

## Template: WIREPROMPT(screen_id)

```
Technical wireframe UI mockup for mobile app screen.
Screen: [SCREEN_ID] - [DESCRIPTION]
Device: iPhone 14 portrait (390×844px)
Style: Monochrome grayscale, thin black lines, white background
Typography: ALL CAPS LABELS, 10-12px sans-serif
Touch targets: Dashed 44×44px boxes around interactive elements
Annotations: Numbered callouts (1, 2, 3...) with legend at bottom
Grid: 9×9 underlying structure visible with dotted lines
Entity types in legend: L=Location, E=Entity, G=Goal, O=Obstacle, S=Shift, U=Solution
No decorative effects, no gradients, no shadows, no color
Lo-fi schematic, architect's blueprint style
```

---

### WIRE_01: MAIN_3CHANNELS_ACTIVE
```
Technical wireframe UI mockup for mobile app screen.
Screen: MAIN_3CHANNELS_ACTIVE - Three channel columns visible, center active
Device: iPhone 14 portrait (390×844px)

Layout:
- TOP BAR: Ring memory strip (12 circles), corner buttons ◎ ? ⇆ ＋
- CENTER: Three vertical channel columns
  - Left column: 52px collapsed rail, "CH 0" label, dot badges (●3 ●1)
  - Center column: Full width, "REACTOR CASCADE" header, scenario dropdown
  - Right column: 52px collapsed rail, "CH 1" label
- Center channel interior:
  - Macro 3×3 grid (cells 90×90px), expand button visible
  - Resize bar (═══)
  - Chat stream with message cards, dot rail on left edge
  - Input field with send button (→)
- FOOTER: Scenario selector dropdown, tetrad button ✦, snapshot 📸, ring 🔴

Annotations:
1. Ring memory strip - 12 slots
2. Collapsed channel rail - 52px
3. Macro grid - 3×3 default
4. Resize bar - drag to adjust
5. Chat message with tetrad chips
6. Global footer controls

Style: Monochrome, thin lines, ALL CAPS labels, dashed touch targets
No color, no decoration
```

### WIRE_02: CHANNEL_GRID_VISIBLE
```
Technical wireframe UI mockup for mobile app screen.
Screen: CHANNEL_GRID_VISIBLE - Macro 3×3 grid with expand affordance
Device: iPhone 14 portrait (390×844px)

Layout:
- Single active channel, full width
- GRID SECTION (50% height):
  - 3×3 macro grid visible
  - Each cell ~100×100px with entity symbol (E, L, G)
  - EXPAND BUTTON: ⛶ icon in top-right of grid, labeled "9×9"
  - Grid header: "GRID · MACRO 3×3"
- RESIZE BAR below grid
- CHAT SECTION (50% height):
  - Message list with collapse triangles
  - Tetrad chips after AI responses: [▲ ENHANCE] [▼ OBSOLESCE]

Annotations:
1. Expand to 9×9 button (⛶)
2. Macro cell with entity "E"
3. Grid collapse toggle
4. Tetrad chip in chat
5. Resize handle

Style: Monochrome wireframe, touch target boxes dashed
Legend: L=Location E=Entity G=Goal O=Obstacle S=Shift U=Solution
```

### WIRE_03: CHANNEL_GRID_FULL9X9
```
Technical wireframe UI mockup for mobile app screen.
Screen: CHANNEL_GRID_FULL9X9 - Full 9×9 grid with all entity types
Device: iPhone 14 portrait (390×844px)

Layout:
- Grid section expanded to 70% of screen height
- 9×9 GRID: 81 cells, each ~38×38px
  - Dotted grid lines
  - Sample entity placements:
    - (0,0): L "Factory"
    - (2,3): E "King Lear"
    - (4,4): G "Justice"
    - (6,2): O "Storm"
    - (3,7): S "Shift"
    - (8,8): U "Wisdom"
  - Occupied cells have bold borders
  - Selected cell has double border
- COLLAPSE BUTTON (▼) in header
- Chat section compressed to 30%
- Mini chat preview visible

Annotations:
1. Entity type L in cell (0,0)
2. Entity type E in cell (2,3)
3. Entity type G in cell (4,4)
4. Entity type O in cell (6,2)
5. Cell selection highlight
6. Collapse to macro button

Style: Monochrome, 1px lines, annotation arrows
Entity Legend at bottom: L=Location E=Entity G=Goal O=Obstacle S=Shift U=Solution
```

### WIRE_04: CHANNEL_GRID_COLLAPSED
```
Technical wireframe UI mockup for mobile app screen.
Screen: CHANNEL_GRID_COLLAPSED - Grid minimized, chat emphasized
Device: iPhone 14 portrait (390×844px)

Layout:
- GRID STRIP: 52px height, horizontal scrollable mini-preview
  - Shows 9 compressed cells as small squares
  - Active cell highlighted
  - EXPAND BUTTON (⛶) on right
- CHAT SECTION: 85% of remaining height
  - Multiple message cards visible
  - User message (green left border)
  - Assistant message (accent left border)
  - System message (muted left border)
  - Tetrad chip row after assistant response:
    [▲ ENHANCE] [↺ RETRIEVE] [▼ OBSOLESCE] [⇄ REVERSE]
- INPUT SECTION: Text area + send button

Annotations:
1. Collapsed grid strip (52px)
2. Grid expand button
3. User message card
4. Assistant message with tetrad chips
5. Input field (44px height)
6. Send button (44×44px)

Style: Wireframe, no fills, dashed touch targets
```

### WIRE_05: RAIL_COLLAPSED_MODE
```
Technical wireframe UI mockup for mobile app screen.
Screen: RAIL_COLLAPSED_MODE - 52px channel rail with badges
Device: iPhone 14 portrait (390×844px)

Layout:
- LEFT RAIL (52px wide):
  - Channel number badges stacked vertically
  - CH 0: Circle with "0", dot badge showing "3" unread
  - CH 1: Circle with "1", dot badge showing "1" unread
  - CH 2: Circle with "2", no badge (read)
  - ADD CHANNEL button (+) at bottom, dashed border
  - Each badge is 24×24px, badge dots 12×12px
- MAIN AREA shows active channel content
- Visual: Rail has subtle left border accent

Annotations:
1. Channel number indicator
2. Unread count badge
3. Active channel highlight
4. Add channel button
5. Rail border

Style: Monochrome wireframe
Badge legend: ● = unread messages
```

### WIRE_06: OVERLAY_SNAPSHOTS
```
Technical wireframe UI mockup for mobile app screen.
Screen: OVERLAY_SNAPSHOTS - Bottom sheet overlay
Device: iPhone 14 portrait (390×844px)

Layout:
- BACKGROUND: Main UI dimmed (50% opacity overlay)
- BOTTOM SHEET (70% height, slides up from bottom):
  - HEADER: "SNAPSHOTS" title, close button (×)
  - STATUS: "4 snapshots stored"
  - SNAPSHOT LIST (scrollable):
    - Item 1: ID "SHOT_A2F3", scenario "Reactor Cascade", timestamp
      - Buttons: [RESTORE] [PIN TO RING] [DELETE ×]
    - Item 2: ID "SHOT_B8C1", scenario "AI Alignment"
      - Buttons: [RESTORE] [PIN TO RING] [DELETE ×]
    - Item 3: Auto-save indicator
  - FOOTER: [CREATE SNAPSHOT] primary button

Annotations:
1. Overlay backdrop (tap to close)
2. Drag handle (pill shape)
3. Snapshot item card
4. Restore button
5. Pin to ring button
6. Create new button

Style: Wireframe, sheet has rounded top corners
```

### WIRE_07: OVERLAY_RING_MEMORY
```
Technical wireframe UI mockup for mobile app screen.
Screen: OVERLAY_RING_MEMORY - Bottom sheet with 12 slots
Device: iPhone 14 portrait (390×844px)

Layout:
- BOTTOM SHEET (60% height):
  - HEADER: "RING MEMORY · 12 SLOTS"
  - RING GRID: 4×3 grid of circular slots
    - Slot 0: Filled, "📍 Reactor", pinned icon
    - Slot 1: Filled, "AI Align", no pin
    - Slot 2-11: Empty slots (dashed circles)
    - Each slot 60×60px with label below
  - CONTEXT CONTROLS:
    - [ALL STREAM] [ANCHOR CHANNEL] [MAINLINE] toggle buttons
  - CONTEXT WINDOW: Text preview of selected ring content
  - ACTIONS: [LOCK MAINLINE] [CLOSE]

Annotations:
1. Filled ring slot
2. Empty ring slot (dashed)
3. Pin indicator (📌)
4. Context mode toggles
5. Context preview window
6. Lock mainline action

Style: Wireframe, circles for slots
```

### WIRE_08: OVERLAY_TETRAD
```
Technical wireframe UI mockup for mobile app screen.
Screen: OVERLAY_TETRAD - Lens selector overlay
Device: iPhone 14 portrait (390×844px)

Layout:
- BOTTOM SHEET (55% height):
  - HEADER: "MCLUHAN TETRAD LENS"
  - LENS GRID (2×2):
    - [▲ ENHANCE] "What does it amplify?"
    - [▼ OBSOLESCE] "What becomes obsolete?"
    - [↺ RETRIEVE] "What does it bring back?"
    - [⇄ REVERSE] "What does it flip into?"
  - Each lens button 150×80px
  - CURRENT LENS indicator: "ACTIVE: ENHANCE"
  - SCOPE TOGGLE: [GLOBAL] [THIS CHANNEL]
  - EXAMPLE OUTPUT: Preview of tetrad analysis text

Annotations:
1. Enhance lens button
2. Obsolesce lens button
3. Retrieve lens button
4. Reverse lens button
5. Current lens indicator
6. Scope toggle
7. Example output preview

Style: Wireframe, bold icons for tetrad symbols
```

---

# 4) FINAL UI IMAGE PROMPTS

## Template: FINALPROMPT(screen_id, theme)

```
High-fidelity mobile app UI screenshot.
Screen: [SCREEN_ID] - [DESCRIPTION]
Device: iPhone 14 portrait (390×844px), no phone frame
Theme: [THEME_NAME]
  - Background: [BG_COLOR]
  - Panel: [PANEL_COLOR]
  - Border: [BORDER_COLOR]
  - Text: [TEXT_COLOR]
  - Text-muted: [MUTED_COLOR]
  - Accent: [ACCENT_COLOR]
  - Success: [SUCCESS_COLOR]
  - Danger: [DANGER_COLOR]
  - Focus: [FOCUS_STYLE]

Style: Crisp UI screenshot, actual app appearance
Typography: Courier New or monospace, 11-13px base
All text must be legible (minimum 10px)
Touch targets: 44×44px minimum
No 3D effects, no illustration, no phone mockup frame
Render as authentic operating system interface

[ADDITIONAL SCREEN-SPECIFIC DETAILS]
```

---

## Theme Definitions

### CRT_GREEN
```
Background: #03180c (deep forest black)
Panel: #052010 (dark green)
Panel-dark: #03140d (near-black green)
Border: #0c3a23 (dark green line)
Border-light: #1b6e3e (brighter green)
Text: #aef3c1 (phosphor green)
Text-muted: #5ea275 (dim green)
Accent: #56ff9f (bright phosphor)
Success: #56ff9f (same as accent)
Danger: #ff5c7c (warning red)
Focus: Green glow, 0 0 12px #56ff9f
Cultural overlay: Subtle green-cyan color wash
```

### PARCHMENT
```
Background: #f6efdd (cream paper)
Panel: #efe4c8 (warm beige)
Panel-dark: #e4d3b0 (darker parchment)
Border: #cdb181 (tan line)
Border-light: #b99158 (gold-brown)
Text: #3b3322 (dark ink)
Text-muted: #7b6d4d (faded ink)
Accent: #d17b24 (burnt orange)
Success: #2e8f4d (forest green)
Danger: #c2463b (rust red)
Focus: Orange outline, 2px solid
Cultural overlay: Sepia tints
```

### THOUSAND_LIVES
```
Background: #050507 (pure black)
Panel: rgba(28, 12, 18, 0.92) (dark crimson)
Panel-dark: rgba(18, 8, 12, 0.92) (near-black)
Border: #2f121a (dark red line)
Border-light: #812934 (crimson)
Text: #f6f2ef (warm white)
Text-muted: #d3cdc9 (gray)
Accent: #ff3d4e (blood red)
Success: #f8d66a (gold)
Danger: #ff6d7a (bright red)
Focus: Red glow with gold highlight
Cultural overlay: Red-gold color gradients
```

---

## CRT_GREEN Theme Prompts (8)

### FINAL_01_CRT: MAIN_3CHANNELS_ACTIVE
```
High-fidelity mobile app UI screenshot.
Screen: MAIN_3CHANNELS_ACTIVE - Three channel columns, center active
Device: iPhone 14 portrait (390×844px), no phone frame
Theme: CRT_GREEN terminal aesthetic

Colors:
- Background: #03180c
- Panels: #052010 with #0c3a23 borders
- Text: #aef3c1 phosphor green
- Accent: #56ff9f bright green glow
- Muted: #5ea275

Layout:
- Top bar with ring memory (12 dots, 3 filled with green glow)
- Three vertical channel columns
- Left/right columns collapsed to 52px rail (dark green, dot badges)
- Center column active: "REACTOR CASCADE" scenario
- Macro 3×3 grid with entity symbols (E, L, G glowing green)
- Chat stream below with message cards (green borders)
- Tetrad chips visible: [▲ ENHANCE] in bright green
- Footer: dropdown, ✦ button glowing

Style: CRT monitor phosphor glow, scanline subtle hint
All text Courier New, crisp and legible
Touch targets visible as subtle green outlines
```

### FINAL_02_CRT: CHANNEL_GRID_VISIBLE
```
High-fidelity mobile app UI screenshot.
Screen: CHANNEL_GRID_VISIBLE - Macro 3×3 grid prominent
Device: iPhone 14 portrait, no phone frame
Theme: CRT_GREEN

Grid section visible:
- 3×3 macro grid, cells 100×100px
- Entity "E" in cell (1,1) with green border glow
- Entity "L" in cell (0,0) dimmer
- Expand button (⛶) glowing in corner
- Grid header: "GRID · MACRO 3×3" in phosphor green

Chat section below:
- Assistant message with tetrad chips inline
- [▲ ENHANCE] [↺ RETRIEVE] chips glowing

Colors: Deep green background, bright green accents
Focus: Active cell has outer glow #56ff9f
```

### FINAL_03_CRT: CHANNEL_GRID_FULL9X9
```
High-fidelity mobile app UI screenshot.
Screen: CHANNEL_GRID_FULL9X9 - Full 9×9 grid with entities
Device: iPhone 14 portrait, no phone frame
Theme: CRT_GREEN

Grid expanded to 70% screen:
- 81 cells visible, 38×38px each
- Entity placements with symbols:
  - L "Factory" at (0,0) - location icon
  - E "King Lear" at (2,3) - entity icon, brightest
  - G "Justice" at (4,4) - goal icon
  - O "Storm" at (6,2) - obstacle icon
  - S "Shift" at (3,7) - shift icon
  - U "Wisdom" at (8,8) - solution icon
- Occupied cells have brighter borders
- Selected cell (2,3) has pulsing glow animation frozen

Cultural overlay: Subtle cyan-green wash on cells
Chat compressed below, preview visible
Collapse button (▼) in header
```

### FINAL_04_CRT: CHANNEL_GRID_COLLAPSED
```
High-fidelity mobile app UI screenshot.
Screen: CHANNEL_GRID_COLLAPSED - Grid minimized strip
Device: iPhone 14 portrait, no phone frame
Theme: CRT_GREEN

Layout:
- Grid strip: 52px horizontal bar at top
- Mini-cells showing grid state (9 tiny squares)
- Expand button (⛶) on right, glowing
- Chat section takes 85% of screen
- Multiple messages visible:
  - User: "What does this enhance?" (green-left border)
  - Assistant: Analysis text (bright border)
  - Tetrad chips: [▲ ENHANCE] [▼ OBSOLESCE] [↺ RETRIEVE] [⇄ REVERSE]
- Input field at bottom with cursor blinking

Style: Phosphor green on black, messages have subtle glow
```

### FINAL_05_CRT: RAIL_COLLAPSED_MODE
```
High-fidelity mobile app UI screenshot.
Screen: RAIL_COLLAPSED_MODE - Channel rail 52px with badges
Device: iPhone 14 portrait, no phone frame
Theme: CRT_GREEN

Left rail visible:
- 52px wide dark green strip
- Channel badges stacked:
  - "0" with red badge "3" (unread)
  - "1" with red badge "1" (unread)  
  - "2" no badge (all read)
- Active channel (1) has green ring glow
- Add channel button (+) dashed green at bottom

Main area shows active channel content
Rail has subtle phosphor glow on left edge
```

### FINAL_06_CRT: OVERLAY_SNAPSHOTS
```
High-fidelity mobile app UI screenshot.
Screen: OVERLAY_SNAPSHOTS - Bottom sheet overlay
Device: iPhone 14 portrait, no phone frame
Theme: CRT_GREEN

Overlay state:
- Background dimmed 50% with blur
- Bottom sheet slides up, 70% height
- Rounded top corners, green border glow
- Header: "SNAPSHOTS" in bright green
- Snapshot list:
  - SHOT_A2F3 / Reactor Cascade / 2 min ago
    [RESTORE] [PIN TO RING] [×]
  - SHOT_B8C1 / AI Alignment / 15 min ago
    [RESTORE] [PIN TO RING] [×]
- [CREATE SNAPSHOT] button at bottom, bright green fill

Sheet has phosphor glow around edges
Buttons have hover-ready appearance
```

### FINAL_07_CRT: OVERLAY_RING_MEMORY
```
High-fidelity mobile app UI screenshot.
Screen: OVERLAY_RING_MEMORY - 12-slot ring grid
Device: iPhone 14 portrait, no phone frame
Theme: CRT_GREEN

Bottom sheet:
- "RING MEMORY · 12 SLOTS" header
- 4×3 grid of circular slots:
  - Slot 0: Filled, "Reactor" label, 📌 pinned, bright glow
  - Slot 1: Filled, "AI Align", dimmer
  - Slots 2-11: Empty (dashed circles, dark)
- Context mode toggles: [ALL STREAM] active/glowing
- Context window with green text on black
- [LOCK MAINLINE] [CLOSE] buttons

Green phosphor aesthetic throughout
Filled slots pulse subtly
```

### FINAL_08_CRT: OVERLAY_TETRAD
```
High-fidelity mobile app UI screenshot.
Screen: OVERLAY_TETRAD - Tetrad lens selector
Device: iPhone 14 portrait, no phone frame
Theme: CRT_GREEN

Bottom sheet:
- "MCLUHAN TETRAD LENS" header in bright green
- 2×2 lens grid:
  - [▲ ENHANCE] - "What does it amplify?" - ACTIVE, glowing
  - [▼ OBSOLESCE] - "What becomes obsolete?"
  - [↺ RETRIEVE] - "What does it bring back?"
  - [⇄ REVERSE] - "What does it flip into?"
- Each button 150×80px with icon and label
- Current: "ACTIVE: ENHANCE" indicator glowing
- Scope: [GLOBAL] [THIS CHANNEL] toggle
- Preview text of tetrad analysis visible

Active lens has pulsing green glow
Other lenses have subtle borders
```

---

## PARCHMENT Theme Prompts (8)

### FINAL_01_PARCHMENT: MAIN_3CHANNELS_ACTIVE
```
High-fidelity mobile app UI screenshot.
Screen: MAIN_3CHANNELS_ACTIVE
Device: iPhone 14 portrait, no phone frame
Theme: PARCHMENT manuscript aesthetic

Colors:
- Background: #f6efdd cream
- Panels: #efe4c8 beige
- Text: #3b3322 dark ink
- Accent: #d17b24 burnt orange
- Borders: #cdb181 tan

Layout: Same as CRT version
- Three columns, center active
- Ring memory (12 circles, sepia tones)
- Macro 3×3 grid with ink-style entity symbols
- Chat with manuscript-style cards
- Tetrad chips: [▲ ENHANCE] in burnt orange

Style: Old manuscript, warm paper texture implied
Typography: Serif hints in headers, mono in body
No harsh edges, soft shadows
```

### FINAL_02_PARCHMENT: CHANNEL_GRID_VISIBLE
```
[Same layout as CRT_02, PARCHMENT colors]
- Grid cells with sepia borders
- Entity symbols as calligraphic icons
- Orange accent on active cell
- Paper texture background
```

### FINAL_03_PARCHMENT: CHANNEL_GRID_FULL9X9
```
[Same layout as CRT_03, PARCHMENT colors]
- 9×9 grid on cream background
- Entity types with manuscript-style symbols
- Selection has orange border
- Cultural overlay: Sepia wash gradients
```

### FINAL_04_PARCHMENT: CHANNEL_GRID_COLLAPSED
```
[Same layout as CRT_04, PARCHMENT colors]
- Collapsed grid strip in tan
- Chat messages on cream cards
- Tetrad chips: burnt orange fills
```

### FINAL_05_PARCHMENT: RAIL_COLLAPSED_MODE
```
[Same layout as CRT_05, PARCHMENT colors]
- Channel rail in dark beige
- Badges in rust red
- Active channel: orange ring
```

### FINAL_06_PARCHMENT: OVERLAY_SNAPSHOTS
```
[Same layout as CRT_06, PARCHMENT colors]
- Bottom sheet on cream
- Cards with tan borders
- Buttons: orange accent
```

### FINAL_07_PARCHMENT: OVERLAY_RING_MEMORY
```
[Same layout as CRT_07, PARCHMENT colors]
- Ring slots as sepia circles
- Filled slots: dark ink
- Context window: cream with brown text
```

### FINAL_08_PARCHMENT: OVERLAY_TETRAD
```
[Same layout as CRT_08, PARCHMENT colors]
- Lens buttons on cream
- Active lens: burnt orange fill
- Icons: calligraphic style
```

---

## THOUSAND_LIVES Theme Prompts (8)

### FINAL_01_THOUSAND: MAIN_3CHANNELS_ACTIVE
```
High-fidelity mobile app UI screenshot.
Screen: MAIN_3CHANNELS_ACTIVE
Device: iPhone 14 portrait, no phone frame
Theme: THOUSAND_LIVES cinematic dark

Colors:
- Background: #050507 pure black
- Panels: rgba(28, 12, 18, 0.92) dark crimson
- Text: #f6f2ef warm white
- Accent: #ff3d4e blood red
- Success: #f8d66a gold

Layout: Same as CRT version
- Three columns with crimson glow
- Ring memory with red-gold accents
- Grid with dramatic red highlights
- Chat with film noir aesthetic
- Tetrad chips: [▲ ENHANCE] red with gold icon

Style: Cinematic, high contrast
Red glow on focus elements
Gold for success/positive states
```

### FINAL_02_THOUSAND: CHANNEL_GRID_VISIBLE
```
[Same layout, THOUSAND_LIVES colors]
- Grid cells with crimson borders
- Active cell: Red glow with gold accent
- Entity symbols in warm white
```

### FINAL_03_THOUSAND: CHANNEL_GRID_FULL9X9
```
[Same layout, THOUSAND_LIVES colors]
- 9×9 grid dramatic lighting
- Entity types with red-gold color coding
- Cultural overlay: Red-gold gradients
- Processing state on one cell: pulsing red animation frozen
```

### FINAL_04_THOUSAND: CHANNEL_GRID_COLLAPSED
```
[Same layout, THOUSAND_LIVES colors]
- Grid strip: crimson bar
- Chat: high contrast white on black
- Tetrad chips: red fills with gold icons
```

### FINAL_05_THOUSAND: RAIL_COLLAPSED_MODE
```
[Same layout, THOUSAND_LIVES colors]
- Rail: dark crimson
- Badges: bright red
- Active: gold ring highlight
```

### FINAL_06_THOUSAND: OVERLAY_SNAPSHOTS
```
[Same layout, THOUSAND_LIVES colors]
- Sheet: crimson gradient
- Cards: black with red borders
- CREATE button: red with gold text
```

### FINAL_07_THOUSAND: OVERLAY_RING_MEMORY
```
[Same layout, THOUSAND_LIVES colors]
- Ring slots: crimson circles
- Filled: red glow
- Pinned: gold accent
```

### FINAL_08_THOUSAND: OVERLAY_TETRAD
```
[Same layout, THOUSAND_LIVES colors]
- Lens grid: dramatic red buttons
- Active lens: #ff3d4e with pulsing glow
- Gold accents on tetrad symbols
```

---

# 5) CONSISTENCY CONTROLS

## Layout Rules
- Use the same layout anchor across all 24 final prompts
- Keep component positions identical between wireframes and finals
- Grid is always 9×9 underlying, macro 3×3 default view
- Channel column is 52px when collapsed, full-width when active

## Typography Rules
- Base: 11-13px monospace (Courier New)
- Labels: 8-9px uppercase
- Headers: 12-14px bold
- All text must be legible (no microtext below 8px)

## Spacing Rules
- Safe areas: 16px top/bottom, 8px sides
- Touch targets: ≥44×44px
- Grid cells: macro ~100px, full ~38px
- Consistent 8px gaps between elements

## Content Rules
- Scenario names: "Reactor Cascade", "AI Alignment" only
- Entity types: L=Location, E=Entity, G=Goal, O=Obstacle, S=Shift, U=Solution
- Entity examples: "King Lear", "Storm", "Justice", "Factory", "Wisdom"
- No lore text, no marketing copy
- Text must look OS-functional, not decorative

## Style Rules
- No phone mockup frames
- No 3D effects
- No illustration style
- Crisp UI screenshot appearance
- Focus states visible but not overwhelming

## Processing State
- Show on exactly ONE screen per theme: CHANNEL_GRID_FULL9X9
- Visual: Pulsing cell or letter-dance animation (frozen frame)
- Indicates active AI composition

---

# APPENDIX: Extra-Tight Render Instruction

Add this line to every prompt if your image model struggles:

> "Render as a UI screenshot. Do not stylize. Do not draw a phone. Do not add background environment. Avoid tiny text. Prioritize clarity over mood. Sharp edges, no blur except designated focus glow."

---

# APPENDIX: Model-Specific Syntax

## Midjourney
```
/imagine prompt: [FULL PROMPT TEXT] --ar 9:19 --style raw --no phone frame, 3d, illustration
```

## DALL·E
```
[FULL PROMPT TEXT]
Add: "Digital UI mockup, flat design, screenshot style"
```

## Flux/SDXL
```
Positive: [FULL PROMPT TEXT]
Negative: phone mockup, hand holding phone, 3d render, illustration, watercolor, painting, blurry, low resolution
```

---

END OF PROMPT PACK
