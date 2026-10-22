export interface LocalChatEvaluationCase {
  id: string;
  question: string;
  expectedSources: string[];
  personal: boolean;
}

const localChatEvaluation: LocalChatEvaluationCase[] = [
  { id: 'profile', question: 'Who is Ansil?', expectedSources: ['profile'], personal: true },
  { id: 'agents', question: 'What agent systems has Ansil worked on?', expectedSources: ['business-analyst-agent', 'local-ai-research-assistant'], personal: true },
  { id: 'vision', question: 'Has Ansil worked with computer vision?', expectedSources: ['card-grading', 'pressure-chart-reading'], personal: true },
  { id: 'evaluation', question: 'What does Ansil care about in AI evaluation?', expectedSources: ['ai-evaluation-notebook'], personal: true },
  { id: 'unknown', question: 'What university grade did Ansil receive?', expectedSources: [], personal: true },
];

export default localChatEvaluation;
