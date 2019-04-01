

export interface SuggestedTopic {
  id: string;
  label: string;
  drafts: { id: string; url: string; author: string[]; date: string; }[];
}

export interface TopicDraft {
  label: string;
  readmeMarkdown: string;
  goals: string[];
  exerciseUrls: string[];
}

export interface Topic extends TopicDraft {
  id: string;
}