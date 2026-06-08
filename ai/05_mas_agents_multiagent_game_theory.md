---
title: "AI Specialization 5: Autonomous Agents and Multiagent Systems"
course: "BE4M36MAS"
status: "compiled"
papersize: "a4"
geometry: "margin=2.5cm"
fontsize: "11pt"
---

[Study page](../study/mas.html) | [Watch guide](05_mas_watch_and_remember.md)

# AI Specialization 5: MAS

Autonomous agents and multiagent systems. Noncooperative game theory, extensive-form games, coalitional games, and auctions.

**Sources used:** official CTU CourseWare page for Computational Game Theory / BE4M36MAS, which describes the course as covering multiagent models and algorithms for cooperative and non-cooperative settings; CTU state-exam topic list; standard algorithmic game theory and multiagent systems material.

![Game-theory map: each representation points to the solution concepts most commonly used for it.](assets/visuals/rendered/mas_game_map.png){width=100%}

\clearpage

\begin{center}
\includegraphics[width=\textwidth]{assets/visuals/rendered/mas_plain.png}
\end{center}

\clearpage

## 1. Normal-Form Games

### Definition

A normal-form game is

$$
G=(N,(A_i)_{i\in N},(u_i)_{i\in N}),
$$

where:

- $N$ is set of players,
- $A_i$ is action set of player $i$,
- $u_i:A_1\times\cdots\times A_n\to\mathbb{R}$ is utility.

A pure strategy is an action $a_i\in A_i$. A mixed strategy is a probability distribution $\sigma_i\in\Delta(A_i)$.

Expected utility:

$$
u_i(\sigma)=\sum_{a\in A}u_i(a)\prod_j\sigma_j(a_j).
$$

### Dominated strategies

Strategy $s_i$ is strictly dominated by $s_i'$ if

$$
u_i(s_i',a_{-i})>u_i(s_i,a_{-i})
$$

for all opponents' actions $a_{-i}$.

Weak dominance uses $\ge$ for all and $>$ for at least one case.

Iterated removal of strictly dominated strategies is order-independent. Weak dominance removal can depend on order.

### Nash equilibrium

A mixed strategy profile $\sigma^*$ is Nash equilibrium if no player can improve by unilateral deviation:

$$
u_i(\sigma_i^*,\sigma_{-i}^*)\ge u_i(\sigma_i,\sigma_{-i}^*)\quad \forall i,\sigma_i.
$$

Properties:

- every finite game has at least one mixed Nash equilibrium,
- pure equilibrium may not exist,
- equilibrium need not be unique,
- equilibrium need not maximize social welfare.

::: {.bluebox title="Simple explanation"}

A Nash equilibrium is stable against one-player deviations. It does not mean the outcome is good for everyone; it only means no single player can improve by changing strategy while the others stay fixed.

:::

::: {.yellowbox title="Example"}

In Prisoner's Dilemma, both players defecting is a Nash equilibrium: if one player expects the other to defect, switching to cooperate makes them worse off. Yet both cooperating would be better for both, so Nash equilibrium is not the same as social optimum.

:::

### Computing Nash equilibrium

Two-player zero-sum games are polynomial-time solvable by LP.

General two-player games:

- support enumeration,
- Lemke-Howson algorithm,
- solving complementarity conditions.

Complexity: finding one Nash equilibrium in a finite normal-form game is PPAD-complete.

### Two-person zero-sum games

Player 1 payoff matrix $A$, player 2 payoff $-A$.

Player 1 solves:

$$
\max v
$$

subject to:

$$
\sum_i x_i A_{ij}\ge v \quad \forall j,\quad
\sum_i x_i=1,\quad x_i\ge0.
$$

Player 2 solves dual minimization. Minimax theorem:

$$
\max_x\min_y x^TAy = \min_y\max_x x^TAy.
$$

### Correlated equilibrium

A mediator samples action profile $a$ from distribution $p(a)$ and privately recommends $a_i$ to player $i$. It is correlated equilibrium if no player wants to deviate after seeing recommendation:

$$
\sum_{a_{-i}}p(a_i,a_{-i})
\left[u_i(a_i,a_{-i})-u_i(a_i',a_{-i})\right]\ge0
$$

for all $i,a_i,a_i'$. It is computable by linear programming.

### Stackelberg equilibrium

Leader commits to strategy first; follower observes and best-responds. The leader chooses commitment maximizing utility under follower response.

Used in security games. Compared to Nash, commitment can benefit the leader because it changes follower incentives.

Computation is naturally bilevel: the leader optimizes while anticipating follower best responses. In finite games it can be formulated by enumerating follower best-response regions, by mathematical programming, or by specialized algorithms for security games.

::: {.bluebox title="Simple explanation"}

Stackelberg games are about credible commitment. If a defender publicly commits to a patrol distribution, an attacker best-responds to that distribution. The defender chooses the commitment knowing this reaction will happen.

:::

\newpage

## 2. Extensive-Form Games

### Representation

An extensive-form game is a game tree with:

- decision nodes,
- player function assigning who acts,
- actions on edges,
- chance nodes with probabilities,
- terminal utilities,
- information sets representing imperfect information.

Perfect information: every information set is singleton. Imperfect information: some player cannot distinguish nodes in an information set.

Perfect recall: players never forget their own previous actions or information.

### Strategies

Pure strategy specifies an action at every information set.

Mixed strategy is a distribution over pure strategies.

Behavioral strategy independently randomizes at each information set. With perfect recall, Kuhn's theorem says mixed and behavioral strategies are realization-equivalent.

### Nash and subgame-perfect equilibrium

Nash equilibrium applies to strategies in the whole game.

Subgame-perfect equilibrium (SPE) requires Nash equilibrium in every subgame. In perfect-information games, compute by backward induction.

SPE rules out noncredible threats.

For imperfect-information games, use refinements such as sequential equilibrium; however the exam outline asks mainly for Nash and subgame perfection.

### Sequence form and LP

For two-player zero-sum extensive-form games with perfect recall, sequence form represents realization probabilities of action sequences. It is exponentially smaller than normal form in many games.

Constraints enforce flow:

- root sequence probability 1,
- probability of sequence equals sum of probabilities of child sequences at information sets.

Zero-sum EFG equilibrium can be solved by LP in sequence form.

### Regret minimization

If each player minimizes external regret, empirical play converges to coarse correlated equilibrium. In two-player zero-sum games, regret minimization converges to Nash equilibrium in average strategy.

Counterfactual Regret Minimization (CFR) decomposes regret by information sets and is a standard algorithm for large imperfect-information games such as poker.

Core update idea:

- compute counterfactual values,
- accumulate positive regrets,
- use regret matching to choose future actions.

\newpage

### Game-tree search and multi-agent planning bridge

Student reports often phrase nearby prompts as "two-player games" rather than full equilibrium theory. Connect them to MAS like this:

- In deterministic two-player zero-sum game trees, minimax backs up values from leaves: our nodes take $\max$, opponent nodes take $\min$.
- The minimax value is a security guarantee assuming optimal adversarial play.
- Alpha-beta pruning returns the same minimax value but skips branches once current $\alpha$ and $\beta$ bounds prove they cannot affect the root decision.
- Depth-limited minimax needs an evaluation function for nonterminal leaves.

Multi-agent planning can be viewed as planning over joint actions. A centralized planner searches the product of agents' action choices and state variables, which grows quickly. Decentralized planning adds local observations, communication, coordination, and incentive issues. In an oral MAS answer, tie this back to the relevant concept: stability via Nash, adversarial value via minimax, coordination via correlated/communication devices, or group value via coalitional games.

\newpage

## 3. Coalitional Games

### Definition

A transferable-utility coalitional game is

$$
(N,v),
$$

where $N$ is set of players and characteristic function

$$
v:2^N\to\mathbb{R}
$$

assigns value to every coalition. Usually $v(\emptyset)=0$.

An allocation/payoff vector $x\in\mathbb{R}^N$ distributes value of grand coalition.

Efficiency:

$$
\sum_{i\in N}x_i=v(N).
$$

Representation can be explicit, by listing $v(S)$ for all coalitions, but that takes $O(2^n)$ space. Compact representations include weighted voting games, graph games, marginal-contribution networks, and logical rules.

### Basic classes

- Additive: $v(S)=\sum_{i\in S}w_i$.
- Superadditive: disjoint coalitions benefit from merging:

$$
v(S\cup T)\ge v(S)+v(T).
$$

- Convex/supermodular:

$$
v(S\cup T)+v(S\cap T)\ge v(S)+v(T).
$$

- Simple voting game: $v(S)\in\{0,1\}$, winning or losing coalition.

### Core

The core is set of efficient allocations no coalition can block:

$$
Core(v)=\left\{x:\sum_{i\in N}x_i=v(N),\ \sum_{i\in S}x_i\ge v(S)\ \forall S\subseteq N\right\}.
$$

If core is nonempty, allocation is stable. Core may be empty. Convex games have nonempty core.

### Shapley value

Shapley value is fair allocation satisfying axioms:

- efficiency,
- symmetry,
- dummy player,
- additivity.

Formula:

$$
\phi_i(v)=\sum_{S\subseteq N\setminus\{i\}}
\frac{|S|!(n-|S|-1)!}{n!}
\left(v(S\cup\{i\})-v(S)\right).
$$

Interpretation: expected marginal contribution of player $i$ when players join in a uniformly random order.

Naive computation is exponential because all coalitions are considered.

::: {.bluebox title="Simple explanation"}

The Shapley value asks: if players arrive in random order, how much value does this player add at the moment they arrive? Averaging that marginal contribution over all orders gives a fair-share interpretation.

:::

::: {.yellowbox title="Example"}

For two players with $v(\{1\})=1$, $v(\{2\})=0$, and $v(\{1,2\})=4$, player 1's marginal contribution is 1 if arriving first and 4 if arriving second. Player 1's Shapley value is $(1+4)/2=2.5$; player 2 gets $(0+3)/2=1.5$.

:::

### Simple voting games

A simple voting game has winning coalitions. Player power can be measured by pivotality.

**Shapley-Shubik index:** probability that player is pivotal in a random ordering.

**Banzhaf index:** number of coalitions where player is critical:

$$
\beta_i = |\{S\subseteq N\setminus\{i\}: v(S)=0,\ v(S\cup\{i\})=1\}|.
$$

Normalize by total critical counts if a probability-like index is desired.

\newpage

## 4. Auctions and Mechanism Design

### Auction mechanisms

An auction specifies:

- allocation rule: who gets item(s),
- payment rule: what winners/participants pay,
- bidding language.

Desirable properties:

- efficiency: item allocated to highest value bidder,
- incentive compatibility: truthful bidding is optimal,
- individual rationality: participation nonnegative utility,
- revenue,
- computational tractability.

### Single-item auctions

Common formats:

- English ascending auction,
- Dutch descending auction,
- first-price sealed-bid auction,
- second-price sealed-bid auction (Vickrey).

### How to bid

Private value $v_i$.

Second-price auction: truthful bidding $b_i=v_i$ is weakly dominant. Winner pays second-highest bid.

First-price auction: bidder shades bid below value. In symmetric risk-neutral independent private values with $n$ bidders and uniform $[0,1]$ values:

$$
b(v)=\frac{n-1}{n}v.
$$

English auction under private values is strategically similar to second-price. Dutch auction is strategically similar to first-price.

::: {.bluebox title="Exam tip"}

For single-item private-value auctions: Vickrey/second-price encourages truthful bidding, first-price encourages bid shading, English is strategically like second-price, and Dutch is strategically like first-price.

:::

### Revenue equivalence

Under standard assumptions:

- risk-neutral bidders,
- independent private values,
- symmetric bidders,
- same allocation rule,
- same expected utility for lowest type,

all mechanisms yield same expected revenue.

### Optimal single-item auction

Myerson auction maximizes expected revenue using virtual values:

$$
\varphi_i(v)=v-\frac{1-F_i(v)}{f_i(v)}.
$$

Allocate to bidder with highest nonnegative virtual value, charge threshold payment. For i.i.d. regular distributions, this is like second-price auction with reserve price.

Exam hook: "optimum single-item auction" usually means Myerson's revenue-optimal auction, not merely the welfare-optimal second-price auction.

### Combinatorial auctions

Multiple items; bidders value bundles:

$$
v_i(S),\quad S\subseteq M.
$$

Winner determination:

$$
\max \sum_i v_i(S_i)
$$

subject to allocated bundles being disjoint. This is NP-hard in general.

Representations:

- explicit bundle values,
- OR bids,
- XOR bids,
- bidding languages using logical combinations,
- compact valuation classes such as additive, unit-demand, submodular.

VCG mechanism can make truthful bidding dominant and efficient, but may have computational and revenue issues.

::: {.yellowbox title="Example"}

With items A and B, bidder 1 values bundle `{A,B}` at 10, bidder 2 values `{A}` at 6, and bidder 3 values `{B}` at 6. The best allocation gives A to bidder 2 and B to bidder 3 for total 12, even though bidder 1 has the highest single bundle bid.

:::

## Exam Checklist

- Define NFGs, mixed strategies, dominated strategies, Nash equilibrium.
- Solve zero-sum games by LP and state minimax theorem.
- Explain correlated and Stackelberg equilibria.
- Define EFGs, information sets, perfect recall, mixed vs. behavioral strategies.
- Explain Nash vs. subgame-perfect equilibrium and backward induction.
- Explain LP/sequence-form and regret/CFR approaches for EFGs.
- Connect reported two-player game prompts to minimax, alpha-beta, depth-limited evaluation, and joint-action multi-agent planning.
- Define coalitional game, core, Shapley value, Shapley-Shubik, Banzhaf.
- Compare single-item auction formats, bidding strategies, revenue equivalence, Myerson optimal auction.
- Explain combinatorial auctions and winner determination.
