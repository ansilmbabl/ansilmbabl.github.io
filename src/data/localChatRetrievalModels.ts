export interface LocalChatRetrievalModel {
  id: string;
  label: string;
  description: string;
  size: string;
}

const localChatRetrievalModels: LocalChatRetrievalModel[] = [
  {
    id: 'Xenova/all-MiniLM-L6-v2',
    label: 'MiniLM-L6-v2',
    description: 'Fast baseline for browser retrieval',
    size: '~344 MB',
  },
  {
    id: 'Xenova/bge-small-en-v1.5',
    label: 'BGE Small',
    description: 'Stronger semantic retrieval experiment',
    size: '~460 MB',
  },
];

export default localChatRetrievalModels;
