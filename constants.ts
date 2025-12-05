import { BookDefinition, GeneratedUnitContent } from './types';

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

// --- STATIC CONTENT DATABASE ---
// This replaces the on-demand generation with high-quality pre-written content.

const CONTENT_TEMPLATE: GeneratedUnitContent = {
  introText: "Welcome to this unit! In this lesson, we will explore new vocabulary and grammar concepts to help you improve your English fluency. Let's get started.",
  vocabulary: [],
  grammarTitle: "Key Grammar",
  grammar: { introduction: "", structures: [], tables: [] },
  dialogue: [],
  speakAndRepeat: [],
  quiz: []
};

// Helper to create content easily
const createContent = (overrides: Partial<GeneratedUnitContent>): GeneratedUnitContent => ({
  ...CONTENT_TEMPLATE,
  ...overrides
});

const UNIT_CONTENTS: Record<string, GeneratedUnitContent> = {
  // --- BOOK 1 (INTRO) ---
  "1-1": createContent({
    introText: "Bem-vindo à sua primeira lição! Nesta unidade, você aprenderá a cumprimentar pessoas, apresentar-se e usar o verbo 'to be' (ser/estar) para falar sobre nomes e sentimentos. Vamos começar!",
    vocabulary: [
      { word: "Hello", translation: "Olá", example: "Hello, my name is Sarah.", exampleMeaning: "Olá, meu nome é Sarah." },
      { word: "Hi", translation: "Oi (Informal)", example: "Hi, John!", exampleMeaning: "Oi, John!" },
      { word: "Name", translation: "Nome", example: "What is your name?", exampleMeaning: "Qual é o seu nome?" },
      { word: "Nice", translation: "Legal / Prazeroso", example: "It's nice to meet you.", exampleMeaning: "É um prazer te conhecer." },
      { word: "Meet", translation: "Conhecer / Encontrar", example: "I want to meet your friend.", exampleMeaning: "Eu quero conhecer seu amigo." },
      { word: "Morning", translation: "Manhã", example: "Good morning!", exampleMeaning: "Bom dia!" },
      { word: "Student", translation: "Estudante", example: "I am a student.", exampleMeaning: "Eu sou um estudante." },
      { word: "Teacher", translation: "Professor(a)", example: "She is a teacher.", exampleMeaning: "Ela é uma professora." }
    ],
    grammarTitle: "Verb To Be (Present Simple)",
    grammar: {
      introduction: "O verbo 'to be' é o verbo mais importante do inglês. Ele significa SER ou ESTAR, dependendo do contexto. Ele muda de forma dependendo da pessoa (I am, You are, He is).",
      structures: [
        {
          label: "Afirmativa",
          fullSentence: "I am a student.",
          meaning: "Eu sou um estudante.",
          bricks: [
            { text: "I", type: "subject", translation: "Eu" },
            { text: "am", type: "verb", translation: "sou" },
            { text: "a", type: "article", translation: "um" },
            { text: "student", type: "noun", translation: "estudante" }
          ]
        },
        {
          label: "Afirmativa (Contração)",
          fullSentence: "You're late.",
          meaning: "Você está atrasado.",
          bricks: [
            { text: "You", type: "subject", translation: "Você" },
            { text: "'re", type: "verb", translation: "está" },
            { text: "late", type: "adjective", translation: "atrasado" }
          ]
        }
      ],
      tables: [
        {
          title: "Verb To Be - Conjugation",
          headers: ["Pronoun", "Full Form", "Contraction", "Translation"],
          rows: [
            ["I", "am", "I'm", "Eu sou/estou"],
            ["You", "are", "You're", "Você é/está"],
            ["He", "is", "He's", "Ele é/está"],
            ["She", "is", "She's", "Ela é/está"],
            ["It", "is", "It's", "Ele/Ela (coisa/animal) é/está"],
            ["We", "are", "We're", "Nós somos/estamos"],
            ["They", "are", "They're", "Eles/Elas são/estão"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Michael", text: "Hello. My name is Michael.", translation: "Olá. Meu nome é Michael." },
      { speaker: "Jennifer", text: "Hi, Michael. I'm Jennifer. Nice to meet you.", translation: "Oi, Michael. Eu sou Jennifer. Prazer em te conhecer." },
      { speaker: "Michael", text: "Nice to meet you too. Are you a student here?", translation: "Prazer em te conhecer também. Você é aluna aqui?" },
      { speaker: "Jennifer", text: "Yes, I am. And you?", translation: "Sim, eu sou. E você?" },
      { speaker: "Michael", text: "I'm a student too.", translation: "Eu sou aluno também." }
    ],
    speakAndRepeat: [
      { text: "It's nice to meet you.", translation: "É um prazer te conhecer.", focus: "Connected speech (nice-to)" },
      { text: "I am a student.", translation: "Eu sou um estudante.", focus: "Pronunciation of 'I am'" },
      { text: "My name is David.", translation: "Meu nome é David.", focus: "Possessive 'My'" }
    ],
    quiz: [
      {
        question: "Como se diz 'Eu sou Michael'?",
        options: ["I is Michael", "I am Michael", "I are Michael", "Me is Michael"],
        correctAnswer: 1,
        explanation: "Com 'I' (Eu), sempre usamos 'am'."
      },
      {
        question: "Qual é a contração de 'She is'?",
        options: ["She's", "Shes'", "She is", "Sh'is"],
        correctAnswer: 0,
        explanation: "'She is' se contrai para 'She's'."
      },
      {
        question: "Complete: '____ you a student?'",
        options: ["Is", "Am", "Are", "Be"],
        correctAnswer: 2,
        explanation: "Com 'You' (Você), usamos 'Are' para fazer perguntas."
      }
    ]
  }),

  "1-2": createContent({
    introText: "Nesta lição, vamos aprender a identificar objetos comuns do dia a dia e como usar 'this' (isto) e 'it' para falar sobre eles. Também aprenderemos a formar o plural.",
    vocabulary: [
      { word: "Book", translation: "Livro", example: "This is a book.", exampleMeaning: "Isto é um livro." },
      { word: "Pen", translation: "Caneta", example: "I have a pen.", exampleMeaning: "Eu tenho uma caneta." },
      { word: "Keys", translation: "Chaves", example: "Where are my keys?", exampleMeaning: "Onde estão minhas chaves?" },
      { word: "Phone", translation: "Celular/Telefone", example: "My phone is new.", exampleMeaning: "Meu celular é novo." },
      { word: "This", translation: "Isto / Este / Esta", example: "What is this?", exampleMeaning: "O que é isto?" },
      { word: "These", translation: "Estes / Estas", example: "These are my books.", exampleMeaning: "Estes são meus livros." }
    ],
    grammarTitle: "Plurals & Demonstratives",
    grammar: {
      introduction: "Usamos 'This' para coisas singulares perto de nós e 'These' para coisas plurais perto de nós. Para formar o plural da maioria das palavras, adicionamos 's'.",
      structures: [
        {
          label: "Singular",
          fullSentence: "This is a camera.",
          meaning: "Isto é uma câmera.",
          bricks: [
            { text: "This", type: "determiner", translation: "Isto" },
            { text: "is", type: "verb", translation: "é" },
            { text: "a", type: "article", translation: "uma" },
            { text: "camera", type: "noun", translation: "câmera" }
          ]
        },
        {
          label: "Plural",
          fullSentence: "These are cameras.",
          meaning: "Estas são câmeras.",
          bricks: [
            { text: "These", type: "determiner", translation: "Estas" },
            { text: "are", type: "verb", translation: "são" },
            { text: "cameras", type: "noun", translation: "câmeras" }
          ]
        }
      ],
      tables: [
        {
          title: "Plural Rules",
          headers: ["Rule", "Singular", "Plural"],
          rows: [
            ["Add -s", "Book", "Books"],
            ["Ends in -ch, -sh, -x (Add -es)", "Watch", "Watches"],
            ["Ends in consonant + y (Change to -ies)", "Dictionary", "Dictionaries"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Joe", text: "What's this?", translation: "O que é isso?" },
      { speaker: "Mary", text: "It's a camera.", translation: "É uma câmera." },
      { speaker: "Joe", text: "Oh, cool. And what are these?", translation: "Ah, legal. E o que são estes?" },
      { speaker: "Mary", text: "They're earrings.", translation: "São brincos." }
    ],
    speakAndRepeat: [
      { text: "What is this?", translation: "O que é isto?", focus: "Intonation in questions" },
      { text: "It's an umbrella.", translation: "É um guarda-chuva.", focus: "Linking 'It's an'" },
      { text: "These are my keys.", translation: "Estas são minhas chaves.", focus: "Sound of 'Th' in These" }
    ],
    quiz: [
      {
        question: "Qual o plural de 'Key'?",
        options: ["Keyes", "Keys", "Keies", "Kez"],
        correctAnswer: 1,
        explanation: "Apenas adicionamos 's' porque termina em vogal + y."
      },
      {
        question: "Para perguntar sobre um objeto perto (plural), usamos:",
        options: ["What's this?", "What are these?", "What's it?", "What are those?"],
        correctAnswer: 1,
        explanation: "'These' é usado para plural próximo."
      },
      {
        question: "It is ___ eraser.",
        options: ["a", "an", "two", "the"],
        correctAnswer: 1,
        explanation: "Usamos 'an' antes de palavras que começam com som de vogal."
      }
    ]
  }),

  "1-3": createContent({
    introText: "De onde você é? Nesta lição, falaremos sobre cidades, países e nacionalidades. Também praticaremos números e perguntas com 'Where'.",
    vocabulary: [
      { word: "City", translation: "Cidade", example: "New York is a big city.", exampleMeaning: "Nova York é uma cidade grande." },
      { word: "Country", translation: "País", example: "Brazil is a beautiful country.", exampleMeaning: "O Brasil é um país lindo." },
      { word: "From", translation: "De (origem)", example: "I am from Japan.", exampleMeaning: "Eu sou do Japão." },
      { word: "Where", translation: "Onde", example: "Where are you from?", exampleMeaning: "De onde você é?" },
      { word: "First", translation: "Primeiro", example: "This is my first class.", exampleMeaning: "Esta é minha primeira aula." },
      { word: "Language", translation: "Língua / Idioma", example: "English is a language.", exampleMeaning: "Inglês é um idioma." }
    ],
    grammarTitle: "Verb Be: Questions & Answers",
    grammar: {
      introduction: "Para fazer perguntas com o verbo 'to be', invertemos a ordem: O verbo vem antes do sujeito (Are you...?). Para perguntar a origem, usamos 'Where are you from?'.",
      structures: [
        {
          label: "Pergunta (Yes/No)",
          fullSentence: "Are you from Brazil?",
          meaning: "Você é do Brasil?",
          bricks: [
            { text: "Are", type: "verb", translation: "É/Está" },
            { text: "you", type: "subject", translation: "você" },
            { text: "from", type: "preposition", translation: "de" },
            { text: "Brazil", type: "noun", translation: "Brasil" }
          ]
        },
        {
          label: "Resposta Curta",
          fullSentence: "Yes, I am.",
          meaning: "Sim, eu sou.",
          bricks: [
            { text: "Yes", type: "other", translation: "Sim" },
            { text: "I", type: "subject", translation: "eu" },
            { text: "am", type: "verb", translation: "sou" }
          ]
        },
        {
          label: "Pergunta Informativa",
          fullSentence: "Where is she from?",
          meaning: "De onde ela é?",
          bricks: [
            { text: "Where", type: "question_word", translation: "Onde" },
            { text: "is", type: "verb", translation: "é" },
            { text: "she", type: "subject", translation: "ela" },
            { text: "from", type: "preposition", translation: "de" }
          ]
        }
      ],
      tables: [
        {
          title: "Numbers 1-10",
          headers: ["Number", "English", "Portuguese"],
          rows: [
            ["1", "One", "Um"],
            ["2", "Two", "Dois"],
            ["3", "Three", "Três"],
            ["4", "Four", "Quatro"],
            ["5", "Five", "Cinco"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Tim", text: "Are you from California, Jessica?", translation: "Você é da Califórnia, Jessica?" },
      { speaker: "Jessica", text: "Well, my family is in California now, but we're from Korea originally.", translation: "Bem, minha família está na Califórnia agora, mas nós somos da Coreia originalmente." },
      { speaker: "Tim", text: "Oh, my mother is from Korea.", translation: "Ah, minha mãe é da Coreia." },
      { speaker: "Jessica", text: "Really? What city?", translation: "Sério? Que cidade?" },
      { speaker: "Tim", text: "Seoul.", translation: "Seul." }
    ],
    speakAndRepeat: [
      { text: "Where are you from?", translation: "De onde você é?", focus: "Wh- question intonation (falling)" },
      { text: "I'm from Rio de Janeiro.", translation: "Eu sou do Rio de Janeiro.", focus: "Sentence stress" },
      { text: "Is your first language English?", translation: "Sua primeira língua é inglês?", focus: "Yes/No question intonation (rising)" }
    ],
    quiz: [
      {
        question: "A: ___ you from here? B: No, not.",
        options: ["Is", "Am", "Are", "Be"],
        correctAnswer: 2,
        explanation: "Com 'you', a forma correta é 'Are'."
      },
      {
        question: "Where ___ Tokyo?",
        options: ["is", "are", "am", "be"],
        correctAnswer: 0,
        explanation: "Tokyo é 'it' (singular), então usamos 'is'."
      },
      {
        question: "We are from Mexico. We are ____.",
        options: ["Mexican", "Mexicoan", "Mexicish", "Mexics"],
        correctAnswer: 0,
        explanation: "A nacionalidade de quem nasce no México é Mexican."
      }
    ]
  })
};

// Generic content generator for missing units to keep the app functional
export const getStaticUnitContent = (unitId: string, unitTitle: string, unitDescription: string): GeneratedUnitContent => {
  // Return specific content if it exists
  if (UNIT_CONTENTS[unitId]) {
    return UNIT_CONTENTS[unitId];
  }

  // Fallback Template for units not yet fully written manually
  return {
    introText: `Welcome to the unit "${unitTitle}". In this lesson, we will focus on: ${unitDescription}. You will learn vocabulary and grammar structures essential for this topic.`,
    vocabulary: [
      { word: "Example Word 1", translation: "Palavra Exemplo 1", example: "This is an example.", exampleMeaning: "Este é um exemplo." },
      { word: "Example Word 2", translation: "Palavra Exemplo 2", example: "This is another example.", exampleMeaning: "Este é outro exemplo." },
      { word: "Topic Word", translation: "Palavra do Tópico", example: `We are studying ${unitTitle}.`, exampleMeaning: `Estamos estudando ${unitTitle}.` }
    ],
    grammarTitle: "Essential Grammar",
    grammar: {
      introduction: "Nesta lição, focaremos na estrutura gramatical principal necessária para conversar sobre este tópico.",
      structures: [
        {
          label: "Structure 1",
          fullSentence: "This is a sample sentence.",
          meaning: "Esta é uma frase de exemplo.",
          bricks: [
            { text: "This", type: "subject", translation: "Isto" },
            { text: "is", type: "verb", translation: "é" },
            { text: "sample", type: "adjective", translation: "exemplo" }
          ]
        }
      ],
      tables: [
        {
          title: "Grammar Rules",
          headers: ["Concept", "Example"],
          rows: [["Rule A", "Usage A"], ["Rule B", "Usage B"]]
        }
      ]
    },
    dialogue: [
      { speaker: "Person A", text: "Hello! Ready to study?", translation: "Olá! Pronto para estudar?" },
      { speaker: "Person B", text: `Yes, let's talk about ${unitTitle}.`, translation: `Sim, vamos falar sobre ${unitTitle}.` },
      { speaker: "Person A", text: "That sounds great.", translation: "Isso soa ótimo." }
    ],
    speakAndRepeat: [
      { text: `I like learning about ${unitTitle}.`, translation: `Eu gosto de aprender sobre ${unitTitle}.`, focus: "Fluency" },
      { text: "Can you repeat that?", translation: "Você pode repetir isso?", focus: "Intonation" },
      { text: "This is interesting.", translation: "Isto é interessante.", focus: "Pronunciation" }
    ],
    quiz: [
      {
        question: "What is this unit about?",
        options: [unitTitle, "Cooking", "Sports", "Music"],
        correctAnswer: 0,
        explanation: "This unit focuses on the title topic."
      }
    ]
  };
};
