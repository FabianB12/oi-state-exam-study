# Official Topic Coverage Validation

Baseline: [official_state_exam_topics.md](official_state_exam_topics.md)

This report compares the nine HTML study pages and their companion notes against the official state exam topic list. It separates:

- **Coverage**: official bullets that are represented in the app.
- **Weak spots**: official material that exists but should be made more direct in the HTML.
- **Scope creep**: material that is useful background or previous-report context, but should be optional/background if the app is meant to follow the official state-exam scope strictly.

## Executive Summary

All nine official topics are broadly covered. No subject has a major official bullet missing.

The main issue is not absence; it is scope control. Several pages include previous-student report drills, committee-priority framing, broad course-adjacent material, or deeper implementation details. These can stay, but they should be clearly marked as optional/background and kept out of the main official pass.

Highest-priority cleanup:

1. **KO**: strengthen official formulation examples and demote many extras.
2. **SSU**: demote non-official ML fundamentals such as trees, forests, boosting, confusion metrics, bias/variance.
3. **PUI**: strengthen landmark/state-equation/potential heuristic examples and demote POMDP/SAT planning/Graphplan extras.
4. **MAS**: trim reported minimax/MCTS/planning bridges and add compact worked voting/EFG solving examples.
5. **PAL/TAL/LUP/UIR/SMU**: mostly complete; add small weak official items and mark advanced material optional.

## Common Part

### PAL

Coverage:

- Asymptotic notation and graph representations are covered.
- MST algorithms, SCC algorithms, Euler trail, union-find, graph isomorphism, and tree isomorphism are covered.
- Enumeration/generation, Gray codes, sieve/primes, PRNG properties, and LCG are covered.
- Search trees listed officially are covered.
- Finite automata, regular expressions, regular-language operations, bitset NFA, exact/approximate/dictionary text search are covered.

Weak spots:

- Basic graph vocabulary is not visible enough in the HTML: degree, path, circuit, cycle.
- Prime definition and PRNG properties are clearer in the companion notes than in the HTML.
- Plain binary tree/BST operations and complexities should be more visible in the first-pass HTML.

Scope creep:

- Laplacian spectral/Kirchhoff material is deeper than needed for “Laplacian matrix representation.”
- Fibonacci heap Prim, practical GI solvers, Miller-Rabin/AKS, Hull-Dobell, Myers/banded DP, detailed RB deletion, and concurrent skip lists should be optional.
- Tree drag labs and detailed AVL/RB/B-tree insertion/deletion practice are useful but deeper than the official “operations and complexities” requirement.
- Committee/report priority framing is not official baseline material.

Recommended action:

- Add an official PAL checklist at the top.
- Add graph vocabulary and PRNG/prime one-liners into the main HTML.
- Mark advanced algorithmic/implementation details as optional/background.

### TAL

Coverage:

- Asymptotic growth, time/space complexity, correctness, invariant and variant are covered.
- DTM, multitape TM, and NTM are covered.
- Decision problems/languages, P, NP, co-NP, reductions, NPC, Cook theorem, heuristics and approximations are covered.
- PSPACE, NPSPACE, and Savitch theorem are covered.
- Randomized algorithms/TMs, RP, ZPP, co-RP are covered.
- Decidability, undecidability, recursive/RE languages, diagonal language, universal language and universal TM are covered.

Weak spots:

- The HTML should distinguish polynomial reductions for NP/NPC from computable reductions for undecidability more explicitly.
- Randomized algorithm examples are light in the HTML; one or two examples would help.

Scope creep:

- BPP is beyond the official bullet, which names RP, ZPP, and co-RP only.
- PTAS/FPTAS is probably deeper than required by “heuristics and approximate algorithms.”
- TSP/20-OPT reported drills overlap KO and should be marked cross-topic optional.

Recommended action:

- Mark BPP as optional context and remove it from panic-pass/must-say sections.
- Keep approximation to exact exponential vs heuristic vs approximation ratio; demote PTAS/FPTAS.
- Add one concise reduction-type distinction.

### KO

Coverage:

- ILP, shortest-path/TSP ILP formulations, Branch and Bound, polynomial ILP cases are covered.
- Dijkstra, Bellman-Ford, Floyd-Warshall, DAG shortest paths are covered.
- Network flows, max-flow/min-cut, Ford-Fulkerson, feasible flow, min-cost flow, cycle canceling, and matching are covered.
- Knapsack DP, approximation, and approximation scheme are covered.
- Metric TSP double-tree, Christofides, and k-OPT are covered.
- Scheduling notation, Bratley, Horn, list scheduling, DP, and project ILP formulations are covered.
- CSP and AC3 are covered.

Weak spots:

- Problem formulations using ILP are present but thin in HTML.
- Problem formulations using shortest paths need a visible difference-constraints/project-temporal card.
- Problem formulations using flows are mostly listed rather than formulated.
- Scheduling details rely too much on formal notes; Bratley, Horn, fixed-machine DP, and project ILP constraints should be more visible in HTML.

Scope creep:

- Cutting planes/branch-and-cut are not official.
- Edmonds-Karp is useful, but official says Ford-Fulkerson.
- Fractional knapsack should only support approximation intuition.
- Non-metric TSP inapproximability, metaheuristics, 20-OPT, and P=NP/NP=coNP spillover are too much for KO official scope.
- LPT/McNaughton are extra relative to the named list scheduling/DP bullet.
- CSP backtracking, forward checking, MAC, local search, Sudoku/report drills should be optional; AC3 is the official core.

Recommended action:

- Add a visible official KO checklist.
- Strengthen ILP/shortest-path/flow formulation galleries.
- Move cutting planes, Edmonds-Karp, LPT/McNaughton, CSP extras, and reported drills to optional/background.
- Replace Edmonds-Karp with Ford-Fulkerson in the main panic pass.

## Artificial Intelligence

### SMU

Coverage:

- PAC and online learnability, efficient learnability, PAC/online comparison, VC dimension and learnability characterization are covered.
- Conjunctions/disjunctions, algorithms, efficiency, and reductions are covered.
- Multi-armed bandits, regret, epsilon-greedy, UCB, Thompson sampling are covered.
- RL state utility, optimal policy, value iteration, direct utility estimation, ADP, TD, exploration/exploitation, Q-learning, SARSA, policy search are covered.

Weak spots:

- Online learnability necessary/sufficient condition is mostly a Littlestone name-drop.
- Online disjunction learnability should be stated more explicitly in the HTML.

Scope creep:

- Committee priority and reported-question framing are not official baseline content.
- Agnostic PAC bounds are probably too deep here.
- Littlestone dimension should be one optional characterization sentence, not a deep quiz/free-recall item.
- Policy-gradient/REINFORCE/actor-critic detail exceeds the official “policy search” wording.
- External Caltech/Stanford/David Silver backup material is useful but too encyclopedic for the main path.

Recommended action:

- Keep VC characterization; demote agnostic bounds and deep Littlestone material.
- Add explicit online disjunction learnability sentence.
- Reduce policy search to conceptual level; move REINFORCE/actor-critic optional.

### LUP

Coverage:

- Propositional normal forms, SAT, resolution, unit propagation, clause learning, and lazy SMT are covered.
- Logic programming/Prolog, definite/Horn clauses, Herbrand interpretations, minimal model semantics, negation as failure, SLDNF, and cut are covered.
- FOL normal forms, FOL resolution, unification, subsumption, and saturation are covered.
- Equality handling in FOL via axioms vs extended resolution rules is covered.
- Generic-domain model search, grounding, and SAT encoding are covered.

Weak spots:

- Normal forms skew toward CNF/Tseitin/SAT; a compact NNF/CNF/DNF contrast table would help.
- Lazy SMT could use one tiny concrete Boolean-abstraction plus rejected-theory-assignment example.

Scope creep:

- CDCL internals such as implication graphs, non-chronological backjumping, VSIDS, and restarts are beyond the official wording.
- Prolog green/red cut, cut-fail, stratification and termination/search-order caveats should be secondary.
- Occurs check, active/passive sets, fairness, semidecision, and rewriting are deeper than required.
- Paramodulation/superposition term ordering and selected literals are deeper than the official equality contrast.
- Symmetry breaking, lazy grounding, incremental SAT, and compact cardinality encodings are optimization-heavy.

Recommended action:

- Keep the five modules, but mark deep prover-engineering details optional.
- Reduce CDCL to clause learning at conflict level.
- Reduce equality to axioms vs built-in replacement rules.
- Keep exactly-one encoding as the only model-search encoding example.

### SSU

Coverage:

- ERM, risk/empirical risk, Hoeffding, generalization, consistency, VC dimension are covered.
- SVMs and Kernel SVMs are covered.
- MLE and estimator consistency are covered.
- EM lower bound, E-step, M-step are covered.
- Neurons, architectures, CNNs, backprop, layer types, initialization, SGD are covered.

Weak spots:

- HTML should use the official EM phrasing: EM as block-coordinate descent for the lower bound, or ascent on the lower bound / descent on negative lower bound.
- Classical neural networks are implicit; make perceptron/logistic neuron/MLP vs deep MLP/CNN distinction explicit.
- Supervised network learning should be more direct: labeled pairs, output layer, supervised loss, backprop gradients, SGD update.

Scope creep:

- Bias/variance, confusion matrices, decision trees, random forests, bagging, boosting, ROC/PR-AUC are not in official SSU bullets.
- RNN/LSTM/GRU, residual networks, autoencoders, embeddings should be one-line architecture examples at most.
- Momentum, Adam/RMSProp, schedules, augmentation, batch norm are deeper than required; official names SGD and initialization.
- Universal approximation and detailed reported neural drills are beyond official scope unless optional.

Recommended action:

- Add an official SSU scope box.
- Move trees/forests/boosting/confusion metrics/bias-variance to optional/background.
- Tighten neural-network section to neuron, MLP, supervised loss, backprop, dense/conv/pooling/dropout examples, CNN, Xavier/He, SGD/minibatch.

### PUI

Coverage:

- STRIPS/SAS, satisficing vs optimal planning, heuristic search, heuristic properties are covered.
- Delete relaxation, hmax, hadd, hff, abstraction, projection/PDBs, merge-and-shrink are covered.
- Landmarks, discovery, and LM-Cut are mostly covered.
- LP heuristics, state-equation, potential heuristic are covered.
- Nondeterministic/probabilistic planning, MDP/value iteration, MCTS/UCT are covered.

Weak spots:

- Landmark heuristic itself is weak: add landmark-count/accepted-landmark heuristic explanation.
- State-equation and potential heuristics need one crisp formula/example each.
- Heuristic properties are A*-centered; add safe/dead-end-aware/informative as a short official-line supplement.

Scope creep:

- SAT planning and Graphplan are beyond official PUI bullets.
- POMDPs are not official; one-sentence contrast is fine, but not priority/lab material.
- Planning portfolios are beyond official baseline.
- Reported broad AI/ZUI search drills, DFS/IDDFS/vacuum/15-puzzle/policy iteration, should be optional.
- ICAPS potential-heuristics video is too research-level for lean prep.

Recommended action:

- Strengthen landmark-count, state-equation LP, and potential heuristic examples.
- Demote SAT planning, Graphplan, POMDPs, portfolios, policy iteration, and broad reported search drills.
- Prefer CTU/direct course resources over research-heavy videos.

### MAS

Coverage:

- NFGs, mixed strategies, Nash, dominance, zero-sum LP, correlated equilibrium, Stackelberg equilibrium are covered.
- EFGs, imperfect information, perfect recall, strategy types, Nash/SPE, LP/sequence form, regret/CFR are covered.
- Coalitional games, representations/classes, core, Shapley, Shapley-Shubik, Banzhaf are covered.
- Auctions, single-item bidding, strategic/revenue equivalence, Myerson, combinatorial auctions are covered.

Weak spots:

- EFG LP/regret solving needs a compact oral skeleton: sequence variables, flow constraints, payoff/equilibrium LP idea, CFR intuition.
- Voting indices need one tiny worked Shapley-Shubik vs Banzhaf example.
- Coalitional classes/examples are mostly a list; add a compact table.
- General Nash computation should be framed as high-level contrast, not algorithm internals.

Scope creep:

- Reported minimax/alpha-beta/negamax/MCTS drill is mostly outside official MAS, except as small zero-sum/EFG support.
- Multi-agent planning bridge drifts into PUI/UIR.
- Security-game deployments, bilevel Stackelberg computation, tie-breaking regions are deeper than required.
- VCG payment derivations, ironing, collusion/budget/interdependent-value caveats, and multiple VCG videos are bloated.
- Committee priority/reported-confidence claims are not official baseline.

Recommended action:

- Demote reported minimax/MCTS and multi-agent planning bridge.
- Keep Stackelberg to leader commitment/follower best response plus one security-game sentence.
- Add worked voting-power example and lean EFG solving card.
- Trim auctions to mechanisms, single-item bidding, equivalence, Myerson reserve intuition, combinatorial representation/winner determination.

### UIR

Coverage:

- Robot paradigms/control architectures, embodiment, sensors/actuators, hierarchical/reactive/hybrid pros/cons are covered.
- Path/motion planning, C-space, roadmaps, graph planning, speedups, D*/D* Lite are covered.
- Informative path planning, exploration, MRTA, frontier and information-theoretic methods are covered.
- Multi-goal planning, sequence-dependent TSP variants, curvature/Dubins, routing with profits, decoupled/transformation/sampling methods are covered.
- Sampling-based motion planning, probabilistic completeness, asymptotic optimality are covered.

Weak spots:

- D* vs D* Lite distinction is acceptable but should stay lean.
- Sequence-dependent TSP needs a compact objective/formulation line.
- Informative path planning should compare frontier heuristic vs receding-horizon/sampling information path planning.

Scope creep:

- Previous-report drills and A* implementation details should be secondary.
- JPS, contraction/hub labels, detailed A* reopening logic are beyond baseline.
- Hungarian/CBBA/MILP MRTA algorithm names are deeper than required; centralized/decentralized tradeoff is official core.
- FrontierNet, terrain-aware exploration, TrajOpt/Berkeley videos, and risk-aware planning are too broad for official scope.

Recommended action:

- Keep five-module structure.
- Add official-scope checklist.
- Strengthen sequence-dependent TSP and informative path planning comparisons.
- Demote long optional videos and detailed speedup/MRTA/trajectory-optimization material.

## Implementation Priority

1. Add official-scope checklist boxes to all nine pages.
2. Make optional/background sections visually distinct and collapsed by default.
3. Fix weak official gaps:
   - PAL graph terms, prime/PRNG properties, BST basics.
   - TAL reduction distinction and randomized examples.
   - KO formulation galleries and scheduling formulas.
   - SMU online disjunction and policy-search trimming.
   - LUP normal-form table and lazy SMT example.
   - SSU EM wording and classical/deep network distinction.
   - PUI landmark/state-equation/potential heuristic examples.
   - MAS voting example and EFG solving card.
   - UIR sequence-dependent TSP and informative planning comparison.
4. Demote non-official extras after the weak gaps are fixed.
