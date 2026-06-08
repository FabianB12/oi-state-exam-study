const currentPage = document.body?.dataset.page || "pal";
const pageModules = {
  pal: ["complexity", "graphs", "generation", "trees", "automata"],
  tal: ["tal-correctness", "tal-machines", "tal-complexity", "tal-space", "tal-random", "tal-decidability"],
  ko: ["ko-ilp", "ko-shortest", "ko-flow", "ko-knapsack", "ko-tsp", "ko-scheduling", "ko-csp"],
  smu: ["smu-pac", "smu-boolean", "smu-bandits", "smu-mdp", "smu-rl-control"],
  lup: ["lup-sat", "lup-prolog", "lup-fol", "lup-equality", "lup-models"],
  ssu: ["ssu-erm", "ssu-svm", "ssu-mle-em", "ssu-backprop", "ssu-training"],
  pui: ["pui-tasks", "pui-relax", "pui-landmarks", "pui-uncertainty", "pui-mcts"],
  mas: ["mas-normal", "mas-zero-alt", "mas-extensive", "mas-coalitions", "mas-auctions"],
  uir: ["uir-robot", "uir-path", "uir-explore", "uir-multigoal", "uir-sampling"]
};

function storageKey(page = currentPage) {
  return `${page}-study-progress-v1`;
}

function recallKey(page = currentPage) {
  return `${page}-study-recall-v1`;
}

function recallValidationKey(page = currentPage) {
  return `${page}-study-recall-validation-v1`;
}

function labCollapseKey(page = currentPage) {
  return `${page}-study-lab-collapse-v1`;
}

function progressTimestamp() {
  return new Date().toISOString();
}

function progressMetaForPage(page = currentPage, progress = loadProgress(page)) {
  return progress.__meta || {};
}

function collectCurrentQuizKeys() {
  return [...document.querySelectorAll("[data-quiz], [data-pui-quiz], [data-ssu-quiz]")]
    .map((container) => container.dataset.quiz || container.dataset.puiQuiz || container.dataset.ssuQuiz)
    .filter(Boolean);
}

function collectCurrentRecallKeys() {
  return [...document.querySelectorAll("textarea[data-recall]")]
    .map((area) => area.dataset.recall)
    .filter(Boolean);
}

function collectCurrentLabKeys() {
  return [...document.querySelectorAll("[data-lab-key]")]
    .map((container) => container.dataset.labKey)
    .filter(Boolean);
}

function collectCurrentProgressMeta() {
  return {
    modules: pageModules[currentPage] || [],
    videos: currentVideoProgressKeys(),
    quizzes: collectCurrentQuizKeys(),
    recalls: collectCurrentRecallKeys(),
    labs: collectCurrentLabKeys()
  };
}

function saveCurrentProgressMeta() {
  const progress = loadProgress();
  progress.__meta = collectCurrentProgressMeta();
  saveProgress(progress);
  return progress;
}

const flashcards = {
  complexity: [
    ["What does Big-O mean?", "An asymptotic upper bound on growth."],
    ["When is adjacency matrix attractive?", "Dense graph or frequent O(1) edge-existence queries."],
    ["What does a distance matrix store?", "All-pairs shortest-path distances, or infinity for unreachable pairs."],
    ["What is the memory of adjacency lists?", "O(n + m)."],
    ["What is the graph Laplacian?", "Degree matrix minus adjacency matrix."]
  ],
  graphs: [
    ["Which MST algorithm sorts all edges?", "Kruskal."],
    ["Which data structure supports Kruskal?", "Union-find / disjoint set union."],
    ["Kosaraju in one sentence?", "DFS finish order, reverse graph, DFS again to extract SCCs."],
    ["Euler trail condition, undirected?", "0 or 2 odd-degree vertices, plus connectedness of non-isolated part."]
  ],
  generation: [
    ["How many subsets of n elements?", "2^n."],
    ["How many k-subsets?", "C(n,k)."],
    ["One Gray code formula?", "g(i) = i xor (i >> 1)."],
    ["LCG recurrence?", "x[i+1] = (a x[i] + c) mod m."]
  ],
  trees: [
    ["Why can plain BST be bad?", "It can degenerate into a chain with O(n) operations."],
    ["AVL vs red-black?", "AVL is stricter; red-black is looser and often cheaper to update."],
    ["Why B+ trees in databases?", "High branching and linked leaves make page access and range scans efficient."],
    ["Skip list complexity?", "Expected O(log n) search/update through random levels."]
  ],
  automata: [
    ["DFA vs NFA?", "DFA has one active state; NFA can have several possible active states."],
    ["Bit representation of an NFA?", "Store the active state set as a bit vector and update it with precomputed masks."],
    ["KMP runtime?", "O(n + m)."],
    ["Boyer-Moore intuition?", "Compare from the pattern end and shift using bad-character/good-suffix information."],
    ["Levenshtein operations?", "Insert, delete, substitute."],
    ["Aho-Corasick purpose?", "Search many dictionary patterns using trie plus failure links."]
  ],
  "tal-correctness": [
    ["Partial vs total correctness?", "Partial: if it terminates, the answer is correct. Total: partial correctness plus termination."],
    ["Loop invariant proof skeleton?", "Initialization, maintenance, termination."],
    ["What proves termination?", "A loop variant from a well-founded set that strictly decreases."],
    ["What does space complexity usually exclude?", "The read-only input tape; it counts working memory."]
  ],
  "tal-machines": [
    ["DTM in one sentence?", "One transition is chosen from each configuration."],
    ["NTM acceptance rule?", "Accept if at least one computation branch accepts."],
    ["Why do multitape TMs not change P/NP?", "A single-tape TM can simulate them with only polynomial overhead."],
    ["Decider vs recognizer?", "A decider halts on every input; a recognizer may loop on no-instances."]
  ],
  "tal-complexity": [
    ["Decision problem as language?", "Encode instances as strings; yes-instances form a language L subset Sigma*."],
    ["P?", "Languages decidable in deterministic polynomial time."],
    ["NP verifier definition?", "Yes-instances have polynomial-size certificates checkable in polynomial time."],
    ["NP-complete proof checklist?", "Show the problem is in NP and NP-hard via a reduction from a known NP-complete problem."],
    ["Reduction direction for hardness?", "Known hard problem <=p your target problem."]
  ],
  "tal-space": [
    ["PSPACE?", "Languages decidable using polynomial working space."],
    ["NPSPACE?", "Languages decidable by nondeterministic machines using polynomial space."],
    ["Savitch theorem?", "NSPACE(s) is contained in DSPACE(s^2) for s at least log n."],
    ["Why does PSPACE = NPSPACE?", "Squaring a polynomial is still polynomial."]
  ],
  "tal-random": [
    ["Monte Carlo vs Las Vegas?", "Monte Carlo has bounded time and possible error; Las Vegas is always correct with random runtime."],
    ["RP error direction?", "May reject yes-instances, never accepts no-instances."],
    ["co-RP error direction?", "Never rejects yes-instances, may accept no-instances."],
    ["ZPP identity?", "ZPP = RP intersection co-RP."],
    ["BPP?", "Polynomial time with bounded two-sided error, amplifiable by repetition."]
  ],
  "tal-decidability": [
    ["Decidable language?", "A TM halts on every input and accepts exactly the language."],
    ["RE / recognizable?", "A TM accepts yes-instances, but may loop forever on no-instances."],
    ["When is L decidable using recognizers?", "Exactly when both L and its complement are RE."],
    ["Universal language?", "Pairs <M,w> where M accepts w; RE but undecidable."],
    ["Acceptance problem A_TM?", "RE but undecidable: simulate to recognize yes-instances, but no decider exists."],
    ["What does diagonalization also show?", "Some languages are not recursively enumerable at all."],
    ["Halting contradiction shape?", "Assume H predicts halting, build D that does the opposite on its own code."]
  ],
  "ko-ilp": [
    ["LP vs ILP?", "LP has continuous variables; ILP additionally requires integer or binary variables."],
    ["What does x_e = 1 mean in a shortest path ILP?", "Edge e is selected in the path."],
    ["TSP subtour elimination purpose?", "Degree constraints alone allow several small cycles; subtour constraints force one tour."],
    ["Branch and bound pruning for minimization?", "Prune if infeasible, integral, or lower bound is at least the best known upper bound."],
    ["Cutting planes?", "Valid inequalities added to the LP relaxation to cut off fractional solutions."],
    ["Why can some ILPs be solved by LP?", "A totally unimodular matrix with integral right-hand side gives integral LP extreme points."]
  ],
  "ko-shortest": [
    ["Relaxation in one sentence?", "If d[u] + c(u,v) improves d[v], update d[v] and predecessor[v]."],
    ["Dijkstra assumption?", "All edge lengths are nonnegative."],
    ["Bellman-Ford strength?", "It allows negative edges and detects reachable negative cycles."],
    ["Floyd-Warshall recurrence idea?", "Either avoid k as an intermediate vertex or go i -> k -> j."],
    ["DAG shortest path runtime?", "O(n + m) after topological ordering, even with negative edges."]
  ],
  "ko-flow": [
    ["Residual graph meaning?", "It shows where flow can still be pushed forward or undone backward."],
    ["Augmenting path bottleneck?", "The minimum residual capacity along the path."],
    ["Max-flow min-cut theorem?", "Maximum flow value equals minimum s-t cut capacity."],
    ["Lower bounds in feasible flow?", "Substitute f' = f - l and adjust node balances."],
    ["Min-cost flow optimality condition?", "A feasible flow is optimal iff the residual graph has no negative-cost cycle."],
    ["Bipartite matching via flow?", "Source to left side, left to right edges, right side to sink, all capacities one."],
    ["Name flow formulations?", "Assignment, transportation, project selection, disjoint paths, image segmentation, and time-expanded scheduling."]
  ],
  "ko-knapsack": [
    ["0/1 knapsack complexity status?", "Weakly NP-hard."],
    ["Fractional knapsack algorithm?", "Sort by profit/weight ratio and greedily fill capacity."],
    ["Weight DP state?", "DP[i][w] is best profit using first i items and capacity w."],
    ["Pseudo-polynomial means?", "Polynomial in numeric W or P, not polynomial in the bit-length of the input."],
    ["Knapsack FPTAS idea?", "Scale profits down, run profit DP, lose at most epsilon fraction of optimum."]
  ],
  "ko-tsp": [
    ["Metric TSP assumption?", "Nonnegative symmetric distances satisfying the triangle inequality."],
    ["Double-tree ratio?", "2-approximation for metric TSP."],
    ["Christofides ratio?", "3/2-approximation for metric TSP."],
    ["Why shortcutting is legal?", "Triangle inequality says skipping repeated vertices cannot increase length."],
    ["k-OPT guarantee?", "It is local search; it improves until no k-edge exchange helps, but gives no global optimality guarantee by itself."]
  ],
  "ko-scheduling": [
    ["Graham notation?", "alpha | beta | gamma: machine environment, job constraints, objective."],
    ["Core job parameters?", "p_j processing, r_j release, deadlines/due dates, weights, completion, lateness, tardiness, makespan."],
    ["Bratley algorithm?", "Branch and bound over single-machine job orders with release times and deadlines."],
    ["Horn algorithm rule?", "Preemptively run the available job with earliest due date/deadline."],
    ["List scheduling guarantee?", "For P|prec|Cmax, at most (2 - 1/m) times optimum."],
    ["LPT guarantee?", "For independent jobs on identical machines, 4/3 - 1/(3m)."],
    ["McNaughton key formula?", "Optimal preemptive makespan is max(max p_j, sum p_j / m)."],
    ["Fixed-m scheduling DP?", "For constant m, track reachable machine-load vectors; pseudo-polynomial in total processing time."]
  ],
  "ko-csp": [
    ["CSP ingredients?", "Variables, domains, and constraints."],
    ["Arc consistency?", "Every value of Xi has some compatible support value in Xj."],
    ["AC3 queue contains?", "Directed arcs between constrained variable pairs."],
    ["When does AC3 report inconsistency?", "When revising an arc empties a domain."],
    ["Is AC3 complete?", "No. It enforces local consistency; backtracking search may still be needed."],
    ["Standard AC3 time bound?", "O(e d^3) for e binary constraints and maximum domain size d."]
  ],
  "smu-pac": [
    ["PAC in one sentence?", "With enough i.i.d. labeled examples, output a hypothesis with true error at most epsilon with probability at least 1-delta."],
    ["Efficient PAC learnability adds what?", "Polynomial running time, not only polynomial sample complexity."],
    ["Online learning round order?", "See x_t, predict, reveal label/loss, update."],
    ["Mistake-bound goal?", "Make at most M(n) mistakes on every realizable sequence."],
    ["Regret goal?", "Cumulative loss close to the best fixed comparator in hindsight."],
    ["VC dimension?", "Largest size of a set shattered by the hypothesis class."],
    ["Online analogue of VC dimension?", "Littlestone dimension for realizable adversarial online learning."]
  ],
  "smu-boolean": [
    ["Conjunction learner starts with what?", "All 2n literals in one big conjunction."],
    ["What do positive examples do?", "Remove every literal falsified by that positive example."],
    ["Why ignore negative examples in the PAC conjunction algorithm?", "The remaining conjunction stays consistent with all positives; harmful extra literals are exposed by enough positives."],
    ["Disjunction learner is the dual how?", "Start with all literals in a disjunction and remove literals made true by negative examples."],
    ["Online conjunction update bound?", "At most 2n literal removals, so O(n) updates/mistakes in the clean realizable setting."],
    ["k-CNF reduction?", "Treat every clause of size at most k as a Boolean feature, then learn a conjunction."]
  ],
  "smu-bandits": [
    ["Bandit feedback?", "You only observe the reward of the arm you selected."],
    ["Expected regret formula?", "T mu* minus expected collected reward, equivalently sum Delta_i E[N_i(T)]."],
    ["Fixed epsilon-greedy problem?", "It explores forever at a constant rate, so regret is linear."],
    ["UCB score?", "Empirical mean plus sqrt(2 ln t / N_i(t))."],
    ["UCB intuition?", "Optimism under uncertainty: under-sampled arms receive a larger bonus."],
    ["Thompson sampling?", "Sample each arm's mean from its posterior and pull the arm with the largest sample."],
    ["Bernoulli Thompson update?", "Beta alpha increments after success; beta increments after failure."]
  ],
  "smu-mdp": [
    ["MDP tuple?", "(S, A, P, R, gamma)."],
    ["Policy?", "A rule pi(a|s) for choosing actions in states."],
    ["V^pi(s)?", "Expected discounted return starting from state s and following pi."],
    ["Q^pi(s,a)?", "Expected discounted return after taking action a in s, then following pi."],
    ["Bellman optimality idea?", "Best immediate reward plus discounted best future value."],
    ["Value iteration?", "Repeatedly apply the Bellman optimality backup, then extract a greedy policy."]
  ],
  "smu-rl-control": [
    ["Direct utility estimation?", "Monte Carlo prediction by averaging sampled returns for states."],
    ["ADP?", "Learn P and R from experience, then solve the learned MDP with dynamic programming."],
    ["TD update?", "V(s) moves toward r + gamma V(s')."],
    ["Q-learning target?", "r + gamma max_a' Q(s',a'), so it is off-policy."],
    ["SARSA target?", "r + gamma Q(s',a') where a' is the action actually selected, so it is on-policy."],
    ["Exploration strategies?", "Epsilon-greedy, softmax, optimistic initialization, UCB bonuses, posterior sampling."],
    ["Policy search?", "Directly optimize parameters of pi_theta, for example by REINFORCE or actor-critic."]
  ],
  "lup-sat": [
    ["NNF?", "Negation normal form: negations appear only directly in front of propositional variables."],
    ["CNF?", "A conjunction of clauses, where each clause is a disjunction of literals."],
    ["Tseitin transformation?", "Introduce auxiliary variables for subformulas to produce a linear-size equisatisfiable CNF."],
    ["Resolution refutation?", "To prove entailment, add the negated claim and derive the empty clause."],
    ["Unit propagation?", "A unit literal satisfies clauses containing it and removes its negation from the rest."],
    ["CDCL adds what to DPLL?", "Conflict analysis, learned clauses, non-chronological backjumping, heuristics, and restarts."],
    ["Lazy SMT?", "SAT proposes Boolean assignments; a theory solver checks whether the corresponding theory literals are consistent."]
  ],
  "lup-prolog": [
    ["Horn clause?", "A clause with at most one positive literal."],
    ["Definite clause?", "A Horn clause with exactly one positive head literal."],
    ["Herbrand universe?", "All ground terms constructible from constants and function symbols."],
    ["Least Herbrand model?", "The declarative meaning of a definite program, built as the least fixed point of T_P."],
    ["SLD resolution?", "Select a goal atom, unify it with a clause head, and replace it by the clause body under the MGU."],
    ["Negation as failure?", "not G succeeds when G finitely fails; this is not classical negation."],
    ["Cut?", "The Prolog operator ! commits to choices made since entering the current predicate."]
  ],
  "lup-fol": [
    ["FOL clause-form pipeline?", "Eliminate implications, push negations, standardize apart, prenex, Skolemize, drop universals, CNF, split clauses."],
    ["Skolemization preserves what?", "Satisfiability, not logical equivalence."],
    ["Skolem constant vs function?", "Use a constant if the existential depends on no universal variables; use a function of preceding universals otherwise."],
    ["Unification?", "Finding a substitution that makes two terms or atoms identical."],
    ["MGU?", "Most general unifier; every other unifier is an instance of it."],
    ["Subsumption?", "C subsumes D if some substitution makes C a subset of D; D is redundant."],
    ["Saturation?", "Repeatedly add non-redundant consequences until empty clause or no new clauses; may not terminate for satisfiable FOL."]
  ],
  "lup-equality": [
    ["Equality axioms?", "Reflexivity, symmetry, transitivity, congruence, and predicate substitutivity."],
    ["Why are equality axioms inefficient?", "They generate many extra clauses and create a huge search space."],
    ["Paramodulation idea?", "Use s = t to replace a unifiable occurrence of s by t inside another clause."],
    ["Superposition?", "An ordered equality calculus combining resolution, equality inference, term ordering, and rewriting."],
    ["Exam contrast?", "Axiomatizing equality is simple but inefficient; paramodulation/superposition extend inference directly."]
  ],
  "lup-models": [
    ["Grounding?", "Instantiate variables over a finite domain."],
    ["Ground atom to SAT?", "Each ground atom becomes a propositional variable."],
    ["At least one encoding?", "x1 or x2 or ... or xn."],
    ["At most one encoding?", "For all pairs i,j add not xi or not xj."],
    ["Exactly one encoding?", "At least one plus at most one."],
    ["Grounding blow-up?", "A predicate of arity k over n objects can create n^k ground atoms."],
    ["Mitigation?", "Types, symmetry breaking, propagation before grounding, lazy grounding, compact cardinality encodings, incremental SAT."]
  ]
};

const quizzes = {
  complexity: [
    {
      q: "Which representation uses O(n^2) memory?",
      a: ["Adjacency matrix", "Adjacency list", "Union-find"],
      correct: 0,
      why: "The matrix stores one cell for every vertex pair."
    },
    {
      q: "Which is the best default for sparse graph traversal?",
      a: ["Distance matrix", "Adjacency list", "Laplacian matrix"],
      correct: 1,
      why: "Adjacency lists store only existing edges plus vertices."
    },
    {
      q: "What does Theta mean?",
      a: ["Lower bound only", "Upper bound only", "Tight asymptotic bound"],
      correct: 2,
      why: "Theta means both O and Omega hold."
    },
    {
      q: "The Laplacian of an undirected graph is...",
      a: ["D - A", "A - D", "A times D"],
      correct: 0,
      why: "It is the degree matrix minus the adjacency matrix."
    },
    {
      q: "In graph algorithms, m usually means...",
      a: ["Number of vertices", "Number of edges", "Number of components"],
      correct: 1,
      why: "PAL notes use n = |V| and m = |E|."
    },
    {
      q: "A distance matrix is usually...",
      a: ["An all-pairs shortest-path table", "A list of incident edges", "Only the graph degree sequence"],
      correct: 0,
      why: "D[i,j] stores the shortest-path distance from i to j, or infinity if unreachable."
    }
  ],
  graphs: [
    {
      q: "Which MST algorithm grows a single tree?",
      a: ["Prim", "Kruskal", "Kosaraju"],
      correct: 0,
      why: "Prim repeatedly adds the cheapest edge from the current tree outward."
    },
    {
      q: "What does union-find answer efficiently?",
      a: ["Shortest path distance", "Same component?", "Regex acceptance?"],
      correct: 1,
      why: "It maintains disjoint sets and component representatives."
    },
    {
      q: "Tarjan SCC uses...",
      a: ["Lowlink values", "A priority queue", "Sorted edge weights"],
      correct: 0,
      why: "Lowlink detects roots of SCCs during one DFS."
    },
    {
      q: "Undirected Euler circuit requires...",
      a: ["All degrees even", "Exactly one odd degree", "A complete graph"],
      correct: 0,
      why: "Ignoring isolated vertices, all degrees must be even and connected."
    },
    {
      q: "Tree isomorphism is easier mainly because...",
      a: ["Trees have canonical root encodings", "All trees are paths", "It is NP-complete"],
      correct: 0,
      why: "Root at centers and compare sorted child codes."
    }
  ],
  generation: [
    {
      q: "Outputting all permutations is at least...",
      a: ["Linear", "Quadratic", "Factorial"],
      correct: 2,
      why: "There are n! permutations."
    },
    {
      q: "A Gray code changes...",
      a: ["One bit between neighbors", "All bits between neighbors", "Only prime positions"],
      correct: 0,
      why: "That one-bit-change property is the main point."
    },
    {
      q: "The sieve marks...",
      a: ["Multiples of known primes", "Random numbers", "Only odd positions with no rule"],
      correct: 0,
      why: "Composite numbers are eliminated by marking multiples."
    },
    {
      q: "An LCG is deterministic because...",
      a: ["It follows a recurrence from a seed", "It reads hardware noise", "It uses DFS"],
      correct: 0,
      why: "Same parameters and seed give the same sequence."
    },
    {
      q: "How many k-element subsets exist?",
      a: ["2^k", "C(n,k)", "n!"],
      correct: 1,
      why: "That is the binomial coefficient."
    }
  ],
  trees: [
    {
      q: "What is the shared goal of balanced search trees?",
      a: ["Keep height small", "Maximize degree two", "Avoid comparisons"],
      correct: 0,
      why: "Logarithmic height gives logarithmic search/update."
    },
    {
      q: "Which tree is usually best associated with disk/page access?",
      a: ["B-tree", "Plain BST", "k-d tree"],
      correct: 0,
      why: "B-trees use high branching to reduce page reads."
    },
    {
      q: "Splay trees guarantee...",
      a: ["Worst-case O(1)", "Amortized O(log n)", "No rotations"],
      correct: 1,
      why: "Individual operations can be expensive, but sequences amortize."
    },
    {
      q: "k-d trees are primarily for...",
      a: ["String matching", "Spatial multidimensional data", "Disjoint sets"],
      correct: 1,
      why: "They split points by coordinate dimensions."
    },
    {
      q: "Skip lists use...",
      a: ["Random levels", "Red-black coloring", "Lowlink values"],
      correct: 0,
      why: "Random towers simulate balanced search behavior."
    }
  ],
  automata: [
    {
      q: "Which models describe regular languages?",
      a: ["Regex, NFA, DFA", "MST, SCC, Euler", "AVL, B-tree, k-d tree"],
      correct: 0,
      why: "They are equivalent descriptions of regular languages."
    },
    {
      q: "KMP avoids rechecking by using...",
      a: ["A prefix/failure table", "A heap", "Union by rank"],
      correct: 0,
      why: "The table tells where to resume after mismatch."
    },
    {
      q: "Hamming distance assumes...",
      a: ["Equal-length strings", "Many patterns", "Directed graphs"],
      correct: 0,
      why: "It counts substitutions position by position."
    },
    {
      q: "Levenshtein DP has standard runtime...",
      a: ["O(mn)", "O(log n)", "O(n!)"],
      correct: 0,
      why: "It fills a grid over prefixes of both strings."
    },
    {
      q: "Aho-Corasick is for...",
      a: ["Many-pattern dictionary matching", "Minimum spanning trees", "Prime sieving"],
      correct: 0,
      why: "Trie plus failure links finds all dictionary matches."
    },
    {
      q: "Bit-parallel NFA simulation stores active states as...",
      a: ["A bit vector", "A heap", "An MST"],
      correct: 0,
      why: "The active-state set becomes bits, so transitions can update many states with word operations."
    }
  ],
  "tal-correctness": [
    {
      q: "Total correctness requires...",
      a: ["Only a correct output if the loop stops", "Partial correctness and termination", "Only a Big-O bound"],
      correct: 1,
      why: "Total correctness is exactly partial correctness plus a termination argument."
    },
    {
      q: "A loop invariant must hold...",
      a: ["Only after the loop", "Before the first iteration and after every iteration", "Only for sorted arrays"],
      correct: 1,
      why: "Initialization and maintenance are the induction proof."
    },
    {
      q: "A loop variant proves termination by...",
      a: ["Increasing forever", "Strictly decreasing in a well-founded order", "Matching the postcondition exactly"],
      correct: 1,
      why: "There is no infinite strictly decreasing sequence of non-negative integers."
    },
    {
      q: "O(g) means f is...",
      a: ["Eventually bounded above by a constant times g", "Exactly equal to g", "Eventually bigger than every constant times g"],
      correct: 0,
      why: "Big-O is an asymptotic upper bound."
    },
    {
      q: "For Turing-machine space complexity, we usually do not count...",
      a: ["The finite control", "The read-only input tape", "Any written work tape cells"],
      correct: 1,
      why: "The measured resource is working space, not the storage occupied by the input itself."
    }
  ],
  "tal-machines": [
    {
      q: "A deterministic Turing machine has...",
      a: ["At most one next move per state/symbol pair", "Many accepting branches", "No tape"],
      correct: 0,
      why: "Determinism means the transition function chooses a single next move."
    },
    {
      q: "A nondeterministic TM accepts when...",
      a: ["All branches accept", "At least one branch accepts", "The first branch rejects"],
      correct: 1,
      why: "NTM acceptance is existential."
    },
    {
      q: "A recognizer may...",
      a: ["Loop forever on strings outside the language", "Reject every yes-instance", "Use no tape alphabet"],
      correct: 0,
      why: "That is the key difference from a decider."
    },
    {
      q: "A multitape TM compared with a single-tape TM is...",
      a: ["Strictly more powerful", "Equivalent in computability and polynomially simulable", "Unable to decide languages"],
      correct: 1,
      why: "Multiple tapes are convenience, not extra computability power."
    },
    {
      q: "The certificate view of nondeterminism says NP means...",
      a: ["A short proof can be checked quickly", "Every problem can be solved instantly", "No-instances are always checkable"],
      correct: 0,
      why: "NP can be defined by polynomial-size certificates and polynomial-time verifiers."
    }
  ],
  "tal-complexity": [
    {
      q: "P is the class of languages decidable by...",
      a: ["A deterministic TM in polynomial time", "Any machine using infinite time", "A verifier with exponential certificates"],
      correct: 0,
      why: "P is deterministic polynomial time."
    },
    {
      q: "NP is equivalent to...",
      a: ["Polynomial-time verification of yes-certificates", "Polynomial-time verification of all no-certificates only", "Problems with no algorithms"],
      correct: 0,
      why: "A language is in NP when yes-instances have efficiently checkable witnesses."
    },
    {
      q: "co-NP contains languages whose...",
      a: ["Complements are in NP", "Every instance is yes", "Algorithms are randomized"],
      correct: 0,
      why: "co-NP flips yes/no before applying NP."
    },
    {
      q: "To prove B is NP-hard, reduce...",
      a: ["B to an easy problem", "A known hard problem A to B", "B to every language in P"],
      correct: 1,
      why: "If B solves the known hard A after transformation, B is at least as hard as A."
    },
    {
      q: "Cook-Levin proves...",
      a: ["SAT is NP-complete", "P equals NP", "All randomized algorithms are wrong"],
      correct: 0,
      why: "It gives the first NP-complete problem via a computation tableau encoded as SAT."
    },
    {
      q: "Approximation algorithms for NP-hard optimization problems give...",
      a: ["Provable near-optimal guarantees", "A proof P = NP", "Only exact exponential search"],
      correct: 0,
      why: "They trade exactness for polynomial time with a ratio guarantee."
    }
  ],
  "tal-space": [
    {
      q: "PSPACE is based on...",
      a: ["Polynomial memory", "Polynomial randomness only", "Constant-time computation"],
      correct: 0,
      why: "It allows polynomial working space, even if time is much larger."
    },
    {
      q: "A configuration graph node stores...",
      a: ["A whole machine configuration", "Only the input alphabet", "Only accepting states"],
      correct: 0,
      why: "State, head positions, and tape contents define a configuration."
    },
    {
      q: "Acceptance of a space-bounded machine can be viewed as...",
      a: ["Reachability in a configuration graph", "Sorting all strings", "Hash-table lookup only"],
      correct: 0,
      why: "There is an edge from one configuration to its possible next configuration."
    },
    {
      q: "Savitch's theorem says...",
      a: ["NSPACE(s) subset DSPACE(s^2)", "P equals NP", "No randomized algorithms halt"],
      correct: 0,
      why: "The midpoint reachability recursion trades nondeterminism for squared space."
    },
    {
      q: "Why does Savitch imply PSPACE = NPSPACE?",
      a: ["Because polynomial squared is still polynomial", "Because all problems are finite", "Because memory is not counted"],
      correct: 0,
      why: "The theorem turns nondeterministic polynomial space into deterministic polynomial space."
    }
  ],
  "tal-random": [
    {
      q: "Monte Carlo algorithms...",
      a: ["May err with bounded probability", "Are always correct but may run forever", "Never use random bits"],
      correct: 0,
      why: "Monte Carlo fixes the time bound but allows small error."
    },
    {
      q: "Las Vegas algorithms...",
      a: ["Are always correct but have random running time", "Are always wrong on no-instances", "Use nondeterminism but no probability"],
      correct: 0,
      why: "Expected time is bounded, correctness is not probabilistic."
    },
    {
      q: "RP never...",
      a: ["Accepts no-instances", "Rejects yes-instances", "Uses repetition"],
      correct: 0,
      why: "RP has one-sided error: false negatives only."
    },
    {
      q: "co-RP never...",
      a: ["Rejects yes-instances", "Accepts no-instances", "Halts in polynomial time"],
      correct: 0,
      why: "co-RP has the opposite one-sided error: false positives only."
    },
    {
      q: "ZPP equals...",
      a: ["RP intersection co-RP", "NP union PSPACE", "P complement NP"],
      correct: 0,
      why: "Having both one-sided algorithms yields zero-error expected polynomial time."
    }
  ],
  "tal-decidability": [
    {
      q: "A decider must...",
      a: ["Halt on every input", "Accept only no-instances", "Use polynomial time"],
      correct: 0,
      why: "Decidability is about always eventually answering yes or no."
    },
    {
      q: "An RE language has...",
      a: ["A recognizer for yes-instances", "A decider for both sides necessarily", "No Turing machine at all"],
      correct: 0,
      why: "Recognizers are allowed to loop forever on no-instances."
    },
    {
      q: "L is decidable iff...",
      a: ["Both L and complement(L) are RE", "L is not RE", "Only complement(L) loops"],
      correct: 0,
      why: "Run both recognizers in dovetailing; one eventually accepts."
    },
    {
      q: "The universal language L_U is...",
      a: ["RE but undecidable", "Not even recognizable", "Always finite"],
      correct: 0,
      why: "A universal TM can simulate and accept when M accepts, but cannot decide all cases."
    },
    {
      q: "The diagonal proof creates a contradiction by...",
      a: ["Making a machine disagree with the supposed decider on itself", "Sorting all machines", "Using randomized majority vote"],
      correct: 0,
      why: "Self-reference flips the predicted behavior."
    },
    {
      q: "To prove B undecidable by reduction, start from...",
      a: ["A known undecidable problem A", "A known polynomial-time problem", "A random language"],
      correct: 0,
      why: "If a decider for B would decide known-undecidable A, B cannot be decidable."
    },
    {
      q: "A_TM, the acceptance problem, is...",
      a: ["RE but undecidable", "Decidable in polynomial time", "Not recognizable"],
      correct: 0,
      why: "A universal TM recognizes yes-instances by simulation, but no decider exists."
    },
    {
      q: "Diagonalization also proves...",
      a: ["Some languages are not RE", "Every language is decidable", "RE equals co-RE"],
      correct: 0,
      why: "The diagonal language cannot be recognized by any TM."
    }
  ],
  "ko-ilp": [
    {
      q: "General binary ILP is...",
      a: ["Polynomial-time solvable in general", "NP-hard in general", "Only useful for continuous decisions"],
      correct: 1,
      why: "The integer restriction creates a hard discrete search problem."
    },
    {
      q: "In the shortest path ILP, flow conservation gives source balance...",
      a: ["1", "-1", "0"],
      correct: 0,
      why: "One unit leaves the source; the target has balance -1 and internal vertices have 0."
    },
    {
      q: "TSP degree constraints alone can produce...",
      a: ["Several disjoint subtours", "A shortest path tree", "A max flow"],
      correct: 0,
      why: "Every vertex can have degree 2 while the solution is multiple cycles."
    },
    {
      q: "Branch and bound uses an LP relaxation for...",
      a: ["A lower bound in minimization", "A guaranteed feasible integer solution", "A random branching order"],
      correct: 0,
      why: "The relaxed optimum can be no worse than the integer optimum, so it bounds the subproblem."
    },
    {
      q: "Totally unimodular matrices matter because...",
      a: ["They make every ILP easy", "They make integral RHS LP relaxations integral", "They remove all constraints"],
      correct: 1,
      why: "This is why many network-flow style ILPs can be solved as LPs."
    },
    {
      q: "A cutting plane must...",
      a: ["Remove the current fractional LP solution but keep all feasible integer solutions", "Delete all integer solutions", "Ignore the LP relaxation"],
      correct: 0,
      why: "Valid inequalities tighten the relaxation without changing the true integer feasible set."
    }
  ],
  "ko-shortest": [
    {
      q: "Dijkstra is invalid when...",
      a: ["All weights are positive", "There are negative edges", "The graph is sparse"],
      correct: 1,
      why: "The extracted-minimum distance is only final under nonnegative edge lengths."
    },
    {
      q: "Bellman-Ford detects a negative cycle by...",
      a: ["Sorting vertices topologically", "An extra relaxation pass after n-1 rounds", "Taking an MST"],
      correct: 1,
      why: "If an edge can still improve, a reachable negative cycle exists."
    },
    {
      q: "Floyd-Warshall solves...",
      a: ["All-pairs shortest paths", "Only MST", "Only max flow"],
      correct: 0,
      why: "It fills a distance matrix for all vertex pairs."
    },
    {
      q: "DAG shortest paths can allow negative edges because...",
      a: ["There are no cycles", "Dijkstra fixes them", "All paths have length one"],
      correct: 0,
      why: "No cycle means no negative cycle, and topological order gives a valid DP order."
    },
    {
      q: "Difference constraints are usually modeled with...",
      a: ["Shortest paths", "Christofides matching", "AC3 only"],
      correct: 0,
      why: "Inequalities of the form x_v - x_u <= c(u,v) become graph edges."
    }
  ],
  "ko-flow": [
    {
      q: "A backward residual edge means...",
      a: ["You may undo previous flow", "The original capacity is negative", "The cut is impossible"],
      correct: 0,
      why: "Backward residual capacity equals current flow on the original edge."
    },
    {
      q: "Edmonds-Karp chooses augmenting paths by...",
      a: ["BFS shortest number of edges", "DFS arbitrary depth", "Minimum spanning tree"],
      correct: 0,
      why: "That path choice gives O(nm^2)."
    },
    {
      q: "At the end of Ford-Fulkerson, a min cut is found by...",
      a: ["Vertices reachable from s in the residual graph", "All vertices with odd degree", "The first BFS tree in the original graph"],
      correct: 0,
      why: "No residual s-t path means the reachable set defines the saturated bottleneck cut."
    },
    {
      q: "Cycle-canceling for min-cost flow stops when...",
      a: ["No negative-cost residual cycle remains", "The graph has no cycles at all", "All capacities become zero"],
      correct: 0,
      why: "That is the standard optimality condition for a feasible min-cost flow."
    },
    {
      q: "Maximum cardinality bipartite matching uses capacities...",
      a: ["1 on source-left, matching, and right-sink edges", "Infinity on every edge only", "Negative capacities"],
      correct: 0,
      why: "Integral unit flows correspond exactly to matched pairs."
    },
    {
      q: "Which is a standard network-flow formulation?",
      a: ["Transportation/assignment", "Regular expression closure", "Loop invariant proof"],
      correct: 0,
      why: "Transportation and assignment are classic flow-style models."
    }
  ],
  "ko-knapsack": [
    {
      q: "The O(nW) knapsack DP is not polynomial in input size because...",
      a: ["W is a number encoded in binary", "n is always exponential", "DP never terminates"],
      correct: 0,
      why: "Numeric W can be exponentially larger than its bit representation."
    },
    {
      q: "Fractional knapsack is solved optimally by...",
      a: ["Profit/weight ratio greedy", "Floyd-Warshall", "AC3"],
      correct: 0,
      why: "Fractions remove the indivisibility difficulty."
    },
    {
      q: "Profit DP stores...",
      a: ["Minimum weight needed for a given profit", "Maximum cut capacity", "All subtours"],
      correct: 0,
      why: "Then choose the largest profit whose minimum weight fits W."
    },
    {
      q: "The simple 2-approx compares greedy prefix against...",
      a: ["The single most profitable fitting item", "A negative cycle", "A random tour"],
      correct: 0,
      why: "One of those two has at least half of OPT."
    },
    {
      q: "An FPTAS for knapsack runs polynomially in...",
      a: ["n and 1/epsilon", "W only", "2^n exactly"],
      correct: 0,
      why: "Scaling profits trades controlled approximation error for polynomial time."
    }
  ],
  "ko-tsp": [
    {
      q: "Metric TSP requires...",
      a: ["Triangle inequality", "Negative cycles", "A bipartite graph"],
      correct: 0,
      why: "Shortcutting and the approximation proofs rely on triangle inequality."
    },
    {
      q: "Double-tree starts by computing...",
      a: ["An MST", "A max flow", "An AC3 queue"],
      correct: 0,
      why: "The MST has weight at most OPT, then doubling gives an Eulerian graph."
    },
    {
      q: "Christofides adds a matching on...",
      a: ["Odd-degree vertices of the MST", "All city pairs", "Only source and sink"],
      correct: 0,
      why: "The matching makes all degrees even before taking an Euler tour."
    },
    {
      q: "Christofides guarantee is...",
      a: ["1.5 OPT", "2.5 OPT", "Exact optimum for every TSP"],
      correct: 0,
      why: "MST <= OPT and matching <= OPT/2, then shortcut."
    },
    {
      q: "2-OPT is...",
      a: ["Local search replacing two edges", "A linear-programming theorem", "A max-flow augmenting path"],
      correct: 0,
      why: "It repeatedly improves a tour by reconnecting after removing two edges."
    }
  ],
  "ko-scheduling": [
    {
      q: "In alpha|beta|gamma, beta means...",
      a: ["Job constraints", "Objective", "Machine environment"],
      correct: 0,
      why: "Alpha is machines, beta is restrictions, gamma is the objective."
    },
    {
      q: "Horn's algorithm is optimal for...",
      a: ["1|r_j,pmtn|Lmax", "General TSP", "All ILPs"],
      correct: 0,
      why: "It is the preemptive earliest-deadline-first rule for maximum lateness with release times."
    },
    {
      q: "List scheduling for P|prec|Cmax has ratio...",
      a: ["2 - 1/m", "1/2", "n!"],
      correct: 0,
      why: "That is Graham's classic bound."
    },
    {
      q: "McNaughton's algorithm relies on...",
      a: ["Preemption being allowed", "Subtour elimination", "Arc consistency"],
      correct: 0,
      why: "Jobs can be split at machine boundaries in the rectangle construction."
    },
    {
      q: "A time-indexed ILP variable x_jt usually means...",
      a: ["Job j starts at time t", "Edge j has residual t", "Domain value t was removed"],
      correct: 0,
      why: "Capacity constraints then sum all jobs active in each time slot."
    },
    {
      q: "For fixed m, P_m||Cmax can be solved by...",
      a: ["Pseudo-polynomial DP over machine loads", "AC3 arc consistency", "Floyd-Warshall"],
      correct: 0,
      why: "The state tracks reachable load vectors after scheduling jobs."
    }
  ],
  "ko-csp": [
    {
      q: "A binary arc (Xi, Xj) is consistent if...",
      a: ["Every Xi value has some supporting Xj value", "Xi and Xj have equal domain sizes only", "The CSP is already solved"],
      correct: 0,
      why: "Unsupported values in Xi can be removed."
    },
    {
      q: "AC3 re-adds neighboring arcs because...",
      a: ["Domain deletion can make earlier supports disappear", "The queue must grow forever", "It needs a shortest path"],
      correct: 0,
      why: "Local deletions can affect other constraints touching the revised variable."
    },
    {
      q: "If AC3 leaves nonempty domains...",
      a: ["A solution is guaranteed in every CSP", "The CSP is arc-consistent but may still need search", "All constraints are removed"],
      correct: 1,
      why: "Arc consistency is a local property and is not complete in general."
    },
    {
      q: "General CSP is...",
      a: ["NP-complete", "Always linear-time", "The same as MST"],
      correct: 0,
      why: "Propagation helps, but the general decision problem is NP-complete."
    },
    {
      q: "The standard AC3 bound is...",
      a: ["O(e d^3)", "O(log n)", "O(n!) always"],
      correct: 0,
      why: "Each arc can be reconsidered after deletions and revise can scan domain pairs."
    }
  ],
  "smu-pac": [
    {
      q: "In PAC learning, the examples are usually assumed to be...",
      a: ["i.i.d. from an unknown distribution", "Chosen after the learner predicts", "Only rewards from selected arms"],
      correct: 0,
      why: "PAC is the distributional batch setting: examples are sampled independently from D."
    },
    {
      q: "The PAC guarantee says true error is at most epsilon with probability at least...",
      a: ["1 - delta", "epsilon + delta", "T gamma"],
      correct: 0,
      why: "Epsilon is accuracy; delta is failure probability."
    },
    {
      q: "Online regret compares the learner to...",
      a: ["The best fixed hypothesis/action in hindsight", "A random sample size", "The shortest path tree"],
      correct: 0,
      why: "Regret measures excess cumulative loss against a comparator."
    },
    {
      q: "Finite VC dimension characterizes...",
      a: ["Distribution-free PAC learnability for binary classification", "Euler circuits", "Only Bayesian bandits"],
      correct: 0,
      why: "The formal notes explicitly identify finite VC dimension as the PAC characterization."
    },
    {
      q: "A finite mistake-bound online learner implies...",
      a: ["Realizable PAC learnability", "That all PAC classes have small adversarial mistake bounds", "That rewards are fully observed"],
      correct: 0,
      why: "Run the online learner on i.i.d. samples and use the final hypothesis."
    }
  ],
  "smu-boolean": [
    {
      q: "The conjunction learner removes literals using...",
      a: ["Positive examples", "Only negative examples", "Random rewards"],
      correct: 0,
      why: "A positive example proves every falsified literal cannot be required by the target conjunction."
    },
    {
      q: "The direct disjunction learner removes literals using...",
      a: ["Negative examples that make them true", "Positive examples that make them false", "Bellman backups"],
      correct: 0,
      why: "A negative example must make the target disjunction false, so any true literal cannot belong."
    },
    {
      q: "The simple conjunction PAC algorithm runs in...",
      a: ["O(mn)", "O(2^m)", "O(log T)"],
      correct: 0,
      why: "Check at most 2n literals across m examples."
    },
    {
      q: "The online conjunction mistake/update bound comes from...",
      a: ["Each literal being removed at most once", "Repeatedly adding all deleted literals", "Solving a linear program"],
      correct: 0,
      why: "There are only 2n literals available to delete."
    },
    {
      q: "For fixed k, k-CNF is learned by reducing to...",
      a: ["A conjunction over O(n^k) clause features", "A single-arm bandit", "A shortest-path MDP"],
      correct: 0,
      why: "The target becomes a conjunction in the expanded clause-feature space."
    }
  ],
  "smu-bandits": [
    {
      q: "Bandit feedback is partial because...",
      a: ["Only the selected arm's reward is observed", "All labels are revealed before prediction", "The transition model is known"],
      correct: 0,
      why: "You do not see what the other arms would have paid."
    },
    {
      q: "If Delta_i = mu* - mu_i, expected regret can be written as...",
      a: ["sum Delta_i E[N_i(T)] over suboptimal arms", "max_a Q(s,a)", "epsilon divided by delta"],
      correct: 0,
      why: "Each suboptimal pull costs its gap in expected reward."
    },
    {
      q: "Fixed epsilon-greedy generally has...",
      a: ["Linear regret", "Zero regret after one sample", "No exploration"],
      correct: 0,
      why: "A constant fraction of pulls remains exploratory forever."
    },
    {
      q: "The UCB bonus shrinks when...",
      a: ["An arm has been pulled many times", "The arm name is shorter", "The reward is hidden forever"],
      correct: 0,
      why: "The denominator N_i(t) grows with pulls."
    },
    {
      q: "For Bernoulli Thompson sampling, a failure increments...",
      a: ["beta", "alpha", "gamma"],
      correct: 0,
      why: "Success increments alpha; failure increments beta."
    }
  ],
  "smu-mdp": [
    {
      q: "The MDP tuple includes...",
      a: ["S, A, P, R, gamma", "epsilon, delta, VC only", "arms and empirical means only"],
      correct: 0,
      why: "Those five pieces define the stateful delayed-reward problem."
    },
    {
      q: "V^pi(s) is...",
      a: ["Expected discounted return from state s under policy pi", "The number of literals removed", "Only immediate reward of an arm"],
      correct: 0,
      why: "V values states, while Q values state-action pairs."
    },
    {
      q: "Q^pi(s,a) differs from V^pi(s) because it...",
      a: ["Conditions on taking action a first", "Ignores actions", "Requires i.i.d. labels"],
      correct: 0,
      why: "Q starts with a state-action pair and then follows the policy."
    },
    {
      q: "Value iteration requires...",
      a: ["A known or estimated model P and R", "Only a VC dimension", "No rewards"],
      correct: 0,
      why: "The Bellman backup sums over transition probabilities and rewards."
    },
    {
      q: "For finite discounted MDPs, value iteration...",
      a: ["Converges", "Always diverges", "Is the same as Thompson sampling"],
      correct: 0,
      why: "The discounted Bellman optimality operator is a contraction."
    }
  ],
  "smu-rl-control": [
    {
      q: "Direct utility estimation is also called...",
      a: ["Monte Carlo prediction", "UCB", "VC shattering"],
      correct: 0,
      why: "It averages sampled returns rather than bootstrapping from V(s')."
    },
    {
      q: "ADP is model-based because it...",
      a: ["Estimates P and R, then plans", "Never estimates transitions", "Only removes literals"],
      correct: 0,
      why: "Adaptive dynamic programming learns an MDP model from experience."
    },
    {
      q: "TD learning updates toward...",
      a: ["r + gamma V(s')", "T mu*", "the largest shattered set"],
      correct: 0,
      why: "That one-step bootstrapped target is the TD signature."
    },
    {
      q: "Q-learning is off-policy because its target uses...",
      a: ["max_a' Q(s',a')", "the actually selected next action only", "negative examples only"],
      correct: 0,
      why: "It backs up the greedy next action even if behavior was exploratory."
    },
    {
      q: "SARSA is on-policy because its target uses...",
      a: ["Q(s',a') for the actually chosen a'", "only the best possible next action", "a posterior Beta sample"],
      correct: 0,
      why: "The second A in SARSA is the next action taken by the current behavior policy."
    },
    {
      q: "Policy search directly optimizes...",
      a: ["J(theta) for a parameterized policy", "A literal set", "A confidence interval only"],
      correct: 0,
      why: "It searches in policy-parameter space instead of deriving a policy from values."
    }
  ],
  "lup-sat": [
    {
      q: "Tseitin conversion produces a CNF that is...",
      a: ["Equisatisfiable and linear-size", "Always equivalent without auxiliary variables", "A DNF"],
      correct: 0,
      why: "Auxiliary variables preserve satisfiability while avoiding exponential distributive blow-up."
    },
    {
      q: "Resolution proves entailment Gamma |= phi by showing...",
      a: ["Gamma and not phi are unsatisfiable", "phi has the shortest syntax", "DPLL loops forever"],
      correct: 0,
      why: "Resolution is typically used as refutation: derive the empty clause from the negated goal."
    },
    {
      q: "A unit clause x causes...",
      a: ["Clauses with x to be satisfied and not x to be removed elsewhere", "Every variable to become true", "SMT theory atoms to disappear"],
      correct: 0,
      why: "That is Boolean constraint propagation."
    },
    {
      q: "CDCL improves DPLL mainly by...",
      a: ["Learning clauses from conflicts", "Removing CNF", "Ignoring unit propagation"],
      correct: 0,
      why: "Conflict analysis produces learned clauses and enables backjumping."
    },
    {
      q: "Lazy SMT sends a SAT assignment to...",
      a: ["A theory solver", "A Prolog cut", "A Skolem function"],
      correct: 0,
      why: "The theory solver checks whether the chosen theory literals are actually consistent."
    }
  ],
  "lup-prolog": [
    {
      q: "A definite clause has...",
      a: ["Exactly one positive literal", "No positive literals", "Only equality literals"],
      correct: 0,
      why: "In Prolog form, it is a head implied by a body."
    },
    {
      q: "The Herbrand base contains...",
      a: ["All ground atoms over the language", "Only variables", "Only learned SAT clauses"],
      correct: 0,
      why: "The base is atoms; the universe is ground terms."
    },
    {
      q: "SLD resolution replaces a selected goal atom by...",
      a: ["The body of a unifying clause", "The empty clause immediately", "A random SAT assignment"],
      correct: 0,
      why: "The replacement is done under the most general unifier."
    },
    {
      q: "Prolog's default search is...",
      a: ["Depth-first and left-to-right", "Breadth-first and fair", "Parallel CDCL"],
      correct: 0,
      why: "This operational choice explains many loops and order effects."
    },
    {
      q: "Negation as failure is safest for...",
      a: ["Ground goals in well-behaved stratified settings", "Arbitrary variables as classical negation", "Non-terminating positive goals"],
      correct: 0,
      why: "NAF depends on finite failure, not on a constructive proof of classical negation."
    },
    {
      q: "A red cut...",
      a: ["Can change declarative meaning", "Never changes answers", "Is a theory lemma"],
      correct: 0,
      why: "Green cuts only prune redundant search; red cuts affect the logical result."
    }
  ],
  "lup-fol": [
    {
      q: "Skolemizing exists y after forall x usually creates...",
      a: ["A Skolem function f(x)", "A pure literal", "A CDCL restart"],
      correct: 0,
      why: "The witness may depend on x, so it becomes a function of x."
    },
    {
      q: "The occurs check rejects...",
      a: ["x = f(x)", "x = a", "P(x) with P(a)"],
      correct: 0,
      why: "Without occurs check, the substitution would define an infinite term."
    },
    {
      q: "FOL resolution differs from propositional resolution because it uses...",
      a: ["Unification", "Only truth tables", "Only cut"],
      correct: 0,
      why: "Complementary literals may match only after a substitution."
    },
    {
      q: "If C subsumes D, then D is...",
      a: ["Redundant", "The unique MGU", "A theory atom"],
      correct: 0,
      why: "C is at least as general, so D need not be kept."
    },
    {
      q: "Saturation on satisfiable FOL problems may...",
      a: ["Not terminate", "Always finish in polynomial time", "Always derive empty clause"],
      correct: 0,
      why: "First-order search spaces can be infinite."
    }
  ],
  "lup-equality": [
    {
      q: "Which is an equality axiom family?",
      a: ["Congruence for functions", "Unit propagation", "Epsilon-greedy"],
      correct: 0,
      why: "Congruence says equal arguments produce equal function results."
    },
    {
      q: "The main problem with axiomatic equality is...",
      a: ["Too many generated clauses", "It is unsound", "It cannot express reflexivity"],
      correct: 0,
      why: "The axioms are conceptually simple but inefficient for proof search."
    },
    {
      q: "Paramodulation lets a prover...",
      a: ["Replace equals by equals inside clauses", "Sample a posterior", "Ground every variable automatically"],
      correct: 0,
      why: "It is equality reasoning as an inference rule."
    },
    {
      q: "Superposition refines paramodulation using...",
      a: ["Term ordering and rewriting", "Only depth-first Prolog", "A pure literal rule"],
      correct: 0,
      why: "Ordering and simplification reduce the equality search space."
    }
  ],
  "lup-models": [
    {
      q: "Grounding over domain {a,b} turns forall x P(x) into...",
      a: ["P(a) and P(b)", "P(x) only", "not P(a) or not P(b)"],
      correct: 0,
      why: "Universal quantification becomes a conjunction over all domain objects."
    },
    {
      q: "Exactly-one is encoded as...",
      a: ["At least one plus at most one", "Only one implication", "Only one Skolem constant"],
      correct: 0,
      why: "At least one enforces existence; at most one enforces uniqueness."
    },
    {
      q: "The implication a => b becomes...",
      a: ["not a or b", "a or not b", "a and b"],
      correct: 0,
      why: "That is the standard CNF clause for implication."
    },
    {
      q: "A predicate of arity k over n objects creates up to...",
      a: ["n^k ground atoms", "k^n clauses only", "n+k atoms"],
      correct: 0,
      why: "Each argument position ranges over n objects."
    },
    {
      q: "Which helps grounding blow-up?",
      a: ["Typed domains and symmetry breaking", "Removing all constraints", "Using DNF only"],
      correct: 0,
      why: "Both reduce redundant or impossible ground combinations."
    }
  ]
};

const representationData = {
  matrix: {
    title: "Adjacency matrix",
    html: "<p><strong>Memory:</strong> O(n^2). <strong>Edge query:</strong> O(1).</p><table class='matrix-table'><tr><th></th><th>A</th><th>B</th><th>C</th></tr><tr><th>A</th><td>0</td><td>1</td><td>1</td></tr><tr><th>B</th><td>1</td><td>0</td><td>0</td></tr><tr><th>C</th><td>1</td><td>0</td><td>0</td></tr></table><p>Great if the graph is dense or you constantly ask whether an edge exists.</p><p class='step-note'><strong>Remember:</strong> use this when fast yes/no edge lookup matters more than memory.</p>"
  },
  list: {
    title: "Adjacency list",
    html: "<p><strong>Memory:</strong> O(n + m). <strong>Traversal:</strong> natural and compact.</p><p>Think <code>adj[v]</code>: an array slot for each vertex, and inside that slot a list/array of neighbors.</p><pre>adj[A] = [B, C]\nadj[B] = [A]\nadj[C] = [A]</pre><p>Best default for sparse graphs. A compact implementation can store all neighbors in one big array plus an offset array.</p><p class='step-note'><strong>Remember:</strong> use this when you mostly iterate over neighbors.</p>"
  },
  incidence: {
    title: "Incidence matrix",
    html: "<p>Rows are vertices, columns are edges. It answers: which vertices touch which edge?</p><table class='matrix-table'><tr><th></th><th>e1 AB</th><th>e2 AC</th></tr><tr><th>A</th><td>1</td><td>1</td></tr><tr><th>B</th><td>1</td><td>0</td></tr><tr><th>C</th><td>0</td><td>1</td></tr></table><p class='step-note'><strong>Remember:</strong> useful when edges themselves are the objects you reason about.</p>"
  },
  distance: {
    title: "Distance matrix",
    html: "<p>Entry <code>D[i,j]</code> stores the shortest-path distance from i to j, or infinity if j is unreachable from i.</p><table class='matrix-table'><tr><th></th><th>A</th><th>B</th><th>C</th></tr><tr><th>A</th><td>0</td><td>2</td><td>5</td></tr><tr><th>B</th><td>&infin;</td><td>0</td><td>3</td></tr><tr><th>C</th><td>&infin;</td><td>&infin;</td><td>0</td></tr></table><p>Unlike adjacency, this is often the output of all-pairs shortest paths.</p><p class='step-note'><strong>Remember:</strong> this stores path cost, not just direct edges.</p>"
  },
  laplacian: {
    title: "Laplacian",
    html: "<p><strong>Formula:</strong> <code>L = D - A</code>. Put the vertex degree on the diagonal, put <code>-1</code> where two vertices are adjacent, and put <code>0</code> otherwise.</p><table class='matrix-table'><tr><th></th><th>A</th><th>B</th><th>C</th></tr><tr><th>A</th><td class='diag'>2</td><td class='neg'>-1</td><td class='neg'>-1</td></tr><tr><th>B</th><td class='neg'>-1</td><td class='diag'>1</td><td>0</td></tr><tr><th>C</th><td class='neg'>-1</td><td>0</td><td class='diag'>1</td></tr></table><p>Every row sums to zero. Intuition: each row compares a vertex against its neighbors.</p><p class='step-note'><strong>Remember:</strong> diagonal says \"how many neighbors,\" off-diagonal says \"which neighbors.\"</p>"
  }
};

function matrixTable(caption, rows, options = {}) {
  const headers = ["A", "B", "C", "D"];
  const body = rows.map((row, rowIndex) => {
    const cells = row.map((value, colIndex) => {
      const classes = [];
      if (options.diagonal && rowIndex === colIndex && value !== 0) classes.push("diag");
      if (value < 0) classes.push("neg");
      const classAttr = classes.length ? ` class="${classes.join(" ")}"` : "";
      return `<td${classAttr}>${value}</td>`;
    }).join("");
    return `<tr><th>${headers[rowIndex]}</th>${cells}</tr>`;
  }).join("");
  return `<div><p class="matrix-caption">${caption}</p><table class="matrix-table"><tr><th></th>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>${body}</table></div>`;
}

const tinyGraphSvg = `<div class="graph-mini laplacian-graph-mini">
  <svg class="graph-visual" viewBox="0 0 260 180" role="img" aria-label="Tiny undirected graph with edges A-B, A-C, and B-D">
    <g class="graph-edges">
      <line x1="72" y1="52" x2="188" y2="52"></line>
      <line x1="72" y1="52" x2="72" y2="136"></line>
      <line x1="188" y1="52" x2="188" y2="136"></line>
    </g>
    <g class="graph-vertices">
      <g class="graph-vertex" transform="translate(72 52)">
        <circle r="23"></circle>
        <text y="6">A</text>
      </g>
      <g class="graph-vertex" transform="translate(188 52)">
        <circle r="23"></circle>
        <text y="6">B</text>
      </g>
      <g class="graph-vertex" transform="translate(72 136)">
        <circle r="23"></circle>
        <text y="6">C</text>
      </g>
      <g class="graph-vertex" transform="translate(188 136)">
        <circle r="23"></circle>
        <text y="6">D</text>
      </g>
    </g>
  </svg>
</div>`;

const laplacianSteps = {
  graph: {
    title: "Start with the graph",
    html: `<div class="laplacian-explain">
	      <p>Use vertices <code>A,B,C,D</code> and undirected edges <code>A-B</code>, <code>A-C</code>, <code>B-D</code>.</p>
	      ${tinyGraphSvg}
	      <p>The degrees are <code>deg(A)=2</code>, <code>deg(B)=2</code>, <code>deg(C)=1</code>, <code>deg(D)=1</code>. These four numbers are the diagonal of the degree matrix.</p>
	      <div class="row-sum-strip"><span>A touches B,C</span><span>B touches A,D</span><span>C touches A</span><span>D touches B</span></div>
	      <p class="step-note"><strong>Why:</strong> before writing matrices, count each vertex's neighbors.</p>
	    </div>`
  },
  adjacency: {
    title: "Adjacency matrix A",
    html: `<div class="laplacian-explain">
      <p><code>A[i,j] = 1</code> when vertices <code>i</code> and <code>j</code> are connected. Otherwise it is <code>0</code>. For an undirected graph, the matrix is symmetric.</p>
	      ${matrixTable("A: 1 means an edge exists", [
	        [0, 1, 1, 0],
	        [1, 0, 0, 1],
	        [1, 0, 0, 0],
	        [0, 1, 0, 0]
	      ])}
	      <p class="step-note"><strong>Why:</strong> this matrix only records direct edges, not path distance.</p>
	    </div>`
  },
  degree: {
    title: "Degree matrix D",
    html: `<div class="laplacian-explain">
      <p><code>D</code> has only diagonal entries. Each diagonal entry is the degree of that vertex.</p>
	      ${matrixTable("D: degrees on the diagonal", [
	        [2, 0, 0, 0],
	        [0, 2, 0, 0],
	        [0, 0, 1, 0],
	        [0, 0, 0, 1]
	      ], { diagonal: true })}
	      <p class="step-note"><strong>Why:</strong> the degree matrix says how strongly each vertex is connected.</p>
	    </div>`
  },
  laplacian: {
    title: "Subtract: L = D - A",
    html: `<div class="laplacian-explain">
      <p class="laplacian-equation"><code>L</code> = <code>D</code> - <code>A</code></p>
      <p>The diagonal stays positive because adjacency has zeroes there. Existing edges become <code>0 - 1 = -1</code>. Missing edges stay <code>0</code>.</p>
	      <div class="laplacian-matrix-grid">
        ${matrixTable("D", [
          [2, 0, 0, 0],
          [0, 2, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1]
        ], { diagonal: true })}
        ${matrixTable("A", [
          [0, 1, 1, 0],
          [1, 0, 0, 1],
          [1, 0, 0, 0],
          [0, 1, 0, 0]
        ])}
        ${matrixTable("L", [
          [2, -1, -1, 0],
          [-1, 2, 0, -1],
          [-1, 0, 1, 0],
          [0, -1, 0, 1]
	        ], { diagonal: true })}
	      </div>
	      <p class="step-note"><strong>Why:</strong> subtracting turns each existing edge into <code>-1</code> and keeps degrees on the diagonal.</p>
	    </div>`
  },
  row: {
    title: "What a row means",
    html: `<div class="laplacian-explain">
      <p>Row <code>A</code> is <code>[2, -1, -1, 0]</code>. As an expression, that is <code>2*x_A - x_B - x_C</code>.</p>
      <p>So the row compares vertex <code>A</code> to its neighbors. If neighboring vertices have the same value, the comparison cancels out.</p>
	      <div class="row-sum-strip"><span>A row: 2 - 1 - 1 + 0 = 0</span><span>B row: -1 + 2 + 0 - 1 = 0</span><span>C row: -1 + 0 + 1 + 0 = 0</span><span>D row: 0 - 1 + 0 + 1 = 0</span></div>
	      <p>This is why you should remember the quick construction rule: <strong>degree on the diagonal, <code>-1</code> for neighbor links, <code>0</code> for no link.</strong></p>
	      <p class="step-note"><strong>Why:</strong> a row measures how different a vertex is from its neighbors.</p>
	    </div>`
  }
};

const treeData = {
  bst: "<h4>Plain BST</h4><p>Search follows comparisons left/right. If inserts are sorted, the tree becomes a chain and operations become O(n).</p><pre>1\n \\\n  2\n   \\\n    3</pre><p class='step-note'><strong>Why it matters:</strong> all balanced trees are basically trying to avoid this chain.</p>",
  avl: "<h4>AVL</h4><p>Strict balance. Rotations repair height difference after updates, keeping search O(log n).</p><pre>    2\n   / \\\n  1   3</pre><p class='step-note'><strong>Why it matters:</strong> rotations change shape but preserve sorted BST order.</p>",
  rb: "<h4>Red-black</h4><p>Looser balance with color rules. Fewer rotations in practice, still O(log n).</p><p class='step-note'><strong>Why it matters:</strong> colors are bookkeeping that prevents any path from becoming much longer than another.</p>",
  btree: "<h4>B / B+ tree</h4><p>Many keys per node means fewer levels. B+ trees keep values in leaves and link leaves for fast range scans.</p><pre>[10 | 20 | 30]\n /   |   |   \\</pre><p class='step-note'><strong>Why it matters:</strong> high branching means fewer disk/page reads.</p>",
  kd: "<h4>k-d tree</h4><p>Alternates split dimensions. Nearest-neighbor search prunes regions that cannot beat the current best distance.</p><p class='step-note'><strong>Why it matters:</strong> each split removes a spatial region from consideration.</p>",
  skip: "<h4>Skip list</h4><p>Random towers over a sorted linked list. Expected O(log n) without rotations.</p><p class='step-note'><strong>Why it matters:</strong> upper levels act like express lanes over the bottom list.</p>"
};

const avlRotationDrillCases = [
  {
    id: "LL",
    title: "AVL insertion repair: LL at 30 after inserting 5",
    before: {
      nodes: [
        { id: "30", x: 52, y: 14 },
        { id: "20", x: 34, y: 34 },
        { id: "40", x: 70, y: 34 },
        { id: "10", x: 22, y: 56 },
        { id: "25", x: 44, y: 56 },
        { id: "5", x: 14, y: 78 }
      ],
      edges: [["30", "20"], ["30", "40"], ["20", "10"], ["20", "25"], ["10", "5"]]
    },
    after: {
      nodes: [
        { id: "20", x: 50, y: 16 },
        { id: "10", x: 28, y: 40 },
        { id: "30", x: 72, y: 40 },
        { id: "5", x: 18, y: 66 },
        { id: "25", x: 62, y: 66 },
        { id: "40", x: 84, y: 66 }
      ],
      edges: [["20", "10"], ["20", "30"], ["10", "5"], ["30", "25"], ["30", "40"]]
    },
    answer: "LL",
    fix: "Outside-left case: rotate right at 30. The middle subtree 25 becomes the left subtree of 30.",
    why: "The heavy path goes from 30 to 20 to 10. Rotation preserves BST order: 10 < 20 < 25 < 30 < 40."
  },
  {
    id: "LR",
    title: "AVL insertion repair: LR at 30 after inserting 15",
    before: {
      nodes: [
        { id: "30", x: 54, y: 14 },
        { id: "10", x: 30, y: 36 },
        { id: "40", x: 74, y: 36 },
        { id: "20", x: 42, y: 58 },
        { id: "15", x: 34, y: 80 },
        { id: "25", x: 50, y: 80 }
      ],
      edges: [["30", "10"], ["30", "40"], ["10", "20"], ["20", "15"], ["20", "25"]]
    },
    after: {
      nodes: [
        { id: "20", x: 50, y: 16 },
        { id: "10", x: 28, y: 40 },
        { id: "30", x: 72, y: 40 },
        { id: "15", x: 38, y: 66 },
        { id: "25", x: 62, y: 66 },
        { id: "40", x: 84, y: 66 }
      ],
      edges: [["20", "10"], ["20", "30"], ["10", "15"], ["30", "25"], ["30", "40"]]
    },
    answer: "LR",
    fix: "Inside-left case: rotate left at 10, then rotate right at 30. Subtree 15 moves under 10, subtree 25 moves under 30.",
    why: "The heavy path bends: 30 left to 10, then right to 20. The double rotation makes 20 the local root."
  },
  {
    id: "RR",
    title: "AVL insertion repair: RR at 10 after inserting 40",
    before: {
      nodes: [
        { id: "10", x: 48, y: 14 },
        { id: "5", x: 30, y: 36 },
        { id: "20", x: 66, y: 36 },
        { id: "15", x: 56, y: 58 },
        { id: "30", x: 78, y: 58 },
        { id: "40", x: 86, y: 80 }
      ],
      edges: [["10", "5"], ["10", "20"], ["20", "15"], ["20", "30"], ["30", "40"]]
    },
    after: {
      nodes: [
        { id: "20", x: 50, y: 16 },
        { id: "10", x: 28, y: 40 },
        { id: "30", x: 72, y: 40 },
        { id: "5", x: 16, y: 66 },
        { id: "15", x: 38, y: 66 },
        { id: "40", x: 84, y: 66 }
      ],
      edges: [["20", "10"], ["20", "30"], ["10", "5"], ["10", "15"], ["30", "40"]]
    },
    answer: "RR",
    fix: "Outside-right case: rotate left at 10. The middle subtree 15 becomes the right subtree of 10.",
    why: "The heavy path goes from 10 to 20 to 30. Rotation preserves BST order: 5 < 10 < 15 < 20 < 30 < 40."
  },
  {
    id: "RL",
    title: "AVL insertion repair: RL at 10 after inserting 25",
    before: {
      nodes: [
        { id: "10", x: 46, y: 14 },
        { id: "5", x: 26, y: 36 },
        { id: "30", x: 70, y: 36 },
        { id: "20", x: 58, y: 58 },
        { id: "15", x: 50, y: 80 },
        { id: "25", x: 66, y: 80 }
      ],
      edges: [["10", "5"], ["10", "30"], ["30", "20"], ["20", "15"], ["20", "25"]]
    },
    after: {
      nodes: [
        { id: "20", x: 50, y: 16 },
        { id: "10", x: 28, y: 40 },
        { id: "30", x: 72, y: 40 },
        { id: "5", x: 16, y: 66 },
        { id: "15", x: 38, y: 66 },
        { id: "25", x: 62, y: 66 }
      ],
      edges: [["20", "10"], ["20", "30"], ["10", "5"], ["10", "15"], ["30", "25"]]
    },
    answer: "RL",
    fix: "Inside-right case: rotate right at 30, then rotate left at 10. Subtree 15 moves under 10, subtree 25 moves under 30.",
    why: "The heavy path bends: 10 right to 30, then left to 20. The double rotation makes 20 the local root."
  }
];

const btreeSplitDrillCases = [
  {
    title: "Split leaf [5 | 10 | 20 | 30 | 40]",
    keys: [5, 10, 20, 30, 40],
    answer: 20,
    left: [5, 10],
    right: [30, 40]
  },
  {
    title: "Split leaf [3 | 8 | 12 | 16 | 21]",
    keys: [3, 8, 12, 16, 21],
    answer: 12,
    left: [3, 8],
    right: [16, 21]
  },
  {
    title: "Split internal node [7 | 14 | 18 | 25 | 33]",
    keys: [7, 14, 18, 25, 33],
    answer: 18,
    left: [7, 14],
    right: [25, 33]
  }
];

const rbRepairDrillCases = [
  {
    title: "Red parent, red uncle",
    caseText: "Inserted node is red. Its parent is red, and the uncle is also red.",
    answer: "recolor",
    fix: "Recolor parent and uncle black; recolor grandparent red. Then continue upward if needed.",
    why: "When the uncle is red, rotations are not the first repair. The black-height can be preserved by recoloring."
  },
  {
    title: "Red parent, black uncle, outside shape",
    caseText: "Inserted node is left-left or right-right relative to the grandparent, and the uncle is black/null.",
    answer: "single",
    fix: "Do one rotation at the grandparent, then swap the colors of parent and grandparent.",
    why: "Outside shapes are straight. One rotation fixes the red-red edge and restores the local balance."
  },
  {
    title: "Red parent, black uncle, inside shape",
    caseText: "Inserted node is left-right or right-left relative to the grandparent, and the uncle is black/null.",
    answer: "double",
    fix: "Rotate at the parent first to turn it into an outside shape, then rotate at the grandparent.",
    why: "Inside shapes bend. The first rotation straightens the bend; the second rotation repairs the grandparent."
  }
];

const rbBeforeRedByCase = {
  LL: ["20", "10"],
  LR: ["10", "20"],
  RR: ["20", "30"],
  RL: ["30", "20"]
};

const rbInsertionDragCases = avlRotationDrillCases.map((item) => {
  const beforeRed = new Set(rbBeforeRedByCase[item.answer] || []);
  const afterRoot = [...item.after.nodes].sort((a, b) => a.y - b.y)[0]?.id;
  const afterRed = new Set(item.after.edges
    .filter(([from]) => from === afterRoot)
    .map(([, to]) => to));
  return {
    ...item,
    title: `RB insertion repair: ${item.answer}`,
    before: {
      nodes: item.before.nodes.map((node) => ({
        ...node,
        color: beforeRed.has(node.id) ? "red" : "black"
      })),
      edges: item.before.edges
    },
    after: {
      nodes: item.after.nodes.map((node) => ({
        ...node,
        color: node.id === afterRoot ? "black" : afterRed.has(node.id) ? "red" : "black"
      })),
      edges: item.after.edges
    },
    fix: item.answer === "LL" || item.answer === "RR"
      ? "Black uncle and outside shape: rotate once at the grandparent, then recolor the new root black and children red."
      : "Black uncle and inside shape: rotate at the parent first, then at the grandparent; recolor the new root black and children red.",
    why: "Red-black insertion starts like BST insertion with a red node. If parent and inserted node are both red and the uncle is black/null, rotations repair the red-red violation."
  };
});

const mstNodes = {
  A: [18, 22],
  B: [48, 14],
  C: [78, 28],
  D: [33, 74],
  E: [68, 72]
};

const mstEdges = [
  ["A", "B", 2],
  ["B", "C", 3],
  ["A", "D", 6],
  ["B", "D", 4],
  ["B", "E", 5],
  ["C", "E", 7],
  ["D", "E", 1]
];

const mstSteps = {
  kruskal: [
    { edges: [], considering: ["D-E"], text: "First sort edges by weight: DE(1), AB(2), BC(3), BD(4), BE(5), AD(6), CE(7).", note: "Kruskal processes edges from smallest weight upward. The highlighted edge is the next edge under consideration.", state: [{ label: "Sorted edge order", items: ["DE 1", "AB 2", "BC 3", "BD 4", "BE 5", "AD 6", "CE 7"] }, { label: "Decision", items: ["consider DE next"] }, { label: "Components", items: ["{A}", "{B}", "{C}", "{D}", "{E}"] }] },
    { edges: ["D-E"], considering: ["A-B"], text: "Accept DE(1). Now consider AB(2).", note: "D and E were separate components, so DE could not create a cycle.", state: [{ label: "Accepted edge", items: ["DE 1"] }, { label: "Decision", items: ["DE accepted", "consider AB next"] }, { label: "Components", items: ["{A}", "{B}", "{C}", "{D,E}"] }] },
    { edges: ["D-E", "A-B"], considering: ["B-C"], text: "Accept AB(2). Now consider BC(3).", note: "A and B were separate, so AB safely merged them.", state: [{ label: "Accepted edges", items: ["DE 1", "AB 2"] }, { label: "Decision", items: ["AB accepted", "consider BC next"] }, { label: "Components", items: ["{A,B}", "{C}", "{D,E}"] }] },
    { edges: ["D-E", "A-B", "B-C"], considering: ["B-D"], text: "Accept BC(3). Now consider BD(4).", note: "B is in component {A,B}; C was alone. Different components means no cycle.", state: [{ label: "Accepted edges", items: ["DE 1", "AB 2", "BC 3"] }, { label: "Decision", items: ["BC accepted", "consider BD next"] }, { label: "Components", items: ["{A,B,C}", "{D,E}"] }] },
    { edges: ["D-E", "A-B", "B-C", "B-D"], rejected: ["B-E", "A-D", "C-E"], text: "Accept BD(4). MST complete.", note: "BD connects the two remaining components. The faded edges are ignored because the tree already has n-1 edges; adding more would create cycles.", state: [{ label: "Accepted edges", items: ["DE 1", "AB 2", "BC 3", "BD 4"] }, { label: "Discarded/ignored", items: ["BE 5", "AD 6", "CE 7"] }, { label: "Components", items: ["{A,B,C,D,E}"] }] }
  ],
  prim: [
    { edges: [], considering: ["A-B"], text: "Start at A. The queue contains AB(2) and AD(6).", note: "Prim grows one tree. The pulsing edge is the cheapest queue edge that would reach a new vertex.", state: [{ label: "Tree vertices", items: ["A"] }, { label: "Priority queue", items: ["AB 2", "AD 6"] }, { label: "Decision", items: ["consider AB"] }] },
    { edges: ["A-B"], considering: ["B-C"], text: "Pop AB(2). Add B.", note: "AB is accepted because B is outside the tree. Then push B's outgoing edges into the queue.", state: [{ label: "Tree vertices", items: ["A", "B"] }, { label: "Priority queue", items: ["BC 3", "BD 4", "BE 5", "AD 6"] }, { label: "Decision", items: ["AB accepted", "consider BC next"] }] },
    { edges: ["A-B", "B-C"], considering: ["B-D"], text: "Pop BC(3). Add C.", note: "BC is accepted because C is outside the tree. CE enters the queue, but BD is still cheaper.", state: [{ label: "Tree vertices", items: ["A", "B", "C"] }, { label: "Priority queue", items: ["BD 4", "BE 5", "AD 6", "CE 7"] }, { label: "Decision", items: ["BC accepted", "consider BD next"] }] },
    { edges: ["A-B", "B-C", "B-D"], considering: ["D-E"], rejected: ["A-D"], text: "Pop BD(4). Add D.", note: "BD is accepted because D is outside. AD fades because both A and D are now already in the tree, so it is stale.", state: [{ label: "Tree vertices", items: ["A", "B", "C", "D"] }, { label: "Priority queue", items: ["DE 1", "BE 5", "CE 7"] }, { label: "Discarded", items: ["AD 6 stale"] }] },
    { edges: ["A-B", "B-C", "B-D", "D-E"], rejected: ["A-D", "B-E", "C-E"], text: "Pop DE(1). Add E.", note: "DE is accepted because E is outside. BE and CE fade because E is now already inside the tree.", state: [{ label: "Tree vertices", items: ["A", "B", "C", "D", "E"] }, { label: "Priority queue", items: ["empty"] }, { label: "Discarded", items: ["AD 6", "BE 5", "CE 7"] }] }
  ],
  boruvka: [
    { edges: [], considering: ["A-B", "B-C", "D-E"], text: "Start with every vertex as its own component.", note: "Boruvka works in phases. Every component marks its cheapest outgoing edge; duplicate choices collapse to one edge.", state: [{ label: "Components", items: ["{A}", "{B}", "{C}", "{D}", "{E}"] }, { label: "Cheapest choices", items: ["A->AB 2", "B->AB 2", "C->BC 3", "D->DE 1", "E->DE 1"] }] },
    { edges: ["A-B", "B-C", "D-E"], rejected: ["A-D", "B-D", "B-E", "C-E"], text: "Phase 1 adds AB(2), BC(3), and DE(1).", note: "The accepted choices merge components in parallel. Other outgoing edges fade because they were not the cheapest choices this phase.", state: [{ label: "New components", items: ["{A,B,C}", "{D,E}"] }, { label: "Accepted this phase", items: ["AB 2", "BC 3", "DE 1"] }, { label: "Not chosen this phase", items: ["AD 6", "BD 4", "BE 5", "CE 7"] }] },
    { edges: ["A-B", "B-C", "D-E"], considering: ["B-D"], text: "Now each big component picks its cheapest outgoing edge.", note: "{A,B,C} and {D,E} both see BD(4) as the cheapest connection between them.", state: [{ label: "Components", items: ["{A,B,C}", "{D,E}"] }, { label: "Cheapest choices", items: ["{A,B,C}->BD 4", "{D,E}->BD 4"] }] },
    { edges: ["A-B", "B-C", "D-E", "B-D"], rejected: ["A-D", "B-E", "C-E"], text: "Phase 2 adds BD(4).", note: "The two remaining components merge. The faded edges are unnecessary because one connected component remains.", state: [{ label: "Accepted edges", items: ["AB 2", "BC 3", "DE 1", "BD 4"] }, { label: "Ignored", items: ["AD 6", "BE 5", "CE 7"] }, { label: "Components", items: ["{A,B,C,D,E}"] }] }
  ]
};

const previewSteps = {
  uf: [
    "<p><strong>Initial:</strong> {A}, {B}, {C}, {D}. Every vertex is its own parent.</p><p class='step-note'><strong>Why:</strong> at the start, nothing is known to be connected.</p>",
    "<p><strong>union(A,B):</strong> merge sets. Representative A now covers A,B.</p><p class='step-note'><strong>Why:</strong> union means “these two items are now in the same group.”</p>",
    "<p><strong>union(C,D):</strong> merge C,D separately.</p><p class='step-note'><strong>Why:</strong> this creates another connected component independent of A,B.</p>",
    "<p><strong>union(B,C):</strong> find(B) gives A and find(C) gives C, so merge both groups.</p><p class='step-note'><strong>Why:</strong> representatives differ, so the groups are different and can be joined.</p>",
    "<p><strong>find(D):</strong> path compression makes D point close to the representative.</p><p class='step-note'><strong>Why:</strong> future finds become faster because the tree gets flatter.</p>"
  ],
  scc: [
    "<p><strong>Directed graph:</strong> A->B, B->C, C->A, C->D, D->E, E->D.</p><p class='step-note'><strong>Why:</strong> direction matters; reachability is not automatically symmetric.</p>",
    "<p><strong>SCC definition:</strong> A,B,C are mutually reachable. D,E are mutually reachable.</p><p class='step-note'><strong>Why:</strong> an SCC is a maximal group where every vertex can reach every other vertex.</p>",
    "<p><strong>Kosaraju:</strong> first DFS records finish times.</p><p class='step-note'><strong>Why:</strong> finish order tells us which component should be explored first later.</p>",
    "<p><strong>Reverse graph:</strong> process in decreasing finish time; each DFS gives one SCC.</p><p class='step-note'><strong>Why:</strong> reversing edges prevents the search from leaking into the next component.</p>",
    "<p><strong>Condensation DAG:</strong> {A,B,C} -> {D,E}. Cycles are compressed into nodes.</p><p class='step-note'><strong>Why:</strong> once SCCs are collapsed, the remaining graph has no directed cycles.</p>"
  ]
};

const ufVisualSteps = [
  {
    title: "Initial sets",
    operation: "make-set(A), make-set(B), make-set(C), make-set(D)",
    note: "Every item starts as its own set and points to itself.",
    sets: [["A"], ["B"], ["C"], ["D"]],
    parents: { A: "A", B: "B", C: "C", D: "D" },
    active: ["A", "B", "C", "D"],
    message: "No unions yet, so all four representatives are separate."
  },
  {
    title: "union(A, B)",
    operation: "A and B are in different sets, so merge them.",
    note: "We attach B under representative A. Now find(A) and find(B) both return A.",
    sets: [["A", "B"], ["C"], ["D"]],
    parents: { A: "A", B: "A", C: "C", D: "D" },
    active: ["A", "B"],
    activeLinks: ["B-A"],
    message: "This is the same idea Kruskal uses: different representatives means no cycle."
  },
  {
    title: "union(C, D)",
    operation: "C and D are also different, so merge them.",
    note: "Now we have two components: {A,B} and {C,D}.",
    sets: [["A", "B"], ["C", "D"]],
    parents: { A: "A", B: "A", C: "C", D: "C" },
    active: ["C", "D"],
    activeLinks: ["D-C"],
    message: "Union-find stores groups as parent pointers, not as literal arrays in memory."
  },
  {
    title: "union(B, C)",
    operation: "find(B) = A and find(C) = C, so the representatives differ.",
    note: "Because the representatives are different, merging cannot create a cycle.",
    sets: [["A", "B", "C", "D"]],
    parents: { A: "A", B: "A", C: "A", D: "C" },
    active: ["B", "C", "A"],
    activeLinks: ["B-A", "C-A"],
    message: "After this merge, all four items belong to one connected component."
  },
  {
    title: "find(D) with path compression",
    operation: "D used to point through C to A. Compression rewires D directly to A.",
    note: "Path compression flattens the tree so future find(D) calls are faster.",
    sets: [["A", "B", "C", "D"]],
    parents: { A: "A", B: "A", C: "A", D: "A" },
    active: ["D", "A"],
    activeLinks: ["D-A"],
    compressed: ["D-A"],
    message: "Same set, flatter parent tree. That is why union-find is almost constant amortized time."
  }
];

const sccVisualSteps = [
  {
    title: "Directed graph",
    phase: "Original edges",
    note: "Direction matters: A can reach D, but D cannot reach A.",
    highlight: [],
    groups: [],
    chips: ["A->B", "B->C", "C->A", "C->D", "D->E", "E->D"],
    message: "SCCs are about mutual reachability, not just being connected."
  },
  {
    title: "Find mutually reachable groups",
    phase: "SCC definition",
    note: "A,B,C form one SCC because each can reach the others. D,E form another.",
    highlight: ["abc", "de"],
    groups: [["A", "B", "C"], ["D", "E"]],
    chips: ["SCC 1: {A,B,C}", "SCC 2: {D,E}"],
    message: "The edge C->D leaves the first SCC, but there is no path back."
  },
  {
    title: "Kosaraju pass 1",
    phase: "DFS finish stack",
    note: "The first DFS records finish times. Later, we process high finish times first.",
    highlight: ["abc"],
    groups: [["A", "B", "C"], ["D", "E"]],
    chips: ["finish stack idea", "sinks finish early", "sources processed first later"],
    message: "You do not need every timestamp here; remember that finish order controls the second pass."
  },
  {
    title: "Kosaraju pass 2",
    phase: "Reverse graph DFS",
    note: "Reverse all edges, then DFS in decreasing finish order. Each DFS gives exactly one SCC.",
    reversed: true,
    highlight: ["abc", "de"],
    groups: [["A", "B", "C"], ["D", "E"]],
    chips: ["reverse edges", "DFS -> {A,B,C}", "DFS -> {D,E}"],
    message: "Reversing edges stops the search from leaking forward into another component."
  },
  {
    title: "Condensation DAG",
    phase: "Compress SCCs",
    note: "Collapse each SCC into one node. The remaining graph is always acyclic.",
    condensation: true,
    chips: ["{A,B,C} -> {D,E}", "no directed cycle between components"],
    message: "This is the exam picture: cycles become nodes, and edges between SCCs form a DAG."
  }
];

let mstMode = "kruskal";
let mstIndex = 0;
let graphPreviewMode = "uf";
let graphPreviewIndex = 0;
let directedLabMode = "kosaraju";
let directedLabIndex = 0;

function loadProgress(page = currentPage) {
  try {
    return JSON.parse(localStorage.getItem(storageKey(page)) || "{}");
  } catch {
    return {};
  }
}

function saveProgress(progress, page = currentPage) {
  localStorage.setItem(storageKey(page), JSON.stringify(progress));
}

function setPageProgressValue(key, value, page = currentPage) {
  const progress = loadProgress(page);
  progress[key] = value;
  if (page === currentPage) progress.__meta = collectCurrentProgressMeta();
  saveProgress(progress, page);
  return progress;
}

function videoWatchKey(id, start = 0) {
  return `video:${id}:${Number(start) || 0}`;
}

function currentVideoProgressKeys() {
  const keys = new Set();
  document.querySelectorAll("[data-video-watch-key], [data-video-choice-watch-key]").forEach((control) => {
    if (control.dataset.videoWatchKey) keys.add(control.dataset.videoWatchKey);
    if (control.dataset.videoChoiceWatchKey) keys.add(control.dataset.videoChoiceWatchKey);
  });
  return [...keys];
}

function syncVideoWatchedUi(progress = loadProgress()) {
  document.querySelectorAll("[data-video-watch-key]").forEach((button) => {
    const watched = Boolean(progress[button.dataset.videoWatchKey]);
    button.classList.toggle("is-watched", watched);
    button.setAttribute("aria-pressed", String(watched));
    const icon = button.querySelector(".material-symbols-rounded");
    const label = button.querySelector(".video-watch-label");
    if (icon) icon.textContent = watched ? "check_circle" : "radio_button_unchecked";
    if (label) label.textContent = watched ? "Watched" : "Mark watched";
    button.title = watched ? "Click to mark this video as not watched" : "Click after you have watched this video";
  });

  document.querySelectorAll("[data-video-choice-watch-key]").forEach((button) => {
    const watched = Boolean(progress[button.dataset.videoChoiceWatchKey]);
    button.classList.toggle("is-watched", watched);
    button.setAttribute("data-watched-label", watched ? "Watched" : "");
  });
}

function getRecallStore() {
  try {
    return JSON.parse(localStorage.getItem(recallKey()) || "{}");
  } catch {
    return {};
  }
}

function saveRecallStore(store) {
  localStorage.setItem(recallKey(), JSON.stringify(store));
}

function getRecallValidationStore() {
  try {
    return JSON.parse(localStorage.getItem(recallValidationKey()) || "{}");
  } catch {
    return {};
  }
}

function saveRecallValidationStore(store) {
  localStorage.setItem(recallValidationKey(), JSON.stringify(store));
}

function saveRecallValidationResult(key, answer, result) {
  if (!key || !result) return;
  const store = getRecallValidationStore();
  store[key] = {
    answer,
    result,
    savedAt: progressTimestamp()
  };
  saveRecallValidationStore(store);
}

function clearRecallValidationResult(key) {
  if (!key) return;
  const store = getRecallValidationStore();
  if (!store[key]) return;
  delete store[key];
  saveRecallValidationStore(store);
}

function getRecallValidationResult(key, answer) {
  const saved = getRecallValidationStore()[key];
  if (!saved || saved.answer !== answer || !saved.result) return null;
  return saved.result;
}

function getLabCollapseStore() {
  try {
    return JSON.parse(localStorage.getItem(labCollapseKey()) || "{}");
  } catch {
    return {};
  }
}

function saveLabCollapseStore(store) {
  localStorage.setItem(labCollapseKey(), JSON.stringify(store));
}

function escapeFeedbackText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function textListFromNodes(nodes, limit = 12) {
  return [...nodes]
    .map((node) => node.textContent.trim().replace(/\s+/g, " "))
    .filter(Boolean)
    .slice(0, limit);
}

const recallStopwords = new Set([
  "the", "and", "or", "for", "with", "when", "would", "choose", "explain", "what",
  "why", "how", "you", "your", "this", "that", "over", "into", "from", "use",
  "uses", "using", "good", "best", "answer", "memory", "graph", "graphs"
]);

function recallTokens(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9+]+/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !recallStopwords.has(token));
}

function filterRelevantRecallFacts(prompt, facts, limit = 10) {
  const promptLower = String(prompt || "").toLowerCase();
  if (promptLower.includes("adjacency matrix") && promptLower.includes("adjacency list")) {
    const focused = facts.filter((fact) => {
      const lower = String(fact || "").toLowerCase();
      const isAdjacencyFact = lower.includes("adjacency matrix") || lower.includes("adjacency list");
      const isOtherMatrix = lower.includes("laplacian") || lower.includes("distance matrix") || lower.includes("incidence matrix");
      return isAdjacencyFact && !isOtherMatrix;
    }).slice(0, limit);
    if (focused.length) return focused;
  }

  const promptTokens = new Set(recallTokens(prompt));
  const scored = facts.map((fact, index) => {
    const factTokens = recallTokens(fact);
    const score = factTokens.reduce((sum, token) => sum + (promptTokens.has(token) ? 1 : 0), 0);
    return { fact, index, score };
  });
  const relevant = scored
    .filter((item) => item.score >= 1)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((item) => item.fact)
    .slice(0, limit);
  return relevant.length ? relevant : facts.slice(0, limit);
}

function collectRenderedFlashcards(module) {
  if (!module) return [];
  return [...module.querySelectorAll(".flashcard")].map((card) => {
    const front = card.querySelector("p strong")?.textContent?.trim();
    const back = card.querySelector(".flashcard-answer")?.textContent?.trim();
    if (!front || !back) return "";
    return `${front} ${back}`;
  }).filter(Boolean);
}

function collectDataFlashcards(key) {
  return (flashcards[key] || []).map(([front, back]) => `${front} ${back}`);
}

function collectDataQuizAnswers(key) {
  return (quizzes[key] || []).map((question) => {
    const correct = question.a?.[question.correct];
    return `${question.q} Correct: ${correct}. ${question.why}`;
  }).filter(Boolean);
}

function buildReferenceAnswer({ prompt, moduleLead, mustKnow, flashcardFacts, quizFacts }) {
  const sections = [
    `Recall task: ${prompt}`,
    moduleLead ? `Module context: ${moduleLead}` : "",
    mustKnow.length ? `Must-say points:\n- ${mustKnow.join("\n- ")}` : "",
    flashcardFacts.length ? `Flashcard reference facts:\n- ${flashcardFacts.slice(0, 10).join("\n- ")}` : "",
    quizFacts.length ? `Quiz reference facts:\n- ${quizFacts.slice(0, 8).join("\n- ")}` : ""
  ].filter(Boolean);
  return sections.join("\n\n").slice(0, 6000);
}

function explicitRecallReference(area, key) {
  const inlineReference = area.dataset.reference?.trim();
  if (inlineReference) return inlineReference;

  const safeKey = window.CSS?.escape ? CSS.escape(key) : String(key).replace(/"/g, "\\\"");
  const template = document.querySelector(`template[data-recall-reference="${safeKey}"]`);
  const reference = template?.innerHTML?.trim();
  return reference || "";
}

function collectRecallContext(area) {
  const module = area.closest(".module") || area.closest("section");
  const label = area.closest(".free-recall");
  const key = area.dataset.recall;
  const prompt = label?.querySelector("span")?.textContent?.trim() || area.placeholder || "Free recall";
  const explicitReference = explicitRecallReference(area, key);
  const promptContext = `${prompt} ${area.placeholder || ""}`;
  const moduleLead = module?.querySelector(".module-lead")?.textContent?.trim() || "";
  const allMustKnow = textListFromNodes(module?.querySelectorAll(".recall-card li") || []);
  const allFlashcardFacts = [
    ...collectDataFlashcards(key),
    ...collectRenderedFlashcards(module)
  ];
  const allQuizFacts = collectDataQuizAnswers(key);
  const mustKnow = filterRelevantRecallFacts(promptContext, allMustKnow, 6);
  const flashcardFacts = filterRelevantRecallFacts(promptContext, allFlashcardFacts, 8);
  const quizFacts = filterRelevantRecallFacts(promptContext, allQuizFacts, 6);

  return {
    page: currentPage,
    moduleKey: key,
    moduleTitle: module?.querySelector("h2")?.textContent?.trim() || document.title,
    prompt,
    mustKnow,
    referenceAnswer: explicitReference || buildReferenceAnswer({ prompt, moduleLead, mustKnow, flashcardFacts, quizFacts })
  };
}

function renderRecallValidationStatus(output, state, payload = {}) {
  output.className = `recall-validator-result ${state}`;

  if (state === "idle") {
    output.textContent = "";
    return;
  }
  if (state === "loading") {
    output.innerHTML = `<span class="recall-stream-status">Connecting to local validator...</span>`;
    return;
  }
  if (state === "streaming") {
    const status = payload.status ? `<span class="recall-stream-status">${escapeFeedbackText(payload.status)}</span>` : "";
    const text = payload.text ? `<span class="recall-stream-text">${escapeFeedbackText(payload.text)}</span>` : "";
    output.innerHTML = `${status}${text}`;
    return;
  }
  if (state === "error") {
    const help = payload.help || "Check that the local validator server is running on port 8787, then try again.";
    output.innerHTML = `<strong>Could not validate.</strong> ${escapeFeedbackText(payload.error || "Unknown error.")}<span class="recall-fix">${escapeFeedbackText(help)}</span>`;
    return;
  }

  const result = payload.result || {};
  const verdict = result.verdict || "partial";
  const missing = renderRecallMissing(result.missing);
  const fix = result.fix ? `<span class="recall-fix">Fix: ${escapeFeedbackText(result.fix)}</span>` : "";
  const teaching = renderRecallTeaching(result.teaching);
  output.innerHTML = `<strong>${verdict.toUpperCase()}.</strong> ${escapeFeedbackText(result.feedback || "No feedback returned.")}${missing}${fix}${teaching}`;
}

function normalizeMissingItem(item) {
  if (typeof item === "string") {
    return { label: item, why: "", say: "" };
  }
  return {
    label: item?.label || "Missing point",
    why: item?.why || "",
    say: item?.say || ""
  };
}

function renderRecallMissing(missing) {
  if (!Array.isArray(missing) || !missing.length) return "";
  const cards = missing.slice(0, 4).map(normalizeMissingItem).map((item) => {
    const why = item.why ? `<span>${escapeFeedbackText(item.why)}</span>` : "";
    const say = item.say ? `<code>${escapeFeedbackText(item.say)}</code>` : "";
    return `<li><strong>${escapeFeedbackText(item.label)}</strong>${why}${say}</li>`;
  }).join("");
  return `<div class="recall-missing"><span class="recall-subhead">What you missed</span><ul>${cards}</ul></div>`;
}

function recallTeachingItems(teaching, limit = 8) {
  return Array.isArray(teaching?.items) ? teaching.items.slice(0, limit) : [];
}

function upgradeWeakTeaching(teaching) {
  if (!teaching || teaching.type !== "checklist") return teaching;
  const text = `${teaching.title || ""} ${(teaching.items || []).map((item) => `${item.label || ""} ${item.value || ""} ${item.detail || ""}`).join(" ")}`.toLowerCase();
  const looksAsymptotic = /\bbig-o\b|little-o|omega|theta|asymptotic|growth/.test(text);
  if (!looksAsymptotic) return teaching;
  return {
    type: "formula_cards",
    title: teaching.title || "Asymptotic definitions",
    prompt: teaching.prompt || "Click each card and say the formal condition out loud.",
    items: [
      { label: "Big-O", value: "f(n) <= c g(n)", detail: "eventual upper bound for n >= n0" },
      { label: "Omega", value: "f(n) >= c g(n)", detail: "eventual lower bound for n >= n0" },
      { label: "Theta", value: "c1 g(n) <= f(n) <= c2 g(n)", detail: "tight bound: both upper and lower" },
      { label: "little-o", value: "f(n) / g(n) -> 0", detail: "strictly smaller asymptotically" },
      { label: "little-omega", value: "f(n) / g(n) -> infinity", detail: "strictly larger asymptotically" },
      { label: "Growth ladder", value: "1 < log n < n < n log n < n^2 < 2^n < n!", detail: "say this sequence without looking" }
    ]
  };
}

function renderFormulaCards(title, prompt, items) {
  const cards = items.map((item) => `
    <button type="button" class="recall-formula-card" data-teach-toggle aria-pressed="false">
      <strong>${escapeFeedbackText(item.label || "")}</strong>
      <code>${escapeFeedbackText(item.value || "")}</code>
      <span>${escapeFeedbackText(item.detail || "")}</span>
    </button>
  `).join("");
  return `<div class="recall-teaching formula-cards"><span class="recall-subhead">${title}</span>${prompt}<div class="recall-formula-grid">${cards}</div></div>`;
}

function renderGrowthLadder(title, prompt, items) {
  const rungs = items.map((item, index) => `
    <button type="button" class="growth-rung" data-teach-toggle aria-pressed="false">
      <span>${escapeFeedbackText(item.value || String(index + 1))}</span>
      <strong>${escapeFeedbackText(item.label || "")}</strong>
      <em>${escapeFeedbackText(item.detail || "")}</em>
    </button>
  `).join("");
  return `<div class="recall-teaching growth-ladder"><span class="recall-subhead">${title}</span>${prompt}<div class="growth-rungs">${rungs}</div></div>`;
}

function renderBoundMiniChart(item, index) {
  const label = escapeFeedbackText(item.label || `Bound ${index + 1}`);
  const value = escapeFeedbackText(item.value || "");
  const detail = escapeFeedbackText(item.detail || "");
  const lower = String(item.label || "").toLowerCase();
  const upperY = lower.includes("omega") ? 82 : lower.includes("theta") ? 42 : 34;
  const functionY = lower.includes("omega") ? 42 : lower.includes("theta") ? 58 : 72;
  const lowerY = lower.includes("theta") ? 86 : 102;
  return `
    <button type="button" class="bound-mini-card" data-teach-toggle aria-pressed="false">
      <svg viewBox="0 0 190 118" role="img" aria-label="${label} chart">
        <line x1="18" y1="100" x2="174" y2="100"></line>
        <line x1="18" y1="100" x2="18" y2="12"></line>
        <path class="bound-guide upper" d="M22 ${upperY} C62 ${upperY - 8}, 104 ${upperY - 20}, 168 ${upperY - 35}"></path>
        <path class="bound-main" d="M22 ${functionY} C62 ${functionY - 4}, 104 ${functionY - 15}, 168 ${functionY - 30}"></path>
        <path class="bound-guide lower" d="M22 ${lowerY} C62 ${lowerY - 5}, 104 ${lowerY - 14}, 168 ${lowerY - 24}"></path>
      </svg>
      <strong>${label}</strong>
      <code>${value}</code>
      <span>${detail}</span>
    </button>
  `;
}

function renderBoundChart(title, prompt, items) {
  const cards = items.map(renderBoundMiniChart).join("");
  return `<div class="recall-teaching bound-chart"><span class="recall-subhead">${title}</span>${prompt}<div class="bound-mini-grid">${cards}</div></div>`;
}

function renderDecisionTable(title, prompt, items) {
  const rows = items.map((item) => `
    <button type="button" class="decision-row" data-teach-toggle aria-pressed="false">
      <strong>${escapeFeedbackText(item.label || "")}</strong>
      <code>${escapeFeedbackText(item.value || "")}</code>
      <span>${escapeFeedbackText(item.detail || "")}</span>
    </button>
  `).join("");
  return `<div class="recall-teaching decision-table"><span class="recall-subhead">${title}</span>${prompt}<div class="decision-rows">${rows}</div></div>`;
}

function renderRecallTeaching(teaching) {
  if (!teaching || typeof teaching !== "object") return "";
  teaching = upgradeWeakTeaching(teaching);
  const type = teaching.type || "checklist";
  const title = escapeFeedbackText(teaching.title || "Make it stick");
  const prompt = teaching.prompt ? `<p>${escapeFeedbackText(teaching.prompt)}</p>` : "";
  const items = recallTeachingItems(teaching);
  if (!items.length) return "";

  if (type === "formula_cards") return renderFormulaCards(title, prompt, items);
  if (type === "growth_ladder") return renderGrowthLadder(title, prompt, items);
  if (type === "bound_chart") return renderBoundChart(title, prompt, items);
  if (type === "decision_table") return renderDecisionTable(title, prompt, items);

  if (type === "comparison") {
    const numericValues = items.map((item) => Number(item.value)).filter((value) => Number.isFinite(value));
    const hasNumericValues = numericValues.length === items.length;
    const max = hasNumericValues ? Math.max(...numericValues, 1) : 1;
    const bars = items.map((item, index) => {
      const width = hasNumericValues ? Math.max(12, Math.round((Number(item.value) / max) * 100)) : 100;
      const value = item.value ? `<b>${escapeFeedbackText(item.value)}</b>` : "";
      return `<div class="recall-bar-row" data-teach-toggle role="button" tabindex="0" aria-pressed="false">
        <span>${escapeFeedbackText(item.label || `Item ${index + 1}`)}</span>
        <div class="recall-bar-track ${hasNumericValues ? "" : "is-text"}"><i style="width:${width}%">${value}</i></div>
        <em>${escapeFeedbackText(item.detail || item.value || "")}</em>
      </div>`;
    }).join("");
    return `<div class="recall-teaching comparison"><span class="recall-subhead">${title}</span>${prompt}<div class="recall-bars">${bars}</div></div>`;
  }

  if (type === "steps") {
    const steps = items.map((item, index) => `<li><span>${index + 1}</span><strong>${escapeFeedbackText(item.label || "")}</strong><em>${escapeFeedbackText(item.detail || "")}</em></li>`).join("");
    return `<div class="recall-teaching steps"><span class="recall-subhead">${title}</span>${prompt}<ol>${steps}</ol></div>`;
  }

  if (type === "concept") {
    const nodes = items.map((item) => `<button type="button" data-teach-toggle aria-pressed="false"><strong>${escapeFeedbackText(item.label || "")}</strong><span>${escapeFeedbackText(item.detail || "")}</span></button>`).join("");
    return `<div class="recall-teaching concept"><span class="recall-subhead">${title}</span>${prompt}<div class="recall-concept-grid">${nodes}</div></div>`;
  }

  const checks = items.map((item) => `<button type="button" data-teach-toggle aria-pressed="false"><span class="material-symbols-rounded">radio_button_unchecked</span><strong>${escapeFeedbackText(item.label || "")}</strong><em>${escapeFeedbackText(item.detail || "")}</em></button>`).join("");
  return `<div class="recall-teaching checklist"><span class="recall-subhead">${title}</span>${prompt}<div class="recall-checklist">${checks}</div></div>`;
}

function parseSseEvents(buffer) {
  const parts = buffer.split(/\n\n/);
  const remainder = parts.pop() || "";
  const events = parts.map((part) => {
    const lines = part.split(/\n/).map((line) => line.trim());
    const event = lines.find((line) => line.startsWith("event:"))?.slice(6).trim() || "message";
    const data = lines
      .filter((line) => line.startsWith("data:"))
      .map((line) => line.slice(5).trim())
      .join("\n");
    if (!data) return null;
    try {
      return { event, data: JSON.parse(data) };
    } catch {
      return null;
    }
  }).filter(Boolean);
  return { events, remainder };
}

async function validateRecall(area, button, output) {
  const answer = area.value.trim();
  if (!answer) {
    renderRecallValidationStatus(output, "error", { error: "Write your recall answer first." });
    return;
  }
  const localValidatorUrl = "http://127.0.0.1:8787/api/validate-recall/stream";
  const hostedValidatorUrl = "https://oi-study-recall-validator.fabian-bodnar.workers.dev/api/validate-recall/stream";
  const validatorUrl = ["localhost", "127.0.0.1", ""].includes(location.hostname)
    ? localValidatorUrl
    : hostedValidatorUrl;

  button.disabled = true;
  const originalButtonHtml = button.innerHTML;
  button.innerHTML = `<span class="material-symbols-rounded">hourglass_top</span>Checking...`;
  renderRecallValidationStatus(output, "loading");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 125_000);
  let streamText = "";
  try {
    const response = await fetch(validatorUrl, {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...collectRecallContext(area), answer })
    });

    if (!response.ok || !response.body) {
      throw new Error(`Validator returned ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let finalResult = null;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const parsed = parseSseEvents(buffer);
      buffer = parsed.remainder;

      for (const item of parsed.events) {
        if (item.event === "status") {
          renderRecallValidationStatus(output, "streaming", {
            status: item.data.message || "",
            text: streamText
          });
        }
        if (item.event === "token") {
          streamText = item.data.text || `${streamText}${item.data.delta || ""}`;
          renderRecallValidationStatus(output, "streaming", {
            status: "Receiving feedback...",
            text: streamText
          });
        }
        if (item.event === "final") {
          finalResult = item.data.result;
        }
        if (item.event === "error") {
          throw new Error(item.data.error || "Validator stream failed.");
        }
      }
    }

    if (!finalResult && streamText) {
      finalResult = { verdict: "partial", feedback: streamText, missing: [], fix: "" };
    }
    if (!finalResult) throw new Error("The model did not return feedback.");
    saveRecallValidationResult(area.dataset.recall, answer, finalResult);
    renderRecallValidationStatus(output, finalResult.verdict || "partial", { result: finalResult });
    syncRecallProgress(area, {
      attempted: true,
      validated: true,
      verdict: finalResult.verdict || "partial"
    });
  } catch (error) {
    const isNetworkError = error instanceof TypeError && String(error.message || "").includes("fetch");
    const isHostedSite = !["localhost", "127.0.0.1", ""].includes(location.hostname);
    renderRecallValidationStatus(output, "error", {
      error: error?.name === "AbortError"
        ? `Validation timed out ${isHostedSite ? "on the hosted validator" : "locally"} after 125 seconds.`
        : error instanceof Error ? error.message : String(error),
      help: isNetworkError
        ? isHostedSite
          ? "The hosted recall validator is not reachable. Try again in a moment."
          : "The local recall validator is not reachable on port 8787. Start or restart the validator server, then try again."
        : "OpenRouter or the selected validation model may be busy. Try again, or restart the local validator server if this keeps happening."
    });
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
    button.innerHTML = originalButtonHtml;
  }
}

function readProgress(page) {
  try {
    return JSON.parse(localStorage.getItem(storageKey(page)) || "{}");
  } catch {
    return {};
  }
}

function progressSummary(page) {
  const progress = page === currentPage ? loadProgress() : readProgress(page);
  const meta = page === currentPage ? collectCurrentProgressMeta() : progressMetaForPage(page, progress);
  const keys = meta.modules || pageModules[page] || [];
  const videoKeys = meta.videos || [];
  const quizKeys = meta.quizzes || [];
  const recallKeys = meta.recalls || [];
  const labKeys = meta.labs || [];
  const moduleDone = keys.filter((key) => progress[key]).length;
  const videoDone = videoKeys.filter((key) => progress[key]).length;
  const quizDone = quizKeys.filter((key) => progress[`quiz:${key}`]?.complete).length;
  const recallDone = recallKeys.filter((key) => progress[`recall:${key}`]?.validated || progress[`recall:${key}`]?.attempted).length;
  const labDone = labKeys.filter((key) => progress[`lab:${key}`] === true || progress[`lab:${key}`]?.complete).length;
  const total = keys.length + videoKeys.length + quizKeys.length + recallKeys.length + labKeys.length;
  const done = moduleDone + videoDone + quizDone + recallDone + labDone;
  const percent = total ? Math.round((done / total) * 100) : 0;
  return {
    keys,
    moduleDone,
    moduleTotal: keys.length,
    videoKeys,
    videoDone,
    videoTotal: videoKeys.length,
    quizKeys,
    quizDone,
    quizTotal: quizKeys.length,
    recallKeys,
    recallDone,
    recallTotal: recallKeys.length,
    labKeys,
    labDone,
    labTotal: labKeys.length,
    total,
    done,
    percent
  };
}

function ensureIndexProgressCard(page) {
  let indexPercent = document.getElementById(`index-${page}-progress`);
  let indexDetail = document.getElementById(`index-${page}-progress-detail`);
  let indexFill = document.getElementById(`index-${page}-fill`);
  if (indexPercent && indexDetail && indexFill) return { indexPercent, indexDetail, indexFill };

  const link = document.querySelector(`.question-card a[href="${page}.html"]`);
  const card = link?.closest(".question-card");
  const content = card?.querySelector("div");
  if (!content) return { indexPercent, indexDetail, indexFill };

  let block = card.querySelector(`[data-index-progress="${page}"]`);
  if (!block) {
    block = document.createElement("div");
    block.className = "question-progress-mini";
    block.dataset.indexProgress = page;
    block.innerHTML = `
      <div class="question-progress-mini-top">
        <span>Progress</span>
        <strong id="index-${page}-progress">0%</strong>
      </div>
      <div class="progress-track"><span class="progress-fill" id="index-${page}-fill"></span></div>
      <p id="index-${page}-progress-detail">Open this page to start tracking.</p>
    `;
    const estimate = content.querySelector(".estimate-line");
    if (estimate) estimate.insertAdjacentElement("afterend", block);
    else content.appendChild(block);
  }

  indexPercent = document.getElementById(`index-${page}-progress`);
  indexDetail = document.getElementById(`index-${page}-progress-detail`);
  indexFill = document.getElementById(`index-${page}-fill`);
  return { indexPercent, indexDetail, indexFill };
}

function updateIndexProgress(page, label) {
  const summary = progressSummary(page);
  const { indexPercent, indexDetail, indexFill } = ensureIndexProgressCard(page);
  if (indexPercent) indexPercent.textContent = `${summary.percent}%`;
  if (indexFill) indexFill.style.width = `${summary.percent}%`;
  if (indexDetail) {
    if (summary.total) {
      indexDetail.textContent = `${summary.done}/${summary.total} study actions complete.`;
    } else {
      indexDetail.textContent = `Open the ${label} page and start checking modules.`;
    }
  }
}

function updateProgressUi() {
  saveCurrentProgressMeta();
  const progress = loadProgress();
  const summary = progressSummary(currentPage);

  document.querySelectorAll("[data-progress-key]").forEach((box) => {
    box.checked = Boolean(progress[box.dataset.progressKey]);
  });
  syncVideoWatchedUi(progress);

  const percentEl = document.getElementById(`${currentPage}-progress-percent`);
  const detailEl = document.getElementById(`${currentPage}-progress-detail`);
  if (percentEl) percentEl.textContent = `${summary.percent}%`;
  if (detailEl) {
    detailEl.textContent = summary.total
      ? `${summary.done}/${summary.total} study actions: ${summary.moduleDone}/${summary.moduleTotal} modules, ${summary.videoDone}/${summary.videoTotal} videos, ${summary.quizDone}/${summary.quizTotal} quizzes, ${summary.recallDone}/${summary.recallTotal} recalls, ${summary.labDone}/${summary.labTotal} labs.`
      : `${summary.moduleDone} of ${summary.moduleTotal} modules checked.`;
  }
  document.querySelectorAll("[data-progress-fill]").forEach((fill) => {
    fill.style.width = `${summary.percent}%`;
  });

  updateIndexProgress("pal", "PAL");
  updateIndexProgress("tal", "TAL");
  updateIndexProgress("ko", "KO");
  updateIndexProgress("smu", "SMU");
  updateIndexProgress("lup", "LUP");
  updateIndexProgress("ssu", "SSU");
  updateIndexProgress("pui", "PUI");
  updateIndexProgress("mas", "MAS");
  updateIndexProgress("uir", "UIR");
}

function initProgress() {
  document.querySelectorAll("[data-progress-key]").forEach((box) => {
    box.addEventListener("change", () => {
      const progress = loadProgress();
      progress[box.dataset.progressKey] = box.checked;
      saveProgress(progress);
      updateProgressUi();
    });
  });

  const reset = document.querySelector("[data-reset-progress]");
  if (reset) {
    reset.addEventListener("click", () => {
      localStorage.removeItem(storageKey());
      updateProgressUi();
    });
  }
  updateProgressUi();
}

function videoSrc(id, start = 0) {
  const params = new URLSearchParams({
    start: String(start),
    rel: "0"
  });
  if (location.protocol === "http:" || location.protocol === "https:") {
    params.set("origin", location.origin);
  }
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function youtubeWatchUrl(id, start = 0) {
  return `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ""}`;
}

const VIDEO_METADATA = {
  "09_LlHjoEiY": { duration: "6:44:39" },
  "5IBxA-bZZH8": { duration: "~5m" },
  "6R179MBYMhY": { duration: "5:47" },
  "8MpoO2zA2l4": { duration: "15:34" },
  "95s3ndZRGbk": { duration: "~3m" },
  "A3JZinzkMpk": { duration: "~5m" },
  "BK5x7IUTIyU": { duration: "13:20" },
  "BZb-ozM2PWo": { duration: "9:50" },
  "DB1HFCEdLxA": { duration: "~5m" },
  "FgWbADOG44s": { duration: "3:57" },
  "JPI-DPizQYk": { duration: "~9m" },
  "PBkXmhiCP1M": { duration: "~5m" },
  "RpgcYiky7uw": { duration: "24:29" },
  "bQga6WqLUvs": { duration: "4:51" },
  "cwg3yNq-y5Y": { duration: "8:59" },
  "fAfuZiFDpRo": { duration: "5:38" },
  "iw8N1_keEWA": { duration: "~6m" },
  "jLEhJqNVauc": { duration: "~4m" },
  "lU99loSvD8s": { duration: "8:13" },
  "qvZGUFHWChY": { duration: "3:53" },
  "tT2DT9Z4H-0": { duration: "~6m" },
  "xR4sGgwtR2I": { duration: "9:41" }
};

function formatTimecode(seconds = 0) {
  const total = Math.max(0, Number(seconds) || 0);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  if (hours) return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function localServerUrl() {
  const studyIndex = location.pathname.indexOf("/study/");
  if (studyIndex === -1) return "http://127.0.0.1:8765/study/index.html";
  return `http://127.0.0.1:8765${location.pathname.slice(studyIndex)}`;
}

function initLocalFileNotice() {
  if (location.protocol !== "file:") return;
  const header = document.querySelector(".site-header");
  const notice = document.createElement("div");
  notice.className = "local-file-notice";
  notice.innerHTML = `<strong>YouTube embeds need localhost.</strong> This page is open as a local file, which can trigger YouTube Error 153. Open the served version instead: <a href="${localServerUrl()}">${localServerUrl()}</a>`;
  header?.insertAdjacentElement("afterend", notice);
}

function updateVideoFrame(card, id, start = 0) {
  const frame = card?.querySelector(".video-frame");
  if (!frame) return;
  frame.dataset.videoId = id;
  frame.dataset.start = String(start);
  const iframe = frame.querySelector("iframe");
  if (iframe) iframe.src = videoSrc(id, start);
  const fallback = frame.querySelector(".video-file-warning a");
  if (fallback) fallback.href = youtubeWatchUrl(id, start);
  const cardFallback = card.querySelector(":scope > a.fallback-link");
  if (cardFallback?.href.includes("youtube.com/watch")) {
    cardFallback.href = youtubeWatchUrl(id, start);
    cardFallback.textContent = "Open current video on YouTube";
  }
}

function setVideoRowSelection(row, id, start = 0, { loadVideo = true, activeButton = null } = {}) {
  const card = row.closest(".video-card");
  if (loadVideo) updateVideoFrame(card, id, start);
  row.dataset.selectedVideo = id;
  row.dataset.selectedVideoStart = String(start);
  row.dataset.selectedVideoWatchKey = videoWatchKey(id, start);

  const choice = [...row.querySelectorAll("[data-video-choice-target]")]
    .find((button) => button.dataset.videoChoiceTarget === id);
  const selectedLabel = choice?.querySelector(".video-pick-title")?.textContent.trim() || "selected video";
  const timestampLabel = row.querySelector("[data-video-segment-label]");
  if (timestampLabel) timestampLabel.textContent = `Timestamps · ${selectedLabel}`;
  const watchTitle = row.querySelector("[data-video-watch-selected-title]");
  if (watchTitle) watchTitle.textContent = selectedLabel;
  const watchToggle = row.querySelector("[data-video-watch-key]");
  if (watchToggle) {
    watchToggle.dataset.videoWatchKey = row.dataset.selectedVideoWatchKey;
    watchToggle.dataset.videoWatchTitle = selectedLabel;
  }

  row.querySelectorAll("[data-video-choice-target]").forEach((button) => {
    const active = button.dataset.videoChoiceTarget === id;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  row.querySelectorAll("[data-video-target]").forEach((button) => {
    const activeTarget = button.dataset.videoTarget === id;
    button.hidden = row.dataset.multiVideo === "true" && !activeTarget;
    const activeStart = Number(button.dataset.start || 0) === Number(start || 0);
    button.classList.toggle("is-active", activeButton ? button === activeButton : activeTarget && activeStart);
  });
  syncVideoWatchedUi();
}

function initVideoActionRows() {
  document.querySelectorAll(".timestamp-row").forEach((row) => {
    if (row.dataset.videoActionsReady === "true") return;
    const card = row.closest(".video-card");
    const frame = card?.querySelector(".video-frame");
    const primaryVideoId = frame?.dataset.videoId;
    const buttons = [...row.querySelectorAll("button[data-video-target]")];
    if (!primaryVideoId || !buttons.length) return;

    const videos = [];
    const getVideo = (id) => {
      let video = videos.find((item) => item.id === id);
      if (!video) {
        video = { id, label: "", start: 0, segments: [] };
        videos.push(video);
      }
      return video;
    };

    buttons.forEach((button) => {
      const originalLabel = button.textContent.trim();
      const target = button.dataset.videoTarget;
      const start = Number(button.dataset.start || 0);
      const video = getVideo(target);
      if (!video.label) video.label = originalLabel;
      video.start = video.segments.length ? video.start : start;
      video.watchKey = video.watchKey || videoWatchKey(target, video.start);
      video.segments.push(button);

      button.classList.add("video-action-button", "is-video-jump");
      button.dataset.videoAction = "jump";
      button.dataset.videoSegmentFor = target;
      button.title = `Jump to ${originalLabel} (${formatTimecode(start)})`;
      button.setAttribute("aria-label", button.title);
      button.innerHTML = `
        <span class="material-symbols-rounded" aria-hidden="true">schedule</span>
        <span class="ts-time"></span>
        <span class="ts-label"></span>
      `;
      button.querySelector(".ts-time").textContent = formatTimecode(start);
      button.querySelector(".ts-label").textContent = originalLabel;
    });

    const isMultiVideo = videos.length > 1;
    row.classList.add("video-actions");
    row.dataset.multiVideo = String(isMultiVideo);
    row.textContent = "";

    const appendGroup = (action, label, options = {}) => {
      const group = document.createElement("div");
      group.className = `video-action-group is-${action}-group`;
      const heading = document.createElement("p");
      heading.className = "video-action-group-label";
      if (options.segmentLabel) heading.dataset.videoSegmentLabel = "true";
      heading.textContent = label;
      group.appendChild(heading);
      const controls = document.createElement("div");
      controls.className = "video-action-controls";
      group.appendChild(controls);
      row.appendChild(group);
      return controls;
    };

    if (isMultiVideo) {
      const choiceControls = appendGroup("choose", "Choose video");
      videos.forEach((video) => {
        const choice = document.createElement("button");
        const duration = VIDEO_METADATA[video.id]?.duration;
        choice.type = "button";
        choice.className = "video-pick";
        choice.dataset.videoChoiceTarget = video.id;
        choice.dataset.videoChoiceWatchKey = video.watchKey;
        choice.dataset.start = String(video.start || 0);
        choice.setAttribute("aria-pressed", "false");
        choice.title = duration ? `Switch to ${video.label} (${duration})` : `Switch to ${video.label}`;
        choice.innerHTML = `
          <span class="material-symbols-rounded" aria-hidden="true">smart_display</span>
          <span class="video-pick-title"></span>
          <span class="video-pick-dur"></span>
          <span class="video-pick-status" aria-hidden="true">✓</span>
        `;
        choice.querySelector(".video-pick-title").textContent = video.label;
        if (duration) choice.querySelector(".video-pick-dur").textContent = duration;
        choice.addEventListener("click", () => {
          const firstSegment = video.segments[0];
          const segmentStart = Number(firstSegment?.dataset.start || video.start || 0);
          setVideoRowSelection(row, video.id, segmentStart, { loadVideo: true, activeButton: firstSegment || null });
        });
        choiceControls.appendChild(choice);
      });
    }

    const jumpControls = appendGroup("jump", isMultiVideo ? "Timestamps for selected video" : "Jump inside this video", { segmentLabel: isMultiVideo });
    videos.forEach((video) => video.segments.forEach((button) => jumpControls.appendChild(button)));

    const statusControls = appendGroup("watch", "Video status");
    const watchButton = document.createElement("button");
    watchButton.type = "button";
    watchButton.className = "video-watch-toggle";
    watchButton.dataset.videoWatchKey = videoWatchKey(primaryVideoId, Number(frame.dataset.start || 0));
    watchButton.setAttribute("aria-pressed", "false");
    watchButton.innerHTML = `
      <span class="material-symbols-rounded" aria-hidden="true">radio_button_unchecked</span>
      <span class="video-watch-label">Mark watched</span>
      <span class="video-watch-context">for <span data-video-watch-selected-title>selected video</span></span>
    `;
    watchButton.addEventListener("click", () => {
      const progress = loadProgress();
      const key = watchButton.dataset.videoWatchKey;
      if (progress[key]) {
        delete progress[key];
      } else {
        progress[key] = true;
      }
      saveProgress(progress);
      updateProgressUi();
    });
    statusControls.appendChild(watchButton);

    row.dataset.videoActionsReady = "true";
    setVideoRowSelection(row, primaryVideoId, Number(frame.dataset.start || 0), { loadVideo: false });
  });
}

function initVideos() {
  initVideoActionRows();

  document.querySelectorAll(".video-frame").forEach((frame) => {
    const id = frame.dataset.videoId;
    const start = Number(frame.dataset.start || 0);
    if (location.protocol === "file:") {
      frame.classList.add("video-frame-fallback");
      frame.innerHTML = `<div class="video-file-warning"><strong>Embedded player blocked on file://</strong><p>Use the localhost version for inline video, or open this video directly on YouTube.</p><a class="button" href="${youtubeWatchUrl(id, start)}" target="_blank" rel="noreferrer">Watch on YouTube</a></div>`;
      return;
    }
    frame.innerHTML = `<iframe title="${frame.getAttribute("title") || "Video"}" src="${videoSrc(id, start)}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure" allowfullscreen></iframe>`;
  });

  document.querySelectorAll("[data-video-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".video-card");
      const id = button.dataset.videoTarget;
      const start = Number(button.dataset.start || 0);
      updateVideoFrame(card, id, start);
      const row = button.closest(".timestamp-row");
      if (row) setVideoRowSelection(row, id, start, { loadVideo: false, activeButton: button });
      updateProgressUi();
    });
  });
  updateProgressUi();
}

function initFlashcards() {
  document.querySelectorAll("[data-flashcards]").forEach((container) => {
    const set = flashcards[container.dataset.flashcards] || [];
    if (!set.length) {
      container.hidden = true;
      return;
    }
    set.forEach(([front, back]) => {
      const card = document.createElement("article");
      card.className = "flashcard";
      card.innerHTML = `<p><strong>${front}</strong></p><button type="button">Show answer</button><p class="flashcard-answer">${back}</p>`;
      card.querySelector("button").addEventListener("click", () => {
        card.classList.toggle("revealed");
        card.querySelector("button").textContent = card.classList.contains("revealed") ? "Hide answer" : "Show answer";
      });
      container.appendChild(card);
    });
  });
}

function readStoredJson(key, fallback = {}) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeStoredJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readQuizAnswers(storageKey, count) {
  if (!storageKey) return Array(count).fill(null);
  const raw = readStoredJson(storageKey, {});
  const answers = Array.isArray(raw?.answers) ? raw.answers : [];
  return Array.from({ length: count }, (_, index) => {
    const value = answers[index];
    return Number.isInteger(value) ? value : null;
  });
}

function writeQuizAnswers(storageKey, answers) {
  if (!storageKey) return;
  writeStoredJson(storageKey, { answers });
}

function quizProgressForAnswers(set, answers) {
  const answered = answers.filter((answer) => answer !== null).length;
  const correct = answers.reduce((total, answer, answerIndex) => (
    answer === set[answerIndex]?.correct ? total + 1 : total
  ), 0);
  return {
    answered,
    total: set.length,
    correct,
    complete: answered === set.length,
    updatedAt: progressTimestamp()
  };
}

function syncQuizProgress(quizKey, set, answers) {
  if (!quizKey) return;
  setPageProgressValue(`quiz:${quizKey}`, quizProgressForAnswers(set, answers));
  updateProgressUi();
}

function shuffledIndexes(length) {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let i = indexes.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  return indexes;
}

function renderQuizPager(container, set, options = {}) {
  if (!container || !set?.length) {
    if (container) container.hidden = true;
    return;
  }

  const heading = container.querySelector("h3")?.textContent?.trim() || "Exam MCQs";
  const quizKey = options.storageKey || container.dataset.quiz || container.dataset.puiQuiz || container.dataset.ssuQuiz || heading;
  const storageKey = `studyQuiz:${location.pathname}:${quizKey}`;
  let answers = readQuizAnswers(storageKey, set.length);
  const optionOrders = set.map((question) => shuffledIndexes(question.a?.length || 0));
  let index = Math.min(Math.max(0, answers.findIndex((answer) => answer === null)), set.length - 1);
  if (index < 0) index = set.length;

  container.classList.add("quiz-pager");
  container.innerHTML = "";

  const header = document.createElement("div");
  header.className = "quiz-pager-header";
  header.innerHTML = `
    <div>
      <h3>${heading}</h3>
      <p class="quiz-pager-subtitle">One exam-style question at a time.</p>
    </div>
    <div class="quiz-pager-stats">
      <div class="quiz-pager-count" aria-live="polite"></div>
      <div class="quiz-pager-status" aria-live="polite"></div>
    </div>
  `;

  const track = document.createElement("div");
  track.className = "quiz-progress-track";
  track.innerHTML = `<span></span>`;

  const body = document.createElement("div");
  body.className = "quiz-pager-body";

  const controls = document.createElement("div");
  controls.className = "quiz-pager-controls";
  controls.innerHTML = `
    <button type="button" class="quiz-nav quiz-prev">Previous</button>
    <button type="button" class="quiz-nav quiz-next">Next</button>
  `;

  container.append(header, track, body, controls);

  const count = header.querySelector(".quiz-pager-count");
  const status = header.querySelector(".quiz-pager-status");
  const progressFill = track.querySelector("span");
  const prev = controls.querySelector(".quiz-prev");
  const next = controls.querySelector(".quiz-next");

  const score = () => answers.reduce((total, answer, answerIndex) => (
    answer === set[answerIndex].correct ? total + 1 : total
  ), 0);

  const completedCount = () => answers.filter((answer) => answer !== null).length;

  const renderQuestion = () => {
    const question = set[index];
    const selected = answers[index];
    const answered = selected !== null;
    const done = completedCount();
    count.textContent = `Question ${index + 1} of ${set.length}`;
    const currentScore = score();
    status.textContent = done === set.length ? `Complete · ${currentScore}/${set.length} correct` : `Answered ${done}/${set.length} · ${currentScore} correct`;
    status.classList.toggle("is-complete", done === set.length);
    progressFill.style.width = `${Math.round((done / set.length) * 100)}%`;
    prev.disabled = index === 0;
    next.disabled = !answered;
    next.textContent = index === set.length - 1 ? "Results" : "Next";

    body.innerHTML = "";
    const block = document.createElement("article");
    block.className = "quiz-question quiz-question-active";
    block.innerHTML = `
      <p class="quiz-question-text"><strong>${index + 1}. ${question.q}</strong></p>
      <div class="quiz-options"></div>
      <p class="quiz-feedback" aria-live="polite"></p>
    `;

    const optionBox = block.querySelector(".quiz-options");
    const feedback = block.querySelector(".quiz-feedback");

    optionOrders[index].forEach((answerIndex) => {
      const answer = question.a[answerIndex];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = answer;
      if (answered) {
        if (answerIndex === question.correct) button.classList.add("correct");
        if (answerIndex === selected && selected !== question.correct) button.classList.add("incorrect");
      }
      button.addEventListener("click", () => {
        answers[index] = answerIndex;
        writeQuizAnswers(storageKey, answers);
        syncQuizProgress(quizKey, set, answers);
        renderQuestion();
      });
      optionBox.appendChild(button);
    });

    if (answered) {
      feedback.textContent = selected === question.correct ? `Correct. ${question.why}` : `Not quite. ${question.why}`;
    } else {
      feedback.textContent = "Choose one answer to unlock Next.";
    }

    body.appendChild(block);
  };

  const renderResults = () => {
    const correct = score();
    count.textContent = "Results";
    status.textContent = `Complete · ${correct}/${set.length} correct`;
    status.classList.add("is-complete");
    progressFill.style.width = "100%";
    prev.disabled = set.length === 0;
    next.disabled = true;
    next.textContent = "Done";

    body.innerHTML = `
      <article class="quiz-results">
        <h4>${correct}/${set.length} correct</h4>
        <p>${correct === set.length ? "Clean pass. Nice." : "Review the misses, then run it once more."}</p>
        <div class="quiz-result-list"></div>
        <div class="quiz-result-actions">
          <button type="button" class="quiz-nav quiz-review">Review questions</button>
          <button type="button" class="quiz-nav quiz-reset">Restart quiz</button>
        </div>
      </article>
    `;

    const list = body.querySelector(".quiz-result-list");
    set.forEach((question, questionIndex) => {
      const selected = answers[questionIndex];
      const row = document.createElement("button");
      row.type = "button";
      row.className = `quiz-result-row ${selected === question.correct ? "correct" : "incorrect"}`;
      row.innerHTML = `
        <span>${questionIndex + 1}</span>
        <strong>${selected === question.correct ? "Correct" : "Missed"}</strong>
        <em>${question.why}</em>
      `;
      row.addEventListener("click", () => {
        index = questionIndex;
        renderQuestion();
      });
      list.appendChild(row);
    });

    body.querySelector(".quiz-review").addEventListener("click", () => {
      index = 0;
      renderQuestion();
    });
    body.querySelector(".quiz-reset").addEventListener("click", () => {
      answers = Array(set.length).fill(null);
      writeQuizAnswers(storageKey, answers);
      syncQuizProgress(quizKey, set, answers);
      index = 0;
      renderQuestion();
    });
  };

  prev.addEventListener("click", () => {
    if (index >= set.length) index = set.length - 1;
    else index = Math.max(0, index - 1);
    renderQuestion();
  });

  next.addEventListener("click", () => {
    if (index >= set.length - 1) renderResults();
    else {
      index += 1;
      renderQuestion();
    }
  });

  syncQuizProgress(quizKey, set, answers);
  if (index >= set.length) renderResults();
  else renderQuestion();
}

window.renderQuizPager = renderQuizPager;

function initQuizzes() {
  document.querySelectorAll("[data-quiz]").forEach((container) => {
    const set = quizzes[container.dataset.quiz] || [];
    renderQuizPager(container, set, { storageKey: container.dataset.quiz });
  });
}

function recallProgressValue(area, existing = {}) {
  const attempted = area.value.trim().length >= 12;
  return {
    attempted,
    validated: attempted ? Boolean(existing.validated) : false,
    verdict: attempted ? existing.verdict || "" : "",
    updatedAt: progressTimestamp()
  };
}

function updateRecallProgressBadge(area, value = null) {
  const label = area.closest(".free-recall");
  if (!label) return;
  let badge = label.querySelector(".recall-progress-badge");
  if (!badge) {
    badge = document.createElement("span");
    badge.className = "recall-progress-badge";
    const prompt = label.querySelector("span");
    if (prompt) prompt.appendChild(badge);
    else label.prepend(badge);
  }
  const progress = value || loadProgress()[`recall:${area.dataset.recall}`] || {};
  const state = progress.validated ? "validated" : progress.attempted ? "attempted" : "empty";
  badge.dataset.state = state;
  badge.textContent = progress.validated ? `Validated · ${progress.verdict || "checked"}` : progress.attempted ? "Draft saved" : "Not started";
}

function syncRecallProgress(area, patch = {}) {
  const key = area.dataset.recall;
  if (!key) return;
  const current = loadProgress()[`recall:${key}`] || {};
  const next = { ...recallProgressValue(area, current), ...patch, updatedAt: progressTimestamp() };
  setPageProgressValue(`recall:${key}`, next);
  updateRecallProgressBadge(area, next);
  updateProgressUi();
}

function initRecall() {
  const store = getRecallStore();
  document.querySelectorAll("[data-recall]").forEach((area) => {
    const key = area.dataset.recall;
    area.value = store[key] || "";
    syncRecallProgress(area);
    area.addEventListener("input", () => {
      const next = getRecallStore();
      next[key] = area.value;
      saveRecallStore(next);
      syncRecallProgress(area, { validated: false, verdict: "" });
      if (!getRecallValidationResult(key, area.value.trim())) {
        clearRecallValidationResult(key);
        const existingOutput = label?.querySelector(".recall-validator-result");
        if (existingOutput) renderRecallValidationStatus(existingOutput, "idle");
      }
    });

    const label = area.closest(".free-recall");
    if (!label || label.querySelector("[data-recall-validate]")) return;

    const actions = document.createElement("div");
    actions.className = "recall-validator-actions";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "recall-validator-button";
    button.dataset.recallValidate = key;
    button.innerHTML = `<span class="material-symbols-rounded">fact_check</span>Validate recall`;

    const output = document.createElement("div");
    output.className = "recall-validator-result idle";
    output.setAttribute("aria-live", "polite");

    button.addEventListener("click", () => validateRecall(area, button, output));
    actions.appendChild(button);
    label.appendChild(actions);
    label.appendChild(output);

    const savedResult = getRecallValidationResult(key, area.value.trim());
    if (savedResult) {
      renderRecallValidationStatus(output, savedResult.verdict || "partial", { result: savedResult });
      syncRecallProgress(area, {
        attempted: true,
        validated: true,
        verdict: savedResult.verdict || "partial"
      });
    }
  });
}

function updateLabProgressButton(container, value = null) {
  const button = container.querySelector("[data-lab-progress-toggle]");
  if (!button) return;
  const progress = value || loadProgress()[`lab:${container.dataset.labKey}`];
  const complete = progress === true || progress?.complete === true;
  button.classList.toggle("is-complete", complete);
  button.setAttribute("aria-pressed", String(complete));
  const icon = button.querySelector(".material-symbols-rounded");
  const label = button.querySelector(".lab-progress-label");
  if (icon) icon.textContent = complete ? "check_circle" : "radio_button_unchecked";
  if (label) label.textContent = complete ? "Lab done" : "Mark lab done";
}

function initLabProgress() {
  document.querySelectorAll("[data-lab-key]").forEach((container) => {
    const key = container.dataset.labKey;
    if (!key) return;
    if (!container.querySelector("[data-lab-progress-toggle]")) {
      const row = document.createElement("div");
      row.className = "lab-progress-row";
      row.innerHTML = `
        <button type="button" class="lab-progress-toggle" data-lab-progress-toggle aria-pressed="false">
          <span class="material-symbols-rounded">radio_button_unchecked</span>
          <span class="lab-progress-label">Mark lab done</span>
        </button>
      `;
      container.appendChild(row);
    }
    const button = container.querySelector("[data-lab-progress-toggle]");
    button.addEventListener("click", () => {
      const current = loadProgress()[`lab:${key}`];
      const complete = !(current === true || current?.complete === true);
      const value = complete ? { complete: true, updatedAt: progressTimestamp() } : { complete: false, updatedAt: progressTimestamp() };
      setPageProgressValue(`lab:${key}`, value);
      updateLabProgressButton(container, value);
      updateProgressUi();
    });
    updateLabProgressButton(container);
  });
}

function initRepresentation() {
  const output = document.getElementById("representation-output");
  if (!output) return;
  const render = (key) => {
    const item = representationData[key];
    output.innerHTML = `<h4>${item.title}</h4>${item.html}`;
    document.querySelectorAll("[data-representation-tabs] button").forEach((button) => {
      button.classList.toggle("active", button.dataset.rep === key);
    });
  };
  document.querySelectorAll("[data-representation-tabs] button").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.rep));
  });
  render("matrix");
}

function initLaplacianDemo() {
  const output = document.getElementById("laplacian-output");
  const buttons = document.querySelectorAll("[data-laplacian-tabs] button");
  if (!output || !buttons.length) return;

  const render = (key) => {
    const item = laplacianSteps[key];
    if (!item) return;
    output.innerHTML = `<h4>${item.title}</h4>${item.html}`;
    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.laplacianStep === key);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.laplacianStep));
  });
  render("graph");
}

function edgeKey(a, b) {
  return [a, b].sort().join("-");
}

const SVG_NS = "http://www.w3.org/2000/svg";

function svgEl(name, attrs = {}) {
  const el = document.createElementNS(SVG_NS, name);
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }
  return el;
}

function renderMstState(step) {
  if (!step.state?.length) return "";
  return step.state.map((group) => `
    <div class="mst-state-group">
      <strong>${group.label}</strong>
      <div class="mst-state-chips">
        ${group.items.map((item) => {
          const lower = String(item).toLowerCase();
          const classes = ["mst-chip"];
          if (item === "empty") classes.push("empty");
          if (lower.includes("accepted")) classes.push("accepted");
          if (lower.includes("consider")) classes.push("considering");
          if (lower.includes("stale") || lower.includes("ignored") || lower.includes("not chosen")) classes.push("rejected");
          return `<span class="${classes.join(" ")}">${item}</span>`;
        }).join("")}
      </div>
    </div>
  `).join("");
}

function mstEdgeStatus(step, key) {
  if (step.edges?.includes(key)) return "accepted";
  if (step.considering?.includes(key)) return "considering";
  if (step.rejected?.includes(key)) return "rejected";
  return "idle";
}

function drawMst() {
  const canvas = document.getElementById("mst-graph");
  const text = document.getElementById("mst-step-text");
  const state = document.getElementById("mst-state");
  if (!canvas || !text) return;
  const step = mstSteps[mstMode][mstIndex];

  // One shared coordinate space (viewBox units). preserveAspectRatio keeps
  // it uniform, so a line from (x1,y1) to (x2,y2) always lands exactly on its
  // nodes no matter how the canvas is sized.
  const svg = svgEl("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid meet",
    class: "mst-svg"
  });

  mstEdges.forEach(([from, to, weight]) => {
    const [x1, y1] = mstNodes[from];
    const [x2, y2] = mstNodes[to];
    const key = edgeKey(from, to);
    const status = mstEdgeStatus(step, key);

    svg.appendChild(svgEl("line", {
      x1, y1, x2, y2,
      class: `mst-edge ${status}`
    }));

    const label = svgEl("text", {
      x: (x1 + x2) / 2,
      y: (y1 + y2) / 2,
      "text-anchor": "middle",
      "dominant-baseline": "central",
      class: `mst-edge-label ${status}`
    });
    label.textContent = weight;
    svg.appendChild(label);
  });

  Object.entries(mstNodes).forEach(([name, [x, y]]) => {
    svg.appendChild(svgEl("circle", { cx: x, cy: y, r: 7, class: "mst-node" }));
    const label = svgEl("text", {
      x, y,
      "text-anchor": "middle",
      "dominant-baseline": "central",
      class: "mst-node-label"
    });
    label.textContent = name;
    svg.appendChild(label);
  });

  canvas.innerHTML = "";
  canvas.appendChild(svg);
  if (state) state.innerHTML = renderMstState(step);
  text.innerHTML = `<strong>Step ${mstIndex + 1}/${mstSteps[mstMode].length}:</strong> ${step.text}<br><span class="step-note-inline">${step.note}</span>`;
}

function initMst() {
  document.querySelectorAll("[data-mst-mode] button").forEach((button) => {
    button.addEventListener("click", () => {
      mstMode = button.dataset.mode;
      mstIndex = 0;
      document.querySelectorAll("[data-mst-mode] button").forEach((b) => b.classList.toggle("active", b === button));
      drawMst();
    });
  });
  const prev = document.querySelector("[data-mst-prev]");
  const next = document.querySelector("[data-mst-next]");
  if (prev) prev.addEventListener("click", () => {
    mstIndex = Math.max(0, mstIndex - 1);
    drawMst();
  });
  if (next) next.addEventListener("click", () => {
    mstIndex = Math.min(mstSteps[mstMode].length - 1, mstIndex + 1);
    drawMst();
  });
  drawMst();
}

const ufNodePositions = {
  A: [50, 36],
  B: [22, 112],
  C: [78, 112],
  D: [78, 174]
};

function edgeId(from, to) {
  return `${from}-${to}`;
}

function graphRound(value) {
  return Math.round(value * 100) / 100;
}

function graphUnitVector(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.hypot(dx, dy) || 1;
  return { x: dx / length, y: dy / length };
}

function graphBoundaryPoint(node, toward, padding = 0) {
  const unit = graphUnitVector(node.x, node.y, toward.x, toward.y);
  if (node.shape === "rect") {
    const halfWidth = (node.width || 0) / 2 + padding;
    const halfHeight = (node.height || 0) / 2 + padding;
    const tx = Math.abs(unit.x) > 0.0001 ? halfWidth / Math.abs(unit.x) : Infinity;
    const ty = Math.abs(unit.y) > 0.0001 ? halfHeight / Math.abs(unit.y) : Infinity;
    const distance = Math.min(tx, ty);
    return {
      x: node.x + unit.x * distance,
      y: node.y + unit.y * distance
    };
  }

  const distance = (node.radius || 0) + padding;
  return {
    x: node.x + unit.x * distance,
    y: node.y + unit.y * distance
  };
}

function graphArrowPolygon(tip, tangent, size) {
  const unit = graphUnitVector(0, 0, tangent.x, tangent.y);
  const normal = { x: -unit.y, y: unit.x };
  const base = {
    x: tip.x - unit.x * size,
    y: tip.y - unit.y * size
  };
  const halfWidth = size * 0.55;
  return [
    [graphRound(tip.x), graphRound(tip.y)],
    [graphRound(base.x + normal.x * halfWidth), graphRound(base.y + normal.y * halfWidth)],
    [graphRound(base.x - normal.x * halfWidth), graphRound(base.y - normal.y * halfWidth)]
  ].map(([x, y]) => `${x},${y}`).join(" ");
}

function graphArrowBasePoint(tip, tangent, size) {
  const unit = graphUnitVector(0, 0, tangent.x, tangent.y);
  return {
    x: tip.x - unit.x * size,
    y: tip.y - unit.y * size
  };
}

function graphEdgeParts(nodesById, edge) {
  const source = nodesById[edge.from];
  const target = nodesById[edge.to];
  const curve = edge.curve || 0;
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const length = Math.hypot(dx, dy) || 1;
  const midpoint = { x: (source.x + target.x) / 2, y: (source.y + target.y) / 2 };
  const control = curve
    ? { x: midpoint.x + (-dy / length) * curve, y: midpoint.y + (dx / length) * curve }
    : null;
  const sourceToward = control || target;
  const targetToward = control || source;
  const start = graphBoundaryPoint(source, sourceToward, edge.sourcePad ?? 2);
  const end = graphBoundaryPoint(target, targetToward, edge.targetPad ?? 0.5);
  const tangent = control ? { x: end.x - control.x, y: end.y - control.y } : { x: end.x - start.x, y: end.y - start.y };
  const arrow = edge.directed ? graphArrowPolygon(end, tangent, edge.arrowSize || 4) : "";
  const pathEnd = edge.directed ? graphArrowBasePoint(end, tangent, edge.arrowSize || 4) : end;
  const path = control
    ? `M ${graphRound(start.x)} ${graphRound(start.y)} Q ${graphRound(control.x)} ${graphRound(control.y)} ${graphRound(pathEnd.x)} ${graphRound(pathEnd.y)}`
    : `M ${graphRound(start.x)} ${graphRound(start.y)} L ${graphRound(pathEnd.x)} ${graphRound(pathEnd.y)}`;
  return { path, arrow };
}

function renderControlledGraphSvg({ className, viewBox, ariaLabel, nodes, edges }) {
  const nodesById = Object.fromEntries(nodes.map((node) => [node.id, node]));
  const edgeParts = edges.map((edge) => ({ edge, ...graphEdgeParts(nodesById, edge) }));
  const edgeMarkup = edgeParts.map(({ edge, path }) => (
    `<path class="${edge.className}" d="${path}"></path>`
  )).join("");
  const arrowMarkup = edgeParts.filter(({ edge }) => edge.directed).map(({ edge, arrow }) => (
    `<polygon class="${edge.arrowClassName}" points="${arrow}"></polygon>`
  )).join("");
  const nodeMarkup = nodes.map((node) => {
    const shape = node.shape === "rect"
      ? `<rect x="${-node.width / 2}" y="${-node.height / 2}" width="${node.width}" height="${node.height}" rx="${node.rx || 8}"></rect>`
      : `<circle r="${node.radius}"></circle>`;
    return `<g class="${node.className}" transform="translate(${node.x} ${node.y})">${shape}<text y="5">${node.label}</text></g>`;
  }).join("");

  return `<svg class="${className}" viewBox="${viewBox}" role="img" aria-label="${ariaLabel}">
    ${edgeMarkup}
    ${arrowMarkup}
    ${nodeMarkup}
  </svg>`;
}

function renderUfForest(step) {
  const nodes = Object.entries(ufNodePositions).map(([node, [x, y]]) => {
    const root = step.parents[node] === node;
    const active = step.active?.includes(node);
    return {
      id: node,
      label: node,
      x,
      y,
      shape: "circle",
      radius: 14,
      className: `uf-node${root ? " root" : ""}${active ? " active" : ""}`
    };
  });
  const edges = Object.entries(step.parents)
    .filter(([node, parent]) => node !== parent)
    .map(([node, parent]) => {
      const id = edgeId(node, parent);
      const active = step.activeLinks?.includes(id);
      const compressed = step.compressed?.includes(id);
      const className = `uf-link${active ? " active" : ""}${compressed ? " compressed" : ""}`;
      const arrowClassName = `uf-arrowhead${active ? " active" : ""}${compressed ? " compressed" : ""}`;
      return {
        from: node,
        to: parent,
        directed: true,
        arrowSize: active ? 5 : 3.8,
        targetPad: 0.5,
        className,
        arrowClassName
      };
    });

  return renderControlledGraphSvg({
    className: "uf-forest-svg controlled-graph-svg",
    viewBox: "0 0 100 205",
    ariaLabel: "Union-find parent pointer forest",
    nodes,
    edges
  });
}

function renderSetRows(sets) {
  return `<div class="uf-set-row">${sets.map((set) => `<span class="uf-set">{${set.join(", ")}}</span>`).join("")}</div>`;
}

function renderUfPreview(step, index) {
  return `
    <div class="graph-lab">
      <div class="graph-lab-head">
        <span class="lab-step-pill">Step ${index + 1}/${ufVisualSteps.length}</span>
        <h4>${step.title}</h4>
        <p>${step.operation}</p>
      </div>
      <div class="uf-layout">
        <div class="uf-forest-card">
          ${renderUfForest(step)}
        </div>
        <div class="uf-side">
          <strong>Current sets</strong>
          ${renderSetRows(step.sets)}
          <strong>Parent table</strong>
          <table class="mini-state-table"><tr><th>item</th>${Object.keys(step.parents).map((node) => `<td>${node}</td>`).join("")}</tr><tr><th>parent</th>${Object.values(step.parents).map((parent) => `<td>${parent}</td>`).join("")}</tr></table>
        </div>
      </div>
      <p class="step-note"><strong>Why:</strong> ${step.note}</p>
      <p class="muted-note">${step.message}</p>
    </div>
  `;
}

const sccNodePositions = {
  A: [58, 42],
  B: [28, 112],
  C: [88, 112],
  D: [162, 78],
  E: [210, 126]
};

const sccEdges = [
  ["A", "B", "abc", 0],
  ["B", "C", "abc", 0],
  ["C", "A", "abc", 0],
  ["C", "D", "bridge", 0],
  ["D", "E", "de", 12],
  ["E", "D", "de", 12]
];

function renderSccGraph(step) {
  if (step.condensation) {
    return renderControlledGraphSvg({
      className: "scc-svg controlled-graph-svg",
      viewBox: "0 0 250 170",
      ariaLabel: "SCC condensation DAG",
      nodes: [
        { id: "abc", label: "{A,B,C}", x: 62, y: 84, shape: "rect", width: 88, height: 48, rx: 8, className: "scc-condensed-node abc" },
        { id: "de", label: "{D,E}", x: 188, y: 84, shape: "rect", width: 68, height: 48, rx: 8, className: "scc-condensed-node de" }
      ],
      edges: [
        { from: "abc", to: "de", directed: true, arrowSize: 5.5, targetPad: 0.5, className: "scc-edge bridge active", arrowClassName: "scc-arrowhead bridge active" }
      ]
    });
  }

  const nodes = Object.entries(sccNodePositions).map(([node, [x, y]]) => {
    const group = ["A", "B", "C"].includes(node) ? "abc" : "de";
    const active = step.highlight?.includes(group);
    return {
      id: node,
      label: node,
      x,
      y,
      shape: "circle",
      radius: 16,
      className: `scc-node ${group}${active ? " active" : ""}`
    };
  });
  const edges = sccEdges.map(([from, to, group, curve]) => {
    const reversed = step.reversed;
    const active = step.highlight?.includes(group);
    return {
      from: reversed ? to : from,
      to: reversed ? from : to,
      directed: true,
      curve,
      arrowSize: active ? 5.5 : 4.2,
      targetPad: 0.5,
      className: `scc-edge ${group}${active ? " active" : ""}`,
      arrowClassName: `scc-arrowhead ${group}${active ? " active" : ""}`
    };
  });

  return renderControlledGraphSvg({
    className: "scc-svg controlled-graph-svg",
    viewBox: "0 0 250 170",
    ariaLabel: "Directed graph for SCC step",
    nodes,
    edges
  });
}

function renderSccPreview(step, index) {
  return `
    <div class="graph-lab">
      <div class="graph-lab-head">
        <span class="lab-step-pill">Step ${index + 1}/${sccVisualSteps.length}</span>
        <h4>${step.title}</h4>
        <p>${step.phase}</p>
      </div>
      ${renderSccGraph(step)}
      <div class="graph-lab-chip-row">
        ${step.chips.map((chip) => `<span>${chip}</span>`).join("")}
      </div>
      <p class="step-note"><strong>Why:</strong> ${step.note}</p>
      <p class="muted-note">${step.message}</p>
    </div>
  `;
}

const directedLabNodes = [
  { id: "A", label: "A", x: 58, y: 42, shape: "circle", radius: 16 },
  { id: "B", label: "B", x: 28, y: 112, shape: "circle", radius: 16 },
  { id: "C", label: "C", x: 88, y: 112, shape: "circle", radius: 16 },
  { id: "D", label: "D", x: 162, y: 78, shape: "circle", radius: 16 },
  { id: "E", label: "E", x: 210, y: 126, shape: "circle", radius: 16 }
];

const directedLabEdges = [
  ["A", "B", "abc", 0],
  ["B", "C", "abc", 0],
  ["C", "A", "abc", 0],
  ["C", "D", "bridge", 0],
  ["D", "E", "de", 12],
  ["E", "D", "de", 12]
];

const kosarajuSteps = [
  {
    title: "Original graph",
    phase: "Before the algorithm, notice the shape",
    highlight: ["abc", "de"],
    activeEdges: ["C-D"],
    chips: ["cycle A->B->C->A", "cycle D<->E", "one-way bridge C->D"],
    note: "SCCs are maximal mutually reachable groups. The bridge goes one way, so it cannot merge the two cycles.",
    message: "Kosaraju will discover exactly this partition without being told it in advance."
  },
  {
    title: "Pass 1: start DFS at A",
    phase: "Record discovery, but do not emit SCCs yet",
    activeNodes: ["A"],
    activeEdges: ["A-B"],
    chips: ["visit A", "next edge A->B", "finish stack: empty"],
    note: "The first pass is ordinary DFS on the original graph. Its job is only to record finishing order.",
    message: "At this stage we do not know an SCC yet; A is still open on the recursion stack."
  },
  {
    title: "Pass 1: follow A->B->C",
    phase: "DFS goes deeper before finishing vertices",
    activeNodes: ["A", "B", "C"],
    activeEdges: ["A-B", "B-C", "C-A"],
    chips: ["visited: A,B,C", "C sees edge back to A", "finish stack: empty"],
    note: "The edge C->A tells you A,B,C are cyclic, but Kosaraju still waits until DFS finishes to use order information.",
    message: "First-pass DFS is about finish times, not lowlink and not immediate SCC popping."
  },
  {
    title: "Pass 1: cross to D and E",
    phase: "DFS follows the bridge before unwinding",
    activeNodes: ["C", "D", "E"],
    activeEdges: ["C-D", "D-E", "E-D"],
    chips: ["C->D enters second cycle", "D->E", "E sees D already active"],
    note: "Because C has an outgoing bridge, a DFS starting at A can visit both SCCs in the first pass.",
    message: "This is why the reversed second pass is needed. First-pass reachability alone is not an SCC."
  },
  {
    title: "Pass 1: finish E and D",
    phase: "Dead ends finish first",
    activeNodes: ["D", "E"],
    activeEdges: ["D-E", "E-D"],
    chips: ["finish E", "finish D", "finish stack: E, D"],
    note: "When DFS cannot continue from E and D to an unvisited vertex, those vertices finish and are pushed to the finish stack.",
    message: "The finish stack is usually written in finish order; the second pass processes it from the top/highest finish time."
  },
  {
    title: "Pass 1: finish C, B, A",
    phase: "Unwind the original DFS call",
    activeNodes: ["A", "B", "C"],
    activeEdges: ["A-B", "B-C", "C-A"],
    chips: ["finish C", "finish B", "finish A", "stack: E, D, C, B, A"],
    note: "A finishes last, so A has the largest finish time in this possible DFS run.",
    message: "Now the first pass is done. Still no SCCs have been output."
  },
  {
    title: "Reverse every edge",
    phase: "Build the transpose graph",
    reversed: true,
    activeEdges: ["D-C"],
    chips: ["C->D becomes D->C", "A->B becomes B->A", "D->E becomes E->D"],
    note: "Reversal flips the between-component direction. That is what prevents the second-pass DFS from leaking into the wrong component.",
    message: "The graph transpose costs O(n+m) and keeps the same SCC partition."
  },
  {
    title: "Pass 2: pop A first",
    phase: "Process highest finish time on the reversed graph",
    reversed: true,
    activeNodes: ["A"],
    activeEdges: ["A-C"],
    chips: ["top of stack: A", "start DFS at A in G^T", "A reaches C"],
    note: "Second pass uses decreasing finish time, so A is chosen before D even though D/E finished earlier.",
    message: "This order is the whole point of the first pass."
  },
  {
    title: "Pass 2: collect {A,B,C}",
    phase: "The reversed DFS stays inside one SCC",
    reversed: true,
    highlight: ["abc"],
    activeEdges: ["A-C", "C-B", "B-A"],
    chips: ["visited: A,C,B", "cannot go to D", "emit SCC {A,B,C}"],
    note: "In the transpose, the bridge is D->C, not C->D. So starting from A cannot leak into D/E.",
    message: "Each DFS tree in pass 2 is one SCC."
  },
  {
    title: "Pass 2: skip assigned vertices",
    phase: "Continue down the finish stack",
    reversed: true,
    highlight: ["abc"],
    chips: ["B already assigned", "C already assigned", "next unassigned: D"],
    note: "Second pass ignores vertices already placed in an SCC. That is why every vertex is emitted exactly once.",
    message: "This is a common implementation detail examiners like to hear."
  },
  {
    title: "Pass 2: remaining component",
    phase: "Continue through the finish-time order",
    reversed: true,
    highlight: ["de"],
    activeEdges: ["D-E", "E-D"],
    chips: ["start at D", "visited: D,E", "emit SCC {D,E}"],
    note: "Every second-pass DFS gives one SCC. Total runtime stays O(n+m).",
    message: "Final answer: two passes, transpose graph, decreasing finish order."
  },
  {
    title: "Condensation DAG",
    phase: "Compress SCCs",
    condensation: true,
    chips: ["{A,B,C} -> {D,E}", "DAG, never cyclic"],
    note: "If condensation had a directed cycle, those SCCs would be mutually reachable and should have been one SCC.",
    message: "This DAG view is useful for dependency/order reasoning after SCC detection."
  }
];

const tarjanSteps = [
  {
    title: "Start DFS at A",
    phase: "Assign index and push onto stack",
    highlight: ["abc"],
    chips: ["index(A)=0", "low(A)=0", "stack: [A]"],
    table: [["A", "0", "0", "yes"], ["B", "-", "-", "no"], ["C", "-", "-", "no"], ["D", "-", "-", "no"], ["E", "-", "-", "no"]],
    note: "Tarjan does not reverse the graph. It keeps a DFS stack of vertices that might still belong to the current SCC.",
    message: "Index is discovery time. Lowlink is the smallest index reachable through DFS tree edges plus at most one back edge to the stack."
  },
  {
    title: "Reach B and C",
    phase: "Back edge C->A lowers lowlink",
    highlight: ["abc"],
    chips: ["stack: [A,B,C]", "C sees A on stack", "low(C)=0"],
    table: [["A", "0", "0", "yes"], ["B", "1", "0", "yes"], ["C", "2", "0", "yes"], ["D", "-", "-", "no"], ["E", "-", "-", "no"]],
    note: "The back edge to A proves C, B, and A are in the same still-open SCC candidate.",
    message: "Lowlink is the exam hook: it tells whether the DFS subtree can reach an older stack vertex."
  },
  {
    title: "Explore D and E",
    phase: "A second cycle appears",
    highlight: ["de"],
    chips: ["D index=3", "E index=4", "E->D lowers low(E) to 3"],
    table: [["A", "0", "0", "yes"], ["B", "1", "0", "yes"], ["C", "2", "0", "yes"], ["D", "3", "3", "yes"], ["E", "4", "3", "yes"]],
    note: "D and E form their own SCC because they can reach each other, but no edge returns from D/E to A/B/C.",
    message: "The bridge C->D does not make one SCC because reachability is not symmetric."
  },
  {
    title: "Pop {D,E}",
    phase: "Root condition low(D)=index(D)",
    highlight: ["de"],
    chips: ["pop until D", "SCC: {D,E}", "stack left: [A,B,C]"],
    table: [["A", "0", "0", "yes"], ["B", "1", "0", "yes"], ["C", "2", "0", "yes"], ["D", "3", "3", "popped"], ["E", "4", "3", "popped"]],
    note: "When lowlink[v] equals index[v], v is the root of an SCC. Pop the stack up to v.",
    message: "This is the sentence to memorize for Tarjan."
  },
  {
    title: "Pop {A,B,C}",
    phase: "Unwind recursion",
    highlight: ["abc"],
    chips: ["low(C)=low(B)=low(A)=0", "pop until A", "SCC: {A,B,C}"],
    table: [["A", "0", "0", "popped"], ["B", "1", "0", "popped"], ["C", "2", "0", "popped"], ["D", "3", "3", "popped"], ["E", "4", "3", "popped"]],
    note: "After returning from C, A is also a root because low(A)=index(A). The algorithm has found all SCCs in one DFS.",
    message: "Runtime is O(n+m): each vertex and edge is processed a constant number of times."
  }
];

const eulerNodes = [
  { id: "A", label: "A", x: 62, y: 42, shape: "circle", radius: 16 },
  { id: "B", label: "B", x: 24, y: 110, shape: "circle", radius: 16 },
  { id: "C", label: "C", x: 98, y: 110, shape: "circle", radius: 16 },
  { id: "D", label: "D", x: 172, y: 78, shape: "circle", radius: 16 },
  { id: "E", label: "E", x: 212, y: 132, shape: "circle", radius: 16 }
];

const eulerEdges = [
  ["A", "B", "AB"],
  ["B", "C", "BC"],
  ["C", "A", "CA"],
  ["C", "D", "CD"],
  ["D", "E", "DE"],
  ["E", "C", "EC"]
];

const eulerSteps = [
  {
    title: "Check Euler conditions",
    phase: "This undirected graph has an Euler circuit",
    activeEdges: [],
    chips: ["connected non-isolated part", "deg A=2", "deg B=2", "deg C=4", "deg D=2", "deg E=2"],
    note: "Undirected Euler circuit: every non-isolated vertex belongs to one connected component and every degree is even.",
    message: "For an open undirected Euler trail, exactly two vertices have odd degree instead."
  },
  {
    title: "Start a cycle",
    phase: "Hierholzer walks unused edges until it returns",
    activeEdges: ["AB", "BC", "CA"],
    chips: ["cycle found: A-B-C-A", "unused edges still touch C"],
    note: "Hierholzer never gets stuck before returning to start when all degrees are even.",
    message: "The first cycle may not use all edges. That is normal."
  },
  {
    title: "Find another cycle at C",
    phase: "Use a vertex on the tour with unused incident edges",
    activeEdges: ["CD", "DE", "EC"],
    chips: ["unused cycle: C-D-E-C", "splice point: C"],
    note: "If unused edges remain, choose a tour vertex incident to one of them and walk another closed cycle.",
    message: "This is the key action of Hierholzer: build cycles, then splice them."
  },
  {
    title: "Splice the cycles",
    phase: "Final Euler circuit",
    activeEdges: ["AB", "BC", "CD", "DE", "EC", "CA"],
    chips: ["A-B-C-D-E-C-A", "each edge exactly once"],
    note: "The final walk uses every edge exactly once and returns to the start.",
    message: "Runtime is O(n+m) if unused edges are tracked with adjacency iterators."
  },
  {
    title: "Directed Euler conditions",
    phase: "What to say if edges are directed",
    activeEdges: [],
    chips: ["circuit: in(v)=out(v) for all v", "open: one start out=in+1", "one end in=out+1", "connectedness still needed"],
    note: "For a circuit, all nonzero-degree vertices must be connected in the underlying graph and balanced by in-degree/out-degree. For an open trail, the start and end are the only allowed imbalances.",
    message: "Exam-safe shortcut: for an open directed trail, add a virtual edge from end to start; the result should satisfy the directed circuit condition."
  }
];

const directedLabSteps = {
  kosaraju: kosarajuSteps,
  tarjan: tarjanSteps,
  euler: eulerSteps
};

function renderDirectedBaseGraph(step) {
  if (step.condensation) {
    return renderControlledGraphSvg({
      className: "directed-lab-svg controlled-graph-svg",
      viewBox: "0 0 250 170",
      ariaLabel: "SCC condensation DAG",
      nodes: [
        { id: "abc", label: "{A,B,C}", x: 62, y: 84, shape: "rect", width: 88, height: 48, rx: 8, className: "exam-node condensed active" },
        { id: "de", label: "{D,E}", x: 188, y: 84, shape: "rect", width: 68, height: 48, rx: 8, className: "exam-node condensed active" }
      ],
      edges: [
        { from: "abc", to: "de", directed: true, arrowSize: 5.5, targetPad: 0.5, className: "exam-edge bridge active", arrowClassName: "exam-arrowhead active" }
      ]
    });
  }

  const nodes = directedLabNodes.map((node) => {
    const group = ["A", "B", "C"].includes(node.id) ? "abc" : "de";
    const active = step.highlight?.includes(group) || step.activeNodes?.includes(node.id);
    return { ...node, className: `exam-node ${group}${active ? " active" : ""}` };
  });
  const edges = directedLabEdges.map(([from, to, group, curve]) => {
    const reversed = step.reversed;
    const displayFrom = reversed ? to : from;
    const displayTo = reversed ? from : to;
    const active = step.highlight?.includes(group) || step.activeEdges?.includes(`${displayFrom}-${displayTo}`);
    return {
      from: displayFrom,
      to: displayTo,
      directed: true,
      curve,
      arrowSize: active ? 5.5 : 4.2,
      targetPad: 0.5,
      className: `exam-edge ${group}${active ? " active" : ""}`,
      arrowClassName: `exam-arrowhead ${group}${active ? " active" : ""}`
    };
  });

  return renderControlledGraphSvg({
    className: "directed-lab-svg controlled-graph-svg",
    viewBox: "0 0 250 170",
    ariaLabel: "Directed graph algorithm lab",
    nodes,
    edges
  });
}

function renderTarjanTable(step) {
  if (!step.table) return "";
  const rows = step.table.map(([vertex, index, low, stack]) => (
    `<tr><th>${vertex}</th><td>${index}</td><td>${low}</td><td>${stack}</td></tr>`
  )).join("");
  return `<table class="mini-state-table tarjan-table"><thead><tr><th>v</th><th>index</th><th>low</th><th>stack</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function renderEulerGraph(step) {
  const nodes = eulerNodes.map((node) => ({ ...node, className: "exam-node euler" }));
  const activeEdges = new Set(step.activeEdges || []);
  const edges = eulerEdges.map(([from, to, id], index) => ({
    from,
    to,
    directed: false,
    curve: id === "CA" || id === "EC" ? 10 : 0,
    className: `exam-edge euler${activeEdges.has(id) ? " active" : ""}`,
    arrowClassName: "",
    sourcePad: 2 + index * 0,
    targetPad: 2
  }));

  return renderControlledGraphSvg({
    className: "directed-lab-svg controlled-graph-svg",
    viewBox: "0 0 250 170",
    ariaLabel: "Euler and Hierholzer graph lab",
    nodes,
    edges
  });
}

function renderDirectedLabStep(mode, step, index) {
  const total = directedLabSteps[mode].length;
  const graph = mode === "euler" ? renderEulerGraph(step) : renderDirectedBaseGraph(step);
  const table = mode === "tarjan" ? renderTarjanTable(step) : "";
  const modeLabel = mode === "euler" ? "Euler / Hierholzer" : mode[0].toUpperCase() + mode.slice(1);
  return `
    <div class="graph-lab directed-lab">
      <div class="graph-lab-head">
        <span class="lab-step-pill">${modeLabel} ${index + 1}/${total}</span>
        <h4>${step.title}</h4>
        <p>${step.phase}</p>
      </div>
      <div class="directed-lab-layout">
        ${graph}
        <div class="directed-lab-side">
          <strong>Current exam state</strong>
          <div class="graph-lab-chip-row">
            ${(step.chips || []).map((chip) => `<span>${chip}</span>`).join("")}
          </div>
          ${table}
        </div>
      </div>
      <p class="step-note"><strong>Why:</strong> ${step.note}</p>
      <p class="muted-note">${step.message}</p>
    </div>
  `;
}

function renderDirectedLab() {
  const output = document.getElementById("directed-lab-output");
  if (!output) return;
  const steps = directedLabSteps[directedLabMode];
  output.innerHTML = renderDirectedLabStep(directedLabMode, steps[directedLabIndex], directedLabIndex);
}

function initDirectedGraphLab() {
  const output = document.getElementById("directed-lab-output");
  if (!output) return;

  document.querySelectorAll("[data-directed-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      directedLabMode = button.dataset.directedMode;
      directedLabIndex = 0;
      document.querySelectorAll("[data-directed-mode]").forEach((b) => b.classList.toggle("active", b === button));
      renderDirectedLab();
    });
  });

  const prev = document.querySelector("[data-directed-prev]");
  const next = document.querySelector("[data-directed-next]");
  if (prev) prev.addEventListener("click", () => {
    directedLabIndex = Math.max(0, directedLabIndex - 1);
    renderDirectedLab();
  });
  if (next) next.addEventListener("click", () => {
    directedLabIndex = Math.min(directedLabSteps[directedLabMode].length - 1, directedLabIndex + 1);
    renderDirectedLab();
  });
  renderDirectedLab();
}

function renderGraphPreview() {
  const output = document.getElementById("graph-preview-output");
  if (!output) return;
  if (graphPreviewMode === "uf") {
    output.innerHTML = renderUfPreview(ufVisualSteps[graphPreviewIndex], graphPreviewIndex);
  } else {
    output.innerHTML = renderSccPreview(sccVisualSteps[graphPreviewIndex], graphPreviewIndex);
  }
}

function initGraphPreview() {
  document.querySelectorAll("[data-preview-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      graphPreviewMode = button.dataset.previewTab;
      graphPreviewIndex = 0;
      document.querySelectorAll("[data-preview-tab]").forEach((b) => b.classList.toggle("active", b === button));
      renderGraphPreview();
    });
  });
  const prev = document.querySelector("[data-graph-prev]");
  const next = document.querySelector("[data-graph-next]");
  if (prev) prev.addEventListener("click", () => {
    graphPreviewIndex = Math.max(0, graphPreviewIndex - 1);
    renderGraphPreview();
  });
  if (next) next.addEventListener("click", () => {
    const steps = graphPreviewMode === "uf" ? ufVisualSteps : sccVisualSteps;
    graphPreviewIndex = Math.min(steps.length - 1, graphPreviewIndex + 1);
    renderGraphPreview();
  });
  renderGraphPreview();
}

function initTreeTabs() {
  const output = document.getElementById("tree-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = treeData[key];
    document.querySelectorAll("[data-tree-tabs] button").forEach((button) => {
      button.classList.toggle("active", button.dataset.tree === key);
    });
  };
  document.querySelectorAll("[data-tree-tabs] button").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.tree));
  });
  render("bst");
}

function renderSimpleTreeSvg(tree, options = {}) {
  const nodes = tree.nodes || [];
  const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));
  const nodeRadius = options.nodeRadius || 7;
  const edgeLines = (tree.edges || []).map(([from, to]) => {
    const a = nodeById[from];
    const b = nodeById[to];
    if (!a || !b) return "";
    return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" class="tree-svg-edge"></line>`;
  }).join("");
  const nodeCircles = nodes.map((node) => `
    <g class="tree-svg-node ${node.color ? `is-${node.color}` : ""}" transform="translate(${node.x} ${node.y})">
      <circle r="${nodeRadius}"></circle>
      <text y="0.6">${escapeFeedbackText(node.id)}</text>
    </g>
  `).join("");
  return `
    <svg class="tree-svg" viewBox="0 0 100 100" role="img" aria-label="${escapeFeedbackText(options.label || "Tree shape")}">
      ${edgeLines}
      ${nodeCircles}
    </svg>
  `;
}

function initAvlRotationDrill() {
  const root = document.querySelector("[data-avl-rotation-drill]");
  if (!root) return;

  let index = 0;
  let score = 0;
  let answered = false;
  const before = root.querySelector("[data-avl-before]");
  const after = root.querySelector("[data-avl-after]");
  const title = root.querySelector("[data-avl-drill-title]");
  const count = root.querySelector("[data-avl-drill-count]");
  const feedback = root.querySelector("[data-avl-feedback]");
  const choices = [...root.querySelectorAll("[data-avl-answer]")];
  const next = root.querySelector("[data-avl-next]");
  const reset = root.querySelector("[data-avl-reset]");

  const render = () => {
    const item = avlRotationDrillCases[index];
    answered = false;
    if (title) title.textContent = item.title;
    if (count) count.textContent = `${index + 1} / ${avlRotationDrillCases.length}`;
    if (before) before.innerHTML = renderSimpleTreeSvg(item.before, { label: `${item.answer} imbalance before repair` });
    if (after) after.innerHTML = `<div class="tree-drill-placeholder">Pick a rotation first.</div>`;
    if (feedback) {
      feedback.className = "tree-feedback";
      feedback.textContent = "Choose the rotation that repairs the imbalance.";
    }
    choices.forEach((button) => {
      button.disabled = false;
      button.classList.remove("is-correct", "is-wrong");
    });
  };

  const answer = (button) => {
    if (answered) return;
    const item = avlRotationDrillCases[index];
    const chosen = button.dataset.avlAnswer;
    const correct = chosen === item.answer;
    answered = true;
    if (correct) score += 1;
    choices.forEach((choice) => {
      choice.disabled = true;
      choice.classList.toggle("is-correct", choice.dataset.avlAnswer === item.answer);
      choice.classList.toggle("is-wrong", choice === button && !correct);
    });
    if (after) after.innerHTML = renderSimpleTreeSvg(item.after, { label: `${item.answer} imbalance after repair` });
    if (feedback) {
      feedback.className = `tree-feedback ${correct ? "is-correct" : "is-wrong"}`;
      feedback.innerHTML = `<strong>${correct ? "Correct." : "Not quite."}</strong> ${escapeFeedbackText(item.fix)} <span>${escapeFeedbackText(item.why)}</span>`;
    }
  };

  choices.forEach((button) => {
    button.addEventListener("click", () => answer(button));
  });
  if (next) {
    next.addEventListener("click", () => {
      if (index >= avlRotationDrillCases.length - 1) {
        if (feedback) {
          feedback.className = "tree-feedback is-correct";
          feedback.innerHTML = `<strong>Round complete.</strong> Score: ${score} / ${avlRotationDrillCases.length}. Restart if you want another pass.`;
        }
        return;
      }
      index += 1;
      render();
    });
  }
  if (reset) {
    reset.addEventListener("click", () => {
      index = 0;
      score = 0;
      render();
    });
  }
  render();
}

function renderBtreeNode(keys) {
  return `<div class="btree-node" aria-label="B-tree node with keys ${keys.join(", ")}">${keys.map((key) => `<span>${key}</span>`).join("")}</div>`;
}

function initBtreeSplitDrill() {
  const root = document.querySelector("[data-btree-split-drill]");
  if (!root) return;

  let index = 0;
  let score = 0;
  let answered = false;
  const title = root.querySelector("[data-btree-title]");
  const count = root.querySelector("[data-btree-count]");
  const node = root.querySelector("[data-btree-node]");
  const choices = root.querySelector("[data-btree-choices]");
  const result = root.querySelector("[data-btree-result]");
  const feedback = root.querySelector("[data-btree-feedback]");
  const next = root.querySelector("[data-btree-next]");
  const reset = root.querySelector("[data-btree-reset]");

  const render = () => {
    const item = btreeSplitDrillCases[index];
    answered = false;
    if (title) title.textContent = item.title;
    if (count) count.textContent = `${index + 1} / ${btreeSplitDrillCases.length}`;
    if (node) node.innerHTML = renderBtreeNode(item.keys);
    if (choices) {
      choices.innerHTML = item.keys.map((key) => `<button type="button" class="tree-choice" data-btree-answer="${key}">Promote ${key}</button>`).join("");
      choices.querySelectorAll("[data-btree-answer]").forEach((button) => {
        button.addEventListener("click", () => answer(button));
      });
    }
    if (result) result.innerHTML = `<div class="tree-drill-placeholder">The split appears after you choose.</div>`;
    if (feedback) {
      feedback.className = "tree-feedback";
      feedback.textContent = "Pick the key that should be promoted to the parent.";
    }
  };

  const answer = (button) => {
    if (answered) return;
    const item = btreeSplitDrillCases[index];
    const chosen = Number(button.dataset.btreeAnswer);
    const correct = chosen === item.answer;
    answered = true;
    if (correct) score += 1;
    root.querySelectorAll("[data-btree-answer]").forEach((choice) => {
      const isAnswer = Number(choice.dataset.btreeAnswer) === item.answer;
      choice.disabled = true;
      choice.classList.toggle("is-correct", isAnswer);
      choice.classList.toggle("is-wrong", choice === button && !correct);
    });
    if (result) {
      result.innerHTML = `
        <div class="btree-split-visual">
          <div>
            <span class="tree-drill-label">Left child</span>
            ${renderBtreeNode(item.left)}
          </div>
          <div class="btree-promoted">
            <span class="tree-drill-label">Promote</span>
            <strong>${item.answer}</strong>
          </div>
          <div>
            <span class="tree-drill-label">Right child</span>
            ${renderBtreeNode(item.right)}
          </div>
        </div>
      `;
    }
    if (feedback) {
      feedback.className = `tree-feedback ${correct ? "is-correct" : "is-wrong"}`;
      feedback.innerHTML = `<strong>${correct ? "Correct." : "Not quite."}</strong> The middle key ${item.answer} goes up. Smaller keys stay in the left child; larger keys stay in the right child.`;
    }
  };

  if (next) {
    next.addEventListener("click", () => {
      if (index >= btreeSplitDrillCases.length - 1) {
        if (feedback) {
          feedback.className = "tree-feedback is-correct";
          feedback.innerHTML = `<strong>Round complete.</strong> Score: ${score} / ${btreeSplitDrillCases.length}. Restart if you want another pass.`;
        }
        return;
      }
      index += 1;
      render();
    });
  }
  if (reset) {
    reset.addEventListener("click", () => {
      index = 0;
      score = 0;
      render();
    });
  }
  render();
}

function initRbRepairDrill() {
  const root = document.querySelector("[data-rb-repair-drill]");
  if (!root) return;

  let index = 0;
  let score = 0;
  let answered = false;
  const title = root.querySelector("[data-rb-title]");
  const count = root.querySelector("[data-rb-count]");
  const caseBox = root.querySelector("[data-rb-case]");
  const choices = [...root.querySelectorAll("[data-rb-answer]")];
  const feedback = root.querySelector("[data-rb-feedback]");
  const next = root.querySelector("[data-rb-next]");
  const reset = root.querySelector("[data-rb-reset]");

  const render = () => {
    const item = rbRepairDrillCases[index];
    answered = false;
    if (title) title.textContent = item.title;
    if (count) count.textContent = `${index + 1} / ${rbRepairDrillCases.length}`;
    if (caseBox) {
      caseBox.innerHTML = `
        <div class="rb-node-row">
          <span class="rb-node rb-black">G</span>
          <span class="rb-edge-label">parent/uncle relation</span>
          <span class="rb-node rb-red">P</span>
          <span class="rb-node rb-red">N</span>
        </div>
        <p>${escapeFeedbackText(item.caseText)}</p>
      `;
    }
    if (feedback) {
      feedback.className = "tree-feedback";
      feedback.textContent = "Pick the repair family.";
    }
    choices.forEach((button) => {
      button.disabled = false;
      button.classList.remove("is-correct", "is-wrong");
    });
  };

  const answer = (button) => {
    if (answered) return;
    const item = rbRepairDrillCases[index];
    const correct = button.dataset.rbAnswer === item.answer;
    answered = true;
    if (correct) score += 1;
    choices.forEach((choice) => {
      choice.disabled = true;
      choice.classList.toggle("is-correct", choice.dataset.rbAnswer === item.answer);
      choice.classList.toggle("is-wrong", choice === button && !correct);
    });
    if (feedback) {
      feedback.className = `tree-feedback ${correct ? "is-correct" : "is-wrong"}`;
      feedback.innerHTML = `<strong>${correct ? "Correct." : "Not quite."}</strong> ${escapeFeedbackText(item.fix)} <span>${escapeFeedbackText(item.why)}</span>`;
    }
  };

  choices.forEach((button) => {
    button.addEventListener("click", () => answer(button));
  });
  if (next) {
    next.addEventListener("click", () => {
      if (index >= rbRepairDrillCases.length - 1) {
        if (feedback) {
          feedback.className = "tree-feedback is-correct";
          feedback.innerHTML = `<strong>Round complete.</strong> Score: ${score} / ${rbRepairDrillCases.length}. Restart if you want another pass.`;
        }
        return;
      }
      index += 1;
      render();
    });
  }
  if (reset) {
    reset.addEventListener("click", () => {
      index = 0;
      score = 0;
      render();
    });
  }
  render();
}

function treeNodeMap(nodes) {
  return Object.fromEntries((nodes || []).map((node) => [node.id, { ...node }]));
}

function treePointDistance(a, b) {
  if (!a || !b) return Number.POSITIVE_INFINITY;
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function closestTreeTarget(point, targets) {
  return (targets || []).reduce((best, target) => {
    const distance = treePointDistance(point, target);
    return !best || distance < best.distance ? { target, distance } : best;
  }, null);
}

function treeSvgPoint(svg, event) {
  const matrix = svg?.getScreenCTM?.();
  if (!svg || !matrix) return null;
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(matrix.inverse());
}

function initTreeOperationLab() {
  const root = document.querySelector("[data-tree-operation-lab]");
  if (!root) return;

  const state = {
    mode: "avl",
    index: { avl: 0, rb: 0, btree: 0 },
    score: { avl: 0, rb: 0, btree: 0 },
    selectedNode: null,
    activeNode: null,
    dragOffset: { x: 0, y: 0 },
    dragStart: null,
    dragMoved: false,
    nodes: {},
    showGuide: false,
    validationMisses: [],
    btreeChoice: null,
    answered: false
  };

  const dataForMode = {
    avl: avlRotationDrillCases,
    rb: rbInsertionDragCases,
    btree: btreeSplitDrillCases
  };

  const title = root.querySelector("[data-tree-op-title]");
  const kicker = root.querySelector("[data-tree-op-kicker]");
  const count = root.querySelector("[data-tree-op-count]");
  const instruction = root.querySelector("[data-tree-op-instruction]");
  const rotationArea = root.querySelector("[data-tree-op-rotation-area]");
  const btreeArea = root.querySelector("[data-tree-op-btree-area]");
  const svg = root.querySelector("[data-tree-edit-svg]");
  const targetLayer = root.querySelector("[data-tree-target-layer]");
  const edgeLayer = root.querySelector("[data-tree-edge-layer]");
  const nodeLayer = root.querySelector("[data-tree-node-layer]");
  const guideToggle = root.querySelector("[data-tree-guide-toggle]");
  const colorTools = root.querySelector("[data-tree-color-tools]");
  const feedback = root.querySelector("[data-tree-op-feedback]");
  const btreeNode = root.querySelector("[data-tree-op-btree-node]");
  const btreeChoices = root.querySelector("[data-tree-op-btree-choices]");
  const btreeResult = root.querySelector("[data-tree-op-btree-result]");
  const validate = root.querySelector("[data-tree-op-validate]");
  const reset = root.querySelector("[data-tree-op-reset]");
  const next = root.querySelector("[data-tree-op-next]");

  const currentItems = () => dataForMode[state.mode] || [];
  const currentItem = () => currentItems()[state.index[state.mode]];

  const setFeedback = (kind, html) => {
    if (!feedback) return;
    feedback.className = `tree-feedback ${kind ? `is-${kind}` : ""}`;
    feedback.innerHTML = html;
  };

  const svgElement = (name, attrs = {}) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  };

  const drawTreeLine = (layer, from, to, className) => {
    if (!layer || !from || !to) return;
    layer.appendChild(svgElement("line", {
      class: className,
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y
    }));
  };

  const isNodeWrong = (id) => state.validationMisses.includes(id);

  const renderTreeCanvas = () => {
    const item = currentItem();
    if (!item || !targetLayer || !edgeLayer || !nodeLayer) return;
    const targets = treeNodeMap(item.after.nodes);
    targetLayer.innerHTML = "";
    edgeLayer.innerHTML = "";
    nodeLayer.innerHTML = "";

    if (state.showGuide) {
      item.after.edges.forEach(([from, to]) => drawTreeLine(targetLayer, targets[from], targets[to], "tree-target-edge"));
      item.after.nodes.forEach((node) => {
        const target = svgElement("g", { class: "tree-target-node", transform: `translate(${node.x} ${node.y})` });
        target.appendChild(svgElement("circle", { r: 6.9 }));
        const label = svgElement("text", { y: 0.5 });
        label.textContent = node.id;
        target.appendChild(label);
        targetLayer.appendChild(target);
      });
    }

    item.after.edges.forEach(([from, to]) => drawTreeLine(edgeLayer, state.nodes[from], state.nodes[to], "tree-live-edge"));
    item.before.nodes.forEach((sourceNode) => {
      const node = state.nodes[sourceNode.id];
      if (!node) return;
      const group = svgElement("g", {
        class: [
          "tree-edit-node",
          node.color ? `is-${node.color}` : "",
          state.selectedNode === node.id ? "is-selected" : "",
          state.activeNode === node.id ? "is-dragging" : "",
          isNodeWrong(node.id) ? "is-wrong" : ""
        ].filter(Boolean).join(" "),
        transform: `translate(${node.x} ${node.y})`,
        "data-tree-node-id": node.id,
        tabindex: "0",
        role: "button",
        "aria-label": `Tree node ${node.id}`
      });
      group.appendChild(svgElement("circle", { class: "tree-edit-hit", r: 9.8 }));
      group.appendChild(svgElement("circle", { r: 6.8 }));
      const text = svgElement("text", { y: 0.6 });
      text.textContent = node.id;
      group.appendChild(text);
      group.addEventListener("pointerdown", (event) => {
        if (state.mode === "btree") return;
        const point = treeSvgPoint(svg, event);
        if (!point) return;
        event.preventDefault();
        state.activeNode = node.id;
        state.selectedNode = node.id;
        state.validationMisses = [];
        state.dragStart = { x: point.x, y: point.y };
        state.dragMoved = false;
        state.dragOffset = { x: node.x - point.x, y: node.y - point.y };
        svg?.setPointerCapture?.(event.pointerId);
      });
      group.addEventListener("click", () => {
        state.selectedNode = node.id;
        renderTreeCanvas();
      });
      nodeLayer.appendChild(group);
    });
  };

  const resetTreeState = () => {
    const item = currentItem();
    state.nodes = treeNodeMap(item?.before?.nodes || []);
    state.selectedNode = null;
    state.activeNode = null;
    state.dragStart = null;
    state.dragMoved = false;
    state.showGuide = false;
    state.validationMisses = [];
  };

  const snapActiveNode = () => {
    if (!state.activeNode || !state.dragMoved) return;
    const node = state.nodes[state.activeNode];
    const nearest = closestTreeTarget(node, currentItem()?.after?.nodes || []);
    if (nearest && nearest.distance <= 12) {
      node.x = nearest.target.x;
      node.y = nearest.target.y;
    }
  };

  const finishDrag = (event) => {
    if (!state.activeNode) return;
    snapActiveNode();
    state.activeNode = null;
    state.dragStart = null;
    state.dragMoved = false;
    if (event?.pointerId !== undefined) svg?.releasePointerCapture?.(event.pointerId);
    renderTreeCanvas();
  };

  svg?.addEventListener("pointermove", (event) => {
    if (!state.activeNode) return;
    const point = treeSvgPoint(svg, event);
    const node = state.nodes[state.activeNode];
    if (!point || !node) return;
    event.preventDefault();
    if (state.dragStart && treePointDistance(point, state.dragStart) > 1.5) {
      state.dragMoved = true;
    }
    node.x = Math.max(8, Math.min(92, point.x + state.dragOffset.x));
    node.y = Math.max(10, Math.min(90, point.y + state.dragOffset.y));
    renderTreeCanvas();
  });

  svg?.addEventListener("pointerup", finishDrag);
  svg?.addEventListener("pointercancel", finishDrag);

  const describeCanvasStart = () => {
    return state.mode === "rb"
      ? "Drag the actual nodes into the repaired red-black shape, then select nodes and set final colors. Faint circles show where nodes should end up."
      : "Drag the actual nodes into the repaired AVL shape. Nodes snap to target circles, and edges stay connected while you move them.";
  };

  const renderRotationMode = () => {
    resetTreeState();
    renderTreeCanvas();
    if (guideToggle) {
      guideToggle.hidden = false;
      guideToggle.setAttribute("aria-pressed", "false");
      guideToggle.textContent = "Show guide";
    }
    if (colorTools) colorTools.hidden = state.mode !== "rb";
    if (instruction) instruction.textContent = describeCanvasStart();
    setFeedback("", "Build the repaired tree, then validate.");
  };

  const renderBtreeMode = () => {
    const item = currentItem();
    state.btreeChoice = null;
    state.showGuide = false;
    if (guideToggle) guideToggle.hidden = true;
    if (btreeNode) btreeNode.innerHTML = renderBtreeNode(item.keys);
    if (btreeChoices) {
      btreeChoices.innerHTML = item.keys.map((key) => `<button type="button" class="tree-choice" data-tree-op-btree-answer="${key}">Promote ${key}</button>`).join("");
      btreeChoices.querySelectorAll("[data-tree-op-btree-answer]").forEach((button) => {
        button.addEventListener("click", () => {
          state.btreeChoice = Number(button.dataset.treeOpBtreeAnswer);
          btreeChoices.querySelectorAll("[data-tree-op-btree-answer]").forEach((choice) => choice.classList.toggle("is-active", choice === button));
          setFeedback("", `Selected ${state.btreeChoice}. Validate when ready.`);
        });
      });
    }
    if (btreeResult) btreeResult.innerHTML = `<div class="tree-drill-placeholder">Choose the promoted middle key, then validate.</div>`;
    if (instruction) instruction.textContent = "Split the overflowing node by promoting the middle key. This is the B-tree insertion step exam reports explicitly mention.";
    setFeedback("", "Pick the promoted key, then validate.");
  };

  const render = () => {
    const items = currentItems();
    const item = currentItem();
    state.answered = false;
    if (title) title.textContent = item.title;
    if (kicker) kicker.textContent = state.mode === "btree" ? "Overflow" : state.mode.toUpperCase();
    if (count) count.textContent = `${state.index[state.mode] + 1} / ${items.length}`;
    root.querySelectorAll("[data-tree-op-mode]").forEach((button) => {
      button.classList.toggle("active", button.dataset.treeOpMode === state.mode);
    });
    if (rotationArea) rotationArea.hidden = state.mode === "btree";
    if (btreeArea) btreeArea.hidden = state.mode !== "btree";
    state.selectedNode = null;
    if (state.mode === "btree") renderBtreeMode();
    else renderRotationMode();
  };

  const validateRotation = () => {
    const item = currentItem();
    const misses = [];
    const wrongNodes = new Set();
    item.after.nodes.forEach((expectedNode) => {
      const node = state.nodes[expectedNode.id];
      if (!node) {
        misses.push(`${expectedNode.id}: missing from canvas`);
        wrongNodes.add(expectedNode.id);
        return;
      }
      if (treePointDistance(node, expectedNode) > 4.5) {
        misses.push(`${expectedNode.id}: drag it to its faint target circle`);
        wrongNodes.add(expectedNode.id);
      }
      if (state.mode === "rb" && expectedNode.color && node.color !== expectedNode.color) {
        misses.push(`${expectedNode.id}: should be ${expectedNode.color}`);
        wrongNodes.add(expectedNode.id);
      }
    });
    state.validationMisses = [...wrongNodes];
    renderTreeCanvas();
    if (misses.length) {
      setFeedback("wrong", `<strong>Not yet.</strong> ${escapeFeedbackText(misses.join("; "))}. <span>${escapeFeedbackText(item.why)}</span>`);
      return;
    }
    if (!state.answered) state.score[state.mode] += 1;
    state.answered = true;
    setFeedback("correct", `<strong>Correct.</strong> ${escapeFeedbackText(item.fix)} <span>${escapeFeedbackText(item.why)}</span>`);
  };

  const validateBtree = () => {
    const item = currentItem();
    const correct = state.btreeChoice === item.answer;
    btreeChoices?.querySelectorAll("[data-tree-op-btree-answer]").forEach((button) => {
      const isAnswer = Number(button.dataset.treeOpBtreeAnswer) === item.answer;
      button.classList.toggle("is-correct", isAnswer);
      button.classList.toggle("is-wrong", button.classList.contains("is-active") && !isAnswer);
    });
    if (btreeResult) {
      btreeResult.innerHTML = `
        <div class="btree-split-visual">
          <div><span class="tree-drill-label">Left child</span>${renderBtreeNode(item.left)}</div>
          <div class="btree-promoted"><span class="tree-drill-label">Promote</span><strong>${item.answer}</strong></div>
          <div><span class="tree-drill-label">Right child</span>${renderBtreeNode(item.right)}</div>
        </div>
      `;
    }
    if (!correct) {
      setFeedback("wrong", `<strong>Not quite.</strong> The promoted key is the middle key: ${item.answer}.`);
      return;
    }
    if (!state.answered) state.score.btree += 1;
    state.answered = true;
    setFeedback("correct", `<strong>Correct.</strong> Promote ${item.answer}; smaller keys stay left, larger keys stay right.`);
  };

  root.querySelectorAll("[data-tree-op-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.treeOpMode;
      render();
    });
  });

  guideToggle?.addEventListener("click", () => {
    state.showGuide = !state.showGuide;
    guideToggle.setAttribute("aria-pressed", String(state.showGuide));
    guideToggle.textContent = state.showGuide ? "Hide guide" : "Show guide";
    renderTreeCanvas();
  });

  colorTools?.querySelectorAll("[data-tree-set-color]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!state.selectedNode || state.mode !== "rb") return;
      const color = button.dataset.treeSetColor;
      if (state.nodes[state.selectedNode]) {
        state.nodes[state.selectedNode].color = color;
        state.validationMisses = state.validationMisses.filter((id) => id !== state.selectedNode);
        renderTreeCanvas();
        setFeedback("", `${state.selectedNode} set to ${color}. Validate when the whole tree is repaired.`);
      }
    });
  });

  validate?.addEventListener("click", () => {
    if (state.mode === "btree") validateBtree();
    else validateRotation();
  });

  reset?.addEventListener("click", () => render());

  next?.addEventListener("click", () => {
    const items = currentItems();
    if (state.index[state.mode] >= items.length - 1) {
      setFeedback("correct", `<strong>Round complete.</strong> Score: ${state.score[state.mode]} / ${items.length}. Switch mode or restart this mode for another pass.`);
      return;
    }
    state.index[state.mode] += 1;
    render();
  });

  render();
}

function initTextPreviews() {
  const kmp = document.getElementById("kmp-output");
  if (kmp) {
    const pattern = "ABABAC";
    const pi = [0, 0, 1, 2, 3, 0];
    const letters = pattern.split("").map((ch) => `<th>${ch}</th>`).join("");
    const values = pi.map((n) => `<td>${n}</td>`).join("");
    kmp.innerHTML = `<p>Pattern <code>${pattern}</code>. The prefix table stores the length of the longest proper prefix that is also a suffix.</p><table class="matrix-table"><tr>${letters}</tr><tr>${values}</tr></table><p>On mismatch, KMP jumps using this table instead of restarting from zero.</p><p class="step-note"><strong>Why:</strong> the table tells us the longest prefix we can keep after a mismatch.</p>`;
  }

  const edit = document.getElementById("edit-output");
  if (edit) {
    const rows = [
      ["", "", "c", "a", "t"],
      ["", 0, 1, 2, 3],
      ["c", 1, 0, 1, 2],
      ["u", 2, 1, 1, 2],
      ["t", 3, 2, 2, 1]
    ];
    edit.innerHTML = `<p>Levenshtein example: <code>cut</code> to <code>cat</code>. The answer is 1 substitution.</p><table class="matrix-table">${rows.map((row, i) => `<tr>${row.map((cell, j) => i === 0 || j === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`).join("")}</tr>`).join("")}</table><p class="step-note"><strong>Why:</strong> each DP cell asks for the cheapest edit path to this prefix pair.</p>`;
  }
}

const talProofData = {
  invariant: "<h4>Invariant pattern</h4><ol><li><strong>Claim:</strong> after k iterations, the processed prefix has property P.</li><li><strong>Initialization:</strong> before the loop, the empty or base prefix satisfies P.</li><li><strong>Maintenance:</strong> one iteration extends the processed part while preserving P.</li><li><strong>Termination:</strong> when the guard is false, P covers the whole required object, so the postcondition follows.</li></ol>",
  variant: "<h4>Variant pattern</h4><p>Choose a non-negative quantity that measures remaining work, for example <code>n - i</code>, queue size, or interval length. Prove it strictly decreases every iteration and can never decrease forever.</p>",
  total: "<h4>Total correctness answer</h4><p>First prove partial correctness with the invariant. Then prove termination with the variant. Together they say the algorithm always halts and the returned answer satisfies the specification.</p>"
};

const tmSteps = [
  { state: "q0", head: 0, tape: ["1", "1", "1", "_"], text: "Start on unary input 111. This toy machine toggles parity while scanning right." },
  { state: "odd", head: 1, tape: ["1", "1", "1", "_"], text: "Read a 1, move right, parity becomes odd." },
  { state: "even", head: 2, tape: ["1", "1", "1", "_"], text: "Read another 1, move right, parity becomes even." },
  { state: "odd", head: 3, tape: ["1", "1", "1", "_"], text: "Read the third 1, parity becomes odd." },
  { state: "accept", head: 3, tape: ["1", "1", "1", "_"], text: "On blank, accept because the number of 1s is odd. A DTM has exactly this one path." }
];

const reductionData = {
  direction: "<h4>Hardness direction</h4><p>To prove target <code>B</code> is hard, transform a known hard problem <code>A</code> into <code>B</code>: <code>A <=p B</code>. Then an efficient solver for B would give an efficient solver for A.</p>",
  membership: "<h4>Membership in NP</h4><p>Give a certificate and verifier. For CLIQUE, the certificate is the chosen vertex set; the verifier checks its size and all pairwise edges in polynomial time.</p>",
  cook: "<h4>Cook-Levin memory hook</h4><p>A nondeterministic polynomial-time computation becomes a polynomial-size tableau. SAT variables describe each cell/time/state fact; clauses enforce legal local transitions and acceptance.</p>",
  practical: "<h4>When exact is hopeless</h4><p>For NP-hard optimization, name the practical families: branch and bound, local search, greedy or randomized heuristics, and approximation algorithms with a ratio.</p>"
};

const savitchSteps = [
  "<p><strong>1. Configuration graph:</strong> vertices are complete machine snapshots. Edges are valid one-step moves.</p>",
  "<p><strong>2. Nondeterministic acceptance:</strong> ask whether some path reaches an accepting configuration.</p>",
  "<p><strong>3. Deterministic recursion:</strong> <code>Reach(u,v,t)</code> tries every midpoint <code>m</code> and asks for two paths of length about <code>t/2</code>.</p>",
  "<p><strong>4. Space accounting:</strong> recursion depth is <code>O(log t)</code>; each level stores one configuration of size <code>O(s)</code>.</p>",
  "<p><strong>5. Result:</strong> because <code>t</code> can be exponential in <code>s</code>, <code>log t = O(s)</code>, so deterministic space is <code>O(s^2)</code>.</p>"
];

const randomizedData = {
  rp: "<h4>RP</h4><p>One-sided error for yes-instances. If <code>x in L</code>, accept with probability at least 1/2. If <code>x notin L</code>, accept with probability 0.</p><p><strong>Memory hook:</strong> positive answer is trustworthy; negative answer might be unlucky.</p>",
  corp: "<h4>co-RP</h4><p>One-sided error in the opposite direction. Yes-instances are always accepted; no-instances may be falsely accepted with probability at most 1/2.</p>",
  zpp: "<h4>ZPP</h4><p>Zero-error expected polynomial time. Equivalent to <code>RP intersection co-RP</code>, or an algorithm that either answers correctly or says \"do not know\" and retries.</p>",
  bpp: "<h4>BPP</h4><p>Two-sided bounded error. The answer is correct with probability at least 2/3; repeat independently and take majority to amplify confidence.</p>"
};

const decidabilitySteps = [
  "<p><strong>Decidable:</strong> a decider always halts and answers yes/no.</p>",
  "<p><strong>RE:</strong> a recognizer eventually accepts yes-instances, but may loop on no-instances.</p>",
  "<p><strong>Universal language:</strong> simulate <code>M(w)</code>. If M accepts, accept. This recognizes <code>L_U</code>.</p>",
  "<p><strong>Why undecidable:</strong> a decider for universal acceptance would let us build a self-referential contradiction.</p>",
  "<p><strong>Reduction proof template:</strong> assume decider for new problem B, use it to decide known-undecidable A, contradiction.</p>"
];

let tmIndex = 0;
let savitchIndex = 0;
let decidabilityIndex = 0;

function initTalProofTabs() {
  const output = document.getElementById("tal-proof-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = talProofData[key];
    document.querySelectorAll("[data-tal-proof] button").forEach((button) => {
      button.classList.toggle("active", button.dataset.proof === key);
    });
  };
  document.querySelectorAll("[data-tal-proof] button").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.proof));
  });
  render("invariant");
}

function renderTm() {
  const tape = document.getElementById("tm-tape");
  const text = document.getElementById("tm-step-text");
  const state = document.getElementById("tm-state");
  if (!tape || !text || !state) return;
  const step = tmSteps[tmIndex];
  state.textContent = step.state;
  tape.innerHTML = step.tape.map((symbol, index) => `<span class="tape-cell ${index === step.head ? "head" : ""}">${symbol}</span>`).join("");
  text.textContent = step.text;
}

function initTmStepper() {
  const next = document.querySelector("[data-tm-next]");
  const reset = document.querySelector("[data-tm-reset]");
  if (!next && !reset) return;
  if (next) next.addEventListener("click", () => {
    tmIndex = Math.min(tmSteps.length - 1, tmIndex + 1);
    renderTm();
  });
  if (reset) reset.addEventListener("click", () => {
    tmIndex = 0;
    renderTm();
  });
  renderTm();
}

function initReductionTabs() {
  const output = document.getElementById("reduction-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = reductionData[key];
    document.querySelectorAll("[data-reduction-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.reductionTab === key);
    });
  };
  document.querySelectorAll("[data-reduction-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.reductionTab));
  });
  render("direction");
}

function renderSavitch() {
  const output = document.getElementById("savitch-output");
  if (!output) return;
  output.innerHTML = savitchSteps[savitchIndex];
}

function initSavitchStepper() {
  const prev = document.querySelector("[data-savitch-prev]");
  const next = document.querySelector("[data-savitch-next]");
  if (!prev && !next) return;
  if (prev) prev.addEventListener("click", () => {
    savitchIndex = Math.max(0, savitchIndex - 1);
    renderSavitch();
  });
  if (next) next.addEventListener("click", () => {
    savitchIndex = Math.min(savitchSteps.length - 1, savitchIndex + 1);
    renderSavitch();
  });
  renderSavitch();
}

function initRandomizedTabs() {
  const output = document.getElementById("randomized-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = randomizedData[key];
    document.querySelectorAll("[data-random-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.randomTab === key);
    });
  };
  document.querySelectorAll("[data-random-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.randomTab));
  });
  render("rp");
}

function renderDecidability() {
  const output = document.getElementById("decidability-output");
  if (!output) return;
  output.innerHTML = decidabilitySteps[decidabilityIndex];
}

function initDecidabilityStepper() {
  const prev = document.querySelector("[data-decidability-prev]");
  const next = document.querySelector("[data-decidability-next]");
  if (!prev && !next) return;
  if (prev) prev.addEventListener("click", () => {
    decidabilityIndex = Math.max(0, decidabilityIndex - 1);
    renderDecidability();
  });
  if (next) next.addEventListener("click", () => {
    decidabilityIndex = Math.min(decidabilitySteps.length - 1, decidabilityIndex + 1);
    renderDecidability();
  });
  renderDecidability();
}

const koIlpData = {
  sp: "<h4>Shortest path ILP</h4><p>Use binary edge variables <code>x_e</code>. Minimize total cost and enforce one unit of flow from <code>s</code> to <code>t</code>.</p><pre>out(v) - in(v) = 1  for s\nout(v) - in(v) = -1 for t\nout(v) - in(v) = 0  otherwise</pre><p>The LP relaxation is integral for the standard network matrix.</p>",
  tsp: "<h4>TSP ILP</h4><p>Degree constraints give every city degree 2. Subtour elimination constraints prevent several small cycles.</p><pre>sum_j x_ij = 2\nsum_{e in E(S)} x_e <= |S| - 1</pre>",
  bb: "<h4>Branch and bound</h4><p>For minimization, solve a relaxation to get a lower bound. Prune if infeasible, if the bound is already worse than the best feasible solution, or if the relaxed solution is integral.</p>",
  cuts: "<h4>Cutting planes and branch-and-cut</h4><p>Cutting planes add valid inequalities that remove the current fractional LP solution without removing any feasible integer solution. Branch-and-cut uses these cuts dynamically inside the branch-and-bound tree.</p>",
  tu: "<h4>Polynomial special cases</h4><p>If the constraint matrix is totally unimodular and the right-hand side is integral, LP vertices are integral. That covers many flow, matching, assignment, and shortest-path formulations.</p>"
};

const koShortestSteps = [
  "<p><strong>Start:</strong> set <code>d[s]=0</code>, all other distances infinity. Predecessors are empty.</p>",
  "<p><strong>Relax edge s->a cost 4:</strong> infinity becomes 4. Store predecessor <code>s</code>.</p>",
  "<p><strong>Relax edge s->b cost 1:</strong> infinity becomes 1. The tentative best route to b is direct.</p>",
  "<p><strong>Relax edge b->a cost 2:</strong> d[a] improves from 4 to 3 through b.</p>",
  "<p><strong>Dijkstra rule:</strong> when weights are nonnegative, the extracted minimum is final. Bellman-Ford instead repeats relaxation n-1 times to handle negative edges.</p>"
];

const koFlowSteps = [
  "<p><strong>Zero flow:</strong> every forward edge has residual capacity equal to its capacity. Backward residual edges have capacity 0.</p>",
  "<p><strong>Find augmenting path:</strong> choose an s-t residual path. The bottleneck is the smallest residual capacity on it.</p>",
  "<p><strong>Augment:</strong> add the bottleneck on forward edges and subtract it on backward edges. Backward edges mean undoing earlier choices is allowed.</p>",
  "<p><strong>Stop condition:</strong> when t is unreachable from s in the residual graph, there is no augmenting path.</p>",
  "<p><strong>Certificate:</strong> the residual-reachable set from s defines a minimum cut, so the current flow is maximum.</p>"
];

const koKnapsackData = {
  fractional: "<h4>Fractional greedy</h4><p>Sort by ratio <code>p_i / w_i</code>. Take as much as possible from the best ratio item, then the next. This is exact only when fractions are allowed.</p>",
  weight: "<h4>0/1 DP by weight</h4><pre>DP[i][w] = max(DP[i-1][w], DP[i-1][w-w_i] + p_i)</pre><p>Runtime <code>O(nW)</code>. Pseudo-polynomial because W is numeric.</p>",
  profit: "<h4>DP by profit</h4><p><code>DP[i][p]</code> is the minimum weight needed to achieve profit p. Pick the largest p with weight at most W.</p>",
  fptas: "<h4>FPTAS</h4><p>Scale profits by <code>K = epsilon p_max / n</code>, floor them, and run profit DP. The smaller epsilon is, the slower and more accurate the scheme becomes.</p>"
};

const koTspSteps = [
  "<p><strong>Metric setup:</strong> triangle inequality is the whole reason shortcutting is safe.</p>",
  "<p><strong>Double-tree:</strong> compute an MST. Its weight is at most OPT.</p>",
  "<p><strong>Euler tour:</strong> double every MST edge so all degrees are even, then traverse an Euler tour of weight at most 2 OPT.</p>",
  "<p><strong>Shortcut:</strong> skip repeated vertices. Triangle inequality says the tour does not get longer, giving a 2-approximation.</p>",
  "<p><strong>Christofides:</strong> add a minimum perfect matching on odd-degree MST vertices instead of doubling everything. Matching weight is at most OPT/2, so total is at most 3/2 OPT.</p>"
];

const koScheduleData = {
  notation: "<h4>Graham notation</h4><p>Read <code>alpha | beta | gamma</code> as machine environment, job restrictions, objective. Example: <code>P | prec | Cmax</code> means identical parallel machines, precedence constraints, minimize makespan.</p>",
  single: "<h4>Single machine</h4><p><strong>Bratley:</strong> branch and bound over feasible job orders with release times and hard deadlines. <strong>Horn:</strong> with preemption and release times, run the available job with earliest due date to minimize maximum lateness.</p>",
  parallel: "<h4>Parallel machines</h4><p>List scheduling assigns available jobs whenever a machine frees up and has ratio <code>2 - 1/m</code>. LPT sorts independent jobs by longest processing time first and improves to <code>4/3 - 1/(3m)</code>. For fixed <code>m</code>, pseudo-polynomial DP tracks reachable load vectors.</p>",
  project: "<h4>Project ILPs</h4><p>Relative-order ILP uses start times and binary variables saying which job precedes the other on a resource. Time-indexed ILP uses <code>x_jt = 1</code> if job j starts at time t.</p>"
};

const koAc3Steps = [
  "<p><strong>CSP:</strong> variables have domains and constraints. Example: graph coloring with colors as domains and inequality constraints on edges.</p>",
  "<p><strong>Arc consistency:</strong> for every value of Xi, there must be some compatible value of Xj.</p>",
  "<p><strong>Revise:</strong> remove values from Di that have no support in Dj.</p>",
  "<p><strong>Queue update:</strong> if Di changed, neighboring arcs into Xi must be reconsidered because their supports may have vanished.</p>",
  "<p><strong>Limit:</strong> empty domain proves inconsistency, but nonempty arc-consistent domains do not guarantee a full solution.</p>"
];

let koShortestIndex = 0;
let koFlowIndex = 0;
let koTspIndex = 0;
let koAc3Index = 0;

function initKoIlpTabs() {
  const output = document.getElementById("ko-ilp-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = koIlpData[key];
    document.querySelectorAll("[data-ko-ilp-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.koIlpTab === key);
    });
  };
  document.querySelectorAll("[data-ko-ilp-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.koIlpTab));
  });
  render("sp");
}

function initKoShortestStepper() {
  const output = document.getElementById("ko-shortest-output");
  if (!output) return;
  const render = () => { output.innerHTML = koShortestSteps[koShortestIndex]; };
  document.querySelector("[data-ko-shortest-prev]")?.addEventListener("click", () => {
    koShortestIndex = Math.max(0, koShortestIndex - 1);
    render();
  });
  document.querySelector("[data-ko-shortest-next]")?.addEventListener("click", () => {
    koShortestIndex = Math.min(koShortestSteps.length - 1, koShortestIndex + 1);
    render();
  });
  render();
}

function initKoFlowStepper() {
  const output = document.getElementById("ko-flow-output");
  if (!output) return;
  const render = () => { output.innerHTML = koFlowSteps[koFlowIndex]; };
  document.querySelector("[data-ko-flow-prev]")?.addEventListener("click", () => {
    koFlowIndex = Math.max(0, koFlowIndex - 1);
    render();
  });
  document.querySelector("[data-ko-flow-next]")?.addEventListener("click", () => {
    koFlowIndex = Math.min(koFlowSteps.length - 1, koFlowIndex + 1);
    render();
  });
  render();
}

function initKoKnapsackTabs() {
  const output = document.getElementById("ko-knapsack-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = koKnapsackData[key];
    document.querySelectorAll("[data-ko-knapsack-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.koKnapsackTab === key);
    });
  };
  document.querySelectorAll("[data-ko-knapsack-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.koKnapsackTab));
  });
  render("fractional");
}

function initKoTspStepper() {
  const output = document.getElementById("ko-tsp-output");
  if (!output) return;
  const render = () => { output.innerHTML = koTspSteps[koTspIndex]; };
  document.querySelector("[data-ko-tsp-prev]")?.addEventListener("click", () => {
    koTspIndex = Math.max(0, koTspIndex - 1);
    render();
  });
  document.querySelector("[data-ko-tsp-next]")?.addEventListener("click", () => {
    koTspIndex = Math.min(koTspSteps.length - 1, koTspIndex + 1);
    render();
  });
  render();
}

function initKoScheduleTabs() {
  const output = document.getElementById("ko-schedule-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = koScheduleData[key];
    document.querySelectorAll("[data-ko-schedule-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.koScheduleTab === key);
    });
  };
  document.querySelectorAll("[data-ko-schedule-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.koScheduleTab));
  });
  render("notation");
}

function initKoAc3Stepper() {
  const output = document.getElementById("ko-ac3-output");
  if (!output) return;
  const render = () => { output.innerHTML = koAc3Steps[koAc3Index]; };
  document.querySelector("[data-ko-ac3-prev]")?.addEventListener("click", () => {
    koAc3Index = Math.max(0, koAc3Index - 1);
    render();
  });
  document.querySelector("[data-ko-ac3-next]")?.addEventListener("click", () => {
    koAc3Index = Math.min(koAc3Steps.length - 1, koAc3Index + 1);
    render();
  });
  render();
}

const smuPacData = {
  pac: "<h4>PAC</h4><p><strong>Feedback:</strong> batch of i.i.d. labeled examples. <strong>Goal:</strong> with probability at least <code>1-delta</code>, output <code>h</code> with true error at most <code>epsilon</code>.</p><pre>err_D(h) = Pr[h(x) != c(x)]</pre>",
  online: "<h4>Online</h4><p>Each round: see <code>x_t</code>, predict, receive the true label or loss, update. The sequence can be adversarial.</p><pre>R_T = learner loss - best fixed comparator loss</pre><p>Sublinear regret means average excess loss goes to zero.</p>",
  vc: "<h4>VC dimension</h4><p>A set is shattered if the class can realize every labeling of that set. Finite VC dimension characterizes distribution-free PAC learnability for binary classification.</p>",
  relations: "<h4>Relations</h4><p>A finite mistake-bound online learner gives realizable PAC learnability by running it on random samples. The converse is not automatic against adversarial online sequences. Littlestone dimension plays the online role that VC dimension plays for PAC.</p>"
};

const smuBooleanSteps = [
  "<p><strong>Start:</strong> with variables <code>x1,x2</code>, the full conjunction is <code>x1 AND not x1 AND x2 AND not x2</code>. It is intentionally too strict.</p>",
  "<p><strong>Positive example (1,0):</strong> remove literals falsified by it: <code>not x1</code> and <code>x2</code>. Remaining hypothesis: <code>x1 AND not x2</code>.</p>",
  "<p><strong>Positive example (1,1):</strong> remove <code>not x2</code>. Remaining hypothesis: <code>x1</code>.</p>",
  "<p><strong>Disjunction dual:</strong> start with all literals in an OR. A negative example must make the target false, so delete every literal that is true on that negative example.</p>",
  "<p><strong>Reduction memory hook:</strong> fixed-k CNF is conjunction learning over clause-features. k-DNF follows dually by negation.</p>"
];

const smuBanditData = {
  regret: "<h4>Regret</h4><p>Let <code>mu*</code> be the best arm mean and <code>Delta_i = mu* - mu_i</code>. Each pull of suboptimal arm i costs <code>Delta_i</code> in expectation.</p><pre>E[R_T] = T mu* - E[sum rewards] = sum Delta_i E[N_i(T)]</pre>",
  epsilon: "<h4>Epsilon-greedy</h4><p>With probability <code>1-epsilon</code>, exploit the best empirical mean; with probability <code>epsilon</code>, choose randomly. Fixed epsilon is easy but causes linear regret because bad arms keep being sampled forever.</p>",
  ucb: "<h4>UCB</h4><p>Choose the arm with the biggest optimistic score.</p><pre>mean_i + sqrt(2 ln t / N_i(t))</pre><p>Under-sampled arms get a larger bonus; UCB1 has logarithmic regret in the standard bounded stochastic setting.</p>",
  thompson: "<h4>Thompson sampling</h4><p>Keep a posterior for each arm, sample a possible mean from each posterior, then pull the arm with the largest sample. For Bernoulli arms, use <code>Beta(alpha,beta)</code>: success increments alpha, failure increments beta.</p>"
};

const smuMdpSteps = [
  "<p><strong>MDP:</strong> <code>(S,A,P,R,gamma)</code>. State tells where you are; action tells what you choose; transition probabilities tell where you may land; reward tells what you receive.</p>",
  "<p><strong>Values:</strong> <code>V^pi(s)</code> values starting in state s under policy pi. <code>Q^pi(s,a)</code> values taking action a first, then following pi.</p>",
  "<p><strong>Bellman optimality:</strong> choose the action with best immediate reward plus discounted future value.</p><pre>V*(s) = max_a sum_s' P(s'|s,a)(R(s,a,s') + gamma V*(s'))</pre>",
  "<p><strong>Value iteration:</strong> initialize values, repeatedly apply the Bellman optimality backup, stop when changes are tiny, then choose greedy actions from the final values.</p>",
  "<p><strong>Memory hook:</strong> Bellman is not magic. It is just recursive bookkeeping: value now equals reward now plus discounted value later.</p>"
];

const smuRlData = {
  mc: "<h4>Monte Carlo / direct utility estimation</h4><p>Run episodes under a policy and average observed returns <code>G_t</code> for each state. It is model-free and unbiased in the episodic setting, but can have high variance and waits for returns.</p>",
  adp: "<h4>Adaptive dynamic programming</h4><p>Count transitions and rewards, estimate <code>P</code> and <code>R</code>, then solve the learned MDP with value or policy iteration. This is model-based RL.</p>",
  td: "<h4>Temporal difference</h4><p>Update from a one-step bootstrapped target.</p><pre>V(s) <- V(s) + alpha (r + gamma V(s') - V(s))</pre><p>TD combines sampling like MC with bootstrapping like DP.</p>",
  q: "<h4>Q-learning vs SARSA</h4><p><strong>Q-learning:</strong> <code>r + gamma max_a' Q(s',a')</code>, off-policy, backs up the greedy next action. <strong>SARSA:</strong> <code>r + gamma Q(s',a')</code>, on-policy, backs up the action actually selected.</p>",
  policy: "<h4>Policy search</h4><p>Instead of learning values first, directly optimize <code>J(theta)</code> for a parameterized policy. Examples: random search, finite differences, policy gradient, REINFORCE, and actor-critic.</p>"
};

let smuBooleanIndex = 0;
let smuMdpIndex = 0;

function initSmuPacTabs() {
  const output = document.getElementById("smu-pac-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = smuPacData[key];
    document.querySelectorAll("[data-smu-pac-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.smuPacTab === key);
    });
  };
  document.querySelectorAll("[data-smu-pac-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.smuPacTab));
  });
  render("pac");
}

function initSmuBooleanStepper() {
  const output = document.getElementById("smu-boolean-output");
  if (!output) return;
  const render = () => { output.innerHTML = smuBooleanSteps[smuBooleanIndex]; };
  document.querySelector("[data-smu-boolean-prev]")?.addEventListener("click", () => {
    smuBooleanIndex = Math.max(0, smuBooleanIndex - 1);
    render();
  });
  document.querySelector("[data-smu-boolean-next]")?.addEventListener("click", () => {
    smuBooleanIndex = Math.min(smuBooleanSteps.length - 1, smuBooleanIndex + 1);
    render();
  });
  render();
}

function initSmuBanditTabs() {
  const output = document.getElementById("smu-bandit-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = smuBanditData[key];
    document.querySelectorAll("[data-smu-bandit-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.smuBanditTab === key);
    });
  };
  document.querySelectorAll("[data-smu-bandit-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.smuBanditTab));
  });
  render("regret");
}

function initSmuMdpStepper() {
  const output = document.getElementById("smu-mdp-output");
  if (!output) return;
  const render = () => { output.innerHTML = smuMdpSteps[smuMdpIndex]; };
  document.querySelector("[data-smu-mdp-prev]")?.addEventListener("click", () => {
    smuMdpIndex = Math.max(0, smuMdpIndex - 1);
    render();
  });
  document.querySelector("[data-smu-mdp-next]")?.addEventListener("click", () => {
    smuMdpIndex = Math.min(smuMdpSteps.length - 1, smuMdpIndex + 1);
    render();
  });
  render();
}

function initSmuRlTabs() {
  const output = document.getElementById("smu-rl-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = smuRlData[key];
    document.querySelectorAll("[data-smu-rl-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.smuRlTab === key);
    });
  };
  document.querySelectorAll("[data-smu-rl-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.smuRlTab));
  });
  render("mc");
}

const lupSatData = {
  cnf: "<h4>CNF and Tseitin</h4><p>Naive CNF distribution can blow up. Tseitin gives each subformula a fresh variable and adds clauses connecting the variable to the subformula.</p><pre>z <-> (a AND b)\n(not z OR a) AND (not z OR b) AND (z OR not a OR not b)</pre><p>The result is equisatisfiable and usually linear in formula size.</p>",
  resolution: "<h4>Resolution refutation</h4><p>From <code>A OR x</code> and <code>B OR not x</code>, derive <code>A OR B</code>. To prove <code>Gamma |= phi</code>, add <code>not phi</code> and derive the empty clause.</p>",
  dpll: "<h4>DPLL and CDCL</h4><p>DPLL alternates unit propagation and branching. CDCL records why a conflict happened, learns a clause, backjumps, and avoids repeating the same failed region.</p>",
  smt: "<h4>Lazy SMT</h4><p>Boolean abstraction forgets theory meaning temporarily. SAT proposes truth values for atoms; a theory solver checks the concrete arithmetic/equality/array facts and returns a conflict clause if inconsistent.</p>"
};

const lupPrologSteps = [
  "<p><strong>Program:</strong> <code>parent(alice,bob).</code> <code>parent(bob,cara).</code> <code>ancestor(X,Y) :- parent(X,Y).</code> <code>ancestor(X,Y) :- parent(X,Z), ancestor(Z,Y).</code></p>",
  "<p><strong>Goal:</strong> <code>?- ancestor(alice,cara)</code>. Prolog selects the leftmost goal and tries clauses top-down.</p>",
  "<p><strong>Direct rule:</strong> unify <code>ancestor(alice,cara)</code> with <code>ancestor(X,Y)</code>, then try <code>parent(alice,cara)</code>. It fails.</p>",
  "<p><strong>Recursive rule:</strong> prove <code>parent(alice,Z)</code>, which gives <code>Z=bob</code>. New subgoal: <code>ancestor(bob,cara)</code>.</p>",
  "<p><strong>Finish:</strong> the direct ancestor rule proves <code>parent(bob,cara)</code>. The query succeeds. Bad rule order can make similar programs loop.</p>"
];

const lupFolSteps = [
  "<p><strong>Start:</strong> eliminate implications and equivalences. Replace <code>P -> Q</code> by <code>not P OR Q</code>.</p>",
  "<p><strong>NNF and variables:</strong> push negations inward and standardize variables apart so unrelated quantifiers do not share names.</p>",
  "<p><strong>Prenex:</strong> move quantifiers to the front while preserving variable scope.</p>",
  "<p><strong>Skolemize:</strong> replace existential witnesses by Skolem constants or functions. <code>forall x exists y P(x,y)</code> becomes <code>forall x P(x,f(x))</code>.</p>",
  "<p><strong>Clauses:</strong> drop universal quantifiers, distribute to CNF, split conjunctions, then use FOL resolution with unification.</p>"
];

const lupEqualityData = {
  axioms: "<h4>Axiomatic equality</h4><p>Add reflexivity, symmetry, transitivity, congruence, and substitutivity as ordinary clauses. This is simple but tends to flood the prover with equality consequences.</p>",
  paramod: "<h4>Paramodulation</h4><p>Use equality as inference: from <code>s = t</code> and a clause containing a subterm unifiable with <code>s</code>, replace that occurrence by <code>t</code> under the unifier.</p>",
  superposition: "<h4>Superposition</h4><p>A modern ordered equality calculus. It combines resolution, equality replacement, term ordering, and rewriting so the prover only performs useful equality inferences.</p>"
};

const lupModelSteps = [
  "<p><strong>Choose a finite domain:</strong> for example <code>{a,b}</code>. Model search is bounded by this domain.</p>",
  "<p><strong>Ground formulas:</strong> <code>forall x (P(x) OR Q(x))</code> becomes <code>(P(a) OR Q(a)) AND (P(b) OR Q(b))</code>.</p>",
  "<p><strong>Boolean variables:</strong> each ground atom gets a SAT variable, such as <code>P_a</code>, <code>Q_a</code>, <code>P_b</code>, <code>Q_b</code>.</p>",
  "<p><strong>Encode constraints:</strong> exactly-one means one big at-least-one clause plus pairwise at-most-one clauses.</p>",
  "<p><strong>Watch the blow-up:</strong> arity k over n objects creates up to <code>n^k</code> atoms. Use types, symmetry breaking, propagation, lazy grounding, and compact cardinality encodings.</p>"
];

let lupPrologIndex = 0;
let lupFolIndex = 0;
let lupModelIndex = 0;

function initLupSatTabs() {
  const output = document.getElementById("lup-sat-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = lupSatData[key];
    document.querySelectorAll("[data-lup-sat-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.lupSatTab === key);
    });
  };
  document.querySelectorAll("[data-lup-sat-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.lupSatTab));
  });
  render("cnf");
}

function initLupPrologStepper() {
  const output = document.getElementById("lup-prolog-output");
  if (!output) return;
  const render = () => { output.innerHTML = lupPrologSteps[lupPrologIndex]; };
  document.querySelector("[data-lup-prolog-prev]")?.addEventListener("click", () => {
    lupPrologIndex = Math.max(0, lupPrologIndex - 1);
    render();
  });
  document.querySelector("[data-lup-prolog-next]")?.addEventListener("click", () => {
    lupPrologIndex = Math.min(lupPrologSteps.length - 1, lupPrologIndex + 1);
    render();
  });
  render();
}

function initLupFolStepper() {
  const output = document.getElementById("lup-fol-output");
  if (!output) return;
  const render = () => { output.innerHTML = lupFolSteps[lupFolIndex]; };
  document.querySelector("[data-lup-fol-prev]")?.addEventListener("click", () => {
    lupFolIndex = Math.max(0, lupFolIndex - 1);
    render();
  });
  document.querySelector("[data-lup-fol-next]")?.addEventListener("click", () => {
    lupFolIndex = Math.min(lupFolSteps.length - 1, lupFolIndex + 1);
    render();
  });
  render();
}

function initLupEqualityTabs() {
  const output = document.getElementById("lup-equality-output");
  if (!output) return;
  const render = (key) => {
    output.innerHTML = lupEqualityData[key];
    document.querySelectorAll("[data-lup-equality-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.lupEqualityTab === key);
    });
  };
  document.querySelectorAll("[data-lup-equality-tab]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.lupEqualityTab));
  });
  render("axioms");
}

function initLupModelStepper() {
  const output = document.getElementById("lup-model-output");
  if (!output) return;
  const render = () => { output.innerHTML = lupModelSteps[lupModelIndex]; };
  document.querySelector("[data-lup-model-prev]")?.addEventListener("click", () => {
    lupModelIndex = Math.max(0, lupModelIndex - 1);
    render();
  });
  document.querySelector("[data-lup-model-next]")?.addEventListener("click", () => {
    lupModelIndex = Math.min(lupModelSteps.length - 1, lupModelIndex + 1);
    render();
  });
  render();
}

const blockLabelIcons = {
  watch: "play_circle",
  recall: "record_voice_over",
  lab: "science",
  practice: "quiz",
  free: "edit_note"
};

function makeIcon(name) {
  const span = document.createElement("span");
  span.className = "material-symbols-rounded";
  span.setAttribute("aria-hidden", "true");
  span.textContent = name;
  return span;
}

function initNavDropdown() {
  const dropdown = document.querySelector("[data-nav-dropdown]");
  if (!dropdown) return;
  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  const menu = dropdown.querySelector(".nav-dropdown-menu");
  if (!toggle || !menu) return;

  // Group the menu into "Common part" and "AI specialization" sections.
  const aiPages = new Set(["smu.html", "lup.html", "ssu.html", "pui.html", "mas.html", "uir.html"]);
  const links = [...menu.querySelectorAll("a")];
  if (links.length && !menu.querySelector(".nav-dropdown-group")) {
    const groupLabel = (text) => {
      const el = document.createElement("div");
      el.className = "nav-dropdown-group";
      el.setAttribute("aria-hidden", "true");
      el.textContent = text;
      return el;
    };
    const hrefOf = (a) => (a.getAttribute("href") || "").split("/").pop();
    const firstAi = links.find((a) => aiPages.has(hrefOf(a)));
    if (firstAi) {
      menu.insertBefore(groupLabel("Common part"), links[0]);
      menu.insertBefore(groupLabel("AI specialization"), firstAi);
    }
  }

  const setOpen = (open) => {
    dropdown.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function initIcons() {
  // Section labels inside each module: Watch / Recall / Lab / Practice / Free recall
  document.querySelectorAll(".block-label").forEach((label) => {
    if (label.querySelector(".material-symbols-rounded")) return;
    const kind = Object.keys(blockLabelIcons).find((k) => label.classList.contains(k));
    if (kind) label.prepend(makeIcon(blockLabelIcons[kind]));
  });

  // Time estimate lines get a leading clock icon
  document.querySelectorAll(".estimate-line").forEach((line) => {
    if (line.querySelector(".material-symbols-rounded")) return;
    line.prepend(makeIcon("schedule"));
  });

  // Rail shortcuts: panic pass + oral rehearsal get glyphs instead of symbols
  document.querySelectorAll(".rail-item.panic .rail-num").forEach((num) => {
    num.textContent = "";
    num.appendChild(makeIcon("bolt"));
  });
  document.querySelectorAll(".rail-item.is-jump .rail-num").forEach((num) => {
    num.textContent = "";
    num.appendChild(makeIcon("record_voice_over"));
  });
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

function initCollapsibleLabs() {
  const store = getLabCollapseStore();
  const collapsibleBlocks = [...document.querySelectorAll(".block")].filter((block) => {
    return block.querySelector(":scope > .block-label.lab, :scope > .block-label.practice, :scope > .block-label.free, :scope > .block-label.recall");
  });
  const labKeyCounts = new Map();

  collapsibleBlocks.forEach((block, index) => {
    if (block.dataset.labCollapsibleReady === "true") return;

    const label = block.querySelector(":scope > .block-label.lab, :scope > .block-label.practice, :scope > .block-label.free, :scope > .block-label.recall");
    const module = block.closest(".module");
    const heading = block.querySelector("h3, h4")?.textContent?.trim() || label.textContent.trim() || "Section";
    const kind = ["lab", "practice", "free", "recall"].find((name) => label.classList.contains(name)) || "section";
    const key = `${module?.id || "page"}:${kind}:${index}:${heading}`;
    const bodyId = `${currentPage}-${kind}-${index}`;

    if (kind === "lab") {
      block.querySelectorAll(".interactive-card").forEach((card) => {
        if (card.dataset.labKey) return;
        const cardHeading = card.querySelector("h3, h4")?.textContent?.trim() || heading;
        const base = `${currentPage}-${slugify(cardHeading) || "lab"}`;
        const count = labKeyCounts.get(base) || 0;
        labKeyCounts.set(base, count + 1);
        card.dataset.labKey = count ? `${base}-${count + 1}` : base;
      });
    }

    const body = document.createElement("div");
    body.className = "lab-collapse-body";
    body.id = bodyId;
    [...block.children].forEach((child) => {
      if (child !== label) body.appendChild(child);
    });
    block.appendChild(body);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "lab-collapse-toggle";
    toggle.setAttribute("aria-controls", bodyId);

    const icon = makeIcon("expand_less");
    const text = document.createElement("span");
    text.className = "lab-collapse-text";
    toggle.append(icon, text);
    label.appendChild(toggle);

    const setCollapsed = (collapsed) => {
      body.hidden = collapsed;
      block.classList.toggle("is-lab-collapsed", collapsed);
      toggle.setAttribute("aria-expanded", String(!collapsed));
      icon.textContent = collapsed ? "expand_more" : "expand_less";
      text.textContent = collapsed ? "Expand" : "Collapse";
      const next = getLabCollapseStore();
      next[key] = collapsed;
      saveLabCollapseStore(next);
    };

    toggle.addEventListener("click", () => setCollapsed(!body.hidden));
    setCollapsed(Boolean(store[key]));
    block.dataset.labCollapsibleReady = "true";
  });
}

function initModuleDonePlacement() {
  document.querySelectorAll(".module").forEach((module) => {
    if (module.dataset.donePlacementReady === "true") return;
    const check = module.querySelector(".module-head-side .module-check");
    if (!check) return;

    const input = check.querySelector("input[data-progress-key]");
    if (!input) return;

    [...check.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) node.remove();
    });

    if (!check.querySelector(".module-check-text")) {
      const text = document.createElement("span");
      text.className = "module-check-text";
      text.textContent = "Mark module done";
      check.appendChild(text);
    }

    const doneRow = document.createElement("div");
    doneRow.className = "module-done-row";
    doneRow.appendChild(check);
    module.appendChild(doneRow);
    module.dataset.donePlacementReady = "true";
  });
}

function initRecallTeachingInteractions() {
  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-teach-toggle]");
    if (!toggle) return;
    const pressed = toggle.getAttribute("aria-pressed") === "true";
    toggle.setAttribute("aria-pressed", String(!pressed));
    const icon = toggle.querySelector(".material-symbols-rounded");
    if (icon) icon.textContent = pressed ? "radio_button_unchecked" : "check_circle";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const toggle = event.target.closest("[data-teach-toggle]");
    if (!toggle) return;
    event.preventDefault();
    toggle.click();
  });
}

const portableProgressPages = ["pal", "tal", "ko", "smu", "lup", "ssu", "pui", "mas", "uir", "index"];

function portableProgressKeySet() {
  const keys = new Set(["exam-timetable-progress-v1"]);
  portableProgressPages.forEach((page) => {
    keys.add(storageKey(page));
    keys.add(recallKey(page));
    keys.add(recallValidationKey(page));
    keys.add(labCollapseKey(page));
  });
  return keys;
}

function isPortableProgressKey(key) {
  if (!key) return false;
  if (portableProgressKeySet().has(key)) return true;
  return key.startsWith("studyQuiz:");
}

function collectPortableProgress() {
  const entries = {};
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!isPortableProgressKey(key)) continue;
    const value = localStorage.getItem(key);
    if (value !== null) entries[key] = value;
  }
  return {
    version: 1,
    app: "oi-state-exam-study",
    exportedAt: progressTimestamp(),
    origin: location.origin,
    entries
  };
}

function importPortableProgress(payload) {
  if (!payload || payload.app !== "oi-state-exam-study" || !payload.entries || typeof payload.entries !== "object") {
    throw new Error("This does not look like an OI study progress export.");
  }

  let imported = 0;
  Object.entries(payload.entries).forEach(([key, value]) => {
    if (!isPortableProgressKey(key)) return;
    const stringValue = typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, stringValue);
    imported += 1;
  });
  return imported;
}

function setProgressSyncStatus(message, kind = "") {
  const status = document.querySelector("[data-progress-sync-status]");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-good", kind === "good");
  status.classList.toggle("is-error", kind === "error");
}

function initProgressSyncPanel() {
  const panel = document.querySelector(".progress-sync-panel");
  if (!panel) return;

  const textarea = panel.querySelector("[data-progress-payload]");
  const exportButton = panel.querySelector("[data-progress-export]");
  const importButton = panel.querySelector("[data-progress-import]");
  const copyButton = panel.querySelector("[data-progress-copy]");
  const seedButton = panel.querySelector("[data-progress-import-seed]");

  exportButton?.addEventListener("click", () => {
    const payload = collectPortableProgress();
    textarea.value = JSON.stringify(payload, null, 2);
    const count = Object.keys(payload.entries).length;
    setProgressSyncStatus(`Exported ${count} progress records. Copy this text to move progress to another browser.`, "good");
  });

  copyButton?.addEventListener("click", async () => {
    if (!textarea.value.trim()) {
      setProgressSyncStatus("Export progress first, then copy it.", "error");
      return;
    }
    try {
      await navigator.clipboard.writeText(textarea.value);
      setProgressSyncStatus("Progress JSON copied.", "good");
    } catch {
      textarea.focus();
      textarea.select();
      setProgressSyncStatus("Select the text and copy it manually.", "error");
    }
  });

  importButton?.addEventListener("click", () => {
    try {
      const imported = importPortableProgress(JSON.parse(textarea.value));
      setProgressSyncStatus(`Imported ${imported} progress records. Reloading...`, "good");
      setTimeout(() => location.reload(), 600);
    } catch (error) {
      setProgressSyncStatus(error instanceof Error ? error.message : String(error), "error");
    }
  });

  seedButton?.addEventListener("click", async () => {
    try {
      const response = await fetch("assets/progress-seed.json", { cache: "no-store" });
      if (!response.ok) throw new Error("No published progress snapshot was found.");
      const imported = importPortableProgress(await response.json());
      setProgressSyncStatus(`Loaded ${imported} records from the published snapshot. Reloading...`, "good");
      setTimeout(() => location.reload(), 600);
    } catch (error) {
      setProgressSyncStatus(error instanceof Error ? error.message : String(error), "error");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initModuleDonePlacement();
  initCollapsibleLabs();
  initRecallTeachingInteractions();
  initNavDropdown();
  initLocalFileNotice();
  initProgressSyncPanel();
  initProgress();
  initVideos();
  initFlashcards();
  initQuizzes();
  initRecall();
  initLabProgress();
  initRepresentation();
  initLaplacianDemo();
  initMst();
  initGraphPreview();
  initDirectedGraphLab();
  initTreeTabs();
  initTreeOperationLab();
  initTextPreviews();
  initTalProofTabs();
  initTmStepper();
  initReductionTabs();
  initSavitchStepper();
  initRandomizedTabs();
  initDecidabilityStepper();
  initKoIlpTabs();
  initKoShortestStepper();
  initKoFlowStepper();
  initKoKnapsackTabs();
  initKoTspStepper();
  initKoScheduleTabs();
  initKoAc3Stepper();
  initSmuPacTabs();
  initSmuBooleanStepper();
  initSmuBanditTabs();
  initSmuMdpStepper();
  initSmuRlTabs();
  initLupSatTabs();
  initLupPrologStepper();
  initLupFolStepper();
  initLupEqualityTabs();
  initLupModelStepper();
});
