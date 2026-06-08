# LUP Watch And Remember Guide

Interactive HTML page: [study/lup.html](../study/lup.html)

Formal notes: [02_lup_resolution_proving_model_search.md](02_lup_resolution_proving_model_search.md)

Estimated time: **4-5.5h full pass**; **45m panic pass**.

## Coverage Checklist

- [x] Propositional normal forms: NNF, CNF, DNF.
- [x] Tseitin transformation and why it avoids exponential CNF blow-up.
- [x] SAT, resolution rule, resolution refutation, empty clause.
- [x] Unit propagation, DPLL, CDCL, implication graph, clause learning, backjumping.
- [x] Lazy SMT / DPLL(T) idea: Boolean abstraction plus theory solver.
- [x] Horn and definite clauses, Herbrand universe/base/interpretations, least Herbrand model.
- [x] SLD resolution, Prolog search strategy, SLDNF, negation as failure, cut.
- [x] FOL clause-form pipeline, Skolemization, unification, MGU, occurs check.
- [x] FOL resolution, subsumption, saturation, possible non-termination.
- [x] Equality axioms, paramodulation, superposition.
- [x] Finite-domain grounding, propositional SAT encodings, grounding blow-up and mitigations.

## Module 1: Propositional Normal Forms, SAT, DPLL, CDCL, And SMT

### Primary Videos

**Module 5 - Tseitin transformation**  
Duration verified during implementation: **10:58**  
Quality reason: short and directly focused on the linear-size CNF transformation the exam notes mention.

Watch segments:

- 0:00 why Tseitin is needed.
- 4:20 subformula variables.
- 7:50 CNF clauses.

Fallback link: https://www.youtube.com/watch?v=fd9gjzZE1-4

**Lecture 10-1 DPLL (CS433 clip)**  
Duration verified during implementation: **11:06**  
Quality reason: compact explanation of DPLL as propagation plus branching.

Watch segments:

- 0:00 DPLL setup.
- 3:50 propagation.
- 7:00 branching.

Fallback link: https://www.youtube.com/watch?v=qnEhZFH9gXw

**CDCL Visualization Demo**  
Duration verified during implementation: **6:21**  
Quality reason: gives a quick visual model for implication graphs, conflicts, and learned clauses.

Watch segments:

- 0:00 conflict graph.
- 2:40 learned clause.

Fallback link: https://www.youtube.com/watch?v=5Cow2SYdnm4

**Lecture 10-1 Satisfiability Modulo Theory(SMT) solver**

Creator: **Automated Reasoning**

Duration verified during audit: **11:22**
Quality reason: closes the previous SMT video gap with a compact DPLL(T) explanation: Boolean CDCL structure plus theory consistency checks and conflict learning.

Watch segments:

- 0:00 SMT solvers.
- 0:50 Boolean structure vs theory reasoning.
- 6:40 theory checks/deduction.
- 8:30 conflict learning/backtracking.

Fallback link: https://www.youtube.com/watch?v=vrA4zFl0zd0

Useful text backups:

- CMU SMT notes: https://www.cs.cmu.edu/~15414/s22/lectures/19-smt.pdf
- SMT beginner tutorial abstract: https://theory.stanford.edu/~barrett/pubs/BTB%2B24-abstract.html
- Fields Institute CDCL overview: https://www.fields.utoronto.ca/talks/cdcl-sat-solving-past-present-future

What they may ask:

- Show why Tseitin CNF is equisatisfiable and linear-size.
- Trace DPLL/CDCL from unit propagation to learned clause.
- Explain lazy SMT as SAT/CDCL over Boolean abstractions plus a theory solver.

## Module 2: Logic Programming, Prolog, SLDNF, Negation As Failure, And Cut

### Primary Videos

**Module 13 - SLD resolution**  
Duration verified during implementation: **12:18**  
Quality reason: focused on SLD trees and goal replacement.

Watch segments:

- 0:00 SLD tree.
- 6:00 goal replacement.

Fallback link: https://www.youtube.com/watch?v=B-ngngHQcMU

**Logic: Negation in Prolog**  
Duration verified during implementation: **6:55**  
Quality reason: short video for the exact "negation as failure is not classical negation" caveat.

Watch segments:

- 0:00 negation as failure.
- 3:50 caveats.

Fallback link: https://www.youtube.com/watch?v=FE3UEtQ7f_w

**CUT and Fail in PROLOG**  
Duration verified during implementation: **9:47**  
Quality reason: compact demonstration of cut and cut-fail behavior.

Watch segments:

- 0:00 cut.
- 4:20 cut-fail.

Fallback link: https://www.youtube.com/watch?v=Eymm8FSSBWc

Useful text backups:

- Simply Logical SLD resolution: https://book.simply-logical.space/src/text/1_part_i/3.1.html
- CLIP negation as failure notes: https://cliplab.org/~vocal/public_info/seminar_notes/node52.html

## Module 3: First-Order Clause Form, Unification, Resolution, Subsumption, And Saturation

### Primary Videos

**Logic 9 - First Order Resolution | Stanford CS221: AI (Autumn 2022)**

Creator: **Stanford Online / CS221**

Duration verified during audit: **10:52**
Quality reason: replaces the old text-only primary coverage with a short, high-quality FOL resolution video from Stanford. The public YouTube mirror is not embeddable, so the HTML page links the official Stanford Panopto/course version instead of showing a broken player.

Watch segments:

- 0:00 first-order resolution.
- 1:30 CNF setup.
- 1:55 why unification/substitution is needed.
- 4:45 clause-form example.

Video link: https://stanford-pilot.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=df9f49dd-4d5e-4476-be61-af4d00f26034

Fallback module page: https://stanford-cs221.github.io/autumn2022/modules/

**Stanford CS221 first-order resolution slides**  
Quality reason: stable text backup for the full pipeline beyond the short video: clause form, Skolemization, unification, lifted resolution, subsumption, and saturation.

Study targets:

- clause conversion.
- unification and MGU.
- first-order resolution rule.
- subsumption and saturation.

Primary link: https://stanford-cs221.github.io/spring2024-extra/modules/logic/logic2.pdf

**Unification in First Order Logic**  
Duration verified during implementation: **8:13**  
Quality reason: quick extra practice on substitutions and MGUs.

Watch segments:

- 0:00 substitutions.
- 3:40 MGU examples.

Fallback link: https://www.youtube.com/watch?v=MbAsMEpJL-k

Useful text backups:

- Stanford CS221 logic slides: https://stanford-cs221.github.io/spring2024-extra/modules/logic/logic2.pdf
- Stanford Introduction to Logic: Resolution: http://intrologic.stanford.edu/extras/resolution.html

What they may ask:

- Give the exact FOL clause-form pipeline and say which step only preserves satisfiability.
- State lifted resolution with an MGU.
- Explain subsumption and saturation as redundancy/search-control ideas.

## Module 4: Equality In First-Order Logic

### Optional Video Segment

**How (and why) to Build an Automated Theorem Prover: De-mystifying Logical Inference**  
Duration verified during implementation: **44:48**  
Quality reason: longer than ideal, but it is a useful overview of automated theorem-prover inference. The exact paramodulation/superposition subtopic is better learned from the local lab and text notes.

Watch segments:

- 16:00 inference idea.
- 25:00 proof search.

Fallback link: https://www.youtube.com/watch?v=J3Pm43O48Uo

Important note: I did not find a good short video that cleanly teaches paramodulation and superposition at the level needed for this exam. The HTML page uses an explicit equality selector lab for this reason.

Useful text backups:

- Stanford resolution notes: http://intrologic.stanford.edu/extras/resolution.html
- CMU SMT/EUF notes: https://www.cs.cmu.edu/~15414/s22/lectures/19-smt.pdf

## Module 5: Model Search In Generic Domains

### Primary Videos

**Propositional satisfiability, DPLL / model finding**  
Duration verified during implementation: **8:05**  
Quality reason: short bridge from model finding to SAT search.

Watch segments:

- 0:00 model finding.
- 4:20 DPLL link.

Fallback link: https://www.youtube.com/watch?v=ENHKXZg-a4c

**Lecture 11-1 Encoding into SAT (Lecture 8 in CS433)**

Creator: **Automated Reasoning**

Duration verified during audit: **7:54**
Quality reason: fills the practical SAT-encoding gap: choose Boolean variables, add constraints/clauses, and remember that redundant constraints can guide search.

Watch segments:

- 0:00 encoding goal.
- 1:45 redundant constraints.
- 4:08 Boolean variables.
- 4:35 constraints as clauses.

Fallback link: https://www.youtube.com/watch?v=DO9ZGkhPr8A

**Lecture 11-2 Encoding cardinality constraints (Lecture 8 in CS433)**

Creator: **Automated Reasoning**

Duration verified during audit: **14:58**
Quality reason: directly covers exactly-one style constraints, including at-least-one, at-most-one, pairwise quadratic encoding, and compact encodings.

Watch segments:

- 0:00 cardinality constraints.
- 1:05 at least one.
- 1:28 at most one / pairwise clauses.
- 1:55 compact encodings.

Fallback link: https://www.youtube.com/watch?v=PKbAICDB9tM

Useful text backup:

- Stanford CS221 logic slides, propositionalization and FOL model sections: https://stanford-cs221.github.io/spring2024-extra/modules/logic/logic2.pdf

What they may ask:

- Ground a quantified formula over a finite domain and count possible atoms as n^k.
- Encode implication, at least one, at most one, and exactly one in CNF.
- Explain why grounding explodes and how typing, symmetry breaking, compact cardinality encodings, and lazy grounding help.

## Panic Pass

1. Watch Tseitin 0:00-7:50, DPLL 0:00-7:00, CDCL 0:00-2:40, and SMT 0:00-1:10.
2. Run the SAT/SMT lab and say the lazy SMT loop out loud.
3. Watch SLD 0:00-6:00, then memorize negation-as-failure and cut caveats.
4. Watch Stanford FOL resolution 0:00-10:52 and step through the clause-form lab.
5. Finish equality with the lab, then watch SAT encoding 4:08-4:55 and cardinality 1:05-1:55.

## Final Oral Skeleton

1. Normal forms: NNF, CNF, DNF, Tseitin, SAT.
2. Resolution refutation, unit propagation, DPLL, CDCL, clause learning.
3. Lazy SMT as Boolean abstraction plus theory consistency checking.
4. Prolog: Horn/definite clauses, Herbrand universe/base/interpretation, least model.
5. SLD, SLDNF, negation as failure, and cut.
6. FOL clause-form pipeline, Skolemization, unification, MGU, occurs check.
7. FOL resolution, subsumption, saturation.
8. Equality axioms vs paramodulation/superposition.
9. Grounding and propositional SAT encodings for finite-domain model search.
