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
    levelDescription: "AI Assisted Learning",
    color: "bg-pink-600",
    units: [
      { id: "5-9", number: 1, title: "AI Chatbot Tutor", description: "Text-based conversation with an intelligent tutor (Gemini 3 Pro)." }
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
    introText: "Bem-vindo à sua primeira lição! Nesta unidade, você aprenderá todas as formas do verbo 'to be' (ser/estar): Afirmativa, Negativa e Interrogativa. Isso é a base de toda a comunicação em inglês.",
    vocabulary: [
      { word: "Hello", translation: "Olá", example: "Hello, my name is Sarah.", exampleMeaning: "Olá, meu nome é Sarah." },
      { word: "Hi", translation: "Oi (Informal)", example: "Hi, John!", exampleMeaning: "Oi, John!" },
      { word: "Name", translation: "Nome", example: "What is your name?", exampleMeaning: "Qual é o seu nome?" },
      { word: "Student", translation: "Estudante", example: "I am a student.", exampleMeaning: "Eu sou um estudante." },
      { word: "Teacher", translation: "Professor(a)", example: "She is a teacher.", exampleMeaning: "Ela é uma professora." },
      { word: "Not", translation: "Não (usado com verbos)", example: "I am not a doctor.", exampleMeaning: "Eu não sou médico." },
      { word: "Yes", translation: "Sim", example: "Yes, I am.", exampleMeaning: "Sim, eu sou." },
      { word: "No", translation: "Não (resposta)", example: "No, I'm not.", exampleMeaning: "Não, eu não sou." }
    ],
    grammarTitle: "Verb To Be: All Forms",
    grammar: {
      introduction: "O verbo 'to be' muda dependendo da pessoa. Para fazer a negativa, adicionamos 'not'. Para fazer perguntas, trocamos a ordem do sujeito e do verbo.",
      structures: [
        {
          label: "Forma Afirmativa (+)",
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
          label: "Forma Afirmativa (Contração)",
          fullSentence: "She's a teacher.",
          meaning: "Ela é uma professora.",
          bricks: [
            { text: "She", type: "subject", translation: "Ela" },
            { text: "'s", type: "verb", translation: "é" },
            { text: "a", type: "article", translation: "uma" },
            { text: "teacher", type: "noun", translation: "professora" }
          ]
        },
        {
          label: "Forma Negativa (-)",
          fullSentence: "I am not a doctor.",
          meaning: "Eu não sou médico.",
          bricks: [
            { text: "I", type: "subject", translation: "Eu" },
            { text: "am", type: "verb", translation: "sou" },
            { text: "not", type: "adverb", translation: "não" },
            { text: "a", type: "article", translation: "um" },
            { text: "doctor", type: "noun", translation: "médico" }
          ]
        },
        {
          label: "Forma Interrogativa (?)",
          fullSentence: "Are you a student?",
          meaning: "Você é um estudante?",
          bricks: [
            { text: "Are", type: "verb", translation: "É/Está" },
            { text: "you", type: "subject", translation: "você" },
            { text: "a", type: "article", translation: "um" },
            { text: "student", type: "noun", translation: "estudante" },
            { text: "?", type: "other", translation: "?" }
          ]
        },
        {
          label: "Short Answer (Yes)",
          fullSentence: "Yes, I am.",
          meaning: "Sim, eu sou.",
          bricks: [
            { text: "Yes", type: "other", translation: "Sim" },
            { text: ",", type: "other", translation: "" },
            { text: "I", type: "subject", translation: "eu" },
            { text: "am", type: "verb", translation: "sou" }
          ]
        },
        {
          label: "Short Answer (No)",
          fullSentence: "No, I'm not.",
          meaning: "Não, eu não sou.",
          bricks: [
            { text: "No", type: "other", translation: "Não" },
            { text: ",", type: "other", translation: "" },
            { text: "I", type: "subject", translation: "eu" },
            { text: "'m", type: "verb", translation: "sou" },
            { text: "not", type: "adverb", translation: "não" }
          ]
        }
      ],
      tables: [
        {
          title: "1. Affirmative Form (Afirmativa)",
          headers: ["Pessoa", "Full Form", "Contraction", "Tradução"],
          rows: [
            ["I", "I am", "I'm", "Eu sou/estou"],
            ["You", "You are", "You're", "Você é/está"],
            ["He", "He is", "He's", "Ele é/está"],
            ["She", "She is", "She's", "Ela é/está"],
            ["It", "It is", "It's", "Ele/Ela (coisa) é"],
            ["We", "We are", "We're", "Nós somos/estamos"],
            ["They", "They are", "They're", "Eles são/estão"]
          ]
        },
        {
          title: "2. Negative Form (Negativa)",
          headers: ["Pessoa", "Full Form", "Contraction (Comum)", "Tradução"],
          rows: [
            ["I", "I am not", "I'm not", "Eu não sou"],
            ["You", "You are not", "You aren't", "Você não é"],
            ["He", "He is not", "He isn't", "Ele não é"],
            ["She", "She is not", "She isn't", "Ela não é"],
            ["We", "We are not", "We aren't", "Nós não somos"],
            ["They", "They are not", "They aren't", "Eles não são"]
          ]
        },
        {
          title: "3. Interrogative Form & Answers",
          headers: ["Pergunta (?)", "Resposta Curta (Sim)", "Resposta Curta (Não)"],
          rows: [
            ["Am I...?", "Yes, you are.", "No, you aren't."],
            ["Are you...?", "Yes, I am.", "No, I'm not."],
            ["Is he...?", "Yes, he is.", "No, he isn't."],
            ["Is she...?", "Yes, she is.", "No, she isn't."],
            ["Are we...?", "Yes, we are.", "No, we aren't."],
            ["Are they...?", "Yes, they are.", "No, they aren't."]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Michael", text: "Hello. My name is Michael.", translation: "Olá. Meu nome é Michael." },
      { speaker: "Jennifer", text: "Hi, Michael. I'm Jennifer. Nice to meet you.", translation: "Oi, Michael. Eu sou Jennifer. Prazer em te conhecer." },
      { speaker: "Michael", text: "Nice to meet you too. Are you a student here?", translation: "Prazer em te conhecer também. Você é aluna aqui?" },
      { speaker: "Jennifer", text: "Yes, I am. And you?", translation: "Sim, eu sou. E você?" },
      { speaker: "Michael", text: "No, I'm not a student. I'm the teacher!", translation: "Não, eu não sou aluno. Eu sou o professor!" }
    ],
    speakAndRepeat: [
      { text: "It's nice to meet you.", translation: "É um prazer te conhecer.", focus: "Connected speech (nice-to)" },
      { text: "I am not a teacher.", translation: "Eu não sou professor.", focus: "Negative 'not' stress" },
      { text: "Are you a student?", translation: "Você é um estudante?", focus: "Question Intonation (Rising)" }
    ],
    quiz: [
      {
        question: "Qual é a negativa de 'She is my friend'?",
        options: ["She not is my friend", "She is no my friend", "She isn't my friend", "She doesn't my friend"],
        correctAnswer: 2,
        explanation: "A negativa de 'is' é 'is not' ou a contração 'isn't'."
      },
      {
        question: "Complete a pergunta: '____ they from Brazil?'",
        options: ["Is", "Am", "Are", "Be"],
        correctAnswer: 2,
        explanation: "Com 'They' (Eles), o verbo to be correto é 'Are'."
      },
      {
        question: "Responda: 'Are you hungry?' (Não)",
        options: ["No, I aren't.", "No, I no.", "No, I'm not.", "No, I am."],
        correctAnswer: 2,
        explanation: "A resposta curta negativa para 'I' é 'No, I'm not'."
      }
    ]
  }),

  "1-2": createContent({
    introText: "Nesta lição, vamos aprender sobre objetos, singulares e plurais, e como usar 'This/That' (Singular) e 'These/Those' (Plural) em frases afirmativas, negativas e perguntas.",
    vocabulary: [
      { word: "Book", translation: "Livro", example: "This is a book.", exampleMeaning: "Isto é um livro." },
      { word: "Keys", translation: "Chaves", example: "These are keys.", exampleMeaning: "Estas são chaves." },
      { word: "This", translation: "Isto/Este (Perto, Singular)", example: "This is my pen.", exampleMeaning: "Esta é minha caneta." },
      { word: "That", translation: "Aquilo/Aquele (Longe, Singular)", example: "That is your car.", exampleMeaning: "Aquele é seu carro." },
      { word: "These", translation: "Estes (Perto, Plural)", example: "These are my books.", exampleMeaning: "Estes são meus livros." },
      { word: "Those", translation: "Aqueles (Longe, Plural)", example: "Those are stars.", exampleMeaning: "Aquelas são estrelas." }
    ],
    grammarTitle: "Demonstratives: This, That, These, Those",
    grammar: {
      introduction: "Usamos demonstrativos para apontar coisas. A escolha depende da distância (perto/longe) e da quantidade (singular/plural).",
      structures: [
        {
          label: "Singular (Perto) +",
          fullSentence: "This is a camera.",
          meaning: "Isto é uma câmera.",
          bricks: [
            { text: "This", type: "subject", translation: "Isto" },
            { text: "is", type: "verb", translation: "é" },
            { text: "a", type: "article", translation: "uma" },
            { text: "camera", type: "noun", translation: "câmera" }
          ]
        },
        {
          label: "Plural (Longe) +",
          fullSentence: "Those are books.",
          meaning: "Aqueles são livros.",
          bricks: [
            { text: "Those", type: "subject", translation: "Aqueles" },
            { text: "are", type: "verb", translation: "são" },
            { text: "books", type: "noun", translation: "livros" }
          ]
        },
        {
          label: "Pergunta (Singular)",
          fullSentence: "Is this your key?",
          meaning: "Esta é sua chave?",
          bricks: [
            { text: "Is", type: "verb", translation: "É" },
            { text: "this", type: "subject", translation: "esta" },
            { text: "your", type: "determiner", translation: "sua" },
            { text: "key", type: "noun", translation: "chave" }
          ]
        },
        {
          label: "Pergunta (Plural)",
          fullSentence: "What are these?",
          meaning: "O que são estes?",
          bricks: [
            { text: "What", type: "question_word", translation: "O que" },
            { text: "are", type: "verb", translation: "são" },
            { text: "these", type: "subject", translation: "estes" },
            { text: "?", type: "other", translation: "?" }
          ]
        }
      ],
      tables: [
        {
          title: "Demonstratives Matrix",
          headers: ["Distância", "Singular (1)", "Plural (2+)"],
          rows: [
            ["Perto (Near)", "This", "These"],
            ["Longe (Far)", "That", "Those"]
          ]
        },
        {
          title: "Plural Rules",
          headers: ["Regra", "Exemplo Singular", "Exemplo Plural"],
          rows: [
            ["Geral: Adicionar -s", "Car", "Cars"],
            ["Termina em s, ch, sh, x: Adicionar -es", "Watch", "Watches"],
            ["Consoante + y: Trocar por -ies", "Dictionary", "Dictionaries"],
            ["Irregular", "Man / Woman", "Men / Women"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Joe", text: "Hey, what's this?", translation: "Ei, o que é isso?" },
      { speaker: "Mary", text: "It's a vintage camera.", translation: "É uma câmera antiga." },
      { speaker: "Joe", text: "Is it yours?", translation: "É sua?" },
      { speaker: "Mary", text: "No, it's not mine. It's my brother's.", translation: "Não, não é minha. É do meu irmão." }
    ],
    speakAndRepeat: [
      { text: "What are these?", translation: "O que são estes?", focus: "Linking 'What-are'" },
      { text: "This is my friend.", translation: "Este é meu amigo.", focus: "Th sound (vibrating)" },
      { text: "Is that your bag?", translation: "Aquela é sua bolsa?", focus: "Question intonation" }
    ],
    quiz: [
      {
        question: "Plural de 'Box':",
        options: ["Boxs", "Boxies", "Boxes", "Box"],
        correctAnswer: 2,
        explanation: "Palavras terminadas em X ganham 'es' no plural."
      },
      {
        question: "Apontando para algo longe (plural):",
        options: ["This", "That", "These", "Those"],
        correctAnswer: 3,
        explanation: "'Those' é usado para plural à distância."
      },
      {
        question: "Pergunta: '___ this a pen?'",
        options: ["Are", "Am", "Is", "Be"],
        correctAnswer: 2,
        explanation: "'This' é singular, então usamos 'Is'."
      }
    ]
  }),

  "1-3": createContent({
    introText: "Vamos aprender a perguntar 'De onde você é?' e responder. Veremos a diferença entre Perguntas de Sim/Não e Perguntas Informativas (Wh- questions).",
    vocabulary: [
      { word: "City", translation: "Cidade", example: "New York is a big city.", exampleMeaning: "Nova York é uma cidade grande." },
      { word: "Country", translation: "País", example: "Brazil is a beautiful country.", exampleMeaning: "O Brasil é um país lindo." },
      { word: "Where", translation: "Onde", example: "Where are you from?", exampleMeaning: "De onde você é?" },
      { word: "What", translation: "O que / Qual", example: "What is your name?", exampleMeaning: "Qual é o seu nome?" },
      { word: "Who", translation: "Quem", example: "Who is she?", exampleMeaning: "Quem é ela?" },
      { word: "How", translation: "Como", example: "How are you?", exampleMeaning: "Como vai você?" }
    ],
    grammarTitle: "Wh- Questions vs. Yes/No Questions",
    grammar: {
      introduction: "Existem dois tipos principais de perguntas. As que começam com Verbo (resposta Sim/Não) e as que começam com Wh- Word (pedem informação).",
      structures: [
        {
          label: "Yes/No Question",
          fullSentence: "Are you from Brazil?",
          meaning: "Você é do Brasil?",
          bricks: [
            { text: "Are", type: "verb", translation: "É" },
            { text: "you", type: "subject", translation: "você" },
            { text: "from", type: "preposition", translation: "de" },
            { text: "Brazil", type: "noun", translation: "Brasil" }
          ]
        },
        {
          label: "Wh- Question (Information)",
          fullSentence: "Where are you from?",
          meaning: "De onde você é?",
          bricks: [
            { text: "Where", type: "question_word", translation: "Onde" },
            { text: "are", type: "verb", translation: "é" },
            { text: "you", type: "subject", translation: "você" },
            { text: "from", type: "preposition", translation: "de" },
            { text: "?", type: "other", translation: "?" }
          ]
        },
        {
          label: "Wh- Question (Subject)",
          fullSentence: "Who is he?",
          meaning: "Quem é ele?",
          bricks: [
            { text: "Who", type: "question_word", translation: "Quem" },
            { text: "is", type: "verb", translation: "é" },
            { text: "he", type: "subject", translation: "ele" },
            { text: "?", type: "other", translation: "?" }
          ]
        }
      ],
      tables: [
        {
          title: "Common Wh- Words",
          headers: ["Word", "Meaning (Significado)", "Use (Uso)"],
          rows: [
            ["What", "O que / Qual", "Coisas ou Informações"],
            ["Where", "Onde", "Lugares"],
            ["Who", "Quem", "Pessoas"],
            ["How", "Como", "Estado ou Maneira"],
            ["How old", "Quantos anos", "Idade"]
          ]
        },
        {
          title: "Structure Comparison",
          headers: ["Type", "Structure", "Example"],
          rows: [
            ["Yes/No", "Verb + Subject + ...?", "Are you happy?"],
            ["Wh- Info", "Wh- + Verb + Subject...?", "Why are you happy?"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Tim", text: "Are you from California, Jessica?", translation: "Você é da Califórnia, Jessica?" },
      { speaker: "Jessica", text: "No, I'm not. I'm from Canada.", translation: "Não, eu não sou. Eu sou do Canadá." },
      { speaker: "Tim", text: "Oh, where in Canada?", translation: "Ah, onde no Canadá?" },
      { speaker: "Jessica", text: "Toronto.", translation: "Toronto." }
    ],
    speakAndRepeat: [
      { text: "Where are you from?", translation: "De onde você é?", focus: "Wh- question intonation (falling)" },
      { text: "Are you Brazilian?", translation: "Você é brasileiro?", focus: "Yes/No intonation (rising)" },
      { text: "What's your name?", translation: "Qual é o seu nome?", focus: "Contraction What's" }
    ],
    quiz: [
      {
        question: "___ is your teacher? (Resposta: Mr. Smith)",
        options: ["What", "Where", "Who", "How"],
        correctAnswer: 2,
        explanation: "Para perguntar sobre pessoas, usamos 'Who'."
      },
      {
        question: "___ is she from? (Resposta: Japan)",
        options: ["Who", "Where", "What", "How"],
        correctAnswer: 1,
        explanation: "Para perguntar origem/lugar, usamos 'Where'."
      },
      {
        question: "Are they American?",
        options: ["Yes, they are.", "Yes, they am.", "Yes, they is.", "Yes, they be."],
        correctAnswer: 0,
        explanation: "A resposta curta correta para 'they' é 'Yes, they are'."
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
          label: "Structure Example",
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