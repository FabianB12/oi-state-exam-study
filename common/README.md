# Common Part Notes

This folder contains one printable Markdown file for each common-part state exam question:

1. [PAL: Polynomial Graph Algorithms, Combinatorics, Search Trees, and Automata](01_pal_graph_algorithms_and_data_structures.md)
   - Estimated time: 4.5-5.5h full pass; 45m panic pass
   - Interactive HTML: [PAL Study Page](../study/pal.html)
   - Study companion: [PAL Watch And Remember Guide](01_pal_watch_and_remember.md)
2. [TAL: Complexity Classes, Turing Machines, Randomization, and Undecidability](02_tal_complexity_and_decidability.md)
   - Estimated time: 5-6.5h full pass; 45m panic pass
   - Interactive HTML: [TAL Study Page](../study/tal.html)
   - Study companion: [TAL Watch And Remember Guide](02_tal_watch_and_remember.md)
3. [KO: Combinatorial Optimization](03_ko_combinatorial_optimization.md)
   - Estimated time: 6-8h full pass; 60-75m panic pass
   - Interactive HTML: [KO Study Page](../study/ko.html)
   - Study companion: [KO Watch And Remember Guide](03_ko_watch_and_remember.md)

The files are written as Pandoc-compatible Markdown with LaTeX math and explicit page breaks.

The coverage audit is in [validation_report.md](validation_report.md).

Blue explanation boxes and yellow example boxes are written as fenced divs, rendered through `styles/admonitions.lua` and `styles/admonitions.tex`.

## PDF export

From the project root:

```sh
pandoc common/01_pal_graph_algorithms_and_data_structures.md -o common/01_pal_graph_algorithms_and_data_structures.pdf --pdf-engine=xelatex --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
pandoc common/02_tal_complexity_and_decidability.md -o common/02_tal_complexity_and_decidability.pdf --pdf-engine=xelatex --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
pandoc common/03_ko_combinatorial_optimization.md -o common/03_ko_combinatorial_optimization.pdf --pdf-engine=xelatex --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
```

To create one combined common-part PDF:

```sh
pandoc common/01_pal_graph_algorithms_and_data_structures.md common/02_tal_complexity_and_decidability.md common/03_ko_combinatorial_optimization.md -o common/common_part_all.pdf --pdf-engine=xelatex --metadata title="Common Part: All Questions" --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
```
