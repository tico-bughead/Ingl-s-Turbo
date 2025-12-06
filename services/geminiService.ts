import { GoogleGenAI, Type } from "@google/genai";
import { PronunciationResult } from "../types";

const apiKey = process.env.API_KEY;

// NOTE: Unit generation logic has been removed in favor of static content.
// This service now only handles interactive AI features (Pronunciation, Chat, etc.)
// As recording is disabled, this service is currently mostly placeholder for future AI expansion.

export const placeholderService = () => {
    // Placeholder to keep file valid module
    return true;
};
