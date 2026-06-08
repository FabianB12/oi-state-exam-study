---
title: "AI Specialization 3: Empirical Risk, MLE, EM, and Neural Networks"
course: "BE4M33SSU"
status: "compiled"
papersize: "a4"
geometry: "margin=2.5cm"
fontsize: "11pt"
---

[Study page](../study/ssu.html) | [Watch guide](03_ssu_watch_and_remember.md)

# AI Specialization 3: SSU

Minimizing empirical risk. Maximum likelihood estimation, EM algorithm. Classical and deep neural networks and their learning.

**Sources used:** official CTU CourseWare page for BE4M33SSU lectures, which lists empirical risk, empirical risk minimization, SVMs, supervised learning for deep networks, SGD/deep convolutional networks, and generative learning/EM; CTU state-exam topic list; standard statistical learning material.

![Supervised-learning pipeline: data and a hypothesis class define an objective, training optimizes it, and generalization controls performance on unseen data.](assets/visuals/rendered/ssu_learning_pipeline.png){width=100%}

\clearpage

\begin{center}
\includegraphics[width=\textwidth]{assets/visuals/rendered/ssu_plain.png}
\end{center}

\clearpage

## 1. Empirical Risk Minimization

### Prediction setup

Let examples $(x,y)$ be drawn from unknown distribution $P(X,Y)$. A predictor $h:X\to Y$ is chosen from hypothesis class $H$. A loss function $\ell(h(x),y)$ measures error.

Examples:

- 0/1 classification loss: $\ell(\hat y,y)=\mathbf{1}[\hat y\ne y]$.
- Squared regression loss: $\ell(\hat y,y)=(\hat y-y)^2$.
- Hinge loss: $\ell(y f(x))=\max(0,1-yf(x))$.
- Logistic loss: $\ell(y f(x))=\log(1+\exp(-yf(x)))$.

### Risk and empirical risk

True risk:

$$
R(h)=\mathbb{E}_{(x,y)\sim P}[\ell(h(x),y)].
$$

Empirical risk on sample $S=\{(x_i,y_i)\}_{i=1}^m$:

$$
\hat R_S(h)=\frac1m\sum_{i=1}^m \ell(h(x_i),y_i).
$$

Empirical risk minimization (ERM):

$$
\hat h \in \arg\min_{h\in H}\hat R_S(h).
$$

ERM works when empirical risk uniformly approximates true risk over $H$.

### Hoeffding inequality

If $Z_1,\ldots,Z_m$ are independent random variables in $[0,1]$ with mean $\mu$, then

$$
\Pr\left[\left|\frac1m\sum_i Z_i-\mu\right|\ge\epsilon\right]\le 2e^{-2m\epsilon^2}.
$$

For a fixed hypothesis $h$, this bounds deviation between $\hat R_S(h)$ and $R(h)$.

For finite $H$, union bound gives:

$$
\Pr\left[\exists h\in H:\ |\hat R_S(h)-R(h)|>\epsilon\right]\le 2|H|e^{-2m\epsilon^2}.
$$

Thus with probability at least $1-\delta$:

$$
\forall h\in H:\quad
R(h)\le \hat R_S(h)+\sqrt{\frac{\ln(2|H|/\delta)}{2m}}.
$$

### Generalization bounds

A generalization bound upper-bounds true risk using empirical risk plus a complexity term:

$$
R(h) \le \hat R_S(h) + complexity(H,m,\delta).
$$

For infinite classes, VC dimension replaces $\ln |H|$. If $VC(H)=d$, typical rates scale like

$$
O\left(\sqrt{\frac{d+\ln(1/\delta)}{m}}\right).
$$

The message: low training error is not enough; model class complexity matters.

::: {.bluebox title="Simple explanation"}

Empirical risk is training error. True risk is real-world error. Generalization bounds explain when training error is trustworthy: more data and simpler hypothesis classes make the gap between training and real-world performance smaller.

:::

::: {.yellowbox title="Example"}

If a classifier makes 3 mistakes on 100 training examples, its empirical 0/1 risk is $0.03$. This does not prove the real-world error is exactly 3%; a generalization bound adds a safety margin depending on sample size and hypothesis complexity.

:::

### Statistical consistency

A learning algorithm is statistically consistent if, as $m\to\infty$, its risk converges to the best achievable risk in the considered class or to Bayes risk.

ERM is consistent under conditions such as:

- hypothesis class has finite VC dimension,
- uniform convergence holds,
- optimization solves or approximates ERM,
- the class is rich enough if consistency is meant relative to Bayes risk.

### VC dimension

VC dimension is the largest number of points that can be shattered by $H$. It measures expressive power for binary classification.

Examples:

- Intervals on the real line: VC dimension 2.
- Linear classifiers in $\mathbb{R}^d$: VC dimension $d+1$.

High VC dimension permits fitting many labelings and increases overfitting risk.

### Bias, variance, evaluation, trees, and ensembles

These are nearby machine-learning fundamentals that often appear as follow-up oral drills.

**Bias-variance intuition:**

- Bias is systematic error from an overly simple or misspecified model.
- Variance is sensitivity to the particular training sample.
- More flexible models tend to reduce bias but increase variance.
- Regularization, more data, averaging, early stopping, and simpler architectures reduce variance.

**Evaluation metrics from the confusion matrix:**

- $TP,FP,TN,FN$ are true positives, false positives, true negatives, and false negatives.
- Accuracy: $(TP+TN)/(TP+FP+TN+FN)$.
- Precision: $TP/(TP+FP)$.
- Recall/sensitivity: $TP/(TP+FN)$.
- Specificity: $TN/(TN+FP)$.
- F1: harmonic mean of precision and recall.
- ROC-AUC varies the threshold and plots true positive rate vs. false positive rate.
- PR-AUC is often more informative for rare positive classes.

For imbalanced data, raw accuracy can be misleading; report precision, recall, F1, PR-AUC, or class-specific errors.

**Decision trees:**

A decision tree recursively splits the feature space. A split is chosen to reduce node impurity, commonly by information gain/entropy or by Gini impurity. Leaves predict a class label, class probability, or regression value.

Trees are interpretable and handle nonlinear feature interactions, but high-depth trees overfit. Control them with maximum depth, minimum leaf size, pruning, validation, or ensembles.

**Ensembles:**

- Bagging trains models on bootstrap samples and averages/votes, mainly reducing variance.
- Random forests bag decision trees and additionally sample features at each split, reducing correlation between trees.
- Boosting trains weak learners sequentially, focusing later learners on previous errors; it can reduce bias but needs learning-rate/depth/early-stopping regularization.

\newpage

## 2. Support Vector Machines

### Linear separable SVM

Binary labels $y_i\in\{-1,+1\}$, classifier

$$
f(x)=w^Tx+b.
$$

Correct classification with margin:

$$
y_i(w^Tx_i+b)\ge 1.
$$

Margin is $2/\|w\|$. Maximizing margin equals minimizing $\frac12\|w\|^2$:

$$
\min_{w,b}\frac12\|w\|^2
\quad \text{s.t.}\quad y_i(w^Tx_i+b)\ge1.
$$

### Soft-margin SVM

Allow violations with slack variables $\xi_i\ge0$:

$$
\min_{w,b,\xi}\frac12\|w\|^2+C\sum_i\xi_i
$$

subject to:

$$
y_i(w^Tx_i+b)\ge1-\xi_i,\quad \xi_i\ge0.
$$

Equivalent regularized ERM with hinge loss:

$$
\min_{w,b}\frac12\|w\|^2+C\sum_i \max(0,1-y_i(w^Tx_i+b)).
$$

Parameter $C$ trades margin size against training errors.

### Kernel SVM

The dual form depends on dot products $x_i^Tx_j$. Replace them by kernel

$$
K(x_i,x_j)=\phi(x_i)^T\phi(x_j)
$$

without explicitly constructing $\phi$.

Common kernels:

- polynomial: $K(x,z)=(x^Tz+c)^p$,
- RBF/Gaussian: $K(x,z)=\exp(-\|x-z\|^2/(2\sigma^2))$.

Prediction:

$$
f(x)=\sum_i \alpha_i y_i K(x_i,x)+b.
$$

Only support vectors have $\alpha_i>0$.

::: {.bluebox title="Simple explanation"}

An SVM is mostly determined by the borderline examples. Points far away from the separating boundary do not affect the final classifier; the support vectors are the points that hold the margin in place.

:::

::: {.yellowbox title="Example"}

In 2D, imagine two classes separated by a line. If you move a point far inside its class region, the best separating line usually does not move. If you move a point lying on the margin, the line may change; that point is a support vector.

:::

\newpage

## 3. Maximum Likelihood and EM

### Maximum likelihood estimator

Given data $D=\{x_i\}_{i=1}^m$ and parametric model $p_\theta(x)$, likelihood:

$$
L(\theta)=\prod_{i=1}^m p_\theta(x_i).
$$

Log-likelihood:

$$
\ell(\theta)=\sum_{i=1}^m \log p_\theta(x_i).
$$

MLE:

$$
\hat\theta_{MLE}\in\arg\max_\theta \ell(\theta).
$$

Examples:

- Bernoulli MLE: $\hat p = \frac{1}{m}\sum_i x_i$.
- Gaussian mean MLE: sample mean.

### Consistency of an estimator

Estimator $\hat\theta_m$ is consistent for $\theta^*$ if

$$
\hat\theta_m \xrightarrow{P} \theta^*
$$

as $m\to\infty$. MLE is consistent under regularity and identifiability conditions: correct model family, enough data, identifiable parameters, and suitable smoothness.

### Latent-variable likelihood

For latent variables $z$:

$$
p_\theta(x)=\sum_z p_\theta(x,z)
$$

or integral for continuous $z$. Direct maximization of

$$
\sum_i \log \sum_z p_\theta(x_i,z)
$$

is often hard because of the log of a sum.

### EM lower bound

For any distribution $q_i(z)$:

$$
\log p_\theta(x_i)
= \log \sum_z q_i(z)\frac{p_\theta(x_i,z)}{q_i(z)}
\ge \sum_z q_i(z)\log\frac{p_\theta(x_i,z)}{q_i(z)}
$$

by Jensen's inequality.

Define lower bound:

$$
\mathcal{L}(q,\theta)
=\sum_i\sum_z q_i(z)\log p_\theta(x_i,z)
-\sum_i\sum_z q_i(z)\log q_i(z).
$$

The gap to log-likelihood is a KL divergence:

$$
\log p_\theta(D)-\mathcal{L}(q,\theta)
=\sum_i KL(q_i(z)\|p_\theta(z|x_i)).
$$

### EM algorithm

EM performs block-coordinate ascent on the lower bound. Equivalently, if the objective is written as negative log-likelihood or negative lower bound, the same procedure can be described as block-coordinate descent.

**E-step:**

$$
q_i(z) \leftarrow p_{\theta^{old}}(z|x_i).
$$

This makes the lower bound tight at current parameters.

**M-step:**

$$
\theta^{new}\leftarrow\arg\max_\theta
\sum_i\mathbb{E}_{z\sim q_i}[\log p_\theta(x_i,z)].
$$

EM monotonically increases likelihood, but may converge to a local optimum.

::: {.bluebox title="Simple explanation"}

EM alternates between guessing hidden variables and refitting parameters. In a Gaussian mixture, the E-step softly assigns points to clusters; the M-step recomputes cluster means, variances, and weights from those soft assignments.

:::

::: {.yellowbox title="Example"}

For a two-Gaussian mixture and one data point $x$, the E-step might compute responsibilities $0.8$ for cluster 1 and $0.2$ for cluster 2. In the M-step, $x$ contributes 80% of its weight to updating cluster 1's mean and 20% to cluster 2's mean.

:::

Typical applications:

- Gaussian mixture models,
- hidden Markov models,
- missing data,
- mixture of experts.

\newpage

## 4. Deep Networks and Their Training

### Neuron

A neuron computes:

$$
z=w^Tx+b,\quad a=\sigma(z),
$$

where $\sigma$ is activation function.

Common activations:

- sigmoid: $\sigma(z)=1/(1+e^{-z})$,
- tanh,
- ReLU: $\max(0,z)$,
- leaky ReLU,
- softmax for multiclass output.

### Network architectures

Feedforward neural network:

$$
h^{(l)}=\sigma(W^{(l)}h^{(l-1)}+b^{(l)}).
$$

Architectural types:

- MLP: fully connected layers.
- CNN: convolution, pooling, local receptive fields.
- RNN/LSTM/GRU: sequence models.
- Residual networks: skip connections to ease optimization.
- Autoencoders: learn latent representation by reconstruction.

### Convolutional networks

Convolutional layer applies learned filters over spatial positions:

$$
y_{k,i,j}=\sum_{c,u,v} W_{k,c,u,v}x_{c,i+u,j+v}+b_k.
$$

Key ideas:

- local connectivity,
- weight sharing,
- translation equivariance,
- pooling/striding for spatial downsampling,
- many channels/features.

CNNs are standard for images and spatial signals.

### Backpropagation

Backprop computes gradients by chain rule from output layer backward.

::: {.bluebox title="Simple explanation"}

Backpropagation is bookkeeping for the chain rule. First compute how wrong the output is, then move backward layer by layer, asking how much each weight contributed to that error.

:::

For layer:

$$
z^{(l)}=W^{(l)}a^{(l-1)}+b^{(l)},\quad a^{(l)}=\sigma(z^{(l)}).
$$

Error signal:

$$
\delta^{(l)} = \frac{\partial L}{\partial z^{(l)}}.
$$

Gradients:

$$
\frac{\partial L}{\partial W^{(l)}}=\delta^{(l)}(a^{(l-1)})^T,\quad
\frac{\partial L}{\partial b^{(l)}}=\delta^{(l)}.
$$

Backward recursion:

$$
\delta^{(l)}=((W^{(l+1)})^T\delta^{(l+1)})\odot\sigma'(z^{(l)}).
$$

### Layer types

Common layers:

- dense/fully connected,
- convolution,
- pooling,
- normalization, e.g. batch normalization,
- dropout,
- recurrent layers,
- residual/skip connections,
- embedding layers.

### Parameter initialization

Bad initialization can cause vanishing/exploding activations and gradients.

Common schemes:

- Xavier/Glorot for tanh/sigmoid-like activations:

$$
Var(W)\approx \frac{2}{n_{in}+n_{out}}.
$$

- He initialization for ReLU:

$$
Var(W)\approx \frac{2}{n_{in}}.
$$

Biases are often initialized to zero or small constants.

### Stochastic gradient descent

Full gradient descent:

$$
\theta\leftarrow\theta-\eta\nabla_\theta L(\theta).
$$

SGD estimates gradient from minibatch $B$:

$$
\theta\leftarrow\theta-\eta\frac1{|B|}\sum_{i\in B}\nabla_\theta \ell_i(\theta).
$$

Practical improvements:

- momentum,
- Adam/RMSProp,
- learning-rate schedules,
- weight decay,
- early stopping,
- data augmentation,
- normalization.

### Overfitting and generalization in deep networks

Deep networks can overfit because they have many parameters. Regularization methods:

- explicit penalties: $L_2$/weight decay,
- dropout,
- data augmentation,
- early stopping,
- batch normalization effects,
- architecture constraints.

Even overparameterized networks can generalize well, but exam answers should emphasize training/validation split and regularization.

## Exam Checklist

- Define risk, empirical risk, ERM.
- State Hoeffding inequality and finite-class generalization bound.
- Explain consistency and VC dimension.
- Explain bias/variance, decision trees, ensembles, and evaluation metrics.
- Formulate hard/soft-margin SVM and kernel trick.
- Define MLE and consistency.
- Derive EM as lower-bound maximization with E-step and M-step.
- Explain neurons, MLPs, CNNs, backpropagation, layer types.
- Explain initialization and SGD/minibatch training.
