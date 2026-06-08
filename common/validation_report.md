# Common Part Validation Report

Validation date: 2026-04-24

## Source Files Reviewed

### Repository: `mohwald/oi-mszz`

- `.source_repos/mohwald-oi-mszz/README.md`
- `.source_repos/mohwald-oi-mszz/common/pal.md`
- `.source_repos/mohwald-oi-mszz/common/tal.md`
- `.source_repos/mohwald-oi-mszz/common/ko.md`

This repository is the closest match to the current three-question common-part syllabus and was used as the primary coverage reference.

### Repository: `draliii/oi-mszz`

- `.source_repos/draliii-oi-mszz/README.md`

The common-part questions are listed there as unfinished/placeholders, so it was used only to confirm the official common-question grouping.

### Repository: `pan-sveta/oi-si-statnice`

- `.source_repos/pan-sveta-oi-si-statnice/README.md`
- `.source_repos/pan-sveta-oi-si-statnice/PAL/PAL.md`
- `.source_repos/pan-sveta-oi-si-statnice/TAL/TAL.md`
- `.source_repos/pan-sveta-oi-si-statnice/KO/KO.md`

The PAL file has substantive notes. TAL and KO mostly contain the question outline, so they were used for outline confirmation.

### Repository: `Pryx/oi-si-mszz`

- `.source_repos/pryx-oi-si-mszz/README.md`
- `.source_repos/pryx-oi-si-mszz/spolecne/README.md`
- `.source_repos/pryx-oi-si-mszz/spolecne/01/01-spolecne.tex`
- `.source_repos/pryx-oi-si-mszz/spolecne/02/02-spolecne.tex`
- `.source_repos/pryx-oi-si-mszz/spolecne/03/03-spolecne.tex`
- `.source_repos/pryx-oi-si-mszz/spolecne/04/04-spolecne.tex`
- `.source_repos/pryx-oi-si-mszz/spolecne/05/05-spolecne.tex`
- `.source_repos/pryx-oi-si-mszz/spolecne/06/06-spolecne.tex`
- `.source_repos/pryx-oi-si-mszz/spolecne/07/07-spolecne.tex`
- `.source_repos/pryx-oi-si-mszz/spolecne/08/08-spolecne.tex`
- `.source_repos/pryx-oi-si-mszz/spolecne/09/09-spolecne.tex`
- `.source_repos/pryx-oi-si-mszz/spolecne/10/10-spolecne.tex`

This repository follows an older ten-question split. Overlapping material was checked and folded into the current three-file structure.

## Coverage Result

### Question 1: PAL

Validated file: `common/01_pal_graph_algorithms_and_data_structures.md`

Status: complete against `exam_questions.md`.

Covered:

- Asymptotic notation and graph terminology.
- Graph representations: adjacency matrix, distance matrix, Laplacian matrix, incidence matrix, adjacency lists.
- MST algorithms: Prim-Jarnik, Kruskal, Boruvka.
- SCC algorithms: Kosaraju-Sharir and Tarjan.
- Euler trail/circuit conditions and algorithm.
- Union-find with path compression and union by rank/size.
- Graph isomorphism and tree isomorphism.
- Generation/enumeration: subsets, k-subsets, permutations, Gray codes.
- Prime numbers and sieve of Eratosthenes.
- Pseudorandom number properties and linear congruential generator.
- Search trees: BST, AVL, red-black, B-tree, B+ tree, splay, k-d tree, nearest-neighbor search, skip list.
- Finite automata, regular expressions, operations on regular languages.
- Bit representation of NFAs.
- Exact matching, approximate matching with Hamming and Levenshtein distance, dictionary automata.

Older Pryx material on priority queues/heaps and parsing/LL(1) is not part of the current `exam_questions.md` PAL outline, so it was not expanded into the final PAL answer.

### Question 2: TAL

Validated file: `common/02_tal_complexity_and_decidability.md`

Status: complete against `exam_questions.md`.

Covered:

- Asymptotic growth, time complexity, space complexity.
- Algorithm correctness by variant and invariant.
- Deterministic, multitape, nondeterministic, and randomized Turing machines.
- Decision problems as languages.
- P, NP, co-NP, NP-hardness, NP-completeness, polynomial reductions.
- Cook-Levin theorem.
- Heuristics and approximation algorithms for NP-hard/NP-complete problems.
- PSPACE, NPSPACE, configuration-graph view, Savitch theorem.
- RP, co-RP, ZPP, and source-note context for BPP.
- Decidable/recursive and recursively enumerable languages.
- Diagonal language, universal language, universal Turing machine, acceptance and halting problems.

### Question 3: KO

Validated file: `common/03_ko_combinatorial_optimization.md`

Status: complete against `exam_questions.md`.

Covered:

- ILP modeling, shortest-path ILP, TSP ILP, Branch and Bound.
- Other source-note ILP methods: enumeration, cutting planes, branch and cut.
- Polynomially solvable special ILPs via integral relaxations / total unimodularity.
- Shortest paths: Dijkstra, Bellman-Ford, Floyd-Warshall, DAG shortest paths, applications.
- Network flows: maximum flow, minimum cut, Ford-Fulkerson, feasible flows with balances/lower bounds, minimum-cost flow, cycle canceling, matching via flow, flow modeling.
- Knapsack: approximation, dynamic programming, pseudo-polynomial complexity, FPTAS.
- TSP: metric assumption, double-tree, Christofides, k-OPT.
- Scheduling: notation, Bratley, Horn, list scheduling, McNaughton, dynamic programming, project scheduling ILP formulations.
- CSP and AC3.

Older Pryx material on multi-commodity flows and extra specialized scheduling algorithms is not explicitly part of the current `exam_questions.md` KO outline. The main overlapping ideas were covered where useful, but the final answer stays focused on the current official bullets.

## Print and Formatting Validation

- All three Markdown files use Pandoc-compatible Markdown with LaTeX math.
- Each file has A4 PDF metadata and explicit page breaks.
- Individual PDFs render successfully with `pandoc` and `xelatex`.
- The combined common-part PDF also renders successfully.

Rendered PDFs:

- `common/01_pal_graph_algorithms_and_data_structures.pdf`
- `common/02_tal_complexity_and_decidability.pdf`
- `common/03_ko_combinatorial_optimization.pdf`
- `common/common_part_all.pdf`
