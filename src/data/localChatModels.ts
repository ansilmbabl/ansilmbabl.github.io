export interface LocalChatModel {
  id: string;
  label: string;
  description: string;
  size: string;
  dtype: 'q4';
}

const localChatModels: LocalChatModel[] = [
  {
    id: 'onnx-community/Qwen2.5-0.5B-Instruct-ONNX',
    label: 'Qwen 0.5B',
    description: 'Fast and recommended for most laptops',
    size: '~500 MB',
    dtype: 'q4',
  },
  {
    id: 'onnx-community/SmolLM2-360M-ONNX',
    label: 'SmolLM2 360M',
    description: 'Smallest option for a lightweight experiment',
    size: '~400 MB',
    dtype: 'q4',
  },
  {
    id: 'onnx-community/Qwen2.5-1.5B-Instruct',
    label: 'Qwen 1.5B',
    description: 'More capable, with a larger download',
    size: 'Larger download',
    dtype: 'q4',
  },
];

export default localChatModels;
