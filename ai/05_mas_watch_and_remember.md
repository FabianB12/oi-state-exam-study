# MAS Watch and Remember Guide

Companion page: [study/mas.html](../study/mas.html)

Use this guide as the video-first path for **AI question 05: Autonomous Agents and Multiagent Systems**. The formal notes remain the source of truth; the videos are there to make the definitions easier to say out loud.

## 1. Normal-form games

1. [Game Theory 101 (#1): Introduction](https://www.youtube.com/watch?v=NSVmOC_5zrE) - William Spaniel, 6:44.
   - Watch: 0:00-6:44.
   - Remember: game theory studies strategic interdependence; a payoff matrix is the first simple representation.
2. [Game Theory 101 (#2): The Prisoner's Dilemma and Strict Dominance](https://www.youtube.com/watch?v=DanTKx1FLY8) - William Spaniel, 5:56.
   - Watch: 0:00-5:56.
   - Remember: strict dominance means one strategy is better against every opponent action.
3. [Game Theory 101 (#3): Iterated Elimination of Strictly Dominated Strategies](https://www.youtube.com/watch?v=O8T9spKHVWQ) - William Spaniel, 7:11.
   - Watch: 0:00-7:11.
   - Remember: remove strategies that rational players should never choose; strict deletion is order-independent.
4. [Game Theory 101 (#5): What Is a Nash Equilibrium?](https://www.youtube.com/watch?v=5TcYV6CZ7mI) - William Spaniel, 5:23.
   - Watch: 0:00-5:23.
   - Remember: Nash equilibrium means no profitable unilateral deviation; it does not mean globally best.
5. [Game Theory 101 (#6): Best Responses](https://www.youtube.com/watch?v=VuDutyTs_r8) - William Spaniel, 8:24.
   - Watch: 0:00-8:24.
   - Remember: a Nash equilibrium is a strategy profile where every player's strategy is a best response to the others.
6. [Game Theory 101 (#7): Mixed Strategy Nash Equilibrium and Matching Pennies](https://www.youtube.com/watch?v=fvEQujUcPv4) - William Spaniel, 7:14.
   - Watch: 0:00-7:14.
   - Remember: mixing makes the opponent indifferent among the pure strategies in their support.
7. [Game Theory 101 (#8): The Mixed Strategy Algorithm](https://www.youtube.com/watch?v=aa8USttcDoE) - William Spaniel, 9:34.
   - Watch: 0:00-9:34.
   - Remember: solve simple mixed equilibria by equating the opponent's expected payoffs.
8. [Game Theory 101 (#36): Modified Rock Paper Scissors](https://www.youtube.com/watch?v=C6_72XPpKNQ) - William Spaniel, 10:03.
   - Watch: 0:00-10:03 if you want the 3-strategy version.
   - Remember: this is the same mixed-strategy algorithm generalized to three supported actions; more equations, same indifference logic.

Say after watching:

- A normal-form game is `(N, (A_i), (u_i))`.
  - `N` is the set of players.
  - `A_i` is player `i`'s action set.
  - `u_i` maps each action profile to player `i`'s payoff.
- Pure strategy = one action; mixed strategy = distribution over actions.
- Strict dominance is better against every opponent action.
- Best response = optimal reply to the other players' strategies.
- Nash equilibrium is unilateral stability, not welfare optimality.

## 2. Zero-sum games and alternatives to Nash

1. [Game Theory 101 (#35): Symmetric, Zero Sum Games](https://www.youtube.com/watch?v=_D7DAsvx-z4) - William Spaniel, 9:22.
   - Watch: 0:00-9:22.
   - Remember: this is the intuition layer: one player's payoff is the other's loss, and zero-sum games have a security-value/minimax way of thinking.
2. [GTO-3-05: Correlated Equilibrium: Intuition](https://www.youtube.com/watch?v=sQOrIpARr5E) - Game Theory Online, 5:08.
   - Watch: 0:00-5:08.
   - Remember: a mediator recommends actions; no player wants to deviate after seeing their recommendation.
3. [Finding Zero Sum Nash Equilibria with Linear Programming](https://www.youtube.com/watch?v=XrQpLcKXvgY) - Professor Bryce, 16:13.
   - Watch only after using the zero-sum LP builder in `study/mas.html`.
   - Remember: this is the formal LP layer: player 1 maximizes a guaranteed value with one constraint per opponent pure action; the dual is player 2's problem.
4. [Stackelberg Competition](https://www.youtube.com/watch?v=PG7Al6X7AvE) - William Spaniel, 10:41.
   - Watch: 0:00-8:20.
   - Timestamps: 0:00 setup, 1:49 solution strategy/backward induction, 4:06 follower best response, 5:36 leader optimum, 7:50 follower equilibrium production.
   - Remember: solve the follower's best-response function first, then let the leader choose the commitment that maximizes leader payoff given that response.
5. [Security Games: Key Algorithmic Principles, Deployed Applications and Research Challenges](https://www.youtube.com/watch?v=9x2w-Qi6ENk&t=273s) - Microsoft Research, 64:35 total.
   - Optional segment: 4:33-12:30.
   - Remember: Stackelberg equilibrium is leader commitment followed by follower best response, often used in security games.

Say after watching:

- Two-player zero-sum games are polynomial-time solvable by LP.
- The minimax theorem equates maximin and minimax values.
- General Nash computation is harder; finding one equilibrium is PPAD-complete.
- Correlated equilibrium is LP-computable.
- Stackelberg equilibrium is a commitment model.

## 3. Extensive-form games

1. [Game Theory 101: Extensive Form and Subgame Perfect Equilibrium](https://www.youtube.com/watch?v=B54IsC7s8iQ) - William Spaniel, 2:47.
   - Watch: 0:00-2:47.
   - Remember: extensive-form games are game trees, and subgame perfection is the sequential-game refinement of Nash.
2. [Game Theory 101 (#16): Subgame Perfect Equilibrium](https://www.youtube.com/watch?v=hSYXkDnCpHM) - William Spaniel, 7:36.
   - Watch: 0:00-7:36.
   - Remember: subgame perfection removes noncredible threats.
3. [Game Theory 101 (#17): Backward Induction](https://www.youtube.com/watch?v=pyLKkN5HpDY) - William Spaniel, 4:49.
   - Watch: 0:00-4:49.
   - Remember: solve finite perfect-information games from the leaves backward.
4. [The Basics of Extensive Form Games](https://www.youtube.com/watch?v=m1uBcxoopNA) - Selcuk Ozyurt, 18:44.
   - Optional backup: 0:00-12:00 if the game-tree/strategy representation still feels abstract.
   - Remember: a pure extensive-form strategy specifies actions even at decision points that are not reached.
5. [18. Imperfect information: information sets and sub-game perfection](https://www.youtube.com/watch?v=D7aDIZ-KPEU) - YaleCourses / Open Yale Courses, 75:58 total.
   - Main segment: 0:00-18:56 for information sets and perfect recall.
   - Optional segment: 49:59-1:10:17 for subgames and subgame-perfect equilibrium.
6. [Counterfactual Regret Minimization](https://www.youtube.com/watch?v=ygDt_AumPr0) - Professor Bryce, 41:43 total.
   - Optional segment: 0:00-18:00 for the regret/CFR idea.
   - Remember: this is for the algorithmic keyword "CFR"; you need the intuition, not poker-solver implementation details.

Say after watching:

- EFGs are game trees with decision nodes, chance, actions, terminal utilities, and information sets.
- Perfect information means singleton information sets.
- Perfect recall means players remember their own actions and observations.
- Pure EFG strategies specify actions at every information set.
- Behavioral strategies randomize locally; with perfect recall, Kuhn's theorem gives equivalence to mixed strategies.
- Sequence form and regret/CFR are the algorithmic keywords for larger zero-sum EFGs.

## 4. Coalitional games

1. [Cooperative Games and the Shapley value](https://www.youtube.com/watch?v=w9O0fkfMkx0) - Vincent Knight, 2:27.
   - Watch: 0:00-2:27.
   - Remember: Shapley value is average marginal contribution.
2. [7-5 Comparing the Core and Shapley value in an Example - Game Theory](https://www.youtube.com/watch?v=N4iA9_HREOM) - Do Huu Canh, 10:45.
   - Watch: 0:00-10:45.
   - Remember: the core is stability; Shapley is fairness. They answer different questions.
3. [Weighted Voting: The Shapley-Shubik Power Index](https://www.youtube.com/watch?v=6T7g4AyMIm0) - Mathispower4u, 9:04.
   - Watch: 0:00-9:04.
   - Remember: Shapley-Shubik counts how often a voter is pivotal in a random ordering.
4. [Banzhaf power index 1](https://www.youtube.com/watch?v=mCZQ_ZEM7XQ) - OCLPhase2, 3:55.
   - Watch: 0:00-3:55.
   - Remember: Banzhaf counts swing/critical coalitions rather than random arrival orders.

Text backup:

- Use the formal notes for compact representations, additive/superadditive/convex classes, and exact Shapley formula details.

Say after watching:

- A TU coalitional game is `(N, v)`, where `v(S)` gives coalition value.
- The core is efficient allocations where every coalition receives at least its value.
- The Shapley value satisfies efficiency, symmetry, dummy player, and additivity.
- Shapley-Shubik uses pivotal probability in random orderings.
- Banzhaf counts critical coalitions.

## 5. Auctions and mechanism design

1. [Game Theory 101 (#41): Second Price Auctions](https://www.youtube.com/watch?v=VUN-k_nfDts) - William Spaniel, 6:49.
   - Watch: 0:00-6:49.
   - Remember: in private-value second-price auctions, truthful bidding is weakly dominant.
2. [(AGT10E8) Strategic and Revenue Equivalence between First, Second and English Auctions](https://www.youtube.com/watch?v=jM2Q69k4jmw) - Selcuk Ozyurt, 7:41.
   - Watch: 0:00-7:41.
   - Remember: English is strategically like second-price; Dutch is strategically like first-price under standard private-value assumptions.
3. [ETTINGER / Auction Theory: Auction and Revenue](https://www.youtube.com/watch?v=SUEaaMOuEcM) - Learn IOE, 9:17.
   - Watch: 0:00-9:17.
   - Remember: revenue equivalence needs strong assumptions; changing assumptions can change revenue rankings.
4. [The Ideal Auction](https://www.youtube.com/watch?v=4kWuxfVbIaU) - Numberphile, 14:17.
   - Watch: 0:00-14:17.
   - Remember: the Myerson intuition is "optimize revenue by excluding low virtual values"; for i.i.d. regular bidders this becomes a reserve-price Vickrey auction.
5. [Vickrey-Clarke-Groves Mechanism](https://www.youtube.com/watch?v=etmmDIC2DW0) - Selcuk Ozyurt, 14:18.
   - Watch: 0:00-14:18.
   - Remember: VCG payments charge the externality a winner imposes on everyone else.
6. [VCG in Combinatorial Allocations](https://www.youtube.com/watch?v=BajoxrSeBYU) - NPTEL IIT Bombay, 15:36.
   - Watch: 0:00-15:36.
   - Remember: bundles make allocation expressive, but winner determination becomes a hard combinatorial optimization problem.

Text backup:

- For the exam, still rehearse Myerson's virtual-value formula and the exact assumptions behind revenue equivalence from the formal notes.

Say after watching:

- Auction mechanism = allocation rule + payment rule + bidding language.
- First-price: shade below value.
- Second-price/Vickrey: bid truthfully.
- Revenue equivalence requires risk-neutral, independent private values, symmetric bidders, same allocation rule, and same lowest-type utility.
- Myerson allocates to highest nonnegative virtual value and charges threshold payments.
- Combinatorial auctions handle bundles; winner determination is hard.

## One-pass oral drill

1. Identify the representation: normal form, extensive form, coalition, or auction.
2. Define the objects.
3. Name the solution concept: Nash/minimax/correlated/Stackelberg/SPE/core/Shapley/VCG.
4. Give one algorithmic fact: LP, PPAD, sequence form, regret/CFR, exponential Shapley, NP-hard winner determination.
5. If the prompt says "two-player games", bridge to minimax: max nodes for us, min nodes for the opponent, alpha-beta preserves the value, depth limits need evaluation.
6. If the prompt says "multi-agent planning", say joint actions cause product-space blowup; centralized planning, decentralized coordination, and incentives are different assumptions.
7. Give one trap: Nash is not welfare, weak dominance order matters, core may be empty, revenue equivalence has assumptions, VCG can be computationally hard.
