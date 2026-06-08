# Static HTML Study Framework Coverage Validation

Date: 2026-06-04  
Scope: common-part HTML study pages for PAL, TAL, and KO.

## Sources Checked

- Exam question list: `exam_questions.md`
- Formal Markdown notes:
  - `common/01_pal_graph_algorithms_and_data_structures.md`
  - `common/02_tal_complexity_and_decidability.md`
  - `common/03_ko_combinatorial_optimization.md`
- Compiled PDFs:
  - `common/01_pal_graph_algorithms_and_data_structures.pdf`
  - `common/02_tal_complexity_and_decidability.pdf`
  - `common/03_ko_combinatorial_optimization.pdf`
- HTML study pages:
  - `study/pal.html`
  - `study/tal.html`
  - `study/ko.html`
- Companion guides:
  - `common/01_pal_watch_and_remember.md`
  - `common/02_tal_watch_and_remember.md`
  - `common/03_ko_watch_and_remember.md`
- Shared behavior/data:
  - `study/assets/study.js`
  - `study/assets/study.css`

The PDFs were checked with `pdftotext`; their visible structure matches the Markdown source sections, so the Markdown files remain the source of truth for coverage.

## Result

The HTML framework now covers all common-part exam-outline bullets at the level needed for a first-pass oral exam study tool. No critical common-question topic is intentionally omitted.

The validation did find several underemphasized items. These were patched during the audit.

## Fixes Applied

### PAL

Patched:

- Added explicit distance-matrix coverage to the PAL HTML recall block and graph representation toggle.
- Added distance-matrix quiz coverage in `study/assets/study.js`.
- Added explicit bitset/NFA simulation recall coverage.
- Added flashcard/quiz coverage for bit-parallel NFA simulation.
- Strengthened companion-guide coverage for Shift-And/Shift-Or and Myers bit-parallel matching.
- Aligned PAL page time budget with the index: 4.5-5.5h full pass and 45m panic pass.

Coverage after patch:

- Asymptotic notation, graph terms, graph representations including adjacency, distance, incidence, and Laplacian.
- MST algorithms: Prim-Jarnik, Kruskal, Boruvka, cut/cycle properties.
- SCC algorithms: Kosaraju-Sharir and Tarjan.
- Euler trails/circuits, union-find, graph/tree isomorphism.
- Generation: subsets, k-subsets, permutations, Gray codes.
- Sieve and LCG pseudorandom generator.
- Search trees: BST, AVL, red-black, B/B+, splay, k-d, skip list.
- Automata and text search: regex, DFA/NFA, bit representation of NFAs, KMP, Boyer-Moore, Hamming, Levenshtein, Shift-And/Shift-Or, Myers, Aho-Corasick.

### TAL

Patched:

- Aligned TAL page time budget with the index: 5-6.5h full pass.
- Added explicit acceptance-problem coverage: `A_TM` is RE but undecidable.
- Added explicit non-RE coverage from diagonalization.
- Added flashcard/quiz coverage for `A_TM` and non-RE languages.
- Strengthened companion-guide panic checklist.

Coverage after patch:

- Asymptotic growth and algorithm correctness via invariant/variant.
- DTM, multitape TM, NTM, decider vs recognizer.
- Decision problems as languages.
- P, NP, co-NP, reductions, NP-hard, NP-complete, Cook-Levin/tableau.
- Heuristic, exact, randomized/metaheuristic, and approximation approaches for NP-hard problems.
- PSPACE, NPSPACE, configuration graphs, Savitch theorem.
- Randomized algorithms, randomized TMs, Monte Carlo, Las Vegas, RP, co-RP, ZPP, BPP.
- Decidable, RE, non-RE, universal language/TM, diagonal language, halting problem, `A_TM`, and reductions for undecidability.

### KO

Patched:

- Added explicit cutting-plane and branch-and-cut coverage to KO HTML and JS lab.
- Added flashcard/quiz coverage for cutting planes.
- Added network-flow formulation examples: assignment, transportation, project selection, disjoint paths, image segmentation, time-expanded scheduling.
- Added fixed-machine scheduling DP coverage: pseudo-polynomial DP over machine-load vectors.
- Added job-parameter recall coverage for scheduling.
- Strengthened KO companion-guide recall bullets.

Coverage after patch:

- LP/ILP definitions, binary variables, modeling constraints, shortest path ILP, TSP ILP, branch and bound, cutting planes, branch-and-cut, totally unimodular polynomial cases.
- Shortest paths: variants, relaxation, Dijkstra, Bellman-Ford, Floyd-Warshall, DAG shortest paths, difference constraints and modeling uses.
- Network flows: max flow, residual graph, Ford-Fulkerson, Edmonds-Karp, min cut, feasible flows with balances/lower bounds, min-cost flow/cycle-canceling, bipartite matching, flow formulations.
- Knapsack: fractional greedy, 0/1 DP by weight, DP by profit, pseudo-polynomiality, 2-approximation, FPTAS.
- TSP: complexity, metric assumption, double-tree, Christofides, k-OPT.
- Scheduling: job parameters, Graham notation, Bratley, Horn/EDF, list scheduling, LPT, McNaughton, fixed-m DP, project scheduling with relative-order and time-indexed ILPs.
- CSP: definition, arc consistency, AC3, complexity, incompleteness.

## Verification Performed

- `node --check study/assets/study.js`
- HTML parser check for:
  - `study/pal.html`
  - `study/tal.html`
  - `study/ko.html`
  - `study/index.html`
- `pdftotext` heading/section extraction for all three common-part PDFs.
- Targeted `rg` checks for previously weak concepts:
  - distance matrix
  - bit representation of NFAs
  - Shift-And/Shift-Or and Myers
  - `A_TM` and non-RE languages
  - cutting planes and branch-and-cut
  - fixed-machine scheduling DP
  - flow formulation examples
- Browser checks via Playwright on localhost:
  - PAL page loads; distance-matrix tab renders correctly.
  - KO page loads; cutting-planes tab renders correctly.
  - TAL page loads; updated time budget and `A_TM`/non-RE content visible.

## Residual Risk

The HTML pages are study companions, not replacements for the full formal notes. They intentionally compress proofs and formulas. For exam safety, the final pass before the exam should still include:

- Reading each formal Markdown file once after finishing the corresponding HTML page.
- Rehearsing the oral skeletons out loud.
- Using the formal notes for exact recurrence/formula writing if the examiner asks for derivations.

No common-part topic currently appears uncovered at the level of the exam question list.
