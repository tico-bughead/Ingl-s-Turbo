export type LevelId = 1 | 2 | 3 | 4 | 5;

export interface UnitDefinition {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface BookDefinition {
  id: LevelId;
  title: string;
  subtitle: string;
  levelDescription: string;
  color: string;
  units: UnitDefinition[];
}

export interface VocabularyItem {
  word: string;
  translation: string;
  example: string;
  exampleMeaning: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  translation: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index
  explanation: string;
}

// Grammar "Bricks" types
// Expanded to include specific grammatical classes
export type BrickType = 
  | 'subject' 
  | 'verb' 
  | 'auxiliary' 
  | 'object' 
  | 'adjective' 
  | 'adverb' 
  | 'preposition' 
  | 'conjunction' 
  | 'pronoun' 
  | 'noun'
  | 'article' 
  | 'determiner' 
  | 'question_word' 
  | 'other';

export interface GrammarBrick {
  text: string;
  type: BrickType;
  translation?: string;
}

export interface GrammarStructure {
  label: string; // e.g. "Affirmative Form"
  fullSentence: string;
  meaning: string;
  bricks: GrammarBrick[];
}

export interface GrammarTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface GrammarSection {
  introduction: string; // Brief intro in Portuguese
  structures: GrammarStructure[];
  tables: GrammarTable[];
}

export interface SpeakRepeatItem {
  text: string;
  translation: string;
  focus: string; // e.g., "The 'th' sound"
}

export interface PronunciationResult {
  score: number; // 0-100
  feedback: string;
  strengths?: string;
  improvements?: string;
}

export interface GeneratedUnitContent {
  introText: string;
  vocabulary: VocabularyItem[];
  grammarTitle: string;
  grammar: GrammarSection;
  dialogue: DialogueLine[];
  speakAndRepeat: SpeakRepeatItem[];
  quiz: QuizQuestion[];
}

export type UnitStatus = 'locked' | 'idle' | 'generating' | 'completed' | 'error';