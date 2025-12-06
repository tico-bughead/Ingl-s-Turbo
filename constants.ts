import { BookDefinition, GeneratedUnitContent } from './types';

// --- CURRICULUM DEFINITION (Interchange 5th Ed. Adapted) ---

export const BOOKS: BookDefinition[] = [
  {
    id: 1,
    title: "Inglês Turbo 1",
    subtitle: "Intro (Iniciante)",
    levelDescription: "Nível Introdutório (A1) - Fundamentos",
    color: "bg-amber-500",
    units: [
      { id: "1-1", number: 1, title: "It's nice to meet you", description: "Nomes, países, nacionalidades, verbo to be e adjetivos possessivos." },
      { id: "1-2", number: 2, title: "What's this?", description: "Posse, localização, this/these e preposições de lugar." },
      { id: "1-3", number: 3, title: "Where are you from?", description: "Descrições, nacionalidades e perguntas Yes/No com be." },
      { id: "1-4", number: 4, title: "I'm not wearing boots!", description: "Roupas, clima e Present Continuous." },
      { id: "1-5", number: 5, title: "What are you doing?", description: "Rotina, horários, Simple Present e preposições de tempo." },
      { id: "1-6", number: 6, title: "My sister works downtown", description: "Empregos, família e perguntas com Do/Does." },
      { id: "1-7", number: 7, title: "Does it have a view?", description: "Alimentos, frequência, some, any, a lot of." },
      { id: "1-8", number: 8, title: "Job skills", description: "Habilidades, can/can't e advérbios de modo." },
      { id: "1-9", number: 9, title: "I'm going to see a movie", description: "Planos futuros com be going to." },
      { id: "1-10", number: 10, title: "Have you ever been there?", description: "Saúde, partes do corpo e imperativos." },
      { id: "1-11", number: 11, title: "It's a very exciting place", description: "Lugares, direções e there is/there are." },
      { id: "1-12", number: 12, title: "It's really happened!", description: "Eventos passados e Simple Past (verbos regulares)." },
      { id: "1-13", number: 13, title: "May I take your order?", description: "Pedidos em restaurantes (may, could, can)." },
      { id: "1-14", number: 14, title: "The biggest and the best!", description: "Férias, clima no passado e Simple Past (irregulares)." },
      { id: "1-15", number: 15, title: "I'm going to a soccer match", description: "Atividades diárias e frequência." },
      { id: "1-16", number: 16, title: "A change for the better", description: "Descrições de pessoas e ordem de adjetivos." }
    ]
  },
  {
    id: 2,
    title: "Inglês Turbo 2",
    subtitle: "Nível 1 (Básico-Intermediário)",
    levelDescription: "Expansão de gramática e cotidiano (A2)",
    color: "bg-blue-500",
    units: [
      { id: "2-1", number: 1, title: "Where are you from?", description: "Memórias de infância, Past tense e used to." },
      { id: "2-2", number: 2, title: "I caught a cold", description: "Problemas urbanos, transporte, quantificadores e perguntas indiretas." },
      { id: "2-3", number: 3, title: "Can I take a message?", description: "Compras de roupas, demonstrativos e one/ones." },
      { id: "2-4", number: 4, title: "Whose jeans are these?", description: "Habilidades, empregos e gerúndios." },
      { id: "2-5", number: 5, title: "Going to places", description: "Planos de viagem, future will/going to e modais de sugestão." },
      { id: "2-6", number: 6, title: "Sure! No problem!", description: "Pedidos, tarefas, phrasal verbs e Would you mind?" },
      { id: "2-7", number: 7, title: "What's this for?", description: "Feriados, costumes e when clauses." },
      { id: "2-8", number: 8, title: "Let's celebrate!", description: "Presentes, relative clauses com who/which/that." },
      { id: "2-9", number: 9, title: "Back to the future", description: "Mudanças de vida, Past Continuous e used to vs Simple Past." },
      { id: "2-10", number: 10, title: "I don't like working late", description: "Culinária, experiências e Present Perfect." },
      { id: "2-11", number: 11, title: "It's really worth seeing!", description: "Cidades e It is + infinitivo." },
      { id: "2-12", number: 12, title: "It's been a long time", description: "Contação de histórias e Present Perfect Continuous." },
      { id: "2-13", number: 13, title: "A movie to remember", description: "Entretenimento e particípios como adjetivos." },
      { id: "2-14", number: 14, title: "So that's what it means!", description: "Serviços, conselhos, if clauses e modais." },
      { id: "2-15", number: 15, title: "What would you do?", description: "Eventos memoráveis e advérbios de sequência." },
      { id: "2-16", number: 16, title: "What's your excuse?", description: "Saúde, emergências e modais de obrigação." }
    ]
  },
  {
    id: 3,
    title: "Inglês Turbo 3",
    subtitle: "Nível 2 (Intermediário)",
    levelDescription: "Complexidade gramatical e discussões (B1)",
    color: "bg-emerald-500",
    units: [
      { id: "3-1", number: 1, title: "A time to remember", description: "Celebrações, eventos, gerúndios e infinitivos." },
      { id: "3-2", number: 2, title: "Caught in the rush", description: "Transporte, necessidades, future e modais." },
      { id: "3-3", number: 3, title: "Time for a change!", description: "Reclamações de consumo e verbos com gerúndio/infinitivo." },
      { id: "3-4", number: 4, title: "I've never heard of that", description: "Viagens, destinos e Present Perfect Continuous." },
      { id: "3-5", number: 5, title: "Going to places", description: "Lazer, phrasal verbs e conjunções." },
      { id: "3-6", number: 6, title: "OK. No problem!", description: "Serviços, tarefas e causative verbs." },
      { id: "3-7", number: 7, title: "What's this for?", description: "Problemas comunitários e passive voice." },
      { id: "3-8", number: 8, title: "Let's celebrate!", description: "Educação, would rather e would prefer." },
      { id: "3-9", number: 9, title: "Times have changed", description: "Meio ambiente, notícias, passive contínuo e perfeito." },
      { id: "3-10", number: 10, title: "I hate working on weekends", description: "Carreiras, gerúndios e respostas curtas." },
      { id: "3-11", number: 11, title: "It's really worth it", description: "Contação de histórias avançada." },
      { id: "3-12", number: 12, title: "What happened?", description: "Entretenimento e resenhas." },
      { id: "3-13", number: 13, title: "Good book, terrible movie", description: "Serviços ao cliente e conselhos." },
      { id: "3-14", number: 14, title: "So that's what it means!", description: "Eventos memoráveis e convites." },
      { id: "3-15", number: 15, title: "What would you do?", description: "Saúde e obrigações." },
      { id: "3-16", number: 16, title: "What's your excuse?", description: "Descrições detalhadas de pessoas." }
    ]
  },
  {
    id: 4,
    title: "Inglês Turbo 4",
    subtitle: "Nível 3 (Intermediário Alto)",
    levelDescription: "Fluência e proficiência (B2)",
    color: "bg-violet-600",
    units: [
      { id: "4-1", number: 1, title: "That's what friends are for", description: "Experiências de vida, Present Perfect vs Simple Past." },
      { id: "4-2", number: 2, title: "Career moves", description: "Eventos inesperados e Past Perfect." },
      { id: "4-3", number: 3, title: "Could you do me a favor?", description: "Previsões, futuro e Future Perfect/Continuous." },
      { id: "4-4", number: 4, title: "What a story!", description: "Opiniões, ética e modais de especulação." },
      { id: "4-5", number: 5, title: "Crossing cultures", description: "Criatividade, invenções e reduced relative clauses." },
      { id: "4-6", number: 6, title: "What's wrong with it?", description: "Riscos, desafios e mixed conditionals." },
      { id: "4-7", number: 7, title: "The world we live in", description: "Arrependimentos e past modals (should have)." },
      { id: "4-8", number: 8, title: "Lifelong learning", description: "Valores, obrigação e be supposed to." },
      { id: "4-9", number: 9, title: "Improvements", description: "Problemas globais, whoever e even though." },
      { id: "4-10", number: 10, title: "The past and the future", description: "História, mudanças e wish clauses." },
      { id: "4-11", number: 11, title: "Life lessons", description: "Aprendizado, causative verbs e would prefer." },
      { id: "4-12", number: 12, title: "The right stuff", description: "Tendências globais." },
      { id: "4-13", number: 13, title: "That's a possibility", description: "Mídia, notícias e passive com verbos de reporte." },
      { id: "4-14", number: 14, title: "Behind the scenes", description: "Infância, comparações e used to." },
      { id: "4-15", number: 15, title: "There should be a law", description: "Pedidos formais e orações com if incorporadas." },
      { id: "4-16", number: 16, title: "Challenges and accomplishments", description: "Carreira e ética no trabalho." }
    ]
  },
  {
    id: 5,
    title: "AI Conversation Practice",
    subtitle: "Speaking with Gliglish",
    levelDescription: "Master fluency with the Gliglish AI Teacher",
    color: "bg-pink-600",
    units: [
      { id: "5-1", number: 1, title: "Gliglish: Your Speaking Partner", description: "Learn how to use Gliglish.com to practice conversation anytime, anywhere." }
    ]
  }
];

// --- STATIC CONTENT GENERATOR ---

export const createContent = (overrides: Partial<GeneratedUnitContent>): GeneratedUnitContent => ({
  introText: "Welcome to this unit. Study the vocabulary and grammar below.",
  vocabulary: [],
  grammarTitle: "Grammar Focus",
  grammar: { introduction: "Review the rules below.", structures: [], tables: [] },
  dialogue: [],
  speakAndRepeat: [],
  quiz: [],
  ...overrides
});

// Hardcoded content for key units
const PREDEFINED_UNITS: Record<string, GeneratedUnitContent> = {
  // Unit 5-1: Gliglish Guide
  "5-1": createContent({
    introText: "O Gliglish (gliglish.com) é a ferramenta definitiva para praticar conversação. Diferente de chatbots de texto, o Gliglish fala com você como um humano, ajudando a melhorar sua pronúncia e confiança.",
    externalLink: {
      url: "https://gliglish.com",
      label: "Open Gliglish (Practice Now)",
      description: "Click to open the Gliglish AI teacher in a new tab."
    },
    vocabulary: [
      { word: "Fluency", translation: "Fluência", example: "I want to improve my fluency.", exampleMeaning: "Eu quero melhorar minha fluência." },
      { word: "Roleplay", translation: "Encenação/Simulação", example: "Choose a restaurant roleplay.", exampleMeaning: "Escolha uma simulação de restaurante." },
      { word: "Teacher Mode", translation: "Modo Professor", example: "Use Teacher Mode for corrections.", exampleMeaning: "Use o Modo Professor para correções." },
      { word: "Feedback", translation: "Feedback/Retorno", example: "Read the feedback carefully.", exampleMeaning: "Leia o feedback com atenção." }
    ],
    grammarTitle: "How to use Gliglish",
    grammar: {
      introduction: "O Gliglish possui dois modos principais de operação. Entenda a diferença para tirar o máximo proveito.",
      structures: [
        {
          label: "Teacher Mode (Professor)",
          fullSentence: "The teacher corrects your grammar instantly.",
          meaning: "O professor corrige sua gramática instantaneamente.",
          bricks: [
            { text: "Teacher", type: "subject" },
            { text: "corrects", type: "verb" },
            { text: "your mistakes", type: "object" }
          ]
        },
        {
          label: "Roleplay Mode (Situações)",
          fullSentence: "You act as a customer in a bakery.",
          meaning: "Você atua como um cliente em uma padaria.",
          bricks: [
            { text: "You", type: "subject" },
            { text: "act as", type: "verb" },
            { text: "a customer", type: "noun" }
          ]
        }
      ],
      tables: [
        {
          title: "Interface Controls",
          headers: ["Icon/Action", "Function"],
          rows: [
            ["Microphone", "Click to speak your sentence"],
            ["Listen (Speaker)", "Click to hear the AI again"],
            ["Translate", "See the Portuguese translation"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Student", text: "How do I start?", translation: "Como eu começo?" },
      { speaker: "Guide", text: "Go to Gliglish.com and select 'Teacher'.", translation: "Vá para Gliglish.com e selecione 'Teacher'." },
      { speaker: "Student", text: "Do I need a microphone?", translation: "Eu preciso de um microfone?" },
      { speaker: "Guide", text: "Yes, it is voice-based.", translation: "Sim, é baseado em voz." }
    ],
    speakAndRepeat: [
      { text: "Can you repeat that?", translation: "Pode repetir isso?", focus: "Essential phrases" },
      { text: "How do I say 'Casa'?", translation: "Como eu digo 'Casa'?", focus: "Asking questions" },
      { text: "Please correct me.", translation: "Por favor, me corrija.", focus: "Learning request" }
    ],
    quiz: [
      { question: "What is Gliglish mainly for?", options: ["Writing essays", "Speaking practice", "Watching movies"], correctAnswer: 1, explanation: "Gliglish é focado em 'Speaking' (fala/conversação)." },
      { question: "Does Gliglish correct you?", options: ["Yes, in Teacher Mode", "No, never", "Only on Sundays"], correctAnswer: 0, explanation: "O Modo Professor oferece correções gramaticais." }
    ]
  }),

  // Unit 1-1: Nomes, países, nacionalidades, verbo to be e possessivos.
  "1-1": createContent({
    introText: "Bem-vindo à Unidade 1! Aqui aprenderemos a nos apresentar, falar sobre nossos nomes e de onde somos, usando o verbo 'to be' e adjetivos possessivos (my, your).",
    vocabulary: [
      { word: "Name", translation: "Nome", example: "My name is Sarah.", exampleMeaning: "Meu nome é Sarah." },
      { word: "Country", translation: "País", example: "Japan is a country.", exampleMeaning: "O Japão é um país." },
      { word: "Nationality", translation: "Nacionalidade", example: "I am Brazilian.", exampleMeaning: "Eu sou brasileiro." },
      { word: "My", translation: "Meu/Minha", example: "My book is blue.", exampleMeaning: "Meu livro é azul." },
      { word: "Your", translation: "Seu/Sua", example: "Is this your pen?", exampleMeaning: "Esta é sua caneta?" },
      { word: "His", translation: "Dele", example: "His name is John.", exampleMeaning: "O nome dele é John." },
      { word: "Her", translation: "Dela", example: "Her name is Mary.", exampleMeaning: "O nome dela é Mary." },
      { word: "Morning", translation: "Manhã", example: "Good morning!", exampleMeaning: "Bom dia!" }
    ],
    grammarTitle: "Verb 'to be' & Possessives",
    grammar: {
      introduction: "O verbo 'to be' (ser/estar) é a base do inglês. Usamos para nos identificar e descrever coisas.",
      structures: [
        {
          label: "Affirmative Form",
          fullSentence: "I am a student.",
          meaning: "Eu sou um estudante.",
          bricks: [
            { text: "I", type: "subject" },
            { text: "am", type: "verb" },
            { text: "a student", type: "noun" }
          ]
        },
        {
          label: "Negative Form",
          fullSentence: "I am not a teacher.",
          meaning: "Eu não sou um professor.",
          bricks: [
            { text: "I", type: "subject" },
            { text: "am", type: "verb" },
            { text: "not", type: "adverb" },
            { text: "a teacher", type: "noun" }
          ]
        },
        {
          label: "Interrogative Form",
          fullSentence: "Are you from Brazil?",
          meaning: "Você é do Brasil?",
          bricks: [
            { text: "Are", type: "verb" },
            { text: "you", type: "subject" },
            { text: "from Brazil", type: "preposition" },
            { text: "?", type: "other" }
          ]
        },
        {
          label: "Possessive Adjectives",
          fullSentence: "My name is Carlos.",
          meaning: "Meu nome é Carlos.",
          bricks: [
            { text: "My", type: "adjective" },
            { text: "name", type: "noun" },
            { text: "is", type: "verb" },
            { text: "Carlos", type: "noun" }
          ]
        }
      ],
      tables: [
        {
          title: "Verb To Be - Affirmative",
          headers: ["Subject", "Full Form", "Contraction"],
          rows: [
            ["I", "am", "I'm"],
            ["You", "are", "You're"],
            ["He / She / It", "is", "He's / She's / It's"],
            ["We", "are", "We're"],
            ["They", "are", "They're"]
          ]
        },
        {
          title: "Verb To Be - Negative",
          headers: ["Subject", "Full Form", "Contraction"],
          rows: [
            ["I", "am not", "I'm not"],
            ["You", "are not", "You're not / You aren't"],
            ["He / She / It", "is not", "He's not / He isn't"]
          ]
        },
        {
            title: "Short Answers",
            headers: ["Question", "Yes", "No"],
            rows: [
              ["Are you Brazilian?", "Yes, I am.", "No, I'm not."],
              ["Is he your teacher?", "Yes, he is.", "No, he's not."]
            ]
        }
      ]
    },
    dialogue: [
      { speaker: "Michael", text: "Hi! My name is Michael Ota.", translation: "Oi! Meu nome é Michael Ota." },
      { speaker: "Jennifer", text: "I'm Jennifer Miller.", translation: "Eu sou Jennifer Miller." },
      { speaker: "Michael", text: "It's nice to meet you, Jennifer.", translation: "É um prazer te conhecer, Jennifer." },
      { speaker: "Jennifer", text: "Nice to meet you too.", translation: "Prazer em te conhecer também." },
      { speaker: "Michael", text: "I am sorry, what is your last name again?", translation: "Desculpe, qual é seu sobrenome mesmo?" },
      { speaker: "Jennifer", text: "It is Miller.", translation: "É Miller." }
    ],
    speakAndRepeat: [
      { text: "It's nice to meet you.", translation: "É um prazer te conhecer.", focus: "Connected speech (Nice-to)" },
      { text: "I am not a teacher.", translation: "Eu não sou um professor.", focus: "Sentence stress on 'not'" },
      { text: "What is your name?", translation: "Qual é o seu nome?", focus: "Wh- question intonation" },
      { text: "He is my brother.", translation: "Ele é meu irmão.", focus: "Th sound in 'brother'" }
    ],
    quiz: [
      { question: "Choose the correct sentence:", options: ["I is Brazilian.", "I am Brazilian.", "I are Brazilian."], correctAnswer: 1, explanation: "O sujeito 'I' sempre usa 'am'." },
      { question: "___ name is Maria.", options: ["She", "Her", "He"], correctAnswer: 1, explanation: "Usamos 'Her' (dela) para posse feminina." },
      { question: "Are you a student?", options: ["Yes, I am.", "Yes, I'm.", "Yes, I do."], correctAnswer: 0, explanation: "Em respostas curtas afirmativas, não usamos contração." }
    ]
  }),

  // Unit 1-2: What's this? (This/That/These/Those + Prepositions)
  "1-2": createContent({
    introText: "Nesta unidade, vamos aprender a identificar objetos próximos e distantes (this/that) e dizer onde eles estão usando preposições.",
    vocabulary: [
      { word: "This", translation: "Isto/Este", example: "This is my key.", exampleMeaning: "Esta é minha chave." },
      { word: "That", translation: "Aquilo/Aquele", example: "That is your car.", exampleMeaning: "Aquele é seu carro." },
      { word: "These", translation: "Estes (Plural)", example: "These are my books.", exampleMeaning: "Estes são meus livros." },
      { word: "Those", translation: "Aqueles (Plural)", example: "Those are stars.", exampleMeaning: "Aquelas são estrelas." },
      { word: "In", translation: "Dentro", example: "The pen is in the bag.", exampleMeaning: "A caneta está dentro da bolsa." },
      { word: "On", translation: "Sobre", example: "The book is on the table.", exampleMeaning: "O livro está sobre a mesa." },
      { word: "Under", translation: "Embaixo", example: "The cat is under the bed.", exampleMeaning: "O gato está debaixo da cama." }
    ],
    grammarTitle: "Demonstratives & Prepositions",
    grammar: {
      introduction: "Usamos demonstrativos para apontar coisas. Depende se está perto ou longe, e se é singular ou plural.",
      structures: [
        {
          label: "Singular / Near",
          fullSentence: "This is a book.",
          meaning: "Isto é um livro.",
          bricks: [ { text: "This", type: "subject" }, { text: "is", type: "verb" }, { text: "a book", type: "noun" } ]
        },
        {
            label: "Plural / Far",
            fullSentence: "Those are maps.",
            meaning: "Aqueles são mapas.",
            bricks: [ { text: "Those", type: "subject" }, { text: "are", type: "verb" }, { text: "maps", type: "noun" } ]
        },
        {
          label: "Question (Singular)",
          fullSentence: "What is this?",
          meaning: "O que é isto?",
          bricks: [ { text: "What", type: "question_word" }, { text: "is", type: "verb" }, { text: "this", type: "subject" }, { text: "?", type: "other" } ]
        },
        {
            label: "Prepositions",
            fullSentence: "It is in the box.",
            meaning: "Está dentro da caixa.",
            bricks: [ { text: "It", type: "subject" }, { text: "is", type: "verb" }, { text: "in", type: "preposition" }, { text: "the box", type: "object" } ]
        }
      ],
      tables: [
        {
          title: "Demonstratives Matrix",
          headers: ["", "Near (Perto)", "Far (Longe)"],
          rows: [
            ["Singular", "This", "That"],
            ["Plural", "These", "Those"]
          ]
        },
        {
            title: "Questions and Answers",
            headers: ["Question", "Answer"],
            rows: [
              ["Is this your wallet?", "Yes, it is. / No, it isn't."],
              ["Are these your keys?", "Yes, they are. / No, they aren't."]
            ]
        }
      ]
    },
    dialogue: [
      { speaker: "Joe", text: "Hey, what's this?", translation: "Ei, o que é isso?" },
      { speaker: "Sue", text: "It's a flash drive.", translation: "É um pen drive." },
      { speaker: "Joe", text: "And what are these?", translation: "E o que são estes?" },
      { speaker: "Sue", text: "They're my headphones.", translation: "São meus fones de ouvido." }
    ],
    speakAndRepeat: [
      { text: "What's this?", translation: "O que é isso?", focus: "Linking (What's-this)" },
      { text: "The keys are in my pocket.", translation: "As chaves estão no meu bolso.", focus: "Plural verb 'are'" },
      { text: "Is this your phone?", translation: "Este é seu telefone?", focus: "Rising intonation" }
    ],
    quiz: [
      { question: "___ are my sunglasses (near).", options: ["This", "That", "These"], correctAnswer: 2, explanation: "Óculos (sunglasses) é plural e está perto." },
      { question: "Where is the cat? It's ___ the table (embaixo).", options: ["in", "on", "under"], correctAnswer: 2, explanation: "Under significa embaixo." }
    ]
  }),
  
  // Unit 1-3: Where are you from? (Questions with Be)
  "1-3": createContent({
    introText: "Vamos aprender a perguntar e responder sobre origens (países e cidades) e fazer descrições.",
    vocabulary: [
      { word: "Where", translation: "Onde", example: "Where are you from?", exampleMeaning: "De onde você é?" },
      { word: "From", translation: "De (origem)", example: "I am from Brazil.", exampleMeaning: "Eu sou do Brasil." },
      { word: "City", translation: "Cidade", example: "Rio is a big city.", exampleMeaning: "O Rio é uma cidade grande." },
      { word: "First language", translation: "Língua materna", example: "My first language is Portuguese.", exampleMeaning: "Minha língua materna é português." }
    ],
    grammarTitle: "Wh- Questions with Be",
    grammar: {
        introduction: "Perguntas Wh- (Where, What, Who, How) pedem informações específicas, diferentemente das perguntas Yes/No.",
        structures: [
            {
                label: "Wh- Question",
                fullSentence: "Where are you from?",
                meaning: "De onde você é?",
                bricks: [ { text: "Where", type: "question_word" }, { text: "are", type: "verb" }, { text: "you", type: "subject" }, { text: "from", type: "preposition" } ]
            },
            {
                label: "Answer",
                fullSentence: "I am from Canada.",
                meaning: "Eu sou do Canadá.",
                bricks: [ { text: "I", type: "subject" }, { text: "am", type: "verb" }, { text: "from Canada", type: "preposition" } ]
            },
            {
                label: "Yes/No Question",
                fullSentence: "Are you Japanese?",
                meaning: "Você é japonês?",
                bricks: [ { text: "Are", type: "verb" }, { text: "you", type: "subject" }, { text: "Japanese", type: "adjective" } ]
            }
        ],
        tables: [
            {
                title: "Wh- Questions",
                headers: ["Wh- Word", "Verb Be", "Subject", "Complement"],
                rows: [
                    ["Where", "are", "you", "from?"],
                    ["What", "is", "your name", "?"],
                    ["Who", "is", "that", "?"],
                    ["How", "are", "you", "?"]
                ]
            }
        ]
    },
    dialogue: [
        { speaker: "Tim", text: "Are you from California, Jessica?", translation: "Você é da Califórnia, Jessica?" },
        { speaker: "Jessica", text: "Well, my family is in California now, but we're from Korea originally.", translation: "Bem, minha família está na Califórnia agora, mas somos da Coreia originalmente." },
        { speaker: "Tim", text: "Oh, my mother is Korean.", translation: "Ah, minha mãe é coreana." }
    ],
    speakAndRepeat: [
        { text: "Where are you from?", translation: "De onde você é?", focus: "Falling intonation (Wh- question)" },
        { text: "I am from Rio de Janeiro.", translation: "Eu sou do Rio de Janeiro.", focus: "Pronunciation of city names" }
    ],
    quiz: [
        { question: "___ is your teacher? He is Mr. Brown.", options: ["What", "Where", "Who"], correctAnswer: 2, explanation: "Who (Quem) é usado para pessoas." }
    ]
  }),

  // Unit 1-4: I'm not wearing boots! (Present Continuous)
  "1-4": createContent({
    introText: "Nesta unidade, vamos falar sobre roupas, clima e o que estamos fazendo agora usando o Present Continuous.",
    vocabulary: [
      { word: "Wear", translation: "Vestir/Usar", example: "I am wearing jeans.", exampleMeaning: "Estou usando jeans." },
      { word: "Boots", translation: "Botas", example: "These boots are new.", exampleMeaning: "Estas botas são novas." },
      { word: "Raining", translation: "Chovendo", example: "It is raining now.", exampleMeaning: "Está chovendo agora." },
      { word: "Snowing", translation: "Nevando", example: "It is snowing in New York.", exampleMeaning: "Está nevando em Nova York." },
      { word: "Scarf", translation: "Cachecol", example: "She is wearing a scarf.", exampleMeaning: "Ela está usando um cachecol." }
    ],
    grammarTitle: "Present Continuous (Statements)",
    grammar: {
      introduction: "O Present Continuous descreve ações que estão acontecendo neste exato momento. A fórmula é: Sujeito + To Be + Verbo(ing).",
      structures: [
        {
          label: "Affirmative",
          fullSentence: "I am wearing a coat.",
          meaning: "Estou usando um casaco.",
          bricks: [ { text: "I", type: "subject" }, { text: "am", type: "verb" }, { text: "wearing", type: "verb" }, { text: "a coat", type: "noun" } ]
        },
        {
          label: "Negative",
          fullSentence: "She is not sleeping.",
          meaning: "Ela não está dormindo.",
          bricks: [ { text: "She", type: "subject" }, { text: "is", type: "verb" }, { text: "not", type: "adverb" }, { text: "sleeping", type: "verb" } ]
        }
      ],
      tables: [
        {
          title: "Present Continuous",
          headers: ["Subject", "Be", "Verb-ing"],
          rows: [
            ["I", "am", "wearing"],
            ["You / We / They", "are", "wearing"],
            ["He / She / It", "is", "wearing"]
          ]
        },
        {
          title: "Conjunctions",
          headers: ["Conjunction", "Usage"],
          rows: [
            ["and", "Adição (raining and cold)"],
            ["but", "Contraste (sunny but cold)"],
            ["so", "Consequência (raining so I stay home)"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Julie", text: "Oh no! It's raining!", translation: "Ah não! Está chovendo!" },
      { speaker: "Mary", text: "Are you wearing your boots?", translation: "Você está usando suas botas?" },
      { speaker: "Julie", text: "No, I'm wearing sandals.", translation: "Não, estou usando sandálias." },
      { speaker: "Mary", text: "Well, come inside. I'm drinking hot chocolate.", translation: "Bem, entre. Estou bebendo chocolate quente." }
    ],
    speakAndRepeat: [
      { text: "It's snowing right now.", translation: "Está nevando agora mesmo.", focus: "Contraction 'It's'" },
      { text: "I'm not wearing a tie.", translation: "Eu não estou usando gravata.", focus: "Sentence stress" }
    ],
    quiz: [
      { question: "Look! It ___ raining.", options: ["is", "are", "am"], correctAnswer: 0, explanation: "Com 'It' (clima), usamos 'is'." },
      { question: "They ___ soccer now.", options: ["play", "are playing", "plays"], correctAnswer: 1, explanation: "A palavra 'now' pede Present Continuous." }
    ]
  }),

  // Unit 1-5: What are you doing? (Time & Actions)
  "1-5": createContent({
    introText: "Vamos aprender a perguntar sobre horários e o que as pessoas estão fazendo em diferentes lugares e fusos horários.",
    vocabulary: [
      { word: "Breakfast", translation: "Café da manhã", example: "I'm having breakfast.", exampleMeaning: "Estou tomando café da manhã." },
      { word: "Dinner", translation: "Jantar", example: "They are cooking dinner.", exampleMeaning: "Eles estão cozinhando o jantar." },
      { word: "Noon", translation: "Meio-dia", example: "It's 12:00 PM, it's noon.", exampleMeaning: "São 12h, é meio-dia." },
      { word: "Midnight", translation: "Meia-noite", example: "It's 12:00 AM, it's midnight.", exampleMeaning: "São 0h, é meia-noite." },
      { word: "Quarter", translation: "Um quarto (15 min)", example: "It's a quarter past two.", exampleMeaning: "São duas e quinze." }
    ],
    grammarTitle: "Present Continuous Questions",
    grammar: {
      introduction: "Para fazer perguntas sobre ações atuais, invertemos a posição do verbo 'to be'.",
      structures: [
        {
          label: "Wh- Question",
          fullSentence: "What are you doing?",
          meaning: "O que você está fazendo?",
          bricks: [ { text: "What", type: "question_word" }, { text: "are", type: "verb" }, { text: "you", type: "subject" }, { text: "doing", type: "verb" }, { text: "?", type: "other" } ]
        },
        {
          label: "Yes/No Question",
          fullSentence: "Is she working?",
          meaning: "Ela está trabalhando?",
          bricks: [ { text: "Is", type: "verb" }, { text: "she", type: "subject" }, { text: "working", type: "verb" }, { text: "?", type: "other" } ]
        }
      ],
      tables: [
        {
          title: "Questions Structure",
          headers: ["Wh- Word", "Be", "Subject", "Verb-ing"],
          rows: [
            ["What", "are", "you", "doing?"],
            ["Where", "is", "he", "going?"],
            ["Why", "are", "they", "sleeping?"]
          ]
        },
        {
          title: "Telling Time",
          headers: ["Time", "Example"],
          rows: [
            ["O'clock", "It's 2:00 (Two o'clock)"],
            ["A quarter past", "It's 2:15"],
            ["Half past", "It's 2:30"],
            ["A quarter to", "It's 2:45"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Steve", text: "Hi Mom, what are you doing?", translation: "Oi mãe, o que você está fazendo?" },
      { speaker: "Mom", text: "I'm cooking dinner. It's 7:00 PM here.", translation: "Estou fazendo o jantar. São 19h aqui." },
      { speaker: "Steve", text: "Really? It's morning here. I'm having breakfast.", translation: "Sério? É manhã aqui. Estou tomando café." }
    ],
    speakAndRepeat: [
      { text: "What time is it?", translation: "Que horas são?", focus: "Linking (Time-is-it)" },
      { text: "I am checking my email.", translation: "Estou checando meu e-mail.", focus: "Verb -ing ending" }
    ],
    quiz: [
      { question: "It's 10:30. It's ___ ten.", options: ["half past", "quarter to", "o'clock"], correctAnswer: 0, explanation: "30 minutos passados é 'half past'." },
      { question: "___ are they going?", options: ["What", "Where", "Who"], correctAnswer: 1, explanation: "Para lugares, usamos 'Where'." }
    ]
  }),

  // Unit 1-6: My sister works downtown (Simple Present)
  "1-6": createContent({
    introText: "Nesta lição, vamos falar sobre profissões, membros da família e rotinas usando o Simple Present.",
    vocabulary: [
      { word: "Office", translation: "Escritório", example: "She works in an office.", exampleMeaning: "Ela trabalha num escritório." },
      { word: "Hospital", translation: "Hospital", example: "He is a doctor.", exampleMeaning: "Ele é um médico." },
      { word: "Salesperson", translation: "Vendedor(a)", example: "A salesperson sells things.", exampleMeaning: "Um vendedor vende coisas." },
      { word: "Downtown", translation: "Centro da cidade", example: "I live downtown.", exampleMeaning: "Eu moro no centro." },
      { word: "Commute", translation: "Deslocamento (trabalho)", example: "My commute is long.", exampleMeaning: "Meu deslocamento é longo." }
    ],
    grammarTitle: "Simple Present (He/She/It)",
    grammar: {
      introduction: "O Simple Present é usado para fatos e rotinas. Atenção: Para He, She e It, adicionamos 's' ao verbo.",
      structures: [
        {
          label: "Affirmative (3rd Person)",
          fullSentence: "My sister works downtown.",
          meaning: "Minha irmã trabalha no centro.",
          bricks: [ { text: "My sister", type: "subject" }, { text: "works", type: "verb" }, { text: "downtown", type: "adverb" } ]
        },
        {
          label: "Negative (Don't/Doesn't)",
          fullSentence: "He doesn't drive to work.",
          meaning: "Ele não dirige para o trabalho.",
          bricks: [ { text: "He", type: "subject" }, { text: "doesn't", type: "auxiliary" }, { text: "drive", type: "verb" }, { text: "to work", type: "preposition" } ]
        },
        {
          label: "Question (Do/Does)",
          fullSentence: "Does she live here?",
          meaning: "Ela mora aqui?",
          bricks: [ { text: "Does", type: "auxiliary" }, { text: "she", type: "subject" }, { text: "live", type: "verb" }, { text: "here", type: "adverb" } ]
        }
      ],
      tables: [
        {
          title: "Simple Present Endings",
          headers: ["Subject", "Verb (Work)", "Verb (Study)"],
          rows: [
            ["I/You/We/They", "work", "study"],
            ["He/She/It", "works", "studies (remove y + ies)"]
          ]
        },
        {
            title: "Questions",
            headers: ["Auxiliary", "Subject", "Verb"],
            rows: [
                ["Do", "you", "work?"],
                ["Does", "he", "work?"]
            ]
        }
      ]
    },
    dialogue: [
      { speaker: "Jack", text: "So, do you live downtown, David?", translation: "Então, você mora no centro, David?" },
      { speaker: "David", text: "Yes, I live with my brother. He works near here.", translation: "Sim, eu moro com meu irmão. Ele trabalha perto daqui." },
      { speaker: "Jack", text: "Oh, what does he do?", translation: "Ah, o que ele faz?" },
      { speaker: "David", text: "He is a waiter.", translation: "Ele é garçom." }
    ],
    speakAndRepeat: [
      { text: "He works in a bank.", translation: "Ele trabalha em um banco.", focus: "S ending sound" },
      { text: "Does she have a car?", translation: "Ela tem um carro?", focus: "Question intonation" }
    ],
    quiz: [
      { question: "My father ___ at night.", options: ["work", "works", "working"], correctAnswer: 1, explanation: "3ª pessoa do singular (He) requer 's'." },
      { question: "___ you like pizza?", options: ["Does", "Are", "Do"], correctAnswer: 2, explanation: "Para 'You', usamos o auxiliar 'Do'." }
    ]
  }),

  // Unit 1-13: May I take your order? (Restaurants/Modals)
  "1-13": createContent({
    introText: "Nesta unidade, aprenderemos como fazer pedidos em restaurantes, oferecer algo e entender o cardápio usando verbos modais como May, Could e Can.",
    vocabulary: [
      { word: "Menu", translation: "Cardápio", example: "Can I see the menu?", exampleMeaning: "Posso ver o cardápio?" },
      { word: "Order", translation: "Pedido/Pedir", example: "Are you ready to order?", exampleMeaning: "Estão prontos para pedir?" },
      { word: "Appetizer", translation: "Entrada/Aperitivo", example: "I'd like soup as an appetizer.", exampleMeaning: "Eu gostaria de sopa como entrada." },
      { word: "Main dish", translation: "Prato principal", example: "For the main dish, I want steak.", exampleMeaning: "Para o prato principal, quero bife." },
      { word: "Check/Bill", translation: "Conta", example: "Can we have the check, please?", exampleMeaning: "Pode nos trazer a conta, por favor?" }
    ],
    grammarTitle: "Modals (May/Can/Could)",
    grammar: {
      introduction: "Usamos verbos modais para fazer pedidos educados. 'May' é muito formal, 'Could' é formal e 'Can' é informal/neutro.",
      structures: [
        {
          label: "Ordering (I'll have...)",
          fullSentence: "I'll have the pasta.",
          meaning: "Eu vou querer a massa.",
          bricks: [ { text: "I'll", type: "subject" }, { text: "have", type: "verb" }, { text: "the pasta", type: "object" } ]
        },
        {
          label: "Request (Can/Could)",
          fullSentence: "Could you bring water?",
          meaning: "Você poderia trazer água?",
          bricks: [ { text: "Could", type: "auxiliary" }, { text: "you", type: "subject" }, { text: "bring", type: "verb" }, { text: "water", type: "object" } ]
        },
        {
          label: "Polite Offer (Would like)",
          fullSentence: "Would you like dessert?",
          meaning: "Você gostaria de sobremesa?",
          bricks: [ { text: "Would", type: "auxiliary" }, { text: "you", type: "subject" }, { text: "like", type: "verb" }, { text: "dessert", type: "object" } ]
        }
      ],
      tables: [
        {
          title: "Polite Requests",
          headers: ["Modal", "Usage Level", "Example"],
          rows: [
            ["Can", "Informal", "Can I have soda?"],
            ["Could", "Formal", "Could I have soda?"],
            ["May", "Very Formal", "May I have soda?"]
          ]
        },
        {
          title: "Would like vs Like",
          headers: ["Phrase", "Meaning"],
          rows: [
            ["I like pizza", "General preference (Eu gosto)"],
            ["I'd like pizza", "Specific desire now (Eu gostaria/Quero)"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Waiter", text: "May I take your order?", translation: "Posso anotar seu pedido?" },
      { speaker: "Customer", text: "Yes, I'd like the chicken sandwich, please.", translation: "Sim, eu gostaria do sanduíche de frango, por favor." },
      { speaker: "Waiter", text: "Would you like anything to drink?", translation: "Gostaria de algo para beber?" },
      { speaker: "Customer", text: "Yes, I'll have an iced tea.", translation: "Sim, vou querer um chá gelado." }
    ],
    speakAndRepeat: [
      { text: "I'd like the check, please.", translation: "Eu gostaria da conta, por favor.", focus: "Contraction 'I'd' (I would)" },
      { text: "Could I have some water?", translation: "Poderia me dar um pouco de água?", focus: "Polite intonation" }
    ],
    quiz: [
      { question: "___ I take your order?", options: ["Do", "May", "Am"], correctAnswer: 1, explanation: "May é o modal correto para oferecer serviço formalmente." },
      { question: "I ___ like a salad, please.", options: ["would", "do", "am"], correctAnswer: 0, explanation: "Would like (Gostaria) é a forma educada de pedir." }
    ]
  }),

  // Unit 1-14: The biggest and the best! (Past/Irregular Verbs)
  "1-14": createContent({
    introText: "Vamos falar sobre viagens, férias e clima no passado, usando o Simple Past com verbos irregulares.",
    vocabulary: [
      { word: "Vacation", translation: "Férias", example: "How was your vacation?", exampleMeaning: "Como foram suas férias?" },
      { word: "Bought", translation: "Comprou (Buy)", example: "I bought a souvenir.", exampleMeaning: "Eu comprei uma lembrancinha." },
      { word: "Went", translation: "Foi (Go)", example: "We went to the beach.", exampleMeaning: "Nós fomos para a praia." },
      { word: "Ate", translation: "Comeu (Eat)", example: "I ate fish.", exampleMeaning: "Eu comi peixe." },
      { word: "Sunny", translation: "Ensolarado", example: "It was sunny all day.", exampleMeaning: "Estava ensolarado o dia todo." }
    ],
    grammarTitle: "Simple Past (Irregular Verbs)",
    grammar: {
      introduction: "Muitos verbos comuns em inglês são irregulares no passado. Eles não terminam em -ed, eles mudam completamente.",
      structures: [
        {
          label: "Affirmative (Irregular)",
          fullSentence: "We went to Paris.",
          meaning: "Nós fomos para Paris.",
          bricks: [ { text: "We", type: "subject" }, { text: "went", type: "verb" }, { text: "to Paris", type: "preposition" } ]
        },
        {
          label: "Negative (Didn't)",
          fullSentence: "I didn't buy anything.",
          meaning: "Eu não comprei nada.",
          bricks: [ { text: "I", type: "subject" }, { text: "didn't", type: "auxiliary" }, { text: "buy", type: "verb" }, { text: "anything", type: "object" } ]
        },
        {
          label: "Question (Did)",
          fullSentence: "Did you have fun?",
          meaning: "Você se divertiu?",
          bricks: [ { text: "Did", type: "auxiliary" }, { text: "you", type: "subject" }, { text: "have", type: "verb" }, { text: "fun", type: "noun" } ]
        }
      ],
      tables: [
        {
          title: "Common Irregular Verbs",
          headers: ["Present", "Past"],
          rows: [
            ["Go", "Went"],
            ["Buy", "Bought"],
            ["Eat", "Ate"],
            ["Have", "Had"],
            ["See", "Saw"],
            ["Do", "Did"]
          ]
        },
        {
          title: "Past of Be",
          headers: ["Subject", "Was/Were"],
          rows: [
            ["I / He / She / It", "was"],
            ["You / We / They", "were"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Celia", text: "How was your vacation, Tom?", translation: "Como foram suas férias, Tom?" },
      { speaker: "Tom", text: "It was great! I went to Italy.", translation: "Foi ótimo! Eu fui para a Itália." },
      { speaker: "Celia", text: "Did you visit Rome?", translation: "Você visitou Roma?" },
      { speaker: "Tom", text: "Yes, and I ate amazing pizza.", translation: "Sim, e comi uma pizza incrível." }
    ],
    speakAndRepeat: [
      { text: "I went to the beach yesterday.", translation: "Eu fui à praia ontem.", focus: "Irregular verb 'went'" },
      { text: "Did you buy a ticket?", translation: "Você comprou um ingresso?", focus: "Question with Did" }
    ],
    quiz: [
      { question: "I ___ a new car last week.", options: ["buyed", "bought", "buy"], correctAnswer: 1, explanation: "O passado de 'buy' é 'bought'." },
      { question: "___ you go to school?", options: ["Did", "Do", "Was"], correctAnswer: 0, explanation: "Para perguntas no passado com verbos de ação, usamos 'Did'." }
    ]
  }),

  // Unit 1-15: I'm going to a soccer match (Plans/Frequency)
  "1-15": createContent({
    introText: "Vamos aprender a falar sobre planos futuros, fazer convites por telefone e discutir frequência de atividades.",
    vocabulary: [
      { word: "Soccer match", translation: "Jogo de futebol", example: "I'm going to a soccer match.", exampleMeaning: "Vou a um jogo de futebol." },
      { word: "Tomorrow", translation: "Amanhã", example: "See you tomorrow.", exampleMeaning: "Te vejo amanhã." },
      { word: "Tonight", translation: "Esta noite", example: "Are you free tonight?", exampleMeaning: "Você está livre hoje à noite?" },
      { word: "Usually", translation: "Geralmente", example: "I usually play tennis.", exampleMeaning: "Geralmente jogo tênis." },
      { word: "Never", translation: "Nunca", example: "I never smoke.", exampleMeaning: "Eu nunca fumo." }
    ],
    grammarTitle: "Invitations & Frequency",
    grammar: {
      introduction: "Usamos 'Would you like to...?' para convidar alguém. Também usamos o Present Continuous para falar de planos futuros já confirmados.",
      structures: [
        {
          label: "Invitation",
          fullSentence: "Would you like to go?",
          meaning: "Você gostaria de ir?",
          bricks: [ { text: "Would", type: "auxiliary" }, { text: "you", type: "subject" }, { text: "like", type: "verb" }, { text: "to go", type: "verb" } ]
        },
        {
          label: "Future Plan",
          fullSentence: "I am working tomorrow.",
          meaning: "Eu vou trabalhar amanhã (Já planejado).",
          bricks: [ { text: "I", type: "subject" }, { text: "am", type: "verb" }, { text: "working", type: "verb" }, { text: "tomorrow", type: "adverb" } ]
        },
        {
          label: "Frequency",
          fullSentence: "I always exercise.",
          meaning: "Eu sempre me exercito.",
          bricks: [ { text: "I", type: "subject" }, { text: "always", type: "adverb" }, { text: "exercise", type: "verb" } ]
        }
      ],
      tables: [
        {
          title: "Adverbs of Frequency",
          headers: ["Adverb", "% Frequency"],
          rows: [
            ["Always", "100%"],
            ["Usually", "80%"],
            ["Often", "60%"],
            ["Sometimes", "40%"],
            ["Never", "0%"]
          ]
        },
        {
          title: "Making Excuses",
          headers: ["Refusal", "Excuse"],
          rows: [
            ["I'd love to, but...", "I have to work."],
            ["Sorry, I can't.", "I am busy."]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Dave", text: "Hello?", translation: "Alô?" },
      { speaker: "Susan", text: "Hi Dave, this is Susan. Would you like to see a movie tonight?", translation: "Oi Dave, é a Susan. Gostaria de ver um filme hoje à noite?" },
      { speaker: "Dave", text: "I'd love to, but I can't. I'm studying for a test.", translation: "Eu adoraria, mas não posso. Estou estudando para uma prova." },
      { speaker: "Susan", text: "That's too bad. Maybe next time.", translation: "Que pena. Talvez na próxima." }
    ],
    speakAndRepeat: [
      { text: "Would you like to come?", translation: "Você gostaria de vir?", focus: "Intonation of invitations" },
      { text: "I'd love to, but I'm busy.", translation: "Adoraria, mas estou ocupado.", focus: "Polite refusal" }
    ],
    quiz: [
      { question: "___ you like to play tennis?", options: ["Do", "Would", "Are"], correctAnswer: 1, explanation: "Usamos 'Would' para convites (Would you like?)." },
      { question: "I ___ watch TV in the morning.", options: ["never", "am", "to"], correctAnswer: 0, explanation: "Advérbios de frequência vêm antes do verbo principal." }
    ]
  }),

  // Unit 1-16: A change for the better (Describing People)
  "1-16": createContent({
    introText: "Nesta unidade final do Livro 1, vamos aprender a descrever a aparência física das pessoas e falar sobre mudanças na vida.",
    vocabulary: [
      { word: "Appearance", translation: "Aparência", example: "He changed his appearance.", exampleMeaning: "Ele mudou sua aparência." },
      { word: "Curly", translation: "Encaracolado/Cacheado", example: "She has curly hair.", exampleMeaning: "Ela tem cabelo cacheado." },
      { word: "Straight", translation: "Liso", example: "I have straight hair.", exampleMeaning: "Eu tenho cabelo liso." },
      { word: "Glasses", translation: "Óculos", example: "Do you wear glasses?", exampleMeaning: "Você usa óculos?" },
      { word: "Tall", translation: "Alto(a)", example: "He is tall and thin.", exampleMeaning: "Ele é alto e magro." },
      { word: "Blond", translation: "Loiro", example: "She has blond hair.", exampleMeaning: "Ela tem cabelo loiro." }
    ],
    grammarTitle: "Describing People (Have vs Be)",
    grammar: {
      introduction: "Usamos 'Be' para adjetivos gerais (alto, bonito, jovem) e 'Have' para partes do corpo específicas (olhos azuis, cabelo longo).",
      structures: [
        {
          label: "With 'Be' (Adjectives)",
          fullSentence: "She is tall.",
          meaning: "Ela é alta.",
          bricks: [ { text: "She", type: "subject" }, { text: "is", type: "verb" }, { text: "tall", type: "adjective" } ]
        },
        {
          label: "With 'Have' (Nouns)",
          fullSentence: "She has blue eyes.",
          meaning: "Ela tem olhos azuis.",
          bricks: [ { text: "She", type: "subject" }, { text: "has", type: "verb" }, { text: "blue eyes", type: "object" } ]
        },
        {
          label: "Order of Adjectives",
          fullSentence: "He has short curly hair.",
          meaning: "Ele tem cabelo curto e cacheado.",
          bricks: [ { text: "He", type: "subject" }, { text: "has", type: "verb" }, { text: "short", type: "adjective" }, { text: "curly", type: "adjective" }, { text: "hair", type: "noun" } ]
        }
      ],
      tables: [
        {
          title: "Have vs Be",
          headers: ["Verb", "Usage", "Examples"],
          rows: [
            ["Be", "General Look / Age / Height", "I am young. He is handsome. We are tall."],
            ["Have", "Hair / Eyes / Features", "I have brown eyes. She has long hair. He has a beard."]
          ]
        },
        {
          title: "Prepositions of Place (Review)",
          headers: ["Preposition", "Meaning"],
          rows: [
            ["Next to", "Ao lado de"],
            ["Across from", "De frente para / Do outro lado de"],
            ["Between", "Entre (dois pontos)"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Brian", text: "Hi, Alice! I haven't seen you in ages.", translation: "Oi, Alice! Não te vejo há muito tempo." },
      { speaker: "Alice", text: "Brian? Wow! You look different.", translation: "Brian? Uau! Você parece diferente." },
      { speaker: "Brian", text: "Really? How?", translation: "Sério? Como?" },
      { speaker: "Alice", text: "You have a beard now! And you wear glasses.", translation: "Você tem barba agora! E usa óculos." }
    ],
    speakAndRepeat: [
      { text: "You look different!", translation: "Você parece diferente!", focus: "Exclamation intonation" },
      { text: "She has long blond hair.", translation: "Ela tem cabelo loiro e comprido.", focus: "Adjective order" }
    ],
    quiz: [
      { question: "She ___ tall and thin.", options: ["has", "is", "does"], correctAnswer: 1, explanation: "Para adjetivos como 'alto', usamos o verbo To Be (is)." },
      { question: "He has ___ hair.", options: ["short black", "black short", "short black"], correctAnswer: 0, explanation: "Ordem: Tamanho (Short) vem antes de Cor (Black)." }
    ]
  })
};

export const getStaticUnitContent = (id: string, unitTitle: string, unitDescription: string): GeneratedUnitContent => {
  if (PREDEFINED_UNITS[id]) {
    return PREDEFINED_UNITS[id];
  }

  // Fallback for units not yet hardcoded
  return createContent({
    introText: `Bem-vindo à unidade "${unitTitle}". Esta lição abrange: ${unitDescription}.`,
    vocabulary: [
      { word: "Example", translation: "Exemplo", example: "This is a placeholder.", exampleMeaning: "Este é um espaço reservado." }
    ],
    grammar: {
      introduction: "O conteúdo detalhado desta unidade será adicionado em breve.",
      structures: [
        {
          label: "Structure Preview",
          fullSentence: "Content coming soon.",
          meaning: "Conteúdo em breve.",
          bricks: [{ text: "Content", type: "subject" }, { text: "coming", type: "verb" }, { text: "soon", type: "adverb" }]
        }
      ],
      tables: []
    }
  });
};
