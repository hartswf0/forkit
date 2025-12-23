# Thick Data: The 48 Ethical Paradoxes
**Corpus Version:** v2.1.0 ("Fork Cascade")
**File:** `thick_data_merged.js`

## Overview
This dataset contains **48 high-fidelity ethical dilemmas**, or "Thick Data" scenarios. Unlike standard "Trolley Problems" which are abstract and context-free (thin), these scenarios are **context-rich**, engineered to exploit the ambiguity of human moral reasoning.

Each scenario is a "Fork Paradox"—a situation where two competing ethical frameworks (e.g., Utilitarianism vs. Deontology) collide, forcing a decision under pressure.

## Schema Structure
The data is structured as a hierarchical tree of "Turns" or "Nodes".

```javascript
{
  "scenario_id": "THICK_CASCADE_001",
  "title": "Petrov's Five Minutes — Full Thick Cascade",
  "branches": [ ... ], // Flat list of all nodes
  "root": {
      "branch_id": "T0",
      "timestamp": "September 26, 1983...",
      "thick_description": {
          "setting": "Serpukhov-15, the nuclear early warning bunker...",
          "sensory": { ... },
          "internal_monologue": "Five missiles. Only five..."
      },
      "entities_present": ["Petrov", "23 operators"],
      "branches": ["T1", "T2"] // IDs of next options
  }
}
```

### Key Fields
-   **`thick_description`**: The narrative core. Contains `setting`, `sensory` (sight, sound, smell), and `internal_monologue`. This provides the "emotional texture" needed for meaningful decision-making.
-   **`immediate_consequence`**: The direct result of a choice (e.g., "The looping stops. Silence.").
-   **`decider`**: The persona currently in control (e.g., "Lt. Col. Stanislav Petrov", "The Train Operator").

## The 4 Systems
The paradoxes are categorized into 4 systemic tensions:

1.  **System 1 (Hot/Fast):** Impulse, survival, fear.
2.  **System 2 (Cold/Slow):** logic, protocol, calculation.
3.  **Deontology (Rules):** "Do not cross the line."
4.  **Utilitarianism (Outcome):** "Save the most lives."

## Usage in Runtime
-   **`fork-cascade-viz.html`**: Uses the dataset to build a navigable decision tree.
-   **`ethnome.html`**: Uses the root node to present A/B choices in a 3D environment.
-   **`fork-lever.html`**: (Upcoming) Will use the `immediate_consequence` to drive physical track switching.

## License
Proprietary "Thick Data" corpus. (c) 2024 Fork Cascade Research.
