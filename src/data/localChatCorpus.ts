export interface LocalChatCorpusEntry {
  id: string;
  title: string;
  kind: string;
  content: string;
  href: string;
}

// Keep this corpus intentionally curated. Do not build it from full work-page
// bodies: some pages contain client work that should remain high level.
const localChatCorpus: LocalChatCorpusEntry[] = [
  {
    id: 'profile',
    title: 'About Ansil M B',
    kind: 'Profile',
    href: '/about/',
    content: 'Ansil M B builds applied AI systems for real business problems and explores the research underneath them. His interests include applied AI, agentic systems, computer vision, AI evaluation, and local AI research. He is based in Bengaluru, India and is open to thoughtful product and applied AI teams.',
  },
  {
    id: 'local-ai-research-assistant',
    title: 'Local AI research assistant',
    kind: 'Personal project',
    href: '/projects/local-ai-research-assistant/',
    content: 'An evolving local agentic system for exploring AI news, papers, tools, and questions without sending the entire research workflow to the cloud. The project explores research trails, uncertainty, useful memory, and human-reviewed signals. Its public direction uses Python, LangGraph, Ollama, and PostgreSQL.',
  },
  {
    id: 'ai-evaluation-notebook',
    title: 'AI evaluation notebook',
    kind: 'Research notebook',
    href: '/projects/ai-evaluation-notebook/',
    content: 'A practical collection of experiments around hallucination checks, retrieval quality, latency, cost, and fallback behavior. The goal is to document small reproducible experiments that help determine whether an AI system is getting better. Technologies include DeepEval, LangSmith, Python, and RAG.',
  },
  {
    id: 'business-analyst-agent',
    title: 'Business Analyst Agent',
    kind: 'Agent systems',
    href: '/work/business-analyst-agent/',
    content: 'Ansil contributed to a production Business Analyst agent for a financial-services MIS while supporting Visa through Grid Dynamics. The public outcome was a reporting workflow reduced from roughly two months to two weeks. The system combined multiple agents, tools, retrieval, evaluation, and controlled business workflows. Client-specific implementation details are intentionally not included here.',
  },
  {
    id: 'card-grading',
    title: 'Automated card grading',
    kind: 'Applied ML',
    href: '/work/card-grading/',
    content: 'A vision system that combined image understanding and language models to grade trading cards from a mobile photo. Ansil worked with segmentation, object detection, OCR, and LLM-based analysis. The workflow reduced assessment time from approximately five minutes to seconds.',
  },
  {
    id: 'pharmaceutical-research-assistants',
    title: 'Pharmaceutical research assistants',
    kind: 'Generative AI',
    href: '/work/pharmaceutical-research-assistants/',
    content: 'Ansil built and integrated Generative AI assistants for patient recruitment, drug-demand analysis, and inventory forecasting in pharmaceutical research workflows. The systems used LLMs, vector databases, retrieval-augmented generation, and agentic workflows to reduce recurring information-heavy work.',
  },
  {
    id: 'pressure-chart-reading',
    title: 'Reading pressure charts with computer vision',
    kind: 'Computer vision',
    href: '/work/pressure-chart-reading/',
    content: 'A computer vision pipeline for reading pressure charts used in oil-and-gas workflows. Ansil worked with OpenCV and keypoint detection across multiple chart types. The system achieved over 95% accuracy with processing time below three seconds and reduced manual data-entry errors.',
  },
  {
    id: 'survey-automation',
    title: 'Survey automation and validation',
    kind: 'Generative AI',
    href: '/work/survey-automation/',
    content: 'A workflow using fine-tuned language models and reviewer agents to turn complex survey requirements into usable outputs. Ansil worked with reviewer and inter-agent workflows, hallucination checks, prompt comparisons, latency tracking, and token/cost tracking. Turnaround moved from about one day to under five minutes on evaluated inputs.',
  },
];

export default localChatCorpus;
