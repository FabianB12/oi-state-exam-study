---
title: "Common Part 2: Complexity Classes, Turing Machines, Randomization, and Undecidability"
course: "BE4M01TAL"
status: "compiled"
print: "Pandoc-compatible Markdown with LaTeX math"
papersize: "a4"
geometry: "margin=2.5cm"
fontsize: "11pt"
---

# Common Part 2: TAL

Problem/language complexity classes with respect to the time complexity of their solution and memory complexity including undecidable problems/languages.

**Primary source repositories consulted:** `mohwald/oi-mszz`, `pan-sveta/oi-si-statnice`, `Pryx/oi-si-mszz`, `draliii/oi-mszz`. The final text below is synthesized and corrected against standard theory of computation.

![TAL hierarchy: resource-bounded classes sit inside decidable languages, while decidability classes form a separate axis.](assets/visuals/rendered/tal_complexity_hierarchy.png){width=100%}

\clearpage

\begin{center}
\includegraphics[width=\textwidth]{assets/visuals/rendered/tal_plain.png}
\end{center}

\clearpage

## 1. Asymptotic Growth, Complexity, and Correctness

### Asymptotic growth

For non-negative functions $f,g$:

- $f \in O(g)$: $f$ is eventually bounded above by a constant multiple of $g$.
- $f \in \Omega(g)$: $f$ is eventually bounded below by a constant multiple of $g$.
- $f \in \Theta(g)$: both $O(g)$ and $\Omega(g)$.
- $f \in o(g)$: $f/g \to 0$.
- $f \in \omega(g)$: $f/g \to \infty$.

Asymptotic notation ignores constants and lower-order terms. It describes growth as input size $n$ tends to infinity.

### Time and space complexity

The **time complexity** of an algorithm is the number of elementary steps as a function of input size. The **space complexity** is the amount of working memory used as a function of input size.

For Turing machines:

- Time $T(n)$: maximum number of transitions on inputs of length $n$.
- Space $S(n)$: maximum number of work-tape cells used on inputs of length $n$.

Usually the read-only input tape is not counted toward space complexity.

Complexity of a **problem** is the complexity of the best possible algorithm in the chosen computational model. For robust classes such as P, NP, PSPACE, the exact reasonable model does not matter up to polynomial factors.

### Correctness of algorithms

An algorithm is **partially correct** if, whenever it terminates, its output satisfies the specification. It is **totally correct** if it is partially correct and always terminates.

#### Loop invariant

A loop invariant is a statement true:

1. before the loop starts,
2. before and after every iteration,
3. and strong enough that, together with loop termination, implies the postcondition.

Proof pattern:

- Initialization: invariant holds before first iteration.
- Maintenance: if it holds before an iteration, it holds after it.
- Termination: invariant plus negated loop guard implies correctness.

#### Loop variant

A loop variant is a value from a well-founded ordered set, usually non-negative integers, that strictly decreases on every iteration. It proves termination because there is no infinite decreasing sequence.

\newpage

## 2. Turing Machines

### Deterministic Turing machine

A deterministic Turing machine (DTM) is commonly defined as

$$
M=(Q,\Sigma,\Gamma,\delta,q_0,q_{acc},q_{rej}),
$$

where:

- $Q$ is a finite set of states.
- $\Sigma$ is the input alphabet.
- $\Gamma \supseteq \Sigma$ is the tape alphabet, including blank symbol.
- $\delta:Q\times\Gamma \to Q\times\Gamma\times\{L,R,S\}$ is a partial transition function.
- $q_0$ is the start state.
- $q_{acc}$ and $q_{rej}$ are halting accept/reject states.

At each step the machine reads one tape cell, writes a symbol, moves the head, and changes state.

![Turing-machine transition graph: states are nodes and transition rules are labeled directed edges.](assets/visuals/rendered/tal_tm_transition_graph.png){width=100%}

A DTM **decides** a language if it halts on every input and accepts exactly strings in the language. It **recognizes** a language if it accepts exactly strings in the language, but may loop forever on strings outside the language.

![Turing-machine models: configurations lead to deterministic, multitape, and nondeterministic machine views.](assets/visuals/rendered/tal_turing_machine_models.png){width=100%}

### Multitape Turing machine

A multitape TM has several tapes and heads. In one step it reads all head symbols, writes all head symbols, moves each head, and changes state.

Multitape machines are not more powerful than single-tape machines. A single-tape machine can simulate a $k$-tape machine by encoding all tapes on one tape. If the multitape machine runs in $T(n)$ time, a standard single-tape simulation runs in $O(T(n)^2)$ time. Thus the difference does not affect polynomial-time classes.

![Multitape simulation: several tapes can be encoded on one tape using delimiters and marked head positions.](assets/visuals/rendered/tal_multitape_single_tape_encoding.png){width=85%}

### Nondeterministic Turing machine

A nondeterministic Turing machine (NTM) may have several possible transitions from one configuration. It accepts an input if at least one computation branch accepts.

Equivalent views:

- Branching computation tree.
- "Guess" a certificate and verify it deterministically.
- Existential computation: accept iff there exists an accepting branch.

For time complexity, an NTM runs in time $T(n)$ if every branch halts within $T(n)$ steps.

\newpage

## 3. Decision Problems, Languages, P, NP, co-NP, Reductions, NPC

### Decision problems and languages

A decision problem has yes/no answers. Once instances are encoded as strings over alphabet $\Sigma$, a decision problem corresponds to a language

$$
L \subseteq \Sigma^*,
$$

where $x\in L$ means instance $x$ is a yes-instance.

Optimization problems are often studied via decision versions. Example:

- Optimization TSP: find shortest tour.
- Decision TSP: is there a tour of length at most $K$?

### Class P

$$
\mathbf{P} = \bigcup_{k\ge 1} \mathrm{TIME}(n^k).
$$

P is the class of languages decidable by a deterministic TM in polynomial time. It is the usual theoretical notion of efficiently solvable decision problems.

Examples: graph reachability, shortest path with nonnegative weights, MST decision version, bipartite matching, linear programming.

### Class NP

$$
\mathbf{NP} = \bigcup_{k\ge 1} \mathrm{NTIME}(n^k).
$$

Equivalently, $L\in\mathbf{NP}$ iff there exists a polynomial-time deterministic verifier $V$ and polynomial $p$ such that

$$
x\in L \iff \exists c,\ |c|\le p(|x|) \text{ and } V(x,c)=1.
$$

The string $c$ is a certificate/witness.

Examples: SAT, 3-SAT, CLIQUE, VERTEX-COVER, HAMILTONIAN-CYCLE, TSP decision version.

Clearly $\mathbf{P}\subseteq\mathbf{NP}$. Whether $\mathbf{P}=\mathbf{NP}$ is open.

::: {.bluebox title="Simple explanation"}

P means "we can find the answer efficiently." NP means "if someone gives us a proposed yes-answer certificate, we can check it efficiently." Sudoku is a good intuition: solving may be hard, but checking a filled grid is easy.

:::

### Class co-NP

For language $L$, its complement is $\overline L=\Sigma^*\setminus L$.

$$
\mathbf{coNP} = \{L \mid \overline L \in \mathbf{NP}\}.
$$

Problems in co-NP have efficiently verifiable no-certificates. Example: TAUT is in co-NP because its complement is SAT-like falsifiability.

We know $\mathbf{P}\subseteq \mathbf{NP}\cap\mathbf{coNP}$. It is unknown whether $\mathbf{NP}=\mathbf{coNP}$.

### Polynomial many-one reductions

For languages $A,B$, a polynomial-time many-one reduction $A \le_p B$ is a polynomial-time computable function $f$ such that

$$
x\in A \iff f(x)\in B.
$$

Interpretation: if we can solve $B$ efficiently, then we can solve $A$ efficiently by transforming instances.

![Polynomial reduction direction: reduce from a known hard problem to the target problem.](assets/visuals/rendered/tal_reduction_direction.png){width=100%}

Use reductions to prove hardness:

1. Start from a known hard problem $A$.
2. Construct $f$ mapping instances of $A$ to instances of $B$.
3. Prove yes-instances map to yes-instances and no-instances to no-instances.
4. Conclude $B$ is at least as hard as $A$.

::: {.yellowbox title="Example"}

To prove `CLIQUE` reduces to `INDEPENDENT-SET`, map graph $G$ to its complement $\overline G$ and keep the same $k$. A $k$-clique in $G$ is exactly a $k$-independent set in $\overline G$, because edges become non-edges and non-edges become edges.

:::

### NP-hard and NP-complete

A language $B$ is **NP-hard** if every $A\in\mathbf{NP}$ reduces to $B$: $A\le_p B$.

A language $B$ is **NP-complete** if:

1. $B\in\mathbf{NP}$,
2. $B$ is NP-hard.

If any NP-complete problem is in P, then $\mathbf{P}=\mathbf{NP}$.

::: {.bluebox title="Exam tip"}

To prove a problem is NP-complete, show both parts: it is in NP, and it is NP-hard. For hardness, reduce from a known NP-complete problem to your problem, not the other way around.

:::

::: {.yellowbox title="Reported drill: 3-coloring"}

`3-COLORING` is in NP because a certificate is a color for every vertex, and all edges can be checked in polynomial time. It is NP-hard by a standard polynomial reduction from a known NP-complete problem such as `3-SAT`. Therefore it is NP-complete. Its complement is in co-NP by definition, but unless `NP = co-NP` we do not claim it has short yes-certificates.

:::

### Cook-Levin theorem

Cook-Levin theorem: SAT is NP-complete.

Proof idea:

1. SAT is in NP: a truth assignment is a certificate, and formula evaluation is polynomial.
2. For any $L\in\mathbf{NP}$, take a polynomial-time NTM $M$ deciding $L$.
3. Encode an accepting computation tableau of $M$ on input $x$ as a Boolean formula.
4. The formula is satisfiable iff $M$ has an accepting computation branch on $x$.

![Cook-Levin tableau: a polynomial-time nondeterministic computation is encoded as a SAT formula.](assets/visuals/rendered/tal_cook_levin_tableau.png){width=100%}

This provides the first NP-complete problem. Many other NP-completeness proofs reduce from SAT or 3-SAT.

### Heuristics and approximation for NP-complete problems

For NP-hard optimization problems, exact polynomial-time algorithms are unlikely. Practical approaches:

- **Branch and bound:** exact, but exponential worst case; uses bounds to prune search.
- **Local search:** iteratively improve a candidate solution, e.g. k-OPT for TSP.
- **Greedy heuristics:** fast, sometimes with guarantees.
- **Randomized/metaheuristics:** simulated annealing, genetic algorithms, tabu search.
- **Approximation algorithms:** polynomial-time algorithms with provable ratio.

For minimization, algorithm $A$ has approximation ratio $\rho\ge1$ if

$$
A(I) \le \rho \cdot OPT(I)
$$

for every instance $I$. For maximization, use $A(I) \ge OPT(I)/\rho$.

Some problems have approximation schemes:

- PTAS: for every fixed $\epsilon>0$, gives $(1+\epsilon)$-approximation in polynomial time.
- FPTAS: polynomial in both input size and $1/\epsilon$.

::: {.yellowbox title="Example"}

For metric TSP, a 2-approximation means the produced tour is never more than twice the optimal tour length. If $OPT=100$, the algorithm promises a tour of length at most 200, although it may do better on a particular instance.

:::

\newpage

## 4. Space Complexity, PSPACE, NPSPACE, Savitch Theorem

### Space classes

For a function $s(n)$:

- $\mathrm{DSPACE}(s(n))$: languages decidable by a deterministic TM using $O(s(n))$ space.
- $\mathrm{NSPACE}(s(n))$: languages decidable by a nondeterministic TM using $O(s(n))$ space.

Polynomial space:

$$
\mathbf{PSPACE} = \bigcup_{k\ge 1}\mathrm{DSPACE}(n^k),
$$

$$
\mathbf{NPSPACE} = \bigcup_{k\ge 1}\mathrm{NSPACE}(n^k).
$$

Basic inclusions:

$$
\mathbf{P} \subseteq \mathbf{NP} \subseteq \mathbf{PSPACE}.
$$

The inclusion $\mathbf{NP}\subseteq\mathbf{PSPACE}$ holds because a polynomial-time nondeterministic computation tree can be searched depth-first using only polynomial space.

### Configuration graph view

For a machine using $s(n)$ space, a configuration contains state, head positions, and tape contents. The number of configurations is at most exponential in $s(n)$:

$$
N = 2^{O(s(n))}.
$$

Acceptance becomes reachability in this configuration graph.

![Configuration graph: accepting a space-bounded computation becomes a graph reachability question.](assets/visuals/rendered/tal_configuration_graph_savitch.png){width=100%}

### Savitch theorem

For $s(n)\ge \log n$:

$$
\mathrm{NSPACE}(s(n)) \subseteq \mathrm{DSPACE}(s(n)^2).
$$

Therefore:

$$
\mathbf{PSPACE} = \mathbf{NPSPACE}.
$$

Proof idea: decide reachability between configurations $u$ and $v$ within at most $t$ steps by recursively guessing a midpoint $m$:

$$
Reach(u,v,t) =
\exists m:\ Reach(u,m,\lceil t/2\rceil) \land Reach(m,v,\lfloor t/2\rfloor).
$$

The recursion depth is $O(\log t)$, and each level stores a configuration of size $O(s(n))$. Since $t$ can be exponential in $s(n)$, $\log t=O(s(n))$, yielding $O(s(n)^2)$ deterministic space.

::: {.bluebox title="Simple explanation"}

Savitch's theorem says nondeterminism saves much less space than it seems. Instead of storing the whole nondeterministic search tree, a deterministic machine recursively asks: "is there some middle configuration that connects the start to the goal?"

:::

\newpage

## 5. Randomized Algorithms and Randomized Complexity Classes

### Randomized algorithms

A randomized algorithm has access to random bits. Its output or running time is a random variable.

Two important types:

- **Monte Carlo:** bounded running time, may return wrong answer with small probability.
- **Las Vegas:** always correct, running time is random; expected running time is bounded.

Randomization is useful for symmetry breaking, hashing, sampling, primality testing, randomized quicksort, and randomized reductions.

### Randomized Turing machine

A randomized TM can be modeled as a deterministic TM with an extra tape of random bits, or as a machine with probabilistic transitions. Acceptance probability is taken over random choices.

![Randomized classes: RP and co-RP are one-sided-error classes, and ZPP is their zero-error intersection.](assets/visuals/rendered/tal_randomized_classes.png){width=90%}

### RP

A language $L$ is in RP if there is a polynomial-time randomized algorithm $A$ such that:

$$
x\in L \Rightarrow \Pr[A(x)=1]\ge \frac12,
$$

$$
x\notin L \Rightarrow \Pr[A(x)=1]=0.
$$

RP has one-sided error: it never falsely accepts no-instances, but may falsely reject yes-instances. Repeating independently reduces error exponentially.

### co-RP

$L\in\mathbf{coRP}$ iff $\overline L\in\mathbf{RP}$. Equivalently, there is a polynomial-time randomized algorithm with:

$$
x\in L \Rightarrow \Pr[A(x)=1]=1,
$$

$$
x\notin L \Rightarrow \Pr[A(x)=1]\le \frac12.
$$

It never falsely rejects yes-instances, but may falsely accept no-instances.

### ZPP

ZPP is zero-error expected polynomial time. Equivalent characterizations:

$$
\mathbf{ZPP} = \mathbf{RP}\cap\mathbf{coRP}.
$$

Another view: algorithm outputs correct answer or "I do not know"; probability of "I do not know" is bounded away from 1, and repetition gives expected polynomial time.

Basic relationships:

$$
\mathbf{P}\subseteq\mathbf{ZPP}\subseteq\mathbf{RP}\subseteq\mathbf{NP},
$$

and

$$
\mathbf{P}\subseteq\mathbf{ZPP}\subseteq\mathbf{coRP}\subseteq\mathbf{coNP}.
$$

### Related class: BPP

BPP is not explicitly required in the exam outline, but it appears in one of the source notes and is useful context. It is the class of languages decidable by a polynomial-time randomized algorithm with bounded two-sided error:

$$
\Pr[A(x)=\chi_L(x)] \ge \frac23.
$$

The constant $2/3$ is arbitrary; any constant greater than $1/2$ can be amplified by independent repetition and majority vote. RP and co-RP are one-sided-error subclasses of BPP:

$$
\mathbf{RP}\subseteq\mathbf{BPP},\quad \mathbf{coRP}\subseteq\mathbf{BPP}.
$$

\newpage

## 6. Decidability and Undecidability

### Recursive and recursively enumerable languages

A language $L$ is **recursive** or **decidable** if some TM halts on every input and accepts exactly the strings in $L$.

A language $L$ is **recursively enumerable (RE)** or **Turing-recognizable** if some TM accepts exactly strings in $L$; on strings outside $L$ it may reject or loop forever.

Relationships:

- Every decidable language is RE.
- $L$ is decidable iff both $L$ and $\overline L$ are RE.
- Some RE languages are undecidable.
- Some languages are not RE.

::: {.bluebox title="Simple explanation"}

Decidable means the machine always eventually answers yes or no. Recognizable means the machine eventually says yes for true cases, but for false cases it may run forever. That one-sided behavior is the whole source of many undecidability results.

:::

### Universal language and universal Turing machine

Encode a TM $M$ and input $w$ as a string $\langle M,w\rangle$.

The universal language is

$$
L_U = \{\langle M,w\rangle \mid M \text{ accepts } w\}.
$$

A universal Turing machine simulates $M$ on $w$. Thus $L_U$ is RE: simulate $M(w)$ and accept if it accepts.

However, $L_U$ is not decidable. If it were decidable, the halting/acceptance problem could be solved, contradicting diagonalization.

### Diagonal language

Let $M_1,M_2,\ldots$ be an enumeration of Turing machines. Define the diagonal language

$$
L_D = \{w_i \mid M_i \text{ does not accept } w_i\},
$$

where $w_i$ is the $i$-th string in a fixed enumeration.

If some TM decided $L_D$, then considering its own index yields contradiction: it would accept its own encoding iff it does not accept it.

This diagonal argument proves that there are undecidable languages and that some languages are not recursively enumerable.

Common classification phrasing: $L_U=A_{TM}$ is RE but undecidable; its complement is not RE. The diagonal language $L_D$ is not RE by the enumeration contradiction. Its complement is RE in the usual setup where the $i$-th input is matched with the $i$-th machine, because one can simulate $M_i(w_i)$ and accept when it accepts.

### Halting problem

The halting problem asks:

$$
HALT = \{\langle M,w\rangle \mid M \text{ halts on } w\}.
$$

It is undecidable. Classic proof by contradiction:

1. Suppose decider $H(M,w)$ says whether $M$ halts on $w$.
2. Build machine $D(x)$: if $H(x,x)$ says "halts", loop forever; otherwise halt.
3. Run $D(D)$. If it halts, it must loop; if it loops, it must halt. Contradiction.

![Diagonalization for the halting problem: assuming a decider lets us build a program that contradicts its own prediction.](assets/visuals/rendered/tal_undecidability_diagonal.png){width=100%}

::: {.yellowbox title="Example"}

Think of a hypothetical program `halts(program,input)`. The diagonal trick builds a new program that does the opposite of what `halts` predicts on itself. If `halts` says the new program halts, it loops; if `halts` says it loops, it halts. So `halts` cannot exist.

:::

### Acceptance problem

The acceptance problem

$$
A_{TM} = \{\langle M,w\rangle \mid M \text{ accepts } w\}
$$

is RE but undecidable. It is RE because a universal TM can simulate and accept when $M$ accepts. It is undecidable by reduction from the halting problem or by direct diagonalization.

### Proving undecidability by reduction

To prove problem $B$ undecidable:

1. Start from known undecidable problem $A$.
2. Construct a computable mapping from instances of $A$ to instances of $B$.
3. Show that solving $B$ would solve $A$.
4. Since $A$ is undecidable, $B$ must be undecidable.

Common source problems: $HALT$, $A_{TM}$, emptiness/equivalence variants for TMs, Post correspondence problem.

### Decidable vs. semi-decidable behavior

For an RE but undecidable language, there is an algorithm that eventually confirms yes-instances, but no algorithm that always answers both yes and no.

For a co-RE but not decidable language, no-instances can be confirmed.

If neither $L$ nor $\overline L$ is RE, there is no recognizer for either side.

\newpage

## Exam Checklist

Be able to:

- State and use $O,\Omega,\Theta,o,\omega$.
- Prove total correctness via invariant plus variant.
- Define DTM, multitape TM, and NTM, and explain why multitape TMs do not change polynomial classes.
- Translate decision problems to languages.
- Define P, NP, co-NP, NP-hard, NP-complete, and polynomial reduction.
- State Cook-Levin theorem and its computation-tableau idea.
- Explain exact, heuristic, and approximation approaches for NP-hard problems.
- Define PSPACE and NPSPACE and state Savitch theorem.
- Define RP, co-RP, and ZPP, including one-sided vs. zero error.
- Distinguish decidable, RE, and non-RE languages.
- Explain diagonalization, universal language, universal TM, and the halting problem.
