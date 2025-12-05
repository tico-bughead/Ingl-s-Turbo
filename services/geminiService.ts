import { GoogleGenAI, Type } from "@google/genai";
import { PronunciationResult } from "../types";

const apiKey = process.env.API_KEY;

// NOTE: Unit generation logic has been removed in favor of static content.
// This service now only handles interactive AI features (Pronunciation, Chat, etc.)

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

  try {
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
  } catch (error) {
    console.error("Pronunciation Check Error:", error);
    return {
       score: 0,
       feedback: "Erro ao conectar com a IA. Tente novamente.",
       strengths: "-",
       improvements: "-"
    };
  }
};