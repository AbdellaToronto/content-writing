

export interface SuggestedTopic {
  id: string;
  label: string;
  drafts: { id: string; url: string; author: string[]; date: string; }[];
}