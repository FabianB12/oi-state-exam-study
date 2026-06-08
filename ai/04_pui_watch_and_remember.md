# PUI Watch and Remember

Companion guide for `study/pui.html`. The aim is not to watch whole courses. Use the short segments, then immediately do oral recall and the page labs.

## Selected videos and resources

| Topic | Source | Duration | Watch segment | Why it is here |
| --- | --- | ---: | --- | --- |
| Planning as logic/actions | [CS188 SP24 LEC07 - Logic: Propositional Logic and Planning](https://www.youtube.com/watch?v=WVaBk3ldQIo) by CS 188 at UC Berkeley | 80:09 | 45:00-65:00 | Gives an accessible bridge from logic representation to planning constraints/actions. |
| Heuristic search | [CS188 SP24 LEC03 - Search: Informed Search, A*, Heuristics](https://www.youtube.com/watch?v=zRFZwAUQT8U) by CS 188 at UC Berkeley | 74:18 | 25:00-52:00 | Covers A*, admissibility, consistency, and why heuristics guide search. |
| Planning-graph heuristics | [4.8. AIPLAN - Planning Graph Heuristics](https://www.youtube.com/watch?v=RY1MmecU1FY) by Open Education Edinburgh | 9:50 | Full video | Short planning-native bridge from planning graphs to relaxed-plan heuristics. |
| FF / relaxed-plan heuristic | [4.10. AIPLAN - The FF Planner](https://www.youtube.com/watch?v=7XH60fuMlIM) by Open Education Edinburgh | 14:12 | Full video | Best short video support for `hff`, relaxed planning graphs, and FF-style satisficing search. |
| Pattern databases | [4.9. AIPLAN - Pattern Databases](https://www.youtube.com/watch?v=HZWV4uOJWk8) by Open Education Edinburgh | 12:47 | Full video | Covers projection/abstraction intuition and why PDB lookup trades memory for stronger estimates. |
| Potential heuristics | [ICAPS 2015 - New Optimization Functions for Potential Heuristics](https://www.youtube.com/watch?v=RbIdVjs4PT0) | 16:26 | Optional full video | Research-level but short and directly named for the potential-heuristic exam bucket. |
| MDP basics | [CS188 SP24 LEC17 - MDPs: States, Values, Policies, Q-values](https://www.youtube.com/watch?v=i2hHZRhzy-k) by CS 188 at UC Berkeley | 83:20 | 0:00-18:00 | Covers uncertain action outcomes, policies, and values. |
| Value iteration backup | [Stanford CS221 MDP value-iteration slides](https://stanford-cs221.github.io/spring2024-extra/modules/mdps/mdp1.pdf) | Slides | Skim Bellman backup + policy extraction | Stable official backup for MDP definitions and value-iteration intuition; the old Stanford YouTube mirror is not reliably embeddable. |
| MCTS | [Monte Carlo Tree Search](https://www.youtube.com/watch?v=UXW2yZndl7U) by John Levine | 15:49 | Full video | Exactly in the preferred length range and covers the core MCTS loop. |
| MCTS lecture segment | [CS188 SP24 LEC06 - Games: Expectimax, Monte Carlo Tree Search](https://www.youtube.com/watch?v=_-xH1CAfoxM) by CS 188 at UC Berkeley | 79:14 | 72:00-79:00 optional | Official course backup for rollouts and UCB/UCT. |
| PUI official scope | [CTU BE4M36PUI subject description](https://intranet.fel.cvut.cz/en/education/bk/predmety/48/69/p4869906.html) | Text | Skim course outlines | Confirms state-space planning, heuristics, uncertainty, MDP/POMDP, and MCTS. |
| Exam-specific lecture resources | [CTU BE4M36PUI lecture plan](https://cw.fel.cvut.cz/b212/courses/be4m36pui/lectures) | Slides/resources | Use lectures 1-5, 7-9, 12 | Directly maps to relaxation, landmarks/LM-Cut, LP heuristics, abstractions, nondeterministic and probabilistic planning. |
| Delete-relaxation backup | [University of Basel Automated Planning: Delete Relaxation Heuristics](https://ai.dmi.unibas.ch/_files/teaching/fs25/ai/slides/ai-f04-handout4.pdf) | Slides | Skim summary + formulas | Clear formulas and summary for `hmax`, `hadd`, and `hff`. |
| LP/operator-counting backup | [Fast Downward ConstraintGenerator docs](https://www.fast-downward.org/23.06/documentation/search/ConstraintGenerator/) | Docs | Skim constraint list | Practical reference for delete-relaxation, LM-Cut, state-equation, and operator-counting constraints. |
| Nondeterministic planning backup | [CTU BE4M36PUI lecture plan](https://cw.fel.cvut.cz/b212/courses/be4m36pui/lectures) | Slides/resources | Lecture 8 | I did not find a short public video that cleanly covers weak/strong/strong-cyclic planning at exam depth; use the official deck for this slice. |

## Watch loop

1. Watch one segment only.
2. Close the video.
3. Say the "what you must be able to say" bullets from `study/pui.html`.
4. Do the lab for that module.
5. Use flashcards/quizzes only after attempting free recall.

## Must-remember oral hooks

- Raw search/planning prompt: define `(S,A,gamma,c,s0,G)` before algorithms.
- STRIPS: facts, actions, initial state, goal; applicable if preconditions hold; successor deletes then adds.
- PDDL: syntax for domain/problem files; not a planner by itself.
- SAS: finite-domain variables make mutual exclusion explicit.
- Optimal vs satisficing: proof of cheapest plan versus any valid plan.
- A*: `f = g + h`; use open priority queue, best `g`, parent pointers, closed set, and reopen if a better path appears unless the heuristic is consistent.
- SAT planning: fix horizon `k`, encode actions/facts/preconditions/effects/frame/mutex clauses, solve SAT, increase `k` if needed.
- Graphplan: alternating fact/action layers with mutexes; relaxed planning graphs motivate `hff`.
- Delete relaxation: facts accumulate; `hmax` is admissible/weak, `hadd` is stronger/not admissible, `hff` extracts one relaxed plan.
- Abstractions: solve smaller projected task exactly; pattern databases trade memory for informativeness; merge-and-shrink controls abstraction size.
- Landmarks: must happen in every plan; LM-Cut repeatedly charges necessary relaxed cuts.
- LP heuristics: action-count variables plus necessary constraints; potential heuristics are weighted fact/value functions constrained by actions.
- What they may ask on heuristics: name the relaxed/abstract problem behind the heuristic, say whether it is admissible, then state the tradeoff or failure mode.
- Nondeterministic planning: weak, strong, strong cyclic policies; AND/OR search.
- What they may ask on nondeterminism: why a fixed sequence is not enough, what fairness means for strong cyclic plans, and which AND/OR node belongs to planner choice versus outcome branching.
- MDP/POMDP: probabilities and rewards give value iteration; partial observability turns states into beliefs.
- MCTS: selection, expansion, rollout, backprop; UCT = mean value plus exploration bonus.
