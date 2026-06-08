# SSU Watch and Remember Guide

Study page: [study/ssu.html](../study/ssu.html)
Formal notes: [03_ssu_erm_mle_em_deep_networks.md](03_ssu_erm_mle_em_deep_networks.md)

## 1. ERM, Generalization, and VC Dimension

**PAC Learning and VC Dimension**
John Mount, 17:16
https://www.youtube.com/watch?v=X4Oxst5huQA

- 0:00 - Learning setup and error guarantees.
- 4:20 - PAC-style accuracy/confidence framing.
- 10:25 - VC dimension intuition.

Remember:

- True risk is expected loss; empirical risk is training-sample average loss.
- ERM minimizes empirical risk, but the exam asks when that estimate generalizes.
- Hoeffding handles one fixed hypothesis; the finite-class bound adds a union bound over `H`.
- VC dimension is the capacity term for infinite binary classes.

Optional text backup: MIT 6.790, **Learnability and VC Dimension**
https://gradml.mit.edu/supervised/learnability_and_vc/

### Exam-pivot ML fundamentals

These are not in the state-exam headline, but they are in the formal SSU notes and oral pivots. Use them when the examiner asks for "basic ML classifiers/evaluation" around ERM.

**Machine Learning Fundamentals: Bias and Variance**
StatQuest with Josh Starmer, 6:35
https://www.youtube.com/watch?v=EuBBz3bI-aA

- 0:29 - Data example and train/test split.
- 2:15 - Bias as underfitting/systematic error.
- 3:57 - Variance as overfitting/sample sensitivity.
- 5:22 - Choose model complexity by generalization, not training fit.

**Machine Learning Fundamentals: The Confusion Matrix**
StatQuest with Josh Starmer, 7:12
https://www.youtube.com/watch?v=Kdsp6soqA7o

- 0:24 - Why model evaluation needs more than one score.
- 1:38 - True/false positives and true/false negatives.
- 3:41 - Compare algorithms by their error pattern.
- 4:38 - Multiclass confusion matrices.

**Decision and Classification Trees, Clearly Explained!!!**
StatQuest with Josh Starmer, 18:07
https://www.youtube.com/watch?v=_L39rN6gz7Y

- 0:18 - Tree concepts: root, branches, leaves, decisions.
- 3:16 - Gini impurity and split choice.
- 9:15 - Numeric variables and thresholds.
- 15:38 - Preventing overfitting with growth limits/pruning.

**StatQuest: Random Forests Part 1 - Building, Using and Evaluating**
StatQuest with Josh Starmer, 9:54
https://www.youtube.com/watch?v=J4Wdy0Wc_xQ

- 0:23 - Why single trees can be unstable.
- 1:17 - Bootstrap datasets.
- 2:24 - Random feature subsets.
- 5:46 - Bagging: bootstrap plus aggregation.

**Optional: AdaBoost, Clearly Explained**
StatQuest with Josh Starmer, 20:53. Use the 0:56-19:51 segment for the exam idea; skip the full derivation unless boosting is explicitly asked.
https://www.youtube.com/watch?v=LsK-xG1cLYA

- 0:56 - Three main ideas behind AdaBoost.
- 3:58 - Building the first stump.
- 10:27 - Reweighting errors for the next weak learner.
- 19:06 - Combining stumps for classification.

What they may ask:

- Bias versus variance: say underfitting, overfitting, and train/test behavior.
- Confusion-matrix metrics: derive accuracy, precision, recall, specificity, F1, ROC-AUC/PR-AUC, and explain imbalance.
- Decision trees: split by impurity reduction such as Gini or entropy/information gain; control overfitting by depth, pruning, and leaf size.
- Ensembles: bagging/random forests reduce variance by averaging decorrelated trees; boosting trains weak learners sequentially and focuses on previous mistakes.

## 2. Support Vector Machines

**Support Vector Machines Part 1 (of 3): Main Ideas!!!**
StatQuest with Josh Starmer, 20:32. Use the 0:00-18:40 segment for the main exam ideas.
https://www.youtube.com/watch?v=efR1C6CvhmE

- 0:00 - Maximum-margin idea.
- 7:10 - Support vectors.
- 13:40 - Soft margins.

**Support Vector Machines Part 2: The Polynomial Kernel (Part 2 of 3)**
StatQuest with Josh Starmer, 7:15
https://www.youtube.com/watch?v=Toet3EiSFcM

- 0:00 - Why kernels are needed.
- 2:40 - Feature-space lift.
- 5:00 - Kernel trick.

Remember:

- Hard margin: minimize `1/2 ||w||^2` subject to `y_i(w^T x_i + b) >= 1`.
- Soft margin adds slack variables and becomes hinge-loss regularized ERM.
- `C` trades margin size against training violations.
- Kernel SVM prediction uses only support vectors with nonzero dual weights.

## 3. MLE and EM

**Maximum Likelihood, clearly explained!!!**
StatQuest with Josh Starmer, 6:12
https://www.youtube.com/watch?v=XepXtl9YKwc

- 0:00 - Likelihood intuition.
- 2:25 - Fitting distribution parameters.
- 4:05 - Likelihood curve.

**EM algorithm: how it works**
Victor Lavrenko, 7:53
https://www.youtube.com/watch?v=REypj2sy_5U

- 0:00 - Hidden labels / latent variables.
- 2:20 - E-step intuition.
- 5:00 - M-step intuition.

Remember:

- MLE maximizes `sum_i log p_theta(x_i)`.
- Bernoulli and Gaussian-mean MLEs are sample means.
- Latent variables create `log sum_z p_theta(x,z)`.
- EM uses Jensen's inequality: E-step makes the bound tight, M-step improves parameters.
- EM increases likelihood monotonically, but only local optimum is guaranteed.

## 4. Neural Networks and Backpropagation

**But what is a neural network? | Deep learning chapter 1**
3Blue1Brown, 18:40
https://www.youtube.com/watch?v=aircAruvnKk

- 0:00 - Network picture.
- 5:10 - Weights and biases.
- 11:40 - Activations and learned features.

**Backpropagation, intuitively | Deep Learning Chapter 3**
3Blue1Brown, 12:47
https://www.youtube.com/watch?v=Ilg3gGewQ5U

- 0:00 - Recap.
- 2:45 - Output error signal.
- 7:50 - Backward propagation intuition.

Remember:

- A neuron computes `z = w^T x + b`, then `a = sigma(z)`.
- A layer composes affine transformation and nonlinearity.
- Backprop is the chain rule organized backward through the computation graph.
- Gradients are formed from the layer error signal and the previous activation.

## 5. SGD, CNNs, Initialization, and Regularization

**Stochastic Gradient Descent, Clearly Explained!!!**
StatQuest with Josh Starmer, 10:53
https://www.youtube.com/watch?v=vMh0zPT0tLI

- 0:00 - Full gradient.
- 3:10 - Stochastic-gradient idea.
- 7:15 - Minibatches.

**Neural Networks Part 8: Image Classification with Convolutional Neural Networks (CNNs)**
StatQuest with Josh Starmer, 15:23
https://www.youtube.com/watch?v=HGwBXDKFk9I

- 0:00 - Image features.
- 4:00 - Filters.
- 9:20 - Pooling and final classifier.

Remember:

- SGD uses a minibatch gradient estimate instead of the full dataset gradient.
- Xavier and He initialization keep activation/gradient scale stable.
- CNNs use local filters, weight sharing, channels, and pooling/striding.
- Regularization: weight decay, dropout, augmentation, early stopping, validation, normalization, architecture constraints.

## One-Minute Oral Drill

Start:

> "The question begins with ERM: define risk and empirical risk, then explain why generalization needs complexity control."

Then say:

1. Hoeffding for one hypothesis; union bound for finite `H`; VC dimension for infinite classes.
2. Bias/variance and metrics are quick examiner pivots: say TP/FP/TN/FN, precision, recall, F1, ROC-AUC/PR-AUC, and why accuracy can fail on imbalance.
3. Decision trees split by entropy/information gain or Gini; depth/pruning/leaf size fight overfitting. Bagging/random forests reduce variance; boosting focuses on mistakes and can reduce bias.
4. SVM is max-margin regularized ERM; soft margin equals hinge loss with slack; kernels replace dot products.
5. MLE maximizes log-likelihood; consistency needs identifiability/correct model/regularity.
6. EM handles latent variables by alternating posterior responsibilities and expected complete-data optimization.
7. Neural networks compose affine layers and nonlinearities; backprop computes gradients; SGD/minibatches train; CNNs and regularization are practical deep-learning details.
