# State Exam Questions

This document is the working index of questions to solve for the engineering state exam.

## Contents

- [Common Part](#common-part)
  - [1. Polynomial Algorithms for Standard Graph Problems](#1-polynomial-algorithms-for-standard-graph-problems)
  - [2. Problem and Language Complexity Classes](#2-problem-and-language-complexity-classes)
  - [3. Combinatorial Optimization Problems](#3-combinatorial-optimization-problems)
- [Artificial Intelligence](#artificial-intelligence)
  - [1. Learnability Models, Bandits, and Reinforcement Learning](#1-learnability-models-bandits-and-reinforcement-learning)
  - [2. Resolution, Automatic Proving, and Model Search](#2-resolution-automatic-proving-and-model-search)
  - [3. Empirical Risk, MLE, EM, and Neural Networks](#3-empirical-risk-mle-em-and-neural-networks)
  - [4. Domain Independent Planning](#4-domain-independent-planning)
  - [5. Autonomous Agents and Multiagent Systems](#5-autonomous-agents-and-multiagent-systems)
  - [6. Decision Making, Planning, and Coordination of Autonomous Robots](#6-decision-making-planning-and-coordination-of-autonomous-robots)

---

## Estimated Study Time

These are working estimates for one serious first pass through each question. A full pass means: read/watch the prepared material where available, make a compact oral answer, do active recall, and patch weak spots. A panic pass means: skip depth, learn the answer skeleton, and rehearse definitions/theorems/examples out loud.

| Part | Question | Course | Estimated full pass | Panic pass |
|---|---|---:|---:|---:|
| Common | Polynomial graph algorithms, search trees, and automata | BE4M33PAL | 4.5-5.5h | 45m |
| Common | Complexity classes, Turing machines, randomization, and undecidability | BE4M01TAL | 5-6.5h | 45m |
| Common | Combinatorial optimization | BE4M35KO | 6-8h | 60-75m |
| AI | Learnability models, bandits, and reinforcement learning | BE4M36SMU | 4.5-6h | 45-60m |
| AI | Resolution, automatic proving, and model search | BE4M36LUP | 4-5.5h | 45m |
| AI | Empirical risk, MLE, EM, and neural networks | BE4M33SSU | 5-6.5h | 60m |
| AI | Domain independent planning | BE4M36PUI | 4.5-6h | 45-60m |
| AI | Autonomous agents and multiagent systems | BE4M36MAS | 4.5-6h | 45-60m |
| AI | Robot decision making, planning, and coordination | BE4M36UIR | 5-6.5h | 60m |

Total estimate for all questions: about **44-57 hours** of focused first-pass study. The common part is about **15.5-20 hours**; the AI part is about **28.5-36.5 hours**.

---

## Common Part

### 1. Polynomial Algorithms for Standard Graph Problems

**Course:** BE4M33PAL  
**Status:** Compiled  
**Estimated study time:** 4.5-5.5h full pass; 45m panic pass  
**Solved notes:** [common/01_pal_graph_algorithms_and_data_structures.md](common/01_pal_graph_algorithms_and_data_structures.md)

**Video study guide:** [common/01_pal_watch_and_remember.md](common/01_pal_watch_and_remember.md)
**Interactive HTML:** [study/pal.html](study/pal.html)

- Notation of asymptotic complexity of algorithms. Basic notation of graph problems: degree, path, circuit, cycle. Graph representations by adjacency, distance, Laplacian and incidence matrices. Adjacency list representation.
- Algorithms for minimum spanning tree: Prim-Jarnik, Kruskal, Boruvka. Strongly connected components: Kosaraju-Sharir, Tarjan. Euler trail. Union-find problem. Graph isomorphism, tree isomorphism.
- Generation and enumeration of combinatorial objects: subsets, k-element subsets, permutations. Gray codes. Prime numbers, sieve of Eratosthenes. Pseudorandom numbers properties. Linear congruential generator.
- Search trees: data structures, operations, and their complexities. Binary tree, AVL tree, red-black tree, B-tree and B+ tree, splay tree, k-d tree. Nearest neighbor searching in k-d trees. Skip list.
- Finite automata, regular expressions, operations over regular languages. Bit representation of nondeterministic finite automata. Text search algorithms: exact pattern matching, approximate pattern matching with Hamming and Levenshtein distance, dictionary automata.

### 2. Problem and Language Complexity Classes

**Course:** BE4M01TAL  
**Status:** Compiled  
**Estimated study time:** 5-6.5h full pass; 45m panic pass  
**Solved notes:** [common/02_tal_complexity_and_decidability.md](common/02_tal_complexity_and_decidability.md)

**Video study guide:** [common/02_tal_watch_and_remember.md](common/02_tal_watch_and_remember.md)
**Interactive HTML:** [study/tal.html](study/tal.html)

- Asymptotic growth of functions, time and space complexity of algorithms. Correctness of algorithms: variant and invariant.
- Deterministic Turing machines, multitape Turing machines, and nondeterministic Turing machines.
- Decision problems and languages. Complexity classes P, NP, co-NP. Reduction and polynomial reduction, class NPC. Cook theorem. Heuristics and approximate algorithms for solving NP-complete problems.
- Classes based on space complexity: PSPACE and NPSPACE. Savitch theorem.
- Randomized algorithms. Randomized Turing machines. Classes based on randomization: RP, ZPP, co-RP.
- Decidability and undecidability. Recursive and recursively enumerable languages. Diagonal language. Universal language and universal Turing machine.

### 3. Combinatorial Optimization Problems

**Course:** BE4M35KO  
**Status:** Compiled  
**Estimated study time:** 6-8h full pass; 60-75m panic pass  
**Solved notes:** [common/03_ko_combinatorial_optimization.md](common/03_ko_combinatorial_optimization.md)

**Video study guide:** [common/03_ko_watch_and_remember.md](common/03_ko_watch_and_remember.md)
**Interactive HTML:** [study/ko.html](study/ko.html)

- Integer linear programming. Shortest paths problem and traveling salesman problem ILP formulations. Branch and Bound algorithm. Problem formulations using ILP. Special ILP problems solvable in polynomial time.
- Shortest paths problem. Dijkstra, Bellman-Ford, and Floyd-Warshall algorithms. Shortest paths in directed acyclic graphs. Problem formulations using shortest paths.
- Network flows. Maximum flow and minimum cut problems. Ford-Fulkerson algorithm. Feasible flow with balances. Minimum cost flow and cycle-canceling algorithm. Problem formulations using network flows. Maximum cardinality matching.
- Knapsack problem. Approximation algorithm, dynamic programming approach, approximation scheme.
- Traveling salesman problem. Double-tree algorithm and Christofides algorithm for the metric problem. Local search k-OPT.
- Scheduling: problem description and notation. One resource: Bratley algorithm, Horn algorithm. Parallel identical resources: list scheduling, dynamic programming. Project scheduling with temporal constraints: relative order and time-indexed ILP formulations.
- Constraint Satisfaction Problem. AC3 algorithm.

---

## Artificial Intelligence

### 1. Learnability Models, Bandits, and Reinforcement Learning

**Course:** BE4M36SMU  
**Status:** Compiled  
**Estimated study time:** 4.5-6h full pass; 45-60m panic pass  
**Solved notes:** [ai/01_smu_learnability_bandits_rl.md](ai/01_smu_learnability_bandits_rl.md)  
**Video study guide:** [ai/01_smu_watch_and_remember.md](ai/01_smu_watch_and_remember.md)  
**Interactive HTML:** [study/smu.html](study/smu.html)

- PAC and online learnability models: definition, efficient learnability. Comparison of the two models: differences in assumptions, such as i.i.d. observations, and mutual relations, such as whether one implies the other. Vapnik-Chervonenkis dimension. Necessary and sufficient conditions for learnability.
- If one or the other concept class is learnable in one or the other learnability model, show an algorithm that learns it in that model. Are they also learnable efficiently? Learning other hypothesis classes by reduction to learning conjunctions or disjunctions.
- Multi-armed bandit problem: definition of the problem, notion of regret, algorithms to solve bandit problems: epsilon-greedy algorithms and their limitations, UCB algorithm and guarantees on its regret, Thompson sampling algorithm.
- Reinforcement learning: state utility, optimal policy, value iteration, direct utility estimation, adaptive dynamic programming, temporal difference learning, exploration vs. exploitation, Q-learning, and SARSA. Policy search.

### 2. Resolution, Automatic Proving, and Model Search

**Course:** BE4M36LUP  
**Status:** Compiled  
**Estimated study time:** 4-5.5h full pass; 45m panic pass  
**Solved notes:** [ai/02_lup_resolution_proving_model_search.md](ai/02_lup_resolution_proving_model_search.md)  
**Video study guide:** [ai/02_lup_watch_and_remember.md](ai/02_lup_watch_and_remember.md)  
**Interactive HTML:** [study/lup.html](study/lup.html)

- Normal forms in propositional logic. Boolean satisfiability problem (SAT) and basic algorithms: resolution rule, unit propagation, and clause learning. Satisfiability Modulo Theories problem and the lazy approach.
- Logic programming and Prolog: definite and Horn clauses, Herbrand interpretations, minimal model semantics, negation as failure, SLDNF resolution, cut.
- Normal forms in first-order logic (FOL). Resolution calculus in FOL: the purpose of unification in it, subsumptions, and the saturation procedure. Handling of equality in FOL: axiomatic approach vs. extending the resolution rule.
- Searching for models in generic domains: problem grounding and propositional encoding as the SAT problem.

### 3. Empirical Risk, MLE, EM, and Neural Networks

**Course:** BE4M33SSU  
**Status:** Compiled  
**Estimated study time:** 5-6.5h full pass; 60m panic pass  
**Solved notes:** [ai/03_ssu_erm_mle_em_deep_networks.md](ai/03_ssu_erm_mle_em_deep_networks.md)  
**Video study guide:** [ai/03_ssu_watch_and_remember.md](ai/03_ssu_watch_and_remember.md)  
**Interactive HTML:** [study/ssu.html](study/ssu.html)

- Empirical risk minimization: risk and empirical risk of a predictor, generalization bounds and Hoeffding inequality, statistically consistent learning algorithms, Vapnik-Chervonenkis dimension of a hypothesis class, SVMs and kernel SVMs.
- Maximum likelihood estimators and the EM algorithm: maximum likelihood estimator, consistency of an estimator, EM algorithm as maximization of a lower bound of the likelihood, E-step and M-step as block-coordinate descent for the lower bound.
- Deep networks, supervised learning of networks: neurons, network architectures, convolutional networks, backpropagation and layer types, parameter initialization, stochastic gradient descent.

### 4. Domain Independent Planning

**Course:** BE4M36PUI  
**Status:** Compiled  
**Estimated study time:** 4.5-6h full pass; 45-60m panic pass  
**Solved notes:** [ai/04_pui_domain_independent_planning.md](ai/04_pui_domain_independent_planning.md)  
**Video study guide:** [ai/04_pui_watch_and_remember.md](ai/04_pui_watch_and_remember.md)  
**Interactive HTML:** [study/pui.html](study/pui.html)

- STRIPS and SAS representation of planning tasks. Satisficing and optimal planning. Heuristic search. Properties of heuristic functions.
- Delete-relaxation heuristics. hmax, hadd, and hff heuristics. Abstraction heuristics. Projection, pattern databases. Merge & Shrink heuristic.
- Landmarks and landmark discovery. Landmark and LM-Cut heuristics.
- Linear programming heuristics. State-equation heuristic. Potential heuristic.
- Non-deterministic planning. Probabilistic planning. Markov Decision Process and value iteration. Monte-Carlo Tree Search and the UCT algorithm.

### 5. Autonomous Agents and Multiagent Systems

**Course:** BE4M36MAS  
**Status:** Compiled  
**Estimated study time:** 4.5-6h full pass; 45-60m panic pass  
**Solved notes:** [ai/05_mas_agents_multiagent_game_theory.md](ai/05_mas_agents_multiagent_game_theory.md)  
**Video study guide:** [ai/05_mas_watch_and_remember.md](ai/05_mas_watch_and_remember.md)  
**Interactive HTML:** [study/mas.html](study/mas.html)

- Normal-form games (NFGs) and the concept of mixed strategy. Nash equilibrium: its properties and computation. Removal of dominated strategies. Two-person zero-sum games and the algorithm based on linear programming. Alternatives to Nash equilibrium for NFGs: correlated equilibrium and Stackelberg equilibrium.
- Extensive-form games (EFGs), their representation, and properties: imperfect information and perfect recall. Types of strategies in EFGs. The concept of Nash and subgame perfect equilibrium. How to solve EFGs: algorithms based on linear programming and on regret minimization.
- Coalitional games and their representation. Basic classes and examples of coalitional games. The core of a game and its properties. Axioms of fair allocation for the Shapley value. Computation of the Shapley value. Simple voting games and their solution by the Shapley-Shubik index and by the Banzhaf index.
- Auction mechanisms and their properties. How to bid in single-item auctions. Strategic and revenue equivalence of auction mechanisms. Optimum single-item auctions. Combinatorial auctions and their representations.

### 6. Decision Making, Planning, and Coordination of Autonomous Robots

**Course:** BE4M36UIR  
**Status:** Compiled  
**Estimated study time:** 5-6.5h full pass; 60m panic pass  
**Solved notes:** [ai/06_uir_robot_decision_planning_coordination.md](ai/06_uir_robot_decision_planning_coordination.md)  
**Video study guide:** [ai/06_uir_watch_and_remember.md](ai/06_uir_watch_and_remember.md)  
**Interactive HTML:** [study/uir.html](study/uir.html)

- Robotic paradigms and control architectures, embodiment, sensors, and actuators. Properties of hierarchical, reactive, and hybrid paradigms. Their advantages and drawbacks.
- Path and motion planning problem formulations. Notation of the configuration space and roadmap-based planning methods. Variants of graph-based planning, existing speedup techniques, and planning approaches for environments that can dynamically change, such as D* or D* Lite algorithms.
- Informative path planning methods and robotic exploration of unknown environments: problem decomposition and multi-robot task allocation algorithms, centralized and decentralized methods. Variants of frontier-based exploration and information theory-based methods.
- Multi-goal planning and robotic variants of the sequence-dependent traveling salesman problem. Existing problem formulations and extensions with curvature-constrained multi-goal trajectory. Formulations of routing problems with profits in data collection planning scenarios. Decoupled, transformation, and sampling-based solution methods.
- Sampling-based motion planning methods: probabilistic completeness and asymptotic optimality.
