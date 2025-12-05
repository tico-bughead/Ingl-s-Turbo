import { BookDefinition } from './types';

export const BOOKS: BookDefinition[] = [
  {
    id: 1,
    title: "Inglês Turbo 1",
    subtitle: "Fundamentos (Intro)",
    levelDescription: "Iniciante Absoluto (A1)",
    color: "bg-amber-500",
    units: [
      { id: "1-1", number: 1, title: "It's nice to meet you", description: "Greetings, names, and verb to be." },
      { id: "1-2", number: 2, title: "What's this?", description: "Everyday objects, plurals, this/that." },
      { id: "1-3", number: 3, title: "Where are you from?", description: "Countries, nationalities, numbers." },
      { id: "1-4", number: 4, title: "I'm not wearing boots!", description: "Clothes, colors, present continuous." },
      { id: "1-5", number: 5, title: "What are you doing?", description: "Time, daily routines." },
      { id: "1-6", number: 6, title: "My sister works downtown", description: "Family, jobs, simple present." },
      { id: "1-7", number: 7, title: "Does it have a view?", description: "House, apartment, furniture." },
      { id: "1-8", number: 8, title: "Where do you work?", description: "Workplaces, simple present questions." }
    ]
  },
  {
    id: 2,
    title: "Inglês Turbo 2",
    subtitle: "Essencial (Level 1)",
    levelDescription: "Iniciante Avançado (A2)",
    color: "bg-blue-500",
    units: [
      { id: "2-1", number: 1, title: "That's my kind of friend", description: "Personality, likes/dislikes." },
      { id: "2-2", number: 2, title: "It was a disaster!", description: "Past tense, vacations." },
      { id: "2-3", number: 3, title: "Is it far from here?", description: "Directions, places in town." },
      { id: "2-4", number: 4, title: "Create the best look", description: "Comparatives, superlatives." },
      { id: "2-5", number: 5, title: "What are you doing later?", description: "Future plans, invitations." },
      { id: "2-6", number: 6, title: "I have a backache", description: "Health, advice, imperatives." },
      { id: "2-7", number: 7, title: "Can we buy another one?", description: "Shopping, prices, preferences." },
      { id: "2-8", number: 8, title: "Do you know where it is?", description: "Indirect questions, polite requests." }
    ]
  },
  {
    id: 3,
    title: "Inglês Turbo 3",
    subtitle: "Intermediário (Level 2)",
    levelDescription: "Intermediário (B1)",
    color: "bg-emerald-500",
    units: [
      { id: "3-1", number: 1, title: "A time to remember", description: "Childhood memories, used to." },
      { id: "3-2", number: 2, title: "Caught in the rush", description: "Transportation, adverbs of quantity." },
      { id: "3-3", number: 3, title: "Time for a change!", description: "Houses, wish, evaluations." },
      { id: "3-4", number: 4, title: "I've never heard of that", description: "Food, recipes, present perfect." },
      { id: "3-5", number: 5, title: "Going to places", description: "Travel, future with will/going to." },
      { id: "3-6", number: 6, title: "OK. No problem!", description: "Complaints, household chores." },
      { id: "3-7", number: 7, title: "What's this for?", description: "Technology, infinitives, gerunds." },
      { id: "3-8", number: 8, title: "Let's celebrate!", description: "Holidays, festivals, relative clauses." }
    ]
  },
  {
    id: 4,
    title: "Inglês Turbo 4",
    subtitle: "Fluência (Level 3)",
    levelDescription: "Intermediário Avançado (B2)",
    color: "bg-violet-600",
    units: [
      { id: "4-1", number: 1, title: "That's what friends are for", description: "Friendship, relationships." },
      { id: "4-2", number: 2, title: "Career moves", description: "Jobs, career, gerunds as subjects." },
      { id: "4-3", number: 3, title: "Could you do me a favor?", description: "Requests, favors, modals." },
      { id: "4-4", number: 4, title: "What a story!", description: "Narratives, past continuous, past perfect." },
      { id: "4-5", number: 5, title: "Crossing cultures", description: "Culture shock, customs." },
      { id: "4-6", number: 6, title: "What's wrong with it?", description: "Consumer complaints, passive voice." },
      { id: "4-7", number: 7, title: "The world we live in", description: "Environment, global issues." },
      { id: "4-8", number: 8, title: "Lifelong learning", description: "Skills, education, future possibilities." }
    ]
  },
  {
    id: 5,
    title: "AI Practice",
    subtitle: "Interactive Tools",
    levelDescription: "Real-time Practice",
    color: "bg-pink-600",
    units: [
      { id: "5-9", number: 1, title: "AI Chatbot Tutor", description: "Text-based conversation with an intelligent tutor (Gemini 3 Pro)." },
      { id: "5-10", number: 2, title: "Live Conversation", description: "Real-time voice practice with AI (Gemini Live Audio)." }
    ]
  }
];