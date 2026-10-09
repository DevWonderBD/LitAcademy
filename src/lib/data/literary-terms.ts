export interface LiteraryTerm {
  id: string;
  term: string;
  shortDescription: string;
  definition: { en: string; bn: string };
  examples: { text: string; source: string }[];
  context: { en: string; bn: string };
  similarTerms?: { id: string; term: string }[];
  oppositeTerms?: { id: string; term: string }[];
}

export const literaryTermsData: LiteraryTerm[] = [
  {
    id: "absurdism",
    term: "Absurdism",
    shortDescription:
      "A philosophy emphasizing the inherent meaninglessness of human existence.",
    definition: {
      en: "A philosophical perspective and literary movement which argues that the universe is irrational and meaningless, and that the search for order or meaning inevitably brings humans into conflict with the universe. In literature, it often features disconnected, illogical plots and characters who cannot communicate effectively.",
      bn: "অ্যাবসার্ডিজম বা অযৌক্তিকতাবাদ হলো একটি দার্শনিক ও সাহিত্যিক আন্দোলন যা মনে করে মহাবিশ্ব অর্থহীন এবং অযৌক্তিক। সাহিত্যে এটি প্রায়শই সংযোগহীন, অযৌক্তিক কাহিনী এবং এমন চরিত্র দ্বারা চিহ্নিত করা হয় যারা একে অপরের সাথে কার্যকরভাবে যোগাযোগ করতে অক্ষম।",
    },
    examples: [
      {
        text: "Waiting for Godot, where characters Vladimir and Estragon endlessly wait for a person named Godot who never arrives.",
        source: "Samuel Beckett, 'Waiting for Godot'",
      },
    ],
    context: {
      en: "Rooted in the existentialist movement of the 20th century, particularly influenced by the trauma of World War II. It seeks to capture the human condition in a universe devoid of inherent purpose.",
      bn: "এটি ২০শ শতাব্দীর অস্তিত্ববাদী আন্দোলনের সাথে গভীরভাবে যুক্ত, যা বিশেষ করে দ্বিতীয় বিশ্বযুদ্ধের ট্রমার দ্বারা প্রভাবিত হয়েছিল। এটি মানব জীবনের অন্তর্নিহিত অর্থহীনতা তুলে ধরে।",
    },
    similarTerms: [
      {
        id: "existentialism",
        term: "Existentialism",
      },
      {
        id: "nihilism",
        term: "Nihilism",
      },
    ],
  },
  {
    id: "aestheticism",
    term: "Aestheticism",
    shortDescription:
      "The doctrine of 'art for art's sake', valuing beauty over moral or narrative considerations.",
    definition: {
      en: "An intellectual and art movement supporting the emphasis of aesthetic values more than social-political themes for literature, fine art, music and other arts. It operates under the slogan 'art for art's sake', suggesting that art requires no moral justification.",
      bn: "নন্দনতত্ত্ব বা সৌন্দর্যবাদ হলো এমন একটি আন্দোলন যা সাহিত্য বা শিল্পকলায় সামাজিক-রাজনৈতিক থিমের চেয়ে নান্দনিক মূল্যবোধকে বেশি গুরুত্ব দেয়। এটি 'শিল্পের জন্য শিল্প' নীতিতে বিশ্বাসী, অর্থাৎ শিল্পের কোনো নৈতিক বাধ্যবাধকতা নেই।",
    },
    examples: [
      {
        text: "The entire novel 'The Picture of Dorian Gray', which explores the consequences of living life solely in the pursuit of beauty and pleasure.",
        source: "Oscar Wilde, 'The Picture of Dorian Gray'",
      },
    ],
    context: {
      en: "Prominent in Europe in the late 19th century, serving as a reaction against the utilitarian philosophies and the industrial age, which were perceived as ugly and overly practical.",
      bn: "১৯শ শতাব্দীর শেষের দিকে ইউরোপে এটি জনপ্রিয় হয়, যা ছিল উপযোগবাদ এবং শিল্প যুগের বিরুদ্ধে একটি প্রতিক্রিয়া, কারণ সেগুলোকে অসুন্দর এবং অতি-ব্যবহারিক বলে মনে করা হতো।",
    },
    similarTerms: [
      {
        id: "decadence",
        term: "Decadence",
      },
    ],
  },
  {
    id: "allegory",
    term: "Allegory",
    shortDescription:
      "A narrative that reveals a hidden moral, political, or philosophical meaning through symbolic characters and events.",
    definition: {
      en: "An allegory is a complex literary device in which characters, images, and/or events act as symbols to illustrate a moral or spiritual truth, or a political or historical situation. Unlike a simple metaphor that compares two things, an allegory is an extended narrative that carries a deeper, secondary meaning throughout the entire text. Writers use allegories to convey complex ideas in a more digestible and engaging way, often allowing them to critique society or human nature safely.",
      bn: "অ্যালেগরি বা রূপকধর্মী রচনা হলো এমন একটি আখ্যান বা গল্প, যেখানে চরিত্র, স্থান বা ঘটনাগুলো বাহ্যিক অর্থের পাশাপাশি একটি গভীর নৈতিক, সামাজিক বা রাজনৈতিক অর্থ বহন করে। এটি অনেকটা মেটাফরের মতোই, তবে এটি পুরো গল্পজুড়ে বিস্তৃত থাকে। লেখকরা প্রায়শই সমাজের কোনো ত্রুটি বা জটিল দার্শনিক চিন্তাকে সাধারণ মানুষের কাছে সহজে এবং নিরাপদে তুলে ধরার জন্য অ্যালেগরির আশ্রয় নেন।",
    },
    examples: [
      {
        text: "The Faerie Queene by Edmund Spenser is a moral and religious allegory where knights represent different virtues.",
        source: "The Faerie Queene by Edmund Spenser",
      },
      {
        text: "Animal Farm uses farm animals to represent the events and figures of the Russian Revolution.",
        source: "Animal Farm by George Orwell",
      },
    ],
    context: {
      en: "Derived from the Latin 'allegoria', meaning 'speaking to imply something else'. It was an extremely popular genre in the Middle Ages and the Renaissance for moral instruction.",
      bn: "ল্যাটিন শব্দ 'allegoria' থেকে এর উৎপত্তি, যার অর্থ 'ভিন্ন কিছু বোঝানোর জন্য বলা'। মধ্যযুগ এবং রেনেসাঁ যুগে মানুষকে নৈতিক শিক্ষা দেওয়ার জন্য এই কৌশলটি ব্যাপক জনপ্রিয়তা পেয়েছিল।",
    },
  },
  {
    id: "alliteration",
    term: "Alliteration",
    shortDescription:
      "The stylistic repetition of the same consonant sounds at the beginning of adjacent or closely connected words.",
    definition: {
      en: "Alliteration is a phonetic literary device that involves the repetition of initial consonant sounds in two or more neighboring words or syllables. It does not rely on letters, but on sounds. This repetition creates a musical rhythm, sets a specific mood, and makes the text more memorable. It is heavily used in poetry, but also appears frequently in prose and rhetoric to emphasize certain points.",
      bn: "অ্যালিটারেশন বা অনুপ্রাস হলো এমন একটি সাহিত্যিক কৌশল, যেখানে পাশাপাশি বসা একাধিক শব্দের শুরুতে একই ব্যঞ্জনবর্ণের (consonant) ধ্বনির পুনরাবৃত্তি ঘটে। এটি মূলত ধ্বনির ওপর নির্ভরশীল, বানানের ওপর নয়। কবিতায় সাঙ্গীতিক ছন্দ তৈরি করতে এবং পাঠকের মনোযোগ আকর্ষণ করতে এটি দারুণ কাজ করে।",
    },
    examples: [
      {
        text: "Fair is foul, and foul is fair: Hover through the fog and filthy air.",
        source: "Macbeth by William Shakespeare",
      },
      {
        text: "The furrow followed free...",
        source: "The Rime of the Ancient Mariner by S.T. Coleridge",
      },
    ],
    context: {
      en: "Originating from the Latin word 'latira', meaning 'letters of the alphabet'. Old English epic poetry (like Beowulf) relied entirely on alliterative meter rather than rhyme.",
      bn: "পুরোনো ইংরেজি মহাকাব্যগুলোতে (যেমন: বেউলফ) অন্ত্যমিলের (rhyme) পরিবর্তে এই অ্যালিটারেশন ব্যবহার করেই কবিতার মূল ছন্দ তৈরি করা হতো।",
    },
  },
  {
    id: "allusion",
    term: "Allusion",
    shortDescription:
      "An indirect or passing reference to an event, person, place, or artistic work.",
    definition: {
      en: "An allusion is a figure of speech whereby the author refers to a subject matter such as a place, event, or literary work by way of a passing reference. It is up to the reader to make a connection to the subject being mentioned.",
      bn: "অ্যালুশন (Allusion) বা পরোক্ষ উল্লেখ হলো এমন একটি অলংকার যার মাধ্যমে লেখক কোনো স্থান, ঘটনা বা সাহিত্যকর্মের প্রতি পরোক্ষভাবে নির্দেশ করেন। পাঠকের দায়িত্ব হলো সেই উল্লেখিত বিষয়ের সাথে সংযোগ স্থাপন করা।",
    },
    examples: [
      {
        text: "The title of William Faulkner's novel 'The Sound and the Fury' is an allusion to a line from Shakespeare's Macbeth.",
        source: "William Faulkner, 'The Sound and the Fury'",
      },
    ],
    context: {
      en: "Allusions allow writers to convey complex ideas or emotions quickly by drawing on shared cultural knowledge.",
      bn: "অ্যালুশন লেখকদের সাধারণ সাংস্কৃতিক জ্ঞানের উপর ভিত্তি করে দ্রুত জটিল ধারণা বা আবেগ প্রকাশ করতে সাহায্য করে।",
    },
  },
  {
    id: "ambiguity",
    term: "Ambiguity",
    shortDescription:
      "The presence of two or more possible meanings in a single passage.",
    definition: {
      en: "A situation in which a word, phrase, statement, or idea can be understood in more than one way. In literature, ambiguity is often used deliberately to add richness and depth to a text, forcing readers to engage actively in interpretation.",
      bn: "দ্ব্যর্থতা হলো এমন একটি পরিস্থিতি যেখানে কোনো শব্দ, বাক্যাংশ বা ধারণার একাধিক অর্থ থাকতে পারে। সাহিত্যে এটি প্রায়শই লেখাকে আরও গভীর ও সমৃদ্ধ করতে ইচ্ছাকৃতভাবে ব্যবহৃত হয়, যা পাঠকদের ব্যাখ্যার জন্য ভাবতে বাধ্য করে।",
    },
    examples: [
      {
        text: "I shot an elephant in my pajamas. (Did the speaker shoot while wearing pajamas, or was the elephant wearing the pajamas?)",
        source: "Groucho Marx",
      },
    ],
    context: {
      en: "William Empson's 'Seven Types of Ambiguity' famously categorized how ambiguity functions as an essential element of poetic language, multiplying the resonance of a text.",
      bn: "উইলিয়াম এম্পসনের 'সেভেন টাইপস অফ অ্যাম্বিগুইটি' দেখিয়েছে কীভাবে দ্ব্যর্থতা কাব্যিক ভাষার একটি অপরিহার্য উপাদান হিসেবে কাজ করে এবং পাঠ্যের গভীরতা বৃদ্ধি করে।",
    },
  },
  {
    id: "anaphora",
    term: "Anaphora",
    shortDescription:
      "The repetition of a word or phrase at the beginning of successive clauses.",
    definition: {
      en: "Anaphora is a rhetorical device that consists of repeating a sequence of words at the beginnings of neighboring clauses, thereby lending them emphasis.",
      bn: "অ্যানাফোরা (Anaphora) হলো একটি আলংকারিক কৌশল যেখানে পরপর কয়েকটি বাক্য বা বাক্যাংশের শুরুতে একই শব্দ বা শব্দগুচ্ছের পুনরাবৃত্তি ঘটে, যা বক্তব্যকে আরও জোরদার করে।",
    },
    examples: [
      {
        text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...",
        source: "Charles Dickens, 'A Tale of Two Cities'",
      },
    ],
    context: {
      en: "Frequently used in poetry and speeches to create a driving rhythm and strong emotional effect.",
      bn: "কবিতা এবং ভাষণে একটি ছন্দময় গতি এবং শক্তিশালী আবেগময় প্রভাব তৈরি করতে এটি প্রায়শই ব্যবহৃত হয়।",
    },
  },
  {
    id: "antagonist",
    term: "Antagonist",
    shortDescription:
      "A character or force in conflict with the main character (protagonist).",
    definition: {
      en: "An antagonist is a character, group of characters, or other force that presents an obstacle or is in direct conflict with the protagonist.",
      bn: "অ্যান্টাগনিস্ট (Antagonist) বা খলনায়ক/প্রতিপক্ষ হলো এমন একটি চরিত্র, চরিত্রের দল বা অন্য কোনো শক্তি যা প্রধান চরিত্র বা প্রোটাগনিস্টের পথে বাধা সৃষ্টি করে বা তার সাথে সরাসরি সংঘাতে লিপ্ত হয়।",
    },
    examples: [
      {
        text: "Iago manipulates Othello into jealousy and murder, acting as the primary antagonist of the play.",
        source: "William Shakespeare, 'Othello'",
      },
    ],
    context: {
      en: "Essential for driving the plot forward by creating conflict that the protagonist must overcome.",
      bn: "প্রধান চরিত্রকে যে সংঘাত অতিক্রম করতে হয় তা তৈরি করে গল্পের প্লটকে এগিয়ে নিয়ে যাওয়ার জন্য এটি অপরিহার্য।",
    },
    oppositeTerms: [
      {
        id: "protagonist",
        term: "Protagonist",
      },
    ],
  },
  {
    id: "anthropomorphism",
    term: "Anthropomorphism",
    shortDescription:
      "The attribution of human traits, emotions, or intentions to non-human entities.",
    definition: {
      en: "Anthropomorphism is the attribution of human characteristics, emotions, and behaviors to animals or other non-human things, portraying them as if they are human.",
      bn: "অ্যানথ্রোপোমরফিজম (Anthropomorphism) হলো প্রাণী বা অন্যান্য অ-মানবীয় বস্তুতে মানবীয় বৈশিষ্ট্য, আবেগ এবং আচরণের আরোপ, তাদেরকে মানুষের মতো করে তুলে ধরা।",
    },
    examples: [
      {
        text: "The animals in the farm take over and run it themselves, exhibiting human political behaviors.",
        source: "George Orwell, 'Animal Farm'",
      },
    ],
    context: {
      en: "Often used in fables and allegories to critique human society safely or to make abstract concepts more relatable.",
      bn: "প্রায়শই উপকথা এবং রূপক কাহিনীতে মানব সমাজকে নিরাপদে সমালোচনা করতে বা বিমূর্ত ধারণাগুলোকে আরও বোধগম্য করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "personification",
        term: "Personification",
      },
    ],
  },
  {
    id: "anti-hero",
    term: "Anti-hero",
    shortDescription:
      "A central character lacking conventional heroic qualities.",
    definition: {
      en: "A protagonist or main character in a narrative who lacks traditional heroic qualities and attributes, such as idealism, courage, and morality. Anti-heroes often possess flaws, questionable morals, and self-interest, making them more realistic or relatable.",
      bn: "অ্যান্টি-হিরো বা প্রতিনায়ক হলো গল্পের এমন একজন কেন্দ্রীয় চরিত্র যার মধ্যে প্রথাগত নায়কসুলভ গুণাবলী (যেমন আদর্শবাদ, সাহস এবং নৈতিকতা) থাকে না। তারা প্রায়শই ত্রুটিপূর্ণ এবং স্বার্থপর হয়, যা তাদের আরও বাস্তবসম্মত করে তোলে।",
    },
    examples: [
      {
        text: "Jay Gatsby, who is deeply flawed, involved in organized crime, and blindly obsessed with a past romance.",
        source: "F. Scott Fitzgerald, 'The Great Gatsby'",
      },
    ],
    context: {
      en: "Gained immense popularity in modern and postmodern literature and media, reflecting a shift towards moral ambiguity and a rejection of black-and-white archetypes.",
      bn: "আধুনিক ও উত্তর-আধুনিক সাহিত্যে এটি ব্যাপক জনপ্রিয়তা লাভ করেছে, যা নৈতিক অস্পষ্টতার দিকে পরিবর্তন এবং সাদাকালো ভালো-মন্দের ধারণা প্রত্যাখ্যান করার প্রতিফলন।",
    },
    oppositeTerms: [
      {
        id: "hero",
        term: "Hero",
      },
    ],
  },
  {
    id: "anticlimax",
    term: "Anticlimax",
    shortDescription:
      "A disappointing end to an exciting or impressive series of events.",
    definition: {
      en: "A rhetorical device involving a sudden shift from a serious, elevated, or significant tone to a trivial, ridiculous, or disappointing one. It creates a deflation of expectation, often for comedic or satirical effect.",
      bn: "অ্যান্টিক্লাইম্যাক্স হলো এমন একটি পরিস্থিতি যেখানে একটি গুরুগম্ভীর বা উচ্চাকাঙ্ক্ষী প্রত্যাশা থেকে হঠাৎ একটি তুচ্ছ, হাস্যকর বা হতাশাজনক পরিস্থিতিতে পতন ঘটে। এটি প্রায়শই কমেডি বা ব্যঙ্গের জন্য ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "Here thou, great Anna! whom three realms obey, / Dost sometimes counsel take—and sometimes tea.",
        source: "Alexander Pope, 'The Rape of the Lock'",
      },
    ],
    context: {
      en: "Frequently used in mock-heroic literature to satirize subjects by treating trivial matters with grand, epic language, only to reveal their true insignificance.",
      bn: "মক-হিরোইক বা ব্যঙ্গাত্মক সাহিত্যে এটি বেশি ব্যবহৃত হয়, যেখানে তুচ্ছ বিষয়কে মহাকাব্যিক ভাষায় বর্ণনা করে শেষমেশ তার প্রকৃত তুচ্ছতা প্রকাশ করা হয়।",
    },
    similarTerms: [
      {
        id: "bathos",
        term: "Bathos",
      },
    ],
    oppositeTerms: [
      {
        id: "climax",
        term: "Climax",
      },
    ],
  },
  {
    id: "aphorism",
    term: "Aphorism",
    shortDescription:
      "A concise, memorable statement of a general truth or principle.",
    definition: {
      en: "An aphorism is a brief, pithy statement expressing a general truth or wise observation about life. It is often characterized by its memorable phrasing and succinctness, conveying complex ideas in a few words.",
      bn: "অ্যাফোরিজম বা প্রবচন হলো একটি সংক্ষিপ্ত, স্মরণীয় উক্তি যা একটি সাধারণ সত্য বা নীতি প্রকাশ করে। এটি জীবনের কোনো গভীর পর্যবেক্ষণকে অল্প কথায় ও আকর্ষণীয় ভঙ্গিতে তুলে ধরে।",
    },
    examples: [
      {
        text: "To err is human, to forgive divine.",
        source: "Alexander Pope, 'An Essay on Criticism'",
      },
      {
        text: "Fools rush in where angels fear to tread.",
        source: "Alexander Pope, 'An Essay on Criticism'",
      },
    ],
    context: {
      en: "Used in literature to deliver moral or philosophical insights concisely, making them memorable for the reader.",
      bn: "সাহিত্যে নৈতিক বা দার্শনিক অন্তর্দৃষ্টি সংক্ষেপে তুলে ধরতে ব্যবহৃত হয়, যা পাঠকের মনে দীর্ঘস্থায়ী ছাপ ফেলে।",
    },
    similarTerms: [
      {
        id: "epigram",
        term: "Epigram",
      },
      {
        id: "proverb",
        term: "Proverb",
      },
      {
        id: "maxim",
        term: "Maxim",
      },
    ],
  },
  {
    id: "aposiopesis",
    term: "Aposiopesis",
    shortDescription: "Breaking off suddenly in the middle of speaking.",
    definition: {
      en: "A rhetorical device in which a sentence is purposefully left incomplete or cut off. The omission is usually driven by a surge of intense emotion—such as anger, fear, or excitement—leaving the audience to imagine the unspoken conclusion.",
      bn: "অ্যাপোসিওপেসিস হলো এমন একটি অলংকার যেখানে আবেগের আতিশয্যে (যেমন রাগ, ভয় বা উত্তেজনা) বক্তা হঠাৎ বাক্যের মাঝখানে থেমে যান এবং বাক্যটি অসম্পূর্ণ থেকে যায়।",
    },
    examples: [
      {
        text: "I will have such revenges on you both, / That all the world shall—I will do such things, / What they are, yet I know not...",
        source: "William Shakespeare, 'King Lear'",
      },
    ],
    context: {
      en: "Employed to convey an emotional state so overwhelming that it defies language, forcing the reader or listener into an active role to fill the silence.",
      bn: "এটি ব্যবহৃত হয় এমন একটি আবেগপূর্ণ অবস্থা বোঝাতে যা ভাষায় প্রকাশ করা সম্ভব নয়। এটি শ্রোতা বা পাঠককে নীরবতার শূন্যস্থান পূরণ করতে বাধ্য করে।",
    },
  },
  {
    id: "apostrophe",
    term: "Apostrophe",
    shortDescription:
      "A figure of speech in which a speaker directly addresses an absent person, an abstract concept, or an inanimate object.",
    definition: {
      en: "Apostrophe is a rhetorical device where the speaker abruptly stops addressing the general audience and directs their speech to an absent or dead person, an abstract quality (like love or death), or an inanimate entity as if it were present and capable of responding.",
      bn: "অ্যাপোস্ট্রফি বা পরোক্ষ সম্বোধন হলো এমন একটি অলংকার যেখানে বক্তা কোনো অনুপস্থিত বা মৃত ব্যক্তি, বিমূর্ত ধারণা বা জড় বস্তুকে এমনভাবে সম্বোধন করেন যেন তারা উপস্থিত এবং উত্তর দিতে সক্ষম।",
    },
    examples: [
      {
        text: "O Romeo, Romeo! wherefore art thou Romeo?",
        source: "William Shakespeare, 'Romeo and Juliet'",
      },
      {
        text: "Death, be not proud, though some have called thee / Mighty and dreadful...",
        source: "John Donne, 'Holy Sonnet X'",
      },
    ],
    context: {
      en: "Employed to express intense emotion, create a dramatic effect, or highlight the significance of the addressed entity.",
      bn: "তীব্র আবেগ প্রকাশ করতে, নাটকীয় প্রভাব তৈরি করতে বা সম্বোধন করা বস্তুর গুরুত্ব তুলে ধরতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "personification",
        term: "Personification",
      },
      {
        id: "soliloquy",
        term: "Soliloquy",
      },
    ],
  },
  {
    id: "archetype",
    term: "Archetype",
    shortDescription:
      "A universally recognized symbol, character type, plot, or theme that recurs across cultures and literature.",
    definition: {
      en: "An archetype is a fundamental, recurring prototype or pattern of human behavior, character, situation, or symbol that transcends time and culture. Derived largely from Jungian psychology, it represents universal experiences found in myths, dreams, and literature.",
      bn: "আর্কিটাইপ বা আদিরূপ হলো একটি সর্বজনীন প্রতীক, চরিত্রের ধরন বা কাহিনির কাঠামো যা বিভিন্ন সংস্কৃতি ও সাহিত্যে বারবার ফিরে আসে। এটি মানব আচরণের এমন কিছু মৌলিক ধরনকে উপস্থাপন করে যা সব যুগে ও সব স্থানে পরিচিত।",
    },
    examples: [
      {
        text: "The Hero's Journey (a common archetypal plot).",
        source:
          "Found in works from Homer's 'The Odyssey' to modern fiction like 'Star Wars'",
      },
      {
        text: "The Mentor (character archetype).",
        source:
          "Tiresias in 'The Odyssey' or Gandalf in J.R.R. Tolkien's 'The Lord of the Rings'",
      },
    ],
    context: {
      en: "Archetypes resonate deeply with readers because they tap into shared, collective unconsciousness, making narratives universally understandable.",
      bn: "আর্কিটাইপগুলো পাঠকের মনে গভীর রেখাপাত করে কারণ এগুলো মানুষের সমষ্টিগত অবচেতনের সাথে যুক্ত, যার ফলে গল্পগুলো সর্বজনীনভাবে বোধগম্য হয়।",
    },
    similarTerms: [
      {
        id: "motif",
        term: "Motif",
      },
      {
        id: "cliche",
        term: "Cliché",
      },
    ],
  },
  {
    id: "aside",
    term: "Aside",
    shortDescription:
      "A dramatic device in which a character speaks to the audience.",
    definition: {
      en: "A dramatic device in which a character speaks directly to the audience or to themselves, revealing their inner thoughts, feelings, or intentions, while the other characters on stage are conventionally unable to hear them. It creates a sense of intimacy and complicity between the character and the audience.",
      bn: "স্বগতোক্তি বা একপাশে বলা কথা হলো একটি নাট্য কৌশল যেখানে কোনো চরিত্র দর্শকদের উদ্দেশ্যে বা নিজের মনে কিছু বলে। মঞ্চে উপস্থিত অন্যান্য চরিত্ররা এটি শুনতে পায় না বলে ধরে নেওয়া হয়। এর মাধ্যমে চরিত্রের গোপন চিন্তা বা উদ্দেশ্য দর্শকদের কাছে প্রকাশ করা হয়।",
    },
    examples: [
      {
        text: "A little more than kin, and less than kind.",
        source: "William Shakespeare, 'Hamlet' (Act 1, Scene 2)",
      },
    ],
    context: {
      en: "Asides are widely used in plays to build irony, provide exposition, or allow characters to comment on the unfolding action without disrupting the narrative flow.",
      bn: "নাটকে স্বগতোক্তি ব্যবহার করে দর্শকদের কাছে গোপন তথ্য পৌঁছে দেওয়া হয়, যা নাটকের কাহিনিতে এক ধরনের নাটকীয় পরিহাস বা আইরনি তৈরি করে।",
    },
    similarTerms: [
      {
        id: "soliloquy",
        term: "Soliloquy",
      },
      {
        id: "monologue",
        term: "Monologue",
      },
    ],
  },
  {
    id: "assonance",
    term: "Assonance",
    shortDescription: "The repetition of vowel sounds within nearby words.",
    definition: {
      en: "Assonance is a literary device in which the repetition of similar vowel sounds takes place in two or more words in proximity to each other within a line of poetry or prose.",
      bn: "অ্যাসোনান্স (Assonance) বা স্বরানুপ্রাস হলো এমন একটি আলংকারিক কৌশল যেখানে কবিতা বা গদ্যের একটি লাইনে কাছাকাছি থাকা দুই বা ততোধিক শব্দের মধ্যে একই স্বরধ্বনির পুনরাবৃত্তি ঘটে।",
    },
    examples: [
      {
        text: "Thou still unravish'd bride of quietness, / Thou foster-child of silence and slow time",
        source: "John Keats, 'Ode on a Grecian Urn'",
      },
    ],
    context: {
      en: "Used to create internal rhyming, rhythm, and a specific mood or musicality in a text.",
      bn: "অন্ত্যমিল, ছন্দ এবং একটি নির্দিষ্ট মেজাজ বা সাঙ্গীতিকতা তৈরি করতে এটি ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "consonance",
        term: "Consonance",
      },
      {
        id: "alliteration",
        term: "Alliteration",
      },
    ],
  },
  {
    id: "asyndeton",
    term: "Asyndeton",
    shortDescription:
      "The omission or absence of a conjunction between parts of a sentence.",
    definition: {
      en: "A stylistic device used in literature and poetry to intentionally eliminate conjunctions (such as 'and', 'or', 'but') between the phrases and in the sentence, yet maintain grammatical accuracy. It helps to accelerate the rhythm of the passage.",
      bn: "অ্যাসিনডেটন হলো একটি শৈলীগত কৌশল যেখানে বাক্যাংশ বা শব্দের মধ্যে ইচ্ছাকৃতভাবে সংযোজক অব্যয় (যেমন 'এবং', 'বা') বর্জন করা হয়। এটি বর্ণনার গতি বৃদ্ধি করতে সাহায্য করে।",
    },
    examples: [
      {
        text: "I came, I saw, I conquered. (Veni, vidi, vici)",
        source: "Julius Caesar",
      },
    ],
    context: {
      en: "Creates a sense of rapid movement, urgency, or an overwhelming multiplicity of actions, making the text feel concise and impactful.",
      bn: "এটি বর্ণনায় একটি দ্রুত গতির অনুভূতি বা জরুরী অবস্থা তৈরি করে, যা বাক্যটিকে আরও সংক্ষিপ্ত এবং প্রভাবশালী করে তোলে।",
    },
    oppositeTerms: [
      {
        id: "polysyndeton",
        term: "Polysyndeton",
      },
    ],
  },
  {
    id: "ballad",
    term: "Ballad",
    shortDescription: "A narrative poem originally meant to be sung.",
    definition: {
      en: "A ballad is a type of poem that tells a story and was traditionally set to music. They usually have a simple rhythm, consistent rhyme scheme, and often include a refrain.",
      bn: "ব্যালাড (Ballad) বা গীতিকবিতা হলো এক ধরনের আখ্যানমূলক কবিতা যা ঐতিহাসিকভাবে গাওয়ার জন্য রচিত হতো। এগুলোতে সাধারণত একটি সরল ছন্দ, সুনির্দিষ্ট অন্ত্যমিল এবং প্রায়ই একটি ধুয়া (refrain) থাকে।",
    },
    examples: [
      {
        text: "Water, water, every where, / And all the boards did shrink; / Water, water, every where, / Nor any drop to drink.",
        source: "Samuel Taylor Coleridge, 'The Rime of the Ancient Mariner'",
      },
    ],
    context: {
      en: "Historically used in oral tradition to pass down stories of romance, tragedy, or heroic deeds.",
      bn: "ঐতিহাসিকভাবে রোমান্স, ট্র্যাজেডি বা বীরত্বপূর্ণ কাজের গল্পগুলো মুখে মুখে ছড়িয়ে দেওয়ার জন্য ব্যবহৃত হতো।",
    },
  },
  {
    id: "bathos",
    term: "Bathos",
    shortDescription:
      "An abrupt, often ludicrous transition from the elevated to the ordinary or trivial.",
    definition: {
      en: "Bathos occurs when a writer, striving for the sublime or passionate, fails and plunges into the absurd or trivial. It can be unintentional, resulting in a ridiculous anticlimax, or used deliberately for comedic or satiric effect.",
      bn: "ব্যাথোস হলো উচ্চাঙ্গের বা গাম্ভীর্যপূর্ণ অবস্থা থেকে হঠাৎ করে সাধারণ বা তুচ্ছ অবস্থায় পতন। এটি অনিচ্ছাকৃত হতে পারে যা হাস্যকর মনে হয়, অথবা ব্যঙ্গ বা কৌতুক সৃষ্টির জন্য ইচ্ছাকৃতভাবে ব্যবহৃত হতে পারে।",
    },
    examples: [
      {
        text: "Advance the fringed curtains of thy eyes, / And tell me who comes yonder.",
        source: "Alexander Pope satirizing this effect in 'Peri Bathous'",
      },
      {
        text: "He spent his final hour of life doing what he loved most: arguing with the customer service bot.",
        source: "Modern comedic usage",
      },
    ],
    context: {
      en: "Used to mock overly sentimental or grandiose writing, or to deflate tension through sudden absurdity.",
      bn: "অতিরিক্ত আবেগপ্রবণ বা আড়ম্বরপূর্ণ লেখাকে ব্যঙ্গ করতে, অথবা হঠাৎ অর্থহীনতার মাধ্যমে উত্তেজনা প্রশমিত করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "anticlimax",
        term: "Anticlimax",
      },
      {
        id: "burlesque",
        term: "Burlesque",
      },
    ],
    oppositeTerms: [
      {
        id: "climax",
        term: "Climax",
      },
      {
        id: "pathos",
        term: "Pathos",
      },
    ],
  },
  {
    id: "bildungsroman",
    term: "Bildungsroman",
    shortDescription:
      "A coming-of-age story focusing on the psychological and moral growth of the protagonist.",
    definition: {
      en: "A Bildungsroman is a literary genre that focuses on the psychological and moral growth of its main character from their youth to adulthood. Character change is extremely important.",
      bn: "বিল্ডুংস্রোমান (Bildungsroman) হলো একটি সাহিত্যিক ধারা যা প্রধান চরিত্রের কৈশোর থেকে প্রাপ্তবয়স্ক হওয়া পর্যন্ত মানসিক এবং নৈতিক বিকাশের উপর আলোকপাত করে। এতে চরিত্রের পরিবর্তন অত্যন্ত গুরুত্বপূর্ণ।",
    },
    examples: [
      {
        text: "The novel traces the life of Pip from his early childhood in Kent to his adulthood and realization of his 'great expectations'.",
        source: "Charles Dickens, 'Great Expectations'",
      },
    ],
    context: {
      en: "Allows authors to explore the conflict between the individual's desires and society's expectations during the journey to maturity.",
      bn: "পরিপক্কতার পথে যাত্রার সময় ব্যক্তির আকাঙ্ক্ষা এবং সমাজের প্রত্যাশার মধ্যে যে সংঘাত দেখা দেয়, লেখকদের তা অন্বেষণ করার সুযোগ করে দেয়।",
    },
  },
  {
    id: "blank-verse",
    term: "Blank Verse",
    shortDescription:
      "Unrhymed poetry written in a specific meter, almost always iambic pentameter.",
    definition: {
      en: "Blank verse is a poetic form that consists of unrhymed lines written in a regular metrical pattern, usually iambic pentameter (ten syllables per line, with an unstressed-stressed rhythm). Because it lacks a rhyme scheme, it closely resembles the natural rhythm of English speech, making it highly versatile for dramatic dialogues and long narrative poems. It allows the poet to maintain musicality without the constraints of rhyming.",
      bn: "ব্ল্যাংক ভার্স বা অমিত্রাক্ষর ছন্দ হলো এমন এক ধরণের কবিতা, যেখানে লাইনের শেষে কোনো অন্ত্যমিল (rhyme) থাকে না, কিন্তু একটি নির্দিষ্ট মিটার বা ছন্দ (সাধারণত iambic pentameter) কঠোরভাবে বজায় থাকে। অন্ত্যমিল না থাকার কারণে এটি সাধারণ মানুষের স্বাভাবিক কথাবার্তার মতো শোনায়, যার কারণে নাটকের সংলাপে এটি সবচেয়ে বেশি ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "Of Man's First Disobedience, and the Fruit / Of that Forbidden Tree, whose mortal taste / Brought Death into the World...",
        source: "Paradise Lost by John Milton",
      },
    ],
    context: {
      en: "Introduced to England by the Earl of Surrey in the 16th century. It became the standard medium for English drama, mastered by Shakespeare and later by Milton in his epics.",
      bn: "১৬শ শতাব্দীতে আর্ল অফ সারে এটি ইংল্যান্ডে পরিচিত করেন। পরবর্তীতে শেক্সপিয়র তার নাটকগুলোতে এবং মিলটন তার মহাকাব্যে এটি নিখুঁতভাবে ব্যবহার করে এটিকে ইংরেজি সাহিত্যের সবচেয়ে স্ট্যান্ডার্ড ফর্মে রূপ দেন।",
    },
  },
  {
    id: "bowdlerize",
    term: "Bowdlerize",
    shortDescription:
      "To remove material that is considered improper or offensive.",
    definition: {
      en: "To expurgate or remove material from a text that is considered vulgar, offensive, or otherwise objectionable, often resulting in a weakened or distorted version of the original work.",
      bn: "বাউডলারাইজ বলতে বোঝায় কোনো সাহিত্যকর্ম থেকে এমন অংশ বাদ দেওয়া যা অশ্লীল বা আপত্তিকর বলে বিবেচিত হয়। এর ফলে প্রায়শই মূল রচনার শক্তি কমে যায় বা বিকৃত হয়।",
    },
    examples: [
      {
        text: "The Family Shakespeare, an edition of Shakespeare's plays edited to remove words and expressions deemed unfit for women and children.",
        source: "Thomas Bowdler, 'The Family Shakespeare'",
      },
    ],
    context: {
      en: "Named after Thomas Bowdler, who notoriously published a 'cleaned-up' version of Shakespeare in 1818. Today, it is largely viewed negatively as an act of censorship that betrays the author's intent.",
      bn: "১৮১৮ সালে শেক্সপিয়রের নাটকের 'পরিশোধিত' সংস্করণ প্রকাশকারী টমাস বাউডলারের নামানুসারে এই শব্দের উৎপত্তি। বর্তমানে এটিকে নেতিবাচক সেন্সরশিপ হিসেবেই দেখা হয় যা লেখকের মূল উদ্দেশ্যকে ক্ষুণ্ন করে।",
    },
  },
  {
    id: "burlesque",
    term: "Burlesque",
    shortDescription:
      "A comedic exaggeration or imitation of a serious work, style, or genre.",
    definition: {
      en: "Burlesque is a form of satire that relies on ridiculous exaggeration and distortion. It achieves its comedic effect by treating a trivial subject with elevated dignity or a serious subject with low, vulgar mockery, creating a stark contrast between subject matter and style.",
      bn: "বার্লেস্ক বা প্রহসনমূলক ব্যঙ্গ হলো কোনো সিরিয়াস কাজ, শৈলী বা ঘরানার একটি হাস্যকর অতিরঞ্জন বা অনুকরণ। এটি তুচ্ছ বিষয়কে অত্যন্ত গাম্ভীর্যের সাথে অথবা গুরুতর বিষয়কে স্থূল ও কদর্যভাবে উপস্থাপন করে হাসির উদ্রেক করে।",
    },
    examples: [
      {
        text: "The Rape of the Lock (treating the cutting of a lock of hair as an epic battle).",
        source: "Alexander Pope",
      },
      {
        text: "Don Quixote (a burlesque of romantic knight-errantry).",
        source: "Miguel de Cervantes",
      },
    ],
    context: {
      en: "Employed to critique or poke fun at societal norms, literary conventions, or specific prominent works.",
      bn: "সামাজিক রীতিনীতি, সাহিত্যিক প্রথা বা নির্দিষ্ট কোনো বিখ্যাত রচনাকে সমালোচনা বা বিদ্রূপ করার জন্য ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "parody",
        term: "Parody",
      },
      {
        id: "satire",
        term: "Satire",
      },
      {
        id: "travesty",
        term: "Travesty",
      },
    ],
  },
  {
    id: "cacophony",
    term: "Cacophony",
    shortDescription: "A harsh, discordant mixture of sounds.",
    definition: {
      en: "Cacophony in literature refers to the use of words with sharp, harsh, hissing, and unmelodious sounds – primarily those of consonants – to achieve desired results.",
      bn: "ক্যাকোফোনি (Cacophony) বা শ্রুতিকটুতা হলো সাহিত্যে তীক্ষ্ণ, কর্কশ এবং সুমধুর নয় এমন শব্দের ব্যবহার—বিশেষত ব্যঞ্জনবর্ণের—যা একটি নির্দিষ্ট প্রভাব তৈরি করতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "'Twas brillig, and the slithy toves / Did gyre and gimble in the wabe:",
        source: "Lewis Carroll, 'Jabberwocky'",
      },
    ],
    context: {
      en: "Often used to describe a chaotic or discordant situation, emphasizing the harshness of the subject matter.",
      bn: "প্রায়শই একটি বিশৃঙ্খল বা অসংলগ্ন পরিস্থিতি বর্ণনা করতে ব্যবহৃত হয়, যা আলোচ্য বিষয়ের কঠোরতাকে জোর দেয়।",
    },
    oppositeTerms: [
      {
        id: "euphony",
        term: "Euphony",
      },
    ],
  },
  {
    id: "caesura",
    term: "Caesura",
    shortDescription: "A pause near the middle of a line of poetry.",
    definition: {
      en: "A caesura is a rhythmical pause in a poetic line or a sentence. It can occur in the middle, beginning, or end of a line, often marked by punctuation like a comma, dash, or period.",
      bn: "সিজ্যুরা (Caesura) বা যতি হলো কবিতার লাইনে বা বাক্যে একটি ছন্দময় বিরতি। এটি একটি লাইনের মাঝখানে, শুরুতে বা শেষে ঘটতে পারে, প্রায়শই কমা, ড্যাশ বা যতিচিহ্নের মাধ্যমে চিহ্নিত করা হয়।",
    },
    examples: [
      {
        text: "To be, or not to be — that is the question.",
        source: "William Shakespeare, 'Hamlet'",
      },
    ],
    context: {
      en: "Creates variations in rhythm, breaking up monotony and allowing the reader to pause and reflect on what has been said.",
      bn: "ছন্দে বৈচিত্র্য তৈরি করে, একঘেয়েমি ভাঙে এবং পাঠককে বিরতি দিয়ে যা বলা হয়েছে তা নিয়ে চিন্তা করার সুযোগ দেয়।",
    },
  },
  {
    id: "carpe-diem",
    term: "Carpe Diem",
    shortDescription:
      "A Latin phrase meaning 'seize the day', urging people to live in the present.",
    definition: {
      en: "A literary motif meaning 'seize the day' in Latin. It expresses the idea that one should enjoy life while one can, as time is fleeting and death is inevitable.",
      bn: "কার্পে ডিয়েম একটি ল্যাটিন শব্দগুচ্ছ যার অর্থ 'আজকের দিনটিকে কাজে লাগাও' বা 'বর্তমানকে উপভোগ করো'। এটি এই ধারণা প্রকাশ করে যে সময় দ্রুত বয়ে যাচ্ছে এবং মৃত্যু অনিবার্য, তাই জীবনকে উপভোগ করা উচিত।",
    },
    examples: [
      {
        text: "Gather ye rosebuds while ye may, / Old Time is still a-flying;",
        source: "Robert Herrick, 'To the Virgins, to Make Much of Time'",
      },
    ],
    context: {
      en: "A common theme in Renaissance and Cavalier poetry, often used in seduction poems to persuade a lover to yield before youth and beauty fade.",
      bn: "রেনেসাঁ এবং ক্যাভালিয়ার কবিতায় এটি একটি সাধারণ থিম ছিল, যা প্রায়শই যৌবন ও সৌন্দর্য ম্লান হওয়ার আগে ভালোবাসায় সাড়া দেওয়ার আহ্বান হিসেবে ব্যবহৃত হতো।",
    },
    similarTerms: [
      {
        id: "memento-mori",
        term: "Memento Mori",
      },
    ],
  },
  {
    id: "catharsis",
    term: "Catharsis",
    shortDescription:
      "The emotional discharge or purification achieved through experiencing art, especially tragedy.",
    definition: {
      en: "Catharsis is a psychological and literary concept that describes the release of intense, repressed emotions—specifically pity and fear—brought about by viewing a tragedy. When an audience witnesses the downfall of a tragic hero, they project their own anxieties onto the characters. The resolution of the play triggers a purging of these emotions, leaving the audience feeling cleansed, relieved, and spiritually renewed.",
      bn: "ক্যাথারসিস হলো আর্ট বা শিল্পের (বিশেষ করে ট্র্যাজেডি) মাধ্যমে দর্শকের মনের জমে থাকা আবেগের (প্রধানত করুণা ও ভীতি) মুক্তি বা পরিশুদ্ধি ঘটানো। ট্র্যাজেডিতে নায়কের পতন দেখার সময় দর্শক তার নিজের জীবনের ভয় ও দুঃখকে সেই চরিত্রের সাথে মিলিয়ে ফেলে। নাটক শেষে দর্শকের মন এক অদ্ভুত প্রশান্তি লাভ করে, একেই ক্যাথারসিস বলা হয়।",
    },
    examples: [
      {
        text: "The overwhelming sense of pity and relief the audience feels when Romeo and Juliet tragically take their own lives, finally ending the senseless family feud.",
        source: "Romeo and Juliet by William Shakespeare",
      },
    ],
    context: {
      en: "Coined by the Greek philosopher Aristotle in his work 'Poetics' to explain the fundamental purpose and therapeutic effect of tragic theater.",
      bn: "গ্রিক দার্শনিক অ্যারিস্টটল তার বিখ্যাত বই 'Poetics'-এ ট্র্যাজেডির মূল উদ্দেশ্য এবং মনস্তাত্ত্বিক প্রভাব বোঝাতে প্রথমবারের মতো এই শব্দটি ব্যবহার করেন।",
    },
  },
  {
    id: "characterization",
    term: "Characterization",
    shortDescription:
      "The step-by-step process wherein an author introduces and then describes a character.",
    definition: {
      en: "Characterization is the process by which the writer reveals the personality of a character. It is revealed through direct characterization and indirect characterization.",
      bn: "ক্যারেক্টারাইজেশন (Characterization) বা চরিত্রাঙ্কন হলো এমন একটি প্রক্রিয়া যার মাধ্যমে লেখক কোনো চরিত্রের ব্যক্তিত্ব প্রকাশ করেন। এটি প্রত্যক্ষ এবং পরোক্ষ উভয়ভাবেই প্রকাশ করা যেতে পারে।",
    },
    examples: [
      {
        text: "Fitzgerald characterizes Gatsby through the rumors surrounding him before he is even introduced, and later through Gatsby's own actions and mannerisms.",
        source: "F. Scott Fitzgerald, 'The Great Gatsby'",
      },
    ],
    context: {
      en: "Crucial for making characters believable and relatable, driving the plot and exploring the novel's themes.",
      bn: "চরিত্রগুলোকে বিশ্বাসযোগ্য এবং প্রাসঙ্গিক করে তুলতে, প্লটকে এগিয়ে নিয়ে যেতে এবং উপন্যাসের থিমগুলো অন্বেষণ করতে এটি অত্যন্ত গুরুত্বপূর্ণ।",
    },
  },
  {
    id: "chiasmus",
    term: "Chiasmus",
    shortDescription:
      "A rhetorical device where words or concepts are repeated in reverse order.",
    definition: {
      en: "Chiasmus is a figure of speech in which the grammar of one phrase is inverted in the following phrase, such that two key concepts from the original phrase reappear in the second phrase in inverted order (A B B A structure).",
      bn: "কায়াজমাস বা পদবিন্যাস-বিপর্যয় হলো এমন একটি আলংকারিক কৌশল যেখানে একটি বাক্যাংশের শব্দ বা ধারণাগুলো পরবর্তী বাক্যাংশে উল্টো ক্রমানুসারে পুনরাবৃত্তি করা হয় (A B B A কাঠামো)।",
    },
    examples: [
      {
        text: "Fair is foul, and foul is fair.",
        source: "William Shakespeare, 'Macbeth'",
      },
      {
        text: "Ask not what your country can do for you — ask what you can do for your country.",
        source: "John F. Kennedy, Inaugural Address",
      },
    ],
    context: {
      en: "Used to create a stylized, memorable phrasing that emphasizes a contrast or balance in ideas.",
      bn: "ধারণার বৈপরীত্য বা ভারসাম্যকে জোর দিয়ে একটি শৈল্পিক ও স্মরণীয় বাক্য গঠন তৈরি করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "antimetabole",
        term: "Antimetabole",
      },
    ],
  },
  {
    id: "chorus",
    term: "Chorus",
    shortDescription:
      "A group of performers who comment on the main action, typically speaking and moving together.",
    definition: {
      en: "In classical Greek drama, a group of actors who described and commented upon the main action of a play with song, dance, and recitation. They served as a bridge between the actors and the audience, providing background and moral context.",
      bn: "প্রাচীন গ্রিক নাটকে কোরাস বা সমবেত সঙ্গীতদল বলতে বোঝায় গায়ক ও নর্তকদল যারা নাটকের মূল ঘটনা সম্পর্কে মন্তব্য করত। তারা অভিনেতা ও দর্শকদের মধ্যে সেতুবন্ধন হিসেবে কাজ করত।",
    },
    examples: [
      {
        text: "The Chorus of Theban elders who advise Oedipus and reflect on the tragic events unfolding in the city.",
        source: "Sophocles, 'Oedipus Rex'",
      },
    ],
    context: {
      en: "Evolved from ancient religious rituals. In later literature, the 'chorus' can sometimes refer to a single character (like the narrator in Shakespeare's Henry V) who serves a similar framing function.",
      bn: "এটি প্রাচীন ধর্মীয় আচার থেকে উদ্ভূত হয়েছিল। পরবর্তী সাহিত্যে কখনও কখনও একজন একক চরিত্রও (যেমন শেক্সপিয়রের হেনরি ফাইভের বর্ণনাকারী) কোরাস হিসেবে কাজ করতে পারে।",
    },
  },
  {
    id: "cinquain",
    term: "Cinquain",
    shortDescription: "A five-line stanza or poem.",
    definition: {
      en: "A poem or stanza composed of five lines. The American cinquain, developed by Adelaide Crapsey, follows a strict syllabic structure of 2, 4, 6, 8, and 2 syllables per line, deeply influenced by Japanese haiku and tanka.",
      bn: "সিনকুইন হলো পাঁচ লাইনের একটি কবিতা বা স্তবক। অ্যাডিলেড ক্র্যাপসি কর্তৃক প্রবর্তিত আমেরিকান সিনকুইন একটি নির্দিষ্ট সিলেবল বা মাত্রাবৃত্ত গঠন (২, ৪, ৬, ৮ এবং ২ সিলেবল) মেনে চলে।",
    },
    examples: [
      {
        text: "Listen... / With faint dry sound, / Like steps of passing ghosts, / The leaves, frost-crisp'd, break from the trees / And fall.",
        source: "Adelaide Crapsey, 'November Night'",
      },
    ],
    context: {
      en: "Favored by early 20th-century Imagist poets for its conciseness and its ability to capture a single, vivid image or emotion swiftly.",
      bn: "এটি ২০শ শতাব্দীর শুরুর দিকের ইমেজিস্ট বা চিত্রকল্পবাদী কবিদের কাছে জনপ্রিয় ছিল কারণ এটি খুব দ্রুত একটি উজ্জ্বল চিত্র বা আবেগ ফুটিয়ে তুলতে পারে।",
    },
  },
  {
    id: "cliche",
    term: "Cliché",
    shortDescription:
      "An overused phrase or idea that has lost its original impact.",
    definition: {
      en: "An expression, idea, or element of an artistic work that has been overused to the point of losing its original meaning, novelty, or effect. Clichés are generally considered signs of poor writing, though they can sometimes be used deliberately for comic or ironic effect.",
      bn: "ক্লিচে বা বহুল ব্যবহৃত উক্তি হলো এমন শব্দ বা ধারণা যা অতিরিক্ত ব্যবহারের ফলে তার মূল অর্থ, অভিনবত্ব বা আকর্ষণ হারিয়ে ফেলেছে। এটি সাধারণত দুর্বল লেখনীর লক্ষণ হিসেবে বিবেচিত হয়।",
    },
    examples: [
      {
        text: "Phrases like 'fit as a fiddle', 'time will tell', or 'brave as a lion'.",
        source: "Common Language",
      },
    ],
    context: {
      en: "Writers are advised to avoid clichés as they suggest a lack of original thought. However, Postmodern writers sometimes use them knowingly to critique linguistic conventions.",
      bn: "লেখকদের ক্লিচে এড়িয়ে চলার পরামর্শ দেওয়া হয় কারণ এটি মৌলিক চিন্তার অভাব নির্দেশ করে। তবে অনেক আধুনিক লেখক মাঝে মাঝে ভাষাগত প্রথাকে ব্যঙ্গ করতে এটি ব্যবহার করেন।",
    },
  },
  {
    id: "climax",
    term: "Climax",
    shortDescription: "The point of highest tension and drama in a narrative.",
    definition: {
      en: "The climax is the structural part of a plot where the conflict or tension hits the highest point. It is a decisive moment or a turning point in a storyline at which the rising action turns around into a falling action.",
      bn: "ক্লাইম্যাক্স (Climax) বা চরমাবস্থা হলো গল্পের এমন একটি অংশ যেখানে সংঘাত বা উত্তেজনা সর্বোচ্চ বিন্দুতে পৌঁছায়। এটি একটি কাহিনীর একটি নির্ধারক মুহূর্ত বা টার্নিং পয়েন্ট যেখানে উর্ধ্বমুখী ঘটনাগুলো নিম্নমুখী হতে শুরু করে।",
    },
    examples: [
      {
        text: "The duel between Hamlet and Laertes, ending in the deaths of the main characters, is the tragic climax of the play.",
        source: "William Shakespeare, 'Hamlet'",
      },
    ],
    context: {
      en: "The climax resolves the main conflict and delivers the emotional peak of the story.",
      bn: "ক্লাইম্যাক্স প্রধান সংঘাতের সমাধান করে এবং গল্পের আবেগগত চূড়া প্রদান করে।",
    },
  },
  {
    id: "colloquialism",
    term: "Colloquialism",
    shortDescription:
      "The use of informal, conversational words, phrases, or slang in writing.",
    definition: {
      en: "A colloquialism is an informal expression that is more appropriate in familiar conversation than in formal speech or writing. It includes slang, idioms, and region-specific vocabulary, giving writing a casual, realistic, and approachable tone.",
      bn: "কলোকিয়ালিজম বা চলিত ভাষারীতি হলো লেখায় অনানুষ্ঠানিক, কথোপকথনমূলক শব্দ বা শব্দগুচ্ছের ব্যবহার। এর মধ্যে স্ল্যাং, বাগধারা এবং অঞ্চলভিত্তিক শব্দভাণ্ডার অন্তর্ভুক্ত থাকে, যা লেখাকে একটি বাস্তবসম্মত ও অন্তরঙ্গ সুর দেয়।",
    },
    examples: [
      {
        text: "I didn't want to go back no more. I had stopped cussing, because the widow didn't like it; but now I took to it again because pap hadn't no objections.",
        source: "Mark Twain, 'The Adventures of Huckleberry Finn'",
      },
      {
        text: "Y'all gonna go crazy.",
        source: "J.D. Salinger, 'The Catcher in the Rye'",
      },
    ],
    context: {
      en: "Authors use colloquialisms to establish setting, build character authenticity, and bridge the gap between narrator and reader.",
      bn: "লেখকরা প্রেক্ষাপট তৈরি করতে, চরিত্রের বিশ্বাসযোগ্যতা বাড়াতে এবং কথক ও পাঠকের মধ্যে দূরত্ব কমাতে চলিত ভাষা ব্যবহার করেন।",
    },
    similarTerms: [
      {
        id: "slang",
        term: "Slang",
      },
      {
        id: "dialect",
        term: "Dialect",
      },
      {
        id: "vernacular",
        term: "Vernacular",
      },
    ],
  },
  {
    id: "comic-relief",
    term: "Comic Relief",
    shortDescription:
      "A humorous scene or character introduced into a serious work to relieve tension.",
    definition: {
      en: "The inclusion of a humorous character, scene, or witty dialogue in an otherwise serious or tragic work. It is used to temporarily relieve the audience's emotional tension and to provide a contrast that heightens the seriousness of the main narrative.",
      bn: "কমিক রিলিফ হলো কোনো গুরুগম্ভীর বা মর্মান্তিক পরিস্থিতির মধ্যে হাস্যরসাত্মক চরিত্র বা দৃশ্যের সংযোজন। এটি দর্শকদের মানসিক চাপ সাময়িকভাবে কমানোর জন্য ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "The drunken porter scene appearing immediately after the brutal murder of King Duncan.",
        source: "William Shakespeare, 'Macbeth'",
      },
    ],
    context: {
      en: "Masterfully employed by Shakespeare to modulate the pacing of a tragedy, giving the audience a momentary breath before plunging back into the tragic action.",
      bn: "শেক্সপিয়র তার ট্র্যাজেডিগুলোতে এটি চমৎকারভাবে ব্যবহার করেছেন, যাতে দর্শকরা পরবর্তী মর্মান্তিক ঘটনার আগে কিছুটা মানসিক প্রশান্তি পায়।",
    },
  },
  {
    id: "conceit",
    term: "Conceit",
    shortDescription:
      "An extended, elaborate, and highly unconventional metaphor.",
    definition: {
      en: "A conceit is a fanciful, extended metaphor that establishes a striking parallel between two vastly dissimilar things. In metaphysical poetry, conceits are intellectually complex and often span a large portion of a poem, demanding deep thought to unravel.",
      bn: "কনসিট বা প্রসারিত রূপক হলো একটি অত্যন্ত বিশদ এবং অপ্রচলিত রূপক, যা দুটি সম্পূর্ণ ভিন্ন জিনিসের মধ্যে একটি আশ্চর্যজনক মিল স্থাপন করে। মেটাফিজিক্যাল বা অধ্যাত্মবাদী কবিতায় এটি প্রায়শই ব্যবহৃত হয় এবং বুদ্ধিবৃত্তিকভাবে অত্যন্ত জটিল হয়।",
    },
    examples: [
      {
        text: "Comparing two separated lovers to the two legs of a drawing compass.",
        source: "John Donne, 'A Valediction: Forbidding Mourning'",
      },
      {
        text: "Comparing a flea that has bitten both lovers to a marriage bed and temple.",
        source: "John Donne, 'The Flea'",
      },
    ],
    context: {
      en: "Used prominently by 17th-century Metaphysical poets to demonstrate wit and to explore abstract ideas through logical and surprising imagery.",
      bn: "সপ্তদশ শতাব্দীর মেটাফিজিক্যাল কবিরা তাদের প্রখর বুদ্ধিমত্তা প্রদর্শন এবং যৌক্তিক ও আশ্চর্যজনক চিত্রের মাধ্যমে বিমূর্ত ধারণা অন্বেষণ করতে এটি ব্যাপকভাবে ব্যবহার করতেন।",
    },
    similarTerms: [
      {
        id: "extended-metaphor",
        term: "Extended Metaphor",
      },
      {
        id: "metaphor",
        term: "Metaphor",
      },
    ],
  },
  {
    id: "confessional-poetry",
    term: "Confessional Poetry",
    shortDescription:
      "Poetry that explicitly discusses the personal and often intimate life of the poet.",
    definition: {
      en: "A style of poetry that emerged in the United States during the late 1950s and early 1960s. It is characterized by highly subjective, personal, and often autobiographical subject matter, addressing themes like mental illness, sexuality, trauma, and family dysfunction.",
      bn: "স্বীকারোক্তিমূলক কবিতা হলো এমন এক ধরনের কবিতা যেখানে কবির ব্যক্তিগত জীবন, মানসিক স্বাস্থ্য, ট্রমা ও আবেগের সরাসরি প্রকাশ ঘটে। এটি ১৯৫০ ও ১৯৬০-এর দশকে আমেরিকায় জনপ্রিয় হয়।",
    },
    examples: [
      {
        text: "I have done it again. / One year in every ten / I manage it——",
        source: "Sylvia Plath, 'Lady Lazarus'",
      },
    ],
    context: {
      en: "Pioneered by poets like Robert Lowell, Sylvia Plath, and Anne Sexton, it broke social taboos by bringing intensely private experiences into public literary discourse.",
      bn: "রবার্ট লোয়েল, সিলভিয়া প্লাথ এবং অ্যান সেক্সটনের মতো কবিরা এটি শুরু করেছিলেন, যা অত্যন্ত ব্যক্তিগত অভিজ্ঞতাকে জনসমক্ষে এনে সামাজিক ট্যাবু ভেঙেছিল।",
    },
  },
  {
    id: "conflict",
    term: "Conflict",
    shortDescription: "A struggle between two opposing forces.",
    definition: {
      en: "Conflict is a literary element that involves a struggle between two opposing forces, usually a protagonist and an antagonist. It can be internal (within a character) or external (character vs. nature/society/another character).",
      bn: "কনফ্লিক্ট (Conflict) বা সংঘাত হলো একটি সাহিত্যিক উপাদান যা দুটি বিরোধী শক্তির মধ্যে সংগ্রামকে বোঝায়, সাধারণত প্রধান চরিত্র এবং প্রতিপক্ষের মধ্যে। এটি অভ্যন্তরীণ (চরিত্রের মধ্যে) বা বাহ্যিক (চরিত্র বনাম প্রকৃতি/সমাজ/অন্য চরিত্র) হতে পারে।",
    },
    examples: [
      {
        text: "Santiago's struggle against the giant marlin and the sharks represents a classic character vs. nature external conflict.",
        source: "Ernest Hemingway, 'The Old Man and the Sea'",
      },
    ],
    context: {
      en: "Conflict provides the central motivation for characters and drives the narrative forward.",
      bn: "সংঘাত চরিত্রগুলোর জন্য প্রধান অনুপ্রেরণা যোগায় এবং কাহিনীকে সামনের দিকে এগিয়ে নিয়ে যায়।",
    },
  },
  {
    id: "connotation",
    term: "Connotation",
    shortDescription:
      "The emotional or cultural associations connected to a word.",
    definition: {
      en: "Connotation refers to a meaning that is implied by a word apart from the thing which it describes explicitly. Words carry cultural and emotional associations or meanings, in addition to their literal meanings.",
      bn: "কনোটেশন (Connotation) বা ব্যঞ্জনা হলো এমন একটি অর্থ যা কোনো শব্দ তার আক্ষরিক অর্থের বাইরে গিয়ে প্রকাশ করে। শব্দের আক্ষরিক অর্থের পাশাপাশি এতে সাংস্কৃতিক এবং আবেগগত অর্থও জড়িয়ে থাকে।",
    },
    examples: [
      {
        text: "The word 'home' connotes warmth, comfort, and security, whereas 'house' is just a physical structure.",
        source: "Common Literary Usage",
      },
    ],
    context: {
      en: "Writers use connotation to create mood, reveal character intentions, or add depth to descriptions without explicitly stating them.",
      bn: "লেখকরা কনোটেশন ব্যবহার করে মেজাজ তৈরি করতে, চরিত্রের উদ্দেশ্য প্রকাশ করতে বা সরাসরি না বলেও বর্ণনায় গভীরতা যোগ করতে।",
    },
    oppositeTerms: [
      {
        id: "denotation",
        term: "Denotation",
      },
    ],
  },
  {
    id: "consonance",
    term: "Consonance",
    shortDescription:
      "Repetition of consonant sounds within or at the end of words.",
    definition: {
      en: "Consonance refers to repetitive sounds produced by consonants within a sentence or phrase. This repetition often takes place in quick succession, such as in 'pitter, patter'.",
      bn: "কনসোনান্স (Consonance) বা ব্যঞ্জনানুপ্রাস হলো কোনো বাক্য বা বাক্যাংশে ব্যঞ্জনধ্বনির পুনরাবৃত্তি। এই পুনরাবৃত্তি প্রায়শই দ্রুত ঘটে থাকে।",
    },
    examples: [
      {
        text: "And the silken, sad, uncertain rustling of each purple curtain",
        source: "Edgar Allan Poe, 'The Raven'",
      },
    ],
    context: {
      en: "Used to create a musical effect, emphasize particular words, or create an atmospheric mood.",
      bn: "সাঙ্গীতিক প্রভাব তৈরি করতে, নির্দিষ্ট শব্দের ওপর জোর দিতে বা একটি পরিবেশগত মেজাজ সৃষ্টি করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "assonance",
        term: "Assonance",
      },
      {
        id: "alliteration",
        term: "Alliteration",
      },
    ],
  },
  {
    id: "couplet",
    term: "Couplet",
    shortDescription: "Two successive rhyming lines in a verse.",
    definition: {
      en: "A couplet is a literary device that can be defined as having two successive rhyming lines in a verse, and has the same meter to form a complete thought.",
      bn: "কাপলেট (Couplet) বা দ্বিপদী হলো একটি সাহিত্যিক কৌশল যেখানে কবিতায় দুটি পরপর অন্ত্যমিলযুক্ত লাইন থাকে এবং একটি সম্পূর্ণ ধারণা গঠনের জন্য উভয়ের একই ছন্দ বা মাত্রা থাকে।",
    },
    examples: [
      {
        text: "For thy sweet love remember'd such wealth brings / That then I scorn to change my state with kings.",
        source: "William Shakespeare, 'Sonnet 29'",
      },
    ],
    context: {
      en: "Often used to provide a concluding thought or summarize the theme at the end of a stanza or poem, like in a Shakespearean sonnet.",
      bn: "প্রায়শই শেক্সপিয়রীয় সনেটের মতো কোনো স্তবক বা কবিতার শেষে একটি উপসংহারমূলক চিন্তা প্রদান করতে বা থিমটির সারসংক্ষেপ করতে ব্যবহৃত হয়।",
    },
  },
  {
    id: "denotation",
    term: "Denotation",
    shortDescription: "The literal, dictionary definition of a word.",
    definition: {
      en: "The literal, explicit, or primary meaning of a word, in contrast to the feelings or ideas that the word suggests. It is the objective, dictionary definition stripped of emotional associations or secondary cultural meanings.",
      bn: "ডেনোটেশন বা আক্ষরিক অর্থ হলো কোনো শব্দের সরাসরি বা অভিধানগত অর্থ। এর সাথে কোনো আবেগ বা বাড়তি কোনো ব্যঞ্জনা যুক্ত থাকে না।",
    },
    examples: [
      {
        text: "The denotation of the word 'home' is simply 'a place where one lives', unlike its connotation which might imply warmth, family, or comfort.",
        source: "Linguistic Concept",
      },
    ],
    context: {
      en: "Understanding denotation is essential for precise communication and forms the baseline upon which figurative language and connotations are built in literature.",
      bn: "সাহিত্যে শব্দের সঠিক ব্যবহার ও রূপক অর্থ বোঝার জন্য প্রথমে এর আক্ষরিক অর্থ বা ডেনোটেশন জানা অত্যন্ত জরুরি।",
    },
    similarTerms: [
      {
        id: "literal-meaning",
        term: "Literal Meaning",
      },
    ],
    oppositeTerms: [
      {
        id: "connotation",
        term: "Connotation",
      },
    ],
  },
  {
    id: "denouement",
    term: "Denouement",
    shortDescription:
      "The resolution of the issue of a complicated plot in fiction.",
    definition: {
      en: "The denouement is the resolution of a plot that occurs after its climax. It is the final part of a play, movie, or narrative in which the strands of the plot are drawn together and matters are explained or resolved.",
      bn: "ডেন্যুউমোঁ (Denouement) বা পরিসমাপ্তি হলো গল্পের ক্লাইম্যাক্সের পরে ঘটা প্লটের সমাধান। এটি নাটক, চলচ্চিত্র বা কাহিনীর চূড়ান্ত অংশ যেখানে প্লটের সূত্রগুলো একত্রিত করা হয় এবং বিষয়গুলোর ব্যাখ্যা বা সমাধান করা হয়।",
    },
    examples: [
      {
        text: "Following the deaths of Romeo and Juliet, the feuding families reconcile, which serves as the denouement of the tragedy.",
        source: "William Shakespeare, 'Romeo and Juliet'",
      },
    ],
    context: {
      en: "Provides closure to the audience by tying up loose ends and establishing a new normal after the climax.",
      bn: "অমীমাংসিত বিষয়গুলোর সমাধান করে এবং ক্লাইম্যাক্সের পর একটি নতুন স্বাভাবিক অবস্থা প্রতিষ্ঠা করে দর্শকদের সন্তুষ্টি প্রদান করে।",
    },
  },
  {
    id: "deus-ex-machina",
    term: "Deus Ex Machina",
    shortDescription:
      "An unexpected power or event saving a seemingly hopeless situation.",
    definition: {
      en: "Latin for 'god from the machine'. A plot device whereby a seemingly unsolvable problem in a story is suddenly and abruptly resolved by an unexpected and unlikely occurrence, typically to contrive a happy ending.",
      bn: "ডিউস এক্স ম্যাকিউনা হলো একটি কাহিনী কৌশল যেখানে গল্পের আপাতদৃষ্টিতে অমীমাংসিত কোনো সমস্যা হঠাৎ করে একটি অপ্রত্যাশিত বা ঐশ্বরিক হস্তক্ষেপের মাধ্যমে সমাধান হয়ে যায়, সাধারণত সুখী সমাপ্তির জন্য।",
    },
    examples: [
      {
        text: "A naval officer suddenly arrives at the end of the novel to rescue the boys from their descent into savagery.",
        source: "William Golding, 'Lord of the Flies'",
      },
    ],
    context: {
      en: "Originated in ancient Greek theater, where actors playing gods were literally lowered onto the stage by a crane (machine) to resolve the conflict. Today, it is often criticized as a sign of poor plot resolution.",
      bn: "এটি প্রাচীন গ্রিক থিয়েটার থেকে উদ্ভূত, যেখানে দেবতাদের অভিনয়কারী অভিনেতাদের ক্রেন বা যন্ত্রের সাহায্যে মঞ্চে নামানো হতো। বর্তমানে এটি দুর্বল প্লট সমাধানের লক্ষণ হিসেবে সমালোচিত হয়।",
    },
  },
  {
    id: "dialect",
    term: "Dialect",
    shortDescription:
      "A particular form of a language specific to a region or social group.",
    definition: {
      en: "A variety of a language that is characteristic of a particular group of the language's speakers. It involves distinct vocabulary, grammar, and pronunciation. In literature, it is used to establish character, setting, and authenticity.",
      bn: "উপভাষা হলো কোনো ভাষার একটি বিশেষ রূপ যা নির্দিষ্ট কোনো অঞ্চল বা সামাজিক গোষ্ঠীর মানুষ ব্যবহার করে। সাহিত্যে এটি চরিত্র, পরিবেশ ও ভাষার সত্যতা ফুটিয়ে তুলতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "We's safe, Huck, we's safe! Jump up and crack yo' heels!",
        source: "Mark Twain, 'The Adventures of Huckleberry Finn'",
      },
    ],
    context: {
      en: "Crucial in Regionalism and Local Color literature to capture the authentic voice of localized communities, resisting homogenization of language.",
      bn: "আঞ্চলিক সাহিত্য বা লোকাল কালার মুভমেন্টে এটি অত্যন্ত গুরুত্বপূর্ণ, যা স্থানীয় সম্প্রদায়ের আসল কণ্ঠস্বরকে ধরে রাখে এবং ভাষার সমজাতীয়করণ প্রতিরোধ করে।",
    },
  },
  {
    id: "dialogue",
    term: "Dialogue",
    shortDescription:
      "A conversation between two or more people as a feature of a book, play, or movie.",
    definition: {
      en: "Dialogue is a written or spoken conversational exchange between two or more people. In literature, it is used to advance the plot, develop characters, and provide exposition. It contrasts with a monologue or soliloquy, where only one person speaks.",
      bn: "ডায়ালগ বা সংলাপ হলো দুই বা ততোধিক মানুষের মধ্যে কথোপকথন। সাহিত্যে এটি গল্পের কাহিনী এগিয়ে নিতে, চরিত্রের বৈশিষ্ট্য ফুটিয়ে তুলতে এবং প্রেক্ষাপট বর্ণনা করতে ব্যবহৃত হয়। এটি মনোলগ বা সোলিলোকুই এর বিপরীত, যেখানে কেবল একজন মানুষ কথা বলে।",
    },
    examples: [
      {
        text: "Any conversation between characters in a play.",
        source: "General",
      },
    ],
    context: {
      en: "A foundational element of drama and fiction, tracing back to ancient Greek philosophical dialogues.",
      bn: "নাটক এবং উপন্যাসের একটি মৌলিক উপাদান, যার শেকড় প্রাচীন গ্রিক দার্শনিক কথোপকথনে পাওয়া যায়।",
    },
    similarTerms: [],
    oppositeTerms: [
      {
        id: "soliloquy",
        term: "Soliloquy",
      },
      {
        id: "dramatic-monologue",
        term: "Dramatic Monologue",
      },
    ],
  },
  {
    id: "diction",
    term: "Diction",
    shortDescription:
      "The choice and use of words and phrases in speech or writing.",
    definition: {
      en: "Diction refers to the linguistic choices a writer makes to effectively convey an idea, a point of view, or tell a story. It can be formal, informal, colloquial, or slang.",
      bn: "ডিকশন (Diction) বা শব্দচয়ন হলো একটি ধারণা বা দৃষ্টিভঙ্গি কার্যকরভাবে প্রকাশ করতে কিংবা গল্প বলার জন্য লেখকের ভাষাগত পছন্দ। এটি আনুষ্ঠানিক, অনানুষ্ঠানিক, কথ্য বা স্ল্যাং হতে পারে।",
    },
    examples: [
      {
        text: "Heard melodies are sweet, but those unheard / Are sweeter: therefore, ye soft pipes, play on...",
        source: "John Keats, 'Ode on a Grecian Urn'",
      },
    ],
    context: {
      en: "Diction sets the tone of a piece of literature and establishes the voice of the narrator or characters.",
      bn: "শব্দচয়ন কোনো সাহিত্যের সুর বা মেজাজ নির্ধারণ করে এবং বর্ণনাকারী বা চরিত্রগুলোর কণ্ঠস্বর প্রতিষ্ঠা করে।",
    },
  },
  {
    id: "didacticism",
    term: "Didacticism",
    shortDescription:
      "Literature intended to instruct or teach a moral lesson.",
    definition: {
      en: "A literary philosophy or stylistic approach that emphasizes instructional and informative qualities in literature. Didactic works are primarily designed to teach a moral, political, religious, or practical lesson, often prioritizing the message over purely aesthetic elements.",
      bn: "ডাইড্যাক্টিসিজম বা শিক্ষামূলক সাহিত্য হলো এমন ধরনের সাহিত্য যার মূল উদ্দেশ্য আনন্দ দেওয়ার পাশাপাশি পাঠককে কোনো নৈতিক, ধর্মীয় বা রাজনৈতিক শিক্ষা প্রদান করা।",
    },
    examples: [
      {
        text: "Know then thyself, presume not God to scan; / The proper study of mankind is man.",
        source: "Alexander Pope, 'An Essay on Man'",
      },
    ],
    context: {
      en: "While sometimes criticized for being overly preachy, didacticism was highly valued in classical and medieval literature for its role in shaping moral character.",
      bn: "প্রাচীন ও মধ্যযুগীয় সাহিত্যে এর ব্যাপক ব্যবহার ছিল সমাজকে নীতি-নৈতিকতা শেখানোর উদ্দেশ্যে। রূপকথার গল্প বা ঈশপের গল্পগুলো এর চমৎকার উদাহরণ।",
    },
    similarTerms: [
      {
        id: "allegory",
        term: "Allegory",
      },
      {
        id: "fable",
        term: "Fable",
      },
    ],
  },
  {
    id: "dissonance",
    term: "Dissonance",
    shortDescription: "A harsh, discordant combination of sounds.",
    definition: {
      en: "The deliberate use of harsh, discordant, or unharmonious sounds in poetry or prose to create a jarring effect. It disrupts the musicality of the text, often to mirror chaos, tension, pain, or emotional turmoil.",
      bn: "ডিসোন্যান্স বা শ্রুতিকটুতা হলো কাব্যে বা গদ্যে ইচ্ছাকৃতভাবে কর্কশ ও বেসুরো শব্দের ব্যবহার। এটি সাধারণত মানসিক অস্থিরতা, বিশৃঙ্খলা বা যন্ত্রণার অনুভূতি বোঝাতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "Thy black, cylindric body, golden brass and silvery steel,\nThy ponderous side-bars, parallel and connecting rods, gyrating, shuttling at thy sides...",
        source: "Walt Whitman, 'To a Locomotive in Winter'",
      },
    ],
    context: {
      en: "Poets use dissonance to jolt the reader out of complacency, often pairing it with themes of war, industrialization, or existential angst.",
      bn: "কবিরা যুদ্ধের ভয়াবহতা বা আধুনিক যান্ত্রিক জীবনের রুক্ষতা ফুটিয়ে তুলতে এই অলংকার ব্যবহার করে থাকেন, যা পাঠকের মনে এক ধরণের ধাক্কা দেয়।",
    },
    similarTerms: [
      {
        id: "cacophony",
        term: "Cacophony",
      },
    ],
    oppositeTerms: [
      {
        id: "euphony",
        term: "Euphony",
      },
      {
        id: "consonance",
        term: "Consonance",
      },
    ],
  },
  {
    id: "doppelganger",
    term: "Doppelganger",
    shortDescription:
      "A biologically unrelated look-alike, or a double, of a living person.",
    definition: {
      en: "A German term meaning 'double-goer'. In literature, it refers to a character who is an exact replica, or an alter-ego, of the protagonist. It is often used to represent the dual nature of humans, manifesting a character's suppressed or dark side.",
      bn: "ডপেলগ্যাঙ্গার (জার্মান শব্দ, যার অর্থ 'ছায়াসঙ্গী') সাহিত্যে এমন একটি চরিত্রকে বোঝায় যে প্রধান চরিত্রের হুবহু প্রতিরূপ। এটি প্রায়শই মানুষের দ্বৈত সত্তা বা চরিত্রের অবদমিত অন্ধকার দিকটি প্রকাশ করতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "The relationship between Dr. Jekyll and his malicious alter-ego, Mr. Hyde.",
        source:
          "Robert Louis Stevenson, 'The Strange Case of Dr. Jekyll and Mr. Hyde'",
      },
    ],
    context: {
      en: "A prominent motif in Gothic literature and psychoanalytic criticism, exploring themes of identity, repression, and the uncanniness of seeing oneself.",
      bn: "গথিক সাহিত্য এবং মনস্তাত্ত্বিক সমালোচনায় এটি একটি বিশিষ্ট মোটিফ, যা পরিচয়, অবদমন এবং নিজের প্রতিরূপ দেখার অদ্ভুত অনুভূতি অন্বেষণ করে।",
    },
    similarTerms: [
      {
        id: "alter-ego",
        term: "Alter Ego",
      },
      {
        id: "foil",
        term: "Foil",
      },
    ],
  },
  {
    id: "double-entendre",
    term: "Double Entendre",
    shortDescription:
      "A figure of speech in which a spoken phrase is devised to be understood in either of two ways.",
    definition: {
      en: "A double entendre is a literary device in which a word or phrase can be understood in two distinct ways. Often, the first meaning is straightforward, while the second meaning is ironic, risqué, or inappropriate.",
      bn: "ডাবল এনটেন্ডার বা দ্ব্যর্থক শব্দ হলো এমন এক ধরনের আলংকারিক প্রয়োগ, যেখানে একটি শব্দ বা বাক্যাংশকে দুটি ভিন্ন অর্থে বোঝা যায়। সাধারণত এর প্রথম অর্থটি সাধারণ, আর দ্বিতীয় অর্থটি ব্যঙ্গাত্মক বা ইঙ্গিতপূর্ণ হয়ে থাকে।",
    },
    examples: [
      {
        text: "A trade, sir, that, I hope, I may use with a safe conscience; which is, indeed, sir, a mender of bad soles.",
        source: "William Shakespeare, Julius Caesar",
      },
    ],
    context: {
      en: "Used extensively in Elizabethan drama to create bawdy humor and in modern comedy to convey subtle subtext.",
      bn: "এলিজাবেথীয় নাটকে হাস্যরস সৃষ্টির জন্য এবং আধুনিক কমেডিতে সূক্ষ্ম ইঙ্গিত বোঝাতে এর ব্যাপক ব্যবহার লক্ষ্য করা যায়।",
    },
  },
  {
    id: "dramatic-irony",
    term: "Dramatic Irony",
    shortDescription:
      "A situation where the audience knows more about the events or a character's situation than the characters themselves.",
    definition: {
      en: "Dramatic irony occurs when the audience or readers are fully aware of a critical piece of information, a plot twist, or a character's true identity, while the characters within the story remain completely ignorant. This disparity in knowledge builds intense suspense, humor, or tragedy, as the audience helplessly watches characters make decisions based on false assumptions.",
      bn: "ড্রামাটিক আইরনি হলো এমন একটি পরিস্থিতি যেখানে নাটক বা গল্পের চরিত্রগুলোর চেয়ে দর্শকরা বেশি সত্য জানে। অর্থাৎ, দর্শকরা জানে যে সামনে কী ভয়ংকর বা মজার ঘটনা ঘটতে যাচ্ছে, কিন্তু চরিত্রগুলো তা না জেনেই ভুল সিদ্ধান্ত নিতে থাকে। এর ফলে গল্পের ভেতরে একটা দারুণ সাসপেন্স এবং উত্তেজনা তৈরি হয়।",
    },
    examples: [
      {
        text: "King Oedipus vows to find and banish the murderer of the previous king, completely unaware that he himself is the murderer. The audience, however, knows this truth.",
        source: "Oedipus Rex by Sophocles",
      },
      {
        text: "Duncan comments on how pleasant and welcoming Macbeth's castle looks, not knowing that Macbeth is planning to murder him there that very night.",
        source: "Macbeth by William Shakespeare",
      },
    ],
    context: {
      en: "A fundamental element of ancient Greek tragedy, functioning as a primary tool to evoke pity and fear (catharsis) from the audience.",
      bn: "প্রাচীন গ্রিক ট্র্যাজেডির এটি একটি অন্যতম প্রধান বৈশিষ্ট্য ছিল, যা দর্শকদের মনে করুণা ও ভীতি (ক্যাথারসিস) জাগিয়ে তুলতে দারুণভাবে সাহায্য করত।",
    },
  },
  {
    id: "dramatic-monologue",
    term: "Dramatic Monologue",
    shortDescription:
      "A poem in the form of a speech or narrative by an imagined person, in which the speaker inadvertently reveals aspects of their character.",
    definition: {
      en: "A dramatic monologue is a type of poetry written in the form of a speech of an individual character. The speaker addresses a silent audience, and in doing so, unintentionally reveals their own personality, motives, and psychological state. It is similar to a soliloquy, but typically occurs in poetry rather than drama, and involves an implied listener.",
      bn: "ড্রামাটিক মনোলগ বা নাটকীয় একোলক্তি হলো এক ধরনের কবিতা, যেখানে কোনো একটি চরিত্র দর্শকদের বা কোনো কাল্পনিক শ্রোতার উদ্দেশ্যে কথা বলে। এই কথা বলার মধ্য দিয়ে সে অজান্তেই তার নিজের চরিত্র, চিন্তাভাবনা এবং মানসিক অবস্থা প্রকাশ করে দেয়। এটি সোলিলোকুই এর মতোই, তবে এটি মূলত কবিতায় ব্যবহৃত হয় এবং এতে একজন নীরব শ্রোতা থাকে।",
    },
    examples: [
      {
        text: "That's my last Duchess painted on the wall, / Looking as if she were alive.",
        source: "My Last Duchess by Robert Browning",
      },
    ],
    context: {
      en: "Perfected by Victorian poets, especially Robert Browning and Alfred, Lord Tennyson, to explore character psychology.",
      bn: "ভিক্টোরিয়ান যুগের কবিরা, বিশেষ করে রবার্ট ব্রাউনিং এবং আলফ্রেড টেনিসন, চরিত্রের মনস্তত্ত্ব তুলে ধরতে এই কৌশলটির সফল ব্যবহার করেছেন।",
    },
    similarTerms: [
      {
        id: "soliloquy",
        term: "Soliloquy",
      },
    ],
    oppositeTerms: [],
  },
  {
    id: "dystopia",
    term: "Dystopia",
    shortDescription:
      "An imagined society characterized by immense suffering, oppression, and dehumanization.",
    definition: {
      en: "A dystopia is a speculative, nightmarish society in which social, political, or technological forces have resulted in profound misery, totalitarian control, and loss of individual liberties. It is often created to serve as a warning about current societal trends.",
      bn: "ডিস্টোপিয়া বা দুঃস্বপ্নময় সমাজ হলো এমন একটি কল্পিত সমাজ যেখানে চরম নিপীড়ন, অমানবিকীকরণ এবং কষ্ট বিরাজ করে। এখানে রাজনৈতিক বা প্রযুক্তিগত শক্তিগুলো সমাজের সম্পূর্ণ নিয়ন্ত্রণ নিয়ে নেয় এবং ব্যক্তির স্বাধীনতা হরণ করে।",
    },
    examples: [
      {
        text: "The surveillance state of Oceania.",
        source: "George Orwell, '1984'",
      },
      {
        text: "The genetically engineered, caste-based society.",
        source: "Aldous Huxley, 'Brave New World'",
      },
    ],
    context: {
      en: "Dystopian literature functions as a critique of contemporary society, exploring the extreme logical conclusions of specific political ideologies or technological advancements.",
      bn: "ডিস্টোপিয়ান সাহিত্য সমসাময়িক সমাজের সমালোচনা হিসেবে কাজ করে, যা নির্দিষ্ট রাজনৈতিক মতাদর্শ বা প্রযুক্তিগত অগ্রগতির চরম পরিণতি অন্বেষণ করে।",
    },
    similarTerms: [
      {
        id: "anti-utopia",
        term: "Anti-utopia",
      },
    ],
    oppositeTerms: [
      {
        id: "utopia",
        term: "Utopia",
      },
    ],
  },
  {
    id: "elegy",
    term: "Elegy",
    shortDescription:
      "A poem of serious reflection, typically a lament for the dead.",
    definition: {
      en: "A mournful, melancholic, or plaintive poem, especially a funeral song or a lament for the dead. Elegies traditionally progress through stages of grief, moving from lamentation to praise of the deceased, and finally finding consolation.",
      bn: "এলিজি বা শোকগাথা হলো মৃত ব্যক্তির স্মরণে রচিত শোকাবহ কবিতা। এতে সাধারণত মৃতের প্রতি শোকপ্রকাশ, তার গুণের প্রশংসা এবং শেষে সান্ত্বনার সুর থাকে।",
    },
    examples: [
      {
        text: "Here rests his head upon the lap of Earth\nA youth to Fortune and to Fame unknown.",
        source: "Thomas Gray, 'Elegy Written in a Country Churchyard'",
      },
    ],
    context: {
      en: "The elegy serves as a poetic space for processing loss and mortality, often expanding from personal grief to broader philosophical reflections on human existence.",
      bn: "শোকগাথা কেবল ব্যক্তিগত দুঃখ প্রকাশের মাধ্যম নয়, এটি মানবজীবনের নশ্বরতা নিয়ে গভীর দার্শনিক চিন্তারও সুযোগ তৈরি করে।",
    },
    similarTerms: [
      {
        id: "dirge",
        term: "Dirge",
      },
      {
        id: "requiem",
        term: "Requiem",
      },
    ],
    oppositeTerms: [
      {
        id: "ode",
        term: "Ode",
      },
    ],
  },
  {
    id: "end-stopped-line",
    term: "End-Stopped Line",
    shortDescription:
      "A line of poetry that ends with a natural pause, often marked by punctuation.",
    definition: {
      en: "An end-stopped line in poetry is a line in which a grammatical pause and the physical end of the line coincide. This pause is usually indicated by punctuation such as a period, comma, or semicolon, providing a sense of completion.",
      bn: "কবিতায় এন্ড-স্টপড লাইন হলো এমন একটি পঙ্‌ক্তি যার শেষে যতিচিহ্নের (কমা, দাড়ি ইত্যাদি) মাধ্যমে একটি স্বাভাবিক বিরতি থাকে। এটি পঙ্‌ক্তির শেষে একটি পূর্ণতার অনুভূতি দেয়।",
    },
    examples: [
      {
        text: "A little learning is a dang'rous thing;\nDrink deep, or taste not the Pierian spring:",
        source: "Alexander Pope, An Essay on Criticism",
      },
    ],
    context: {
      en: "Creates a formal, rhythmic structure and slows down the reading pace, common in heroic couplets.",
      bn: "এটি একটি ছান্দিক কাঠামো তৈরি করে এবং পড়ার গতি ধীর করে দেয়। হিরোয়িক কাপলেটে এর ব্যবহার খুব সাধারণ।",
    },
    similarTerms: [
      {
        id: "caesura",
        term: "Caesura",
      },
    ],
    oppositeTerms: [
      {
        id: "enjambment",
        term: "Enjambment",
      },
    ],
  },
  {
    id: "enjambment",
    term: "Enjambment",
    shortDescription:
      "The continuation of a sentence without a pause beyond the end of a line, couplet, or stanza.",
    definition: {
      en: "Enjambment is a literary device in poetry in which a sentence or phrase carries over from one line into the next without major pause or punctuation.",
      bn: "এনজ্যামমেন্ট (Enjambment) বা প্রবহমানতা হলো কবিতায় একটি আলংকারিক কৌশল যেখানে কোনো প্রধান বিরতি বা যতিচিহ্ন ছাড়াই একটি বাক্য বা বাক্যাংশ এক লাইন থেকে পরের লাইনে প্রবাহিত হয়।",
    },
    examples: [
      {
        text: "April is the cruellest month, breeding / Lilacs out of the dead land, mixing / Memory and desire...",
        source: "T.S. Eliot, 'The Waste Land'",
      },
    ],
    context: {
      en: "Creates a sense of fluid movement, builds tension, or emphasizes specific words that fall at the beginning or end of lines.",
      bn: "এটি একটি সাবলীল গতির অনুভূতি তৈরি করে, উত্তেজনা বাড়ায় বা লাইনের শুরুতে বা শেষে থাকা নির্দিষ্ট শব্দের উপর জোর দেয়।",
    },
    oppositeTerms: [
      {
        id: "end-stopped-line",
        term: "End-Stopped Line",
      },
    ],
  },
  {
    id: "epic",
    term: "Epic",
    shortDescription: "A long narrative poem telling of a hero's deeds.",
    definition: {
      en: "An epic is a lengthy narrative poem, ordinarily involving a time beyond living memory in which occurred the extraordinary doings of the extraordinary men and women who, in dealings with the gods or other superhuman forces, gave shape to the mortal universe for their descendants.",
      bn: "এপিক (Epic) বা মহাকাব্য হলো একটি দীর্ঘ আখ্যানমূলক কবিতা, যা সাধারণত সুদূর অতীতের অসাধারণ নারী-পুরুষদের অসাধারণ কার্যাবলী নিয়ে রচিত, যেখানে তারা দেবতা বা অতিপ্রাকৃত শক্তির সাথে মিথস্ক্রিয়ার মাধ্যমে তাদের উত্তরসূরিদের জন্য জগতকে রূপ দিয়েছিলেন।",
    },
    examples: [
      {
        text: "Of Man's First Disobedience, and the Fruit / Of that Forbidden Tree, whose mortal taste / Brought Death into the World...",
        source: "John Milton, 'Paradise Lost'",
      },
    ],
    context: {
      en: "Epics reflect the values, beliefs, and history of a culture, often featuring heroic exploits and vast, sweeping settings.",
      bn: "মহাকাব্যগুলো কোনো সংস্কৃতির মূল্যবোধ, বিশ্বাস এবং ইতিহাস প্রতিফলিত করে, যেখানে প্রায়শই বীরত্বপূর্ণ কাজ এবং বিশাল পটভূমি তুলে ধরা হয়।",
    },
  },
  {
    id: "epigram",
    term: "Epigram",
    shortDescription: "A brief, clever, and memorable poem or statement.",
    definition: {
      en: "An epigram is a concise, witty, and often paradoxical statement or short poem designed to surprise or amuse the reader. It typically concludes with an ingenious or satirical turn of thought.",
      bn: "এপিগ্রাম হলো একটি সংক্ষিপ্ত, চতুর এবং প্রায়শই স্ববিরোধী উক্তি বা ছোট কবিতা যা পাঠককে চমকে দিতে বা আনন্দ দিতে তৈরি করা হয়। এটি সাধারণত একটি বুদ্ধিবৃত্তিক বা ব্যঙ্গাত্মক মোড় দিয়ে শেষ হয়।",
    },
    examples: [
      {
        text: "I can resist everything except temptation.",
        source: "Oscar Wilde, 'Lady Windermere's Fan'",
      },
      {
        text: "What is an Epigram? a dwarfish whole, / Its body brevity, and wit its soul.",
        source: "Samuel Taylor Coleridge",
      },
    ],
    context: {
      en: "Utilized to make a sharp, humorous, or satirical point in an instantly quotable manner.",
      bn: "একটি তীক্ষ্ণ, হাস্যকর বা ব্যঙ্গাত্মক বক্তব্যকে খুব সহজে উদ্ধৃত করার মতো করে প্রকাশ করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "aphorism",
        term: "Aphorism",
      },
      {
        id: "maxim",
        term: "Maxim",
      },
      {
        id: "proverb",
        term: "Proverb",
      },
    ],
  },
  {
    id: "epigraph",
    term: "Epigraph",
    shortDescription:
      "A short quotation or saying at the beginning of a book or chapter, intended to suggest its theme.",
    definition: {
      en: "An epigraph is a short quotation, phrase, or poem placed at the beginning of a literary work, document, or a section of a work. It is used to set the tone, provide a context, or suggest the overarching theme of the text that follows, often creating an immediate thematic resonance for the reader.",
      bn: "এপিগ্রাফ (Epigraph) হলো কোনো বই, অধ্যায় বা রচনার শুরুতে ব্যবহৃত একটি সংক্ষিপ্ত উদ্ধৃতি বা উক্তি। এটি মূলত মূল রচনার সুর বা থিম (theme) সম্পর্কে পাঠককে ইঙ্গিত দেওয়ার জন্য ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: '"Lawyers, I suppose, were children once."',
        source:
          "Charles Lamb, used as an epigraph in Harper Lee's 'To Kill a Mockingbird'",
      },
      {
        text: '"Mistah Kurtz, he dead."',
        source:
          "Joseph Conrad's 'Heart of Darkness', used as an epigraph in T.S. Eliot's 'The Hollow Men'",
      },
    ],
    context: {
      en: "Epigraphs function as a preface or thematic prologue, subtly guiding the reader's interpretation and establishing an intertextual connection between the current work and the source of the quotation.",
      bn: "এপিগ্রাফ একটি প্রারম্ভিক ভূমিকা হিসেবে কাজ করে যা পাঠকের ব্যাখ্যাকে নির্দেশিত করে এবং বর্তমান রচনা ও উদ্ধৃতির উৎসের মধ্যে একটি আন্তঃপাঠ্য (intertextual) সম্পর্ক স্থাপন করে।",
    },
    similarTerms: [
      {
        id: "prologue",
        term: "Prologue",
      },
      {
        id: "preface",
        term: "Preface",
      },
    ],
  },
  {
    id: "epilogue",
    term: "Epilogue",
    shortDescription: "A concluding section at the end of a literary work.",
    definition: {
      en: "A piece of writing at the end of a work of literature, usually used to bring closure to the work. It is presented from the perspective of within the story, offering a final comment on the narrative, revealing the ultimate fate of characters, or tying up loose ends.",
      bn: "এপিলগ বা উপসংহার হলো কোনো সাহিত্যকর্ম বা নাটকের শেষে যুক্ত অংশ। এর মাধ্যমে গল্পের অসম্পূর্ণ দিকগুলোর সমাপ্তি টানা হয় এবং চরিত্রগুলোর ভবিষ্যৎ পরিণতি সম্পর্কে ধারণা দেওয়া হয়।",
    },
    examples: [
      {
        text: "A glooming peace this morning with it brings;\nThe sun, for sorrow, will not show his head:\nGo hence, to have more talk of these sad things;\nSome shall be pardon'd, and some punished:\nFor never was a story of more woe\nThan this of Juliet and her Romeo.",
        source:
          "William Shakespeare, 'Romeo and Juliet' (Prince's concluding speech)",
      },
    ],
    context: {
      en: "In drama, an epilogue is often a speech made directly to the audience by an actor, sometimes asking for their applause or reflecting on the play's moral.",
      bn: "নাটকে প্রায়শই অভিনেতারা সরাসরি দর্শকদের উদ্দেশ্যে উপসংহার পাঠ করেন, যেখানে নাটকের মূল সুর বা নৈতিক শিক্ষার সারসংক্ষেপ থাকে।",
    },
    similarTerms: [
      {
        id: "afterword",
        term: "Afterword",
      },
      {
        id: "conclusion",
        term: "Conclusion",
      },
    ],
    oppositeTerms: [
      {
        id: "prologue",
        term: "Prologue",
      },
    ],
  },
  {
    id: "epiphany",
    term: "Epiphany",
    shortDescription:
      "A sudden, profound realization or moment of profound insight that changes a character's perspective.",
    definition: {
      en: "In literature, an epiphany is a sudden, powerful moment of revelation or insight experienced by a character. It usually occurs during a seemingly ordinary event but fundamentally alters the character's understanding of themselves, their situation, or the world. This moment of clarity often serves as a turning point in the narrative, leading to a shift in the character's behavior or the story's resolution.",
      bn: "এপিফ্যানি হলো কোনো চরিত্রের জীবনে হঠাৎ করে ঘটা এমন একটি মুহূর্ত, যখন সে কোনো এক গভীর সত্য বা জ্ঞান উপলব্ধি করতে পারে। এটি সাধারণত খুব সাধারণ একটি ঘটনার মধ্য দিয়ে ঘটে, কিন্তু এর ফলে চরিত্রটির জীবন বা চিন্তাধারা পুরোপুরি বদলে যায়। গল্পের মোড় ঘোরানোর জন্য এটি একটি অসাধারণ সাহিত্যিক টুল।",
    },
    examples: [
      {
        text: "In James Joyce's 'Araby', the young protagonist experiences an epiphany at the bazaar, suddenly realizing the vanity and foolishness of his romantic ideals.",
        source: "Araby by James Joyce",
      },
    ],
    context: {
      en: "Originally a religious term denoting the manifestation of a divine being. James Joyce adapted it into literary criticism to describe these sudden flashes of secular realization.",
      bn: "মূলত এটি একটি ধর্মীয় শব্দ যা দেবতার আবির্ভাবকে বোঝাত। আইরিশ লেখক জেমস জয়েস সাহিত্যিক পরিভাষায় এটিকে প্রথম জনপ্রিয় করেন সাধারণ মানুষের জীবনের হঠাৎ জ্ঞানলাভ বোঝানোর জন্য।",
    },
  },
  {
    id: "epistolary",
    term: "Epistolary",
    shortDescription:
      "A literary work structured in the form of a series of letters or documents.",
    definition: {
      en: "Epistolary refers to a narrative constructed through a series of letters, diary entries, newspaper clippings, or other documents. This form allows for intimate, subjective insights into multiple characters' perspectives without an omniscient narrator.",
      bn: "এপিস্টোলারি বা পত্রোপন্যাস হলো এমন একটি সাহিত্যিক রূপ যা চিঠিপত্র, দিনপঞ্জি, বা অন্যান্য নথির মাধ্যমে গঠিত হয়। এই ফর্মটি কোনো সর্বজ্ঞ কথক ছাড়াই বিভিন্ন চরিত্রের দৃষ্টিভঙ্গির অন্তরঙ্গ ও বিষয়ভিত্তিক অন্তর্দৃষ্টি প্রদান করে।",
    },
    examples: [
      {
        text: "The entire novel is composed of letters, journal entries, and newspaper clippings.",
        source: "Bram Stoker, 'Dracula'",
      },
      {
        text: "A narrative told through letters exchanged by characters.",
        source:
          "Mary Shelley, 'Frankenstein' (the framing narrative of Captain Walton)",
      },
    ],
    context: {
      en: "Popular in the 18th century to add realism and psychological depth, it is still used to create intimacy or to weave together diverse viewpoints.",
      bn: "অষ্টাদশ শতাব্দীতে বাস্তবতা এবং মনস্তাত্ত্বিক গভীরতা যোগ করতে জনপ্রিয় ছিল, এখনও এটি অন্তরঙ্গতা তৈরি করতে বা বিভিন্ন দৃষ্টিভঙ্গিকে একত্রিত করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "diary-fiction",
        term: "Diary Fiction",
      },
    ],
  },
  {
    id: "epistrophe",
    term: "Epistrophe",
    shortDescription:
      "The repetition of a word or phrase at the end of successive clauses or sentences.",
    definition: {
      en: "Epistrophe is a rhetorical figure in which the same word or phrase is repeated at the end of successive clauses, sentences, or lines. It creates a striking emphasis and a rhythmic cadence.",
      bn: "এপিস্ট্রোফি বা অন্ত্যানুপ্রাস হলো পর পর কয়েকটি বাক্য বা বাক্যাংশের শেষে একই শব্দ বা বাক্যাংশের পুনরাবৃত্তি। এটি বক্তব্যকে জোরদার করতে এবং একটি ছান্দিক প্রভাব তৈরি করতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "When I was a child, I spoke as a child, I understood as a child, I thought as a child.",
        source: "The Bible (1 Corinthians 13:11)",
      },
    ],
    context: {
      en: "Often used in speeches and dramatic literature to build emotional impact and memorable conclusions.",
      bn: "বক্তৃতা এবং নাটকীয় সাহিত্যে আবেগপূর্ণ প্রভাব এবং স্মরণীয় উপসংহার তৈরি করতে প্রায়শই ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "anaphora",
        term: "Anaphora",
      },
      {
        id: "symploce",
        term: "Symploce",
      },
    ],
  },
  {
    id: "epithet",
    term: "Epithet",
    shortDescription:
      "A descriptive phrase expressing a quality characteristic of the person or thing mentioned.",
    definition: {
      en: "An adjective or descriptive phrase expressing a quality characteristic of the person or thing mentioned. In literature, especially in epic poetry, it is a characterizing word or phrase firmly associated with a person or thing, used repeatedly as a stylistic device.",
      bn: "এপিথেট বা বিশেষণমূলক আখ্যা হলো এমন একটি শব্দ বা বাক্যাংশ যা কোনো ব্যক্তি বা বস্তুর বিশেষ গুণ বা বৈশিষ্ট্য প্রকাশ করে। প্রাচীন মহাকাব্যে চরিত্রগুলোর নামের সাথে এগুলো প্রায়ই যুক্ত থাকত।",
    },
    examples: [
      {
        text: "Swift-footed Achilles",
        source: "Homer, 'The Iliad'",
      },
      {
        text: "Rosy-fingered Dawn",
        source: "Homer, 'The Odyssey'",
      },
    ],
    context: {
      en: "Homeric epithets were functional tools for oral poets to fit meter, but they also serve to deeply engrain the defining traits of characters and natural phenomena in the reader's mind.",
      bn: "হোমারের মহাকাব্যে এপিথেটের প্রচুর ব্যবহার দেখা যায়, যা চরিত্রগুলোর মূল বৈশিষ্ট্যকে পাঠকের মনে গেঁথে দিতে সাহায্য করে।",
    },
    similarTerms: [
      {
        id: "sobriquet",
        term: "Sobriquet",
      },
      {
        id: "appellation",
        term: "Appellation",
      },
    ],
  },
  {
    id: "epizeuxis",
    term: "Epizeuxis",
    shortDescription:
      "The repetition of a word or phrase in immediate succession, for emphasis.",
    definition: {
      en: "Epizeuxis is a rhetorical device involving the consecutive repetition of a single word or phrase with no other words in between, utilized to create a strong emotional effect or vehement emphasis.",
      bn: "এপিজিউক্সিস হলো এমন একটি আলংকারিক প্রয়োগ যেখানে তীব্র আবেগ বা জোর বোঝানোর জন্য একই শব্দ বা বাক্যাংশ পরপর, মাঝখানে কোনো বিরতি ছাড়াই পুনরাবৃত্তি করা হয়।",
    },
    examples: [
      {
        text: "Words, words, words.",
        source: "William Shakespeare, Hamlet",
      },
      {
        text: "Never, never, never, never, never!",
        source: "William Shakespeare, King Lear",
      },
    ],
    context: {
      en: "Effective in depicting intense emotional states, such as despair, anger, or urgency.",
      bn: "তীব্র আবেগময় পরিস্থিতি, যেমন হতাশা, রাগ বা জরুরি অবস্থা চিত্রিত করতে অত্যন্ত কার্যকর।",
    },
  },
  {
    id: "ethos",
    term: "Ethos",
    shortDescription: "An appeal to ethics, credibility, or character.",
    definition: {
      en: "Ethos is a rhetorical strategy used to establish the speaker's credibility, character, and ethical standing to persuade an audience. It answers the question of why the speaker should be trusted on the subject.",
      bn: "ইথোস হলো অলংকারশাস্ত্রের একটি কৌশল, যার মাধ্যমে বক্তা নিজের বিশ্বাসযোগ্যতা এবং নৈতিক চরিত্র প্রতিষ্ঠা করে দর্শকদের রাজি করানোর চেষ্টা করেন।",
    },
    examples: [
      {
        text: "He was my friend, faithful and just to me.",
        source: "William Shakespeare, Julius Caesar",
      },
    ],
    context: {
      en: "One of Aristotle's three modes of persuasion, essential in speeches and persuasive essays.",
      bn: "অ্যারিস্টটলের তিনটি প্ররোচনা পদ্ধতির মধ্যে এটি অন্যতম, যা বক্তৃতা এবং যুক্তিমূলক প্রবন্ধে অপরিহার্য।",
    },
    similarTerms: [
      {
        id: "logos",
        term: "Logos",
      },
      {
        id: "pathos",
        term: "Pathos",
      },
    ],
  },
  {
    id: "euphemism",
    term: "Euphemism",
    shortDescription:
      "A mild or indirect word or expression substituted for one considered to be too harsh or blunt.",
    definition: {
      en: "A euphemism is a figure of speech in which a polite, mild, or indirect expression is used in place of one that is deemed harsh, blunt, offensive, or suggesting something unpleasant. It serves to soften the impact of sensitive topics like death, violence, bodily functions, or social taboos.",
      bn: "ইউফেমিজম (Euphemism) বা শ্রুতিকটু শব্দের বদলে কোমল শব্দের ব্যবহার হলো এমন এক ধরনের অলংকার, যেখানে কোনো রূঢ়, আপত্তিকর বা রূঢ় শব্দের পরিবর্তে অপেক্ষাকৃত কোমল, পরোক্ষ বা শালীন শব্দ ব্যবহার করা হয়।",
    },
    examples: [
      {
        text: "\"For the time would come when he would 'pass away'.\"",
        source: "Common colloquial usage instead of 'die'",
      },
      {
        text: 'Using "sanitation engineer" instead of "garbage collector".',
        source: "Modern social discourse",
      },
    ],
    context: {
      en: "Euphemisms reflect cultural norms and sensitivities, allowing writers to navigate delicate subjects with tact, or occasionally for ironic or comedic effect by intentionally understating grim realities.",
      bn: "এটি সমাজের সংবেদনশীলতা ও সংস্কৃতিকে প্রতিফলিত করে, যার ফলে লেখকরা সূক্ষ্ম বিষয়গুলোকে দক্ষতার সঙ্গে উপস্থাপন করতে পারেন বা কখনো কখনো ব্যঙ্গাত্মক (ironic) অর্থ তৈরি করতে পারেন।",
    },
    similarTerms: [
      {
        id: "understatement",
        term: "Understatement",
      },
    ],
    oppositeTerms: [
      {
        id: "dysphemism",
        term: "Dysphemism",
      },
    ],
  },
  {
    id: "euphony",
    term: "Euphony",
    shortDescription:
      "The use of words and phrases that are distinguished as having a wide range of noteworthy melody or loveliness in the sounds they create.",
    definition: {
      en: "Euphony refers to the acoustic effect of words that sound sweet, melodious, and pleasant to the ear. It is achieved through the harmonious combination of vowels, soft consonants (like l, m, n, r), and long vowel sounds, creating a soothing phonetic quality.",
      bn: "ইউফোনি বা শ্রুতিমধুরতা হলো এমন শব্দ বা বাক্যাংশের ব্যবহার যা শুনতে মিষ্টি, সুরেলা এবং মনোরম লাগে। এটি স্বরবর্ণ এবং নরম ব্যঞ্জনবর্ণের (যেমন ল, ম, ন, র) সুরেলা সংমিশ্রণের মাধ্যমে অর্জিত হয়, যা একটি প্রশান্তিদায়ক ধ্বনিগত গুণ তৈরি করে।",
    },
    examples: [
      {
        text: "Season of mists and mellow fruitfulness, / Close bosom-friend of the maturing sun;",
        source: "John Keats, 'To Autumn'",
      },
      {
        text: "The woods are lovely, dark and deep.",
        source: "Robert Frost, 'Stopping by Woods on a Snowy Evening'",
      },
    ],
    context: {
      en: "Poets and writers use euphony to evoke a sense of peace, beauty, or tranquility, enhancing the overall aesthetic and emotional appeal of the text.",
      bn: "কবি এবং লেখকরা পাঠ্যের নান্দনিক এবং মানসিক আবেদন বাড়িয়ে শান্তি, সৌন্দর্য বা প্রশান্তি জাগিয়ে তুলতে শ্রুতিমধুরতা ব্যবহার করেন।",
    },
    similarTerms: [
      {
        id: "melody",
        term: "Melody",
      },
      {
        id: "assonance",
        term: "Assonance",
      },
    ],
    oppositeTerms: [
      {
        id: "cacophony",
        term: "Cacophony",
      },
      {
        id: "dissonance",
        term: "Dissonance",
      },
    ],
  },
  {
    id: "existentialism",
    term: "Existentialism",
    shortDescription:
      "A philosophical and literary movement focusing on individual freedom, existence, and choice.",
    definition: {
      en: "Existentialism is a philosophical theory and literary movement emphasizing individual existence, freedom, and choice. It posits that human beings define their own meaning in life, often navigating themes of absurdity, alienation, and dread in an irrational universe.",
      bn: "অস্তিত্ববাদ হলো একটি দার্শনিক তত্ত্ব এবং সাহিত্যিক আন্দোলন, যা ব্যক্তির অস্তিত্ব, স্বাধীনতা এবং পছন্দকে গুরুত্ব দেয়। এটি মনে করে যে মানুষ নিজেই তার জীবনের অর্থ নির্ধারণ করে এবং প্রায়শই অযৌক্তিক মহাবিশ্বে বিচ্ছিন্নতা ও শূন্যতার থিম নিয়ে কাজ করে।",
    },
    examples: [
      {
        text: "Mother died today. Or maybe yesterday, I don't know.",
        source: "Albert Camus, The Stranger",
      },
    ],
    context: {
      en: "Prominent in post-World War II European literature, exploring the meaninglessness of traditional structures.",
      bn: "দ্বিতীয় বিশ্বযুদ্ধ-পরবর্তী ইউরোপীয় সাহিত্যে এটি একটি বিশিষ্ট ধারা ছিল, যা ঐতিহ্যবাহী কাঠামোর অর্থহীনতা অন্বেষণ করে।",
    },
    similarTerms: [
      {
        id: "absurdism",
        term: "Absurdism",
      },
      {
        id: "nihilism",
        term: "Nihilism",
      },
    ],
  },
  {
    id: "exposition",
    term: "Exposition",
    shortDescription:
      "The introduction of background information about events, settings, characters, or other elements of a work.",
    definition: {
      en: "Exposition is a narrative device used at the beginning of a work (or strategically throughout) to provide crucial background information to the audience. This includes setting the scene, introducing characters, establishing the context, and detailing events that occurred before the main plot begins.",
      bn: "এক্সপোজিশন (Exposition) বা পটভূমি-বর্ণনা হলো কোনো সাহিত্যকর্মের এমন একটি অংশ, যেখানে চরিত্র, প্রেক্ষাপট, এবং পূর্ববর্তী ঘটনাগুলো সম্পর্কে পাঠক বা দর্শককে প্রাথমিক ধারণা দেওয়া হয়।",
    },
    examples: [
      {
        text: 'The prologue of Romeo and Juliet: "Two households, both alike in dignity, / In fair Verona, where we lay our scene..."',
        source: "William Shakespeare, 'Romeo and Juliet'",
      },
      {
        text: "The opening chapter of 'Pride and Prejudice', detailing the arrival of Mr. Bingley and the Bennet family's reaction.",
        source: "Jane Austen, 'Pride and Prejudice'",
      },
    ],
    context: {
      en: "Effective exposition seamlessly integrates essential context without interrupting the narrative flow, ensuring the reader comprehends the stakes and character motivations before the rising action commences.",
      bn: "কার্যকর এক্সপোজিশন আখ্যানের গতিকে ব্যাহত না করে প্রয়োজনীয় তথ্য সরবরাহ করে, যাতে পাঠক মূল কাহিনির উত্তেজনা শুরুর আগেই চরিত্রের উদ্দেশ্যগুলো বুঝতে পারেন।",
    },
    similarTerms: [
      {
        id: "prologue",
        term: "Prologue",
      },
      {
        id: "introduction",
        term: "Introduction",
      },
    ],
    oppositeTerms: [
      {
        id: "climax",
        term: "Climax",
      },
    ],
  },
  {
    id: "expressionism",
    term: "Expressionism",
    shortDescription:
      "A modernist movement in drama and art aiming to represent emotional experience rather than physical reality.",
    definition: {
      en: "Expressionism is a literary and artistic movement that seeks to portray the inner psychological and emotional experiences of characters rather than objective reality. It often features distorted landscapes, disjointed dialogue, and surreal elements to reflect an alienated or intense mental state.",
      bn: "এক্সপ্রেশনিজম বা অভিব্যক্তিবাদ হলো সাহিত্য ও শিল্পের একটি আন্দোলন, যা বাহ্যিক বাস্তবতার বদলে চরিত্রের ভেতরের মানসিক ও আবেগগত অভিজ্ঞতা তুলে ধরতে চায়। এতে প্রায়শই বিচ্ছিন্ন সংলাপ এবং পরাবাস্তব উপাদান থাকে।",
    },
    examples: [
      {
        text: "The use of distorted sets and transparent walls to show Willy Loman's breaking psyche.",
        source: "Arthur Miller, Death of a Salesman",
      },
    ],
    context: {
      en: "Originated in Germany at the beginning of the 20th century, profoundly influencing theater and modern psychological novels.",
      bn: "বিংশ শতাব্দীর শুরুতে জার্মানিতে এর উৎপত্তি হয়, যা নাটক এবং আধুনিক মনস্তাত্ত্বিক উপন্যাসকে গভীরভাবে প্রভাবিত করেছিল।",
    },
    similarTerms: [
      {
        id: "surrealism",
        term: "Surrealism",
      },
    ],
    oppositeTerms: [
      {
        id: "realism",
        term: "Realism",
      },
      {
        id: "naturalism",
        term: "Naturalism",
      },
    ],
  },
  {
    id: "fable",
    term: "Fable",
    shortDescription:
      "A short story, typically with animals as characters, conveying a moral.",
    definition: {
      en: "A succinct fictional story, in prose or verse, that features animals, legendary creatures, plants, inanimate objects, or forces of nature that are anthropomorphized, and that illustrates or leads to a particular moral lesson, which may at the end be added explicitly as a concise maxim.",
      bn: "ফেবল বা নীতিকথা হলো একটি ছোট গল্প, যেখানে সাধারণত পশু-পাখি বা জড় বস্তুকে মানুষের মতো আচরণ করতে দেখা যায় এবং যার শেষে একটি স্পষ্ট নৈতিক শিক্ষা থাকে।",
    },
    examples: [
      {
        text: "The Tortoise and the Hare, where the slow and steady tortoise wins the race against the arrogant hare.",
        source: "Aesop's Fables",
      },
    ],
    context: {
      en: "Fables are a foundational genre in didactic literature, using allegory and anthropomorphism to teach moral and ethical values in an accessible, memorable format.",
      bn: "ঈশপের গল্পগুলো এর প্রকৃষ্ট উদাহরণ। শিশুদের নৈতিকতা শেখানোর জন্য রূপক ও পশুপাখির ব্যবহারের মাধ্যমে এগুলো যুগ যুগ ধরে জনপ্রিয়।",
    },
    similarTerms: [
      {
        id: "allegory",
        term: "Allegory",
      },
      {
        id: "parable",
        term: "Parable",
      },
    ],
  },
  {
    id: "falling-action",
    term: "Falling Action",
    shortDescription:
      "The part of a literary plot that occurs after the climax and leads to the resolution.",
    definition: {
      en: "Falling action refers to the sequence of events in a narrative that follow the climax and lead to the resolution or denouement. It is the phase where tensions ease, mysteries are unraveled, and characters begin to deal with the consequences of the climax.",
      bn: "ফলিং অ্যাকশন হলো কাহিনীর সেই অংশ, যা চরম পরিণতির (ক্লাইম্যাক্স) পর ঘটে এবং রেজোলিউশন বা উপসংহারের দিকে নিয়ে যায়। এ পর্যায়ে উত্তেজনা কমতে থাকে এবং চরিত্রগুলো ক্লাইম্যাক্সের পরিণতিগুলোর মুখোমুখি হয়।",
    },
    examples: [
      {
        text: "The events following Romeo and Juliet's deaths, where their families discover them and reconcile.",
        source: "William Shakespeare, Romeo and Juliet",
      },
    ],
    context: {
      en: "A key component of Freytag's Pyramid, functioning to tie up loose ends and transition to a stable conclusion.",
      bn: "এটি ফ্রেইট্যাগের পিরামিডের একটি মূল অংশ, যার কাজ হলো অসম্পূর্ণ বিষয়গুলো গুছিয়ে আনা এবং একটি স্থিতিশীল সমাপ্তির দিকে যাওয়া।",
    },
    similarTerms: [
      {
        id: "denouement",
        term: "Denouement",
      },
      {
        id: "resolution",
        term: "Resolution",
      },
    ],
    oppositeTerms: [
      {
        id: "rising-action",
        term: "Rising Action",
      },
    ],
  },
  {
    id: "farce",
    term: "Farce",
    shortDescription: "A comic dramatic work using buffoonery and horseplay.",
    definition: {
      en: "A type of comedy designed to provoke laughter through highly exaggerated, improbable situations, physical humor (slapstick), absurdity, and often bawdy jokes. It relies on chaotic plots, mistaken identities, and fast-paced action rather than deep character development.",
      bn: "ফার্স বা প্রহসন হলো এক ধরনের হাস্যরসাত্মক নাটক যেখানে অত্যন্ত অতিরঞ্জিত, অসম্ভব পরিস্থিতি এবং শারীরিক কৌতুকের মাধ্যমে দর্শকদের হাসানো হয়।",
    },
    examples: [
      {
        text: "The Comedy of Errors, a play revolving around the slapstick confusion caused by two sets of identical twins.",
        source: "William Shakespeare",
      },
    ],
    context: {
      en: "Farce sacrifices realism and complex character arcs for pure entertainment, challenging social conventions through sheer absurdity and subversion of expectations.",
      bn: "এতে গল্পের বাস্তবতার চেয়ে বিনোদন ও হাসির খোরাক যোগানোর ওপর বেশি জোর দেওয়া হয়। ভুল বোঝাবুঝি এবং ছদ্মবেশ এর সাধারণ বৈশিষ্ট্য।",
    },
    similarTerms: [
      {
        id: "comedy",
        term: "Comedy",
      },
      {
        id: "satire",
        term: "Satire",
      },
    ],
  },
  {
    id: "figurative-language",
    term: "Figurative Language",
    shortDescription:
      "Language that uses words or expressions with a meaning that is different from the literal interpretation.",
    definition: {
      en: "Figurative language employs figures of speech—such as metaphors, similes, and personification—to convey meanings beyond the literal sense of words. It is used to add color, depth, and evocative power to writing, allowing readers to visualize or feel concepts more profoundly.",
      bn: "ফিগারেটিভ ল্যাঙ্গুয়েজ বা আলংকারিক ভাষা হলো এমন ভাষা যেখানে শব্দের সাধারণ অর্থের বাইরে একটি বিশেষ অর্থ প্রকাশ করতে রূপক, উপমা বা ব্যক্তি-আরোপণের মতো অলংকার ব্যবহার করা হয়। এটি লেখায় গভীরতা এবং প্রাণবন্ততা যোগ করে।",
    },
    examples: [
      {
        text: "I wandered lonely as a cloud.",
        source: "William Wordsworth, I Wandered Lonely as a Cloud",
      },
    ],
    context: {
      en: "Ubiquitous in poetry and descriptive prose to stimulate the imagination and create sensory imagery.",
      bn: "কল্পনাকে উদ্দীপিত করতে এবং সংবেদনশীল চিত্রকল্প তৈরি করতে কবিতা এবং বর্ণনামূলক গদ্যে এর ব্যাপক ব্যবহার দেখা যায়।",
    },
    similarTerms: [
      {
        id: "imagery",
        term: "Imagery",
      },
    ],
    oppositeTerms: [
      {
        id: "literal-language",
        term: "Literal Language",
      },
    ],
  },
  {
    id: "flashback",
    term: "Flashback",
    shortDescription: "A scene set in a time earlier than the main story.",
    definition: {
      en: "A narrative technique that interrupts the chronological sequence of events to insert a scene from the past. It is used to provide crucial background context, reveal character motivations, or build suspense by explaining how the present situation came to be.",
      bn: "ফ্ল্যাশব্যাক বা অতীত-স্মৃতিচারণ হলো গল্পের স্বাভাবিক ধারাকে থামিয়ে অতীতের কোনো ঘটনা বর্ণনা করার কৌশল। এটি বর্তমানের পরিস্থিতি বা চরিত্রের পেছনের কারণ ব্যাখ্যা করতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "Willy Loman frequently shifts between his present reality and past memories, showing how his past decisions haunt his current life.",
        source: "Arthur Miller, 'Death of a Salesman'",
      },
    ],
    context: {
      en: "Flashbacks allow writers to start a story in media res (in the middle of things) while still supplying necessary exposition in a dynamic and engaging way.",
      bn: "এই কৌশলটি গল্পে গভীরতা যোগ করে এবং পাঠকদের অতীত ও বর্তমানের যোগসূত্র বুঝতে সাহায্য করে।",
    },
    similarTerms: [
      {
        id: "analepsis",
        term: "Analepsis",
      },
    ],
    oppositeTerms: [
      {
        id: "flash-forward",
        term: "Flash-forward (Prolepsis)",
      },
    ],
  },
  {
    id: "foil",
    term: "Foil",
    shortDescription:
      "A character who contrasts with another character to highlight particular qualities of the other character.",
    definition: {
      en: "In literature, a foil is a character whose primary function is to contrast with another character—usually the protagonist—in order to draw attention to and highlight the distinctive qualities, traits, or motivations of that primary character.",
      bn: "ফয়েল (Foil) হলো এমন একটি চরিত্র যা অন্য একটি চরিত্রের (সাধারণত প্রধান চরিত্র বা নায়ক) বিপরীত বৈশিষ্ট্য ধারণ করে। এর মূল উদ্দেশ্য হলো বিপরীতধর্মী বৈশিষ্ট্যের মাধ্যমে প্রধান চরিত্রের গুণাবলি বা ত্রুটিগুলোকে আরও স্পষ্টভাবে ফুটিয়ে তোলা।",
    },
    examples: [
      {
        text: "Banquo serves as a foil to Macbeth; his restraint and loyalty highlight Macbeth's ruthless ambition.",
        source: "William Shakespeare, 'Macbeth'",
      },
      {
        text: "Dr. Watson is a foil to Sherlock Holmes, his ordinary intellect emphasizing Holmes's extraordinary deductive brilliance.",
        source: "Arthur Conan Doyle, 'Sherlock Holmes'",
      },
    ],
    context: {
      en: "Foils create structural symmetry and thematic depth, providing a clear benchmark against which the protagonist's development, virtues, or fatal flaws can be measured.",
      bn: "ফয়েল চরিত্রগুলো একটি কাঠামোগত ভারসাম্য এবং থিম্যাটিক গভীরতা তৈরি করে, যা প্রধান চরিত্রের বিকাশ, গুণাবলি বা মারাত্মক ত্রুটিগুলো (fatal flaws) পরিমাপের মানদণ্ড হিসেবে কাজ করে।",
    },
    similarTerms: [
      {
        id: "antagonist",
        term: "Antagonist",
      },
      {
        id: "juxtaposition",
        term: "Juxtaposition",
      },
    ],
  },
  {
    id: "foreshadowing",
    term: "Foreshadowing",
    shortDescription:
      "A narrative device where the author drops subtle clues about what will happen later in the story.",
    definition: {
      en: "Foreshadowing is a literary technique in which a writer provides subtle hints, warnings, or clues early in a narrative to suggest events that will occur later. It builds anticipation and suspense in the reader's mind, preparing them for the climax or a plot twist. When done skillfully, the reader might not fully realize the significance of the clue until the foretold event actually takes place.",
      bn: "ফোরশ্যাডোইং হলো এমন একটি কৌশল, যেখানে লেখক গল্পের শুরুর দিকেই ভবিষ্যতের কোনো ঘটনার হালকা ইঙ্গিত বা ক্লু দিয়ে রাখেন। এটি পাঠকদের মনে এক ধরণের সাসপেন্স বা কৌতূহল তৈরি করে। অনেক সময় গল্প শেষ হওয়ার পরই পাঠক বুঝতে পারে যে শুরুর দিকের ঐ ছোট ঘটনাটি আসলে কত বড় ইঙ্গিত ছিল।",
    },
    examples: [
      {
        text: "The witches predicting that Macbeth will become king, and their warning about Macduff, foreshadows the entire bloody trajectory of the play.",
        source: "Macbeth by William Shakespeare",
      },
    ],
    context: {
      en: "A universal storytelling tool used across all genres to create cohesive plots and maintain narrative tension.",
      bn: "গল্পের প্লটকে শক্তিশালী করতে এবং পাঠকদের উত্তেজনা ধরে রাখতে পৃথিবীর সব ভাষার সাহিত্যেই এটি ব্যবহার করা হয়।",
    },
  },
  {
    id: "frame-narrative",
    term: "Frame Narrative",
    shortDescription:
      "A story within a story, where an outer narrative sets the stage for one or more inner narratives.",
    definition: {
      en: "A frame narrative (or frame story) is a literary technique that serves as a companion piece to a story within a story. An introductory or main narrative sets the stage, providing the context or reason for another character to tell the primary story or stories.",
      bn: "ফ্রেম ন্যারেটিভ বা কাঠামোগত কাহিনি হলো একটি গল্পের ভেতরে আরেকটি গল্প। এখানে একটি বাইরের বা প্রধান কাহিনি এমন একটি পটভূমি তৈরি করে যার ভেতরে অন্য কোনো চরিত্র মূল গল্প বা গল্পগুলো বর্ণনা করে।",
    },
    examples: [
      {
        text: "A group of pilgrims tell stories to each other on their journey to Canterbury.",
        source: "Geoffrey Chaucer, 'The Canterbury Tales'",
      },
      {
        text: "Walton's letters frame Victor Frankenstein's story, which in turn frames the Monster's story.",
        source: "Mary Shelley, 'Frankenstein'",
      },
    ],
    context: {
      en: "Used to provide context, establish credibility, offer multiple perspectives, or unify a collection of otherwise disparate tales.",
      bn: "প্রেক্ষাপট প্রদান করতে, বিশ্বাসযোগ্যতা স্থাপন করতে, একাধিক দৃষ্টিভঙ্গি দিতে বা বিভিন্ন বিচ্ছিন্ন গল্পকে একত্রিত করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "story-within-a-story",
        term: "Story within a Story",
      },
      {
        id: "mise-en-abyme",
        term: "Mise-en-abyme",
      },
    ],
  },
  {
    id: "free_verse",
    term: "Free Verse",
    shortDescription: "Poetry that does not rhyme or have a regular meter.",
    definition: {
      en: "Free verse is a form of poetry that refrains from consistent meter patterns, rhyme, or any other musical pattern. Instead, it tends to follow the rhythm of natural speech, relying on line breaks, cadence, and thematic progression to create poetic structure.",
      bn: "ফ্রি ভার্স (Free Verse) বা মুক্তক ছন্দ হলো এমন এক ধরনের কবিতা, যার নির্দিষ্ট কোনো মাত্রা, তাল বা অন্ত্যমিল (rhyme) থাকে না। এটি প্রথাগত ছন্দের নিয়ম ভেঙে প্রাকৃতিক কথার ছন্দ (rhythm of natural speech) অনুসরণ করে।",
    },
    examples: [
      {
        text: '"I celebrate myself, and sing myself, / And what I assume you shall assume, / For every atom belonging to me as good belongs to you."',
        source: "Walt Whitman, 'Song of Myself'",
      },
      {
        text: '"so much depends / upon / a red wheel / barrow / glazed with rain / water / beside the white / chickens."',
        source: "William Carlos Williams, 'The Red Wheelbarrow'",
      },
    ],
    context: {
      en: "Free verse allows poets immense flexibility and stylistic freedom, emphasizing the organic connection between the form of the poem and its content, prioritizing emotion and imagery over strict structural rules.",
      bn: "মুক্তক ছন্দ কবিদের প্রচুর নমনীয়তা এবং শৈলীগত স্বাধীনতা দেয়, যা কঠোর কাঠামোগত নিয়মের চেয়ে আবেগ এবং চিত্রকল্পকে (imagery) বেশি গুরুত্ব দেয়।",
    },
    similarTerms: [
      {
        id: "blank_verse",
        term: "Blank Verse",
      },
    ],
    oppositeTerms: [
      {
        id: "formal_verse",
        term: "Formal Verse",
      },
      {
        id: "rhyming_couplet",
        term: "Rhyming Couplet",
      },
    ],
  },
  {
    id: "freytags-pyramid",
    term: "Freytag's Pyramid",
    shortDescription:
      "A dramatic structural framework outlining the five key stages of a narrative arc.",
    definition: {
      en: "Freytag's Pyramid is a paradigm of dramatic structure developed by Gustav Freytag, which divides a standard plot into five parts: exposition, rising action, climax, falling action, and denouement (or resolution). It is widely used for analyzing traditional storytelling.",
      bn: "ফ্রেইট্যাগের পিরামিড হলো গুস্তাভ ফ্রেইট্যাগ কর্তৃক তৈরি নাট্য কাঠামোর একটি মডেল, যা কাহিনীর প্লটকে পাঁচটি ভাগে ভাগ করে: এক্সপোজিশন, রাইজিং অ্যাকশন, ক্লাইম্যাক্স, ফলিং অ্যাকশন এবং ডেনুমেন্ট বা উপসংহার।",
    },
    examples: [
      {
        text: "The structure of Macbeth, moving from the witches' prophecy (exposition) to the murder of Duncan (rising action), the banqueting scene (climax), the subsequent unraveling (falling action), and Macbeth's death (denouement).",
        source: "William Shakespeare, Macbeth",
      },
    ],
    context: {
      en: "Provides a foundational template for understanding classic drama and classical fiction plot arcs.",
      bn: "ধ্রুপদী নাটক এবং কল্পকাহিনীর প্লট বোঝার জন্য এটি একটি মৌলিক টেমপ্লেট হিসেবে কাজ করে।",
    },
    similarTerms: [
      {
        id: "dramatic-structure",
        term: "Dramatic Structure",
      },
      {
        id: "plot-arc",
        term: "Plot Arc",
      },
    ],
  },
  {
    id: "genre",
    term: "Genre",
    shortDescription:
      "A category of artistic composition characterized by similarities in form, style, or subject matter.",
    definition: {
      en: "A recognizable category or classification of literature, art, or music, based on shared conventions of form, style, structure, and subject matter. Major literary genres include poetry, drama, fiction, and non-fiction, which are further divided into subgenres like tragedy, romance, or sci-fi.",
      bn: "জনরা বা সাহিত্য-প্রকার হলো সাহিত্যের বিভিন্ন শ্রেণিবিভাগ। এগুলো রচনাশৈলী, গঠন এবং বিষয়বস্তুর ওপর ভিত্তি করে তৈরি হয়, যেমন— কবিতা, নাটক, উপন্যাস বা প্রবন্ধ।",
    },
    examples: [
      {
        text: "Tragedy, epic poetry, gothic fiction, and magical realism are all distinct literary genres.",
        source: "Literary Classification",
      },
    ],
    context: {
      en: "Genres establish a set of expectations for the reader. Authors can either adhere strictly to these conventions to fulfill expectations or deliberately subvert them for artistic effect.",
      bn: "লেখক এবং পাঠক উভয়ের কাছেই জনরার গুরুত্ব রয়েছে, কারণ এটি বলে দেয় যে একটি নির্দিষ্ট সাহিত্যকর্ম থেকে কী ধরনের অভিজ্ঞতা আশা করা যেতে পারে।",
    },
    similarTerms: [
      {
        id: "category",
        term: "Category",
      },
      {
        id: "form",
        term: "Form",
      },
    ],
  },
  {
    id: "gothic",
    term: "Gothic",
    shortDescription:
      "A genre of literature characterized by gloom, the supernatural, romance, and a sense of decay.",
    definition: {
      en: "Gothic literature is a genre that blends elements of romance and horror, marked by an atmosphere of mystery, terror, and decay. Common motifs include ruined castles, supernatural occurrences, damsels in distress, madness, and dark, stormy settings.",
      bn: "গথিক সাহিত্য হলো এমন একটি ঘরানা যা রোমান্স এবং ভৌতিক উপাদানের মিশ্রণ। এটি রহস্য, আতঙ্ক এবং ক্ষয়ের পরিবেশ দ্বারা চিহ্নিত। এর সাধারণ উপাদানগুলোর মধ্যে রয়েছে ধ্বংসপ্রাপ্ত দুর্গ, অতিপ্রাকৃত ঘটনা, বিপদগ্রস্ত নারী, উন্মাদনা এবং অন্ধকারময়, ঝোড়ো পরিবেশ।",
    },
    examples: [
      {
        text: "The oppressive, decaying mansion and the psychological terror experienced by the characters.",
        source: "Edgar Allan Poe, 'The Fall of the House of Usher'",
      },
      {
        text: "The wild, passionate, and destructive romance set in the desolate Yorkshire moors.",
        source: "Emily Brontë, 'Wuthering Heights'",
      },
    ],
    context: {
      en: "Emerged in the late 18th century as a reaction against the rationalism of the Enlightenment, exploring the darker aspects of human psychology and the unknown.",
      bn: "অষ্টাদশ শতাব্দীর শেষের দিকে এনলাইটেনমেন্টের যুক্তিবাদী চেতনার বিরুদ্ধে প্রতিক্রিয়া হিসেবে আবির্ভূত হয়, যা মানুষের মনস্তত্ত্বের অন্ধকার দিক এবং অজানাকে অন্বেষণ করে।",
    },
    similarTerms: [
      {
        id: "dark-romanticism",
        term: "Dark Romanticism",
      },
      {
        id: "horror",
        term: "Horror",
      },
    ],
  },
  {
    id: "haiku",
    term: "Haiku",
    shortDescription:
      "A Japanese poetic form consisting of three phrases with a 5, 7, 5 syllable structure.",
    definition: {
      en: "A traditional Japanese poetic form characterized by its conciseness and rigid structure. It consists of three unrhymed lines with a specific syllable count (morae) of 5-7-5. Haikus typically focus on nature or a specific moment in time, often featuring a 'kigo' (seasonal reference) and a 'kireji' (cutting word) to juxtapose two images.",
      bn: "হাইকু হলো একটি ঐতিহ্যবাহী জাপানি কবিতার ধরন। এটি তিনটি লাইনে বিভক্ত এবং এর সিলেবল বা মাত্রাবৃত্তের গঠন হলো ৫-৭-৫। সাধারণত প্রকৃতি বা মুহূর্তের অনুভূতি নিয়ে এটি লেখা হয়।",
    },
    examples: [
      {
        text: "An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.",
        source: "Matsuo Bashō (translated by Harry Behn)",
      },
    ],
    context: {
      en: "The beauty of a haiku lies in its brevity and its ability to evoke profound emotion and vivid imagery through absolute minimalism.",
      bn: "হাইকু কবিতার মূল সৌন্দর্য এর সংক্ষিপ্ততা এবং অল্প কথায় গভীর কোনো দৃশ্য বা অনুভূতির চিত্রায়নে লুকিয়ে থাকে।",
    },
    similarTerms: [
      {
        id: "tanka",
        term: "Tanka",
      },
    ],
  },
  {
    id: "hamartia",
    term: "Hamartia",
    shortDescription:
      "A fatal flaw leading to the downfall of a tragic hero or heroine.",
    definition: {
      en: "Hamartia is a concept derived from Aristotle's Poetics, representing the fatal flaw, inherent defect, or profound misjudgment that ultimately leads to the downfall, ruin, or tragic end of a tragic hero. It shifts the hero from a state of fortune to a state of adversity.",
      bn: "হ্যামারশিয়া (Hamartia) বা ট্র্যাজিক ত্রুটি হলো কোনো ট্র্যাজিক নায়ক বা প্রধান চরিত্রের চরিত্রের এমন একটি মৌলিক ত্রুটি বা ভুল বিচারবোধ, যা শেষ পর্যন্ত তার পতন বা ধ্বংসের কারণ হয়ে দাঁড়ায়।",
    },
    examples: [
      {
        text: "Othello's intense jealousy and credulity, which allow Iago to manipulate him into murdering Desdemona.",
        source: "William Shakespeare, 'Othello'",
      },
      {
        text: "Oedipus's hubris and relentless pursuit of the truth, which inadvertently bring about his own tragic realization and self-mutilation.",
        source: "Sophocles, 'Oedipus Rex'",
      },
    ],
    context: {
      en: "Hamartia makes the tragic hero relatable, as their downfall is not purely due to external villainy or random fate, but stems from an innate human frailty, evoking pity and fear (catharsis) in the audience.",
      bn: "হ্যামারশিয়ার কারণে ট্র্যাজিক নায়কের পতন কেবল বাহ্যিক কারণ বা ভাগ্যের ওপর নির্ভর করে না; এটি তার নিজস্ব মানবিক দুর্বলতা থেকে উদ্ভূত হয়, যা পাঠকের মনে করুণা ও ভীতি (catharsis) জাগিয়ে তোলে।",
    },
    similarTerms: [
      {
        id: "fatal_flaw",
        term: "Fatal Flaw",
      },
      {
        id: "hubris",
        term: "Hubris",
      },
    ],
  },
  {
    id: "heroic-couplet",
    term: "Heroic Couplet",
    shortDescription:
      "A pair of rhyming iambic pentameter lines, often forming a distinct rhetorical unit.",
    definition: {
      en: "A heroic couplet is a traditional form for English poetry, consisting of a rhyming pair of lines in iambic pentameter. It is often end-stopped and used to express a complete thought or epigrammatic concept with elegance and conciseness.",
      bn: "হিরোয়িক কাপলেট হলো ইংরেজি কবিতার একটি ঐতিহ্যবাহী রূপ, যা আইয়াম্বিক পেন্টামিটারে রচিত দুটি মিত্রাক্ষর পঙ্‌ক্তি নিয়ে গঠিত। এটি সাধারণত একটি সম্পূর্ণ ধারণা বা শাণিত বক্তব্য প্রকাশ করতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "True wit is Nature to advantage dress'd,\nWhat oft was thought, but ne'er so well express'd.",
        source: "Alexander Pope, An Essay on Criticism",
      },
    ],
    context: {
      en: "Dominant in English poetry of the 17th and 18th centuries, favored by poets like Dryden and Pope for its precision.",
      bn: "সপ্তদশ এবং অষ্টদশ শতাব্দীর ইংরেজি কবিতায় এটি প্রভাবশালী ছিল এবং এর নির্ভুল কাঠামোর জন্য ড্রাইডেন ও পোপের মতো কবিরা এটি পছন্দ করতেন।",
    },
    similarTerms: [
      {
        id: "couplet",
        term: "Couplet",
      },
      {
        id: "rhyming-couplet",
        term: "Rhyming Couplet",
      },
    ],
    oppositeTerms: [
      {
        id: "blank-verse",
        term: "Blank Verse",
      },
      {
        id: "free-verse",
        term: "Free Verse",
      },
    ],
  },
  {
    id: "hubris",
    term: "Hubris",
    shortDescription:
      "Excessive pride or self-confidence, often leading to a character's downfall.",
    definition: {
      en: "Hubris is extreme pride, arrogance, or overconfidence exhibited by a character, which causes them to overstep their boundaries, defy the gods or moral order, and ultimately leads to their severe punishment or tragic downfall. It is a specific and very common form of hamartia.",
      bn: "হিবরিস (Hubris) বলতে বোঝায় অত্যধিক অহংকার বা মাত্রাতিরিক্ত আত্মবিশ্বাস, যা একটি চরিত্রকে তার সীমা অতিক্রম করতে প্ররোচিত করে এবং শেষ পর্যন্ত তার মর্মান্তিক পতনের কারণ হয়। প্রাচীন গ্রিক সাহিত্যে এটি দেবতাদের অবজ্ঞা করার শামিল।",
    },
    examples: [
      {
        text: "Victor Frankenstein's belief that he can conquer death and play God by creating life.",
        source: "Mary Shelley, 'Frankenstein'",
      },
      {
        text: "Satan's rebellion against God, driven by his absolute pride and desire for supreme power.",
        source: "John Milton, 'Paradise Lost'",
      },
    ],
    context: {
      en: "In classical literature, hubris was considered a grave sin because it disrupted the natural and divine order, serving as a moral cautionary tale about the dangers of unchecked ego.",
      bn: "প্রাচীন সাহিত্যে হিবরিসকে একটি মারাত্মক পাপ হিসেবে দেখা হতো, কারণ এটি প্রাকৃতিক ও ঐশ্বরিক শৃঙ্খলা নষ্ট করত। এটি মানুষের অহংকারের বিপদের বিরুদ্ধে একটি নৈতিক সতর্কবার্তা হিসেবে কাজ করে।",
    },
    similarTerms: [
      {
        id: "arrogance",
        term: "Arrogance",
      },
      {
        id: "hamartia",
        term: "Hamartia",
      },
    ],
    oppositeTerms: [
      {
        id: "humility",
        term: "Humility",
      },
    ],
  },
  {
    id: "hyperbaton",
    term: "Hyperbaton",
    shortDescription:
      "An inversion or disruption of the normal syntactic order of words.",
    definition: {
      en: "Hyperbaton is a rhetorical figure in which the expected or natural order of words is inverted or disrupted for emphasis, poetic meter, or dramatic effect. This syntactic displacement makes the phrase stand out.",
      bn: "হাইপারব্যাটন হলো এমন একটি আলংকারিক প্রয়োগ, যেখানে জোর দেওয়ার জন্য, কবিতার ছন্দের প্রয়োজনে বা নাটকীয় প্রভাব তৈরি করার জন্য স্বাভাবিক বাক্যগঠন বা শব্দের ক্রম পরিবর্তন করা হয়।",
    },
    examples: [
      {
        text: "Object there was none. Passion there was none.",
        source: "Edgar Allan Poe, The Tell-Tale Heart",
      },
      {
        text: "Uneasy lies the head that wears a crown.",
        source: "William Shakespeare, Henry IV, Part 2",
      },
    ],
    context: {
      en: "Frequently employed in classical poetry and elevated prose to draw attention to specific words or to fit a metrical scheme.",
      bn: "নির্দিষ্ট শব্দের প্রতি দৃষ্টি আকর্ষণ করতে বা ছন্দ মেলানোর জন্য ধ্রুপদী কবিতা এবং উচ্চাঙ্গের গদ্যে প্রায়শই ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "inversion",
        term: "Inversion",
      },
      {
        id: "anastrophe",
        term: "Anastrophe",
      },
    ],
  },
  {
    id: "hyperbole",
    term: "Hyperbole",
    shortDescription:
      "Exaggerated statements or claims not meant to be taken literally.",
    definition: {
      en: "Hyperbole is an intentional and extreme exaggeration used for rhetorical effect, emphasis, or humor. It is a figure of speech that amplifies reality to such an extent that it is clearly not intended to be understood literally, but rather to convey intense emotion or a strong impression.",
      bn: "হাইপারবোল (Hyperbole) বা অতিশয়োক্তি হলো এমন একটি অলংকার, যেখানে কোনো বিষয়কে অত্যন্ত বাড়িয়ে বা অতিরঞ্জিত করে প্রকাশ করা হয়। এটি আক্ষরিক অর্থে নেওয়ার জন্য নয়, বরং জোর প্রদান, আবেগ বা হাস্যরস সৃষ্টির জন্য ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: '"Will all great Neptune\'s ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine..."',
        source: "William Shakespeare, 'Macbeth'",
      },
      {
        text: '"I loved Ophelia. Forty thousand brothers / Could not, with all their quantity of love, / Make up my sum."',
        source: "William Shakespeare, 'Hamlet'",
      },
    ],
    context: {
      en: "Writers utilize hyperbole to stretch the limits of language, vividly illustrating the magnitude of a character's feelings, the grand scale of an event, or creating sharp comedic contrast.",
      bn: "লেখকরা ভাষার সীমা প্রসারিত করার জন্য হাইপারবোল ব্যবহার করেন, যা চরিত্রের অনুভূতির তীব্রতা, কোনো ঘটনার বিশালতা বা একটি তীক্ষ্ণ হাস্যরসাত্মক বৈপরীত্য তৈরি করতে সাহায্য করে।",
    },
    similarTerms: [
      {
        id: "exaggeration",
        term: "Exaggeration",
      },
      {
        id: "overstatement",
        term: "Overstatement",
      },
    ],
    oppositeTerms: [
      {
        id: "understatement",
        term: "Understatement",
      },
      {
        id: "litotes",
        term: "Litotes",
      },
    ],
  },
  {
    id: "hypophora",
    term: "Hypophora",
    shortDescription:
      "A figure of speech in which a writer raises a question and then immediately provides an answer to that question.",
    definition: {
      en: "Hypophora is a rhetorical device where a speaker or writer poses a question and then immediately answers it. Unlike a rhetorical question, which implies an answer, hypophora explicitly provides the response to guide the audience's reasoning or to introduce a new topic.",
      bn: "হাইপোফোরা হলো এমন একটি কৌশল, যেখানে বক্তা বা লেখক নিজে একটি প্রশ্ন করেন এবং সঙ্গে সঙ্গে তার উত্তরও দেন। এটি শ্রোতাদের যুক্তিকে গাইড করতে বা নতুন কোনো বিষয় উপস্থাপন করতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "After all, what's a life, anyway? We're born, we live a little while, we die.",
        source: "E.B. White, Charlotte's Web",
      },
    ],
    context: {
      en: "Effective in speeches, essays, and dramatic monologues to maintain control of the argument and engage the audience.",
      bn: "বক্তৃতা, প্রবন্ধ এবং স্বগতোক্তিতে যুক্তির উপর নিয়ন্ত্রণ বজায় রাখতে এবং শ্রোতাদের আকৃষ্ট করতে এটি অত্যন্ত কার্যকর।",
    },
    similarTerms: [
      {
        id: "rhetorical-question",
        term: "Rhetorical Question",
      },
      {
        id: "anthypophora",
        term: "Anthypophora",
      },
    ],
  },
  {
    id: "iamb",
    term: "Iamb",
    shortDescription:
      "A metrical foot consisting of one unstressed syllable followed by one stressed syllable.",
    definition: {
      en: "An iamb is the most common metrical foot in English poetry, containing two syllables: an unaccented (unstressed) syllable followed by an accented (stressed) syllable. Its rhythm closely mimics the natural cadence of English speech.",
      bn: "আইয়াম্ব হলো ইংরেজি কবিতার সবচেয়ে সাধারণ মাত্রাবৃত্ত (Metrical foot), যা দুটি সিলেবল নিয়ে গঠিত: একটি অনুচ্চারিত (Unstressed) সিলেবল এবং তার পরে একটি উচ্চারিত (Stressed) সিলেবল। এর তাল স্বাভাবিক ইংরেজি কথার খুব কাছাকাছি।",
    },
    examples: [
      {
        text: "Shall I com PARE thee TO a SUM mer's DAY?",
        source: "William Shakespeare, Sonnet 18",
      },
    ],
    context: {
      en: "Forms the basis of iambic pentameter, the meter used in Shakespeare's plays and traditional sonnets.",
      bn: "এটি আইয়াম্বিক পেন্টামিটারের ভিত্তি, যা শেকসপিয়রের নাটক এবং ঐতিহ্যবাহী সনেটগুলোতে ব্যবহৃত ছন্দ।",
    },
    similarTerms: [
      {
        id: "metrical-foot",
        term: "Metrical Foot",
      },
    ],
    oppositeTerms: [
      {
        id: "trochee",
        term: "Trochee",
      },
    ],
  },
  {
    id: "iambic-pentameter",
    term: "Iambic Pentameter",
    shortDescription:
      "A poetic meter consisting of five iambs per line (ten syllables alternating unstressed and stressed).",
    definition: {
      en: "Iambic pentameter is the most common meter in English poetry. A line consists of five metrical feet called 'iambs', each containing an unstressed syllable followed by a stressed syllable (da-DUM). It closely mimics the natural rhythm of English speech.",
      bn: "আইয়াম্বিক পেন্টামিটার হলো ইংরেজি কবিতার সবচেয়ে সাধারণ ছন্দ। এর প্রতিটি লাইনে পাঁচটি 'আইয়াম্ব' বা মাত্রা থাকে, যার প্রতিটিতে একটি ঝোঁকহীন বা অনুচ্চারিত স্বরের পর একটি ঝোঁকযুক্ত বা উচ্চারিত স্বর (দা-ডুম) থাকে। এটি ইংরেজি কথ্য ভাষার স্বাভাবিক ছন্দের খুব কাছাকাছি।",
    },
    examples: [
      {
        text: "Shall I compare thee to a summer's day?",
        source: "William Shakespeare, 'Sonnet 18'",
      },
      {
        text: "Of Man's First Disobedience, and the Fruit...",
        source: "John Milton, 'Paradise Lost'",
      },
    ],
    context: {
      en: "The standard meter for Shakespearean drama, sonnets, and Milton's epic poetry, offering a steady, melodic rhythm that elevates language without sounding overly artificial.",
      bn: "শেক্সপিয়রের নাটক, সনেট এবং মিল্টনের মহাকাব্যের স্ট্যান্ডার্ড ছন্দ, যা একটি স্থির, সুরেলা তাল প্রদান করে ভাষাকে মহিমান্বিত করে।",
    },
    similarTerms: [
      {
        id: "blank-verse",
        term: "Blank Verse",
      },
    ],
  },
  {
    id: "idiom",
    term: "Idiom",
    shortDescription:
      "An expression whose figurative meaning differs from its literal meaning.",
    definition: {
      en: "A phrase or expression whose accepted figurative meaning is established by common usage and cultural convention, entirely separate from the literal meaning of the individual words that compose it. Idioms are highly specific to a particular language or culture.",
      bn: "ইডিয়ম বা বাগধারা হলো এমন কিছু শব্দগুচ্ছ যার আক্ষরিক অর্থের চেয়ে রূপক বা প্রচলিত অর্থটিই প্রধান। এগুলো কোনো নির্দিষ্ট ভাষা বা সংস্কৃতির নিজস্ব সম্পদ।",
    },
    examples: [
      {
        text: "It is raining cats and dogs.",
        source: "English Idiom (meaning heavy rain)",
      },
      {
        text: "Bite the bullet.",
        source: "English Idiom (meaning to face a difficult situation bravely)",
      },
    ],
    context: {
      en: "Idioms enrich literary dialogue, lending authenticity and local color to characters' speech, though they can pose significant challenges in translation.",
      bn: "বাগধারার ব্যবহার ভাষাকে প্রাণবন্ত ও শ্রুতিমধুর করে। সাহিত্যে স্থানীয় রঙ বা চরিত্রগুলোর মুখের ভাষাকে স্বাভাবিক করতে এর জুড়ি নেই।",
    },
    similarTerms: [
      {
        id: "proverb",
        term: "Proverb",
      },
      {
        id: "cliché",
        term: "Cliché",
      },
    ],
  },
  {
    id: "imagery",
    term: "Imagery",
    shortDescription:
      "Visually descriptive or figurative language, especially in a literary work.",
    definition: {
      en: "Imagery refers to the use of vivid and descriptive language that appeals to the human senses (sight, hearing, touch, taste, and smell). It allows the reader to create mental images, making the literary experience more immersive, emotional, and tangible.",
      bn: "ইমেজারি (Imagery) বা চিত্রকল্প হলো সাহিত্যের এমন একটি কৌশল, যেখানে ইন্দ্রিয়গ্রাহ্য (দৃশ্য, শব্দ, স্পর্শ, স্বাদ এবং গন্ধ) বর্ণনামূলক ভাষা ব্যবহার করা হয়। এটি পাঠকের মনে একটি মানসিক চিত্র তৈরি করে, যা পড়ার অভিজ্ঞতাকে আরও জীবন্ত ও বাস্তবসম্মত করে তোলে।",
    },
    examples: [
      {
        text: '"To autumn... Season of mists and mellow fruitfulness, / Close bosom-friend of the maturing sun..."',
        source: "John Keats, 'To Autumn'",
      },
      {
        text: '"The yellow fog that rubs its back upon the window-panes..."',
        source: "T.S. Eliot, 'The Love Song of J. Alfred Prufrock'",
      },
    ],
    context: {
      en: "Imagery is the bedrock of poetic and descriptive writing; it translates abstract concepts into concrete sensory experiences, enhancing mood, setting, and symbolic meaning.",
      bn: "চিত্রকল্প হলো কাব্যিক ও বর্ণনামূলক লেখার ভিত্তি; এটি বিমূর্ত ধারণাকে কংক্রিট বা মূর্ত সংবেদনশীল অভিজ্ঞতায় রূপান্তরিত করে এবং পরিবেশ, মেজাজ ও প্রতীকী অর্থকে ফুটিয়ে তোলে।",
    },
    similarTerms: [
      {
        id: "symbolism",
        term: "Symbolism",
      },
      {
        id: "figurative_language",
        term: "Figurative Language",
      },
    ],
  },
  {
    id: "in-medias-res",
    term: "In Medias Res",
    shortDescription:
      "The narrative practice of beginning a story in the middle of the action.",
    definition: {
      en: "Translated from Latin as 'into the middle of things,' in medias res is a narrative technique where a story opens after critical events have already occurred, dropping the reader directly into the unfolding action. Earlier events are usually revealed later through flashbacks or dialogue.",
      bn: "ল্যাটিন শব্দগুচ্ছ যার অর্থ 'মাঝখান থেকে শুরু'। ইন মিডিয়াস রেস হলো এমন একটি আখ্যান কৌশল যেখানে গল্পটি এমন সময় শুরু হয় যখন গুরুত্বপূর্ণ ঘটনাগুলো ইতিমধ্যে ঘটে গেছে। পূর্ববর্তী ঘটনাগুলো সাধারণত পরে ফ্ল্যাশব্যাক বা কথোপকথনের মাধ্যমে প্রকাশ করা হয়।",
    },
    examples: [
      {
        text: "The epic opens ten years into the Trojan War, with Achilles' anger.",
        source: "Homer, 'The Iliad'",
      },
      {
        text: "The narrative begins with Satan and his rebel angels already defeated and awakening in Hell.",
        source: "John Milton, 'Paradise Lost'",
      },
    ],
    context: {
      en: "A hallmark of classical epics, used to immediately grab the audience's attention and build suspense by leaving the backstory to be discovered.",
      bn: "ধ্রুপদী মহাকাব্যের একটি বৈশিষ্ট্য, যা দর্শকদের মনোযোগ তাৎক্ষণিকভাবে আকর্ষণ করতে এবং পূর্বকাহিনি পরে প্রকাশের মাধ্যমে সাসপেন্স তৈরি করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "flashback",
        term: "Flashback",
      },
    ],
    oppositeTerms: [
      {
        id: "ab-ovo",
        term: "Ab Ovo",
      },
    ],
  },
  {
    id: "invective",
    term: "Invective",
    shortDescription:
      "Insulting, abusive, or highly critical language used to attack or denounce.",
    definition: {
      en: "Invective is a form of literary expression characterized by insulting, abusive, or highly critical language. It is used to attack, denounce, or vent strong negative emotions against a person, institution, or idea, often employing heavy sarcasm and vitriol.",
      bn: "ইনভেক্টিভ বা গালিগালাজপূর্ণ ভাষা হলো এমন একটি সাহিত্যিক অভিব্যক্তি যেখানে অপমানজনক বা অত্যন্ত সমালোচনামূলক ভাষা ব্যবহার করা হয়। এটি সাধারণত কোনো ব্যক্তি, প্রতিষ্ঠান বা ধারণাকে আক্রমণ বা নিন্দা করতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "A knave, a rascal, an eater of broken meats; a base, proud, shallow, beggarly, three-suited, hundred-pound, filthy worsted-stocking knave...",
        source: "William Shakespeare, King Lear",
      },
    ],
    context: {
      en: "Utilized in satire and dramatic confrontation to reveal character animosity or critique societal flaws aggressively.",
      bn: "ব্যঙ্গরচনা এবং নাটকীয় সংঘাতে চরিত্রের শত্রুতা প্রকাশ করতে বা সমাজের ত্রুটিগুলোকে আক্রমণাত্মকভাবে সমালোচনা করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "lampoon",
        term: "Lampoon",
      },
      {
        id: "satire",
        term: "Satire",
      },
    ],
    oppositeTerms: [
      {
        id: "eulogy",
        term: "Eulogy",
      },
      {
        id: "panegyric",
        term: "Panegyric",
      },
    ],
  },
  {
    id: "juxtaposition",
    term: "Juxtaposition",
    shortDescription:
      "The fact of two things being seen or placed close together with contrasting effect.",
    definition: {
      en: "Juxtaposition is a literary technique in which two or more ideas, characters, places, or actions are placed side by side in a narrative or a poem. This proximity is designed to develop comparisons and dramatic contrasts, highlighting the distinct characteristics of each element.",
      bn: "জাক্সটাপজিশন (Juxtaposition) বা পাশাপাশি স্থাপন হলো একটি কৌশল, যেখানে দুটি বিপরীত ধারণা, চরিত্র, বা পরিবেশকে পাশাপাশি স্থাপন করা হয়। এর মূল লক্ষ্য হলো উভয়ের মধ্যকার বৈপরীত্য ও তুলনা ফুটিয়ে তোলা।",
    },
    examples: [
      {
        text: '"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness..."',
        source: "Charles Dickens, 'A Tale of Two Cities'",
      },
      {
        text: "The contrast between the luxurious life of the Morlocks' food supply and the innocent, pastoral life of the Eloi.",
        source: "H.G. Wells, 'The Time Machine'",
      },
    ],
    context: {
      en: "By forcing the audience to consider two disparate elements simultaneously, juxtaposition deepens the thematic complexity and encourages analytical thought about the relationship between the contrasted subjects.",
      bn: "দুটি ভিন্ন উপাদানকে একসাথে বিবেচনা করতে বাধ্য করার মাধ্যমে এটি রচনার থিম্যাটিক জটিলতাকে বাড়িয়ে তোলে এবং তুলনামূলক বিশ্লেষণের সুযোগ সৃষ্টি করে।",
    },
    similarTerms: [
      {
        id: "contrast",
        term: "Contrast",
      },
      {
        id: "oxymoron",
        term: "Oxymoron",
      },
      {
        id: "foil",
        term: "Foil",
      },
    ],
  },
  {
    id: "lampoon",
    term: "Lampoon",
    shortDescription:
      "A sharp, often virulent satire directed against an individual or institution.",
    definition: {
      en: "A lampoon is a piece of writing or a speech that harshly and often maliciously satirizes an individual, institution, or society. It uses ridicule, irony, and sarcasm to mock its subject, aiming to expose their follies or vices.",
      bn: "ল্যাম্পুন বা ব্যঙ্গরচনা হলো এমন একটি লেখা বা বক্তৃতা যা কোনো ব্যক্তি, প্রতিষ্ঠান বা সমাজকে কঠোরভাবে এবং বিদ্বেষপূর্ণভাবে উপহাস করে। এটি তার বিষয়ের বোকামি বা ত্রুটিগুলোকে তুলে ধরতে বিদ্রূপ ও শ্লেষ ব্যবহার করে।",
    },
    examples: [
      {
        text: "Mac Flecknoe, a poem that savagely mocks the playwright Thomas Shadwell.",
        source: "John Dryden, Mac Flecknoe",
      },
    ],
    context: {
      en: "Historically significant in political and literary feuds, serving as a tool for public humiliation and critique.",
      bn: "রাজনৈতিক এবং সাহিত্যিক দ্বন্দ্বে ঐতিহাসিকভাবে তাৎপর্যপূর্ণ, যা জনসমক্ষে অপমান এবং সমালোচনার হাতিয়ার হিসেবে কাজ করে।",
    },
    similarTerms: [
      {
        id: "satire",
        term: "Satire",
      },
      {
        id: "parody",
        term: "Parody",
      },
      {
        id: "invective",
        term: "Invective",
      },
    ],
  },
  {
    id: "leitmotif",
    term: "Leitmotif",
    shortDescription:
      "A recurrent theme throughout a musical or literary composition, associated with a particular person, idea, or situation.",
    definition: {
      en: "A leitmotif is a recurring musical phrase, symbol, or theme in a literary or artistic work that is consistently associated with a specific character, object, emotion, or idea. It serves to unify the work and provide thematic depth or foreshadowing.",
      bn: "লিটমোটিফ হলো সাহিত্য বা শিল্পকর্মে বারবার ফিরে আসা একটি প্রতীক বা থিম, যা নির্দিষ্ট কোনো চরিত্র, আবেগ বা ধারণার সাথে যুক্ত থাকে। এটি পুরো কাজটিকে ঐক্যবদ্ধ করে এবং থিমের গভীরতা প্রদান করে।",
    },
    examples: [
      {
        text: "The recurring appearance of the 'green light' at the end of Daisy's dock, symbolizing Gatsby's unattainable dreams.",
        source: "F. Scott Fitzgerald, The Great Gatsby",
      },
    ],
    context: {
      en: "Borrowed from Wagnerian opera, it is widely used in modernist novels and cinema to weave complex thematic networks.",
      bn: "ওয়াগনারীয় অপেরা থেকে ধার করা এই কৌশলটি আধুনিক উপন্যাস এবং চলচ্চিত্রে জটিল থিম্যাটিক নেটওয়ার্ক তৈরি করতে ব্যাপকভাবে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "motif",
        term: "Motif",
      },
      {
        id: "theme",
        term: "Theme",
      },
    ],
  },
  {
    id: "limerick",
    term: "Limerick",
    shortDescription: "A humorous, five-line poem with an AABBA rhyme scheme.",
    definition: {
      en: "A form of light verse consisting of five lines, typically strictly following an AABBA rhyme scheme and a bouncy, anapestic meter. Limericks are inherently humorous, often nonsensical, and sometimes bawdy or ribald in nature.",
      bn: "লিমেরিক হলো পাঁচ লাইনের একটি চটুল ও মজার কবিতা। এর অন্ত্যমিলের গঠন সাধারণত AABBA হয়। এটি মূলতঃ হাস্যরস বা উদ্ভট কল্পনার ওপর ভিত্তি করে তৈরি।",
    },
    examples: [
      {
        text: "There was an Old Man with a beard,\nWho said, 'It is just as I feared!—\nTwo Owls and a Hen,\nFour Larks and a Wren,\nHave all built their nests in my beard!'",
        source: "Edward Lear, 'A Book of Nonsense'",
      },
    ],
    context: {
      en: "Popularized in the 19th century by Edward Lear, the limerick is a beloved form of playful, vernacular poetry that relies heavily on its distinct rhythm to deliver a punchline.",
      bn: "এডওয়ার্ড লিয়ারের হাত ধরে এই কবিতার ধরনটি ব্যাপক জনপ্রিয়তা পায়। ছোটদের পাশাপাশি বড়দের বিনোদনের জন্যও লিমেরিক অত্যন্ত চমৎকার।",
    },
    similarTerms: [
      {
        id: "nonsense-verse",
        term: "Nonsense Verse",
      },
      {
        id: "light-verse",
        term: "Light Verse",
      },
    ],
  },
  {
    id: "litotes",
    term: "Litotes",
    shortDescription:
      "A figure of speech that uses understatement to emphasize a point by denying its opposite.",
    definition: {
      en: "Litotes is a deliberate understatement in which an affirmative thought is expressed by the negation of its contrary. It is a form of irony that ironically emphasizes the magnitude of a statement by intentionally downplaying it, often using double negatives.",
      bn: "লাইটোটিস হলো এক ধরণের ইচ্ছাকৃত অবমূল্যায়ন, যেখানে বিপরীত ধারণাকে অস্বীকার করার মাধ্যমে একটি ইতিবাচক চিন্তাকে প্রকাশ করা হয়। এটি এক প্রকার ব্যঙ্গ, যা প্রায়শই দ্বৈত নেতিবাচক শব্দ ব্যবহার করে কোনো বক্তব্যের গুরুত্বকে জোরালো করে।",
    },
    examples: [
      {
        text: "He's not the brightest bulb in the box. (Meaning he is quite dim/stupid)",
        source: "Common idiom",
      },
      {
        text: "I am a Jew, of Tarsus, a city in Cilicia, a citizen of no mean city.",
        source: "Paul the Apostle, The Bible (Acts 21:39)",
      },
    ],
    context: {
      en: "Used to express modesty, to add subtle emphasis, or to achieve a dry, ironic, or diplomatic tone.",
      bn: "নম্রতা প্রকাশ করতে, সূক্ষ্ম জোর দিতে, অথবা একটি শুষ্ক, ব্যঙ্গাত্মক বা কূটনৈতিক সুর অর্জন করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "understatement",
        term: "Understatement",
      },
      {
        id: "meiosis",
        term: "Meiosis",
      },
    ],
    oppositeTerms: [
      {
        id: "hyperbole",
        term: "Hyperbole",
      },
    ],
  },
  {
    id: "logos",
    term: "Logos",
    shortDescription: "An appeal to logic and reason in rhetoric.",
    definition: {
      en: "Logos is a mode of persuasion in rhetoric that appeals to the audience's sense of logic, reason, and rationality. It relies on arguments constructed from facts, statistics, historical evidence, and well-structured, coherent reasoning.",
      bn: "লোগোস হলো অলংকারশাস্ত্রের একটি প্ররোচনা পদ্ধতি, যা শ্রোতাদের যুক্তি ও বিচারবোধকে আবেদন করে। এটি তথ্য, পরিসংখ্যান, ঐতিহাসিক প্রমাণ এবং সুগঠিত যুক্তির উপর নির্ভর করে।",
    },
    examples: [
      {
        text: "Had you rather Caesar were living and die all slaves, than that Caesar were dead, to live all free men?",
        source: "William Shakespeare, Julius Caesar",
      },
    ],
    context: {
      en: "Crucial for building a solid foundation in any argumentative essay, legal plea, or formal debate, balancing ethos and pathos.",
      bn: "যেকোনো যুক্তিমূলক প্রবন্ধ, আইনি সওয়াল বা বিতর্কে একটি শক্ত ভিত্তি তৈরির জন্য এটি অত্যন্ত গুরুত্বপূর্ণ, যা ইথোস এবং প্যাথোসের ভারসাম্য বজায় রাখে।",
    },
    similarTerms: [
      {
        id: "ethos",
        term: "Ethos",
      },
      {
        id: "pathos",
        term: "Pathos",
      },
    ],
  },
  {
    id: "lyric",
    term: "Lyric",
    shortDescription: "A short poem expressing personal feelings or emotions.",
    definition: {
      en: "A genre of poetry that expresses personal and emotional feelings, traditionally spoken in the first person. Originally designed to be sung to the accompaniment of a lyre, lyric poetry focuses on capturing intense inner experiences and moods rather than narrating a story.",
      bn: "লিরিক বা গীতি কবিতা হলো এমন এক ধরনের ছোট কবিতা যা কবির ব্যক্তিগত আবেগ, অনুভূতি ও চিন্তাকে প্রকাশ করে। এটি গাওয়ার উপযোগী এবং এতে কোনো কাহিনি থাকে না।",
    },
    examples: [
      {
        text: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;",
        source: "William Wordsworth, 'I Wandered Lonely as a Cloud'",
      },
    ],
    context: {
      en: "Lyric is one of the three main categories of poetry (alongside narrative and dramatic). It remains the most common form of poetry today, encompassing odes, sonnets, and elegies.",
      bn: "গীতিকবিতা মূলত কবির আত্মগত অনুভূতির প্রকাশ। সনেট, ওড বা শোকগাথা—এসবই গীতিকবিতার বিভিন্ন শাখা হিসেবে বিবেচিত।",
    },
    similarTerms: [
      {
        id: "ode",
        term: "Ode",
      },
      {
        id: "sonnet",
        term: "Sonnet",
      },
    ],
    oppositeTerms: [
      {
        id: "epic",
        term: "Epic",
      },
      {
        id: "narrative-poetry",
        term: "Narrative Poetry",
      },
    ],
  },
  {
    id: "magic-realism",
    term: "Magic Realism",
    shortDescription:
      "A genre where magical elements are a natural, accepted part of an otherwise mundane, realistic environment.",
    definition: {
      en: "Magic Realism is a literary style that seamlessly weaves fantastical, magical, or mythical elements into a realistic narrative and setting. Characters accept these supernatural occurrences as ordinary aspects of life without surprise or need for explanation.",
      bn: "ম্যাজিক রিয়ালিজম বা জাদুবাস্তবতা হলো এমন একটি সাহিত্যিক শৈলী যা অবাস্তব, জাদুকরী বা পৌরাণিক উপাদানগুলোকে বাস্তবসম্মত আখ্যান এবং পরিবেশের সাথে নির্বিঘ্নে মিশ্রিত করে। চরিত্রগুলো এই অতিপ্রাকৃত ঘটনাগুলোকে জীবনের সাধারণ দিক হিসেবে গ্রহণ করে এবং এতে কোনো বিস্ময় প্রকাশ করে না।",
    },
    examples: [
      {
        text: "The generations of the Buendía family in Macondo, where flying carpets and ghost visitations are normal.",
        source: "Gabriel García Márquez, 'One Hundred Years of Solitude'",
      },
      {
        text: "A girl is born with green hair, a completely accepted fact in the narrative.",
        source: "Isabel Allende, 'The House of the Spirits'",
      },
    ],
    context: {
      en: "Closely associated with Latin American literature, it is used to express the extraordinary nature of mundane life, blend myth with history, and critique political realities.",
      bn: "ল্যাটিন আমেরিকান সাহিত্যের সাথে ঘনিষ্ঠভাবে যুক্ত, এটি সাধারণ জীবনের অসাধারণ প্রকৃতি প্রকাশ করতে, ইতিহাসের সাথে মিথের মিশ্রণ ঘটাতে এবং রাজনৈতিক বাস্তবতার সমালোচনা করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "surrealism",
        term: "Surrealism",
      },
      {
        id: "fabulism",
        term: "Fabulism",
      },
    ],
    oppositeTerms: [
      {
        id: "realism",
        term: "Realism",
      },
    ],
  },
  {
    id: "malapropism",
    term: "Malapropism",
    shortDescription:
      "The mistaken, often comical, use of a word in place of a similar-sounding one.",
    definition: {
      en: "A malapropism occurs when a character mistakenly uses a word that sounds similar to the intended word but has a completely different, often absurdly inappropriate, meaning. Named after Mrs. Malaprop from Sheridan's play 'The Rivals'.",
      bn: "ম্যালাপ্রপিজম হলো কোনো শব্দের পরিবর্তে একই রকম শোনায় এমন অন্য একটি শব্দের ভুল এবং প্রায়শই হাস্যকর ব্যবহার। শেরিডানের 'দ্য রাইভালস' নাটকের মিসেস ম্যালাপ্রপ চরিত্রের নামানুসারে এর নামকরণ করা হয়েছে।",
    },
    examples: [
      {
        text: "She's as headstrong as an allegory on the banks of Nile. (Intended: alligator)",
        source: "Richard Brinsley Sheridan, 'The Rivals'",
      },
      {
        text: "Our watch, sir, have indeed comprehended two auspicious persons. (Intended: apprehended, suspicious)",
        source: "William Shakespeare, 'Much Ado About Nothing' (Dogberry)",
      },
    ],
    context: {
      en: "Used primarily for comic relief, characterization of ignorance or pretentiousness, and linguistic play.",
      bn: "মূলত হাস্যরস সৃষ্টি করতে, চরিত্রের অজ্ঞতা বা ভান তুলে ধরতে এবং ভাষাগত খেলা হিসেবে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "spoonerism",
        term: "Spoonerism",
      },
      {
        id: "solecism",
        term: "Solecism",
      },
    ],
  },
  {
    id: "melodrama",
    term: "Melodrama",
    shortDescription:
      "A sensational dramatic piece with exaggerated characters and exciting events.",
    definition: {
      en: "A dramatic or literary work characterized by sensationalism, exaggerated emotions, flat characterization (clear heroes and villains), and highly contrived plots intended to appeal primarily to the audience's emotions. It often prioritizes thrilling plot twists over realistic character development.",
      bn: "মেলোড্রামা বা অতি-নাটকীয়তা হলো এমন একটি নাট্য বা সাহিত্যরূপ যেখানে চরম আবেগ, অতিরঞ্জিত চরিত্র এবং রোমাঞ্চকর ঘটনার প্রাধান্য থাকে। এতে বাস্তবতার চেয়ে দর্শকদের আবেগতাড়িত করার দিকে বেশি নজর দেওয়া হয়।",
    },
    examples: [
      {
        text: "Many Victorian stage plays and early silent films, featuring a clear damsel in distress, a dastardly villain, and a heroic savior.",
        source: "Literary Genre History",
      },
    ],
    context: {
      en: "While the term is often used pejoratively today to describe overly sentimental storytelling, melodrama was a highly popular and effective theatrical form in the 19th century.",
      bn: "উনিশ শতকের থিয়েটারে মেলোড্রামার ব্যাপক জনপ্রিয়তা ছিল। তবে বর্তমানে এটি সাধারণত অতিরিক্ত আবেগপূর্ণ বা অবাস্তব কাহিনিকে ব্যঙ্গ করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "drama",
        term: "Drama",
      },
      {
        id: "soap-opera",
        term: "Soap Opera",
      },
    ],
    oppositeTerms: [
      {
        id: "realism",
        term: "Realism",
      },
    ],
  },
  {
    id: "metafiction",
    term: "Metafiction",
    shortDescription:
      "Fiction in which the author self-consciously alludes to the artificiality or literariness of a work.",
    definition: {
      en: "Metafiction is a form of literature that emphasizes its own constructiveness, systematically drawing attention to its status as an artifact. It blurs the boundary between fiction and reality, often featuring authors interrupting the narrative, characters aware they are in a story, or stories about writing stories.",
      bn: "মেটাফিকশন বা অধি-উপন্যাস হলো সাহিত্যের এমন একটি রূপ যা নিজস্ব কৃত্রিমতা বা সাহিত্যিক বৈশিষ্ট্যের প্রতি সচেতনভাবে মনোযোগ আকর্ষণ করে। এটি কল্পকাহিনি এবং বাস্তবতার মধ্যে সীমানা অস্পষ্ট করে তোলে, যেখানে কথক গল্পে হস্তক্ষেপ করতে পারে বা চরিত্রগুলো জানতে পারে যে তারা কোনো গল্পের ভেতরে আছে।",
    },
    examples: [
      {
        text: "A novel about a reader trying to read a novel called 'If on a winter's night a traveler.'",
        source: "Italo Calvino, 'If on a winter's night a traveler'",
      },
      {
        text: "The narrator constantly digresses and discusses the structure of the very book the reader is holding.",
        source:
          "Laurence Sterne, 'The Life and Opinions of Tristram Shandy, Gentleman'",
      },
    ],
    context: {
      en: "A hallmark of postmodern literature, it is used to question the nature of storytelling, the relationship between reality and fiction, and the role of the author and reader.",
      bn: "পোস্টমডার্ন সাহিত্যের একটি বৈশিষ্ট্য, যা গল্প বলার প্রকৃতি, বাস্তবতা ও কল্পনার সম্পর্ক এবং লেখক ও পাঠকের ভূমিকা নিয়ে প্রশ্ন তুলতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "postmodernism",
        term: "Postmodernism",
      },
      {
        id: "self-reflexivity",
        term: "Self-reflexivity",
      },
    ],
  },
  {
    id: "metaphor",
    term: "Metaphor",
    shortDescription:
      "A direct comparison between two seemingly unrelated subjects without using 'like' or 'as'.",
    definition: {
      en: "A metaphor is a powerful figure of speech that makes an implicit, implied, or hidden comparison between two things that are unrelated, but which share some common characteristics. Unlike a simile, which says one thing is 'like' another, a metaphor boldly states that one thing *is* another. This creates strong imagery and helps convey abstract or complex emotions by linking them to familiar concepts.",
      bn: "মেটাফর বা রূপক হলো এমন একটি ফিগার অফ স্পিচ, যেখানে দুটি সম্পূর্ণ ভিন্ন জিনিসের মধ্যে সরাসরি তুলনা করা হয়। সিমিলির (Simile) মতো এখানে 'like' বা 'as' শব্দগুলো ব্যবহার করা হয় না, বরং বলা হয় একটি জিনিস 'হলো' অন্যটি। এটি লেখার মধ্যে গভীর ইমেজারি (imagery) তৈরি করে এবং পাঠকের কল্পনাশক্তিতে দারুণ প্রভাব ফেলে।",
    },
    examples: [
      {
        text: "All the world's a stage, and all the men and women merely players.",
        source: "As You Like It by William Shakespeare",
      },
      {
        text: "The sun in the west was a drop of burning gold that slid nearer and nearer the sill of the world.",
        source: "Lord of the Flies by William Golding",
      },
    ],
    context: {
      en: "Derived from the Greek word 'metaphora', which literally translates to 'carry over' or 'transfer'. It transfers the meaning or qualities of one word to another.",
      bn: "গ্রিক শব্দ 'metaphora' থেকে এর উৎপত্তি, যার আক্ষরিক অর্থ 'স্থানান্তর করা' বা 'বহন করা'। এটি একটি শব্দের গুণাবলি অন্য একটি শব্দের ওপর স্থানান্তর করে দেয়।",
    },
    similarTerms: [
      {
        id: "simile",
        term: "Simile",
      },
      {
        id: "allegory",
        term: "Allegory",
      },
    ],
  },
  {
    id: "meter",
    term: "Meter",
    shortDescription:
      "The regular rhythmic pattern of stressed and unstressed syllables in verse.",
    definition: {
      en: "In poetry, meter is the basic rhythmic structure of a verse or lines in verse. It is determined by the pattern of stressed and unstressed syllables, organized into units called feet. Common types of meter include iambic, trochaic, anapestic, and dactylic, which provide musicality and pacing to poetic works.",
      bn: "কবিতায় মিটার বা ছন্দোমাত্রা হলো চরণ বা পঙ্‌ক্তির মৌলিক লয় বা ছন্দ কাঠামো। এটি উচ্চারণে ঝোঁক (stressed) এবং ঝোঁকহীন (unstressed) ধ্বনির বিন্যাসের ওপর ভিত্তি করে তৈরি হয়, যা 'ফুট' (feet) নামক এককে বিভক্ত। ছন্দের এই সুশৃঙ্খল বিন্যাস কবিতায় সাঙ্গীতিক আবেদন ও গতিশীলতা নিয়ে আসে।",
    },
    examples: [
      {
        text: "Shall I compare thee to a summer's day? / Thou art more lovely and more temperate",
        source: "William Shakespeare, 'Sonnet 18' (Iambic Pentameter)",
      },
    ],
    context: {
      en: "Meter is fundamental to formal poetry, establishing the heartbeat of the poem and often reinforcing its thematic elements through variations in rhythm.",
      bn: "ছন্দোমাত্রা প্রথাগত কবিতার একটি মৌলিক উপাদান, যা কবিতার স্পন্দন তৈরি করে এবং প্রায়শই লয়ের বৈচিত্র্যের মাধ্যমে এর বিষয়বস্তুকে আরও জোরালো করে।",
    },
    similarTerms: [
      {
        id: "rhythm",
        term: "Rhythm",
      },
      {
        id: "foot",
        term: "Foot",
      },
      {
        id: "prosody",
        term: "Prosody",
      },
    ],
  },
  {
    id: "metonymy",
    term: "Metonymy",
    shortDescription:
      "A figure of speech where a thing is called by the name of something associated with it.",
    definition: {
      en: "A figure of speech in which a thing, concept, or person is not called by its own name, but by the name of something intimately associated with it in meaning or context. It relies on a relationship of contiguity or proximity.",
      bn: "মেটোনিমি বা লক্ষণালংকার হলো এমন একটি ভাষার অলংকার যেখানে কোনো বস্তু বা ধারণাকে তার নিজের নামে না ডেকে, তার সাথে ঘনিষ্ঠভাবে সম্পর্কিত অন্য কোনো নামে ডাকা হয়।",
    },
    examples: [
      {
        text: "The pen is mightier than the sword.",
        source:
          "Edward Bulwer-Lytton (where 'pen' represents written word/journalism, and 'sword' represents military power)",
      },
      {
        text: "The White House announced a new policy today.",
        source:
          "Common Usage (where 'The White House' stands for the US President/Administration)",
      },
    ],
    context: {
      en: "Metonymy serves to create vivid, economical imagery, allowing writers to evoke complex institutions or concepts through simple, tangible objects.",
      bn: "সাহিত্যে এবং প্রাত্যহিক কথাবার্তায় মেটোনিমির প্রচুর ব্যবহার দেখা যায়। এটি বড় কোনো ধারণাকে একটি ছোট ও পরিচিত শব্দের মাধ্যমে প্রকাশ করতে সাহায্য করে।",
    },
    similarTerms: [
      {
        id: "synecdoche",
        term: "Synecdoche",
      },
      {
        id: "metaphor",
        term: "Metaphor",
      },
    ],
  },
  {
    id: "metrical-foot",
    term: "Metrical Foot",
    shortDescription:
      "The basic repeating rhythmic unit that forms part of a line of verse in most Western traditions of poetry.",
    definition: {
      en: "A metrical foot is the fundamental structural unit of rhythm in poetry, composed of a specific sequence of stressed and unstressed (or long and short) syllables. Common feet include the iamb, trochee, anapest, and dactyl, which combine to dictate the meter of a poem.",
      bn: "মেট্রিক্যাল ফুট বা মাত্রাবৃত্ত হলো কবিতার ছন্দের মৌলিক একক, যা উচ্চারিত এবং অনুচ্চারিত (বা দীর্ঘ এবং হ্রস্ব) সিলেবলের একটি নির্দিষ্ট ক্রম নিয়ে গঠিত। আইয়াম্ব, ট্রোচি, অ্যানাপেস্ট এবং ড্যাক্টিলের মতো সাধারণ ফুটগুলো মিলে একটি কবিতার ছন্দ তৈরি করে।",
    },
    examples: [
      {
        text: "Double, / double / toil and / trouble; (Trochaic tetrameter)",
        source: "William Shakespeare, Macbeth",
      },
    ],
    context: {
      en: "Understanding metrical feet is essential for prosodic analysis (scansion) and appreciating the musicality of formal poetry.",
      bn: "ছন্দ বিশ্লেষণ (স্ক্যানশন) এবং প্রথাগত কবিতার সাংগীতিকতা উপলব্ধি করার জন্য মেট্রিক্যাল ফুট বোঝা অপরিহার্য।",
    },
    similarTerms: [
      {
        id: "meter",
        term: "Meter",
      },
      {
        id: "rhythm",
        term: "Rhythm",
      },
      {
        id: "iamb",
        term: "Iamb",
      },
    ],
  },
  {
    id: "minimalism",
    term: "Minimalism",
    shortDescription:
      "A style characterized by extreme spareness and simplicity.",
    definition: {
      en: "Minimalism in literature is a stylistic approach characterized by an economy of words, focusing on surface description and allowing context to dictate meaning. Minimalist writers eschew excessive adjectives, adverbs, and complex narrative structures, preferring sparse dialogue and understated exposition to evoke emotion or convey truth.",
      bn: "সাহিত্যে মিনিমালিজম বা ন্যূনতমবাদ হলো এমন একটি শৈলী যা শব্দের পরিমিত ব্যবহারের মাধ্যমে প্রকাশ পায়। এই রীতির লেখকরা অতিরিক্ত বিশেষণ বা জটিল বর্ণনার পরিবর্তে সাদামাটা বর্ণনা এবং পরিমিত সংলাপ ব্যবহার করেন, যেখানে পাঠকেরা অন্তর্নিহিত অর্থ নিজেরাই আবিষ্কার করেন।",
    },
    examples: [
      {
        text: "The hills across the valley of the Ebro were long and white. On this side there was no shade and no trees and the station was between two lines of rails in the sun.",
        source: "Ernest Hemingway, 'Hills Like White Elephants'",
      },
    ],
    context: {
      en: "Associated with the mid-to-late 20th century, minimalism encourages active reader participation, requiring them to infer subtext and unspoken psychological depth from minimal cues.",
      bn: "বিশ শতকের মাঝামাঝি বা শেষের দিকের এই রীতি পাঠকদের সক্রিয় অংশগ্রহণে উৎসাহিত করে, যেখানে তাদের ন্যূনতম সূত্র থেকে অন্তর্নিহিত মনস্তাত্ত্বিক গভীরতা খুঁজে বের করতে হয়।",
    },
    similarTerms: [
      {
        id: "understatement",
        term: "Understatement",
      },
    ],
    oppositeTerms: [
      {
        id: "maximalism",
        term: "Maximalism",
      },
      {
        id: "baroque",
        term: "Baroque",
      },
    ],
  },
  {
    id: "modernism",
    term: "Modernism",
    shortDescription:
      "A literary movement of the late 19th and early 20th centuries characterized by a self-conscious break with traditional ways of writing.",
    definition: {
      en: "Modernism was a revolutionary artistic and literary movement that emerged in the early 20th century, characterized by a deliberate departure from traditional forms and narratives. It embraced experimentation, stream of consciousness, fragmentation, and explored themes of alienation, disillusionment, and the chaotic nature of the modern world.",
      bn: "মডার্নিজম বা আধুনিকতাবাদ হলো বিংশ শতাব্দীর শুরুর দিকের একটি যুগান্তকারী সাহিত্য ও শিল্প আন্দোলন, যা ঐতিহ্যবাহী ফর্ম বা গঠন থেকে সচেতনভাবে দূরে সরে যায়। এতে নিরীক্ষা, স্ট্রিম অব কনশাসনেস বা চেতনার প্রবাহ এবং আধুনিক বিশ্বের বিচ্ছিন্নতা ও মোহভঙ্গের থিম অনুসন্ধান করা হয়।",
    },
    examples: [
      {
        text: "April is the cruellest month, breeding\nLilacs out of the dead land, mixing\nMemory and desire...",
        source: "T.S. Eliot, The Waste Land",
      },
    ],
    context: {
      en: "Heavily influenced by the devastation of World War I and rapid industrialization, fundamentally changing the trajectory of Western literature.",
      bn: "প্রথম বিশ্বযুদ্ধের ধ্বংসযজ্ঞ এবং দ্রুত শিল্পায়নের দ্বারা গভীরভাবে প্রভাবিত হয়ে এটি পশ্চিমা সাহিত্যের গতিপথকে মৌলিকভাবে পরিবর্তন করেছিল।",
    },
    similarTerms: [
      {
        id: "postmodernism",
        term: "Postmodernism",
      },
      {
        id: "imagism",
        term: "Imagism",
      },
    ],
    oppositeTerms: [
      {
        id: "romanticism",
        term: "Romanticism",
      },
      {
        id: "victorian-literature",
        term: "Victorian Literature",
      },
    ],
  },
  {
    id: "monologue",
    term: "Monologue",
    shortDescription: "An extended speech by one person.",
    definition: {
      en: "A monologue is an extended speech by a single character in a drama or narrative. It is presented in order to express the character's thoughts aloud, either directly addressing another character, the audience, or speaking to themselves.",
      bn: "মনোলগ বা একোলক্ষ্য হলো নাটক বা সাহিত্যে একজনমাত্র চরিত্রের একটি দীর্ঘ বক্তৃতা। এটি চরিত্রের চিন্তাভাবনা জোরে প্রকাশ করার জন্য উপস্থাপন করা হয়, যা অন্য কোনো চরিত্র, দর্শক বা নিজের প্রতি নির্দেশিত হতে পারে।",
    },
    examples: [
      {
        text: "To be, or not to be, that is the question...",
        source: "William Shakespeare, Hamlet",
      },
    ],
    context: {
      en: "Used in plays, poetry, and prose to reveal a character's inner thoughts, motivations, or unseen events.",
      bn: "নাটক, কবিতা এবং গদ্যে চরিত্রের অভ্যন্তরীণ চিন্তাভাবনা, প্রেরণা বা অদৃশ্য ঘটনাগুলো প্রকাশ করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "soliloquy",
        term: "Soliloquy",
      },
      {
        id: "dramatic-monologue",
        term: "Dramatic Monologue",
      },
    ],
    oppositeTerms: [
      {
        id: "dialogue",
        term: "Dialogue",
      },
    ],
  },
  {
    id: "mood",
    term: "Mood",
    shortDescription:
      "The emotional atmosphere or feeling created in a reader by a literary work.",
    definition: {
      en: "Mood refers to the emotional atmosphere or prevalent tone that a literary work evokes in the reader. It is established through the author's choice of setting, imagery, tone, and diction. While tone is the author's attitude toward the subject, mood is the feeling experienced by the audience as they immerse themselves in the text.",
      bn: "মুড বা আবহ হলো কোনো সাহিত্যকর্ম পাঠের সময় পাঠকের মনে যে আবেগ বা অনুভূতির সৃষ্টি হয়। লেখকের পটভূমি, চিত্রকল্প, ভাষা এবং স্বরের প্রয়োগের মাধ্যমে এটি তৈরি হয়। 'টোন' হলো বিষয়ের প্রতি লেখকের দৃষ্টিভঙ্গি, আর 'মুড' হলো পাঠকের মনস্তাত্ত্বিক অভিজ্ঞতা।",
    },
    examples: [
      {
        text: "During the whole of a dull, dark, and soundless day in the autumn of the year, when the clouds hung oppressively low in the heavens, I had been passing alone, on horseback, through a singularly dreary tract of country...",
        source: "Edgar Allan Poe, 'The Fall of the House of Usher'",
      },
    ],
    context: {
      en: "Mood is essential for engaging the reader emotionally, drawing them into the world of the narrative and setting the stage for the unfolding events.",
      bn: "পাঠককে মানসিকভাবে যুক্ত করতে এবং গল্পের জগতে প্রবেশ করাতে মুড বা আবহ অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে।",
    },
    similarTerms: [
      {
        id: "atmosphere",
        term: "Atmosphere",
      },
      {
        id: "tone",
        term: "Tone",
      },
    ],
  },
  {
    id: "motif",
    term: "Motif",
    shortDescription:
      "A recurring distinctive feature or dominant idea in an artistic or literary composition.",
    definition: {
      en: "A motif is a recurring image, sound, action, symbol, or other figure that possesses a symbolic significance in a literary work. Through its repetition, a motif helps to develop, reinforce, and unify the major themes of the narrative.",
      bn: "মোটিফ (Motif) হলো সাহিত্যে বারবার ফিরে আসা কোনো চিত্র, শব্দ, কাজ বা প্রতীক, যার একটি বিশেষ প্রতীকী অর্থ থাকে। এর পুনরাবৃত্তির মাধ্যমে মূল থিম বা বিষয়বস্তু আরও সুদৃঢ় এবং বিকশিত হয়।",
    },
    examples: [
      {
        text: "The recurring imagery of blood, representing guilt and the inescapable consequences of murder.",
        source: "William Shakespeare, 'Macbeth'",
      },
      {
        text: "The green light at the end of Daisy's dock, constantly appearing to symbolize Gatsby's unreachable dreams and the corrupted American Dream.",
        source: "F. Scott Fitzgerald, 'The Great Gatsby'",
      },
    ],
    context: {
      en: "Motifs act as architectural threads weaving a story together. They operate subtly beneath the surface of the plot, providing subconscious cues to the reader about the underlying meaning of the text.",
      bn: "মোটিফ গল্পের বুনন হিসেবে কাজ করে। এটি কাহিনির গভীরে নীরবে কাজ করে পাঠককে রচনার অন্তর্নিহিত অর্থ সম্পর্কে সংকেত দেয়।",
    },
    similarTerms: [
      {
        id: "theme",
        term: "Theme",
      },
      {
        id: "symbol",
        term: "Symbol",
      },
    ],
  },
  {
    id: "myth",
    term: "Myth",
    shortDescription:
      "A traditional story concerning early history or supernatural beings.",
    definition: {
      en: "A traditional narrative, usually involving gods, demigods, heroes, or supernatural forces, that aims to explain the origins of the world, natural phenomena, social customs, or fundamental human conditions. Myths represent the deep, symbolic beliefs of a culture.",
      bn: "মিথ বা পুরাণ হলো ঐতিহ্যবাহী রূপকথার মতো গল্প, যেখানে সাধারণত দেবতা, অতিপ্রাকৃত শক্তি বা বীরদের বর্ণনা থাকে। এর মাধ্যমে সৃষ্টির রহস্য, প্রাকৃতিক ঘটনা বা সামাজিক রীতিনীতির ব্যাখ্যা দেওয়া হয়।",
    },
    examples: [
      {
        text: "The myth of Prometheus stealing fire from the gods to give to humanity, explaining the origin of human civilization and technology.",
        source: "Greek Mythology",
      },
    ],
    context: {
      en: "Myths are foundational texts for literature, providing a vast reservoir of archetypes, allusions, and motifs that writers have drawn upon for millennia.",
      bn: "যেকোনো জাতির সাহিত্যের শেকড় লুকিয়ে থাকে তার পুরাণে। আধুনিক সাহিত্যিকরাও তাদের লেখায় রূপক হিসেবে পুরাণের বিভিন্ন চরিত্র ও ঘটনা ব্যবহার করেন।",
    },
    similarTerms: [
      {
        id: "legend",
        term: "Legend",
      },
      {
        id: "folklore",
        term: "Folklore",
      },
    ],
  },
  {
    id: "naturalism",
    term: "Naturalism",
    shortDescription:
      "A literary movement emphasizing observation and the scientific method in the fictional portrayal of reality.",
    definition: {
      en: "Naturalism is a literary movement of the late 19th century that applied scientific principles of objectivity and detachment to its study of human beings. It suggests that environment, heredity, and social conditions shape human character, often depicting life as harsh and deterministic.",
      bn: "ন্যাচারালিজম বা প্রকৃতিবাদ হলো উনবিংশ শতাব্দীর শেষের দিকের একটি সাহিত্যিক আন্দোলন, যা মানুষের অধ্যয়নে বৈজ্ঞানিক বস্তুনিষ্ঠতা এবং নির্লিপ্ততার নীতি প্রয়োগ করেছিল। এটি পরামর্শ দেয় যে পরিবেশ, বংশগতি এবং সামাজিক পরিস্থিতি মানুষের চরিত্র গঠন করে এবং প্রায়শই জীবনকে কঠোর ও নিয়তিবাদী হিসেবে চিত্রিত করে।",
    },
    examples: [
      {
        text: "The men in the boat did not know the color of the sky.",
        source: "Stephen Crane, The Open Boat",
      },
    ],
    context: {
      en: "Grew out of realism and was heavily influenced by Darwin's theory of evolution, focusing on the uncontrollable forces of nature and society.",
      bn: "এটি রিয়েলিজম থেকে উদ্ভূত এবং ডারউইনের বিবর্তন তত্ত্ব দ্বারা গভীরভাবে প্রভাবিত হয়েছিল, যা প্রকৃতি এবং সমাজের অনিয়ন্ত্রিত শক্তির ওপর দৃষ্টি নিবদ্ধ করে।",
    },
    similarTerms: [
      {
        id: "realism",
        term: "Realism",
      },
    ],
    oppositeTerms: [
      {
        id: "romanticism",
        term: "Romanticism",
      },
    ],
  },
  {
    id: "nemesis",
    term: "Nemesis",
    shortDescription:
      "An inescapable agent of someone's or something's downfall.",
    definition: {
      en: "In literature, a nemesis is an inescapable agent of downfall, ruin, or retribution, often serving as a protagonist's ultimate adversary. Originating from the Greek goddess of divine retribution, it refers to a force that brings about a character's justifiable punishment, usually due to their hubris.",
      bn: "নেমেসিস হলো এমন এক অদম্য শক্তি বা চরিত্র যা কোনো ব্যক্তির পতন বা ধ্বংসের কারণ হয়ে দাঁড়ায়। গ্রিক পুরাণে নেমেসিস ছিলেন প্রতিশোধের দেবী। সাহিত্যে এটি সাধারণত নায়কের অহংকার (Hubris) বা ভুলের শাস্তি নিশ্চিত করে।",
    },
    examples: [
      {
        text: "Professor Moriarty serves as the intellectual nemesis to Sherlock Holmes, matching his brilliance but utilizing it for crime.",
        source: "Arthur Conan Doyle, Sherlock Holmes series",
      },
    ],
    context: {
      en: "A nemesis provides a necessary counter-force to the protagonist, driving the conflict of the narrative and ensuring a moral or cosmic balance is maintained through poetic justice.",
      bn: "নায়কের চরম পরিণতি বা পতন ফুটিয়ে তুলতে নেমেসিসের ভূমিকা অপরিহার্য। এটি গল্পে এক ধরনের নৈতিক ভারসাম্য বজায় রাখে।",
    },
    similarTerms: [
      {
        id: "antagonist",
        term: "Antagonist",
      },
      {
        id: "arch-enemy",
        term: "Arch-enemy",
      },
    ],
  },
  {
    id: "neologism",
    term: "Neologism",
    shortDescription: "A newly coined word, phrase, or expression.",
    definition: {
      en: "A neologism is a newly created word, phrase, or usage that is in the process of entering common use, but has not yet been fully accepted into mainstream language. Authors often invent neologisms to describe new concepts, technologies, or specific fictional worlds, demonstrating linguistic creativity and expanding the boundaries of expression.",
      bn: "নিয়োলজিসম বা নবশব্দ হলো সদ্য উদ্ভাবিত কোনো শব্দ, বাক্যাংশ বা ভাষার নতুন ব্যবহার। লেখকরা অনেক সময় নতুন কোনো ধারণা, প্রযুক্তি বা কাল্পনিক জগতকে বর্ণনা করার জন্য নতুন শব্দ তৈরি করেন, যা তাদের ভাষাগত সৃজনশীলতার পরিচয় দেয়।",
    },
    examples: [
      {
        text: "'Twas brillig, and the slithy toves / Did gyre and gimble in the wabe...",
        source: "Lewis Carroll, 'Jabberwocky' (e.g., 'chortle', 'galumph')",
      },
    ],
    context: {
      en: "Neologisms are particularly common in science fiction and fantasy, where authors must articulate alien concepts, but they also appear in satire and poetry for stylistic effect.",
      bn: "বৈজ্ঞানিক কল্পকাহিনী এবং ফ্যান্টাসিতে এর ব্যবহার খুব বেশি দেখা যায়, তবে কবিতায় এবং ব্যঙ্গ রচনাতেও শৈলীগত কারণে নতুন শব্দ ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "portmanteau",
        term: "Portmanteau",
      },
      {
        id: "coinage",
        term: "Coinage",
      },
    ],
    oppositeTerms: [
      {
        id: "archaism",
        term: "Archaism",
      },
    ],
  },
  {
    id: "objective-correlative",
    term: "Objective Correlative",
    shortDescription:
      "A set of objects or events that evoke a specific emotion.",
    definition: {
      en: "Coined by T.S. Eliot, the objective correlative is a literary technique representing an emotion through a specific set of objects, situations, or a chain of events. Instead of describing an emotion directly, the writer provides the sensory and situational components that will inevitably awaken that exact emotional response in the reader.",
      bn: "টি. এস. এলিয়ট প্রবর্তিত 'অবজেক্টিভ কোরিলেটিভ' বা বস্তুগত সমবায় হলো এমন এক কৌশল, যেখানে সরাসরি অনুভূতির কথা না বলে কিছু বস্তু, পরিস্থিতি বা ঘটনার পরম্পরার মাধ্যমে পাঠকের মনে নির্দিষ্ট আবেগ জাগিয়ে তোলা হয়।",
    },
    examples: [
      {
        text: "I have measured out my life with coffee spoons;",
        source: "T.S. Eliot, 'The Love Song of J. Alfred Prufrock'",
      },
    ],
    context: {
      en: "This concept became a cornerstone of modernist literary criticism, advocating for showing rather than telling by grounding abstract emotions in concrete imagery.",
      bn: "এটি আধুনিকতাবাদী সাহিত্য সমালোচনার একটি ভিত্তি, যা বিমূর্ত আবেগকে মূর্ত চিত্রকল্পের মাধ্যমে প্রকাশ করার ('বলার চেয়ে দেখানো' বা 'showing rather than telling') ওপর জোর দেয়।",
    },
    similarTerms: [
      {
        id: "imagery",
        term: "Imagery",
      },
      {
        id: "symbolism",
        term: "Symbolism",
      },
    ],
  },
  {
    id: "octave",
    term: "Octave",
    shortDescription: "An eight-line stanza or poem.",
    definition: {
      en: "An octave is an eight-line stanza or poem. In the context of a Petrarchan (Italian) sonnet, the octave is the first eight lines, which typically propose a problem, question, or situation, usually following an abbaabba rhyme scheme.",
      bn: "অকটেভ বা অষ্টক হলো আট লাইনের স্তবক বা কবিতা। পেত্রার্কান (ইতালীয়) সনেটের প্রসঙ্গে, অষ্টক হলো প্রথম আটটি লাইন, যা সাধারণত একটি সমস্যা, প্রশ্ন বা পরিস্থিতির প্রস্তাব করে এবং প্রায়শই abbaabba অন্ত্যমিল অনুসরণ করে।",
    },
    examples: [
      {
        text: "Much have I travell'd in the realms of gold, / And many goodly states and kingdoms seen; / Round many western islands have I been / Which bards in fealty to Apollo hold. / Oft of one wide expanse had I been told / That deep-brow'd Homer ruled as his demesne; / Yet did I never breathe its pure serene / Till I heard Chapman speak out loud and bold:",
        source: "John Keats, On First Looking into Chapman's Homer",
      },
    ],
    context: {
      en: "Fundamental in sonnet structure, specifically setting up the premise that is later resolved or commented upon in the sestet.",
      bn: "সনেটের কাঠামোতে এটি মৌলিক, যা নির্দিষ্টভাবে একটি প্রেক্ষাপট তৈরি করে যার সমাধান বা মন্তব্য পরবর্তীতে সেস্টেটে (ষট্ক) দেওয়া হয়।",
    },
    similarTerms: [
      {
        id: "stanza",
        term: "Stanza",
      },
      {
        id: "sestet",
        term: "Sestet",
      },
    ],
  },
  {
    id: "ode",
    term: "Ode",
    shortDescription:
      "A lyric poem in the form of an address to a particular subject, often elevated in style.",
    definition: {
      en: "An ode is a highly formal, ceremonious, and emotionally expressive lyric poem that addresses and often celebrates a person, place, thing, or abstract idea. Odes are characterized by their exalted tone, elevated diction, and complex stanzaic structures (such as Pindaric, Horatian, or Irregular).",
      bn: "ওড (Ode) বা গাথিকবিতা হলো একটি উচ্ছ্বাসপূর্ণ এবং আবেগপূর্ণ গীতি কবিতা, যা সাধারণত কোনো ব্যক্তি, বস্তু, স্থান বা ধারণার প্রশংসায় রচিত হয়। এর ভাষা অত্যন্ত গম্ভীর, আড়ম্বরপূর্ণ এবং এর গঠনশৈলী বেশ জটিল হয়ে থাকে।",
    },
    examples: [
      {
        text: '"O wild West Wind, thou breath of Autumn\'s being..."',
        source: "Percy Bysshe Shelley, 'Ode to the West Wind'",
      },
      {
        text: '"Thou still unravish\'d bride of quietness, / Thou foster-child of silence and slow time..."',
        source: "John Keats, 'Ode on a Grecian Urn'",
      },
    ],
    context: {
      en: "Historically used in classical antiquity for public ceremonies, the ode evolved in English literature, particularly during the Romantic period, into a profound medium for personal meditation and the romanticization of nature and art.",
      bn: "ঐতিহাসিকভাবে এটি ধ্রুপদী যুগে জনসমাবেশে গাওয়া হতো, তবে রোমান্টিক যুগে এটি ব্যক্তিগত ধ্যান, প্রকৃতি এবং শিল্পের গভীর আবেগ প্রকাশের একটি অন্যতম মাধ্যম হয়ে ওঠে।",
    },
    similarTerms: [
      {
        id: "elegy",
        term: "Elegy",
      },
      {
        id: "lyric_poetry",
        term: "Lyric Poetry",
      },
      {
        id: "hymn",
        term: "Hymn",
      },
    ],
  },
  {
    id: "onomatopoeia",
    term: "Onomatopoeia",
    shortDescription:
      "The formation of a word from a sound associated with what is named.",
    definition: {
      en: "Onomatopoeia is a literary device in which the phonetic sound of a word imitates, resembles, or suggests the actual sound that it describes. It bridges the gap between the auditory experience and textual representation.",
      bn: "অনোমাটোপোইয়া (Onomatopoeia) বা ধ্বন্যাত্মক শব্দ হলো এমন এক ধরনের শব্দ, যার উচ্চারণ সেই শব্দের অর্থের সাথে সম্পৃক্ত শব্দের (sound) মতো শোনায়। এটি পাঠ্যের মধ্যে বাস্তব শব্দের ধ্বনিগত প্রভাব তৈরি করে।",
    },
    examples: [
      {
        text: '"The moan of doves in immemorial elms, / And murmuring of innumerable bees."',
        source: "Alfred, Lord Tennyson, 'Come Down, O Maid'",
      },
      {
        text: "Words like 'buzz', 'hiss', 'bang', 'whisper', and 'sizzle'.",
        source: "Common language",
      },
    ],
    context: {
      en: "Poets and prose writers use onomatopoeia to heighten auditory imagery, making the reading experience more visceral, musical, and engaging by bringing scenes to life through implied sound.",
      bn: "কবি ও লেখকরা শ্রুতিমধুরতা বাড়াতে এবং পাঠককে দৃশ্যের সাথে যুক্ত করতে এই ধ্বন্যাত্মক শব্দ ব্যবহার করেন, যা পড়ার অভিজ্ঞতাকে আরও জীবন্ত করে তোলে।",
    },
    similarTerms: [
      {
        id: "alliteration",
        term: "Alliteration",
      },
      {
        id: "auditory_imagery",
        term: "Auditory Imagery",
      },
    ],
  },
  {
    id: "oxymoron",
    term: "Oxymoron",
    shortDescription:
      "A figure of speech in which apparently contradictory terms appear in conjunction.",
    definition: {
      en: "An oxymoron is a condensed figure of speech wherein two seemingly opposing or contradictory words are juxtaposed to create a rhetorical effect. It is a paradox compressed into a few words, designed to reveal a deeper, complex truth or emotional conflict.",
      bn: "অক্সিমোরন (Oxymoron) বা বিরোধালংকার হলো এমন একটি অলংকার, যেখানে দুটি সম্পূর্ণ বিপরীত বা স্ববিরোধী শব্দকে পাশাপাশি বসিয়ে একটি নতুন অর্থ তৈরি করা হয়। এটি একটি সংক্ষিপ্ত প্যারাডক্স, যা গভীর সত্য বা আবেগের দ্বন্দ্ব প্রকাশ করে।",
    },
    examples: [
      {
        text: '"Why, then, O brawling love! O loving hate! / O anything, of nothing first create! / O heavy lightness! serious vanity!"',
        source: "William Shakespeare, 'Romeo and Juliet'",
      },
      {
        text: '"Parting is such sweet sorrow."',
        source: "William Shakespeare, 'Romeo and Juliet'",
      },
    ],
    context: {
      en: "Oxymorons capture the inherent duality and contradictions of human experience. They force the reader to pause and reconcile the tension between the juxtaposed words, uncovering profound poetic nuance.",
      bn: "অক্সিমোরন মানব জীবনের অন্তর্নিহিত দ্বন্দ্ব এবং বৈপরীত্যকে ধারণ করে। এটি পাঠককে থামাতে এবং বিপরীত শব্দগুলোর মধ্যকার সূক্ষ্ম কাব্যিক অর্থ বুঝতে বাধ্য করে।",
    },
    similarTerms: [
      {
        id: "paradox",
        term: "Paradox",
      },
      {
        id: "juxtaposition",
        term: "Juxtaposition",
      },
    ],
  },
  {
    id: "parable",
    term: "Parable",
    shortDescription:
      "A simple story used to illustrate a moral or spiritual lesson.",
    definition: {
      en: "A parable is a brief, succinct, and didactic narrative designed to illustrate a single moral principle, religious lesson, or universal truth. Unlike fables, which often employ animal characters, parables feature human characters facing realistic, albeit symbolic, situations.",
      bn: "প্যারাবল (Parable) বা রূপক কাহিনি হলো একটি সংক্ষিপ্ত এবং শিক্ষামূলক গল্প, যা মূলত কোনো নৈতিক বা আধ্যাত্মিক শিক্ষা দেওয়ার উদ্দেশ্যে বলা হয়। ফেবলের (fable) মতো এতে পশুপাখি থাকে কাক বা শিয়াল নয়, বরং মানুষের বাস্তব জীবনের ঘটনা দিয়ে প্রতীকীভাবে সত্য তুলে ধরা হয়।",
    },
    examples: [
      {
        text: "The Parable of the Good Samaritan, teaching the virtue of loving one's neighbor regardless of origin.",
        source: "The Bible (Luke 10:25–37)",
      },
      {
        text: "The Parable of the Prodigal Son, illustrating themes of sin, repentance, and unconditional forgiveness.",
        source: "The Bible (Luke 15:11–32)",
      },
    ],
    context: {
      en: "Parables function as powerful pedagogical tools, utilizing familiar, everyday scenarios to make complex ethical or theological concepts accessible and deeply resonant for a broad audience.",
      bn: "প্যারাবল একটি শক্তিশালী শিক্ষামূলক হাতিয়ার হিসেবে কাজ করে, যা পরিচিত ও দৈনন্দিন জীবনের ঘটনা ব্যবহার করে জটিল নৈতিক বা ধর্মীয় ধারণাকে সাধারণ মানুষের কাছে সহজগম্য করে তোলে।",
    },
    similarTerms: [
      {
        id: "allegory",
        term: "Allegory",
      },
      {
        id: "fable",
        term: "Fable",
      },
    ],
  },
  {
    id: "paradox",
    term: "Paradox",
    shortDescription:
      "A statement that initially appears absurd or self-contradictory but reveals a deeper truth upon reflection.",
    definition: {
      en: "A paradox is a literary device comprising a statement or proposition that seems logically impossible, self-contradictory, or absurd, but which, upon closer examination, contains an underlying, profound truth. Writers use paradoxes to challenge the reader's traditional ways of thinking, forcing them to pause and critically analyze the concept being presented.",
      bn: "প্যারাডক্স হলো এমন একটি উক্তি বা পরিস্থিতি, যা প্রথম দেখায় সম্পূর্ণ অযৌক্তিক বা স্ববিরোধী মনে হয়, কিন্তু গভীরভাবে চিন্তা করলে এর ভেতরে একটি লুকানো সত্য খুঁজে পাওয়া যায়। লেখকরা মূলত পাঠকদের প্রচলিত চিন্তাধারাকে ধাক্কা দিতে এবং কোনো বিষয় নিয়ে নতুন করে ভাবতে বাধ্য করার জন্য প্যারাডক্স ব্যবহার করেন।",
    },
    examples: [
      {
        text: "I must be cruel to be kind.",
        source: "Hamlet by William Shakespeare",
      },
      {
        text: "All animals are equal, but some are more equal than others.",
        source: "Animal Farm by George Orwell",
      },
    ],
    context: {
      en: "From Greek 'paradoxon', meaning 'contrary to expectation'. It has been heavily utilized in religious texts, philosophy, and metaphysical poetry (like John Donne's works).",
      bn: "গ্রিক শব্দ 'paradoxon' থেকে আগত, যার অর্থ 'প্রত্যাশার বিপরীত'। মেটাফিজিক্যাল কবিতায় (যেমন জন ডানের কবিতায়) এর ব্যবহার খুব বেশি দেখা যায়।",
    },
  },
  {
    id: "parallelism",
    term: "Parallelism",
    shortDescription:
      "The repetition of grammatical elements in writing and speaking.",
    definition: {
      en: "Parallelism is a rhetorical device that consists of repetition among adjacent sentences or clauses. It involves matching the structure of phrases, clauses, or sentences to show that ideas are of equal importance, adding symmetry, rhythm, and emphasis.",
      bn: "প্যারালালিজম বা সমান্তরালতা হলো একটি আলংকারিক কৌশল যা সংলগ্ন বাক্য বা খণ্ডবাক্যগুলোর মধ্যে পুনরাবৃত্তি নিয়ে গঠিত। এটি শব্দগুচ্ছ, খণ্ডবাক্য বা বাক্যগুলোর গঠন মেলানোর মাধ্যমে দেখায় যে ধারণাগুলো সমান গুরুত্বপূর্ণ, যা প্রতিসাম্য, ছন্দ এবং জোর প্রদান করে।",
    },
    examples: [
      {
        text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...",
        source: "Charles Dickens, A Tale of Two Cities",
      },
    ],
    context: {
      en: "Used extensively in prose, poetry, and speeches to create rhythm, build momentum, and make statements more memorable.",
      bn: "গদ্য, কবিতা এবং বক্তৃতায় ছন্দ তৈরি করতে, গতিশীলতা বাড়াতে এবং বক্তব্যকে আরও স্মরণীয় করে তুলতে ব্যাপকভাবে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "anaphora",
        term: "Anaphora",
      },
      {
        id: "chiasmus",
        term: "Chiasmus",
      },
    ],
  },
  {
    id: "parody",
    term: "Parody",
    shortDescription:
      "An imitation of the style of a particular writer, artist, or genre with deliberate exaggeration for comic effect.",
    definition: {
      en: "A parody is a comedic or satirical imitation of a specific literary work, an author's distinct style, or a well-known genre. It achieves its humorous or critical effect by deliberately exaggerating or mocking the signature characteristics, tropes, and conventions of the original subject.",
      bn: "প্যারোডি (Parody) বা ব্যঙ্গাত্মক অনুকরণ হলো কোনো নির্দিষ্ট লেখক, সাহিত্যকর্ম বা ধারার (genre) হাস্যরসাত্মক অনুকরণ। এর উদ্দেশ্য হলো মূল রচনার বৈশিষ্ট্যগুলোকে অতিশয়োক্তি করে বা বিদ্রূপ করে হাস্যরস তৈরি করা।",
    },
    examples: [
      {
        text: "Cervantes' 'Don Quixote' is a legendary parody of traditional chivalric romances.",
        source: "Miguel de Cervantes, 'Don Quixote'",
      },
      {
        text: "Alexander Pope's 'The Rape of the Lock' parodies the grand style of classical epics to describe a trivial social dispute.",
        source: "Alexander Pope, 'The Rape of the Lock'",
      },
    ],
    context: {
      en: "Parodies are both a form of entertainment and literary criticism. By ridiculing stylistic excesses or thematic absurdities, parody highlights the artificiality of certain literary conventions.",
      bn: "প্যারোডি একই সাথে বিনোদন এবং সাহিত্য সমালোচনার একটি রূপ। এটি মূল রচনার অতিরঞ্জিত শৈলী বা থিমকে হাস্যকরভাবে উপস্থাপন করে সাহিত্যের নির্দিষ্ট রীতিনীতির কৃত্রিমতা প্রকাশ করে।",
    },
    similarTerms: [
      {
        id: "satire",
        term: "Satire",
      },
      {
        id: "spoof",
        term: "Spoof",
      },
      {
        id: "lampoon",
        term: "Lampoon",
      },
    ],
  },
  {
    id: "pastiche",
    term: "Pastiche",
    shortDescription:
      "A literary work that imitates the style of another author or period.",
    definition: {
      en: "A pastiche is a literary piece that deliberately imitates the style, tone, or character of another writer, artist, or historical period. Unlike a parody, which mocks or satirizes its subject, a pastiche is typically a respectful homage that celebrates the original work by recreating its defining characteristics.",
      bn: "প্যাস্টিস হলো এমন একটি সাহিত্যকর্ম যা সযত্নে অন্য কোনো লেখক, শিল্পী বা ঐতিহাসিক যুগের শৈলী ও সুরকে অনুকরণ করে। প্যারোডির মতো এটি কাউকে ব্যঙ্গ করে না, বরং মূল রচনার বৈশিষ্ট্যগুলো পুনর্নির্মাণের মাধ্যমে তার প্রতি শ্রদ্ধার্ঘ্য নিবেদন করে।",
    },
    examples: [
      {
        text: "Wide Sargasso Sea (imitating and expanding upon Charlotte Brontë's Jane Eyre)",
        source: "Jean Rhys, 'Wide Sargasso Sea'",
      },
    ],
    context: {
      en: "Pastiche is a prominent feature of postmodern literature, reflecting a playful intertextuality and an awareness of literary history and conventions.",
      bn: "এটি উত্তর-আধুনিক সাহিত্যের একটি উল্লেখযোগ্য বৈশিষ্ট্য, যা সাহিত্যের ইতিহাস ও পূর্ববর্তী রচনাগুলোর সাথে একটি আন্তঃপাঠ্যিক সম্পর্ক বা ইন্টারটেক্সচুয়ালিটি তৈরি করে।",
    },
    similarTerms: [
      {
        id: "homage",
        term: "Homage",
      },
      {
        id: "parody",
        term: "Parody",
      },
    ],
    oppositeTerms: [
      {
        id: "originality",
        term: "Originality",
      },
    ],
  },
  {
    id: "pastoral",
    term: "Pastoral",
    shortDescription:
      "A literary work idealizing the rural life, especially the life of shepherds.",
    definition: {
      en: "Pastoral literature is a genre that portrays and romanticizes the idyllic, tranquil life of shepherds and rural landscapes. It presents a highly stylized, utopian vision of country life, implicitly or explicitly contrasting its innocence and purity with the corruption and complexity of urban or courtly life.",
      bn: "প্যাস্টোরাল (Pastoral) বা রাখালি সাহিত্য হলো এমন এক ধরনের সাহিত্য, যেখানে গ্রামীণ জীবন, বিশেষত রাখালদের সহজ-সরল ও শান্তিময় জীবনকে আদর্শায়িত করে তুলে ধরা হয়। এটি শহুরে বা রাজকীয় জীবনের জটিলতা এবং দুর্নীতির বিপরীতে প্রকৃতির কোলে নির্মল জীবনের চিত্র আঁকে।",
    },
    examples: [
      {
        text: '"Come live with me and be my love, / And we will all the pleasures prove, / That Valleys, groves, hills, and fields, / Woods, or steepy mountain yields."',
        source: "Christopher Marlowe, 'The Passionate Shepherd to His Love'",
      },
      {
        text: "John Milton's 'Lycidas', a pastoral elegy mourning the death of a friend by depicting him as a fellow shepherd.",
        source: "John Milton, 'Lycidas'",
      },
    ],
    context: {
      en: "The pastoral mode allows writers to engage in social critique by establishing an artificial but powerful dichotomy between the idyllic Golden Age of nature and the corrupted present of civilization.",
      bn: "প্যাস্টোরাল ধারা লেখকদের সামাজিক সমালোচনা করার সুযোগ দেয়, যেখানে প্রকৃতির শান্তিময় জীবনকে সভ্যতার কলুষিত রূপের বিপরীত হিসেবে দেখানো হয়।",
    },
    similarTerms: [
      {
        id: "bucolic",
        term: "Bucolic",
      },
      {
        id: "idyll",
        term: "Idyll",
      },
      {
        id: "eclogue",
        term: "Eclogue",
      },
    ],
  },
  {
    id: "pathetic-fallacy",
    term: "Pathetic Fallacy",
    shortDescription:
      "Attributing human emotions to inanimate objects or nature.",
    definition: {
      en: "Coined by John Ruskin, pathetic fallacy is a specific type of personification where human emotions or feelings are attributed to nature or inanimate objects. It is often used to reflect the mood of a character or the overall atmosphere of the narrative, using the physical environment to mirror inner emotional states.",
      bn: "জন রাস্কিন প্রবর্তিত প্যাথেটিক ফ্যালাসি হলো এক ধরনের পার্সোনিফিকেশন বা ব্যক্তি সত্তারোপ, যেখানে জড়বস্তু বা প্রকৃতির ওপর মানবিক আবেগ বা অনুভূতি আরোপ করা হয়। এটি সাধারণত চরিত্রের মনস্তত্ত্ব বা গল্পের সার্বিক আবহকে প্রকৃতির মাধ্যমে ফুটিয়ে তুলতে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: "The night has been unruly. Where we lay, / Our chimneys were blown down and, as they say, / Lamentings heard i' the air, strange screams of death...",
        source: "William Shakespeare, 'Macbeth'",
      },
    ],
    context: {
      en: "This technique bridges the gap between the internal world of the characters and the external environment, heightening dramatic tension and thematic resonance.",
      bn: "এই কৌশলটি চরিত্রের অন্তর্জগৎ এবং বাহ্যিক পরিবেশের মধ্যে সেতুবন্ধন তৈরি করে, যা নাটকীয় উত্তেজনা ও বিষয়বস্তুর গভীরতা বৃদ্ধি করে।",
    },
    similarTerms: [
      {
        id: "personification",
        term: "Personification",
      },
      {
        id: "anthropomorphism",
        term: "Anthropomorphism",
      },
    ],
  },
  {
    id: "pathos",
    term: "Pathos",
    shortDescription: "A quality that evokes pity, sadness, or compassion.",
    definition: {
      en: "Pathos is a rhetorical mode of persuasion and a literary quality that intentionally appeals to the audience's emotions. It evokes feelings of deep pity, sorrow, sympathy, or compassion, connecting the reader profoundly to the suffering or vulnerability of the characters.",
      bn: "প্যাথোস (Pathos) বা করুণ রস হলো সাহিত্যের এমন একটি গুণ, যা পাঠক বা দর্শকের মনে করুণা, সহানুভূতি বা গভীর দুঃখের অনুভূতি জাগিয়ে তোলে। এটি চরিত্রের দুর্বলতা বা কষ্টের সাথে পাঠকের আবেগের সংযোগ স্থাপন করে।",
    },
    examples: [
      {
        text: 'King Lear holding the body of his beloved daughter, Cordelia: "And my poor fool is hang\'d! No, no, no life! / Why should a dog, a horse, a rat, have life, / And thou no breath at all?"',
        source: "William Shakespeare, 'King Lear'",
      },
      {
        text: "The agonizing descriptions of poverty and the suffering of children in Victorian London.",
        source: "Charles Dickens, 'Oliver Twist'",
      },
    ],
    context: {
      en: "As one of Aristotle's three modes of persuasion (along with ethos and logos), pathos is critical in tragedy and drama to ensure the audience is emotionally invested in the narrative and undergoes a cathartic experience.",
      bn: "অ্যারিস্টটলের তিনটি প্ররোচনা পদ্ধতির (ethos, logos, pathos) একটি হিসেবে ট্র্যাজেডিতে প্যাথোস অত্যন্ত গুরুত্বপূর্ণ। এটি নিশ্চিত করে যে পাঠক বা দর্শক মানসিকভাবে গল্পে যুক্ত হবে এবং ক্যাথারসিস বা আবেগগত মুক্তির অভিজ্ঞতা লাভ করবে।",
    },
    similarTerms: [
      {
        id: "tragedy",
        term: "Tragedy",
      },
      {
        id: "catharsis",
        term: "Catharsis",
      },
    ],
  },
  {
    id: "persona",
    term: "Persona",
    shortDescription:
      "The voice or character assumed by the author in a literary work.",
    definition: {
      en: "A persona is the distinct voice, character, or role assumed by an author in a literary work. It acts as a 'mask' through which the writer speaks, separating the author's real identity from the narrative voice or the speaker of a poem.",
      bn: "পারসোনা হলো কোনো সাহিত্যকর্মে লেখকের দ্বারা গৃহীত স্বতন্ত্র কণ্ঠস্বর, চরিত্র বা ভূমিকা। এটি একটি 'মুখোশ' হিসেবে কাজ করে যার মাধ্যমে লেখক কথা বলেন, যা লেখকের আসল পরিচয়কে আখ্যানের কণ্ঠস্বর বা কবিতার বক্তা থেকে আলাদা করে।",
    },
    examples: [
      {
        text: "Let us go then, you and I, / When the evening is spread out against the sky / Like a patient etherized upon a table;",
        source: "T.S. Eliot, The Love Song of J. Alfred Prufrock",
      },
    ],
    context: {
      en: "Commonly used in poetry and fiction to explore perspectives, dramatic monologues, and unreliable narrators without directly implicating the author's personal views.",
      bn: "কবিতা এবং কল্পকাহিনীতে দৃষ্টিভঙ্গি, ড্রামাটিক মনোলগ এবং অবিশ্বস্ত বর্ণনাকারীদের অন্বেষণ করতে ব্যাপকভাবে ব্যবহৃত হয়, যা সরাসরি লেখকের ব্যক্তিগত মতামতকে জড়িত করে না।",
    },
    similarTerms: [
      {
        id: "narrator",
        term: "Narrator",
      },
      {
        id: "speaker",
        term: "Speaker",
      },
    ],
  },
  {
    id: "personification",
    term: "Personification",
    shortDescription: "Attributing human characteristics to non-human things.",
    definition: {
      en: "The attribution of a personal nature or human characteristics to something nonhuman, or the representation of an abstract quality in human form.",
      bn: "এমন এক প্রকার অলংকার যেখানে কোনো জড় বস্তু বা বিমূর্ত ধারণার উপর মানবীয় গুণাবলি বা বৈশিষ্ট্য আরোপ করা হয়।",
    },
    examples: [
      {
        text: "Because I could not stop for Death – He kindly stopped for me",
        source: "Emily Dickinson",
      },
    ],
    context: {
      en: "Widely used in poetry to create vivid imagery and make abstract concepts relatable.",
      bn: "কবিতায় স্পষ্ট চিত্রকল্প তৈরি করতে এবং বিমূর্ত ধারণাকে সহজবোধ্য করতে এটি ব্যাপকভাবে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "anthropomorphism",
        term: "Anthropomorphism",
      },
      {
        id: "pathetic-fallacy",
        term: "Pathetic Fallacy",
      },
    ],
  },
  {
    id: "picaresque",
    term: "Picaresque",
    shortDescription:
      "A genre of fiction depicting the adventures of a roguish hero.",
    definition: {
      en: "The picaresque novel is a genre of prose fiction that depicts the adventures of a roguish, but 'appealing' hero, of low social class, who lives by their wits in a corrupt society. These novels typically adopt a realistic style, with elements of comedy and satire.",
      bn: "পিকারেস্ক উপন্যাস হলো গদ্য কল্পকাহিনীর একটি ধরণ যা একটি দুর্বৃত্ত অথচ 'আকর্ষণীয়' নায়কের দুঃসাহসিক কাজগুলোকে চিত্রিত করে। এই নায়ক সাধারণত নিম্ন সামাজিক শ্রেণীর হয় এবং একটি দুর্নীতিগ্রস্ত সমাজে নিজের বুদ্ধির জোরে বেঁচে থাকে। এই উপন্যাসগুলো সাধারণত কমেডি এবং ব্যঙ্গের উপাদানসহ একটি বাস্তববাদী শৈলী গ্রহণ করে।",
    },
    examples: [
      {
        text: "The Adventures of Huckleberry Finn features a picaresque narrative as Huck travels down the Mississippi River.",
        source: "Mark Twain, The Adventures of Huckleberry Finn",
      },
    ],
    context: {
      en: "Originated in 16th-century Spain and influenced the development of the modern novel, offering episodic narratives that satirize societal norms.",
      bn: "ষোড়শ শতাব্দীর স্পেনে উদ্ভূত এবং আধুনিক উপন্যাসের বিকাশকে প্রভাবিত করেছিল, যা এপিসোডিক আখ্যান সরবরাহ করে এবং সামাজিক নিয়মগুলোকে ব্যঙ্গ করে।",
    },
    similarTerms: [
      {
        id: "satire",
        term: "Satire",
      },
      {
        id: "bildungsroman",
        term: "Bildungsroman",
      },
    ],
  },
  {
    id: "poetic-justice",
    term: "Poetic Justice",
    shortDescription:
      "The rewarding of virtue and the punishment of vice, often in an ironic manner.",
    definition: {
      en: "Poetic justice is an ideal outcome in literature where virtue is ultimately rewarded and vice punished. The concept emphasizes a moral universe where actions have fitting consequences. Often, the punishment or reward is directly related to the character's actions, sometimes occurring with a satisfying sense of irony.",
      bn: "পোয়েটিক জাস্টিস বা কাব্যিক ন্যায়বিচার হলো সাহিত্যের এমন এক পরিণতি, যেখানে সৎকর্ম পুরস্কৃত হয় এবং পাপ বা অন্যায় শাস্তি পায়। এখানে চরিত্রের কাজের ধরন অনুযায়ী তার পরিণতি নির্ধারিত হয়, যা প্রায়শই এক ধরনের ভাগ্যের পরিহাস বা আয়রনির জন্ম দেয়।",
    },
    examples: [
      {
        text: "Claudius is killed by the very poisoned sword and poisoned wine he prepared for Hamlet.",
        source: "William Shakespeare, 'Hamlet'",
      },
    ],
    context: {
      en: "A hallmark of classical and Renaissance drama, poetic justice provides moral closure to a narrative, reassuring the audience of the inherent fairness of the universe.",
      bn: "ধ্রুপদী ও রেনেসাঁস যুগের নাটকের এটি একটি প্রধান বৈশিষ্ট্য, যা দর্শকদের আশ্বস্ত করে যে জগতে ন্যায়বিচার প্রতিষ্ঠিত হয়।",
    },
    similarTerms: [
      {
        id: "karma",
        term: "Karma",
      },
      {
        id: "irony",
        term: "Irony",
      },
    ],
  },
  {
    id: "point-of-view",
    term: "Point of View",
    shortDescription: "The perspective from which a story is narrated.",
    definition: {
      en: "The perspective from which a story is narrated, such as first-person, second-person, third-person limited, or third-person omniscient.",
      bn: "যে দৃষ্টিকোণ থেকে কোনো গল্প বর্ণনা করা হয়, যেমন প্রথম পুরুষ, দ্বিতীয় পুরুষ, বা তৃতীয় পুরুষের দৃষ্টিকোণ।",
    },
    examples: [
      {
        text: "Call me Ishmael.",
        source: "Herman Melville, Moby-Dick",
      },
    ],
    context: {
      en: "Determines what the reader knows and how they perceive the events and characters.",
      bn: "এটি নির্ধারণ করে যে পাঠক কী জানবে এবং ঘটনা ও চরিত্রগুলিকে তারা কীভাবে উপলব্ধি করবে।",
    },
  },
  {
    id: "polysyndeton",
    term: "Polysyndeton",
    shortDescription: "The repeated use of conjunctions in quick succession.",
    definition: {
      en: "A stylistic device in which several coordinating conjunctions (mostly 'and' or 'or') are used in succession in order to achieve an artistic effect. It slows down the rhythm and gives equal importance to every item in the list.",
      bn: "পলিসিনডেটন হলো এমন একটি কৌশল যেখানে বাক্যে পর পর একাধিক সংযোজক অব্যয় ব্যবহৃত হয়। এটি পঠনের গতি মন্থর করে এবং তালিকার প্রতিটি উপাদানকে সমান গুরুত্ব দেয়।",
    },
    examples: [
      {
        text: "Let the whitefolks have their money and power and segregation and sarcasm and big houses and schools and lawns like carpets, and books, and mostly—mostly—let them have their whiteness.",
        source: "Maya Angelou, 'I Know Why the Caged Bird Sings'",
      },
    ],
    context: {
      en: "Used to convey a sense of abundance, overwhelm, or exhaustion. The repetitive rhythm can mirror the emotional weight of the content.",
      bn: "এটি প্রাচুর্য, অভিভূত অবস্থা বা ক্লান্তির অনুভূতি বোঝাতে ব্যবহৃত হয়। এর পুনরাবৃত্তিমূলক ছন্দ বিষয়বস্তুর আবেগিক ওজনকে প্রতিফলিত করে।",
    },
    oppositeTerms: [
      {
        id: "asyndeton",
        term: "Asyndeton",
      },
    ],
  },
  {
    id: "portmanteau",
    term: "Portmanteau",
    shortDescription:
      "A word formed by blending two distinct words and their meanings.",
    definition: {
      en: "A portmanteau is a linguistic blend of words, in which parts of multiple words or their phones are combined into a new word, capturing both meanings. In literature, creating portmanteau words is a stylistic device used to invent new vocabulary, often adding humor, playfulness, or concise descriptive power to the text.",
      bn: "পোর্টম্যানটো হলো এমন একটি শব্দ, যা দুটি ভিন্ন শব্দের অংশ এবং তাদের অর্থকে একত্রিত করে তৈরি করা হয়। সাহিত্যে এটি নতুন শব্দাবলি উদ্ভাবনের জন্য ব্যবহৃত হয়, যা লেখায় কৌতুক, চটুলতা বা সংক্ষিপ্ত অথচ জোরালো বর্ণনার সুযোগ করে দেয়।",
    },
    examples: [
      {
        text: "'Slithy' (slimy + lithe) and 'chortle' (chuckle + snort).",
        source: "Lewis Carroll, 'Jabberwocky'",
      },
    ],
    context: {
      en: "Lewis Carroll popularized the term, and James Joyce extensively utilized portmanteaus in 'Finnegans Wake' to create dense, multi-layered semantic associations.",
      bn: "লুইস ক্যারল এই ধারণাটি জনপ্রিয় করেন এবং জেমস জয়েস তার 'ফিনেগানস ওয়েক' উপন্যাসে বহুস্তরের অর্থ তৈরি করতে এর ব্যাপক ব্যবহার করেছেন।",
    },
    similarTerms: [
      {
        id: "neologism",
        term: "Neologism",
      },
      {
        id: "pun",
        term: "Pun",
      },
    ],
  },
  {
    id: "postmodernism",
    term: "Postmodernism",
    shortDescription:
      "A late-20th-century movement characterized by broad skepticism, subjectivism, and metafiction.",
    definition: {
      en: "Postmodernism is a late-20th-century movement in the arts, architecture, and criticism that was a departure from modernism. In literature, it is characterized by fragmentation, paradox, unreliable narrators, often unrealistic and downright impossible plots, parody, paranoia, dark humor, and authorial self-reference (metafiction).",
      bn: "পোস্টমডার্নিজম বা উত্তর-আধুনিকতাবাদ হলো শিল্পকলা, স্থাপত্য এবং সমালোচনার ক্ষেত্রে বিংশ শতাব্দীর শেষের দিকের একটি আন্দোলন যা আধুনিকতাবাদ থেকে একটি প্রস্থান ছিল। সাহিত্যে এটি খণ্ডিতকরণ, কূটাভাস, অবিশ্বস্ত বর্ণনাকারী, প্রায়শই অবাস্তব এবং অসম্ভব প্লট, প্যারোডি, প্যারানয়া, ডার্ক হিউমার এবং লেখকের স্ব-উল্লেখ (মেটাফিকশন) দ্বারা চিহ্নিত।",
    },
    examples: [
      {
        text: "Slaughterhouse-Five, with its non-linear narrative and tralfamadorian aliens, exemplifies postmodern techniques.",
        source: "Kurt Vonnegut, Slaughterhouse-Five",
      },
    ],
    context: {
      en: "Challenges absolute truths and grand narratives, emphasizing the constructed nature of reality and language.",
      bn: "পরম সত্য এবং মহৎ আখ্যানগুলোকে চ্যালেঞ্জ করে, বাস্তবতা এবং ভাষার নির্মিত প্রকৃতির ওপর জোর দেয়।",
    },
    similarTerms: [
      {
        id: "modernism",
        term: "Modernism",
      },
      {
        id: "metafiction",
        term: "Metafiction",
      },
    ],
  },
  {
    id: "prologue",
    term: "Prologue",
    shortDescription: "An introductory section of a literary work.",
    definition: {
      en: "A separate, introductory section of a literary work, play, or musical composition. It establishes the setting, introduces major themes or characters, and provides essential background information needed to understand the main narrative that follows.",
      bn: "প্রোলগ বা প্রস্তাবনা হলো কোনো সাহিত্যকর্ম বা নাটকের প্রারম্ভিক অংশ। এর মাধ্যমে গল্পের পটভূমি, চরিত্র এবং মূল বিষয়বস্তু সম্পর্কে পাঠকদের প্রাথমিক ধারণা দেওয়া হয়।",
    },
    examples: [
      {
        text: "Two households, both alike in dignity,\nIn fair Verona, where we lay our scene,\nFrom ancient grudge break to new mutiny,\nWhere civil blood makes civil hands unclean.",
        source:
          "William Shakespeare, 'Romeo and Juliet' (The Chorus's Prologue)",
      },
    ],
    context: {
      en: "Prologues act as a bridge into the world of the story, hooking the audience's attention and establishing the tone before the primary action begins.",
      bn: "নাটক বা গল্পের শুরুতে প্রস্তাবনা পাঠকদের গল্পের আবহের সাথে মানিয়ে নিতে সাহায্য করে এবং সামনের ঘটনাগুলো সম্পর্কে কৌতূহল তৈরি করে।",
    },
    similarTerms: [
      {
        id: "introduction",
        term: "Introduction",
      },
      {
        id: "preface",
        term: "Preface",
      },
      {
        id: "foreword",
        term: "Foreword",
      },
    ],
    oppositeTerms: [
      {
        id: "epilogue",
        term: "Epilogue",
      },
    ],
  },
  {
    id: "prose",
    term: "Prose",
    shortDescription:
      "Written or spoken language in its ordinary form, without metrical structure.",
    definition: {
      en: "Prose is a form of written or spoken language that exhibits a natural flow of speech and grammatical structure, rather than a rhythmic structure, such as in the case of traditional poetry. It comprises full, grammatical sentences, which then constitute paragraphs.",
      bn: "প্রোজ বা গদ্য হলো লিখিত বা কথ্য ভাষার একটি রূপ যা ঐতিহ্যগত কবিতার মতো ছন্দোবদ্ধ কাঠামোর পরিবর্তে কথোপকথন এবং ব্যাকরণগত কাঠামোর স্বাভাবিক প্রবাহ প্রদর্শন করে। এটি পূর্ণ, ব্যাকরণগত বাক্য নিয়ে গঠিত, যা পরবর্তীতে অনুচ্ছেদ তৈরি করে।",
    },
    examples: [
      {
        text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        source: "Jane Austen, Pride and Prejudice",
      },
    ],
    context: {
      en: "The standard medium for most fiction (novels, short stories) and non-fiction (essays, articles, biographies).",
      bn: "বেশিরভাগ কল্পকাহিনী (উপন্যাস, ছোটগল্প) এবং অ-কল্পকাহিনী (প্রবন্ধ, নিবন্ধ, জীবনী) এর আদর্শ মাধ্যম।",
    },
    oppositeTerms: [
      {
        id: "poetry",
        term: "Poetry",
      },
      {
        id: "verse",
        term: "Verse",
      },
    ],
  },
  {
    id: "protagonist",
    term: "Protagonist",
    shortDescription: "The principal character in a literary work.",
    definition: {
      en: "The principal character in a literary work, around whom the main conflict revolves; often the hero or heroine.",
      bn: "সাহিত্যকর্মের প্রধান চরিত্র, যাকে কেন্দ্র করে মূল সংঘাতটি আবর্তিত হয়; সাধারণত তিনি নায়ক বা নায়িকা হন।",
    },
    examples: [
      {
        text: "Hamlet in the tragedy of the same name.",
        source: "William Shakespeare, Hamlet",
      },
    ],
    context: {
      en: "Drives the narrative forward and usually undergoes significant growth or change.",
      bn: "আখ্যানটিকে এগিয়ে নিয়ে যায় এবং সাধারণত উল্লেখযোগ্য বিকাশ বা পরিবর্তনের মধ্য দিয়ে যায়।",
    },
    oppositeTerms: [
      {
        id: "antagonist",
        term: "Antagonist",
      },
    ],
  },
  {
    id: "pun",
    term: "Pun",
    shortDescription:
      "A joke exploiting the different possible meanings of a word.",
    definition: {
      en: "A joke exploiting the different possible meanings of a word or the fact that there are words which sound alike but have different meanings.",
      bn: "শ্লেষ; একই শব্দের বিভিন্ন অর্থের ব্যবহার বা একই রকম উচ্চারিত কিন্তু ভিন্ন অর্থবহ শব্দের ব্যবহার করে সৃষ্ট কৌতুক।",
    },
    examples: [
      {
        text: "Now is the winter of our discontent / Made glorious summer by this sun of York.",
        source: "William Shakespeare, Richard III",
      },
    ],
    context: {
      en: "Used for comedic effect, clever wordplay, or to reveal deeper meanings through ambiguity.",
      bn: "কৌতুকপূর্ণ প্রভাব, চতুর শব্দক্রীড়া বা অস্পষ্টতার মাধ্যমে গভীর অর্থ প্রকাশ করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "wordplay",
        term: "Wordplay",
      },
      {
        id: "double-entendre",
        term: "Double Entendre",
      },
    ],
  },
  {
    id: "quatrain",
    term: "Quatrain",
    shortDescription: "A stanza of four lines.",
    definition: {
      en: "A stanza of four lines, especially one having alternate rhymes.",
      bn: "চার লাইনের স্তবক, বিশেষ করে যেটিতে পর্যায়ক্রমিক অন্ত্যমিল থাকে (চতুষ্পদী)।",
    },
    examples: [
      {
        text: "Two roads diverged in a yellow wood, / And sorry I could not travel both / And be one traveler, long I stood / And looked down one as far as I could",
        source: "Robert Frost, The Road Not Taken",
      },
    ],
    context: {
      en: "One of the most common stanzaic forms in English poetry, forming the basis of ballads, hymns, and the English sonnet.",
      bn: "ইংরেজি কবিতার অন্যতম সাধারণ স্তবক বিন্যাস, যা ব্যালাড, স্তোত্র এবং ইংরেজি সনেটের ভিত্তি তৈরি করে।",
    },
    similarTerms: [
      {
        id: "stanza",
        term: "Stanza",
      },
    ],
  },
  {
    id: "refrain",
    term: "Refrain",
    shortDescription:
      "A repeated line or phrase, typically at the end of a stanza.",
    definition: {
      en: "A refrain is a word, line, or phrase that is repeated within the lines or stanzas of the poem itself. It usually occurs at regular intervals, such as at the end of each stanza. Refrains serve to emphasize specific themes, create a musical or rhythmic quality, and establish unity throughout the poem.",
      bn: "রিফ্রেইন বা ধুয়ো হলো কবিতা বা গানে বারবার ফিরে আসা কোনো শব্দ, পঙ্‌ক্তি বা বাক্যাংশ। এটি সাধারণত প্রতিটি স্তবকের শেষে ব্যবহৃত হয়। ধুয়ো কবিতার মূল সুর বা থিমকে জোরদার করে এবং একটি সাঙ্গীতিক বা ছন্দময় আবেশ তৈরি করে।",
    },
    examples: [
      {
        text: "Quoth the Raven, 'Nevermore.'",
        source: "Edgar Allan Poe, 'The Raven'",
      },
    ],
    context: {
      en: "Common in ballads, hymns, and lyric poetry, the refrain acts as an anchor for the listener or reader, often shifting slightly in meaning as the poem progresses.",
      bn: "ব্যালাড বা লোকগীতি এবং গীতিকবিতার ক্ষেত্রে এটি খুব পরিচিত একটি উপাদান, যা কবিতার অগ্রসর হওয়ার সাথে সাথে অর্থের নতুন মাত্রা তৈরি করতে পারে।",
    },
    similarTerms: [
      {
        id: "repetition",
        term: "Repetition",
      },
      {
        id: "chorus",
        term: "Chorus",
      },
    ],
  },
  {
    id: "resolution",
    term: "Resolution",
    shortDescription:
      "The unfolding or solution of a complicated issue in a story.",
    definition: {
      en: "Resolution, also known as the denouement, is the part of a story's plot line in which the problem of the story is resolved or worked out. This occurs after the falling action and is typically where the story ends, tying up loose ends.",
      bn: "রেজোলিউশন বা উপসংহার হলো একটি গল্পের প্লটলাইনের অংশ যেখানে গল্পের সমস্যার সমাধান করা হয়। এটি ফলিং অ্যাকশনের পরে ঘটে এবং সাধারণত এখানেই গল্পের সমাপ্তি ঘটে, যেখানে সমস্ত অমীমাংসিত সূত্রগুলো গুটিয়ে নেওয়া হয়।",
    },
    examples: [
      {
        text: "At the end of Romeo and Juliet, the feuding families reconcile after the tragic deaths of the titular characters, ending the conflict.",
        source: "William Shakespeare, Romeo and Juliet",
      },
    ],
    context: {
      en: "Essential for providing closure to a narrative, allowing the audience to process the aftermath of the climax.",
      bn: "একটি আখ্যানে সমাপ্তি টানার জন্য অপরিহার্য, যা দর্শকদের ক্লাইম্যাক্সের পরবর্তী পরিস্থিতি অনুধাবন করতে সাহায্য করে।",
    },
    similarTerms: [
      {
        id: "denouement",
        term: "Denouement",
      },
      {
        id: "conclusion",
        term: "Conclusion",
      },
    ],
    oppositeTerms: [
      {
        id: "conflict",
        term: "Conflict",
      },
      {
        id: "rising-action",
        term: "Rising Action",
      },
    ],
  },
  {
    id: "rhyme-scheme",
    term: "Rhyme Scheme",
    shortDescription:
      "The ordered pattern of rhymes at the ends of lines of a poem or verse.",
    definition: {
      en: "A rhyme scheme is the specific, repeating pattern of end rhymes in a poem or stanza. It is conventionally represented by assigning a letter of the alphabet to each rhyming sound (e.g., ABAB, AABB). The rhyme scheme helps govern the formal structure of a poem, contributing to its musicality, pacing, and overall aesthetic coherence.",
      bn: "রাইম স্কিম বা অন্ত্যমিলের বিন্যাস হলো কবিতার চরণের শেষে উচ্চারিত মিল বা ছন্দের নির্দিষ্ট কাঠামো। একে সাধারণত ইংরেজি বর্ণমালা (যেমন- ABAB, AABB) দ্বারা চিহ্নিত করা হয়। এটি কবিতার সাঙ্গীতিক সুর ও সুশৃঙ্খল কাঠামো বজায় রাখতে সাহায্য করে।",
    },
    examples: [
      {
        text: "Two roads diverged in a yellow wood, (A) / And sorry I could not travel both (B) / And be one traveler, long I stood (A) / And looked down one as far as I could (A) / To where it bent in the undergrowth; (B)",
        source: "Robert Frost, 'The Road Not Taken' (Rhyme Scheme: ABAAB)",
      },
    ],
    context: {
      en: "Different poetic forms demand specific rhyme schemes, such as the strict ABBAABBA CDECDE of an Italian sonnet, which organizes the poem's thematic progression.",
      bn: "বিভিন্ন ধরণের কবিতার নিজস্ব অন্ত্যমিল বিন্যাস থাকে, যেমন ইতালীয় সনেটের কঠোর কাঠামো, যা কবিতার চিন্তার বিকাশকে সুসংগঠিত করে।",
    },
    similarTerms: [
      {
        id: "meter",
        term: "Meter",
      },
      {
        id: "stanza",
        term: "Stanza",
      },
    ],
  },
  {
    id: "rising-action",
    term: "Rising Action",
    shortDescription:
      "A series of relevant incidents that create suspense, interest, and tension in a narrative.",
    definition: {
      en: "Rising action is a series of events in a plot that build toward the point of greatest interest, the climax. It begins immediately after the exposition and introduces the central conflict, complicating the situation and increasing tension.",
      bn: "রাইজিং অ্যাকশন বা আরোহী কর্ম হলো একটি প্লটের ঘটনাগুলোর একটি ধারাবাহিকতা যা সবচেয়ে আগ্রহের বিন্দু, ক্লাইম্যাক্সের দিকে অগ্রসর হয়। এটি এক্সপোজিশনের পরপরই শুরু হয় এবং কেন্দ্রীয় দ্বন্দ্বের পরিচয় দেয়, পরিস্থিতি জটিল করে তোলে এবং উত্তেজনা বাড়ায়।",
    },
    examples: [
      {
        text: "In Macbeth, the rising action includes Macbeth's encounter with the witches, his murder of King Duncan, and his subsequent usurpation of the throne.",
        source: "William Shakespeare, Macbeth",
      },
    ],
    context: {
      en: "Constitutes the bulk of a narrative, developing characters and stakes to make the climax impactful.",
      bn: "একটি আখ্যানের বেশিরভাগ অংশ গঠন করে, চরিত্র এবং ঝুঁকিগুলো বিকাশ করে যাতে ক্লাইম্যাক্স আরও প্রভাবশালী হয়।",
    },
    similarTerms: [
      {
        id: "complication",
        term: "Complication",
      },
    ],
    oppositeTerms: [
      {
        id: "falling-action",
        term: "Falling Action",
      },
    ],
  },
  {
    id: "romanticism",
    term: "Romanticism",
    shortDescription:
      "An artistic, literary, and intellectual movement characterized by its emphasis on emotion, individualism, and nature.",
    definition: {
      en: "Romanticism was an artistic, literary, and intellectual movement that originated in Europe toward the end of the 18th century. It emphasized intense emotion as an authentic source of aesthetic experience, placing new emphasis on such emotions as apprehension, horror and terror, and awe—especially that which is experienced in confronting the sublimity of untamed nature.",
      bn: "রোমান্টিসিজম বা রোমান্টিকতাবাদ ছিল একটি শৈল্পিক, সাহিত্যিক এবং বুদ্ধিবৃত্তিক আন্দোলন যা অষ্টাদশ শতাব্দীর শেষের দিকে ইউরোপে উদ্ভূত হয়েছিল। এটি নান্দনিক অভিজ্ঞতার খাঁটি উৎস হিসেবে তীব্র আবেগের ওপর জোর দিয়েছিল, বিশেষ করে বন্য প্রকৃতির মহিমার মুখোমুখি হওয়ার সময় অনুভুত আশঙ্কা, ভীতি এবং বিস্ময়ের মতো আবেগের ওপর নতুন গুরুত্ব আরোপ করেছিল।",
    },
    examples: [
      {
        text: "I wandered lonely as a cloud / That floats on high o'er vales and hills,",
        source: "William Wordsworth, I Wandered Lonely as a Cloud",
      },
    ],
    context: {
      en: "A reaction against the rationalism and classicism of the Enlightenment, deeply influencing 19th-century literature and thought.",
      bn: "আলোকিত যুগের যুক্তিবাদ এবং ধ্রুপদীবাদের বিরুদ্ধে একটি প্রতিক্রিয়া, যা উনবিংশ শতাব্দীর সাহিত্য এবং চিন্তাধারাকে গভীরভাবে প্রভাবিত করেছিল।",
    },
    similarTerms: [
      {
        id: "transcendentalism",
        term: "Transcendentalism",
      },
    ],
    oppositeTerms: [
      {
        id: "classicism",
        term: "Classicism",
      },
      {
        id: "realism",
        term: "Realism",
      },
    ],
  },
  {
    id: "sarcasm",
    term: "Sarcasm",
    shortDescription:
      "A sharp, bitter, or cutting expression or remark, often using irony.",
    definition: {
      en: "Sarcasm is a form of verbal irony that mocks, ridicules, or expresses contempt. Unlike pure irony, which simply implies the opposite of what is said, sarcasm is notably hostile or derisive in intent. It relies heavily on tone of voice and context to convey its biting meaning.",
      bn: "সারক্যাজম বা শ্লেষ হলো এক ধরনের মৌখিক ব্যঙ্গ, যা কাউকে উপহাস বা তাচ্ছিল্য করতে ব্যবহৃত হয়। এটি সাধারণ আয়রনির চেয়ে বেশি রূঢ় এবং আক্রমণাত্মক। এর অর্থ মূলত গলার স্বর এবং পরিস্থিতির ওপর নির্ভর করে।",
    },
    examples: [
      {
        text: "Good fences make good neighbors.",
        source:
          "Robert Frost, 'Mending Wall' (often read with a sarcastic undertone toward the neighbor's stubbornness)",
      },
    ],
    context: {
      en: "Sarcasm is a powerful tool in character development and dialogue, often used to reveal a character's bitterness, wit, or dissatisfaction with their circumstances.",
      bn: "চরিত্র চিত্রণ এবং সংলাপে এটি একটি শক্তিশালী মাধ্যম, যা চরিত্রের তিক্ততা, বুদ্ধিমত্তা বা পারিপার্শ্বিক অবস্থার প্রতি অসন্তোষ প্রকাশ করে।",
    },
    similarTerms: [
      {
        id: "irony",
        term: "Irony",
      },
      {
        id: "satire",
        term: "Satire",
      },
    ],
  },
  {
    id: "satire",
    term: "Satire",
    shortDescription:
      "Use of humor or exaggeration to expose and criticize stupidity.",
    definition: {
      en: "The use of humor, irony, exaggeration, or ridicule to expose and criticize people's stupidity or vices, particularly in the context of contemporary politics and other topical issues.",
      bn: "ব্যঙ্গ; হাস্যরস, শ্লেষ, বা অতিরঞ্জনের মাধ্যমে ব্যক্তি বা সমাজের মূর্খতা বা বদভ্যাসগুলোকে উন্মোচিত ও সমালোচনা করা।",
    },
    examples: [
      {
        text: "Gulliver's Travels",
        source: "Jonathan Swift",
      },
    ],
    context: {
      en: "Aims to provoke change or provoke thought through sharp criticism cloaked in humor or irony.",
      bn: "হাস্যরস বা শ্লেষের আড়ালে তীক্ষ্ণ সমালোচনার মাধ্যমে পরিবর্তন বা চিন্তার উদ্রেক করা এর লক্ষ্য।",
    },
    similarTerms: [
      {
        id: "parody",
        term: "Parody",
      },
      {
        id: "irony",
        term: "Irony",
      },
    ],
  },
  {
    id: "semantic",
    term: "Semantic",
    shortDescription: "Relating to meaning in language or logic.",
    definition: {
      en: "In literature and linguistics, semantics is the study of meaning, reference, or truth. A semantic approach to literature examines how words, phrases, and sentences construct meaning, considering connotations, denotations, ambiguities, and historical shifts in language. It explores the relationship between signifiers (words) and the signified (concepts).",
      bn: "শব্দার্থতত্ত্ব বা সেমানটিক্স হলো ভাষা ও যুক্তিতে অর্থের অধ্যয়ন। সাহিত্যের ক্ষেত্রে সেমানটিক বিশ্লেষণ শব্দের আক্ষরিক অর্থ, অন্তর্নিহিত অর্থ, অস্পষ্টতা এবং ভাষার ঐতিহাসিক পরিবর্তনের মাধ্যমে অর্থ কীভাবে নির্মিত হয় তা নিয়ে কাজ করে।",
    },
    examples: [
      {
        text: "The shifting meaning of the word 'nature' in Shakespeare's King Lear, encompassing human morality, the physical environment, and cosmic order.",
        source: "William Shakespeare, 'King Lear'",
      },
    ],
    context: {
      en: "Understanding semantics is crucial for close reading, as authors frequently exploit the multiple meanings of words to create irony, puns, and thematic depth.",
      bn: "গভীর পাঠ বা 'ক্লোজ রিডিং'-এর জন্য শব্দার্থতত্ত্ব বোঝা অপরিহার্য, কারণ লেখকরা প্রায়শই ব্যঙ্গ বা শ্লেষ তৈরির জন্য শব্দের বহুমাত্রিক অর্থ ব্যবহার করেন।",
    },
    similarTerms: [
      {
        id: "diction",
        term: "Diction",
      },
      {
        id: "connotation",
        term: "Connotation",
      },
      {
        id: "denotation",
        term: "Denotation",
      },
    ],
  },
  {
    id: "sestet",
    term: "Sestet",
    shortDescription:
      "A six-line stanza, or the final six lines of a 14-line Italian or Petrarchan sonnet.",
    definition: {
      en: "A sestet is a six-line stanza of poetry. Most commonly, it refers to the second division of an Italian or Petrarchan sonnet, which follows an eight-line octave. The sestet usually resolves or comments on the problem or premise introduced in the octave.",
      bn: "সেস্টেট বা ষট্ক হলো ছয় লাইনের কবিতার স্তবক। সাধারণত, এটি একটি ইতালীয় বা পেত্রার্কান সনেটের দ্বিতীয় বিভাগকে বোঝায়, যা আট লাইনের অষ্টকের পরে আসে। সেস্টেট সাধারণত অষ্টকে উত্থাপিত সমস্যা বা প্রেক্ষাপটের সমাধান দেয় বা মন্তব্য করে।",
    },
    examples: [
      {
        text: "Then felt I like some watcher of the skies / When a new planet swims into his ken; / Or like stout Cortez when with eagle eyes / He star'd at the Pacific—and all his men / Look'd at each other with a wild surmise— / Silent, upon a peak in Darien.",
        source: "John Keats, On First Looking into Chapman's Homer",
      },
    ],
    context: {
      en: "Crucial for providing the 'turn' (volta) or resolution in the rigid structure of a sonnet.",
      bn: "সনেটের কঠোর কাঠামোতে 'মোড়' (ভোল্টা) বা সমাধান প্রদানের জন্য অত্যন্ত গুরুত্বপূর্ণ।",
    },
    similarTerms: [
      {
        id: "stanza",
        term: "Stanza",
      },
      {
        id: "octave",
        term: "Octave",
      },
    ],
  },
  {
    id: "setting",
    term: "Setting",
    shortDescription: "The time and place in which the story takes place.",
    definition: {
      en: "The time and place in which the story takes place, including historical context, geographical location, and physical environment.",
      bn: "স্থান-কাল-পাত্র; যে নির্দিষ্ট সময়, স্থান এবং ঐতিহাসিক প্রেক্ষাপটে গল্পের ঘটনা সংঘটিত হয়।",
    },
    examples: [
      {
        text: "The moors of Yorkshire in the late 18th and early 19th centuries.",
        source: "Emily Brontë, Wuthering Heights",
      },
    ],
    context: {
      en: "Establishes the mood, influences characters' actions, and provides a backdrop for the narrative.",
      bn: "এটি গল্পের মেজাজ তৈরি করে, চরিত্রগুলোর কাজকে প্রভাবিত করে এবং আখ্যানের পটভূমি প্রদান করে।",
    },
    similarTerms: [
      {
        id: "milieu",
        term: "Milieu",
      },
      {
        id: "atmosphere",
        term: "Atmosphere",
      },
    ],
  },
  {
    id: "sibilance",
    term: "Sibilance",
    shortDescription:
      "A literary device where strongly stressed consonants are created deliberately by producing air from vocal tracts through the use of lips and tongue.",
    definition: {
      en: "Sibilance is a specific type of alliteration that relies on the repetition of soft consonant sounds in words to create a whooshing or hissing sound in the writing. The sounds often involve the letters 's', 'z', 'sh', and 'c'.",
      bn: "সিবিল্যান্স বা শীষধ্বনি হলো এক বিশেষ ধরনের অনুপ্রাস যা লেখায় একটি ফিসফিস বা হিসহিস শব্দ তৈরি করার জন্য শব্দগুলোতে নরম ব্যঞ্জনবর্ণের ধ্বনির পুনরাবৃত্তির ওপর নির্ভর করে। এই ধ্বনিগুলোতে প্রায়শই 's', 'z', 'sh' এবং 'c' অক্ষরগুলো জড়িত থাকে।",
    },
    examples: [
      {
        text: "And the silken sad uncertain rustling of each purple curtain",
        source: "Edgar Allan Poe, The Raven",
      },
    ],
    context: {
      en: "Used by poets and writers to create an auditory effect that can evoke softness, sinister atmospheres, or the sound of the wind and sea.",
      bn: "কবি এবং লেখকদের দ্বারা একটি শ্রুতিমধুর প্রভাব তৈরি করতে ব্যবহৃত হয় যা কোমলতা, অশুভ পরিবেশ বা বাতাস এবং সমুদ্রের শব্দ জাগিয়ে তুলতে পারে।",
    },
    similarTerms: [
      {
        id: "alliteration",
        term: "Alliteration",
      },
      {
        id: "consonance",
        term: "Consonance",
      },
    ],
  },
  {
    id: "simile",
    term: "Simile",
    shortDescription:
      "A figure of speech involving the comparison of one thing with another thing of a different kind, using 'like' or 'as'.",
    definition: {
      en: "A simile is a figure of speech that directly compares two different things using the words 'like' or 'as'. It is used to make descriptions more vivid and relatable. While similar to a metaphor, a simile makes the comparison explicit rather than implicit.",
      bn: "সিমিলি বা উপমা হলো এমন একটি ফিগার অফ স্পিচ, যেখানে 'like' বা 'as' শব্দ ব্যবহার করে দুটি ভিন্ন জিনিসের মধ্যে সরাসরি তুলনা করা হয়। এটি কোনো বর্ণনাকে আরও জীবন্ত ও বাস্তবসম্মত করতে ব্যবহৃত হয়। এটি মেটাফরের মতোই, তবে সিমিলিতে তুলনাটি স্পষ্টভাবে উল্লেখ করা থাকে।",
    },
    examples: [
      {
        text: "O my Luve is like a red, red rose / That's newly sprung in June;",
        source: "A Red, Red Rose by Robert Burns",
      },
    ],
    context: {
      en: "From the Latin 'similis', meaning 'like'. One of the most common and universally understood figures of speech.",
      bn: "ল্যাটিন শব্দ 'similis' থেকে এসেছে, যার অর্থ 'মতো'। এটি সাহিত্যের সবচেয়ে সাধারণ এবং সহজে বোধগম্য কৌশলগুলোর একটি।",
    },
    similarTerms: [
      {
        id: "metaphor",
        term: "Metaphor",
      },
    ],
    oppositeTerms: [],
  },
  {
    id: "situational_irony",
    term: "Situational Irony",
    shortDescription:
      "An outcome that turns out to be very different from what was expected.",
    definition: {
      en: "Situational irony occurs when there is a stark discrepancy between what is expected to happen and what actually happens. It involves a situation in which actions have an effect that is opposite from what was intended, creating a sharp contrast that often highlights the unpredictability or absurdity of life.",
      bn: "সিচুয়েশনাল আইরনি (Situational Irony) বা পরিস্থিতিগত বিদ্রূপ হলো এমন একটি অবস্থা যেখানে যা আশা করা হয়েছিল, ঠিক তার উল্টো ঘটনা ঘটে। এটি পরিস্থিতি এবং তার অপ্রত্যাশিত ফলাফলের মধ্যে একটি গভীর বৈপরীত্য তৈরি করে।",
    },
    examples: [
      {
        text: "A fire station burns down.",
        source: "Everyday example",
      },
      {
        text: "In 'The Gift of the Magi', a wife cuts her hair to buy a watch chain for her husband, while he sells his watch to buy combs for her hair.",
        source: "O. Henry, 'The Gift of the Magi'",
      },
    ],
    context: {
      en: "Situational irony is often used to subvert reader expectations, deliver moral lessons, or underscore themes of fatalism and the limits of human control over destiny.",
      bn: "এটি প্রায়শই পাঠকের প্রত্যাশাকে ভেঙে দিতে, নৈতিক শিক্ষা প্রদান করতে বা মানুষের নিয়তি নিয়ন্ত্রণের সীমাবদ্ধতা বোঝাতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "dramatic_irony",
        term: "Dramatic Irony",
      },
      {
        id: "verbal_irony",
        term: "Verbal Irony",
      },
    ],
  },
  {
    id: "slant-rhyme",
    term: "Slant Rhyme",
    shortDescription:
      "A rhyme in which the stressed syllables of ending consonants match, but the preceding vowel sounds do not.",
    definition: {
      en: "Also known as half rhyme, imperfect rhyme, or near rhyme, a slant rhyme is formed by words with similar but not identical sounds. Often, either the vowel segments are different while the consonants match (e.g., shape/keep), or vice versa. This technique offers writers greater freedom in vocabulary and avoids the predictable, sometimes sing-song quality of perfect rhymes.",
      bn: "স্ল্যান্ট রাইম বা অপূর্ণ মিল হলো এমন এক ধরনের অন্ত্যমিল, যেখানে শব্দের উচ্চারণ কাছাকাছি হলেও হুবহু মিলে যায় না। এর মাধ্যমে লেখকরা শব্দের ব্যবহারে স্বাধীনতা পান এবং পুরোপুরি মিলে যাওয়া ছন্দের একঘেয়েমি এড়াতে পারেন।",
    },
    examples: [
      {
        text: "Hope is the thing with feathers / That perches in the soul / And sings the tune without the words / And never stops at all.",
        source:
          "Emily Dickinson, 'Hope is the thing with feathers' (soul / all)",
      },
    ],
    context: {
      en: "Emily Dickinson and W.B. Yeats frequently used slant rhyme to create dissonance, surprise, or a sense of unease, challenging conventional metrical expectations.",
      bn: "এমিলি ডিকিনসন এবং ডব্লিউ. বি. ইয়েটস প্রথাগত ছন্দের প্রত্যাশাকে ভাঙতে এবং কবিতায় চমক বা অস্বস্তির আবহ তৈরি করতে প্রায়শই এই ধরনের ছন্দের ব্যবহার করতেন।",
    },
    similarTerms: [
      {
        id: "consonance",
        term: "Consonance",
      },
      {
        id: "assonance",
        term: "Assonance",
      },
    ],
    oppositeTerms: [
      {
        id: "perfect-rhyme",
        term: "Perfect Rhyme",
      },
    ],
  },
  {
    id: "soliloquy",
    term: "Soliloquy",
    shortDescription:
      "A dramatic monologue spoken aloud by a character who is alone on stage, revealing their inner thoughts.",
    definition: {
      en: "A soliloquy is a theatrical device in which a character, typically alone on stage, speaks their internal thoughts, feelings, and motives aloud. It serves as a window into the character's soul, allowing the audience to understand their true intentions, psychological struggles, and secrets that they would not share with other characters. It is different from an 'aside', which is a brief comment to the audience.",
      bn: "সোলিলোকুই বা স্বগতোক্তি হলো নাটকের এমন একটি কৌশল, যেখানে কোনো চরিত্র মঞ্চে একা থেকে তার মনের ভেতরের ভাবনা, অন্তর্দ্বন্দ্ব এবং উদ্দেশ্যগুলো জোরে জোরে বলে। এটি শুধুমাত্র দর্শকদের শোনার জন্য তৈরি করা হয়। এর মাধ্যমে চরিত্রটির আসল রূপ এবং তার ভেতরের লুকানো কথাগুলো দর্শকরা সরাসরি জানতে পারে।",
    },
    examples: [
      {
        text: "To be, or not to be, that is the question: / Whether 'tis nobler in the mind to suffer / The slings and arrows of outrageous fortune...",
        source: "Hamlet by William Shakespeare",
      },
    ],
    context: {
      en: "Highly characteristic of Renaissance drama, particularly in the works of Shakespeare and Marlowe, to provide psychological depth before modern narration techniques existed.",
      bn: "রেনেসাঁ যুগের নাটকে (বিশেষ করে শেক্সপিয়র এবং মার্লোর লেখায়) এটি খুবই জনপ্রিয় ছিল। আধুনিক কালের উপন্যাসের মতো নাটকে চরিত্রের মনস্তত্ত্ব তুলে ধরার জন্য এটি ছিল অন্যতম সেরা উপায়।",
    },
    similarTerms: [
      {
        id: "dramatic-monologue",
        term: "Dramatic Monologue",
      },
    ],
    oppositeTerms: [
      {
        id: "dialogue",
        term: "Dialogue",
      },
    ],
  },
  {
    id: "solipsism",
    term: "Solipsism",
    shortDescription:
      "The philosophical idea that only one's own mind is sure to exist.",
    definition: {
      en: "In literature and philosophy, solipsism is the theory that the self is all that can be known to exist. As an epistemological position, it asserts that knowledge of anything outside one's own mind is unsure; the external world and other minds cannot be known and might not exist.",
      bn: "সাহিত্য এবং দর্শনে, সলিপসিজম বা অহংসর্বস্ববাদ হলো এমন একটি তত্ত্ব যা বলে যে কেবল নিজের অস্তিত্বই নিশ্চিতভাবে জানা সম্ভব। একটি জ্ঞানতাত্ত্বিক অবস্থান হিসেবে, এটি জোর দিয়ে বলে যে নিজের মনের বাইরের যেকোনো কিছুর জ্ঞান অনিশ্চিত; বাহ্যিক জগৎ এবং অন্যান্য মন সম্পর্কে জানা যায় ছুটি নাও থাকতে পারে।",
    },
    examples: [
      {
        text: "The narrator's overwhelming, subjective reality in 'Notes from Underground' borders on solipsism, as he finds no verifiable meaning outside his own consciousness.",
        source: "Fyodor Dostoevsky, Notes from Underground",
      },
    ],
    context: {
      en: "Explored in modernist and postmodernist literature to examine the limits of perception, isolation, and subjective reality.",
      bn: "উপলব্ধি, বিচ্ছিন্নতা এবং বিষয়মুখী বাস্তবতার সীমানা পরীক্ষা করার জন্য আধুনিকতাবাদী এবং উত্তর-আধুনিকতাবাদী সাহিত্যে এটি অন্বেষণ করা হয়।",
    },
    similarTerms: [
      {
        id: "subjectivism",
        term: "Subjectivism",
      },
    ],
  },
  {
    id: "sonnet",
    term: "Sonnet",
    shortDescription: "A fourteen-line poem written in iambic pentameter.",
    definition: {
      en: "A fourteen-line poem written in iambic pentameter, employing one of several rhyme schemes, and adhering to a tightly structured thematic organization.",
      bn: "সনেট বা চতুর্দশপদী কবিতা; চৌদ্দ লাইনের কবিতা যা নির্দিষ্ট ছন্দে এবং অন্ত্যমিলে রচিত হয় এবং এতে একটি সুসংগঠিত ভাব থাকে।",
    },
    examples: [
      {
        text: "Shall I compare thee to a summer's day? / Thou art more lovely and more temperate:",
        source: "William Shakespeare, Sonnet 18",
      },
    ],
    context: {
      en: "Traditionally associated with themes of love and structured to present a problem or question followed by a resolution or shift (volta).",
      bn: "ঐতিহ্যগতভাবে প্রেমের বিষয়ের সাথে যুক্ত এবং একটি সমস্যা বা প্রশ্ন উপস্থাপন করে যা শেষে সমাধান বা মোড় (ভোল্টা) নেয়।",
    },
  },
  {
    id: "spoonerism",
    term: "Spoonerism",
    shortDescription:
      "A verbal error in which a speaker accidentally transposes the initial sounds or letters of two or more words.",
    definition: {
      en: "A spoonerism is an error in speech in which corresponding consonants, vowels, or morphemes are switched between two words in a phrase, usually with humorous results. It is named after the Reverend William Archibald Spooner, who was notorious for this.",
      bn: "স্পুনারিজম বা বর্ণবিপর্যয় হলো কথার একটি ভুল যেখানে একটি বাক্যাংশের দুটি শব্দের মধ্যে সংশ্লিষ্ট ব্যঞ্জনবর্ণ, স্বরবর্ণ বা রূপমূল অদলবদল হয়ে যায়, যা সাধারণত হাস্যকর ফলাফল তৈরি করে। এটি রেভারেন্ড উইলিয়াম আর্কিবল্ড স্পুনারের নামে নামকরণ করা হয়েছে, যিনি এর জন্য কুখ্যাত ছিলেন।",
    },
    examples: [
      {
        text: '"The Lord is a shoving leopard" (instead of "The Lord is a loving shepherd").',
        source: "Attributed to Rev. William Archibald Spooner",
      },
    ],
    context: {
      en: "Employed in comedic literature and wordplay to create malapropisms and humorous confusion.",
      bn: "হাস্যরসাত্মক সাহিত্য এবং শব্দ খেলায় অপপ্রয়োগ এবং হাস্যকর বিভ্রান্তি তৈরি করতে ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "malapropism",
        term: "Malapropism",
      },
    ],
  },
  {
    id: "stanza",
    term: "Stanza",
    shortDescription: "A grouped set of lines within a poem.",
    definition: {
      en: "A grouped set of lines within a poem, usually set off from others by a blank line or indentation.",
      bn: "স্তবক; কবিতার কয়েকটি লাইনের একটি গুচ্ছ যা সাধারণত ফাঁকা লাইন দ্বারা অন্যান্য গুচ্ছ থেকে আলাদা করা থাকে।",
    },
    examples: [
      {
        text: "A tercet (three lines) or a quatrain (four lines) in a larger poem.",
        source: "Various",
      },
    ],
    context: {
      en: "Functions like a paragraph in prose, organizing ideas and establishing a structural pattern.",
      bn: "গদ্যের অনুচ্ছেদের মতো কাজ করে, ধারণাগুলোকে সংগঠিত করে এবং একটি কাঠামোগত বিন্যাস তৈরি করে।",
    },
  },
  {
    id: "stream-of-consciousness",
    term: "Stream of Consciousness",
    shortDescription:
      "A narrative mode depicting the flow of thoughts and feelings.",
    definition: {
      en: "A narrative mode or method that attempts to depict the multitudinous thoughts and feelings which pass through the mind of a narrator.",
      bn: "চেতনার প্রবাহ; এমন একটি আখ্যান কৌশল যা কোনো চরিত্রের মনের ভেতর দিয়ে বয়ে চলা অসংখ্য চিন্তা ও অনুভূতির নিরবচ্ছিন্ন ধারাকে ফুটিয়ে তোলে।",
    },
    examples: [
      {
        text: "The inner monologues of Leopold Bloom.",
        source: "James Joyce, Ulysses",
      },
    ],
    context: {
      en: "A key feature of modernist literature, it provides an intimate, often fragmented, view of a character's psychology.",
      bn: "এটি আধুনিক সাহিত্যের একটি মূল বৈশিষ্ট্য, যা কোনো চরিত্রের মনস্তত্ত্বের একটি অন্তরঙ্গ এবং প্রায়শই খণ্ডিত চিত্র প্রদান করে।",
    },
    similarTerms: [
      {
        id: "interior-monologue",
        term: "Interior Monologue",
      },
    ],
  },
  {
    id: "subplot",
    term: "Subplot",
    shortDescription:
      "A secondary storyline running alongside the main plot in a literary work.",
    definition: {
      en: "A subplot is an ancillary or secondary thread of narrative in a story that is interwoven with the main plot. Subplots typically involve supporting characters and add complexity, depth, and thematic resonance to the primary narrative. They may intersect with the main plot, contrast with it, or eventually merge to resolve the story's central conflicts.",
      bn: "সাবপ্লট বা উপকাহিনী হলো কোনো সাহিত্যকর্মে মূল কাহিনীর পাশাপাশি চলমান একটি গৌণ কাহিনী। এটি সাধারণত পার্শ্বচরিত্রদের নিয়ে আবর্তিত হয় এবং মূল কাহিনীতে গভীরতা ও বৈচিত্র্য যুক্ত করে।",
    },
    examples: [
      {
        text: "The story of Gloucester and his sons (Edgar and Edmund) mirrors and amplifies the central tragedy of Lear and his daughters.",
        source: "William Shakespeare, 'King Lear'",
      },
    ],
    context: {
      en: "Subplots are vital in novels and lengthy plays for maintaining narrative tension, exploring alternative perspectives on the central theme, and fleshing out the fictional world.",
      bn: "উপন্যাস এবং দীর্ঘ নাটকে কাহিনীর উত্তেজনা ধরে রাখতে এবং মূল থিমের বিভিন্ন দিক উন্মোচন করতে উপকাহিনী অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে।",
    },
    similarTerms: [
      {
        id: "plot",
        term: "Plot",
      },
      {
        id: "narrative",
        term: "Narrative",
      },
    ],
  },
  {
    id: "surrealism",
    term: "Surrealism",
    shortDescription:
      "A cultural movement that sought to release the creative potential of the unconscious mind.",
    definition: {
      en: "Surrealism is a 20th-century avant-garde movement in art and literature that sought to release the creative potential of the unconscious mind, often by the irrational juxtaposition of images. It aimed to revolutionize human experience by rejecting a rational vision of life in favor of one that asserted the value of the unconscious and dreams.",
      bn: "সাররিয়ালিজম বা পরাবাস্তববাদ হলো শিল্প ও সাহিত্যে বিংশ শতাব্দীর একটি অ্যাভাং-গার্ড আন্দোলন, যা প্রায়শই চিত্রগুলোর অযৌক্তিক সংমিশ্রণের মাধ্যমে অবচেতন মনের সৃজনশীল সম্ভাবনাকে মুক্ত করতে চেয়েছিল। এটি জীবনের একটি যুক্তিবাদী দৃষ্টিভঙ্গিকে প্রত্যাখ্যান করে এমন একটি দৃষ্টিভঙ্গির পক্ষে মানবিক অভিজ্ঞতায় বিপ্লব ঘটানোর লক্ষ্য রেখেছিল যা অবচেতন এবং স্বপ্নের মূল্যের ওপর জোর দেয়।",
    },
    examples: [
      {
        text: "Andre Breton's 'Nadja' blends autobiography, psychological theory, and surreal encounters to explore the unconscious.",
        source: "André Breton, Nadja",
      },
    ],
    context: {
      en: "Influenced by Freudian psychoanalysis, it relies on dream logic, automatic writing, and startling imagery.",
      bn: "ফ্রয়েডীয় মনোবিশ্লেষণ দ্বারা প্রভাবিত হয়ে এটি স্বপ্নের যুক্তি, স্বয়ংক্রিয় লেখা এবং চমকপ্রদ চিত্রকল্পের ওপর নির্ভর করে।",
    },
    similarTerms: [
      {
        id: "dadaism",
        term: "Dadaism",
      },
      {
        id: "magic-realism",
        term: "Magic Realism",
      },
    ],
  },
  {
    id: "suspense",
    term: "Suspense",
    shortDescription:
      "The intense feeling that an audience goes through while waiting for the outcome of certain events.",
    definition: {
      en: "Suspense is a literary device that authors use to keep their readers' interest alive throughout the work. It is a feeling of anticipation that something risky or dangerous is about to happen. The purpose of using this type of anxiety in literature is to make readers more concerned about the characters and to form sympathetic associations with them.",
      bn: "সাসপেন্স বা উৎকণ্ঠা হলো একটি সাহিত্যিক কৌশল যা লেখকরা সাহিত্যকর্ম জুড়ে তাদের পাঠকদের আগ্রহ বাঁচিয়ে রাখতে ব্যবহার করেন। এটি এমন একটি প্রত্যাশার অনুভূতি যে ঝুঁকিপূর্ণ বা বিপজ্জনক কিছু ঘটতে যাচ্ছে। সাহিত্যে এই ধরণের উদ্বেগের ব্যবহারের উদ্দেশ্য হলো পাঠকদের চরিত্রগুলো সম্পর্কে আরও চিন্তিত করা এবং তাদের সাথে সহানুভূতিশীল সম্পর্ক গড়ে তোলা।",
    },
    examples: [
      {
        text: "The delay in Hamlet's revenge for his father's murder creates prolonged suspense throughout the play.",
        source: "William Shakespeare, Hamlet",
      },
    ],
    context: {
      en: "A key element in thrillers, mysteries, and dramatic plots to engage the reader's emotions and compel them to keep reading.",
      bn: "থ্রিলার, রহস্য এবং নাটকীয় প্লটে পাঠকের আবেগকে যুক্ত করার এবং তাদের পড়তে বাধ্য করার একটি মূল উপাদান।",
    },
    similarTerms: [
      {
        id: "tension",
        term: "Tension",
      },
      {
        id: "foreshadowing",
        term: "Foreshadowing",
      },
    ],
  },
  {
    id: "syllogism",
    term: "Syllogism",
    shortDescription:
      "A form of logical reasoning that joins two or more premises to arrive at a conclusion.",
    definition: {
      en: "A syllogism is a rhetorical device that begins with a major statement, known as a premise, narrows down to a minor statement, or premise, and then arrives at a conclusion using deductive reasoning. It is the most common form of a deductive argument.",
      bn: "সিলোজিসম বা ন্যায়ানুমান হলো একটি আলংকারিক কৌশল যা একটি প্রধান বিবৃতি, যাকে প্রিমাইস বলা হয়, দিয়ে শুরু হয়, একটি ছোট বিবৃতি বা প্রিমাইসে সংকুচিত হয় এবং তারপর অবরোহী যুক্তি ব্যবহার করে একটি উপসংহারে পৌঁছায়। এটি অবরোহী যুক্তির সবচেয়ে সাধারণ রূপ।",
    },
    examples: [
      {
        text: "Had we but world enough and time, / This coyness, lady, were no crime. [...] But at my back I always hear / Time's winged chariot hurrying near; [...] Therefore, while thy youthful hue / Sits on thy skin like morning dew... / Now let us sport us while we may.",
        source: "Andrew Marvell, To His Coy Mistress",
      },
    ],
    context: {
      en: "Used in persuasive writing, rhetoric, and classical poetry to build a logically unassailable argument.",
      bn: "একটি যৌক্তিকভাবে অকাট্য যুক্তি তৈরি করার জন্য প্ররোচনামূলক লেখা, অলঙ্কারশাস্ত্র এবং ধ্রুপদী কবিতায় ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "deduction",
        term: "Deduction",
      },
      {
        id: "logic",
        term: "Logic",
      },
    ],
  },
  {
    id: "symbolism",
    term: "Symbolism",
    shortDescription: "The use of symbols to represent ideas or qualities.",
    definition: {
      en: "The use of symbols to represent ideas or qualities, where an object, person, situation, or action has a deeper meaning beyond its literal sense.",
      bn: "প্রতীকবাদ; এমন এক সাহিত্যিক কৌশল যেখানে কোনো বস্তু, ব্যক্তি বা ঘটনার মাধ্যমে আক্ষরিক অর্থের বাইরে গভীর কোনো ধারণা বা গুণাবলি প্রকাশ করা হয়।",
    },
    examples: [
      {
        text: "The green light at the end of Daisy's dock representing unreachable hopes.",
        source: "F. Scott Fitzgerald, The Great Gatsby",
      },
    ],
    context: {
      en: "Adds layers of meaning to a text, allowing for multiple interpretations and thematic depth.",
      bn: "এটি পাঠ্যের অর্থের স্তর যুক্ত করে, ফলে একাধিক ব্যাখ্যা এবং বিষয়ভিত্তিক গভীরতার সুযোগ তৈরি হয়।",
    },
    similarTerms: [
      {
        id: "motif",
        term: "Motif",
      },
      {
        id: "allegory",
        term: "Allegory",
      },
    ],
  },
  {
    id: "synecdoche",
    term: "Synecdoche",
    shortDescription:
      "A figure of speech in which a part represents the whole.",
    definition: {
      en: "A figure of speech in which a part is made to represent the whole or vice versa.",
      bn: "সমাসোক্তি বা অংশবাচক অলংকার; যেখানে কোনো একটি অংশকে সমগ্রের প্রতীক হিসেবে অথবা সমগ্রকে অংশের প্রতীক হিসেবে ব্যবহার করা হয়।",
    },
    examples: [
      {
        text: "Friends, Romans, countrymen, lend me your ears.",
        source: "William Shakespeare, Julius Caesar",
      },
    ],
    context: {
      en: "Creates engaging imagery and highlights specific aspects of the thing being described.",
      bn: "এটি আকর্ষণীয় চিত্রকল্প তৈরি করে এবং বর্ণিত বিষয়ের নির্দিষ্ট দিকগুলোকে তুলে ধরে।",
    },
    similarTerms: [
      {
        id: "metonymy",
        term: "Metonymy",
      },
    ],
  },
  {
    id: "synesthesia",
    term: "Synesthesia",
    shortDescription:
      "A figurative use of words that blends different sensory modalities.",
    definition: {
      en: "In literature, synesthesia is a rhetorical device that describes one kind of sensory experience in terms of another. It conflates the senses—such as hearing a color or seeing a sound—to create striking, multi-dimensional imagery. This technique deepens the sensory impact of the writing, appealing simultaneously to multiple perceptive faculties.",
      bn: "সাহিত্যে সিনেস্থেসিয়া বা ইন্দ্রিয়-সংমিশ্রণ হলো এমন একটি আলংকারিক প্রয়োগ, যেখানে একটি ইন্দ্রিয়ের অনুভূতি অন্য একটি ইন্দ্রিয়ের মাধ্যমে প্রকাশ করা হয়। যেমন- 'রঙ শোনা' বা 'শব্দ দেখা'। এটি বর্ণনায় এক অনন্য বহুমাত্রিক চিত্রকল্পের জন্ম দেয়।",
    },
    examples: [
      {
        text: "With blue, uncertain, stumbling buzz...",
        source:
          "Emily Dickinson, 'I heard a Fly buzz - when I died' (blending sound and sight)",
      },
    ],
    context: {
      en: "Synesthetic imagery is prevalent in Symbolist and Romantic poetry, where writers seek to transcend ordinary sensory boundaries to evoke profound emotional states.",
      bn: "সিম্বলিস্ট বা প্রতীকবাদী এবং রোমান্টিক কবিতায় এর বহুল ব্যবহার দেখা যায়, যেখানে লেখকরা সাধারণ ইন্দ্রিয়ের সীমা ছাড়িয়ে গভীর আবেগ জাগিয়ে তুলতে চেয়েছেন।",
    },
    similarTerms: [
      {
        id: "imagery",
        term: "Imagery",
      },
    ],
  },
  {
    id: "syntax",
    term: "Syntax",
    shortDescription:
      "The arrangement of words and phrases to create sentences.",
    definition: {
      en: "The arrangement of words and phrases to create well-formed sentences in a language; in literature, it encompasses sentence structure and word order to achieve specific stylistic effects.",
      bn: "বাক্যতত্ত্ব বা পদবিন্যাস; নির্দিষ্ট শৈল্পিক প্রভাব অর্জনের জন্য সাহিত্যে শব্দের বিন্যাস এবং বাক্যের গঠনকাঠামো।",
    },
    examples: [
      {
        text: "To your tents, O Israel! (Variation in structure for emphasis)",
        source: "Common Phrase",
      },
    ],
    context: {
      en: "Manipulated by authors to control pacing, build tension, or reflect a character's state of mind.",
      bn: "লেখকরা পড়ার গতি নিয়ন্ত্রণ, উত্তেজনা তৈরি বা চরিত্রের মানসিক অবস্থা প্রতিফলিত করতে এটি ব্যবহার করেন।",
    },
    similarTerms: [
      {
        id: "diction",
        term: "Diction",
      },
    ],
  },
  {
    id: "tautology",
    term: "Tautology",
    shortDescription:
      "The repetitive use of phrases or words that have similar meanings.",
    definition: {
      en: "Tautology is the redundant repetition of a meaning in a sentence or phrase, using different words that essentially say the same thing twice. In literature and rhetoric, while often considered a stylistic fault or pleonasm, it can be employed intentionally for emphasis, poetic rhythm, or to characterize a speaker as verbose or foolish.",
      bn: "টটোলজি বা পুনরুক্তি হলো এমন এক প্রয়োগ যেখানে ভিন্ন শব্দ ব্যবহার করে একই অর্থ বারবার প্রকাশ করা হয়। এটি অনেক সময় দোষ হিসেবে বিবেচিত হলেও, জোর প্রদান, কাব্যিক ছন্দ তৈরি বা কোনো চরিত্রকে বাচাল হিসেবে তুলে ধরার জন্য ইচ্ছাকৃতভাবে ব্যবহৃত হতে পারে।",
    },
    examples: [
      {
        text: "To be, or not to be, that is the question... (A broader philosophical form of self-evident tautology regarding existence)",
        source:
          "William Shakespeare, 'Hamlet' (often explored in tautological rhetoric)",
      },
      {
        text: "With malice toward none, with charity for all...",
        source:
          "Abraham Lincoln, 'Second Inaugural Address' (Using semantic equivalents for rhetorical balance)",
      },
    ],
    context: {
      en: "Writers must use tautology carefully; when accidental, it clutters prose, but when deliberate, it can hammer home a point with rhetorical force.",
      bn: "লেখকদের অত্যন্ত সতর্কতার সাথে এটি ব্যবহার করতে হয়; অসাবধানতাবশত ব্যবহৃত হলে তা গদ্যকে ভারাক্রান্ত করে, তবে উদ্দেশ্যমূলক হলে তা বক্তব্যের জোরালো প্রভাব তৈরি করে।",
    },
    similarTerms: [
      {
        id: "pleonasm",
        term: "Pleonasm",
      },
      {
        id: "repetition",
        term: "Repetition",
      },
    ],
    oppositeTerms: [
      {
        id: "oxymoron",
        term: "Oxymoron",
      },
      {
        id: "conciseness",
        term: "Conciseness",
      },
    ],
  },
  {
    id: "tercet",
    term: "Tercet",
    shortDescription: "A poetic stanza composed of three lines.",
    definition: {
      en: "A tercet is a stanza consisting of exactly three lines of poetry. These lines can rhyme together, or follow various rhyming patterns, such as the interwoven ABA BCB CDC structure found in terza rima. Tercets are versatile building blocks in poetic forms, providing a concise structural unit that propels narrative or lyrical progression.",
      bn: "টারসেট বা ত্রিপদী হলো তিন চরণের সমন্বয়ে গঠিত কবিতার একটি স্তবক। এই তিনটি চরণে একই অন্ত্যমিল থাকতে পারে, অথবা ভিন্ন ছন্দের বিন্যাস (যেমন- ABA, BCB) ব্যবহৃত হতে পারে। এটি কবিতার একটি গাঠনিক একক হিসেবে কাজ করে।",
    },
    examples: [
      {
        text: "O wild West Wind, thou breath of Autumn's being, / Thou, from whose unseen presence the leaves dead / Are driven, like ghosts from an enchanter fleeing,",
        source:
          "Percy Bysshe Shelley, 'Ode to the West Wind' (Written in terza rima)",
      },
    ],
    context: {
      en: "The tercet is foundational to the villanelle form and Dante's Divine Comedy, offering a rhythmically satisfying yet asymmetrical structure.",
      bn: "ভিলানেল এবং দান্তের 'ডিভাইন কমেডি'-তে টারসেটের ব্যবহার একে একটি ছন্দময় অথচ অপ্রতিসম কাঠামোর রূপ দিয়েছে।",
    },
    similarTerms: [
      {
        id: "stanza",
        term: "Stanza",
      },
      {
        id: "terza-rima",
        term: "Terza Rima",
      },
      {
        id: "couplet",
        term: "Couplet",
      },
      {
        id: "quatrain",
        term: "Quatrain",
      },
    ],
  },
  {
    id: "tetrameter",
    term: "Tetrameter",
    shortDescription: "A line of poetry that has four metrical feet.",
    definition: {
      en: "In poetry, a tetrameter is a line consisting of four metrical feet. The particular type of foot can vary (e.g., iambic, trochaic, anapestic). It is a very common meter in English poetry, often creating a fast-paced, rhythmic, and sometimes song-like quality.",
      bn: "কবিতায়, টেট্রামিটার বা চতুর্মাত্রিক হলো একটি লাইন যা চারটি মাত্রিক পর্ব নিয়ে গঠিত। পর্বের নির্দিষ্ট ধরন পরিবর্তিত হতে পারে (যেমন- আইয়াম্বিক, ট্রোকেইক, অ্যানাপেসটিক)। ইংরেজি কবিতায় এটি একটি খুব সাধারণ মাত্রা, যা প্রায়শই একটি দ্রুত গতির, ছন্দোবদ্ধ এবং কখনও কখনও গানের মতো গুণ তৈরি করে।",
    },
    examples: [
      {
        text: "Because I could not stop for Death – / He kindly stopped for me –",
        source: "Emily Dickinson, Because I could not stop for Death",
      },
    ],
    context: {
      en: "Frequently used in ballads, hymns, and lyric poetry for its musicality and accessible rhythm.",
      bn: "এর সাঙ্গীতিক এবং সহজবোধ্য ছন্দের কারণে ব্যালাড, স্তোত্র এবং গীতি কবিতায় ঘনঘন ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "pentameter",
        term: "Pentameter",
      },
      {
        id: "meter",
        term: "Meter",
      },
    ],
  },
  {
    id: "theme",
    term: "Theme",
    shortDescription: "The central idea or insight of a work of literature.",
    definition: {
      en: "The central, underlying, and controlling idea or insight of a work of literature.",
      bn: "মূলভাব বা বিষয়বস্তু; কোনো সাহিত্যকর্মের কেন্দ্রীয় বা অন্তর্নিহিত ধারণা বা অন্তর্দৃষ্টি।",
    },
    examples: [
      {
        text: "The destructive nature of ambition.",
        source: "William Shakespeare, Macbeth",
      },
    ],
    context: {
      en: "Often universal ideas explored through characters, plot, and imagery, giving the work broader meaning.",
      bn: "এগুলো প্রায়শই সার্বজনীন ধারণা যা চরিত্র, কাহিনি এবং চিত্রকল্পের মাধ্যমে অনুসন্ধান করা হয়, যা রচনাটিকে বৃহত্তর অর্থ প্রদান করে।",
    },
    similarTerms: [
      {
        id: "motif",
        term: "Motif",
      },
    ],
  },
  {
    id: "third-person-omniscient",
    term: "Third-Person Omniscient",
    shortDescription:
      "A narrative perspective where the narrator knows all the thoughts, feelings, and actions of all characters.",
    definition: {
      en: "Third-person omniscient is a point of view in which the narrator is an all-knowing entity hovering outside the story. This narrator possesses absolute knowledge about every character's internal thoughts, hidden motives, and past or future events. It allows the author to move seamlessly between different characters' perspectives and across time and space.",
      bn: "থার্ড-পারসন অমনিসিয়েন্ট বা সর্বজ্ঞ দৃষ্টিভঙ্গি হলো এমন একটি বর্ণনারীতি, যেখানে কথক বা বর্ণনাকারী গল্পের বাইরে থেকে সব কিছু জানেন। এই কথক সমস্ত চরিত্রের গোপন চিন্তা, উদ্দেশ্য, অতীত এবং ভবিষ্যতের ঘটনা সম্পর্কে অবগত থাকেন এবং যেকোনো চরিত্রের দৃষ্টিকোণ থেকে বর্ণনা করতে পারেন।",
    },
    examples: [
      {
        text: "The narrator delves into the minds of multiple characters throughout the novel, exposing the intricate social webs and private motivations of the town of Middlemarch.",
        source: "George Eliot, 'Middlemarch'",
      },
    ],
    context: {
      en: "Highly popular in 19th-century novels, this point of view grants the author maximum flexibility and allows for broad, philosophical commentary on the human condition.",
      bn: "উনিশ শতকের উপন্যাসে এটি অত্যন্ত জনপ্রিয় ছিল, যা লেখককে সর্বোচ্চ স্বাধীনতা এবং মানবজীবন সম্পর্কে দার্শনিক মত প্রকাশের সুযোগ করে দেয়।",
    },
    similarTerms: [
      {
        id: "point-of-view",
        term: "Point of View",
      },
      {
        id: "third-person-limited",
        term: "Third-Person Limited",
      },
    ],
    oppositeTerms: [
      {
        id: "first-person",
        term: "First-Person Point of View",
      },
    ],
  },
  {
    id: "tone",
    term: "Tone",
    shortDescription: "The author's attitude toward the subject or audience.",
    definition: {
      en: "The author's attitude toward the subject, characters, or audience, as conveyed through diction, syntax, and imagery.",
      bn: "সুর বা মেজাজ; শব্দচয়ন, বাক্য গঠন এবং চিত্রকল্পের মাধ্যমে প্রকাশিত বিষয়বস্তু, চরিত্র বা পাঠকের প্রতি লেখকের দৃষ্টিভঙ্গি বা মনোভাব।",
    },
    examples: [
      {
        text: "A satirical and detached tone.",
        source: "Jonathan Swift, A Modest Proposal",
      },
    ],
    context: {
      en: "Crucial for understanding how a piece of writing should be interpreted—whether serious, ironic, playful, or sorrowful.",
      bn: "একটি লেখা কীভাবে ব্যাখ্যা করা উচিত তা বোঝার জন্য এটি অত্যন্ত গুরুত্বপূর্ণ—তা গুরুগম্ভীর, শ্লেষাত্মক, কৌতুকপূর্ণ বা বিষণ্ণ কিনা।",
    },
    similarTerms: [
      {
        id: "mood",
        term: "Mood",
      },
      {
        id: "atmosphere",
        term: "Atmosphere",
      },
    ],
  },
  {
    id: "tragedy",
    term: "Tragedy",
    shortDescription:
      "A serious drama dealing with the downfall of a heroic character.",
    definition: {
      en: "A serious form of drama dealing with the downfall of a heroic or noble character, often due to a tragic flaw or fatal mistake.",
      bn: "বিয়োগান্তক নাটক; এমন একটি গুরুতর নাটক যা সাধারণত নায়কের পতন বা ধ্বংসের বিবরণ দেয়, যা প্রায়শই তার কোনো মারাত্মক ত্রুটি বা ভুলের কারণে ঘটে।",
    },
    examples: [
      {
        text: "The tragic downfall of the Prince of Denmark.",
        source: "William Shakespeare, Hamlet",
      },
    ],
    context: {
      en: "Aimed to evoke feelings of pity and fear in the audience, leading to a catharsis.",
      bn: "এর লক্ষ্য হলো দর্শকদের মনে করুণা ও ভয়ের অনুভূতি জাগিয়ে তোলা, যা শেষ পর্যন্ত ক্যাথারসিস বা আবেগগত মুক্তির দিকে নিয়ে যায়।",
    },
    oppositeTerms: [
      {
        id: "comedy",
        term: "Comedy",
      },
    ],
  },
  {
    id: "tragicomedy",
    term: "Tragicomedy",
    shortDescription:
      "A literary work blending elements of comedy and tragedy.",
    definition: {
      en: "A play or novel containing elements of both comedy and tragedy, often featuring a serious storyline that resolves happily, or blending somber themes with humor.",
      bn: "ট্রাজিকমেডি; এমন একটি নাটক বা উপন্যাস যাতে কমেডি এবং ট্র্যাজেডি উভয়ের উপাদান থাকে, যা প্রায়শই হাস্যরসের সাথে গম্ভীর বিষয়ের মিশ্রণ ঘটায় বা সুখে শেষ হয়।",
    },
    examples: [
      {
        text: "The blending of dark themes with a comedic resolution.",
        source: "William Shakespeare, The Merchant of Venice",
      },
    ],
    context: {
      en: "Reflects the complex reality of human life where sorrow and joy are often intertwined.",
      bn: "এটি মানব জীবনের জটিল বাস্তবতাকে প্রতিফলিত করে যেখানে দুঃখ এবং আনন্দ প্রায়শই একে অপরের সাথে মিশে থাকে।",
    },
  },
  {
    id: "trochee",
    term: "Trochee",
    shortDescription:
      "A metrical foot consisting of a stressed syllable followed by an unstressed one.",
    definition: {
      en: "A trochee is a metrical foot in poetry consisting of one stressed (long) syllable followed by one unstressed (short) syllable. It is the exact opposite of an iamb. Trochaic meter can create a falling, sometimes heavy or forceful rhythm.",
      bn: "ট্রোচি হলো কবিতার একটি মাত্রিক পর্ব যা একটি জোর দেওয়া (দীর্ঘ) দল বা সিলেবল এবং তার পরে একটি জোর না দেওয়া (হ্রস্ব) দল নিয়ে গঠিত। এটি আইয়াম্বের ঠিক বিপরীত। ট্রোকেইক মাত্রা একটি পতনশীল, কখনও কখনও ভারী বা জোরালো ছন্দ তৈরি করতে পারে।",
    },
    examples: [
      {
        text: "Tyger Tyger, burning bright, / In the forests of the night;",
        source: "William Blake, The Tyger",
      },
    ],
    context: {
      en: "Used to create a chanting effect or to convey a sense of urgency, power, or incantation, contrasting with the more natural speech-like rhythm of iambs.",
      bn: "জপ করার মতো প্রভাব তৈরি করতে বা জরুরি অবস্থা, ক্ষমতা বা মন্ত্র উচ্চারণের অনুভূতি প্রকাশ করতে ব্যবহৃত হয়, যা আইয়াম্বের স্বাভাবিক কথাবার্তার মতো ছন্দের বিপরীত।",
    },
    similarTerms: [
      {
        id: "iamb",
        term: "Iamb",
      },
      {
        id: "dactyl",
        term: "Dactyl",
      },
    ],
    oppositeTerms: [
      {
        id: "iamb",
        term: "Iamb",
      },
    ],
  },
  {
    id: "trope",
    term: "Trope",
    shortDescription: "A figurative use of a word, or a common theme/device.",
    definition: {
      en: "A figurative or metaphorical use of a word or expression; broadly, a common or overused theme, device, or cliché in literature.",
      bn: "অলংকারিক শব্দ বা পরিচিত বিষয়; শব্দের আলংকারিক বা রূপক ব্যবহার; ব্যাপকভাবে বলতে গেলে সাহিত্যে ব্যবহৃত কোনো সাধারণ বা বহুল ব্যবহৃত থিম বা কৌশল।",
    },
    examples: [
      {
        text: "The 'chosen one' destined to save the world.",
        source: "Common in Fantasy Literature",
      },
    ],
    context: {
      en: "Helps writers communicate complex ideas simply by relying on familiar patterns recognizable to audiences.",
      bn: "পরিচিত বিন্যাসের ওপর নির্ভর করে লেখকদের সহজেই পাঠকদের কাছে জটিল ধারণা প্রকাশ করতে সাহায্য করে।",
    },
    similarTerms: [
      {
        id: "cliche",
        term: "Cliché",
      },
      {
        id: "motif",
        term: "Motif",
      },
    ],
  },
  {
    id: "understatement",
    term: "Understatement",
    shortDescription:
      "Intentionally making a situation seem less serious than it is.",
    definition: {
      en: "A figure of speech employed by writers or speakers to intentionally make a situation seem less important or serious than it is.",
      bn: "অবমূল্যায়ন বা ন্যূনোক্তি; লেখকদের দ্বারা ইচ্ছাকৃতভাবে কোনো পরিস্থিতিকে বাস্তবের চেয়ে কম গুরুত্বপূর্ণ বা কম গুরুতর দেখানোর জন্য ব্যবহৃত একটি কৌশল।",
    },
    examples: [
      {
        text: "I have to have this operation. It isn't very serious. I have this tiny little tumor on the brain.",
        source: "J.D. Salinger, The Catcher in the Rye",
      },
    ],
    context: {
      en: "Often used for comedic effect, irony, or politeness to downplay an extreme situation.",
      bn: "একটি চরম পরিস্থিতিকে হালকা করতে এটি প্রায়শই কৌতুকপূর্ণ প্রভাব, শ্লেষ বা ভদ্রতার জন্য ব্যবহৃত হয়।",
    },
    similarTerms: [
      {
        id: "litotes",
        term: "Litotes",
      },
    ],
    oppositeTerms: [
      {
        id: "hyperbole",
        term: "Hyperbole",
      },
    ],
  },
  {
    id: "utopia",
    term: "Utopia",
    shortDescription:
      "An imagined community or society that possesses highly desirable or nearly perfect qualities.",
    definition: {
      en: "A utopia is an illusionary place that projects the notion of a perfect society to the reader. Here, the 'perfect society' refers to ideal conditions achieved within the material world as opposed to the expected idealism of afterlife.",
      bn: "ইউটোপিয়া (Utopia) বা কল্পরাজ্য হলো এমন একটি কল্পিত স্থান যা পাঠকের কাছে একটি নিখুঁত সমাজের ধারণা তুলে ধরে। এখানে 'নিখুঁত সমাজ' বলতে পরকালের আদর্শবাদের বিপরীতে বস্তুবাদী বিশ্বে অর্জিত আদর্শ পরিস্থিতিকে বোঝায়।",
    },
    examples: [
      {
        text: "More's depiction of an island society with perfectly functioning laws, customs, and social welfare.",
        source: "Thomas More, 'Utopia'",
      },
    ],
    context: {
      en: "Used to critique contemporary society by presenting an alternative, ideal model for governance and social interaction.",
      bn: "শাসন এবং সামাজিক মিথস্ক্রিয়ার জন্য একটি বিকল্প ও আদর্শ মডেল উপস্থাপন করে সমসাময়িক সমাজের সমালোচনা করার জন্য ব্যবহৃত হয়।",
    },
    oppositeTerms: [
      {
        id: "dystopia",
        term: "Dystopia",
      },
    ],
  },
  {
    id: "verbal_irony",
    term: "Verbal Irony",
    shortDescription:
      "A figure of speech where what is said is the opposite of what is meant.",
    definition: {
      en: "Verbal irony is a rhetorical device in which a speaker's literal words are completely at odds with their true meaning or intent. The speaker intentionally says one thing but means another, often to convey sarcasm, humor, or sharp criticism.",
      bn: "ভার্বাল আইরনি (Verbal Irony) বা শাব্দিক বিদ্রূপ হলো এমন একটি অলংকার যেখানে বক্তা যা বলেন, তার অন্তর্নিহিত অর্থ সম্পূর্ণ বিপরীত হয়। এটি মূলত কটাক্ষ, হাস্যরস বা সমালোচনা করার উদ্দেশ্যে ব্যবহৃত হয়।",
    },
    examples: [
      {
        text: 'Marc Antony repeating "Yet Brutus says he was ambitious; / And Brutus is an honourable man," progressively undermining the claim of honor.',
        source: "William Shakespeare, 'Julius Caesar'",
      },
      {
        text: 'Saying "Oh, fantastic!" when your car breaks down in the rain.',
        source: "Everyday example",
      },
    ],
    context: {
      en: "Verbal irony relies heavily on context and tone of voice. In literature, it exposes hypocrisy and serves as a tool for acute social commentary by highlighting the gap between appearance and reality.",
      bn: "ভার্বাল আইরনি মূলত প্রেক্ষাপট এবং কণ্ঠস্বরের সুরের ওপর নির্ভর করে। সাহিত্যে এটি ভণ্ডামি উন্মোচন করতে এবং সমাজ সমালোচনার একটি শক্তিশালী হাতিয়ার হিসেবে কাজ করে।",
    },
    similarTerms: [
      {
        id: "sarcasm",
        term: "Sarcasm",
      },
      {
        id: "satire",
        term: "Satire",
      },
    ],
  },
  {
    id: "verisimilitude",
    term: "Verisimilitude",
    shortDescription: "The semblance of truth or reality in a literary work.",
    definition: {
      en: "The semblance of truth or reality in a literary work; the quality that makes a fictional narrative feel real and believable.",
      bn: "সত্যের আভাষ বা বাস্তবসম্মততা; একটি সাহিত্যকর্মে সত্য বা বাস্তবতার ছদ্মবেশ; সেই গুণ যা একটি কাল্পনিক আখ্যানকে বাস্তব এবং বিশ্বাসযোগ্য করে তোলে।",
    },
    examples: [
      {
        text: "The detailed geographical and historical framing.",
        source: "J.R.R. Tolkien, The Lord of the Rings",
      },
    ],
    context: {
      en: "Achieved through sensory details, consistent character behavior, and logical plot development.",
      bn: "ইন্দ্রিয়গ্রাহ্য বিবরণ, চরিত্রের সামঞ্জস্যপূর্ণ আচরণ এবং যৌক্তিক কাহিনি বিকাশের মাধ্যমে এটি অর্জিত হয়।",
    },
    similarTerms: [
      {
        id: "realism",
        term: "Realism",
      },
    ],
  },
  {
    id: "vignette",
    term: "Vignette",
    shortDescription:
      "A short, impressionistic scene that focuses on one moment or character.",
    definition: {
      en: "A vignette is a brief, evocative piece of writing that aims to capture a single moment in time, a specific setting, or the essence of a character. Unlike a complete short story, a vignette typically lacks a traditional plot structure with conflict and resolution; instead, it relies on vivid imagery, mood, and descriptive language to leave a lasting impression.",
      bn: "ভিনেট বা খণ্ডচিত্র হলো একটি সংক্ষিপ্ত এবং চিত্ররূপময় রচনা, যা কোনো একটি বিশেষ মুহূর্ত, স্থান বা চরিত্রের মূল নির্যাস তুলে ধরে। পূর্ণাঙ্গ ছোটগল্পের মতো এতে প্রথাগত প্লট বা দ্বন্দ্ব থাকে শকতে না; বরং এটি গভীর চিত্রকল্প এবং আবহের মাধ্যমে একটি স্থায়ী ছাপ রেখে যায়।",
    },
    examples: [
      {
        text: "The House on Mango Street consists of a series of interconnected vignettes detailing the life of Esperanza Cordero.",
        source: "Sandra Cisneros, 'The House on Mango Street'",
      },
    ],
    context: {
      en: "Vignettes are often used within larger narratives to provide intimate character insights or establish atmosphere without pausing the forward momentum of the plot.",
      bn: "বৃহত্তর কাহিনীর মাঝে প্রায়শই ভিনেট ব্যবহৃত হয়, যা প্লটের গতি বাধাগ্রস্ত না করেই চরিত্রের মনস্তত্ত্ব বা পারিপার্শ্বিক আবহ স্পষ্টভাবে ফুটিয়ে তোলে।",
    },
    similarTerms: [
      {
        id: "slice-of-life",
        term: "Slice of Life",
      },
      {
        id: "sketch",
        term: "Sketch",
      },
    ],
  },
  {
    id: "villanelle",
    term: "Villanelle",
    shortDescription:
      "A highly structured poem with 19 lines and two repeating rhymes and refrains.",
    definition: {
      en: "A highly structured, nineteen-line poem with two repeating rhymes and two refrains. The form is made up of five tercets followed by a quatrain. The first and third lines of the opening tercet are repeated alternately in the last lines of the succeeding stanzas, then in the final stanza, the refrain serves as the poem's two concluding lines.",
      bn: "ভিলানেল হলো একটি অত্যন্ত সুগঠিত ১৯ লাইনের ফরাসি কাব্যরূপ, যেখানে দুটি পুনরাবৃত্তিমূলক অন্ত্যমিল এবং দুটি ধ্রুবপদ বা রিফ্রেন থাকে। এটি পাঁচটি ত্রিপদী স্তবক এবং শেষে একটি চতুষ্পদী স্তবক নিয়ে গঠিত।",
    },
    examples: [
      {
        text: "Do not go gentle into that good night, / Old age should burn and rave at close of day; / Rage, rage against the dying of the light.",
        source: "Dylan Thomas, 'Do not go gentle into that good night'",
      },
    ],
    context: {
      en: "Originating from Italian rustic songs, the villanelle became a strict form in French poetry and was later adapted into English. It is often used to express obsessive themes or circular thoughts, as the repeating lines create an inescapable echo.",
      bn: "ইতালীয় লোকগীতি থেকে উদ্ভূত হয়ে এটি ফরাসি কবিতায় একটি কঠোর রূপ ধারণ করে। এটি প্রায়শই আবেশজনক থিম বা বৃত্তাকার চিন্তাভাবনা প্রকাশ করতে ব্যবহৃত হয়, কারণ পুনরাবৃত্তিমূলক লাইনগুলো একটি অনিবার্য প্রতিধ্বনি তৈরি করে।",
    },
  },
  {
    id: "zeugma",
    term: "Zeugma",
    shortDescription:
      "A figure of speech in which a word applies to two others in different senses.",
    definition: {
      en: "A figure of speech in which a word, usually a verb or an adjective, applies to more than one noun, blending together grammatically and logically different ideas. It often connects two subjects or objects in a way that creates a striking, sometimes humorous effect.",
      bn: "জুগমা হলো একটি অলংকার যেখানে একটি শব্দ (সাধারণত ক্রিয়া বা বিশেষণ) একাধিক শব্দের সাথে যুক্ত হয়, কিন্তু প্রত্যেকটির সাথে তার অর্থ ভিন্ন হয়। এটি ব্যাকরণগত ও যৌক্তিকভাবে ভিন্ন ধারণাকে একত্রিত করে।",
    },
    examples: [
      {
        text: "Here thou, great Anna! whom three realms obey, / Dost sometimes counsel take—and sometimes tea.",
        source: "Alexander Pope, 'The Rape of the Lock'",
      },
    ],
    context: {
      en: "Used to create literary effects, condense language, or inject humor. By forcing the reader to understand the dual application of the single word, zeugma highlights contrasting ideas efficiently.",
      bn: "এটি সাহিত্যিক প্রভাব তৈরি, ভাষাকে ঘনীভূত বা হাস্যরস যুক্ত করতে ব্যবহৃত হয়। পাঠকের মনোযোগ আকর্ষণ করতে এবং বৈপরীত্যকে জোরালোভাবে উপস্থাপন করতে এটি অত্যন্ত কার্যকর।",
    },
    similarTerms: [
      {
        id: "syllepsis",
        term: "Syllepsis",
      },
    ],
  },
];
