import { GoogleGenAI, Type, Schema } from "@google/genai";
import { GeneratedUnitContent, PronunciationResult } from "../types";

const apiKey = process.env.API_KEY;

// Use 'gemini-2.5-flash' for fast, high-quality structured generation
const MODEL_NAME = "gemini-2.5-flash";

const unitSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    introText: {
      type: Type.STRING,
      description: "A welcoming paragraph introducing the topic in Portuguese, explaining what the student will learn."
    },
    vocabulary: {
      type: Type.ARRAY,
      description: "A list of 8-12 key vocabulary words or phrases for this unit.",
      items: {
        type: Type.OBJECT,
        properties: {
          word: { type: Type.STRING },
          translation: { type: Type.STRING },
          example: { type: Type.STRING, description: "A simple example sentence in English" },
          exampleMeaning: { type: Type.STRING, description: "Portuguese translation of the example sentence" }
        },
        required: ["word", "translation", "example", "exampleMeaning"]
      }
    },
    grammarTitle: {
      type: Type.STRING,
      description: "The name of the main grammar point (e.g., 'Simple Past', 'Verb To Be')."
    },
    grammar: {
      type: Type.OBJECT,
      description: "Structured grammar explanation using visual bricks and tables.",
      properties: {
        introduction: {
          type: Type.STRING,
          description: "A brief, clear explanation of the rule in Portuguese."
        },
        structures: {
          type: Type.ARRAY,
          description: "Visual sentence building blocks. Generate 2-3 examples (Affirmative, Negative, Question).",
          items: {
            type: Type.OBJECT,
            properties: {
              label: { type: Type.STRING, description: "e.g., 'Forma Afirmativa'" },
              fullSentence: { type: Type.STRING, description: "The complete English sentence formed by the bricks." },
              meaning: { type: Type.STRING, description: "The Portuguese translation of the complete sentence." },
              bricks: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    text: { type: Type.STRING, description: "The word or part of speech" },
                    type: { 
                      type: Type.STRING, 
                      enum: [
                        "subject", "verb", "auxiliary", "object", "adjective", 
                        "adverb", "preposition", "conjunction", "pronoun", 
                        "noun", "article", "determiner", "question_word", "other"
                      ],
                      description: "The specific grammatical category. Be precise (e.g., use 'preposition' instead of 'other')."
                    },
                    translation: { type: Type.STRING, description: "Optional literal translation" }
                  },
                  required: ["text", "type"]
                }
              }
            },
            required: ["label", "fullSentence", "meaning", "bricks"]
          }
        },
        tables: {
          type: Type.ARRAY,
          description: "1 or 2 data tables summarizing conjugations or rules.",
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              headers: { type: Type.ARRAY, items: { type: Type.STRING } },
              rows: { 
                type: Type.ARRAY, 
                items: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING } 
                } 
              }
            },
            required: ["title", "headers", "rows"]
          }
        }
      },
      required: ["introduction", "structures", "tables"]
    },
    dialogue: {
      type: Type.ARRAY,
      description: "A conversation between two people using the target grammar and vocabulary. 6-10 lines.",
      items: {
        type: Type.OBJECT,
        properties: {
          speaker: { type: Type.STRING },
          text: { type: Type.STRING, description: "The English line using lesson vocabulary" },
          translation: { type: Type.STRING, description: "Portuguese translation of the line" }
        },
        required: ["speaker", "text", "translation"]
      }
    },
    speakAndRepeat: {
      type: Type.ARRAY,
      description: "3 key phrases or sentences from this unit for pronunciation practice.",
      items: {
        type: Type.OBJECT,
        properties: {
          text: { type: Type.STRING, description: "The phrase to speak" },
          translation: { type: Type.STRING, description: "Portuguese meaning" },
          focus: { type: Type.STRING, description: "What to focus on (e.g. 'Intonation', 'Th sound')" }
        },
        required: ["text", "translation", "focus"]
      }
    },
    quiz: {
      type: Type.ARRAY,
      description: "3-4 multiple choice questions to test understanding.",
      items: {
        type: Type.OBJECT,
        properties: {
          question: { type: Type.STRING },
          options: { type: Type.ARRAY, items: { type: Type.STRING } },
          correctAnswer: { type: Type.INTEGER, description: "Index of the correct answer (0-3)" },
          explanation: { type: Type.STRING, description: "Why this is the correct answer (in Portuguese)" }
        },
        required: ["question", "options", "correctAnswer", "explanation"]
      }
    }
  },
  required: ["introText", "vocabulary", "grammarTitle", "grammar", "dialogue", "speakAndRepeat", "quiz"]
};

export const generateUnitContent = async (
  bookTitle: string,
  levelDescription: string,
  unitTitle: string,
  unitDescription: string
): Promise<GeneratedUnitContent> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are an expert English teacher creating a course e-book for Portuguese speakers called '${bookTitle}'.
    Level: ${levelDescription}.
    
    Create content for a Unit titled "${unitTitle}".
    Topic Description: ${unitDescription}.
    
    The content must be educational, engaging, and accurate. 
    Explanations must be in Portuguese (pt-BR).
    Target Language: English (US).
    
    GRAMMAR INSTRUCTION:
    Do NOT write long paragraphs of text. 
    Use the 'structures' field to create "Building Bricks" of sentences (visual blocks).
    CLASSIFY EACH WORD PRECISELY. Do not use 'other' unless absolutely necessary. Use 'preposition', 'article', 'auxiliary', etc.
    Ensure you provide the 'fullSentence' (complete English phrase) and its 'meaning' (Portuguese translation) for each structure.
    Use the 'tables' field to show conjugation or rules clearly.
    
    DIALOGUE INSTRUCTION:
    The dialogue MUST use the specific vocabulary and grammar points taught in this unit.

    SPEAK & REPEAT INSTRUCTION:
    Select 3 distinct phrases that capture the essence of the lesson's grammar or vocabulary.
    
    Follow the JSON schema strictly.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: unitSchema,
        temperature: 0.4, 
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");

    return JSON.parse(text) as GeneratedUnitContent;
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};

export const checkPronunciation = async (audioBase64: string, targetPhrase: string, mimeType: string = "audio/webm"): Promise<PronunciationResult> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }
  
  // Validate input
  if (!audioBase64 || audioBase64.length < 100) {
     return {
       score: 0,
       feedback: "Erro no áudio. Tente gravar novamente por favor.",
       strengths: "",
       improvements: "Verifique seu microfone."
     };
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    Listen to this audio recording of a Portuguese speaker trying to say the English phrase: "${targetPhrase}".
    
    1. Rate the pronunciation on a scale of 0 to 100 based on clarity and accuracy.
    2. Provide a feedback object with:
       - 'score': number (0-100)
       - 'feedback': A concise summary sentence in Portuguese.
       - 'strengths': One sentence in Portuguese highlighting what was good.
       - 'improvements': One sentence in Portuguese highlighting what to fix (e.g., 'th' sound, 'r' sound).
    
    Return JSON format.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: {
      parts: [
        { inlineData: { mimeType: mimeType, data: audioBase64 } },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.INTEGER },
          feedback: { type: Type.STRING },
          strengths: { type: Type.STRING },
          improvements: { type: Type.STRING }
        },
        required: ["score", "feedback", "strengths", "improvements"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from pronunciation check");
  return JSON.parse(text) as PronunciationResult;
};