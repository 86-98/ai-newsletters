// data.js
const categories = [
  'General AI/ML News & Trends (Broad Appeal)',
  'Research & Cutting-Edge Developments',
  'Technical Deep Dives & MLOps',
  'Industry Applications & Business Focus',
  'AI Ethics, Policy & Society',
  'Specific AI Subfields (NLP, CV, etc.)',
  'Learning Resources & Skill Development',
  'Company-Specific Newsletters (Often Excellent)',
  'Curated by Influential Individuals',
  'More Niche or Emerging Gems',
];

const newsletters = [
  // --- Category 1: General AI/ML News & Trends ---
  {
    name: 'The Batch (DeepLearning.AI)',
    description:
      "Andrew Ng's weekly roundup of important AI news and research. (Must-read)",
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://www.deeplearning.ai/the-batch/',
  },
  {
    name: 'Import AI (Jack Clark)',
    description:
      'Thoughtful analysis of AI advancements and their implications. (Must-read)',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://importai.substack.com/',
  },
  {
    name: "Ben's Bites",
    description:
      'Daily AI news, tools, and funding in a quick, digestible format. Very popular.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://bensbites.co/',
  },
  {
    name: 'TLDR AI',
    description:
      'Daily newsletter summarizing the most important AI news and research papers.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://tldr.tech/ai',
  },
  {
    name: 'Data Science Weekly',
    description: 'Curated news, articles, and jobs in data science and ML.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://www.datascienceweekly.org/',
  },
  {
    name: 'KDnuggets News',
    description:
      'Long-standing resource for AI, Data Science, and Machine Learning.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://www.kdnuggets.com/news/subscribe.html',
  },
  {
    name: 'The Algorithm (MIT Technology Review)',
    description: 'How AI is changing our world, by MIT Tech Review.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://www.technologyreview.com/newsletter-archive/the-algorithm/',
  },
  {
    name: 'Last Week in AI',
    description:
      'Weekly summary of notable AI news, research, and discussions.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://lastweekin.ai/',
  },
  {
    name: 'Exponential View (Azeem Azhar)',
    description:
      "Broader tech focus, but excellent insights on AI's societal and economic impact.",
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://www.exponentialview.co/',
  },
  {
    name: 'AI Weekly (Inside.com)',
    description: 'Curated AI news from various sources.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://inside.ai',
  },
  {
    name: 'Synced Review',
    description: "Global AI news, particularly strong on China's AI scene.",
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://syncedreview.com/', // Check for newsletter signup options on their site
  },
  {
    name: 'Artificial Ignorance',
    description: 'A critical, often humorous take on AI hype.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://www.ignorance.ai/',
  },
  {
    name: 'The Neuron',
    description: 'Daily AI news and tools, easy to digest.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://www.theneurondaily.com/',
  },
  {
    name: 'Superhuman AI',
    description:
      'Daily newsletter focusing on AI tools and how to leverage them.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://www.superhuman.ai/',
  },
  {
    name: 'AI Tool Report',
    description: 'Focuses on new AI tools and practical applications.',
    category: 'General AI/ML News & Trends (Broad Appeal)',
    url: 'https://aitoolreport.com/',
  },
  {
    name: 'Papers with Code Newsletter',
    description:
      'Latest trending research papers with code implementations. (Essential for researchers)',
    category: 'Research & Cutting-Edge Developments',
    url: 'https://paperswithcode.com/newsletter',
  },
  {
    name: 'Deep Learning Weekly',
    description:
      'Curated list of new research, articles, and projects in deep learning.',
    category: 'Research & Cutting-Edge Developments',
    url: 'https://www.deeplearningweekly.com/',
  },
  {
    name: 'The Gradient',
    description:
      'Publishes articles, interviews, and analysis on AI research and trends.',
    category: 'Research & Cutting-Edge Developments',
    url: 'https://thegradient.pub/',
  },
  {
    name: 'ArXiv Sanity Preserver (by Andrej Karpathy)',
    description:
      'Not a newsletter, but a website that helps filter/sort new arXiv papers. Many use it daily like one.',
    category: 'Research & Cutting-Edge Developments',
    url: 'http://www.arxiv-sanity.com/',
  },
  {
    name: 'ChinAI (Jeff Ding)',
    description: 'Translations and analysis of Chinese AI research and policy.',
    category: 'Research & Cutting-Edge Developments',
    url: 'https://chinai.substack.com/',
  },
  {
    name: 'BAIR Blog (Berkeley AI Research)',
    description:
      "Updates from Berkeley's AI research lab. (Often has a newsletter option for blog updates)",
    category: 'Research & Cutting-Edge Developments',
    url: 'https://bair.berkeley.edu/blog/',
  },
  {
    name: 'Stanford AI Lab Blog (SAIL)',
    description:
      "Insights from Stanford's AI researchers. (Often has a newsletter option for blog updates)",
    category: 'Research & Cutting-Edge Developments',
    url: 'https://ai.stanford.edu/blog/',
  },
  {
    name: 'Distill',
    description:
      'Publishes clear, interactive articles explaining ML concepts. (Subscribe for updates)',
    category: 'Research & Cutting-Edge Developments',
    url: 'https://distill.pub/',
  },
  {
    name: 'Causal Inference News',
    description: 'For those interested in causality in ML.',
    category: 'Research & Cutting-Edge Developments',
    url: 'https://www.bradyneal.com/causal-news',
  },
  {
    name: 'ML Research Papers Explained (AK)',
    description:
      'YouTuber "AK" often has a newsletter or community for paper discussions.',
    category: 'Research & Cutting-Edge Developments',
    url: 'https://www.youtube.com/@ak',
  },
  {
    name: 'MLOps.community Newsletter',
    description: 'News, articles, and discussions from the MLOps community.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://mlops.community/', // Signup is usually prominent on their site
  },
  {
    name: 'Full Stack Deep Learning',
    description:
      'Content related to building and deploying real-world ML systems.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://fullstackdeeplearning.com/', // Course site, often has newsletter updates
  },
  {
    name: 'Made With ML (Goku Mohandas)',
    description: 'Focus on foundational ML concepts and MLOps.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://madewithml.com/', // Main site, look for newsletter/subscribe options
  },
  {
    name: 'The Sequence (Formerly The Algorithm)',
    description: 'Technical explanations of new ML models and concepts.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://sequencedeeplearning.substack.com/',
  },
  {
    name: 'Algorithmia Blog',
    description:
      'MLOps, model deployment, and AI infrastructure. (Subscribe for updates) (Note: Algorithmia is now part of DataRobot)',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://www.datarobot.com/blog/', // Content now likely on DataRobot's blog
  },
  {
    name: "Chip Huyen's Blog/Newsletter",
    description: 'Excellent insights on ML engineering and MLOps.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://huyenchip.com/newsletter/', // Direct link to her newsletter signup / Substack
  },
  {
    name: "Jeremy Jordan's Blog/Newsletter",
    description: 'Insightful articles on ML concepts and applications.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://www.jeremyjordan.me/', // His personal blog/website, look for subscribe
  },
  {
    name: 'eugeneyan.com (Eugene Yan)',
    description: 'Practical insights on applied ML, recommendation systems.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://eugeneyan.com/', // Main site, usually has a prominent subscribe option
  },
  {
    name: "Weights & Biases - 'Fully Connected'",
    description: 'Tools, techniques, and best practices for ML practitioners.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://wandb.ai/fully-connected',
  },
  {
    name: 'Data Engineering Weekly',
    description: 'Broader data engineering but very relevant for MLOps.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://www.dataengineeringweekly.com/',
  },
  {
    name: 'Software Engineering Daily - AI Section',
    description:
      'Though a podcast, their newsletter often covers AI engineering.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://softwaredaily.com/', // Main podcast site, newsletter would cover recent episodes
  },
  {
    name: 'DAGsHub Blog/Newsletter',
    description: 'Focus on data versioning and MLOps.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://dagshub.com/blog/', // Blog page where newsletter signups are common
  },
  {
    name: 'The Daily Paper (by @papers_daily)',
    description:
      'Twitter account, but often people treat it like a daily newsletter feed for new papers.',
    category: 'Technical Deep Dives & MLOps',
    url: 'https://twitter.com/papers_daily',
  },
  {
    name: 'CB Insights AI Newsletter',
    description: 'AI trends, startups, and market analysis.',
    category: 'Industry Applications & Business Focus',
    url: 'https://www.cbinsights.com/newsletter/ai',
  },
  {
    name: 'AI Business Newsletter',
    description:
      'Focus on AI in enterprise and business strategy. (From AI Business / Informa Tech)',
    category: 'Industry Applications & Business Focus',
    url: 'https://aibusiness.com/subscribe',
  },
  {
    name: 'VentureBeat AI (The AI Beat)',
    description:
      "News on AI in business, enterprise AI, and industry trends. (VentureBeat's AI newsletter)",
    category: 'Industry Applications & Business Focus',
    url: 'https://venturebeat.com/newsletters/', // User can select 'The AI Beat'
  },
  {
    name: 'Emerj Artificial Intelligence Research',
    description: 'AI ROI, case studies, and executive guides.',
    category: 'Industry Applications & Business Focus',
    url: 'https://emerj.com/newsletter-signup/',
  },
  {
    name: 'State of AI Report (Nathan Benaich & Ian Hogarth)',
    description: 'Annual report, but they have updates/related content.',
    category: 'Industry Applications & Business Focus',
    url: 'https://www.stateof.ai/', // Sign up for updates on their main page
  },
  {
    name: 'AI Supremacy (Michael Spencer)',
    description: "AI's geopolitical and business impact.",
    category: 'Industry Applications & Business Focus',
    url: 'https://aisupremacy.substack.com/',
  },
  {
    name: 'AI for Good Foundation Newsletter',
    description:
      'How AI is being used for social impact. (From the AI for Good Global Summit by ITU)',
    category: 'Industry Applications & Business Focus',
    url: 'https://aiforgood.itu.int/newsletter-sign-up/',
  },
  {
    name: "O'Reilly AI Newsletter",
    description:
      "Insights, trends, and learning resources from O'Reilly Media.",
    category: 'Industry Applications & Business Focus',
    url: 'https://www.oreilly.com/emails/newsletters/', // Select the AI Newsletter
  },
  {
    name: 'Forrester AI Insights',
    description: 'Analyst insights on AI in business.',
    category: 'Industry Applications & Business Focus',
    url: 'https://go.forrester.com/research-newsletters/', // General research newsletter signup, can often tailor to topics
  },
  {
    name: 'Gartner AI Research',
    description:
      'While reports are paid, they often have newsletter summaries or blog updates.',
    category: 'Industry Applications & Business Focus',
    url: 'https://www.gartner.com/en/newsroom/newsletters', // List of Gartner newsletters
  },
  {
    name: 'Raconteur AI for Business',
    description: 'Reports and insights on AI in various industries.',
    category: 'Industry Applications & Business Focus',
    url: 'https://www.raconteur.net/newsletter-sign-up/',
  },

  {
    name: 'AI Ethics Weekly (Montreal AI Ethics Institute)',
    description: 'Comprehensive roundup of news and research on AI ethics.',
    category: 'AI Ethics, Policy & Society',
    url: 'https://montrealethics.ai/newsletter/',
  },
  {
    name: 'AlgorithmWatch',
    description: 'Focus on the societal impact of algorithmic decision-making.',
    category: 'AI Ethics, Policy & Society',
    url: 'https://algorithmwatch.org/en/newsletter/',
  },
  {
    name: 'Radical AI Podcast Newsletter',
    description: 'Complements their podcast on AI ethics and society.',
    category: 'AI Ethics, Policy & Society',
    url: 'https://www.radicalai.org/join-our-newsletter',
  },
  {
    name: 'Themarkup.org',
    description:
      'Investigative journalism on tech and its impact, often covering AI. (Subscribe to their general newsletter)',
    category: 'AI Ethics, Policy & Society',
    url: 'https://themarkup.org/newsletter',
  },
  {
    name: 'AI Now Institute',
    description:
      'Research and policy work on the social implications of AI. (Newsletter for updates)',
    category: 'AI Ethics, Policy & Society',
    url: 'https://ainowinstitute.org/newsletter',
  },
  {
    name: 'Data & Society',
    description:
      'Research institute, their newsletter covers critical perspectives on data-centric tech.',
    category: 'AI Ethics, Policy & Society',
    url: 'https://datasociety.net/email-sign-up/',
  },
  {
    name: 'AI Alignment Newsletter (Rohin Shah)',
    description: 'Deep dives into AI alignment research. Highly technical.',
    category: 'AI Ethics, Policy & Society',
    url: 'https://rohinshah.com/alignment-newsletter/',
  },
  {
    name: "Big Tech Watchdog (The Guardian's TechScape)",
    description:
      "Covers big tech accountability, often featuring AI. (The Guardian's tech newsletter)",
    category: 'AI Ethics, Policy & Society',
    url: 'https://www.theguardian.com/info/2022/feb/22/sign-up-for-the-techscape-newsletter',
  },
  {
    name: 'Tech Policy Press',
    description:
      'News and analysis at the intersection of technology and democracy.',
    category: 'AI Ethics, Policy & Society',
    url: 'https://techpolicy.press/newsletter/',
  },

  {
    name: 'NLP News (Sebastian Ruder)',
    description:
      'Excellent curated list of recent NLP research and news. (Highly recommended for NLP)',
    category: 'Specific AI Subfields (NLP, CV, etc.)',
    url: 'http://newsletter.ruder.io/',
  },
  {
    name: 'Hugging Face Daily Demo',
    description:
      'Daily showcase of new models and spaces on Hugging Face (great for NLP & beyond). (Not a traditional newsletter, but a daily resource).',
    category: 'Specific AI Subfields (NLP, CV, etc.)',
    url: 'https://huggingface.co/spaces/huggingface-projects/daily-demos', // For general HF updates: https://huggingface.co/subscribe/newsletter
  },
  {
    name: 'Computer Vision News (RSIP Vision)',
    description: 'Monthly magazine for the computer vision community.',
    category: 'Specific AI Subfields (NLP, CV, etc.)',
    url: 'https://www.rsipvision.com/computer-vision-news/',
  },
  {
    name: 'PyImageSearch (Adrian Rosebrock)',
    description:
      'Tutorials and news on computer vision, OpenCV, and deep learning for CV.',
    category: 'Specific AI Subfields (NLP, CV, etc.)',
    url: 'https://pyimagesearch.com/', // Newsletter signup is prominent on homepage
  },
  {
    name: 'Reinforcement Learning Newsletter (Denny Britz)',
    description: 'Though less frequent now, archives are valuable.',
    category: 'Specific AI Subfields (NLP, CV, etc.)',
    url: 'https://dennybritz.substack.com/',
  },
  {
    name: 'The NLP Index',
    description: 'Curated NLP papers, articles, and resources.',
    category: 'Specific AI Subfields (NLP, CV, etc.)',
    url: 'https://nlpindex.com/', // Resource site, check for subscribe options if any
  },
  {
    name: 'DeepMind Blog',
    description:
      'Not strictly a subfield, but their blog often has deep dives into their NLP, CV, RL research. (Subscribe for updates)',
    category: 'Specific AI Subfields (NLP, CV, etc.)',
    url: 'https://deepmind.google/subscribe/',
  },
  {
    name: 'Data-Centric AI Community Newsletter',
    description: 'For those focusing on data quality and management in ML.',
    category: 'Specific AI Subfields (NLP, CV, etc.)',
    url: 'https://datacentricai.substack.com/',
  },

  {
    name: 'Towards Data Science Digest (Medium)',
    description: 'Curated articles from the popular Medium publication.',
    category: 'Learning Resources & Skill Development',
    url: 'https://towardsdatascience.com/', // Users can subscribe to the Medium publication or its newsletters
  },
  {
    name: 'Analytics Vidhya',
    description:
      'Articles, tutorials, and resources for learning data science and ML.',
    category: 'Learning Resources & Skill Development',
    url: 'https://www.analyticsvidhya.com/blog/', // Blog/main site, look for newsletter signup
  },
  {
    name: 'Data Elixir',
    description: 'Curated data science news, resources, and jobs.',
    category: 'Learning Resources & Skill Development',
    url: 'https://dataelixir.com/',
  },
  {
    name: 'fast.ai Newsletter',
    description:
      'Updates from Jeremy Howard and Rachel Thomas on courses and research.',
    category: 'Learning Resources & Skill Development',
    url: 'https://www.fast.ai/', // Newsletter signup usually available on their main page
  },
  {
    name: 'Machine Learning Mastery (Jason Brownlee)',
    description: 'Tutorials and guides for ML practitioners.',
    category: 'Learning Resources & Skill Development',
    url: 'https://machinelearningmastery.com/blog/', // Blog page, newsletter signup is prominent
  },
  {
    name: 'DataCamp Newsletter',
    description: 'Learning resources, course updates.',
    category: 'Learning Resources & Skill Development',
    url: 'https://www.datacamp.com/newsletter-signup',
  },
  {
    name: 'Coursera Blog (AI & ML section)',
    description: 'Course announcements, learning tips.',
    category: 'Learning Resources & Skill Development',
    url: 'https://blog.coursera.org/', // General blog, users can often filter/find AI/ML content or subscribe to relevant topics
  },
  {
    name: "Kaggle Newsletter ('The Kaggle Memo')",
    description: 'Competition updates, discussions, and learning content.',
    category: 'Learning Resources & Skill Development',
    url: 'https://www.kaggle.com/settings/email', // Users can manage their Kaggle email preferences here, including The Kaggle Memo
  },
  {
    name: 'freeCodeCamp News',
    description: 'Broader programming, but strong AI/ML content.',
    category: 'Learning Resources & Skill Development',
    url: 'https://www.freecodecamp.org/news/', // Their news section, often has a newsletter subscription
  },
  {
    name: 'No CS Degree',
    description:
      'For self-taught developers, often features ML/AI learning paths.',
    category: 'Learning Resources & Skill Development',
    url: 'https://www.nocsdegree.com/', // Check for newsletter signup
  },
  {
    name: 'OpenAI Blog Newsletter',
    description:
      'Updates on research, models (GPT series, DALL-E), and products.',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://openai.com/blog/', // Subscribe option usually on their blog page
  },
  {
    name: 'Google AI Blog Newsletter',
    description: 'Latest research and developments from Google AI.',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://ai.googleblog.com/', // Subscribe option usually on their blog page
  },
  {
    name: 'Meta AI Blog Newsletter',
    description: "News from Meta's AI research labs.",
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://ai.meta.com/blog/', // Subscribe option usually on their blog page
  },
  {
    name: 'NVIDIA AI & Deep Learning Newsletter',
    description: 'Updates on hardware, software, and research for AI.',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://www.nvidia.com/en-us/research/newsletter/',
  },
  {
    name: 'Microsoft AI Blog Newsletter',
    description: "Developments from Microsoft's AI initiatives.",
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://blogs.microsoft.com/ai/', // Main AI blog, look for subscription options
  },
  {
    name: 'AWS AI & ML Blog Newsletter',
    description: 'Updates on AWS ML services and research.',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://aws.amazon.com/blogs/machine-learning/', // Main ML blog, look for subscription options
  },
  {
    name: 'DeepMind Blog Newsletter',
    description:
      'Groundbreaking research from DeepMind. (Note: DeepMind is part of Google)',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://deepmind.google/subscribe/',
  },
  {
    name: 'Cohere Newsletter',
    description: 'Focus on large language models and their applications.',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://cohere.com/newsletter',
  },
  {
    name: 'Stability AI Blog/Discord',
    description:
      'Updates on Stable Diffusion and other generative models. (Discord often serves as a live newsletter).',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://stability.ai/news', // News/Blog page; Discord link is: https://discord.gg/stablediffusion
  },
  {
    name: 'Hugging Face Blog Newsletter',
    description: 'Updates on their tools, models, and community.',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://huggingface.co/subscribe/newsletter',
  },
  {
    name: 'Waymo Blog',
    description:
      'Updates on self-driving car technology. (Subscribe for updates)',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://waymo.com/blog/', // Look for subscribe options
  },
  {
    name: 'Cruise Automation Blog',
    description:
      'Similar to Waymo, for self-driving tech. (Subscribe for updates)',
    category: 'Company-Specific Newsletters (Often Excellent)',
    url: 'https://getcruise.com/news/', // News/blog section, look for subscription options
  },
  {
    name: "Andrej Karpathy's Twitter/Blog",
    description:
      'While not a formal newsletter, his updates are highly valued. (Many create their own feeds from such sources)',
    category: 'Curated by Influential Individuals',
    url: 'https://twitter.com/karpathy', // Primary: Twitter. Blog: https://karpathy.ai/ (less frequent updates)
  },
  {
    name: "François Chollet's Twitter/Blog",
    description: 'Creator of Keras, insightful thoughts on AI.',
    category: 'Curated by Influential Individuals',
    url: 'https://twitter.com/fchollet', // Primary: Twitter. Blog: https://blog.keras.io/ (or his Medium)
  },
  {
    name: "Lex Fridman's Newsletter",
    description: 'Complements his podcast, often with AI themes.',
    category: 'Curated by Influential Individuals',
    url: 'https://lexfridman.com/newsletter/',
  },
  {
    name: "Gary Marcus's Substack/Blog",
    description: 'Critical perspectives on current AI approaches.',
    category: 'Curated by Influential Individuals',
    url: 'https://garymarcus.substack.com/',
  },
  {
    name: "Sebastian Raschka's Blog/Newsletter",
    description: 'Practical ML, Python, and deep learning.',
    category: 'Curated by Influential Individuals',
    url: 'https://sebastianraschka.com/newsletter/', // Or main blog: https://sebastianraschka.com/
  },
  {
    name: "Yann LeCun's Social Media",
    description:
      'Not a newsletter, but essential following for AI progress and debates.',
    category: 'Curated by Influential Individuals',
    url: 'https://twitter.com/ylecun', // Or Facebook: https://www.facebook.com/yann.lecun
  },
  {
    name: 'Turing Post',
    description: 'Daily AI news with a slightly more business/product angle.',
    category: 'More Niche or Emerging Gems',
    url: 'https://www.turingpost.com/',
  },
  {
    name: 'AI Snake Oil',
    description: 'Critical perspectives on AI claims and hype.',
    category: 'More Niche or Emerging Gems',
    url: 'https://aisnakeoil.substack.com/',
  },
  {
    name: 'Interconnects (Nathan Lambert)',
    description: 'Focus on RLHF, LLMs, and the human side of AI.',
    category: 'More Niche or Emerging Gems',
    url: 'https://interconnects.ai/', // Main site, often a Substack
  },
  {
    name: 'Ahead of AI',
    description: 'AI news and insights, often with a concise format.',
    category: 'More Niche or Emerging Gems',
    url: 'https://magazine.sebastianraschka.com/', // This is Sebastian Raschka's other newsletter which fits this description
  },
  {
    name: 'Davis Summarizes Papers',
    description: 'Quick summaries of interesting AI research papers.',
    category: 'More Niche or Emerging Gems',
    url: 'https://davissummarizespapers.substack.com/',
  },
  {
    name: 'Unsupervised Learning (Daniel Miessler)',
    description:
      'Broader security and tech, but strong AI/ML coverage and analysis.',
    category: 'More Niche or Emerging Gems',
    url: 'https://danielmiessler.com/newsletter/',
  },

  // ... continue for ALL newsletters from your document
  // --- Category 2: Research & Cutting-Edge Developments ---
  {
    name: 'Papers with Code Newsletter',
    description:
      'Latest trending research papers with code implementations. (Essential for researchers)',
    category: 'Research & Cutting-Edge Developments',
    url: 'https://paperswithcode.com/newsletter', // Example
  },
  {
    name: 'ArXiv Sanity Preserver (by Andrej Karpathy)',
    description:
      'Not a newsletter, but a website that helps filter/sort new arXiv papers. Many use it daily like one.',
    category: 'Research & Cutting-Edge Developments',
    url: 'http://www.arxiv-sanity.com/', // This one is a site, but good to list
  },
  // ... and so on for all categories and newsletters
];

