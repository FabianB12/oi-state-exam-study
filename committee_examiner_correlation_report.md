# Committee And Examiner Topic Correlation Report

This report combines the student-reported question history with public research/teaching signals for the examiners. It is meant as a prioritization aid, not as a guarantee of what will be asked.

Scope for your exam:

- Common: `PAL`, `TAL`, `KO`
- AI specialization: `SMU`, `LUP`, `SSU`, `PUI`, `MAS`, `UIR`

Your committee:

- `doc. Ing. Tomas Kroupa, Ph.D.`
- `Ing. Antonin Komenda, Ph.D.`
- `prof. Ing. Miroslav Bures, Ph.D.`
- `Ing. Gustav Sir, Ph.D.`
- `doc. Ing. Radim Baca, Ph.D.`
- Secretary: `Ing. Jakub Rada`

## Executive Conclusion

Yes, there is a real correlation in the student history: when the report names the examiner, the question often lands close to that person's academic lane.

The strongest examples:

- Jan Faigl, robotics/path planning researcher, asked `UIR` motion planning in configuration space, RRT/PRM, completeness/optimality.
- Pavel Surynek, multi-agent path finding/planning/SAT/SMT researcher, repeatedly asked planning, state-space search, minimax/two-player games, CSP.
- Tomas Werner, optimization/ML researcher, asked classifier/SVM/linear separability and wanted the optimization formulation.
- Rostislav Horcik, formal logic/theory-oriented examiner in reports, asked formal-language/TAL questions and cared about precise definitions.
- Alena Gollova/Demlova/Velebil often asked math/graph/theory-style questions close to their teaching lanes.
- Miroslav Bures, who is on your committee, appears in student history asking testing/coverage questions in software committees, which matches his public software-testing profile.

For your specific committee, the best panic-rank is:

1. `MAS` - Kroupa and Komenda overlap strongly here.
2. `PUI` - Komenda is a direct automated-planning signal.
3. `SSU` - Gustav Sir is a direct relational/deep ML signal; Kroupa/Komenda also touch ML.
4. `LUP` - Gustav Sir's relational logic/knowledge-graph work and Komenda's planning formalisms make logic/KR plausible.
5. `KO` - Komenda's planning/CSP overlap and Bures's constraint/testing background make CSP/AC-3/ILP/TSP worth drilling.
6. `PAL` - Radim Baca makes B-tree/B+ tree/indexing/search-tree material especially worth knowing; graph algorithms remain common.
7. `SMU` - Kroupa/Komenda can plausibly ask MDP/RL/game/decision material, but this is less direct than MAS/PUI.
8. `UIR` - not a direct match to your listed committee except Komenda/robotics-adjacent AIC overlap; still learn it, but panic-pass if time is bad.
9. `TAL` - always possible as a common question, but none of your listed committee screams automata/complexity as strongly as the other topics.

## Your Committee: Likely Topic Coverage

### Tomas Kroupa

Public signal:

- AIC / CTU profile lists game-theory work, including continuous games, Nash equilibria, coalitional games, Shapley-style value concepts, cooperative games, and game-theoretic security/optimization.

Most likely exam subjects:

- `MAS`: very high. Game theory basics, Nash equilibrium, zero-sum games, minimax, cooperative games, Shapley value, core.
- `SMU`: medium. MDP/RL can be connected to games and decision-making, especially if phrased through agents.
- `KO`: medium. Optimization and game computation may overlap with ILP/complexity/algorithmic problem solving.
- `PAL`: low-medium. Graph/network games may create graph-algorithm questions, but less direct than MAS.

Student-history signal:

- Kroupa appears as committee chair / thesis supervisor in older reports, but I did not find a strong direct record of him asking one of our nine target questions. Treat public research as the main signal.

Preparation implication:

- Do not hand-wave cooperative games. For Kroupa, you want to be able to say: players, strategies/payoffs, Nash equilibrium, zero-sum minimax, characteristic function game, core, Shapley value, and how fairness/stability differ.

### Antonin Komenda

Public signal:

- AIC profile directly says artificial intelligence, automated planning, multiagent systems, simulations, and lists research areas including automated planning, game theory, ML, optimization, robotics, cybersecurity.

Most likely exam subjects:

- `PUI`: very high. Formal planning problem, STRIPS/PDDL intuition, state/action/transition/cost/goal, heuristic planning, A*, relaxed planning.
- `MAS`: high. Multi-agent systems and game-theory overlap.
- `KO`: medium-high. CSP/constraint reasoning often sits next to planning.
- `UIR`: medium. Robotics/smart mobility/planning overlap, but probably less direct than PUI.
- `SMU`: medium. ML is listed but is not the dominant signal.

Student-history analogues:

- Surynek repeatedly asked state-space planning/search/games/CSP in nearby AI reports; this is the closest historical analogue to Komenda's planning/multi-agent lane.

Preparation implication:

- For PUI, never start vague. Start with the formal tuple: states, initial state, actions/operators, transition/successor function, action cost, goal test, plan as sequence/partial order, objective. Then connect to A*, admissible/consistent heuristic, planning graph/SAT/relaxed planning if relevant.

### Miroslav Bures

Public signal:

- CTU publication profile is dominated by software testing, combinatorial interaction testing, constrained/path-based testing, model-based testing, finite-state-machine testing, and coverage/test generation.

Most likely exam subjects:

- `KO`: medium-high. Constraint satisfaction, constrained test generation, combinatorial interaction testing, and optimization can naturally map to CSP/AC-3/ILP/TSP-style reasoning.
- `PAL`: medium. Finite-state machines, directed-graph coverage, path-based testing, graph traversal/state-space coverage.
- `TAL`: low-medium. Automata/formal models can appear indirectly through FSM testing, but he is not mainly a TAL examiner in the reports.
- Software engineering topics would be high, but they are outside your nine-question scope.

Student-history signal:

- Bures appears directly in student reports asking testing/coverage and line-coverage questions. This is not one of your nine target topics, but it confirms he asks inside his own expertise.

Preparation implication:

- For your syllabus, use his presence as a reason to be crisp on `KO` CSP formalism and `PAL` graph/state-machine representations: variables/domains/relations, constraints, path coverage intuition, graph traversal, automata/state-space modelling.

### Gustav Sir

Public signal:

- His page states AI research with focus on deep relational machine learning, learning from complex dependencies and structures such as knowledge graphs and databases, combining relational logic with deep learning.

Most likely exam subjects:

- `SSU`: very high. Neural nets, deep learning, regularization, evaluation, relational/graph-structured data if asked.
- `LUP`: high. First-order logic, unification, knowledge representation, relational logic, logic + learning overlap.
- `SMU`: medium. Probabilistic/structured ML or RL could come up, but public signal is more relational ML than MDPs.
- `PAL`: low-medium. Graph data structures may appear as background, not likely as the main ask.

Student-history analogues:

- Drbohlav/Posik/Werner reports show ML examiners asking neural networks, backprop, Bayes classifier, perceptron, SVM, and optimization details. Sir's lane suggests similar pressure: do not only know terms; know how the model learns and what the representation means.

Preparation implication:

- For SSU, drill neural networks/backprop, SVM, overfitting/regularization, evaluation metrics, bias/variance. For LUP, drill FOL/unification/resolution/Prolog/KR enough to connect logic representations to learning.

### Radim Baca

Public signal:

- His academic page lists research interests in query execution plans in relational databases, query algebras, SQL formalization, and similarity search algorithms; DBRG lists SQL query processing, physical database design, and XML.

Most likely exam subjects:

- `PAL`: high. B-tree/B+ tree, search trees, indexing, external-memory motivation, query/index lookup intuition.
- `KO`: medium. Query optimization can touch algorithmic optimization, joins, constraints, and search.
- `LUP`: low-medium. SQL/query algebra/formalization can be logic-adjacent, but this is not the main syllabus overlap.

Student-history signal:

- No direct match found in your pasted reports where Baca asked a target question. Public research is the main signal.

Preparation implication:

- Treat B-tree/B+ tree as high-priority PAL. Be able to draw insertion/search, splitting, leaf chaining in B+ trees, disk/page motivation, and compare to AVL/RB/BST.

### Jakub Rada

Signal:

- Listed as secretary. I did not treat him as a likely source of oral technical questions.

## Historical Examiner Correlations From Student Reports

### Strong Correlation Cases

| Examiner | Reported question pattern | Public/research lane | Correlation |
|---|---|---|---|
| Jan Faigl | `UIR` motion planning, configuration space, RRT/PRM, asymptotic completeness/optimality | Mobile robotics, path and motion planning, multi-robot systems | Very strong |
| Pavel Surynek | Planning, state-space search, minimax/two-player games, CSP, arc consistency | Multi-agent path finding, SAT/SMT, heuristic search, motion planning, CSP, robotics | Very strong |
| Tomas Werner | Classifier, SVM, margin maximization, quadratic optimization | Optimization, Markov random fields, constraint satisfaction, ML | Strong |
| Ondrej Kuzelka | CSP/AC-3 question in 2026 report | Constraint satisfaction + ILP/relational learning publications | Strong |
| Rostislav Horcik | TAL: P/NP/coNP/NPC, reductions, regular languages, pumping/Nerode | Logic/theory-oriented profile in reports | Strong by history |
| Alena Gollova | FOL, graph SCC, automata, linear algebra, crypto/math | Math/formal foundations in reports | Strong by history |
| Miroslav Bures | Testing automation, line coverage, no-assert 100% line coverage trap | Software testing, CIT, model/path-based testing | Strong |

### Medium Correlation Cases

| Examiner | Reported question pattern | Likely interpretation |
|---|---|---|
| Demlova | TSP, heuristics/approximation, directed components/graphs | Theory/algorithmic common-question examiner |
| Velebil | MST, tree definitions, linear algebra | Math/graph/formal reasoning |
| Berezovskyj | Automata, text search, dictionary automaton, damaged words | Algorithmic/formal PAL detail |
| Drbohlav / Posik | Neural nets, backprop, Bayes decision, perceptron | ML/statistical pattern-recognition exam lane |
| Navara | Markov chains / probability / numerical/math | Math/probability; often asks short precise thing |

## What This Means For Your Study Plan

The exam can still use prewritten common/specialization questions, so do not abandon any page. But the committee signal says your highest-return topics are:

1. `MAS`: game theory, Nash, minimax, zero-sum, cooperative games, Shapley, core.
2. `PUI`: planning formalism, A*, heuristics, relaxed/SAT/graph planning, state-space precision.
3. `SSU`: neural nets, backprop, SVM, regularization, evaluation, model assumptions.
4. `LUP`: FOL, unification, resolution, Prolog, KR, logic/model meaning.
5. `KO`: CSP/AC-3/ILP/TSP, and be able to formulate examples cleanly.
6. `PAL`: B-tree/B+ tree, MST/SCC/search trees/text search, with B-tree promoted because of Radim Baca.

For the oral exam style, the history says examiners reward:

- Formal definition first, friendly explanation second.
- A small worked example on the board.
- Clear variables and notation.
- Knowing why an algorithm has its guarantee, not only what it does.
- Saying what data structure is used in implementation.

## Local Evidence Used

- Filtered relevant questions: `student_reported_relevant_questions.md`.
- Master archive excerpt with Kuželka, Demlová, Žukovec, Gollová, Horčík, Faigl, Berezovskyj: `/Users/fabian/.codex/attachments/b64155a3-f631-46d9-b75b-888b718ee9f3/pasted-text.txt`.
- OI AI reports with Velebil/Werner/Surynek and B-tree/TAL examples: `/Users/fabian/.codex/attachments/0d54f0ce-7109-4d28-891a-884760b420bf/pasted-text.txt`.
- 2025 bachelor-adjacent but AI-overlapping reports with Surynek/Drbohlav/Pošík/Navara/Bureš: `/Users/fabian/.codex/attachments/dd44fe7e-889c-4694-836d-bcbebcc718f8/pasted-text.txt`.

## Web Sources Checked

- Tomas Kroupa CTU FEE profile/publications: game theory, Nash, Shapley, coalitional games.
- Antonin Komenda AIC profile: automated planning, multiagent systems, AI, game theory, optimization.
- Miroslav Bures CTU FEE publications: software testing, combinatorial interaction testing, constrained/path-based/model-based testing.
- Gustav Sir personal/academic page: deep relational ML, knowledge graphs/databases, relational logic + deep learning.
- Radim Baca academic page: relational database query execution, SQL formalization, query algebras, similarity search.
- Jan Faigl robotics page: mobile robotics, path and motion planning, multi-robot systems.
- Tomas Werner page: optimization, Markov random fields, constraint satisfaction.
- Ondrej Kuzelka CTU FEE publications: constraint satisfaction and inductive logic programming.
- Pavel Surynek FIT CTU publications: multi-agent path finding, SAT/SMT, conflict reasoning, planning.
