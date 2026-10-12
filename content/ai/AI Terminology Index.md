---
title: "AI Terminology Index"
aliases:
  - "AI Glossary"
tags:
  - glossary/ai
  - moc
summary: "Index of every term in the plain English AI glossary."
---

# AI Terminology Index

Every term from the plain English AI glossary, one note each. Each note has a plain view, a technical view, and a short list of related terms. The sections below run in the order the original glossary used, so each group builds on the ones before it.

Source document: [[ai-glossary]]

## The Foundations

- [[Artificial Intelligence]]: The broad field of getting computers to do things that normally require human thinking.
- [[Machine Learning]]: Teaching a computer by showing it examples instead of writing step by step instructions.
- [[Supervised Learning]]: Learning from examples that come with the right answers already attached.
- [[Unsupervised Learning]]: Learning from data with no answers provided.
- [[Reinforcement Learning]]: Learning by trying things and receiving rewards or penalties, rather than being shown correct answers.
- [[Self-supervised Learning]]: Learning from data that labels itself.
- [[Transfer Learning]]: Reusing what a model learned on one job to help it on another.
- [[Algorithm]]: A fixed set of steps for getting from an input to an output.
- [[Model]]: A simplified representation of something, used to make predictions about it.
- [[Search and Optimisation]]: Finding the best option among many.
- [[Heuristic]]: A rule of thumb that usually works and is not guaranteed to.
- [[Inductive Bias]]: The assumptions built into a model before it sees any data, which decide what it can learn easily and what it will struggle with.
- [[Generalisation]]: Performing well on things you have not seen before, which is the entire point.
- [[Interpolation and Extrapolation]]: Filling in between examples you have seen, versus reaching beyond them.
- [[No Free Lunch Theorem]]: The result that no learning method is best at everything.
- [[Automation]]: Having a machine do something a person did.
- [[Manifold Hypothesis]]: The idea that real-world data, such as photographs or speech, occupies only a tiny, smoothly shaped region of all the combinations it could in principle take.
- [[The Bitter Lesson]]: An influential essay by the computer scientist Richard Sutton arguing that, over the long run, simple methods that make the most of growing computing power beat clever methods built on human expertise.

## Maths and Statistics

- [[Vector]]: A list of numbers treated as a single thing.
- [[Matrix and Tensor]]: A matrix is a grid of numbers; a tensor is the same idea extended to more dimensions.
- [[Dot Product and Cosine Similarity]]: The two standard ways of asking how similar two lists of numbers are.
- [[Probability Distribution]]: A description of how likely each possible outcome is.
- [[Bayes' Theorem]]: The rule for updating what you believe when new evidence arrives.
- [[Prior and Posterior]]: What you believed before seeing the evidence, and what you believe after.
- [[Expected Value]]: The average outcome if you repeated something many times, weighting each possibility by how likely it is.
- [[Variance and Standard Deviation]]: How spread out a set of numbers is.
- [[Normal Distribution]]: The bell curve.
- [[Sampling and Sampling Bias]]: Taking a subset to stand in for the whole, and the ways that goes wrong.
- [[Correlation and Causation]]: Two things moving together does not mean one causes the other.
- [[Statistical Significance and the p-value]]: A measure of how surprising your result would be if nothing were really going on.
- [[Confidence Interval]]: A range that expresses how precisely you actually know something.
- [[Entropy and Information]]: A measure of uncertainty.
- [[Kullback-Leibler Divergence]]: A measure of how far one probability distribution is from another.
- [[Gradient]]: The direction of steepest increase, and how steep it is.
- [[Derivative and the Chain Rule]]: A derivative is the rate at which one thing changes as another changes.
- [[Convexity]]: A shape with a single bottom, like a bowl.
- [[Eigenvalues and Eigenvectors]]: The directions a transformation leaves pointing the same way, and how much it stretches them.
- [[Monte Carlo Methods]]: Answering a hard question by trying many random possibilities and looking at what happens.
- [[Markov Chain]]: A process where what happens next depends only on where you are now, not on how you got there.
- [[Central Limit Theorem]]: Add up enough independent random things and the total tends towards a bell curve, regardless of what the individual things looked like.
- [[Curse of Dimensionality]]: Things get strange when data has many columns.
- [[Normalisation and Standardisation]]: Putting different measurements on a comparable scale before feeding them to a model.
- [[Outlier]]: A value far away from the rest.
- [[Simpson's Paradox]]: A pattern that appears in every subgroup can reverse when the groups are combined.
- [[Base Rate Fallacy]]: Ignoring how common something is when judging a test result.
- [[Aleatoric and Epistemic Uncertainty]]: Two different reasons for not knowing.
- [[Linear Algebra]]: The branch of mathematics that deals with lists and grids of numbers and the rules for combining them, and the working language of almost all modern AI.
- [[Maximum Likelihood Estimation]]: A method for choosing a model's settings by asking which settings would have made the data you actually saw most likely.
- [[Mutual Information]]: A measure of how much knowing one thing tells you about another.
- [[Regression to the Mean]]: The tendency for an unusually extreme result to be followed by one closer to average, simply because part of the extreme result was luck.
- [[Singular Value Decomposition]]: A way of breaking any grid of numbers into three simpler pieces that reveal its most important directions and how much each one matters.
- [[Survivorship Bias]]: The error of drawing conclusions only from the cases that made it through some filter, while ignoring the ones that did not.

## Classical Machine Learning

- [[Classification and Regression]]: The two basic shapes of prediction problem.
- [[Linear and Logistic Regression]]: The simplest useful models, and the sensible place to start.
- [[Decision Tree]]: A model that works by asking a series of yes or no questions, like a flowchart.
- [[Random Forest and Gradient Boosting]]: Two ways of combining many decision trees into something far better than any one of them.
- [[Clustering]]: Sorting data into groups without being told what the groups are.
- [[Dimensionality Reduction]]: Squashing data with a great many columns down to a handful while keeping most of what matters.
- [[Ensemble]]: Combining several models so that their mistakes cancel out.
- [[Feature Engineering]]: Deciding what to actually show the model.
- [[Support Vector Machine]]: A method that separates two groups by finding the widest possible gap between them.
- [[K-Nearest Neighbours]]: Predict by looking at the most similar examples you have already seen and taking their answer.
- [[Naive Bayes]]: A fast classifier that assumes every feature is independent of every other.
- [[Gaussian Mixture Model]]: A way of describing data as a blend of several overlapping groups, where each point belongs partly to each rather than being assigned to one.
- [[Hidden Markov Model]]: A model for sequences where the thing you care about is hidden and you only see its effects.
- [[Anomaly Detection]]: Finding the unusual without being told in advance what unusual looks like.
- [[Time Series Forecasting]]: Predicting what comes next when order matters and yesterday influences today.
- [[Causal Inference]]: Working out what would happen if you actually intervened, rather than what tends to accompany what.
- [[Uplift Modelling]]: Predicting not who will act, but who will act because you intervened.
- [[Imbalanced Data and Resampling]]: What to do when one outcome is rare.
- [[One-hot Encoding]]: Turning a category into numbers without accidentally implying an order.
- [[Missing Data and Imputation]]: Deciding what to do about blanks.
- [[Semi-supervised Learning]]: Using a small amount of labelled data together with a large amount of unlabelled data.
- [[Active Learning]]: Letting the model choose what to label next.
- [[Online Learning]]: Updating the model continuously as new data arrives, rather than retraining in batches.
- [[Multi-armed Bandit]]: Deciding how to split effort between trying new options and using the one that already works.
- [[Contrastive Learning]]: Learning by comparison rather than by labels.
- [[Pseudo-labelling and Self-training]]: Using a model's own confident predictions as training data for the next round.
- [[Multi-label and Ordinal Classification]]: Two variations on sorting into categories.
- [[Learning to Rank]]: Producing a good ordering rather than a good score for each item individually.
- [[Bias-Variance Trade-off]]: The tension between a model that is too simple to capture the real pattern and one so flexible that it chases the noise in its training examples.
- [[Feature Importance]]: A score showing how much each input contributed to a model's predictions, such as how much income, age or postcode mattered in a loan decision.

## How the Machinery Works

- [[Neural Network]]: The structure that does the learning in nearly all modern AI.
- [[Weights, Parameters and Biases]]: The internal numbers a model adjusts as it learns.
- [[Layers]]: The stacked stages inside a neural network.
- [[Deep Learning]]: Machine learning using neural networks with many layers.
- [[Backpropagation]]: The method for working out which of a model's millions of internal settings were responsible for a mistake.
- [[Gradient Descent]]: The actual nudging, done alongside backpropagation.
- [[Overfitting]]: When a model learns its training examples so closely that it fails on anything new.
- [[Loss Function]]: The number that tells a model how wrong it currently is.
- [[Activation Function]]: The small non-linear step applied inside each unit of a neural network.
- [[Hyperparameters]]: The settings a human chooses before training starts, as opposed to the numbers the model works out for itself.
- [[Regularisation and Dropout]]: Deliberately handicapping a model during training so that it generalises rather than memorises.
- [[Batch Normalisation]]: Rescaling the numbers passing between layers so they stay in a sensible range.
- [[Layer Normalisation]]: The same idea as batch normalisation, but rescaling across the features of each individual example rather than across a batch.
- [[Residual Connection]]: Letting information skip past a layer and be added back on the other side.
- [[Vanishing and Exploding Gradients]]: When error signals shrink to nothing or blow up to infinity as they travel back through many layers.
- [[Weight Initialisation]]: The random values a network starts with before it learns anything.
- [[Optimiser]]: The component that decides how to apply each update during training.
- [[Learning Rate Schedule]]: Changing the step size as training progresses.
- [[Gradient Clipping]]: Putting a ceiling on how large a single update can be.
- [[Gradient Accumulation]]: Pretending to use a large batch when your hardware cannot fit one.
- [[Mixed Precision Training]]: Doing most of the arithmetic in a lower-precision number format to go faster and use less memory, while keeping the sensitive parts in full precision.
- [[Gradient Checkpointing]]: Throwing away intermediate results during the forward pass and recomputing them later when they are needed, in order to fit a larger model into memory.
- [[Embedding Layer]]: The first thing that happens inside a language model.
- [[Feed-forward Network]]: The other half of a transformer block, sitting after attention.
- [[Transformer Block]]: The unit that repeats.
- [[Autoencoder]]: A network trained to reproduce its own input after squeezing it through a narrow middle.
- [[Variational Autoencoder]]: An autoencoder that learns a distribution rather than a single point for each input, which makes the compressed space smooth enough to generate from.
- [[Graph Neural Network]]: A network for data shaped like a network: molecules, road systems, social connections, supply chains.
- [[U-Net]]: An architecture shaped like a U: compress the input step by step, then expand it back, with direct connections across from each level of the descent to the matching level of the ascent.
- [[Vision Transformer]]: Applying the language model architecture to pictures by cutting the image into small squares and treating each square like a word.
- [[State Space Model]]: An alternative to attention that processes a sequence by maintaining a running summary, rather than looking back at everything each time.
- [[Linear Attention]]: Reformulating attention so its cost grows in proportion to the length of the input rather than with the square of it.
- [[Sparse Attention]]: Having each position attend to only some of the others rather than all of them, chosen by a fixed pattern or learned.
- [[Loss Landscape]]: A way of picturing training as walking across hilly terrain, where each point is one possible setting of the model and its height is how badly that setting performs.
- [[Perceptron]]: One of the first artificial neurons that could learn: a simple unit that adds up weighted inputs and answers yes or no depending on whether the total passes a threshold.
- [[Universal Approximation Theorem]]: A mathematical result showing that a neural network with enough artificial neurons can, in principle, imitate almost any smooth relationship between inputs and outputs as closely as you like.

## Other Kinds of Neural Network

- [[Convolutional Neural Network]]: The design that dominated image work for about a decade.
- [[Recurrent Neural Network]]: The older approach to handling sequences such as sentences or time series.
- [[Diffusion Model]]: The approach behind most image generators.
- [[Generative Adversarial Network]]: An older approach to generating images, built as a contest between two networks.
- [[Long Short-Term Memory]]: A kind of neural network designed to remember information over long stretches of a sequence, such as words in a sentence or readings over time.

## Language Models Specifically

- [[Large Language Model]]: A very large neural network trained to predict the next word in a piece of text.
- [[Transformer]]: The particular design of neural network that nearly all modern language models use.
- [[Attention]]: The mechanism that lets a model decide which earlier words matter most when working out what comes next.
- [[Tokens]]: The small chunks of text a model actually works with.
- [[Context Window]]: How much text a model can hold in view at once, counting both what you have sent and what it has replied.
- [[Autoregressive Generation]]: The one-at-a-time way a language model writes.
- [[Logits and Softmax]]: What the model actually produces before you see any text.
- [[Encoder, Decoder and Encoder-Decoder]]: Three arrangements of the transformer, suited to different jobs.
- [[Positional Encoding]]: How a transformer knows what order the words came in.
- [[Lost in the Middle]]: The finding that models attend well to the start and the end of a long input and less well to everything in between.
- [[Flash Attention]]: A rewritten implementation of attention that gets the same answer far faster by being careful about how it moves numbers around the chip.
- [[Grouped Query Attention]]: Letting several attention heads share the same stored keys and values rather than each keeping its own.
- [[Context Length Extension]]: Making a model handle longer inputs than it was trained on.
- [[Byte Pair Encoding]]: The method that decides where words get split into tokens.
- [[Vocabulary and Special Tokens]]: The fixed list of tokens a model knows, plus a handful of markers that are not words at all: start of text, end of turn, and similar.
- [[Chat Template]]: The exact formatting that turns a list of messages into the single string a model actually sees.
- [[Greedy Decoding]]: Always taking the single most likely next token.
- [[Beam Search]]: Keeping several candidate continuations alive at once and choosing the best complete one at the end, rather than committing to each word as you go.
- [[Repetition Penalty]]: A blunt setting that discourages the model from saying the same thing again.
- [[Logit Bias]]: Directly forcing the model towards or away from specific words.
- [[Stop Sequence]]: A string that tells generation to end when it appears.
- [[Prefill and Decode]]: The two phases of answering.
- [[Assistant Prefill]]: Starting the model's answer for it.
- [[Attention Sink]]: The habit language models have of directing a large share of their attention to the first few words of a text, even when those words carry little meaning.
- [[Induction Head]]: A small mechanism found inside language models that spots a repeated pattern and continues it: if 'Mr' was followed by 'Dursley' earlier in the text, then when 'Mr' appears again, it predicts 'Dursley'.
- [[Masked Language Modelling]]: A way of training a language model by hiding some words in a sentence and asking it to guess them from the words on both sides.
- [[Multi-head Attention]]: A version of attention, the step where a model weighs which other words matter, that runs several separate attention processes side by side.

## Data

- [[Training Corpus]]: The body of text, images or other material a model learns from.
- [[Data Labelling and Annotation]]: The human work of marking up examples so a model can learn from them.
- [[Data Curation and Deduplication]]: Cleaning and choosing what goes into training.
- [[Common Crawl and Web Scraping]]: Where most of the text actually comes from.
- [[Data Licensing]]: The agreements that determine whether material can lawfully be used to train a model.
- [[Data Poisoning]]: Deliberately putting corrupted material into training data so that a model learns something harmful.
- [[Data Quality]]: Whether your data is fit for the use you have in mind.
- [[Data Lineage]]: Knowing where a number came from and what happened to it on the way.
- [[Schema and Metadata]]: The description of what your data looks like and what it means.
- [[Data Augmentation]]: Creating extra training examples by altering the ones you have.
- [[Personally Identifiable Information]]: Data that identifies a person, which is a wider category than most people assume.
- [[Anonymisation and Pseudonymisation]]: Two different things that get used interchangeably and should not be.
- [[Data Minimisation]]: Collecting only what you actually need.
- [[Retention Policy]]: How long you keep things and what happens at the end.
- [[Consent]]: Permission to use someone's data, which has to be informed, specific and freely given to mean anything.
- [[Data Sharing Agreement]]: The contract governing data moving between organisations.
- [[AI Crawlers and robots.txt]]: Automated programs that visit websites to copy their content for training or powering AI systems, and the simple text file sites use to ask them to stay away.
- [[Data Governance]]: The rules and responsibilities that decide who may collect, use, share and keep an organisation's data, and for what.
- [[Datasheets for Datasets]]: A standard set of questions that the people who build a dataset answer and publish alongside it, explaining why it was made, what is in it, how it was collected and what it should not be used for.
- [[Ground Truth]]: The correct answer that a model's output is checked against.
- [[Label Noise]]: Mistakes in the answers a model is trained or tested on.

## Building and Using Models

- [[Training]]: The one-off process of teaching a model from data.
- [[Inference]]: What happens when you actually use a trained model.
- [[Pre-trained Model]]: A model that has already completed its broad general learning.
- [[Fine-tuning]]: Giving a pre-trained model additional training on a narrower task, domain or style.
- [[Prompt]]: Simply what you type in.
- [[Prompt Engineering]]: The practice of phrasing your input to get better results.
- [[Instruction Tuning]]: The training stage that turns a raw text predictor into something that follows instructions.
- [[Base Model and Instruct Model]]: Two versions of the same model, and the difference catches people out.
- [[Catastrophic Forgetting]]: When training a model on something new causes it to lose what it already knew.
- [[Application Programming Interface]]: A defined way for one piece of software to ask another for something and get an answer back.
- [[No-code and Low-code]]: Tools that let people build applications, automations or AI workflows by dragging blocks and filling in forms rather than writing programs.
- [[Vibe Coding]]: Building software by describing what you want to an AI model and accepting the code it writes, often without reading it closely.

## Training and Post-training

- [[Pre-training]]: The first and by far the most expensive stage, where a model learns language and a great deal about the world by predicting text across an enormous corpus.
- [[Continued Pre-training]]: Taking a finished model and carrying on the same kind of training on a large body of specialised material, such as legal texts, code, or a language the model handles poorly.
- [[Compute-optimal Training]]: The finding that for a fixed budget there is a best balance between how big a model is and how much data it sees, and that earlier models were far too large for the amount of data they were trained on.
- [[Reward Model]]: A separate model trained to predict which of two answers a person would prefer.
- [[Proximal Policy Optimisation]]: The reinforcement learning algorithm behind the first generation of assistant training.
- [[Direct Preference Optimisation]]: A simpler way of achieving what preference-based reinforcement learning does, by training directly on pairs of preferred and rejected answers without building a separate reward model or running a reinforcement loop.
- [[Reinforcement Learning from AI Feedback]]: Replacing the human preference judgements with a model's.
- [[Reinforcement Learning with Verifiable Rewards]]: Training on tasks where correctness can be checked automatically: the code runs or it does not, the sum is right or wrong, the proof checks out.
- [[Constitutional AI]]: Training a model against a written set of principles rather than case-by-case human judgements.
- [[Alignment Tax]]: The capability cost of making a model behave well.
- [[Refusal and Over-refusal]]: A model declining to help.
- [[Model Merging]]: Combining two or more fine-tuned models into one by averaging their weights.
- [[Continual Learning]]: Updating a model over time as the world changes, without retraining from scratch and without it forgetting what it already knew.
- [[Knowledge Editing]]: Changing one specific fact inside a model without retraining it.
- [[Machine Unlearning]]: Removing what a model learned from particular data, as though it had never seen it.
- [[Data Mixture]]: The recipe of what proportion of the training corpus comes from where: web text, books, code, academic papers, conversation, each language.
- [[Grokking]]: A strange phenomenon where a model appears to have simply memorised its training data, then, if you keep training it long after that point, suddenly generalises.
- [[Double Descent]]: The finding that as models get bigger, performance gets worse for a while and then gets better again, contradicting the textbook rule that more capacity means more overfitting.
- [[Loss Spike]]: A sudden jump in error partway through a long training run.
- [[Data, Tensor and Pipeline Parallelism]]: The three ways of splitting a training job across many chips.
- [[Sharding and ZeRO]]: Splitting up not just the work but the model's own bookkeeping, so no single chip has to hold everything.
- [[Curriculum Learning]]: Presenting training material in a deliberate order, easy things first, rather than at random.
- [[Group Relative Policy Optimisation]]: A training method that improves a model by having it answer the same question several times, scoring each answer, and nudging it towards the answers that scored better than the group's average.
- [[Parameter-efficient Fine-tuning]]: A family of ways to adapt a large model to a new task by training only a small number of extra or selected settings, leaving the rest untouched.
- [[Preference Data]]: Records of which of two or more answers a person, or another model, judged better for the same question.
- [[Process Reward Model]]: A model that scores each step of a worked answer rather than only whether the final answer is right.

## Measuring Performance

- [[Training, Validation and Test Sets]]: The three-way split of your data that makes any performance claim meaningful.
- [[Data Leakage]]: When information the model should not have had at prediction time sneaks into training.
- [[Accuracy, Precision and Recall]]: Three ways of being right, and the reason 'ninety-nine per cent accurate' can be worthless.
- [[Confusion Matrix]]: A small table showing exactly what a classifier got right and wrong, broken down by type: correct positives, correct negatives, false alarms and misses.
- [[F1 Score]]: A single number that balances precision and recall, used when you need one figure to compare models by.
- [[Cross-validation]]: A way of getting a more trustworthy estimate of performance when you do not have much data.
- [[Perplexity]]: The standard score for how well a language model predicts text: roughly, how surprised it is by what actually comes next.
- [[LLM as a Judge]]: Using one language model to score the output of another.
- [[Golden Dataset]]: A fixed set of examples with agreed correct answers that you test every change against.
- [[Benchmark Contamination]]: When the test questions are in the training data.
- [[Standard Benchmarks]]: The named tests everyone quotes.
- [[Arena and Elo Rating]]: Ranking models by having people compare two anonymous answers to the same question and pick the better one, then aggregating those votes into a rating like the one used for chess.
- [[Pass@k]]: The chance that at least one of k attempts is correct.
- [[Inter-rater Reliability]]: Whether your human graders agree with each other.
- [[Ablation Study]]: Removing one part of a system to see whether it was doing anything.
- [[Baseline]]: The simple thing your clever thing has to beat.
- [[Regression Testing]]: Checking that a change did not break something that used to work.
- [[Shadow Deployment]]: Running the new system alongside the old one on real traffic, without acting on its output or showing it to anyone.
- [[Canary Release]]: Giving the new version to a small share of traffic first, watching, and rolling out further only if it holds up.
- [[Online and Offline Evaluation]]: Testing against a fixed dataset versus testing with real users.
- [[Controlled Experiment]]: Randomly showing different users different versions and comparing what happens.
- [[Human Evaluation Protocol]]: The written procedure that turns subjective judgement into something repeatable.
- [[Rubric]]: The written standard a grader applies, human or machine.
- [[Error Analysis]]: Actually reading the failures rather than looking at the score.
- [[Failure Taxonomy]]: A named list of the ways your system goes wrong.
- [[Robustness Testing]]: Checking that a system still works when the input is a bit different.
- [[Model Confidence and Calibration]]: Whether a model's stated certainty tracks how often it is right.
- [[BLEU and ROUGE]]: Two long-standing scores that judge machine-written text by counting how many words and short phrases it shares with a version a person wrote.
- [[Benchmark Saturation]]: The point at which the best models score so close to full marks on a test that it can no longer tell them apart.
- [[Needle in a Haystack]]: A test that hides one specific fact in a very long document and asks the model to find it.
- [[ROC Curve and AUC]]: A Receiver Operating Characteristic ('ROC') curve is a chart showing how well a model separates two groups, such as fraudulent and genuine transactions, across every possible decision threshold.

## Extending and Applying Models

- [[Generative AI]]: Systems that produce new content rather than sorting or labelling existing things.
- [[Foundation Model]]: A large, general purpose model that many different applications are built on top of.
- [[Multimodal]]: A model that handles more than one type of input or output, such as text and images together.
- [[Embeddings]]: A way of turning words, sentences or documents into lists of numbers such that similar meanings end up with similar numbers.
- [[Open Weights]]: When a model's internal parameters are published for anyone to download and run on their own hardware, rather than being available only through a company's service.

## Retrieval and Knowledge

- [[Retrieval Augmented Generation]]: A technique where the system searches a document collection for relevant material and includes it in the prompt before the model answers.
- [[Vector Database]]: A store designed to hold embeddings and answer the question 'what is most similar to this?' quickly.
- [[Chunking]]: Cutting documents into pieces small enough to retrieve and feed to a model.
- [[Reranking]]: A second pass that reorders search results before they reach the model.
- [[Semantic Search]]: Search by meaning rather than by matching words.
- [[Memory]]: How a system carries information from one conversation to the next, given that the model itself remembers nothing.
- [[Hybrid Search]]: Running keyword search and meaning-based search together and combining the results.
- [[BM25 and Sparse Retrieval]]: The classic keyword ranking method, refined over decades and still very hard to beat.
- [[Query Rewriting]]: Fixing the question before you search with it.
- [[Agentic Retrieval]]: Letting the model search several times, look at what came back, and search again with a better query, instead of doing one search and hoping.
- [[GraphRAG]]: Retrieval over a knowledge graph as well as over text.
- [[Contextual Retrieval]]: Adding a sentence of surrounding context to each chunk before it is indexed, explaining what document and section it came from.
- [[Multi-vector Retrieval]]: Representing a document with several vectors instead of one, so that different parts of it can match different queries.
- [[Metadata Filtering]]: Narrowing by attribute before ranking by meaning.
- [[Retrieval Metrics]]: How to tell whether your search is any good, separately from whether the final answer is good.
- [[Document Parsing]]: Getting usable text and structure out of PDFs, spreadsheets, slide decks and scans.
- [[Grounding and Citation]]: Tying every claim in an answer to the source it came from, and showing the user.
- [[Faithfulness]]: Whether the answer actually reflects the material it was given, as opposed to whether it happens to be true.
- [[Approximate Nearest Neighbour Search]]: A way of finding the items most similar to a query very quickly by accepting that the answer will occasionally miss the very best match.
- [[Cache-augmented Generation]]: An alternative to looking documents up at question time, where all the relevant material is loaded into the model once in advance and kept ready.
- [[Inverted Index]]: A lookup table that lists, for every word, the documents containing it, so a search engine can find matches instantly instead of reading everything.
- [[Ontology]]: A formal description of the things in a subject area and how they relate to one another.

## Agents and Tools

- [[Agent]]: A model given tools and the ability to take actions in a sequence, rather than just replying once.
- [[Model Context Protocol]]: An open standard for connecting models to tools and data sources.
- [[Multi-agent Systems]]: Several model-driven agents working together, each with a defined role, handing work between them.
- [[Workflow Versus Agent]]: The most useful design decision in this area.
- [[Human in the Loop]]: Keeping a person in the process at the points where it matters, rather than automating end to end.
- [[Computer Use]]: Agents that operate a computer directly, moving a cursor, clicking buttons and typing into applications, rather than calling a defined interface.
- [[Tool Use and Function Calling]]: Giving a model the ability to call external software rather than answering from memory alone.
- [[Tool Schema]]: The description of a tool that the model reads in order to decide whether and how to use it.
- [[ReAct]]: The basic loop most agents run on: think about what to do, do it, look at the result, think again.
- [[Planning and Decomposition]]: Breaking a goal into steps before starting.
- [[Reflection and Self-critique]]: Having the model check its own work before finishing.
- [[Scratchpad]]: Working space where the model can think, calculate and take notes without that appearing in the final answer.
- [[Sandboxing]]: Running an agent's actions inside a confined space where it cannot reach anything it should not.
- [[Least Privilege]]: Giving an agent the minimum access it needs to do its job and nothing more.
- [[Handoff]]: Passing work from one agent to another cleanly.
- [[Orchestrator]]: The component that decides who does what and in what order.
- [[Sub-agent]]: Handing a bounded piece of work to a fresh instance with its own clean context, which reports back a result.
- [[Termination Condition]]: How a loop knows to stop.
- [[Loop Detection]]: Noticing when an agent is going round in circles, calling the same tool with the same arguments and getting the same result.
- [[Trajectory]]: The full sequence of what an agent did: every thought, tool call, result and decision.
- [[Agent Evaluation]]: Measuring an agent is harder than measuring a model, because there is no single output to grade.
- [[Environment]]: Everything the agent can see and change.
- [[Code Execution]]: Letting the model write a program and run it.
- [[Browser Automation]]: Driving a web page programmatically to fill forms, click through flows and read results.
- [[Idempotency and Retries]]: Making it safe to do the same thing twice.
- [[Budget Caps]]: Hard limits on how much an agent can spend in tokens, time and actions before it is stopped.
- [[Session State]]: What the system remembers between turns.
- [[Agent Framework]]: A software library that supplies the plumbing for building an AI agent, so developers do not have to write it from scratch.
- [[Agent Skills]]: Packaged instructions, reference material and scripts that an AI agent can load when a task calls for them, rather than carrying all of it all the time.
- [[Agent-to-agent Protocol]]: An open standard that lets AI agents built by different companies find each other, describe what they can do and hand work between them.
- [[Approval Gates]]: Checkpoints where an AI agent must stop and get a person's permission before it takes a particular action.
- [[Deep Research Agent]]: An AI agent that answers a research question by planning its own searches, reading many sources and writing up a referenced report, usually over several minutes rather than seconds.
- [[Levels of Autonomy]]: A way of describing how much an AI system decides and does on its own, from merely suggesting to acting without anyone watching.
- [[Long-horizon Tasks]]: Jobs that take many steps over a long stretch of time, where an AI system has to keep track of its goal, its progress and its mistakes without someone guiding each move.

## Making Models Smaller, Faster and Cheaper

- [[Quantisation]]: Storing a model's internal numbers less precisely so it takes up less space and runs faster.
- [[Pruning]]: Removing parts of a model that contribute little, in the same way you might cut dead branches off a tree.
- [[Distillation]]: Training a small model to imitate a large one.
- [[Mixture of Experts]]: A design where the model is divided into many specialised sub-networks, and only a few of them are used for any given input.
- [[Low-Rank Adaptation]]: A cheap way of customising a large model.
- [[Caching]]: Storing intermediate results so they do not have to be recalculated.
- [[Small Language Model]]: A deliberately compact model, typically small enough to run on a laptop or a phone.
- [[On-device Inference]]: Running a model on the phone, laptop or piece of equipment in front of you rather than in a data centre.
- [[Speculative Decoding]]: A trick that makes generation faster without changing the answer.
- [[Sparsity]]: Exploiting the fact that most of a model's numbers contribute very little.
- [[Early Exit]]: Stopping the computation once the answer is already clear rather than pushing every input through the entire model.
- [[Compilation and Kernel Fusion]]: Rewriting the same computation so it runs faster on the hardware, without changing the result.
- [[Accelerator Types]]: The different chips this runs on.
- [[Memory Bandwidth]]: How fast numbers can be moved between the chip's memory and its calculating units.
- [[Arithmetic Intensity]]: How much calculation you do for each number you fetch from memory.
- [[Precision Formats]]: How many bits are used for each number, and how they are arranged.
- [[Paged Attention]]: A technique that lets an AI service handle many more conversations at once by managing the model's working memory the way a computer manages its main memory: in small, fixed-size pages rather than large reserved blocks.

## Controlling and Extending Behaviour at Run Time

- [[Temperature and Sampling]]: The dial controlling how predictable a model's output is.
- [[Zero-shot, One-shot and Few-shot]]: How many examples you give the model before asking it to do something.
- [[Chain of Thought]]: Getting the model to work through a problem step by step before giving its answer, rather than jumping straight to a conclusion.
- [[Reasoning Models and Test-Time Compute]]: A newer class of model that spends longer thinking before answering, sometimes working through a problem at length internally before producing a response.
- [[Structured Output]]: Forcing a model to reply in a strict machine-readable format rather than free text, so its answer can be fed directly into other software without anything having to interpret it.
- [[System Prompt]]: A set of instructions given to the model by whoever built the application, sitting above and before anything the user types.
- [[Knowledge Cutoff]]: The date after which a model knows nothing, because its training data stopped there.
- [[Context Engineering]]: The successor to prompt engineering.
- [[Streaming]]: Sending each word to the screen as it is produced rather than waiting for the whole answer.
- [[Role Prompting]]: Telling the model to act as a particular kind of person: a careful editor, an experienced accountant, a sceptical reviewer.
- [[Delimiters and Structure]]: Marking clearly where the instructions end and the content begins, using tags, headings or fences.
- [[Self-consistency]]: Asking the same question several times and taking the most common answer.
- [[Tree of Thoughts]]: Exploring several lines of reasoning as a branching structure, evaluating them, and backtracking from the ones that look wrong, rather than committing to a single chain.
- [[Prompt Chaining]]: Splitting work into several small prompts, each doing one thing, rather than one large prompt doing everything.
- [[Meta-prompting]]: Using a model to write or improve the prompt.
- [[Prompt Compression]]: Shortening what you send while keeping what matters, to save cost and leave room for more useful content.
- [[Prompt Template]]: The reusable, parameterised version of a prompt with slots for the variable parts.
- [[Thinking Budget]]: A limit set on how much a reasoning model may think before giving its answer.

## Hardware, Compute and Training Mechanics

- [[Graphics Processing Unit]]: The specialised chip that nearly all AI training and running depends on.
- [[Compute]]: The total amount of calculation used to train or run a model, and the industry's main unit of currency.
- [[Scaling Laws]]: The observed finding that models get predictably better as you increase their size, the amount of data they see, and the computing power spent on training, all together.
- [[Epoch, Batch and Learning Rate]]: Three basic settings that govern how training runs.
- [[Emergent Capabilities]]: Abilities that appear in larger models without having been trained for or anticipated, and which smaller models of the same design simply do not have.
- [[Data Centre and Interconnect]]: The buildings and cabling that large models are trained in.
- [[Energy and Water Use]]: The physical resource cost of building and running these systems.
- [[Field-programmable Gate Array]]: A computer chip whose internal wiring can be rearranged after it has been made, so the same chip can be turned into different special-purpose circuits.
- [[High Bandwidth Memory]]: A type of computer memory built by stacking memory chips on top of each other right beside the processor, so data can move between them extremely quickly.

## Cost, Speed and Service Levels

- [[Cost Per Task]]: What it actually costs to do one useful unit of work, as opposed to the headline price per million tokens.
- [[Latency, Throughput and Time to First Token]]: The three numbers that decide whether something feels usable.
- [[Tokens Per Second]]: The common measure of how fast a model produces text.
- [[Rate Limits and Quotas]]: The caps a provider puts on how much you can use, usually counted in requests and tokens per minute.
- [[Model Deprecation]]: What happens when the model your product depends on is retired or quietly updated.

## Running It in Production

- [[Model Registry]]: The catalogue of every model you have, which version is running where, and how each was produced.
- [[Feature Store]]: A shared place where the calculated inputs to models live, so that the same definition is used when training and when running live.
- [[Serving Endpoint]]: The address your application actually calls, and everything behind it that turns a request into a response.
- [[Autoscaling]]: Adding and removing capacity as demand changes.
- [[Cold Start]]: The delay when a new instance has to load the model before it can answer anything.
- [[Batch Inference]]: Processing a large pile of work offline rather than one request at a time.
- [[Continuous Batching]]: How a serving system keeps the hardware busy when requests arrive at random times and finish at different lengths.
- [[Model Router]]: Sending each request to the model that suits it, rather than sending everything to the largest one.
- [[Fallback and Failover]]: What happens when the primary route fails.
- [[Circuit Breaker]]: Automatically stopping calls to a failing dependency for a while, instead of hammering it with retries.
- [[Rollback]]: Getting back to the previous version quickly when something goes wrong.
- [[Versioning]]: Recording exactly which model, prompt, retrieval index and code produced a given result.
- [[Reproducibility]]: Being able to get the same result twice, or at least to explain why not.
- [[Determinism and Seed]]: Why the same prompt gives different answers even at the lowest temperature setting.
- [[Audit Logging]]: The durable record of what happened: who asked what, what the system did, what it returned, and which versions were involved.
- [[Data Pipeline]]: The plumbing that moves data from where it is created to where it is used, transforming it on the way.
- [[Load Testing]]: Deliberately finding the breaking point before your users do.
- [[Service Level Objective]]: The number you promise, such as ninety-nine per cent of requests answered within three seconds.
- [[Incident Response]]: What happens when it breaks at three in the morning.
- [[Observability and Tracing]]: Being able to see inside a running system well enough to answer questions you did not anticipate.
- [[Drift]]: The world changing underneath a model that has not changed.
- [[AI Gateway]]: A single checkpoint between an organisation's applications and the AI models they use, so every request passes through one place.

## Problems, Risks and Ambitions

- [[Hallucination]]: When a model states something false with complete confidence.
- [[Bias]]: When a model reproduces skews present in the data it learned from.
- [[Alignment]]: The broad problem of getting a model to do what people actually want and intend, rather than something that technically satisfies the instruction but misses the point.
- [[Reinforcement Learning from Human Feedback]]: The main method used to turn a raw text predictor into something helpful and well behaved.
- [[Artificial General Intelligence]]: A hypothetical system matching human ability across essentially all cognitive tasks, rather than being narrowly good at particular ones.
- [[Sycophancy]]: The tendency of a model to agree with you.
- [[Reward Hacking and Specification Gaming]]: When a system satisfies the letter of the goal you set and completely misses the point.
- [[Existential Risk]]: The argument that sufficiently capable AI could threaten humanity as a whole, and the disagreement about how seriously to take it.
- [[Gradual Disempowerment]]: The idea that humans could lose control over their future not through a sudden AI takeover but slowly, as AI systems take over more of the work, decisions and culture that societies depend on.
- [[Misinformation and Disinformation]]: False or misleading information, called misinformation when it is shared in good faith and disinformation when it is spread deliberately to deceive.
- [[Shortcut Learning]]: When a model learns an easy cue that happens to predict the right answer in its training data, instead of the thing you actually wanted it to learn.
- [[Value Lock-in]]: The worry that a particular set of values could become permanently fixed, so that whatever beliefs or rules dominate at one moment shape the far future with no chance of later correction.

## Alignment and Safety Concepts

- [[Instrumental Convergence]]: The observation that very different goals imply some of the same intermediate steps.
- [[Orthogonality Thesis]]: The claim that how capable a system is and what it wants are independent.
- [[Corrigibility]]: A system that lets you correct it.
- [[Deceptive Alignment]]: The concern that a system might behave well while it is being watched and differently once it is not, because appearing aligned is instrumentally useful during training and testing.
- [[Situational Awareness]]: A model recognising that it is a model, and in particular recognising when it is being tested.
- [[Scalable Oversight]]: The problem of supervising a system that is better than you at the task.
- [[Weak-to-strong Generalisation]]: The question of whether supervision from a weaker teacher can bring out the full ability of a stronger student.
- [[Debate]]: Having two systems argue opposite sides of a question in front of a human judge, on the theory that it is easier to spot the flaw in an argument than to work out the answer alone.
- [[Recursive Self-improvement]]: A system that improves itself, then uses the improved version to improve itself further.
- [[Takeoff Speeds]]: The argument about whether capability increases gradually enough for society to adapt and correct course, or fast enough that decisions made beforehand are all you get.
- [[Theory of Mind]]: Modelling what someone else knows, wants or believes, including when their beliefs are wrong.
- [[Stochastic Parrot]]: The influential criticism that language models stitch together patterns from their training data without any understanding of meaning, and that fluency misleads people into attributing comprehension.
- [[Chinese Room]]: Searle's thought experiment: a person in a room follows a rulebook to answer questions in Chinese without knowing any Chinese, so the argument goes, a system manipulating symbols by rules cannot understand them however convincing the output.
- [[Symbol Grounding]]: The problem of how words connect to things in the world, rather than only to other words.
- [[Consciousness and Sentience]]: Whether these systems experience anything.
- [[Model Welfare]]: The position that if there is a meaningful chance these systems have morally relevant experiences, that possibility warrants some precaution now rather than after the fact.
- [[AI Control]]: An approach to safety that asks how to use a powerful AI system safely even if it might be secretly working against you, rather than relying only on making it trustworthy.
- [[Emergent Misalignment]]: When training a model on one narrow, mildly bad behaviour unexpectedly makes it behave badly across the board.
- [[Goal Misgeneralisation]]: When a system learns to pursue the wrong goal even though it was trained with the right one, because during training the wrong goal and the right goal produced the same behaviour.
- [[Mesa-optimisation]]: The hypothesis that training can produce a model that is itself an optimiser, internally searching for ways to achieve some goal, and that this learned goal need not be the one the training process was aiming for.
- [[Model Organisms]]: AI models deliberately built to show a dangerous behaviour, such as deception, so that researchers can study it under controlled conditions before it turns up by accident.
- [[Model Specification]]: A written document in which an AI developer sets out how it wants its models to behave: what they should help with, what they should decline, and how to weigh goals such as helpfulness, honesty and safety when they conflict.
- [[Outer and Inner Alignment]]: A way of splitting the alignment problem into two parts.

## Testing, Safeguarding and Running Models in Practice

- [[Benchmarks and Evals]]: Standard tests used to measure how good a model is, and the basis of nearly every performance claim you will see.
- [[Red Teaming]]: Deliberately attacking a system before release to find out how it fails.
- [[Jailbreaking]]: Getting a model to bypass its own restrictions, usually by disguising the request.
- [[Prompt Injection]]: A serious security problem where instructions hidden in content the model reads get treated as commands.
- [[Guardrails]]: Checks placed around a model rather than inside it.
- [[Interpretability]]: The effort to work out what is actually going on inside a model, rather than treating it as a sealed box that produces answers.
- [[Synthetic Data]]: Training data generated by a model rather than collected from the real world.
- [[Model Card]]: A published document describing what a model is, how it was built, what it was tested on, and where it is known to fall short.
- [[Machine Learning Operations]]: The unglamorous engineering work of running AI systems in production reliably, as opposed to building a model that works once in a demonstration.
- [[Sparse Autoencoder]]: The current best tool for working out what a model is thinking about.
- [[Feature (Interpretability Sense)]]: A single recognisable thing a model represents internally: a concept, a property, a pattern.
- [[Superposition]]: The reason you cannot just look at one artificial neuron and see what it does.
- [[Circuit]]: A mechanism inside a model that spans several components and performs an identifiable job, such as tracking which name was mentioned earlier so it can be repeated later.
- [[Probing]]: Testing whether some piece of information is present inside a model by training a small classifier on its internal activations.
- [[Activation Patching]]: Running the model twice on slightly different inputs, then copying an internal value from one run into the other and seeing whether the output changes.
- [[Attribution and Saliency]]: Highlighting which parts of the input mattered most to the answer.
- [[Steering Vector]]: Nudging a model's behaviour by adding a direction to its internal state at run time, rather than retraining it.
- [[Chain-of-thought Faithfulness]]: Whether the reasoning a model writes out is the reasoning it actually used.
- [[Bug Bounty]]: A standing offer of payment to outside researchers who find and responsibly report flaws in a product.
- [[Capability Elicitation]]: The effort to draw out the most a model can actually do when it is being tested, so that its abilities are not underestimated.
- [[Safety Classifier]]: A separate, usually smaller AI model that screens what goes into and comes out of a main model, flagging or blocking harmful content.
- [[Sandbagging]]: When an AI system, or the people testing it, makes it appear less capable than it really is during an evaluation.

## Security and Privacy

- [[Adversarial Examples]]: Inputs altered so slightly that a person notices nothing, but which cause a model to get the answer badly wrong.
- [[Model Extraction and Membership Inference]]: Two attacks on models rather than through them.
- [[Differential Privacy]]: A mathematical guarantee that what a system publishes cannot reveal much about any single individual in the data.
- [[Federated Learning]]: Training a shared model without the training data ever leaving the places it lives.
- [[Shadow AI]]: Staff using AI tools nobody approved, usually because the approved options are slow or non-existent.
- [[Data Residency and Confidentiality]]: Where your data physically goes when you use a hosted model, who can see it, and whether it is kept.
- [[Threat Model]]: Writing down who might attack your system, what they want, and what they can do, before deciding what to defend.
- [[Attack Surface]]: Everywhere an attacker can reach your system.
- [[Indirect Prompt Injection]]: Instructions hidden in content the model reads rather than typed by the user.
- [[Data Exfiltration]]: Getting sensitive information out of a system through the model.
- [[Confused Deputy]]: The classic security problem underneath most agent attacks.
- [[Supply Chain Security]]: Everything you did not write but depend on: model weights downloaded from a hub, libraries, container images, third-party tool servers.
- [[Model Provenance and Signing]]: Being able to prove that the model file you are running is the one the publisher produced and has not been altered.
- [[Sandbox Escape]]: Breaking out of the confined environment an agent was supposed to be limited to.
- [[Secrets Management]]: Keeping credentials out of prompts, logs and model context.
- [[Abuse Monitoring]]: Detecting people misusing the system at scale, as opposed to blocking individual bad requests.
- [[Content Moderation]]: Filtering what goes in and what comes out.
- [[Dual Use]]: Capability that helps and harms with equal facility.
- [[Capability Uplift]]: The right question to ask about a dangerous capability: not whether a model can explain something, but whether it meaningfully helps someone who could not otherwise have done it.
- [[Dangerous Capability Evaluation]]: Testing specifically for the abilities that would make a model seriously harmful, rather than for how useful it is.
- [[Responsible Scaling Policy]]: A published commitment that says, in advance, which capability levels trigger which safeguards, and that development stops if the safeguards are not ready.
- [[Tenant Isolation]]: Keeping one customer's data away from another's in a shared system.
- [[AI-enabled Cyber Attacks]]: Hacking and online fraud in which attackers use AI to work faster, at greater scale or with less skill than before.
- [[Authentication and Authorisation]]: Authentication checks who is asking; authorisation decides what they are allowed to do.
- [[Confidential Computing]]: Technology that keeps data shielded even while a computer is working on it, not just while it is stored or sent.
- [[System Prompt Extraction]]: Tricking an AI application into revealing the hidden instructions its builders gave it.
- [[Tool Poisoning]]: An attack in which malicious instructions are hidden in the description of a tool that an AI agent can use, so the agent follows them without the person noticing.
- [[Zero Trust]]: A security approach that grants nothing automatically: every person, device and program must prove who it is and that it is allowed, each time it asks for something.

## Governance, Law and Regulation

- [[European Union Artificial Intelligence Act]]: The first comprehensive law governing AI, passed by the European Union and coming into force in stages.
- [[Risk Tiers and High-risk Systems]]: The idea that AI should be regulated according to what it is used for rather than what it is made of.
- [[AI Assurance and Auditing]]: Independent checking that a system does what is claimed and meets whatever standards apply.
- [[ISO 42001 and the NIST AI Risk Management Framework]]: Two widely referenced frameworks for managing AI responsibly.
- [[Copyright and Training Data]]: The unresolved question of whether training a model on copyrighted material requires permission.
- [[Provenance and Watermarking]]: Techniques for marking content as machine-generated so it can be recognised later.
- [[Acceptable Use Policy]]: The provider's rules on what their model may be used for, and your own rules for your staff.
- [[Transparency and Disclosure Obligations]]: The growing set of requirements to tell people when they are dealing with AI.
- [[Data Protection Impact Assessment]]: A written assessment of the privacy risks of what you are planning, done before you build it.
- [[Automated Decision-making Rights]]: Rules that already exist about decisions made about people by machines without meaningful human involvement.
- [[Right to Explanation]]: The idea that someone affected by an automated decision should be told why.
- [[Data Subject Rights]]: The set of things an individual can ask you to do with their data: tell them what you hold, correct it, delete it, stop using it.
- [[Procurement and Vendor Assessment]]: The questions to ask before buying an AI product or service.
- [[Third-party Risk]]: What you remain accountable for when the model is somebody else's.
- [[Liability and Indemnity]]: Who pays when the output causes harm.
- [[Standards Bodies]]: The organisations that write the technical standards regulation points at.
- [[AI Safety Institutes]]: Government bodies set up to test frontier models and build the science of evaluation.
- [[Algorithmic Impact Assessment]]: Assessing the effect of a system on the people subject to it, rather than the risk it poses to your organisation.
- [[Sector Regulation]]: The rules that already apply to your industry, which do not stop applying because a model is involved.
- [[United Kingdom Regulatory Approach]]: The United Kingdom has taken a different route from the European Union: rather than one comprehensive statute, it has set out cross-cutting principles and asked existing regulators to apply them within their own domains.
- [[International AI Safety Report]]: A periodic synthesis of the evidence on AI capabilities and risks, produced by a large international group of researchers and intended to give policymakers a shared factual baseline in the way climate assessments do.
- [[Compute Governance]]: Regulating by how much computing power was used to train a model, on the grounds that compute is measurable, concentrated in a few supply chains, and correlates roughly with capability.
- [[Chip Export Controls]]: Restrictions on selling the most capable AI chips to particular countries.
- [[Sovereign AI]]: A country's ability to build and run AI without depending on another country's infrastructure, models or data centres.
- [[AI Literacy]]: The knowledge and skills people need to use AI sensibly: understanding broadly what it can and cannot do, how it goes wrong, and when to trust or question what it produces.
- [[AI Safety Summits]]: A series of international meetings of governments, AI companies and researchers that began at Bletchley Park in England in November 2023 to discuss the risks of the most advanced AI.
- [[Algorithmic Transparency Recording Standard]]: A United Kingdom government standard for publishing plain-language records of the algorithmic tools, including AI, that public bodies use in decisions affecting people.
- [[Conformity Assessment]]: The process of showing that a product meets the legal requirements that apply to it before it can be sold.
- [[Frontier AI]]: A label for the most capable general-purpose AI models at any given time, the ones that match or exceed the abilities of the most advanced systems so far.
- [[General Data Protection Regulation]]: The European Union's main data protection law, which governs how organisations collect, use, store and share information about identifiable people.
- [[General-purpose AI Model]]: The European Union's legal term for an AI model that can perform a wide range of different tasks and be built into many other products, such as the large language models behind chatbots.
- [[Regulatory Sandbox]]: A controlled arrangement in which a regulator lets businesses test new products with real customers under close supervision, with some flexibility in how the rules apply, so both sides can learn before anything is rolled out widely.

## Society and Impact

- [[Deepfake]]: Synthetic audio, video or images of a real person doing or saying something they did not.
- [[Automation Bias]]: The human tendency to trust a machine's output more than the evidence warrants, and to stop checking.
- [[Deskilling]]: The gradual loss of ability that comes from not practising, when a tool does the work instead.
- [[Displacement and Augmentation]]: The question of whether these systems replace people or make them more productive, which usually has different answers for different tasks within the same job.
- [[Digital Divide]]: The gap between those who can use these tools and those who cannot.
- [[Data Labour]]: The people who label training data, rate model outputs and review harmful content so that systems behave acceptably.
- [[Concentration of Power]]: A small number of organisations control the models, the chips and the data centres that everything else is built on.
- [[Open and Closed Debate]]: The argument about whether model weights should be published.
- [[Content Slop]]: Low-quality generated material produced at volume because it is cheap: filler articles, fake reviews, spam books, AI-generated video churned out for advertising revenue.
- [[Epistemic Security]]: The health of the shared information environment that lets a society agree on basic facts.
- [[Companion AI]]: Systems designed for ongoing personal relationships rather than tasks.
- [[Children and AI]]: The particular considerations when the user might be a child.
- [[Accessibility]]: The clearest positive case, and the one least discussed.
- [[Language Coverage]]: Models are far better in English than in most languages, and worst in those with least written material online.
- [[Cultural Bias]]: Whose assumptions a model treats as default.
- [[Anthropomorphism]]: Reading intention, feeling and understanding into a system because it uses language the way people do.
- [[Labour Market Polarisation]]: The pattern where effects concentrate at the ends of the skill distribution rather than spreading evenly.
- [[Consent and Likeness]]: Using someone's voice, face or artistic style without asking.
- [[Public Attitudes and Trust]]: What people actually think, which is more sceptical and more nuanced than either the enthusiasm of the industry or the alarm of its critics.
- [[AI in Education]]: The use of AI in teaching and learning, from tutoring and feedback tools for students to marking, lesson planning and administration for teachers.
- [[Productivity Paradox]]: The puzzle of a powerful new technology spreading everywhere while the economy's measured output per worker barely improves.

## Product and Adoption

- [[Assistant, Copilot and Agent]]: Three product shapes with three different promises.
- [[Conversational Interface]]: A chat box is not automatically the right interface.
- [[Confidence Display]]: Showing how sure the system is.
- [[Feedback Loop]]: Collecting signal from users about whether the output was any good, and actually using it.
- [[Error Recovery]]: Designing for the system being wrong, because it will be.
- [[Escalation to a Human]]: Knowing when to stop and hand over.
- [[Personalisation]]: The system adapting to the individual: their preferences, their vocabulary, their previous work.
- [[Expectation Setting]]: Telling people what the thing can and cannot do, before they find out the hard way.
- [[Trust Calibration]]: The goal is not maximum trust but accurate trust: relying on the system where it is reliable and checking it where it is not.
- [[Reversibility]]: Making actions undoable wherever possible.
- [[Pilot and Proof of Concept]]: A small first deployment to find out whether the idea works.
- [[Change Management]]: The part that actually decides whether an AI project succeeds.
- [[Training and Enablement]]: Teaching people to use these tools well.
- [[Champions and Centre of Excellence]]: Two common ways of organising adoption.
- [[Use Case Selection]]: Picking the first thing to do.
- [[Return on Investment]]: Measuring whether it was worth it, honestly.
- [[Build versus Buy]]: Whether to assemble it yourself or buy a product that does it.
- [[Total Cost of Ownership]]: What it really costs over its life, not what the licence costs.
- [[Vendor Lock-in]]: How hard it would be to move.
- [[Maturity Model]]: A way of describing where an organisation actually is, from experimenting individually, through isolated pilots, to production systems with governance, to AI being a normal part of how work is designed.
- [[AI Wrapper]]: A product that adds its own interface, workflow or data around someone else's AI model, rather than building a model of its own.
- [[Human-AI Teaming]]: Designing work so that people and AI systems each do the parts they are best at, and hand over to each other cleanly.
- [[Hype Cycle]]: A popular picture of how excitement about a new technology tends to run ahead of reality and then fall back.
- [[Jagged Frontier]]: The uneven boundary between tasks an AI system does well and tasks it does badly, which often does not line up with what people find easy or hard.

## Modalities and Applications

- [[Vision Language Model]]: A model that reads and looks at the same time.
- [[Text to Image]]: Producing pictures from a description.
- [[Text to Video]]: Generating moving footage from a description.
- [[Visual Question Answering]]: Asking questions about an image and getting answers.
- [[Joint Embedding]]: Putting different kinds of thing into the same space of numbers so they can be compared directly.
- [[Audio Model]]: Models that work with sound beyond speech: identifying what is making a noise, detecting faults in machinery from how it sounds, separating overlapping sources, and generating sound effects.
- [[Speech to Speech]]: Talking to a system and being answered in speech, without text in the middle.
- [[Music Generation]]: Producing music from a description or a fragment.
- [[3D Generation]]: Creating three-dimensional objects and scenes from text or photographs.
- [[Video Understanding]]: Making sense of footage rather than generating it: summarising a recording, finding the moment something happened, describing what occurred, checking whether a procedure was followed.
- [[Document AI]]: Getting structured information out of invoices, forms, contracts, reports and scanned records.
- [[Multimodal Retrieval]]: Searching across different kinds of content at once: finding the slide with a particular chart, the photograph matching a description, the moment in a recording where something was said.
- [[Time Series Foundation Model]]: General-purpose forecasting models pre-trained on enormous collections of time series, which can then forecast a new series without being trained on it.
- [[AI for Science]]: Using these methods for scientific problems: predicting protein structure, searching for materials, modelling weather, sifting experimental data.
- [[Code Model]]: Models specialised in programming.
- [[Agentic Coding]]: Handing over a whole task rather than asking for a snippet: understand the codebase, make the change across several files, run the tests, fix what broke, and come back with a result.
- [[Machine Translation]]: Converting text between languages.
- [[Simulation]]: Training or testing a system in a model of the world rather than the world itself, because the real thing is slow, expensive or dangerous.
- [[Autonomous Vehicles]]: Vehicles that can drive themselves for some or all of a journey, using cameras, radar and other sensors with software that decides how to steer, brake and accelerate.
- [[Geospatial AI]]: Using AI on data tied to places on the Earth, such as satellite and aerial images, maps, location traces from phones and vehicles, and sensor readings.
- [[Image Segmentation]]: Labelling every dot (pixel) in an image with what it belongs to, so the system knows the exact outline of each thing rather than just that it is there.
- [[Named Entity Recognition]]: Picking out the names of things in text, such as people, organisations, places, dates and amounts, and labelling each with its type.
- [[Object Detection]]: Finding the things in an image and drawing a box around each one, with a label saying what it is.
- [[Protein Structure Prediction]]: Working out the three-dimensional shape a protein folds into from the chain of building blocks it is made from.
- [[Sentiment Analysis]]: Working out automatically whether a piece of text expresses a positive, negative or neutral feeling.
- [[Summarisation]]: Producing a shorter version of a text that keeps the points that matter.

## Adjacent Fields

- [[Natural Language Processing]]: The field concerned with getting computers to work with human language.
- [[Computer Vision]]: Getting computers to interpret images and video.
- [[Speech Recognition and Synthesis]]: Turning speech into text and text into speech.
- [[Optical Character Recognition]]: Reading text out of images and scanned documents.
- [[Recommender Systems]]: The systems that decide what you see next: which video, which product, which post.
- [[Knowledge Graph]]: A structured map of things and how they relate: this company employs this person, who wrote this paper, which cites that one.
- [[Symbolic AI and Expert Systems]]: The older approach to AI, based on writing down rules and facts explicitly rather than learning them from data.
- [[Robotics and Embodied AI]]: AI in things that move and act physically.
- [[World Model]]: An internal model of how things work that lets a system predict what happens next and plan accordingly.
- [[Turing Test]]: Alan Turing's 1950 proposal that instead of asking whether a machine can think, we should ask whether it can hold a conversation indistinguishable from a person's.
- [[Cognitive Science]]: The study of how minds work, drawing on psychology, neuroscience, linguistics, philosophy, anthropology and computer science together.
- [[Cybernetics]]: The study of how systems, whether machines, animals, people or organisations, control themselves by sensing what is happening and correcting course.
- [[Game Theory]]: The mathematics of strategic decisions, where the best choice for each player depends on what the others choose.
- [[Human-computer Interaction]]: The study and design of how people use computers, aimed at making technology usable, useful and safe for the people using it.
- [[Information Retrieval]]: The science of finding the documents or passages that answer a need from a large collection, and putting the best ones first.
- [[Operations Research]]: The use of mathematics to make better decisions about complicated operations: how to schedule staff, route delivery vans, stock warehouses or share out scarce resources.
- [[Quantum Machine Learning]]: Research into whether quantum computers, which process information using the unusual rules of quantum physics, could run machine learning tasks faster or better than ordinary computers.

