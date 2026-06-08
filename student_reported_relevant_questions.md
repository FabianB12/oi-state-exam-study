# Student-Reported Questions Relevant To This Exam

This file filters the pasted student reports down to questions worth keeping for the current master state-exam prep.

Current scope:

- Common: `PAL`, `TAL`, `KO`
- AI specialization: `SMU`, `LUP`, `SSU`, `PUI`, `MAS`, `UIR`

The pasted reports contain many bachelor-only or different-specialization questions. Those are excluded unless they directly overlap one of the nine target questions.

## Clearly Relevant

These are the strongest matches because they are explicitly master/MSZZ/Mgr reports, use the relevant course shortcut, or directly name one of our target subjects.

| Source | Report context | Target subject | Reported question |
|---|---|---|---|
| `/Users/fabian/.codex/attachments/8d710d52-f7ce-426b-b347-b5e3538b6b19/pasted-text.txt:388` | OI HCI | `PAL` | Automata; text search; searching damaged/modified words; dictionary automaton; whether multiple words can be searched at once. |
| `/Users/fabian/.codex/attachments/b64155a3-f631-46d9-b75b-888b718ee9f3/pasted-text.txt:8` | 2026 Mgr archive, OI Software Engineering | `KO` | Constraint satisfaction; explain arc consistency; describe AC3. This is a compact 2026 confirmation that CSP/AC3 is still a live common-question prompt. |
| `/Users/fabian/.codex/attachments/8d710d52-f7ce-426b-b347-b5e3538b6b19/pasted-text.txt:486` | OI Mgr - Artificial Intelligence | `KO` | Constraint satisfaction and AC3. Compare CSP with ILP, give an example such as Sudoku, define CSP formally, define arc consistency, write AC3 pseudocode, solve a small example. |
| `/Users/fabian/.codex/attachments/8d710d52-f7ce-426b-b347-b5e3538b6b19/pasted-text.txt:490` | OI Mgr - Artificial Intelligence | `UIR` | Motion planning in robotics. Define configuration space, `C_free`, `C_obst`, discretization; avoid drifting into only grid planning if the examiner asks about configuration-space planning; discuss sampling-based methods such as RRT and PRM; know probabilistic completeness/asymptotic optimality intuition and why basic RRT is not asymptotically optimal. |
| `/Users/fabian/.codex/attachments/0d54f0ce-7109-4d28-891a-884760b420bf/pasted-text.txt:612` | OI Mgr - Cybersecurity, common question | `TAL` | Define `P`, `NP`, `coNP`, `NPC`; classify 3-coloring; define polynomial reduction; draw/describe relationships between complexity classes; be ready to justify NP-completeness rather than only naming the class. |
| `/Users/fabian/.codex/attachments/0d54f0ce-7109-4d28-891a-884760b420bf/pasted-text.txt:621` | OI Mgr - Cybersecurity, common question | `PAL` | Define B-tree. Demonstrate `find` and insertion using a chosen example, including multi-phase insertion strategy. Explain how B+ trees differ and name other search trees. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:347` | `[MSZZ]` OI Data Science | `PAL` | Strongly connected components; Kosaraju-Sharir algorithm; Tarjan algorithm; correctness and time complexity. The report labels it `TAL`, but the topic belongs to our `PAL` graph algorithms bucket. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:389` | `[MSZZ]` OI Software Engineering, common question | `TAL` | Recursive and recursively enumerable languages; examples of recursive languages; diagonal language and its complement; define both languages and classify them. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:412` | `[MSZZ]` OI Computer Graphics, common question | `KO` / `TAL` overlap | TSP; heuristic and approximation algorithms and their relationship; example heuristic TSP algorithm; implications of a hypothetical `20-OPT` TSP algorithm for `P`, `NP`, `NPC`, and `coNP`. |

## Relevant But Lower Confidence

These are bachelor or bachelor-looking reports, or they use older/general subject names such as `ZUI`, `RPZ`, `LGR`, or `ALG`. Keep them because they directly overlap our material, but treat them as extra practice prompts rather than proof of current master-question emphasis.

| Source | Report context | Target subject | Reported question |
|---|---|---|---|
| `/Users/fabian/.codex/attachments/8d710d52-f7ce-426b-b347-b5e3538b6b19/pasted-text.txt:62` | Bachelor/games-graphics report, `LGR` | `PAL` | Equivalent definitions of an undirected tree; cycle; minimum spanning tree; Kruskal/Boruvka algorithm; implementation idea; memory and time complexity. |
| `/Users/fabian/.codex/attachments/0d54f0ce-7109-4d28-891a-884760b420bf/pasted-text.txt:13` | Bachelor/games-graphics report, `LGR` | `PAL` | Directed graph; connected components vs strongly connected components; examples with same number of components and SCCs; rooted tree and its components/SCCs. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:241` | Bachelor AI/ZUI-style report, `RPZ` | `SSU` | Support Vector Machine classifier. Formulate learning problem for separable and nonseparable data; linear SVM and kernel SVM; properties, advantages, and disadvantages; draw and explain the margin picture. |
| `/Users/fabian/.codex/attachments/0d54f0ce-7109-4d28-891a-884760b420bf/pasted-text.txt:551` | OI AI report, `RPZ` | `SSU` | Classifier definition; linear classifier; linear separability; SVM motivation; why maximize margin; formulate the optimization problem; recognize it as quadratic programming, not linear programming; draw linearly separable and nonseparable point sets. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:134` | Bachelor AI/ZUI-style report, `RPZ` | `SSU` | Neural networks; how they work; backpropagation; how to extend a network with two outputs to multiple outputs. |
| `/Users/fabian/.codex/attachments/8d710d52-f7ce-426b-b347-b5e3538b6b19/pasted-text.txt:155` | Bachelor AI/ZUI-style report, `RPZ` | `SSU` | Design a neural network with one hidden layer for binary classification from a feature vector of length 3; choose a criterion/loss; describe learning in detail; discuss whether perfect classification is always possible; relate to universal approximation; explain overfitting and prevention. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:300` | OI AI report | `SMU` / `PUI` | MDPs: definition, computation, and a partially specified worked example. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:188` | Bachelor AI/ZUI report | `KO` | Constraint Satisfaction Problems: define variables, domains, constraints as relations; solve using backtracking, forward checking, and arc consistency. |
| `/Users/fabian/.codex/attachments/0d54f0ce-7109-4d28-891a-884760b420bf/pasted-text.txt:573` | OI AI report | `PUI` | Planning in AI; search and heuristics; formal definition of a planning problem; the report warns that failing to define the state space/formal task caused trouble before the examiner even got to search. |
| `/Users/fabian/.codex/attachments/8d710d52-f7ce-426b-b347-b5e3538b6b19/pasted-text.txt:465` | Bachelor AI/ZUI report | `PUI` / `UIR` | A* algorithm, heuristic function, admissibility/optimality, and a shortest-path heuristic for a road network. Examiner pushed for implementation details: priority queue, handling already-seen states, and generated states. |
| `/Users/fabian/.codex/attachments/8d710d52-f7ce-426b-b347-b5e3538b6b19/pasted-text.txt:527` | Bachelor AI/ZUI report | `PUI` | Informed vs uninformed search; formal state-space definition; conversion to an optimization/search problem; algorithm complexities; detailed A* explanation; admissible and consistent heuristics; DFS conditions for finding a solution in finite spaces. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:122` | Bachelor AI/ZUI report | `PUI` | State-space search in a game/puzzle setting; DFS, IDDFS, BFS, A*; define the problem and solution existence. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:343` | Bachelor AI/ZUI report | `PUI` | Vacuum-world A*; examiner wanted clear formalism and general search definition. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:379` | Bachelor AI/ZUI report | `PUI` | Fifteen-puzzle, A*, admissible and consistent heuristics, formal states/actions/rewards, efficient state storage, zero heuristic as Dijkstra. |
| `/Users/fabian/.codex/attachments/8d710d52-f7ce-426b-b347-b5e3538b6b19/pasted-text.txt:238` | Bachelor AI/ZUI report | `PUI` | Fifteen-puzzle: algorithm, data structure, heuristic proposals, admissibility. |
| `/Users/fabian/.codex/attachments/8d710d52-f7ce-426b-b347-b5e3538b6b19/pasted-text.txt:101` | Bachelor AI/ZUI report | `MAS` / `PUI` | Two-player games and minimax. |
| `/Users/fabian/.codex/attachments/0d54f0ce-7109-4d28-891a-884760b420bf/pasted-text.txt:98` | Bachelor AI/ZUI report | `MAS` / `PUI` | Two-player games; what counts as winning; algorithms; minimax; alpha-beta, negamax, negascout, and MCTS mentioned briefly. |
| `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt:107` | Bachelor AI/ZUI report | `MAS` / `PUI` | Two-player games; result of a game; algorithms such as minimax; memory/storage of game trees; limited-depth search and evaluation functions. |

## Immediate Study Implications

- `PAL`: Automata/text search, B-trees/B+ trees, SCC algorithms, MST algorithms are recurring practical oral prompts.
- `TAL`: Definitions alone are not enough. Be ready to justify class membership/reductions and classify diagonal/universal-style languages.
- `KO`: CSP/AC3 and TSP/approximation/local-search questions are especially worth drilling.
- `SSU`: SVM and neural-network/backprop prompts recur often in nearby AI reports.
- `PUI`: Examiners repeatedly punish vague search/planning answers. Always define states, actions, transition/successor function, costs/rewards, heuristic, data structure, and guarantee.
- `UIR`: Motion planning needs configuration-space precision and sampling-planner guarantees, not only generic grid/A* talk.
- `MAS`: Game-tree/minimax material appears in bachelor AI reports; for our MAS page, this is not a perfect match but reinforces game-representation and equilibrium/search intuitions.
