---
target: portfolio page
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-13T02-12-26Z
slug: client-src-pages-home-tsx
---
# Portfolio Design Critique

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 2 | Timed hero reveals can temporarily remove essential context. |
| 2 | Match System / Real World | 2 | Technical language is credible but offers little translation for cross-disciplinary reviewers. |
| 3 | User Control and Freedom | 3 | Fixed anchors, back-to-top brand, and mobile close control provide clear exits. |
| 4 | Consistency and Standards | 3 | Visual system is coherent; action treatment varies across evidence records. |
| 5 | Error Prevention | 3 | Targets are explicit, but external destinations and unavailable work are not always distinguished. |
| 6 | Recognition Rather Than Recall | 3 | Desktop destinations are visible; mobile hides all six behind the menu. |
| 7 | Flexibility and Efficiency | n/a | Not material for an Experience-mode portfolio. |
| 8 | Aesthetic and Minimalist Design | 2 | Controlled visual world, but atmosphere occupies space that should establish proof. |
| 9 | Error Recovery | 1 | Broken or unavailable external artifacts have no visible recovery path. |
| 10 | Help and Documentation | n/a | Not required for this portfolio surface. |
| **Total** |  | **19/32** | **Acceptable — distinctive foundation, major evidence-path improvements needed.** |

## Design Specificity Verdict

**LLM assessment:** Strongly authored and unmistakably specific to computational biology, agentic research, and low-level systems. Monumental Kanit, mono readouts, the particle observatory, and the cyan/violet signal palette work as one world. The missed opportunity is structural: the world is more visible than the work. The first viewport could belong only to Adnan aesthetically, but it does not yet prove Adnan's value quickly enough.

**Deterministic scan:** The bundled detector returned `[]`: 0 findings, no rules or file locations. This supports the implementation's coherence and confirms there is no generic design-system drift in the target markup. The detector did not catch the experiential issues—CTA priority, scroll cost, or delayed evidence—that visual review exposed.

**Visual overlays:** No reliable user-visible overlay is available. Mutable injection preflight succeeded, but the detector live server failed automatic port discovery with `ERR_SOCKET_BAD_PORT` after reaching port 65536, so `detect.js` was not injected. Browser fallback evidence found no desktop horizontal overflow, one main landmark, one labeled primary navigation, one footer, a valid H1→H2/H3 hierarchy, and no unlabeled links or buttons.

## Overall Impression

The portfolio already has a rare, memorable point of view. Its single biggest opportunity is to make verifiable work—not cinematic atmosphere—the protagonist from the first five seconds.

## What's Working

- The visual language is unusually product-specific: biological particles, systems readouts, and monumental typography form a credible professional identity rather than a generic portfolio grid.
- Typography roles are disciplined: Kanit establishes scale and JetBrains Mono is largely reserved for literal technical metadata.
- Navigation semantics and interaction foundations are strong: labeled landmarks, visible destinations on desktop, a large mobile menu target, focus treatment, and direct anchors.

## Priority Issues

### [P1] Evidence is not the first-viewport protagonist

**Why it matters:** Recruiters, maintainers, and research reviewers arrive to verify ability. The desktop hero devotes most of its height to atmosphere; the primary proof remains below the fold.

**Fix:** Add one compact, verifiable proof surface to the hero—such as a featured project readout with repository, role, and concrete technical outcome—without turning it into a generic card. Preserve the particle field as environment, not payload.

**Suggested command:** `$impeccable bolder`

### [P1] Motion fragments the core message

**Why it matters:** Identity, proposition, and action can appear as separate transient states. Essential meaning should not depend on animation completion, especially for motion-sensitive visitors.

**Fix:** Treat name, proposition, and primary work action as one atomic authored reveal. Keep all essential content legible in the initial frame and use motion only to deepen the composition.

**Suggested command:** `$impeccable animate`

### [P1] Mobile delays the primary actions

**Why it matters:** At 390×844, the hero's vertical distribution can push “View selected work” and “Contact me” below the first viewport. A first-time visitor receives identity but no immediate next step.

**Fix:** Compress mobile hero spacing and keep the work action visible or strongly signposted in the initial viewport. Preserve breathing room by reducing the empty middle band rather than shrinking type indiscriminately.

**Suggested command:** `$impeccable adapt`

### [P2] Contact visually outranks inspection

**Why it matters:** The glowing contact pill dominates the quieter work link, contradicting the stated product principle to lead with inspectable evidence.

**Fix:** Make “View selected work” the primary visual action and demote contact to a restrained secondary control. Keep contact easy to find in navigation/footer.

**Suggested command:** `$impeccable layout`

### [P2] Project storytelling is scroll-expensive

**Why it matters:** Four 85vh sticky cards create a long commitment and make comparison difficult for reviewers who already know what they seek.

**Fix:** Preserve the cinematic stack but add a compact project index/readout or shorten the mobile stack so visitors can compare titles, domains, and destinations before entering the full narrative.

**Suggested command:** `$impeccable distill`

## Persona Red Flags

**Jordan — first-time recruiter:** The hero presents “agentic AI” and “low-level systems engineering” without a visible artifact or outcome. Later terms such as ARACNe and Kyber-768 establish depth but do not quickly translate into what was built and why it mattered. Jordan may leave before reaching proof.

**Priya — technical hiring manager or research reviewer:** Priya wants repositories, publications, contributions, and implementation detail. The dominant contact CTA, atmospheric hero, and long sticky project sequence delay the evidence she needs to evaluate depth.

**Sam — low-vision or motion-sensitive visitor:** Core meaning is split across timed fades over a living WebGL field. Reduced-motion support exists, but the composition still asks visitors to wait for essential hierarchy to assemble.

## Cognitive Load

Moderate: 3 of 8 checklist failures.

- **Chunking fails:** desktop navigation exposes six equal-priority destinations rather than a tighter group of four or fewer.
- **Visual hierarchy fails:** the hero can show identity, proposition, and actions as separate states.
- **Minimal choices fails:** six navigation choices precede two hero calls to action.
- Single focus, grouping, one-thing-at-a-time, working-memory demand, and progressive disclosure are otherwise sound.

Decision points above four options: six desktop navigation links and six expanded mobile-menu links. Project tags exceed four visual items in places, but they are informational rather than decisions.

## Emotional Journey

Arrival creates intrigue and technical confidence. Orientation then dips because the sparse hero delays concrete meaning. Credibility builds only after the visitor commits to scrolling. The project stack produces a cinematic peak, but its duration can become friction. The ending is personable and clear, though contact is emphasized earlier than the evidence that would earn it.

## Minor Observations

- “Project” should be “Projects” for a four-item collection.
- Navigation order differs from document order, weakening the mental map.
- The mobile role readout can wrap awkwardly around “IIIT-Delhi.”
- The purple code-style brand competes with the proposition for first attention.
- Non-interactive technology tags resemble buttons and compete with project actions.

## Questions to Consider

- What should convince a skeptical reviewer within 20 seconds, and can they see it without scrolling?
- Should contact ever be more visually urgent than inspecting the work?
- Can the observatory reveal a real artifact through its “telescope” in the first viewport?
- Could the project stack retain its cinematic character while enabling rapid comparison?
