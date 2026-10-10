export type DetectedLang = 'bn' | 'bn-latn' | 'en' | 'unknown';
export type LangSource = 'script' | 'wordlist' | 'session' | 'ui' | 'default';

export interface LanguageDetectionResult {
  lang: DetectedLang;
  source: LangSource;
}

export interface DetectLanguageOptions {
  text: string;
  sessionLang?: DetectedLang;
  uiLocale?: string;
}

const BENGALI_ROMANIZED_WORDS = new Set([
  'ami', 'amar', 'amake', 'amra', 'tumi', 'tomar', 'tomer', 'tomake', 'tomra', 
  'apni', 'apnar', 'tui', 'eta', 'eita', 'ota', 'ei', 'oi', 'ki', 'ke', 'kon', 
  'kothay', 'kobe', 'keno', 'kivabe', 'kemon', 'koto', 'ache', 'nai', 'nei', 
  'hobe', 'hoy', 'hoyeche', 'kore', 'koro', 'korbo', 'korte', 'korchi', 'bolo', 
  'bolun', 'bolbo', 'bolte', 'dao', 'den', 'dibe', 'deo', 'jano', 'jani', 'bujhi', 
  'bujhte', 'bujhao', 'bujhiye', 'bujhlam', 'parbo', 'parchi', 'pari', 'lagbe', 
  'lage', 'chai', 'cai', 'chilo', 'thake', 'thakbe', 'jabo', 'jai', 'ashbe', 
  'esho', 'dekhao', 'dekho', 'likho', 'likhe', 'shekhao', 'nam', 'kotha', 'kaj', 
  'jinish', 'prosno', 'proshno', 'uttor', 'shob', 'sob', 'onek', 'aro', 'ektu', 
  'ekta', 'akta', 'kisu', 'kichu', 'khub', 'valo', 'bhalo', 'mane', 'mone', 
  'jonno', 'shomoy', 'tahole', 'taile', 'kintu', 'abar', 'na'
]);

const WEAK_TOKENS = new Set(['to', 'e', 'o', 'ta', 'er', 'ba', 'ar', 'se', 'me', 'no', 'or']);

const COMMON_ENGLISH_WORDS = new Set([
  'what', 'is', 'the', 'how', 'why', 'who', 'when', 'where', 'explain', 'describe',
  'write', 'can', 'you', 'tell', 'me', 'about', 'this', 'that', 'it', 'and', 'or',
  'but', 'so', 'if', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for',
  'with', 'against', 'between', 'into', 'through', 'during', 'before',
  'after', 'above', 'below', 'from', 'up', 'down', 'in', 'out', 'on', 'off',
  'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'all',
  'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such',
  'nor', 'not', 'only', 'own', 'same', 'than', 'too', 'very', 's', 't',
  'will', 'just', 'don', 'should', 'now', 'mean', 'means', 'notes', 'note', 'give',
  'short', 'summary', 'analyze', 'analysis', 'critical', 'appreciation', 'a', 'an',
  'your', 'name', 'hello', 'hi', 'hey', 'are', 'am', 'do', 'does', 'did', 'please',
  'thanks', 'thank', 'good', 'morning', 'evening', 'night'
]);

export function detectLanguage({ text, sessionLang, uiLocale }: DetectLanguageOptions): LanguageDetectionResult {
  // 1. Script Check (Bengali characters)
  if (/[\u0980-\u09FF]/.test(text)) {
    return { lang: 'bn', source: 'script' };
  }

  const tokens = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
  
  if (tokens.length === 0) {
    if (sessionLang) return { lang: sessionLang, source: 'session' };
    if (uiLocale === 'bn') return { lang: 'bn-latn', source: 'ui' };
    return { lang: 'unknown', source: 'default' };
  }

  // 2. Banglish Check
  let strongHits = 0;
  let weakHits = 0;
  let engHits = 0;

  for (const token of tokens) {
    if (BENGALI_ROMANIZED_WORDS.has(token)) {
      strongHits++;
    } else if (WEAK_TOKENS.has(token)) {
      weakHits++;
    } else if (COMMON_ENGLISH_WORDS.has(token)) {
      engHits++;
    }
  }

  const weightedHits = strongHits + (weakHits * 0.5);
  const weightedHitRatio = weightedHits / tokens.length;

  if (strongHits >= 2 || (strongHits >= 1 && weightedHitRatio >= 0.2)) {
    return { lang: 'bn-latn', source: 'wordlist' };
  }

  // 3. English Check
  // Lowered the token threshold to 2 to catch phrases like "your name?"
  if (tokens.length >= 2 && strongHits === 0) {
    const engRatio = engHits / tokens.length;
    if (engRatio >= 0.5) {
      return { lang: 'en', source: 'wordlist' };
    }
    // Also fallback to english if mostly unknown tokens but 0 bangla, and length >= 3
    if (tokens.length >= 3 && engHits > 0) {
       return { lang: 'en', source: 'default' };
    }
  }

  // 4. Fallback for short/ambiguous
  if (sessionLang) return { lang: sessionLang, source: 'session' };
  if (uiLocale === 'bn') return { lang: 'bn-latn', source: 'ui' };

  return { lang: 'unknown', source: 'default' };
}

