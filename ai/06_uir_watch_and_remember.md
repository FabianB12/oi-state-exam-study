# UIR Watch and Remember Guide

Use the HTML page at `study/uir.html` for embeds, flashcards, quizzes, and labs. This file is the compact checklist of what to watch and what to remember.

## 1. Robot paradigms and control architectures

- [04.00 Robot control architectures - Rico Picone, PhD (12:04)](https://www.youtube.com/watch?v=x12EFvoV_Gw)
  - 0:00 architecture frame
  - 3:25 reactive vs deliberative
  - 7:55 layers
- [04.02 Robot reactive control architectures - Rico Picone, PhD (17:05)](https://www.youtube.com/watch?v=mZqagiVjBp4)
  - 0:00 reactive idea
  - 4:30 behaviors
  - 11:30 pros and limits
- [ECE425 Hybrid Deliberative/Reactive Paradigm - Rose-Hulman Online (9:35)](https://www.youtube.com/watch?v=dnidauuaWYU)
  - 0:00 hybrid setup
  - 4:10 coordination
  - 7:10 tradeoffs

Remember: robot = embodied agent; sensors are proprioceptive or exteroceptive; actuators cause physical change; hierarchical is systematic but slow, reactive is fast but local, hybrid is practical but harder to integrate.

## 2. Path and motion planning

- [Robot Motion Planning: Introduction, Road Map, and Configuration Spaces - Algorithms Lab (17:44)](https://www.youtube.com/watch?v=p8AzzvwV5M4)
  - 0:00 problem
  - 4:45 configuration space
  - 11:30 roadmaps
- [Path Planning with A* and RRT - MATLAB Autonomous Navigation, Part 4 (17:55)](https://www.youtube.com/watch?v=QR3U1dgc5RE)
  - 0:00 planning stack
  - 3:50 A*
  - 11:30 RRT contrast
- [Graph Search - Modern Robotics / Northwestern Robotics (9:26)](https://www.youtube.com/watch?v=ZI800-2jv38)
  - 0:00 graph setup
  - 3:30 search idea
  - 7:10 A* intuition
- [Grid Methods for Motion Planning - Modern Robotics / Northwestern Robotics (4:26)](https://www.youtube.com/watch?v=kCZAgL3jdxk)
  - 0:00 grid idea
  - 2:00 resolution tradeoff
  - 3:30 multi-resolution
- [Advanced 1. Incremental Path Planning - MIT OpenCourseWare (1:22:46, optional longer lecture)](https://ocw.mit.edu/courses/16-412j-cognitive-robotics-spring-2016/resources/advanced-lecture-1/)
  - Watch about 34:00-54:00 for the D* Lite portion.
  - Timestamp buttons on the page jump to 20:00, 34:00, and 45:00.

Remember: path planning is geometric; motion planning adds kinematics/dynamics. Configuration space makes robot motion into point motion through `C_free`. D* Lite repairs previous search with `g` and `rhs` values.

## 3. Exploration and multi-robot task allocation

- [Mobile Robotics - Frontier Exploration - Rémy Guyonneau (1:01)](https://www.youtube.com/watch?v=B-dSyKx4Fsc)
  - 0:00 frontiers
  - 0:30 choose target
- [FrontierNet: Learning Visual Cues to Explore - ETH Zurich CVG (5:03)](https://www.youtube.com/watch?v=dFEvxGz_HP0)
- [ICRA 2021 - Three-Dimensional Terrain Aware Autonomous Exploration for Confined Spaces - VeRLab (12:00)](https://www.youtube.com/watch?v=yXycgBDhSME)
- [Mutual Information, Clearly Explained - StatQuest (16:14)](https://www.youtube.com/watch?v=eJIp_mgVLwE)
  - 0:00 why mutual information matters
  - 6:19 discrete mutual information calculation
  - 14:10 connection to entropy
- [Decentralized Multi-Robot Task Allocation with Time Window and Ordering Constraints - People and Robots Lab (4:53)](https://www.youtube.com/watch?v=8SiAhcRciR0)

Remember: frontier = known-free/unknown boundary. Utility is often information gain minus travel penalty. Information methods use entropy and mutual information. Centralized MRTA optimizes globally but bottlenecks; decentralized MRTA scales but may be suboptimal.

## 4. Multi-goal and data-collection planning

- [Coding a Dubins Car Optimal Path Planner - Aaron Becker (8:05)](https://www.youtube.com/watch?v=tjUVE3jto98)
- [Kristyna Kucerova: Finding Time-efficient Trajectories for Dubins Vehicle - AI Center FEE CTU (16:30)](https://www.youtube.com/watch?v=UEv-9MqBijg)
- [The Dubins Traveling Salesman Problem with Neighborhoods in the Three-Dimensional Space - ICRA 2018 (3:00)](https://www.youtube.com/watch?v=m5hwgP1PxMw)
- [Greedy Randomized Adaptive Search Procedure for Close Enough Orienteering Problem - CTU Computational Robotics Lab (13:14)](https://www.youtube.com/watch?v=ek6mfGX73kg)
  - 0:00 route with neighborhoods
  - 4:05 profit/route idea
  - 8:40 algorithm preview

Remember: robotic TSP variants include ATSP, GTSP, TSPN, Dubins TSP, orienteering, team orienteering, and prize-collecting TSP. Dubins paths use bounded curvature and path types like LSL/RSR/LSR/RSL/RLR/LRL. Routing with profits chooses valuable measurements under budget.

## 5. Sampling-based motion planning

- [PRM Sampling Methods - Modern Robotics / Northwestern Robotics (3:12)](https://www.youtube.com/watch?v=rKe6HO8LDu0)
  - 0:00 PRM idea
  - 1:15 build roadmap
  - 2:25 query phase
- [RRT Sampling Methods - Modern Robotics / Northwestern Robotics (7:14)](https://www.youtube.com/watch?v=Ao7p_xiUu4s)
  - 0:00 RRT idea
  - 1:40 sample-nearest-extend
  - 6:00 local planner
- [Fast comparison: Motion Planning Algorithms (RRT, RRT*, PRM) - MIT 6.881 Final Project (5:41)](https://www.youtube.com/watch?v=gP6MRe_IHFo)
- [Lecture 10 Motion Planning: PRM, RRT, Trajopt - UC Berkeley CS287/Pieter Abbeel (1:23:51, optional longer lecture)](https://www.youtube.com/watch?v=ZDuoQRutcfk)
  - Use about 9:00-29:00 if you want the fuller university explanation.

Remember: PRM is multi-query; RRT is single-query; RRT* rewires. Probabilistic completeness means eventual path finding with probability approaching 1 if a path exists. Asymptotic optimality means cost converges to optimum.
