# Artificial Intelligence Specialization Notes

This folder contains one printable Markdown file for each AI-specialization state exam question:

1. [SMU: Learnability Models, Bandits, and Reinforcement Learning](01_smu_learnability_bandits_rl.md)
   - Estimated time: 4.5-6h full pass; 45-60m panic pass
   - Interactive HTML: [../study/smu.html](../study/smu.html)
   - Video guide: [01_smu_watch_and_remember.md](01_smu_watch_and_remember.md)
2. [LUP: Resolution, Automatic Proving, and Model Search](02_lup_resolution_proving_model_search.md)
   - Estimated time: 4-5.5h full pass; 45m panic pass
   - Interactive HTML: [../study/lup.html](../study/lup.html)
   - Video guide: [02_lup_watch_and_remember.md](02_lup_watch_and_remember.md)
3. [SSU: Empirical Risk, MLE, EM, and Neural Networks](03_ssu_erm_mle_em_deep_networks.md)
   - Estimated time: 5-6.5h full pass; 60m panic pass
   - Interactive HTML: [../study/ssu.html](../study/ssu.html)
   - Video guide: [03_ssu_watch_and_remember.md](03_ssu_watch_and_remember.md)
4. [PUI: Domain Independent Planning](04_pui_domain_independent_planning.md)
   - Estimated time: 4.5-6h full pass; 45-60m panic pass
   - Interactive HTML: [../study/pui.html](../study/pui.html)
   - Video guide: [04_pui_watch_and_remember.md](04_pui_watch_and_remember.md)
5. [MAS: Autonomous Agents and Multiagent Systems](05_mas_agents_multiagent_game_theory.md)
   - Estimated time: 4.5-6h full pass; 45-60m panic pass
   - Interactive HTML: [../study/mas.html](../study/mas.html)
   - Video guide: [05_mas_watch_and_remember.md](05_mas_watch_and_remember.md)
6. [UIR: Robot Decision Making, Planning, and Coordination](06_uir_robot_decision_planning_coordination.md)
   - Estimated time: 5-6.5h full pass; 60m panic pass
   - Interactive HTML: [../study/uir.html](../study/uir.html)
   - Video guide: [06_uir_watch_and_remember.md](06_uir_watch_and_remember.md)

The files are written as Pandoc-compatible Markdown with LaTeX math and A4 PDF metadata.

The coverage audit is in [validation_report.md](validation_report.md).

Blue explanation boxes and yellow example boxes are written as fenced divs, rendered through `styles/admonitions.lua` and `styles/admonitions.tex`.

## Internet Search Result

I found useful official CTU/FEL CourseWare pages and lecture outlines, but no complete public student-answer repository comparable to the common-part repositories. The notes are therefore synthesized from the official state-exam outline, courseware topics, and standard textbook material.

Useful official pages found:

- SMU: https://cw.fel.cvut.cz/wiki/courses/smu/start
- LUP: https://cw.fel.cvut.cz/old/courses/be4m36lup/start
- SSU: https://cw.fel.cvut.cz/b201/courses/be4m33ssu/lectures
- PUI: https://cw.fel.cvut.cz/b212/courses/be4m36pui/lectures
- MAS/CGT: https://cw.fel.cvut.cz/b221/courses/cgt/start
- UIR: https://cw.fel.cvut.cz/b251/courses/uir/start
- UIR lectures: https://cw.fel.cvut.cz/b251/courses/uir/lectures/start

## PDF export

From the project root:

```sh
pandoc ai/01_smu_learnability_bandits_rl.md -o ai/01_smu_learnability_bandits_rl.pdf --pdf-engine=xelatex --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
pandoc ai/02_lup_resolution_proving_model_search.md -o ai/02_lup_resolution_proving_model_search.pdf --pdf-engine=xelatex --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
pandoc ai/03_ssu_erm_mle_em_deep_networks.md -o ai/03_ssu_erm_mle_em_deep_networks.pdf --pdf-engine=xelatex --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
pandoc ai/04_pui_domain_independent_planning.md -o ai/04_pui_domain_independent_planning.pdf --pdf-engine=xelatex --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
pandoc ai/05_mas_agents_multiagent_game_theory.md -o ai/05_mas_agents_multiagent_game_theory.pdf --pdf-engine=xelatex --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
pandoc ai/06_uir_robot_decision_planning_coordination.md -o ai/06_uir_robot_decision_planning_coordination.pdf --pdf-engine=xelatex --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
```

Combined AI PDF:

```sh
pandoc ai/01_smu_learnability_bandits_rl.md ai/02_lup_resolution_proving_model_search.md ai/03_ssu_erm_mle_em_deep_networks.md ai/04_pui_domain_independent_planning.md ai/05_mas_agents_multiagent_game_theory.md ai/06_uir_robot_decision_planning_coordination.md -o ai/ai_specialization_all.pdf --pdf-engine=xelatex --metadata title="Artificial Intelligence Specialization: All Questions" --lua-filter=styles/admonitions.lua --include-in-header=styles/admonitions.tex
```
