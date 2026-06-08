# Artificial Intelligence Specialization Validation Report

## SSU Video Coverage Audit

Validation date: 2026-06-08

Scope:

- SSU-only files requested for audit: `study/ssu.html`, `ai/03_ssu_watch_and_remember.md`, `ai/03_ssu_erm_mle_em_deep_networks.md`, `exam_questions.md`, and this validation report.
- Compared the SSU state-exam bullets against the formal SSU notes, watch guide, and current HTML video/resource cards.

Result: **SSU coverage is complete after video reinforcement**. The original HTML video cards covered the headline exam spine: ERM/VC, SVM/kernel SVM, MLE/EM, backpropagation, SGD, and CNNs. The weak video coverage was in nearby ML fundamentals already present in the notes and oral drills: bias/variance, confusion-matrix metrics, decision trees, bagging/random forests, and boosting.

Fixes made during this audit:

- SSU: added timestamped StatQuest cards for bias/variance, confusion matrices, decision/classification trees, and random forests.
- SSU: added optional timestamped AdaBoost segment for boosting as a likely oral pivot rather than a headline topic.
- SSU: added a "what they may ask" checklist tying those videos to bias/variance, metrics, tree split criteria/pruning, bagging/random forests, and boosting.
- SSU: mirrored the same videos, timestamps, and checklist in `ai/03_ssu_watch_and_remember.md`.

## SMU Video Coverage Audit

Validation date: 2026-06-08

Scope:

- SMU-only files requested for audit: `study/smu.html`, `ai/01_smu_watch_and_remember.md`, `ai/01_smu_learnability_bandits_rl.md`, `exam_questions.md`, and this validation report.
- Compared the SMU state-exam bullet list against the formal SMU notes, watch guide, and current HTML video/resource cards.

Result: **SMU coverage remains complete**, with the weakest video support concentrated in two places: exact conjunction/disjunction literal-elimination learning, and passive-RL distinctions between direct utility estimation, ADP, and TD. The Boolean topic still has no good short exact-match video, so the HTML lab/formal notes remain the primary resource. The RL-control module now has stronger timestamped video coverage and official CTU backup.

Fixes made during this audit:

- SMU: added Mutual Information's timestamped TD/Q-learning segment for Monte Carlo-to-TD bootstrapping, SARSA, and Q-learning.
- SMU: added Mutual Information's optional policy-gradient segment for the policy-search exam bullet.
- SMU: added official CTU SMU tutorial 9 as backup for direct utility estimation and adaptive dynamic programming calculations.
- SMU: tightened the optional Caltech VC card to the precise 7:00-26:00 segment.
- SMU: fixed stale panic-pass MDP timestamp wording so it matches the current CS188 and value-iteration cards.

## UIR Video Coverage Audit

Validation date: 2026-06-08

Scope:

- UIR-only files requested for audit: `study/uir.html`, `ai/06_uir_watch_and_remember.md`, `ai/06_uir_robot_decision_planning_coordination.md`, `exam_questions.md`, and this validation report.
- Compared the UIR state-exam bullets against the formal UIR notes, watch guide, and current HTML video cards.

Result: **UIR coverage is complete after video reinforcement**. The formal notes already covered all exam bullets; the video gap was that some algorithmic buckets relied on project/demo videos or long optional lectures. The page now has more short, textbook-aligned clips for graph/grid search, PRM/RRT, frontier exploration, mutual information, and data-collection routing.

Fixes made during this audit:

- UIR: added Modern Robotics / Northwestern videos for graph search, grid motion planning, PRM, and RRT.
- UIR: added a short frontier-exploration clip before the research/demo exploration videos.
- UIR: added StatQuest's mutual-information explainer for the entropy/mutual-information part of informative path planning.
- UIR: added CTU Computational Robotics Lab's close-enough-orienteering video for routing with neighborhoods/profits.
- UIR: kept D* Lite as a timestamped MIT OCW segment because no good short teaching video was found; short public D* clips were mostly demos without enough exam explanation.

## MAS Video Coverage Audit

Validation date: 2026-06-08

Scope:

- MAS files requested for audit: `study/mas.html`, `ai/05_mas_watch_and_remember.md`, `ai/05_mas_agents_multiagent_game_theory.md`, `exam_questions.md`, and this validation report.
- Compared the MAS state-exam bullets against the formal MAS notes, watch guide, and current HTML video cards.

Result: **MAS video coverage is complete after expansion**. Module 1 already had a full short-video path for normal-form games. The remaining modules now cover zero-sum LP, Stackelberg/security games, extensive-form basics, information sets, CFR intuition, cooperative games, voting power indices, auction equivalence, Myerson intuition, VCG, and combinatorial allocations.

Fixes made during this audit:

- MAS: added short/targeted clips for zero-sum LP and Stackelberg equilibrium.
- MAS: added an extensive-form basics video and a timestamped CFR segment for the algorithmic extensive-form keywords.
- MAS: added Shapley-Shubik and Banzhaf voting-index videos.
- MAS: added Myerson/optimal-auction intuition, VCG, and VCG/combinatorial-allocation videos.
- MAS: kept long university/security-game sources timestamped and optional where no short video covers the same exam slice cleanly.

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
  - SMU: 5 content modules plus panic/oral sections; 13 video/resource cards; flashcards, quizzes, and free recall present.
  - LUP: 5 content modules plus panic/oral sections; 16 video/resource cards; flashcards, quizzes, and free recall present.
  - SSU: 5 content modules plus panic/oral sections; 15 video/resource cards; flashcards, quizzes, and free recall present.
  - PUI: 5 content modules plus panic/oral sections; 14 video/resource cards; flashcards, quizzes, and free recall present.
  - MAS: 5 content modules; 26 video/resource cards; flashcards, quizzes, and free recall present.
  - UIR: 5 content modules; 21 video/resource cards; flashcards, quizzes, and free recall present.

External-resource validation:

- Previous broad check covered 86 distinct AI-study URLs from the watch guides and AI README.
- Current 2026-06-08 embed check covered 121 unique YouTube embeds from the modified study pages.
- Result: 121 YouTube oEmbed checks OK, 0 remaining YouTube errors.
- The Stanford CS221 first-order-resolution YouTube mirror returned `401`; it was replaced with the official Stanford Panopto/course resource card.
- Spot-checks for newly important non-YouTube resources returned OK: Stanford Panopto/modules, Modern Robotics/Northwestern, CTU lecture pages, and Fast Downward docs.

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
