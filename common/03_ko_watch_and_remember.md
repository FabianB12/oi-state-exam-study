# KO Watch And Remember Guide

Interactive page: [KO Study Page](../study/ko.html)  
Formal notes: [03_ko_combinatorial_optimization.md](03_ko_combinatorial_optimization.md)  
Estimated time: 6-8h full pass; 60-75m panic pass

Use this as the learning checklist for Common Question 3. Watch the targeted segment first, then read the matching formal notes, then do recall and quiz checks in the HTML page.

## 1. ILP and Branch and Bound

**Primary video:** Branch and Bound for Integer Linear Programming, Decision Making 101, 16:15  
**Link:** <https://www.youtube.com/watch?v=WNRRmXZkRi0>  
**Watch segment:** 0:00-16:15, especially 4:10 branching and 10:50 pruning  
**Why this one:** Directly covers the ILP relaxation, branching tree, bounds, and pruning logic needed for the exam.

**Fallback video:** Branch and Bound Introduction, Abdul Bari, 9:39  
**Link:** <https://www.youtube.com/watch?v=3RBNPc0_Q6g>  
**Watch segment:** 0:00-9:39  
**Why this one:** Short, clean search-tree intuition if the ILP-specific video feels too operational.

**Must recall:** LP vs ILP, binary variables, shortest path ILP flow conservation, TSP degree and subtour constraints, branch-and-bound pruning, cutting planes, branch-and-cut, totally unimodular polynomial cases.

## 2. Shortest Paths

**Video 1:** Dijkstra's Shortest Path Algorithm Explained, FelixTechTips, 8:24  
**Link:** <https://www.youtube.com/watch?v=bZkzH5x0SKU>  
**Watch segment:** 0:00-8:24

**Video 2:** Bellman-Ford in 5 minutes, Michael Sambol, 5:09  
**Link:** <https://www.youtube.com/watch?v=obWXjtg0L64>  
**Watch segment:** 0:00-5:09

**Video 3:** Floyd-Warshall All Pairs Shortest Path Algorithm, WilliamFiset, 15:53  
**Link:** <https://www.youtube.com/watch?v=4NQ3HnhyNfQ>  
**Watch segment:** 0:00-15:53

**Optional formal source:** MIT OCW Dijkstra lecture, 51:25  
**Link:** <https://www.youtube.com/watch?v=2E7MmKv0Y24>  
**Watch segment:** use only if Dijkstra proof intuition is weak.

**Must recall:** relaxation, Dijkstra assumptions and complexity, Bellman-Ford negative-cycle detection, Floyd-Warshall recurrence, DAG shortest paths, difference constraints.

## 3. Network Flows

**Primary video:** Edmonds-Karp Algorithm, WilliamFiset, 9:35  
**Link:** <https://www.youtube.com/watch?v=RppuJYwlcI8>  
**Watch segment:** 0:00-9:35  
**Why this one:** Shortest direct explanation of residual paths, BFS augmenting paths, and bottlenecks.

**University backup:** MIT OCW Incremental Improvement: Max Flow, Min Cut, 1:22:57  
**Link:** <https://www.youtube.com/watch?v=VYZGlgzr_As>  
**Watch segment:** 0:00-35:00 for max flow, residual graph, augmenting paths, and min-cut intuition  
**Why this one:** Longer than ideal, but high-quality university treatment for the proof/certificate side.

**Min-cost flow fallback:** TUM cycle-canceling applet  
**Link:** <https://algorithms.discrete.ma.tum.de/flow/cycle-cancelling/>  
**Use:** Read/play only the negative-cycle optimality idea.

**Must recall:** capacities, conservation, value, residual graph, augmenting path and bottleneck, Ford-Fulkerson, Edmonds-Karp O(nm^2), max-flow min-cut, lower bounds/balances, min-cost flow, matching by flow, and standard flow formulations such as assignment, transportation, project selection, disjoint paths, image segmentation, and time-expanded scheduling.

## 4. Knapsack

**Video 1:** Fractional Knapsack Problem, Abdul Bari, 15:30  
**Link:** <https://www.youtube.com/watch?v=oTTzNMHM05I>  
**Watch segment:** 0:00-15:30

**Video 2:** 0/1 Knapsack - Two Methods - Dynamic Programming, Abdul Bari, 28:24  
**Link:** <https://www.youtube.com/watch?v=nLmhmB6NzcM>  
**Watch segment:** 0:00-20:00, especially 8:40 DP table and 15:00 trace solution  
**Why accepted despite length:** The exact DP table explanation is useful and the page only asks for the relevant first segment.

**Must recall:** fractional greedy, 0/1 recurrence, O(nW), pseudo-polynomial meaning, profit DP, 2-approximation, FPTAS by profit scaling.

## 5. Traveling Salesman Problem

**Primary video:** The Traveling Salesman Problem: When Good Enough Beats Perfect, Reducible, 30:26  
**Link:** <https://www.youtube.com/watch?v=GiDsjIBOVoA>  
**Watch segment:** 0:00-20:00, especially 14:49 Christofides and 17:32 local search  
**Why accepted despite length:** It covers the exact approximation intuition; only the first 20 minutes are assigned.

**Optional formal source:** MIT OCW Approximation Algorithms lecture  
**Link:** <https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-17-complexity-approximation-algorithms/>  
**Watch segment:** first 15-20 minutes for approximation context.

**Must recall:** TSP complexity, metric assumption, double-tree proof, Christofides proof, triangle inequality shortcutting, k-OPT local search, and the warning that metaheuristics have no default ratio/exactness guarantee.

## 6. Scheduling

Good short videos for this exact exam section are weak, so the HTML page uses internal explanation cards plus selected course materials.

**Warm-up lecture:** MIT OCW Interval Scheduling lecture  
**Link:** <https://www.ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-1-course-overview-interval-scheduling/>  
**Watch segment:** first 15-20 minutes only  
**Use for:** Greedy scheduling and proof mindset, not the full KO scheduling checklist.

**Formal backup:** Loris Marchal, Scheduling on Parallel Machines lecture PDF  
**Link:** <https://perso.ens-lyon.fr/loris.marchal/scheduling/02.classical-P-machines-2012.pdf>  
**Use for:** list scheduling, LPT, and preemptive identical-machine scheduling.

**Must recall:** Graham notation, job parameters, Bratley branch-and-bound, Horn/EDF, list scheduling ratio, LPT ratio, McNaughton formula, fixed-m DP, relative-order ILP, time-indexed ILP.

## 7. CSP and AC3

**Primary embedded video:** CS50AI Lecture 3, Constraint Satisfaction segment, full lecture 1:44:44  
**Link:** <https://www.youtube.com/watch?v=qK46ET1xk2A&t=3260s>  
**Watch segment:** 54:20-1:14:30, especially 1:03:10 arc consistency and 1:09:14 AC3  
**Why accepted despite length:** The full lecture is long, but the assigned CSP/AC3 segment is about 20 minutes and comes from Harvard CS50AI.

**Direct-watch fallback:** Constraint Satisfaction Problems 5 - Arc Consistency, Stanford CS221, 14:10  
**Link:** <https://www.youtube.com/watch?v=5rlIYGJdPy4>  
**Watch segment:** 0:00-14:10, especially 3:10 arc consistency and 8:40 AC3 idea  
**Why not embedded:** Stanford disables playback on external websites, so the HTML page links it directly instead of embedding a broken player.

**Must recall:** CSP definition, binary constraints, arc consistency, revise operation, AC3 queue/requeue logic, O(ed^3), not complete, CSP vs ILP, backtracking, forward checking, maintaining arc consistency, and local search.

## Panic Pass Order

1. Say the seven module headings out loud.
2. For each heading, name the main algorithm/formulation and the one complexity or guarantee.
3. Do all KO flashcards on [the HTML page](../study/ko.html).
4. Rehearse the oral skeleton at the bottom of the page.
