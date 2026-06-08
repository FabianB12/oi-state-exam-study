# Callout Validation Report

Validation date: 2026-04-26

## Scope

This pass checked the blue explanation blocks and yellow example blocks across all nine main study documents:

- `common/01_pal_graph_algorithms_and_data_structures.md`
- `common/02_tal_complexity_and_decidability.md`
- `common/03_ko_combinatorial_optimization.md`
- `ai/01_smu_learnability_bandits_rl.md`
- `ai/02_lup_resolution_proving_model_search.md`
- `ai/03_ssu_erm_mle_em_deep_networks.md`
- `ai/04_pui_domain_independent_planning.md`
- `ai/05_mas_agents_multiagent_game_theory.md`
- `ai/06_uir_robot_decision_planning_coordination.md`

## Results

### Distribution

Every main study document has both explanation and example support.

| File | Blue blocks | Yellow examples |
|---|---:|---:|
| PAL | 4 | 3 |
| TAL | 4 | 3 |
| KO | 4 | 3 |
| SMU | 4 | 3 |
| LUP | 4 | 3 |
| SSU | 4 | 3 |
| PUI | 4 | 3 |
| MAS | 4 | 3 |
| UIR | 5 | 3 |

Total: 37 blue blocks and 27 yellow examples.

### Color Semantics

- Blue blocks are used for simplified explanations and exam tips.
- Yellow blocks are used only for examples.
- No yellow `Exam tip` or yellow `Simple explanation` blocks remain.
- No blue `Example` blocks remain.

### Spacing and Markdown Structure

- Every callout has a blank line after the opening fence and before the closing fence.
- Every callout is balanced and closes cleanly.
- The rendered PDF boxes show consistent padding around the text, a clear gap between the title and body, and normal vertical spacing before and after the block.
- Spot-checked pages with single blue boxes, single yellow boxes, and adjacent blue/yellow boxes; no text crowding or paragraph merging was visible.

### Factual Sanity Check

Spot-checked examples for correctness:

- Kruskal example correctly skips the cycle-forming edge.
- Gray-code example has one-bit transitions.
- Levenshtein examples correctly distinguish substitution/insertion from Hamming distance.
- CLIQUE to INDEPENDENT-SET reduction correctly uses graph complement.
- Approximation example correctly interprets a 2-approximation for minimization.
- Halting diagonalization example correctly captures the contradiction.
- Shortest-path relaxation and max-flow augmenting-path examples use correct update logic.
- Time-indexed scheduling example correctly maps start time and processing time to occupied slots.
- PAC conjunction example correctly removes literals falsified by positive examples.
- UCB and UCT examples correctly demonstrate uncertainty bonuses.
- Q-learning numeric update is correct: target 11, updated value 5.6.
- Resolution and Skolemization examples are logically correct.
- SVM, EM, planning relaxation, LM-Cut, Nash equilibrium, Shapley value, combinatorial auction, configuration-space, frontier, and RRT examples are consistent with the surrounding theory.

### Coverage Judgment

The current placement is adequate and balanced. The blocks are concentrated around topics that are commonly hard to internalize from definitions alone:

- formal complexity and reductions,
- graph and flow algorithm mechanics,
- dynamic programming and scheduling formulations,
- PAC/online learning and bandit/RL updates,
- resolution, Prolog, and Skolemization,
- SVM/EM/backprop intuition,
- planning heuristics and MCTS,
- game-theoretic equilibrium and allocation concepts,
- configuration-space and sampling-based robotics.

No critical topic from `exam_questions.md` appears to lack a reasonable explanatory/example aid. Some topics intentionally remain without examples where an example would add length without much learning value, such as straightforward lists of terminology or algorithm names.

## Print Readiness

The PDFs were rebuilt with:

- `styles/admonitions.lua`
- `styles/admonitions.tex`

The combined PDFs render successfully as A4:

- `common/common_part_all.pdf`
- `ai/ai_specialization_all.pdf`
- `state_exam_all.pdf`

No unresolved placeholder markers were found in the Markdown sources.
