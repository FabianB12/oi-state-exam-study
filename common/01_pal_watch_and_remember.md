# PAL Watch And Remember Guide

Companion for [01_pal_graph_algorithms_and_data_structures.md](01_pal_graph_algorithms_and_data_structures.md).

This is the human-readable layer. The original notes are the legal/formal version; this guide tells you what the examiner is probably listening for, which videos to watch first, and how to turn the topic into an oral answer you can actually remember.

## Static HTML Study Page

Use the interactive version first:

- [PAL static study page](../study/pal.html)
- [Study hub](../study/index.html)
- [Saved implementation plan](../study_site_plan.md)

The HTML page has embedded videos, timestamp buttons, flashcards, quizzes, progress tracking, and small algorithm previews. This Markdown file is the checklist/source record.

## Verified Video Checklist

Durations were checked against live YouTube page metadata on 2026-06-04 where direct YouTube metadata was available. Longer videos are included only with a narrow watch segment.

| Topic | Video | Source | Duration | Required watch segment | Why it is here |
| --- | --- | --- | --- | --- | --- |
| Big-O | [Big O Notation](https://www.youtube.com/watch?v=v4cd1O4zkGw) | HackerRank / Gayle Laakmann McDowell | 8:36 | 0:00-8:36 | Short, clear scaling explanation. |
| Graph representation | [Graphs: Representation](https://www.youtube.com/watch?v=WQ2Tzlxl_Xo) | Algorithms with Attitude | 8:53 | 0:00-8:53 | Direct matrix/list tradeoff explanation. |
| MST overview | [Introduction to Minimum Spanning Trees](https://www.youtube.com/watch?v=cwg3yNq-y5Y) | Algorithms with Attitude | 8:59 | 0:00-8:59 | Establishes MST problem and safe-edge intuition. |
| Kruskal | [Kruskal's Minimum Spanning Tree Algorithm](https://www.youtube.com/watch?v=6R179MBYMhY) | Algorithms with Attitude | 5:47 | 0:00-5:47 | Short and directly aligned with PAL. |
| Prim-Jarnik | [Prim's Minimum Spanning Tree Algorithm](https://www.youtube.com/watch?v=BZb-ozM2PWo) | Algorithms with Attitude | 9:50 | 0:00-9:50 | Short explanation of growing one tree. |
| Boruvka | [Boruvka's Minimum Spanning Tree Algorithm](https://www.youtube.com/watch?v=bQga6WqLUvs) | Algorithms with Attitude | 4:51 | 0:00-4:51 | Slightly under 5 minutes but exactly on topic. |
| Union-find | [Disjoint Sets: the Union-Find Data Structure](https://www.youtube.com/watch?v=axaOsCgpupk) | Algorithms with Attitude | 13:33 | 0:00-13:33 | Explains find/union and compression. |
| SCCs | [Kosaraju's Algorithm](https://www.youtube.com/watch?v=RpgcYiky7uw) | Tushar Roy | 24:29 | 0:00-18:00, then stop unless needed | Good but longer; use only conceptual and algorithm segment. |
| Tarjan SCC fallback | [Graph Theory Tutorial from a Google Engineer](https://www.youtube.com/watch?v=09_LlHjoEiY&t=10652s) | freeCodeCamp / William Fiset | 6:44:39 | 2:57:32-3:13:56 | Reputable long course, precise Tarjan slice. |
| Euler conditions | [Existence of Eulerian Paths and Circuits](https://www.youtube.com/watch?v=xR4sGgwtR2I) | William Fiset | 9:41 | 0:00-9:41 | Directly covers the degree conditions. |
| Hierholzer | [Eulerian Path/Circuit algorithm](https://www.youtube.com/watch?v=8MpoO2zA2l4) | William Fiset | 15:34 | 0:00-15:34 | Construction algorithm for Euler trails/circuits. |
| Permutations | [String Permutation Algorithm](https://www.youtube.com/watch?v=nYFd7VHKyWQ) | Tushar Roy | 25:09 | 0:00-15:00, then stop | Longer than ideal but useful backtracking intuition. |
| Sieve | [Infinite Data Structures: To Infinity & Beyond!](https://www.youtube.com/watch?v=bnRNiE_OVWA) | Computerphile | not directly fetched here | 2:00-8:00 | Optional conceptual sieve angle; notes are enough for exam detail. |
| AVL intro/search | [AVL trees in 5 minutes - Intro & Search](https://www.youtube.com/watch?v=DB1HFCEdLxA) | Michael Sambol | about 5 min | 0:00-end | Shorter AVL overview than the old 20-minute fallback. |
| AVL insertion | [AVL trees in 9 minutes - Insertions](https://www.youtube.com/watch?v=JPI-DPizQYk) | Michael Sambol | about 9 min | 0:00-end | Directly supports the rotation drill. |
| AVL deletion optional | [AVL trees in 5 minutes - Deletions](https://www.youtube.com/watch?v=PBkXmhiCP1M) | Michael Sambol | about 5 min | Optional | Use only if AVL deletion repair feels unclear. |
| Red-black intro | [Red-black trees in 4 minutes - Intro](https://www.youtube.com/watch?v=qvZGUFHWChY) | Michael Sambol | 3:53 | 0:00-3:53 | Very short conceptual overview. |
| Red-black rotations | [Red-black trees in 3 minutes - Rotations](https://www.youtube.com/watch?v=95s3ndZRGbk) | Michael Sambol | about 3 min | 0:00-end | Rotation mechanics used by RB insert/delete fixes. |
| Red-black insertion | [Red-black trees in 5 minutes - Insertions strategy](https://www.youtube.com/watch?v=5IBxA-bZZH8) and [examples](https://www.youtube.com/watch?v=A3JZinzkMpk) | Michael Sambol | about 10 min total | 0:00-end for both | Exam-relevant if asked how RB repair works after insertion. |
| Red-black deletion optional | [Red-black trees in 8 minutes - Deletions](https://www.youtube.com/watch?v=lU99loSvD8s) and [Delete Fixes](https://www.youtube.com/watch?v=iw8N1_keEWA) | Michael Sambol | about 14 min total | Optional | Only if the examiner pushes beyond properties and insertion repair. |
| B-tree intro | [B-trees in 4 minutes](https://www.youtube.com/watch?v=FgWbADOG44s) | Michael Sambol | 3:57 | 0:00-3:57 | Quick external-memory intuition. |
| B-tree properties | [B-trees in 6 minutes](https://www.youtube.com/watch?v=fAfuZiFDpRo) | Michael Sambol | 5:38 | 0:00-5:38 | Adds formal properties. |
| B-tree search | [B-trees in 4 minutes - Search](https://www.youtube.com/watch?v=jLEhJqNVauc) | Michael Sambol | about 4 min | 0:00-end | Directly supports the reported B-tree find prompt. |
| B-tree insertion | [B-trees in 6 minutes - Insertions](https://www.youtube.com/watch?v=tT2DT9Z4H-0) | Michael Sambol | about 6 min | 0:00-end | Directly supports the reported insertion/split prompt. |
| k-d tree | [K-d Trees](https://www.youtube.com/watch?v=BK5x7IUTIyU) | Computerphile | 13:20 | 0:00-13:20 | Visual nearest-neighbor intuition. |
| Skip list | no required video | Notes/lab only | - | - | PAL likely needs definition, expected `O(log n)`, random levels, and concurrent ordered-set motivation, not an 80-minute lecture. |
| Regular expressions | [Regular Expressions](https://www.youtube.com/watch?v=528Jc3q86F8) | Computerphile | 17:18 | 0:00-17:18 | Good bridge from regex to automata. |
| KMP | [KMP Pattern Matching](https://www.youtube.com/watch?v=GTJr8OvyEVQ) | Tushar Roy | 12:49 | 0:00-12:49 | Direct prefix-table explanation. |
| Levenshtein | [Edit Distance Between 2 Strings](https://www.youtube.com/watch?v=MiqoA-yF-0M) | Back To Back SWE | 16:15 | 0:00-16:15 | Slightly over 15 minutes but high value. |

## Embedded Video Blocks

Markdown viewers differ in whether they render iframes. If these do not show up, use the fallback links in the checklist or the [PAL static study page](../study/pal.html).

<iframe width="560" height="315" src="https://www.youtube.com/embed/v4cd1O4zkGw" title="Big O Notation" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/WQ2Tzlxl_Xo" title="Graphs Representation" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/cwg3yNq-y5Y" title="Minimum Spanning Trees intro" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/axaOsCgpupk" title="Union-Find" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/GTJr8OvyEVQ" title="KMP Pattern Matching" frameborder="0" allowfullscreen></iframe>

## How to use this

For each block:

1. Watch the listed video or videos before reading the dense notes.
2. Say the "must be able to say" bullets out loud without looking.
3. Then read the corresponding section in the formal notes.
4. Close the file and reconstruct the comparison table or algorithm idea from memory.

You are not trying to become a PAL lecturer in 14 days. You are trying to build a reliable exam answer.

## Exam Shape

PAL is five topics wearing one coat:

1. Complexity and graph representations.
2. Core graph algorithms: MSTs, union-find, SCCs, Euler trails, isomorphism.
3. Combinatorial generation, primes, and pseudorandom numbers.
4. Search trees.
5. Automata and text search.

The danger is that every paragraph looks equally important. It is not. Your high-value job is to know the definitions, state the core algorithms, compare their complexities, and explain why each algorithm works at a high level.

## Priority Triage

### Must Know Well

- Big-O, Omega, Theta, and the normal growth order.
- Adjacency matrix vs adjacency list, plus what distance, Laplacian, and incidence matrices mean.
- Laplacian quick rule: for an unweighted undirected graph, write the degree on the diagonal, write `-1` for adjacent vertices, write `0` for non-neighbors, and remember that each row sums to zero.
- MST definition, cut/cycle property, Prim, Kruskal, Boruvka.
- Union-find with path compression and union by rank/size.
- Strongly connected components, Kosaraju, Tarjan, and why SCC condensation is a DAG.
- Search tree comparison: BST, AVL, red-black, B/B+ tree, splay, k-d tree, skip list.
- B-tree insertion demo: search leaf, insert key, split overflow around median, propagate upward; B+ tree keeps records in linked leaves.
- DFA vs NFA, regular expressions, KMP, edit distance, Aho-Corasick.

### Know Lightly

- Euler trail existence conditions.
- General graph isomorphism vs easier tree isomorphism.
- Subsets, k-subsets, permutations, Gray codes.
- Sieve of Eratosthenes and linear congruential generators.
- Boyer-Moore, Shift-And/Shift-Or, Myers: know the idea more than implementation details.

### Low Priority Unless Asked Directly

- Full implementation details of every generation algorithm.
- Exact constants and obscure data-structure variants.
- Deep bit-parallel automata internals.

## 1. Complexity And Graph Representation

Memory hook: first ask, "How big is the input, and how do I store the graph?"

Videos:

- [Big-O Notation, HackerRank / Gayle Laakmann McDowell](https://www.youtube.com/watch?v=v4cd1O4zkGw) - about 9 minutes.
- [Graph Representation in C++: adjacency matrix and adjacency list, take U forward](https://glasp.co/youtube/p/g-2-graph-representation-in-c-two-ways-to-represent) - short explanation page with the video.

Must be able to say:

- Big-O is an upper asymptotic bound: $f(n) \in O(g(n))$ means eventually $f(n) \le c g(n)$. Omega is lower: $f(n) \in \Omega(g(n))$ means eventually $f(n) \ge c g(n)$. Theta is tight: $f(n) \in \Theta(g(n))$ means eventually $c_1 g(n) \le f(n) \le c_2 g(n)$.
- Usual growth order: `1 < log n < n < n log n < n^2 < n^3 < 2^n < n!`.
- For graph algorithms use `n = |V|`, `m = |E|`.
- Adjacency matrix uses `O(n^2)` memory and answers edge existence in `O(1)`, but scanning neighbors costs `O(n)`.
- Adjacency list uses `O(n + m)` memory and is the default for sparse graphs. In code, think `adj[v]`: an array indexed by vertex, where each cell stores that vertex's neighbor list. A compact version stores all neighbors in one big `neighbors` array plus an `offsets` array.
- Distance matrix stores all-pairs distances, often as an algorithm output.
- Laplacian is `degree matrix - adjacency matrix`; it appears in spectral graph theory and spanning-tree counting.
- Incidence matrix connects vertices to edges; useful when edge-vertex relationships matter.

Fast oral version:

"I would choose the graph representation based on density. A matrix is expensive but gives constant-time edge queries, while lists are compact and efficient for traversing sparse graphs. The asymptotic notation then lets us compare algorithms independent of machine details."

## 2. Core Graph Algorithms

Memory hook: MST algorithms are all answering "which edge is safe to add next?"

Videos:

- [Minimum Spanning Trees intro, Algorithms with Attitude](https://www.youtube.com/watch?v=cwg3yNq-y5Y).
- [Kruskal algorithm, Algorithms with Attitude](https://www.youtube.com/watch?v=6R179MBYMhY).
- [Prim algorithm, Algorithms with Attitude](https://www.youtube.com/watch?v=BZb-ozM2PWo).
- [Boruvka algorithm, Algorithms with Attitude](https://www.youtube.com/watch?v=bQga6WqLUvs).
- [Union-find data structure, Algorithms with Attitude](https://www.youtube.com/watch?v=axaOsCgpupk).
- [Kosaraju strongly connected components, Tushar Roy](https://www.youtube.com/watch?v=RpgcYiky7uw) - about 14 minutes.
- Optional: search [William Fiset Eulerian Path/Circuit algorithm](https://www.youtube.com/results?search_query=William+Fiset+Eulerian+Path+Circuit+algorithm) if Euler trails feel abstract.
- Optional: search [tree isomorphism canonical form](https://www.youtube.com/results?search_query=tree+isomorphism+canonical+form) if you want a visual explanation.

Must be able to say:

- An MST is a minimum-weight connected acyclic subgraph spanning all vertices.
- Cut property: a lightest edge crossing a cut is safe for some MST.
- Cycle property: a heaviest edge on a cycle can be excluded from some MST.
- Prim grows one tree by repeatedly adding the cheapest outgoing edge.
- Kruskal sorts edges and adds an edge if it connects two different components.
- Kruskal uses union-find to test whether an edge would create a cycle.
- Boruvka repeatedly lets every component choose its cheapest outgoing edge; the number of components shrinks quickly.
- Union-find supports `make-set`, `find`, and `union`; path compression plus union by rank/size gives almost constant amortized time.
- SCCs are maximal sets of mutually reachable vertices in a directed graph.
- Kosaraju uses two DFS passes and the reversed graph.
- Tarjan uses one DFS, a stack, and lowlink values.
- Both SCC algorithms run in `O(n + m)`.
- Euler trail in an undirected graph needs 0 or 2 odd-degree vertices, plus connectedness of the non-isolated part.
- Directed Euler trail uses in-degree/out-degree balance.
- General graph isomorphism is harder; tree isomorphism is easy using centers and canonical bottom-up codes.

Fast oral version:

"For MSTs, Prim grows a single component, Kruskal grows a forest, and Boruvka merges many components in phases. Their correctness is based on safe edges from the cut property. Union-find is the key helper for Kruskal because it maintains components and detects cycles efficiently."

## 3. Generation, Primes, And Pseudorandom Numbers

Memory hook: enumeration is controlled counting.

Videos:

- [String permutation algorithm, Tushar Roy](https://www.youtube.com/watch?v=nYFd7VHKyWQ).
- [Backtracking and recursion playlist page with powerset, k-subsets, permutations, Back To Back SWE](https://www.classcentral.com/course/youtube-dynamic-programming-recursion-backtracking-511885).
- Search: [Sieve of Eratosthenes short explanation](https://www.youtube.com/results?search_query=Sieve+of+Eratosthenes+10+minute+explanation).

Must be able to say:

- All subsets can be generated by binary masks or include/exclude recursion.
- There are `2^n` subsets, so outputting them all is already exponential.
- k-subsets can be generated by backtracking; there are `C(n,k)` of them.
- Permutations can be generated by swapping/backtracking or by next-permutation order; there are `n!`.
- Gray code orders bit strings so consecutive strings differ in one bit; a common formula is `g(i) = i xor (i >> 1)`.
- Sieve of Eratosthenes marks multiples and computes primes up to `N` in about `O(N log log N)` time.
- A linear congruential generator has form `x_{i+1} = (a x_i + c) mod m`.
- Pseudorandom numbers are deterministic; period and statistical quality matter.

Fast oral version:

"For generation tasks, the algorithm is often simple but the output size dominates. I should always mention the number of objects: `2^n` subsets, `C(n,k)` k-subsets, and `n!` permutations."

## 4. Search Trees

Memory hook: all search trees are fighting height.

Videos:

- AVL: [intro/search](https://www.youtube.com/watch?v=DB1HFCEdLxA), [insertions](https://www.youtube.com/watch?v=JPI-DPizQYk), optional [deletions](https://www.youtube.com/watch?v=PBkXmhiCP1M), all Michael Sambol.
- Red-black: [intro](https://www.youtube.com/watch?v=qvZGUFHWChY), [rotations](https://www.youtube.com/watch?v=95s3ndZRGbk), [insertion strategy](https://www.youtube.com/watch?v=5IBxA-bZZH8), [insertion examples](https://www.youtube.com/watch?v=A3JZinzkMpk), optional [deletions](https://www.youtube.com/watch?v=lU99loSvD8s) and [delete fixes](https://www.youtube.com/watch?v=iw8N1_keEWA), all Michael Sambol.
- B-tree: [intro](https://www.youtube.com/watch?v=FgWbADOG44s), [properties](https://www.youtube.com/watch?v=fAfuZiFDpRo), [search](https://www.youtube.com/watch?v=jLEhJqNVauc), [insertions](https://www.youtube.com/watch?v=tT2DT9Z4H-0), all Michael Sambol.
- [k-d trees, Computerphile](https://www.youtube.com/watch?v=BK5x7IUTIyU) - nearest-neighbor intuition.
- Skip lists: no required video; memorize random levels and expected logarithmic search/insert/delete.

Comparison table to memorize:

| Structure | Main idea | Search / update |
| --- | --- | --- |
| BST | Ordered binary tree | Average `O(log n)`, worst `O(n)` |
| AVL | Strict height balance | `O(log n)`, faster lookup, more rotations |
| Red-black | Looser balanced tree | `O(log n)`, common in libraries |
| B-tree | Many keys per node | `O(log n)`, optimized for disks/pages |
| B+ tree | Values in leaves, linked leaves | Great for database range queries |
| Splay tree | Move accessed item to root | Amortized `O(log n)`, good locality |
| k-d tree | Split points by coordinates | Spatial search, nearest neighbor |
| Skip list | Randomized linked levels | Expected `O(log n)` |

Must be able to say:

- Plain BSTs can become a chain.
- AVL trees keep stricter balance than red-black trees.
- Red-black trees allow less strict balance but cheaper updates in practice.
- B-trees and B+ trees reduce disk/page accesses using high branching.
- Splay trees do not guarantee each operation is worst-case logarithmic, but they are amortized logarithmic.
- k-d trees organize multidimensional points; nearest-neighbor search prunes regions that cannot improve the current best answer.
- Skip lists use random levels instead of rotations.

Fast oral version:

"The central parameter is height. Balanced trees maintain logarithmic height; B-trees use high branching for external memory; k-d trees are for geometric data; skip lists get expected logarithmic behavior through randomization."

## 5. Automata And Text Search

Memory hook: pattern matching is automata with memory.

Videos:

- [Regular expressions, Computerphile](https://www.youtube.com/watch?v=528Jc3q86F8).
- [Knuth-Morris-Pratt string matching, Tushar Roy](https://www.youtube.com/watch?v=GTJr8OvyEVQ).
- [Levenshtein edit distance, Back To Back SWE](https://www.youtube.com/watch?v=MiqoA-yF-0M) - about 16 minutes, slightly over target but worth it.
- Optional search: [Aho-Corasick algorithm short explanation](https://www.youtube.com/results?search_query=Aho-Corasick+algorithm+short+explanation).

Must be able to say:

- A DFA has exactly one active state for each input symbol.
- An NFA can have multiple possible active states; it accepts if some path accepts.
- Regular expressions, NFAs, and DFAs describe the same class of regular languages.
- Bit representation of an NFA stores the active state set as a bit vector; this supports bit-parallel text searching.
- KMP avoids rechecking characters using a prefix/failure function; it runs in `O(n + m)`.
- Boyer-Moore compares from the right and can skip ahead; good practical performance.
- Shift-And/Shift-Or are bit-parallel exact matching methods.
- Hamming distance counts substitutions only and assumes equal length.
- Levenshtein distance allows insertion, deletion, and substitution; dynamic programming is `O(mn)`.
- Banded DP helps when the expected distance is small.
- Myers is a bit-parallel practical method for edit-distance-style matching.
- Aho-Corasick builds a trie plus failure links to search many patterns at once in linear time plus matches.
- For damaged dictionary words, combine a trie/automaton with edit-distance state; exact multiword search is Aho-Corasick.

Fast oral version:

"Text search can be viewed through automata. KMP builds a failure function for one pattern, Aho-Corasick generalizes this to a dictionary using a trie with failure links, and approximate matching uses dynamic programming over prefixes of the pattern and text."

## 10 To 15 Minute Oral Skeleton

Use this when rehearsing the whole PAL answer:

1. Start with scale: "I describe algorithms asymptotically using `n` vertices and `m` edges. The representation matters: adjacency matrix is good for dense graphs and constant edge queries, adjacency list is better for sparse traversal."
2. Move to graph algorithms: "For MSTs, the goal is a minimum-weight spanning tree. Prim grows one tree, Kruskal grows a forest using union-find, and Boruvka merges components in phases. Correctness comes from the cut and cycle properties."
3. Add SCCs and Euler: "In directed graphs, SCCs are maximal mutually reachable sets. Kosaraju finds them with two DFS passes and reversal, Tarjan with lowlinks in one DFS. Euler trails are about degree conditions and then Hierholzer constructs the trail."
4. Mention isomorphism: "General graph isomorphism is special and nontrivial, but tree isomorphism is solvable efficiently by rooting at centers and comparing canonical forms."
5. Cover generation and primes: "Generation algorithms often have output-size complexity: `2^n`, `C(n,k)`, `n!`. Gray code changes one bit at a time. The sieve marks multiples to find primes. LCGs are deterministic pseudorandom sequences."
6. Cover search trees: "Search trees are mostly about keeping height logarithmic. AVL and red-black are balanced BSTs; B/B+ trees are for pages and range queries; splay is amortized; k-d trees handle multidimensional points; skip lists use random levels."
7. Finish with automata/text: "Regular expressions, NFAs, and DFAs are equivalent models for regular languages. Exact matching includes KMP and Boyer-Moore. Approximate matching uses Hamming or Levenshtein distance, usually via dynamic programming. Dictionary matching uses tries and Aho-Corasick."

## 30 Minute Panic Pass

If the day falls apart, do only this:

1. Watch Big-O.
2. Watch MST intro, Kruskal, and union-find.
3. Watch Kosaraju SCC.
4. Watch one AVL or red-black video and read the search tree table.
5. Watch KMP.
6. Read the oral skeleton out loud twice.

That will not make the answer beautiful, but it gives you enough structure to stop the topic from feeling like pure noise.
