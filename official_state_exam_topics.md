# Official State Exam Topics

Use this file as the validation baseline for the study app. If a topic is not represented here, it should be treated as optional/background unless it directly supports one of these bullets.

## Common part

### 1. Polynomial algorithms for standard graph problems. Combinatorial and number-theoretical algorithms, isomorphism, prime numbers. Search trees and their use. Text search based on finite automata. BE4M33PAL (Course web pages)

- Notation of asymptotic complexity of algorithms. Basic notation of graph problems - degree, path, circuit, cycle. Graph representations by adjacency, distance, Laplacian and incidence matrices. Adjacency list representation.
- Algorithms for minimum spanning tree (Prim-Jarník, Kruskal, Borůvka), strongly connected components (Kosaraju-Sharir, Tarjan), Euler trail. Union-find problem. Graph isomorphism, tree isomorphism.
- Generation and enumeration of combinatorial objects - subsets, k-element subsets, permutations. Gray codes. Prime numbers, sieve of Eratosthenes. Pseudorandom numbers properties. Linear congruential generator.
- Search trees - data structures, operations, and their complexities. Binary tree, AVL tree, red-black tree (RB-tree), B-tree and B+ tree, splay tree, k-d tree. Nearest neighbor searching in k-d trees. Skip list.
- Finite automata, regular expressions, operations over regular languages. Bit representation of nondeterministic finite automata. Text search algorithms - exact pattern matching, approximate pattern matching (Hamming and Levenshtein distance), dictionary automata.

### 2. Problem/language complexity classes with respect to the time complexity of their solution and memory complexity including undecidable problems/languages. BE4M01TAL (Course web pages)

- Asymptotic growth of functions, time and space complexity of algorithms. Correctness of algorithms - variant and invariant.
- Deterministic Turing machines, multitape Turing machines, and Nondeterministic Turing machines.
- Decision problems and languages. Complexity classes P, NP, co-NP. Reduction and polynomial reduction, class NPC. Cook theorem. Heuristics and approximate algorithms for solving NP complete problems.
- Classes based on space complexity: PSPACE and NPSPACE. Savitch Theorem.
- Randomized algorithms. Randomized Turing machines. Classes based on randomization: RP, ZPP, co-RP.
- Decidability and undecidability. Recursive and recursively enumerable languages. Diagonal language. Universal language and Universal Turing machine.

### 3. Combinatorial optimization problems - formulation, complexity analysis, algorithms and example applications. BE4M35KO (Course web pages)

- Integer Linear Programming. Shortest paths problem and traveling salesman problem ILP formulations. Branch and Bound algorithm. Problem formulations using ILP. Special ILP problems solvable in polynomial time.
- Shortest paths problem. Dijkstra, Bellman-Ford, and Floyd–Warshall algorithms. Shortest paths in directed acyclic graphs. Problem formulations using shortest paths.
- Network flows. Maximum flow and minimum cut problems. Ford-Fulkerson algorithm. Feasible flow with balances. Minimum cost flow and cycle-canceling algorithm. Problem formulations using network flows. Maximum cardinality matching.
- Knapsack problem. Approximation algorithm, dynamic programming approach, approximation scheme.
- Traveling salesman problem. Double-tree algorithm and Christofides algorithm for the metric problem. Local search k-OPT.
- Scheduling - problem description and notation. One resource - Bratley algorithm, Horn algorithm. Parallel identical resources - list scheduling, dynamic programming. Project scheduling with temporal constraints - relative order and time-indexed ILP formulations.
- Constraint Satisfaction Problem. AC3 algorithm.

## Artificial Intelligence

### 1. Learnability models: PAC and online. Learnability of conjunctions and disjunctions. Multi-armed bandit problem. Reinforcement learning. BE4M36SMU (Course web pages)

- PAC and online learnability models: definition, efficient learnability. Comparison of the two models: differences in assumptions (such as i.i.d. observations), mutual relations (does one imply the other?). Vapnik-Chervonenkis dimension. Necessary and sufficient conditions for learnability.
- If one or the other concept class is learnable in one or the other learnability models, show an algorithm that learns it in that model. Are they also learnable efficiently? Learning other hypothesis classes by reduction to learning conjunctions or disjunctions.
- Multi-armed bandit problem - definition of the problem, the notion of regret, algorithms to solve bandit problems: epsilon-greedy algorithms and their limitations, UBC algorithm and guarantees on its regret, Thompson sampling algorithm.
- Reinforcement learning: state utility, optimal policy, value iteration, direct utility estimation, adaptive dynamic programming, temporal difference learning, exploration vs. exploitation, Q-learning, and SARSA. Policy search.

### 2. Resolution in the first order logic, automatic proving. Principles of automatic proving in Boolean domains and in predicate logic. Searching for models in generic domains. BE4M36LUP (Course web pages)

- Normal forms in propositional logic. The Boolean satisfiability problem (SAT) and basic algorithms: the resolution rule, unit propagation, and clause learning. The Satisfiability Modulo Theories problem and the lazy approach.
- Logic programming and Prolog: definite and Horn clauses, Herbrand interpretations, minimal model semantics, negation as failure, SLDNF resolution, cut.
- Normal forms in first-order logic (FOL). The resolution calculus in FOL: the purpose of unification in it, subsumptions, and the saturation procedure. The handling of equality in FOL: axiomatic approach vs. extending the resolution rule.
- Searching for models in generic domains: problem grounding and propositional encoding as the SAT problem.

### 3. Minimizing empirical risk. Maximum likelihood estimation, EM algorithm. Deep networks and their training. Classical and deep neural networks and their learning. BE4M33SSU (Course web pages)

- Empirical risk minimization: Risk and empirical risk of a predictor, generalization bounds and Hoeffding inequality, statistically consistent learning algorithms, Vapnik-Chervonenkis dimension of a hypothesis class, SVMs and Kernel SVMs.
- Maximum likelihood estimators and the EM algorithm: maximum likelihood estimator, consistency of an estimator, EM algorithm as maximization of a lower bound of the likelihood, E-step and M-step as block-coordinate descent for the lower bound.
- Deep networks, supervised learning of networks: neurons, network architectures, convolutional networks, backpropagation and layer types, parameter initialisation, stochastic gradient descent.

### 4. Domain independent planning. Features, heuristics and algorithms. BE4M36PUI (Course web pages)

- STRIPS and SAS representation of planning tasks. Satisficing and optimal planning. Heuristic search. Properties of heuristic functions.
- Delete-relaxation heuristics. hmax, hadd, and hff heuristics. Abstraction heuristics. Projection, pattern databases. Merge & Shrink heuristic.
- Landmarks and landmark discovery. Landmark and LM-Cut heuristics.
- Linear Programming heuristics. State-Equation heuristic. Potential heuristic.
- Non-deterministic planning. Probabilistic planning. Markov Decision Process and Value Iteration. Monte-Carlo Tree Search and the UCT algorithm.

### 5. Autonomous agents and multiagent systems. Noncooperative game theory. BE4M36MAS (Course web pages)

- Normal-form games (NFGs) and the concept of mixed strategy. Nash equilibrium - its properties and computation. Removal of dominated strategies. Two-person zero-sum games and the algorithm based on linear programming. Alternatives to Nash equilibrium for NFGs: correlated equilibrium and Stackelberg equilibrium.
- Extensive-form games (EFGs), their representation, and properties (imperfect information and perfect recall). Types of strategies in EFGs. The concept of Nash and subgame perfect equilibrium. How to solve EFGs: the algorithms based on linear programming and on regret minimization.
- Coalitional Games and their representation. Basic classes and examples of coalitional games. The core of a game and its properties. Axioms of fair allocation for the Shapley value. The computation of the Shapley value. Simple voting games and their solution by the Shapley-Shubik index and by the Banzhaf index.
- Auction mechanisms and their properties. How to bid in single-item auctions. Strategic and revenue equivalence of auction mechanisms. Optimum single-item auctions. Combinatorial auctions and their representations.

### 6. Decision making, planning and coordination of autonomous systems of one or more robots. BE4M36UIR (Course web pages)

- Robotic paradigms and control architectures, embodiment, sensor, and actuators. Properties of hierarchical, reactive, and hybrid paradigms. Their advantages and drawbacks.
- Path and motion planning problem formulations. Notation of the configuration space and roadmap-based planning methods. Variants of the graph-based planning, existing speedup techniques, and planning approaches for environments that can dynamically change such as D* or D* Lite algorithms.
- Informative path planning methods and robotic exploration of unknown environments - problem decomposition and multi-robot task allocation algorithms - centralized and decentralized methods. Variants of frontier-based exploration and information theory-based methods.
- Multi-goal planning and robotic variants of the sequence-dependent traveling salesman problem. Existing problem formulations and extensions with curvature-constrained multigoal trajectory. Formulations of the routing problems with profits in data collection planning scenarios. Decoupled, transformation, and sampling-based solution methods.
- Sampling-based motion planning methods - probabilistic completeness and asymptotic optimality.
