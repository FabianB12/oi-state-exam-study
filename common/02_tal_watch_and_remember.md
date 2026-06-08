# TAL Watch And Remember Guide

This is the learning companion for:

- [TAL static study page](../study/tal.html)
- [Formal TAL notes](02_tal_complexity_and_decidability.md)
- [Study framework plan](../study_site_plan.md)

Use the HTML page for embedded videos, timestamp buttons, flashcards, quizzes, progress, and interactive proof/class previews. Use this Markdown file as the source-of-truth checklist.

## How To Use This Question

TAL is not best learned by reading linearly. It is a definitions-and-proof-pattern question. Do each module in this order:

1. Watch only the listed segment.
2. Close the video and say the "must be able to say" bullets from memory.
3. Do flashcards and quiz.
4. Write the free-recall answer.
5. Mark the module complete only after you can speak the answer without staring at the notes.

The page uses retrieval practice and feedback based on CMU Eberly's retrieval-practice guidance, Cornell's advice on retrieval/interleaving/spaced practice, and faded worked-example style from the CAFE cognitive-load toolkit.

## Verified Video Checklist

| Module | Video | Creator / Source | Duration | Required segment | Why accepted | Fallback |
|---|---|---:|---:|---|---|---|
| Correctness/asymptotics | Big O and friends | Ryan O'Donnell / CMU CS Theory Toolkit | 28:10 | 0:00-20:00 | Covers Big O, little-o, Big Omega, little-omega, and examples; fills the asymptotic-notation video gap. | <https://www.youtube.com/watch?v=_gKb855_3bk> |
| Correctness | Loop invariants online lesson | Cornell CS2110 | short lesson sequence | First 10-15 min | Directly explains invariant reasoning; better than a weak generic video. | <https://www.cs.cornell.edu/courses/cs2110/2017sp/online/loops/01aloop1.html> |
| Correctness | The While Theorem Total Correctness | UTAustinX LAFF-On Programming for Correctness | 7:48 | 0:00-7:48 | Short direct support for total correctness: invariant plus termination reasoning. | <https://www.youtube.com/watch?v=WGXKmx1X3c4> |
| Turing machines | Turing Machines Explained | Computerphile | 5:24 | 0:00-5:24 | Short visual intuition for tape, head, and transition rules. | <https://www.youtube.com/watch?v=dNRDvLACg5Q> |
| Turing machines | Lecture 5: CF Pumping Lemma, Turing Machines | MIT OpenCourseWare | 1:13:59 | 41:40-60:00 | Longer but formal university source for the actual model vocabulary. | <https://www.youtube.com/watch?v=IycOPFmEQk8&t=2500s> |
| P/NP | P vs. NP and the Computational Complexity Zoo | hackerdashery | 10:44 | 0:00-10:44 | Short and high-level, good before formal definitions. | <https://www.youtube.com/watch?v=YX40hbAHx3s> |
| P/NP/reductions | Lecture 14: P and NP, SAT, Poly-Time Reducibility | MIT OpenCourseWare | 1:19:22 | 0:00-20:00, 46:00-66:00 | Formal course segment for NP and reduction direction. | <https://www.youtube.com/watch?v=1VhnDdQsELo> |
| Cook-Levin | Lecture 16: Cook-Levin Theorem | MIT OpenCourseWare | 1:18:27 | 0:00-20:00 | Formal source for SAT NP-completeness and tableau idea. | <https://www.youtube.com/watch?v=6Az1gtDRaAU> |
| Approximation/heuristics | Introduction to Computation Theory: Approximation Algorithms | Complexity Explorer | 8:16 | 0:00-8:16 | Fills the NP-hard practice gap: approximate instead of exact, with a concrete vertex-cover style example. | <https://www.youtube.com/watch?v=GnEwosAJ0bA> |
| PSPACE/Savitch | Lecture 17: Space Complexity, PSPACE, Savitch's Theorem | MIT OpenCourseWare | 1:20:09 | 0:00-20:00, 40:00-58:00 | Directly covers space classes, configuration graph, and Savitch. | <https://www.youtube.com/watch?v=cT_qwkTigv4> |
| Randomization | Lecture 23: Probabilistic Computation, BPP | MIT OpenCourseWare | 1:23:41 | 0:00-20:00 | University source for randomized TMs and BPP setup. | <https://www.youtube.com/watch?v=Vp_AzDGQyrA> |
| Randomized classes | Comparison Between Randomized Complexity Classes | NPTEL / IIT Hyderabad | 11:20 | 0:00-11:20 | Short current course segment comparing RP, co-RP, ZPP, and BPP relationships. | <https://www.youtube.com/watch?v=k2nzRrQNoTg> |
| Undecidability | Proof That Computers Can't Do Everything | udiprod | 7:52 | 0:00-7:52 | Short halting-problem intuition. | <https://www.youtube.com/watch?v=92WHN-pAFCs> |
| Undecidability | The Halting Problem | Neso Academy | 7:26 | 0:00-7:26 | Short alternate explanation if the first one does not land. | <https://www.youtube.com/watch?v=6XZvw9W9QSc> |
| Undecidability | Lecture 8: Undecidability | MIT OpenCourseWare | 1:17:02 | 0:00-20:00, 20:00-35:00 optional | Formal source for decidable/recognizable, diagonalization, and acceptance/halting. | <https://www.youtube.com/watch?v=3PzuSPQPEU4> |

## Conceptual Gap Checks

After the approximation video, make sure you can answer: why a heuristic does not prove `P = NP`; what an approximation ratio promises; and how PTAS/FPTAS differ from a generic heuristic.

After the randomized-class comparison, make sure you can answer: which side RP may err on; which side co-RP may err on; why `ZPP = RP intersection co-RP`; and why BPP is two-sided error rather than zero-error.

## Embedded Videos

Markdown viewers differ in whether they render iframes. If these do not show up, use the fallback links above or the [TAL static study page](../study/tal.html).

### Correctness And Asymptotics

<iframe width="560" height="315" src="https://www.youtube.com/embed/_gKb855_3bk?rel=0" title="CMU Big O and friends" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/WGXKmx1X3c4?rel=0" title="UTAustinX Total Correctness" frameborder="0" allowfullscreen></iframe>

### Turing Machines

<iframe width="560" height="315" src="https://www.youtube.com/embed/dNRDvLACg5Q?rel=0" title="Turing Machines Explained - Computerphile" frameborder="0" allowfullscreen></iframe>

### P, NP, And Reductions

<iframe width="560" height="315" src="https://www.youtube.com/embed/YX40hbAHx3s?rel=0" title="P vs NP and the Computational Complexity Zoo" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/1VhnDdQsELo?start=2760&rel=0" title="MIT Lecture 14 P and NP" frameborder="0" allowfullscreen></iframe>

### Cook-Levin

<iframe width="560" height="315" src="https://www.youtube.com/embed/6Az1gtDRaAU?start=900&rel=0" title="MIT Lecture 16 Cook-Levin" frameborder="0" allowfullscreen></iframe>

### Approximation Algorithms

<iframe width="560" height="315" src="https://www.youtube.com/embed/GnEwosAJ0bA?rel=0" title="Complexity Explorer Approximation Algorithms" frameborder="0" allowfullscreen></iframe>

### PSPACE And Savitch

<iframe width="560" height="315" src="https://www.youtube.com/embed/cT_qwkTigv4?start=2400&rel=0" title="MIT Lecture 17 PSPACE Savitch" frameborder="0" allowfullscreen></iframe>

### Randomized Classes

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vp_AzDGQyrA?start=900&rel=0" title="MIT Lecture 23 Probabilistic Computation BPP" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/k2nzRrQNoTg?rel=0" title="NPTEL Comparison Between Randomized Complexity Classes" frameborder="0" allowfullscreen></iframe>

### Undecidability

<iframe width="560" height="315" src="https://www.youtube.com/embed/92WHN-pAFCs?rel=0" title="Proof That Computers Can't Do Everything" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/3PzuSPQPEU4?start=900&rel=0" title="MIT Lecture 8 Undecidability" frameborder="0" allowfullscreen></iframe>

## Exam-Answer Buckets

### 1. Correctness And Complexity

Minimum answer:

- Big-O is an eventual upper bound; Omega lower; Theta tight; little-o strictly smaller growth; little-omega strictly larger growth.
- Time complexity counts steps as a function of input size.
- Space complexity counts working memory, usually excluding the read-only input tape.
- Partial correctness: if the algorithm terminates, output is correct.
- Total correctness: partial correctness plus termination.
- Invariant proves the useful truth is preserved.
- Variant proves no infinite loop.

### 2. Turing Machines

Minimum answer:

- DTM has one possible next move from each configuration.
- Multitape TM has multiple tapes/heads but can be simulated by a single-tape TM with polynomial overhead.
- NTM has a branching computation tree and accepts if some branch accepts.
- Decider halts on every input; recognizer may loop on no-instances.

### 3. P, NP, co-NP, Reductions, NPC

Minimum answer:

- A decision problem becomes a language by encoding yes-instances as strings.
- P: deterministic polynomial-time decidable languages.
- NP: nondeterministic polynomial-time, equivalently polynomial-time verifier plus polynomial certificate.
- co-NP: complements of NP languages.
- Reduction `A <=p B`: polynomial transformation preserving yes/no membership.
- NP-complete: in NP and NP-hard.
- For hardness, reduce from a known hard problem to the target.
- Cook-Levin: SAT is NP-complete by encoding accepting computations as Boolean formulas.
- Reported drill: classify 3-coloring as in NP plus NP-hard, hence NP-complete; do not forget the verifier.

### 4. PSPACE And Savitch

Minimum answer:

- PSPACE is deterministic polynomial space.
- NPSPACE is nondeterministic polynomial space.
- A configuration graph stores machine snapshots as vertices.
- Acceptance becomes reachability.
- Savitch recursively checks reachability through midpoints.
- `NSPACE(s) subset DSPACE(s^2)`, so `PSPACE = NPSPACE`.

### 5. Randomized Classes

Minimum answer:

- Monte Carlo: bounded time, possible error.
- Las Vegas: always correct, randomized running time.
- RP: no false positives; may have false negatives.
- co-RP: no false negatives; may have false positives.
- ZPP: zero-error expected polynomial time, equal to `RP intersection co-RP`.
- BPP: bounded two-sided error, amplified by repetition.

### 6. Decidability

Minimum answer:

- Decidable/recursive: some TM halts on every input and accepts exactly the language.
- RE/Turing-recognizable: some TM accepts yes-instances; may loop on no-instances.
- `L` is decidable iff both `L` and complement `L` are RE.
- Universal language is `<M,w>` where `M` accepts `w`; it is RE but undecidable.
- Acceptance problem `A_TM` is RE but undecidable.
- complement `A_TM` is not RE; diagonal language is not RE, while its complement is RE under the standard enumeration pairing.
- Diagonalization also proves some languages are not RE.
- Halting is undecidable by diagonal self-reference.
- To prove a new problem undecidable, reduce from a known undecidable problem.

## Panic Oral Script

"This question classifies problems by computational resources and by decidability. For resources, P is deterministic polynomial time, NP is polynomial-time verification or nondeterministic polynomial time, and co-NP consists of complements of NP languages. Reductions compare difficulty; to prove NP-hardness I reduce a known hard problem to my target. Cook-Levin gives the first NP-complete problem, SAT, by encoding accepting computation histories as formulas.

For space, PSPACE and NPSPACE are polynomial-space classes. A space-bounded computation has a configuration graph, and acceptance is reachability in that graph. Savitch's theorem solves nondeterministic reachability recursively through midpoints, giving `NSPACE(s) subset DSPACE(s^2)` and therefore `PSPACE = NPSPACE`.

For decidability, a decider always halts, while a recognizer only guarantees acceptance of yes-instances. The universal language is recognizable by simulation but undecidable. The halting problem is impossible because a supposed halting decider lets us build a machine that contradicts its own predicted behavior."

## Sources For Learning Design

- Cornell Learning Strategies Center: <https://lsc.cornell.edu/how-to-study/studying-for-and-taking-exams/effective-study-strategies/>
- CMU Eberly Center retrieval practice: <https://www.cmu.edu/teaching/resources/instructionalstrategies/activelearningstrategies/retrievalpractice/index.html>
- CAFE faded worked examples: <https://cafe.cognitiveload.com.au/kb/fadedworkedexamples>
