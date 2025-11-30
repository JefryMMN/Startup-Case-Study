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
  status: string;
  country: string;
  year: string;
  peakValuation: string;
  failureKeywords?: string[];
  summary: string;
  logoUrl?: string;
  overview?: string;
  detailedAnalysis?: string;
  founders?: string[];
  timeline?: TimelineEvent[];
  keyMistakes?: string[];
  whyItFailed?: string;
  lessonsLearned?: string[];
  references?: string[];
  trending?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

/** 📰 Journal Articles (for future use, optional) */
export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string;
}

/** 🌍 App View States */
/** 🌍 App View States */
export type ViewState =
  | { type: 'home' }
  | { type: 'trending' }
  | { type: 'case-study'; study: Partial<StartupCaseStudy> }; // ✅ Allow partial data
