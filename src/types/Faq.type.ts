export interface FaqsProps {
  id: number;
  question: string;
  answer: { name: string; answer: string }[] | string;
}
