# Artificial Intelligence Specialization Validation Report

## HTML Study Framework Validation Pass

Validation date: 2026-06-04

Scope:

- Original AI-specialization bullets in `exam_questions.md`.
- Formal Markdown notes `ai/01_...md` through `ai/06_...md`.
- Generated PDFs `ai/01_...pdf` through `ai/06_...pdf`, inspected via `pdftotext`.
- Watch guides `ai/01_smu_watch_and_remember.md` through `ai/06_uir_watch_and_remember.md`.
- Interactive HTML pages `study/smu.html`, `study/lup.html`, `study/ssu.html`, `study/pui.html`, `study/mas.html`, and `study/uir.html`.

Result: **complete for exam coverage**. I did not find a missing AI exam bucket. Every original bullet has a corresponding formal explanation, study-page module, recall/quiz component, and video or resource support.

Fixes made during this pass:

- SMU: added explicit "state utility" wording to the MDP section and strengthened "temporal difference" wording in the HTML heading.
- SMU: replaced an unreliable Stanford YouTube mirror with the verified UC Berkeley CS188 MDP video and stable Stanford/David Silver text backups.
- SMU: replaced a dead David Silver slide URL with the working Stanford-hosted copy: `https://web.stanford.edu/class/cme241/lecture_slides/david_silver_slides/control.pdf`.
- LUP: replaced an unreliable first-order-resolution YouTube mirror with stable Stanford CS221 slides and the working Stanford Introduction to Logic resolution notes.
- LUP: changed the Stanford resolution notes link from the certificate-problem host to `http://intrologic.stanford.edu/extras/resolution.html`.
- PUI: replaced an unreliable optional Stanford value-iteration YouTube mirror with stable Stanford CS221 value-iteration slides.
- PUI: strengthened exact "linear programming heuristics" wording in the HTML heading.
- MAS: strengthened exact "optimal single-item auction" wording in the formal notes and HTML heading.

Local validation:

- All six AI HTML pages parse successfully.
- Shared JS syntax check passed with `node --check study/assets/study.js`.
- Coverage-term audit passed for all six AI questions.
- Page-component audit:
  - SMU: 5 content modules plus panic/oral sections; 12 video/resource cards; flashcards, quizzes, and free recall present.
  - LUP: 5 content modules plus panic/oral sections; 12 video/resource cards; flashcards, quizzes, and free recall present.
  - SSU: 5 content modules plus panic/oral sections; 10 video/resource cards; flashcards, quizzes, and free recall present.
  - PUI: 5 content modules plus panic/oral sections; 10 video/resource cards; flashcards, quizzes, and free recall present.
  - MAS: 5 content modules; 15 video/resource cards; flashcards, quizzes, and free recall present.
  - UIR: 5 content modules; 14 video/resource cards; flashcards, quizzes, and free recall present.

External-resource validation:

- Checked 86 distinct AI-study URLs from the watch guides and AI README.
- Result: 86 OK, 0 errors.
- YouTube metadata check: 59 OK.
- Non-YouTube HTTP/PDF/course-resource check: 27 OK.

Video-quality conclusion:

- The strongest sources are university/course sources where possible: Stanford, UC Berkeley CS188/CS221/CS229, MIT OCW, CTU/FEL pages, CMU notes, and Yale.
- Short explanatory channels are used where they are genuinely clearer and focused: StatQuest, 3Blue1Brown, William Spaniel, Game Theory Online, and selected robotics/planning channels.
- Longer videos are either timestamped or marked as optional/resource backup.
- Weak or unreliable embeds found during validation were replaced or downgraded to stable resource cards.

Residual risk:

- No study page can guarantee the examiner will not phrase a question unusually or ask for a derivation deeper than the state-exam bullet list. But against the provided original bullets, formal notes, PDFs, watch guides, and HTML pages, the AI part is now covered well enough that there should not be a topic-level surprise.

Validation date: 2026-04-24

## Internet Search Outcome

I searched for public materials for the six AI-specialization state exam questions, including GitHub repositories and CTU/FEL CourseWare pages. I found official courseware and lecture/topic pages, but no complete public student-answer repository comparable to the common-part repositories.

Official/useful pages found:

- SMU: `https://cw.fel.cvut.cz/wiki/courses/smu/start`
- LUP: `https://cw.fel.cvut.cz/old/courses/be4m36lup/start`
- SSU: `https://cw.fel.cvut.cz/b201/courses/be4m33ssu/lectures`
- PUI: `https://cw.fel.cvut.cz/b212/courses/be4m36pui/lectures`
- MAS/CGT: `https://cw.fel.cvut.cz/b221/courses/cgt/start`
- UIR: `https://cw.fel.cvut.cz/b251/courses/uir/start`
- UIR lectures: `https://cw.fel.cvut.cz/b251/courses/uir/lectures/start`
- UIR exam topics: `https://cw.fel.cvut.cz/b251/courses/uir/resources/exam_topics`

The final notes were synthesized from the official state-exam bullets, these courseware pages, and standard material for the relevant subjects.

## Coverage Result

### Question 1: SMU

Validated file: `ai/01_smu_learnability_bandits_rl.md`

Status: complete against `exam_questions.md`.

Covered:

- PAC and online learnability models, efficient learnability, assumptions, and mutual relations.
- VC dimension and learnability conditions.
- Learnability algorithms for conjunctions and disjunctions.
- Reductions to conjunction/disjunction learning.
- Multi-armed bandits, regret, epsilon-greedy, UCB, and Thompson sampling.
- Reinforcement learning: state utility, optimal policy, value iteration, direct utility estimation, adaptive dynamic programming, TD learning, exploration/exploitation, Q-learning, SARSA, and policy search.

### Question 2: LUP

Validated file: `ai/02_lup_resolution_proving_model_search.md`

Status: complete against `exam_questions.md`.

Covered:

- Propositional normal forms, SAT, resolution, unit propagation, DPLL/CDCL, clause learning.
- SMT and lazy SMT solving.
- Logic programming and Prolog: definite/Horn clauses, Herbrand interpretations, minimal model semantics, SLD, SLDNF, negation as failure, cut.
- FOL normal forms, Skolemization, unification, FOL resolution, subsumption, saturation.
- Equality handling by axioms vs. paramodulation/superposition.
- Grounding and propositional SAT encoding for model search.

### Question 3: SSU

Validated file: `ai/03_ssu_erm_mle_em_deep_networks.md`

Status: complete against `exam_questions.md`.

Covered:

- Risk, empirical risk, ERM, Hoeffding inequality, generalization bounds.
- Statistical consistency and VC dimension.
- SVMs and kernel SVMs.
- MLE, estimator consistency, EM lower-bound derivation, E-step and M-step.
- Deep networks: neurons, architectures, CNNs, backpropagation, layer types, initialization, SGD.

### Question 4: PUI

Validated file: `ai/04_pui_domain_independent_planning.md`

Status: complete against `exam_questions.md`.

Covered:

- STRIPS and SAS, satisficing and optimal planning, heuristic search and heuristic properties.
- Delete-relaxation heuristics: `hmax`, `hadd`, `hff`.
- Abstraction heuristics, projection, pattern databases, merge-and-shrink.
- Landmarks, landmark discovery, LM-Cut.
- LP heuristics, state-equation heuristic, potential heuristic.
- Nondeterministic planning, probabilistic planning, MDPs, value iteration, MCTS and UCT.

### Question 5: MAS

Validated file: `ai/05_mas_agents_multiagent_game_theory.md`

Status: complete against `exam_questions.md`.

Covered:

- Normal-form games, mixed strategies, Nash equilibrium, dominated strategies.
- Zero-sum games and LP solution.
- Correlated and Stackelberg equilibria.
- Extensive-form games, imperfect information, perfect recall, strategy types, Nash and subgame-perfect equilibrium.
- EFG solution by LP/sequence form and regret minimization/CFR.
- Coalitional games, core, Shapley value, simple voting games, Shapley-Shubik and Banzhaf indices.
- Auction mechanisms, single-item bidding, revenue equivalence, optimal single-item auctions, combinatorial auctions.

### Question 6: UIR

Validated file: `ai/06_uir_robot_decision_planning_coordination.md`

Status: complete against `exam_questions.md`.

Covered:

- Robotic paradigms and architectures, embodiment, sensors, actuators.
- Hierarchical, reactive, and hybrid paradigms with advantages/drawbacks.
- Path/motion planning, configuration space, roadmap methods.
- Graph-based planning, speedups, D* and D* Lite.
- Informative path planning, exploration, frontier and information-theoretic methods.
- Multi-robot task allocation, centralized/decentralized methods.
- Multi-goal planning, sequence-dependent robotic TSP, curvature-constrained trajectories.
- Routing problems with profits, decoupled/transformation/sampling methods.
- Sampling-based motion planning, PRM, RRT, RRT*, probabilistic completeness, asymptotic optimality.

## Print and Formatting Validation

- All six Markdown files use Pandoc-compatible Markdown with LaTeX math.
- All PDFs render successfully with `pandoc` and `xelatex`.
- All PDFs are A4.
- Placeholder scan found no unresolved draft markers in the AI notes or main exam index.

## Second Validation Pass

The second validation pass checked the six questions one by one against the bullets in `exam_questions.md`, the available CourseWare pages, and the compiled note headings/content.

### Question 1: SMU

Result: complete.

Checked that the notes explicitly cover PAC definitions, online learning definitions, efficient learnability, i.i.d. vs. adversarial assumptions, PAC/online relations, VC dimension, necessary and sufficient PAC condition, learnability algorithms for conjunctions/disjunctions in PAC and online models, reductions to these classes, bandit regret, epsilon-greedy limitations, UCB guarantees, Thompson sampling, and all requested RL methods.

### Question 2: LUP

Result: complete.

Checked that the notes explicitly cover propositional normal forms, SAT, resolution, unit propagation, clause learning/CDCL, lazy SMT, Prolog/Horn clauses, Herbrand interpretations, minimal model semantics, negation as failure, SLDNF, cut, FOL normal forms, unification in resolution, subsumption, saturation, equality by axioms vs. paramodulation/superposition, grounding, and SAT encoding for finite-domain model search.

### Question 3: SSU

Result: complete after wording refinement.

Checked that the notes explicitly cover risk, empirical risk, Hoeffding/generalization bounds, consistency, VC dimension, SVM/kernel SVM, MLE, estimator consistency, EM as lower-bound optimization with E-step and M-step, and neural-network training. Wording was refined to mention EM as block-coordinate ascent on the lower bound, equivalently descent when minimizing the negative objective.

### Question 4: PUI

Result: complete.

Checked that the notes explicitly cover STRIPS/SAS, satisficing/optimal planning, heuristic search, heuristic properties, delete-relaxation heuristics, abstraction/projection/pattern databases/merge-and-shrink, landmarks and LM-Cut, LP/state-equation/potential heuristics, nondeterministic planning, probabilistic planning, MDP value iteration, and MCTS/UCT.

### Question 5: MAS

Result: complete after small expansion.

Checked that the notes explicitly cover NFGs, mixed strategies, Nash equilibrium properties/computation, dominated strategies, zero-sum LP, correlated and Stackelberg equilibria, EFG representation, imperfect information, perfect recall, strategy types, Nash/SPE, LP/sequence-form solution, regret/CFR, coalitional games, core, Shapley value, voting indices, auctions, single-item bidding, strategic/revenue equivalence, optimal auctions, and combinatorial auctions. Added concise material on Stackelberg computation and compact coalitional-game representations.

### Question 6: UIR

Result: complete.

Checked that the notes explicitly cover robotic paradigms/control architectures, embodiment, sensors, actuators, hierarchical/reactive/hybrid properties, path vs. motion planning, configuration space, roadmap methods, graph/grid planning, speedups, D*/D* Lite, informative path planning, exploration decomposition, frontier and information-theoretic exploration, centralized/decentralized multi-robot task allocation, multi-goal robotic TSP variants, curvature-constrained trajectories, routing with profits, decoupled/transformation/sampling solution methods, PRM/RRT/RRT*, probabilistic completeness, and asymptotic optimality.

Rendered PDFs:

- `ai/01_smu_learnability_bandits_rl.pdf`
- `ai/02_lup_resolution_proving_model_search.pdf`
- `ai/03_ssu_erm_mle_em_deep_networks.pdf`
- `ai/04_pui_domain_independent_planning.pdf`
- `ai/05_mas_agents_multiagent_game_theory.pdf`
- `ai/06_uir_robot_decision_planning_coordination.pdf`
- `ai/ai_specialization_all.pdf`
