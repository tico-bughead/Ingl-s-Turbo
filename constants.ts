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

const createContent = (overrides: Partial<GeneratedUnitContent>): GeneratedUnitContent => ({
  introText: "Welcome to this unit.",
  vocabulary: [],
  grammarTitle: "Grammar Focus",
  grammar: { introduction: "", structures: [], tables: [] },
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
          bricks: [ { text: "He", type: "subject" }, { text: "doesn't", type: "auxiliary" }, { text: "drive", type: "verb" }, { text: "to work", type: "noun" } ]
        },
        {
          label: "Question (Do/Does)",
          fullSentence: "Does she live here?",
          meaning: "Ela mora aqui?",
          bricks: [ { text: "Does", type: "auxiliary" }, { text: "she", type: "subject" }, { text: "live", type: "verb" }, { text: "here", type: "adverb" }, { text: "?", type: "other" } ]
        }
      ],
      tables: [
        {
          title: "Simple Present Rules",
          headers: ["Subject", "Affirmative", "Negative", "Question"],
          rows: [
            ["I / You / We / They", "Work", "Don't work", "Do... work?"],
            ["He / She / It", "Works", "Doesn't work", "Does... work?"]
          ]
        },
        {
          title: "Spelling Rules (3rd Person)",
          headers: ["Ending", "Rule", "Example"],
          rows: [
            ["Consonant", "Add -s", "Walks"],
            ["-ch, -sh, -s, -x", "Add -es", "Watches, Washes"],
            ["Consonant + y", "Remove y, add -ies", "Study -> Studies"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Jack", text: "Does your wife work?", translation: "Sua esposa trabalha?" },
      { speaker: "Tom", text: "Yes, she does. She's a teacher.", translation: "Sim, trabalha. Ela é professora." },
      { speaker: "Jack", text: "Where does she teach?", translation: "Onde ela ensina?" },
      { speaker: "Tom", text: "She teaches at the high school downtown.", translation: "Ela ensina na escola de ensino médio no centro." }
    ],
    speakAndRepeat: [
      { text: "She works in a hotel.", translation: "Ela trabalha em um hotel.", focus: "Final 's' sound" },
      { text: "Do you like your job?", translation: "Você gosta do seu trabalho?", focus: "Intonation" },
      { text: "He doesn't have a car.", translation: "Ele não tem carro.", focus: "Doesn't pronunciation" }
    ],
    quiz: [
      { question: "My brother ___ to school.", options: ["go", "goes", "going"], correctAnswer: 1, explanation: "3ª pessoa do singular (He) requer 'es' no final de 'go'." },
      { question: "___ they live near here?", options: ["Do", "Does", "Are"], correctAnswer: 0, explanation: "Para 'they', usamos o auxiliar 'Do'." }
    ]
  }),

  // Unit 1-7: Does it have a view? (House & Furniture)
  "1-7": createContent({
    introText: "Vamos descrever casas, apartamentos e móveis, usando 'Does it have...?' e 'There is/are'.",
    vocabulary: [
      { word: "View", translation: "Vista", example: "The apartment has a nice view.", exampleMeaning: "O apartamento tem uma vista legal." },
      { word: "Kitchen", translation: "Cozinha", example: "The fridge is in the kitchen.", exampleMeaning: "A geladeira está na cozinha." },
      { word: "Bedroom", translation: "Quarto", example: "There are two bedrooms.", exampleMeaning: "Há dois quartos." },
      { word: "Floor", translation: "Chão/Andar", example: "I live on the first floor.", exampleMeaning: "Eu moro no primeiro andar." },
      { word: "Furniture", translation: "Mobília", example: "I need new furniture.", exampleMeaning: "Preciso de mobília nova." }
    ],
    grammarTitle: "Simple Present Questions (It)",
    grammar: {
      introduction: "Ao descrever lugares, frequentemente usamos 'It' (ele/ela para coisas). As perguntas usam 'Does'.",
      structures: [
        {
          label: "Does it have...?",
          fullSentence: "Does the house have a yard?",
          meaning: "A casa tem um quintal?",
          bricks: [ { text: "Does", type: "auxiliary" }, { text: "the house", type: "subject" }, { text: "have", type: "verb" }, { text: "a yard", type: "object" } ]
        },
        {
          label: "Short Answer",
          fullSentence: "Yes, it does.",
          meaning: "Sim, tem.",
          bricks: [ { text: "Yes", type: "other" }, { text: "it", type: "subject" }, { text: "does", type: "auxiliary" } ]
        },
        {
          label: "Negative Answer",
          fullSentence: "No, it doesn't.",
          meaning: "Não, não tem.",
          bricks: [ { text: "No", type: "other" }, { text: "it", type: "subject" }, { text: "doesn't", type: "auxiliary" } ]
        }
      ],
      tables: [
        {
          title: "Describing Quantity",
          headers: ["Phrase", "Usage"],
          rows: [
            ["There is a...", "Singular (Tem um...)"],
            ["There are some...", "Plural (Tem alguns...)"],
            ["There aren't any...", "Negative Plural (Não tem nenhum...)"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Agent", text: "This apartment is great.", translation: "Este apartamento é ótimo." },
      { speaker: "Client", text: "Does it have a balcony?", translation: "Ele tem varanda?" },
      { speaker: "Agent", text: "Yes, it does. And it has a view of the park.", translation: "Sim, tem. E tem vista para o parque." },
      { speaker: "Client", text: "That sounds perfect.", translation: "Parece perfeito." }
    ],
    speakAndRepeat: [
      { text: "Does it have a garage?", translation: "Tem garagem?", focus: "Linking (Does-it)" },
      { text: "There's a big window.", translation: "Tem uma janela grande.", focus: "Contraction There's" }
    ],
    quiz: [
      { question: "___ the apartment have a view?", options: ["Do", "Does", "Is"], correctAnswer: 1, explanation: "O sujeito é 'the apartment' (it), então usamos 'Does'." },
      { question: "There aren't ___ chairs.", options: ["some", "any", "a"], correctAnswer: 1, explanation: "Em frases negativas no plural, usamos 'any'." }
    ]
  }),

  // Unit 1-8: Job skills (Can/Can't)
  "1-8": createContent({
    introText: "Nesta unidade, falamos sobre talentos e habilidades usando 'Can' e 'Can't'.",
    vocabulary: [
      { word: "Skill", translation: "Habilidade", example: "Singing is a skill.", exampleMeaning: "Cantar é uma habilidade." },
      { word: "Fix", translation: "Consertar", example: "I can fix cars.", exampleMeaning: "Eu sei consertar carros." },
      { word: "Draw", translation: "Desenhar", example: "She draws very well.", exampleMeaning: "Ela desenha muito bem." },
      { word: "Sing", translation: "Cantar", example: "Can you sing?", exampleMeaning: "Você sabe cantar?" },
      { word: "Drive", translation: "Dirigir", example: "He can't drive.", exampleMeaning: "Ele não sabe dirigir." }
    ],
    grammarTitle: "Modals: Can & Can't",
    grammar: {
      introduction: "'Can' expressa habilidade ou possibilidade. O verbo principal nunca muda (sem 'to', sem 's').",
      structures: [
        {
          label: "Affirmative",
          fullSentence: "I can swim.",
          meaning: "Eu sei nadar.",
          bricks: [ { text: "I", type: "subject" }, { text: "can", type: "auxiliary" }, { text: "swim", type: "verb" } ]
        },
        {
          label: "Negative",
          fullSentence: "She can't cook.",
          meaning: "Ela não sabe cozinhar.",
          bricks: [ { text: "She", type: "subject" }, { text: "can't", type: "auxiliary" }, { text: "cook", type: "verb" } ]
        },
        {
          label: "Question",
          fullSentence: "Can you dance?",
          meaning: "Você sabe dançar?",
          bricks: [ { text: "Can", type: "auxiliary" }, { text: "you", type: "subject" }, { text: "dance", type: "verb" }, { text: "?", type: "other" } ]
        }
      ],
      tables: [
        {
          title: "Can Rules",
          headers: ["Rule", "Correct", "Incorrect"],
          rows: [
            ["No 'to' after can", "I can go", "I can to go"],
            ["No 's' for He/She", "She can sing", "She cans sing"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Interviewer", text: "Can you use a computer?", translation: "Você sabe usar computador?" },
      { speaker: "Candidate", text: "Yes, I can. I can design websites.", translation: "Sim, sei. Eu sei criar sites." },
      { speaker: "Interviewer", text: "That's good. Can you speak Spanish?", translation: "Isso é bom. Você sabe falar espanhol?" },
      { speaker: "Candidate", text: "No, I can't.", translation: "Não, não sei." }
    ],
    speakAndRepeat: [
      { text: "I can't hear you.", translation: "Não consigo te ouvir.", focus: "Can't (Stop T)" },
      { text: "Can you help me?", translation: "Você pode me ajudar?", focus: "Weak 'can'" }
    ],
    quiz: [
      { question: "He ___ play the piano.", options: ["can", "cans", "can to"], correctAnswer: 0, explanation: "Can nunca muda." },
      { question: "Can they swim? No, they ___.", options: ["don't", "can't", "aren't"], correctAnswer: 1, explanation: "A resposta curta deve usar o mesmo modal da pergunta." }
    ]
  }),

  // Unit 1-9: I'm going to see a movie (Future plans)
  "1-9": createContent({
    introText: "Vamos fazer planos para o futuro, falar sobre feriados e datas especiais usando 'Be going to'.",
    vocabulary: [
      { word: "Tomorrow", translation: "Amanhã", example: "See you tomorrow.", exampleMeaning: "Te vejo amanhã." },
      { word: "Tonight", translation: "Hoje à noite", example: "I'm staying home tonight.", exampleMeaning: "Vou ficar em casa hoje à noite." },
      { word: "Next week", translation: "Semana que vem", example: "We are traveling next week.", exampleMeaning: "Vamos viajar semana que vem." },
      { word: "Movie", translation: "Filme", example: "Let's watch a movie.", exampleMeaning: "Vamos assistir um filme." },
      { word: "Birthday", translation: "Aniversário", example: "Happy Birthday!", exampleMeaning: "Feliz aniversário!" }
    ],
    grammarTitle: "Future with 'Be Going To'",
    grammar: {
      introduction: "Usamos 'Be going to' para planos futuros já decididos. Fórmula: Sujeito + Be + Going to + Verbo.",
      structures: [
        {
          label: "Affirmative Plan",
          fullSentence: "I am going to buy a car.",
          meaning: "Eu vou comprar um carro.",
          bricks: [ { text: "I", type: "subject" }, { text: "am", type: "verb" }, { text: "going to", type: "auxiliary" }, { text: "buy", type: "verb" }, { text: "a car", type: "object" } ]
        },
        {
          label: "Question",
          fullSentence: "Are you going to travel?",
          meaning: "Você vai viajar?",
          bricks: [ { text: "Are", type: "verb" }, { text: "you", type: "subject" }, { text: "going to", type: "auxiliary" }, { text: "travel", type: "verb" }, { text: "?", type: "other" } ]
        }
      ],
      tables: [
        {
          title: "Future Expressions",
          headers: ["Expression", "Meaning"],
          rows: [
            ["Tomorrow", "Day after today"],
            ["Next Month", "The month after this one"],
            ["Tonight", "This night"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Ann", text: "What are you going to do this weekend?", translation: "O que você vai fazer neste fim de semana?" },
      { speaker: "Bob", text: "I'm going to see a soccer match.", translation: "Vou ver um jogo de futebol." },
      { speaker: "Ann", text: "That sounds fun. I'm going to study.", translation: "Parece divertido. Eu vou estudar." }
    ],
    speakAndRepeat: [
      { text: "What are you going to do?", translation: "O que você vai fazer?", focus: "Reduction (Gonna)" },
      { text: "I'm going to stay home.", translation: "Vou ficar em casa.", focus: "Fluency" }
    ],
    quiz: [
      { question: "She ___ going to play tennis.", options: ["are", "am", "is"], correctAnswer: 2, explanation: "She usa 'is'." },
      { question: "Are they ___ to eat?", options: ["go", "going", "goes"], correctAnswer: 1, explanation: "A estrutura é 'going to'." }
    ]
  }),

  // Unit 1-10: Have you ever been there? (Present Perfect)
  "1-10": createContent({
    introText: "Esta lição introduz o Present Perfect para falar de experiências de vida, sem dizer exatamente quando aconteceram.",
    vocabulary: [
      { word: "Ever", translation: "Alguma vez", example: "Have you ever seen a ghost?", exampleMeaning: "Você já viu um fantasma?" },
      { word: "Never", translation: "Nunca", example: "I have never been to Paris.", exampleMeaning: "Eu nunca estive em Paris." },
      { word: "Been", translation: "Estado/Ido (Particípio)", example: "I have been there.", exampleMeaning: "Eu já estive lá." },
      { word: "Eaten", translation: "Comido (Particípio)", example: "Have you eaten sushi?", exampleMeaning: "Você já comeu sushi?" }
    ],
    grammarTitle: "Present Perfect (Experience)",
    grammar: {
      introduction: "O Present Perfect (Have/Has + Particípio) conecta o passado ao presente. Usamos para experiências gerais.",
      structures: [
        {
          label: "Question (Have you ever...?)",
          fullSentence: "Have you ever been to London?",
          meaning: "Você já esteve em Londres?",
          bricks: [ { text: "Have", type: "auxiliary" }, { text: "you", type: "subject" }, { text: "ever", type: "adverb" }, { text: "been", type: "verb" }, { text: "to London", type: "preposition" } ]
        },
        {
          label: "Affirmative",
          fullSentence: "I have seen that movie.",
          meaning: "Eu já vi aquele filme.",
          bricks: [ { text: "I", type: "subject" }, { text: "have", type: "auxiliary" }, { text: "seen", type: "verb" }, { text: "that movie", type: "object" } ]
        },
        {
          label: "Negative",
          fullSentence: "She has never eaten tacos.",
          meaning: "Ela nunca comeu tacos.",
          bricks: [ { text: "She", type: "subject" }, { text: "has", type: "auxiliary" }, { text: "never", type: "adverb" }, { text: "eaten", type: "verb" }, { text: "tacos", type: "noun" } ]
        }
      ],
      tables: [
        {
          title: "Regular vs Irregular Participles",
          headers: ["Verb", "Past Simple", "Participle (Use with Have)"],
          rows: [
            ["Visit", "Visited", "Visited"],
            ["Go", "Went", "Gone / Been"],
            ["See", "Saw", "Seen"],
            ["Eat", "Ate", "Eaten"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Max", text: "Have you ever been to a jazz club?", translation: "Você já foi a um clube de jazz?" },
      { speaker: "Lisa", text: "Yes, I have. I went to one last year.", translation: "Sim, já. Fui a um ano passado." },
      { speaker: "Max", text: "Was it good?", translation: "Foi bom?" },
      { speaker: "Lisa", text: "Yes, it was amazing.", translation: "Sim, foi incrível." }
    ],
    speakAndRepeat: [
      { text: "Have you ever been there?", translation: "Você já esteve lá?", focus: "Linking (Have-you)" },
      { text: "I've never done that.", translation: "Eu nunca fiz isso.", focus: "Contraction I've" }
    ],
    quiz: [
      { question: "Have you ___ sushi?", options: ["eat", "ate", "eaten"], correctAnswer: 2, explanation: "Com Have, usamos o particípio (3ª coluna)." },
      { question: "___ she ever visited Brazil?", options: ["Do", "Has", "Have"], correctAnswer: 1, explanation: "Para 'She', o auxiliar é 'Has'." }
    ]
  }),

  // Unit 1-11: It's a very exciting place (Town & Directions)
  "1-11": createContent({
    introText: "Aprenda a descrever cidades e pedir direções usando 'There is/are' e preposições de lugar.",
    vocabulary: [
      { word: "Across from", translation: "Em frente a", example: "The bank is across from the park.", exampleMeaning: "O banco é em frente ao parque." },
      { word: "Between", translation: "Entre", example: "The shop is between the bank and the cafe.", exampleMeaning: "A loja é entre o banco e o café." },
      { word: "Corner", translation: "Esquina", example: "On the corner of Main St.", exampleMeaning: "Na esquina da Rua Principal." },
      { word: "Subway", translation: "Metrô", example: "Take the subway.", exampleMeaning: "Pegue o metrô." },
      { word: "Exciting", translation: "Emocionante/Agitado", example: "New York is exciting.", exampleMeaning: "Nova York é agitada." }
    ],
    grammarTitle: "Directions & Prepositions",
    grammar: {
      introduction: "Para dar direções, usamos imperativos (vire, vá) e preposições de localização.",
      structures: [
        {
          label: "Asking for directions",
          fullSentence: "Is there a bank near here?",
          meaning: "Tem um banco perto daqui?",
          bricks: [ { text: "Is", type: "verb" }, { text: "there", type: "subject" }, { text: "a bank", type: "noun" }, { text: "near here", type: "preposition" } ]
        },
        {
          label: "Giving directions",
          fullSentence: "Go straight and turn left.",
          meaning: "Vá reto e vire à esquerda.",
          bricks: [ { text: "Go", type: "verb" }, { text: "straight", type: "adverb" }, { text: "and", type: "conjunction" }, { text: "turn", type: "verb" }, { text: "left", type: "adverb" } ]
        }
      ],
      tables: [
        {
          title: "Prepositions of Place",
          headers: ["Preposition", "Meaning"],
          rows: [
            ["Next to", "Ao lado de"],
            ["Across from", "Do outro lado da rua / Em frente"],
            ["On the corner of", "Na esquina de"],
            ["Between", "No meio de dois lugares"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Tourist", text: "Excuse me, is there a post office around here?", translation: "Com licença, tem um correio por aqui?" },
      { speaker: "Local", text: "Yes, there is. It's on Main Street, next to the bank.", translation: "Sim, tem. Fica na Rua Principal, ao lado do banco." },
      { speaker: "Tourist", text: "Thank you!", translation: "Obrigado!" }
    ],
    speakAndRepeat: [
      { text: "Is there a drugstore nearby?", translation: "Tem uma farmácia por perto?", focus: "Is there linking" },
      { text: "Turn right at the light.", translation: "Vire à direita no semáforo.", focus: "Directions clarity" }
    ],
    quiz: [
      { question: "The bank is ___ the street.", options: ["on", "across", "between"], correctAnswer: 1, explanation: "A expressão correta é 'across the street' (ou across from)." },
      { question: "___ there any restaurants?", options: ["Is", "Are", "Am"], correctAnswer: 1, explanation: "Restaurants é plural, então usamos 'Are'." }
    ]
  }),

  // Unit 1-12: It really happened! (Simple Past)
  "1-12": createContent({
    introText: "Vamos contar histórias do passado usando o Simple Past (verbos regulares com -ed e irregulares básicos).",
    vocabulary: [
      { word: "Yesterday", translation: "Ontem", example: "I worked yesterday.", exampleMeaning: "Eu trabalhei ontem." },
      { word: "Last night", translation: "Ontem à noite", example: "We watched TV last night.", exampleMeaning: "Nós assistimos TV ontem à noite." },
      { word: "Ago", translation: "Atrás (tempo)", example: "Two days ago.", exampleMeaning: "Dois dias atrás." },
      { word: "Did", translation: "Auxiliar de passado", example: "Did you go?", exampleMeaning: "Você foi?" },
      { word: "Weekend", translation: "Fim de semana", example: "How was your weekend?", exampleMeaning: "Como foi seu fim de semana?" }
    ],
    grammarTitle: "Simple Past (Regular Verbs)",
    grammar: {
      introduction: "Para verbos regulares no passado, adicionamos -ed. Para perguntas e negativas, usamos 'Did'.",
      structures: [
        {
          label: "Affirmative",
          fullSentence: "I stayed home yesterday.",
          meaning: "Eu fiquei em casa ontem.",
          bricks: [ { text: "I", type: "subject" }, { text: "stayed", type: "verb" }, { text: "home", type: "noun" }, { text: "yesterday", type: "adverb" } ]
        },
        {
          label: "Negative",
          fullSentence: "I didn't watch TV.",
          meaning: "Eu não assisti TV.",
          bricks: [ { text: "I", type: "subject" }, { text: "didn't", type: "auxiliary" }, { text: "watch", type: "verb" }, { text: "TV", type: "noun" } ]
        },
        {
          label: "Question",
          fullSentence: "Did you clean the house?",
          meaning: "Você limpou a casa?",
          bricks: [ { text: "Did", type: "auxiliary" }, { text: "you", type: "subject" }, { text: "clean", type: "verb" }, { text: "the house", type: "object" }, { text: "?", type: "other" } ]
        }
      ],
      tables: [
        {
          title: "-ED Pronunciation Rules",
          headers: ["Sound", "Rule", "Examples"],
          rows: [
            ["/t/", "After voiceless sounds (p, k, sh, ch)", "Worked, Watched"],
            ["/d/", "After voiced sounds (l, n, v, vowels)", "Played, Cleaned"],
            ["/id/", "After t or d", "Wanted, Needed"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "Ana", text: "Did you have a good weekend?", translation: "Você teve um bom fim de semana?" },
      { speaker: "Ben", text: "Yes, I did. I played tennis with my brother.", translation: "Sim, tive. Joguei tênis com meu irmão." },
      { speaker: "Ana", text: "Did you win?", translation: "Você ganhou?" },
      { speaker: "Ben", text: "No, I didn't. He plays very well.", translation: "Não. Ele joga muito bem." }
    ],
    speakAndRepeat: [
      { text: "I worked late last night.", translation: "Trabalhei até tarde ontem à noite.", focus: "/t/ sound in worked" },
      { text: "Did you call me?", translation: "Você me ligou?", focus: "Did you linking" }
    ],
    quiz: [
      { question: "She ___ pizza last night.", options: ["cook", "cooked", "cooks"], correctAnswer: 1, explanation: "Passado regular requer -ed." },
      { question: "___ you go to the party?", options: ["Do", "Did", "Are"], correctAnswer: 1, explanation: "Auxiliar de passado é Did." }
    ]
  })
};

// EXPORTED FUNCTION
export const getStaticUnitContent = (unitId: string, title: string, description: string): GeneratedUnitContent => {
  if (PREDEFINED_UNITS[unitId]) {
    return PREDEFINED_UNITS[unitId];
  }

  // Fallback Template for units not hardcoded yet
  return createContent({
    introText: `Welcome to ${title}. In this unit, we will explore: ${description}. This unit content is currently a template placeholder.`,
    vocabulary: [
      { word: "Example Word", translation: "Exemplo", example: "This is a placeholder example.", exampleMeaning: "Este é um exemplo temporário." },
      { word: "Topic Word 1", translation: "Palavra do Tópico 1", example: "Used in context.", exampleMeaning: "Usado em contexto." }
    ],
    grammarTitle: "Key Structure",
    grammar: {
      introduction: "In this lesson, we focus on the grammar structures relevant to the topic.",
      structures: [
        {
          label: "Example Structure",
          fullSentence: "Subject + Verb + Object",
          meaning: "Sujeito + Verbo + Objeto",
          bricks: [
            { text: "I", type: "subject" },
            { text: "learn", type: "verb" },
            { text: "English", type: "object" }
          ]
        }
      ],
      tables: [
        {
          title: "Concept Table",
          headers: ["Form", "Example"],
          rows: [
            ["Type 1", "Example 1"],
            ["Type 2", "Example 2"]
          ]
        }
      ]
    },
    dialogue: [
      { speaker: "A", text: "Hello, this is a practice dialogue.", translation: "Olá, este é um diálogo de prática." },
      { speaker: "B", text: "We are learning about " + title, translation: "Estamos aprendendo sobre " + title }
    ],
    speakAndRepeat: [
      { text: "This is a practice sentence.", translation: "Esta é uma frase de prática.", focus: "Clear pronunciation" }
    ],
    quiz: [
      { question: "What is the main topic?", options: [title, "Math", "History"], correctAnswer: 0, explanation: "We are studying the unit topic." }
    ]
  });
};