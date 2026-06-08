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
5. [Game Theory 101 (#7): Mixed Strategy Nash Equilibrium and Matching Pennies](https://www.youtube.com/watch?v=fvEQujUcPv4) - William Spaniel, 7:14.
   - Watch: 0:00-7:14.
   - Remember: mixing makes the opponent indifferent among the pure strategies in their support.
6. [Game Theory 101 (#8): The Mixed Strategy Algorithm](https://www.youtube.com/watch?v=aa8USttcDoE) - William Spaniel, 9:34.
   - Watch: 0:00-9:34.
   - Remember: solve simple mixed equilibria by equating the opponent's expected payoffs.

Say after watching:

- A normal-form game is `(N, (A_i), (u_i))`.
- Pure strategy = one action; mixed strategy = distribution over actions.
- Strict dominance is better against every opponent action.
- Nash equilibrium is unilateral stability, not welfare optimality.

## 2. Zero-sum games and alternatives to Nash

1. [Game Theory 101 (#35): Symmetric, Zero Sum Games](https://www.youtube.com/watch?v=_D7DAsvx-z4) - William Spaniel, 9:22.
   - Watch: 0:00-9:22.
   - Remember: in zero-sum games, one player's payoff is the other's loss; minimax and LP give the value.
2. [GTO-3-05: Correlated Equilibrium: Intuition](https://www.youtube.com/watch?v=sQOrIpARr5E) - Game Theory Online, 5:08.
   - Watch: 0:00-5:08.
   - Remember: a mediator recommends actions; no player wants to deviate after seeing their recommendation.
3. [Security Games: Key Algorithmic Principles, Deployed Applications and Research Challenges](https://www.youtube.com/watch?v=9x2w-Qi6ENk&t=273s) - Microsoft Research, 64:35 total.
   - Optional segment: 4:33-12:30.
   - Remember: Stackelberg equilibrium is leader commitment followed by follower best response, often used in security games.

Say after watching:

- Two-player zero-sum games are polynomial-time solvable by LP.
- The minimax theorem equates maximin and minimax values.
- General Nash computation is harder; finding one equilibrium is PPAD-complete.
- Correlated equilibrium is LP-computable.
- Stackelberg equilibrium is a commitment model.

## 3. Extensive-form games

1. [Game Theory 101 (#16): Subgame Perfect Equilibrium](https://www.youtube.com/watch?v=hSYXkDnCpHM) - William Spaniel, 7:36.
   - Watch: 0:00-7:36.
   - Remember: subgame perfection removes noncredible threats.
2. [Game Theory 101 (#17): Backward Induction](https://www.youtube.com/watch?v=pyLKkN5HpDY) - William Spaniel, 4:49.
   - Watch: 0:00-4:49.
   - Remember: solve finite perfect-information games from the leaves backward.
3. [18. Imperfect information: information sets and sub-game perfection](https://www.youtube.com/watch?v=D7aDIZ-KPEU) - YaleCourses / Open Yale Courses, 75:58 total.
   - Main segment: 0:00-18:56 for information sets and perfect recall.
   - Optional segment: 49:59-1:10:17 for subgames and subgame-perfect equilibrium.

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

Text backup:

- Use the formal notes for compact representations, convex games, simple voting games, Shapley-Shubik, and Banzhaf. These are formula-heavy and quicker to rehearse from text.

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

Optional text/video backup:

- Myerson optimal auctions are often covered in longer mechanism-design lectures. For the exam, know the virtual-value rule and the reserve-price interpretation for i.i.d. regular distributions.
- Combinatorial auctions are best learned from the formal notes: values are over bundles, winner determination is NP-hard, and VCG is truthful/efficient but computationally and revenue-problematic.

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
