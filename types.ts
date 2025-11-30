
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface StartupCaseStudy {
  id: string;
  name: string;
  category: string;
  status: string; // e.g. "Bankrupt", "Shut Down"
  country: string;
  year: string; // Key year (collapse or founding)
  peakValuation: string;
  failureKeywords: string[]; // e.g. ["Burn rate", "Fraud"]
  summary: string;
  logoUrl: string;
  overview: string;
  detailedAnalysis: string; // New field for long-form text (6-8 paragraphs)
  founders: string[];
  timeline: TimelineEvent[];
  keyMistakes: string[];
  whyItFailed: string;
  lessonsLearned: string[];
  references: string[];
  trending?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'trending' }
  | { type: 'case-study', study: StartupCaseStudy };

// Keeping legacy types to prevent errors in unused components (like Checkout)
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string;
}
