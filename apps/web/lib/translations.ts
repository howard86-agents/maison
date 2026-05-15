export const LOCALES = ["zh-TW", "zh-CN", "ja", "ko", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABEL: Record<Locale, string> = {
  "zh-TW": "繁體中文",
  "zh-CN": "简体中文",
  ja: "日本語",
  ko: "한국어",
  en: "English",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  "zh-TW": "繁中",
  "zh-CN": "简中",
  ja: "日本",
  ko: "한국",
  en: "EN",
};

export const HTML_LANG: Record<Locale, string> = {
  "zh-TW": "zh-Hant",
  "zh-CN": "zh-Hans",
  ja: "ja",
  ko: "ko",
  en: "en",
};

interface ProcessStep {
  h: string;
  n: string;
  p: string;
}

interface OrderStageText {
  d: string;
  t: string;
  w: string;
}

interface QuoteCandidateText {
  city: string;
  cond: string;
  time: string;
  verdict: string;
}

interface PaymentMethodText {
  name: string;
  sub: string;
}

interface Dictionary {
  account: {
    memberSince: string;
    welcome1: string;
    welcomeEm: string;
    fullName: string;
    cityLine: string;
    currentTier: string;
    tierHeadlines: { Normal: string; Professional: string; Diamond: string };
    ledgerLifetime: string;
    previewTier: string;
    nav: {
      orders: string;
      saved: string;
      addresses: string;
      payments: string;
      notifications: string;
      profile: string;
    };
    filesEyebrow: string;
    filesOpen1: string;
    filesOpenEm: string;
    newFile: string;
    tableFile: string;
    tablePiece: string;
    tableState: string;
    tableValue: string;
    view: string;
    ledgerYtdEyebrow: string;
    ledgerYtdValue: string;
    ledgerYtdNote: string;
    lineChannelEyebrow: string;
    lineChannelValue: string;
    openChannel: string;
    rebindLine: string;
    sectionPreview: string;
    sectionCopy: string;
    states: {
      quote: string;
      reserved: string;
      transit: string;
      delivered: string;
    };
    orderItems: Record<string, string>;
    orderValues: Record<string, string>;
  };
  admin: {
    eyebrow: string;
    title: string;
    nav: {
      dashboard: string;
      orders: string;
      proxyRequests: string;
      products: string;
      members: string;
    };
    stats: {
      orders: string;
      proxyRequests: string;
      products: string;
      members: string;
    };
    members: {
      member: string;
      email: string;
      role: string;
      joined: string;
    };
    orders: {
      noneTitle: string;
      noneCopy: string;
      order: string;
      member: string;
      status: string;
      total: string;
    };
    products: {
      noneTitle: string;
      noneCopy: string;
      active: string;
      draft: string;
      houseFallback: string;
    };
    proxyRequests: {
      noneTitle: string;
      noneCopy: string;
      unspecifiedBrand: string;
    };
  };
  atelierNote: {
    eyebrow: string;
    headlineA: string;
    headlineEm: string;
    headlineB: string;
    copy: string;
    readMore: string;
  };
  checkout: {
    fileLine: string;
    title: string;
    titleEm: string;
    deliveryEyebrow: string;
    customerName: string;
    customerAddress: string;
    primary: string;
    change: string;
    carriageLabel: string;
    carriageValue: string;
    retime: string;
    paymentEyebrow: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
    consentsEyebrow: string;
    consents: string[];
    methods: Record<"card" | "ecpay" | "line", PaymentMethodText>;
    summary: string;
    productEyebrow: string;
    productName: string;
    productSub: string;
    piece: string;
    conciergeService: string;
    authentication: string;
    insuredCarriage: string;
    dutyPaid: string;
    included: string;
    totalToday: string;
    escrowedNote: string;
    authorise: string;
    securityNote: string;
  };
  collectionHome: {
    eyebrow: string;
    line1: string;
    lineEm: string;
    line2: string;
    meta: string;
    inVaultMono: string;
    onQuoteMono: string;
    inVaultClause: string;
    onQuoteClause: string;
  };
  collectionPage: {
    eyebrow: string;
    headline1: string;
    headlineEm: string;
    headline2: string;
    rateLine: string;
    rateUpdated: string;
    filterAll: string;
    filterVault: string;
    filterEstimated: string;
    categoriesLabel: string;
    categories: string[];
    sortLabel: string;
    sortNewest: string;
    sortAsc: string;
    sortDesc: string;
    sortFav: string;
    nothingFits: string;
    sendUsA: string;
    sendUsEm: string;
    sendUsAfter: string;
    conciergeReply: string;
  };
  cta: {
    request: string;
    browse: string;
    addToBag: string;
    requestPiece: string;
    continueDetails: string;
    continueReview: string;
    back: string;
    approve: string;
  };
  dev: {
    home: string;
    collection: string;
    detail: string;
    request: string;
    quote: string;
    checkout: string;
    order: string;
    account: string;
  };
  footer: {
    description: string;
    rule: string;
    atelierTitle: string;
    atelierItems: string[];
    serviceTitle: string;
    serviceItems: string[];
    membershipTitle: string;
    membershipItems: string[];
    copyright: string;
    cities: string;
    builtPrivately: string;
  };
  header: {
    estTaipei: string;
    languageGroup: string;
    currencyGroup: string;
    updated: string;
    toggleDark: string;
    search: string;
    account: string;
    signIn: string;
  };
  headline: { line1: string; line2: string; line3: string; line4em: string };
  hero: {
    eyebrow: string;
    sub: string;
    statsSourced: string;
    statsTime: string;
    statsTimeUnit: string;
    statsAuth: string;
    statsAuthUnit: string;
    imageAlt: string;
    imageCaption: string;
  };
  meta: {
    title: string;
    description: string;
  };
  nav: {
    atelier: string;
    collection: string;
    request: string;
    journal: string;
  };
  order: {
    fileLine: string;
    title: string;
    titleEm: string;
    titleAfter: string;
    paidEscrowed: string;
    releasedNote: string;
    stage3of5: string;
    eta: string;
    candidateLine: string;
    stages: OrderStageText[];
    conciergeMessage: string;
    conciergeMessageSig: string;
    yourConcierge: string;
    reachable: string;
    repliesIn: string;
    openLine: string;
    requestPhotos: string;
    yourNotifications: string;
    notifLine: string;
    notifEmail: string;
    notifSms: string;
    on: string;
    off: string;
    afterArrival: string;
    afterArrivalItems: string[];
  };
  process: {
    title: string;
    kicker: string;
    meta: string;
    steps: ProcessStep[];
  };
  product: {
    breadcrumbAtelier: string;
    breadcrumbCollection: string;
    viewLabel: string;
    sourcedFrom: string;
    inVault: string;
    onQuote: string;
    authenticated: string;
    specs: {
      maison: string;
      reference: string;
      referenceValue: string;
      materials: string;
      materialsValue: string;
      dimensions: string;
      dimensionsValue: string;
      provenance: string;
      provenanceValue: string;
      authentication: string;
      authenticationValue: string;
      shipsFrom: string;
      shipsFromValue: string;
    };
    assurance: {
      authTitle: string;
      authSub: string;
      escrowTitle: string;
      escrowSub: string;
      carriageTitle: string;
      carriageSub: string;
      resaleTitle: string;
      resaleSub: string;
    };
  };
  productCard: {
    inVault: string;
    estimated: string;
  };
  quote: {
    dossierLine: string;
    headline1: string;
    headlineEm: string;
    headline2: string;
    noteIntroA: string;
    conciergeName: string;
    noteIntroB: string;
    conciergeFull: string;
    conciergeMeta: string;
    repliesBetween: string;
    openLine: string;
    holding: string;
    candidates: Record<"A" | "B" | "C", QuoteCandidateText>;
    sourceLabel: string;
    deliveryLabel: string;
    approve: string;
    priceEyebrow: string;
    priceTitle: string;
    priceCopy: string;
    authEyebrow: string;
    authTitle: string;
    authCopy: string;
  };
  request: {
    eyebrow: string;
    title: string;
    titleEm: string;
    step1: string;
    step2: string;
    step3: string;
    pieceLabel: string;
    dragOrBrowse: string;
    uploadedH: string;
    uploadedP: string;
    emptyH: string;
    emptyP: string;
    replacePhoto: string;
    identify: string;
    identifying: string;
    choosePhoto: string;
    pasteLink: string;
    aiAssistant: string;
    aiReading: string;
    aiSuggestion1: string;
    aiSuggestion2: string;
    aiSuggestion3: string;
    aiConfidence: string;
    aiFootnoteStrong: string;
    aiFootnote: string;
    brandLabel: string;
    brandPh: string;
    modelLabel: string;
    modelPh: string;
    budgetLowLabel: string;
    budgetLowHelp: string;
    budgetHiLabel: string;
    budgetHiHelp: string;
    notesLabel: string;
    notesPh: string;
    notesHelp: string;
    condLabel: string;
    condNew: string;
    condExcellent: string;
    condVintage: string;
    deadlineLabel: string;
    deadlinePh: string;
    fileReady: string;
    notesHeader: string;
    byHeader: string;
    channelHeader: string;
    conciergeChannelLine: string;
    connected: string;
    noFixedDate: string;
    defaultNotes: string;
    timeline: { t: string; w: string; when: string }[];
    filePreview: string;
    estAllIn: string;
    indicative: string;
    conciergeFee: string;
    conciergeFeeSub: string;
    authFee: string;
    authFeeSub: string;
    insuredFee: string;
    insuredFeeSub: string;
    refRate: string;
    refRateSub: string;
    holdDeposit: string;
    backLabel: string;
    continueDetails: string;
    continueReview: string;
    dispatchFile: string;
    holdFootnote: string;
  };
  signin: {
    eyebrow: string;
    title: string;
    subtitle: string;
    alreadySigned: string;
    goAccount: string;
    you: string;
    or: string;
    providerLabels: {
      google: string;
      facebook: string;
      line: string;
      guest: string;
    };
    providerHints: {
      google: string;
      facebook: string;
      line: string;
      guest: string;
    };
    redirecting: string;
    signingIn: string;
    demoNote: string;
    errorGeneric: string;
    errorSignIn: string;
  };
  tiers: {
    eyebrow: string;
    line1: string;
    lineEm: string;
    meta: string;
    yourTier: string;
    names: { Normal: string; Professional: string; Diamond: string };
    spend: { Normal: string; Professional: string; Diamond: string };
    bens: {
      Normal: string[];
      Professional: string[];
      Diamond: string[];
    };
  };
  user: {
    signIn: string;
    signedIn: string;
    account: string;
    signOut: string;
    guest: string;
    member: string;
  };
}

const EN: Dictionary = {
  meta: {
    title: "MAISON · Concierge",
    description:
      "A private concierge for sourcing fine leather, watchmaking and ready-to-wear.",
  },
  header: {
    estTaipei: "EST · 2019 · TAIPEI",
    languageGroup: "Language",
    currencyGroup: "Currency · reference",
    updated: "Updated 13·05·26 09:42 GMT+8",
    toggleDark: "Toggle dark mode",
    search: "Search",
    account: "Account",
    signIn: "Sign in",
  },
  user: {
    signIn: "Sign in",
    signedIn: "Signed in",
    account: "Account",
    signOut: "Sign out",
    guest: "Guest",
    member: "Member",
  },
  nav: {
    atelier: "Atelier",
    collection: "The Collection",
    request: "Request a Piece",
    journal: "Journal",
  },
  cta: {
    request: "Request a Piece",
    browse: "Enter the Collection",
    addToBag: "Reserve in the Vault",
    requestPiece: "Request via Concierge",
    continueDetails: "Continue to details",
    continueReview: "Continue to review",
    back: "← back",
    approve: "Approve",
  },
  hero: {
    eyebrow: "A proxy-shopping atelier for considered pieces",
    sub: "MAISON is a private concierge for sourcing fine leather, watchmaking and ready-to-wear from the world’s ateliers — with transparent pricing, authentication, and one human dedicated to your file.",
    statsSourced: "pieces sourced last quarter",
    statsTime: "median time to first dossier",
    statsTimeUnit: "hr",
    statsAuth: "authenticated on first inspection",
    statsAuthUnit: "%",
    imageAlt: "A sourced Birkett Saddle 25 in Étoupe, photographed in studio",
    imageCaption: "hero · sourced piece, hand-styled",
  },
  headline: {
    line1: "The wardrobe",
    line2: "you would have",
    line3: "built, had you",
    line4em: "been\nthere yourself.",
  },
  process: {
    title: "How the concierge works",
    kicker: "Four steps, one private channel.",
    meta: "Every file is handled by one concierge from request to delivery. You will know their name, their voice, and their working hours.",
    steps: [
      {
        n: "01",
        h: "Tell us what you want",
        p: "Upload a photo, paste a link, or describe a memory. We accept everything from a runway look to a vintage flea-market find.",
      },
      {
        n: "02",
        h: "Receive your dossier",
        p: "Within 24 hours, your dedicated concierge confirms authenticity, sourcing options, and a transparent quote — exchange rates included.",
      },
      {
        n: "03",
        h: "Approve & pay securely",
        p: "Authorise the purchase from any device. We hold funds in escrow until the piece is inspected in our Taipei vault.",
      },
      {
        n: "04",
        h: "Receive at your door",
        p: "Hand-delivered insured shipping with discreet packaging, signature on receipt, and a lifetime authentication card.",
      },
    ],
  },
  collectionHome: {
    eyebrow: "In rotation · May",
    line1: "Eight quiet ",
    lineEm: "arrivals",
    line2: ".",
    meta: "Updated as files close. Marked",
    inVaultMono: "IN VAULT",
    onQuoteMono: "ESTIMATED",
    inVaultClause: "if confirmed in Taipei;",
    onQuoteClause: "if sourcing on quote.",
  },
  atelierNote: {
    eyebrow: "A note from the atelier",
    headlineA: "We work in ",
    headlineEm: "three languages",
    headlineB: ", five currencies, and one voice.",
    copy: "Switch currency at any moment — every figure on the platform reflects the live mid-market rate, refreshed every fifteen minutes and marked with a timestamp. We hold orders in the currency we paid, then settle at delivery, so a swing in the yen never reaches your invoice unannounced.",
    readMore: "Read how we handle exchange-rate risk",
  },
  tiers: {
    eyebrow: "Three memberships",
    line1: "Choose the rhythm ",
    lineEm: "of your file",
    meta: "Upgrade happens quietly — based on a year of activity, never on a sales call.\nDowngrade is just as discreet.",
    yourTier: "— your tier",
    names: {
      Normal: "Normal",
      Professional: "Professional",
      Diamond: "Diamond",
    },
    spend: {
      Normal: "No minimum",
      Professional: "NT$ 600,000 / year",
      Diamond: "By invitation",
    },
    bens: {
      Normal: [
        "One concierge channel",
        "Quotes within 36 hours",
        "Insured shipping at cost",
      ],
      Professional: [
        "Dedicated concierge",
        "Quotes within 12 hours",
        "Complimentary shipping & duties",
        "Quarterly atelier preview",
      ],
      Diamond: [
        "Pair of concierges, 24/7",
        "Trunk-show priority access",
        "Private viewings, Taipei vault",
        "Lifetime resale-buyback offer",
      ],
    },
  },
  collectionPage: {
    eyebrow: "The Collection · Spring 2026",
    headline1: "Eighty-two pieces\ncurrently ",
    headlineEm: "open to file",
    headline2: ".",
    rateLine: "Every figure converts at",
    rateUpdated: "updated 09:42 GMT+8",
    filterAll: "All pieces",
    filterVault: "In vault",
    filterEstimated: "On quote",
    categoriesLabel: "CATEGORIES —",
    categories: ["Leather", "Watches", "Jewellery", "Ready-to-wear", "Vintage"],
    sortLabel: "SORT",
    sortNewest: "Newest dossier",
    sortAsc: "Price ascending",
    sortDesc: "Price descending",
    sortFav: "Concierge favourites",
    nothingFits: "Nothing quite fits.",
    sendUsA: "Send us a photo, a link, or simply ",
    sendUsEm: "describe it.",
    sendUsAfter: "",
    conciergeReply:
      "One concierge will respond within 36 hours with sourcing options and a transparent quote.",
  },
  product: {
    breadcrumbAtelier: "Atelier",
    breadcrumbCollection: "The Collection",
    viewLabel: "View",
    sourcedFrom:
      "Sourced from {{house}} maison, Faubourg Saint-Honoré · Paris.",
    inVault: "In Taipei vault · ready to ship",
    onQuote: "On concierge quote · est. 4–6 weeks",
    authenticated: "Authenticated · Card #{{ref}}-2607",
    specs: {
      maison: "Maison",
      reference: "Reference",
      referenceValue: "{{id}} · 2024 production",
      materials: "Materials",
      materialsValue:
        "Togo calfskin, palladium hardware, contrast saddle stitch",
      dimensions: "Dimensions",
      dimensionsValue: "25 × 18 × 14 cm · 720g",
      provenance: "Provenance",
      provenanceValue: "First owner, hand-carried Paris → Taipei, full set",
      authentication: "Authentication",
      authenticationValue: "Photographic dossier · 18 macro images on request",
      shipsFrom: "Ships from",
      shipsFromValue: "Taipei · within 48 hours of confirmed payment",
    },
    assurance: {
      authTitle: "Lifetime authentication",
      authSub: "Two-stage inspection in our Taipei vault before dispatch.",
      escrowTitle: "Escrowed payment",
      escrowSub: "Funds held until you confirm the piece in your hands.",
      carriageTitle: "Insured carriage",
      carriageSub: "Hand-delivered with signature; flat fee at Diamond.",
      resaleTitle: "Resale offer",
      resaleSub: "We buy back any sourced piece at fair-value, any time.",
    },
  },
  productCard: {
    inVault: "in vault",
    estimated: "estimated",
  },
  request: {
    eyebrow: "Concierge file · new",
    title: "Request a ",
    titleEm: "piece",
    step1: "01 The piece",
    step2: "02 Details",
    step3: "03 Review",
    pieceLabel: "01 · The piece",
    dragOrBrowse: "DRAG · OR · BROWSE",
    uploadedH: "A handsome reference.",
    uploadedP:
      "Add up to 4 more photographs from different angles, a link, or a sentence about what you remember.",
    emptyH: "Add the piece you have in mind.",
    emptyP:
      "Drop a screenshot, a runway photo, or even a snapshot taken in a friend’s closet. We accept JPG, HEIC, PNG up to 24MB.",
    replacePhoto: "Replace photograph",
    identify: "Identify with our assistant",
    identifying: "Identifying…",
    choosePhoto: "Choose a photograph",
    pasteLink: "Paste a link instead",
    aiAssistant: "Concierge assistant — suggestion only",
    aiReading: "Reading hardware, stitching, and grain…",
    aiSuggestion1: "This appears to be a ",
    aiSuggestion2: "Birkett Saddle, size 25, Étoupe Togo",
    aiSuggestion3: " — circa 2023, hardware in palladium.",
    aiConfidence: "{{n}}% confidence",
    aiFootnoteStrong: "A note from MAISON.",
    aiFootnote:
      " Identification is a suggestion to speed your concierge along — never a verification. Your dossier is reviewed and confirmed by a human within 24 hours.",
    brandLabel: "02 · Maison or house",
    brandPh: "e.g. Birkett, Aurel, Couronne",
    modelLabel: "02 · Model or reference",
    modelPh: "Saddle 25 · Étoupe · 2023",
    budgetLowLabel: "03 · Budget — comfortable",
    budgetLowHelp: "What we should aim for if the perfect piece appears.",
    budgetHiLabel: "03 · Budget — ceiling",
    budgetHiHelp: "The line beyond which we should pause and ask.",
    notesLabel: "04 · Notes for your concierge",
    notesPh:
      "The pre-loved kind is welcome, but please nothing visibly worn at the corners. The colour should read warmer in daylight than the reference photograph — closer to a milky coffee.",
    notesHelp:
      "Anything specific, sentimental, or non-negotiable. Your concierge reads every word.",
    condLabel: "05 · Acceptable condition",
    condNew: "New, unworn — original packaging",
    condExcellent: "Excellent · pre-loved, no visible wear",
    condVintage: "Vintage · any era, original elements only",
    deadlineLabel: "05 · Latest acceptable delivery",
    deadlinePh: "No rush · or specify a date",
    fileReady: "File · ready to dispatch",
    notesHeader: "NOTES",
    byHeader: "BY",
    channelHeader: "CHANNEL",
    conciergeChannelLine: "Concierge channel · LINE",
    connected: "connected",
    noFixedDate: "No fixed date",
    defaultNotes:
      "Pre-loved is welcome, nothing visibly worn at corners. Warmer reading than the reference photograph — closer to milky coffee.",
    timeline: [
      { t: "T+0", w: "You submit the file", when: "Now" },
      {
        t: "T+24h",
        w: "Your concierge dossier arrives",
        when: "Wed · 14 May",
      },
      {
        t: "T+3–6w",
        w: "Piece in the vault, ready to ship",
        when: "mid · June",
      },
    ],
    filePreview: "File preview",
    estAllIn: "EST. ALL-IN",
    indicative: "Indicative — final quote arrives within 24 hours.",
    conciergeFee: "Concierge service fee",
    conciergeFeeSub: "flat — included in quote",
    authFee: "Authentication & inspection",
    authFeeSub: "two-stage, in Taipei vault",
    insuredFee: "Insured carriage",
    insuredFeeSub: "door-to-door, signature",
    refRate: "Reference exchange",
    refRateSub: "live · 15-min refresh",
    holdDeposit: "Hold deposit · refundable",
    backLabel: "← back",
    continueDetails: "Continue to details",
    continueReview: "Continue to review",
    dispatchFile: "Dispatch file · {{amount}} hold",
    holdFootnote:
      "Hold deposit is refunded in full if the quote is declined. We never charge it until a dossier is delivered.",
  },
  quote: {
    dossierLine: "Dossier · MSN — 04823 — delivered 14·05 09:08 GMT+8",
    headline1: "We have located ",
    headlineEm: "three",
    headline2: "\npossible candidates.",
    noteIntroA: "A note from ",
    conciergeName: "Hsiao-Yu",
    noteIntroB:
      ", your concierge — two are currently held in Paris and Hong Kong; one would require a private sale to release. Pricing is all-in and includes shipping, duties, and our service.",
    conciergeFull: "Hsiao-Yu Chen",
    conciergeMeta: "YOUR CONCIERGE · 11 YRS",
    repliesBetween:
      "Replies between 09:00 — 19:00 GMT+8 · usually within 32 minutes.",
    openLine: "Open LINE concierge channel",
    holding: "● HOLDING",
    candidates: {
      A: {
        verdict: "Recommended",
        cond: "New, full set, plastic on hardware",
        city: "Paris · 8e",
        time: "6 days · hand-carried",
      },
      B: {
        verdict: "Best value",
        cond: "Excellent, complete dust cover",
        city: "Hong Kong · IFC",
        time: "11 days · DHL Plus",
      },
      C: {
        verdict: "On request",
        cond: "New, embossed gift box",
        city: "Tokyo · private sale",
        time: "4–5 weeks · sale process",
      },
    },
    sourceLabel: "SOURCE",
    deliveryLabel: "DELIVERY",
    approve: "Approve",
    priceEyebrow: "A note on the price",
    priceTitle: "Quotes are held in the source currency.",
    priceCopy:
      "Should JPY soften between approval and dispatch, the saving returns to you in full. Should it strengthen, we absorb the difference up to 2.5% — beyond which we pause and ask before charging.",
    authEyebrow: "A note on authenticity",
    authTitle: "Inspection happens twice — in source, and in Taipei.",
    authCopy:
      "Any piece that fails the second inspection is returned at our expense, and your deposit refunded the same day. We attach an 18-image macro dossier to every dispatched file.",
  },
  checkout: {
    fileLine: "File MSN — 04823 · Candidate A · Paris",
    title: "Approve & ",
    titleEm: "secure",
    deliveryEyebrow: "01 · Delivery",
    customerName: "Chen Mei-Lin · 陳美琳",
    customerAddress:
      "No. 7, Lane 12, Lishui Street · Da’an District · Taipei 106 · TW",
    primary: "· primary",
    change: "Change",
    carriageLabel: "CARRIAGE",
    carriageValue: "Hand-delivered · Wed 21 May · 14:00 – 18:00 window",
    retime: "Re-time",
    paymentEyebrow: "02 · Payment",
    cardNumber: "Card number",
    expiry: "Expiry",
    cvc: "CVC",
    consentsEyebrow: "03 · Consents",
    consents: [
      "I confirm the piece matches my brief — and accept the concierge has discretion within the approved budget.",
      "I authorise MAISON to authenticate before dispatch; failed inspections refund in full.",
      "Send LINE updates from @maison_concierge at each milestone.",
      "Hold my address on file for repeat carriage (encrypted at rest).",
    ],
    methods: {
      card: { name: "Card", sub: "Stripe · 3DS" },
      ecpay: { name: "ECPay", sub: "TWD only · 0% interest 12mo" },
      line: { name: "LINE Pay", sub: "instant · TWD" },
    },
    summary: "Order summary",
    productEyebrow: "BIRKETT · 2023",
    productName: "Saddle 25 · Étoupe",
    productSub: "Candidate A · Paris 8e",
    piece: "Piece",
    conciergeService: "Concierge service",
    authentication: "Authentication",
    insuredCarriage: "Insured carriage",
    dutyPaid: "Duty (paid)",
    included: "included",
    totalToday: "TOTAL TODAY",
    escrowedNote:
      "Held in escrow until vault inspection · refunded if rejected.",
    authorise: "Authorise · {{amount}}",
    securityNote: "256-bit · Stripe · escrowed in TWD",
  },
  order: {
    fileLine: "File MSN — 04823 · in motion",
    title: "Your ",
    titleEm: "Saddle 25",
    titleAfter: " is travelling.",
    paidEscrowed: "PAID · ESCROWED",
    releasedNote: "Released to maison on second-inspection clear.",
    stage3of5: "Stage 3 of 5",
    eta: "ETA · 21 May",
    candidateLine: "Candidate A · Paris 8e · approved 14 May",
    stages: [
      {
        t: "Quote approved",
        w: "14 May · 09:42 GMT+8",
        d: "You authorised Candidate A — Paris. Funds in escrow.",
      },
      {
        t: "Concierge collecting",
        w: "15 May · 11:20 GMT+1",
        d: "Hsiao-Yu retrieved the piece from the Faubourg Saint-Honoré boutique.",
      },
      {
        t: "Authenticated · vault inbound",
        w: "16 May · 18:55 GMT+8",
        d: "First inspection complete in Paris. Currently in the air — Air France 197.",
      },
      {
        t: "Second inspection · Taipei",
        w: "expected 19 May",
        d: "18-image macro dossier will be uploaded to your file.",
      },
      {
        t: "Hand-delivered",
        w: "expected 21 May · 14:00–18:00",
        d: "Signature on receipt · lifetime authentication card included.",
      },
    ],
    conciergeMessage:
      "Saddle is on AF197, due Taoyuan 06:40 tomorrow. I will photograph her at the vault before lunch and dispatch by Wednesday — we are on track for your Friday hand-delivery window.",
    conciergeMessageSig: "Hsiao-Yu · MAISON CONCIERGE",
    yourConcierge: "YOUR CONCIERGE",
    reachable: "Reachable 09:00 — 19:00 GMT+8.",
    repliesIn: "Replies in 32 mins (median).",
    openLine: "Open LINE channel",
    requestPhotos: "Request photographs of the piece",
    yourNotifications: "YOUR NOTIFICATIONS",
    notifLine: "LINE @maison_concierge",
    notifEmail: "Email · 陳美琳@…",
    notifSms: "SMS · +886 9·· ····",
    on: "on",
    off: "off",
    afterArrival: "After arrival",
    afterArrivalItems: [
      "— 14-day no-questions return",
      "— Resale offer · 70% within 12 months",
      "— Lifetime authentication card",
    ],
  },
  account: {
    memberSince: "Member · since {{date}}",
    welcome1: "Welcome back, ",
    welcomeEm: "{{name}}",
    fullName: "Chen Mei-Lin",
    cityLine: "陳美琳 · TPE",
    currentTier: "CURRENT TIER",
    tierHeadlines: {
      Normal: "— building file",
      Professional: "Quarterly preview unlocked",
      Diamond: "By invitation",
    },
    ledgerLifetime:
      "Lifetime · {{ledger}} across {{files}} files. Next review: Aug 2026.",
    previewTier: "preview a tier",
    nav: {
      orders: "Concierge files",
      saved: "Saved & waitlists",
      addresses: "Addresses & vaults",
      payments: "Payment & escrow",
      notifications: "LINE & notifications",
      profile: "Profile & language",
    },
    filesEyebrow: "Files · live and historical",
    filesOpen1: "Four files ",
    filesOpenEm: "open",
    newFile: "New file",
    tableFile: "File",
    tablePiece: "Piece",
    tableState: "State",
    tableValue: "Value",
    view: "View",
    ledgerYtdEyebrow: "Concierge ledger · year to date",
    ledgerYtdValue: "{{ledger}}",
    ledgerYtdNote:
      "{{files}} files completed · 0 rejected at second inspection",
    lineChannelEyebrow: "LINE concierge channel",
    lineChannelValue: "{{channel}} · {{reply}} median reply",
    openChannel: "Open channel",
    rebindLine: "Re-bind LINE",
    sectionPreview: "Section preview",
    sectionCopy:
      "Sketched here for the prototype. The shape of this surface follows the same restraint — a single column, generous airline above the fold, no calls-to-action competing for the eye.",
    states: {
      quote: "quote",
      reserved: "reserved",
      transit: "transit",
      delivered: "delivered",
    },
    orderItems: {
      "MSN-04823": "Birkett · Saddle 25 · Étoupe",
      "MSN-04790": "Couronne · Skeleton 41",
      "MSN-04640": "Aurel · Linked-Chain Tote",
      "MSN-04503": "Custom — Aurel Sequin Clutch",
    },
    orderValues: {
      "MSN-04823": "USD 12,455",
      "MSN-04790": "USD 86,500",
      "MSN-04640": "USD 4,200",
      "MSN-04503": "pending quote",
    },
  },
  signin: {
    eyebrow: "Members · Sign in",
    title: "Step into the atelier.",
    subtitle:
      "Continue with a social account, or browse as a guest to preview the concierge experience without commitment.",
    alreadySigned: "Already signed in as ",
    goAccount: "Go to account →",
    you: "you",
    or: "or",
    providerLabels: {
      google: "Continue with Google",
      facebook: "Continue with Facebook",
      line: "Continue with LINE",
      guest: "Continue as guest",
    },
    providerHints: {
      google: "Google account",
      facebook: "Meta account",
      line: "LINE account",
      guest: "Anonymous demo session",
    },
    redirecting: "Redirecting…",
    signingIn: "Signing in…",
    demoNote:
      "Demo build — accounts are scoped to this preview environment. Guest sessions persist until you sign out.",
    errorGeneric: "Something went wrong. Try again.",
    errorSignIn: "Sign-in failed",
  },
  footer: {
    description:
      "A private concierge for considered pieces. By appointment from our Taipei atelier; we ship worldwide with insured delivery and lifetime authentication.",
    rule: "SOURCED · AUTHENTICATED · DELIVERED",
    atelierTitle: "The Atelier",
    atelierItems: [
      "Our concierges",
      "The Taipei vault",
      "Authentication standard",
      "Press & partners",
    ],
    serviceTitle: "Service",
    serviceItems: [
      "How proxy-shopping works",
      "Currency & exchange notes",
      "Shipping & duties",
      "Returns & resale",
      "LINE concierge channel",
    ],
    membershipTitle: "Membership",
    membershipItems: [
      "Normal",
      "Professional",
      "Diamond — by invitation",
      "Refer a friend",
    ],
    copyright: "© 2019 — 2026 · MAISON CONCIERGE",
    cities: "Taipei · Tokyo · Paris · Hong Kong",
    builtPrivately: "Built privately — never indexed",
  },
  admin: {
    eyebrow: "Maison · Concierge ops",
    title: "Internal portal",
    nav: {
      dashboard: "Dashboard",
      orders: "Orders",
      proxyRequests: "Proxy requests",
      products: "Products",
      members: "Members",
    },
    stats: {
      orders: "Orders",
      proxyRequests: "Proxy requests",
      products: "Products",
      members: "Members",
    },
    members: {
      member: "Member",
      email: "Email",
      role: "Role",
      joined: "Joined",
    },
    orders: {
      noneTitle: "No orders yet",
      noneCopy: "Orders appear here once members complete checkout.",
      order: "Order",
      member: "Member",
      status: "Status",
      total: "Total",
    },
    products: {
      noneTitle: "Catalog is empty",
      noneCopy: "Add a product to begin curating the public catalog.",
      active: "Active",
      draft: "Draft",
      houseFallback: "House",
    },
    proxyRequests: {
      noneTitle: "No proxy requests yet",
      noneCopy: "Submissions from members will appear here for staff review.",
      unspecifiedBrand: "Unspecified brand",
    },
  },
  dev: {
    home: "Home",
    collection: "Collection",
    detail: "Detail",
    request: "Request",
    quote: "Quote",
    checkout: "Checkout",
    order: "Order",
    account: "Account",
  },
};

const ZH_TW: Dictionary = {
  meta: {
    title: "MAISON · 代購工坊",
    description: "為您搜羅全球皮件、製錶與成衣的私密代購顧問。",
  },
  header: {
    estTaipei: "創立 · 2019 · 台北",
    languageGroup: "語言",
    currencyGroup: "幣別 · 參考匯率",
    updated: "更新於 13·05·26 09:42 GMT+8",
    toggleDark: "切換深色模式",
    search: "搜尋",
    account: "會員",
    signIn: "登入",
  },
  user: {
    signIn: "登入",
    signedIn: "已登入",
    account: "會員專區",
    signOut: "登出",
    guest: "訪客",
    member: "會員",
  },
  nav: {
    atelier: "工坊",
    collection: "典藏",
    request: "指定代購",
    journal: "誌",
  },
  cta: {
    request: "提交指定代購",
    browse: "瀏覽典藏",
    addToBag: "加入現貨櫥窗",
    requestPiece: "透過顧問代購",
    continueDetails: "前往填寫細節",
    continueReview: "前往最終確認",
    back: "← 返回",
    approve: "確認核可",
  },
  hero: {
    eyebrow: "為慎重之物存在的代購工坊",
    sub: "MAISON 是專屬代購顧問,為您搜羅全球工坊的皮件、製錶與成衣。透明定價、嚴格鑑定,並由一位專屬顧問全程經手您的檔案。",
    statsSourced: "上季完成的代購件數",
    statsTime: "首份代購檔案的中位時間",
    statsTimeUnit: "小時",
    statsAuth: "首次鑑定即通過比例",
    statsAuthUnit: "%",
    imageAlt: "棚拍 · Birkett Saddle 25 灰褐色款式",
    imageCaption: "主視覺 · 代購完成・手工陳列",
  },
  headline: {
    line1: "您本該",
    line2: "親自挑選的",
    line3: "衣櫃,",
    line4em: "現在\n交給我們。",
  },
  process: {
    title: "專屬顧問流程",
    kicker: "四步,一條私密通道",
    meta: "每一份檔案從提交到送達都由同一位顧問經手。您會記得他的姓名、聲音與服務時段。",
    steps: [
      {
        n: "01",
        h: "告訴我們您想要的",
        p: "上傳照片、貼上連結,或描述一段回憶。從伸展台造型到復古市集的靈光乍現,我們都能承接。",
      },
      {
        n: "02",
        h: "收到您的代購檔案",
        p: "24 小時內,您的專屬顧問將提交鑑定結果、來源方案,與透明報價(含即時匯率)。",
      },
      {
        n: "03",
        h: "確認並安心付款",
        p: "可於任何裝置授權交易。在台北鑑賞庫驗貨完成前,款項保管於信託帳戶。",
      },
      {
        n: "04",
        h: "專人送達府上",
        p: "保險專送、低調包裝、簽收交付,附終身鑑定卡。",
      },
    ],
  },
  collectionHome: {
    eyebrow: "本月輪替 · 五月",
    line1: "本季 ",
    lineEm: "八件",
    line2: " 靜靜抵達。",
    meta: "隨檔案結案更新。標示為",
    inVaultMono: "現貨櫥窗",
    onQuoteMono: "代購中",
    inVaultClause: "代表已在台北就緒;",
    onQuoteClause: "代表依報價代購中。",
  },
  atelierNote: {
    eyebrow: "來自工坊的一段話",
    headlineA: "我們以 ",
    headlineEm: "三種語言",
    headlineB: "、五種幣別、一種口吻運作。",
    copy: "您可隨時切換幣別 — 平台上的每一個數字都以即時中間匯率呈現,每十五分鐘更新並標註時戳。我們以代購當下的幣別保管您的訂單,待交付時結算 — 不會讓日圓的起伏悄悄出現在您的帳單上。",
    readMore: "了解我們如何處理匯率風險",
  },
  tiers: {
    eyebrow: "三種會籍",
    line1: "選擇 ",
    lineEm: "您檔案的節奏",
    meta: "升級悄然發生 — 依據一年的活動而非業務電話。\n降級同樣安靜。",
    yourTier: "— 您目前所屬",
    names: {
      Normal: "普通",
      Professional: "專業",
      Diamond: "鑽石",
    },
    spend: {
      Normal: "無門檻",
      Professional: "NT$ 600,000 / 年",
      Diamond: "邀請制",
    },
    bens: {
      Normal: ["單一顧問通道", "36 小時內報價", "保險運送 · 實支實付"],
      Professional: [
        "專屬顧問",
        "12 小時內報價",
        "免運費及關稅",
        "每季工坊預覽",
      ],
      Diamond: [
        "雙顧問 24/7 待命",
        "Trunk show 優先參與",
        "台北鑑賞庫私人賞物",
        "終身原值回購方案",
      ],
    },
  },
  collectionPage: {
    eyebrow: "典藏 · 2026 春季",
    headline1: "八十二件作品\n現正 ",
    headlineEm: "開放建檔",
    headline2: "。",
    rateLine: "所有金額皆以",
    rateUpdated: "更新於 09:42 GMT+8",
    filterAll: "全部作品",
    filterVault: "現貨櫥窗",
    filterEstimated: "代購中",
    categoriesLabel: "類別 —",
    categories: ["皮件", "腕錶", "珠寶", "成衣", "復古典藏"],
    sortLabel: "排序",
    sortNewest: "最新檔案",
    sortAsc: "價格由低至高",
    sortDesc: "價格由高至低",
    sortFav: "顧問首選",
    nothingFits: "都不太合適。",
    sendUsA: "請寄一張照片、一則連結,或單純 ",
    sendUsEm: "向我們描述。",
    sendUsAfter: "",
    conciergeReply: "您的顧問將於 36 小時內提供來源方案與透明報價。",
  },
  product: {
    breadcrumbAtelier: "工坊",
    breadcrumbCollection: "典藏",
    viewLabel: "視角",
    sourcedFrom: "代購自 {{house}} 巴黎 Faubourg Saint-Honoré 總店。",
    inVault: "台北鑑賞庫 · 隨時出貨",
    onQuote: "依報價代購 · 預估 4–6 週",
    authenticated: "已鑑定 · 證書 #{{ref}}-2607",
    specs: {
      maison: "品牌工坊",
      reference: "型號編號",
      referenceValue: "{{id}} · 2024 年產製",
      materials: "材質",
      materialsValue: "Togo 牛皮、鈀金五金、撞色馬鞍縫線",
      dimensions: "尺寸",
      dimensionsValue: "25 × 18 × 14 公分 · 720 克",
      provenance: "來源履歷",
      provenanceValue: "首任持有者 · 巴黎人手攜抵台北 · 配件齊全",
      authentication: "鑑定",
      authenticationValue: "完整照片檔案 · 可索取 18 張微距照",
      shipsFrom: "出貨地",
      shipsFromValue: "台北 · 確認付款後 48 小時內寄出",
    },
    assurance: {
      authTitle: "終身鑑定",
      authSub: "出貨前在台北鑑賞庫完成兩階段檢驗。",
      escrowTitle: "信託付款",
      escrowSub: "款項保管至您親手收到並確認為止。",
      carriageTitle: "保險運送",
      carriageSub: "專人配送簽收;鑽石會員享統一價。",
      resaleTitle: "回購方案",
      resaleSub: "我們以公允價值隨時回購任何代購作品。",
    },
  },
  productCard: {
    inVault: "現貨櫥窗",
    estimated: "代購中",
  },
  request: {
    eyebrow: "新建顧問檔案",
    title: "指定一件 ",
    titleEm: "作品",
    step1: "01 物件",
    step2: "02 細節",
    step3: "03 確認",
    pieceLabel: "01 · 物件",
    dragOrBrowse: "拖曳 · 或 · 瀏覽",
    uploadedH: "一張很好的參考。",
    uploadedP: "可再加上 4 張不同角度的照片、一則連結,或一段您記得的描述。",
    emptyH: "請放入您心中那一件。",
    emptyP:
      "可上傳螢幕截圖、伸展台照片,或朋友衣櫃裡隨手拍的一張。支援 JPG、HEIC、PNG,最多 24MB。",
    replacePhoto: "更換照片",
    identify: "請助理協助辨識",
    identifying: "辨識中…",
    choosePhoto: "選擇一張照片",
    pasteLink: "改用連結貼上",
    aiAssistant: "顧問助理 — 僅供建議",
    aiReading: "正在辨讀五金、縫線與紋理…",
    aiSuggestion1: "這看起來是一只 ",
    aiSuggestion2: "Birkett Saddle、25 號、Étoupe Togo",
    aiSuggestion3: " — 約 2023 年產製,鈀金五金。",
    aiConfidence: "信心度 {{n}}%",
    aiFootnoteStrong: "MAISON 的提醒。",
    aiFootnote:
      " 辨識僅是加速顧問進度的建議,並非鑑定結果。您的檔案將由真人在 24 小時內覆核確認。",
    brandLabel: "02 · 品牌或工坊",
    brandPh: "例 Birkett、Aurel、Couronne",
    modelLabel: "02 · 型號或編號",
    modelPh: "Saddle 25 · Étoupe · 2023",
    budgetLowLabel: "03 · 預算 — 理想",
    budgetLowHelp: "若完美的一件出現,我們應該以此為目標。",
    budgetHiLabel: "03 · 預算 — 上限",
    budgetHiHelp: "超過此價位,請暫停並回報。",
    notesLabel: "04 · 給顧問的備註",
    notesPh:
      "可接受 pre-loved 但邊角不可見磨損。日光下顏色應比參考照偏暖 — 接近奶咖。",
    notesHelp: "任何具體、有情感或不可妥協的細節 — 您的顧問會逐字閱讀。",
    condLabel: "05 · 可接受成色",
    condNew: "全新未拆 · 含原廠包裝",
    condExcellent: "極佳 · pre-loved 無明顯使用痕跡",
    condVintage: "復古 · 任何年代 · 必須原裝零件",
    deadlineLabel: "05 · 最遲交付時間",
    deadlinePh: "不急 · 或指定日期",
    fileReady: "檔案 · 可派發",
    notesHeader: "備註",
    byHeader: "期限",
    channelHeader: "通道",
    conciergeChannelLine: "顧問通道 · LINE",
    connected: "已連線",
    noFixedDate: "無固定日期",
    defaultNotes:
      "可接受 pre-loved,邊角不可見磨損。日光下顏色應比參考照偏暖 — 接近奶咖。",
    timeline: [
      { t: "T+0", w: "您送出檔案", when: "現在" },
      { t: "T+24h", w: "顧問檔案抵達", when: "週三 · 5/14" },
      { t: "T+3–6w", w: "作品已入庫並可寄出", when: "六月中" },
    ],
    filePreview: "檔案預覽",
    estAllIn: "預估總額",
    indicative: "僅為參考 — 正式報價將於 24 小時內送達。",
    conciergeFee: "顧問服務費",
    conciergeFeeSub: "定額 — 已含於報價中",
    authFee: "鑑定 / 檢驗",
    authFeeSub: "兩階段 · 台北鑑賞庫",
    insuredFee: "保險運送",
    insuredFeeSub: "府上專送 · 須簽收",
    refRate: "參考匯率",
    refRateSub: "即時 · 15 分鐘刷新",
    holdDeposit: "保證金 · 可退",
    backLabel: "← 返回",
    continueDetails: "前往填寫細節",
    continueReview: "前往最終確認",
    dispatchFile: "派發檔案 · 保證金 {{amount}}",
    holdFootnote: "若您婉拒報價,保證金將全額退還。我們僅在交出檔案後扣款。",
  },
  quote: {
    dossierLine: "代購檔案 · MSN — 04823 — 送達於 14·05 09:08 GMT+8",
    headline1: "我們為您鎖定 ",
    headlineEm: "三個",
    headline2: "\n候選方案。",
    noteIntroA: "您的顧問 ",
    conciergeName: "曉宇",
    noteIntroB:
      " 來信 — 其中兩件目前分別保留於巴黎與香港,一件需經私人通路釋出。價格含運送、關稅與服務費。",
    conciergeFull: "陳曉宇",
    conciergeMeta: "您的顧問 · 年資 11 年",
    repliesBetween: "回覆時段 09:00 — 19:00 GMT+8 · 一般 32 分鐘內回覆。",
    openLine: "開啟 LINE 顧問通道",
    holding: "● 保留中",
    candidates: {
      A: {
        verdict: "首選推薦",
        cond: "全新 · 配件齊全 · 五金未撕膜",
        city: "巴黎 · 八區",
        time: "6 天 · 人手攜帶",
      },
      B: {
        verdict: "最佳價值",
        cond: "極佳 · 防塵袋齊全",
        city: "香港 · IFC",
        time: "11 天 · DHL Plus",
      },
      C: {
        verdict: "需聯絡釋出",
        cond: "全新 · 燙金禮盒",
        city: "東京 · 私人通路",
        time: "4–5 週 · 釋出流程",
      },
    },
    sourceLabel: "貨源",
    deliveryLabel: "交期",
    approve: "核可",
    priceEyebrow: "關於價格",
    priceTitle: "報價以來源幣別保留。",
    priceCopy:
      "若日圓在核可與發貨間貶值,差額全數歸您。若日圓走強,我們吸收最多 2.5% 的差額,超出此範圍我們會暫停並與您確認後再扣款。",
    authEyebrow: "關於鑑定",
    authTitle: "鑑定執行兩次 — 來源地與台北各一次。",
    authCopy:
      "未能通過第二次鑑定的作品,我們將承擔退回成本,並於當天退還保證金。每一份派發檔案都會附上 18 張微距照組成的完整紀錄。",
  },
  checkout: {
    fileLine: "檔案 MSN — 04823 · 候選 A · 巴黎",
    title: "核可並 ",
    titleEm: "保管款項",
    deliveryEyebrow: "01 · 運送",
    customerName: "Chen Mei-Lin · 陳美琳",
    customerAddress: "台北市大安區麗水街 12 巷 7 號 · 106 · 台灣",
    primary: "· 主要",
    change: "變更",
    carriageLabel: "配送",
    carriageValue: "府上專送 · 週三 5/21 · 14:00 – 18:00 時段",
    retime: "更改時段",
    paymentEyebrow: "02 · 付款",
    cardNumber: "卡號",
    expiry: "有效期",
    cvc: "安全碼",
    consentsEyebrow: "03 · 同意條款",
    consents: [
      "我確認此作品符合需求 — 並同意顧問在核可預算內擁有合理裁量。",
      "我授權 MAISON 出貨前進行鑑定;未通過者全額退款。",
      "請於每個進度節點以 @maison_concierge 發送 LINE 通知。",
      "請保留我的地址供日後配送(靜態加密儲存)。",
    ],
    methods: {
      card: { name: "信用卡", sub: "Stripe · 3DS" },
      ecpay: { name: "綠界 ECPay", sub: "僅限新台幣 · 12 期 0 利率" },
      line: { name: "LINE Pay", sub: "即時 · 新台幣" },
    },
    summary: "訂單摘要",
    productEyebrow: "BIRKETT · 2023",
    productName: "Saddle 25 · Étoupe",
    productSub: "候選 A · 巴黎八區",
    piece: "作品",
    conciergeService: "顧問服務",
    authentication: "鑑定",
    insuredCarriage: "保險運送",
    dutyPaid: "關稅(已含)",
    included: "已包含",
    totalToday: "本次扣款",
    escrowedNote: "款項信託保管直至鑑賞庫驗貨 · 退件時全額退還。",
    authorise: "授權 · {{amount}}",
    securityNote: "256 位元加密 · Stripe · 以新台幣信託保管",
  },
  order: {
    fileLine: "檔案 MSN — 04823 · 進行中",
    title: "您的 ",
    titleEm: "Saddle 25",
    titleAfter: " 正在路上。",
    paidEscrowed: "已付款 · 信託中",
    releasedNote: "於第二次鑑定通過後撥付給工坊。",
    stage3of5: "第 3 / 5 階段",
    eta: "預計抵達 · 5/21",
    candidateLine: "候選 A · 巴黎八區 · 5/14 核可",
    stages: [
      {
        t: "報價已核可",
        w: "5/14 · 09:42 GMT+8",
        d: "您已授權候選 A — 巴黎。款項已信託。",
      },
      {
        t: "顧問取件",
        w: "5/15 · 11:20 GMT+1",
        d: "曉宇已於 Faubourg Saint-Honoré 旗艦店取得作品。",
      },
      {
        t: "已鑑定 · 運往鑑賞庫",
        w: "5/16 · 18:55 GMT+8",
        d: "巴黎首次鑑定完成,現正搭乘法航 197 班機。",
      },
      {
        t: "台北第二次鑑定",
        w: "預計 5/19",
        d: "18 張微距照組成的鑑定檔案將上傳至您的檔案。",
      },
      {
        t: "親手送達",
        w: "預計 5/21 · 14:00–18:00",
        d: "簽收交付 · 附終身鑑定卡。",
      },
    ],
    conciergeMessage:
      "Saddle 已搭上 AF197,明日 06:40 抵達桃園。我會在午餐前於鑑賞庫拍照,並於週三寄出 — 預計能準時於週五府上交付。",
    conciergeMessageSig: "曉宇 · MAISON 顧問",
    yourConcierge: "您的顧問",
    reachable: "服務時段 09:00 — 19:00 GMT+8。",
    repliesIn: "中位回覆時間 32 分鐘。",
    openLine: "開啟 LINE 通道",
    requestPhotos: "請求作品照片",
    yourNotifications: "您的通知設定",
    notifLine: "LINE @maison_concierge",
    notifEmail: "Email · 陳美琳@…",
    notifSms: "SMS · +886 9·· ····",
    on: "開",
    off: "關",
    afterArrival: "送達之後",
    afterArrivalItems: [
      "— 14 天無條件退貨",
      "— 12 個月內 7 成價回購方案",
      "— 終身鑑定卡",
    ],
  },
  account: {
    memberSince: "會員 · 自 {{date}} 起",
    welcome1: "歡迎回來,",
    welcomeEm: "{{name}}",
    fullName: "陳美琳",
    cityLine: "陳美琳 · TPE",
    currentTier: "目前會籍",
    tierHeadlines: {
      Normal: "— 累積中",
      Professional: "已解鎖季度預覽",
      Diamond: "邀請制",
    },
    ledgerLifetime:
      "終身 · {{ledger}} 完成 {{files}} 筆檔案。下次審核 2026 年 8 月。",
    previewTier: "預覽會籍",
    nav: {
      orders: "顧問檔案",
      saved: "收藏與待補",
      addresses: "地址與保管",
      payments: "付款與信託",
      notifications: "LINE 與通知",
      profile: "個人資料與語言",
    },
    filesEyebrow: "檔案 · 進行中與過往",
    filesOpen1: "四筆檔案 ",
    filesOpenEm: "進行中",
    newFile: "新建檔案",
    tableFile: "檔案",
    tablePiece: "作品",
    tableState: "狀態",
    tableValue: "金額",
    view: "查看",
    ledgerYtdEyebrow: "顧問帳本 · 本年度",
    ledgerYtdValue: "{{ledger}}",
    ledgerYtdNote: "{{files}} 筆完成 · 第二次鑑定 0 件退回",
    lineChannelEyebrow: "LINE 顧問通道",
    lineChannelValue: "{{channel}} · 中位回覆 {{reply}}",
    openChannel: "開啟通道",
    rebindLine: "重新綁定 LINE",
    sectionPreview: "區塊預覽",
    sectionCopy:
      "此為原型示意。版面延續相同節制 — 單欄、留白寬裕、無互相競爭的行動按鈕。",
    states: {
      quote: "報價中",
      reserved: "已保留",
      transit: "運送中",
      delivered: "已送達",
    },
    orderItems: {
      "MSN-04823": "Birkett · Saddle 25 · Étoupe",
      "MSN-04790": "Couronne · Skeleton 41",
      "MSN-04640": "Aurel · Linked-Chain Tote",
      "MSN-04503": "客製 — Aurel 亮片宴會包",
    },
    orderValues: {
      "MSN-04823": "USD 12,455",
      "MSN-04790": "USD 86,500",
      "MSN-04640": "USD 4,200",
      "MSN-04503": "等待報價",
    },
  },
  signin: {
    eyebrow: "會員 · 登入",
    title: "步入工坊。",
    subtitle: "請以社群帳號登入,或以訪客身分先預覽顧問體驗。",
    alreadySigned: "已登入為 ",
    goAccount: "前往會員專區 →",
    you: "您",
    or: "或",
    providerLabels: {
      google: "以 Google 繼續",
      facebook: "以 Facebook 繼續",
      line: "以 LINE 繼續",
      guest: "以訪客繼續",
    },
    providerHints: {
      google: "Google 帳號",
      facebook: "Meta 帳號",
      line: "LINE 帳號",
      guest: "匿名展示帳號",
    },
    redirecting: "轉址中…",
    signingIn: "登入中…",
    demoNote:
      "展示版本 — 帳號僅供本預覽環境使用。訪客 session 在登出前持續有效。",
    errorGeneric: "發生錯誤,請再試一次。",
    errorSignIn: "登入失敗",
  },
  footer: {
    description:
      "為慎重之物存在的代購工坊。台北工坊預約制服務,全球保險運送並附終身鑑定。",
    rule: "代購 · 鑑定 · 送達",
    atelierTitle: "工坊",
    atelierItems: ["我們的顧問", "台北鑑賞庫", "鑑定準則", "媒體與合作"],
    serviceTitle: "服務",
    serviceItems: [
      "代購流程說明",
      "幣別與匯率備註",
      "運送與關稅",
      "退換與回購",
      "LINE 顧問通道",
    ],
    membershipTitle: "會籍",
    membershipItems: ["普通", "專業", "鑽石 — 邀請制", "推薦好友"],
    copyright: "© 2019 — 2026 · MAISON 代購工坊",
    cities: "台北 · 東京 · 巴黎 · 香港",
    builtPrivately: "私密構築 — 不公開索引",
  },
  admin: {
    eyebrow: "Maison · 顧問營運",
    title: "內部管理",
    nav: {
      dashboard: "總覽",
      orders: "訂單",
      proxyRequests: "代購申請",
      products: "商品",
      members: "會員",
    },
    stats: {
      orders: "訂單",
      proxyRequests: "代購申請",
      products: "商品",
      members: "會員",
    },
    members: {
      member: "會員",
      email: "電子郵件",
      role: "角色",
      joined: "加入時間",
    },
    orders: {
      noneTitle: "尚無訂單",
      noneCopy: "會員完成結帳後,訂單將出現於此。",
      order: "訂單",
      member: "會員",
      status: "狀態",
      total: "總額",
    },
    products: {
      noneTitle: "型錄為空",
      noneCopy: "新增商品以開始整理對外型錄。",
      active: "上架中",
      draft: "草稿",
      houseFallback: "品牌",
    },
    proxyRequests: {
      noneTitle: "尚無代購申請",
      noneCopy: "會員的代購申請會出現於此供同仁審視。",
      unspecifiedBrand: "未指定品牌",
    },
  },
  dev: {
    home: "首頁",
    collection: "典藏",
    detail: "細節",
    request: "申請",
    quote: "報價",
    checkout: "結帳",
    order: "訂單",
    account: "會員",
  },
};

const ZH_CN: Dictionary = {
  meta: {
    title: "MAISON · 代购工坊",
    description: "为您搜罗全球皮具、制表与成衣的私密代购顾问。",
  },
  header: {
    estTaipei: "创立 · 2019 · 台北",
    languageGroup: "语言",
    currencyGroup: "币别 · 参考汇率",
    updated: "更新于 13·05·26 09:42 GMT+8",
    toggleDark: "切换深色模式",
    search: "搜索",
    account: "会员",
    signIn: "登录",
  },
  user: {
    signIn: "登录",
    signedIn: "已登录",
    account: "会员专区",
    signOut: "退出登录",
    guest: "访客",
    member: "会员",
  },
  nav: {
    atelier: "工坊",
    collection: "典藏",
    request: "指定代购",
    journal: "志",
  },
  cta: {
    request: "提交指定代购",
    browse: "浏览典藏",
    addToBag: "加入现货橱窗",
    requestPiece: "通过顾问代购",
    continueDetails: "继续填写细节",
    continueReview: "前往最终确认",
    back: "← 返回",
    approve: "确认核可",
  },
  hero: {
    eyebrow: "为慎重之物而存的代购工坊",
    sub: "MAISON 是专属代购顾问,为您搜罗全球工坊的皮具、制表与成衣。透明定价、严格鉴定,并由一位专属顾问全程经手您的档案。",
    statsSourced: "上季完成的代购件数",
    statsTime: "首份代购档案的中位时间",
    statsTimeUnit: "小时",
    statsAuth: "首次鉴定即通过比例",
    statsAuthUnit: "%",
    imageAlt: "棚拍 · Birkett Saddle 25 灰褐色款式",
    imageCaption: "主视觉 · 代购完成 · 手工陈列",
  },
  headline: {
    line1: "您本应",
    line2: "亲自挑选的",
    line3: "衣柜,",
    line4em: "如今\n交给我们。",
  },
  process: {
    title: "专属顾问流程",
    kicker: "四步,一条私密通道",
    meta: "每一份档案从提交到送达都由同一位顾问经手。您会记得他的姓名、声音与服务时段。",
    steps: [
      {
        n: "01",
        h: "告诉我们您想要的",
        p: "上传照片、贴上链接,或描述一段记忆。从T台造型到复古市集的灵光一现,我们都能承接。",
      },
      {
        n: "02",
        h: "收到您的代购档案",
        p: "24 小时内,您的专属顾问将提交鉴定结果、来源方案,与透明报价(含即时汇率)。",
      },
      {
        n: "03",
        h: "确认并放心付款",
        p: "可于任何设备授权交易。在台北鉴赏库验货完成前,款项保管于信托账户。",
      },
      {
        n: "04",
        h: "专人送达府上",
        p: "保险专送、低调包装、签收交付,附终身鉴定卡。",
      },
    ],
  },
  collectionHome: {
    eyebrow: "本月轮替 · 五月",
    line1: "本季 ",
    lineEm: "八件",
    line2: " 静静抵达。",
    meta: "随档案结案更新。标示为",
    inVaultMono: "现货橱窗",
    onQuoteMono: "代购中",
    inVaultClause: "代表已在台北就绪;",
    onQuoteClause: "代表依报价代购中。",
  },
  atelierNote: {
    eyebrow: "来自工坊的一段话",
    headlineA: "我们以 ",
    headlineEm: "三种语言",
    headlineB: "、五种币别、一种口吻运作。",
    copy: "您可随时切换币别 — 平台上的每一个数字都以即时中间汇率呈现,每十五分钟刷新并标注时戳。我们以代购当下的币别保管您的订单,待交付时结算 — 不会让日元的起伏悄然出现在您的账单上。",
    readMore: "了解我们如何处理汇率风险",
  },
  tiers: {
    eyebrow: "三种会籍",
    line1: "选择 ",
    lineEm: "您档案的节奏",
    meta: "升级悄然发生 — 依据一年的活动而非业务电话。\n降级同样安静。",
    yourTier: "— 您当前所属",
    names: {
      Normal: "普通",
      Professional: "专业",
      Diamond: "钻石",
    },
    spend: {
      Normal: "无门槛",
      Professional: "NT$ 600,000 / 年",
      Diamond: "邀请制",
    },
    bens: {
      Normal: ["单一顾问通道", "36 小时内报价", "保险运送 · 实支实付"],
      Professional: [
        "专属顾问",
        "12 小时内报价",
        "免运费及关税",
        "每季工坊预览",
      ],
      Diamond: [
        "双顾问 24/7 待命",
        "Trunk show 优先参与",
        "台北鉴赏库私人赏物",
        "终身原值回购方案",
      ],
    },
  },
  collectionPage: {
    eyebrow: "典藏 · 2026 春季",
    headline1: "八十二件作品\n现正 ",
    headlineEm: "开放建档",
    headline2: "。",
    rateLine: "所有金额皆以",
    rateUpdated: "更新于 09:42 GMT+8",
    filterAll: "全部作品",
    filterVault: "现货橱窗",
    filterEstimated: "代购中",
    categoriesLabel: "类别 —",
    categories: ["皮具", "腕表", "珠宝", "成衣", "复古典藏"],
    sortLabel: "排序",
    sortNewest: "最新档案",
    sortAsc: "价格由低到高",
    sortDesc: "价格由高到低",
    sortFav: "顾问首选",
    nothingFits: "都不太合适。",
    sendUsA: "请寄一张照片、一则链接,或单纯 ",
    sendUsEm: "向我们描述。",
    sendUsAfter: "",
    conciergeReply: "您的顾问将于 36 小时内提供来源方案与透明报价。",
  },
  product: {
    breadcrumbAtelier: "工坊",
    breadcrumbCollection: "典藏",
    viewLabel: "视角",
    sourcedFrom: "代购自 {{house}} 巴黎 Faubourg Saint-Honoré 总店。",
    inVault: "台北鉴赏库 · 随时出货",
    onQuote: "依报价代购 · 预估 4–6 周",
    authenticated: "已鉴定 · 证书 #{{ref}}-2607",
    specs: {
      maison: "品牌工坊",
      reference: "型号编号",
      referenceValue: "{{id}} · 2024 年产制",
      materials: "材质",
      materialsValue: "Togo 牛皮、钯金五金、撞色马鞍缝线",
      dimensions: "尺寸",
      dimensionsValue: "25 × 18 × 14 厘米 · 720 克",
      provenance: "来源履历",
      provenanceValue: "首任持有者 · 巴黎人手携至台北 · 配件齐全",
      authentication: "鉴定",
      authenticationValue: "完整照片档案 · 可索取 18 张微距照",
      shipsFrom: "出货地",
      shipsFromValue: "台北 · 确认付款后 48 小时内寄出",
    },
    assurance: {
      authTitle: "终身鉴定",
      authSub: "出货前在台北鉴赏库完成两阶段检验。",
      escrowTitle: "信托付款",
      escrowSub: "款项保管至您亲手收到并确认为止。",
      carriageTitle: "保险运送",
      carriageSub: "专人配送签收;钻石会员享统一价。",
      resaleTitle: "回购方案",
      resaleSub: "我们以公允价值随时回购任何代购作品。",
    },
  },
  productCard: {
    inVault: "现货橱窗",
    estimated: "代购中",
  },
  request: {
    eyebrow: "新建顾问档案",
    title: "指定一件 ",
    titleEm: "作品",
    step1: "01 物件",
    step2: "02 细节",
    step3: "03 确认",
    pieceLabel: "01 · 物件",
    dragOrBrowse: "拖拽 · 或 · 浏览",
    uploadedH: "一张很好的参考。",
    uploadedP: "可再加上 4 张不同角度的照片、一则链接,或一段您记得的描述。",
    emptyH: "请放入您心中那一件。",
    emptyP:
      "可上传屏幕截图、T台照片,或朋友衣柜里随手拍的一张。支持 JPG、HEIC、PNG,最多 24MB。",
    replacePhoto: "更换照片",
    identify: "请助理协助辨识",
    identifying: "辨识中…",
    choosePhoto: "选择一张照片",
    pasteLink: "改用链接粘贴",
    aiAssistant: "顾问助理 — 仅供建议",
    aiReading: "正在辨读五金、缝线与纹理…",
    aiSuggestion1: "这看起来是一只 ",
    aiSuggestion2: "Birkett Saddle、25 号、Étoupe Togo",
    aiSuggestion3: " — 约 2023 年产制,钯金五金。",
    aiConfidence: "信心度 {{n}}%",
    aiFootnoteStrong: "MAISON 提醒。",
    aiFootnote:
      " 辨识仅是加速顾问进度的建议,并非鉴定结果。您的档案将由真人在 24 小时内复核确认。",
    brandLabel: "02 · 品牌或工坊",
    brandPh: "例 Birkett、Aurel、Couronne",
    modelLabel: "02 · 型号或编号",
    modelPh: "Saddle 25 · Étoupe · 2023",
    budgetLowLabel: "03 · 预算 — 理想",
    budgetLowHelp: "若完美的一件出现,我们应该以此为目标。",
    budgetHiLabel: "03 · 预算 — 上限",
    budgetHiHelp: "超过此价位,请暂停并回报。",
    notesLabel: "04 · 给顾问的备注",
    notesPh:
      "可接受 pre-loved 但边角不可见磨损。日光下颜色应比参考照偏暖 — 接近奶咖。",
    notesHelp: "任何具体、有情感或不可妥协的细节 — 您的顾问会逐字阅读。",
    condLabel: "05 · 可接受成色",
    condNew: "全新未拆 · 含原厂包装",
    condExcellent: "极佳 · pre-loved 无明显使用痕迹",
    condVintage: "复古 · 任何年代 · 必须原装零件",
    deadlineLabel: "05 · 最迟交付时间",
    deadlinePh: "不急 · 或指定日期",
    fileReady: "档案 · 可派发",
    notesHeader: "备注",
    byHeader: "期限",
    channelHeader: "通道",
    conciergeChannelLine: "顾问通道 · LINE",
    connected: "已连线",
    noFixedDate: "无固定日期",
    defaultNotes:
      "可接受 pre-loved,边角不可见磨损。日光下颜色应比参考照偏暖 — 接近奶咖。",
    timeline: [
      { t: "T+0", w: "您送出档案", when: "现在" },
      { t: "T+24h", w: "顾问档案抵达", when: "周三 · 5/14" },
      { t: "T+3–6w", w: "作品已入库并可寄出", when: "六月中" },
    ],
    filePreview: "档案预览",
    estAllIn: "预估总额",
    indicative: "仅为参考 — 正式报价将于 24 小时内送达。",
    conciergeFee: "顾问服务费",
    conciergeFeeSub: "定额 — 已含于报价中",
    authFee: "鉴定 / 检验",
    authFeeSub: "两阶段 · 台北鉴赏库",
    insuredFee: "保险运送",
    insuredFeeSub: "府上专送 · 须签收",
    refRate: "参考汇率",
    refRateSub: "即时 · 15 分钟刷新",
    holdDeposit: "保证金 · 可退",
    backLabel: "← 返回",
    continueDetails: "继续填写细节",
    continueReview: "前往最终确认",
    dispatchFile: "派发档案 · 保证金 {{amount}}",
    holdFootnote: "若您婉拒报价,保证金将全额退还。我们仅在交出档案后扣款。",
  },
  quote: {
    dossierLine: "代购档案 · MSN — 04823 — 送达于 14·05 09:08 GMT+8",
    headline1: "我们为您锁定 ",
    headlineEm: "三个",
    headline2: "\n候选方案。",
    noteIntroA: "您的顾问 ",
    conciergeName: "晓宇",
    noteIntroB:
      " 来信 — 其中两件目前分别保留于巴黎与香港,一件需经私人通路释出。价格含运送、关税与服务费。",
    conciergeFull: "陈晓宇",
    conciergeMeta: "您的顾问 · 年资 11 年",
    repliesBetween: "回复时段 09:00 — 19:00 GMT+8 · 一般 32 分钟内回复。",
    openLine: "开启 LINE 顾问通道",
    holding: "● 保留中",
    candidates: {
      A: {
        verdict: "首选推荐",
        cond: "全新 · 配件齐全 · 五金未撕膜",
        city: "巴黎 · 八区",
        time: "6 天 · 人手携带",
      },
      B: {
        verdict: "最佳价值",
        cond: "极佳 · 防尘袋齐全",
        city: "香港 · IFC",
        time: "11 天 · DHL Plus",
      },
      C: {
        verdict: "需联络释出",
        cond: "全新 · 烫金礼盒",
        city: "东京 · 私人通路",
        time: "4–5 周 · 释出流程",
      },
    },
    sourceLabel: "货源",
    deliveryLabel: "交期",
    approve: "核可",
    priceEyebrow: "关于价格",
    priceTitle: "报价以来源币别保留。",
    priceCopy:
      "若日元在核可与发货间贬值,差额全数归您。若日元走强,我们吸收最多 2.5% 的差额,超出此范围我们会暂停并与您确认后再扣款。",
    authEyebrow: "关于鉴定",
    authTitle: "鉴定执行两次 — 来源地与台北各一次。",
    authCopy:
      "未能通过第二次鉴定的作品,我们将承担退回成本,并于当天退还保证金。每一份派发档案都会附上 18 张微距照组成的完整记录。",
  },
  checkout: {
    fileLine: "档案 MSN — 04823 · 候选 A · 巴黎",
    title: "核可并 ",
    titleEm: "保管款项",
    deliveryEyebrow: "01 · 运送",
    customerName: "Chen Mei-Lin · 陈美琳",
    customerAddress: "台北市大安区丽水街 12 巷 7 号 · 106 · 台湾",
    primary: "· 主要",
    change: "变更",
    carriageLabel: "配送",
    carriageValue: "府上专送 · 周三 5/21 · 14:00 – 18:00 时段",
    retime: "更改时段",
    paymentEyebrow: "02 · 付款",
    cardNumber: "卡号",
    expiry: "有效期",
    cvc: "安全码",
    consentsEyebrow: "03 · 同意条款",
    consents: [
      "我确认此作品符合需求 — 并同意顾问在核可预算内拥有合理裁量。",
      "我授权 MAISON 出货前进行鉴定;未通过者全额退款。",
      "请于每个进度节点以 @maison_concierge 发送 LINE 通知。",
      "请保留我的地址供日后配送(静态加密存储)。",
    ],
    methods: {
      card: { name: "信用卡", sub: "Stripe · 3DS" },
      ecpay: { name: "ECPay 绿界", sub: "仅限新台币 · 12 期 0 利率" },
      line: { name: "LINE Pay", sub: "即时 · 新台币" },
    },
    summary: "订单摘要",
    productEyebrow: "BIRKETT · 2023",
    productName: "Saddle 25 · Étoupe",
    productSub: "候选 A · 巴黎八区",
    piece: "作品",
    conciergeService: "顾问服务",
    authentication: "鉴定",
    insuredCarriage: "保险运送",
    dutyPaid: "关税(已含)",
    included: "已包含",
    totalToday: "本次扣款",
    escrowedNote: "款项信托保管直至鉴赏库验货 · 退件时全额退还。",
    authorise: "授权 · {{amount}}",
    securityNote: "256 位元加密 · Stripe · 以新台币信托保管",
  },
  order: {
    fileLine: "档案 MSN — 04823 · 进行中",
    title: "您的 ",
    titleEm: "Saddle 25",
    titleAfter: " 正在路上。",
    paidEscrowed: "已付款 · 信托中",
    releasedNote: "于第二次鉴定通过后拨付给工坊。",
    stage3of5: "第 3 / 5 阶段",
    eta: "预计抵达 · 5/21",
    candidateLine: "候选 A · 巴黎八区 · 5/14 核可",
    stages: [
      {
        t: "报价已核可",
        w: "5/14 · 09:42 GMT+8",
        d: "您已授权候选 A — 巴黎。款项已信托。",
      },
      {
        t: "顾问取件",
        w: "5/15 · 11:20 GMT+1",
        d: "晓宇已于 Faubourg Saint-Honoré 旗舰店取得作品。",
      },
      {
        t: "已鉴定 · 运往鉴赏库",
        w: "5/16 · 18:55 GMT+8",
        d: "巴黎首次鉴定完成,现搭乘法航 197 班机。",
      },
      {
        t: "台北第二次鉴定",
        w: "预计 5/19",
        d: "18 张微距照组成的鉴定档案将上传至您的档案。",
      },
      {
        t: "亲手送达",
        w: "预计 5/21 · 14:00–18:00",
        d: "签收交付 · 附终身鉴定卡。",
      },
    ],
    conciergeMessage:
      "Saddle 已搭上 AF197,明日 06:40 抵达桃园。我会在午餐前于鉴赏库拍照,并于周三寄出 — 预计能准时于周五府上交付。",
    conciergeMessageSig: "晓宇 · MAISON 顾问",
    yourConcierge: "您的顾问",
    reachable: "服务时段 09:00 — 19:00 GMT+8。",
    repliesIn: "中位回复时间 32 分钟。",
    openLine: "开启 LINE 通道",
    requestPhotos: "请求作品照片",
    yourNotifications: "您的通知设置",
    notifLine: "LINE @maison_concierge",
    notifEmail: "Email · 陈美琳@…",
    notifSms: "SMS · +886 9·· ····",
    on: "开",
    off: "关",
    afterArrival: "送达之后",
    afterArrivalItems: [
      "— 14 天无条件退货",
      "— 12 个月内 7 成价回购方案",
      "— 终身鉴定卡",
    ],
  },
  account: {
    memberSince: "会员 · 自 {{date}} 起",
    welcome1: "欢迎回来,",
    welcomeEm: "{{name}}",
    fullName: "陈美琳",
    cityLine: "陈美琳 · TPE",
    currentTier: "当前会籍",
    tierHeadlines: {
      Normal: "— 累积中",
      Professional: "已解锁季度预览",
      Diamond: "邀请制",
    },
    ledgerLifetime:
      "终身 · {{ledger}} 完成 {{files}} 份档案。下次审核 2026 年 8 月。",
    previewTier: "预览会籍",
    nav: {
      orders: "顾问档案",
      saved: "收藏与待补",
      addresses: "地址与保管",
      payments: "付款与信托",
      notifications: "LINE 与通知",
      profile: "个人资料与语言",
    },
    filesEyebrow: "档案 · 进行中与历史",
    filesOpen1: "四份档案 ",
    filesOpenEm: "进行中",
    newFile: "新建档案",
    tableFile: "档案",
    tablePiece: "作品",
    tableState: "状态",
    tableValue: "金额",
    view: "查看",
    ledgerYtdEyebrow: "顾问账本 · 本年度",
    ledgerYtdValue: "{{ledger}}",
    ledgerYtdNote: "{{files}} 份完成 · 第二次鉴定 0 件退回",
    lineChannelEyebrow: "LINE 顾问通道",
    lineChannelValue: "{{channel}} · 中位回复 {{reply}}",
    openChannel: "开启通道",
    rebindLine: "重新绑定 LINE",
    sectionPreview: "区块预览",
    sectionCopy:
      "此为原型示意。版面延续相同节制 — 单栏、留白宽裕、无互相竞争的行动按钮。",
    states: {
      quote: "报价中",
      reserved: "已保留",
      transit: "运送中",
      delivered: "已送达",
    },
    orderItems: {
      "MSN-04823": "Birkett · Saddle 25 · Étoupe",
      "MSN-04790": "Couronne · Skeleton 41",
      "MSN-04640": "Aurel · Linked-Chain Tote",
      "MSN-04503": "定制 — Aurel 亮片宴会包",
    },
    orderValues: {
      "MSN-04823": "USD 12,455",
      "MSN-04790": "USD 86,500",
      "MSN-04640": "USD 4,200",
      "MSN-04503": "等待报价",
    },
  },
  signin: {
    eyebrow: "会员 · 登录",
    title: "步入工坊。",
    subtitle: "请以社交账号登录,或以访客身份先预览顾问体验。",
    alreadySigned: "已登录为 ",
    goAccount: "前往会员专区 →",
    you: "您",
    or: "或",
    providerLabels: {
      google: "以 Google 继续",
      facebook: "以 Facebook 继续",
      line: "以 LINE 继续",
      guest: "以访客继续",
    },
    providerHints: {
      google: "Google 账号",
      facebook: "Meta 账号",
      line: "LINE 账号",
      guest: "匿名展示账号",
    },
    redirecting: "跳转中…",
    signingIn: "登录中…",
    demoNote:
      "展示版本 — 账号仅供本预览环境使用。访客 session 在退出前持续有效。",
    errorGeneric: "发生错误,请再试一次。",
    errorSignIn: "登录失败",
  },
  footer: {
    description:
      "为慎重之物而存的代购工坊。台北工坊预约制服务,全球保险运送并附终身鉴定。",
    rule: "代购 · 鉴定 · 送达",
    atelierTitle: "工坊",
    atelierItems: ["我们的顾问", "台北鉴赏库", "鉴定准则", "媒体与合作"],
    serviceTitle: "服务",
    serviceItems: [
      "代购流程说明",
      "币别与汇率备注",
      "运送与关税",
      "退换与回购",
      "LINE 顾问通道",
    ],
    membershipTitle: "会籍",
    membershipItems: ["普通", "专业", "钻石 — 邀请制", "推荐好友"],
    copyright: "© 2019 — 2026 · MAISON 代购工坊",
    cities: "台北 · 东京 · 巴黎 · 香港",
    builtPrivately: "私密构建 — 不公开索引",
  },
  admin: {
    eyebrow: "Maison · 顾问运营",
    title: "内部管理",
    nav: {
      dashboard: "总览",
      orders: "订单",
      proxyRequests: "代购申请",
      products: "商品",
      members: "会员",
    },
    stats: {
      orders: "订单",
      proxyRequests: "代购申请",
      products: "商品",
      members: "会员",
    },
    members: {
      member: "会员",
      email: "电子邮箱",
      role: "角色",
      joined: "加入时间",
    },
    orders: {
      noneTitle: "暂无订单",
      noneCopy: "会员完成结账后,订单将出现于此。",
      order: "订单",
      member: "会员",
      status: "状态",
      total: "总额",
    },
    products: {
      noneTitle: "目录为空",
      noneCopy: "新增商品以开始整理对外目录。",
      active: "上架中",
      draft: "草稿",
      houseFallback: "品牌",
    },
    proxyRequests: {
      noneTitle: "暂无代购申请",
      noneCopy: "会员的代购申请会出现于此供同事审视。",
      unspecifiedBrand: "未指定品牌",
    },
  },
  dev: {
    home: "首页",
    collection: "典藏",
    detail: "细节",
    request: "申请",
    quote: "报价",
    checkout: "结账",
    order: "订单",
    account: "会员",
  },
};

const JA: Dictionary = {
  meta: {
    title: "MAISON · コンシェルジュ",
    description:
      "革・時計・既製服を世界のアトリエから手配する、プライベート・コンシェルジュ。",
  },
  header: {
    estTaipei: "創立 · 2019 · 台北",
    languageGroup: "言語",
    currencyGroup: "通貨 · 参考レート",
    updated: "更新 13·05·26 09:42 GMT+8",
    toggleDark: "ダークモード切り替え",
    search: "検索",
    account: "アカウント",
    signIn: "サインイン",
  },
  user: {
    signIn: "サインイン",
    signedIn: "サインイン済み",
    account: "アカウント",
    signOut: "サインアウト",
    guest: "ゲスト",
    member: "メンバー",
  },
  nav: {
    atelier: "アトリエ",
    collection: "コレクション",
    request: "依頼する",
    journal: "ジャーナル",
  },
  cta: {
    request: "依頼する",
    browse: "コレクションへ",
    addToBag: "ヴォルトに確保",
    requestPiece: "コンシェルジュに依頼",
    continueDetails: "詳細入力へ",
    continueReview: "最終確認へ",
    back: "← 戻る",
    approve: "承認する",
  },
  hero: {
    eyebrow: "厳選された一点のためのプロキシ・アトリエ",
    sub: "MAISON は、世界のアトリエから革・時計・既製服を手配するプライベート・コンシェルジュ。透明な価格、確かな鑑定、そしてあなたのファイルを担当するひとりの専属担当者。",
    statsSourced: "前四半期に手配した点数",
    statsTime: "初回ドシエまでの中央値",
    statsTimeUnit: "時間",
    statsAuth: "初回検品での合格率",
    statsAuthUnit: "%",
    imageAlt: "Birkett Saddle 25 エトゥープ · スタジオ撮影",
    imageCaption: "メインビジュアル · 手配品・スタイリング済み",
  },
  headline: {
    line1: "ご自身で",
    line2: "選びたかった",
    line3: "ワードローブを、",
    line4em: "私たちに\nお任せください。",
  },
  process: {
    title: "コンシェルジュの流れ",
    kicker: "四つの工程、一つのプライベート・チャンネル。",
    meta: "すべてのファイルは、ご依頼から到着まで同じコンシェルジュが担当します。お名前、声、対応時間まで、はっきりとお伝えします。",
    steps: [
      {
        n: "01",
        h: "ご要望をお聞かせください",
        p: "写真をアップロード、リンクを貼る、あるいは記憶を言葉で。ランウェイから蚤の市まで、何でもお受けします。",
      },
      {
        n: "02",
        h: "ドシエが届きます",
        p: "24 時間以内に、担当コンシェルジュが真贋・調達ルート・透明な見積(為替込み)をご提示します。",
      },
      {
        n: "03",
        h: "承認・安心の決済",
        p: "どの端末からでも決済を承認。台北ヴォルトで検品が完了するまで、代金はエスクローで保管します。",
      },
      {
        n: "04",
        h: "ご自宅にお届け",
        p: "保険付き手渡し配送、控えめな梱包、受取サイン、終身鑑定カード付き。",
      },
    ],
  },
  collectionHome: {
    eyebrow: "今月の入れ替え · 5 月",
    line1: "今期、",
    lineEm: "八つ",
    line2: " の静かな到着。",
    meta: "ファイル成立に応じて更新。",
    inVaultMono: "IN VAULT",
    onQuoteMono: "ESTIMATED",
    inVaultClause: "は台北で確保済み;",
    onQuoteClause: "は見積もり手配中です。",
  },
  atelierNote: {
    eyebrow: "アトリエより",
    headlineA: "私たちは ",
    headlineEm: "三つの言語",
    headlineB: "、五つの通貨、ひとつの声で。",
    copy: "通貨はいつでも切り替え可能 — 表示される数字はすべてリアルタイムのミッドレートに基づき、15 分ごとに更新・タイムスタンプ付きです。注文は支払時の通貨で保管し、お届け時に精算 — 円相場の揺れがそのまま請求書に届くことはありません。",
    readMore: "為替リスクの取り扱いについて",
  },
  tiers: {
    eyebrow: "三つの会員ランク",
    line1: "ご自身のファイルの ",
    lineEm: "リズム",
    meta: "アップグレードは静かに — 一年間の活動に基づき、営業電話はかけません。\nダウングレードも同じく静かに。",
    yourTier: "— ご利用中",
    names: {
      Normal: "Normal",
      Professional: "Professional",
      Diamond: "Diamond",
    },
    spend: {
      Normal: "下限なし",
      Professional: "NT$ 600,000 / 年",
      Diamond: "招待制",
    },
    bens: {
      Normal: [
        "コンシェルジュ・チャンネル 1 本",
        "36 時間以内の見積",
        "保険付き配送・実費",
      ],
      Professional: [
        "専属コンシェルジュ",
        "12 時間以内の見積",
        "送料・関税込み",
        "四半期ごとのアトリエ・プレビュー",
      ],
      Diamond: [
        "コンシェルジュ 2 名 · 24/7",
        "トランクショー優先案内",
        "台北ヴォルトでのプライベート閲覧",
        "終身バイバック・オファー",
      ],
    },
  },
  collectionPage: {
    eyebrow: "コレクション · 2026 春",
    headline1: "八十二点が\n現在 ",
    headlineEm: "受付中",
    headline2: "。",
    rateLine: "すべての金額は",
    rateUpdated: "更新 09:42 GMT+8",
    filterAll: "すべて",
    filterVault: "ヴォルト在",
    filterEstimated: "見積中",
    categoriesLabel: "カテゴリ —",
    categories: [
      "レザー",
      "時計",
      "ジュエリー",
      "プレタポルテ",
      "ヴィンテージ",
    ],
    sortLabel: "並び替え",
    sortNewest: "新着ドシエ順",
    sortAsc: "価格 安い順",
    sortDesc: "価格 高い順",
    sortFav: "コンシェルジュ推薦",
    nothingFits: "ぴったり来ません。",
    sendUsA: "写真・リンク・もしくは ",
    sendUsEm: "言葉でお伝えください。",
    sendUsAfter: "",
    conciergeReply:
      "担当コンシェルジュが 36 時間以内に調達案と透明な見積をお返しします。",
  },
  product: {
    breadcrumbAtelier: "アトリエ",
    breadcrumbCollection: "コレクション",
    viewLabel: "アングル",
    sourcedFrom: "{{house}} メゾン · パリ Faubourg Saint-Honoré より手配。",
    inVault: "台北ヴォルト在庫 · 即時発送可",
    onQuote: "コンシェルジュ見積 · 約 4–6 週間",
    authenticated: "鑑定済 · カード #{{ref}}-2607",
    specs: {
      maison: "メゾン",
      reference: "型番",
      referenceValue: "{{id}} · 2024 年製",
      materials: "素材",
      materialsValue: "トゴ仔牛革・パラジウム金具・コントラストサドルステッチ",
      dimensions: "サイズ",
      dimensionsValue: "25 × 18 × 14 cm · 720g",
      provenance: "来歴",
      provenanceValue: "初代オーナー · パリ → 台北まで手持ち · フルセット",
      authentication: "鑑定",
      authenticationValue: "写真ドシエ · ご希望でマクロ 18 枚",
      shipsFrom: "発送元",
      shipsFromValue: "台北 · 入金確認後 48 時間以内",
    },
    assurance: {
      authTitle: "終身鑑定",
      authSub: "出荷前に台北ヴォルトで二段階検品。",
      escrowTitle: "エスクロー決済",
      escrowSub: "現品をお手にされて確認後にのみ実行。",
      carriageTitle: "保険付き配送",
      carriageSub: "サイン付き手渡し;Diamond は均一料金。",
      resaleTitle: "バイバック",
      resaleSub: "手配品はいつでも公正価格にて買戻し可能。",
    },
  },
  productCard: {
    inVault: "in vault",
    estimated: "estimated",
  },
  request: {
    eyebrow: "コンシェルジュ・ファイル · 新規",
    title: "一点を ",
    titleEm: "依頼",
    step1: "01 物件",
    step2: "02 詳細",
    step3: "03 確認",
    pieceLabel: "01 · 物件",
    dragOrBrowse: "ドラッグ · または · 参照",
    uploadedH: "良い参考写真です。",
    uploadedP:
      "別アングルを 4 枚まで、リンク、または記憶の一行を追加できます。",
    emptyH: "心にある一点を入れてください。",
    emptyP:
      "スクリーンショット、ランウェイ写真、友人のクローゼットでの一枚でも構いません。JPG、HEIC、PNG · 24MB まで。",
    replacePhoto: "写真を差し替え",
    identify: "アシスタントに識別を依頼",
    identifying: "識別中…",
    choosePhoto: "写真を選択",
    pasteLink: "リンクで送る",
    aiAssistant: "コンシェルジュ・アシスタント — 参考のみ",
    aiReading: "金具・縫製・革目を読み取り中…",
    aiSuggestion1: "これは ",
    aiSuggestion2: "Birkett Saddle、25、Étoupe Togo",
    aiSuggestion3: " のようです — 2023 年頃、金具はパラジウム。",
    aiConfidence: "確度 {{n}}%",
    aiFootnoteStrong: "MAISON より。",
    aiFootnote:
      " 識別はコンシェルジュを助ける目安であり、鑑定ではありません。あなたのドシエは 24 時間以内に担当者が確認します。",
    brandLabel: "02 · メゾン / 工房",
    brandPh: "例 Birkett、Aurel、Couronne",
    modelLabel: "02 · モデル / 型番",
    modelPh: "Saddle 25 · Étoupe · 2023",
    budgetLowLabel: "03 · 予算 — 希望",
    budgetLowHelp: "理想の一点が現れた場合に目指したい金額。",
    budgetHiLabel: "03 · 予算 — 上限",
    budgetHiHelp: "ここを越える場合は一度ご相談します。",
    notesLabel: "04 · コンシェルジュへのメモ",
    notesPh:
      "pre-loved 可。ただし角の擦れが見えるものは不可。色は参考写真より日中ややウォーム — ミルクコーヒー寄り。",
    notesHelp:
      "具体的なご希望、思い入れ、譲れない条件。担当者は一字一句に目を通します。",
    condLabel: "05 · 許容コンディション",
    condNew: "新品未使用 · 純正パッケージ",
    condExcellent: "極美 · pre-loved · 目立つ使用感なし",
    condVintage: "ヴィンテージ · 年代問わず · オリジナルパーツのみ",
    deadlineLabel: "05 · 配達希望期限",
    deadlinePh: "急ぎなし · または日付指定",
    fileReady: "ファイル · 発送準備完了",
    notesHeader: "メモ",
    byHeader: "期限",
    channelHeader: "チャンネル",
    conciergeChannelLine: "コンシェルジュ・チャンネル · LINE",
    connected: "接続済み",
    noFixedDate: "日付指定なし",
    defaultNotes:
      "pre-loved 可、角の擦れは不可。色は参考写真より日中ややウォーム — ミルクコーヒー寄り。",
    timeline: [
      { t: "T+0", w: "ファイル送信", when: "今" },
      { t: "T+24h", w: "コンシェルジュ・ドシエ到着", when: "水 · 5/14" },
      { t: "T+3–6w", w: "ヴォルト到着・発送可", when: "6 月中旬" },
    ],
    filePreview: "ファイル・プレビュー",
    estAllIn: "見込総額",
    indicative: "目安です — 正式見積は 24 時間以内に届きます。",
    conciergeFee: "コンシェルジュ料",
    conciergeFeeSub: "定額 — 見積に含む",
    authFee: "鑑定・検品",
    authFeeSub: "二段階 · 台北ヴォルト",
    insuredFee: "保険付き配送",
    insuredFeeSub: "戸口まで・サイン要",
    refRate: "参考レート",
    refRateSub: "リアルタイム · 15 分更新",
    holdDeposit: "予約金 · 返金可",
    backLabel: "← 戻る",
    continueDetails: "詳細入力へ",
    continueReview: "最終確認へ",
    dispatchFile: "ファイル発送 · 予約金 {{amount}}",
    holdFootnote:
      "見積をお断りの場合は予約金を全額返金。ドシエ到着までは決済しません。",
  },
  quote: {
    dossierLine: "ドシエ · MSN — 04823 — 到着 14·05 09:08 GMT+8",
    headline1: "候補は ",
    headlineEm: "三点",
    headline2: "\n見つかりました。",
    noteIntroA: "担当コンシェルジュ ",
    conciergeName: "暁宇",
    noteIntroB:
      " より — 二点はパリと香港で確保中、一点はプライベート・セールでの放出が必要です。価格は送料・関税・サービスを含むオール込みです。",
    conciergeFull: "陳 暁宇",
    conciergeMeta: "担当コンシェルジュ · 経験 11 年",
    repliesBetween: "対応時間 09:00 — 19:00 GMT+8 · 通常 32 分以内に返信。",
    openLine: "LINE コンシェルジュ・チャンネルを開く",
    holding: "● 保留中",
    candidates: {
      A: {
        verdict: "推奨",
        cond: "新品 · フルセット · 金具フィルム付き",
        city: "パリ · 8 区",
        time: "6 日 · 手持ち搬送",
      },
      B: {
        verdict: "ベスト・バリュー",
        cond: "極美 · ダストカバー完備",
        city: "香港 · IFC",
        time: "11 日 · DHL Plus",
      },
      C: {
        verdict: "リクエスト中",
        cond: "新品 · 型押しギフトボックス",
        city: "東京 · プライベート・セール",
        time: "4–5 週 · 放出手続き",
      },
    },
    sourceLabel: "ソース",
    deliveryLabel: "配送",
    approve: "承認",
    priceEyebrow: "価格について",
    priceTitle: "見積は仕入通貨で保管します。",
    priceCopy:
      "承認から発送までの間に円安が進んだ場合、その差益は全額お客様へ。円高の場合は 2.5% まで当社が吸収し、超える場合は決済前にご相談します。",
    authEyebrow: "真贋について",
    authTitle: "検品は二度 — 現地と台北で。",
    authCopy:
      "二度目で不合格となった品物は当社負担で返送し、当日中に予約金を返金します。発送ファイルにはマクロ 18 枚のドシエを添付します。",
  },
  checkout: {
    fileLine: "ファイル MSN — 04823 · 候補 A · パリ",
    title: "承認・",
    titleEm: "保管",
    deliveryEyebrow: "01 · 配送",
    customerName: "Chen Mei-Lin · 陳 美琳",
    customerAddress: "台北市大安区麗水街 12 巷 7 号 · 106 · 台湾",
    primary: "· 主要",
    change: "変更",
    carriageLabel: "配送",
    carriageValue: "戸口手渡し · 水 5/21 · 14:00 – 18:00",
    retime: "時間を変更",
    paymentEyebrow: "02 · 決済",
    cardNumber: "カード番号",
    expiry: "有効期限",
    cvc: "CVC",
    consentsEyebrow: "03 · 同意事項",
    consents: [
      "依頼内容に合致することを確認しました — 承認予算内でコンシェルジュに合理的な裁量を委ねます。",
      "MAISON が出荷前に鑑定することを承諾します;不合格は全額返金されます。",
      "@maison_concierge より進捗ごとに LINE 通知を受け取ります。",
      "今後の配送のため住所を保管します(保存時に暗号化)。",
    ],
    methods: {
      card: { name: "カード", sub: "Stripe · 3DS" },
      ecpay: { name: "ECPay", sub: "TWD のみ · 12 回 0% 金利" },
      line: { name: "LINE Pay", sub: "即時 · TWD" },
    },
    summary: "ご注文内容",
    productEyebrow: "BIRKETT · 2023",
    productName: "Saddle 25 · Étoupe",
    productSub: "候補 A · パリ 8 区",
    piece: "本体",
    conciergeService: "コンシェルジュ料",
    authentication: "鑑定",
    insuredCarriage: "保険付き配送",
    dutyPaid: "関税(支払済)",
    included: "込み",
    totalToday: "本日のお支払い",
    escrowedNote: "ヴォルト検品までエスクロー保管 · 不合格時は全額返金。",
    authorise: "承認 · {{amount}}",
    securityNote: "256bit · Stripe · TWD でエスクロー",
  },
  order: {
    fileLine: "ファイル MSN — 04823 · 進行中",
    title: "あなたの ",
    titleEm: "Saddle 25",
    titleAfter: " が移動中です。",
    paidEscrowed: "支払済 · エスクロー",
    releasedNote: "二度目の検品クリア後にメゾンへ支払い。",
    stage3of5: "ステージ 3 / 5",
    eta: "到着予定 · 5/21",
    candidateLine: "候補 A · パリ 8 区 · 5/14 承認",
    stages: [
      {
        t: "見積承認",
        w: "5/14 · 09:42 GMT+8",
        d: "候補 A — パリ をご承認。代金はエスクロー保管。",
      },
      {
        t: "コンシェルジュ引き取り",
        w: "5/15 · 11:20 GMT+1",
        d: "暁宇が Faubourg Saint-Honoré 旗艦店にて受領しました。",
      },
      {
        t: "鑑定済 · ヴォルト着便",
        w: "5/16 · 18:55 GMT+8",
        d: "パリ側の初回検品完了。エールフランス 197 便にて空輸中。",
      },
      {
        t: "台北での二度目の検品",
        w: "5/19 予定",
        d: "マクロ 18 枚のドシエをファイルにアップロードします。",
      },
      {
        t: "戸口へ手渡し",
        w: "5/21 予定 · 14:00–18:00",
        d: "サイン受領 · 終身鑑定カード同梱。",
      },
    ],
    conciergeMessage:
      "Saddle は AF197 で明朝 06:40 桃園着。昼前にヴォルトで撮影し、水曜には発送 — 金曜の戸口受け取り枠に間に合います。",
    conciergeMessageSig: "暁宇 · MAISON コンシェルジュ",
    yourConcierge: "担当コンシェルジュ",
    reachable: "対応時間 09:00 — 19:00 GMT+8。",
    repliesIn: "中央値 32 分で返信。",
    openLine: "LINE チャンネルを開く",
    requestPhotos: "現品の写真をリクエスト",
    yourNotifications: "通知設定",
    notifLine: "LINE @maison_concierge",
    notifEmail: "Email · 陳 美琳@…",
    notifSms: "SMS · +886 9·· ····",
    on: "オン",
    off: "オフ",
    afterArrival: "到着後",
    afterArrivalItems: [
      "— 14 日間の無条件返品",
      "— 12 ヶ月以内に 70% でバイバック",
      "— 終身鑑定カード",
    ],
  },
  account: {
    memberSince: "メンバー · {{date}} より",
    welcome1: "おかえりなさい、",
    welcomeEm: "{{name}}",
    fullName: "陳 美琳",
    cityLine: "陳 美琳 · TPE",
    currentTier: "現在のランク",
    tierHeadlines: {
      Normal: "— ファイル構築中",
      Professional: "四半期プレビュー解除",
      Diamond: "招待制",
    },
    ledgerLifetime:
      "通算 · {{ledger}} / 完了 {{files}} ファイル。次回見直し 2026 年 8 月。",
    previewTier: "ランクをプレビュー",
    nav: {
      orders: "コンシェルジュ・ファイル",
      saved: "保存・ウェイトリスト",
      addresses: "住所・保管",
      payments: "決済・エスクロー",
      notifications: "LINE・通知",
      profile: "プロフィール・言語",
    },
    filesEyebrow: "ファイル · 進行中と履歴",
    filesOpen1: "四件のファイルが ",
    filesOpenEm: "進行中",
    newFile: "新規ファイル",
    tableFile: "ファイル",
    tablePiece: "アイテム",
    tableState: "状態",
    tableValue: "金額",
    view: "詳細",
    ledgerYtdEyebrow: "コンシェルジュ台帳 · 本年度",
    ledgerYtdValue: "{{ledger}}",
    ledgerYtdNote: "{{files}} 件完了 · 二度目の検品で不合格 0 件",
    lineChannelEyebrow: "LINE コンシェルジュ・チャンネル",
    lineChannelValue: "{{channel}} · 中央値 {{reply}}",
    openChannel: "チャンネルを開く",
    rebindLine: "LINE を再連携",
    sectionPreview: "セクション・プレビュー",
    sectionCopy:
      "プロトタイプとしてのスケッチ。同じ抑制 — 一段組み、ファースト・ビューに余白、競合する CTA は置きません。",
    states: {
      quote: "見積中",
      reserved: "確保済",
      transit: "輸送中",
      delivered: "配達済",
    },
    orderItems: {
      "MSN-04823": "Birkett · Saddle 25 · Étoupe",
      "MSN-04790": "Couronne · Skeleton 41",
      "MSN-04640": "Aurel · Linked-Chain Tote",
      "MSN-04503": "カスタム — Aurel スパンコール・クラッチ",
    },
    orderValues: {
      "MSN-04823": "USD 12,455",
      "MSN-04790": "USD 86,500",
      "MSN-04640": "USD 4,200",
      "MSN-04503": "見積待ち",
    },
  },
  signin: {
    eyebrow: "メンバー · サインイン",
    title: "アトリエへどうぞ。",
    subtitle:
      "ソーシャル・アカウントでサインイン、またはゲストとしてコンシェルジュ体験をプレビュー。",
    alreadySigned: "すでにサインイン済み: ",
    goAccount: "アカウントへ →",
    you: "あなた",
    or: "または",
    providerLabels: {
      google: "Google で続ける",
      facebook: "Facebook で続ける",
      line: "LINE で続ける",
      guest: "ゲストとして続ける",
    },
    providerHints: {
      google: "Google アカウント",
      facebook: "Meta アカウント",
      line: "LINE アカウント",
      guest: "匿名デモ・セッション",
    },
    redirecting: "リダイレクト中…",
    signingIn: "サインイン中…",
    demoNote:
      "デモビルド — アカウントはこのプレビュー環境のみ有効。ゲスト・セッションはサインアウトまで持続します。",
    errorGeneric: "問題が発生しました。再度お試しください。",
    errorSignIn: "サインインに失敗しました",
  },
  footer: {
    description:
      "厳選された一点のためのプライベート・コンシェルジュ。台北アトリエの予約制。保険付き配送と終身鑑定で世界へお届けします。",
    rule: "手配 · 鑑定 · 配達",
    atelierTitle: "アトリエ",
    atelierItems: [
      "コンシェルジュ陣",
      "台北ヴォルト",
      "鑑定基準",
      "プレス & パートナー",
    ],
    serviceTitle: "サービス",
    serviceItems: [
      "プロキシ・ショッピングについて",
      "通貨・為替について",
      "配送・関税",
      "返品・リセール",
      "LINE コンシェルジュ・チャンネル",
    ],
    membershipTitle: "メンバーシップ",
    membershipItems: ["Normal", "Professional", "Diamond — 招待制", "ご紹介"],
    copyright: "© 2019 — 2026 · MAISON CONCIERGE",
    cities: "台北 · 東京 · パリ · 香港",
    builtPrivately: "プライベート設計 — 索引化されません",
  },
  admin: {
    eyebrow: "Maison · コンシェルジュ運営",
    title: "内部ポータル",
    nav: {
      dashboard: "ダッシュボード",
      orders: "注文",
      proxyRequests: "代行依頼",
      products: "商品",
      members: "メンバー",
    },
    stats: {
      orders: "注文",
      proxyRequests: "代行依頼",
      products: "商品",
      members: "メンバー",
    },
    members: {
      member: "メンバー",
      email: "メール",
      role: "ロール",
      joined: "登録日",
    },
    orders: {
      noneTitle: "注文はまだありません",
      noneCopy: "会員が決済を完了するとこちらに表示されます。",
      order: "注文",
      member: "メンバー",
      status: "状態",
      total: "合計",
    },
    products: {
      noneTitle: "カタログは空です",
      noneCopy: "商品を追加して公開カタログを編成してください。",
      active: "公開中",
      draft: "下書き",
      houseFallback: "ハウス",
    },
    proxyRequests: {
      noneTitle: "代行依頼はまだありません",
      noneCopy: "会員からの依頼が届くとここに表示されます。",
      unspecifiedBrand: "ブランド未指定",
    },
  },
  dev: {
    home: "ホーム",
    collection: "コレクション",
    detail: "詳細",
    request: "依頼",
    quote: "見積",
    checkout: "チェックアウト",
    order: "注文",
    account: "アカウント",
  },
};

const KO: Dictionary = {
  meta: {
    title: "MAISON · 컨시어지",
    description:
      "가죽·시계·기성복을 세계의 아틀리에에서 조달하는 프라이빗 컨시어지.",
  },
  header: {
    estTaipei: "설립 · 2019 · 타이베이",
    languageGroup: "언어",
    currencyGroup: "통화 · 참고 환율",
    updated: "업데이트 13·05·26 09:42 GMT+8",
    toggleDark: "다크 모드 전환",
    search: "검색",
    account: "계정",
    signIn: "로그인",
  },
  user: {
    signIn: "로그인",
    signedIn: "로그인 됨",
    account: "계정",
    signOut: "로그아웃",
    guest: "게스트",
    member: "회원",
  },
  nav: {
    atelier: "아틀리에",
    collection: "컬렉션",
    request: "요청하기",
    journal: "저널",
  },
  cta: {
    request: "요청하기",
    browse: "컬렉션 보기",
    addToBag: "볼트에 확보",
    requestPiece: "컨시어지로 요청",
    continueDetails: "세부 입력",
    continueReview: "최종 확인",
    back: "← 뒤로",
    approve: "승인",
  },
  hero: {
    eyebrow: "신중한 한 점을 위한 프록시 아틀리에",
    sub: "MAISON 은 세계의 아틀리에에서 가죽·시계·기성복을 조달하는 프라이빗 컨시어지입니다. 투명한 가격, 엄정한 감정, 그리고 당신의 파일을 전담하는 한 사람.",
    statsSourced: "지난 분기 조달 건수",
    statsTime: "첫 도시에 도달까지 중앙값",
    statsTimeUnit: "시간",
    statsAuth: "1차 검수 통과율",
    statsAuthUnit: "%",
    imageAlt: "Birkett Saddle 25 에투프 · 스튜디오 촬영",
    imageCaption: "메인 비주얼 · 조달 완료 · 핸드 스타일링",
  },
  headline: {
    line1: "당신이 직접",
    line2: "골랐을 그",
    line3: "옷장을,",
    line4em: "이제\n저희에게.",
  },
  process: {
    title: "컨시어지가 일하는 방식",
    kicker: "네 단계, 하나의 프라이빗 채널.",
    meta: "모든 파일은 요청부터 인도까지 같은 컨시어지가 담당합니다. 이름과 음성, 근무 시간까지 분명히 안내합니다.",
    steps: [
      {
        n: "01",
        h: "원하시는 것을 알려주세요",
        p: "사진 업로드, 링크 붙여넣기 혹은 기억을 묘사하세요. 런웨이부터 빈티지 마켓의 한 점까지 모두 수용합니다.",
      },
      {
        n: "02",
        h: "도시에를 받아보세요",
        p: "24 시간 안에 전담 컨시어지가 진위·조달 옵션·투명한 견적(환율 포함)을 제시합니다.",
      },
      {
        n: "03",
        h: "승인 후 안전 결제",
        p: "어떤 기기에서든 결제를 승인할 수 있습니다. 타이베이 볼트에서 검수가 완료될 때까지 대금은 에스크로에 보관됩니다.",
      },
      {
        n: "04",
        h: "집 앞까지 전달",
        p: "보험이 적용된 인편 배송, 절제된 포장, 서명 수령, 평생 감정 카드를 동봉합니다.",
      },
    ],
  },
  collectionHome: {
    eyebrow: "이달의 로테이션 · 5 월",
    line1: "이번 분기 ",
    lineEm: "여덟 점",
    line2: "이 조용히 도착했습니다.",
    meta: "파일이 마감되는 대로 갱신됩니다. 표시 중",
    inVaultMono: "IN VAULT",
    onQuoteMono: "ESTIMATED",
    inVaultClause: "은 타이베이 확보 완료;",
    onQuoteClause: "은 견적 기반 조달 중입니다.",
  },
  atelierNote: {
    eyebrow: "아틀리에로부터",
    headlineA: "우리는 ",
    headlineEm: "세 가지 언어",
    headlineB: ", 다섯 통화, 하나의 목소리로 일합니다.",
    copy: "통화는 언제든 전환 가능 — 플랫폼의 모든 숫자는 실시간 중간 환율을 반영하며 15 분마다 갱신·타임스탬프가 표시됩니다. 주문은 결제 통화로 보관되며 인도 시 정산되므로 엔화의 변동이 청구서에 그대로 도달하는 일은 없습니다.",
    readMore: "환율 리스크 처리 방식 보기",
  },
  tiers: {
    eyebrow: "세 가지 멤버십",
    line1: "당신 파일의 ",
    lineEm: "리듬",
    meta: "업그레이드는 조용히 — 영업 전화가 아니라 1 년의 활동을 기준으로.\n다운그레이드 역시 조용합니다.",
    yourTier: "— 현재 등급",
    names: {
      Normal: "Normal",
      Professional: "Professional",
      Diamond: "Diamond",
    },
    spend: {
      Normal: "최소 한도 없음",
      Professional: "NT$ 600,000 / 년",
      Diamond: "초대제",
    },
    bens: {
      Normal: ["단일 컨시어지 채널", "36 시간 이내 견적", "보험 배송 · 실비"],
      Professional: [
        "전담 컨시어지",
        "12 시간 이내 견적",
        "배송·관세 포함",
        "분기마다 아틀리에 프리뷰",
      ],
      Diamond: [
        "컨시어지 2 인 24/7",
        "트렁크쇼 우선 입장",
        "타이베이 볼트 프라이빗 뷰잉",
        "평생 바이백 오퍼",
      ],
    },
  },
  collectionPage: {
    eyebrow: "컬렉션 · 2026 봄",
    headline1: "여든두 점이\n현재 ",
    headlineEm: "접수 가능",
    headline2: ".",
    rateLine: "모든 금액은",
    rateUpdated: "업데이트 09:42 GMT+8",
    filterAll: "전체",
    filterVault: "볼트 보유",
    filterEstimated: "견적 기반",
    categoriesLabel: "카테고리 —",
    categories: ["가죽", "시계", "주얼리", "기성복", "빈티지"],
    sortLabel: "정렬",
    sortNewest: "최신 도시에",
    sortAsc: "가격 낮은 순",
    sortDesc: "가격 높은 순",
    sortFav: "컨시어지 추천",
    nothingFits: "딱 맞지 않습니다.",
    sendUsA: "사진·링크 혹은 ",
    sendUsEm: "그 점을 묘사",
    sendUsAfter: "해 주세요.",
    conciergeReply:
      "담당 컨시어지가 36 시간 안에 조달 옵션과 투명한 견적으로 답변드립니다.",
  },
  product: {
    breadcrumbAtelier: "아틀리에",
    breadcrumbCollection: "컬렉션",
    viewLabel: "뷰",
    sourcedFrom: "{{house}} 메종 · 파리 Faubourg Saint-Honoré 에서 조달.",
    inVault: "타이베이 볼트 재고 · 즉시 발송 가능",
    onQuote: "컨시어지 견적 · 약 4–6 주",
    authenticated: "감정 완료 · 카드 #{{ref}}-2607",
    specs: {
      maison: "메종",
      reference: "참조 번호",
      referenceValue: "{{id}} · 2024 년 생산",
      materials: "소재",
      materialsValue: "토고 카프스킨 · 팔라듐 하드웨어 · 새들 스티치",
      dimensions: "치수",
      dimensionsValue: "25 × 18 × 14 cm · 720g",
      provenance: "출처",
      provenanceValue: "초대 소유자 · 파리 → 타이베이 직접 운반 · 풀세트",
      authentication: "감정",
      authenticationValue: "사진 도시에 · 매크로 18 장 요청 가능",
      shipsFrom: "발송지",
      shipsFromValue: "타이베이 · 결제 확인 후 48 시간 이내",
    },
    assurance: {
      authTitle: "평생 감정",
      authSub: "발송 전 타이베이 볼트에서 2 단계 검수.",
      escrowTitle: "에스크로 결제",
      escrowSub: "실물을 손에 받고 확인할 때까지 대금 보관.",
      carriageTitle: "보험 운송",
      carriageSub: "서명 인편 배송. Diamond 는 균일 요금.",
      resaleTitle: "재판매 오퍼",
      resaleSub: "조달한 모든 작품을 공정 가격으로 언제든 재매입.",
    },
  },
  productCard: {
    inVault: "in vault",
    estimated: "estimated",
  },
  request: {
    eyebrow: "컨시어지 파일 · 신규",
    title: "한 점을 ",
    titleEm: "요청",
    step1: "01 물건",
    step2: "02 세부",
    step3: "03 확인",
    pieceLabel: "01 · 물건",
    dragOrBrowse: "드래그 · 또는 · 찾기",
    uploadedH: "좋은 참고 자료입니다.",
    uploadedP:
      "다른 각도의 사진 4 장, 링크, 또는 기억의 한 줄을 추가할 수 있습니다.",
    emptyH: "마음에 둔 그 한 점을 올려주세요.",
    emptyP:
      "스크린샷, 런웨이 사진, 친구 옷장에서 찍은 한 장도 좋습니다. JPG·HEIC·PNG · 24MB 까지.",
    replacePhoto: "사진 교체",
    identify: "어시스턴트에게 식별 의뢰",
    identifying: "식별 중…",
    choosePhoto: "사진 선택",
    pasteLink: "링크로 보내기",
    aiAssistant: "컨시어지 어시스턴트 — 참고용",
    aiReading: "하드웨어·스티치·결을 읽는 중…",
    aiSuggestion1: "이것은 ",
    aiSuggestion2: "Birkett Saddle 25 · Étoupe Togo",
    aiSuggestion3: " 로 보입니다 — 2023 년경, 하드웨어는 팔라듐.",
    aiConfidence: "신뢰도 {{n}}%",
    aiFootnoteStrong: "MAISON 안내.",
    aiFootnote:
      " 식별은 컨시어지를 돕는 제안일 뿐 감정이 아닙니다. 도시에는 24 시간 안에 사람이 검토·확정합니다.",
    brandLabel: "02 · 메종 또는 하우스",
    brandPh: "예) Birkett, Aurel, Couronne",
    modelLabel: "02 · 모델 또는 참조",
    modelPh: "Saddle 25 · Étoupe · 2023",
    budgetLowLabel: "03 · 예산 — 희망",
    budgetLowHelp: "완벽한 한 점이 나타나면 목표로 삼고 싶은 금액.",
    budgetHiLabel: "03 · 예산 — 상한",
    budgetHiHelp: "이 선을 넘으면 일단 멈추고 여쭙겠습니다.",
    notesLabel: "04 · 컨시어지에게 메모",
    notesPh:
      "pre-loved 가능하지만 모서리 마모가 눈에 띄지 않아야 합니다. 색은 참고 사진보다 햇빛에서 따뜻하게 — 우유빛 커피에 가깝게.",
    notesHelp:
      "구체적이거나 감정적인, 양보할 수 없는 조건. 담당자는 한 자도 빠짐없이 읽습니다.",
    condLabel: "05 · 수용 가능 상태",
    condNew: "신품 미사용 · 정품 패키지",
    condExcellent: "최상 · pre-loved · 사용감 없음",
    condVintage: "빈티지 · 시대 무관 · 오리지널 부품만",
    deadlineLabel: "05 · 희망 인도 기한",
    deadlinePh: "급하지 않음 · 또는 날짜 지정",
    fileReady: "파일 · 발송 준비 완료",
    notesHeader: "메모",
    byHeader: "기한",
    channelHeader: "채널",
    conciergeChannelLine: "컨시어지 채널 · LINE",
    connected: "연결됨",
    noFixedDate: "지정 일자 없음",
    defaultNotes:
      "pre-loved 가능, 모서리 마모는 불가. 색은 참고 사진보다 햇빛에서 따뜻하게 — 우유빛 커피에 가깝게.",
    timeline: [
      { t: "T+0", w: "파일 전송", when: "지금" },
      { t: "T+24h", w: "컨시어지 도시에 도착", when: "수 · 5/14" },
      { t: "T+3–6w", w: "볼트 입고 · 발송 가능", when: "6 월 중순" },
    ],
    filePreview: "파일 미리보기",
    estAllIn: "예상 총액",
    indicative: "참고용 — 정식 견적은 24 시간 내 도착합니다.",
    conciergeFee: "컨시어지 서비스",
    conciergeFeeSub: "정액 — 견적 포함",
    authFee: "감정 / 검수",
    authFeeSub: "2 단계 · 타이베이 볼트",
    insuredFee: "보험 운송",
    insuredFeeSub: "문 앞 인편 · 서명 필요",
    refRate: "참고 환율",
    refRateSub: "실시간 · 15 분 갱신",
    holdDeposit: "보증금 · 환불 가능",
    backLabel: "← 뒤로",
    continueDetails: "세부 입력",
    continueReview: "최종 확인",
    dispatchFile: "파일 발송 · 보증금 {{amount}}",
    holdFootnote:
      "견적을 거절하시면 보증금은 전액 환불됩니다. 도시에가 도착하기 전에는 결제되지 않습니다.",
  },
  quote: {
    dossierLine: "도시에 · MSN — 04823 — 도착 14·05 09:08 GMT+8",
    headline1: "후보 ",
    headlineEm: "세 점",
    headline2: "\n을 찾았습니다.",
    noteIntroA: "담당 컨시어지 ",
    conciergeName: "샤오위",
    noteIntroB:
      " 의 메모 — 두 점은 파리와 홍콩에서 확보 중이며, 한 점은 프라이빗 세일로 풀어야 합니다. 가격은 운송·관세·서비스를 포함한 올인 가입니다.",
    conciergeFull: "천 샤오위",
    conciergeMeta: "담당 컨시어지 · 경력 11 년",
    repliesBetween: "응대 시간 09:00 — 19:00 GMT+8 · 보통 32 분 안에 답변.",
    openLine: "LINE 컨시어지 채널 열기",
    holding: "● 보류 중",
    candidates: {
      A: {
        verdict: "추천",
        cond: "신품 · 풀세트 · 하드웨어 필름",
        city: "파리 · 8 구",
        time: "6 일 · 핸드캐리",
      },
      B: {
        verdict: "베스트 밸류",
        cond: "최상 · 더스트 커버 완비",
        city: "홍콩 · IFC",
        time: "11 일 · DHL Plus",
      },
      C: {
        verdict: "요청 중",
        cond: "신품 · 엠보싱 기프트 박스",
        city: "도쿄 · 프라이빗 세일",
        time: "4–5 주 · 릴리스 절차",
      },
    },
    sourceLabel: "출처",
    deliveryLabel: "배송",
    approve: "승인",
    priceEyebrow: "가격에 관하여",
    priceTitle: "견적은 원가 통화로 보관합니다.",
    priceCopy:
      "승인부터 발송 사이에 엔화가 약세를 보이면 절감분은 전액 고객님께. 강세를 보이면 2.5% 까지 자체 부담하며, 그 이상은 결제 전에 멈추고 여쭙습니다.",
    authEyebrow: "감정에 관하여",
    authTitle: "검수는 두 번 — 현지와 타이베이에서.",
    authCopy:
      "두 번째 검수에서 통과하지 못한 작품은 당사 부담으로 반송하고 당일 보증금을 환불합니다. 발송하는 모든 파일에 매크로 18 장의 도시에를 첨부합니다.",
  },
  checkout: {
    fileLine: "파일 MSN — 04823 · 후보 A · 파리",
    title: "승인 및 ",
    titleEm: "보관",
    deliveryEyebrow: "01 · 배송",
    customerName: "Chen Mei-Lin · 陳美琳",
    customerAddress: "타이베이시 다안구 리수이가 12 골목 7 호 · 106 · 대만",
    primary: "· 주소",
    change: "변경",
    carriageLabel: "운송",
    carriageValue: "문 앞 인편 · 수 5/21 · 14:00 – 18:00",
    retime: "시간 변경",
    paymentEyebrow: "02 · 결제",
    cardNumber: "카드 번호",
    expiry: "만료",
    cvc: "CVC",
    consentsEyebrow: "03 · 동의 사항",
    consents: [
      "작품이 요청에 부합함을 확인하며 — 승인 예산 내에서 컨시어지의 합리적 재량을 인정합니다.",
      "MAISON 이 발송 전에 감정함에 동의합니다 · 불합격 시 전액 환불.",
      "@maison_concierge 에서 마일스톤마다 LINE 알림을 받겠습니다.",
      "추후 배송을 위해 주소를 보관합니다(저장 시 암호화).",
    ],
    methods: {
      card: { name: "카드", sub: "Stripe · 3DS" },
      ecpay: { name: "ECPay", sub: "TWD 전용 · 12 개월 무이자" },
      line: { name: "LINE Pay", sub: "즉시 · TWD" },
    },
    summary: "주문 요약",
    productEyebrow: "BIRKETT · 2023",
    productName: "Saddle 25 · Étoupe",
    productSub: "후보 A · 파리 8 구",
    piece: "제품",
    conciergeService: "컨시어지 서비스",
    authentication: "감정",
    insuredCarriage: "보험 운송",
    dutyPaid: "관세(지불)",
    included: "포함",
    totalToday: "오늘 결제",
    escrowedNote: "볼트 검수 통과까지 에스크로 보관 · 거부 시 환불.",
    authorise: "승인 · {{amount}}",
    securityNote: "256 비트 · Stripe · TWD 에스크로",
  },
  order: {
    fileLine: "파일 MSN — 04823 · 진행 중",
    title: "당신의 ",
    titleEm: "Saddle 25",
    titleAfter: " 가 이동 중입니다.",
    paidEscrowed: "결제됨 · 에스크로",
    releasedNote: "2 차 검수 통과 후 메종에 지급.",
    stage3of5: "스테이지 3 / 5",
    eta: "도착 예정 · 5/21",
    candidateLine: "후보 A · 파리 8 구 · 5/14 승인",
    stages: [
      {
        t: "견적 승인",
        w: "5/14 · 09:42 GMT+8",
        d: "후보 A — 파리 를 승인. 대금은 에스크로 보관.",
      },
      {
        t: "컨시어지 수령",
        w: "5/15 · 11:20 GMT+1",
        d: "샤오위가 Faubourg Saint-Honoré 부티크에서 수령.",
      },
      {
        t: "감정 완료 · 볼트 이동 중",
        w: "5/16 · 18:55 GMT+8",
        d: "파리 1 차 검수 완료. 현재 에어프랑스 197 편 운항 중.",
      },
      {
        t: "타이베이 2 차 검수",
        w: "5/19 예정",
        d: "매크로 18 장의 도시에를 파일에 업로드합니다.",
      },
      {
        t: "문 앞 인편 전달",
        w: "5/21 예정 · 14:00–18:00",
        d: "서명 수령 · 평생 감정 카드 동봉.",
      },
    ],
    conciergeMessage:
      "Saddle 은 AF197 편으로 내일 06:40 타오위안 도착 예정입니다. 점심 전 볼트에서 촬영한 뒤 수요일에 발송 — 금요일 댁 전달 시간에 맞춰 진행됩니다.",
    conciergeMessageSig: "샤오위 · MAISON 컨시어지",
    yourConcierge: "담당 컨시어지",
    reachable: "응대 시간 09:00 — 19:00 GMT+8.",
    repliesIn: "중앙값 32 분 회신.",
    openLine: "LINE 채널 열기",
    requestPhotos: "실물 사진 요청",
    yourNotifications: "알림 설정",
    notifLine: "LINE @maison_concierge",
    notifEmail: "Email · 陳美琳@…",
    notifSms: "SMS · +886 9·· ····",
    on: "켜짐",
    off: "꺼짐",
    afterArrival: "도착 이후",
    afterArrivalItems: [
      "— 14 일 무조건 반품",
      "— 12 개월 내 70% 바이백",
      "— 평생 감정 카드",
    ],
  },
  account: {
    memberSince: "회원 · {{date}} 부터",
    welcome1: "다시 오셨네요, ",
    welcomeEm: "{{name}}",
    fullName: "Chen Mei-Lin",
    cityLine: "陳美琳 · TPE",
    currentTier: "현재 등급",
    tierHeadlines: {
      Normal: "— 파일 구축 중",
      Professional: "분기 프리뷰 해제",
      Diamond: "초대제",
    },
    ledgerLifetime:
      "통산 · {{ledger}} · 완료 {{files}} 파일. 다음 검토 2026 년 8 월.",
    previewTier: "등급 미리보기",
    nav: {
      orders: "컨시어지 파일",
      saved: "저장·대기열",
      addresses: "주소·보관",
      payments: "결제·에스크로",
      notifications: "LINE·알림",
      profile: "프로필·언어",
    },
    filesEyebrow: "파일 · 진행 중과 과거",
    filesOpen1: "네 건의 파일이 ",
    filesOpenEm: "진행 중",
    newFile: "새 파일",
    tableFile: "파일",
    tablePiece: "물건",
    tableState: "상태",
    tableValue: "금액",
    view: "보기",
    ledgerYtdEyebrow: "컨시어지 장부 · 올해",
    ledgerYtdValue: "{{ledger}}",
    ledgerYtdNote: "{{files}} 건 완료 · 2 차 검수 0 건 반려",
    lineChannelEyebrow: "LINE 컨시어지 채널",
    lineChannelValue: "{{channel}} · 중앙값 {{reply}}",
    openChannel: "채널 열기",
    rebindLine: "LINE 다시 연결",
    sectionPreview: "섹션 미리보기",
    sectionCopy:
      "프로토타입을 위한 스케치. 같은 절제 — 1 단 컬럼, 폴드 위 여백, 경쟁하는 CTA 없음.",
    states: {
      quote: "견적",
      reserved: "확보",
      transit: "운송",
      delivered: "전달",
    },
    orderItems: {
      "MSN-04823": "Birkett · Saddle 25 · Étoupe",
      "MSN-04790": "Couronne · Skeleton 41",
      "MSN-04640": "Aurel · Linked-Chain Tote",
      "MSN-04503": "커스텀 — Aurel 시퀸 클러치",
    },
    orderValues: {
      "MSN-04823": "USD 12,455",
      "MSN-04790": "USD 86,500",
      "MSN-04640": "USD 4,200",
      "MSN-04503": "견적 대기",
    },
  },
  signin: {
    eyebrow: "회원 · 로그인",
    title: "아틀리에로 들어오세요.",
    subtitle:
      "소셜 계정으로 로그인하거나, 게스트로 컨시어지 경험을 먼저 살펴보세요.",
    alreadySigned: "이미 로그인됨: ",
    goAccount: "계정으로 →",
    you: "당신",
    or: "또는",
    providerLabels: {
      google: "Google 로 계속",
      facebook: "Facebook 으로 계속",
      line: "LINE 으로 계속",
      guest: "게스트로 계속",
    },
    providerHints: {
      google: "Google 계정",
      facebook: "Meta 계정",
      line: "LINE 계정",
      guest: "익명 데모 세션",
    },
    redirecting: "리디렉션 중…",
    signingIn: "로그인 중…",
    demoNote:
      "데모 빌드 — 계정은 이 프리뷰 환경에서만 유효합니다. 게스트 세션은 로그아웃 전까지 유지됩니다.",
    errorGeneric: "문제가 발생했습니다. 다시 시도해 주세요.",
    errorSignIn: "로그인 실패",
  },
  footer: {
    description:
      "신중한 한 점을 위한 프라이빗 컨시어지. 타이베이 아틀리에 예약제 · 보험 운송과 평생 감정으로 전 세계 배송.",
    rule: "조달 · 감정 · 전달",
    atelierTitle: "아틀리에",
    atelierItems: ["컨시어지", "타이베이 볼트", "감정 기준", "프레스 & 파트너"],
    serviceTitle: "서비스",
    serviceItems: [
      "프록시 쇼핑의 흐름",
      "통화·환율 안내",
      "배송·관세",
      "반품·재판매",
      "LINE 컨시어지 채널",
    ],
    membershipTitle: "멤버십",
    membershipItems: [
      "Normal",
      "Professional",
      "Diamond — 초대제",
      "친구 추천",
    ],
    copyright: "© 2019 — 2026 · MAISON CONCIERGE",
    cities: "타이베이 · 도쿄 · 파리 · 홍콩",
    builtPrivately: "프라이빗 · 색인되지 않음",
  },
  admin: {
    eyebrow: "Maison · 컨시어지 운영",
    title: "내부 포털",
    nav: {
      dashboard: "대시보드",
      orders: "주문",
      proxyRequests: "프록시 요청",
      products: "상품",
      members: "회원",
    },
    stats: {
      orders: "주문",
      proxyRequests: "프록시 요청",
      products: "상품",
      members: "회원",
    },
    members: {
      member: "회원",
      email: "이메일",
      role: "역할",
      joined: "가입일",
    },
    orders: {
      noneTitle: "아직 주문이 없습니다",
      noneCopy: "회원이 결제를 완료하면 여기에 표시됩니다.",
      order: "주문",
      member: "회원",
      status: "상태",
      total: "합계",
    },
    products: {
      noneTitle: "카탈로그가 비어있습니다",
      noneCopy: "상품을 추가해 공개 카탈로그를 편성하세요.",
      active: "공개",
      draft: "초안",
      houseFallback: "하우스",
    },
    proxyRequests: {
      noneTitle: "아직 프록시 요청이 없습니다",
      noneCopy: "회원의 요청이 도착하면 여기에 표시됩니다.",
      unspecifiedBrand: "브랜드 미지정",
    },
  },
  dev: {
    home: "홈",
    collection: "컬렉션",
    detail: "상세",
    request: "요청",
    quote: "견적",
    checkout: "결제",
    order: "주문",
    account: "계정",
  },
};

export const TRANSLATIONS: Record<Locale, Dictionary> = {
  en: EN,
  "zh-TW": ZH_TW,
  "zh-CN": ZH_CN,
  ja: JA,
  ko: KO,
};

export type { Dictionary };

export function formatTemplate(
  text: string,
  vars: Record<string, string | number>
): string {
  return text.replace(/{{(\w+)}}/g, (_, key: string) => {
    const value = vars[key];
    return value === undefined ? "" : String(value);
  });
}
