#!/usr/bin/env python3
"""Generate pui-2..pui-5 A4 sheets from the pui-1 template."""
import re
from pathlib import Path

SHEETS = Path("/Users/fabian/Documents/Projects/Exam/study/sheets")
template = (SHEETS / "pui-1.html").read_text()


def nav(active):
    links = "".join(
        f'<a href="pui-{i}.html"' + (' style="border-color:#3a5bd0;color:#3a5bd0"' if i == active else "") + f">{i}</a>"
        for i in range(1, 6))
    return ('<span style="margin-left:auto;font-size:13px;font-weight:700;color:#4a5468;align-self:center">Sheets:</span>\n    ' + links)


def build(num, title, h1, bullet, anchor, col1, col2, traps, flow_rows, font):
    html = template
    html = re.sub(r"<title>.*?</title>", lambda m: f"<title>A4 — PUI {num} · {title}</title>", html, flags=re.S)
    html = re.sub(r"<h1>.*?</h1>", lambda m: f"<h1>{h1}</h1>", html, flags=re.S)
    html = re.sub(r'<div class="bullet">.*?</div>', lambda m: f'<div class="bullet">{bullet}</div>', html, count=1, flags=re.S)
    html = re.sub(r'<a href="\.\./pui\.html#tasks">PUI study page →</a>', f'<a href="../pui.html#{anchor}">PUI study page →</a>', html)
    html = re.sub(r'<span style="margin-left:auto[^>]*>Sheets:</span>\n    <a href="pui-1\.html"[^>]*>1</a><a href="pui-2\.html">2</a><a href="pui-3\.html">3</a><a href="pui-4\.html">4</a><a href="pui-5\.html">5</a>', nav(num), html)
    cols = f'''<div class="cols">
      <div class="col">
{col1}
      </div>

      <div class="col">
{col2}
      </div>
    </div>'''
    html = re.sub(r'<div class="cols">.*?\n    </div>\n\n    <div class="traps">', lambda m: cols + '\n\n    <div class="traps">', html, flags=re.S)
    html = re.sub(r'(<div class="traps">\s*<strong>⚠ TRAPS</strong>\s*)<p>.*?</p>', lambda m: m.group(1) + "<p>" + traps + "</p>", html, flags=re.S)
    flow_table = '<table class="mini-table">\n' + "\n".join(f"            <tr><td><b>{t}</b></td><td>{d}</td></tr>" for t, d in flow_rows) + "\n          </table>"
    html = re.sub(r'(<aside class="flow-panel no-print">.*?</h3>\s*)<table class="mini-table">.*?</table>', lambda m: m.group(1) + flow_table, html, flags=re.S)
    html = re.sub(r"      font-size: 12\.1px;\n    \}", f"      font-size: {font}px;\n    }}", html, count=1)
    (SHEETS / f"pui-{num}.html").write_text(html)
    print(f"pui-{num}.html written")


# ============================== SHEET 2 ==============================
col1_2 = r'''        <section>
          <h2><span class="n">1</span>Delete relaxation \( \Pi^+ \) <span class="say">open with this!</span></h2>
          <p class="intro"><span class="say-lead">say:</span> “Heuristics come from solving an easier task exactly. The delete relaxation erases delete effects — facts only accumulate, so what was achieved once stays true.”</p>
          <span class="formula">\( \Pi^+ \): set \( \mathit{del}(a) = \varnothing \) for every action \( \Rightarrow s \subseteq s' \) along any path</span>
          <ul>
            <li>\( h^+(s) \) = cost of an <b>optimal relaxed plan</b> — admissible, dominates everything below</li>
            <li>but computing \( h^+ \) is <span class="hl">NP-hard</span> → hmax / hadd / hff approximate it</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">2</span>Shared engine: fact costs</h2>
          <p class="intro"><span class="say-lead">say:</span> “All three run the same forward cost propagation to a <dfn class="tip" tabindex="0" data-tip="Keep applying the update rule until no fact's cost changes anymore — then stop.">fixed point</dfn> — they differ only in how they price a <i>set</i> of preconditions or goals.”</p>
          <div class="pseudo">∀f: cost(f) ← 0 <b>if</b> f ∈ s <b>else</b> ∞
<b>repeat until</b> no change:
   <b>for each</b> action a:
      v ← c(a) + <b>AGG</b><sub>f∈pre(a)</sub> cost(f)   <span class="c">// AGG = max → hmax · sum → hadd</span>
      <b>for each</b> f ∈ add(a):  cost(f) ← min(cost(f), v)</div>
          <ul>
            <li>heuristic value = <b>AGG</b> over the goal set: \( h^{\max} = \max_{f \in G} \mathit{cost}(f) \) · \( h^{\mathit{add}} = \sum_{f \in G} \mathit{cost}(f) \)</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">3</span>hmax / hadd / hff <span class="say">know the example cold</span></h2>
          <table class="mini-table">
            <tr><th></th><th>value on goal set</th><th>admissible?</th><th>use</th></tr>
            <tr><td>\( h^{\max} \)</td><td>most expensive goal fact</td><td><b>yes</b> (≤ \( h^+ \)), weak</td><td>optimal</td></tr>
            <tr><td>\( h^{\mathit{add}} \)</td><td>sum of goal-fact costs</td><td><span class="hl">no — double-counts</span></td><td>satisficing</td></tr>
            <tr><td>\( h^{\mathit{ff}} \)</td><td>cost of one extracted relaxed plan</td><td>no (each action once)</td><td>satisficing</td></tr>
          </table>
          <ul>
            <li>hff extraction: walk <b>backward</b> from goals via <dfn class="tip" tabindex="0" data-tip="For each fact, the achiever that determined its cost during propagation — the cheapest way it became reachable.">best supporters</dfn>; shared actions collected <span class="hl">once</span> → fixes hadd's double count</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">4</span>Drawing 1 — the splitting example</h2>
          <div class="sketch">
            <svg viewBox="0 0 340 112">
              <defs><marker id="a1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5468"/></marker></defs>
              <g font-family="Inter" font-size="9" fill="#1a2236">
                <circle cx="34" cy="50" r="13" fill="none" stroke="#1a2236"/><text x="34" y="53" text-anchor="middle">s</text>
                <circle cx="140" cy="50" r="13" fill="none" stroke="#1a2236"/><text x="140" y="53" text-anchor="middle">p</text>
                <circle cx="250" cy="22" r="13" fill="none" stroke="#c23636"/><text x="250" y="25" text-anchor="middle">g₁</text>
                <circle cx="250" cy="78" r="13" fill="none" stroke="#c23636"/><text x="250" y="81" text-anchor="middle">g₂</text>
                <line x1="47" y1="50" x2="125" y2="50" stroke="#4a5468" marker-end="url(#a1)"/>
                <line x1="151" y1="42" x2="236" y2="26" stroke="#4a5468" marker-end="url(#a1)"/>
                <line x1="151" y1="58" x2="236" y2="74" stroke="#4a5468" marker-end="url(#a1)"/>
              </g>
              <g font-family="Caveat" font-size="12" fill="#3a5bd0">
                <text x="72" y="44">oP : 3</text>
                <text x="180" y="26">o₁ : 1</text>
                <text x="180" y="80">o₂ : 1</text>
              </g>
              <g font-family="Caveat" font-size="12" fill="#0e7a3d">
                <text x="40" y="103">cost(p)=3, cost(g₁)=cost(g₂)=4  →  hmax = 4 ≤ h⁺ = 5 ≤ hadd = 8</text>
              </g>
            </svg>
            <p class="cap">hadd charges oP twice (4+4); the real relaxed plan {oP, o₁, o₂} pays it once</p>
          </div>
        </section>'''

col2_2 = r'''        <section>
          <h2><span class="n">5</span>Abstraction heuristics</h2>
          <p class="intro"><span class="say-lead">say:</span> “Second family: map states into a smaller abstract space, solve that space exactly, and use the abstract goal distance as the heuristic.”</p>
          <span class="formula">\( \alpha : S \to S_\alpha \), edge \( \alpha(s) \to \alpha(s') \) whenever \( s \to s' \); \( h_\alpha(s) = \mathit{dist}_\alpha(\alpha(s), G_\alpha) \)</span>
          <ul>
            <li>every real path survives in the abstraction ⇒ \( h_\alpha \le h^* \): <span class="hl">admissible (and consistent)</span></li>
          </ul>
        </section>

        <section>
          <h2><span class="n">6</span>Projection → pattern databases</h2>
          <p class="intro"><span class="say-lead">say:</span> “The simplest abstraction is a projection: keep a few SAS variables — the pattern — and ignore the rest.”</p>
          <ul>
            <li>pattern \( P \subseteq V \); abstract state space = assignments of \( P \) only</li>
            <li><b>PDB</b> = solve the projected task <b>exhaustively offline</b>, store all abstract distances → \( O(1) \) lookup during search</li>
            <li>several PDBs: <span class="hl">sum is admissible only if no action affects two patterns</span> — otherwise take max (or <dfn class="tip" tabindex="0" data-tip="Split each action's cost among the heuristics that count it, so their SUM stays admissible.">cost partitioning</dfn>)</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">7</span>Merge &amp; Shrink</h2>
          <p class="intro"><span class="say-lead">say:</span> “Merge &amp; Shrink generalizes PDBs: build the abstraction incrementally, and compress whenever it grows past a size budget.”</p>
          <ul>
            <li><b>merge</b>: <dfn class="tip" tabindex="0" data-tip="Combine two abstractions into one that tracks both at once: states are pairs, and a transition exists only if both agree on the action.">synchronized product</dfn> of two abstractions (start: one per variable)</li>
            <li><b>shrink</b>: aggregate abstract states to respect the size bound (e.g. <dfn class="tip" tabindex="0" data-tip="Merge only abstract states that behave identically under every action — coarser, but loses no information.">bisimulation</dfn> — exact if it fits)</li>
            <li>repeat until one abstraction remains; can represent every projection <span class="hl">and more</span></li>
          </ul>
        </section>

        <section>
          <h2><span class="n">8</span>Drawing 2 — projection</h2>
          <div class="sketch">
            <svg viewBox="0 0 340 108">
              <defs><marker id="a2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5468"/></marker></defs>
              <g fill="none" stroke="#1a2236">
                <rect x="28" y="18" width="26" height="22"/><rect x="54" y="18" width="26" height="22"/><rect x="80" y="18" width="26" height="22"/>
                <rect x="28" y="40" width="26" height="22"/><rect x="54" y="40" width="26" height="22"/><rect x="80" y="40" width="26" height="22"/>
                <rect x="28" y="62" width="26" height="22"/><rect x="54" y="62" width="26" height="22"/><rect x="80" y="62" width="26" height="22"/>
              </g>
              <line x1="130" y1="52" x2="195" y2="52" stroke="#4a5468" stroke-width="2" marker-end="url(#a2)"/>
              <g fill="none" stroke="#3a5bd0" stroke-width="2">
                <rect x="225" y="18" width="60" height="22"/>
                <rect x="225" y="40" width="60" height="22"/>
                <rect x="225" y="62" width="60" height="22"/>
              </g>
              <g font-family="Caveat" font-size="12" fill="#4a5468">
                <text x="22" y="14">9 states over (v₁, v₂)</text>
                <text x="135" y="44">drop v₁</text>
                <text x="222" y="14" fill="#3a5bd0">3 abstract states (v₂)</text>
                <text x="40" y="102">rows collapse — abstract distance ≤ real distance</text>
              </g>
            </svg>
            <p class="cap">PDB: solve the small space exactly once, look distances up during search</p>
          </div>
        </section>'''

build(2, "Delete relaxation & abstraction heuristics",
      "PUI · 2 — Relaxation &amp; abstraction: two families of heuristics",
      "Delete-relaxation heuristics. hmax, hadd, and hff heuristics. Abstraction heuristics. Projection, pattern databases. Merge &amp; Shrink heuristic.",
      "relax", col1_2, col2_2,
      r"""\( h^+ \) is already NP-hard — hmax/hadd/hff <b>approximate</b> it, they don't compute it · hadd is NOT admissible (8 vs 5 in the example) · hff depends on tie-breaking — not unique · summing PDBs needs disjoint action influence, else max · shrinking loses information unless bisimulation fits the bound.""",
      [("0–1.5′", "relaxation idea + \\( \\Pi^+ \\), why \\( h^+ \\) is the gold standard"),
       ("1.5–3′", "fact-cost propagation, max vs sum aggregation"),
       ("3–5′", "walk drawing 1: hmax 4 ≤ h⁺ 5 ≤ hadd 8"),
       ("5–6′", "hff backward extraction fixes the double count"),
       ("6–8.5′", "abstractions: projection → PDB, drawing 2"),
       ("8.5–10′", "Merge & Shrink + when each is used")],
      13.5)

# ============================== SHEET 3 ==============================
col1_3 = r'''        <section>
          <h2><span class="n">1</span>Landmarks <span class="say">open with this!</span></h2>
          <p class="intro"><span class="say-lead">say:</span> “A landmark is something every valid plan must pass through — a fact that must become true, or an action that must be applied, no matter which plan you pick.”</p>
          <ul>
            <li><b>fact landmark</b> \( f \): every plan makes \( f \) true at some point (goals are trivially landmarks)</li>
            <li><b>action landmark</b> \( a \): every plan uses \( a \) · <b>disjunctive</b>: every plan uses <span class="hl">at least one of a set</span></li>
            <li>orderings: \( l_1 \to l_2 \) natural · <b>greedy-necessary</b>: \( l_1 \) holds right before \( l_2 \) is first achieved</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">2</span>Discovery</h2>
          <p class="intro"><span class="say-lead">say:</span> “Deciding whether something is a landmark is PSPACE-complete — as hard as planning — so practice uses sufficient tests on the delete relaxation.”</p>
          <ul>
            <li>relaxation test: <span class="hl">delete all achievers of \( f \)</span>; if relaxed task becomes unsolvable ⇒ \( f \) is a landmark</li>
            <li>backchaining: if every achiever of landmark \( l \) shares precondition \( p \) ⇒ \( p \) is a landmark too (drawing 1)</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">3</span>Landmark heuristics</h2>
          <p class="intro"><span class="say-lead">say:</span> “Count what's still missing: the landmarks not yet achieved on this path are a to-do list — its size or cost estimates distance.”</p>
          <ul>
            <li>\( h^{LM}(s) \) = number / cost of landmarks not achieved yet (path-dependent — LAMA)</li>
            <li>naive counting is <span class="hl">not admissible</span> — one action may achieve several landmarks → <dfn class="tip" tabindex="0" data-tip="Split each action's cost among the landmarks it achieves, so charging all of them sums to at most the real cost."><b>cost partitioning</b></dfn> splits each action's cost among them, restoring admissibility</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">4</span>Properties &amp; relations</h2>
          <ul>
            <li>LM-Cut dominates \( h^{\max} \): every round starts from it and adds more</li>
            <li>cuts <b>are</b> disjunctive action landmarks — LM-Cut is landmark discovery with optimal charging</li>
            <li>cost of one evaluation: several \( h^{\max} \) passes — pricier than PDB lookup, far better informed</li>
          </ul>
        </section>'''

col2_3 = r'''        <section>
          <h2><span class="n">5</span>LM-Cut <span class="say">walk the rounds!</span></h2>
          <p class="intro"><span class="say-lead">say:</span> “LM-Cut discovers disjunctive action landmarks round by round and charges each its cheapest member — the sum is an admissible estimate of h⁺.”</p>
          <div class="pseudo">h ← 0
<b>loop</b>:
   compute h<sup>max</sup>;  <b>if</b> h<sup>max</sup>(G) = 0: <b>return</b> h
   J ← <span class="c">justification graph (best supporters)</span>
   Z ← <span class="c">goal zone: 0-cost backwards from G</span>
   cut ← edges of J crossing into Z   <span class="c">// disjunctive landmark!</span>
   m ← min cost in cut
   h ← h + m;   ∀a ∈ cut: c(a) ← c(a) − m</div>
          <ul>
            <li>② <dfn class="tip" tabindex="0" data-tip="A graph over facts: for each action, an edge from its most expensive precondition to each fact it achieves — the paths that justify hmax values.">justification graph</dfn> = each fact's <b>best supporter</b> · ③ <dfn class="tip" tabindex="0" data-tip="All facts from which the goal is still reachable using only zero-cost edges — costless leftovers of earlier rounds."><b>goal zone</b></dfn></li>
            <li><span class="hl">subtraction prevents double-charging</span> — the paid cost is "used up"</li>
            <li>guarantees: admissible, \( h^{\text{LM-Cut}} \le h^+ \le h^* \); often near \( h^+ \) in practice</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">6</span>Drawing 2 — LM-Cut rounds</h2>
          <div class="sketch">
            <svg viewBox="0 0 340 128">
              <defs><marker id="b2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5468"/></marker></defs>
              <g font-family="Inter" font-size="9" fill="#1a2236">
                <circle cx="42" cy="58" r="13" fill="none" stroke="#1a2236"/><text x="42" y="61" text-anchor="middle">i</text>
                <circle cx="150" cy="26" r="13" fill="none" stroke="#1a2236"/><text x="150" y="29" text-anchor="middle">a</text>
                <circle cx="150" cy="92" r="13" fill="none" stroke="#1a2236"/><text x="150" y="95" text-anchor="middle">b</text>
                <circle cx="268" cy="58" r="13" fill="none" stroke="#c23636" stroke-width="2"/><text x="268" y="61" text-anchor="middle">g</text>
                <line x1="54" y1="51" x2="136" y2="31" stroke="#4a5468" marker-end="url(#b2)"/>
                <line x1="54" y1="65" x2="136" y2="87" stroke="#4a5468" marker-end="url(#b2)"/>
                <line x1="162" y1="32" x2="255" y2="51" stroke="#c23636" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#b2)"/>
                <line x1="162" y1="86" x2="255" y2="66" stroke="#c23636" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#b2)"/>
              </g>
              <g font-family="Caveat" font-size="12">
                <text x="80" y="30" fill="#4a5468">o_a : 3</text>
                <text x="80" y="92" fill="#4a5468">o_b : 5</text>
                <text x="196" y="32" fill="#c23636">o_g1 : 2</text>
                <text x="196" y="92" fill="#c23636">o_g2 : 1</text>
                <text x="210" y="14" fill="#c23636">cut 1 = {o_g1, o_g2}, m = 1</text>
                <text x="30" y="120" fill="#0e7a3d">rounds: 1 + 1 + 3 = 5 = h* here (top 3+2, bottom 5+1)</text>
              </g>
            </svg>
            <p class="cap">every relaxed plan crosses the cut ⇒ charging its min cost is safe; subtract, repeat</p>
          </div>
        </section>

        <section>
          <h2><span class="n">4</span>Drawing 1 — backchaining</h2>
          <div class="sketch">
            <svg viewBox="0 0 340 96">
              <defs><marker id="b1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5468"/></marker></defs>
              <g font-family="Inter" font-size="9" fill="#1a2236">
                <circle cx="60" cy="48" r="14" fill="none" stroke="#3a5bd0" stroke-width="2"/><text x="60" y="51" text-anchor="middle">p</text>
                <rect x="150" y="10" width="52" height="22" fill="none" stroke="#1a2236"/><text x="176" y="25" text-anchor="middle">o₁</text>
                <rect x="150" y="62" width="52" height="22" fill="none" stroke="#1a2236"/><text x="176" y="77" text-anchor="middle">o₂</text>
                <circle cx="290" cy="48" r="14" fill="none" stroke="#c23636" stroke-width="2"/><text x="290" y="51" text-anchor="middle">g</text>
                <line x1="74" y1="41" x2="146" y2="24" stroke="#4a5468" marker-end="url(#b1)"/>
                <line x1="74" y1="55" x2="146" y2="71" stroke="#4a5468" marker-end="url(#b1)"/>
                <line x1="204" y1="22" x2="277" y2="42" stroke="#4a5468" marker-end="url(#b1)"/>
                <line x1="204" y1="72" x2="277" y2="55" stroke="#4a5468" marker-end="url(#b1)"/>
              </g>
              <g font-family="Caveat" font-size="12">
                <text x="120" y="50" fill="#4a5468">pre</text>
                <text x="228" y="20" fill="#4a5468">achievers of g</text>
                <text x="22" y="88" fill="#3a5bd0">all achievers need p  ⇒  p is a landmark (greedy-necessary before g)</text>
              </g>
            </svg>
            <p class="cap">walk backward from the goal; shared preconditions become landmarks</p>
          </div>
        </section>'''

build(3, "Landmarks & LM-Cut",
      "PUI · 3 — Landmarks: what every plan must do",
      "Landmarks and landmark discovery. Landmark and LM-Cut heuristics.",
      "landmarks", col1_3, col2_3,
      r"""Landmark = in <b>every</b> plan — "in some plan" is wrong · exact landmark decision is <dfn class="tip" tabindex="0" data-tip="As hard as planning itself — deciding a landmark exactly would mean solving a planning problem.">PSPACE-complete</dfn> → practical tests use the delete relaxation · naive landmark counting is inadmissible — cost partitioning fixes it · LM-Cut must subtract the charged cost or it double-charges · order of guarantees: \( h^{\text{LM-Cut}} \le h^+ \le h^* \).""",
      [("0–1.5′", "landmark kinds + orderings"),
       ("1.5–3′", "discovery: relaxation test, backchaining (drawing 1)"),
       ("3–4.5′", "counting heuristic + why cost partitioning"),
       ("4.5–7.5′", "LM-Cut round mechanics on drawing 2"),
       ("7.5–9′", "why admissible: cuts are landmarks, subtraction"),
       ("9–10′", "h ≤ h⁺ ≤ h*, practical strength")],
      14.9)

# ============================== SHEET 4 ==============================
col1_4 = r'''        <section>
          <h2><span class="n">1</span>Operator counting <span class="say">open with this!</span></h2>
          <p class="intro"><span class="say-lead">say:</span> “Instead of solving the task, write linear constraints that every plan must satisfy, and minimize plan cost over them — the LP optimum is a lower bound on any real plan, hence admissible.”</p>
          <span class="formula">\( Y_a \ge 0 \) = how often the plan uses \( a \); \( \; h(s) = \min \sum_a c(a)\, Y_a \) s.t. necessary constraints</span>
          <ul>
            <li>constraints must hold for <b>every</b> plan from \( s \) — necessity is the whole trick</li>
            <li>solve the <dfn class="tip" tabindex="0" data-tip="Allow fractional action counts (use 'half an action'). Solvable in polynomial time; the optimum can only drop — still a valid lower bound."><b>LP relaxation</b></dfn>, not the IP: <span class="hl">still admissible, polynomial time</span></li>
            <li>unifying framework: landmark constraints (\( \sum_{a \in L} Y_a \ge 1 \)) drop into the same LP</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">2</span>State-equation heuristic</h2>
          <p class="intro"><span class="say-lead">say:</span> “The constraints come from bookkeeping per fact: over a whole plan, how often a fact is produced and consumed must balance out — like tokens in a <dfn class="tip" tabindex="0" data-tip="A tokens-in-places model: producing a fact drops a token in its place, consuming removes one — the totals must balance.">Petri net</dfn>.”</p>
          <span class="formula">for each fact \( f \): \( \sum_{a\, \text{produces}\, f} Y_a \; - \sum_{a\, \text{consumes}\, f} Y_a \;\; \ge \;\; [f \in G] - [f \in s] \)</span>
          <ul>
            <li>produced = \( f \in \mathit{add}(a) \), consumed = \( f \in \mathit{pre}(a) \cap \mathit{del}(a) \)</li>
            <li>ignores <b>ordering</b> of actions — that's the relaxation (can undercount, never overcounts)</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">3</span>Drawing 1 — fact flow</h2>
          <div class="sketch">
            <svg viewBox="0 0 340 104">
              <defs><marker id="c1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5468"/></marker></defs>
              <g font-family="Inter" font-size="9" fill="#1a2236">
                <rect x="28" y="12" width="50" height="22" fill="none" stroke="#1a2236"/><text x="53" y="27" text-anchor="middle">a₁</text>
                <rect x="28" y="58" width="50" height="22" fill="none" stroke="#1a2236"/><text x="53" y="73" text-anchor="middle">a₂</text>
                <circle cx="170" cy="46" r="16" fill="none" stroke="#3a5bd0" stroke-width="2"/><text x="170" y="49" text-anchor="middle">f</text>
                <rect x="262" y="35" width="50" height="22" fill="none" stroke="#1a2236"/><text x="287" y="50" text-anchor="middle">a₃</text>
                <line x1="80" y1="26" x2="152" y2="40" stroke="#4a5468" marker-end="url(#c1)"/>
                <line x1="80" y1="66" x2="152" y2="52" stroke="#4a5468" marker-end="url(#c1)"/>
                <line x1="187" y1="46" x2="258" y2="46" stroke="#4a5468" marker-end="url(#c1)"/>
              </g>
              <g font-family="Caveat" font-size="12">
                <text x="96" y="24" fill="#4a5468">produce (add f)</text>
                <text x="200" y="38" fill="#4a5468">consume</text>
                <text x="36" y="98" fill="#3a5bd0">Y₁ + Y₂ − Y₃ ≥ [f ∈ G] − [f ∈ s]   — per-fact token balance</text>
              </g>
            </svg>
            <p class="cap">every plan respects the balance — orderings ignored, hence a relaxation</p>
          </div>
        </section>

        <section>
          <h2><span class="n">7</span>Why admissible — say the argument</h2>
          <p class="intro"><span class="say-lead">say:</span> “Take any real plan: its action counts satisfy every necessary constraint, so they are a feasible LP point with objective = plan cost. The LP minimum is therefore ≤ every plan's cost — in particular ≤ h*.”</p>
          <ul>
            <li>real plan \( \pi \) → counts \( Y_a = \#_a(\pi) \) feasible, objective \( = c(\pi) \)</li>
            <li>\( \Rightarrow \; \mathrm{LP}_{\min} \le c(\pi^*) = h^*(s) \) — <span class="hl">admissibility for free</span>, from necessity alone</li>
          </ul>
        </section>'''

col2_4 = r'''        <section>
          <h2><span class="n">4</span>Potential heuristic <span class="say">cheapest eval in the family</span></h2>
          <p class="intro"><span class="say-lead">say:</span> “Give every fact a numeric potential; the heuristic of a state is just the sum of potentials of its true facts — a linear evaluation function whose weights we choose by an LP, once, offline.”</p>
          <span class="formula">\( h_{\mathit{pot}}(s) = \sum_{f \in s} w(f) \)</span>
          <ul>
            <li>weights constrained so the result is <b>consistent + goal-aware</b>:</li>
            <li>goal states: \( h_{\mathit{pot}} \le 0 \) · every action: drop along the transition \( \le c(a) \) — <span class="hl">linear constraints in \( w \)</span></li>
            <li>objective: e.g. maximize \( h_{\mathit{pot}}(I) \) (or expected value over states)</li>
            <li>LP solved <b>once before search</b>; per-state evaluation = <span class="hl">one sum — fastest admissible h around</span></li>
          </ul>
        </section>

        <section>
          <h2><span class="n">5</span>Drawing 2 — consistency staircase</h2>
          <div class="sketch">
            <svg viewBox="0 0 340 112">
              <defs><marker id="c2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5468"/></marker></defs>
              <g stroke="#3a5bd0" stroke-width="2.5">
                <line x1="30" y1="22" x2="92" y2="22"/>
                <line x1="102" y1="46" x2="164" y2="46"/>
                <line x1="174" y1="64" x2="236" y2="64"/>
                <line x1="246" y1="92" x2="308" y2="92"/>
              </g>
              <g stroke="#4a5468" stroke-dasharray="3 2">
                <line x1="92" y1="22" x2="102" y2="46"/>
                <line x1="164" y1="46" x2="174" y2="64"/>
                <line x1="236" y1="64" x2="246" y2="92"/>
              </g>
              <g font-family="Caveat" font-size="12" fill="#1a2236">
                <text x="40" y="16">h(s₀)</text><text x="112" y="40">h(s₁)</text><text x="184" y="58">h(s₂)</text><text x="256" y="86">h(s₃) ≤ 0 at goal</text>
              </g>
              <g font-family="Caveat" font-size="12" fill="#c23636">
                <text x="84" y="42">≤ c(a₁)</text><text x="156" y="62">≤ c(a₂)</text><text x="228" y="86">≤ c(a₃)</text>
              </g>
              <g font-family="Caveat" font-size="12" fill="#3a5bd0"><text x="50" y="108">each step may drop h by at most its cost ⇒ consistent ⇒ admissible</text></g>
            </svg>
            <p class="cap">the LP picks weights so every staircase obeys the bound</p>
          </div>
        </section>

        <section>
          <h2><span class="n">6</span>How the family fits together</h2>
          <table class="mini-table">
            <tr><th>heuristic</th><th>LP solved</th><th>per-state cost</th></tr>
            <tr><td>state equation</td><td>per evaluated state</td><td>one LP solve</td></tr>
            <tr><td>potential</td><td><span class="hl">once, offline</span></td><td>sum over true facts</td></tr>
          </table>
          <ul>
            <li>both admissible via necessity; potential ≈ a cheap dual of the same constraint view</li>
            <li>operator counting can <b>combine</b> sources (state equation + landmarks) admissibly in one LP</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">8</span>Micro-example to write</h2>
          <p class="intro"><span class="say-lead">say:</span> “One fact makes it concrete.” Goal needs \( g \) (not in \( s \)); achievers \( a_1 \) (cost 4), \( a_2 \) (cost 3), nothing consumes \( g \).</p>
          <span class="formula">\( \min\; 4Y_{a_1} + 3Y_{a_2} \;\;\text{s.t.}\;\; Y_{a_1} + Y_{a_2} \ge 1,\; Y \ge 0 \;\;\Rightarrow\; h = 3 \)</span>
          <ul>
            <li>the state-equation row for \( g \) <b>is</b> the landmark "some achiever of \( g \)" — the families meet</li>
          </ul>
        </section>'''

build(4, "Linear programming heuristics",
      "PUI · 4 — LP heuristics: bounds from necessary constraints",
      "Linear programming heuristics. State-equation heuristic. Potential heuristic.",
      "landmarks", col1_4, col2_4,
      r"""Constraints must be <b>necessary</b> for every plan — sufficiency is not required · LP relaxation (not IP) keeps admissibility AND polynomial time · the state equation ignores action ordering — relaxation, never overcounts · potentials: LP once offline, evaluation is a dot product · landmark rows drop into the same operator-counting LP.""",
      [("0–2′", "operator-counting idea: necessity ⇒ lower bound"),
       ("2–4′", "state equation + Petri-token intuition (drawing 1)"),
       ("4–6′", "potential heuristic: weights by LP, once"),
       ("6–7.5′", "consistency staircase (drawing 2)"),
       ("7.5–9′", "cost comparison: per-state LP vs one sum"),
       ("9–10′", "combining sources in one LP — the punchline")],
      13.8)

# ============================== SHEET 5 ==============================
col1_5 = r'''        <section>
          <h2><span class="n">1</span>Nondeterministic planning <span class="say">open with this!</span></h2>
          <p class="intro"><span class="say-lead">say:</span> “Now actions may have several outcomes and we don't control which — solutions stop being sequences and become policies, and we ask what a policy guarantees.”</p>
          <ul>
            <li><dfn class="tip" tabindex="0" data-tip="Fully Observable Non-Deterministic: you always see the current state, but not which outcome an action will produce.">FOND</dfn>: action = precondition + <b>set of effects</b>; environment picks the outcome</li>
            <li>solution = policy \( \pi : S \to A \); execution = paths through an <dfn class="tip" tabindex="0" data-tip="OR nodes = your choice of action; AND nodes = the outcome branches, all of which your policy must handle.">AND-OR graph</dfn></li>
          </ul>
          <table class="mini-table">
            <tr><th>guarantee</th><th>promise</th><th>loops?</th></tr>
            <tr><td><b>weak</b></td><td>some execution reaches the goal</td><td>—</td></tr>
            <tr><td><b>strong</b></td><td>every execution, finitely</td><td>no</td></tr>
            <tr><td><b>strong cyclic</b></td><td><span class="hl">every fair execution</span> eventually</td><td>allowed</td></tr>
          </table>
          <ul>
            <li>fairness: an outcome enabled infinitely often happens infinitely often</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">2</span>MDP + value iteration</h2>
          <p class="intro"><span class="say-lead">say:</span> “Attach probabilities to the outcomes and we are in an MDP — instead of guaranteeing, we optimize expected discounted reward.”</p>
          <span class="formula">\( (S, A, P(s' \mid s,a), r, \gamma) \), policy \( \pi \), \( V^\pi(s) = \mathbb{E} \big[ \sum_t \gamma^t r_t \big] \)</span>
          <div class="pseudo">V ← 0
<b>repeat</b>:
   ∀s: V′(s) ← max<sub>a</sub> Σ<sub>s′</sub> P(s′|s,a) [ r + γ·V(s′) ]   <span class="c">// Bellman backup</span>
   δ ← max<sub>s</sub> |V′(s) − V(s)|;   V ← V′
<b>until</b> δ &lt; ε
π(s) ← argmax<sub>a</sub> Q(s, a)   <span class="c">// extract greedy policy</span></div>
          <ul>
            <li>Bellman operator is a <span class="hl"><dfn class="tip" tabindex="0" data-tip="One update shrinks the distance between any two value functions by factor γ — so repeated updates squeeze everything to a single fixed point.">\( \gamma \)-contraction</dfn></span> (\( \gamma < 1 \)) ⇒ unique fixed point \( V^* \), VI converges from anywhere</li>
            <li>stop when \( \lVert V_{k+1} - V_k \rVert < \varepsilon \); extract greedy policy \( \pi(s) = \arg\max_a Q(s,a) \)</li>
            <li>greedy policy is typically optimal <b>before</b> values fully converge</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">3</span>Drawing 1 — one Bellman backup</h2>
          <div class="sketch">
            <svg viewBox="0 0 340 100">
              <defs><marker id="d1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5468"/></marker></defs>
              <g font-family="Inter" font-size="9" fill="#1a2236">
                <rect x="22" y="34" width="50" height="26" fill="none" stroke="#1a2236"/><text x="47" y="51" text-anchor="middle">S₁</text>
                <rect x="104" y="34" width="50" height="26" fill="none" stroke="#1a2236"/><text x="129" y="51" text-anchor="middle">S₂</text>
                <rect x="186" y="34" width="50" height="26" fill="none" stroke="#1a2236"/><text x="211" y="51" text-anchor="middle">S₃</text>
                <rect x="268" y="34" width="50" height="26" fill="none" stroke="#c23636" stroke-width="2"/><text x="293" y="51" text-anchor="middle">G</text>
                <line x1="72" y1="47" x2="100" y2="47" stroke="#4a5468" marker-end="url(#d1)"/>
                <line x1="154" y1="47" x2="182" y2="47" stroke="#4a5468" marker-end="url(#d1)"/>
                <line x1="236" y1="47" x2="264" y2="47" stroke="#4a5468" marker-end="url(#d1)"/>
                <path d="M205 34 C 198 16, 224 16, 217 34" fill="none" stroke="#4a5468" stroke-dasharray="3 2" marker-end="url(#d1)"/>
              </g>
              <g font-family="Caveat" font-size="11.5">
                <text x="238" y="42" fill="#c23636">p=.8, r=+10</text>
                <text x="196" y="14" fill="#4a5468">stay p=.2</text>
                <text x="26" y="86" fill="#0e7a3d">γ=0.9 · sweep 1: V(S₃) = .8·(10+0) + .2·(0+0) = 8.00 — value flows backward</text>
              </g>
            </svg>
            <p class="cap">corridor MDP — compute one backup aloud, then say "repeat to fixed point"</p>
          </div>
        </section>'''

col2_5 = r'''        <section>
          <h2><span class="n">4</span>MCTS <span class="say">draw the 4 phases!</span></h2>
          <p class="intro"><span class="say-lead">say:</span> “When the model is only a simulator or the space is huge, we sample: MCTS grows a lopsided tree from repeated simulated episodes — four phases per iteration.”</p>
          <div class="pseudo"><b>while</b> budget left:
   s ← root
   <b>while</b> s fully expanded: s ← child max UCT   <span class="c">// ① selection</span>
   s′ ← add one new child of s                  <span class="c">// ② expansion</span>
   r ← rollout(s′) with default policy          <span class="c">// ③ simulation</span>
   <b>for</b> n on path root→s′:                      <span class="c">// ④ backprop</span>
      n.N++;  n.Q̄ += (r − n.Q̄) / n.N
<b>return</b> most-visited root action</div>
          <ul>
            <li><dfn class="tip" tabindex="0" data-tip="You can stop the algorithm at any moment and still get the best answer found so far — more time just improves it."><b>anytime</b></dfn>: stop whenever, act on most-visited root action; tree grows <span class="hl">asymmetrically</span> toward promising lines</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">5</span>UCT</h2>
          <p class="intro"><span class="say-lead">say:</span> “UCT decides where to descend: take the action that maximizes mean value plus an exploration bonus that shrinks with visits.”</p>
          <span class="formula">\( \mathit{UCT}(i) = \bar{Q}_i + C \sqrt{\dfrac{\ln N}{n_i}} \)</span>
          <ul>
            <li>\( \bar{Q}_i \) exploitation · bonus = uncertainty; unvisited child ⇒ bonus \( = \infty \) → <span class="hl">try everything once</span></li>
            <li>\( \ln N \) grows ⇒ every action retried infinitely often (no starvation)</li>
            <li>\( C = 0 \): greedy lock-in · large \( C \): near-uniform; \( C \approx \sqrt{2} \) classic</li>
            <li>needs only a <dfn class="tip" tabindex="0" data-tip="A black box you can sample: feed it state + action, it returns one successor — no probability tables required."><b>generative model</b></dfn> (simulator), not \( P(s'\mid s,a) \) tables</li>
          </ul>
        </section>

        <section>
          <h2><span class="n">6</span>Drawing 2 — the four phases</h2>
          <div class="sketch">
            <svg viewBox="0 0 340 132">
              <defs><marker id="d2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5468"/></marker></defs>
              <g font-family="Inter" font-size="8.5" fill="#1a2236">
                <circle cx="170" cy="16" r="11" fill="none" stroke="#1a2236" stroke-width="2"/>
                <circle cx="95" cy="52" r="11" fill="none" stroke="#1a2236" stroke-width="2"/>
                <circle cx="170" cy="52" r="11" fill="none" stroke="#1a2236"/>
                <circle cx="245" cy="52" r="11" fill="none" stroke="#1a2236"/>
                <circle cx="65" cy="90" r="11" fill="none" stroke="#1a2236" stroke-width="2"/>
                <circle cx="125" cy="90" r="11" fill="none" stroke="#1a2236"/>
                <circle cx="40" cy="122" r="9" fill="none" stroke="#3a5bd0" stroke-dasharray="3 2"/>
                <line x1="163" y1="25" x2="103" y2="44" stroke="#1a2236" stroke-width="2.4" marker-end="url(#d2)"/>
                <line x1="170" y1="27" x2="170" y2="41" stroke="#4a5468" marker-end="url(#d2)"/>
                <line x1="178" y1="25" x2="238" y2="44" stroke="#4a5468" marker-end="url(#d2)"/>
                <line x1="89" y1="62" x2="70" y2="80" stroke="#1a2236" stroke-width="2.4" marker-end="url(#d2)"/>
                <line x1="102" y1="61" x2="119" y2="80" stroke="#4a5468" marker-end="url(#d2)"/>
                <line x1="58" y1="99" x2="45" y2="113" stroke="#3a5bd0" stroke-dasharray="3 2" marker-end="url(#d2)"/>
                <path d="M40 131 q 8 8 -2 14 q -10 6 0 14" transform="translate(0,-14)" fill="none" stroke="#0e7a3d" stroke-width="1.6"/>
              </g>
              <g font-family="Caveat" font-size="11.5">
                <text x="218" y="16" fill="#1a2236">① selection (bold, by UCT)</text>
                <text x="58" y="116" fill="#3a5bd0">② expand</text>
                <text x="52" y="131" fill="#0e7a3d">③ rollout → r</text>
                <text x="218" y="116" fill="#c23636">④ backprop n, Q̄ up the path</text>
              </g>
              <path d="M52 108 C 90 130, 140 90, 162 30" fill="none" stroke="#c23636" stroke-width="1.4" stroke-dasharray="2 3" marker-end="url(#d2)"/>
            </svg>
            <p class="cap">the picture they expect — label all four phases while drawing</p>
          </div>
        </section>'''

build(5, "Nondeterministic & probabilistic planning, MDP/VI, MCTS/UCT",
      "PUI · 5 — Planning under uncertainty: guarantees → expectations → samples",
      "Non-deterministic planning. Probabilistic planning. Markov Decision Process and value iteration. Monte-Carlo Tree Search and the UCT algorithm.",
      "uncertainty", col1_5, col2_5,
      r"""Strong cyclic needs <b>fairness</b> — say "every fair execution" · VI converges because Bellman is a \( \gamma \)-contraction (\( \gamma<1 \); \( \gamma=1 \) breaks it) · greedy policy is usually optimal before values converge · UCT's \( \ln N \) ⇒ every action tried infinitely often · MCTS needs only a simulator, not transition tables.""",
      [("0–2′", "FOND, policies, weak/strong/strong-cyclic ladder"),
       ("2–3.5′", "MDP definition + objective"),
       ("3.5–5.5′", "Bellman + VI + contraction convergence"),
       ("5.5–6.5′", "one numeric backup aloud (drawing 1)"),
       ("6.5–8.5′", "MCTS four phases (drawing 2)"),
       ("8.5–10′", "UCT formula term by term, C extremes")],
      13.0)
