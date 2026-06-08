# SMU Watch And Remember Guide

Interactive HTML page: [study/smu.html](../study/smu.html)

Formal notes: [01_smu_learnability_bandits_rl.md](01_smu_learnability_bandits_rl.md)

Estimated time: **4.5-6h full pass**; **45-60m panic pass**.

## Coverage Checklist

- [x] PAC model: instance space, labels, unknown distribution, target concept, i.i.d. samples, true error.
- [x] PAC learnability and efficient PAC learnability with epsilon/delta and polynomial sample/time requirements.
- [x] Online learning: predict, reveal, update; mistake-bound and regret viewpoints.
- [x] PAC vs online assumptions and relationships.
- [x] VC dimension, shattering, PAC characterization, and Littlestone dimension mention.
- [x] Conjunction and disjunction learners in PAC and online settings.
- [x] Reductions for monotone classes, k-CNF, and k-DNF.
- [x] Multi-armed bandit definition, partial feedback, expected regret, epsilon-greedy, UCB, Thompson sampling.
- [x] MDP tuple, policies, V and Q functions, optimal policy, Bellman optimality equation.
- [x] Value iteration, direct utility estimation / Monte Carlo, ADP, TD learning.
- [x] Exploration/exploitation strategies, Q-learning, SARSA, and policy search.

## Module 1: PAC, Online Learning, And VC Dimension

### Primary Video

**PAC Learning and VC Dimension**  
Creator/source: Serrano.Academy  
Duration verified during implementation: **17:16**  
Quality reason: short, focused, and directly covers PAC plus VC intuition without requiring a full university lecture.

Embedded page segment:

```html
<iframe src="https://www.youtube.com/embed/X4Oxst5huQA?start=0" title="PAC Learning and VC Dimension"></iframe>
```

Watch segments:

- 0:00 PAC idea and why "probably approximately correct" has two tolerances.
- 7:00 VC dimension intuition.
- 12:40 sample-complexity intuition.

Fallback link: https://www.youtube.com/watch?v=X4Oxst5huQA

### Stronger University Backup

**Lecture 07 - The VC Dimension / Caltech Learning From Data**  
Source: Caltech, Prof. Yaser Abu-Mostafa  
Duration verified during implementation: **73:31** for the YouTube lecture; Caltech topic library marks the related segment as **19 minutes**.  
Quality reason: university lecture quality and a precise VC segment from Caltech's topic library.

Watch segments:

- 0:00 lecture start if using YouTube.
- 7:00 shattering intuition.
- 25:00 VC examples.

Fallback links:

- YouTube: https://www.youtube.com/watch?v=Dc0sr0kdBVI
- Caltech segment page: https://work.caltech.edu/library/072.html

Useful text backup:

- MIT 6.790 Learnability and VC Dimension: https://gradml.mit.edu/supervised/learnability_and_vc/

## Module 2: Conjunctions, Disjunctions, And Reductions

### Primary Video

**PAC Learning - Georgia Tech - Machine Learning**  
Duration verified during implementation: **8:03**  
Quality reason: short PAC refresher before doing the literal-elimination algorithm from the notes.

Watch segments:

- 0:00 PAC recap.
- 4:10 finite class and learnability framing.

Fallback link: https://www.youtube.com/watch?v=vbQovP_Y9p8

### Important Note

I did not find a short, high-quality video that cleanly teaches the exact CTU conjunction/disjunction elimination algorithm with the online mistake-bound reduction. The HTML page therefore uses the local lab as the main learning tool for this module.

Useful text backup:

- Mistake-bound learning slides: https://svivek.com/teaching/lectures/slides/mistake-bound-learning/mistake-bound.pdf

## Module 3: Multi-Armed Bandits

### Primary Videos

**Multi-Armed Bandit: Data Science Concepts**  
Creator/source: ritvikmath  
Duration verified during implementation: **11:43**  
Quality reason: good compact introduction to the partial-feedback problem and exploration/exploitation.

Watch segments:

- 0:00 bandit problem.
- 5:10 exploration vs exploitation.
- 8:40 policy intuition.

Fallback link: https://www.youtube.com/watch?v=e3L4VocZnnQ

**Algorithm comparison: UCB vs Thompson Sampling**  
Duration verified during implementation: **9:07**  
Quality reason: directly compares the two exam algorithms instead of staying at the high-level bandit story.

Watch segments:

- 0:00 comparison setup.
- 2:20 UCB.
- 5:30 Thompson sampling.

Fallback link: https://www.youtube.com/watch?v=dI7I7iuuZrA

**Thompson Sampling: Data Science Concepts**  
Creator/source: ritvikmath  
Duration verified during implementation: **13:16**  
Quality reason: focused explanation of posterior sampling and Beta-Bernoulli updates.

Watch segments:

- 0:00 posterior sampling idea.
- 6:00 Beta update intuition.

Fallback link: https://www.youtube.com/watch?v=Zgwfw3bzSmQ

Useful text backup:

- Stanford CS234 bandit slides: https://web.stanford.edu/class/cs234/slides/lecture11post.pdf
- Stanford tutorial on Thompson sampling: https://web.stanford.edu/~bvr/pubs/TS_Tutorial.pdf

## Module 4: MDPs, Bellman Equations, And Value Iteration

### Primary University Video

**CS188 SP24 LEC17 - MDPs: States, Values, Policies, Q-values**  
Source: UC Berkeley CS188  
Duration verified during validation: **83:20**  
Quality reason: longer than ideal, but it is a respected university lecture and the HTML embeds only the relevant opening segment. It directly covers MDP states, policies, state utility/value, and Q-values.

Watch segments:

- 0:00 MDP setup.
- 7:00 values / state utility.
- 13:00 policy/value link.

Fallback link: https://www.youtube.com/watch?v=i2hHZRhzy-k

Related official Stanford page:

- Stanford Engineering Everywhere RL lecture page: https://see.stanford.edu/Course/CS229/38

### Short Backup

**Policy and Value Iteration**  
Duration verified during implementation: **16:39**  
Quality reason: shorter reinforcement of value/policy iteration after the Stanford timestamps.

Fallback link: https://www.youtube.com/watch?v=l87rgLg90HI

Useful text backup:

- Stanford CS229 RL notes: https://cs229.stanford.edu/notes2021fall/cs229-notes12.pdf

## Module 5: Monte Carlo, ADP, TD, Q-Learning, SARSA, And Policy Search

### Primary Videos

**Q Learning simply explained | SARSA and Q-Learning Explanation**  
Duration verified during implementation: **9:45**  
Quality reason: short and directly targets the exam comparison between Q-learning and SARSA.

Watch segments:

- 0:00 Q-learning setup.
- 5:30 SARSA contrast.

Fallback link: https://www.youtube.com/watch?v=MI8ByADMh20

**Reinforcement Learning: on-policy vs off-policy algorithms**  
Duration verified during implementation: **14:47**  
Quality reason: focused on the conceptual difference needed for Q-learning vs SARSA.

Watch segments:

- 0:00 definitions.
- 7:20 examples.

Fallback link: https://www.youtube.com/watch?v=YUKUXoUg3Nc

**Stanford CS229 RL lecture: model learning and policy search backup**  
Quality reason: university backup for ADP/model learning and the broader RL control framing. The old YouTube mirror is not reliably embeddable, so use the official SEE page rather than depending on the video ID.

Study targets:

- adaptive dynamic programming / learning a model.
- temporal-difference control, Q-learning, SARSA, and policy-search framing.

Fallback link: https://see.stanford.edu/Course/CS229/38

Useful text backup:

- David Silver Lecture 5 model-free control slides: https://web.stanford.edu/class/cme241/lecture_slides/david_silver_slides/control.pdf

## Panic Pass

1. PAC/VC video: 0:00-12:40, then say PAC vs online aloud.
2. Boolean lab in `study/smu.html`: step through conjunction elimination once.
3. Bandits: watch UCB at 2:20 and Thompson at 5:30; memorize the regret formula.
4. Stanford MDP timestamps: 5:00, 27:10, 35:40.
5. Q-learning/SARSA video: 0:00 and 5:30, then do the quiz.

## Final Oral Skeleton

1. Start from feedback: PAC full labels, online sequential labels/losses, bandits selected rewards only, RL delayed rewards through states.
2. Define PAC with epsilon, delta, true error, and polynomial sample/time.
3. Contrast online mistake bound and regret.
4. Define shattering and VC dimension; mention finite VC dimension and Littlestone dimension.
5. Explain conjunction/disjunction elimination and k-CNF/k-DNF reductions.
6. Define bandit regret and compare epsilon-greedy, UCB, and Thompson sampling.
7. Define MDP, V, Q, Bellman optimality, value iteration.
8. Explain MC/direct utility, ADP, TD, Q-learning, SARSA, exploration, and policy search.
