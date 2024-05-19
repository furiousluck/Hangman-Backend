const getWord = () => {
  const data = [
    {
      definition:
        "lower; degrade; humiliate; make humble; make (oneself) lose self-respect",
      term: "abase",
    },
    {
      definition: "embarrass",
      term: "abash",
    },
    {
      definition: "subside or moderate",
      term: "abate",
    },
    {
      definition: "shorten",
      term: "abbreviate",
    },
    {
      definition: "renounce; give up (position, right, or responsibility)",
      term: "abdicate",
    },
    {
      definition: "abnormal or deviant",
      term: "aberrant",
    },
    {
      definition: "deviation from the normal; mental disorder",
      term: "aberration",
    },
    {
      definition: "assist usually in doing something wrong; encourage",
      term: "abet",
    },
    {
      definition: "suspended action",
      term: "abeyance",
    },
    {
      definition: "detest; hate",
      term: "abhor",
    },
    {
      definition:
        "dwell; abide by: comply with; put up with; tolerate; Ex. abide by the rules; Ex. I can't abide rude people.",
      term: "abide",
    },
    {
      definition:
        "(of a condition) wretched; as low as possible; lacking pride; very humble; showing lack of self-respect; Ex. abject apology",
      term: "abject",
    },
    {
      definition: "renounce upon oath",
      term: "abjure",
    },
    {
      definition: "washing",
      term: "ablution",
    },
    {
      definition: "renunciation; self-sacrifice; self-abnegation",
      term: "abnegation",
    },
    {
      definition: "dwelling place; home",
      term: "abode",
    },
    {
      definition: "cancel; put an end to",
      term: "abolish",
    },
    {
      definition: "detestable; extremely unpleasant",
      term: "abominable",
    },
    {
      definition: "loathe; hate",
      term: "abominate",
    },
    {
      definition:
        "being the first of its kind in a region; primitive; native; indigenous; N. aborigine",
      term: "aboriginal",
    },
    {
      definition: "unsuccessful; fruitless",
      term: "abortive",
    },
    {
      definition: "rubbing away; tending to grind down",
      term: "abrasive",
    },
    {
      definition: "condense or shorten",
      term: "abridge",
    },
    {
      definition: "abolish",
      term: "abrogate",
    },
    {
      definition: "cutting off; separation",
      term: "abscission",
    },
    {
      definition: "depart secretly and hide",
      term: "abscond",
    },
    {
      definition:
        "complete; totally unlimited; having complete power; certain; not relative; Ex. absolute honesty/ruler; CF. absolutism",
      term: "absolute",
    },
    {
      definition: "pardon (an offense)",
      term: "absolve",
    },
    {
      definition:
        "refrain; withhold from participation; intentionally not use one's vote;",
      term: "abstain",
    },
    {
      definition: "sparing in eating and drinking; temperate",
      term: "abstemious",
    },
    {
      definition:
        "restraint from pleasant things, esp. eating or drinking; CF. abstention: act of abstaining from vote",
      term: "abstinence",
    },
    {
      definition: "theoretical; not concrete; nonrepresentational",
      term: "abstract",
    },
    {
      definition: "obscure; profound; difficult to understand",
      term: "abstruse",
    },
    {
      definition: "coarsely insulting; physically harmful",
      term: "abusive",
    },
    {
      definition: "border upon; adjoin",
      term: "abut",
    },
    {
      definition: "bottomless",
      term: "abysmal",
    },
    {
      definition: "enormous chasm; vast bottomless pit",
      term: "abyss",
    },
    {
      definition: "related to a school; not practical or directly useful",
      term: "academic",
    },
    {
      definition: "agree",
      term: "accede",
    },
    {
      definition: "move faster",
      term: "accelerate",
    },
    {
      definition: "easy to approach; obtainable",
      term: "accessible",
    },
    {
      definition: "additional object; useful but not essential thing",
      term: "accessory",
    },
    {
      definition:
        "applaud; praise; greet with great approval; announce with great approval; Ex. The new drung has been acclaimed as the most important discoveries for years; N: strong expression of approval and praise",
      term: "acclaim",
    },
    {
      definition: "adjust to climate or environment; adapt",
      term: "acclimate",
    },
    {
      definition: "sharp upslope of a hill; OP. declivity",
      term: "acclivity",
    },
    {
      definition: "award of merit; strong praise and approval",
      term: "accolade",
    },
    {
      definition:
        "oblige or help someone; adjust or bring into harmony; adapt; make enough space for; ADJ. accommodative; CF. accomodating: helpful and obliging",
      term: "accommodate",
    },
    {
      definition: "partner in crime",
      term: "accomplice",
    },
    {
      definition: "agreement",
      term: "accord",
    },
    {
      definition: "approach and speak first to a person",
      term: "accost",
    },
    {
      definition: "equip; N. accoutrement",
      term: "accoutre",
    },
    {
      definition:
        "growth or increase in size by gradual addition; growth; increase; increase by natural growth; Ex. towers and other accretions of the castle; V. accrete",
      term: "accretion",
    },
    {
      definition:
        "come to one as a gain; accumulate over time; come about by addition; Ex. benefits that accrue from scientific research; Ex. interest accruing in a bank account; N. accrual",
      term: "accrue",
    },
    {
      definition:
        "bitterness of speech and temper; ADJ. acerbic: bitter; acrid (in taste, manner, or tone)",
      term: "acerbity",
    },
    {
      definition: "vinegary",
      term: "acetic",
    },
    {
      definition: "slightly sour (in taste or manner); sharp; caustic",
      term: "acidulous",
    },
    {
      definition: "recognize; admit",
      term: "acknowledge",
    },
    {
      definition: "peak; pinnacle; highest point",
      term: "acme",
    },
    {
      definition: "skin disease (on the face)",
      term: "acne",
    },
    {
      definition:
        "science of sound; quality that makes a room easy or hard to hear in",
      term: "acoustics",
    },
    {
      definition: "assent; agree passively; comply without protest",
      term: "acquiesce",
    },
    {
      definition:
        "deliverance from a charge; V. acquit: free from a charge or accusation; discharge from a duty; conduct (oneself) in a specified manner",
      term: "acquittal",
    },
    {
      definition: "bitter (to the taste or smell); sharp; bitterly pungent",
      term: "acrid",
    },
    {
      definition:
        "stinging; caustic; bitter in words or manner; N. acrimony: bitter ill-natured animosity in speech or behavior",
      term: "acrimonious",
    },
    {
      definition: "fear of heights",
      term: "acrophobia",
    },
    {
      definition: "calculating; pertaining to insurance statistics",
      term: "actuarial",
    },
    {
      definition: "someone who advises insurance companies",
      term: "actuary",
    },
    {
      definition: "motivate; activate; cause to act",
      term: "actuate",
    },
    {
      definition: "sharpness (of mind or senses of sight or hearing)",
      term: "acuity",
    },
    {
      definition:
        "mental keenness; sharpness of judgment; ability to judge quickly and well; Ex. business acumen",
      term: "acumen",
    },
    {
      definition:
        "(of the senses) sharp; quickly perceptive; keen; penetrating; brief and severe; Ex. acute sense of smell/analysis/pain",
      term: "acute",
    },
    {
      definition: "wise saying; proverb",
      term: "adage",
    },
    {
      definition: "hard; inflexible",
      term: "adamant",
    },
    {
      definition:
        "make or become suitable for a specific use; alter; modify; adjust; N. adaptation: act of adapting; composition recast into a new form; Ex. The play is an adaption of a short novel.",
      term: "adapt",
    },
    {
      definition:
        "addition; appendix to book; something that is added (as at the end of a speech or book)",
      term: "addendum",
    },
    {
      definition: "compulsive habitual need",
      term: "addiction",
    },
    {
      definition:
        "make or become confused; muddle; drive crazy; become rotten (egg)",
      term: "addle",
    },
    {
      definition:
        "direct a speech to; speak to; deal with or discuss; direct one's efforts or attention to; make with a destination; N: formal speech",
      term: "address",
    },
    {
      definition: "expert at; very skilled",
      term: "adept",
    },
    {
      definition:
        "stick fast; be a devotd follower; N. adhesion: adhering; devotion; loyality",
      term: "adhere",
    },
    {
      definition: "supporter; follower",
      term: "adherent",
    },
    {
      definition: "adjoining; neighboring; close by",
      term: "adjacent",
    },
    {
      definition: "be next to",
      term: "adjoin",
    },
    {
      definition: "suspend until a later time; move from one place to another",
      term: "adjourn",
    },
    {
      definition: "something attached to but holding an inferior position",
      term: "adjunct",
    },
    {
      definition:
        "solemn urging; V. adjure: entreat earnestly; enjoin solemnly",
      term: "adjuration",
    },
    {
      definition: "staff officer assisting the commander; assistant",
      term: "adjutant",
    },
    {
      definition: "warn or speak to with gentle disapproval; reprove",
      term: "admonish",
    },
    {
      definition: "love deeply and respect highly",
      term: "adore",
    },
    {
      definition: "decorate",
      term: "adorn",
    },
    {
      definition: "skillful (in using mind or hand)",
      term: "adroit",
    },
    {
      definition:
        "flattery; admiration that is more than is necessary or deserved",
      term: "adulation",
    },
    {
      definition:
        "make impure or of poorer quality by adding inferior or tainted(contaminated) substances",
      term: "adulterate",
    },
    {
      definition: "arrival",
      term: "advent",
    },
    {
      definition: "accidental; casual; happening by chance",
      term: "adventitious",
    },
    {
      definition: "opponent; enemy",
      term: "adversary",
    },
    {
      definition: "going against; opposing; unfavorable; hostile",
      term: "adverse",
    },
    {
      definition: "great hardship or affliction; misfortune; calamitous event",
      term: "adversity",
    },
    {
      definition: "refer",
      term: "advert",
    },
    {
      definition: "support; active pleading on behalf of someone or something",
      term: "advocacy",
    },
    {
      definition:
        "speak in favor of; support (an idea or plan); urge; plead for",
      term: "advocate",
    },
    {
      definition: "shield; protection; defense",
      term: "aegis",
    },
    {
      definition: "nest of a large bird of prey",
      term: "aerieaery,eyrie,eyry)",
    },
    {
      definition:
        "artistic; dealing with or capable of appreciating the beautiful (of a person or building); CF. aesthete; CF. aesthetics",
      term: "aesthetic",
    },
    {
      definition: "easily approachable; easy to talk to; warmly friendly",
      term: "affable",
    },
    {
      definition: "artificial; pretended",
      term: "affected",
    },
    {
      definition:
        "written statement made under oath (for use as proof in a court of law)",
      term: "affidavit",
    },
    {
      definition: "joining; associating with",
      term: "affiliation",
    },
    {
      definition:
        "feeling of kinship; similarity; Ex. strong affinity for her; Ex. many affinities between two languages",
      term: "affinity",
    },
    {
      definition:
        "positive assertion; confirmation; solemn pledge by one who refuses to take an oath; V. affirm; ADJ. affirmative; CF. affirmative action: positive discrimination",
      term: "affirmation",
    },
    {
      definition:
        "state of distress; trial; cause of distress or suffering; V. afflict: inflict grievous suffering on",
      term: "affliction",
    },
    {
      definition: "abundance; wealth",
      term: "affluence",
    },
    {
      definition:
        "insult; offense; intentional act of disrespect; V: insult or hurt the feelings of intentionally",
      term: "affront",
    },
    {
      definition: "life after death; later part of one's life",
      term: "afterlife",
    },
    {
      definition: "openmouthed",
      term: "agape",
    },
    {
      definition: "items of business at a meeting",
      term: "agenda",
    },
    {
      definition:
        "collection; heap; V. agglomerate: gather into a rounded mass; N. aggolmeate: jumbled mass; heap",
      term: "agglomeration",
    },
    {
      definition:
        "make greater; increase in power, wealth, rank, or honor; N. aggrandizement",
      term: "aggrandize",
    },
    {
      definition:
        "sum; total; ADJ. V: gather into a mass or whole; accumulate; add up to; Ex. aggregate 100 dollars",
      term: "aggregate",
    },
    {
      definition: "filled with great surprise or fear; horrified",
      term: "aghast",
    },
    {
      definition: "nimbleness; ability to move quickly",
      term: "agility",
    },
    {
      definition: "stir up; disturb",
      term: "agitate",
    },
    {
      definition:
        "one who is skeptical of the existence or knowability of a god or any ultimate reality",
      term: "agnostic",
    },
    {
      definition: "highly excited; intensely curious",
      term: "agog",
    },
    {
      definition: "pertaining to land or its cultivation; Ex. agrarian reform",
      term: "agrarian",
    },
    {
      definition: "of air; high in the air; lofty; immaterial; unreal",
      term: "airy",
    },
    {
      definition: "cheerful promptness without reluctance",
      term: "alacrity",
    },
    {
      definition: "medieval chemistry",
      term: "alchemy",
    },
    {
      definition: "nook; recess",
      term: "alcove",
    },
    {
      definition:
        "an assumed name esp. by a criminal (usually to mislead people); ADV. alias",
      term: "alias",
    },
    {
      definition:
        "make unfriendly or hostile; estrange; separate; change the ownership of",
      term: "alienate",
    },
    {
      definition: "supplying nourishment",
      term: "alimentary",
    },
    {
      definition: "payments made regularly to an ex-spouse after divorce",
      term: "alimony",
    },
    {
      definition: "calm; pacify",
      term: "allay",
    },
    {
      definition: "state without proof",
      term: "allege",
    },
    {
      definition: "loyalty",
      term: "allegiance",
    },
    {
      definition:
        "story, play, or picture in which characters are used as symbols; fable",
      term: "allegory",
    },
    {
      definition: "relieve (pain)",
      term: "alleviate",
    },
    {
      definition: "repetition of beginning sound in poetry",
      term: "alliteration",
    },
    {
      definition: "assign; set apart for a particular purpose",
      term: "allocate",
    },
    {
      definition:
        "mixture as of metals; something added that lowers in value or purity; V: mix; make less pure; lower in value or quality; spoil; CF. unalloyed: not in mixture with other maetals; pure; complete; unqualified; Ex. unalloyed happiness",
      term: "alloy",
    },
    {
      definition: "refer indirectly; N. allusion: indirect reference",
      term: "allude",
    },
    {
      definition: "entice; attract; tempt",
      term: "allure",
    },
    {
      definition: "pertaining to soil deposits left by running water",
      term: "alluvial",
    },
    {
      definition: "money or goods given to the poor",
      term: "alms",
    },
    {
      definition: "upward; high up in the air",
      term: "aloft",
    },
    {
      definition:
        "apart; not open in one's relationship with other people; reserved; ADV.",
      term: "aloof",
    },
    {
      definition: "noisy quarrel",
      term: "altercation",
    },
    {
      definition:
        "unselfishly generous; concerned for others; N. altiruism: unselfish concern for the welfare of others; unselfishness; OP. egoism",
      term: "altruistic",
    },
    {
      definition:
        "combination of different things; mixture of metals (containing mercury) used for filling holes in teeth",
      term: "amalgam",
    },
    {
      definition: "(of societies or groups) combine; unite in one body",
      term: "amalgamate",
    },
    {
      definition: "collect (gradually, in a very large amount)",
      term: "amass",
    },
    {
      definition: "female warrior",
      term: "amazon",
    },
    {
      definition: "capable of using either hand with equal ease",
      term: "ambidextrous",
    },
    {
      definition:
        "environment; atmosphere; Ex. restraurant with a pleasant ambience; ADJ. ambient: completely surrounding; Ex. ambient temperature",
      term: "ambience",
    },
    {
      definition:
        "unclear or doubtful in meaning; having more than one possible interpretation",
      term: "ambiguous",
    },
    {
      definition:
        "the state of having contradictory or conflicting emotional attitudes or opinions",
      term: "ambivalence",
    },
    {
      definition:
        "walking at an easy unhurried pace; V: walk slowly and aimlessly",
      term: "amble",
    },
    {
      definition: "food of the gods",
      term: "ambrosia",
    },
    {
      definition: "able to walk",
      term: "ambulatory",
    },
    {
      definition:
        "act of lying in wait to attack by surprise; sudden attack made from a concealed position; Ex. lie in ambush; V.",
      term: "ambush",
    },
    {
      definition: "improve",
      term: "ameliorate",
    },
    {
      definition:
        "obedient; compliant; readily managed; responsive; willing to be led; answerable or accountable legally; responsible; able to be tested by; Ex. amenable to sensible suggestions; Ex. He is very amenable; Ex. amenable to the usual tests",
      term: "amenable",
    },
    {
      definition: "correct; change ; generally for the better",
      term: "amend",
    },
    {
      definition:
        "convenient features that helps to make life pleasant; social courtesies",
      term: "amenities",
    },
    {
      definition: "agreeable; lovable; warmly friendly",
      term: "amiable",
    },
    {
      definition:
        "peaceful; politely friendly; not quarrelsome; Ex. amicable settlement",
      term: "amicable",
    },
    {
      definition: "wrong; faulty; Ex. something amiss; ADV.",
      term: "amiss",
    },
    {
      definition: "friendship; peaceful relationship as between nations",
      term: "amity",
    },
    {
      definition: "loss of memory",
      term: "amnesia",
    },
    {
      definition: "pardon (allowed by government to political criminals)",
      term: "amnesty",
    },
    {
      definition: "in a state of rage; Ex. run amok",
      term: "amokamuck)     ",
    },
    {
      definition: "nonmoral; having no understanding of right and wrong",
      term: "amoral",
    },
    {
      definition:
        "moved by sexual love; loving; of sexual love; Ex. amorous advances",
      term: "amorous",
    },
    {
      definition: "formless; lacking shape or definition",
      term: "amorphous",
    },
    {
      definition: "able to live both on land and in water; N.",
      term: "amphibian",
    },
    {
      definition: "oval building with tiers of seats; CF. arena",
      term: "amphitheater",
    },
    {
      definition:
        "enough; abundant; spacious; large in size; Ex. ample opportunity/garden; N. amplitude: quality of being ample; abundance; largeness of space",
      term: "ample",
    },
    {
      definition:
        "increase in size or effect; expand; broaden or clarify by expanding; intensify; make stronger; Ex. amplify one's remarks with a graph",
      term: "amplify",
    },
    {
      definition: "cut off part of body; prune (a limb)",
      term: "amputate",
    },
    {
      definition:
        "charm; talisman; an object worn believed to protect against evil, bad luck",
      term: "amulet",
    },
    {
      definition:
        "an error involving time in a story; something or someone misplaced in time; ADJ. anachronistic",
      term: "anachronism",
    },
    {
      definition: "condition of being unable to feel pain",
      term: "analgesia",
    },
    {
      definition: "causing insensitivity to pain; N.",
      term: "analgesic",
    },
    {
      definition: "comparable; similar",
      term: "analogous",
    },
    {
      definition: "similarity; parallelism; comparing two similar things",
      term: "analogy",
    },
    {
      definition:
        "person who seeks to overturn the established government; advocate of abolishing authority",
      term: "anarchist",
    },
    {
      definition: "absence of governing body; state of disorder",
      term: "anarchy",
    },
    {
      definition:
        "solemn curse; someone or something regarded as a curse; V. anathematize",
      term: "anathema",
    },
    {
      definition: "family descent; ADJ. ancestral",
      term: "ancestry",
    },
    {
      definition: "secure or fasten firmly; be fixed in place; N. anchorage",
      term: "anchor",
    },
    {
      definition: "serving as an aid or accessory; auxiliary; N.",
      term: "ancillary",
    },
    {
      definition: "short story of an amusing or interesting event",
      term: "anecdote",
    },
    {
      definition: "condition in which blood lacks red corpuscles; ADJ. anemic",
      term: "anemia",
    },
    {
      definition:
        "substance that removes sensation with or without loss of consciousness; N. anesthesia",
      term: "anesthetic",
    },
    {
      definition: "acute pain; extreme suffering",
      term: "anguish",
    },
    {
      definition:
        "sharp-cornered; having an angle; not rounded (body); bony; lean; gaunt; stiff in manner",
      term: "angular",
    },
    {
      definition:
        "critical remark; V. animadvert: comment critically with disapproval",
      term: "animadversion",
    },
    {
      definition: "lively; spirited",
      term: "animated",
    },
    {
      definition: "active enmity",
      term: "animosity",
    },
    {
      definition:
        "hostile feeling or intent; animosity; hostility; disposition",
      term: "animus",
    },
    {
      definition: "records arranged in yearly parts; history",
      term: "annals",
    },
    {
      definition:
        "reduce brittleness and improve toughness by heating and cooling (metal or glass)",
      term: "anneal",
    },
    {
      definition:
        "attach; add to a large thing; take possession of; incorporate (territory) into a larger existing political unit (by force); N: building added to a large one",
      term: "annex",
    },
    {
      definition: "destroy",
      term: "annihilate",
    },
    {
      definition: "comment; make explanatory notes",
      term: "annotate",
    },
    {
      definition: "yearly allowance",
      term: "annuity",
    },
    {
      definition: "make void",
      term: "annul",
    },
    {
      definition:
        "drug that relieves pain or trouble;opiate; ADJ. Ex. anodyne statement",
      term: "anodyne",
    },
    {
      definition: "consecrate; put oil on (in a religious ceremony)",
      term: "anoint",
    },
    {
      definition: "abnormal; irregular",
      term: "anomalous",
    },
    {
      definition: "irregularity",
      term: "anomaly",
    },
    {
      definition: "state of being nameless; anonymousness; ADJ. anonymous",
      term: "anonymity",
    },
    {
      definition:
        "hostility; active opposition; V. antagonize: cause to become an enemy; N. antagonist: person who is opposed to another; opponent; adversary; principal character in oppostion to the protagonist",
      term: "antagonism",
    },
    {
      definition: "precede",
      term: "antecede",
    },
    {
      definition:
        "preceding events that influence what comes later; ancestors or early background",
      term: "antecedents",
    },
    {
      definition: "antiquated; extremely ancient",
      term: "antediluvian",
    },
    {
      definition: "song of praise or patriotism; Ex. national anthem",
      term: "anthem",
    },
    {
      definition: "book of literary selections by various authors; CF. omnibus",
      term: "anthology",
    },
    {
      definition: "manlike; resembling a human being; N.",
      term: "anthropoid",
    },
    {
      definition: "student of the history and science of humankind",
      term: "anthropologist",
    },
    {
      definition: "having human form or characteristics",
      term: "anthropomorphic",
    },
    {
      definition:
        "letdown in thought or emotion; something unexciting, ordinary, or disappointing coming after something important or exciting",
      term: "anticlimax",
    },
    {
      definition:
        "remedy to counteract a poison or disease; Ex. antidote to the economic troubles",
      term: "antidote",
    },
    {
      definition: "aversion; dislike or opposition",
      term: "antipathy",
    },
    {
      definition: "obsolete; old-fashioned; outdated",
      term: "antiquated",
    },
    {
      definition:
        "made in an earlier period and usu. valuable; N: object that was made in an earlier period and that is rare or valuable",
      term: "antique",
    },
    {
      definition: "quality of being very old; ancient times;",
      term: "antiquity",
    },
    {
      definition: "substance that prevents infection in a wound; ADJ.",
      term: "antiseptic",
    },
    {
      definition:
        "contrast; direct opposite of or to; ADJ. antithetic or antithetical",
      term: "antithesis",
    },
    {
      definition: "bony growth on the head of a deer",
      term: "antler",
    },
    {
      definition: "iron block used in hammering out metals",
      term: "anvil",
    },
    {
      definition:
        "lack of caring; indifference; lack of concern or interest in important matters; Ex. He was sunk in apathy after his failure; ADJ. apathetic",
      term: "apathy",
    },
    {
      definition: "imitate or mimic (a person's behavior or manner)",
      term: "ape",
    },
    {
      definition:
        "opening; hole; adjustable opening in a camera that limits the amount of light",
      term: "aperture",
    },
    {
      definition: "tip; summit; climax; highest point",
      term: "apex",
    },
    {
      definition: "loss of speech due to injury or illness",
      term: "aphasia",
    },
    {
      definition: "pithy maxim or saying; ADJ. aphoristic",
      term: "aphorism",
    },
    {
      definition: "person who keeps bees",
      term: "apiarist",
    },
    {
      definition: "a place where bees are kept",
      term: "apiary",
    },
    {
      definition: "bee-keeping",
      term: "apiculture",
    },
    {
      definition:
        "poise; composure in difficult situations; assurance; self-confidence",
      term: "aplomb",
    },
    {
      definition:
        "prophetic; pertaining to revelations especially of disaster; N. apocalypse",
      term: "apocalyptic",
    },
    {
      definition: "(of a story) widely believed but untrue",
      term: "apocryphal",
    },
    {
      definition:
        "highest point; the point farthest from the earth; OP. perigee",
      term: "apogee",
    },
    {
      definition: "having an aversion or lack of concern for political affairs",
      term: "apolitical",
    },
    {
      definition:
        "one who writes in defense of a cause or institution; N. apologia",
      term: "apologist",
    },
    {
      definition:
        "stroke; loss of consciousness caused by too much blood in the brain",
      term: "apoplexy",
    },
    {
      definition:
        "one who abandons his religious faith or political beliefs; N. apostasy",
      term: "apostate",
    },
    {
      definition: "druggist; pharmacist",
      term: "apothecary",
    },
    {
      definition: "pithy, compact saying",
      term: "apothegmapophthegm)",
    },
    {
      definition: "elevation to godhood; an ideal example of something",
      term: "apotheosis",
    },
    {
      definition: "dismay; shock deeply",
      term: "appall",
    },
    {
      definition:
        "evident; easily seen or understood; appearing as such; Ex. apparent improvement",
      term: "apparent",
    },
    {
      definition: "ghost; phantom",
      term: "apparition",
    },
    {
      definition: "pacify or soothe; Ex. appease a crying baby; N. appeasement",
      term: "appease",
    },
    {
      definition: "name; title",
      term: "appellation",
    },
    {
      definition: "attach",
      term: "append",
    },
    {
      definition: "diligent attention; diligence; V. apply oneself",
      term: "application",
    },
    {
      definition: "appropriate; fitting",
      term: "apposite",
    },
    {
      definition: "estimate value of; N. appraisal",
      term: "appraise",
    },
    {
      definition:
        "be thankful for; increase in worth; be thoroughly conscious of; ADJ. appreciable: enough to be felt; Ex. appreciable difference",
      term: "appreciate",
    },
    {
      definition: "arrest (a criminal); dread; perceive; N. apprehension",
      term: "apprehend",
    },
    {
      definition: "fearful; discerning",
      term: "apprehensive",
    },
    {
      definition: "inform",
      term: "apprise",
    },
    {
      definition: "approval",
      term: "approbation",
    },
    {
      definition:
        "acquire; take possession of for one's own use without permission; set aside for a particular purpose; allocate; CF. misappropriate",
      term: "appropriate",
    },
    {
      definition:
        "subordinate possessions; something added to a more important thing",
      term: "appurtenances",
    },
    {
      definition:
        "with reference to; regarding; Ex. remarks apropos (of) the present situation; ADJ. ADV.",
      term: "apropos",
    },
    {
      definition: "fitness; talent",
      term: "aptitude",
    },
    {
      definition: "curved; hooked; of or like an eagle; Ex. aquiline nose",
      term: "aquiline",
    },
    {
      definition: "fit for growing crops; Ex. arable land",
      term: "arable",
    },
    {
      definition:
        "person with power to decide a matter in dispute; judge who is in a position ot make influential judgments; Ex. supreme arbiter of fashion in beachware",
      term: "arbiter",
    },
    {
      definition:
        "unreasonable or capricious; random; tyrannical; Ex. arbitrary ruler",
      term: "arbitrary",
    },
    {
      definition: "act as judge (at the request of both sides)",
      term: "arbitrate",
    },
    {
      definition: "of or living in trees",
      term: "arboreal",
    },
    {
      definition:
        "place where different trees and shrubs are studied and exhibited",
      term: "arboretum",
    },
    {
      definition: "a covered passageway usually lined with shops",
      term: "arcade",
    },
    {
      definition:
        "esoteric; secret; mysterious; known only to the initiated; Ex. arcane ritual; Ex. arcane process closed to the uninitiated listener",
      term: "arcane",
    },
    {
      definition: "chief; first; Ex. archbishop",
      term: "arch",
    },
    {
      definition: "study of artifacts and relics of early mankind",
      term: "archaeology",
    },
    {
      definition: "antiquated; no longer used; belonging to the past; N.",
      term: "archaic",
    },
    {
      definition: "prototype; primitive pattern",
      term: "archetype",
    },
    {
      definition: "group of closely located islands",
      term: "archipelago",
    },
    {
      definition: "public records; place where public records are kept",
      term: "archives",
    },
    {
      definition: "heat; passion; zeal; ADJ. ardent",
      term: "ardor",
    },
    {
      definition: "hard; strenuous; Ex. arduous work",
      term: "arduous",
    },
    {
      definition: "slang; speech spoken by only a small group of people",
      term: "argot",
    },
    {
      definition:
        "operatic solo; a song sung by one person in an opera or oratorio",
      term: "aria",
    },
    {
      definition: "(of land) dry; barren; unproductive",
      term: "arid",
    },
    {
      definition:
        "hereditary nobility; privileged class; government by nobility; N. aristocrat",
      term: "aristocracy",
    },
    {
      definition: "fleet of warships",
      term: "armada",
    },
    {
      definition:
        "fragrant; having a sweet smell; N. aroma: strong pleasant smell",
      term: "aromatic",
    },
    {
      definition: "charge in court; indict",
      term: "arraign",
    },
    {
      definition:
        "marshal; draw up in order; arrange in order; clothe splendidly; adorn; N: fine clothes; ordered group; Ex. in battle array",
      term: "array",
    },
    {
      definition:
        "being in debt; money that should have been paid; work that should have been done",
      term: "arrears",
    },
    {
      definition: "lacking rhythm or regularity; N. arrhythmia",
      term: "arrhythmic",
    },
    {
      definition:
        "pride; haughtiness; ADJ. arrogant: unpleasantly self-important (with a strong confidence in one's own importance and a lack of respect for other people)",
      term: "arrogance",
    },
    {
      definition: "gully; narrow channel formed by rainwater",
      term: "arroyo",
    },
    {
      definition: "storage place for military equipment",
      term: "arsenal",
    },
    {
      definition: "blood-vessel; CF. vein",
      term: "artery",
    },
    {
      definition: "exhibiting art or skill; deceitful; cunning; CF. artifice",
      term: "artful",
    },
    {
      definition:
        "effective; distinct; expressing ideas clearly; having clear sounds; having joints; Ex. articulate speech; V: express thoughts and feeling clearly; pronounce clearly; unite by joints",
      term: "articulate",
    },
    {
      definition:
        "object made by human beings, either hand-made or mass-produced",
      term: "artifacts",
    },
    {
      definition: "deception; trickery",
      term: "artifice",
    },
    {
      definition: "a manually skilled worker",
      term: "artisan",
    },
    {
      definition: "without guile; open and honest",
      term: "artless",
    },
    {
      definition:
        "controlling influence; position of controlling influence; CF. in the ascendant",
      term: "ascendancy",
    },
    {
      definition: "find out for certain; make certain",
      term: "ascertain",
    },
    {
      definition:
        "practicing self-denial; avoiding physical pleasures and comforts; austere; Ex. ascetic life of Buddhist monks; N. asceticism",
      term: "ascetic",
    },
    {
      definition: "refer; attribute; assign",
      term: "ascribe",
    },
    {
      definition: "preventing infection; having a cleansing effect",
      term: "aseptic",
    },
    {
      definition: "ash-colored; deadly pale",
      term: "ashen",
    },
    {
      definition: "stupid; Ex. asinine remarks",
      term: "asinine",
    },
    {
      definition:
        "with a sideways or indirect look (with disapproval or distruct); Ex. look askance at",
      term: "askance",
    },
    {
      definition: "crookedly; slanted; at an angle",
      term: "askew",
    },
    {
      definition:
        "sharpness; roughness; severity (of temper or weather); Ex. asperities of a Russian winter",
      term: "asperity",
    },
    {
      definition: "slanderous remark; Ex. cast aspersions on",
      term: "aspersion",
    },
    {
      definition: "seeker after position or status",
      term: "aspirant",
    },
    {
      definition:
        "seek to attain (position or status); long for; Ex. aspire to become president; Ex. aspire to/after the leadership",
      term: "aspire",
    },
    {
      definition: "assault",
      term: "assail",
    },
    {
      definition:
        "analyze (to discover what materials are present); evaluate (soil or ore)",
      term: "assay",
    },
    {
      definition: "agree; accept; N. assessment",
      term: "assent",
    },
    {
      definition:
        "state strongly or positively; demand recognition of (rights, claims, etc.); make a claim to (by forceful action); Ex. assert one's independence",
      term: "assert",
    },
    {
      definition: "diligent",
      term: "assiduous",
    },
    {
      definition:
        "absorb; take (food) into the body and digest it; understand (knowledge) completely and be able to use properly; cause to become homogeneous (the people of a country or race in the wasy of behaving or thinking)",
      term: "assimilate",
    },
    {
      definition:
        "mak less severe; ease or lessen (pain); satisfy (hunger); soothe (anger)",
      term: "assuage",
    },
    {
      definition:
        "something taken for granted; the taking over or taking possession of; Ex. her assumption of power; V. assume",
      term: "assumption",
    },
    {
      definition:
        "firm statement that something is certainly true; promise or pledge; certainty; confidence in one's own ability; self-confidence; Ex. In spite of all his assurances, he did not come back; Ex. assurance of his loyalty; Ex. The teacher lacked assuranc",
      term: "assurance",
    },
    {
      definition: "small planet",
      term: "asteroid",
    },
    {
      definition: "eye defect which prevents proper focus; OP. stigmatism",
      term: "astigmatism",
    },
    {
      definition: "relating to the stars",
      term: "astral",
    },
    {
      definition:
        "binding; causing contraction (stopping bleeding); harsh or severe; stringent; Ex. astringent criticism",
      term: "astringent",
    },
    {
      definition: "enormously large or extensive",
      term: "astronomical",
    },
    {
      definition:
        "wise; shrewd; keen; seeing quickly something that is to one's advantage",
      term: "astute",
    },
    {
      definition: "into parts; apart; V. sunder",
      term: "asunder",
    },
    {
      definition:
        "place of refuge or shelter; protection (religious or political)",
      term: "asylum",
    },
    {
      definition: "not identical on both sides of a dividing central line",
      term: "asymmetric",
    },
    {
      definition:
        "resemblance to remote ancestors rather than to parents; reversion to an earlier type; throwback; ADJ. atavistic",
      term: "atavism",
    },
    {
      definition: "denying the existence of God; N. atheism",
      term: "atheistic",
    },
    {
      definition: "make amends for; pay for; Ex. atone for",
      term: "atone",
    },
    {
      definition: "brutal deed; ADJ. atrocious",
      term: "atrocity",
    },
    {
      definition:
        "wasting away; V: weaken and lose flesh and muscle (through lack of blood or lack of use)",
      term: "atrophy",
    },
    {
      definition:
        "alert and watchful; listening carefully; paying attention; considerate; thoughtful; politely helpful; Ex. attentive audience; Ex. He was attentive to the old lady; N. attentions: act of courtesy and consideration",
      term: "attentive",
    },
    {
      definition: "make thin; weaken",
      term: "attenuate",
    },
    {
      definition: "testify; bear witness",
      term: "attest",
    },
    {
      definition: "clothe; N: clothing; array; apparel",
      term: "attire",
    },
    {
      definition: "essential quality; V: ascribe; explain",
      term: "attribute",
    },
    {
      definition:
        "rubbing away by friction; gradual decrease in numbers or strength; reduction in the work force without firing employees; wearing away of opposition by means of harassment; Ex. a war of attrition",
      term: "attrition",
    },
    {
      definition: "not normal; not typical",
      term: "atypical",
    },
    {
      definition: "daring; bold; N. audacity",
      term: "audacious",
    },
    {
      definition:
        "examination of accounts of a business; official examination; V.",
      term: "audit",
    },
    {
      definition: "increase; add to",
      term: "augment",
    },
    {
      definition:
        "omen; prophecy; sign of coming events; V. augur: predict; foretell; be a sign of (something in future)",
      term: "augury",
    },
    {
      definition: "impressive; majestic",
      term: "august",
    },
    {
      definition: "sun's corona; halo; bright circle of light",
      term: "aureole",
    },
    {
      definition: "pertaining to the aurora borealis; CF. aurora australis",
      term: "auroral",
    },
    {
      definition:
        "favoring success; giving signs of future success; Cf. auspices",
      term: "auspicious",
    },
    {
      definition:
        "forbiddingly stern; ascetic; without comfort or enjoyment; severely simple and unornamented; Ex. a monk's austere life; Ex. austere grandeur of the cathedral; N. austerity",
      term: "austere",
    },
    {
      definition: "prove genuine",
      term: "authenticate",
    },
    {
      definition:
        "subordinating the individual to the state; completely dominating another's will; Ex. authoritarian regime/father",
      term: "authoritarian",
    },
    {
      definition:
        "having the weight of authority; regarded as providing knowledge that can be trusted; reliable; peremptory and dictatorial; Ex. authoritative dictionary/manner; CF. definitive",
      term: "authoritative",
    },
    {
      definition:
        "having absolute unchecked power; dictatorial; N. autocrat, autocracy",
      term: "autocratic",
    },
    {
      definition:
        "mechanism that imitates actions of humans; machine that works by itself",
      term: "automaton",
    },
    {
      definition: "self-governing; N. autonomy",
      term: "autonomous",
    },
    {
      definition: "examination of a dead body; postmortem; V.",
      term: "autopsy",
    },
    {
      definition:
        "offering or providing help; additional or subsidiary; N: helper; assistant",
      term: "auxiliary",
    },
    {
      definition: "great mass of falling snow and ice",
      term: "avalanche",
    },
    {
      definition:
        "group of artists whose work is based on the newest ideas and methods; CF. vanguard",
      term: "avantgarde",
    },
    {
      definition: "greediness for wealth",
      term: "avarice",
    },
    {
      definition:
        "take vengence for something or on behalf of someone; Ex. They avenged his death by burning the village; Ex. He swore to avenge his brother; Ex. They avenged themselves on their enemy.",
      term: "avenge",
    },
    {
      definition: "state confidently; declare as true",
      term: "aver",
    },
    {
      definition:
        "reluctant; disinclined; not liking or opposed; Ex. averse to cats/doing the house work",
      term: "averse",
    },
    {
      definition: "firm dislike",
      term: "aversion",
    },
    {
      definition:
        "prevent; avoid; turn away (eyes or thought); Ex. An accident was averted by his quick thinking; Ex. She averted her eyes from the terrible sight.",
      term: "avert",
    },
    {
      definition: "enclosure for birds; large cage",
      term: "aviary",
    },
    {
      definition: "greedy; extremely eager for; Ex. avid learner; N. avidity",
      term: "avid",
    },
    {
      definition: "secondary or minor occupation",
      term: "avocation",
    },
    {
      definition: "declare openly; N. avowal",
      term: "avow",
    },
    {
      definition: "of or like an uncle",
      term: "avuncular",
    },
    {
      definition:
        "solemn wonder; feeling of respect mixed with wonder and fear; V: fill with awe; ADJ. awesome",
      term: "awe",
    },
    {
      definition: "terrible; very bad",
      term: "awful",
    },
    {
      definition: "pointed tool used for piercing",
      term: "awl",
    },
    {
      definition: "distorted; crooked; bent; Ex. Our plans have gone awry.",
      term: "awry",
    },
    {
      definition: "self-evident truth requiring no proof",
      term: "axiom",
    },
    {
      definition: "sky blue",
      term: "azure",
    },
    {
      definition:
        "chatter idly or foolishly; make continuous sounds like \n                        water running gently over rounded stone; N.",
      term: "babble",
    },
    {
      definition: "noisy party with a lot of drinking",
      term: "bacchanal",
    },
    {
      definition: "the ancient Roman festival in honor of Bacchus",
      term: "bacchanalia",
    },
    {
      definition: "drunken",
      term: "bacchanalian",
    },
    {
      definition: "revert (to bad habits); N. reverter",
      term: "backslide",
    },
    {
      definition:
        "and forwards; Ex. reciprocate his invitation by inviting \n                        him; N. reciprocity: reciprocal relationship; mutual interchange \n                        of advantages between two groups; Ex. reciprocity in trading \n                        rights",
      term: "backwards",
    },
    {
      definition:
        "pester; annoy continually with demands; persuade by \n                        asking again and again; Ex. The children badgered me into \n                        taking them into the cinema; N: a kind of mountain animal",
      term: "badger",
    },
    {
      definition: "teasing conversation; banter; joking talk",
      term: "badinage",
    },
    {
      definition: "frustrate; perplex",
      term: "baffle",
    },
    {
      definition:
        "harass; tease; torment; Ex. badger baiting; N: food \n                        or other lure used to catch fish or trap animals",
      term: "bait",
    },
    {
      definition:
        "evil; malignant in intent or effect; deadly; having \n                        a malign influence; portending evil; ominous; threatening; \n                        Ex. baleful look",
      term: "baleful",
    },
    {
      definition:
        "stop short, as if faced with an obstacle, and refuse \n                        to continue; foil; stop or get in the way of; frustrate",
      term: "balk",
    },
    {
      definition:
        "heavy substance used to add stability or weight; V. \n                        supply with ballast",
      term: "ballast",
    },
    {
      definition:
        "something that relieves pain; oily liquid with a pleasant \n                        smell from trees",
      term: "balm",
    },
    {
      definition: "soft and mild (of air); fragrant",
      term: "balmy",
    },
    {
      definition:
        "hackneyed; commonplace; trite; lacking originality; \n                        clich\\'ed",
      term: "banal",
    },
    {
      definition:
        "discuss lightly or glibly; discuss in a frivolous manner; \n                        exchange (words) heatedly; quarrel; Ex. bandy words with",
      term: "bandy",
    },
    {
      definition: "posion; cause of ruin; ADJ. baneful: harmful; poisonous",
      term: "bane",
    },
    {
      definition:
        "heap; piled-up mass; embankment; lateral tilting (as \n                        of an aircraft in turning); V: pile up; protect with a \n                        bank; tilt in turning",
      term: "bank",
    },
    {
      definition: "joking talk; good-naturedly ridiculing; N.V. banter",
      term: "bantering",
    },
    {
      definition:
        "railing in a courtroom; legal profession; vertical \n                        line dividing a staff into equal measures; Ex. prisoner \n                        at the bar; V: shut in or out with bars; forbid; exclude; \n                        CF. barrister",
      term: "bar",
    },
    {
      definition:
        "sharp projection from fishhook, arrow, or other object; \n                        openly cutting remark",
      term: "barb",
    },
    {
      definition: "poet",
      term: "bard",
    },
    {
      definition:
        "shameless and noticeable; blatant; bold; unconcealed; \n                        having no covering on the face; Ex. barefaced lie",
      term: "barefaced",
    },
    {
      definition:
        "agreement between two groups or people; something for \n                        sale at a price advantageous to the buyer; V: negotiate; \n                        trade; Ex. bargaining power",
      term: "bargain",
    },
    {
      definition: "highly ornate",
      term: "baroque",
    },
    {
      definition:
        "barrier laid down by artillery fire; overwhelming profusion; \n                        large number of questions or statements; Ex. a barrage \n                        of criticism",
      term: "barrage",
    },
    {
      definition:
        "counselor-at-law or lawyer in the higher court of law; \n                        CF. bar",
      term: "barrister",
    },
    {
      definition:
        "trader; V. barter: trade; exchange good for other goods \n                        rather than money",
      term: "barterer",
    },
    {
      definition:
        "contemptible; morally bad; inferior in value or quality; \n                        Ex. base motives/conduct; Ex. base metal such as iron",
      term: "base",
    },
    {
      definition: "luxuriate; take pleasure in warmth",
      term: "bask",
    },
    {
      definition: "illegitimate child",
      term: "bastard",
    },
    {
      definition:
        "stronghold; something seen as a source of protection; \n                        Ex. the last bastion of male chauvinism",
      term: "bastion",
    },
    {
      definition:
        "let down; lessen the force of; moderate; restrain; \n                        Ex. with bated breath; CF. abate",
      term: "bate",
    },
    {
      definition: "army unit made up of four or more companies",
      term: "battalion",
    },
    {
      definition: "trinket; cheap jewel; trifle",
      term: "bauble",
    },
    {
      definition:
        "indecent; obscene; about sex in a rude funny way; CF. \n                        bawd",
      term: "bawdy",
    },
    {
      definition: "deportment; connection",
      term: "bearing",
    },
    {
      definition: "giving or showing bliss; blissful",
      term: "beatific",
    },
    {
      definition: "blessedness; state of great happiness",
      term: "beatitude",
    },
    {
      definition: "dress with vulgar finery",
      term: "bedizen",
    },
    {
      definition: "wet thoroughly; ADJ. bedraggled: draggled",
      term: "bedraggle",
    },
    {
      definition: "direct quick route",
      term: "beeline",
    },
    {
      definition: "confuse thoroughly",
      term: "befuddle",
    },
    {
      definition: "father; become the father of; produce; give rise to",
      term: "beget",
    },
    {
      definition:
        "envy; give or allow unwillingly; grudge; Ex. We shouldn't \n                        begrudge him his success.",
      term: "begrudge",
    },
    {
      definition:
        "deceive; mislead or delude; cheat; pass time pleasantly; \n                        charm or attract; Ex. beguiling smile",
      term: "beguile",
    },
    {
      definition: "huge creature; something of monstrous size or power",
      term: "behemoth",
    },
    {
      definition:
        "obligated; indebted; owing thanks; obliged or indebted \n                        from gratitude",
      term: "beholden",
    },
    {
      definition:
        "be suited to; be incumbent upon; be right and necessary; \n                        Ex. It behooves one to do.",
      term: "behoovebehove) ",
    },
    {
      definition:
        "harp on; dwell on tediously; explain or go over excessively \n                        or to a ridiculous degree; assail verbally; beat severely; \n                        attack physically",
      term: "belabor",
    },
    {
      definition: "delayed",
      term: "belated",
    },
    {
      definition: "besiege or attack (with an army); harass; beset",
      term: "beleaguer",
    },
    {
      definition:
        "contradict; give a false impression; disguise; Ex. \n                        The poor sales belied our high hopes; Ex. Her smile belies \n                        her true feeling of displeasure.",
      term: "belie",
    },
    {
      definition: "disparage; depreciate",
      term: "belittle",
    },
    {
      definition: "warlike",
      term: "bellicose",
    },
    {
      definition: "quarrelsome",
      term: "belligerent",
    },
    {
      definition: "lament; moan for; express sorrow or disapproval of",
      term: "bemoan",
    },
    {
      definition: "confused; lost in thought; preoccupied",
      term: "bemused",
    },
    {
      definition: "blessing",
      term: "benediction",
    },
    {
      definition:
        "gift giver; patron; person who does good or who gives \n                        money for a good purpose",
      term: "benefactor",
    },
    {
      definition: "kindly; doing good",
      term: "beneficent",
    },
    {
      definition: "helpful; useful; advantageous",
      term: "beneficial",
    },
    {
      definition:
        "person entitled to benefits or proceeds of an insurance \n                        policy or will",
      term: "beneficiary",
    },
    {
      definition:
        "advantage; anything that brings helpl, advantage, or \n                        profit; money provided by the government to the people; \n                        fund-raising public entertainment; Ex. unemployment benefit; \n                        V: receive benefits; be beneficial to; give benefits",
      term: "benefit",
    },
    {
      definition: "generous; charitable; having a wish to do good",
      term: "benevolent",
    },
    {
      definition:
        "kindly; favorable; not malignant (disease); Ex. benign \n                        tumor",
      term: "benign",
    },
    {
      definition: "blessing",
      term: "benison",
    },
    {
      definition:
        "determined; Ex. bent on advancing in the business; \n                        N: natural talent or inclination",
      term: "bent",
    },
    {
      definition:
        "leave to someone by means of a will; hand down in his \n                        will; N. bequest",
      term: "bequeath",
    },
    {
      definition: "scold strongly",
      term: "berate",
    },
    {
      definition: "deprived of (someone beloved through death)",
      term: "bereaved",
    },
    {
      definition:
        "state of being deprived of something valuable or beloved; \n                        state of being bereaved or bereft",
      term: "bereavement",
    },
    {
      definition: "deprived of (something valuable); lacking",
      term: "bereft",
    },
    {
      definition: "mad with violent anger; frenzied; madly excited",
      term: "berserk",
    },
    {
      definition: "beg; plead with",
      term: "beseech",
    },
    {
      definition: "harass or trouble from all directions; hem in",
      term: "beset",
    },
    {
      definition:
        "surround with armed forces; harass (with requests); \n                        annoy continually",
      term: "besiege",
    },
    {
      definition: "soil; defile; make dirty",
      term: "besmirch",
    },
    {
      definition: "beastlike; brutal; inhuman; very cruel",
      term: "bestial",
    },
    {
      definition: "confer",
      term: "bestow",
    },
    {
      definition: "signify; indicate; be a sign of",
      term: "betoken",
    },
    {
      definition:
        "be unfaithful; reveal (unconsciously or unwillingly); \n                        Ex. Her trembling hands betray her anxiety.",
      term: "betray",
    },
    {
      definition: "become engaged to marry",
      term: "betroth",
    },
    {
      definition: "large group; Ex. a bevy of starlets",
      term: "bevy",
    },
    {
      definition: "be cautious (of)",
      term: "beware",
    },
    {
      definition: "cast a spell over; captivate completely",
      term: "bewitch",
    },
    {
      definition: "two-chambered as a legislative body",
      term: "bicameral",
    },
    {
      definition: "quarrel",
      term: "bicker",
    },
    {
      definition:
        "command; utter (a greeting); offer as a price; N: offer \n                        of a price; amount offered; earnest effort to gain something; \n                        Ex. bid for freedom",
      term: "bid",
    },
    {
      definition: "every two years",
      term: "biennial",
    },
    {
      definition: "divided into two branches; forked",
      term: "bifurcated",
    },
    {
      definition: "one who is intolerant (in matters of religion or politics)",
      term: "bigot",
    },
    {
      definition: "stubborn intolerance",
      term: "bigotry",
    },
    {
      definition:
        "suffering from indigestion; sick from having too much \n                        bile; irritable; easily irritated",
      term: "bilious",
    },
    {
      definition: "swindle; cheat",
      term: "bilk",
    },
    {
      definition:
        "large wave of water; a great swell or surge (of smoke); \n                        V: surge, swell, roll in billows",
      term: "billow",
    },
    {
      definition: "swelling out in waves; surging",
      term: "billowing",
    },
    {
      definition:
        "sharply painful to the body or mind; Ex. biting wind/remarks",
      term: "biting",
    },
    {
      definition:
        "having a sharp biting taste; 敬; causing sharp pain \n                        to the body or mind; filled with resentment, disappointment, \n                        or other unpleasant feelings; Ex. bitter wind/sorrow/tears",
      term: "bitter",
    },
    {
      definition: "temporary encampment; camp without tents; V.",
      term: "bivouac",
    },
    {
      definition:
        "fantastic; violently contrasting; noticeably odd; strikingly \n                        unconventional",
      term: "bizarre",
    },
    {
      definition:
        "vote against (an applicant); ostracize; N: negative \n                        vote",
      term: "blackball",
    },
    {
      definition: "bleach; whiten; make white or pale",
      term: "blanch",
    },
    {
      definition:
        "soothing or mild (food); agreeable; causing no trouble \n                        or offence",
      term: "bland",
    },
    {
      definition: "flattery",
      term: "blandishment",
    },
    {
      definition: "loud or harsh roar or screech; dazzling blaze of light",
      term: "blare",
    },
    {
      definition:
        "bored with pleasure or dissipation; uninterested or \n                        bored",
      term: "blase",
    },
    {
      definition:
        "irreverence; sacrilege; cursing; bad language about \n                        God or holy things; V. blasphem; ADJ. blasphemous; CF. \n                        sacrilege",
      term: "blasphemy",
    },
    {
      definition:
        "extremely (offensively) obvious; loudly offensive; \n                        Ex. blatant lie; N. blatancy",
      term: "blatant",
    },
    {
      definition:
        "cold or cheerless; frigid; unlikely to be favorable; \n                        depressing",
      term: "bleak",
    },
    {
      definition:
        "mar; spoil the beauty or perfection of; N: flaw or \n                        defect (that spoils perfection); Ex. blemishes in the \n                        crystal; CF. unblemished",
      term: "blemish",
    },
    {
      definition: "plant disease; V: infect with blight; ruin; destroy",
      term: "blight",
    },
    {
      definition: "suffering from a disease; destroyed",
      term: "blighted",
    },
    {
      definition: "complete happiness; ADJ. blissful",
      term: "bliss",
    },
    {
      definition: "gay; joyous",
      term: "blitheblithesome)",
    },
    {
      definition: "(unpleasantly) swollen or puffed as with water or air",
      term: "bloated",
    },
    {
      definition: "spot; blot; CF. blot+botch",
      term: "blotch",
    },
    {
      definition: "talkative boaster; braggart",
      term: "blowhard",
    },
    {
      definition: "club; heavy-headed weapon; V.",
      term: "bludgeon",
    },
    {
      definition: "gloomy; depressed",
      term: "blue",
    },
    {
      definition:
        "state of depression or melancholy; style of slow, mournful \n                        music (evolved from southern Black American songs)",
      term: "blues",
    },
    {
      definition:
        "pretense (of strength); deception; high cliff; ADJ: \n                        rough but good-natured",
      term: "bluff",
    },
    {
      definition: "error; stupid mistake",
      term: "blunder",
    },
    {
      definition:
        "having a dull edge; abrupt and frank in speech or manner; \n                        brusque; V: make or become blunt",
      term: "blunt",
    },
    {
      definition: "utter impulsively from nervousness or excitement",
      term: "blurt",
    },
    {
      definition:
        "become red in the face (from embarrassment or shame); \n                        become red or rosy; N.",
      term: "blush",
    },
    {
      definition:
        "blow in heavy gusts; threaten emptily; bully; speak \n                        in a noisy or bullying manner; CF. breeze, gust, gale",
      term: "bluster",
    },
    {
      definition: "foreshadow; portend",
      term: "bode",
    },
    {
      definition:
        "soft wet land; V: hinder or be hindered; Ex. bogged \n                        down in the mud",
      term: "bog",
    },
    {
      definition:
        "counterfeit; not authentic; intentionally false; Ex. \n                        bogus interview",
      term: "bogus",
    },
    {
      definition: "unconventional (in an artistic way)",
      term: "bohemian",
    },
    {
      definition: "violent; rough; noisy",
      term: "boisterous",
    },
    {
      definition: "support; reinforce",
      term: "bolster",
    },
    {
      definition:
        "door bar; fastening pin or screw; length of fabric; \n                        large roll of cloth; V: dash or dart off; fasten (a | \n                        door); gobble down",
      term: "bolt",
    },
    {
      definition: "attack (as with missiles or bombs); V. bombard",
      term: "bombardment",
    },
    {
      definition: "grandiloquent, pompous speech",
      term: "bombast",
    },
    {
      definition: "pompous; using inflated language",
      term: "bombastic",
    },
    {
      definition: "fond of books and reading",
      term: "bookish",
    },
    {
      definition: "blessing; benefit; something very helpful",
      term: "boon",
    },
    {
      definition: "rude, insensitive person",
      term: "boor",
    },
    {
      definition: "rude; insensitive",
      term: "boorish",
    },
    {
      definition:
        "lift by pushing up from below; increase; raise; N: \n                        push upward; increase",
      term: "boost",
    },
    {
      definition: "mismanage; blow",
      term: "botch",
    },
    {
      definition: "clear beef (or meat) soup",
      term: "bouillon",
    },
    {
      definition:
        "leap or spring; limit or confine; constitute the limit \n                        of; Ex. bounded by Canada; N: leap or jumping; boundary; \n                        ADJ: certain; having a duty to do something (legally or \n                        morally); confined by bonds; Ex. We are bound to be late; \n                        Ex. I am bound to",
      term: "bound",
    },
    {
      definition: "generous; graciously generous; showing bounty",
      term: "bountiful",
    },
    {
      definition:
        "middle class; selfishly materialistic; too interested \n                        in material possessions",
      term: "bourgeois",
    },
    {
      definition:
        "match; short period of great activity; Ex. wrestling \n                        bout; bout of drinking/flu",
      term: "bout",
    },
    {
      definition: "cowlike; placid and dull; slow-thinking; calm",
      term: "bovine",
    },
    {
      definition: "expurgate; CF. Thomas Bowdler",
      term: "bowdlerize",
    },
    {
      definition: "somewhat saline",
      term: "brackish",
    },
    {
      definition: "boast",
      term: "brag",
    },
    {
      definition: "boasting",
      term: "braggadocio",
    },
    {
      definition: "boaster; bragger",
      term: "braggart",
    },
    {
      definition:
        "plait; interweave strands or lengths of; make by weaving \n                        strands together; N: braided segment (as of hair)",
      term: "braid",
    },
    {
      definition:
        "trademark; mark burned on the hide of an animal; mark \n                        burned into the flesh of criminals; mark of disgrace; \n                        V: mark with a brand; give a lasting bad name; stigmatize; \n                        Ex. The press branded him a liar.",
      term: "brand",
    },
    {
      definition: "wave around (a weapon); flourish",
      term: "brandish",
    },
    {
      definition: "swagger; assumed air of defiance; false show of bravery",
      term: "bravado",
    },
    {
      definition: "face courageously; Ex. brave the storm",
      term: "brave",
    },
    {
      definition: "noisy quarrel",
      term: "brawl",
    },
    {
      definition: "human muscle; muscular strength; sturdiness",
      term: "brawn",
    },
    {
      definition: "muscular; having well-developed muscles",
      term: "brawny",
    },
    {
      definition:
        "insolent; without shame; bold; Ex. brazen lie; V: face \n                        with bold self-assurance or with unshamed confidence",
      term: "brazen",
    },
    {
      definition:
        "breaking of contract or duty; fissure or gap; opening; \n                        V.",
      term: "breach",
    },
    {
      definition: "width; extent",
      term: "breadth",
    },
    {
      definition:
        "produce young; rear; bring up; produce (an undesirable \n                        condition); N: kind or sort of animal or plant",
      term: "breed",
    },
    {
      definition: "conciseness; shortness of duration",
      term: "brevity",
    },
    {
      definition:
        "harness fitted about a horse's head (used to restrain); \n                        curb; check; V: put a bridle on; control or restrain; \n                        show anger",
      term: "bridle",
    },
    {
      definition:
        "uppermost edge of a cup; projecting rim (as on a hat); \n                        Ex. The glass was full to the brim; V: be full to the \n                        brim",
      term: "brim",
    },
    {
      definition: "tawny or grayish with streaks or spots (of animals)",
      term: "brindled",
    },
    {
      definition:
        "edge (at the top of a cliff); Ex. on the brink of the \n                        Grand Canyon",
      term: "brink",
    },
    {
      definition: "quick and active; marked by liveliness and vigor",
      term: "brisk",
    },
    {
      definition: "short stiff hair; V: (hair or fur) stand up stiffly",
      term: "bristle",
    },
    {
      definition: "rising like bristles; showing irritation",
      term: "bristling",
    },
    {
      definition:
        "hard but easily broken; difficult; unstable; Ex. brittle \n                        situation",
      term: "brittle",
    },
    {
      definition: "introduce as a subject; moot; open up",
      term: "broach",
    },
    {
      definition: "rich, figured(patterned) fabric",
      term: "brocade",
    },
    {
      definition: "pamphlet",
      term: "brochure",
    },
    {
      definition: "cook by direct heat; N.",
      term: "broil",
    },
    {
      definition: "platitude; chemical compound used to calm excitement",
      term: "bromide",
    },
    {
      definition: "ornamental clasp; pin",
      term: "brooch",
    },
    {
      definition:
        "sit on in order to hatch; think deeply or worry anxiously; \n                        N: the young of certain animals; group of young birds \n                        hatched at one time",
      term: "brood",
    },
    {
      definition:
        "tolerate; endure; Ex. brook no interference; N: small \n                        stream",
      term: "brook",
    },
    {
      definition: "bully; intimidate",
      term: "browbeat",
    },
    {
      definition: "graze; feed on growing grass; skim or glance at casually",
      term: "browse",
    },
    {
      definition: "injure without breaking the skin; N.",
      term: "bruise",
    },
    {
      definition:
        "main impact or shock (of an attack or blow); Ex. brunt \n                        of the argument",
      term: "brunt",
    },
    {
      definition:
        "blunt; abrupt; curt; not wanting to waste time being \n                        nice",
      term: "brusque",
    },
    {
      definition: "pirate",
      term: "buccaneer",
    },
    {
      definition: "rustic; pastoral",
      term: "bucolic",
    },
    {
      definition:
        "strike forcefully; slap; batter; knock out; N: table \n                        with food set out for people to server themselves; meal \n                        at which people help themselves to food that's been set",
      term: "buffet",
    },
    {
      definition: "stupid person; clown",
      term: "buffoon",
    },
    {
      definition: "clowning",
      term: "buffoonery",
    },
    {
      definition: "bugbear; object of baseless terror",
      term: "bugaboo",
    },
    {
      definition:
        "protruding part; swelling of a surface; Ex. The apple \n                        made a bulge in his pocket; V: swell outward; protrude",
      term: "bulge",
    },
    {
      definition:
        "size or volume (esp. when very large); main part; Ex. \n                        The bulk of the work has already been done; ADJ. bulky: \n                        having great size",
      term: "bulk",
    },
    {
      definition: "gold and silver in the form of bars",
      term: "bullion",
    },
    {
      definition: "one who is habitually cruel to weaker people; V.",
      term: "bully",
    },
    {
      definition:
        "strong wall built for defense; earthwork or other strong \n                        defense; person who defends",
      term: "bulwark",
    },
    {
      definition: "hit or knock against with force; N.",
      term: "bump",
    },
    {
      definition: "mismanage; blunder; botch; blow; spoil by clumsy behavior",
      term: "bungle",
    },
    {
      definition:
        "able to float; cheerful and optimistic; N. buoyancy; \n                        Ex. buoyancy of wood/water/American market",
      term: "buoyant",
    },
    {
      definition:
        "overregulated administrative system marked by red tape; \n                        ADJ. bureaucratic",
      term: "bureaucracy",
    },
    {
      definition:
        "grow rapidly; grow forth; send out buds; Ex. burgeoning \n                        computer industry; CF. bludgeon",
      term: "burgeon",
    },
    {
      definition: "give an imitation that ridicules; imitate mockingly",
      term: "burlesque",
    },
    {
      definition: "make shiny by rubbing; polish",
      term: "burnish",
    },
    {
      definition:
        "piece of sculpture showing a person's head, shoulders, \n                        and upper chest; V: break up; arrest; Ex. crimebuster",
      term: "bust",
    },
    {
      definition:
        "support; prop up; N. stationary structure to support \n                        wall; Ex. flying buttress",
      term: "buttress",
    },
    {
      definition: "full-bosomed; plump; jolly",
      term: "buxom",
    },
    {
      definition:
        "small group of persons secretly united to promote their \n                        own interests",
      term: "cabal",
    },
    {
      definition: "hiding place; V.",
      term: "cache",
    },
    {
      definition:
        "discordant; inharmonious; N. cacophony: unpleasant \n                        mixture of loud sounds",
      term: "cacophonous",
    },
    {
      definition: "corpse; dead human body",
      term: "cadaver",
    },
    {
      definition: "like a corpse; pale",
      term: "cadaverous",
    },
    {
      definition:
        "rhythmic rise and fall (of words or sounds); beat; \n                        regular beat of sound; rhythm",
      term: "cadence",
    },
    {
      definition: "student at a military school",
      term: "cadet",
    },
    {
      definition: "persuade by praise or false promise; coax; wheedle",
      term: "cajole",
    },
    {
      definition: "disaster; misery",
      term: "calamity",
    },
    {
      definition: "deliberately planned; likely",
      term: "calculated",
    },
    {
      definition: "large kettle",
      term: "caldroncauldron)",
    },
    {
      definition:
        "ability; quality; diameter of the inside of a round \n                        cylinder; Ex. work of very high caliber",
      term: "caliber",
    },
    {
      definition: "beautiful writing; excellent penmanship",
      term: "calligraphy",
    },
    {
      definition:
        "hardened; unfeeling; without sympathy for the sufferings \n                        of others; unkind",
      term: "callous",
    },
    {
      definition: "youthful; immature; inexperienced",
      term: "callow",
    },
    {
      definition: "area of thick hard skin",
      term: "callus",
    },
    {
      definition: "heat-producing; N. calorie",
      term: "calorific",
    },
    {
      definition: "malicious misrepresentation; slander",
      term: "calumny",
    },
    {
      definition: "good-fellowship; CF. comrade",
      term: "camaraderie",
    },
    {
      definition:
        "shell or jewel carved in relief; star's special appearance \n                        in a minor role in a film",
      term: "cameo",
    },
    {
      definition: "group sharing a common cause or opinion",
      term: "camp",
    },
    {
      definition: "unfounded false rumor; exaggerated false report",
      term: "canard",
    },
    {
      definition: "frankness; open honesty; ADJ. candid",
      term: "candor",
    },
    {
      definition: "related to dogs; doglike",
      term: "canine",
    },
    {
      definition: "any ulcerous sore; ulcer; any evil; CF. cancer",
      term: "canker",
    },
    {
      definition: "shrewd in money matters; thrifty",
      term: "canny",
    },
    {
      definition:
        "insincere speech or expression of piety; jargon of \n                        thieves; special words used by a particular group of people",
      term: "cant",
    },
    {
      definition: "ill-humored; irritable",
      term: "cantankerous",
    },
    {
      definition:
        "story set to music to be sung by a chorus (shorter \n                        than an oratorio)",
      term: "cantata",
    },
    {
      definition: "slow gallop; V. CF. trot",
      term: "canter",
    },
    {
      definition: "division of a long poem",
      term: "canto",
    },
    {
      definition:
        "determine or seek opinions, votes, etc.; go through \n                        (a region) to solicit votes or orders; conduct a survey; \n                        N.",
      term: "canvass",
    },
    {
      definition: "spacious",
      term: "capacious",
    },
    {
      definition:
        "mental or physical ability; role; position or duty; \n                        ability to accommodate; Ex. in my capacity as president",
      term: "capacity",
    },
    {
      definition:
        "having a very fine bore; resembling a hair; fine and \n                        slender; Ex. capillary attraction; N: very fine hairlike \n                        tube; CF. capillarity",
      term: "capillary",
    },
    {
      definition: "surrender; give up all resistance",
      term: "capitulate",
    },
    {
      definition: "whim; sudden change of mind without any real cause",
      term: "caprice",
    },
    {
      definition: "unpredictable; fickle",
      term: "capricious",
    },
    {
      definition: "(of a boat) turn over",
      term: "capsize",
    },
    {
      definition: "title; chapter heading; text under illustration",
      term: "caption",
    },
    {
      definition: "faultfinding; too critical",
      term: "captious",
    },
    {
      definition: "glass water bottle; decanter",
      term: "carafe",
    },
    {
      definition:
        "shell covering the back (of a turtle, tortoise, crab, \n                        etc.)",
      term: "carapace",
    },
    {
      definition:
        "unit of weight for precious stones; measure of the \n                        purity of gold",
      term: "caratkarat) ",
    },
    {
      definition: "causing cancer; N. carcinogen",
      term: "carcinogenic",
    },
    {
      definition:
        "chief; most important; N: priest; cardinal number: \n                        number that shows quantity rather thatn order",
      term: "cardinal",
    },
    {
      definition: "doctor specializing in ailments of the heart",
      term: "cardiologist",
    },
    {
      definition:
        "lurch; sway from side to side; move with irregular \n                        swinging movement; stagger",
      term: "careen",
    },
    {
      definition: "rush wildly; go at full speed",
      term: "career",
    },
    {
      definition: "free from worries; having no problems",
      term: "carefree",
    },
    {
      definition: "distortion; burlesque",
      term: "caricature",
    },
    {
      definition:
        "a set of bells (often in a tower) capable of being \n                        played",
      term: "carillon",
    },
    {
      definition:
        "destruction of life; slaughter; killing of large numbers \n                        of people or animals",
      term: "carnage",
    },
    {
      definition: "fleshly; sensual; concerning the desires of the body",
      term: "carnal",
    },
    {
      definition: "meat-eating; N. carnivore; CF. herbivore",
      term: "carnivorous",
    },
    {
      definition: "drunken revel; V. carouse",
      term: "carousal",
    },
    {
      definition:
        "petty criticism; fault-finding; fretful complaining; \n                        quibble",
      term: "carping",
    },
    {
      definition: "rotting flesh of a dead body; CF. vulture",
      term: "carrion",
    },
    {
      definition: "map-maker",
      term: "cartographer",
    },
    {
      definition: "small waterfall",
      term: "cascade",
    },
    {
      definition:
        "one of the hereditary classes in Hindu society; social \n                        stratification; prestige",
      term: "caste",
    },
    {
      definition: "punishment; severe criticism or disapproval",
      term: "castigation",
    },
    {
      definition: "remove the sex organs (of a male animal or person)",
      term: "castrate",
    },
    {
      definition:
        "happening by chance; irregular; occasional; informal; \n                        showing or feeling little interest; Ex. casual reader/labor/remark",
      term: "casual",
    },
    {
      definition:
        "serious or fatal accident; person killed or wounded \n                        in an accident or battle",
      term: "casualty",
    },
    {
      definition:
        "deluge; upheaval; earthquake; violent and sudden event \n                        or change",
      term: "cataclysm",
    },
    {
      definition:
        "agent which brings about a chemical change while it \n                        remains unaffected and unchanged; CF. catalysis",
      term: "catalyst",
    },
    {
      definition: "slingshot; hurling machine; V: fire from catapult",
      term: "catapult",
    },
    {
      definition:
        "great waterfall; eye abnormality (causing a gradual \n                        loss of eyesight)",
      term: "cataract",
    },
    {
      definition: "calamity ; disaster",
      term: "catastrophe",
    },
    {
      definition:
        "shout of disapproval or displeasure (made at the theater \n                        or a sports match); boo; V.",
      term: "catcall",
    },
    {
      definition:
        "book for religious instruction in question-and-answer \n                        form; religious instruction by question and answer; V. \n                        catechize",
      term: "catechism",
    },
    {
      definition:
        "without exceptions; made without any doubt in mind; \n                        unqualified; absolute",
      term: "categorical",
    },
    {
      definition:
        "provide food and drink (for); cater to: try to satisfy \n                        (desires of a bad kind)",
      term: "cater",
    },
    {
      definition:
        "purging or cleansing of any passage of the body; purging \n                        and weakening of strong emotions as a result of experiencing \n                        a dramatic work of art",
      term: "catharsis",
    },
    {
      definition:
        "purgative; medicine that causes the bowels to empty; \n                        ADJ.",
      term: "cathartic",
    },
    {
      definition:
        "(of likings and interests) universal; general; broad; \n                        including many different parts; wide-ranging liberal; \n                        Ex. catholic opinions/tastes",
      term: "catholic",
    },
    {
      definition:
        "private meeting of a group of people in a political \n                        party to select officers or determine policy; CF. the \n                        Caucus club of Boston",
      term: "caucus",
    },
    {
      definition: "make watertight (by blocking up cracks as in a ship)",
      term: "caulkcalk) ",
    },
    {
      definition: "implying a cause-and-effect relationship; N. causality",
      term: "causal",
    },
    {
      definition:
        "burning; corrosive; able to burn by chemical action; \n                        sarcastically biting; (of remarks) intended to hurt; bitter; \n                        harmful; OP. harmless",
      term: "caustic",
    },
    {
      definition:
        "burn (a wound or snakebite, etc.) with hot iron or \n                        caustic substance to stop bleeding and prevent infection",
      term: "cauterize",
    },
    {
      definition:
        "procession of riders or horse-drawn carriages; parade; \n                        CF. cavalry",
      term: "cavalcade",
    },
    {
      definition: "casual and offhand; arrogant; N: knight",
      term: "cavalier",
    },
    {
      definition:
        "quibble; make frivolous objections; find fault unnecessarily",
      term: "cavil",
    },
    {
      definition:
        "yield (title or territory) to (esp. after losing a \n                        war); surrender formally; N. cession",
      term: "cede",
    },
    {
      definition: "speed; rapidity",
      term: "celerity",
    },
    {
      definition: "heavenly",
      term: "celestial",
    },
    {
      definition: "abstaining from sexual intercourse; unmarried; N. celibacy",
      term: "celibate",
    },
    {
      definition: "place for burying the dead",
      term: "cemetery",
    },
    {
      definition:
        "(in ancient Rome) overseer of morals (also taking the \n                        census); person who eliminates inappropriate matter; V.",
      term: "censor",
    },
    {
      definition: "severely critical",
      term: "censorious",
    },
    {
      definition:
        "blame; criticize; express strong disapproval; N: severe \n                        criticism; strong disapproval",
      term: "censure",
    },
    {
      definition: "mythical figure, half man and half horse",
      term: "centaur",
    },
    {
      definition:
        "denoting a widely used temperature scale (basically \n                        same as Celsius)",
      term: "centigrade",
    },
    {
      definition: "radiating; departing from the center",
      term: "centrifugal",
    },
    {
      definition: "machine that separates substances by whirling them",
      term: "centrifuge",
    },
    {
      definition: "tending toward the center",
      term: "centripetal",
    },
    {
      definition:
        "Roman army officer (commanding a company of about 100 \n                        soldiers)",
      term: "centurion",
    },
    {
      definition:
        "pertaining to the brain or intellect; intellectual \n                        rather than emotional; CF. cerebrum",
      term: "cerebral",
    },
    {
      definition: "thought; working of the brain",
      term: "cerebration",
    },
    {
      definition:
        "marked by formality; extremely formal and polite; CF. \n                        ceremony: conventional social courtesy",
      term: "ceremonious",
    },
    {
      definition: "certainty",
      term: "certitude",
    },
    {
      definition: "stoppage",
      term: "cessation",
    },
    {
      definition: "yielding to another; ceding",
      term: "cession",
    },
    {
      definition: "warm by rubbing; make sore by rubbing; N.",
      term: "chafe",
    },
    {
      definition:
        "worthless products of an endeavor; husk(outer seed \n                        cover) separated from grain; Ex. separate the wheat from \n                        the chaff",
      term: "chaff",
    },
    {
      definition: "bantering; joking",
      term: "chaffing",
    },
    {
      definition:
        "annoyance and disappointment; vexation (caused by humiliation \n                        or injured pride)",
      term: "chagrin",
    },
    {
      definition: "goblet; consecrated cup",
      term: "chalice",
    },
    {
      definition: "lizard that changes color in different situations",
      term: "chameleon",
    },
    {
      definition:
        "support militantly; fight for; N: person who fights \n                        for or supports strongly (a principle, movement, person, \n                        etc.)",
      term: "champion",
    },
    {
      definition:
        "position of champion; defense or support; competition \n                        held to determine a champion",
      term: "championship",
    },
    {
      definition:
        "legal official of high rank; CF. chancellery(chancellory): \n                        position of a chancellor",
      term: "chancellor",
    },
    {
      definition:
        "tune(melody) in which a number of words are sung on \n                        the same note; V: sing (a chant); utter (a slogan) in \n                        the manner of a chant",
      term: "chant",
    },
    {
      definition: "in utter disorder",
      term: "chaotic",
    },
    {
      definition: "small church (in a prison, college, or hospital)",
      term: "chapel",
    },
    {
      definition:
        "older person who accompanies and supervises a young \n                        unmarried woman",
      term: "chaperon",
    },
    {
      definition: "clergyman attached to a chapel",
      term: "chaplain",
    },
    {
      definition:
        "make or become black by burning; reduce or be reduced \n                        to carbon or charcoal(black substance made by burning \n                        wood) by incomplete combustion",
      term: "char",
    },
    {
      definition: "divine gift; great popular charm or appeal; magnetism",
      term: "charisma",
    },
    {
      definition: "quack; pretender to knowledge (esp. in medicine)",
      term: "charlatan",
    },
    {
      definition:
        "quality of pleasing; amulet; action or formula thought \n                        to have magical power; spell; V: attract; cast a spell \n                        on; bewitch",
      term: "charm",
    },
    {
      definition:
        "cautious; unwilling to take risks; sparing or restrained \n                        about giving; OP. bold",
      term: "chary",
    },
    {
      definition:
        "ornament a metal surface by indenting; follow rapidly \n                        to catch",
      term: "chase",
    },
    {
      definition: "abyss; very deep crack",
      term: "chasm",
    },
    {
      definition:
        "framework and working parts of an automobile; framework \n                        to which components are attached",
      term: "chassis",
    },
    {
      definition:
        "morally pure; virginal; abstaining from illicit sexual \n                        acts; modest; simple (of a style of writing); not highly \n                        decorated; austere",
      term: "chaste",
    },
    {
      definition: "discipline; punish in order to correct; CF. castigate",
      term: "chasten",
    },
    {
      definition: "punish as by beating; criticize severely",
      term: "chastise",
    },
    {
      definition:
        "blindly devoted patriot; zealous adherent of a group, \n                        cause, or sex; ADJ. chauvinistic; CF. chauvinism; Nicolas \n                        Chauvin",
      term: "chauvinist",
    },
    {
      definition: "stop motion; curb or restrain",
      term: "check",
    },
    {
      definition:
        "marked by great changes in fortune; with many changes \n                        of fortuene; CF. checked: having a pattern of squares",
      term: "checkeredchequered)",
    },
    {
      definition:
        "angelic; innocent-looking; N. cherub; CF. seraph: winged \n                        angel of the highest order",
      term: "cherubic",
    },
    {
      definition: "trickery; deception",
      term: "chicanery",
    },
    {
      definition: "scold; rebuke (someone who has done wrong)",
      term: "chide",
    },
    {
      definition:
        "fantastically improbable; highly unrealistic; N. chimera: \n                        unreal fancy; fire-breathing female creature",
      term: "chimerical",
    },
    {
      definition:
        "lose a small piece from the surface or edge; N: small \n                        piece broken off something; CF. French fry; Potato chip/crisp",
      term: "chip",
    },
    {
      definition: "swindle or cheat; N: wedgelike tool for cutting",
      term: "chisel",
    },
    {
      definition: "courteous; faithful; brave; N. chivalry",
      term: "chivalrous",
    },
    {
      definition: "delicate; of very fine quality",
      term: "choice",
    },
    {
      definition:
        "group of people who sing together (esp. during religious \n                        services); place for choir",
      term: "choir",
    },
    {
      definition:
        "hot-tempered; bad-tempered; irritable; easily angered; \n                        CF. cholera",
      term: "choleric",
    },
    {
      definition:
        "daily domestic task (such as cleaning, cooking, and \n                        shopping); unpleasant task",
      term: "chore",
    },
    {
      definition:
        "art of representing dances in written symbols; arrangement \n                        of dances",
      term: "choreography",
    },
    {
      definition: "chuckle with delight; N.",
      term: "chortle",
    },
    {
      definition: "phrase repeated throughout a song or poem",
      term: "chorus",
    },
    {
      definition: "long established as a disease",
      term: "chronic",
    },
    {
      definition: "report; record (in chronological order)",
      term: "chronicle",
    },
    {
      definition: "laugh quietly",
      term: "chuckle",
    },
    {
      definition: "boorish; rude; N. churl: boor; yahoo",
      term: "churlish",
    },
    {
      definition: "having minute hairs; CF. cilium; CF. cilia: eyelash",
      term: "ciliated",
    },
    {
      definition:
        "nonentity; worthless person or thing; zero; secret \n                        code; V.",
      term: "cipher",
    },
    {
      definition:
        "small ring; band of gold, silver, jewel, etc. (worn \n                        on the head, arms, or neck as decoration)",
      term: "circlet",
    },
    {
      definition:
        "closed circular line around an area; circumference; \n                        regularly repeated journey from place to place",
      term: "circuit",
    },
    {
      definition: "roundabout",
      term: "circuitous",
    },
    {
      definition:
        "indirect or roundabout expression (by using an uncecessarily \n                        large number of words esp. when trying to avoid answering \n                        a difficult question directly)",
      term: "circumlocution",
    },
    {
      definition: "limit; confine; draw a line around",
      term: "circumscribe",
    },
    {
      definition: "prudent; cautious; acting after careful thought",
      term: "circumspect",
    },
    {
      definition:
        "outwit; defeat by behaving more cleverly; outsmart; \n                        baffle; avoid; get around",
      term: "circumvent",
    },
    {
      definition: "reservoir or water tank",
      term: "cistern",
    },
    {
      definition: "fortress",
      term: "citadel",
    },
    {
      definition:
        "quote; commend; Ex. cited for bravery in an official \n                        record",
      term: "cite",
    },
    {
      definition:
        "having to do with citizens; not military or religious; \n                        courteous and polite; Ex. married in a civil ceremony; \n                        Ex. civil strife/disorder/law; N. civility; CF. civic",
      term: "civil",
    },
    {
      definition: "having foresight; fortuneteller; N. clairvoyance",
      term: "clairvoyant",
    },
    {
      definition: "climb by crawling with difficulties; scramble",
      term: "clamber",
    },
    {
      definition:
        "loud continous noise; continuous demand or complaint \n                        made by a large number of people; V: make a clamor; express \n                        (a demand) continually and loudly; ADJ. clamorous",
      term: "clamor",
    },
    {
      definition: "secret",
      term: "clandestine",
    },
    {
      definition: "loud resounding noise; sound of repeated clanging",
      term: "clangor",
    },
    {
      definition:
        "strike the palms of the hands together with a sudden \n                        explosive sound; come together suddenly with a sharp sound; \n                        put or send promptly; Ex. clap the thief in jail; N: clapping; \n                        loud or explosive sound; CF. applause",
      term: "clap",
    },
    {
      definition: "striker (tongue) of a bell",
      term: "clapper",
    },
    {
      definition:
        "shrill, trumpetlike sound; kind of trumpet used in \n                        former times",
      term: "clarion",
    },
    {
      definition: "hold firmly within arms",
      term: "clasp",
    },
    {
      definition: "fear of being locked in",
      term: "claustrophobia",
    },
    {
      definition: "collarbone",
      term: "clavicle",
    },
    {
      definition:
        "split or sever; cling to; remain faithful to; N. cleavage; \n                        ADJ. cloven",
      term: "cleave",
    },
    {
      definition: "N: split",
      term: "cleft",
    },
    {
      definition:
        "disposition to be lenient in deciding punishments; \n                        mildness as of the weather; ADJ. clement",
      term: "clemency",
    },
    {
      definition:
        "phrase dulled in meaning by repetition; platitude; \n                        ADJ. clich\\'ed",
      term: "cliche ",
    },
    {
      definition: "body of customers",
      term: "clientele",
    },
    {
      definition: "relating to the highest point; N. climax; CF. climatic",
      term: "climactic",
    },
    {
      definition: "climate",
      term: "clime",
    },
    {
      definition:
        "cut off with shears; fasten; N: something clipped off \n                        (as a short extract from film); clasp or fastener",
      term: "clip",
    },
    {
      definition: "sailing vessel built for great speed",
      term: "clipper",
    },
    {
      definition: "small exclusive group of people",
      term: "clique",
    },
    {
      definition: "monastery or convent",
      term: "cloister",
    },
    {
      definition: "half-solid lump formed from a liquid (or blood); V.",
      term: "clot",
    },
    {
      definition:
        "great influence (especially political or social); hard \n                        blow with fist",
      term: "clout",
    },
    {
      definition: "act stupidly; play the fool; N.",
      term: "clown",
    },
    {
      definition:
        "distasteful (because excessive); excessively sweet \n                        or sentimental; V. cloy: become unpleasant through too \n                        much sweetness or excess",
      term: "cloying",
    },
    {
      definition: "congeal; thicken; clot; N. coagulant",
      term: "coagulate",
    },
    {
      definition: "combine; fuse; N. coalescence",
      term: "coalesce",
    },
    {
      definition: "partnership; league; union of separate political parties",
      term: "coalition",
    },
    {
      definition: "persuade by flattery",
      term: "coax",
    },
    {
      definition: "concluding section of a musical or literary composition",
      term: "coda",
    },
    {
      definition:
        "treat gently; indulge excessively; pamper; mollycoddle; \n                        baby; cook in water just below boiling point; Ex. coddled \n                        eggs",
      term: "coddle",
    },
    {
      definition:
        "supplement to the body of a will; later addition to \n                        a will",
      term: "codicil",
    },
    {
      definition:
        "arrange (laws or rules) as a code; classify; N. code: \n                        system of words used instead of ordinary writing; collection \n                        of laws, rules, established social customs",
      term: "codify",
    },
    {
      definition:
        "use of force to get someone to object; compelling; \n                        V. coerce",
      term: "coercion",
    },
    {
      definition:
        "living at the same time as; existing during the same \n                        period of time; contemporary; of the same age",
      term: "coeval",
    },
    {
      definition: "tooth projecting from a wheel",
      term: "cog",
    },
    {
      definition: "convincing",
      term: "cogent",
    },
    {
      definition: "think over; ponder",
      term: "cogitate",
    },
    {
      definition:
        "having a common origin; related linguistically; allied \n                        by blood; similar or akin in nature; Ex. cognate languages; \n                        N.",
      term: "cognate",
    },
    {
      definition:
        "having to do with knowing or perceiving related to \n                        the mental processes; N. cognition: the mental process \n                        of knowing",
      term: "cognitive",
    },
    {
      definition: "knowledge; ADJ. cognizant; having knowledge; aware",
      term: "cognizance",
    },
    {
      definition: "live together",
      term: "cohabit",
    },
    {
      definition: "stick together",
      term: "cohere",
    },
    {
      definition: "tendency to keep together",
      term: "cohesion",
    },
    {
      definition:
        "group of people who share some common quality; armed \n                        band; a group of between 300 and 600 soldiers under one \n                        commander (in the ancient Rome)",
      term: "cohorts",
    },
    {
      definition: "hairstyle",
      term: "coiffure",
    },
    {
      definition:
        "make coins; invent or fabricate (a word or phrase); \n                        N. coinage: word or phrase recently invented",
      term: "coin",
    },
    {
      definition:
        "the chance occurrence, at the same time, of two or \n                        more seemingly connected events; V. coincide: happen at \n                        the same time; be in agreement; CF. coincident; CF. coincidental",
      term: "coincidence",
    },
    {
      definition: "utensil with perforated bottom used for straining",
      term: "colander",
    },
    {
      definition: "work together; cooperate treasonably with the enemy",
      term: "collaborate",
    },
    {
      definition: "work of art put together from fragments",
      term: "collage",
    },
    {
      definition:
        "examine and compare in order to verify authenticity; \n                        arrange in order (the sheets of a book before they are \n                        bound)",
      term: "collate",
    },
    {
      definition:
        "security given for loan; ADJ: secondary; descended \n                        from the same person but through different sons or daughters",
      term: "collateral",
    },
    {
      definition: "a light meal; collating",
      term: "collation",
    },
    {
      definition: "composed; calm; self-possessed",
      term: "collected",
    },
    {
      definition:
        "pertaining to conversational or common speech; informal; \n                        N. colloquialism: colloquial expression",
      term: "colloquial",
    },
    {
      definition: "informal discussion; conversation",
      term: "colloquy",
    },
    {
      definition:
        "conspiring in a fraudulent scheme to cheat or deceive \n                        others; V. collude",
      term: "collusion",
    },
    {
      definition: "huge",
      term: "colossal",
    },
    {
      definition:
        "gigantic statue; person or thing of great size or importance",
      term: "colossus",
    },
    {
      definition:
        "deep prolonged unconsciousness caused by disease, poison, \n                        or a severe blow",
      term: "coma",
    },
    {
      definition: "in a coma; extremely sleepy",
      term: "comatose",
    },
    {
      definition: "easily burned; N. CF. combustion",
      term: "combustible",
    },
    {
      definition: "retort; quick clever reply; return to former status",
      term: "comeback",
    },
    {
      definition: "attractive; agreeable; having a pleasing appearance",
      term: "comely",
    },
    {
      definition: "something fit to be eaten",
      term: "comestible",
    },
    {
      definition: "deserts; well-deserved punishment or misfortune; rebuke",
      term: "comeuppance",
    },
    {
      definition: "courtesy; civility; Ex. comity of nations",
      term: "comity",
    },
    {
      definition:
        "take (private property) for military use without needing \n                        permission or giving payment; draft for military purposes",
      term: "commandeer",
    },
    {
      definition:
        "honor the memory of; serve as a memorial to; Ex. commemorate \n                        the 100th anniversary/those who died in the war",
      term: "commemorate",
    },
    {
      definition:
        "remembering; honoring the memory of; Ex. commemorative \n                        stamp",
      term: "commemorative",
    },
    {
      definition: "equal in extent; of the same size",
      term: "commensurate",
    },
    {
      definition: "feel or express pity or sympathy for",
      term: "commiserate",
    },
    {
      definition: "spacious and comfortable",
      term: "commodious",
    },
    {
      definition: "ordinary; N: something ordinary or common; trite remark",
      term: "commonplace",
    },
    {
      definition:
        "nation governed by the people; republic; people of \n                        a nation",
      term: "commonwealth",
    },
    {
      definition:
        "held in common; public; of a group of people; of a \n                        commune",
      term: "communal",
    },
    {
      definition:
        "small (often rural) community whose members share work \n                        and income; V: exchange thoughts or feelings; Ex. commune \n                        with nature",
      term: "commune",
    },
    {
      definition:
        "agreement; contract; ADJ: tightly packed; firm; brief; \n                        concise; Ex. compact statement",
      term: "compact",
    },
    {
      definition: "one of the parts into which an enclosed space is divided",
      term: "compartment",
    },
    {
      definition: "sympathy for the suffering of others; ADJ. compassionate",
      term: "compassion",
    },
    {
      definition: "harmonious; in harmony with; able to exist together",
      term: "compatible",
    },
    {
      definition:
        "overpowering; irresistible in effect; holding one's \n                        attention; that compels one to do something; Ex. a compelling \n                        adventure story; V. compel",
      term: "compelling",
    },
    {
      definition: "brief, comprehensive summary; ADJ. compendious",
      term: "compendium",
    },
    {
      definition: "making up for; repaying",
      term: "compensatory",
    },
    {
      definition: "listing of information in tabular or book form; compiling",
      term: "compilation",
    },
    {
      definition:
        "assemble; gather; accumulate; make (a report or a book) \n                        from facts and information found in various places; Ex. \n                        compile a dictionary",
      term: "compile",
    },
    {
      definition: "self-satisfaction; smugness; ADJ. complacent",
      term: "complacency",
    },
    {
      definition: "trying to please; obliging; willing to please others",
      term: "complaisant",
    },
    {
      definition: "complete; consummate; make perfect; N.",
      term: "complement",
    },
    {
      definition: "serving to complete something",
      term: "complementary",
    },
    {
      definition:
        "conformity in fulfilling requirements; readiness to \n                        yield; disposition to yield to others; V. comply",
      term: "compliance",
    },
    {
      definition:
        "readily acting in accordance with a rule, order, or \n                        the wishes or others; yielding; comforming to requirements",
      term: "compliant",
    },
    {
      definition:
        "participation; involvement (in a questionable act or \n                        a crime)",
      term: "complicity",
    },
    {
      definition: "element; ingredient",
      term: "component",
    },
    {
      definition:
        "bear one's self; behave; Ex. comport oneself; N. comportment",
      term: "comport",
    },
    {
      definition:
        "mixture of decaying organic matter used as fertilizer; \n                        V: put or make compost",
      term: "compost",
    },
    {
      definition: "mental calmness",
      term: "composure",
    },
    {
      definition:
        "combine; produce by combining; increase; make worse \n                        by adding to or increasing; exacerbate; Ex. compound an \n                        error; ADJ: consisting of two or more parts; N: combination \n                        of two or more parts; area enclosed by a wall containing \n                        a group of buildings;",
      term: "compound",
    },
    {
      definition: "include; understand",
      term: "comprehend",
    },
    {
      definition: "broad; including a lot or everything; thorough; inclusive",
      term: "comprehensive",
    },
    {
      definition:
        "force into less space; squeeze; contract; put into \n                        fewer words; N: thick mass of cloth pressed to part of \n                        the body to stop bleeding or swelling, reduce fever, etc.",
      term: "compress",
    },
    {
      definition: "include; consist of",
      term: "comprise",
    },
    {
      definition:
        "adjust or settle by making mutual concessions; endanger \n                        the interests or reputation of; put into danger, disrepute, \n                        or a dishonorable position; Ex. compromise one's principle; \n                        N.",
      term: "compromise",
    },
    {
      definition:
        "compelling; strong desire that is difficult to control; \n                        irresistible impulse",
      term: "compulsion",
    },
    {
      definition: "resulting from compulsion",
      term: "compulsive",
    },
    {
      definition: "obligatory; that must be done",
      term: "compulsory",
    },
    {
      definition: "remorse; strong uneasiness caused by guilt",
      term: "compunction",
    },
    {
      definition: "reckon; calculate",
      term: "compute",
    },
    {
      definition: "link as in a chain",
      term: "concatenate",
    },
    {
      definition: "hollow; curved inwards; OP. convex",
      term: "concave",
    },
    {
      definition:
        "admit; acknowledge as being true (often reluctantly); \n                        yield; grant; Ex. concede a goal",
      term: "concede",
    },
    {
      definition:
        "vanity or self-love; too high opinion of one's own \n                        value; extravagant metaphor (in poetry)",
      term: "conceit",
    },
    {
      definition: "having a common center",
      term: "concentric",
    },
    {
      definition:
        "beginning; forming of an idea; fertilization; V. conceive: \n                        form an idea in the mind; devise; become pregnant; CF. \n                        inception",
      term: "conception",
    },
    {
      definition:
        "mutually agreed on; done together by agreement; Ex. \n                        concerted effort; CF. in concert: working together",
      term: "concerted",
    },
    {
      definition:
        "an act of yielding; conceding; something conceded; \n                        point, right, etc. given unwillingly; privilege of maintaining \n                        a business in a certain place; Ex. oil concessions in \n                        the North sea; CF. concessionaire",
      term: "concession",
    },
    {
      definition:
        "reconciling; soothing; V. conciliate: reconcile; soothe; \n                        win the friendly feelings (by removing anger)",
      term: "conciliatory",
    },
    {
      definition: "brief and compact",
      term: "concise",
    },
    {
      definition: "private secret meeting",
      term: "conclave",
    },
    {
      definition: "decisive; ending all debate",
      term: "conclusive",
    },
    {
      definition:
        "prepare by mixing or combining; make up in concert; \n                        devise (something false) so as to deceive; Ex. concoct \n                        an elaborate excuse for being late; N. concoction",
      term: "concoct",
    },
    {
      definition:
        "that which accompanies; Ex. Deafnes is a frequent concommitant \n                        of old age; ADJ: existing or happening together with something \n                        else",
      term: "concomitant",
    },
    {
      definition: "harmony; accord",
      term: "concord",
    },
    {
      definition: "formal agreement",
      term: "concordat",
    },
    {
      definition: "agree; coincide; happen at the same time",
      term: "concur",
    },
    {
      definition: "happening at the same time; in agreement",
      term: "concurrent",
    },
    {
      definition:
        "(derog.) bestow courtesies with a superior air; descend \n                        to the level of one considered inferior",
      term: "condescend",
    },
    {
      definition: "adequate; (of punishment) severe and well deserved",
      term: "condign",
    },
    {
      definition: "seasonings; spices",
      term: "condiments",
    },
    {
      definition:
        "express condolences; N. condolence: sympathy for someone \n                        who has experienced great sorrow",
      term: "condole",
    },
    {
      definition: "overlook; forgive; give tacit approval; excuse",
      term: "condone",
    },
    {
      definition: "helpful; contributive; V. conduce; Ex. conduce to/towards",
      term: "conducive",
    },
    {
      definition: "aqueduct; passageway for fluids",
      term: "conduit",
    },
    {
      definition: "trusted friend (to whom one tells one's secret)",
      term: "confidantconfidante)",
    },
    {
      definition:
        "tell in confidence (to a person one trusts); be confident \n                        about",
      term: "confide",
    },
    {
      definition:
        "self-assurance; calm unworried feeling based on a strong \n                        belief in one's abilities; strong belief in the ability \n                        of a person or plan; trust or faith in a person or thing; \n                        something confided; secret; Ex. confidence in your ability; \n                        Ex. I'm telling yo",
      term: "confidence",
    },
    {
      definition:
        "spoken or written in secret; trusted with private matters; \n                        Ex. confidential secretary",
      term: "confidential",
    },
    {
      definition:
        "shut in an enclosed space; restrict; keep within limits; \n                        N. confinement",
      term: "confine",
    },
    {
      definition:
        "seize; take possession of (private property) by official \n                        order (usu. as a punishment); commandeer",
      term: "confiscate",
    },
    {
      definition: "great fire",
      term: "conflagration",
    },
    {
      definition:
        "flowing together; the place where two rivers flow together; \n                        crowd; gathering together",
      term: "confluence",
    },
    {
      definition:
        "person who uncritically conforms to the customs of \n                        a group; OP. nonconformist: one who does not conform to \n                        accepted beliefs of norms",
      term: "conformist",
    },
    {
      definition:
        "harmony; agreement with established rules or customs; \n                        similarity; Ex. behave in conformity with; V. conform: \n                        be similar; act in agreement; comply; Ex. conform to the \n                        rule; CF. conformance",
      term: "conformity",
    },
    {
      definition: "confuse; puzzle",
      term: "confound",
    },
    {
      definition: "freeze; coagulate",
      term: "congeal",
    },
    {
      definition:
        "pleasant; friendly; in agreement with one's tastes \n                        and nature; Ex. congenial weather",
      term: "congenial",
    },
    {
      definition: "existing at birth",
      term: "congenital",
    },
    {
      definition:
        "corporation made up of several different companies \n                        in diversified fields; mass of various material gathered \n                        together; rock consisting of small stones held together \n                        by clay; V.",
      term: "conglomerate",
    },
    {
      definition: "mass of material sticking together",
      term: "conglomeration",
    },
    {
      definition:
        "correspondence of parts; harmonious relationship; CF. \n                        congruity",
      term: "congruence",
    },
    {
      definition:
        "in agreement; harmonious; corresponding; coinciding \n                        exactly; CF. congruous",
      term: "congruent",
    },
    {
      definition:
        "pine tree (usu. evergreen); cone-bearing tree; ADJ. \n                        coniferous; CF. deciduous; CF. evergreen",
      term: "conifer",
    },
    {
      definition: "surmise; guess; V.",
      term: "conjecture",
    },
    {
      definition: "pertaining to marriage",
      term: "conjugal",
    },
    {
      definition:
        "cause to appear by magic; summon (a devil or a spirit) \n                        by magical power; practice magic (esp. by very quick movement \n                        of the hands); evoke; conjure up: bring into the mind; \n                        Ex. The magician conjured a rabbit out of his hat.",
      term: "conjure",
    },
    {
      definition:
        "pretense of ignorance of something wrong; assistance; \n                        permission to offend; V. connive: feign ignorance (of \n                        a wrong); cooperate secretly in an illegal action; conspire",
      term: "connivance",
    },
    {
      definition:
        "person competent to act as a judge of art, etc. (whose \n                        judgments are respected); a lover of an art",
      term: "connoisseur",
    },
    {
      definition: "suggested or implied meaning of an expression; V. connote",
      term: "connotation",
    },
    {
      definition: "pertaining to marriage or the matrimonial state",
      term: "connubial",
    },
    {
      definition: "having a common ancestor",
      term: "consanguineousconsanguine)",
    },
    {
      definition: "kinship; relationship by birth",
      term: "consanguinity",
    },
    {
      definition:
        "scrupulous; through and careful; Ex. conscientious \n                        worker",
      term: "conscientious",
    },
    {
      definition: "draftee; person forced into military service; V.",
      term: "conscript",
    },
    {
      definition:
        "dedicate; sanctify; declare as sacred; Ex. consecrate \n                        one's life to helping the poor",
      term: "consecrate",
    },
    {
      definition: "general agreement; opinion reached by a group",
      term: "consensus",
    },
    {
      definition:
        "self-important; significant; consequent; following \n                        as a result; Ex. consequential air; CF. subsequent",
      term: "consequential",
    },
    {
      definition:
        "school of the fine arts (especially music or drama); \n                        glass-enclosed area; CF. conservancy",
      term: "conservatoryconservatoire)",
    },
    {
      definition:
        "send to a person or place for sale; deliver officially; \n                        entrust; put into the care of another; set apart (for \n                        a special purpose); N. consignment; CF. consignor, consignee",
      term: "consign",
    },
    {
      definition:
        "absence of contradictions; uniformity; degree of thickness \n                        or firmness; Ex. consistency of thick cream; CF. viscous",
      term: "consistency",
    },
    {
      definition:
        "lessen sadness or disappointment; give comfort; allay \n                        the sorrow of; N. consolation",
      term: "console",
    },
    {
      definition:
        "unification; process of becoming firmer or stronger; \n                        V. consolidate: merge; strengthen",
      term: "consolidation",
    },
    {
      definition: "harmony; agreement",
      term: "consonance",
    },
    {
      definition: "harmonious; in agreement; N.",
      term: "consonant",
    },
    {
      definition:
        "associate with; keep company; N: husband or wife (or \n                        a ruler)",
      term: "consort",
    },
    {
      definition:
        "treacherous plot; secret plan against the law (by two \n                        or more people)",
      term: "conspiracy",
    },
    {
      definition:
        "take part in a conspiracy; (of events) work together; \n                        combine; Ex. Events conspired to produce great difficulties.",
      term: "conspire",
    },
    {
      definition: "great shock; dismay",
      term: "consternation",
    },
    {
      definition:
        "voters represented by an elected official; district \n                        so represented; group of supporters (or constituents)",
      term: "constituency",
    },
    {
      definition: "supporter; voter; member of a constituency; component",
      term: "constituent",
    },
    {
      definition:
        "constituting; system of laws; composition of something; \n                        physical makeup or structure of a person; Ex. men with \n                        strong constitutions",
      term: "constitution",
    },
    {
      definition:
        "restraint; compulsion; repression of feelings; reticence; \n                        V. constrain: hold back; restrain; compel; oblige; confine \n                        forcibly; imprison",
      term: "constraint",
    },
    {
      definition:
        "explain; interpret; Ex. construe her silence as meaning \n                        that she agreed; CF. misconstrue",
      term: "construe",
    },
    {
      definition: "complete; V.",
      term: "consummate",
    },
    {
      definition:
        "infection (by contact); ADJ. contagious; CF. infectious: \n                        that can be passed by infection in the air",
      term: "contagion",
    },
    {
      definition: "pollute",
      term: "contaminate",
    },
    {
      definition: "scorn; disdain; ADJ. contemptuous; CF. contemptible",
      term: "contempt",
    },
    {
      definition: "struggle; compete; assert earnestly; state strongly",
      term: "contend",
    },
    {
      definition: "assertion; claim; thesis; struggling; competition",
      term: "contention",
    },
    {
      definition: "quarrelsome; controversial; likely to cause arguments",
      term: "contentious",
    },
    {
      definition:
        "dispute; argue about the rightness of; compete for; \n                        try to win; Ex. contest the election results; Ex. contest \n                        a seat in Parliament; N.",
      term: "contest",
    },
    {
      definition:
        "writings preceding and following the passage quoted; \n                        circumstance in which an event occurs",
      term: "context",
    },
    {
      definition: "adjacent to; touching upon",
      term: "contiguous",
    },
    {
      definition:
        "self-restraint; sexual chastity; sexual abstinence; \n                        voluntary control over bladder and bowel functions; ADJ. \n                        continent",
      term: "continence",
    },
    {
      definition:
        "dependent on something uncertain or in the future; \n                        conditional; happening by chance; accidental; N: a group \n                        of soldiers, ships to a larger force; CF. contingency: \n                        future event that may or may not occur; possibility; Ex. \n                        prepare for every contingency",
      term: "contingent",
    },
    {
      definition:
        "twistings; distortions; V. contort: twist violently \n                        out of shape; CF. contortionist",
      term: "contortions",
    },
    {
      definition: "illegal trade; smuggling; smuggled goods; ADJ.",
      term: "contraband",
    },
    {
      definition:
        "contradict; oppose; violate (a rule, law, or custom); \n                        N. contravention",
      term: "contravene",
    },
    {
      definition: "penitent; repentant; N. contrition",
      term: "contrite",
    },
    {
      definition:
        "something contrived; machine or apparatus; clever deceitful \n                        plan; scheme",
      term: "contrivance",
    },
    {
      definition:
        "invent or fabricate in a clever way (by improvisation); \n                        manage; Ex. contrive to attract his attention",
      term: "contrive",
    },
    {
      definition:
        "unnatural and forced; artificial; not spontaneous; Ex. The ending was rather contrived.",
      term: "contrived",
    },
    {
      definition:
        "oppose with arguments; attempt to refute; contradict; \n                        ADJ. controversial; N. controversy",
      term: "controvert",
    },
    {
      definition:
        "stubborn and disobedient; resisting authority (esp. \n                        disobedient to an order made by a court)",
      term: "contumacious",
    },
    {
      definition: "bruise",
      term: "contusion",
    },
    {
      definition: "riddle; difficult problem",
      term: "conundrum",
    },
    {
      definition:
        "come together; assemble; call to meet; Ex. convene \n                        the council",
      term: "convene",
    },
    {
      definition:
        "social or moral custom; established practice; formal \n                        meeting; international agreement",
      term: "convention",
    },
    {
      definition: "ordinary; typical; not nuclear; Ex. conventional weapons",
      term: "conventional",
    },
    {
      definition: "approach; tend to meet; come together",
      term: "converge",
    },
    {
      definition: "familiar with; having knowledge of",
      term: "conversant",
    },
    {
      definition: "opposite; ADJ.",
      term: "converse",
    },
    {
      definition:
        "one who has adopted a different religion or opinion; \n                        V: change into another form; (persuade to) adopt a particular \n                        religion or belief",
      term: "convert",
    },
    {
      definition: "curving outward",
      term: "convex",
    },
    {
      definition: "vehicle; transfer; act of conveying; Ex. public conveyance",
      term: "conveyance",
    },
    {
      definition:
        "judgment that someone is guilty of a crime; strongly \n                        held belief",
      term: "conviction",
    },
    {
      definition:
        "pleasantly merry; festive; joyous; gay; characterized \n                        by joviality; jovial",
      term: "convivial",
    },
    {
      definition: "call together; Ex. convoke Parliament; N. convocation",
      term: "convoke",
    },
    {
      definition:
        "coiled around; twisted; involved; complicated; intricate; \n                        complex; N. convolution: twist; one of the convex folds \n                        of the surface of the brain",
      term: "convoluted",
    },
    {
      definition:
        "violent uncontrollable shaking movement (caused by \n                        illness); V. convulse; ADJ. convulsive",
      term: "convulsion",
    },
    {
      definition: "plentiful",
      term: "copious",
    },
    {
      definition:
        "flirt; flirtatious woman; woman who tries to attract \n                        the admiration of men without sincere feelings; V.",
      term: "coquette",
    },
    {
      definition: "warmly friendly; gracious; heartfelt; Ex. cordial welcome",
      term: "cordial",
    },
    {
      definition:
        "extended line of men or fortifications to prevent access \n                        or egress; V.",
      term: "cordon",
    },
    {
      definition:
        "projecting molding on building (usually above columns \n                        or pillars);",
      term: "cornice",
    },
    {
      definition:
        "horn (or horn-shaped container) overflowing with fruit \n                        and grain; symbol of abundance; horn of plenty",
      term: "cornucopia",
    },
    {
      definition:
        "natural consequence (which naturally follows from something \n                        else)",
      term: "corollary",
    },
    {
      definition:
        "public official who investigates any death thought \n                        to be of other than natural causes",
      term: "coroner",
    },
    {
      definition:
        "bodily (rather than spiritual); of a bodily form; material; \n                        tangible",
      term: "corporeal",
    },
    {
      definition: "very fat; N. corpulence",
      term: "corpulent",
    },
    {
      definition:
        "collection (of writings or information); Ex. the corpus \n                        of Shakespear's works; Cf. corpse",
      term: "corpus",
    },
    {
      definition: "red or white cell in the blood",
      term: "corpuscle",
    },
    {
      definition: "either of the correlated things; V.",
      term: "correlate",
    },
    {
      definition: "mutual relationship",
      term: "correlation",
    },
    {
      definition: "confirm; support; strengthen",
      term: "corroborate",
    },
    {
      definition:
        "destroy or wear away gradually by chemical action (over \n                        a long period)",
      term: "corrode",
    },
    {
      definition:
        "eating away by chemicals or disease; (of language) \n                        fierce",
      term: "corrosive",
    },
    {
      definition: "wrinkled; ridged",
      term: "corrugated",
    },
    {
      definition: "pertaining to the universe; vast",
      term: "cosmic",
    },
    {
      definition:
        "group that meets socially; select circle; close group \n                        of people with shared interests",
      term: "coterie",
    },
    {
      definition:
        "approve; support; tolerate; Ex. countenance his rude \n                        behavior; N: face; appearance",
      term: "countenance",
    },
    {
      definition: "cancel; revoke (an order)",
      term: "countermand",
    },
    {
      definition:
        "thing that completes another; things very much alike; \n                        thing that has the same purpose in a different system",
      term: "counterpart",
    },
    {
      definition:
        "highly successful action or sudden attack; coup(s) \n                        d'\\'etat; CF. coup de gr\\^ace: deathblow or shot which \n                        kills",
      term: "coup",
    },
    {
      definition: "join; unite; OP. uncouple",
      term: "couple",
    },
    {
      definition: "messenger",
      term: "courier",
    },
    {
      definition:
        "attempt to gain; seek; woo; risk; behave so as to invite; \n                        attempt to gain the favor of by attention; Ex. court disaster",
      term: "court",
    },
    {
      definition:
        "binding agreement between two groups or people; compact; \n                        V: enter into a covenant; promise",
      term: "covenant",
    },
    {
      definition: "secret; hidden; implied; OP. overt",
      term: "covert",
    },
    {
      definition:
        "avaricious; desirous of (someone else's possessions); \n                        V. covet: desire eagerly (someone else's possessions)",
      term: "covetous",
    },
    {
      definition: "terrorize; intimidate",
      term: "cow",
    },
    {
      definition: "shrink quivering as from fear; cringe",
      term: "cower",
    },
    {
      definition:
        "shy (flirtatiously); showing a (pretended) lack of \n                        self-confidence; modest; coquettish; CF. job offer",
      term: "coy",
    },
    {
      definition: "cheat; hoodwink; swindle",
      term: "cozen",
    },
    {
      definition:
        "sour; bad-tempered; peevish; difficult to read as handwriting",
      term: "crabbed",
    },
    {
      definition:
        "skill (esp. with one's hands); skill in deceiving people; \n                        guile; ADJ. crafty: cleverly deceitful; cunning",
      term: "craft",
    },
    {
      definition:
        "very unrefined; grossly insensible; crude and undiscriminating; \n                        Ex. crass behavior",
      term: "crass",
    },
    {
      definition: "desire; want intensely",
      term: "crave",
    },
    {
      definition: "cowardly",
      term: "craven",
    },
    {
      definition: "belief",
      term: "credence",
    },
    {
      definition:
        "evidence concerning one's authority; written proof \n                        of a person's position; Ex. The new ambassador presented \n                        his credentials to the court.",
      term: "credential",
    },
    {
      definition: "creed",
      term: "credo",
    },
    {
      definition:
        "belief on slight evidence; gullibility; naivet\\'e; \n                        ADJ. credulous",
      term: "credulity",
    },
    {
      definition: "system of religious or ethical belief",
      term: "creed",
    },
    {
      definition:
        "move with body close to the ground; move stealthily \n                        or slowly; N.",
      term: "creep",
    },
    {
      definition: "incinerate (a corpse); N. crematory, crematorium",
      term: "cremate",
    },
    {
      definition:
        "increase in the volume or intensity as in a musical \n                        passage; climax; CF. crescent",
      term: "crescendo",
    },
    {
      definition:
        "top (as of a hill or wave); showy feathers on the head \n                        of a bird",
      term: "crest",
    },
    {
      definition: "dejected; dispirited",
      term: "crestfallen",
    },
    {
      definition: "crack; fissure",
      term: "crevice",
    },
    {
      definition: "shrink back as if in fear; cower",
      term: "cringe",
    },
    {
      definition: "wrinkle",
      term: "crinkle",
    },
    {
      definition: "standards used in judging; CF. criterion",
      term: "criteria",
    },
    {
      definition:
        "make (a piece of needlework) by looping thread with \n                        a hooked needle; N. CF. crotchet",
      term: "crochet",
    },
    {
      definition: "hag; ugly old woman",
      term: "crone",
    },
    {
      definition: "bad-tempered; showing ill-humor; angry",
      term: "cross",
    },
    {
      definition: "hybridize; N: hybrid; CF. interbreed; CF. inbreed",
      term: "crossbreed",
    },
    {
      definition:
        "(of someone old) eccentric; odd; whimsical; bad-tempered; \n                        N. crotchet: odd or whimsical notion",
      term: "crotchety",
    },
    {
      definition: "hard outer covering (as of earth or snow)",
      term: "crust",
    },
    {
      definition:
        "essential or main point; Ex. the crux of the problem; \n                        ADJ. crucial: of deciding importance",
      term: "crux",
    },
    {
      definition:
        "secret recess or vault usually used for burial; underground \n                        room (under a church)",
      term: "crypt",
    },
    {
      definition: "mysterious; hidden; secret",
      term: "cryptic",
    },
    {
      definition: "small chamber used for sleeping or work",
      term: "cubicle",
    },
    {
      definition:
        "word or signal (as in a play to prompt another actor's \n                        speech or entrance); reminder or hint; V: give a cue to",
      term: "cue",
    },
    {
      definition: "style of cooking; Ex. French cuisine",
      term: "cuisine",
    },
    {
      definition: "relating to cooking or kitchen",
      term: "culinary",
    },
    {
      definition:
        "pick out from others (to kill the weakest members); \n                        reject; select; collect (information); N.",
      term: "cull",
    },
    {
      definition:
        "highest point; climax; V. culminate in: reach the highest \n                        point in; end in; Ex. a series of minor clashes culminating \n                        in war",
      term: "culmination",
    },
    {
      definition: "deserving blame; blameworthy",
      term: "culpable",
    },
    {
      definition: "one guilty of a crime",
      term: "culprit",
    },
    {
      definition:
        "artificial channel for water; drain crossing under \n                        a road",
      term: "culvert",
    },
    {
      definition:
        "heavy and awkward to carry or wear; burdensome; Ex. \n                        cumbersome parcel/uniform",
      term: "cumbersome",
    },
    {
      definition: "growing by addition; accumulative",
      term: "cumulative",
    },
    {
      definition:
        "clever in deceiving; sly; N: cleverness in deceiving; \n                        deceit",
      term: "cunning",
    },
    {
      definition: "greed (for wealth); CF. cupid; CF. Cupid",
      term: "cupidity",
    },
    {
      definition:
        "superintendent; manager (in charge of a museum or a \n                        library)",
      term: "curator",
    },
    {
      definition:
        "chain or strap used with a bit to restrain a horse; \n                        something that checks; V: check; restrain",
      term: "curb",
    },
    {
      definition:
        "regulation requiring all people to leave the streets \n                        at stated times; signal (as a bell) announcing the hour \n                        of a curfew",
      term: "curfew",
    },
    {
      definition: "churlish, miserly individual; bad-tempered old person",
      term: "curmudgeon",
    },
    {
      definition:
        "(of writing) flowing; running; having the successive \n                        letters joined",
      term: "cursive",
    },
    {
      definition: "casual; hastily done with little attention to detail",
      term: "cursory",
    },
    {
      definition: "shorten; reduce",
      term: "curtail",
    },
    {
      definition:
        "skeptical or distrustful of human motives; N. cynicism; \n                        CF. cynic: person who believes all people are motivated \n                        by selfishness",
      term: "cynical",
    },
    {
      definition:
        "object of general attention; person or thing that is \n                        a center of attention; CF. Ursa Minor",
      term: "cynosure",
    },
    {
      definition:
        "work at in a nonserious fashion; splash around; move \n                        noisily in a liquid",
      term: "dabble",
    },
    {
      definition:
        "delicate; delicately beautiful; fastidious; not easy \n                        to please; Ex. dainty movement/dress",
      term: "dainty",
    },
    {
      definition: "raised platform for speakers or other important people",
      term: "dais",
    },
    {
      definition:
        "trifle with; toy with; treat without the necessary \n                        seriousness; procrastinate; waste time",
      term: "dally",
    },
    {
      definition:
        "condemn; criticize severely; condemn to everlasting \n                        punishment; doom; bring to ruin; N. damnation",
      term: "damn",
    },
    {
      definition: "damp; unpleasantly wet",
      term: "dank",
    },
    {
      definition:
        "neat and trim (in appearance); (of small men) neat \n                        in appearance and quick in movements; neat; spry",
      term: "dapper",
    },
    {
      definition: "spotted",
      term: "dappled",
    },
    {
      definition: "move or throw suddenly and quickly",
      term: "dart",
    },
    {
      definition:
        "smear (as with paint); cover with something sticky; \n                        Ex. daub one's clothes with mud/paint; N: small bit of \n                        sticky substance; Ex. a daub of paint",
      term: "daub",
    },
    {
      definition: "intimidate; frighten; discourage; dishearten",
      term: "daunt",
    },
    {
      definition: "bold; fearless",
      term: "dauntless",
    },
    {
      definition: "loiter; hang around; waste time doing nothing",
      term: "dawdle",
    },
    {
      definition: "stun as with a blow or shock; bemuse; benumb; N.",
      term: "daze",
    },
    {
      definition:
        "make blind with a sudden intense light; amaze; fill \n                        with wonder",
      term: "dazzle",
    },
    {
      definition:
        "standstill resulting from the opposition of two unrelenting \n                        forces; stalemate",
      term: "deadlock",
    },
    {
      definition:
        "wooden; impassive; with no show of feeling; with an \n                        expressionless face",
      term: "deadpan",
    },
    {
      definition: "scarcity",
      term: "dearth",
    },
    {
      definition: "sudden disastrous downfall or defeat; complete disaster",
      term: "debacle",
    },
    {
      definition: "bar; forbid; exclude; Ex. debarred from jury services",
      term: "debar",
    },
    {
      definition:
        "degrade; reduce in quality or value; degenerate; lower \n                        in esteem; disgrace; N. debasement",
      term: "debase",
    },
    {
      definition:
        "corrupt morally; seduce from virtue; N. debauchery: \n                        wild behavior (with sex and alcohol)",
      term: "debauch",
    },
    {
      definition: "weaken (esp. through heat, hunger, illness); enfeeble",
      term: "debilitate",
    },
    {
      definition:
        "(of men) friendly, charming, and fashionably dressed; \n                        aiming to please; CF. of good disposition",
      term: "debonair",
    },
    {
      definition:
        "rubble; wreckage; scattered remains of something broken \n                        or destroyed",
      term: "debris",
    },
    {
      definition: "expose as false, exaggerated, worthless, etc.; ridicule",
      term: "debunk",
    },
    {
      definition:
        "d\\'ebut; first public appearance; formal presentation \n                        of a young woman to society",
      term: "debut",
    },
    {
      definition: "young woman making formal entrance into society",
      term: "debutante",
    },
    {
      definition:
        "decay; fall to a lower level (of morality, civilization, \n                        or art); ADJ. decadent",
      term: "decadence",
    },
    {
      definition: "pour off gently (wine or liquid)",
      term: "decant",
    },
    {
      definition: "behead",
      term: "decapitate",
    },
    {
      definition: "slow down",
      term: "decelerate",
    },
    {
      definition:
        "falling off at a specific season or stage of growth \n                        as of leaves; Ex. deciduous tree/teeth",
      term: "deciduous",
    },
    {
      definition:
        "kill (usually one out of ten or every tenth man); destroy \n                        or kill a large part of",
      term: "decimate",
    },
    {
      definition: "decode; CF. indecipherable",
      term: "decipher",
    },
    {
      definition: "downward slope",
      term: "declivity",
    },
    {
      definition:
        "(of a dress) having a low-cut neckline; CF. d\\'ecolletage: \n                        low neckline (on a dress)",
      term: "decollete",
    },
    {
      definition:
        "decay; V. decompose: decay; break and separate into \n                        simple parts",
      term: "decomposition",
    },
    {
      definition: "proper (in behavior, conduct, or appearance)",
      term: "decorous",
    },
    {
      definition:
        "propriety; orderliness and good taste in manners; appropriateness \n                        of behavior or conduct",
      term: "decorum",
    },
    {
      definition: "lure or bait; V.",
      term: "decoy",
    },
    {
      definition:
        "authoritative order; edict; judgment of a court of \n                        law; V: order or judge by decree",
      term: "decree",
    },
    {
      definition:
        "weak and in bad condition from old age or hard use; \n                        Ex. decrepit old chair/man",
      term: "decrepit",
    },
    {
      definition:
        "state of collapse or weakness caused by illness or \n                        old age",
      term: "decrepitude",
    },
    {
      definition:
        "express strong disapproval of; condemn openly (something \n                        dangerous to the public); disparage; Ex. decry the violence \n                        of modern films",
      term: "decry",
    },
    {
      definition: "derived by reasoning; V. deduce: infer; derive by reasoning",
      term: "deducible",
    },
    {
      definition: "mar; disfigure",
      term: "deface",
    },
    {
      definition: "embezzle",
      term: "defalcate",
    },
    {
      definition:
        "harm someone's reputation; malign; speak evil of; slander; \n                        N. defamation; ADJ. defamatory",
      term: "defame",
    },
    {
      definition:
        "failure to act; failure to perform a task or be present; \n                        V.",
      term: "default",
    },
    {
      definition:
        "resigned to defeat or failure; accepting defeat or \n                        failure as a natural outcome; N. CF. defeatism",
      term: "defeatist",
    },
    {
      definition:
        "shortcoming; V: desert (in order to join the opposite \n                        one)",
      term: "defect",
    },
    {
      definition: "desertion",
      term: "defection",
    },
    {
      definition:
        "give in respectfully; submit; delay till later; exempt \n                        temporarily; N. deferment; CF. show respect, comply with, \n                        courteous",
      term: "defer",
    },
    {
      definition:
        "courteous regard for another's wish; courteous yielding \n                        to another's wish or opinion (showing respect); ADJ. deferential; \n                        OP. effrontery",
      term: "deference",
    },
    {
      definition: "refusal to yield; resistance; V. defy; ADJ. defiant",
      term: "defiance",
    },
    {
      definition:
        "pollute; make filthy or dirty; corrupt morally; profane; \n                        desecrate; N: narrow passage or gorge through mountains",
      term: "defile",
    },
    {
      definition:
        "most reliable; authorative and complete; that cannot \n                        be improved; conclusive; decisive; definite; Ex. definitive \n                        decision by the supreme court",
      term: "definitive",
    },
    {
      definition: "turn aside; turn away from a straight course",
      term: "deflect",
    },
    {
      definition:
        "destroy leaves; deprive of leaves (by the use of chemicals); \n                        N. defoliant",
      term: "defoliate",
    },
    {
      definition:
        "provide for the payment of; undertake the payment of; \n                        pay",
      term: "defray",
    },
    {
      definition: "strip a priest or minister of church authority; unfrock",
      term: "defrock",
    },
    {
      definition: "neat; skillful",
      term: "deft",
    },
    {
      definition: "dead; no longer in use or existence",
      term: "defunct",
    },
    {
      definition:
        "become worse in quality; deteriorate; ADJ: having become \n                        worse; Ex. a degenerate species; N: depraved or corrupt \n                        person",
      term: "degenerate",
    },
    {
      definition:
        "humiliation; debasement; degeneration; V. degrade: \n                        debase; disgrace; degenerate; reduce (something) in worth; \n                        demote (someone); reduce in rank",
      term: "degradation",
    },
    {
      definition: "remove water from; dry out",
      term: "dehydrate",
    },
    {
      definition:
        "turn into a god; make a god of; idolize; Ex. Kings \n                        were deified; CF. deity",
      term: "deify",
    },
    {
      definition: "condescend; stoop",
      term: "deign",
    },
    {
      definition: "erase; strike out",
      term: "delete",
    },
    {
      definition: "harmful",
      term: "deleterious",
    },
    {
      definition: "consider; ponder; ADJ: done on purpose; slow",
      term: "deliberate",
    },
    {
      definition: "portray; depict; sketch; describe; N. delineation",
      term: "delineate",
    },
    {
      definition:
        "mental disorder marked by confusion; uncontrolled excitement; \n                        ADJ. delirious",
      term: "delirium",
    },
    {
      definition: "flat plain of mud or sand between branches of a river",
      term: "delta",
    },
    {
      definition: "deceive",
      term: "delude",
    },
    {
      definition: "flood; rush; V.",
      term: "deluge",
    },
    {
      definition:
        "false belief; hallucination; deluding; Ex. delusions \n                        of grandeur; Ex. under the delusion that",
      term: "delusion",
    },
    {
      definition:
        "deceptive; likely to delude; misleading; raising vain \n                        hopes; Ex. delusive promises",
      term: "delusive",
    },
    {
      definition: "dig; search deeply; investigate",
      term: "delve",
    },
    {
      definition:
        "person who appeals to people's prejudice; false leader \n                        of people; CF. demagoguery",
      term: "demagogue",
    },
    {
      definition: "disgrace; humiliate; debase in dignity; behave",
      term: "demean",
    },
    {
      definition: "behavior; bearing",
      term: "demeanor",
    },
    {
      definition: "insane",
      term: "demented",
    },
    {
      definition: "fault; bad quality",
      term: "demerit",
    },
    {
      definition: "death",
      term: "demise",
    },
    {
      definition:
        "related to population balance; N. demography: statistical \n                        study of human population",
      term: "demographic",
    },
    {
      definition: "destruction; V. demolish",
      term: "demolition",
    },
    {
      definition:
        "fiendish; cruel; N. demon: evil supernatural being; \n                        devil",
      term: "demoniacdemoniacal)",
    },
    {
      definition: "of or pertaining to the people",
      term: "demotic",
    },
    {
      definition:
        "object (because of doubts, scruples); raise an objection \n                        (showing qualms); hesitate; Ex. demur at the idea of working \n                        on Sunday",
      term: "demur",
    },
    {
      definition:
        "(of a woman or child) grave; quiet and serious; coy; \n                        pretending to be demure",
      term: "demure",
    },
    {
      definition: "blacken; defame",
      term: "denigrate",
    },
    {
      definition:
        "(animal, person, or plant) inhabitant or resident of \n                        a particular place; regular visitor",
      term: "denizen",
    },
    {
      definition:
        "religious group; unit in a system; name or designation; \n                        CF. denominator: common trait or characteristic",
      term: "denomination",
    },
    {
      definition:
        "meaning; distinguishing by name; V. denote: indicate; \n                        refer to directly; mean; CF. connotation",
      term: "denotation",
    },
    {
      definition:
        "final outcome; final development of the plot of a play \n                        or other literary work; the end of a story when everything \n                        is explained",
      term: "denouement",
    },
    {
      definition: "condemn; criticize; N. denunciation",
      term: "denounce",
    },
    {
      definition: "portray",
      term: "depict",
    },
    {
      definition: "reduce; exhaust",
      term: "deplete",
    },
    {
      definition:
        "regret; express sorrow and severe disapproval for something \n                        bad; Ex. deplore their violent behavior; ADJ. deplorable: \n                        very bad; deserving severe disapproval; Ex. deplorable \n                        living condition",
      term: "deplore",
    },
    {
      definition:
        "spread out (troops) in an extended though shallow battle \n                        line; distribute (persons or forces) systematically or \n                        strategically",
      term: "deploy",
    },
    {
      definition: "send out of the country; behave; N. deportation, deportment",
      term: "deport",
    },
    {
      definition: "dethrone; remove from office; give a deposition; testify",
      term: "depose",
    },
    {
      definition: "testimony under oath; deposing; dethroning",
      term: "deposition",
    },
    {
      definition: "extreme corruption; wickedness; V. deprave",
      term: "depravity",
    },
    {
      definition:
        "express disapproval of; deplore; protest against; belittle; \n                        ADJ. deprecatory",
      term: "deprecate",
    },
    {
      definition: "lessen in value; belittle; represent as of little value",
      term: "depreciate",
    },
    {
      definition: "plundering; destruction",
      term: "depredation",
    },
    {
      definition:
        "work or appoint as a deputy; N. deputy: person who \n                        has the power to take charge when the leading person is \n                        away",
      term: "deputize",
    },
    {
      definition: "insane",
      term: "deranged",
    },
    {
      definition:
        "negligent; (of someone) neglectful of duty; (of something) \n                        deserted by an owner; abandoned; N: abandoned property; \n                        homeless or vagrant person",
      term: "derelict",
    },
    {
      definition: "neglect of duty; abandonment",
      term: "dereliction",
    },
    {
      definition: "ridicule; treat with contempt; make fun of; OP. respect",
      term: "deride",
    },
    {
      definition: "ridicule; ADJ. derisive; CF. derisory",
      term: "derision",
    },
    {
      definition:
        "deriving; origin or source of something; Ex. the derivation \n                        of the word",
      term: "derivation",
    },
    {
      definition:
        "unoriginal; obtained from another source; Ex. derivative \n                        prose style; N.",
      term: "derivative",
    },
    {
      definition: "one who studies the skin and its diseases",
      term: "dermatologist",
    },
    {
      definition:
        "expressing a low opinion; disparaging; V. derogate: \n                        detract; disparage",
      term: "derogatory",
    },
    {
      definition: "catch sight of (something distant)",
      term: "descry",
    },
    {
      definition: "profane; violate the sanctity of",
      term: "desecrate",
    },
    {
      definition: "what someone deserves",
      term: "deserts",
    },
    {
      definition: "dry up",
      term: "desiccate",
    },
    {
      definition: "make desolate; forsake; abandon and desert",
      term: "desolate",
    },
    {
      definition: "reckless, desperate outlaw",
      term: "desperado",
    },
    {
      definition:
        "having lost all hope; despairing; reckless and violent \n                        because of loss of hope or despair; undertaken as a last \n                        resort",
      term: "desperate",
    },
    {
      definition:
        "look on with scorn; regard as worthless or distasteful; \n                        ADJ. despicable: contemptible",
      term: "despise",
    },
    {
      definition: "plunder; sack; Ex. despoil the village",
      term: "despoil",
    },
    {
      definition:
        "without hope and courage; depressed; gloomy; N. despondency: \n                        loss of hope with gloom; dejection",
      term: "despondent",
    },
    {
      definition: "tyrant; harsh, authoritarian ruler; CF. despotism",
      term: "despot",
    },
    {
      definition:
        "extremely poor; lacking means of subsistence; utterly \n                        lacking; devoid; Ex. destitute of any experience",
      term: "destitute",
    },
    {
      definition: "aimless; haphazard; digressing at random",
      term: "desultory",
    },
    {
      definition:
        "emotionally removed; free from emotional involvement; \n                        calm and objective; physically separate; N. detachment; \n                        CF. attachment",
      term: "detached",
    },
    {
      definition: "keep waiting; prevent from leaving or going; N. detention",
      term: "detain",
    },
    {
      definition:
        "having a fixed order of procedure; precisely defined; \n                        invariable; fixed; conclusive; final",
      term: "determinate",
    },
    {
      definition:
        "resolve; firmness of purpose; measurement or calculation; \n                        decision",
      term: "determination",
    },
    {
      definition: "something that discourages or deters",
      term: "deterrent",
    },
    {
      definition: "explosion",
      term: "detonation",
    },
    {
      definition: "slandering; aspersion; detracting; CF. detractor",
      term: "detraction",
    },
    {
      definition: "harmful; damaging; N. detriment",
      term: "detrimental",
    },
    {
      definition:
        "turn away from (a principle, norm); move away from \n                        an accepted standard; swerve; depart; diverge; N. deviation; \n                        Ex. deviation of the path of light by a prism",
      term: "deviate",
    },
    {
      definition:
        "roundabout; erratic; deviating from the straight course; \n                        not straightforward; not completely honest; Ex. devious \n                        route",
      term: "devious",
    },
    {
      definition: "think up; invent; plan; bequeath; N: bequest",
      term: "devise",
    },
    {
      definition: "empty; lacking",
      term: "devoid",
    },
    {
      definition:
        "deputize; pass or be passed to others (power, work, \n                        or property); Ex. devolve on/upon/to",
      term: "devolve",
    },
    {
      definition: "enthusiastic follower; enthusiast; Ex. devotee of Bach",
      term: "devotee",
    },
    {
      definition:
        "pious; deeply religious; sincere; earnest; Ex. my devout \n                        hope",
      term: "devout",
    },
    {
      definition: "skillful; skill in using hands or mind; N. dexterity",
      term: "dexterous",
    },
    {
      definition: "diabolic; devilish; fiendish",
      term: "diabolical",
    },
    {
      definition: "crown",
      term: "diadem",
    },
    {
      definition:
        "relating to the art of debate; mutual or reciprocal; \n                        Ex. dialectical situation; N. dialectic: art of arriving \n                        at the truth by the exchange of logical arguments",
      term: "dialectical",
    },
    {
      definition: "sheer; transparent",
      term: "diaphanous",
    },
    {
      definition: "bitter scolding or denunciation; invective; abuse",
      term: "diatribe",
    },
    {
      definition:
        "division into two opposite parts; split; branching \n                        into two parts (especially contradictory ones)",
      term: "dichotomy",
    },
    {
      definition:
        "authoritative and weighty statement (made by a judge \n                        in court); saying; maxim; CF. obiter dictum: incidental, \n                        nonbinding remark (something said in passing)",
      term: "dictum",
    },
    {
      definition:
        "(of speech or writing) intended to teach a moral lesson; \n                        teaching; instructional; N. didacticism",
      term: "didactic",
    },
    {
      definition:
        "metal block used for shaping metal or plastic; device \n                        for stamping or impressing; mold; CF. dice",
      term: "die",
    },
    {
      definition: "shyness; lack of self-confidence; timidity; ADJ. diffident",
      term: "diffidence",
    },
    {
      definition:
        "wordy; verbose; rambling; spread out (like a gas); \n                        V: spread out in all directions; disperse; N. diffusion; \n                        CF. suffuse",
      term: "diffuse",
    },
    {
      definition: "person of high rank or position",
      term: "dignitary",
    },
    {
      definition: "wandering away from the subject; V. digress",
      term: "digression",
    },
    {
      definition:
        "falling to pieces; in a bad condition; ruined because \n                        of neglect; Ex. dilapidated old car/castle; N. dilapidation",
      term: "dilapidated",
    },
    {
      definition:
        "expand; dilate on/upon: speak or write at length on \n                        (a subject)",
      term: "dilate",
    },
    {
      definition: "delaying; tending to delay",
      term: "dilatory",
    },
    {
      definition:
        "situation that requires a choice between equally unfavorable \n                        options; problem; choice of two unsatisfactory alternatives",
      term: "dilemma",
    },
    {
      definition:
        "aimless follower of an art or a field of knowledge \n                        (not taking it seriously); amateur; dabbler; CF. delight",
      term: "dilettante",
    },
    {
      definition: "steadiness of effort; persistent hard work",
      term: "diligence",
    },
    {
      definition:
        "make (a liquid) less concentrated; reduce in strength; \n                        Ex. dilute the influence of the president",
      term: "dilute",
    },
    {
      definition: "lessening; reduction in size; V. diminish",
      term: "diminution",
    },
    {
      definition:
        "continued loud noise; V: make a din; instill by wearying \n                        repetition",
      term: "din",
    },
    {
      definition: "small boat (often ship's boat)",
      term: "dinghy",
    },
    {
      definition:
        "(of things and place) dirty and dull; Ex. dingy street/curtain",
      term: "dingy",
    },
    {
      definition: "means; effort; Ex. by dint of hard work",
      term: "dint",
    },
    {
      definition:
        "life-size, three-dimensional scene from nature or history; \n                        three-dimensional scene with modeled figures against a \n                        painted background",
      term: "diorama",
    },
    {
      definition:
        "warning of disaster; disastrous; (of needs and dangers) \n                        very great; urgent; Ex. dire prediction/need of food",
      term: "dire",
    },
    {
      definition:
        "funeral song; slow mournful piece of music (sung over \n                        a dead person)",
      term: "dirge",
    },
    {
      definition:
        "correct a false impression; undeceive; free from a \n                        wrong belief",
      term: "disabuse",
    },
    {
      definition:
        "disloyal; lacking loyality; V. disaffect: cause to \n                        lose affection or loyalty",
      term: "disaffected",
    },
    {
      definition: "disapproval; condemnation",
      term: "disapprobation",
    },
    {
      definition:
        "state of disorder; a disorderly or untidy state; Ex. \n                        with her clothes in disarray",
      term: "disarray",
    },
    {
      definition:
        "denial; disclaiming; repudiating; disowning; V. disavow; \n                        CF. disclaim",
      term: "disavowal",
    },
    {
      definition:
        "dissolve; disperse; (of a group) break up and separate; \n                        Ex. The club has disbanded.",
      term: "disband",
    },
    {
      definition: "make (a lawyer) leave the bar or the legal profession",
      term: "disbar",
    },
    {
      definition: "pay out (as from a fund); N. disbursement; CF. purse",
      term: "disburse",
    },
    {
      definition: "distinguishable; perceivable; Ex. discernible improvement",
      term: "discernible",
    },
    {
      definition:
        "mentally quick and observant; having insight; perceptive; \n                        able to make good judgments; V. discern: perceive",
      term: "discerning",
    },
    {
      definition: "disown; renounce claim to; deny; CF. disclaimer",
      term: "disclaim",
    },
    {
      definition: "reveal; N. disclosure",
      term: "disclose",
    },
    {
      definition: "discomposed; confused",
      term: "discombobulated",
    },
    {
      definition:
        "frustrate; put to rout; defeat; disconcert; embarrass; \n                        perturb",
      term: "discomfit",
    },
    {
      definition: "disturb the composure of; confuse",
      term: "discompose",
    },
    {
      definition: "confuse; upset; embarrass; perturb",
      term: "disconcert",
    },
    {
      definition: "hopelessly sad (at the loss of something)",
      term: "disconsolate",
    },
    {
      definition:
        "conflict; lack of harmony; dissonance (when musical \n                        notes are played)",
      term: "discord",
    },
    {
      definition: "not harmonious; conflicting",
      term: "discordant",
    },
    {
      definition:
        "disregard; regard (a story or news) as unimportant; \n                        deduct from a cost",
      term: "discount",
    },
    {
      definition:
        "serious speech, writing, or conversation; formal discussion \n                        (either written or spoken); conversation; V.",
      term: "discourse",
    },
    {
      definition:
        "defame; disgrace; destroy confidence in; disbelieve; \n                        N. CF. discreditable: causing discredit; shameful",
      term: "discredit",
    },
    {
      definition:
        "lack of consistency or agreement as between facts; \n                        difference; Ex. discrepancy between two descriptions",
      term: "discrepancy",
    },
    {
      definition: "separate; unconnected",
      term: "discrete",
    },
    {
      definition:
        "prudence; ability to adjust actions to circumstances; \n                        freedom of action or judgment; ADJ. discreet; CF. discretionary",
      term: "discretion",
    },
    {
      definition: "distinguish; make distinctions on the basis of preference",
      term: "discriminate",
    },
    {
      definition:
        "able to see differences; discerning; prejudiced; N. \n                        discrimination",
      term: "discriminating",
    },
    {
      definition:
        "(of a person or writing) digressing; rambling (without \n                        any clear plan)",
      term: "discursive",
    },
    {
      definition: "treat with scorn or contempt",
      term: "disdain",
    },
    {
      definition:
        "debark; go ashore (from a ship); unload cargo from \n                        a ship; CF. embark",
      term: "disembark",
    },
    {
      definition: "disfranchise; deprive of a civil right; OP. enfranchise",
      term: "disenfranchise",
    },
    {
      definition:
        "uncouple; separate; disconnect; stop fighting; OP. \n                        engage",
      term: "disengage",
    },
    {
      definition: "mar the appearance of; spoil",
      term: "disfigure",
    },
    {
      definition: "surrender something (stolen); eject; vomit; OP. gorge",
      term: "disgorge",
    },
    {
      definition: "make discontented",
      term: "disgruntle",
    },
    {
      definition: "discourage",
      term: "dishearten",
    },
    {
      definition: "untidy (of hair or clothing); V. dishevel",
      term: "disheveled",
    },
    {
      definition: "disgrace; N. ADJ. dishonorable",
      term: "dishonor",
    },
    {
      definition: "unwillingness",
      term: "disinclination",
    },
    {
      definition:
        "not naive; not candid; sophisticated; worldly wise; \n                        OP. ingenuous",
      term: "disingenuous",
    },
    {
      definition: "dig up; unearth; OP. inter",
      term: "disinter",
    },
    {
      definition: "unprejudiced; free from bias and self-interest; objective",
      term: "disinterested",
    },
    {
      definition:
        "disconnected; lacking coherence; V. disjoint: disconnect; \n                        disjoin",
      term: "disjointed",
    },
    {
      definition:
        "act or state of separation; disunity; CF. disjunctive: \n                        expressing a choice between two ideas; CF. conjunction; \n                        CF. conjunctive",
      term: "disjunction",
    },
    {
      definition:
        "remove (forcibly); force out of a position; Ex. dislodge \n                        the food caught in his throat; CF. lodge",
      term: "dislodge",
    },
    {
      definition: "take apart; disassemble",
      term: "dismantle",
    },
    {
      definition:
        "cut into small parts; cut (a body) apart limb from \n                        limb",
      term: "dismember",
    },
    {
      definition:
        "eliminate from consideration; no longer consider; put \n                        out of court without further hearing; reject; discharge \n                        from employment; direct to leave; ADJ. dismissive; N. \n                        dismissal",
      term: "dismiss",
    },
    {
      definition: "belittle",
      term: "disparage",
    },
    {
      definition: "basically different; impossible to compare; unrelated",
      term: "disparate",
    },
    {
      definition: "difference; condition of inequality; OP. parity",
      term: "disparity",
    },
    {
      definition: "calm; impartial; not influenced by personal feelings",
      term: "dispassionate",
    },
    {
      definition:
        "speediness; prompt execution; message sent with all \n                        due speed; V: send to a specified destination; finish \n                        promptly; kill",
      term: "dispatch",
    },
    {
      definition: "scatter; drive away; cause to vanish",
      term: "dispel",
    },
    {
      definition:
        "distribute; prepare and give out (medicines); N. dispensation: \n                        dispensing; religious system; official exemption from \n                        an obligation or a rule",
      term: "dispense",
    },
    {
      definition: "scatter; Ex. disperse the cloud/crowd",
      term: "disperse",
    },
    {
      definition: "lacking in spirit",
      term: "dispirited",
    },
    {
      definition: "amuse; Ex. disport oneself; CF. divert",
      term: "disport",
    },
    {
      definition:
        "lack of proportion (between the parts); ADJ. disproportionate",
      term: "disproportion",
    },
    {
      definition: "argumentative; fond of argument",
      term: "disputatious",
    },
    {
      definition: "uneasiness; anxiety; V. disquiet: make anxious",
      term: "disquietude",
    },
    {
      definition:
        "formal systematic inquiry; explanation of the results \n                        of a formal inquiry; long formal speech or written report",
      term: "disquisition",
    },
    {
      definition: "analysis; cutting apart in order to examine",
      term: "dissection",
    },
    {
      definition: "disguise; hide the real nature of; pretend",
      term: "dissemble",
    },
    {
      definition: "distribute; spread; scatter (like seeds)",
      term: "disseminate",
    },
    {
      definition: "disagreement of opinions causing strife within a group",
      term: "dissension",
    },
    {
      definition: "disagree",
      term: "dissent",
    },
    {
      definition: "formal essay; treatise",
      term: "dissertation",
    },
    {
      definition:
        "dissenting (with an opinion, a group, or a government); \n                        rebellious; N.",
      term: "dissident",
    },
    {
      definition: "pretend; conceal by feigning; dissemble",
      term: "dissimulate",
    },
    {
      definition: "squander; waste foolishly; scatter",
      term: "dissipate",
    },
    {
      definition:
        "disintegration; reduction to a liquid form; looseness \n                        in morals; sensual indulgence; debauchery; ADJ. dissolute: \n                        lacking in moral restraint; leading an immoral life",
      term: "dissolution",
    },
    {
      definition: "discord",
      term: "dissonance",
    },
    {
      definition: "persuade not to do; discourage; N. dissuasion",
      term: "dissuade",
    },
    {
      definition:
        "reserved or aloof; cold in manner; Ex. distant greeting; \n                        ADV. distantly",
      term: "distant",
    },
    {
      definition: "expand; swell out",
      term: "distend",
    },
    {
      definition:
        "refine (a liquid by evaporating and subsequent condensation); \n                        concentrate; separate the most important parts from; Ex. \n                        distill fresh water from sea water; CF. brew",
      term: "distill",
    },
    {
      definition: "clearly different; clearly noticed",
      term: "distinct",
    },
    {
      definition:
        "honor; excellence; difference; contrast; discrimination; \n                        Ex. graduated with distinction; Ex. a writer of real distinction",
      term: "distinction",
    },
    {
      definition: "clearly different from others of the same kind",
      term: "distinctive",
    },
    {
      definition:
        "twist out of shape; give a false account of; misrepresent; \n                        N. distortion",
      term: "distort",
    },
    {
      definition:
        "take (one's attention) off something; upset emotionally; \n                        make anxious; ADJ. distracted",
      term: "distract",
    },
    {
      definition: "absentminded; distracted",
      term: "distrait",
    },
    {
      definition:
        "upset; distracted by anxiety; very anxious and troubled \n                        almost to the point of madness; Ex. distraught with grief/worry",
      term: "distraught",
    },
    {
      definition: "daily; occurring during the daytime",
      term: "diurnal",
    },
    {
      definition: "operatic singer; prima donna",
      term: "diva",
    },
    {
      definition:
        "vary; go in different directions from the same point; \n                        ADJ. divergent: differing; deviating",
      term: "diverge",
    },
    {
      definition:
        "differing in some characteristics (from each other); \n                        various; N. diversity: | variety; dissimilitude; lack \n                        of resemblance",
      term: "diverse",
    },
    {
      definition:
        "act of turning aside; pastime; V. divert: turn aside \n                        from a course; distract; amuse",
      term: "diversion",
    },
    {
      definition:
        "strip (as of clothes); deprive (as of rights); dispossess; \n                        N. divestiture(divestment)",
      term: "divest",
    },
    {
      definition:
        "perceive intuitively (by or as if by magic); foresee \n                        the future; foretell; dowse; ADJ. N. divination",
      term: "divine",
    },
    {
      definition: "reveal",
      term: "divulge",
    },
    {
      definition: "obedient; easily managed; submissive",
      term: "docile",
    },
    {
      definition:
        "program as for trial; book where such entries are made; \n                        list of things to be done; agenda; label fixed to a package \n                        listing contents or directions; V: describe in a docket",
      term: "docket",
    },
    {
      definition:
        "unable to compromise about points of doctrine; dogmatic; \n                        unyielding; marked by inflexible attachment to a doctrine \n                        without regard to its practical difficulties",
      term: "doctrinaire",
    },
    {
      definition:
        "teachings in general; particular principle (religious, \n                        legal, etc.) taught; dogma; tenet; ADJ. doctrinal",
      term: "doctrine",
    },
    {
      definition:
        "provide written evidence (for a claim); record with \n                        documents; N.",
      term: "document",
    },
    {
      definition: "shaky; infirm from old age; V. dodder",
      term: "doddering",
    },
    {
      definition: "take off; OP. don",
      term: "doff",
    },
    {
      definition:
        "determined; stubborn; stubbornly persevering; tenacious; \n                        Ex. Inspector Javert's dogged pursuit of Jean Valjean",
      term: "dogged",
    },
    {
      definition: "poor verse",
      term: "doggerel",
    },
    {
      definition:
        "opinionated; holding stubbornly to one's opinion; arbitrary; \n                        doctrinal",
      term: "dogmatic",
    },
    {
      definition:
        "blues; listlessness(lack of spirit or energy); slack(inactive) \n                        period; period of stagnation; ocean area near the equator \n                        where ships cannot move because there is no wind; Ex. \n                        in the doldrums",
      term: "doldrums",
    },
    {
      definition: "sorrowful; N. dolor",
      term: "dolorous",
    },
    {
      definition: "slow-thinking stupid person; CF. dull",
      term: "dolt",
    },
    {
      definition:
        "home; V. ADJ. domiciled: having one's domicile; Ex. \n                        He is domiciled in Britain.",
      term: "domicile",
    },
    {
      definition:
        "exercising the most influence; high and easily seen; \n                        stronger than the other part of a system; not recessive",
      term: "dominant",
    },
    {
      definition:
        "control; rule; enjoy a commanding position in; overlook \n                        from a height; 郴妨促焊促",
      term: "dominate",
    },
    {
      definition: "rule over tyrannically",
      term: "domineer",
    },
    {
      definition: "put on; OP. doff",
      term: "don",
    },
    {
      definition:
        "condemnation to a severe penalty; ruin; fate (esp. \n                        a tragic or ruinous one); V.",
      term: "doom",
    },
    {
      definition: "sleeping; temporarily inactive; lethargic; latent",
      term: "dormant",
    },
    {
      definition: "window projecting upright from roof; CF. sleeping room",
      term: "dormer",
    },
    {
      definition: "relating to the back of an animal; Ex. dorsal fin",
      term: "dorsal",
    },
    {
      definition:
        "file of documents on a subject or person; file; CF. \n                        bundle of papers labeled on the back",
      term: "dossier",
    },
    {
      definition:
        "senility; feeblemindedness of old age; Ex. In one's \n                        dotage",
      term: "dotage",
    },
    {
      definition: "be excessively fond of; show signs of mental decline",
      term: "dote",
    },
    {
      definition: "sullen; gloomy; stubborn",
      term: "dour",
    },
    {
      definition:
        "plunge into water or liquid; dip; immerse; drench; \n                        wet throughly; extinguish; throw water over; dowse",
      term: "douse",
    },
    {
      definition:
        "untidy (of a woman or clothes); slovenly; dressed in \n                        an unattractive way; shabby; CF. unattractive woman",
      term: "dowdy",
    },
    {
      definition: "disheartened; dejected; sad; directed downward",
      term: "downcast",
    },
    {
      definition:
        "money or property brought by a bride to her husband \n                        at marriage",
      term: "dowry",
    },
    {
      definition:
        "use a divining rod to search for underground water \n                        or minerals",
      term: "dowse",
    },
    {
      definition: "sleep lightly; nap",
      term: "doze",
    },
    {
      definition: "dull; lacking color; cheerless ; Ex. drab coat/life",
      term: "drab",
    },
    {
      definition:
        "extremely severe; Ex. draconian punishment; CF. Draco: \n                        Athenian politician",
      term: "draconian",
    },
    {
      definition:
        "first rough form; conscription; draught; V: make a \n                        draft of; conscript",
      term: "draft",
    },
    {
      definition:
        "prose or verse composition to be performed by actors; \n                        play; exciting and unusual situation",
      term: "drama",
    },
    {
      definition: "strong; violent and severe; Ex. drastic changes/measures",
      term: "drastic",
    },
    {
      definition:
        "current of air (through a room or to a fire); act of \n                        pulling roads; act of swallowing liquid or amount of liquid \n                        swallowed at a time",
      term: "draught",
    },
    {
      definition: "choosing of a lot or card",
      term: "draw",
    },
    {
      definition: "sediment in a liquid; lees; worthless residue",
      term: "dregs",
    },
    {
      definition:
        "flow or fall in drops; let saliva flow out slowly from \n                        the mouth; move a ball; N.",
      term: "dribble",
    },
    {
      definition:
        "fall or let fall in drops; shed drops; N: action or \n                        sound of falling in drops; liquid that falls in drops",
      term: "drip",
    },
    {
      definition: "nonsense; foolishness; V: talk nonsense",
      term: "drivel",
    },
    {
      definition: "queer and amusing",
      term: "droll",
    },
    {
      definition: "talk dully; buzz or murmur like a bee; N.",
      term: "drone",
    },
    {
      definition:
        "bend or hang downward; become weakened; Ex. His shoulders \n                        drooped with tiredness; N.",
      term: "droop",
    },
    {
      definition: "waste matter; worthless impurities",
      term: "dross",
    },
    {
      definition: "do drudgery; N: person who drudges",
      term: "drudge",
    },
    {
      definition: "hard unpleasant work; menial work",
      term: "drudgery",
    },
    {
      definition:
        "questionable; (of something) causing doubt; (of someone) \n                        filled with doubt; N. dubiety",
      term: "dubious",
    },
    {
      definition:
        "malleable; pliable; (of metals) easily pulled into \n                        shape; flexible; (of someone) easily influenced or controlled",
      term: "ductile",
    },
    {
      definition: "sweet sounding; pleasing to the ear; melodious",
      term: "dulcet",
    },
    {
      definition:
        "(of colors or surfaces) not bright; cloudy; overcast; \n                        boring; (of edge or sound) not sharp; not rapid; sluggish; \n                        slow in thinking and understanding; stupid; V.",
      term: "dull",
    },
    {
      definition:
        "astonish (making dumb); ADJ. dumbfounded, dumfounded, \n                        dumbstruck",
      term: "dumbfounddumfound)",
    },
    {
      definition: "imitation of a real object used as a substitute; effigy",
      term: "dummy",
    },
    {
      definition: "someone easily fooled or deceived; V: deceive",
      term: "dupe",
    },
    {
      definition:
        "double-dealing; hypocrisy; being dishonest and deceitful; \n                        ADJ. duplicitous",
      term: "duplicity",
    },
    {
      definition: "length of time something lasts",
      term: "duration",
    },
    {
      definition:
        "forcible restraint, especially unlawfully; coercion \n                        by threat; illegal coercion; Ex. a promise made under \n                        duress",
      term: "duress",
    },
    {
      definition:
        "(of people or their behavior) respectful; obedient \n                        (filled with a sense of duty)",
      term: "dutifulduteous)",
    },
    {
      definition: "shrink; reduce gradually",
      term: "dwindle",
    },
    {
      definition: "energetic; vigorously active",
      term: "dynamic",
    },
    {
      definition: "generator for producing electricity; energetic person",
      term: "dynamo",
    },
    {
      definition: "abnormal; impaired",
      term: "dys",
    },
    {
      definition: "inflammatory disorder of the lower intestinal tract",
      term: "dysentery",
    },
    {
      definition:
        "word blindness; learning disorder marked by impairment \n                        of the ability to read",
      term: "dyslexia",
    },
    {
      definition:
        "suffering from indigestion; N. dyspepsia: indigestion; \n                        difficulty in digesting food",
      term: "dyspeptic",
    },
    {
      definition: "set aside (money or time) for a particular purpose",
      term: "earmark",
    },
    {
      definition:
        "gain for the performance of service or labor; gain \n                        (something that one deserves); deserve",
      term: "earn",
    },
    {
      definition:
        "of this earth; terrestrial; worldly; not divine; possible; \n                        Ex. no earthly reason",
      term: "earthly",
    },
    {
      definition:
        "unrefined; coarse; of earth; Ex. earthy remarks; OP. \n                        ethereal",
      term: "earthy",
    },
    {
      definition:
        "(of the tide) recede; lessen; diminish; N. OP. flow: \n                        rise of tide",
      term: "ebb",
    },
    {
      definition:
        "showing excitement; overflowing with enthusiasm; boiling; \n                        N. ebullience; N. ebullition: state of boiling",
      term: "ebullient",
    },
    {
      definition:
        "irregular; odd; unconventional; whimsical; bizarre; \n                        not concentric",
      term: "eccentric",
    },
    {
      definition: "oddity; idiosyncrasy",
      term: "eccentricity",
    },
    {
      definition:
        "ecclesiastical; pertaining to the church; N: minister; \n                        priest; cleric; clergyman",
      term: "ecclesiastic",
    },
    {
      definition:
        "selective; composed of elements drawn from disparate \n                        sources; selecting individual elements from a variety \n                        of sources; N. eclecticism",
      term: "eclectic",
    },
    {
      definition: "darken; extinguish; outshine; surpass; cause an eclipse",
      term: "eclipse",
    },
    {
      definition: "path of the sun and the planets",
      term: "ecliptic",
    },
    {
      definition:
        "person concerned with the interrelationship between \n                        living organisms and their environment; person concerned \n                        with the detrimental effects of human civilization on \n                        the environment; CF. ecology",
      term: "ecologist",
    },
    {
      definition:
        "efficiency or conciseness in using something; thrifty \n                        management of resources",
      term: "economy",
    },
    {
      definition: "ecological community together with its environment",
      term: "ecosystem",
    },
    {
      definition:
        "rapture; very strong feeling of joy and happiness; \n                        any overpowering emotion; ADJ. ecstatic: causing or experiencing \n                        ecstasy",
      term: "ecstasy",
    },
    {
      definition: "swirling current of water, air, etc.; V.",
      term: "eddy",
    },
    {
      definition:
        "decree (especially one issued by a sovereign); official \n                        command",
      term: "edict",
    },
    {
      definition: "building (of imposing size)",
      term: "edifice",
    },
    {
      definition: "instruct; correct morally",
      term: "edify",
    },
    {
      definition: "weird; causing fear because strange",
      term: "eerie",
    },
    {
      definition: "rub out; remove the surface of",
      term: "efface",
    },
    {
      definition:
        "effectual; producing a strong response; striking; in \n                        operation; in effect; Ex. effective speech/photograph",
      term: "effective",
    },
    {
      definition: "able to produce a desired effect; valid",
      term: "effectual",
    },
    {
      definition: "effect; produce; achieve; Ex. effectuate a reconciliation",
      term: "effectuate",
    },
    {
      definition: "having womanly traits",
      term: "effeminate",
    },
    {
      definition:
        "inner excitement or exuberance; showing high spirits; \n                        emitting bubbles forming inside; bubbling from fermentation \n                        or carbonation; ADJ. effervescent; V. effervesce",
      term: "effervescence",
    },
    {
      definition:
        "having lost one's original power; barren; worn out; \n                        exhausted",
      term: "effete",
    },
    {
      definition:
        "power to produce desired effect; ADJ. efficacious: \n                        effectual",
      term: "efficacy",
    },
    {
      definition:
        "dummy; likeness of a person made of wood, paper, or \n                        stone; Ex. burn an effigy of the President",
      term: "effigy",
    },
    {
      definition: "noxious(harmful) smell",
      term: "effluvium",
    },
    {
      definition:
        "rudeness without any sense of shame; shameless boldness; \n                        presumptousness; nerve; cheek",
      term: "effrontery",
    },
    {
      definition: "shining brightly; brilliant",
      term: "effulgent",
    },
    {
      definition:
        "pouring forth; unrestrained outpouring of feeling; \n                        V. effuse: pour out; ADJ. effusive: pouring forth; gushing",
      term: "effusion",
    },
    {
      definition: "one's opinion of oneself; self-esteem",
      term: "ego",
    },
    {
      definition:
        "excessive interest in one's self; belief that one should \n                        be interested in one's self rather than in others; selfishness; \n                        ADJ. egoistic, egoistical",
      term: "egoism",
    },
    {
      definition:
        "tendency to speak or write of oneself excessively; \n                        conceit; self-importance",
      term: "egotism",
    },
    {
      definition:
        "egotistic; excessively self-centered(egocentric); self-important; \n                        conceited",
      term: "egotistical",
    },
    {
      definition: "notorious; conspicuously bad or shocking",
      term: "egregious",
    },
    {
      definition:
        "exit; opening for going out; act of going out; OP. \n                        ingress",
      term: "egress",
    },
    {
      definition:
        "exclamation; abrupt ejection (to discharge sperm); \n                        V. ejaculate",
      term: "ejaculation",
    },
    {
      definition:
        "work out carefully; add more detail or information; \n                        ADJ.",
      term: "elaborate",
    },
    {
      definition: "addition of details; intricacy",
      term: "elaboration",
    },
    {
      definition:
        "able to spring back into shape; quick to recover (as \n                        from disappointment); able to adapt to change; Ex. elastic \n                        plans; N: elastic material",
      term: "elastic",
    },
    {
      definition:
        "filled with excited joy and pride; overjoyed; in high \n                        spirits; joyful and proud; Ex. elated crowd; V. elate; \n                        N. elation",
      term: "elated",
    },
    {
      definition:
        "poem or song expressing lamentation (for the dead); \n                        ADJ. elegiacal, elegiac",
      term: "elegy",
    },
    {
      definition:
        "elevated position; altitude; height; flat upright side \n                        of a building; angle made by pointing a gun; Ex. The elevation \n                        of her style is much admired; Ex. front elevation of the \n                        house",
      term: "elevation",
    },
    {
      definition:
        "draw out fact or information (by discussion or from \n                        someone)",
      term: "elicit",
    },
    {
      definition: "cure-all; panacea; something invigorating",
      term: "elixir",
    },
    {
      definition:
        "omission of words from a text; mark used to indicate \n                        an omission (when the meaning can be understood without \n                        them); PL. ellipses",
      term: "ellipsis",
    },
    {
      definition:
        "elliptic; oval; of an ellipse; containing an ellipsis; \n                        ambiguous either purposely or because key words have been \n                        left out",
      term: "elliptical",
    },
    {
      definition: "run away secretly with the intention of getting married",
      term: "elope",
    },
    {
      definition:
        "expressiveness; persuasive speech; ADJ. eloquent: movingly \n                        expressive; expressing ideas well so that the hearers \n                        can be influeneced",
      term: "eloquence",
    },
    {
      definition: "explain; make clear; clarify; enlighten; CF. lucid",
      term: "elucidate",
    },
    {
      definition:
        "evasive; not frank; baffling; hard to grasp, catch, \n                        or understand; V. elude: escape from; escape the understanding \n                        or grasp of; Ex. elude the hunter; Ex. His name eludes \n                        me.",
      term: "elusive",
    },
    {
      definition: "relating to paradise; blissful",
      term: "elysian",
    },
    {
      definition: "place or condition of bliss",
      term: "elysium",
    },
    {
      definition: "thin and wasted (from hunger or illness)",
      term: "emaciated",
    },
    {
      definition: "issue forth; come out",
      term: "emanate",
    },
    {
      definition: "set free; liberate",
      term: "emancipate",
    },
    {
      definition: "weaken; castrate",
      term: "emasculate",
    },
    {
      definition: "ban on commerce or other activity",
      term: "embargo",
    },
    {
      definition: "commence; go on board a boat; begin a journey",
      term: "embark",
    },
    {
      definition:
        "enclose; place in something; fix firmly in a surrounding \n                        mass",
      term: "embedimbed) ",
    },
    {
      definition:
        "adorn; ornament; enhance as a story (by adding fictitious \n                        details)",
      term: "embellish",
    },
    {
      definition:
        "taking for one's own use in violation of trust; stealing \n                        (of money placed in one's care)",
      term: "embezzlement",
    },
    {
      definition:
        "make bitter; fill with painful or bitter feelings; \n                        make sad and angry; Ex. He was embittered by many disappointments.",
      term: "embitter",
    },
    {
      definition: "ornament richly (a shield or flag); N. emblazonment",
      term: "emblazon",
    },
    {
      definition: "give a bodily form to; incorporate; include",
      term: "embody",
    },
    {
      definition:
        "produce a design in raised relief; decorate with a \n                        raised design",
      term: "emboss",
    },
    {
      definition:
        "hug; clasp with the arms; adopt or espouse; accept \n                        readily; encircle; include; Ex. embrace the cause/socialism; \n                        Ex. all-embracing; CF. brace; CF. bracelet",
      term: "embrace",
    },
    {
      definition:
        "decorate with needlework; ornament (a story) with fancy \n                        or fictitious details; embellish",
      term: "embroider",
    },
    {
      definition:
        "throw into confusion; involve in strife, dispute, or \n                        quarrel; entangle; CF. imbroglio",
      term: "embroil",
    },
    {
      definition:
        "undeveloped; rudimentary; N. embryo: organism in the \n                        early stage of development",
      term: "embryonic",
    },
    {
      definition:
        "correct (usually a text); N. emendation: correction \n                        of errors; improvement",
      term: "emend",
    },
    {
      definition: "substance causing vomiting; ADJ.",
      term: "emetic",
    },
    {
      definition:
        "rising above others; high; lofty; distinguished; Ex. \n                        eminent position",
      term: "eminent",
    },
    {
      definition: "agent (sent on a mission to represent another); messenger",
      term: "emissary",
    },
    {
      definition: "soothing or softening remedy (for the skin); ADJ.",
      term: "emollient",
    },
    {
      definition: "salary; payment for an office; compensation",
      term: "emolument",
    },
    {
      definition:
        "ability to identify with another's feelings, ideas, \n                        etc.; identification with and understanding of another's \n                        feelings; V. empathize; CF. sympathy",
      term: "empathy",
    },
    {
      definition: "based on experience",
      term: "empirical",
    },
    {
      definition: "imitate; rival; try to equal or excel (through imitation)",
      term: "emulate",
    },
    {
      definition: "make (a bill) into law",
      term: "enact",
    },
    {
      definition:
        "in love; Ex. enamored of his own beauty; V. enamor: \n                        inspire with love",
      term: "enamored",
    },
    {
      definition: "encode; convert a message into code; put into cipher",
      term: "encipher",
    },
    {
      definition: "surround",
      term: "encircle",
    },
    {
      definition: "territory enclosed within an alien land",
      term: "enclave",
    },
    {
      definition:
        "praising; eulogistic; N. encomium: very high praise; \n                        eulogy",
      term: "encomiastic",
    },
    {
      definition:
        "surround; include; Ex. His activities encompass publishing \n                        and computers.",
      term: "encompass",
    },
    {
      definition:
        "gradual intrusion; Ex. I resent all these encroachments \n                        on my valuable time; V. encroach: take another's possessions \n                        or right gradually or stealthily; intrude; Ex. encroach \n                        on/upon",
      term: "encroachment",
    },
    {
      definition: "burden; N. encumbrance",
      term: "encumber",
    },
    {
      definition:
        "make beloved; Ex. endear her to everyone; ADJ. dear: \n                        loved; cherished; high-priced",
      term: "endear",
    },
    {
      definition: "fond word or act; expression of affection",
      term: "endearment",
    },
    {
      definition:
        "prevailing among a specific group of people or in a \n                        specific area or country; peculiar to a particular region \n                        or people; CF. pandemic",
      term: "endemic",
    },
    {
      definition:
        "approve; support; write one's signature on the back \n                        of; N. endorsement; CF. dorsal",
      term: "endorse",
    },
    {
      definition: "provide with some quality; endow",
      term: "endue",
    },
    {
      definition:
        "lasting; surviving; V. endure: bear (pain or suffering) \n                        for a long time; remain alive (in spite of difficulties); \n                        last; survive",
      term: "enduring",
    },
    {
      definition: "invigorate; give energy to; make forceful and active",
      term: "energize",
    },
    {
      definition: "weaken; take away energy from",
      term: "enervate",
    },
    {
      definition:
        "admit to the rights of citizenship (especially the \n                        right to vote); CF. franchise",
      term: "enfranchise",
    },
    {
      definition:
        "attract; employ; hire; pledge oneself; confront; fight; \n                        enter into confliction; interlock; lock together; participate; \n                        N. engagement: agreement to marry; arrangement to meet \n                        someone or to do something; battle",
      term: "engage",
    },
    {
      definition: "employed; busy; betrothed; involved in conflict",
      term: "engaged",
    },
    {
      definition: "charming; attractive",
      term: "engaging",
    },
    {
      definition: "cause; produce; give rise to",
      term: "engender",
    },
    {
      definition: "occupy fully; absorb",
      term: "engross",
    },
    {
      definition: "surround and swallow up",
      term: "engulf",
    },
    {
      definition:
        "increase; make greater (as in value, reputation, or \n                        usefulness); improve",
      term: "enhance",
    },
    {
      definition: "puzzle; mystery; ADJ. enigmatic: obscure; puzzling",
      term: "enigma",
    },
    {
      definition: "command; order; forbid",
      term: "enjoin",
    },
    {
      definition:
        "(cause to) join the armed forces; obtain (help, sympathy, \n                        or support)",
      term: "enlist",
    },
    {
      definition: "make lively or spirited; animate",
      term: "enliven",
    },
    {
      definition: "ill will; hatred; hostility",
      term: "enmity",
    },
    {
      definition:
        "boredom; listlessness and dissatisfaction resulting \n                        from lack of interest; CF. annoy",
      term: "ennui",
    },
    {
      definition:
        "hugeness (in a bad sense); excessive wickedness; Ex. \n                        enormity of the crime; ADJ. enormous",
      term: "enormity",
    },
    {
      definition: "please intensely; fill with rapture and delight",
      term: "enrapture",
    },
    {
      definition:
        "settle comfortably; place comfortably (in a secure \n                        place)",
      term: "ensconce",
    },
    {
      definition: "follow (as a result)",
      term: "ensue",
    },
    {
      definition:
        "make necessary; require; necessitate; involve; limit \n                        the inheritance of (property) to a specified succession \n                        of heirs; Ex. entail A on/upon B",
      term: "entail",
    },
    {
      definition:
        "willingness to take new ventures; initiative; business \n                        organization; plan (that is difficult or daring); Ex. \n                        their latest enterprise to sail round the world in a small \n                        boat",
      term: "enterprise",
    },
    {
      definition: "full of initiative; showing enterprise",
      term: "enterprising",
    },
    {
      definition:
        "capture; enslave; captivate; hold the complete attention \n                        of (as if magic); hold spellbound",
      term: "enthrall",
    },
    {
      definition: "lure; persuade to do (something wrong); attract; tempt",
      term: "entice",
    },
    {
      definition: "real being",
      term: "entity",
    },
    {
      definition: "study of insects",
      term: "entomology",
    },
    {
      definition: "group of attendants; retinue; CF. surround",
      term: "entourage",
    },
    {
      definition:
        "put under a spell(condition caused by magical power); \n                        carry away(fill with strong feeling) with emotion; put \n                        into a trance; fill with delight",
      term: "entrance",
    },
    {
      definition: "plead; ask earnestly",
      term: "entreat",
    },
    {
      definition:
        "entrance; a way in; right to enter; main dish of a \n                        meal; Ex. entree into the exclusive circle",
      term: "entreeentr\\'ee)",
    },
    {
      definition:
        "businessperson (who assumes the risk of a business \n                        venture); contractor; ADJ. entrepreneurial",
      term: "entrepreneur",
    },
    {
      definition: "list; mention one by one",
      term: "enumerate",
    },
    {
      definition:
        "announce; proclaim; utter or speak, especially distinctly; \n                        pronounce clearly; articulate; Ex. This theory was first \n                        enunciated by him.",
      term: "enunciate",
    },
    {
      definition:
        "enclose; surround; N. environs: surrounding area (as \n                        of a city)",
      term: "environ",
    },
    {
      definition:
        "long period of time; an age; longest division of geologic \n                        time containing two or more eras",
      term: "eonaeon) ",
    },
    {
      definition: "ornament worn on the shoulder (of a uniform, etc.)",
      term: "epauletepaulette)",
    },
    {
      definition: "short-lived; fleeting",
      term: "ephemeral",
    },
    {
      definition:
        "long heroic poem, novel, or similar work of art (celebrating \n                        the feats of a hero); ADJ: (of stories or events) resembling \n                        an epic; grand",
      term: "epic",
    },
    {
      definition:
        "connoisseur of food and drink; gourmet; ADJ. epicurean; \n                        CF. Epicurus",
      term: "epicure",
    },
    {
      definition:
        "believing that pleasure is good and suffering is bad \n                        and should be avoided; N.",
      term: "epicurean",
    },
    {
      definition: "witty thought or saying, usually short",
      term: "epigram",
    },
    {
      definition: "short speech at conclusion of dramatic work",
      term: "epilogue",
    },
    {
      definition:
        "(of a story or play) loosely connected; made up of \n                        separate and loosely connected parts; N. episode: incident \n                        in the course of an experience",
      term: "episodic",
    },
    {
      definition:
        "philosopher who studies the nature of knowledge; N. \n                        epistemology",
      term: "epistemologist",
    },
    {
      definition: "inscription in memory of a dead person (as on a tombstone)",
      term: "epitaph",
    },
    {
      definition:
        "word or phrase characteristically used to describe \n                        a person or thing; descriptive phrase to characterize \n                        a person (often contemptous)",
      term: "epithet",
    },
    {
      definition:
        "perfect example or embodiment; brief summary; Ex. epitome \n                        of good manners; V. epitomize: make an epitome of; be \n                        an epitome of; embody",
      term: "epitome",
    },
    {
      definition: "period of time",
      term: "epoch",
    },
    {
      definition:
        "tranquil; of even calm temper; (of temperature) steady; \n                        uniform",
      term: "equable",
    },
    {
      definition: "calmness of temperament; composure",
      term: "equanimity",
    },
    {
      definition: "rider on horseback; ADJ.",
      term: "equestrian",
    },
    {
      definition: "balance of opposing forces; balance of the mind; equanimity",
      term: "equilibrium",
    },
    {
      definition: "resembling a horse; Ex. equine face",
      term: "equine",
    },
    {
      definition:
        "period of equal days and nights; the beginning of spring \n                        and autumn; Ex. vernal/autumnal equinox; ADJ. equinoctial",
      term: "equinox",
    },
    {
      definition: "balance; balancing force; equilibrium",
      term: "equipoise",
    },
    {
      definition: "fair; impartial; OP. inequitable",
      term: "equitable",
    },
    {
      definition: "fairness; justice; OP. inequity",
      term: "equity",
    },
    {
      definition:
        "(of words or statements) ambiguous; intentionally misleading; \n                        (of behavior) questionable; OP. unequivocal",
      term: "equivocal",
    },
    {
      definition:
        "use equivocal language to deceive people; lie; mislead; \n                        attempt to conceal the truth; N. equivocation",
      term: "equivocate",
    },
    {
      definition:
        "eat away; wear away gradually by abrasion; Ex. The \n                        sea erodes the rocks.",
      term: "erode",
    },
    {
      definition: "pertaining to passionate love or sexual love",
      term: "erotic",
    },
    {
      definition:
        "wandering (esp. in search of adventure); straying from \n                        proper moral standards; Ex. knight-errant",
      term: "errant",
    },
    {
      definition: "odd; irregular in movement or behavior; unpredictable",
      term: "erratic",
    },
    {
      definition: "mistaken; wrong; incorrect",
      term: "erroneous",
    },
    {
      definition:
        "(of a person or book) learned; full of learning; scholarly; \n                        N. erudition",
      term: "erudite",
    },
    {
      definition:
        "prank; flighty conduct; reckless adventure that disobeys \n                        rules",
      term: "escapade",
    },
    {
      definition: "avoid habitually; Ex. eschew alcoholic drinks",
      term: "eschew",
    },
    {
      definition:
        "hard to understand; known only to the chosen few, esp. \n                        initiates; N. esoterica",
      term: "esoteric",
    },
    {
      definition: "spying",
      term: "espionage",
    },
    {
      definition: "adopt; support (an idea or aim); marry; N. espousal",
      term: "espouse",
    },
    {
      definition: "respect; value; judge; N.",
      term: "esteem",
    },
    {
      definition:
        "(of a person) worthy of esteem; admirable; deserving \n                        esteem; possible to estimate",
      term: "estimable",
    },
    {
      definition:
        "separated; alienated; V. estrange: alienate (people \n                        in a family); N. estrangement",
      term: "estranged",
    },
    {
      definition:
        "like a spirit or fairy; unearthly light; heavenly; \n                        unusually refined; Ex. She has an ethereal beauty; CF. \n                        ether: upper air",
      term: "ethereal",
    },
    {
      definition: "relating to races",
      term: "ethnic",
    },
    {
      definition:
        "study of humankind; study of the different races of \n                        human beings; CF. anthropology",
      term: "ethnology",
    },
    {
      definition:
        "underlying character of a culture, group, etc.; character \n                        or ideas peculiar to a specific person, group, or culture; \n                        Ex. the company ethos",
      term: "ethos",
    },
    {
      definition: "study of word parts; study of the origins of words",
      term: "etymology",
    },
    {
      definition:
        "pertaining to the improvement of race; N. eugenics: \n                        study of hereditary improvement of the human race",
      term: "eugenic",
    },
    {
      definition: "praising; full of eulogy",
      term: "eulogistic",
    },
    {
      definition:
        "expression of praise, often on the occasion of someone's \n                        death; V. eulogize",
      term: "eulogy",
    },
    {
      definition:
        "mild expression in place of an unpleasant one; ADJ. \n                        euphemistic",
      term: "euphemism",
    },
    {
      definition: "sweet sound; ADJ. euphonious",
      term: "euphony",
    },
    {
      definition:
        "feeling of exaggerated or unfounded(ungrounded; baseless) \n                        well-being; feeling of great happiness or well-being (when \n                        unreasonable); ADJ. euphoriaric",
      term: "euphoria",
    },
    {
      definition: "mercy killing",
      term: "euthanasia",
    },
    {
      definition: "fleeting; vanishing; soon disappearing; V. evanesce",
      term: "evanescent",
    },
    {
      definition:
        "not frank; trying to hide the truth; eluding; evading; \n                        V. evade: avoid (a duty or responsibility) or escape from \n                        by deceit",
      term: "evasive",
    },
    {
      definition: "impartial; fair",
      term: "evenhanded",
    },
    {
      definition: "happening at last as a result; Ex. eventual victory",
      term: "eventual",
    },
    {
      definition: "show clearly",
      term: "evince",
    },
    {
      definition: "tending to call up (emotions, memories)",
      term: "evocative",
    },
    {
      definition:
        "call forth (memory or feeling); Ex. That old film evoked \n                        memories of my childhood; N. evocation",
      term: "evoke",
    },
    {
      definition: "female sheep",
      term: "ewe",
    },
    {
      definition: "worsen; aggravate; embitter",
      term: "exacerbate",
    },
    {
      definition:
        "demand and obtain by force; Ex. exact a promise from \n                        him; N. exaction",
      term: "exact",
    },
    {
      definition: "extremely demanding; Ex. exacting standard of safety",
      term: "exacting",
    },
    {
      definition:
        "raise in rank or dignity; praise highly; inspire; Ex. \n                        exalt the imagination; ADJ. exalted; N. exaltation",
      term: "exalt",
    },
    {
      definition: "vex; annoy or make angry (by testing the patience)",
      term: "exasperate",
    },
    {
      definition:
        "exclude; N. exception: objection; exclusion; ADJ. exceptional: \n                        unusual; of unusually high quality",
      term: "except",
    },
    {
      definition:
        "objectionable; likely to cause dislike; offensive; \n                        CF. unexceptionable: entirely acceptable",
      term: "exceptionable",
    },
    {
      definition:
        "selected passage (written or musical) taken from a \n                        longer work; V.",
      term: "excerpt",
    },
    {
      definition: "treasury; Ex. Chancellor of the exchequer",
      term: "exchequer",
    },
    {
      definition:
        "cut away; cut out; N: government tax on good produced \n                        and used inside a country; N. excision",
      term: "excise",
    },
    {
      definition: "cry out suddenly; N. exclamation; ADJ. exclamatory",
      term: "exclaim",
    },
    {
      definition:
        "scold with biting harshness; censure strongly; strip \n                        the skin off",
      term: "excoriate",
    },
    {
      definition: "clear from blame or guilt",
      term: "exculpate",
    },
    {
      definition: "very bad; detestable",
      term: "execrable",
    },
    {
      definition: "curse; express abhorrence for; detest",
      term: "execrate",
    },
    {
      definition:
        "put into effect; carry out; kill as a lawful punishment; \n                        N. execution",
      term: "execute",
    },
    {
      definition: "person administering capital punishment",
      term: "executioner",
    },
    {
      definition:
        "person having administrative authority; one branch \n                        of government executing laws; ADJ: relating to executing",
      term: "executive",
    },
    {
      definition: "person designated to execute the terms of a will;",
      term: "executor",
    },
    {
      definition: "explanation, especially of biblical(of the bible) passages",
      term: "exegesis",
    },
    {
      definition:
        "serving as a model; outstanding; Ex. exemplary punishment/behavior; \n                        N. exemplar: typical example; model",
      term: "exemplary",
    },
    {
      definition:
        "show by example; furnish an example; serve as an example \n                        of; Ex. His pictures exemplify that sort of painting.",
      term: "exemplify",
    },
    {
      definition:
        "not subject to a duty or obligation; free from a duty; \n                        V.",
      term: "exempt",
    },
    {
      definition:
        "effort; expenditure of much physical work; V. exert \n                        oneself: make a great effort",
      term: "exertion",
    },
    {
      definition: "breathe out; OP. inhale",
      term: "exhale",
    },
    {
      definition:
        "invigorating and refreshing; cheering; V. exhilarate: \n                        make cheerful and excited; Ex. exhilarated by the ride \n                        in the sports car",
      term: "exhilarating",
    },
    {
      definition:
        "urge (by strong argument or advice); Ex. The general \n                        exhorted his men to fight bravely; N. exhortation",
      term: "exhort",
    },
    {
      definition: "dig out of the ground; remove from a grave",
      term: "exhume",
    },
    {
      definition: "urgent situation; ADJ. exigent",
      term: "exigency",
    },
    {
      definition: "small in amount; minute",
      term: "exiguous",
    },
    {
      definition:
        "pertaining to existence; pertaining to the philosophy \n                        of existentialism",
      term: "existential",
    },
    {
      definition: "departure (of a large number of people)",
      term: "exodus",
    },
    {
      definition: "acquit; exculpate; free from blame or guilt",
      term: "exonerate",
    },
    {
      definition:
        "(of costs or demands) excessive; exceeding reasonable \n                        bounds",
      term: "exorbitant",
    },
    {
      definition: "drive out evil spirits",
      term: "exorcise",
    },
    {
      definition:
        "not native; from another part of the world; strange; \n                        intriguingly unusual; Ex. exotic flower/dress",
      term: "exotic",
    },
    {
      definition:
        "(of a person) outgoing and sociable; broad and extensive; \n                        able to increase in size",
      term: "expansive",
    },
    {
      definition: "talk at length; speak or write in detail",
      term: "expatiate",
    },
    {
      definition:
        "exile; someone who has withdrawn from his native land; \n                        V: exile; banish; leave one's country",
      term: "expatriate",
    },
    {
      definition:
        "suitable (for a particular purpose although not necessarily \n                        morally correct); practical; politic(prudent); N: something \n                        expedient",
      term: "expedient",
    },
    {
      definition: "hasten; make go faster",
      term: "expedite",
    },
    {
      definition: "done with speed; quick; N. expedition",
      term: "expeditious",
    },
    {
      definition:
        "payment or expense; expending; something expended; \n                        output; Ex. receipt for the expenditure; Ex. expenditure \n                        of all the energy",
      term: "expenditure",
    },
    {
      definition:
        "specialized knowledge (in a particular field); expert \n                        skill",
      term: "expertise",
    },
    {
      definition: "make amends for (a sin)",
      term: "expiate",
    },
    {
      definition: "meaningless word; interjection; profane oath; swear-word",
      term: "expletive",
    },
    {
      definition: "explain in detail; interpret; clarify; CF. explicable",
      term: "explicate",
    },
    {
      definition: "totally clear; definite; outspoken",
      term: "explicit",
    },
    {
      definition: "make use of, sometimes unjustly; N. exploitation",
      term: "exploit",
    },
    {
      definition: "public revelation of something discreditable",
      term: "expose ",
    },
    {
      definition:
        "explanatory; serving to explain; N. exposition: explaining; \n                        exhibition",
      term: "expository",
    },
    {
      definition:
        "protest; remonstrance; reasoning with someone to correct \n                        or dissuade; V. expostulate",
      term: "expostulation",
    },
    {
      definition:
        "risk, particularly of being exposed to disease or to \n                        the elements; unmasking; act of laying something open; \n                        Ex. exposure of governmental corruption",
      term: "exposure",
    },
    {
      definition: "explain",
      term: "expound",
    },
    {
      definition:
        "take possession of (often for public use and without \n                        payment)",
      term: "expropriate",
    },
    {
      definition:
        "cancel; remove a word or name (from a book or list); \n                        erase",
      term: "expunge",
    },
    {
      definition: "clean; remove offensive parts of a book",
      term: "expurgate",
    },
    {
      definition:
        "delicate; very finely made; extremely beautiful; Ex. \n                        exquisite piece of jewelry",
      term: "exquisite",
    },
    {
      definition: "(of something written or painted) still in existence",
      term: "extant",
    },
    {
      definition: "not planned; impromptu; extempore",
      term: "extemporaneous",
    },
    {
      definition: "weaken; mitigate; lessen the seriousness of (bad behavior)",
      term: "extenuate",
    },
    {
      definition: "root up; uproot; destroy completely",
      term: "extirpate",
    },
    {
      definition: "praise very highly; glorify",
      term: "extol",
    },
    {
      definition:
        "wring from; get money by threats, etc.; obtain by force \n                        or threats; CF. extortionate: exorbitant",
      term: "extort",
    },
    {
      definition:
        "surrender of prisoner by one state to another; Ex. \n                        extradition treaty; V. extradite",
      term: "extradition",
    },
    {
      definition:
        "not essential; irrelevant; superfluous; external; coming \n                        from the outside; Ex. extraneous details/noise/to the \n                        subject",
      term: "extraneous",
    },
    {
      definition:
        "projection; conjecture; V. extrapolate: infer (unknown \n                        information) from known information",
      term: "extrapolation",
    },
    {
      definition: "free from an entanglement or difficulty; disentangle",
      term: "extricate",
    },
    {
      definition:
        "external; not essential or inherent; extraneous; OP. \n                        intrinsic",
      term: "extrinsic",
    },
    {
      definition: "person interested mostly in external objects and actions",
      term: "extrovert",
    },
    {
      definition:
        "force or push out; thrust out; shape (plastic or metal) \n                        by forcing through a die",
      term: "extrude",
    },
    {
      definition:
        "overflowing abundance; joyful enthusiasm; flamboyance; \n                        lavishness; ADJ. exuberant: high-spirited and lively; \n                        growing abundantly and strongly",
      term: "exuberance",
    },
    {
      definition:
        "flow out slowly; discharge (gradually); give forth; \n                        N. exudation",
      term: "exude",
    },
    {
      definition: "rejoice",
      term: "exult",
    },
    {
      definition:
        "tube in which patterns made by the reflection in mirrors \n                        of colored pieces of glass, etc. produce interesting symmetrical \n                        effects; series of changing events; Ex. kaleidoscope of \n                        European history; CF. beautiful",
      term: "kaleidoscope",
    },
    {
      definition: "range of knowledge; Ex. beyond one's ken",
      term: "ken",
    },
    {
      definition: "central or vital part; core; whole seed (as of corn)",
      term: "kernel",
    },
    {
      definition:
        "grouch; spoilsport; one who intentionally spoils the \n                        pleasure of others",
      term: "killjoy",
    },
    {
      definition: "start a fire; ignite; inspire; arouse",
      term: "kindle",
    },
    {
      definition:
        "related; belonging to the same group; similar in nature \n                        or character; Ex. kindred languages; N: relative; kin; \n                        kinship",
      term: "kindred",
    },
    {
      definition: "producing motion; of motion",
      term: "kinetic",
    },
    {
      definition: "fate; destiny; Ex. Kismet is the Arabic word for fate.",
      term: "kismet",
    },
    {
      definition: "person who has a compulsive desire to steal",
      term: "kleptomaniac",
    },
    {
      definition: "special talent; art",
      term: "knack",
    },
    {
      definition: "untrustworthy person; rogue; scoundrel; jack; N. knavery",
      term: "knave",
    },
    {
      definition:
        "mix; work dough; mix and work into a uniform mass (with \n                        the hands); Ex. knead dough",
      term: "knead",
    },
    {
      definition: "go down on one's knee(s)",
      term: "kneel",
    },
    {
      definition:
        "tolling of a bell especially to indicate a funeral, \n                        disaster, etc.; sound of the funeral bell; V.",
      term: "knell",
    },
    {
      definition:
        "contract into wrinkles; grow together; join together \n                        closely; make (a fabric or garment) by interwining yarn \n                        or thread; Ex. knit the brow; Ex. The bones should knit \n                        together in a few weeks.",
      term: "knit",
    },
    {
      definition: "little round hill; hillock",
      term: "knoll",
    },
    {
      definition: "intricate; difficult; tangled; CF. knot",
      term: "knotty",
    },
    {
      definition: "honor; glory; acclaim or praise for exceptional achievement",
      term: "kudos",
    },
    {
      definition: "stupid awkward person; CF. elf",
      term: "oaf",
    },
    {
      definition:
        "solemn promise; blasphemous use of sacred words to \n                        express strong feelings; swear-word; Ex. ``For Christ's \n                        sake''",
      term: "oath",
    },
    {
      definition: "crushed oats used for making porridge",
      term: "oatmeal",
    },
    {
      definition: "stubborn; refusing to change one's belief",
      term: "obdurate",
    },
    {
      definition: "bow (to show respect and obedience)",
      term: "obeisance",
    },
    {
      definition:
        "tall column tapering(becoming gradually narrower toward \n                        the end) and ending in a pyramid",
      term: "obelisk",
    },
    {
      definition: "excessively fat; N. obesity",
      term: "obese",
    },
    {
      definition:
        "confuse; muddle; cause confusion; make needlessly complex; \n                        make so confused as to be difficult to understand",
      term: "obfuscate",
    },
    {
      definition: "death notice (esp. in a newspaper); ADJ.",
      term: "obituary",
    },
    {
      definition: "not influenced by emotions; fair; N: goal; aim",
      term: "objective",
    },
    {
      definition:
        "binding; required; compulsory; V. oblige: constrain; \n                        make grateful; do a favor; accommodate",
      term: "obligatory",
    },
    {
      definition:
        "indirect; slanting (deviating from the perpendicular \n                        or from a straight line); Ex. oblique reference",
      term: "oblique",
    },
    {
      definition: "destroy completely; wipe out; Ex. obliterate the village",
      term: "obliterate",
    },
    {
      definition:
        "obscurity; condition of being completely forgotten; \n                        forgetfulness",
      term: "oblivion",
    },
    {
      definition:
        "inattentive or unmindful; unaware; wholly absorbed; \n                        forgetful(having the habit of forgetting)",
      term: "oblivious",
    },
    {
      definition: "slander; disgrace; infamy",
      term: "obloquy",
    },
    {
      definition: "offensive; disagreeable; Ex. obnoxious smell",
      term: "obnoxious",
    },
    {
      definition:
        "dark; vague; unclear; not well known; Ex. obscure meaning/village; \n                        V: darken; cover; make unclear; Ex. obscure the moon/meaning",
      term: "obscure",
    },
    {
      definition:
        "slavishly attentive; servile; full of servile compliance; \n                        sycophantic",
      term: "obsequious",
    },
    {
      definition: "funeral ceremony",
      term: "obsequy",
    },
    {
      definition:
        "related to thinking about something constantly; of \n                        an obsession; preoccupying; N. obsession: compulsive preoccupation \n                        with a fixed idea; compulsive idea; V. obsess: preoccupy \n                        the mind of excessively",
      term: "obsessive",
    },
    {
      definition: "black volcanic rock",
      term: "obsidian",
    },
    {
      definition: "outmoded; no longer used",
      term: "obsolete",
    },
    {
      definition:
        "physician specializing in delivery(assisting in giving \n                        birth) of babies; N. obstetrics; CF. midwife",
      term: "obstetrician",
    },
    {
      definition:
        "stubborn; hard to control or treat; Ex. obstinate cough; \n                        N. obstinacy",
      term: "obstinate",
    },
    {
      definition: "boisterous; noisy and uncontrollable",
      term: "obstreperous",
    },
    {
      definition:
        "push (oneself or one's ideas) forward or intrude; impose \n                        (oneself or one's ideas) on others; butt in; stick out \n                        or extrude; thrust out; Ex. obtrude A on B; ADJ. obtrusive; \n                        N. obtrusion; CF. unobtrusive",
      term: "obtrude",
    },
    {
      definition: "blunt; not sharp; stupid; slow in understanding",
      term: "obtuse",
    },
    {
      definition: "make unnecessary; get rid of; Ex. obviate the need",
      term: "obviate",
    },
    {
      definition: "the West",
      term: "occident",
    },
    {
      definition:
        "shut; close; obstruct; Ex. A blood clot occluded an \n                        artery.",
      term: "occlude",
    },
    {
      definition:
        "mysterious; secret; supernatural; beyond human comprehension; \n                        CF. mysterious to human ?; OP. bare",
      term: "occult",
    },
    {
      definition: "physician who specializes in treatment of the eyes",
      term: "oculist",
    },
    {
      definition:
        "chances; probability; disagreement; Ex. The odds are \n                        that it will rain. Ex. at odds with",
      term: "odds",
    },
    {
      definition: "arousing strong dislike; hateful(causing hatred); vile",
      term: "odious",
    },
    {
      definition:
        "detestation; quality of being odious; hatefulness; \n                        disrepute (resulting from hateful conduct)",
      term: "odium",
    },
    {
      definition: "giving off an odor",
      term: "odoriferous",
    },
    {
      definition: "having an odor",
      term: "odorous",
    },
    {
      definition: "long, eventful, adventurous journey",
      term: "odyssey",
    },
    {
      definition:
        "attacking; insulting; distasteful; V. offend: violate; \n                        hurt the feelings of; N. offense: offending; violating \n                        of a moral or social code; crime; attack; Ex. first offense",
      term: "offensive",
    },
    {
      definition: "casual; done without prior thought or preparation",
      term: "offhand",
    },
    {
      definition:
        "meddlesome; excessively pushy in offering one's services; \n                        overly eager in offering unwanted services or advices; \n                        Ex. officious bellboy",
      term: "officious",
    },
    {
      definition:
        "look at amorously; make eyes at; Ex. old men ogling \n                        young girls",
      term: "ogle",
    },
    {
      definition: "concerning the sense of smell",
      term: "olfactory",
    },
    {
      definition: "government by a privileged few",
      term: "oligarchy",
    },
    {
      definition: "threatening; of an evil omen",
      term: "ominous",
    },
    {
      definition: "all-powerful; having unlimited power",
      term: "omnipotent",
    },
    {
      definition: "universally present; ubiquitous",
      term: "omnipresent",
    },
    {
      definition: "all-knowing",
      term: "omniscient",
    },
    {
      definition: "eating both plant and animal food; devouring everything",
      term: "omnivorous",
    },
    {
      definition: "burdensome",
      term: "onerous",
    },
    {
      definition: "words formed in imitation of natural sounds",
      term: "onomatopoeia",
    },
    {
      definition:
        "vicious assault; fierce attack; Ex. unexpected onslaught \n                        of the enemy",
      term: "onslaught",
    },
    {
      definition: "burden; responsibility",
      term: "onus",
    },
    {
      definition:
        "(of a thick liquid) pass or flow slowly; N: mud or \n                        thick liquid as at the bottom of a river",
      term: "ooze",
    },
    {
      definition: "iridescent; lustrous; like an opal; N. opalescence",
      term: "opalescent",
    },
    {
      definition: "dark; not transparent; N. opacity",
      term: "opaque",
    },
    {
      definition:
        "medicine to induce sleep or deaden pain; something \n                        that relieves emotions or causes inaction; sleep-producing \n                        drug containing opium",
      term: "opiate",
    },
    {
      definition: "timely; well-chosen",
      term: "opportune",
    },
    {
      definition:
        "individual who sacrifices principles for expediency \n                        by taking advantage of circumstances; N. opportunism",
      term: "opportunist",
    },
    {
      definition:
        "infamy; disgrace arising from shameful conduct; vilification(slander); \n                        scorn; contempt; Ex. opprobrium hurled against him; ADJ. \n                        opprobrious: expressing contempt; shameful or infamous",
      term: "opprobrium",
    },
    {
      definition: "maker and seller of eyeglasses",
      term: "optician",
    },
    {
      definition: "person who looks on the bright side; N. optimism",
      term: "optimist",
    },
    {
      definition: "most favorable; optimal; N: most favorable condition",
      term: "optimum",
    },
    {
      definition:
        "not compulsory; left to one's choice; N. option: act \n                        of choosing; choice; freedom or power to choose; something \n                        available as a choice; Ex. have no option; Ex. two options",
      term: "optional",
    },
    {
      definition: "one who fits glasses to remedy visual defects",
      term: "optometrist",
    },
    {
      definition:
        "extreme wealth; luxuriousness; abundance; ADJ. opulent: \n                        possessing great wealth; abundant",
      term: "opulence",
    },
    {
      definition:
        "work (esp. musical composition); Ex. magnum opus: masterpiece; \n                        CF. opera",
      term: "opus",
    },
    {
      definition:
        "of an oracle; prophetic; uttered as if with divine \n                        authority; mysterious or ambiguous; hard to understand; \n                        N. oracle: wiser person; prophecy made by an oracle",
      term: "oracular",
    },
    {
      definition: "public speaker",
      term: "orator",
    },
    {
      definition:
        "dramatic poem set to music; long musical work with \n                        singing but without acting; CF. cantata",
      term: "oratorio",
    },
    {
      definition:
        "decree or command; grant holy orders; predestine; install \n                        as a minister, priest, or rabbi; N. ordainment; CF. ordination",
      term: "ordain",
    },
    {
      definition:
        "severe trial or affliction; difficult experience; trial(test \n                        of patience or endurance); affliction",
      term: "ordeal",
    },
    {
      definition: "decree; authoritative order",
      term: "ordinance",
    },
    {
      definition:
        "ceremony conferring holy orders; ceremony of ordaining \n                        a priest",
      term: "ordination",
    },
    {
      definition:
        "wild drunken revelry; unrestrained indulgence in an \n                        activity; Ex. orgy of shopping",
      term: "orgy",
    },
    {
      definition:
        "get one's bearings; adjust; make familiar with a situation; \n                        orientate",
      term: "orient",
    },
    {
      definition: "act of finding oneself in society; orienting",
      term: "orientation",
    },
    {
      definition:
        "mouthlike opening; small opening (esp. to a cavern \n                        or passage of the body); CF. mouth",
      term: "orifice",
    },
    {
      definition: "excessively or elaborately decorated",
      term: "ornate",
    },
    {
      definition:
        "scientific student of birds; N. ornithology: scientific \n                        study of birds",
      term: "ornithologist",
    },
    {
      definition:
        "traditional; (of someone) conservative in belief; adhering \n                        to an established doctrine",
      term: "orthodox",
    },
    {
      definition:
        "correct spelling; CF. ortho-: straight; correct; Ex. \n                        orthodontics",
      term: "orthography",
    },
    {
      definition: "vibrate pendulumlike; waver",
      term: "oscillate",
    },
    {
      definition: "made of bone; bony",
      term: "osseous",
    },
    {
      definition:
        "change or harden into bone; become hard and unchanging \n                        in one's ideas",
      term: "ossify",
    },
    {
      definition:
        "apparent; appearing as such; professed(pretended); \n                        pretended; Ex. ostensible purpose of the expedition",
      term: "ostensible",
    },
    {
      definition:
        "showy; trying to attract attention; pretentious; N. \n                        ostentation: showy display",
      term: "ostentatious",
    },
    {
      definition:
        "banish from a group; exclude from public favor; ban; \n                        Ex. His friends ostracized him. N. ostracism",
      term: "ostracize",
    },
    {
      definition: "expel; drive out; force out; N. ouster: ousting",
      term: "oust",
    },
    {
      definition: "one that has been excluded from a society; ADJ.",
      term: "outcast",
    },
    {
      definition:
        "clothing or equipment for a special purpose; Ex. cowboy \n                        outfit",
      term: "outfit",
    },
    {
      definition: "sociable; eager to mix socially with others",
      term: "outgoing",
    },
    {
      definition: "bizzare; peculiar; unconventional",
      term: "outlandish",
    },
    {
      definition:
        "fugitive from the law (excluded from legal protection); \n                        V: declare (someone) to be an outlaw; deprive of the protection \n                        of the law; declare illegal; Ex. Drinking has been outlawed.",
      term: "outlaw",
    },
    {
      definition:
        "point of view; view from a particular place; expectation \n                        for the future; prospect; Ex. outlook on life; Ex. pleasing \n                        outlook; Ex. weather outlook",
      term: "outlook",
    },
    {
      definition:
        "no longer in fashion or use; no longer stylish; old-fashioned",
      term: "outmoded",
    },
    {
      definition:
        "act of extreme violence or viciousness; resentful anger; \n                        V: commit an outrage on; produce anger in; ADJ. outrageous: \n                        offensive",
      term: "outrage",
    },
    {
      definition:
        "fringes; outer borders (as of a city); Ex. outskirts \n                        of Boston",
      term: "outskirts",
    },
    {
      definition: "candid; blunt",
      term: "outspoken",
    },
    {
      definition: "outrun; surpass; outdo",
      term: "outstrip",
    },
    {
      definition: "outsmart; defeat by behaving more cleverly",
      term: "outwit",
    },
    {
      definition: "enthusiastic applause",
      term: "ovation",
    },
    {
      definition:
        "bossy; domineering and arrogant; decisively important; \n                        Ex. overbearing manner/importance; V. overbear: dominate",
      term: "overbearing",
    },
    {
      definition: "inflated; exaggerated",
      term: "overblown",
    },
    {
      definition:
        "watch over and direct; supervise; N. oversight: unintentional \n                        failure to notice or do something; supervision",
      term: "oversee",
    },
    {
      definition: "open to view; public; not secret; CF. covert",
      term: "overt",
    },
    {
      definition: "topple; N.",
      term: "overthrow",
    },
    {
      definition:
        "musical introduction to a long musical piece; first \n                        offer or proposal (to begin talks in the hope of reaching \n                        an agreement); Ex. overtures for peace",
      term: "overture",
    },
    {
      definition: "turn over; capsize; topple",
      term: "overturn",
    },
    {
      definition: "arrogant; presumptuous",
      term: "overweening",
    },
    {
      definition:
        "(of water) cover completely; defeat completely by much \n                        greater force; Ex. overwhelmed by grief",
      term: "overwhelm",
    },
    {
      definition:
        "nervous or excited; extremely agitated; hysterical; \n                        wrought-up; CF. wrought: made or done",
      term: "overwrought",
    },
    {
      definition: "egg-shaped; CF. ovum; CF. ovulate",
      term: "ovoid",
    },
    {
      definition: "gruesome; grisly; ghastly; CF. of death",
      term: "macabre",
    },
    {
      definition:
        "ceremonial staff used as a symbol of authority; clublike \n                        medieval weapon",
      term: "mace",
    },
    {
      definition:
        "soften by soaking in liquid; waste away; Ex. macerate \n                        powdered wood to make paper",
      term: "macerate",
    },
    {
      definition:
        "crafty; double-dealing; of the political doctrine of \n                        Machiavelli, which holds that craft and deceit are justified \n                        in pursuing political power",
      term: "machiavellian",
    },
    {
      definition:
        "evil schemes or plots; schemes or plots to achieve \n                        an evil end; V. machinate",
      term: "machinations",
    },
    {
      definition: "spotted; stained; CF. immaculate",
      term: "maculated",
    },
    {
      definition: "pastoral song; song for several singers without instruments",
      term: "madrigal",
    },
    {
      definition:
        "violent whirlpool; violent or tublent situation; CF. \n                        stream",
      term: "maelstrom",
    },
    {
      definition:
        "authoritative; imperious; commanding; of a magistrate; \n                        Ex. magisterial study of Roman law; Ex. magisterial manner",
      term: "magisterial",
    },
    {
      definition: "official with power to administer the law",
      term: "magistrate",
    },
    {
      definition: "generosity; ADJ. magnanimous: generous",
      term: "magnanimity",
    },
    {
      definition:
        "person of prominence or influence; powerful or influential \n                        person (in business or industry); Ex. oil magnate",
      term: "magnate",
    },
    {
      definition: "boastful; pompous",
      term: "magniloquent",
    },
    {
      definition: "greatness (in size or extent); extent",
      term: "magnitude",
    },
    {
      definition:
        "mutilate; injure lastingly; disable; cripple; Ex. maimed \n                        for life",
      term: "maim",
    },
    {
      definition:
        "temporary expedient or substitute (in the case of urgent \n                        need); Ex. makeshift shelter",
      term: "makeshift",
    },
    {
      definition: "clumsy; not skillful; awkward; bungling",
      term: "maladroit",
    },
    {
      definition: "illness",
      term: "malady",
    },
    {
      definition:
        "uneasiness; vague feeling of ill health (without any \n                        particular pain or appearance of disease)",
      term: "malaise",
    },
    {
      definition: "comic misuse of a word; CF. Mrs. Malaprop",
      term: "malapropism",
    },
    {
      definition: "inappropriate; ADV.",
      term: "malapropos",
    },
    {
      definition:
        "person dissatisfied with existing state of affairs; \n                        discontented person; ADJ: discontented",
      term: "malcontent",
    },
    {
      definition: "curse",
      term: "malediction",
    },
    {
      definition: "evildoer; criminal",
      term: "malefactor",
    },
    {
      definition: "doing evil; N. maleficience",
      term: "maleficient",
    },
    {
      definition: "wishing evil; exhibiting ill will; N. malevolence",
      term: "malevolent",
    },
    {
      definition: "wrongdoing; misconduct (by a public official)",
      term: "malfeasance",
    },
    {
      definition:
        "hateful; spiteful; expressing malice; N. malice: desire \n                        to harm others; spite",
      term: "malicious",
    },
    {
      definition:
        "speak evil of; bad-mouth(criticize spitefully); defame; \n                        ADJ: harmful; Ex. malign influence",
      term: "malign",
    },
    {
      definition:
        "tending to cause death; highly injurious; aggressively \n                        malevolent; Ex. malignant tumor",
      term: "malignant",
    },
    {
      definition:
        "one who feigns illness to escape duty; V. malinger: \n                        feign illness to avoid work",
      term: "malingerer",
    },
    {
      definition:
        "(of a metal) capable of being shaped by pounding(beating); \n                        pliable; (of someone) impressionable(easily influenced); \n                        easily controlled; tractable",
      term: "malleable",
    },
    {
      definition: "foul-smelling",
      term: "malodorous",
    },
    {
      definition: "vertebrate animal whose female suckles its young",
      term: "mammal",
    },
    {
      definition: "gigantic; enormous",
      term: "mammoth",
    },
    {
      definition: "restrain; handcuff; N.",
      term: "manacle",
    },
    {
      definition:
        "order; charge; authoritative command; power to govern \n                        another country; power to given to a government; region \n                        under administration; V: give a mandate to; place under \n                        a mandate; Ex. mandated territory",
      term: "mandate",
    },
    {
      definition: "obligatory; compulsory; of a mandate",
      term: "mandatory",
    },
    {
      definition:
        "strategic military or naval movement (done for training \n                        purposes); carefully planned process; stratagem; V: carry \n                        out a military maneuver; use maneuvers in gaining an end",
      term: "maneuvermanoeuver)",
    },
    {
      definition:
        "skin disease (esp. of domestic animals) marked by loss \n                        of hair",
      term: "mange",
    },
    {
      definition:
        "tear or cut to pieces; mutilate or disfigure; Ex. badly \n                        mangled bodies",
      term: "mangle",
    },
    {
      definition: "shabby; wretched; suffering from mange; of bad appearance",
      term: "mangy",
    },
    {
      definition:
        "raging mad; insane; N. maniac: insane person; CF. mania: \n                        disorder of the mind; intense enthusiasm",
      term: "maniacal",
    },
    {
      definition: "evident; visible; obvious; V: show plainly",
      term: "manifest",
    },
    {
      definition:
        "outward demonstration; manifesting; indication of the \n                        presence of something; Ex. manifestation of his pronounced \n                        musical bent",
      term: "manifestation",
    },
    {
      definition: "public declaration of principles; statement of policy",
      term: "manifesto",
    },
    {
      definition: "many in number or kind; numerous; varied",
      term: "manifold",
    },
    {
      definition:
        "operate with one's hands; control or play upon (people, \n                        forces, etc.) artfully; maneuver; Ex. how to manipulate \n                        publicity and men; ADJ. manipulative",
      term: "manipulate",
    },
    {
      definition: "affected; not natural; Ex. mannered way of speech",
      term: "mannered",
    },
    {
      definition:
        "distinctive behavioral trait; affected style in art \n                        (according to a set of styles)",
      term: "mannerism",
    },
    {
      definition:
        "loose sleeveless outer garment; cloak; something that \n                        covers or envelops; the layer of the earth between the \n                        crust and the core",
      term: "mantle",
    },
    {
      definition: "emancipate; free from slavery or bondage",
      term: "manumit",
    },
    {
      definition: "spoil the appearance of",
      term: "mar",
    },
    {
      definition: "move in search of plunder; Ex. marauding army",
      term: "maraud",
    },
    {
      definition:
        "border; room; allowance beyond what is needed; Ex. \n                        margin of safety",
      term: "margin",
    },
    {
      definition:
        "of a margin; barely within a limit; Ex. marginal effect/writing \n                        ability",
      term: "marginal",
    },
    {
      definition: "pertaining to marriage",
      term: "marital",
    },
    {
      definition:
        "bordering on(adjacent to) the sea; nautical; of the \n                        ships or the sea; Ex. Maritime Provinces",
      term: "maritime",
    },
    {
      definition:
        "noticeable; targeted for vengeance or attack; Ex. marked \n                        improvement/man",
      term: "marked",
    },
    {
      definition:
        "leave helpless on a deserted island or coast; ADJ. \n                        red brown",
      term: "maroon",
    },
    {
      definition: "damaged; disfigured; V. mar: spoil; disfigure",
      term: "marred",
    },
    {
      definition:
        "soft fatty tissue that fills most bone cavities and \n                        is the source of blood cells",
      term: "marrow",
    },
    {
      definition:
        "put in order; guide ceremoniously to the correct place; \n                        Ex. marshal the children into the museum; N: military \n                        officer; official",
      term: "marshal",
    },
    {
      definition:
        "one of a family of mammals that nurse their offspring \n                        in a pouch(pocket of skin or leather); CF. kangaroo, opossum, \n                        wombat",
      term: "marsupial",
    },
    {
      definition: "warlike; of war; Ex. martial art/law",
      term: "martial",
    },
    {
      definition:
        "strict disciplinarian; person who demands total obedience \n                        to rules and orders; CF. Jean Martinet",
      term: "martinet",
    },
    {
      definition:
        "one who voluntarily suffers death for his or her religion \n                        or cause; great sufferer; Ex. martyr to his rheumatism",
      term: "martyr",
    },
    {
      definition:
        "crush into mash; convert into mash; N: mixture of ground \n                        grain and nutrients fed to livestock and fowl",
      term: "mash",
    },
    {
      definition: "person who enjoys his own pain; CF. masochism",
      term: "masochist",
    },
    {
      definition:
        "one who builds or works with stone or brick; N. masonry: \n                        work of a mason; stonework or brickwork",
      term: "mason",
    },
    {
      definition:
        "wear a mask or disguise; pretend; N: costume party \n                        or ball at which masks are worn; pretense; disguise",
      term: "masquerade",
    },
    {
      definition:
        "Christian religious ceremony; CF. Mass: ceremony of \n                        the Eucharist",
      term: "mass",
    },
    {
      definition: "chew",
      term: "masticate",
    },
    {
      definition:
        "not shiny; matte; having a dull finish; N: flat piece \n                        of material used as a floor covering; V.",
      term: "mat",
    },
    {
      definition:
        "preoccupation with physical comforts and things; excessive \n                        regard for worldly concerns (rather than spiritual matters)",
      term: "materialism",
    },
    {
      definition: "motherly; N. maternity: motherhood",
      term: "maternal",
    },
    {
      definition: "dramatic or musical performance given in the afternoon",
      term: "matinee(matinee)",
    },
    {
      definition: "woman who rules a family or larger social group",
      term: "matriarch",
    },
    {
      definition: "enroll (in college or graduate school); CF. matrix",
      term: "matriculate",
    },
    {
      definition: "state of being married",
      term: "matrimony",
    },
    {
      definition:
        "point of origin; array of numbers or algebraic symbols; \n                        mold or die; Ex. the matrix of Western civilization",
      term: "matrix",
    },
    {
      definition: "effusively sentimental",
      term: "maudlin",
    },
    {
      definition:
        "handle roughly; batter; injure by beating; Ex. mauled \n                        by his overexcited fans; N: heavy long-handled hammer",
      term: "maul",
    },
    {
      definition: "monumental tomb; large stately tomb; CF. Mausolos",
      term: "mausoleum",
    },
    {
      definition: "pale purple",
      term: "mauve",
    },
    {
      definition: "rebel; nonconformist (in a group)",
      term: "maverick",
    },
    {
      definition:
        "mushy(sentimental) and gushy; icky-sticky sentimental; \n                        excessively and objectionably sentimental",
      term: "mawkish",
    },
    {
      definition: "proverb; truth pithily stated",
      term: "maxim",
    },
    {
      definition:
        "injury to body; crime of willfully maiming or crippling \n                        a person; violent disorder; Ex. mayhem in the zoo; CF. \n                        maim",
      term: "mayhem",
    },
    {
      definition: "scanty; inadequate",
      term: "meager",
    },
    {
      definition:
        "indirect in speech (when something unpleasant must \n                        be said); hypocritical; evasive",
      term: "mealymouthed",
    },
    {
      definition:
        "wind or turn in its course; follow a winding or turning \n                        course; move aimlessly and idly",
      term: "meander",
    },
    {
      definition: "interfering; V. meddle: interfere",
      term: "meddlesome",
    },
    {
      definition:
        "settle a dispute through the services of an outsider; \n                        act as an intermediary; produce by mediating; Ex. mediate \n                        a cease-fire",
      term: "mediate",
    },
    {
      definition: "ordinary; commonplace; neither good nor bad",
      term: "mediocre",
    },
    {
      definition: "reflection; thought; V. meditate",
      term: "meditation",
    },
    {
      definition:
        "element that is a creature's natural environment; nutrient \n                        setting in which microorganisms are cultivated; appropriate \n                        occupation or means of expression; channel of communication; \n                        compromise; middle position between extremes; intervening \n                        substan",
      term: "medium",
    },
    {
      definition: "mixture",
      term: "medley",
    },
    {
      definition: "submissive; patient and long-suffering",
      term: "meek",
    },
    {
      definition:
        "mania for doing grandiose things; mental disorder characterized \n                        by delusions of wealth, power, or importance",
      term: "megalomania",
    },
    {
      definition: "gloomy; morose; blue; N. ADJ. melancholic; CF. melancholia",
      term: "melancholy",
    },
    {
      definition: "fight",
      term: "melee",
    },
    {
      definition:
        "(of words or a voice) sweetly or smoothly flowing; \n                        melodious; having a pleasant tune",
      term: "mellifluous",
    },
    {
      definition:
        "token; reminder of the past; keepsake; Ex. memento \n                        of your visit",
      term: "memento",
    },
    {
      definition: "memoirs; autobiography; biography",
      term: "memoir",
    },
    {
      definition:
        "something, such as a monument or holiday, intended \n                        to honor the memory of a person or event; ADJ: commemorative",
      term: "memorial",
    },
    {
      definition: "commemorate",
      term: "memorialize",
    },
    {
      definition: "threat; V: threaten",
      term: "menace",
    },
    {
      definition: "collection of wild animals on exhibition; zoo",
      term: "menagerie",
    },
    {
      definition: "lying; habitually dishonest; N. mendacity",
      term: "mendacious",
    },
    {
      definition: "beggar; ADJ: living as a beggar",
      term: "mendicant",
    },
    {
      definition:
        "suitable for servants; lowly; mean; N: someone who \n                        does menial work (esp. servant in a house)",
      term: "menial",
    },
    {
      definition: "counselor; teacher",
      term: "mentor",
    },
    {
      definition: "concerning trade or merchants",
      term: "mercantile",
    },
    {
      definition: "motivated solely by money or gain; N.",
      term: "mercenary",
    },
    {
      definition:
        "capricious; quick and changing; fickle; containing \n                        the element mercury; Ex. mercurial temper; CF. mood",
      term: "mercurial",
    },
    {
      definition:
        "flashy; tawdry; attractive on the surface but of no \n                        real value; Ex. metericious argument/jewel; CF. prostitute",
      term: "meretricious",
    },
    {
      definition:
        "combination (of two business corporations); act of \n                        merging",
      term: "merger",
    },
    {
      definition: "deserve; ADJ. meritorious: deserving reward or praise",
      term: "merit",
    },
    {
      definition: "hypnotize; N. mesmerism; CF. Franz Mesmer",
      term: "mesmerize",
    },
    {
      definition:
        "pertaining to the art of removing metals from ores; \n                        N. metallurgy: science that deals with extracting metals \n                        from ores",
      term: "metallurgical",
    },
    {
      definition:
        "change of form; Ex. metamorphosis of caterpillar to \n                        butterfly; V. metamorphose: change by metamorphosis",
      term: "metamorphosis",
    },
    {
      definition: "implied comparison; CF. simile",
      term: "metaphor",
    },
    {
      definition:
        "pertaining to speculative philosophy; of metaphysics; \n                        N. metaphysics: branch of philosophy that examines the \n                        nature of reality",
      term: "metaphysical",
    },
    {
      definition:
        "measure; distribute; administer; Ex. mete out justice/punishment",
      term: "mete",
    },
    {
      definition:
        "like a meteor; swift; momentarily brilliant; Ex. meteoric \n                        rise to fame; N. meteor",
      term: "meteoric",
    },
    {
      definition:
        "arrangement of words in the form of poetry (by accentual \n                        rhythm)",
      term: "meter",
    },
    {
      definition: "systematic; N. method: systematic method of procedure",
      term: "methodical",
    },
    {
      definition:
        "excessively careful (with great attention to detail); \n                        painstaking; scrupulous",
      term: "meticulous",
    },
    {
      definition:
        "metric; written in the form of poetry; Ex. metrical \n                        translation of Homer",
      term: "metrical",
    },
    {
      definition: "large city",
      term: "metropolis",
    },
    {
      definition:
        "courage (to continue bravely in spite of difficulties); \n                        spirit; ADJ. mettlesome",
      term: "mettle",
    },
    {
      definition:
        "swamp gas; heavy vaporous atmosphere often emanating \n                        from decaying matter; pervasive corrupting influence; \n                        noxious atmosphere or influence",
      term: "miasma",
    },
    {
      definition:
        "small representative world; world in miniature; Ex. \n                        microcosm of English society",
      term: "microcosm",
    },
    {
      definition:
        "changing its habitat; wandering; Ex. migrant birds/workers; \n                        N: one that migrates",
      term: "migrant",
    },
    {
      definition:
        "wandering; V. migrate: move from one region and settle \n                        in another; move periodically from one region to another",
      term: "migratory",
    },
    {
      definition:
        "social environment; means of expression; Ex. feel out \n                        of one's milieu; Ex. His proper milieu is watercolor.",
      term: "milieu",
    },
    {
      definition: "combative; bellicose; N.",
      term: "militant",
    },
    {
      definition:
        "work against; Ex. militate against the chances of promotion; \n                        CF. serve as a soldier",
      term: "militate",
    },
    {
      definition:
        "army composed of ordinary citizens rather than professional \n                        soldiers",
      term: "militia",
    },
    {
      definition:
        "thousand-year period (as in the New Testament); hoped-for \n                        period of happiness and prosperity",
      term: "millennium",
    },
    {
      definition:
        "pantomime(act without dialogue); mimicry; mimer; V: \n                        mimic; pantomime",
      term: "mime",
    },
    {
      definition: "imitation",
      term: "mimicry",
    },
    {
      definition: "menacing; threatening",
      term: "minatory",
    },
    {
      definition:
        "affectedly dainty(delicate); V. mince: cut (esp. meat) \n                        into very small pieces; walk with exaggerated primness; \n                        walk in an unnatural way, taking little short steps; Ex. \n                        The actor minced across the stage; CF. mincemeat; CF. \n                        mincer",
      term: "mincing",
    },
    {
      definition: "mix together in close association",
      term: "mingle",
    },
    {
      definition: "small model; small painting; ADJ: small",
      term: "miniature",
    },
    {
      definition: "servile dependent; obsequious follower",
      term: "minion",
    },
    {
      definition: "extremely small",
      term: "minusculeminiscule)",
    },
    {
      definition:
        "extremely small; CF. minutes: official record of the \n                        proceedings at a meeting",
      term: "minute",
    },
    {
      definition: "petty or trivial details; CF. minutia",
      term: "minutiae",
    },
    {
      definition: "unreal reflection; optical illusion",
      term: "mirage",
    },
    {
      definition:
        "entangle; stick in swampy ground; stick or sink in \n                        mire; N: bog; deep mud; Ex. sucked deeper into the mire",
      term: "mire",
    },
    {
      definition: "merriment; laughter",
      term: "mirth",
    },
    {
      definition: "mischance; ill luck; Ex. death by misadventure",
      term: "misadventure",
    },
    {
      definition: "one who hates mankind; misanthropist",
      term: "misanthrope",
    },
    {
      definition: "error; misunderstanding; V. misapprehend",
      term: "misapprehension",
    },
    {
      definition: "made up of a variety of parts",
      term: "miscellaneous",
    },
    {
      definition:
        "mixture of writings on various subjects; collection \n                        of various items",
      term: "miscellany",
    },
    {
      definition: "ill luck",
      term: "mischance",
    },
    {
      definition:
        "behavior (of children) causing trouble with no serious \n                        harm; damage; harm; Ex. mischief to the crops; ADJ. mischievous: \n                        causing mischief; playfully troublesome",
      term: "mischief",
    },
    {
      definition: "immoral behavior; bad management; V.",
      term: "misconduct",
    },
    {
      definition: "interpret incorrectly; misinterpret; misjudge",
      term: "misconstrue",
    },
    {
      definition:
        "wretch; wrongdoer; villain; Ex. kindness to the miscreant; \n                        CF. believe",
      term: "miscreant",
    },
    {
      definition: "minor crime; misdeed; wrongdoing",
      term: "misdemeanor",
    },
    {
      definition: "stingy; mean",
      term: "miserly",
    },
    {
      definition: "doubts",
      term: "misgivings",
    },
    {
      definition: "unfortunate accident",
      term: "mishap",
    },
    {
      definition: "wrong or improper name; incorrect designation",
      term: "misnomer",
    },
    {
      definition: "hatred of marriage",
      term: "misogamy",
    },
    {
      definition: "hater of woman; CF. misogyny",
      term: "misogynist",
    },
    {
      definition: "object to be thrown or projected",
      term: "missile",
    },
    {
      definition: "letter; written statement; CF. sent",
      term: "missive",
    },
    {
      definition: "very small object or insect-like creature; small coin",
      term: "mite",
    },
    {
      definition:
        "appease; moderate; make or become less in force or \n                        intensity",
      term: "mitigate",
    },
    {
      definition:
        "pertaining to memory; assisting the memory; N: device, \n                        such as as formula or rhyme, used as a mnemonic aid",
      term: "mnemonic",
    },
    {
      definition: "movable; not fixed; N. mobility",
      term: "mobile",
    },
    {
      definition: "ridicule; deride; imitate often in derision",
      term: "mock",
    },
    {
      definition:
        "prevailing style; current fashion; manner; way of doing \n                        something; Ex. in the latest mode; Ex. simple mode of \n                        life",
      term: "mode",
    },
    {
      definition:
        "limited quantity; small amount; Ex. He does not have \n                        a modicum of sense; CF. moderate",
      term: "modicum",
    },
    {
      definition: "fashionable; conforming to the current fashion",
      term: "modish",
    },
    {
      definition:
        "tone down in intensity; change the intensity or tone \n                        of; regulate; change from one musical key to another; \n                        Ex. modulate from E to G",
      term: "modulate",
    },
    {
      definition:
        "powerful person; Ex. oil moguls; CF. Mogol, Moghul; \n                        CF. Mongolian",
      term: "mogul",
    },
    {
      definition:
        "the smallest particle (one or more atoms) of a substance \n                        that has all the properties of that substance",
      term: "molecule",
    },
    {
      definition: "soothe an angry person",
      term: "mollify",
    },
    {
      definition: "pamper; coddle; baby; indulge excessively",
      term: "mollycoddle",
    },
    {
      definition:
        "periodically shed or cast off hairs or feathers (for \n                        replacement by a new growth)",
      term: "moltmoult) ",
    },
    {
      definition: "melted; Ex. molten lava",
      term: "molten",
    },
    {
      definition: "very important; N. moment; CF. momentary",
      term: "momentous",
    },
    {
      definition:
        "quantity of motion of a moving body; impetus; moving \n                        force",
      term: "momentum",
    },
    {
      definition: "government under a single ruler",
      term: "monarchy",
    },
    {
      definition:
        "related to monks or monasteries; removed from worldly \n                        concerns",
      term: "monastic",
    },
    {
      definition: "pertaining to money",
      term: "monetary",
    },
    {
      definition: "plant or animal (esp. a dog) of mixed breed; ADJ.",
      term: "mongrel",
    },
    {
      definition: "having only one color",
      term: "monochromatic",
    },
    {
      definition: "painting in only one color; ADJ.",
      term: "monochrome",
    },
    {
      definition:
        "design composed of one or more initials of a name; \n                        V.",
      term: "monogram",
    },
    {
      definition: "scholarly article",
      term: "monograph",
    },
    {
      definition:
        "solidly uniform; unchangeable; unyielding; N. monolith: \n                        large block of stone",
      term: "monolithic",
    },
    {
      definition: "belief in one God",
      term: "monotheism",
    },
    {
      definition:
        "sameness leading to boredom; monotonousness; ADJ. monotonous; \n                        CF. monotone",
      term: "monotony",
    },
    {
      definition: "massive; impressively large; built as a monument",
      term: "monumental",
    },
    {
      definition:
        "fits of depression or gloom; ADJ. moody: given to changeable \n                        moods; subject to periods of depression; gloomy CF. mood: \n                        | state of mind or emotion",
      term: "moodiness",
    },
    {
      definition:
        "legal delay of payment or action; Ex. declare moratorium \n                        on the building of new houses",
      term: "moratorium",
    },
    {
      definition:
        "given to unwholesome or unhealthy thought; moody; characteristic \n                        of disease; Ex. morbid curiosity; N. morbidity; CF. disease",
      term: "morbid",
    },
    {
      definition:
        "biting; sarcastic; stinging; (apprec.) incisive; cutting; \n                        Ex. mordant pen/wit",
      term: "mordant",
    },
    {
      definition: "conventions; moral standards; moral customs",
      term: "mores",
    },
    {
      definition:
        "mortuary; place where bodies are kept before burial \n                        or cremation",
      term: "morgue",
    },
    {
      definition: "dying; at the point of death; CF. death",
      term: "moribund",
    },
    {
      definition: "ill-humored; sullen; sullenly melancholy",
      term: "morose",
    },
    {
      definition: "vessel in which substances are crushed with a pestle",
      term: "mortar",
    },
    {
      definition: "undertaker; CF. death",
      term: "mortician",
    },
    {
      definition:
        "humiliate by embarassing excessively; shame; punish \n                        the flesh; discipline (one's body) by self-denial; Ex. \n                        mortified by her blunder; Ex. mortify the flesh; CF. cause \n                        to die",
      term: "mortify",
    },
    {
      definition: "picture made of small colorful inlaid tiles; ADJ.",
      term: "mosaic",
    },
    {
      definition: "small speck (esp. of dust)",
      term: "mote",
    },
    {
      definition:
        "theme; recurrent thematic element in a musical or literary \n                        work; single or repeated pattern; figure",
      term: "motif",
    },
    {
      definition:
        "ability to move spontaneously; ADJ. motile: moving \n                        spontaneously",
      term: "motility",
    },
    {
      definition:
        "multi-colored (as of a garment worn by a jester); mixed; \n                        heterogeneous; CF. jester: one who jests (as a paid fool \n                        at medieval courts)",
      term: "motley",
    },
    {
      definition:
        "blotched in coloring; spotted; Ex. mottled face; V. \n                        mottle: mark with blotches of different colors",
      term: "mottled",
    },
    {
      definition: "brief statement used to express a principle",
      term: "motto",
    },
    {
      definition: "charlatan; boastful pretender",
      term: "mountebank",
    },
    {
      definition: "confuse; mix up confusedly; N: state of confusion",
      term: "muddle",
    },
    {
      definition: "(of weather) warm and damp",
      term: "muggy",
    },
    {
      definition:
        "defraud a person of something; swindle; Ex. mulct the \n                        boy of his legacy",
      term: "mulct",
    },
    {
      definition: "varied; greatly diversified; Ex. multifarious activities",
      term: "multifarious",
    },
    {
      definition: "having many forms",
      term: "multiform",
    },
    {
      definition: "having many languages; fluent in several languages",
      term: "multilingual",
    },
    {
      definition:
        "state of being numerous or multiple; large number; \n                        Ex. multiplicity of details; ADJ. multiple: of more than \n                        one element",
      term: "multiplicity",
    },
    {
      definition:
        "worldly as opposed to spiritual; everyday; of the ordinary; \n                        Ex. mundane existence; CF. world",
      term: "mundane",
    },
    {
      definition:
        "very generous in giving; Ex. munificent benefactor; \n                        N. munificience",
      term: "munificent",
    },
    {
      definition: "wall painting",
      term: "mural",
    },
    {
      definition:
        "dark and gloomy; thick with fog; vague; Ex. murky night/fog; \n                        N. murk: partial or complete darkness; gloom",
      term: "murky",
    },
    {
      definition: "low, indistinct, continuous sound; V. CF. mumble",
      term: "murmur",
    },
    {
      definition:
        "ponder at length; N: source of inspiration (esp. of \n                        a poet)",
      term: "muse",
    },
    {
      definition:
        "having the odor of musk; N. musk: odorous substance \n                        secreted by an Asian deer",
      term: "musky",
    },
    {
      definition:
        "gather; assemble (troops); Ex. muster up one's strength \n                        for the ordeal; N.",
      term: "muster",
    },
    {
      definition: "stale (in odor or taste); spoiled by age; CF. moist",
      term: "musty",
    },
    {
      definition:
        "ability to change in form; fickleness; ADJ. mutable: \n                        able to change; fickle; CF. mutate; CF. mutant",
      term: "mutablility",
    },
    {
      definition:
        "silent; without speech; not pronounced; unable to speak; \n                        N: one who is incapable of speech; V: soften the sound, \n                        color, shade of",
      term: "mute",
    },
    {
      definition: "silent; muffled; toned down; Ex. muted traffic noise",
      term: "muted",
    },
    {
      definition:
        "maim; injure lastingly; deprive of a limb or an essential \n                        part",
      term: "mutilate",
    },
    {
      definition:
        "unruly; rebellious; Ex. mutinous teenagers; N. mutiny: \n                        open rebellion; CF. mutineer",
      term: "mutinous",
    },
    {
      definition: "utter (complaining words) indistinctly in low tones",
      term: "mutter",
    },
    {
      definition: "nearsighted; lacking foresight; N. myopia",
      term: "myopic",
    },
    {
      definition: "very large number; ADJ. CF. ten thousand",
      term: "myriad",
    },
    {
      definition:
        "of hidden meaning and spiritual power; Ex. mystic ceremonies; \n                        N. CF. mysticism",
      term: "mystic",
    },
    {
      definition:
        "likely to change; unstable; Ex. emotionally labile; \n                        N. lability",
      term: "labile",
    },
    {
      definition: "demanding much work or care; tedious",
      term: "laborious",
    },
    {
      definition: "maze",
      term: "labyrinth",
    },
    {
      definition:
        "cord used to draw and tie together two opposite edges \n                        (as of a shoe); delicate fabric made of fine threads; \n                        V: draw together by tying a lace",
      term: "lace",
    },
    {
      definition:
        "torn ragged wound; V. lacerate: tear (the skin as with \n                        broken glass); wound",
      term: "laceration",
    },
    {
      definition: "producing tears; tearful",
      term: "lachrymose",
    },
    {
      definition:
        "lacking interest or effort; lacking purpose or zest; \n                        lazy; halfhearted; languid",
      term: "lackadaisical",
    },
    {
      definition: "lacking luster(shine; gloss); dull",
      term: "lackluster",
    },
    {
      definition: "brief and to the point; using few words; terse",
      term: "laconic",
    },
    {
      definition:
        "move or develop more slowly; straggle; Ex. lag behind \n                        the rest; N.",
      term: "lag",
    },
    {
      definition: "slow; sluggish; N: one who lags; straggler",
      term: "laggard",
    },
    {
      definition:
        "shallow body of water or lake near a sea; lake separated \n                        from a sea by sandbars or coral reefs",
      term: "lagoon",
    },
    {
      definition:
        "laypersons; laymen; persons not connected with the \n                        clergy",
      term: "laity",
    },
    {
      definition: "grieve; express sorrow; N. lamentation",
      term: "lament",
    },
    {
      definition:
        "ridicule; N: written attack ridiculing or satirizing \n                        a person, group, or institution",
      term: "lampoon",
    },
    {
      definition: "pierce with a lance; cut into; N: spearlike weapon",
      term: "lance",
    },
    {
      definition: "small surgical tool for making incisions",
      term: "lancet",
    },
    {
      definition: "lacking energy or vitality; weary; sluggish; listless",
      term: "languid",
    },
    {
      definition: "lose animation or strength",
      term: "languish",
    },
    {
      definition: "lack of physical or mental energy; lassitude; depression",
      term: "languor",
    },
    {
      definition: "long and thin; Ex. Lank, gaunt, Abraham Lincoln",
      term: "lank",
    },
    {
      definition:
        "take in food or drink with one's tongue; splash gently; \n                        Ex. waves lapping the shore; N: front area from the waist \n                        to the knees of a seated person",
      term: "lap",
    },
    {
      definition: "theft; Ex. petit larceny",
      term: "larceny",
    },
    {
      definition: "pantry; place where food is kept",
      term: "larder",
    },
    {
      definition: "generous gift (given to people who do not have enough)",
      term: "largess",
    },
    {
      definition: "lustful",
      term: "lascivious",
    },
    {
      definition: "languor; weariness; listlessness",
      term: "lassitude",
    },
    {
      definition:
        "fastening or lock consisting of a movable bar that \n                        fits into a notch; V: close with a latch",
      term: "latch",
    },
    {
      definition:
        "present but not yet noticeable or active; dormant; \n                        hidden; N. latency; CF. potential",
      term: "latent",
    },
    {
      definition: "of or coming from the side",
      term: "lateral",
    },
    {
      definition: "freedom from narrow limitations",
      term: "latitude",
    },
    {
      definition:
        "praise; N. ADJ. laudable: praiseworthy; ADJ. laudatory: \n                        expressing praise",
      term: "laud",
    },
    {
      definition:
        "liberal; wasteful; generous or wasteful in giving or \n                        using; abundant; profuse; great; Ex. decorated lavishly; \n                        V. give in abundance",
      term: "lavish",
    },
    {
      definition:
        "careless; negligent; not paying enough attention; Ex. \n                        lax service",
      term: "lax",
    },
    {
      definition: "man who is not a cleric; man who is nonprofessional",
      term: "layman",
    },
    {
      definition:
        "restraining rope fastened to the collar of an animal \n                        (to control it); Ex. a dog on a leash",
      term: "leash",
    },
    {
      definition:
        "add leaven to; cause to rise or grow lighter; enliven; \n                        N: agent, such as yeast, that causes dough to rise (by \n                        fermentation); element that lightens or enlivens",
      term: "leaven",
    },
    {
      definition: "farewell or departure",
      term: "leavetaking ",
    },
    {
      definition:
        "gross lewdness; lustfulness; ADJ. lecherous; N. lecher: \n                        lecherous man",
      term: "lechery",
    },
    {
      definition: "reading desk or stand for a public speaker",
      term: "lectern",
    },
    {
      definition: "(of someone) suspicious; wary; cautious",
      term: "leery",
    },
    {
      definition:
        "room to move; margin; latitude; Ex. leeway for the \n                        deadline",
      term: "leeway",
    },
    {
      definition:
        "gift made by a will; something handed down from an \n                        ancestor",
      term: "legacy",
    },
    {
      definition: "(of music) played smoothly",
      term: "legato",
    },
    {
      definition: "explanatory list of symbols on a map",
      term: "legend",
    },
    {
      definition: "sleight(dexterity) of hand; CF. light of hand",
      term: "legerdemain",
    },
    {
      definition:
        "legislating branch of government; CF. legislate: make \n                        laws",
      term: "legislature",
    },
    {
      definition:
        "mildness; permissiveness; ADJ. lenient: not severe \n                        in judgment or punishment",
      term: "leniency",
    },
    {
      definition: "like a lion",
      term: "leonine",
    },
    {
      definition: "deadly",
      term: "lethal",
    },
    {
      definition:
        "drowsy; dull; N. lethargy: state of sluggishness and \n                        inactivity",
      term: "lethargic",
    },
    {
      definition:
        "earthen or stone embankment to prevent flooding; CF. \n                        raise",
      term: "levee",
    },
    {
      definition:
        "rise and float in the air (especially by magical means); \n                        CF. light",
      term: "levitate",
    },
    {
      definition:
        "lack of seriousness or steadiness; frivolity; lightness \n                        of manner",
      term: "levity",
    },
    {
      definition:
        "impose (a fine); collect (a payment); impose or collect \n                        (a tax); Ex. levy a tax on tobacco",
      term: "levy",
    },
    {
      definition: "lustful",
      term: "lewd",
    },
    {
      definition:
        "compiler of a dictionary; CF. lexicography: work of \n                        compiling a dictionary",
      term: "lexicographer",
    },
    {
      definition: "dictionary",
      term: "lexicon",
    },
    {
      definition:
        "drawback; handicap; debts; obligation; responsibility; \n                        condition of being liable; ADJ. liable: likely; responsible \n                        (for paying)",
      term: "liability",
    },
    {
      definition:
        "contact that keeps parties in communication; communication \n                        between groups; one that maintains communication; go-between; \n                        secret love affair; V. liaise: keep a connection",
      term: "liaison",
    },
    {
      definition:
        "defamatory written statement; act of writing something \n                        that smears a person's character; V. ADJ. libelous",
      term: "libel",
    },
    {
      definition:
        "debauched person; dissolute or licentious person; rou\\'e; \n                        CF. free",
      term: "libertine",
    },
    {
      definition: "lustful",
      term: "libidinous",
    },
    {
      definition:
        "psychic and emotional energy or urges behind human \n                        activity; sexual desire",
      term: "libido",
    },
    {
      definition: "text of an opera or oratorio; CF. book",
      term: "libretto",
    },
    {
      definition:
        "official or legal permission; latitude of action or \n                        speech; excessive freedom that causes harm or damage; \n                        V.",
      term: "license",
    },
    {
      definition: "amoral; lewd and lascivious; unrestrained",
      term: "licentious",
    },
    {
      definition: "legal claim or right on a property",
      term: "lien",
    },
    {
      definition: "like wood",
      term: "ligneous",
    },
    {
      definition: "extremely small; CF. Lilliput in Gulliver's Travels",
      term: "lilliputian",
    },
    {
      definition: "flexible; supple; pliable; V.",
      term: "limber",
    },
    {
      definition:
        "region near heaven or hell where certain souls are \n                        kept; prison (slang); Ex. Purgatory and Limbo",
      term: "limbo",
    },
    {
      definition: "draw; outline; describe; CF. line ?",
      term: "limn",
    },
    {
      definition: "walk lamely; ADJ: lacking firmness; weak",
      term: "limp",
    },
    {
      definition: "crystal clear",
      term: "limpid",
    },
    {
      definition: "descent; ancestry",
      term: "lineage",
    },
    {
      definition:
        "features especially of the face; distinctive shape \n                        or contour of the face; CF. line",
      term: "lineaments",
    },
    {
      definition:
        "loiter or dawdle; be slow in leaving; delay going; \n                        continue or persist; be slow to disappear; Ex. The smell \n                        lingered for days.",
      term: "linger",
    },
    {
      definition: "pertaining to language",
      term: "linguistic",
    },
    {
      definition: "treat (a person) as a celebrity",
      term: "lionize",
    },
    {
      definition:
        "settle accounts; pay off (a debt); clear up; eliminate; \n                        kill or abolish",
      term: "liquidate",
    },
    {
      definition: "tilt (as of a ship); lean over (to one side)",
      term: "list",
    },
    {
      definition: "lacking in spirit or energy; languid",
      term: "listless",
    },
    {
      definition:
        "supplicatory prayer; prayer in which the priest calls \n                        out and the people replies in the same words",
      term: "litany",
    },
    {
      definition: "flexible; supple; CF. limber",
      term: "lithe",
    },
    {
      definition: "lawsuit; N. litigant: one party in a lawsuit; V. litigate",
      term: "litigation",
    },
    {
      definition:
        "understatement for emphasis; Ex. ``not bad(=pretty \n                        good)''",
      term: "litotes",
    },
    {
      definition:
        "waste material thrown away (as bits of paper scattered \n                        untidily); V: cover untidily with scattered litter",
      term: "litter",
    },
    {
      definition:
        "lead-colored; black and blue (as from a bruise); ashen; \n                        enraged; extremely angry",
      term: "livid",
    },
    {
      definition:
        "reluctant; unwilling; disinclined; Ex. Romeo and Juliet \n                        were both loath for him to go.",
      term: "loath",
    },
    {
      definition:
        "detest; ADJ. loathsome: arousing loathing; offensive; \n                        Ex. loathsome smell",
      term: "loathe",
    },
    {
      definition: "metal-bearing vein(long deposit of an ore)",
      term: "lode",
    },
    {
      definition: "room or space under the roof; attic",
      term: "loft",
    },
    {
      definition: "very high",
      term: "lofty",
    },
    {
      definition:
        "record of a voyage or flight; record of day-to-day \n                        activities; section of a trunk; V.",
      term: "log",
    },
    {
      definition: "hang about/around; stand idly about; linger",
      term: "loiter",
    },
    {
      definition: "lounge about",
      term: "loll",
    },
    {
      definition: "long life; long duration",
      term: "longevity",
    },
    {
      definition:
        "act of keeping watch; high place commanding a wide \n                        view; person who keeps watch",
      term: "lookout",
    },
    {
      definition:
        "appear or take shape (usually in an enlarged, indistinct, \n                        or distorted form); Ex. The shadow of the gallows loomed \n                        threateningly. N: apparatus for making thread into cloth",
      term: "loom",
    },
    {
      definition: "gallop slowly",
      term: "lope",
    },
    {
      definition:
        "heavier or larger on one side than the other; Ex. lopsided \n                        way of walking",
      term: "lopsided",
    },
    {
      definition: "talkative; N. loquacity",
      term: "loquacious",
    },
    {
      definition:
        "object used in making a determination at random; fate; \n                        piece of land",
      term: "lot",
    },
    {
      definition:
        "contest in which winners are selected in a drawing \n                        of lots",
      term: "lottery",
    },
    {
      definition: "stand, sit, or lie in a lazy, relaxed way",
      term: "lounge",
    },
    {
      definition:
        "clumsy person; ADJ. loutish; CF. from countrysides \n                        ?",
      term: "lout",
    },
    {
      definition: "moo; make the sound of a cow",
      term: "low",
    },
    {
      definition:
        "apply a lubricant to; N. lubricant: substance that \n                        reduces friction",
      term: "lubricate",
    },
    {
      definition: "easily understood; clear; intelligible; N. lucidity",
      term: "lucid",
    },
    {
      definition: "profitable; producing wealth",
      term: "lucrative",
    },
    {
      definition: "money; profit; Ex. filthy lucre",
      term: "lucre",
    },
    {
      definition: "laughable; ridiculous; trifling",
      term: "ludicrous",
    },
    {
      definition: "mournful; sorrowful",
      term: "lugubrious",
    },
    {
      definition:
        "moment of calm; period of reduced activity; Ex. a lull \n                        in the rain; V: cause to become less active; cause to \n                        sleep or rest; Ex. lull the opponents into a false sense \n                        of security; CF. lullaby",
      term: "lull",
    },
    {
      definition:
        "move heavily or clumsily; Ex. The bear lumbered through \n                        the woods; N: timber",
      term: "lumber",
    },
    {
      definition: "unit of light energy (one candle's worth)",
      term: "lumen",
    },
    {
      definition:
        "celebrity (in a specific field); dignitary; object \n                        that gives light (as a celestial body)",
      term: "luminary",
    },
    {
      definition:
        "shining (esp. in the dark); issuing light; Ex. luminous \n                        paint/road signs",
      term: "luminous",
    },
    {
      definition: "pertaining to the moon",
      term: "lunar",
    },
    {
      definition: "insane; Ex. lunatic asylum",
      term: "lunatic",
    },
    {
      definition:
        "wild; sensational; graphic; gruesome; horrible; Ex. \n                        lurid details of the murder",
      term: "lurid",
    },
    {
      definition: "stealthily lie in waiting; slink; exist unperceived",
      term: "lurk",
    },
    {
      definition: "pleasing to taste or smell; delicious",
      term: "luscious",
    },
    {
      definition: "(of a plant or grass) growing very well",
      term: "lush",
    },
    {
      definition: "intense sexual desire; intense eagerness; V.",
      term: "lust",
    },
    {
      definition: "shine; gloss (of a polished surface)",
      term: "luster",
    },
    {
      definition: "shining; brilliant; Ex. lustrous hair",
      term: "lustrous",
    },
    {
      definition:
        "abundant; growing healthily and in large amounts; excessively \n                        ornate; rich and splendid; fertile; Ex. luxuriant forests/prose; \n                        CF. luxurious, luxuriate",
      term: "luxuriant",
    },
    {
      definition: "take pleasure in great comfort",
      term: "luxuriate",
    },
    {
      definition: "charlatan; impostor",
      term: "quack",
    },
    {
      definition: "four-footed animal; ADJ. CF. biped",
      term: "quadruped",
    },
    {
      definition:
        "drink with zest; drink with relish(zest; hearty enjoyment); \n                        CF. sip",
      term: "quaff",
    },
    {
      definition:
        "bog; marsh; soft, wet, boggy land; predicament; complex \n                        or dangerous situation from which it is difficult to free \n                        oneself",
      term: "quagmire",
    },
    {
      definition: "cower; shrink back in fear; lose heart",
      term: "quail",
    },
    {
      definition:
        "odd in an old-fashioned way; odd; old-fashioned; picturesque",
      term: "quaint",
    },
    {
      definition:
        "limited; restricted; V. qualify: limit the meaning \n                        of; modify",
      term: "qualified",
    },
    {
      definition:
        "reach a necessary standard; limit the meaning of something \n                        stated",
      term: "qualify",
    },
    {
      definition:
        "uneasy feelings; misgivings; uneasy fears especially \n                        about matters of conscience; Ex. I have no qualms about \n                        giving this assignment to Helen.",
      term: "qualms",
    },
    {
      definition:
        "dilemma; state of uncertainty; Ex. She is in a quandary \n                        about whether to go.",
      term: "quandary",
    },
    {
      definition:
        "isolation of a person, place, or ship to prevent spread \n                        of infection; V: isolate in quarantine",
      term: "quarantine",
    },
    {
      definition: "dig into (to get stone); N: mine;",
      term: "quarry",
    },
    {
      definition:
        "crush; suppress; squash; subdue; annul; Ex. quash a \n                        rebellion/the decision of the low court",
      term: "quash",
    },
    {
      definition: "dock; wharf; pier; landing place (for boats)",
      term: "quay",
    },
    {
      definition:
        "experiencing nausea; nauseated; easily nauseated; squeamish; \n                        Ex. feel a little queasy",
      term: "queasy",
    },
    {
      definition: "strange; eccentric; deviating from the normal",
      term: "queer",
    },
    {
      definition:
        "suppress; put an end to; put down forcibly; extinguish; \n                        quiet; Ex. ``Army Quells Rebellion'' in newspaper; CF. \n                        kill",
      term: "quell",
    },
    {
      definition:
        "assuage or satisfy (thrust); slake; douse or extinguish; \n                        put out; suppress",
      term: "quench",
    },
    {
      definition: "given to complaining; complaining; fretful; whining",
      term: "querulous",
    },
    {
      definition: "inquiry; question; V.",
      term: "query",
    },
    {
      definition: "line (of waiting people or vehicles)",
      term: "queue",
    },
    {
      definition:
        "minor objection or complaint; V: raise minor objections; \n                        carp; cavil",
      term: "quibble",
    },
    {
      definition: "mercury",
      term: "quicksilver",
    },
    {
      definition: "dormant; temporarily inactive; at rest; N. quiescence",
      term: "quiescent",
    },
    {
      definition: "tranquillity; calmness",
      term: "quietude",
    },
    {
      definition:
        "purest and highest embodiment; perfect example; apotheosis; \n                        most essential element; Ex. quintessence of wit; ADJ. \n                        quintessential; CF. fifth essence",
      term: "quintessence",
    },
    {
      definition: "taunt; clever sarcastic remark; V.",
      term: "quip",
    },
    {
      definition:
        "sudden sharp turn or twist; startling twist; caprice; \n                        idiosyncrasy; peculiarity of behavior; Ex. by a quirk \n                        of fate",
      term: "quirk",
    },
    {
      definition: "traitor who aids invaders; CF. Vidkun Quisling",
      term: "quisling",
    },
    {
      definition: "tremble; shake; N.",
      term: "quiver",
    },
    {
      definition: "idealistic but impractical; CF. Don Quixote",
      term: "quixotic",
    },
    {
      definition:
        "curious; suggesting puzzlement (without saying); questioning; \n                        teasing; mocking; bantering; Ex. quizzical glance",
      term: "quizzical",
    },
    {
      definition: "minimal number of members necessary to conduct a meeting",
      term: "quorum",
    },
    {
      definition: "daily; commonplace; customary; Ex. quotidian routine",
      term: "quotidian",
    },
    {
      definition: "thick-skinned animal",
      term: "pachyderm",
    },
    {
      definition:
        "one opposed to force; antimilitarist; ADJ. N. pacifism: \n                        opposition to war as a means of resolving disputes",
      term: "pacifist",
    },
    {
      definition: "soothe; make calm or quiet; subdue; bring peace to",
      term: "pacify",
    },
    {
      definition: "chaplain (in the armed forces)",
      term: "padre",
    },
    {
      definition: "song of praise or joy; Ex. paeans celebrating the victory",
      term: "paean",
    },
    {
      definition:
        "taking pains; showing hard work; taking great care; \n                        very careful and through",
      term: "painstaking",
    },
    {
      definition: "agreeable; pleasing to the taste",
      term: "palatable",
    },
    {
      definition: "roof of the mouth; sense of the taste",
      term: "palate",
    },
    {
      definition: "of or suitable for a palace; magnificent",
      term: "palatial",
    },
    {
      definition:
        "study of prehistoric life or fossils; CF. paleo-: ancient \n                        or prehistoric; Ex. paleography: study of ancient written \n                        documents",
      term: "paleontology",
    },
    {
      definition: "board on which painter mixes pigments(coloring matters)",
      term: "palette",
    },
    {
      definition:
        "parchment or piece of writing material used for second \n                        time after original writing has been erased",
      term: "palimpsest",
    },
    {
      definition: "become boring; grow tiresome",
      term: "pall",
    },
    {
      definition: "small poor bed; Ex. straw pallet",
      term: "pallet",
    },
    {
      definition:
        "ease pain (without curing); make less severe or offensive \n                        (a crime or illness)",
      term: "palliate",
    },
    {
      definition: "pale; wan; Ex. pallid complexion",
      term: "pallid",
    },
    {
      definition:
        "conceal in the palm of the hand; palm off: pass off; \n                        Ex. palm off some bad oranges onto the lady/the painting \n                        as a real Renoir",
      term: "palm",
    },
    {
      definition:
        "tangible; (of something bad) easily perceptible; obvious; \n                        Ex. palpable blunder",
      term: "palpable",
    },
    {
      definition:
        "throb; beat rapidly; flutter; tremble; Ex. Her heart \n                        began to palpitate.",
      term: "palpitate",
    },
    {
      definition:
        "insignificant; petty; trifling; contemptible; Ex. paltry \n                        sum; CF. trash",
      term: "paltry",
    },
    {
      definition: "criticize harshly",
      term: "pan",
    },
    {
      definition: "cure-all; remedy for all diseases",
      term: "panacea",
    },
    {
      definition:
        "flair; manner of doing things without any difficulty \n                        (causing admiration); flamboyance; bunch of feathers (on \n                        a helmet); Ex. with great panache;",
      term: "panache",
    },
    {
      definition:
        "widespread; affecting the majority of people; N: pandemic \n                        disease; CF. all people",
      term: "pandemic",
    },
    {
      definition:
        "wild tumult(commotion); wild noisy disorder; CF. Paradise \n                        Lost",
      term: "pandemonium",
    },
    {
      definition: "cater to (the low desires of others)",
      term: "pander",
    },
    {
      definition:
        "formal praise; encomium; Ex. I don't deserve such panegyrics.",
      term: "panegyric",
    },
    {
      definition: "sudden sharp feeling of pain",
      term: "pang",
    },
    {
      definition:
        "denoting an unobstructed and comprehensive view; N. \n                        panorama: unbroken view of a wide area",
      term: "panoramic",
    },
    {
      definition: "acting without dialogue; V.",
      term: "pantomime",
    },
    {
      definition: "ancient paper made from stem of papyrus plant",
      term: "papyrus",
    },
    {
      definition: "short simple story teaching a moral",
      term: "parable",
    },
    {
      definition:
        "model; example that serves as a model; pattern; list \n                        of all the inflectional forms of a word",
      term: "paradigm",
    },
    {
      definition:
        "something apparently contradictory in nature (that \n                        may nonetheless be true); statement that looks false but \n                        is actually correct",
      term: "paradox",
    },
    {
      definition: "model of perfection; Ex. paragon of virtue",
      term: "paragon",
    },
    {
      definition:
        "similar; analogous; corresponding; N: parallel line; \n                        person or thing that is parallel (to another); similarity; \n                        Ex. know of no parallel to the case; Ex. without parallel; \n                        V: be similar to; make parallel; Ex. Your experience parallels \n                        mine; CF. unp",
      term: "parallel",
    },
    {
      definition: "state of being parallel; similarity; analogy",
      term: "parallelism",
    },
    {
      definition:
        "limit; independent variable; Ex. parameters of the \n                        problem; Ex. within the parameters of the budget",
      term: "parameter",
    },
    {
      definition:
        "foremost in importance; supreme; CF. para-: beyond; \n                        above; Ex. paranormal",
      term: "paramount",
    },
    {
      definition: "illicit lover",
      term: "paramour",
    },
    {
      definition:
        "psychosis marked by delusions of grandeur or persecution; \n                        N: ADJ: paranoid, paranoiac",
      term: "paranoia",
    },
    {
      definition:
        "equipment; odds and ends used in a particular activity; \n                        personal belongings; Ex. photographic paraphernalia; CF. \n                        married woman's property exclusive of her dowry",
      term: "paraphernalia",
    },
    {
      definition:
        "restate a passage in one's own words while retaining \n                        thought of author; N: restatement of a text in other words",
      term: "paraphrase",
    },
    {
      definition:
        "animal or plant living on another; toady; sycophant; \n                        CF. para-: beside",
      term: "parasite",
    },
    {
      definition:
        "extremely dry; very thirsty; V. parch: make or become \n                        extremely dry (by exposure to heat)",
      term: "parched",
    },
    {
      definition: "writing material made from the skin of a sheep or goat",
      term: "parchment",
    },
    {
      definition:
        "cut away the outer covering or skin of (with a knife); \n                        trim; Ex. pare apples/expenses",
      term: "pare",
    },
    {
      definition: "social outcast; Ex. Mariah the pariah",
      term: "pariah",
    },
    {
      definition:
        "area in the care of a single priest and served by one \n                        main church",
      term: "parish",
    },
    {
      definition: "equality; close resemblance; CF. disparate",
      term: "parity",
    },
    {
      definition:
        "language; manner of speaking; idiom; Ex. in legal/common \n                        parlance",
      term: "parlance",
    },
    {
      definition: "conference (between opponents); CF. speak",
      term: "parley",
    },
    {
      definition:
        "narrow in scope or outlook; provincial; related to \n                        parishes",
      term: "parochial",
    },
    {
      definition: "humorous imitation; spoof; takeoff; travesty; V.",
      term: "parody",
    },
    {
      definition: "fit or attack of pain, laughter, rage; sudden outburst",
      term: "paroxysm",
    },
    {
      definition:
        "floor made of wood strips inlaid in a mosaic like matter; \n                        CF. strip: long narrow piece",
      term: "parquet",
    },
    {
      definition:
        "ward off a blow; deflect; Ex. He parried the unwelcome \n                        question very skillfully; N.",
      term: "parry",
    },
    {
      definition: "stinginess; excessive frugality; ADJ. parsimonious",
      term: "parsimony",
    },
    {
      definition:
        "incomplete; favoring one side over another; having \n                        a liking for something",
      term: "partial",
    },
    {
      definition:
        "state of being partial; inclination; favorable bias; \n                        special fondness; preference",
      term: "partiality",
    },
    {
      definition:
        "one-sided; prejudiced; committed to a party (with dislike \n                        of any others); N: strong supporter of a party; guerrilla",
      term: "partisan",
    },
    {
      definition: "divide into parts",
      term: "partition",
    },
    {
      definition: "upstart; newly rich person",
      term: "parvenu",
    },
    {
      definition: "old-fashioned; past the prime",
      term: "passe ",
    },
    {
      definition: "present falsely; represent falsely to be",
      term: "passoff ",
    },
    {
      definition:
        "not active; acted upon; receiving an action without \n                        acting in return; accepting without resistance",
      term: "passive",
    },
    {
      definition:
        "smooth viscous mixture as of flour(powder made by crushing \n                        grain) and water (used as an adhesive); V: cause to adhere \n                        by applying paste",
      term: "paste",
    },
    {
      definition:
        "imitation of another's style in musical composition \n                        or in writing; work of art openly imitating the works \n                        of other artists",
      term: "pastiche",
    },
    {
      definition: "rural; of rural life; idyllic; of a pastor",
      term: "pastoral",
    },
    {
      definition: "paste of flour and water (eaten when baked)",
      term: "pastry",
    },
    {
      definition:
        "obvious; easily seen; open for the public to read; \n                        of or protected by a patent; Ex. patent to everyone; N.",
      term: "patent",
    },
    {
      definition: "causing sadness, compassion, pity; touching",
      term: "pathetic",
    },
    {
      definition: "pertaining to disease; N. pathology: study of disease",
      term: "pathological",
    },
    {
      definition:
        "tender sorrow; pity; quality in art or literature that \n                        produces these feelings; Ex. pathos that runs through \n                        the novel",
      term: "pathos",
    },
    {
      definition:
        "green crust on old bronze works or copper; tone slowly \n                        taken by varnished painting",
      term: "patina",
    },
    {
      definition: "local or provincial dialect",
      term: "patois",
    },
    {
      definition: "father and ruler of a family or tribe",
      term: "patriarch",
    },
    {
      definition:
        "noble; aristocratic; N: person of high rank; aristocrat; \n                        CF. member of the governing classes in ancient Rome; CF. \n                        plebian",
      term: "patrician",
    },
    {
      definition: "property inherited from a father",
      term: "patrimony",
    },
    {
      definition:
        "support; act superior toward; treat in a condescending \n                        manner; be a customer of; N. patron: one that supports; \n                        regular customer; N. patronage; CF. boycott",
      term: "patronize",
    },
    {
      definition: "scarcity; dearth",
      term: "paucity",
    },
    {
      definition: "very poor person",
      term: "pauper",
    },
    {
      definition: "slight offense or fault; CF. sin",
      term: "peccadillo",
    },
    {
      definition: "pertaining to money",
      term: "pecuniary",
    },
    {
      definition: "teacher; CF. child leader",
      term: "pedagogue",
    },
    {
      definition: "teaching; art of education",
      term: "pedagogy",
    },
    {
      definition:
        "scholar who overemphasizes book learning, trivial details \n                        of learning, or technicalities",
      term: "pedant",
    },
    {
      definition:
        "bookish; showing off learning; marked by an excessive \n                        ostentatious concern for book learning; N. pedantry",
      term: "pedantic",
    },
    {
      definition: "travel about selling (wares); CF. foot",
      term: "peddle",
    },
    {
      definition: "support or base as for a pillar or statue",
      term: "pedestal",
    },
    {
      definition:
        "ordinary; dull; unimaginative(lacking in imagination); \n                        going on foot; Ex. pedestrian prose; N.",
      term: "pedestrian",
    },
    {
      definition:
        "physician specializing in children's diseases; N. pediatrics",
      term: "pediatrician",
    },
    {
      definition: "ancestry; lineage",
      term: "pedigree",
    },
    {
      definition:
        "one who has equal standing with another; nobleman; \n                        V: look intently; N. peerage; CF. peeress",
      term: "peer",
    },
    {
      definition: "having no equal; incomparable",
      term: "peerless",
    },
    {
      definition: "bad-tempered; irritable; V. peeve: make angry",
      term: "peevish",
    },
    {
      definition:
        "(of a word or phrase) suggesting that someone is of \n                        little value; negative in connotation; having a belittling \n                        effect; Ex. Many women now considers ``housewife'' a pejorative \n                        expression, because it patronized them.",
      term: "pejorative",
    },
    {
      definition: "in confusion; disorderly; Ex. dash pell-mell",
      term: "pellmell ",
    },
    {
      definition:
        "transparent; limpid(crystal clear); clear in meaning; \n                        easy to understand",
      term: "pellucid",
    },
    {
      definition:
        "fenced enclosure for animals; confining space; Ex. \n                        sheep pen; V: confine in a pen; enclose",
      term: "pen",
    },
    {
      definition:
        "self-imposed punishment for sin; Ex. do penance for \n                        one's sins; CF. penitent",
      term: "penance",
    },
    {
      definition:
        "strong inclination; strong liking (esp. for something \n                        that is disapproved of by other people); Ex. penchant \n                        for fast cars",
      term: "penchant",
    },
    {
      definition:
        "hanging down from something; pending; N: ornament (hanging \n                        from a necklace etc.)",
      term: "pendantpendent)",
    },
    {
      definition:
        "not yet decided or settled; impending; Ex. pending \n                        decision; PREP. while awaiting; until; Ex. delay the decision \n                        pending his return",
      term: "pending",
    },
    {
      definition: "hanging; suspended",
      term: "pendulous",
    },
    {
      definition:
        "enter into; pierce; permeate; see through; grasp the \n                        inner significance of; understand",
      term: "penetrate",
    },
    {
      definition: "repentant; N.",
      term: "penitent",
    },
    {
      definition: "study of prison management and criminal rehabilitation",
      term: "penology",
    },
    {
      definition:
        "dreamily or deeply thoughtful; sadly thoughtful; thoughtful \n                        with a hint of sadness; contemplative; CF. think over",
      term: "pensive",
    },
    {
      definition: "partial shadow (in an eclipse); CF. almost shadow",
      term: "penumbra",
    },
    {
      definition:
        "extreme poverty; stinginess; ADJ. penurious: very poor; \n                        stingy",
      term: "penury",
    },
    {
      definition:
        "landless agricultural worker; bond servant; menial \n                        worker; N. peonage",
      term: "peon",
    },
    {
      definition:
        "insightful; showing a good ability at perceiving and \n                        understanding; aware; wise; of perception",
      term: "perceptive",
    },
    {
      definition:
        "striking one object against another sharply; Ex. percussion \n                        instrument; N: striking together of two bodies; sound \n                        caused by percussion",
      term: "percussion",
    },
    {
      definition: "damnation; complete ruin; hell",
      term: "perdition",
    },
    {
      definition: "journey; V. peregrinate",
      term: "peregrination",
    },
    {
      definition:
        "demanding and leaving no choice; imperative; Ex. peremptory \n                        decree/knock",
      term: "peremptory",
    },
    {
      definition:
        "something long-lasting; perennial plant; ADJ: lasting \n                        through the year or many years; lasting for a long time; \n                        enduring",
      term: "perennial",
    },
    {
      definition: "treacherous; disloyal; N. perfidy: treachery",
      term: "perfidious",
    },
    {
      definition: "pierce; put a hole through",
      term: "perforate",
    },
    {
      definition:
        "done routinely and with little care; superficial; not \n                        thorough; lacking interest, care, or enthusiasm; Ex. perfunctory \n                        kiss",
      term: "perfunctory",
    },
    {
      definition:
        "point of moon's orbit when it is nearest the earth; \n                        CF. apogee",
      term: "perigee",
    },
    {
      definition: "outer boundary; length of the outer boundary; circumference",
      term: "perimeter",
    },
    {
      definition:
        "walking about from place to place (to work); moving; \n                        Ex. peripatetic school of philosophy",
      term: "peripatetic",
    },
    {
      definition:
        "of a periphery; marginal; outer; of minor importance; \n                        not central; Ex. peripheral nerve/interest",
      term: "peripheral",
    },
    {
      definition:
        "outside edge especially of a round surface; perimeter; \n                        Ex. periphery of the town",
      term: "periphery",
    },
    {
      definition:
        "false testimony while under oath; V. perjure oneself: \n                        testify falsely under oath",
      term: "perjury",
    },
    {
      definition:
        "that can be permeated; penetrable; porous; allowing \n                        liquids or gas to pass through; V. permeate: spread or \n                        flow throughout; charge",
      term: "permeable",
    },
    {
      definition: "allowing much freedom; lenient; Ex. permissive society",
      term: "permissive",
    },
    {
      definition:
        "very harmful; deadly; very destructive; Ex. pernicious \n                        effect/anemia",
      term: "pernicious",
    },
    {
      definition:
        "conclusion of an oration; perorating; V. perorate: \n                        conclude a speech; speak at great length",
      term: "peroration",
    },
    {
      definition: "commit an offense; do (something wrong)",
      term: "perpetrate",
    },
    {
      definition: "everlasting",
      term: "perpetual",
    },
    {
      definition:
        "make perpetual; make something last for a long time; \n                        preserve from extinction; N. perpetuity",
      term: "perpetuate",
    },
    {
      definition:
        "any gain above stipulated salary; Ex. perquisites such \n                        as free meals and a car",
      term: "perquisiteperk)",
    },
    {
      definition: "continue steadily in spite of difficulties",
      term: "persevere",
    },
    {
      definition:
        "continue in existence; last; continue in a course of \n                        action in spite of opposition; Ex. persist in/with something; \n                        ADJ. persistent",
      term: "persist",
    },
    {
      definition: "attractive (in personality or appearance)",
      term: "personable",
    },
    {
      definition:
        "represent (an inanimate object) as a person; be the \n                        embodiment or perfect example of; Ex. She is evil/patience \n                        personified; N. personification",
      term: "personify",
    },
    {
      definition: "(of someone) having insight; penetrating; astute",
      term: "perspicacious",
    },
    {
      definition: "clearness of expression; freedom from ambiguity",
      term: "perspicuity",
    },
    {
      definition:
        "(of something) plainly expressed; easy to understand; \n                        Ex. perspicuous comments",
      term: "perspicuous",
    },
    {
      definition:
        "(esp. of a girl or young woman) impertinent; forward; \n                        trim; jaunty; Ex. pert young miss/hat",
      term: "pert",
    },
    {
      definition: "holding tenaciously to an action; stubborn; persistent",
      term: "pertinacious",
    },
    {
      definition: "suitable; to the point; relevant",
      term: "pertinent",
    },
    {
      definition: "disturb greatly",
      term: "perturb",
    },
    {
      definition: "read through with care; N. perusal",
      term: "peruse",
    },
    {
      definition:
        "spread throughout; V. pervade: (of smells, ideas, feelings) \n                        spread throughout; charge; permeate",
      term: "pervasive",
    },
    {
      definition:
        "purposely continuing to do something wrong; stubbornly \n                        wrongheaded; perverted; directed away from what is right; \n                        wicked and unacceptable; Ex. perverse satisfaction; Ex. \n                        Hannibal Lecter in a perverse mood; N. perversity",
      term: "perverse",
    },
    {
      definition: "corruption; turning from right to wrong",
      term: "perversion",
    },
    {
      definition:
        "corrupt; turn from right to wrong; misuse; Ex. perverted \n                        sexual desire/scientific knowledge; N: person whose sexual \n                        behavior is not natural",
      term: "pervert",
    },
    {
      definition:
        "belief that life is basically bad or evil; gloominess; \n                        tendency to take the gloomiest possible view of a situation; \n                        ADJ. pessimistic",
      term: "pessimism",
    },
    {
      definition:
        "causing plague; tending to cause death; baneful; N. \n                        pestilence: fatal epidemic disease (esp. bubonic plague)",
      term: "pestilentialpestilent)",
    },
    {
      definition:
        "tool for mashing or grinding substances in a hard bowl \n                        or mortar",
      term: "pestle",
    },
    {
      definition: "turn to stone; cause to become stonelike; stun or paralyze",
      term: "petrify",
    },
    {
      definition:
        "trivial; unimportant; very small; small-minded; petty-minded",
      term: "petty",
    },
    {
      definition: "touchy; peevish; ill-tempered",
      term: "petulant",
    },
    {
      definition:
        "formation of infantry carrying overlapping shields \n                        and long spears; group of men packed together (for attack \n                        or defense)",
      term: "phalanx",
    },
    {
      definition:
        "pertaining to the Pharisees, who paid scrupulous attention \n                        to tradition; self-righteous; hypocritical",
      term: "pharisaical",
    },
    {
      definition:
        "Pharisee: member of an ancient Jewish group that emphasized \n                        strict observance of the Mosaic law (considering themselves \n                        very holy); hypocritical self-righteous person",
      term: "pharisee",
    },
    {
      definition:
        "observable facts; subjects of scientific investigation; \n                        SG. phenomenon: observable fact; very unusual person, \n                        thing, or event; marvel; wonder; CF. phenomenons; ADJ. \n                        phenomenal: very unusual; extraordinary; of a phenomenon; \n                        Ex. phenomenal strength",
      term: "phenomena",
    },
    {
      definition: "faithless lover; flirt",
      term: "philanderer",
    },
    {
      definition: "lover of mankind; doer of good; N. philanthropy",
      term: "philanthropist",
    },
    {
      definition: "stamp-collector; N. philately: stamp collecting",
      term: "philatelist",
    },
    {
      definition:
        "narrow-minded person, uncultured and exclusively interested \n                        in material gain; uncultured person who is indifferent \n                        to artistic and cultural values; member of an ancient \n                        people in Palestine; OP. aesthete",
      term: "philistine",
    },
    {
      definition: "study of language or words",
      term: "philology",
    },
    {
      definition:
        "calm and unexcitable; not easily disturbed; CF. phlegm: \n                        sticky mucus produced in the respiratory tract",
      term: "phlegmatic",
    },
    {
      definition: "morbid fear",
      term: "phobia",
    },
    {
      definition:
        "symbol of immortality or rebirth; Ex. phoenix rising \n                        from its ashes",
      term: "phoenix",
    },
    {
      definition:
        "major classification, second to kingdom, of plants \n                        and animals; category ranking below a kingdom and above \n                        a class; division",
      term: "phylum",
    },
    {
      definition:
        "face (as showing the character and the mind); art of \n                        judging human character from facial features",
      term: "physiognomy",
    },
    {
      definition:
        "pertaining to the science of the function of living \n                        organisms; N. physiology",
      term: "physiological",
    },
    {
      definition:
        "of different colors; mottled; spotted in different \n                        colors (esp. in black and white); Ex. piebald horse; CF. \n                        pie+bald",
      term: "piebald",
    },
    {
      definition:
        "one part at a time; gradually; in stages; Ex. read \n                        a novel piecemeal",
      term: "piecemeal",
    },
    {
      definition: "piebald; variegated(many-colored); multicolored",
      term: "pied",
    },
    {
      definition: "devoutness; reverence for God; ADJ. pious",
      term: "piety",
    },
    {
      definition:
        "coloring matter (usually powder to be mixed with water \n                        or oil)",
      term: "pigment",
    },
    {
      definition: "steal things of small value; filch; snitch",
      term: "pilfer",
    },
    {
      definition: "plunder",
      term: "pillage",
    },
    {
      definition:
        "punish by placing in a wooden frame or pillory; subject \n                        or expose to criticism and ridicule; N.",
      term: "pillory",
    },
    {
      definition:
        "squeeze between the thumb and a finger, or other edges; \n                        Ex. I had to pinch myself to make sure I wasn't dreaming. \n                        N: amount that can be held between the thumb and a finger",
      term: "pinch",
    },
    {
      definition: "long for; yearn; languish from longing or grief; decline",
      term: "pine",
    },
    {
      definition:
        "restrain or immobilize by binding the wings or legs; \n                        N: bird's wing",
      term: "pinion",
    },
    {
      definition: "small boat",
      term: "pinnace",
    },
    {
      definition: "peak; highest point; acme; Ex. pinnacle of fame",
      term: "pinnacle",
    },
    {
      definition: "devout; religious; N. piety",
      term: "pious",
    },
    {
      definition:
        "pleasantly tart-tasting; spicy; pleasantly stimulating; \n                        Ex. piquant situation when my old enemy asked for my help",
      term: "piquant",
    },
    {
      definition:
        "irritation; resentment from wounded pride (eg. loss \n                        in a contest); V: provoke; arouse; annoy; cause to feel \n                        resentment; Ex. pique her curiosity",
      term: "pique",
    },
    {
      definition: "pertaining to fishing; CF. Pisces",
      term: "piscatorial",
    },
    {
      definition: "hidden danger; concealed trap",
      term: "pitfall",
    },
    {
      definition:
        "core or marrow; spongelike substance in the center \n                        of stems; essence; substance",
      term: "pith",
    },
    {
      definition: "concise and meaningful; substantial; meaty",
      term: "pithy",
    },
    {
      definition: "small amount (of money); small allowance or wage",
      term: "pittance",
    },
    {
      definition: "of a pivot; central; critical; crucial",
      term: "pivotal",
    },
    {
      definition: "pacify; bring peace to; conciliate; appease",
      term: "placate",
    },
    {
      definition: "harmless substance prescribed as a dummy pill",
      term: "placebo",
    },
    {
      definition: "peaceful; calm; Ex. placid child/lake",
      term: "placid",
    },
    {
      definition:
        "steal another's ideas or writings and pass them off \n                        as one's own; Ex. ideas plagiarized from my article; N. \n                        plagiarism; CF. kidnap",
      term: "plagiarize",
    },
    {
      definition: "expressing sorrow; mournful; Ex. plaintive song",
      term: "plaintive",
    },
    {
      definition:
        "braid; interwine; interweave strands or lengths of; \n                        make by weaving strands together; Ex. plaited hair; N: \n                        braided length as of hair o fabric; CF. pigtail, ponytail",
      term: "plait",
    },
    {
      definition:
        "carpenter's tool for smoothing and leveling wood; V. \n                        CF. flat",
      term: "plane",
    },
    {
      definition:
        "paste that hardens to a smooth solid and is used for \n                        coating walls; V.",
      term: "plaster",
    },
    {
      definition:
        "ability to be molded; ADJ. plastic: capable of being \n                        shaped or molded; Ex. plastic material such as clay",
      term: "plasticity",
    },
    {
      definition: "trite remark; commonplace statement; ADJ. platitudinous",
      term: "platitude",
    },
    {
      definition: "purely spiritual; theoretical; without sensual desire",
      term: "platonic",
    },
    {
      definition:
        "praise; enthusiastic approval; round(succession or \n                        series) of applause; ADJ. plauditory; CF. applaud",
      term: "plaudit",
    },
    {
      definition:
        "conceivably true; having a show of truth but open to \n                        doubt; specious",
      term: "plausible",
    },
    {
      definition:
        "common; vulgar; pertaining to the common people; N: \n                        common people in ancient Rome; CF. patrician",
      term: "plebeian",
    },
    {
      definition:
        "direct vote by the entire electorate (on an important \n                        issue)",
      term: "plebiscite",
    },
    {
      definition:
        "(of power) complete; full; fully attended by all qualified \n                        members; Ex. plenary power",
      term: "plenary",
    },
    {
      definition:
        "abundance; plenty; great amount; completeness; fullness; \n                        CF. plenary, plenty",
      term: "plenitude",
    },
    {
      definition: "excess; overabundance; Ex. a plethora of excuses",
      term: "plethora",
    },
    {
      definition: "flexible; easily influenced; yielding; adaptable",
      term: "pliable",
    },
    {
      definition: "flexible; easily influenced",
      term: "pliant",
    },
    {
      definition:
        "difficult condition; condition or state (esp. a bad \n                        state or condition); predicament",
      term: "plight",
    },
    {
      definition:
        "strategem to gain an advantage; tactic; Ex. management \n                        ploy",
      term: "ploy",
    },
    {
      definition:
        "courage; V: pull off or out; pull out the hair or feathers \n                        of; ADJ. plucky: courageous; brave",
      term: "pluck",
    },
    {
      definition: "feathers of a bird;",
      term: "plumage",
    },
    {
      definition:
        "exactly vertical; N: weight on the end of a line; V: \n                        examine very carefully or critically in order to understand; \n                        measure depth (by sounding); Ex. plumb the depth of",
      term: "plumb",
    },
    {
      definition: "one who installs and repairs pipes and plumbing(pipes)",
      term: "plumber",
    },
    {
      definition:
        "feather, esp. large or showy one; something that rises \n                        into the air (like the shape of a feather); Ex. plume \n                        of smoke: 滚几 备抚",
      term: "plume",
    },
    {
      definition:
        "fall sharply; fall straight down; Ex. Stock prices \n                        plummeted.",
      term: "plummet",
    },
    {
      definition: "pleasantly fat; nicely rounded",
      term: "plump",
    },
    {
      definition: "society ruled by the wealthy",
      term: "plutocracy",
    },
    {
      definition:
        "doctor who treats ailments of the feet; chiropodist; \n                        N. podiatrics",
      term: "podiatrist",
    },
    {
      definition: "pedestal; raised platform",
      term: "podium",
    },
    {
      definition:
        "quality of being deeply moving; keenness of emotion; \n                        ADJ. poignant: touching; deeply moving; (of sorrow, grief, \n                        etc.) painful; keenly distressing to the mind; Ex. poignant \n                        memory/anxiety; CF. prick",
      term: "poignancy",
    },
    {
      definition:
        "good judgment with composure; balance; V: place in \n                        a carefully balanced position",
      term: "poise",
    },
    {
      definition:
        "of a pole; characterized by opposite extremes; Ex. \n                        polar opposites",
      term: "polar",
    },
    {
      definition: "state of having two opposite qualities",
      term: "polarity",
    },
    {
      definition: "split into opposite extremes or camps",
      term: "polarize",
    },
    {
      definition:
        "aggressive in verbal attack; disputatious (rather than simply expressing opinions)",
      term: "polemic",
    },
    {
      definition:
        "aggressive in verbal attack; disputatious (rather than \n                        simply expressing opinions)",
      term: "polemicalpolemic)",
    },
    {
      definition: "prudent; judicious; well judged; expedient; well devised",
      term: "politic",
    },
    {
      definition:
        "(particular form of) political organization; form of \n                        government of nation or state; Ex. student polity",
      term: "polity",
    },
    {
      definition:
        "one who has more than one spouse at a time; CF. bigamy; \n                        CF. polyandry",
      term: "polygamist",
    },
    {
      definition:
        "speaking several languages; multilingual; Ex. polyglot \n                        person/society; N.",
      term: "polyglot",
    },
    {
      definition:
        "self-important behavior; acting like a stuffed shirt(pompous \n                        person); ADJ. pompous: self-important",
      term: "pomposity",
    },
    {
      definition:
        "having great weight; weighty; unwieldy; lacking lightness; \n                        dull; Ex. ponderous body/style of writing",
      term: "ponderous",
    },
    {
      definition:
        "pertaining to a bishop or pope; pompous or pretentious; \n                        CF. pontiff: pope; bishop",
      term: "pontifical",
    },
    {
      definition:
        "study industriously; ponder; scrutinize; Ex. pore over \n                        the book; N.",
      term: "pore",
    },
    {
      definition: "full of pores; like a sieve",
      term: "porous",
    },
    {
      definition: "soft food made by boiling oatmeal",
      term: "porridge",
    },
    {
      definition:
        "foretell; presage; be a sign or warning of; N. portent: \n                        sign; omen; forewarning",
      term: "portend",
    },
    {
      definition: "stout; corpulent",
      term: "portly",
    },
    {
      definition:
        "assume a particular posture; put forward; present; \n                        affect a particular attitude (to impress others); Ex. \n                        pose a threat; N.",
      term: "pose",
    },
    {
      definition:
        "person who pretends to be sophisticated, elegant, etc., \n                        to impress others; person who poses; CF. pose",
      term: "poseur",
    },
    {
      definition:
        "descendants; future generations; Ex. go down to posterity; \n                        CF. posterior, anterior",
      term: "posterity",
    },
    {
      definition:
        "after death (as of child born after father's death \n                        or book published after author's death); coming or occurring \n                        after one's death; Ex. posthumous fame/novel",
      term: "posthumous",
    },
    {
      definition: "autopsy; ADJ: occurring after death; of a postmortem",
      term: "postmortem",
    },
    {
      definition:
        "self-evident truth; something assumed without proof; \n                        V: assume the truth of (as a basis of an argument)",
      term: "postulate",
    },
    {
      definition:
        "assume an affected pose; act artificially; N: pose; \n                        attitude",
      term: "posture",
    },
    {
      definition: "suitable for drinking; drinkable",
      term: "potable",
    },
    {
      definition: "powerful; convincing; persuasive; greatly influential",
      term: "potent",
    },
    {
      definition: "monarch; sovereign",
      term: "potentate",
    },
    {
      definition: "expressing possibility; latent; N: capacity for growth",
      term: "potential",
    },
    {
      definition: "dose (of liquids); liquid dose",
      term: "potion",
    },
    {
      definition:
        "heterogeneous mixture; medley; mixture of dried flower \n                        petals a pot (to give a pleasant smell to a room)",
      term: "potpourri",
    },
    {
      definition:
        "soothing application applied to sore and inflamed portions \n                        of the body",
      term: "poultice",
    },
    {
      definition:
        "abstract; concise summing up of main points; concise \n                        summary of a text",
      term: "precis ",
    },
    {
      definition: "feasible",
      term: "practicable",
    },
    {
      definition:
        "based on experience; of or acquired through practice \n                        (rather than theory); useful; Ex. practical man",
      term: "practical",
    },
    {
      definition:
        "practical (as opposed to idealistic); concerned with \n                        practical worth or impact of something; Ex. pragmatic \n                        test of the skill",
      term: "pragmatic",
    },
    {
      definition:
        "practical person; N. pragmatism: pragmatic way of dealing \n                        with things",
      term: "pragmatist",
    },
    {
      definition: "move about in a spirited manner (proudly and confidently)",
      term: "prance",
    },
    {
      definition: "mischievous trick",
      term: "prank",
    },
    {
      definition: "talk idly; speak foolishly; boast idly",
      term: "prate",
    },
    {
      definition: "talk idly; babble; N. CF. prate",
      term: "prattle",
    },
    {
      definition: "introductory statement",
      term: "preamble",
    },
    {
      definition:
        "unsafe; lacking in stability; uncertain; risky; Ex. \n                        precarious living",
      term: "precarious",
    },
    {
      definition: "preceding (in time, rank, etc.)",
      term: "precedent",
    },
    {
      definition: "practical rule guiding conduct; Ex. mother's precept",
      term: "precept",
    },
    {
      definition:
        "division of a city for election or police purposes; \n                        precincts: space that surrounds a building; Ex. precincts \n                        of the college",
      term: "precinct",
    },
    {
      definition: "cliff; dangerous position; Ex. on the edge of the precipice",
      term: "precipice",
    },
    {
      definition:
        "something that causes a substance in a chemical solution \n                        to separate out in solid form; OP. solvent",
      term: "precipitant",
    },
    {
      definition:
        "hurl downward; throw headlong; hasten; cause to happen \n                        sooner; condense and fall as rain or snow; cause (a solid \n                        substance) to be separated from a solution; ADJ. hasty; \n                        rash; premature; sudden",
      term: "precipitate",
    },
    {
      definition: "steep; overhasty; precipitate",
      term: "precipitous",
    },
    {
      definition: "exact",
      term: "precise",
    },
    {
      definition: "make impossible; prevent; exclude; eliminate",
      term: "preclude",
    },
    {
      definition: "advanced in development; N. precocity",
      term: "precocious",
    },
    {
      definition: "forerunner; predecessor",
      term: "precursor",
    },
    {
      definition:
        "predatory animal or bird; predatory person; creature \n                        that seizes and devours another animal; person who robs \n                        or exploits others; ADJ. predatory: living by preying \n                        on other organisms; plundering; N. predation",
      term: "predator",
    },
    {
      definition: "former occupant of a post",
      term: "predecessor",
    },
    {
      definition:
        "determine in advance; predestine; settle or decide \n                        beforehand; influence markedly",
      term: "predetermine",
    },
    {
      definition:
        "difficult situation; tricky or dangerous situation; \n                        dilemma",
      term: "predicament",
    },
    {
      definition: "preference; partiality",
      term: "predilection",
    },
    {
      definition:
        "give an inclination toward (in advance); make susceptible \n                        to; Ex. predispose people to certain cancer; N. predisposition",
      term: "predispose",
    },
    {
      definition: "outstanding; superior",
      term: "preeminent",
    },
    {
      definition:
        "prevent in advance; head off(forestall); forestall \n                        by acting first; appropriate for oneself before others; \n                        supplant; take the place of; displace; Ex. preempt any \n                        attempts; ADJ. preemptive",
      term: "preempt",
    },
    {
      definition:
        "make oneself tidy in appearance; feel self-satisfaction \n                        or pride; (of a bird) smooth or clean (feathers) with \n                        the beak; Ex. preen oneself on; CF. prune",
      term: "preen",
    },
    {
      definition: "introductory; of a preface",
      term: "prefatory",
    },
    {
      definition: "be a sign of; foreshadow",
      term: "prefigure",
    },
    {
      definition:
        "capable of grasping or holding (esp. by wrapping around); \n                        Ex. prehensile tails",
      term: "prehensile",
    },
    {
      definition:
        "church dignitary; priest of high position in the church \n                        (esp. bishop)",
      term: "prelate",
    },
    {
      definition: "introduction; introductory performance or event; forerunner",
      term: "prelude",
    },
    {
      definition: "plan in advance; Ex. premeditated murder",
      term: "premeditate",
    },
    {
      definition:
        "assumption; postulate; proposition upon which an argument \n                        is based",
      term: "premise",
    },
    {
      definition: "forewarning; presentiment; foreboding",
      term: "premonition",
    },
    {
      definition: "serving to warn",
      term: "premonitory",
    },
    {
      definition:
        "superiority of power, quantity, etc.; V. preponderate: \n                        be greater in power, weight, or importance; ADJ. preponderant",
      term: "preponderance",
    },
    {
      definition: "attractive; CF. preoccupying ?",
      term: "prepossessing",
    },
    {
      definition: "absurd; completely unreasonable; ridiculous",
      term: "preposterous",
    },
    {
      definition: "privilege; unquestionable right; CF. ask before",
      term: "prerogative",
    },
    {
      definition:
        "foretell; be a warning or sign of; N: presentiment; \n                        foreboding; omen",
      term: "presage",
    },
    {
      definition:
        "ability to foretell the future; knowledge of actions \n                        before they occur; ADJ. prescient",
      term: "prescience",
    },
    {
      definition:
        "premonition; foreboding; feeling something will happen; \n                        anticipatory fear",
      term: "presentiment",
    },
    {
      definition:
        "respect or admiration; impression produced by achievements \n                        or reputation; ADJ: causing admiration; ADJ. prestigious: \n                        having prestige",
      term: "prestige",
    },
    {
      definition:
        "take for granted; assume; act overconfidently; take \n                        liberties; presume on/upon: take unfair advantage of (someone's \n                        kindness or connection); N. presumption",
      term: "presume",
    },
    {
      definition:
        "going beyond what is right; excessively forward; arrogant; \n                        taking liberties",
      term: "presumptuous",
    },
    {
      definition:
        "feign; pretend to: claim to possess; make pretensions \n                        to; Ex. I don't pretend to much expertise; N. pretense",
      term: "pretend",
    },
    {
      definition:
        "pretentiousness; claim (without foundation); Ex. I \n                        make no pretensions to skill as an artist.",
      term: "pretension",
    },
    {
      definition:
        "ostentatious; showy; pompous; making unjustified claims; \n                        overambitious; Ex. pretentious films that claim to be \n                        art",
      term: "pretentious",
    },
    {
      definition:
        "beyond what is normal in nature; supernatural; Ex. \n                        preternatural strength/forces",
      term: "preternatural",
    },
    {
      definition: "excuse",
      term: "pretext",
    },
    {
      definition:
        "be widespread; triumph over; gain victory; prevail \n                        on: persuade; induce; Ex. Justice has prevailed; Ex. prevail \n                        on someone to do something",
      term: "prevail",
    },
    {
      definition: "widespread; generally accepted",
      term: "prevalent",
    },
    {
      definition: "lie; hide the truth (by equivocating)",
      term: "prevaricate",
    },
    {
      definition:
        "target of a hunt; victim; V: hunt and eat as prey; \n                        victimize; Ex. Cats prey on mice.",
      term: "prey",
    },
    {
      definition:
        "proper to the point of affectation; very precise and \n                        formal; exceedingly proper",
      term: "prim",
    },
    {
      definition:
        "first in rank or importance; being first in time; original; \n                        Ex. man's primal innocence",
      term: "primal",
    },
    {
      definition:
        "first in rank or importance; principal; earliest in \n                        time; Ex. primary stages; N. CF. first",
      term: "primary",
    },
    {
      definition: "group of mammals including humans",
      term: "primate",
    },
    {
      definition:
        "period of ideal or peak condition; earliest or beginning \n                        stage; Ex. in the prime of life; Ex. prime of the year(spring); \n                        ADJ: first in importance or rank; first; V: make ready; \n                        prepare",
      term: "prime",
    },
    {
      definition:
        "seniority by birth; state of being the first-born child; \n                        right of the eldest child (to inherit the entire property \n                        of one or both parents)",
      term: "primogeniture",
    },
    {
      definition: "existing at the beginning (of time); rudimentary",
      term: "primordial",
    },
    {
      definition: "groom oneself with care; adorn oneself",
      term: "primp",
    },
    {
      definition:
        "unspoiled; remaining in a pure state; characteristic \n                        of earlier times; primitive; Ex. an old book in pristine \n                        condition",
      term: "pristine",
    },
    {
      definition:
        "lack of the basic necessities or comforts of life; \n                        hardship; want; CF. deprive",
      term: "privation",
    },
    {
      definition:
        "secret; hidden; not public; made a participant in something \n                        secret; Ex. privy chamber government; Ex. be privy to \n                        a discussion; CF. private",
      term: "privy",
    },
    {
      definition:
        "pry; move with a lever; value highly; esteem; Ex. his \n                        most prized possession; N: something captured during war-time \n                        (esp. an enemy ship)",
      term: "prize",
    },
    {
      definition:
        "explore with a probe or tools; investigate; N: slender \n                        instrument used to explore a wound or body cavity; device \n                        designed to investigate an unknown region; thorough investigation; \n                        Ex. space probe",
      term: "probe",
    },
    {
      definition: "uprightness; honesty; incorruptibility",
      term: "probity",
    },
    {
      definition:
        "causing a problem; open to doubt; doubtful; unsettled; \n                        questionable; Ex. Whether the arena will ever be completed \n                        is problematic.",
      term: "problematic",
    },
    {
      definition:
        "inclination; natural tendency (esp. towards something \n                        bad)",
      term: "proclivity",
    },
    {
      definition: "postpone; delay or put off",
      term: "procrastinate",
    },
    {
      definition:
        "obtaining; V. procure: obtain by effort; obtain (a \n                        prostitute) for another",
      term: "procurement",
    },
    {
      definition:
        "poke (with a pointed object); stir up; urge; goad to \n                        action; N: pointed object used to prod; prodding",
      term: "prod",
    },
    {
      definition:
        "wasteful; reckless with money; profuse; Ex. a mind \n                        prodigal of ideas; N. prodigality",
      term: "prodigal",
    },
    {
      definition:
        "enormous; marvelous; extraordinary; Ex. prodigious \n                        amount/memory",
      term: "prodigious",
    },
    {
      definition:
        "highly gifted child; person with exceptional talents; \n                        marvel; wonder",
      term: "prodigy",
    },
    {
      definition:
        "violate; desecrate (something holy); treat unworthily; \n                        be profane for; ADJ: secular; nonreligious; irreverent \n                        for holy things",
      term: "profane",
    },
    {
      definition:
        "wasteful (of money); dissipated; wildly immoral; dissolute; \n                        N: profligate person; N. profligacy",
      term: "profligate",
    },
    {
      definition:
        "deep; not superficial; complete; Ex. profound thinker/remark/silence/deafness; \n                        N. profundity",
      term: "profound",
    },
    {
      definition:
        "great amount; plenty; overabundance; excess; lavish \n                        expenditure; Ex. profusion of choices; ADJ. profuse: plentiful; \n                        copious; giving or given abundantly; extravagant",
      term: "profusion",
    },
    {
      definition: "ancestor",
      term: "progenitor",
    },
    {
      definition: "children; offspring; descendants",
      term: "progeny",
    },
    {
      definition: "forecasted course of a disease; prediction; CF. prognostic",
      term: "prognosis",
    },
    {
      definition: "predict (according to present indications)",
      term: "prognosticate",
    },
    {
      definition:
        "so high as to prohibit purchase or use; tending to \n                        prevent the purchase or use of something; prohibiting; \n                        inclined to prevent or forbid; Ex. prohibitive tax",
      term: "prohibitive",
    },
    {
      definition: "missile; fired or thrown object (such as stone or bullet)",
      term: "projectile",
    },
    {
      definition:
        "member of the working class; blue collar guy; N. proletariat: \n                        working class (who have to work for wages)",
      term: "proletarian",
    },
    {
      definition:
        "grow rapidly (in numbers); spread; multiply; N. proliferation",
      term: "proliferate",
    },
    {
      definition:
        "producing offspring or fruit in abundance; fertile; \n                        fecund; abundantly fruitful; producing abundant works; \n                        Ex. prolific writer",
      term: "prolific",
    },
    {
      definition:
        "tedious wordiness; verbosity; ADJ. prolix: wordy; verbose; \n                        diffuse",
      term: "prolixity",
    },
    {
      definition: "introduction (to a poem or play)",
      term: "prologue",
    },
    {
      definition: "lengthen; extend; draw out",
      term: "prolong",
    },
    {
      definition: "protruding(sticking out); conspicuous; notable; eminent",
      term: "prominent",
    },
    {
      definition:
        "mixed indiscriminately; indiscriminate; not choosing \n                        carefully; indiscriminate in the choice of sexual partners; \n                        irregular, particularly sexually; Ex. promiscuous life/girl; \n                        N. promiscuity",
      term: "promiscuous",
    },
    {
      definition: "headland",
      term: "promontory",
    },
    {
      definition:
        "advance in rank; advance; help to flourish; advocate; \n                        help actively in forming; publicize or popularize; Ex. \n                        Milk promotes health; Ex. promote a match/bill; Ex. promote \n                        a new product",
      term: "promote",
    },
    {
      definition:
        "cause; urge; provoke; provide a cue (for an actor); \n                        ADJ: done without delay; done at the right time; punctual; \n                        on time; N: reminder or cue",
      term: "prompt",
    },
    {
      definition:
        "announce; proclaim a doctrine or law; make known by \n                        official publication",
      term: "promulgate",
    },
    {
      definition:
        "inclined to; likely to (suffer); prostrate; lying with \n                        the front downward; Ex. prone to disease/make mistakes; \n                        Ex. accident-prone",
      term: "prone",
    },
    {
      definition: "pointed projecting part",
      term: "prong",
    },
    {
      definition: "distinct; very noticeable; Ex. pronounced limp",
      term: "pronounced",
    },
    {
      definition: "support placed under or against something; V.",
      term: "prop",
    },
    {
      definition:
        "increase in number by producing young; multiply; spread; \n                        Ex. Most plants propagate by seed; Ex. newspaper propagating \n                        their ideas",
      term: "propagate",
    },
    {
      definition:
        "substance which propels or drives forward (such as \n                        an explosive charge or a rocket fuel)",
      term: "propellantpropellent)",
    },
    {
      definition: "natural inclination",
      term: "propensity",
    },
    {
      definition:
        "of a prophet or prophecy; having to do with predicting \n                        the future; N. prophecy; V. prophesy; N. prophet",
      term: "prophetic",
    },
    {
      definition:
        "used to prevent disease; N: something prophylactic; \n                        condom; N. prophylaxis: prevention of disease",
      term: "prophylactic",
    },
    {
      definition: "nearness (in space or relationship); proximity; kinship",
      term: "propinquity",
    },
    {
      definition: "appease; conciliate; make peaceful; ADJ. propitiatory",
      term: "propitiate",
    },
    {
      definition:
        "favorable; auspicious; advantageous; fortunate; Ex. \n                        propitious day/sign",
      term: "propitious",
    },
    {
      definition: "supporter; backer; opposite of opponent",
      term: "proponent",
    },
    {
      definition:
        "put forth for consideration or analysis; set forth; \n                        Ex. propound a problem/theory",
      term: "propound",
    },
    {
      definition:
        "fitness; quality of being proper; correct conduct; \n                        conformity to prevailing customs and usages; CF. proprietor, \n                        proprietary",
      term: "propriety",
    },
    {
      definition: "driving forward; N. propulsion",
      term: "propulsive",
    },
    {
      definition:
        "lacking in imagination; dull and unimaginative; matter-of-fact(concerned \n                        with facts, not imagination or feelings); factual; CF. \n                        prose",
      term: "prosaic",
    },
    {
      definition:
        "part of stage in front of curtain; front arch of a \n                        stage",
      term: "proscenium",
    },
    {
      definition: "prohibit; ostracize; banish; outlaw",
      term: "proscribe",
    },
    {
      definition:
        "(induce someone to) convert to a religion or belief; \n                        N. proselyte: new convert to a doctrine or religion",
      term: "proselytize",
    },
    {
      definition:
        "art of versification; study of the metrical structure \n                        of verse",
      term: "prosody",
    },
    {
      definition:
        "become successful (esp. financially); thrive; grow \n                        well; Ex. children prospering under his care",
      term: "prosper",
    },
    {
      definition: "good fortune and financial success; physical well-being",
      term: "prosperity",
    },
    {
      definition: "successful; rich; affluent; well-to-do; well-off",
      term: "prosperous",
    },
    {
      definition:
        "stretch out full on ground; make prostrate; enervate; \n                        Ex. prostrating illness; ADJ: lying face down; having \n                        lost all strength",
      term: "prostrate",
    },
    {
      definition: "person receiving protection and support from a patron",
      term: "proteg\\'e ",
    },
    {
      definition:
        "leader or noticeable supporter of an idea; chief character \n                        in a play or story",
      term: "protagonist",
    },
    {
      definition:
        "able to take on many forms; versatile; CF. Proteus: \n                        sea god to change his shape at will",
      term: "protean",
    },
    {
      definition:
        "diplomatic etiquette; ceremony and etiquette observed \n                        by diplomats; first copy of a treaty before its ratification; \n                        Ex. Protocol demands that the queen meet him at the airport.",
      term: "protocol",
    },
    {
      definition: "original work used as a model by others",
      term: "prototype",
    },
    {
      definition: "prolong; lengthen in time; draw out",
      term: "protract",
    },
    {
      definition: "stick out; jut; project; Ex. protruding teeth",
      term: "protrude",
    },
    {
      definition: "protrusion; swelling; bulge",
      term: "protuberance",
    },
    {
      definition:
        "place of origin; origin or source of something; Ex. \n                        Gunpowder is of Chinese provenance; CF. come",
      term: "provenance",
    },
    {
      definition: "dry food for livestock; fodder",
      term: "provender",
    },
    {
      definition:
        "adage; someone or something well known for notoriety; \n                        ADJ. proverbial: of a proverb; widely known; ADV. proverbially",
      term: "proverb",
    },
    {
      definition:
        "quality of being provident; divine care; god's care; \n                        Providence: god; Ex. It seemed like providence that the \n                        doctor happened to be there; ADJ. providential: of divine \n                        providence; fortunate",
      term: "providence",
    },
    {
      definition:
        "providing for future needs; displaying foresight; thrifty; \n                        preparing for emergencies; OP. improvident",
      term: "provident",
    },
    {
      definition:
        "pertaining to a province; limited in outlook; narrow; \n                        unsophisticated",
      term: "provincial",
    },
    {
      definition:
        "act of providing; something provided; preparatory measure; \n                        provisions: necessary supplies (esp. food); stipulation; \n                        condition in an agreement; Ex. According to the provisions \n                        of the agreement",
      term: "provision",
    },
    {
      definition: "tentative; temporary",
      term: "provisional",
    },
    {
      definition: "stipulation; condition in an agreement; provision",
      term: "proviso",
    },
    {
      definition:
        "arousing anger or sexual interest; annoying; Ex. provocative \n                        in tight jeans; V. provoke: incite to anger; cause (an \n                        unpleasant action or feeling); N. provocation",
      term: "provocative",
    },
    {
      definition:
        "extraordinary ability; military bravery; Ex. prowess \n                        in battle",
      term: "prowess",
    },
    {
      definition: "nearness; ADJ. proximate",
      term: "proximity",
    },
    {
      definition: "authorized agent; authority to act for another",
      term: "proxy",
    },
    {
      definition:
        "excessively modest or proper person (who is easily \n                        shocked by improper things, esp. of a sexual nature); \n                        N. prudery; ADJ. prudish: excessively concerned with propriety",
      term: "prude",
    },
    {
      definition: "cautious; careful; prudential",
      term: "prudent",
    },
    {
      definition: "cut away; trim",
      term: "prune",
    },
    {
      definition:
        "having or causing lustful desires and thoughts; arousing \n                        immoderate sexual desire",
      term: "prurient",
    },
    {
      definition:
        "inquire impertinently (someone else's private affairs); \n                        use leverage to raise or open something; prize; N. pries: \n                        tool for prying",
      term: "pry",
    },
    {
      definition:
        "pen name; fictitious name assumed by an author; ADJ. \n                        pseudonymous",
      term: "pseudonym",
    },
    {
      definition: "soul; mind",
      term: "psyche",
    },
    {
      definition: "doctor who treats mental diseases",
      term: "psychiatrist",
    },
    {
      definition:
        "of psyche; mental; of or possessing extraordinary mental \n                        powers",
      term: "psychic",
    },
    {
      definition:
        "pertaining to mental dearrangement; N. psychopath: \n                        person with an antisocial personality disorder",
      term: "psychopathic",
    },
    {
      definition: "mental disorder; ADJ. N. psychotic",
      term: "psychosis",
    },
    {
      definition:
        "of the influence of the mind on the body (esp. with \n                        respect to disease)",
      term: "psychosomatic",
    },
    {
      definition: "extinct flying reptile; CF. wing+finger",
      term: "pterodactyl",
    },
    {
      definition: "gather into wrinkles or folds; N: wrinkle or fold",
      term: "pucker",
    },
    {
      definition: "hot sweet dish",
      term: "pudding",
    },
    {
      definition: "childish; immature; CF. puer: boy",
      term: "puerile",
    },
    {
      definition: "boxer; CF. pugilism: boxing",
      term: "pugilist",
    },
    {
      definition:
        "combativeness; disposition to fight; ADJ. pugnacious: \n                        (of people) belligerent; combative in nature",
      term: "pugnacity",
    },
    {
      definition: "powerful; strong; potent; N. puissance: power",
      term: "puissant",
    },
    {
      definition: "beauty; comeliness; ADJ. pulchritudinous",
      term: "pulchritude",
    },
    {
      definition: "pertaining to the lungs",
      term: "pulmonary",
    },
    {
      definition: "raised platform used in preaching (in a church)",
      term: "pulpit",
    },
    {
      definition: "throb; beat regularly; vibrate regularly",
      term: "pulsate",
    },
    {
      definition:
        "rhythmical throbbing of arteries; brief sudden change \n                        in a normally constant quantity; V: pulsate",
      term: "pulse",
    },
    {
      definition: "crush or grind into very small particles",
      term: "pulverize",
    },
    {
      definition: "pommel; beat or pound with fists",
      term: "pummel",
    },
    {
      definition:
        "minutely attentive (perhaps too much so) to fine points; \n                        stressing niceties of conduct or form; N. punctilio, punctiliousness: \n                        careful attention payed to every small exact detail",
      term: "punctilious",
    },
    {
      definition: "authority on a subject; expert; learned person",
      term: "pundit",
    },
    {
      definition:
        "stinging; acrid; sharp in taste or smell; (of speech \n                        or writing) caustic; N. pungency",
      term: "pungent",
    },
    {
      definition: "punishing; Ex. punitive measures",
      term: "punitive",
    },
    {
      definition: "tiny; weak; insignificant",
      term: "puny",
    },
    {
      definition: "secure grasp or hold; firm grasp or footing",
      term: "purchase",
    },
    {
      definition:
        "place of spiritual expiation; temporary state or place \n                        in which the souls must expiate their sins",
      term: "purgatory",
    },
    {
      definition:
        "remove or get rid of something or someone unwanted; \n                        eliminate; free from blame or guilt; cleanse or purify \n                        (esp. of sin, guilt, or defilement); N.",
      term: "purge",
    },
    {
      definition:
        "intention; purpose; meaning; V: claim; profess; Ex. \n                        order which purports to be signed by the general",
      term: "purport",
    },
    {
      definition:
        "alleged; claimed; reputed or rumored; Ex. purported \n                        Satanists",
      term: "purported",
    },
    {
      definition: "pucker; contract (lips) into wrinkles; N: wallet",
      term: "purse",
    },
    {
      definition:
        "furnisher of foodstuffs; caterer; V. purvey: supply \n                        (eg. food); furnish; CF. provide",
      term: "purveyor",
    },
    {
      definition: "disagreeably aggressive",
      term: "pushy",
    },
    {
      definition: "cowardly; lacking courage; fainthearted",
      term: "pusillanimous",
    },
    {
      definition:
        "supposed; reputed; generally regarded as such; Ex. \n                        putative father of the child",
      term: "putative",
    },
    {
      definition: "make or become putrid; N. putrefaction",
      term: "putrefy",
    },
    {
      definition: "becoming putrid; putrefying",
      term: "putrescent",
    },
    {
      definition:
        "decayed and foul-smelling; foul; rotten; decayed; N. \n                        putridity",
      term: "putrid",
    },
    {
      definition:
        "baffle or confuse by a difficult problem; ponder over \n                        a problem in an effort to solve; clarify or solve by reasoning; \n                        Ex. puzzle out the answer; N.",
      term: "puzzle",
    },
    {
      definition: "person with an insane desire to set things on fire",
      term: "pyromaniac",
    },
    {
      definition:
        "lowest point; point on the celestial sphere diametrically \n                        opposite the zenith",
      term: "nadir",
    },
    {
      definition:
        'quality of being unsophisticated; simplicity; artlessness; \n                        gullibility; ADJ. naive(na\\"ive): ingenuous; lacking worldliness; \n                        simple; credulous',
      term: "naivete(naivety)",
    },
    {
      definition: "conceited person; N. narcissism; CF. narcissus",
      term: "narcissist",
    },
    {
      definition:
        "related to telling a story; N: narrated account; story; \n                        V. narrate: tell (a story); CF. narration",
      term: "narrative",
    },
    {
      definition:
        "incipient; coming into being or existence; Ex. nascent \n                        ability in music",
      term: "nascent",
    },
    {
      definition: "connected with birth; CF. prenatal; CF. postnatal",
      term: "natal",
    },
    {
      definition: "swimming",
      term: "natation",
    },
    {
      definition:
        "neatly or smartly dressed; dapper; smart; Ex. natty \n                        dresser",
      term: "natty",
    },
    {
      definition:
        "feeling of sickness and desire to vomit; disgust; CF. \n                        seasickness",
      term: "nausea",
    },
    {
      definition: "cause to become sick; fill with disgust; fill nausea",
      term: "nauseate",
    },
    {
      definition: "causing nausea; feeling nausea",
      term: "nauseous",
    },
    {
      definition: "pertaining to ships or navigation",
      term: "nautical",
    },
    {
      definition:
        "(of a body of water) wide and deep enough to allow \n                        ships to pass through; (of a ship or aircraft) able to \n                        be steered",
      term: "navigable",
    },
    {
      definition: "diffuse mass of interstellar dust or gas; galaxy",
      term: "nebula",
    },
    {
      definition: "vague; hazy; cloudy; of a nebula; Ex. nebulous proposal",
      term: "nebulous",
    },
    {
      definition:
        "black magic; sorcery; dealings with the dead; art that \n                        professes to communicate with the spirits of the dead \n                        so as to predict the future; CF. necromancer; CF. necro+divination; \n                        CF. necro-: death; Ex. necropolis",
      term: "necromancy",
    },
    {
      definition: "drink of the gods; sweet liquid collected by bees",
      term: "nectar",
    },
    {
      definition: "very wicked",
      term: "nefarious",
    },
    {
      definition:
        "cancel out; nullify; cause to have no effect; deny; \n                        N. negation",
      term: "negate",
    },
    {
      definition:
        "neglect; failure to take reasonable care; ADJ. negligent: \n                        neglectful; lax; not taking enough care",
      term: "negligence",
    },
    {
      definition:
        "so small, trifling, or unimportant as to be easily \n                        disregarded",
      term: "negligible",
    },
    {
      definition:
        "someone seeking revenge; source of downfall or ruin; \n                        CF. Nemesis",
      term: "nemesis",
    },
    {
      definition: "new or newly coined word or phrase",
      term: "neologism",
    },
    {
      definition:
        "recent convert; new member of a religious group; beginner; \n                        CF. plant",
      term: "neophyte",
    },
    {
      definition: "favoritism (to a relative); CF. nephew",
      term: "nepotism",
    },
    {
      definition: "lower; Ex. nether garments/regions",
      term: "nether",
    },
    {
      definition: "irritate; annoy; vex; ADJ. nettlesome",
      term: "nettle",
    },
    {
      definition: "connection",
      term: "nexus",
    },
    {
      definition: "beak(bill); pen point",
      term: "nib",
    },
    {
      definition:
        "precision; accuracy; minute distinction or difference; \n                        Ex. to a nicety: exactly; precisely; Ex. distinguish between \n                        niceties",
      term: "nicety",
    },
    {
      definition: "meanly stingy; parsimonious; N. niggard: stingy person",
      term: "niggardly",
    },
    {
      definition:
        "spend too much time on minor points (esp. when finding \n                        fault); find fault; Ex. niggle over details; ADJ. niggling",
      term: "niggle",
    },
    {
      definition:
        "one who considers traditional beliefs to be groundless \n                        and existence meaningless; absolute skeptic; revolutionary \n                        terrorist; CF. nihilism: belief that nothing has meaning \n                        or value; belief that destruction of existing political \n                        or social institutio",
      term: "nihilist",
    },
    {
      definition:
        "quick in movement; agile; quick in understanding; Ex. \n                        nimble climber/mind",
      term: "nimble",
    },
    {
      definition:
        "snip off; stop something's growth or development; bite; \n                        make numb with cold; Ex. nip the plan; Ex. A guard dog \n                        nipped the postman; Ex. fingers nipped by the extreme \n                        chill",
      term: "nip",
    },
    {
      definition:
        "in Buddhist teachings, the ideal state in which the \n                        individual loses himself in the attainment of an impersonal \n                        beatitude",
      term: "nirvana",
    },
    {
      definition:
        "done or active at night; Ex. nocturnal animals/raids; \n                        CF. nocturne",
      term: "nocturnal",
    },
    {
      definition: "foul smelling; very unpleasant; unwholesome",
      term: "noisome",
    },
    {
      definition:
        "wandering; N. nomad: tribe who migrates from place \n                        to place",
      term: "nomadic",
    },
    {
      definition:
        "terminology(system of specialized words); system of \n                        names or naming things",
      term: "nomenclature",
    },
    {
      definition:
        "in name only; of a name; trifling; (of a sum of money) \n                        very small; CF. nominate: propose as a candidate; appoint",
      term: "nominal",
    },
    {
      definition:
        "indifference; lack of concern; composure; ADJ. nonchalant: \n                        unconcerned; cool; indifferent; Ex. nonchalant attitude \n                        to his debts",
      term: "nonchalance",
    },
    {
      definition:
        "neutral; refusing commitment to a particular opinion; \n                        unpledged; undecided",
      term: "noncommittal",
    },
    {
      definition:
        "undistinctive; ordinary; ordinary-looking; Ex. nondescript \n                        fellow in a crowd",
      term: "nondescript",
    },
    {
      definition: "person of no importance; nonexistence",
      term: "nonentity",
    },
    {
      definition:
        "put at a loss; bring to a halt by confusion; perplex; \n                        CF. no more",
      term: "nonplus",
    },
    {
      definition:
        "speech or writing with no meaning; foolish behavior \n                        or language; Ex. make (a) nonsense of: spoil; cause to \n                        fail",
      term: "nonsense",
    },
    {
      definition: "loop formed in a rope",
      term: "noose",
    },
    {
      definition:
        "homesickness; longing for the past; Ex. nostalgia for \n                        the clothes of 1920s; ADJ. nostalgic",
      term: "nostalgia",
    },
    {
      definition: "questionable medicine; quack medicine; CF. our (remedy)",
      term: "nostrum",
    },
    {
      definition:
        "conspicuous; worthy of note; remarkable; important; \n                        distinguished; noted",
      term: "notable",
    },
    {
      definition: "V-shaped cut in a surface; V.",
      term: "notch",
    },
    {
      definition: "disrepute; ill fame",
      term: "notoriety",
    },
    {
      definition: "provide with food necessary for life and growth",
      term: "nourish",
    },
    {
      definition: "something that nourishes; food",
      term: "nourishment",
    },
    {
      definition:
        "star that suddenly becomes much brighter and then returns \n                        to its original brightness",
      term: "nova",
    },
    {
      definition: "something new; newness; ADJ. novel: new; original",
      term: "novelty",
    },
    {
      definition: "beginner",
      term: "novice",
    },
    {
      definition: "harmful; CF. obnoxious",
      term: "noxious",
    },
    {
      definition:
        "shade of slight difference in meaning or color; subtle \n                        distinction",
      term: "nuance",
    },
    {
      definition: "marriageable; of marriageable age; CF. connubial",
      term: "nubile",
    },
    {
      definition: "worthless; futile",
      term: "nugatory",
    },
    {
      definition: "make invalid; make null; invalidate",
      term: "nullify",
    },
    {
      definition:
        "person who collects coins; N. numismatics: study or \n                        collection of money, coins, and medals",
      term: "numismatist",
    },
    {
      definition:
        "related to marriage or the wedding ceremony; N. nuptials: \n                        wedding ceremony",
      term: "nuptial",
    },
    {
      definition:
        "suckle; take care of (as a nurse); bear in mind; Ex. \n                        nursing mother; Ex. nurse a hope/grudge against someone",
      term: "nurse",
    },
    {
      definition:
        "nourish; feed; educate; rear; care for while it is \n                        growing or developing; foster; cultivate; N: something \n                        that nourishes; rearing",
      term: "nurture",
    },
    {
      definition: "nourishing substance; ADJ: providing nourishment",
      term: "nutrient",
    },
    {
      definition: "process of nourishing or being nourished; CF. malnutrition",
      term: "nutrition",
    },
    {
      definition: "providing nourishment",
      term: "nutritious",
    },
    {
      definition:
        "comic; crazy; N: clown; comical person (given to outlandish \n                        behavior)",
      term: "zany",
    },
    {
      definition: "eager enthusiasm (to a cause or ideal); ADJ. zealous",
      term: "zeal",
    },
    {
      definition:
        "one who is zealous; fanatic; person who shows excessive \n                        zeal",
      term: "zealot",
    },
    {
      definition:
        "point directly overhead in the sky; summit; acme; highest \n                        point",
      term: "zenith",
    },
    {
      definition: "gentle breeze; west wind",
      term: "zephyr",
    },
    {
      definition:
        "outer skin of an orange used for giving a special taste \n                        to food; spice; interest; flavor; spirited enjoyment; \n                        Ex. add a certain zest to the affair; Ex. zest for life",
      term: "zest",
    },
    {
      definition: "strong desire; longing; urge; Ex. yen for travel",
      term: "yen",
    },
    {
      definition: "man or farmer owning small estate; middle-class farmer",
      term: "yeoman",
    },
    {
      definition:
        "amount produced; crop; income on investment; profit \n                        obtained from an investment; V: produce; give in; surrender",
      term: "yield",
    },
    {
      definition:
        "join together; unite; N: crossbar used to joining two \n                        draft animals",
      term: "yoke",
    },
    {
      definition: "rustic; country bumpkin;",
      term: "yokel",
    },
    {
      definition: "time long past; Ex. in the days of yore",
      term: "yore",
    },
    {
      definition: "fear or hatred of foreigners; N. xenophobe",
      term: "xenophobia",
    },
    {
      definition: "animal-biting fly; irritating person",
      term: "gadfly",
    },
    {
      definition: "social blunder",
      term: "gaffe",
    },
    {
      definition: "deny",
      term: "gainsay",
    },
    {
      definition: "manner of walking or running; speed",
      term: "gait",
    },
    {
      definition:
        "large isolated system of stars, such as the Milky Way; \n                        collection of brilliant personalities",
      term: "galaxy",
    },
    {
      definition:
        "windstorm; gust of wind; emotional outburst (laughters, \n                        tears); Ex. gale of laughter",
      term: "gale",
    },
    {
      definition:
        "annoy; exasperate; chafe; N: skin sore caused by rubbing \n                        (as on the skin of a horse); exasperation",
      term: "gall",
    },
    {
      definition: "large three-masted sailing ship",
      term: "galleon",
    },
    {
      definition: "low ship with sails (rowed along by slaves)",
      term: "galley",
    },
    {
      definition:
        "framework from which a noose is suspended (used for \n                        execution by hanging)",
      term: "gallows",
    },
    {
      definition:
        "of the production of electricity by the action of an \n                        acid on a metal; having the effect of an electric shock; \n                        Ex. galvanic cell; galvanic effect; CF. Luigi Galvani",
      term: "galvanic",
    },
    {
      definition:
        "stimulate or shock by an electric current; stimulate \n                        by shock; shock into action; stir up; coat with rust-resistant \n                        zinc by using electricity",
      term: "galvanize",
    },
    {
      definition:
        "opening in chess in which a piece is sacrificed; action \n                        made to produce a future advantage",
      term: "gambit",
    },
    {
      definition: "romp; skip about; leap about playfully; frolic; N.",
      term: "gambol",
    },
    {
      definition:
        "in a spirited manner; with courage; Ex. fight gamely \n                        against a superior boxer; ADJ. game",
      term: "gamely",
    },
    {
      definition: "entire range",
      term: "gamut",
    },
    {
      definition:
        "decay of body tissue caused by insufficient blood supply \n                        (usually following injury); ADJ. gangrenous",
      term: "gangrene",
    },
    {
      definition:
        "open widely; open the mouth wide; stare wonderingly \n                        with the mouth open; CF. agape",
      term: "gape",
    },
    {
      definition:
        "mixed up; jumbled; distorted; V. garble: mix up or \n                        distort (a message) to such an extent as to make misleading \n                        or unintelligible",
      term: "garbled",
    },
    {
      definition:
        "huge; enormous; gigantic; CF. the hero of Gargantua \n                        and Pantagruel",
      term: "gargantuan",
    },
    {
      definition: "waterspout carved in grotesque figures on a building",
      term: "gargoyle",
    },
    {
      definition: "overbright in color; unpleasantly bright; gaudy",
      term: "garish",
    },
    {
      definition: "gather; store up; amass",
      term: "garner",
    },
    {
      definition:
        "decorate; add a garnish to; decorate (food or drink) \n                        with small items such as lemon slices; N.",
      term: "garnish",
    },
    {
      definition: "loquacious; wordy; talkative; N. garrulity",
      term: "garrulous",
    },
    {
      definition:
        "art and science of preparing and serving good food; \n                        CF. gastronome",
      term: "gastronomy",
    },
    {
      definition: "clumsy (in social behavior); coarse and uncouth",
      term: "gauche",
    },
    {
      definition: "flashy; showy",
      term: "gaudy",
    },
    {
      definition: "lean and angular; thin and bony; emaciated; barren",
      term: "gaunt",
    },
    {
      definition:
        "hammerlike tool; mallet(wooden hammer) used by a presiding \n                        officer or an auctioneer; V.",
      term: "gavel",
    },
    {
      definition: "stare foolishly; look in open-mouthed awe",
      term: "gawk",
    },
    {
      definition: "official periodical publication; newspaper",
      term: "gazette",
    },
    {
      definition: "record of descent; lineage; ancestry; study of ancestry",
      term: "genealogy",
    },
    {
      definition:
        "vague statement; general statement which is not detailed; \n                        quality of being general; greater part; most; Ex. generality \n                        of people",
      term: "generality",
    },
    {
      definition: "cause; produce; create",
      term: "generate",
    },
    {
      definition:
        "characteristic of an entire class or species; of a \n                        genus",
      term: "generic",
    },
    {
      definition: "beginning; origin",
      term: "genesis",
    },
    {
      definition:
        "cheerfulness; kindliness; sympathy; ADJ. genial: cheerful \n                        and good-tempered",
      term: "geniality",
    },
    {
      definition: "particular variety of art or literature",
      term: "genre",
    },
    {
      definition:
        "well-bred; elegant; striving to convey an appearance \n                        of refinement; Ex. genteel poverty",
      term: "genteel",
    },
    {
      definition:
        "those of gentle birth; high social class; refinement; \n                        quality of being genteel",
      term: "gentility",
    },
    {
      definition: "kindly; soft; mild; of good family",
      term: "gentle",
    },
    {
      definition:
        "people of standing(rank or position); people of good \n                        family or high social position; class of people just below \n                        nobility",
      term: "gentry",
    },
    {
      definition: "bend the knee as in worship",
      term: "genuflect",
    },
    {
      definition:
        "division of animals or plants, below a family and above \n                        a species",
      term: "genus",
    },
    {
      definition: "medical treatment and care of old age",
      term: "geriatrics",
    },
    {
      definition:
        "earliest form of an organism; seed or bud; something \n                        that may develop into something larger or more important; \n                        microbe",
      term: "germ",
    },
    {
      definition:
        "pertinent; bearing upon(having connection with) the \n                        case at hand; appropriate",
      term: "germane",
    },
    {
      definition: "pertaining to a germ; creative; Ex. germinal idea",
      term: "germinal",
    },
    {
      definition: "cause to sprout; sprout",
      term: "germinate",
    },
    {
      definition: "government ruled by old people",
      term: "gerontocracy",
    },
    {
      definition:
        "study of the sociological phenomena associated with \n                        old age",
      term: "gerontology",
    },
    {
      definition:
        "change voting district lines in order to favor a political \n                        party; N. CF. Elbridge Gerry + (sala)mander",
      term: "gerrymander",
    },
    {
      definition:
        "evolve as in prenatal growth; N. gestation: period \n                        of development from conception until birth",
      term: "gestate",
    },
    {
      definition:
        "motion; gesture; V. gesticulate: make gestures (while \n                        speaking)",
      term: "gesticulation",
    },
    {
      definition: "horrible; terrifying; resembling ghosts; CF. aghast",
      term: "ghastly",
    },
    {
      definition:
        "nonsense; nonsensical or unintelligible talk or writing; \n                        babbling",
      term: "gibberish",
    },
    {
      definition: "mock; make jeering remarks; N: jeering remarks",
      term: "gibe",
    },
    {
      definition:
        "light-hearted; not serious; frivolous; dizzy; causing \n                        dizziness; Ex. giddy youth; Ex. giddy climb/height",
      term: "giddy",
    },
    {
      definition: "cover with a thin layer of gold",
      term: "gild",
    },
    {
      definition: "very carefully; ADJ.",
      term: "gingerly",
    },
    {
      definition: "distance around something; circumference",
      term: "girth",
    },
    {
      definition: "essence; main point; substance",
      term: "gist",
    },
    {
      definition:
        "like a glacier; of an ice age; extremely cold; Ex. \n                        glacial epoch; CF. iceberg",
      term: "glacial",
    },
    {
      definition: "compelling charm; ADJ. glamorous",
      term: "glamor",
    },
    {
      definition:
        "shine intensely and blindingly; stare fixedly and angrily; \n                        N.",
      term: "glare",
    },
    {
      definition:
        "(of something bad) highly conspicuous; harshly bright; \n                        shining intensely and blindingly",
      term: "glaring",
    },
    {
      definition:
        "cover with a thin and shiny surface; apply a glaze \n                        to; N: thin, smooth, shiny coating (as for pottery); Ex. \n                        unglazed pottery",
      term: "glaze",
    },
    {
      definition: "brief flash of light; glow; V.",
      term: "gleam",
    },
    {
      definition:
        "gather leavings; gather grain left behind by reapers; \n                        gather bit by bit (facts or information) often with difficulty",
      term: "glean",
    },
    {
      definition:
        "fluent (with insincerity or superficiality); facile; \n                        slick",
      term: "glib",
    },
    {
      definition:
        "shine erratically; twinkle; N: dim or unsteady light; \n                        faint indication; Ex. glimmer of hope",
      term: "glimmer",
    },
    {
      definition:
        "shine brightly with flashing points of light; Ex. glittering \n                        diamond ring; N: sparkling light; attractiveness; glamor; \n                        Ex. glitter of the sun on the waves",
      term: "glitter",
    },
    {
      definition:
        "express evil satisfaction; look at or think about with \n                        evil satisfaction; view malevolently; Ex. The thief gloated \n                        over the stolen jewels.",
      term: "gloat",
    },
    {
      definition:
        "brief explanation note or translation of a difficult \n                        expression; V.",
      term: "gloss",
    },
    {
      definition:
        "explain away with the intention of deceiving or hiding \n                        faults",
      term: "glossover ",
    },
    {
      definition: "brief explanation of words used in the text",
      term: "glossary",
    },
    {
      definition:
        "smooth and shining; N. gloss: shiny brightness on a \n                        surface; superficially attractive appearance; Ex. gloss \n                        of good manners",
      term: "glossy",
    },
    {
      definition:
        "shine brightly without a flame (as of eyes or metals); \n                        show redness and heat (in the face) after hard work or \n                        because of strong feelings; N: light produced by a heated \n                        body; brilliance of a color",
      term: "glow",
    },
    {
      definition: "scowl; glare; look or stare angrily",
      term: "glower",
    },
    {
      definition:
        "overstock; fill beyond capacity (with food); fill to \n                        excess; N: oversupply",
      term: "glut",
    },
    {
      definition: "sticky; viscous; gluey",
      term: "glutinous",
    },
    {
      definition:
        "someone who eats too much; ADJ. gluttonous: given to \n                        gluttony; greedy; CF. gluttony: habit of eating too much",
      term: "glutton",
    },
    {
      definition: "protruding knot on a tree; V.",
      term: "gnarl",
    },
    {
      definition: "twisted",
      term: "gnarled",
    },
    {
      definition: "dwarf; underground spirit who guards treasure hoards",
      term: "gnome",
    },
    {
      definition:
        "urge on; drive with a goad; cause (someone) to do something \n                        by continued annoyance; Ex. They goaded him into doing \n                        it by saying he was a coward; N: sharp-pointed stick for \n                        driving cattle; stimulus; CF. annoy continually",
      term: "goad",
    },
    {
      definition: "eat very quickly",
      term: "gobble",
    },
    {
      definition:
        "stuff oneself (with food); glut; CF. gorgeous: dazzlingly \n                        beautiful",
      term: "gorge",
    },
    {
      definition: "bloody; N. gore: blood (from a wound)",
      term: "gory",
    },
    {
      definition:
        "sheer; very light; like cobwebs; N: soft and sheer \n                        fabric; cobweb",
      term: "gossamer",
    },
    {
      definition:
        "overcharge (with high price); extort from; Ex. gouge \n                        the public; CF. usury",
      term: "gouge",
    },
    {
      definition:
        "epicure; person who takes excessive pleasure in food \n                        and drink",
      term: "gourmand",
    },
    {
      definition: "connoisseur of food and drink; epicure",
      term: "gourmet",
    },
    {
      definition: "kind in a generous way (to someone less important)",
      term: "gracious",
    },
    {
      definition: "series of gradual stages; degree in such a progression",
      term: "gradation",
    },
    {
      definition:
        "arrange into categories or grades; divide into marked \n                        intervals (for use in measurement); Ex. graduated ruler",
      term: "graduate",
    },
    {
      definition: "arranged by degrees (of height, difficulty, etc.)",
      term: "graduated",
    },
    {
      definition: "storehouse for grain",
      term: "granary",
    },
    {
      definition: "impressiveness; stateliness; majesty",
      term: "grandeur",
    },
    {
      definition:
        "(of a person or speech) using high sounding or important-sounding \n                        language; pompous; bombastic",
      term: "grandiloquent",
    },
    {
      definition:
        "affectedly grand; pretentious; high-flown; ridiculously \n                        exaggerated; impressive; great in size or scope; grand; \n                        Ex. grandiose ideas",
      term: "grandiose",
    },
    {
      definition:
        "form into grains or granules; N. granule: grain or \n                        particle",
      term: "granulate",
    },
    {
      definition: "pertaining to the art of delineating; vividly described",
      term: "graphic",
    },
    {
      definition: "black form of carbon used in lead pencils",
      term: "graphite",
    },
    {
      definition:
        "wrestle; come to grips with; take hold of and struggle \n                        with; Ex. grapple with the burglar",
      term: "grapple",
    },
    {
      definition:
        "make a harsh noise; have an unpleasant effect; shred \n                        by rubbing against a rough surface; Ex. grated cheese \n                        N: framework of metal bars to hold fuel in a fireplace",
      term: "grate",
    },
    {
      definition: "please; satisfy; Ex. gratify a desire",
      term: "gratify",
    },
    {
      definition: "free; without charge; ADJ.",
      term: "gratis",
    },
    {
      definition:
        "given freely; unwarranted; uncalled for; done without \n                        good reason; Ex. gratuitous comment",
      term: "gratuitous",
    },
    {
      definition:
        "n. money given to sb who has done one a service; tip \n                        ;",
      term: "gratuity",
    },
    {
      definition: "seriousness; ADJ. grave",
      term: "gravity",
    },
    {
      definition:
        "(of an animal) feed on growing grass; cause (an animal) \n                        to feed on grass; scrape (esp. the skin) or touch lightly \n                        in passing; brush; Ex. We can't graze the cattle till \n                        summer; N: surface wound",
      term: "graze",
    },
    {
      definition: "sociable; (of an animal) tending to form a group",
      term: "gregarious",
    },
    {
      definition: "cause of complaint; complaint",
      term: "grievance",
    },
    {
      definition:
        "question severely; cook on a grill; broil; N: cooking \n                        surface of parallel metal bars",
      term: "grill",
    },
    {
      definition:
        "causing great fear; unrelenting; determined in spite \n                        of fear; Ex. grim smile",
      term: "grim",
    },
    {
      definition:
        "facial distortion to show feeling such as pain, disgust, \n                        etc; V.",
      term: "grimace",
    },
    {
      definition: "ghastly; horrifying; Ex. grisly remains of the bodies",
      term: "grisly",
    },
    {
      definition:
        "man employed to take care of horses; V: make neat and \n                        trim; clean and brush (an animal)",
      term: "groom",
    },
    {
      definition:
        "long narrow channel made in a surface to guide the \n                        movement of something; Ex. groove of the record",
      term: "groove",
    },
    {
      definition:
        "total; fragrant; clearly wrong; (of people's behavior) \n                        coarse; corpulent; Ex. gross insolence/behavior; V: earn \n                        as a total amount; N: 12 dozens",
      term: "gross",
    },
    {
      definition:
        "fantastic; comically hideous; strange and unnatural \n                        (causing fear or amusement)",
      term: "grotesque",
    },
    {
      definition: "small cavern",
      term: "grotto",
    },
    {
      definition:
        "bad-tempered complaint; person who keeps complaining; \n                        V: complain; grumble",
      term: "grouch",
    },
    {
      definition:
        "complain; fuss; grumble; grouch; N: plump chickenlike \n                        game bird",
      term: "grouse",
    },
    {
      definition:
        "crawl or creep on ground; remain prostrate; behave \n                        in a servile manner",
      term: "grovel",
    },
    {
      definition: "low, guttural, menacing sound (as of a dog)",
      term: "growl",
    },
    {
      definition: "deep feeling of dislike; Ex. grudge fight; V.",
      term: "grudge",
    },
    {
      definition: "unwilling; reluctant; stingy(giving reluctantly)",
      term: "grudging",
    },
    {
      definition: "thin liquid porridge",
      term: "gruel",
    },
    {
      definition: "exhausting; Ex. grueling marathon race",
      term: "grueling",
    },
    {
      definition: "grisly; horrible",
      term: "gruesome",
    },
    {
      definition: "rough-mannered; (of a voice) rough; hoarse",
      term: "gruff",
    },
    {
      definition: "complain; mutter discontentedly; grouch; N.",
      term: "grumble",
    },
    {
      definition: "utter a deep guttural sound (as a pig does); N.",
      term: "grunt",
    },
    {
      definition: "boisterous laughter; V.",
      term: "guffaw",
    },
    {
      definition:
        "deceit; duplicity; wiliness; cunning; Ex. persuade \n                        her by guile",
      term: "guile",
    },
    {
      definition: "without deceit",
      term: "guileless",
    },
    {
      definition: "outward appearance; costume; Ex. in a new guise",
      term: "guise",
    },
    {
      definition:
        "trick; deceive; hoodwink; N: person who is easily tricked; \n                        dupe",
      term: "gull",
    },
    {
      definition: "easily deceived",
      term: "gullible",
    },
    {
      definition:
        "(of liquid) pour out in large quantities from a hole; \n                        make an excessive display of feeling (without true feeling); \n                        Ex. Blood gushed from the wound.",
      term: "gush",
    },
    {
      definition: "strong abrupt rush of wind; V. CF. bluster",
      term: "gust",
    },
    {
      definition: "affecting or relating to the sense of taste",
      term: "gustatory",
    },
    {
      definition: "eager enjoyment; zest; enthusiasm",
      term: "gusto",
    },
    {
      definition: "windy",
      term: "gusty",
    },
    {
      definition:
        "cable or chain attached to something that needs to \n                        be braced or steadied; CF. guide",
      term: "guy",
    },
    {
      definition:
        "apparatus used to maintain balance, ascertain direction, \n                        etc.",
      term: "gyroscope",
    },
    {
      definition: "natural home of a plant or animal; CF. habitation",
      term: "habitat",
    },
    {
      definition: "accustom or familiarize; addict",
      term: "habituate",
    },
    {
      definition:
        "hairs on back and neck, especially of a dog; Ex. make \n                        someone's hackles rise",
      term: "hackles",
    },
    {
      definition: "commonplace; trite",
      term: "hackneyed",
    },
    {
      definition:
        "wasted away; gaunt; Ex. haggard faces of the rescued \n                        miners",
      term: "haggard",
    },
    {
      definition: "argue about prices (in an attempt to bargain)",
      term: "haggle",
    },
    {
      definition: "frozen rain drop; V: salute or greet; precipitate hail",
      term: "hail",
    },
    {
      definition: "calm; peaceful; Ex. halcyon days",
      term: "halcyon",
    },
    {
      definition: "healthy",
      term: "hale",
    },
    {
      definition: "exhibiting little interest or enthusiasm",
      term: "halfhearted",
    },
    {
      definition:
        "blessed; consecrated; Ex. hallowed ground; V. hallow: \n                        set apart as holy",
      term: "hallowed",
    },
    {
      definition:
        "delusion; false idea; false perception of objects with \n                        a compelling sense of their reality; objects so perceived; \n                        V. hallucinate; ADJ. hallucinatory",
      term: "hallucination",
    },
    {
      definition:
        "hesitant; faltering; not fluent; Ex. halting steps/voice; \n                        V. halt: proceed or act with uncertainty; falter; hesitate; \n                        waver; stop",
      term: "halting",
    },
    {
      definition: "obstruct; prevent the free movement of;",
      term: "hamper",
    },
    {
      definition: "large in quantity; generous; Ex. handsome reward",
      term: "handsome",
    },
    {
      definition: "chance; luck",
      term: "hap",
    },
    {
      definition:
        "random; by chance; happening in an unplanned manner; \n                        Ex. haphazard growth of the town",
      term: "haphazard",
    },
    {
      definition: "unfortunate; luckless",
      term: "hapless",
    },
    {
      definition: "long, passionate, and vehement speech; V.",
      term: "harangue",
    },
    {
      definition: "annoy by repeated attacks",
      term: "harass",
    },
    {
      definition: "forerunner (which foreshadows what is to come)",
      term: "harbinger",
    },
    {
      definition:
        "give protection (by giving food and shelter); provide \n                        a refuge for; hide; keep in mind (thoughts or feelings); \n                        Ex. harbor a grudge/criminal; N: place of shelter; refuge",
      term: "harbor",
    },
    {
      definition:
        "(of people or animals) sturdy; robust; (of plants) \n                        able to stand inclement(stormy) weather",
      term: "hardy",
    },
    {
      definition:
        "tiresome dwelling on a subject; V. harp: dwell on(think \n                        or speak a lot about) tediously",
      term: "harping",
    },
    {
      definition:
        "agonizing; distressing; traumatic; V. harrow: break \n                        up and level (soil) with a harrow; inflict great distress \n                        on; agonize; N: farming machine to break up the earth",
      term: "harrowing",
    },
    {
      definition: "harass, annoy, torment (by repeated attacks); raid",
      term: "harry",
    },
    {
      definition:
        "deck opening; lid covering a deck opening; V: emerge \n                        from an egg; produce (young) from an egg",
      term: "hatch",
    },
    {
      definition: "pride; arrogance; ADJ. haughty",
      term: "haughtiness",
    },
    {
      definition:
        "(of a spirit) visit (a place); come to mind continually; \n                        visit (a place) regularly; frequent; Ex. haunted house; \n                        Ex. haunted by his last words; N: place much frequented",
      term: "haunt",
    },
    {
      definition: "place of safety; refuge; harbor; Ex. tax haven",
      term: "haven",
    },
    {
      definition: "widespread damage; disorder; chaos",
      term: "havoc",
    },
    {
      definition:
        "venture; put in danger; risk; Ex. hazard a guess; N: \n                        possible source of danger",
      term: "hazard",
    },
    {
      definition: "dangerous",
      term: "hazardous",
    },
    {
      definition:
        "slightly obscure; misty; unclear; N. haze: light mist \n                        or smoke; confused state of mind",
      term: "hazy",
    },
    {
      definition: "moving with the head leading; headlong",
      term: "headfirst",
    },
    {
      definition: "hasty; rash; headfirst; ADV.",
      term: "headlong",
    },
    {
      definition:
        "willful; stubborn; unyielding; determined to have one's \n                        own way; CF. no 'excessive'",
      term: "headstrong",
    },
    {
      definition: "conducive to good health; Ex. healthful mountain air",
      term: "healthful",
    },
    {
      definition: "possessing good health; healthful",
      term: "healthy",
    },
    {
      definition:
        "person who verbally harasses others; V. heckle: verbally \n                        harass as with gibes (by interrupting a speaker or speech)",
      term: "heckler",
    },
    {
      definition:
        "one who believes that pleasure is the sole aim in life; \n                        CF. hedonism: practice of living one's life purely for \n                        pleasure",
      term: "hedonist",
    },
    {
      definition: "pay attention to; N: close attention",
      term: "heed",
    },
    {
      definition: "not noticing; disregarding",
      term: "heedless",
    },
    {
      definition: "dominance especially of one nation over others",
      term: "hegemony",
    },
    {
      definition: "atrocious; wicked; hatefully bad; Ex. heinous crime",
      term: "heinous",
    },
    {
      definition: "steering wheel of a ship; position of control",
      term: "helm",
    },
    {
      definition:
        "surround tightly so that movement is impossible; Ex. \n                        hem in; N.",
      term: "hem",
    },
    {
      definition:
        "messenger; sign of something to come; V: announce; \n                        proclaim; Ex. unheralded researcher",
      term: "herald",
    },
    {
      definition: "grain-eating; CF. herbivore",
      term: "herbivorous",
    },
    {
      definition:
        "group of animals; crowd; one who looks after a herd; \n                        Ex. shepherd/goatherd; Ex. herd instinct; Ex. herdsman; \n                        V: come together in a herd; look after a herd; Ex. herd \n                        cattle",
      term: "herd",
    },
    {
      definition: "life after death",
      term: "hereafter",
    },
    {
      definition:
        "opinion contrary to popular belief; opinion contrary \n                        to accepted religion; ADJ. heretical; CF. heretic",
      term: "heresy",
    },
    {
      definition:
        "concerning alchemy or magic; obscure and mysterious; \n                        occult",
      term: "hermetic",
    },
    {
      definition: "home of a hermit",
      term: "hermitage",
    },
    {
      definition:
        "one who studies reptiles; CF. herpetology: branch of \n                        zoology that deals with reptiles and amphibians",
      term: "herpetologist",
    },
    {
      definition:
        "(of beliefs) against accepted opinion; unorthodox; \n                        unconventional",
      term: "heterodox",
    },
    {
      definition:
        "dissimilar; mixed; not homogeneous; consisting of dissimilar \n                        elements or plants",
      term: "heterogeneous",
    },
    {
      definition: "cut to pieces with ax or sword; chop; N.",
      term: "hew",
    },
    {
      definition: "time of greatest success or power; prime",
      term: "heyday",
    },
    {
      definition: "gap; pause; gap or interruption in space or time; break",
      term: "hiatus",
    },
    {
      definition: "wintry; wintery; of or like winter",
      term: "hibernal",
    },
    {
      definition: "sleep throughout the winter; N. hibernation",
      term: "hibernate",
    },
    {
      definition: "skin of an animal",
      term: "hide",
    },
    {
      definition:
        "repulsive to the sight; ugly; repugnant; Ex. hideous \n                        face/scream",
      term: "hideous",
    },
    {
      definition:
        "arrangement by rank or standing; authoritarian body \n                        divided into ranks; body of persons having authority",
      term: "hierarchy",
    },
    {
      definition: "picture writing; ADJ.",
      term: "hieroglyphic",
    },
    {
      definition: "highly pretentious or inflated",
      term: "highflown ",
    },
    {
      definition:
        "boisterous mirth(merriment; laughter); ADJ. hilarious: \n                        full of laughter",
      term: "hilarity",
    },
    {
      definition: "furthest behind; farthest to the rear",
      term: "hindmost",
    },
    {
      definition: "block; obstacle; V. hinder",
      term: "hindrance",
    },
    {
      definition:
        "understanding the nature of an event after it has actually \n                        happened",
      term: "hindsight",
    },
    {
      definition: "back country; inner part of a country; OP. foreland",
      term: "hinterlands",
    },
    {
      definition:
        "one who serves for hire (usually used contemptuously); \n                        one who works solely for compensation; Ex. hireling politician",
      term: "hireling",
    },
    {
      definition: "hairy; having a lot of hair",
      term: "hirsute",
    },
    {
      definition: "important in history; Ex. historic battle",
      term: "historic",
    },
    {
      definition:
        "connected with history; based on events in history \n                        (whether regarded as important or not)",
      term: "historical",
    },
    {
      definition:
        "theatrical; excessively dramatic or emotional; affected; \n                        of actors or acting; N. histrionics: histrionic behavior",
      term: "histrionic",
    },
    {
      definition: "box for bees; V: cause to go in a hive",
      term: "hive",
    },
    {
      definition:
        "stockpile; accumulate for future use; N: supply stored \n                        for future use",
      term: "hoard",
    },
    {
      definition: "white with age",
      term: "hoary",
    },
    {
      definition:
        "trick which makes someone take action; practical joke; \n                        Ex. hoax mail; V.",
      term: "hoax",
    },
    {
      definition: "destruction by fire; CF. burnt whole; CF. Holocaust",
      term: "holocaust",
    },
    {
      definition:
        "leather pistol case (that hangs on a belt around the \n                        waist)",
      term: "holster",
    },
    {
      definition: "honor; tribute; great respect; Ex. pay/do homage to",
      term: "homage",
    },
    {
      definition: "not good-looking; unattractive",
      term: "homely",
    },
    {
      definition:
        "tendency of a system or organism to maintain relative \n                        stability or internal equilibrium; CF. homeo-: constant; \n                        Ex. homeotherm",
      term: "homeostasis",
    },
    {
      definition:
        "domestic; made at home; spun or woven at home; simple \n                        and ordinary; Ex. homespun philosophy",
      term: "homespun",
    },
    {
      definition:
        "sermon; tedious moralizing lecture; serious warning; \n                        ADJ. homiletic",
      term: "homily",
    },
    {
      definition: "of the same kind; uniform in composition throughout",
      term: "homogeneous",
    },
    {
      definition: "sharpen (a tool); N: whetstone for sharpening a tool",
      term: "hone",
    },
    {
      definition: "deceive; delude",
      term: "hoodwink",
    },
    {
      definition: "crowd; swarm",
      term: "horde",
    },
    {
      definition:
        "diagram of the positions of stars at a given moment \n                        (eg. of a person's birth) used by astrologers",
      term: "horoscope",
    },
    {
      definition:
        "encouraging; exhortive; marked by exhortation; CF. \n                        exhort",
      term: "hortatory",
    },
    {
      definition:
        "pertaining to cultivation of gardens; N. horticulture: \n                        science or art of cultivating fruits, vegetables, or ornamental \n                        plants; CF. agriculture: science or art of farming or \n                        growing crops",
      term: "horticultural",
    },
    {
      definition:
        "person who is kept as a prisoner by an enemy so that \n                        the other side will do what the enemy demands",
      term: "hostage",
    },
    {
      definition: "unfriendliness; hatred; enmity; ADJ. hostile",
      term: "hostility",
    },
    {
      definition:
        "person who does things too quickly without thinking; \n                        ADJ. hotheaded",
      term: "hothead",
    },
    {
      definition: "shack; small wretched house",
      term: "hovel",
    },
    {
      definition:
        "hang about; (of birds or aircraft) stay in the air \n                        in one place; (of people) wait nearby; stay around one \n                        place; waver; be in an uncertain state",
      term: "hover",
    },
    {
      definition: "confused uproar; loud noise; din",
      term: "hubbub",
    },
    {
      definition: "arrogance; excessive self-conceit",
      term: "hubris",
    },
    {
      definition: "color; aspect; Ex. opinions of every hue",
      term: "hue",
    },
    {
      definition:
        "outcry; loud cry or clamor; strong protest; Ex. hue \n                        and cry against the new rule",
      term: "hueand_cry ",
    },
    {
      definition:
        "husk; dry outer covering of a seed; frame or body of \n                        a ship",
      term: "hull",
    },
    {
      definition:
        "marked by kindness or consideration; kind and compassionate; \n                        humanitarian",
      term: "humane",
    },
    {
      definition:
        "one devoted to the promotion of human welfare; CF. \n                        humanism",
      term: "humanitarian",
    },
    {
      definition:
        "of low rank or position; modest; having a low opinion \n                        of oneself and a high opinion of others; unassuming; not \n                        proud; V. humiliate: make humble; cause to feel ashamed \n                        or to lose the respect of others",
      term: "humble",
    },
    {
      definition: "dull; monotonous",
      term: "humdrum",
    },
    {
      definition: "damp; N. humidity",
      term: "humid",
    },
    {
      definition: "humbleness of spirit",
      term: "humility",
    },
    {
      definition: "small hill; hillock",
      term: "hummock",
    },
    {
      definition:
        "indulge; comply with the wishes of; N. quality that \n                        makes something amusing; state of mind; mood; Ex. in a \n                        bad humor; Ex. out of humor",
      term: "humor",
    },
    {
      definition:
        "substance or rich soil formed by decaying vegetable \n                        matter; CF. soil",
      term: "humus",
    },
    {
      definition: "throw forcefully; shout out violently",
      term: "hurl",
    },
    {
      definition:
        "crash; rush; move with great speed; Ex. hurtling runaway \n                        train",
      term: "hurtle",
    },
    {
      definition:
        "use sparingly; conserve; save; Ex. husband one's energy; \n                        CF. house holder",
      term: "husband",
    },
    {
      definition:
        "frugality; thrift; economy; agriculture; farming; Ex. \n                        animal husbandry; CF. husbandman",
      term: "husbandry",
    },
    {
      definition: "crude dwelling; shack",
      term: "hut",
    },
    {
      definition: "mongrel; mixed breed; V. hybridize",
      term: "hybrid",
    },
    {
      definition: "fear of water; rabies",
      term: "hydrophobia",
    },
    {
      definition:
        "science and practice of the promotion and preservation \n                        of health; ADJ. hygienic: showing careful attention to \n                        cleanness (to prevent disease); Ex. hygienic condition",
      term: "hygiene",
    },
    {
      definition:
        "exaggeration; overstatement; ADJ. hyperbolic: of hyperbole; \n                        of a hyperbola",
      term: "hyperbole",
    },
    {
      definition:
        "excessively exacting; too critical (without noticing \n                        good qualities)",
      term: "hypercritical",
    },
    {
      definition: "induced sleeping state; ADJ. hypnotic; V. hypnotize",
      term: "hypnosis",
    },
    {
      definition:
        "person unduly worried about his health; worrier without \n                        cause about illness; ADJ. CF. hypochondria: neurosis that \n                        one is or is becoming ill; CF. abdomen",
      term: "hypochondriac",
    },
    {
      definition:
        "pretending to be virtuous; deceiving; N. hypocrisy: \n                        profession of beliefs one does not possess; CF. hypocrite",
      term: "hypocritical",
    },
    {
      definition: "based on assumptions or hypotheses; supposed; N. hypothesis",
      term: "hypothetical",
    },
    {
      definition:
        "excessive or uncontrollable excitement; N. hysteric: \n                        person suffering from hysteria; CF. hysterics: attack \n                        of hysteria",
      term: "hysteria",
    },
    {
      definition:
        "poke abruptly with something sharp; punch with short \n                        blows",
      term: "jab",
    },
    {
      definition: "chatter rapidly or unintelligibly",
      term: "jabber",
    },
    {
      definition:
        "tired or uninterested by surfeit; fatigued; surfeited; \n                        worn out; wearied; Ex. jaded appetite",
      term: "jaded",
    },
    {
      definition:
        "language used by special group; technical terminology; \n                        gibberish; nonsensical or incoherent talk",
      term: "jargon",
    },
    {
      definition:
        "medical condition in which the skin, the white part \n                        of the eyes, etc. turn yellow; V: affect with jaundice; \n                        affect with prejudice, envy, or hostility; bias",
      term: "jaundice",
    },
    {
      definition:
        "yellowed; prejudiced (envious, hostile, or resentful) from long and disappointing experience of human affairs; Ex. with a jaundiced eye",
      term: "jaundiced",
    },
    {
      definition: "trip; short journey",
      term: "jaunt",
    },
    {
      definition:
        "cheerful and pleased with life; lighthearted; animated; \n                        easy and carefree; dapper in appearance; Ex. jaunty person/hat",
      term: "jaunty",
    },
    {
      definition: "endanger; imperil; put at risk; N. jeopardy: danger",
      term: "jeopardize",
    },
    {
      definition: "playful remark or act; V. act or speak playfully",
      term: "jest",
    },
    {
      definition: "things thrown from a ship (to lighten the ship)",
      term: "jetsam",
    },
    {
      definition: "throw overboard (from a ship or plane)",
      term: "jettison",
    },
    {
      definition: "agree; be in harmony with; gibe",
      term: "jibe",
    },
    {
      definition:
        "extremely aggressive and militant patriot; warlike \n                        chauvinist; N. jingoism: extreme nationalism",
      term: "jingoist",
    },
    {
      definition: "given to(having a tendency of) joking",
      term: "jocose",
    },
    {
      definition: "said or done in jest or playfully; marked by joking",
      term: "jocular",
    },
    {
      definition: "merry",
      term: "jocund",
    },
    {
      definition: "gaiety; cheerfulness; ADJ. jolly: merry; gay",
      term: "jollity",
    },
    {
      definition:
        "shove; bump; push against (someone) rather roughly; \n                        Ex. jostled by the crowds",
      term: "jostle",
    },
    {
      definition: "good-natured; merry; cheerful",
      term: "jovial",
    },
    {
      definition: "rejoicing; great joy",
      term: "jubilation",
    },
    {
      definition: "judicial branch of government",
      term: "judiciary",
    },
    {
      definition: "sound on judgment; wise",
      term: "judicious",
    },
    {
      definition: "pitcher; container for holding liquids",
      term: "jug",
    },
    {
      definition:
        "irresistible crushing force; overwhelming advancing \n                        force that crushes everything in its path",
      term: "juggernaut",
    },
    {
      definition: "mix in a confused way",
      term: "jumble",
    },
    {
      definition:
        "crisis; point in time; joining point; joint; act of \n                        joining",
      term: "juncture",
    },
    {
      definition:
        "trip especially one taken for pleasure by an official \n                        at public expense",
      term: "junket",
    },
    {
      definition:
        "group of persons joined in political intrigue; cabal; \n                        group of military officers ruling a country after seizing \n                        power (by force)",
      term: "junta",
    },
    {
      definition:
        "of the law and its administration; CF. judicial: of \n                        courts of law; CF. judiciary",
      term: "juridical",
    },
    {
      definition: "right and power to apply the law; authority",
      term: "jurisdiction",
    },
    {
      definition: "science of law",
      term: "jurisprudence",
    },
    {
      definition: "place side by side; CF. next",
      term: "juxtapose",
    },
    {
      definition: "study of fish; CF. ichthyo-: fish",
      term: "ichthyology",
    },
    {
      definition: "religious image; idol; image or representation",
      term: "iconikon) ",
    },
    {
      definition:
        "attacking cherished traditions; N. iconoclast: one \n                        who attacks traditional ideas; one who destroys sacred \n                        images",
      term: "iconoclastic",
    },
    {
      definition: "system of ideas characteristic of a group or culture",
      term: "ideology",
    },
    {
      definition:
        "expression whose meaning as a whole differs from the \n                        meanings of its individual words; distinctive style (of \n                        expression); Ex. idiom of the modern popular music; ADJ. \n                        idiomatic",
      term: "idiom",
    },
    {
      definition:
        "individual trait usually odd in nature; behavioral \n                        peculiarity; eccentricity; attitude, behavior, or opinion \n                        peculiar to a person; anything highly individual or eccentric; \n                        ADJ. idiosyncratic",
      term: "idiosyncrasy",
    },
    {
      definition:
        "not working; not employed or busy; lazy; without purpose; \n                        useless; lacking substance; baseless; not based on truth; \n                        Ex. idle worker; Ex. talk idly; V.",
      term: "idle",
    },
    {
      definition:
        "worship of idols; excessive admiration or devotion; \n                        ADJ. idolatrous",
      term: "idolatry",
    },
    {
      definition:
        "short poem idealizing rural life; simple happy period \n                        of life (in the country); scene from such a time; Ex. \n                        idyll of two young lovers",
      term: "idyllidyl) ",
    },
    {
      definition:
        "charmingly carefree; simple and happy; Ex. idyllic \n                        scene",
      term: "idyllic",
    },
    {
      definition:
        "produced by fire; of fire; volcanic; (of rocks) formed \n                        from lava; Ex. igneous meteorite",
      term: "igneous",
    },
    {
      definition: "kindle; light; catch fire or set fire to",
      term: "ignite",
    },
    {
      definition: "unworthy; not noble; dishonorable; Ex. ignoble deed",
      term: "ignoble",
    },
    {
      definition:
        "deep disgrace; shame or dishonor; ADJ. ignominious; \n                        Ex. ignominous defeat",
      term: "ignominy",
    },
    {
      definition: "illegal",
      term: "illicit",
    },
    {
      definition: "infinite; limitless",
      term: "illimitable",
    },
    {
      definition:
        "brighten; clear up or make understandable; enlighten; \n                        enable to understand; Ex. illuminating remarks",
      term: "illuminate",
    },
    {
      definition:
        "misleading vision or visual image; false idea or belief; \n                        CF. delusion",
      term: "illusion",
    },
    {
      definition: "deceiving; based on illusion; causing illusion; deceptive",
      term: "illusive",
    },
    {
      definition: "illusive; deceptive; not real",
      term: "illusory",
    },
    {
      definition: "lack of balance or symmetry; disproportion",
      term: "imbalance",
    },
    {
      definition:
        "weakness of mind; state of being an imbecile; N. imbecile: \n                        stupid person; fool",
      term: "imbecility",
    },
    {
      definition: "drink in",
      term: "imbibe",
    },
    {
      definition:
        "complicated situation (as in a play); painful or complex \n                        misunderstanding (as in a play); entanglement; confused \n                        mass (as of papers); V. embroil",
      term: "imbroglio",
    },
    {
      definition:
        "saturate(soak thoroughly); fill; Ex. imbue someone \n                        with feelings",
      term: "imbue",
    },
    {
      definition: "spotless; flawless; absolutely clean",
      term: "immaculate",
    },
    {
      definition: "impending; near at hand",
      term: "imminent",
    },
    {
      definition: "state of being immovable",
      term: "immobility",
    },
    {
      definition: "offer or kill as a sacrifice (by fire)",
      term: "immolate",
    },
    {
      definition: "resistant to; free or exempt from; N. immunity",
      term: "immune",
    },
    {
      definition: "imprison; shut up in confinement; CF. wall",
      term: "immure",
    },
    {
      definition: "unchangeable",
      term: "immutable",
    },
    {
      definition: "injure; hurt; damage",
      term: "impair",
    },
    {
      definition: "pierce (with a sharp point); Ex. impaled by the spear",
      term: "impale",
    },
    {
      definition:
        "imperceptible(not easily understood); intangible; OP. \n                        palpable: tangible; easily perceptible",
      term: "impalpable",
    },
    {
      definition: "grant a share of; make known; Ex. news to impart",
      term: "impart",
    },
    {
      definition: "not biased; fair; N. impartiality",
      term: "impartial",
    },
    {
      definition: "not able to be traveled or crossed",
      term: "impassable",
    },
    {
      definition:
        "predicament(dangerous condition) from which there is \n                        no escape; situation allowing for no further progress",
      term: "impasse",
    },
    {
      definition: "(of speech) filled with passion; fervent",
      term: "impassioned",
    },
    {
      definition:
        "without feeling; expressionless; imperturbable; stoical; \n                        Ex. impassive face",
      term: "impassive",
    },
    {
      definition:
        "charge (a public official) with crime in office; raise \n                        doubts about; indict; Ex. impeach a witness's credibility",
      term: "impeach",
    },
    {
      definition: "faultless",
      term: "impeccable",
    },
    {
      definition: "without money",
      term: "impecunious",
    },
    {
      definition: "hide; retard or obstruct the progress of; block",
      term: "impede",
    },
    {
      definition:
        "hindrance; stumbling-block; speech defect preventing \n                        clear articulation; Ex. speech impediment",
      term: "impediment",
    },
    {
      definition:
        "drive or force onward; drive to take action; urge to \n                        action",
      term: "impel",
    },
    {
      definition: "nearing; approaching; about to happen",
      term: "impending",
    },
    {
      definition:
        "not able to be pierced or entered; beyond understanding; \n                        impossible to understand; Ex. impenetrable mystery",
      term: "impenetrable",
    },
    {
      definition: "not repentant",
      term: "impenitent",
    },
    {
      definition:
        "absolutely necessary; that must be done; critically \n                        important; expressing command; Ex. It is imperative that; \n                        N: something that must be done",
      term: "imperative",
    },
    {
      definition: "unnoticeable; impossible to perceive; undetectable",
      term: "imperceptible",
    },
    {
      definition: "like an emperor; related to an empire; CF. imperialism",
      term: "imperial",
    },
    {
      definition: "put in danger",
      term: "imperil",
    },
    {
      definition: "domineering; too commanding; haughty; CF. imperial/emperor",
      term: "imperious",
    },
    {
      definition:
        "impervious; not permitting passage through its substance; \n                        impossible to permeate",
      term: "impermeable",
    },
    {
      definition:
        "not being a person; not showing personal feelings; \n                        Ex. impersonal force/manner/organization",
      term: "impersonal",
    },
    {
      definition: "insolent; rude; not pertinent; N. impertinence",
      term: "impertinent",
    },
    {
      definition: "unshakably calm; placid",
      term: "imperturbable",
    },
    {
      definition:
        "impenetrable; incapable of being damaged or distressed; \n                        incapable of being affected (in one's opinions); Ex. impervious \n                        to water/criticism",
      term: "impervious",
    },
    {
      definition:
        "violent; hasty; rash; impulsive; without careful thought; \n                        Ex. impetuous decision",
      term: "impetuous",
    },
    {
      definition:
        "moving force; momentum; force of a moving body; incentive; \n                        stimulus; impulse",
      term: "impetus",
    },
    {
      definition: "irreverence; lack of respect for God or piety",
      term: "impiety",
    },
    {
      definition:
        "infringe; encroach; influence; touch; collide with; \n                        Ex. The effects are impinging on every aspect of our lives.",
      term: "impinge",
    },
    {
      definition: "irreverent",
      term: "impious",
    },
    {
      definition:
        "incapable of being pacified; impossible to appease; \n                        Ex. implacable enemy",
      term: "implacable",
    },
    {
      definition:
        "unlikely (to be true); unbelievable; Ex. implausible \n                        alibi",
      term: "implausible",
    },
    {
      definition:
        "put into effect; enforce; carry out; supply with tools; \n                        Ex. implement the plan/suggestion; N: tool or instrument",
      term: "implement",
    },
    {
      definition:
        "incriminate; involve incriminatingly; show to be involved \n                        (in a crime); Ex. implicate someone in the crime",
      term: "implicate",
    },
    {
      definition: "something hinted at or suggested; implying; implicating",
      term: "implication",
    },
    {
      definition:
        "understood but not stated; implied; unquestioning and \n                        complete; Ex. implicit trust",
      term: "implicit",
    },
    {
      definition: "burst inward; CF. vaccum tube",
      term: "implode",
    },
    {
      definition: "v. ask or beg earnestly; beseech",
      term: "implore",
    },
    {
      definition: "suggest a meaning not expressed; signify",
      term: "imply",
    },
    {
      definition: "not wise; not expedient; not politic",
      term: "impolitic",
    },
    {
      definition:
        "weightless; that cannot undergo precise evaluation; \n                        CF. pound",
      term: "imponderable",
    },
    {
      definition: "significance; importance; meaning",
      term: "import",
    },
    {
      definition:
        "urging; always demanding; troublesomely urgent or persistent",
      term: "importunate",
    },
    {
      definition:
        "beg persistently; make repeated requests (in an annoying \n                        way)",
      term: "importune",
    },
    {
      definition: "assuming a false identity; masquerade; CF. impostor",
      term: "imposture",
    },
    {
      definition:
        "weak; ineffective; lacking in physical strength or \n                        power",
      term: "impotent",
    },
    {
      definition:
        "make poor; deprive of natural strength or something \n                        important; Ex. impoverished soil",
      term: "impoverish",
    },
    {
      definition: "curse; swearword",
      term: "imprecation",
    },
    {
      definition:
        "invulnerable; impossible to capture or enter by force; \n                        Ex. impregnable fort/argument; CF. take",
      term: "impregnable",
    },
    {
      definition: "make pregnant; fill thoroughly; saturate",
      term: "impregnate",
    },
    {
      definition:
        "without previous preparation; off the cuff(end of a \n                        sleeve); on the spur of the moment",
      term: "impromptu",
    },
    {
      definition: "improperness; unsuitableness",
      term: "impropriety",
    },
    {
      definition: "thriftless; not providing for the future",
      term: "improvident",
    },
    {
      definition: "compose on the spur of the moment",
      term: "improvise",
    },
    {
      definition: "lacking caution; not prudent; injudicious",
      term: "imprudent",
    },
    {
      definition: "impertinence; insolence",
      term: "impudence",
    },
    {
      definition:
        "dispute or contradict (often in an insulting way); \n                        attack as false or questionable; challenge; gainsay; CF. \n                        fight",
      term: "impugn",
    },
    {
      definition: "powerlessness; feebleness",
      term: "impuissance",
    },
    {
      definition: "freedom from punishment or harm; CF. punish",
      term: "impunity",
    },
    {
      definition: "attribute; ascribe; charge; N. imputation",
      term: "impute",
    },
    {
      definition: "unintentionally; by oversight; carelessly",
      term: "inadvertently",
    },
    {
      definition:
        "not to be taken away; nontransferable; Ex. inalienable \n                        rights",
      term: "inalienable",
    },
    {
      definition: "woman whom a man loves",
      term: "inamorata",
    },
    {
      definition: "silly; senseless; Ex. inane remarks; N. inanity",
      term: "inane",
    },
    {
      definition: "lifeless; not animate",
      term: "inanimate",
    },
    {
      definition:
        "speechless; producing indistinct speech; not articulate; \n                        not expressing oneself clearly",
      term: "inarticulate",
    },
    {
      definition: "since; owing to the fact that",
      term: "inasmuchas ",
    },
    {
      definition:
        "begin formally; install in office; induct into office \n                        by a formal ceremony; N. inauguration; ADJ. inaugural",
      term: "inaugurate",
    },
    {
      definition:
        "strikingly bright; shining with intense heat; emitting \n                        visible light when heated; Ex. incandescent light bulb; \n                        CF. candle",
      term: "incandescent",
    },
    {
      definition:
        "singing or chanting of magic spells; magical formula; \n                        (the saying of) words used in magic; CF. enchant",
      term: "incantation",
    },
    {
      definition: "disable; N. incapacity: lack of capacity",
      term: "incapacitate",
    },
    {
      definition: "imprison",
      term: "incarcerate",
    },
    {
      definition:
        "endowed with flesh; invested with bodily form; personified; \n                        Ex. devil incarnate; V: give bodily form to; embody",
      term: "incarnate",
    },
    {
      definition:
        "act of assuming a human body and human nature; one \n                        who personifies something; personification; Ex. previous \n                        incarnation/reincarnation",
      term: "incarnation",
    },
    {
      definition:
        "arsonist; ADJ: causing fire; of arson; Ex. incendiary \n                        bomb",
      term: "incendiary",
    },
    {
      definition:
        "enrage; infuriate(make furious); make extremely angry; \n                        outrage; N: aromatic substance burned to produce a pleasant \n                        odor",
      term: "incense",
    },
    {
      definition:
        "spur; motive; something which encourages one to greater \n                        activity",
      term: "incentive",
    },
    {
      definition: "start; beginning",
      term: "inception",
    },
    {
      definition: "uninterrupted; unceasing",
      term: "incessant",
    },
    {
      definition:
        "(of desire, wish, plan) recently begun; not explicit; \n                        at the beginning of development; rudimentary; elementary; \n                        Ex. inchoate mass",
      term: "inchoate",
    },
    {
      definition:
        "rate of occurrence; particular occurrence; Ex. high \n                        incidence of infant mortality",
      term: "incidence",
    },
    {
      definition: "event; event that causes a crisis",
      term: "incident",
    },
    {
      definition: "not essential; minor; N: something incidental",
      term: "incidental",
    },
    {
      definition: "burn to ashes",
      term: "incinerate",
    },
    {
      definition: "beginning; in an early stage",
      term: "incipient",
    },
    {
      definition:
        "(appreciatively) cutting; sharp; Ex. incisive remarks; \n                        V. incise: make a cut into",
      term: "incisive",
    },
    {
      definition:
        "arouse to action; goad; motivate; induce to exist; \n                        Ex. incite a riot/the crowd to rebellion",
      term: "incite",
    },
    {
      definition: "stormy; unkind; unmerciful; CF. clement",
      term: "inclement",
    },
    {
      definition: "slope; slant; Ex. steep incline",
      term: "incline",
    },
    {
      definition:
        "tending or leaning toward; bent; V. incline: slant; dispose; be disposed; tend",
      term: "inclined",
    },
    {
      definition:
        "tending to include all; all-inclusive; Ex. inclusive \n                        charge",
      term: "inclusive",
    },
    {
      definition: "with identity concealed; using an assumed name; ADJ.",
      term: "incognito",
    },
    {
      definition:
        "unintelligible; muddled; unable to express one's thoughts \n                        in an orderly manner; illogical; lacking cohesion; not \n                        coherent",
      term: "incoherent",
    },
    {
      definition: "not spacious; inconvenient",
      term: "incommodious",
    },
    {
      definition: "inharmonious; N. incompatibility",
      term: "incompatible",
    },
    {
      definition:
        "lack of harmony; absurdity; ADJ. incongruous: lacking \n                        in harmony; inappropriate",
      term: "incongruity",
    },
    {
      definition: "insignificant; unimportant",
      term: "inconsequential",
    },
    {
      definition:
        "state of being self-contradictory; lack of uniformity \n                        or steadiness; ADJ. inconsistent: displaying a lack of \n                        consistency; erratic; contradictory; incompatible",
      term: "inconsistency",
    },
    {
      definition: "lacking self-restraint; not continent; licentious",
      term: "incontinent",
    },
    {
      definition:
        "indisputable; impossible to dispute; not open to question; \n                        unquestionable",
      term: "incontrovertible",
    },
    {
      definition:
        "introduce something into a larger whole; include; embody; \n                        give material form to; ADJ.",
      term: "incorporate",
    },
    {
      definition: "without a material body; insubstantial",
      term: "incorporeal",
    },
    {
      definition: "uncorrectable",
      term: "incorrigible",
    },
    {
      definition: "tendency to disbelief",
      term: "incredulity",
    },
    {
      definition: "withholding belief; skeptical; showing disbelief",
      term: "incredulous",
    },
    {
      definition: "increase",
      term: "increment",
    },
    {
      definition:
        "accuse of or implicate in a crime; serve as evidence \n                        against; cause to seem or make guilty of a crime; Ex. \n                        incriminating evidence",
      term: "incriminate",
    },
    {
      definition:
        "hard coating or crust; V. incrust: encrust; cover with \n                        a crust",
      term: "incrustation",
    },
    {
      definition:
        "hatch; warm (eggs) with the body to promote hatching; \n                        maintain at optimal environment conditions for development; \n                        be holding in one's body an infection which is going to \n                        develop into a disease; N. incubation; CF. incubation:disease",
      term: "incubate",
    },
    {
      definition:
        "burden; very worriying problem; mental care; nightmare; \n                        male devil; CF. succubus",
      term: "incubus",
    },
    {
      definition: "teach (ideas or principles); instill",
      term: "inculcate",
    },
    {
      definition:
        "obligatory; imposed as an obligation; currently holding \n                        an office; N: person who holds an office",
      term: "incumbent",
    },
    {
      definition: "bring upon oneself",
      term: "incur",
    },
    {
      definition: "temporary invasion; CF. excursion: short journey",
      term: "incursion",
    },
    {
      definition: "irresolution; inability to make up one's mind",
      term: "indecision",
    },
    {
      definition:
        "marked by indecision; inconclusive; Ex. indecisive \n                        battle",
      term: "indecisive",
    },
    {
      definition: "tireless; untiring; showing no sign of getting tired",
      term: "indefatigable",
    },
    {
      definition: "not able to be erased",
      term: "indelible",
    },
    {
      definition:
        "make secure against damage or loss; compensate for \n                        damage or loss; CF. make uninjured",
      term: "indemnify",
    },
    {
      definition: "notch; deep recess; V. indent; CF. tooth",
      term: "indentation",
    },
    {
      definition:
        "bind as servant or apprentice to master; bind by indenture; \n                        N: contract binding one party into the service of another \n                        for a specified time (as between an apprentice and his \n                        master)",
      term: "indenture",
    },
    {
      definition: "uncertain; not clearly fixed; indefinite",
      term: "indeterminate",
    },
    {
      definition: "suggestive; implying; serving to indicate",
      term: "indicative",
    },
    {
      definition:
        "signs; indications; Ex. indices of a student's potential; \n                        CF. index: something that reveals or indicates; sign; \n                        Ex. cost-of-living index",
      term: "indices",
    },
    {
      definition: "charge; N. indictment",
      term: "indict",
    },
    {
      definition:
        "unmoved or unconcerned by; having no interest in; mediocre; \n                        neither good nor bad",
      term: "indifferent",
    },
    {
      definition: "poverty",
      term: "indigence",
    },
    {
      definition: "native; Ex. plant indigenous to the New World",
      term: "indigenous",
    },
    {
      definition: "poor; destitute",
      term: "indigent",
    },
    {
      definition:
        "anger at an injustice; Ex. righteous indignation; ADJ. \n                        indignant",
      term: "indignation",
    },
    {
      definition:
        "treatment or situation that causes shame or loss of \n                        dignity, respect; offensive or insulting treatment; humiliating \n                        or degrading treatment; Ex. I suffered the indignity of \n                        having to say that in front of them.",
      term: "indignity",
    },
    {
      definition:
        "choosing at random; confused; not based on careful \n                        distinctions",
      term: "indiscriminate",
    },
    {
      definition: "too certain to be disputed; beyond doubt",
      term: "indisputable",
    },
    {
      definition: "permanent; impossible to dissolve or disintegrate",
      term: "indissoluble",
    },
    {
      definition: "write; compose",
      term: "indite",
    },
    {
      definition:
        "cause to accept a doctrine without questioning it; \n                        Ex. indoctrinated with mindless anti-communism",
      term: "indoctrinate",
    },
    {
      definition: "lazy",
      term: "indolent",
    },
    {
      definition: "unconquerable; unyielding",
      term: "indomitable",
    },
    {
      definition:
        "unable to be doubted; which cannot be doubted; unquestionable",
      term: "indubitable",
    },
    {
      definition: "persuade; lead to do something; bring about; N. inducement",
      term: "induce",
    },
    {
      definition:
        "place formally in office; install; admit as a member; \n                        initiate; N. induction: inducting; process of deriving \n                        general principles from particular facts",
      term: "induct",
    },
    {
      definition:
        "pertaining to induction or proceeding from the specific \n                        to the general",
      term: "inductive",
    },
    {
      definition:
        "yield to; gratify; allow oneself a special pleasure; \n                        Ex. indulge one's every whim/a child/in a big cigarette; \n                        N. indulgence",
      term: "indulge",
    },
    {
      definition: "humoring; yielding; lenient; showing indulgence",
      term: "indulgent",
    },
    {
      definition: "diligent; hard-working; N. industry",
      term: "industrious",
    },
    {
      definition: "make drunk; intoxicate; N. intoxicated person",
      term: "inebriate",
    },
    {
      definition: "habitually intoxicated; drunk; N. inebriety",
      term: "inebriated",
    },
    {
      definition:
        "unutterable; not to be uttered; taboo; that cannot \n                        be expressed in speech; indescribable; unspeakable; inexpressible; \n                        Ex. ineffable name/joy",
      term: "ineffable",
    },
    {
      definition: "not effective; not having a desired effect; weak",
      term: "ineffectual",
    },
    {
      definition: "irresistible; not to be escaped; unavoidable",
      term: "ineluctable",
    },
    {
      definition:
        "unsuited; inappropriate; lacking skill; incompetent; \n                        CF. inapt: (of statements or ideas) inappropriate",
      term: "inept",
    },
    {
      definition: "unfairness; ADJ. inequitable",
      term: "inequity",
    },
    {
      definition: "infallibility",
      term: "inerrancy",
    },
    {
      definition:
        "inactive; lacking power to move; unable to move or \n                        act; Ex. chemically inert; N. inertia: state of being \n                        inert; force which keeps a thing in the position or state",
      term: "inert",
    },
    {
      definition:
        "impossible to estimate; (apprec) invaluable; of immeasurable \n                        worth",
      term: "inestimable",
    },
    {
      definition: "unavoidable",
      term: "inevitable",
    },
    {
      definition:
        "relentless; unyielding; implacable; not capable of \n                        being changed by entreaty or efforts; Ex. inexorable price \n                        rises",
      term: "inexorable",
    },
    {
      definition:
        "from which it is impossible to get free; that cannot \n                        be untied; Ex. inextricable troubles; Ex. inextricable \n                        two histories",
      term: "inextricable",
    },
    {
      definition: "unerring; never making mistakes",
      term: "infallible",
    },
    {
      definition:
        "notoriously bad; notorious; well known for being bad; \n                        Ex. infamous behavior; N: infamy: infamous act; evil fame \n                        or reputation",
      term: "infamous",
    },
    {
      definition: "childish; infantlike",
      term: "infantile",
    },
    {
      definition: "deduce; conclude; N. inference",
      term: "infer",
    },
    {
      definition:
        "pertaining to hell; devilish; N. inferno: place of \n                        fiery heat or destruction",
      term: "infernal",
    },
    {
      definition:
        "inhabit in numbers large enough to be harmful; Ex. \n                        Mice infested the house; Ex. shark-infested waters",
      term: "infest",
    },
    {
      definition: "unbeliever (with respect to a particular religion)",
      term: "infidel",
    },
    {
      definition:
        "pass into or through; penetrate or enter (an organization) \n                        sneakily; Ex. infiltrate the troops into enemy territory; \n                        CF. infiltrator",
      term: "infiltrate",
    },
    {
      definition: "very small",
      term: "infinitesimal",
    },
    {
      definition: "weakness",
      term: "infirmity",
    },
    {
      definition: "exaggerated; pompous; enlarged (with air or gas)",
      term: "inflated",
    },
    {
      definition: "flowing into",
      term: "influx",
    },
    {
      definition: "violation (of a rule or regulation); breach",
      term: "infraction",
    },
    {
      definition: "violate (a law); encroach (the right of another person)",
      term: "infringe",
    },
    {
      definition:
        "marked by inventive skill; clever; resourceful; N. \n                        ingenuity",
      term: "ingenious",
    },
    {
      definition: "ing\\'enue; young innocent girl",
      term: "ingenue",
    },
    {
      definition: "naive and trusting; young; unsophisticated; candid",
      term: "ingenuous",
    },
    {
      definition:
        "deeply established; firmly rooted; Ex. ingrained dirt/prejudice",
      term: "ingrained",
    },
    {
      definition: "ungrateful person (not expressing thanks)",
      term: "ingrate",
    },
    {
      definition:
        "become popular with; bring (oneself) in favor of another; \n                        Ex. ingratiate himself with the boss",
      term: "ingratiate",
    },
    {
      definition: "firmly established by nature or habit; intrinsic",
      term: "inherent",
    },
    {
      definition: "restrain; prohibit; retard or prevent; N. inhibition",
      term: "inhibit",
    },
    {
      definition: "(of a person) unable to express what one really feels",
      term: "inhibited",
    },
    {
      definition:
        "(of someone) unfriendly; hostile; (of something) harmful; \n                        detrimental; CF. enemy",
      term: "inimical",
    },
    {
      definition: "matchless; not able to be imitated",
      term: "inimitable",
    },
    {
      definition:
        "wicked; immoral; unrighteous; N. iniquity; Ex. den \n                        of iniquity",
      term: "iniquitous",
    },
    {
      definition:
        "begin; originate; receive into a group; introduce to \n                        a new field or activity; Ex. initiate someone into the \n                        mysteries of a secret religion; N: one who has been initiated",
      term: "initiate",
    },
    {
      definition: "harmful; causing injury",
      term: "injurious",
    },
    {
      definition: "hint; slight indication",
      term: "inkling",
    },
    {
      definition: "inborn",
      term: "innate",
    },
    {
      definition: "harmless",
      term: "innocuous",
    },
    {
      definition:
        "change; something newly introduced; introduction of \n                        something new; V. innovate: begin or introduce (something \n                        new); be creative; ADJ. innovative",
      term: "innovation",
    },
    {
      definition:
        "indirect or subtle (derogatory) hint; insinuation; \n                        Ex. sexual innuendo",
      term: "innuendo",
    },
    {
      definition: "untimely; inappropriate or ill-timed; poorly chosen",
      term: "inopportune",
    },
    {
      definition:
        "beyond reasonable limits; unrestrained; excessive; \n                        Ex. inordinate demands",
      term: "inordinate",
    },
    {
      definition: "eager for knowledge; unduly curious",
      term: "inquisitive",
    },
    {
      definition:
        "questioner (especially harsh); investigator; person \n                        making an inquisition",
      term: "inquisitor",
    },
    {
      definition:
        "hostile invasion; advance that lessens the quantity \n                        or difficulty of something; Ex. The long illness made \n                        serious inroads on his savings; CF. raid",
      term: "inroad",
    },
    {
      definition: "unwholesome; not healthful; Ex. insalubrious place",
      term: "insalubrious",
    },
    {
      definition:
        "not easily satisfied; unquenchable; Ex. insatiable \n                        appetite",
      term: "insatiable",
    },
    {
      definition:
        "difficult to understand; impenetrable; not readily \n                        understood; mysterious",
      term: "inscrutable",
    },
    {
      definition: "without feeling; lacking sense; foolish",
      term: "insensate",
    },
    {
      definition:
        "unconscious; unresponsive; insensitive; unaware; imperceptible; \n                        Ex. insensible of his danger/to pain; Ex. insensible change; \n                        CF. not the opposite of sensible",
      term: "insensible",
    },
    {
      definition:
        "treacherous; stealthy; sly; working or spreading harmfully \n                        in a stealthy manner; Ex. insidious spreading of dry rot",
      term: "insidious",
    },
    {
      definition: "discerning; perceptive",
      term: "insightful",
    },
    {
      definition:
        "hint; imply; suggest indirectly; creep in; introduce \n                        or insert (oneself) by artful means; Ex. insinuate himself \n                        into the boss's favor; CF. ingratiate",
      term: "insinuate",
    },
    {
      definition:
        "lacking in flavor; lacking interest; dull; Ex. insipid \n                        food/character",
      term: "insipid",
    },
    {
      definition:
        "impudent disrespect; haughtiness; ADJ. insolent; CF. \n                        haughty + rude",
      term: "insolence",
    },
    {
      definition: "bankrupt; lacking money to pay; N. insolvency",
      term: "insolvent",
    },
    {
      definition: "wakefulness; inability to sleep",
      term: "insomnia",
    },
    {
      definition: "without concern or care; unconcerned; indifferent",
      term: "insouciant",
    },
    {
      definition:
        "start; urge; provoke; incite; Ex. instigate a search/quarrel",
      term: "instigate",
    },
    {
      definition: "organization for a special purpose; V: establish",
      term: "institute",
    },
    {
      definition:
        "instituting; (building for the) organization; established \n                        custom, practice, or relationship in a society; mental \n                        hospital; Ex. institution of marriage",
      term: "institution",
    },
    {
      definition: "make into an institution; put or confine in an institution",
      term: "institutionalize",
    },
    {
      definition: "disobedience; rebelliousness; ADJ. insubordinate",
      term: "insubordination",
    },
    {
      definition: "lacking substance; insignificant; frail; immaterial",
      term: "insubstantial",
    },
    {
      definition:
        "narrow-mindedness; isolation; ADJ. insular: of an island; \n                        isolated; narrow-minded; CF. peninsula",
      term: "insularity",
    },
    {
      definition: "insurmountable; unbeatable; Ex. insuperable difficulties",
      term: "insuperable",
    },
    {
      definition: "rebellious; N.",
      term: "insurgent",
    },
    {
      definition: "overwhelming; unbeatable; insuperable",
      term: "insurmountable",
    },
    {
      definition: "rebellion; uprising",
      term: "insurrection",
    },
    {
      definition: "not able to be perceived by touch; vague",
      term: "intangible",
    },
    {
      definition:
        "complete; necessary for completeness; Ex. integral \n                        part",
      term: "integral",
    },
    {
      definition: "make whole; combine; make into one unit",
      term: "integrate",
    },
    {
      definition:
        "honesty; uprightness; wholeness; state of being whole \n                        and undivided; completeness",
      term: "integrity",
    },
    {
      definition:
        "higher mental powers; person of great intellectual \n                        ability",
      term: "intellect",
    },
    {
      definition:
        "intellectuals; members of the educated elite (often \n                        used derogatorily)",
      term: "intelligentsia",
    },
    {
      definition: "bury; N. interment",
      term: "inter",
    },
    {
      definition: "prohibit; forbid; N.",
      term: "interdict",
    },
    {
      definition:
        "meantime; Ex. in the interim; ADJ. taking place during \n                        an interim; Ex. interim paper",
      term: "interim",
    },
    {
      definition: "exclamation; Ex. ``Ouch''",
      term: "interjection",
    },
    {
      definition: "intruder; one who interferes",
      term: "interloper",
    },
    {
      definition: "intermediate; acting as a mediator; N: mediator; go-between",
      term: "intermediary",
    },
    {
      definition: "endless",
      term: "interminable",
    },
    {
      definition: "periodic; on and off; stopping and starting at intervals",
      term: "intermittent",
    },
    {
      definition: "mutually destructive",
      term: "internecine",
    },
    {
      definition: "insert between",
      term: "interpolate",
    },
    {
      definition: "period between two successive reigns or governments",
      term: "interregnum",
    },
    {
      definition: "question closely; cross-examine; cross-question",
      term: "interrogate",
    },
    {
      definition: "narrow space between things",
      term: "interstice",
    },
    {
      definition:
        "come between; interfere; Ex. intervened to prevent \n                        a fight; N. intervention",
      term: "intervene",
    },
    {
      definition:
        "hint; suggest; imply; ADJ: marked by close relationship; \n                        familiar; private; personal; Ex. intimate knowledge/thoughts \n                        in the diary; N: close friend or confidant; CF. intimacy",
      term: "intimate",
    },
    {
      definition: "frighten; N. intimidation",
      term: "intimidate",
    },
    {
      definition:
        "not willing to accept ways of thinking different from \n                        one's own; CF. tolerant; CF. tolerate",
      term: "intolerant",
    },
    {
      definition:
        "make drunk; stimulate or excite; Ex. intoxicated by \n                        all the money he might win",
      term: "intoxicate",
    },
    {
      definition: "unruly; difficult to manage; Ex. intractable problem/child",
      term: "intractable",
    },
    {
      definition:
        "refusal of any compromise; stubbornness; ADJ. intransigent: \n                        uncompromising",
      term: "intransigence",
    },
    {
      definition: "fearless",
      term: "intrepid",
    },
    {
      definition:
        "make secret plans; plot; arouse the curiosity of; N: \n                        secret scheme; plot; secret love affair",
      term: "intrigue",
    },
    {
      definition: "essential; inherent; built-in",
      term: "intrinsic",
    },
    {
      definition: "looking within oneself; N. introspection: self-examination",
      term: "introspective",
    },
    {
      definition:
        "one who is introspective or inclined to think more \n                        about oneself; ADJ. introverted",
      term: "introvert",
    },
    {
      definition:
        "put or force in without being asked; trespass; enter \n                        as an uninvited person; Ex. intrude one's own opinion \n                        into the report; CF. thrust in",
      term: "intrude",
    },
    {
      definition:
        "immediate insight; power of knowing without reasoning; \n                        ADJ. intuitive; V. intuit: know by intuition",
      term: "intuition",
    },
    {
      definition:
        "flood; overflow; submerge; cover completely; Ex. inundated \n                        with work",
      term: "inundate",
    },
    {
      definition:
        "accustomed; hardened; Ex. inured to the Alaskan cold; \n                        V. inure: make used to something undesirable; harden; \n                        CF. unfeeling",
      term: "inured",
    },
    {
      definition:
        "one incapacitated(disabled) by a chronic illness; ADJ: \n                        incapacitated by illness; not valid; null; V: allow to \n                        leave (a military force) because of ill-health",
      term: "invalid",
    },
    {
      definition: "weaken; destroy; make invalid; nullify",
      term: "invalidate",
    },
    {
      definition: "abuse",
      term: "invective",
    },
    {
      definition:
        "denounce; utter censure or invective; Ex. inveigh against \n                        the evils of drink",
      term: "inveigh",
    },
    {
      definition:
        "deceive; lead astray by deception; wheedle(cajole); \n                        Ex. inveigle her into joining the club; CF. interest dishonestly",
      term: "inveigle",
    },
    {
      definition: "opposite",
      term: "inverse",
    },
    {
      definition:
        "turn upside down or inside out; reverse the position \n                        or condition of",
      term: "invert",
    },
    {
      definition: "deep-rooted; habitual; CF. grow old",
      term: "inveterate",
    },
    {
      definition:
        "designed to create ill will or envy; tending to rouse \n                        ill will or envy; Ex. invidious comparison",
      term: "invidious",
    },
    {
      definition: "unconquerable",
      term: "invincible",
    },
    {
      definition:
        "secure from corruption, attack, or violation(or profanation); \n                        unassailable; Ex. inviolable oath/rights; N. inviolability",
      term: "inviolable",
    },
    {
      definition:
        "prayer for help (used in invoking); calling upon as \n                        a reference or support; act of invoking",
      term: "invocation",
    },
    {
      definition:
        "call and bring into use (a right or law); call on/upon \n                        (a higher power or god) for help; ask for; beg for; conjure \n                        (a spirit); Ex. invoke the veto power; Ex. invoke one's \n                        advisor/God",
      term: "invoke",
    },
    {
      definition: "incapable of injury; impossible to damage or injure",
      term: "invulnerable",
    },
    {
      definition: "very small quantity",
      term: "iota",
    },
    {
      definition: "irritable; easily angered",
      term: "irascible",
    },
    {
      definition: "angry; CF. ire: anger; wrath",
      term: "irate",
    },
    {
      definition:
        "exhibiting rainbowlike colors; Ex. iridescent oil slick; \n                        N. iridescence",
      term: "iridescent",
    },
    {
      definition: "annoying; tedious; V. irk: annoy",
      term: "irksome",
    },
    {
      definition:
        "expressing irony; occurring in an unexpected and contrary \n                        manner",
      term: "ironic",
    },
    {
      definition:
        "hidden sarcasm or satire; use of words that seem to \n                        mean the opposite of what they actually mean; use of words \n                        to convey the opposite of their literal meaning",
      term: "irony",
    },
    {
      definition:
        "impossible to reconcile; incompatible; not able to \n                        be resolved",
      term: "irreconcilable",
    },
    {
      definition: "indisputable; incontrovertible; undeniable",
      term: "irrefutable",
    },
    {
      definition: "not applicable; unrelated",
      term: "irrelevant",
    },
    {
      definition: "incurable; uncorrectable; impossible to remedy",
      term: "irremediable",
    },
    {
      definition:
        "not able to be corrected or repaired; impossible to \n                        repair",
      term: "irreparable",
    },
    {
      definition:
        "unable to be restrained or held back; impossible to \n                        hold back",
      term: "irrepressible",
    },
    {
      definition:
        "beyond reproach; blameless; impeccable; Ex. irreproachable \n                        conduct",
      term: "irreproachable",
    },
    {
      definition:
        "uncertain how to act; weak; lacking in resolution; \n                        indecisive; N. irresolution",
      term: "irresolute",
    },
    {
      definition: "impossible to recover or regain; CF. retrieve",
      term: "irretrievable",
    },
    {
      definition: "lack of proper respect or reverence; ADJ. irreverent",
      term: "irreverence",
    },
    {
      definition: "unalterable; irreversible; impossible to revoke",
      term: "irrevocable",
    },
    {
      definition: "varying from of an element",
      term: "isotope",
    },
    {
      definition:
        "narrow neck of land connecting two larger bodies of \n                        land",
      term: "isthmus",
    },
    {
      definition:
        "wandering; traveling from place to place (to perform \n                        work); Ex. itinerant preacher",
      term: "itinerant",
    },
    {
      definition: "plan of a trip; record of a trip",
      term: "itinerary",
    },
    {
      definition: "mob; noisy crowd",
      term: "rabble",
    },
    {
      definition:
        "of or suffering rabies; like a fanatic; extremely zealous; \n                        furious; CF. rabies: hydrophobia",
      term: "rabid",
    },
    {
      definition:
        "disease passed on by the bite of an infected animal \n                        (causing madness and death)",
      term: "rabies",
    },
    {
      definition: "story-teller; one who tells stories with wit and skill",
      term: "raconteur",
    },
    {
      definition:
        "lottery; V: award as a prize in a raffle; Ex. raffle \n                        off a new car",
      term: "raffle",
    },
    {
      definition:
        "scrap of cloth; ADJ. ragged: old and torn; seeming \n                        unfinished and imperfect; Ex. ragged debut/performance",
      term: "rag",
    },
    {
      definition:
        "dirty child in torn clothes; person wearing tattered \n                        clothes",
      term: "ragamuffin",
    },
    {
      definition:
        "complain bitterly; scold; rant; Ex. the weaker railing \n                        against injustices",
      term: "rail",
    },
    {
      definition: "clothing; garments; Ex. I have no raiment fit to wear.",
      term: "raiment",
    },
    {
      definition: "immoral or dissolute person",
      term: "rake",
    },
    {
      definition:
        "jaunty; stylish; sporty; morally corrupt; dissolute; \n                        Ex. He wore his hat at a rakish and jaunty angle.",
      term: "rakish",
    },
    {
      definition:
        "come or bring together; call up or summon (forces, \n                        vital powers, etc.); revive or recuperate (after illness \n                        or difficulty); N: act of rallying; mass gathering",
      term: "rally",
    },
    {
      definition:
        "male sheep; V. strike or drive against with a heavy \n                        impact",
      term: "ram",
    },
    {
      definition: "wander aimlessly (physically or mentally); digress",
      term: "ramble",
    },
    {
      definition:
        "branching out; subdivision; one branch of a system; \n                        one of the results following from an action or decision; \n                        Ex. ramifications of a business/the decision",
      term: "ramification",
    },
    {
      definition: "branch out; divide into branches or subdivisions",
      term: "ramify",
    },
    {
      definition: "slope; inclined plane or roadway (connecting two levels)",
      term: "ramp",
    },
    {
      definition:
        "growing or spreading uncontrollably; growing in profusion; \n                        unrestrained; Ex. rampant lawlessness/weed",
      term: "rampant",
    },
    {
      definition: "defensive mound of earth",
      term: "rampart",
    },
    {
      definition:
        "(of a building or vehicle) poorly constructed; rickety; \n                        falling apart",
      term: "ramshackle",
    },
    {
      definition: "having the odor of stale or decomposing fat; rank",
      term: "rancid",
    },
    {
      definition:
        "long-lasting hatred; bitterness; Ex. negotiation without \n                        rancor; ADJ. rancorous",
      term: "rancor",
    },
    {
      definition:
        "without definite purpose, plan, or aim; haphazard; \n                        Ex. random shots; Ex. chosen at random",
      term: "random",
    },
    {
      definition: "offensive in odor or flavor",
      term: "rank",
    },
    {
      definition: "irritate; fester; annoy",
      term: "rankle",
    },
    {
      definition:
        "search thoroughly; pillage (going through a place); \n                        Ex. Enemy soldiers ransacked the town.",
      term: "ransack",
    },
    {
      definition:
        "speak violently or excitedly; rave; talk excitedly \n                        showing anger; scold; make a grandiloquent speech; Ex. \n                        The priest ranted about the devil.",
      term: "rant",
    },
    {
      definition:
        "voracious; ravenous; taking everything one can; excessively \n                        grasping; plundering; subsisting on live prey; Ex. rapacious \n                        birds",
      term: "rapacious",
    },
    {
      definition: "close relationship; emotional closeness; harmony",
      term: "rapport",
    },
    {
      definition: "engrossed; absorbed; enchanted; Ex. rapt listener",
      term: "rapt",
    },
    {
      definition: "great joy and delight; ecstasy; ADJ. rapturous",
      term: "rapture",
    },
    {
      definition:
        "(of air) thin in density; rarefied; Ex. rare air of \n                        the mountains",
      term: "rare",
    },
    {
      definition:
        "made less dense (of a gas); V. rarefy: make less dense; \n                        N. rarefaction",
      term: "rarefied",
    },
    {
      definition:
        "(of a sound) grate on (eg. nerves); make a harsh noise; \n                        have an unpleasant effect; rub with something rough; Ex. \n                        The cat's tongue rasped my hand.",
      term: "rasp",
    },
    {
      definition: "making a harsh noise; grating; harsh",
      term: "raspy",
    },
    {
      definition: "approve formally; confirm; verify",
      term: "ratify",
    },
    {
      definition:
        "reasoning; act of drawing conclusions from premises; \n                        V. ratiocinate: reason logically",
      term: "ratiocination",
    },
    {
      definition: "fixed portion; V: distribute as rations",
      term: "ration",
    },
    {
      definition:
        "(of a person) having reason; (of ideas) based on reason; \n                        logical",
      term: "rational",
    },
    {
      definition:
        "fundamental reason or principle (on which a system \n                        or principle is based); fundamental reason or justification; \n                        grounds for an action",
      term: "rationale",
    },
    {
      definition:
        "make rational; devise false reasons for (one's behavior); \n                        offer an excuse; give a plausible reason for an action \n                        in place of a true, less admirable ones; N. rationalization",
      term: "rationalize",
    },
    {
      definition:
        "(of voice) harsh and unpleasant; (of people) disorderly \n                        and boisterous; Ex. raucous shouts",
      term: "raucous",
    },
    {
      definition: "devastate; plunder; despoil; Ex. crops ravaged by storms",
      term: "ravage",
    },
    {
      definition:
        "overwhelmingly favorable review; V: talk wildly as \n                        if mad; Ex. raving lunatic",
      term: "rave",
    },
    {
      definition: "fall apart into tangles; entangle; unravel or untwist",
      term: "ravel",
    },
    {
      definition: "extremely hungry; voracious",
      term: "ravenous",
    },
    {
      definition: "narrow valley with steep sides; gorge; CF. gully, canyon",
      term: "ravine",
    },
    {
      definition: "destroy completely; Ex. raze the city to the ground",
      term: "raze",
    },
    {
      definition:
        "strongly opposed to social or political change; opposing \n                        progress; politically ultraconservative; N. OP. radical",
      term: "reactionary",
    },
    {
      definition:
        "kingdom; field or sphere; Ex. not within the realms \n                        of possibility",
      term: "realm",
    },
    {
      definition:
        "one who harvests grain; Ex. the Grim Reaper; V. reap: \n                        cut and gather (crop); harvest a crop",
      term: "reaper",
    },
    {
      definition: "return of part of a payment; discount; V.",
      term: "rebate",
    },
    {
      definition:
        "reject bluntly; snub; beat back; Ex. She rebuffed his \n                        invitation; N.",
      term: "rebuff",
    },
    {
      definition: "scold harshly; criticize severely",
      term: "rebuke",
    },
    {
      definition:
        "representation of words in the form of pictures or \n                        symbols; puzzle in which pictures or letters stand for \n                        words; Ex. ``R U 18'' is a rebus for ``Are you 18''.",
      term: "rebus",
    },
    {
      definition:
        "refutation; response with contrary evidence; V. rebut: \n                        refute; disprove",
      term: "rebuttal",
    },
    {
      definition:
        "disobedient or resisting authority even after being \n                        punished; obstinately stubborn; determined to resist authority; \n                        unruly; Ex. recalcitrant child",
      term: "recalcitrant",
    },
    {
      definition:
        "disclaim or disavow; retract a previous statement; \n                        openly confess error; Ex. recant one's faith/a statement",
      term: "recant",
    },
    {
      definition: "summarize",
      term: "recapitulate",
    },
    {
      definition:
        "reconstruct (a sentence, story, statue, etc.); fashion \n                        again",
      term: "recast",
    },
    {
      definition:
        "quick or willing to receive (ideas, suggestions, etc.); \n                        Ex. receptive to the proposal",
      term: "receptive",
    },
    {
      definition:
        "pause; temporary cessation; alcove; secret inner place; \n                        Ex. parliament in recess; V. CF. recessive",
      term: "recess",
    },
    {
      definition: "withdrawal; retreat; time of low economic activity",
      term: "recession",
    },
    {
      definition:
        "habitual return to crime (even after being punished); \n                        N. recidivist",
      term: "recidivism",
    },
    {
      definition: "receiver",
      term: "recipient",
    },
    {
      definition:
        "mutual; given and received in return; exchangeable; \n                        interacting; Ex. reciprocal trade agreement",
      term: "reciprocal",
    },
    {
      definition:
        "do or give something in return; repay in kind; give \n                        or take mutually; interchange; move",
      term: "reciprocate",
    },
    {
      definition:
        "act of reciting publicly; detailed account; performance \n                        of music or dance (by a solo performer)",
      term: "recital",
    },
    {
      definition:
        "repeat aloud (something learned); describe; Ex. recite \n                        his complaints; N. recitation",
      term: "recite",
    },
    {
      definition: "count; calculate; regard as; think; suppose",
      term: "reckon",
    },
    {
      definition: "lie down",
      term: "recline",
    },
    {
      definition: "hermit; loner; ADJ. reclusive",
      term: "recluse",
    },
    {
      definition:
        "make friendly again (after quarrel); make consistent \n                        (two ideas in opposition); correct inconsistencies; Ex. \n                        reconcile one's political principles with one's religious \n                        beliefs",
      term: "reconcile",
    },
    {
      definition: "abstruse; not easily understood; profound; secret",
      term: "recondite",
    },
    {
      definition:
        "survey of enemy by soldiers; reconnoitering; V. reconnoiter: \n                        make a preliminary inspection of (esp. to gather military \n                        information)",
      term: "reconnaissance",
    },
    {
      definition: "narrate or tell (a story); count over again",
      term: "recount",
    },
    {
      definition:
        "resorting to help when in trouble; Ex. without recourse \n                        to",
      term: "recourse",
    },
    {
      definition: "disloyal; cowardly; N: disloyal and cowardly person",
      term: "recreant",
    },
    {
      definition: "countercharges; V. recriminate",
      term: "recrimination",
    },
    {
      definition: "set right; correct; CF. rect-: right",
      term: "rectify",
    },
    {
      definition:
        "moral correctness; moral uprightness; moral virtue; \n                        correctness of judgment",
      term: "rectitude",
    },
    {
      definition: "reclining; lying down completely or in part",
      term: "recumbent",
    },
    {
      definition: "recover; return to health; regain; Ex. recuperate losses",
      term: "recuperate",
    },
    {
      definition: "occurring again and again",
      term: "recurrent",
    },
    {
      definition:
        "odorous; fragrant; suggestive (of an odor); Ex. redolent \n                        of onions/mystery",
      term: "redolent",
    },
    {
      definition: "formidable; causing fear",
      term: "redoubtable",
    },
    {
      definition:
        "remedy; compensation; Ex. seek redress for the damage \n                        to your car; V: put right; remedy or rectify (a wrong); \n                        make amends for",
      term: "redress",
    },
    {
      definition:
        "diminish; bring to a weaker or more difficult condition; \n                        demote; lower in rank; separate into components by analysis; \n                        Ex. reduced to the ranks; Ex. reduce the house to rubble; \n                        N. reduction",
      term: "reduce",
    },
    {
      definition:
        "superfluous; more than is necessary; verbose; excessively \n                        wordy; repetitious",
      term: "redundant",
    },
    {
      definition:
        "emit (an unpleasant odor or smoke); give off an unpleasant \n                        odor; give out smoke; Ex. reeking chimney; N: unpleasant \n                        odor; stench",
      term: "reek",
    },
    {
      definition: "dining hall; room where meals are served (in a school)",
      term: "refectory",
    },
    {
      definition: "direct vote by all the people",
      term: "referendum",
    },
    {
      definition: "bending of a ray of light",
      term: "refraction",
    },
    {
      definition:
        "unmanageable; disobedient and stubborn; Ex. refractory \n                        horse",
      term: "refractory",
    },
    {
      definition: "abstain from; resist; forbear; N: chorus",
      term: "refrain",
    },
    {
      definition:
        "effulgent; brilliant; brightly shining; gleaming; Ex. \n                        refulgent moon",
      term: "refulgent",
    },
    {
      definition:
        "renovate; make clean, bright, or fresh (make new) again; \n                        make bright by polishing; Ex. refurbish an old theater; \n                        CF. furbish: polish",
      term: "refurbish",
    },
    {
      definition: "anything discarded or rejected as worthless; trash",
      term: "refuse",
    },
    {
      definition: "disprove; prove to be false; N. refutation",
      term: "refute",
    },
    {
      definition: "royal; of a monarch; Ex. regal manner",
      term: "regal",
    },
    {
      definition: "entertain",
      term: "regale",
    },
    {
      definition: "boat or yacht race",
      term: "regatta",
    },
    {
      definition:
        "spiritual rebirth; Ex. regeneration of the prisoners; \n                        V. regenerate: give or obtain new life; reform spiritually",
      term: "regeneration",
    },
    {
      definition:
        "a person who governs in place of a ruler who is ill, \n                        absent, or still a child; ADJ. Ex. the Prince regent",
      term: "regent",
    },
    {
      definition: "murder of a king or queen",
      term: "regicide",
    },
    {
      definition: "method of system or government",
      term: "regime",
    },
    {
      definition:
        "prescribed course of diet or exercise; prescribed diet \n                        and habits; Ex. daily regimen of a dancer",
      term: "regimen",
    },
    {
      definition:
        "military unit; V: subject to strict order; Ex. regimented \n                        society",
      term: "regiment",
    },
    {
      definition:
        "restore to proper condition (health or useful life); \n                        restore the former rank of",
      term: "rehabilitate",
    },
    {
      definition: "repay; pay back",
      term: "reimburse",
    },
    {
      definition: "restore to a previous condition or position",
      term: "reinstate",
    },
    {
      definition: "repeat",
      term: "reiterate",
    },
    {
      definition: "reply; retort; comeback; V. rejoin: say in reply",
      term: "rejoinder",
    },
    {
      definition: "make young again",
      term: "rejuvenate",
    },
    {
      definition:
        "return to a former state (esp. after improvement); \n                        N.",
      term: "relapse",
    },
    {
      definition:
        "put into a lower or worse place; banish to an inferior \n                        position; delegate; assign; Ex. relegate the old furniture \n                        to the children's room; Ex. relegated to the second division",
      term: "relegate",
    },
    {
      definition:
        "become less severe; give in(surrender); ADJ. relentless: \n                        unyielding; continuously severe",
      term: "relent",
    },
    {
      definition:
        "having importance; pertinent; referring to the case \n                        in hand; N. relevance, relevancy",
      term: "relevant",
    },
    {
      definition:
        "surviving remnant (from an extinct culture); memento; \n                        keepsake; relics: corpse; Ex. ancient relics; Ex. relics \n                        of his travel; Ex. His relics are buried at X.",
      term: "relic",
    },
    {
      definition:
        "of religion; (of a person) pious; having reverence \n                        for a deity",
      term: "religious",
    },
    {
      definition:
        "give up something (with reluctance); yield; release; \n                        Ex. relinquish power/the claim to the land/his hold on \n                        my arm",
      term: "relinquish",
    },
    {
      definition: "enjoy; savor; N: enjoyment; zest",
      term: "relish",
    },
    {
      definition: "reparable",
      term: "remediable",
    },
    {
      definition: "recollection; V. reminisce: recollect the past",
      term: "reminiscence",
    },
    {
      definition: "suggestive of something (in the past); of reminiscence",
      term: "reminiscent",
    },
    {
      definition: "negligent; careless about a duty",
      term: "remiss",
    },
    {
      definition:
        "temporary moderation (of disease symptoms); remitting \n                        of a debt or punishment; cancelation of a debt; pardon; \n                        Ex. The disease went into remission; Ex. Christians pray \n                        for the remission of sins.",
      term: "remission",
    },
    {
      definition:
        "transmit (money) in payment; free someone from a debt \n                        or punishment",
      term: "remit",
    },
    {
      definition: "remitting of money; amount of money remitted",
      term: "remittance",
    },
    {
      definition: "remainder",
      term: "remnant",
    },
    {
      definition: "protest; objection; V. remonstrate: say in protest",
      term: "remonstrate",
    },
    {
      definition: "deep regret for wrongdoing; guilt; self-reproach",
      term: "remorse",
    },
    {
      definition:
        "(of work) compensating; rewarding; profitable; well-paid; \n                        V. remunerate: reward; pay (someone) for work or trouble",
      term: "remunerative",
    },
    {
      definition:
        "split; tear apart; N. rent; CF. heartrending: causing \n                        deep sorrow",
      term: "rend",
    },
    {
      definition:
        "give; deliver; provide; represent in verbal or artistic \n                        form; depict; perform; make; translate; Ex. render the \n                        song beautifully",
      term: "render",
    },
    {
      definition: "meeting place; meeting at a set time or place; V.",
      term: "rendezvous",
    },
    {
      definition:
        "rendering; translation; artistic interpretation of \n                        a song, etc",
      term: "rendition",
    },
    {
      definition: "deserter; traitor; ADJ.",
      term: "renegade",
    },
    {
      definition:
        "break a promise; deny; go back on; Ex. renege on the \n                        contract/paying off the debt",
      term: "renege",
    },
    {
      definition:
        "abandon; give up (by formal announcement); disown; \n                        repudiate; Ex. renounce one's claim to the property/one's \n                        religion; N. renunciation",
      term: "renounce",
    },
    {
      definition: "restore to good condition; renew",
      term: "renovate",
    },
    {
      definition: "fame; ADJ. renowned",
      term: "renown",
    },
    {
      definition: "tear made by rending; rip; split",
      term: "rent",
    },
    {
      definition: "capable of being repaired",
      term: "reparable",
    },
    {
      definition:
        "compensation (for loss or wrong); amends; Ex. make \n                        reparation for the damage; CF. repair",
      term: "reparation",
    },
    {
      definition: "quick clever reply",
      term: "repartee",
    },
    {
      definition: "meal; feast; banquet",
      term: "repast",
    },
    {
      definition: "revoke; annul",
      term: "repeal",
    },
    {
      definition:
        "drive away; disgust; Ex. repel the attack/moisture; \n                        Ex. repelled by the dirty room; CF. repulsion",
      term: "repel",
    },
    {
      definition:
        "driving away; disgusting; offensive; repulsive; unattractive; \n                        N.",
      term: "repellent",
    },
    {
      definition: "rebound; reaction; reverberation; Ex. serious repercussion",
      term: "repercussion",
    },
    {
      definition:
        "list of works of music, drama, etc., a performer is \n                        prepared to present; CF. repertory",
      term: "repertoire",
    },
    {
      definition:
        "fret; complain; be annoyed; Ex. repine over the undone \n                        work",
      term: "repine",
    },
    {
      definition: "fill up again",
      term: "replenish",
    },
    {
      definition:
        "fully filled; filled to the brim or to the point of \n                        being stuffed; abundantly supplied; Ex. report replete \n                        with errors",
      term: "replete",
    },
    {
      definition: "copy",
      term: "replica",
    },
    {
      definition: "reproduce; duplicate",
      term: "replicate",
    },
    {
      definition:
        "resting; state of being at rest; calmness; V: lie at \n                        rest; relax; put or place; Ex. repose our hopes in a single \n                        man",
      term: "repose",
    },
    {
      definition: "storehouse",
      term: "repository",
    },
    {
      definition: "deserving blame; blameworthy; V. reprehend: blame",
      term: "reprehensible",
    },
    {
      definition:
        "(of a style of art) showing things as they actually \n                        appear in real life",
      term: "representational",
    },
    {
      definition:
        "hold back (the natural expression of); restrain; crush; \n                        oppress; Ex. repressed child; Ex. repress a laugh/rebellion",
      term: "repress",
    },
    {
      definition:
        "postponement or cancelation of a punishment; temporary \n                        stay; V: postpone or cancel the punishment of",
      term: "reprieve",
    },
    {
      definition: "reprove severely; rebuke; N.",
      term: "reprimand",
    },
    {
      definition: "retaliation",
      term: "reprisal",
    },
    {
      definition:
        "musical repetition; repeating of a piece of music; \n                        repeat performance; recurrent action; Ex. reprise in the \n                        finale; Ex. constant reprises",
      term: "reprise",
    },
    {
      definition:
        "blame (not angrily but sadly); express disapproval \n                        or disappointment; N. ADJ. reproachful",
      term: "reproach",
    },
    {
      definition:
        "morally disapproved person; person hardened in sin, \n                        devoid of a sense of decency; CF. disapproved by God ?",
      term: "reprobate",
    },
    {
      definition: "severe disapproval; CF. approbation",
      term: "reprobation",
    },
    {
      definition: "censure; rebuke; N. reproof",
      term: "reprove",
    },
    {
      definition: "disown; disavow; deny",
      term: "repudiate",
    },
    {
      definition:
        "disgust; strong dislike; loathing; ADJ. repugnant: \n                        arousing disgust; repulsive",
      term: "repugnance",
    },
    {
      definition:
        "reject with rudeness or coldness (an offer or friendship); \n                        drive back (an enemy attack); CF. repulse $\neq$ cause \n                        repulsion",
      term: "repulse",
    },
    {
      definition:
        "distaste; disgust; act of driving back; ADJ. repulsive: \n                        causing disgust; tending to drive away; V. repel (not \n                        `repulse')",
      term: "repulsion",
    },
    {
      definition: "respectable; having a good reputation",
      term: "reputable",
    },
    {
      definition:
        "supposed; Ex. reputed father of the child; V. repute: \n                        consider; N. repute: reputation; esteem",
      term: "reputed",
    },
    {
      definition: "mass for the dead; dirge",
      term: "requiem",
    },
    {
      definition:
        "necessary requirement; something required; ADJ: required; \n                        necessary",
      term: "requisite",
    },
    {
      definition:
        "formal demand or request; Ex. requisition for more \n                        computing equipment; V.",
      term: "requisition",
    },
    {
      definition: "make return for; repay; reciprocate; revenge; N. requittal",
      term: "requite",
    },
    {
      definition: "repeal; annul; cancel (a law, decision, or agreement)",
      term: "rescind",
    },
    {
      definition:
        "indignation; bitterness; displeasure; V. resent: feel \n                        anger about",
      term: "resentment",
    },
    {
      definition:
        "self-control; self-restraint; formal but distant manner; \n                        reticence; Ex. without reserve: freely and openly; ADJ. \n                        reserved: shy and uncommunicative",
      term: "reserve",
    },
    {
      definition: "remaining; left over; of a residue; N: residue",
      term: "residual",
    },
    {
      definition: "remainder; balance",
      term: "residue",
    },
    {
      definition:
        "give up (a position, right, or claim); submit (oneself) \n                        passively",
      term: "resign",
    },
    {
      definition:
        "patiently submissiveness; statement that one is quitting \n                        a job; ADJ. resigned: acquiescent",
      term: "resignation",
    },
    {
      definition:
        "elastic; having the power of springing back; able to \n                        recover quickly (as from misfortune)",
      term: "resilient",
    },
    {
      definition:
        "determination; resoluteness; ADJ. resolute: firm or \n                        determined in purpose",
      term: "resolution",
    },
    {
      definition:
        "decide; settle; solve; separate; make a determined \n                        decision; N. resolution",
      term: "resolve",
    },
    {
      definition:
        "(of a sound) echoing; resounding(sounding loudly); \n                        deep and full in sound; producing resonance; Ex. resonant \n                        voice; N. resonance",
      term: "resonant",
    },
    {
      definition: "turn to for help; Ex. resort to violence; N.",
      term: "resort",
    },
    {
      definition:
        "(of a place) be filled with sound; (of a sound) sound \n                        loudly; sound back; echo; Ex. hall resounded with laughter",
      term: "resound",
    },
    {
      definition:
        "clever and imaginative (in dealing with difficult situations); \n                        N. resource, resourcefulness",
      term: "resourceful",
    },
    {
      definition: "breathing; exhalation; ADJ. respiratory",
      term: "respiration",
    },
    {
      definition:
        "time for rest; interval of relief; delay in punishment; \n                        reprieve",
      term: "respite",
    },
    {
      definition: "brilliant; splendid in appearance; dazzling; glorious",
      term: "resplendent",
    },
    {
      definition:
        "state of reacting readily to appeals, orders, etc.; \n                        ADJ. responsive: readily reacting; Ex. responsive to treatment",
      term: "responsiveness",
    },
    {
      definition:
        "returning something (lost or stolen) to the rightful \n                        owner; reparation; indemnification; compensation for loss, \n                        damage, or injury",
      term: "restitution",
    },
    {
      definition:
        "impatiently restless (induced by external coercion \n                        or restriction); restlessly impatient; obstinately resisting \n                        control; Ex. restive horses because of wolves; CF. not \n                        a general synonym for `restless'",
      term: "restive",
    },
    {
      definition: "moderation or self-control; controlling force; restriction",
      term: "restraint",
    },
    {
      definition:
        "taking up again; recommencement; V. resume: begin or \n                        take up again; take or occupy again; Ex. Kindly resume \n                        your seats.",
      term: "resumption",
    },
    {
      definition:
        "rise again; flow to and fro; N. resurgence; ADJ. resurgent: \n                        (of ideas or beliefs) experiencing revival; surging again",
      term: "resurge",
    },
    {
      definition: "revive",
      term: "resurrect",
    },
    {
      definition:
        "revive; bring back to life or consciousness; Ex. resuscitate \n                        the drowned child",
      term: "resuscitate",
    },
    {
      definition:
        "keep; maintain possession of; employ (esp. a lawyer \n                        or advisor); N. retainer: servant; fee paid to retain \n                        an advisor",
      term: "retain",
    },
    {
      definition: "repay in kind (usually for bad treatment); V. retaliate",
      term: "retaliate",
    },
    {
      definition:
        "delay (in development); ADJ. retarded: (as of a child) \n                        slower in development",
      term: "retard",
    },
    {
      definition:
        "holding; able to retain things (esp. facts in the mind); \n                        having a good memory",
      term: "retentive",
    },
    {
      definition:
        "inclined to silence; uncommunicative; reserved; Ex. \n                        He was reticent about the reasons; N. reticence",
      term: "reticent",
    },
    {
      definition: "following; attendants",
      term: "retinue",
    },
    {
      definition:
        "shy and reserved (of a person); modest; Ex. her retiring \n                        personality",
      term: "retiring",
    },
    {
      definition: "quick sharp reply; V.",
      term: "retort",
    },
    {
      definition:
        "withdraw; take back; draw back; Ex. retract a statement/an offer/claws; N. retraction; CF. retractile",
      term: "retract",
    },
    {
      definition: "cut down; cut down expenses; economize",
      term: "retrench",
    },
    {
      definition:
        "deserved punishment for wrongdoing; punishment for \n                        offenses; compensation; vengeance; CF. pay back",
      term: "retribution",
    },
    {
      definition:
        "recover; put right; find and bring in; regain; Ex. \n                        retrieve the situation",
      term: "retrieve",
    },
    {
      definition:
        "taking effect before its enactment (as a law) or imposition \n                        (as a tax); (of a law) having effect on the past as well \n                        as the future",
      term: "retroactive",
    },
    {
      definition: "go backwards; recede; degenerate; deteriorate; ADJ.",
      term: "retrograde",
    },
    {
      definition: "looking back on the past; N. retrospection; V. retrospect",
      term: "retrospective",
    },
    {
      definition:
        "boisterous merrymaking; V. revel: engage boisterous \n                        festivities; enjoy greatly; N: boisterous festivity or \n                        celebration",
      term: "revelry",
    },
    {
      definition:
        "echo repeatedly; resound; Ex. The thunder reverberated \n                        across the valley.",
      term: "reverberate",
    },
    {
      definition: "deserving reverence; N: priest",
      term: "reverend",
    },
    {
      definition:
        "respectful; worshipful; V. revere: regard with reverence; \n                        N. reverence: profound respect",
      term: "reverent",
    },
    {
      definition: "daydream; abstracted musing",
      term: "reverie",
    },
    {
      definition:
        "relapse; backslide; turn back to; return to the former \n                        owner; N. reversion",
      term: "revert",
    },
    {
      definition: "attack with abusive language; vilify(slander)",
      term: "revile",
    },
    {
      definition: "cancel; retract; CF. irrevocable",
      term: "revoke",
    },
    {
      definition:
        "sudden strong feeling of disgust; sudden violent change \n                        of feeling; negative reaction; Ex. revulsion from the \n                        scenes of torture",
      term: "revulsion",
    },
    {
      definition:
        "speak or write in an exaggeratedly enthusiastic manner; \n                        Ex. rhapsodize over the beauty of the scenery",
      term: "rhapsodize",
    },
    {
      definition:
        "excessively enthusiastic expression of feeling; musical \n                        composition of irregular form (as if made up as one plays \n                        it)",
      term: "rhapsody",
    },
    {
      definition:
        "art of effective communication; art of using language \n                        effectively and persuasively; style of speaking or writing; \n                        grandiloquent language; Ex. political rhetoric; ADJ. rhetorical; \n                        CF. rhetorical question: question to which no answer is \n                        expected as",
      term: "rhetoric",
    },
    {
      definition:
        "marked by vulgar lewd humor; wanton; profane; N. ribaldry: \n                        ribald language or joke",
      term: "ribald",
    },
    {
      definition:
        "(of buildings) likely to break or fall apart; of rickets; \n                        CF. rickets; CF. vitamin D",
      term: "rickety",
    },
    {
      definition:
        "pierce with holes; permeate or spread throughout; Ex. \n                        The gunman riddled the car with bullets; Ex. The whole \n                        report is riddled with errors; N. large sieve (separating \n                        earth from stone)",
      term: "riddle",
    },
    {
      definition: "amendment or clause added to a legislative bill",
      term: "rider",
    },
    {
      definition: "(of something bad) widespread; abundant; current",
      term: "rife",
    },
    {
      definition:
        "narrow opening in a large mass; break in a friendly \n                        relation; Ex. through a rift in the clouds; OP. reconcilation",
      term: "rift",
    },
    {
      definition:
        "arrangement of masts and sails; V: equip (a ship) with \n                        rigging; ADJ. rigging: ropes that hold up a ship's sails",
      term: "rig",
    },
    {
      definition: "morally upright; just",
      term: "righteous",
    },
    {
      definition: "legally correct; Ex. rightful owner",
      term: "rightful",
    },
    {
      definition:
        "hard and unbending; stiff and unyielding; fixed in \n                        behavior or views; strict; rigorous; Ex. rigid rule",
      term: "rigid",
    },
    {
      definition: "severity; Ex. rigors of the Russian winter",
      term: "rigor",
    },
    {
      definition: "irritate; vex; muddy",
      term: "rile",
    },
    {
      definition:
        "tear or be torn quickly and violently; Ex. The sail \n                        ripped under the force of the wind; N.",
      term: "rip",
    },
    {
      definition:
        "metal pin used for fastening metal plates together; \n                        V: fasten with a rivet; engross",
      term: "rivet",
    },
    {
      definition: "holding one's attention; absorbing; engrossing",
      term: "riveting",
    },
    {
      definition: "small stream; CF. rill",
      term: "rivulet",
    },
    {
      definition: "strong; vigorous",
      term: "robust",
    },
    {
      definition: "ornate; highly decorated; N. CF. 18th century",
      term: "rococo",
    },
    {
      definition: "make liquids murky by stirring up sediment; disturb",
      term: "roil",
    },
    {
      definition:
        "(of land) rising and falling in long gentle slopes; \n                        happening continuously by stages; Ex. rolling devolution \n                        of power to local governments",
      term: "rolling",
    },
    {
      definition: "play or frolic boisterously; gambol; N.",
      term: "romp",
    },
    {
      definition: "cock; adult male chicken",
      term: "rooster",
    },
    {
      definition: "rosy; optimistic; Ex. roseate views",
      term: "roseate",
    },
    {
      definition: "list (of names)",
      term: "roster",
    },
    {
      definition: "raised platform for speech-making; pulpit",
      term: "rostrum",
    },
    {
      definition:
        "repetition; memorization through repetition without \n                        understanding; Ex. learn poetry by rote",
      term: "rote",
    },
    {
      definition: "(of a person) fat and round",
      term: "rotund",
    },
    {
      definition: "circular building or hall covered with a dome",
      term: "rotunda",
    },
    {
      definition: "roundness; sonorousness of speech",
      term: "rotundity",
    },
    {
      definition: "lecherous man",
      term: "roue ",
    },
    {
      definition:
        "lively; inducing excitement; stirring; V. rouse: waken; \n                        arouse from sleep or depression; excite; stir up",
      term: "rousing",
    },
    {
      definition:
        "put to rout; stampede; drive out; N: complete defeat \n                        and disorderly retreat",
      term: "rout",
    },
    {
      definition: "fragments (esp. from a destroyed building)",
      term: "rubble",
    },
    {
      definition:
        "title or heading (in red print); directions for religious \n                        ceremony; protocol",
      term: "rubric",
    },
    {
      definition: "reddish; (of the face) reddish and healthy-looking",
      term: "ruddy",
    },
    {
      definition:
        "elementary; not developed; crude; N. rudiment: fundamental \n                        element or principle; Ex. rudiments of the language",
      term: "rudimentary",
    },
    {
      definition:
        "regret; lament; mourn; Ex. He will rue the day; N. \n                        ADJ. rueful",
      term: "rue",
    },
    {
      definition: "violent scoundrel; bully",
      term: "ruffian",
    },
    {
      definition:
        "make or move with a deep rolling sound (as thunder \n                        or stomach)",
      term: "rumble",
    },
    {
      definition: "animal that ruminates; ADJ.",
      term: "ruminant",
    },
    {
      definition:
        "chew over and over (mentally or, like cows, physically); \n                        mull over(ponder)",
      term: "ruminate",
    },
    {
      definition: "ransack; thoroughly search",
      term: "rummage",
    },
    {
      definition:
        "(of a place) dilapidated; in a bad condition; (of a \n                        person) weak or exhausted",
      term: "rundown ",
    },
    {
      definition:
        "mysterious; set down in an ancient alphabet; N. rune: \n                        one of the letters of an alphabet used by ancient Germanic \n                        peoples (cut on stone or wood); magic charm",
      term: "runic",
    },
    {
      definition: "trick to deceive; stratagem",
      term: "ruse",
    },
    {
      definition:
        "pertaining to country people; unsophisticated; simple; \n                        crude; uncouth; (of furniture) rough with the bark left \n                        on; N. rural person; rustic person",
      term: "rustic",
    },
    {
      definition: "banish to the country; dwell in the country",
      term: "rusticate",
    },
    {
      definition:
        "make slight sounds like silk moving or being rubbed \n                        together",
      term: "rustle",
    },
    {
      definition: "pitiless; merciless; cruel",
      term: "ruthless",
    },
    {
      definition:
        "waver (in opinion); fluctuate; sway to and fro; N. \n                        vacillation",
      term: "vacillate",
    },
    {
      definition:
        "empty; lacking in ideas; inane; stupid; Ex. vacuous \n                        expression; N. vacuity",
      term: "vacuous",
    },
    {
      definition: "wanderer (without a permanent home); tramp",
      term: "vagabond",
    },
    {
      definition: "capricious happening; caprice; whim; CF. wander",
      term: "vagary",
    },
    {
      definition: "homeless wanderer",
      term: "vagrant",
    },
    {
      definition:
        "full of self-admiration; conceited; without result; \n                        unsuccessful; N. vanity",
      term: "vain",
    },
    {
      definition:
        "boastful; excessively conceited; N. vainglory: great \n                        vanity",
      term: "vainglorious",
    },
    {
      definition: "saying farewell; expression of leave-taking",
      term: "valediction",
    },
    {
      definition:
        "pertaining to farewell; N: farewell address (esp. at \n                        graduation exercises)",
      term: "valedictory",
    },
    {
      definition:
        "logically convincing; sound; legally acceptable; effective; \n                        Ex. valid reasoning/passport",
      term: "valid",
    },
    {
      definition: "make valid; confirm; ratify",
      term: "validate",
    },
    {
      definition: "bravery; ADJ. valiant: possessing valor; brave",
      term: "valor",
    },
    {
      definition: "ghostly being that sucks the blood of the living",
      term: "vampire",
    },
    {
      definition:
        "forerunners; foremost position of an army; advance \n                        forces; foremost position in a trend or movement; CF. \n                        rearguard",
      term: "vanguard",
    },
    {
      definition:
        "position giving an advantage (such as a strategic point); \n                        CF. vantagepoint",
      term: "vantage",
    },
    {
      definition:
        "lacking liveliness; dull and unimaginative; insipid \n                        and flavorless; Ex. vapid lecture",
      term: "vapid",
    },
    {
      definition: "turn into vapor (steam, gas, fog, etc.)",
      term: "vaporize",
    },
    {
      definition:
        "change the appearance of (by marking with different \n                        colors)",
      term: "variegate",
    },
    {
      definition: "(esp. of a flower or leaf) many-colored",
      term: "variegated",
    },
    {
      definition:
        "paint used to coat a surface with a glossy film; glossy \n                        coating produced by using this substance; Ex. nail varnish; \n                        V.",
      term: "varnish",
    },
    {
      definition:
        "in feudalism, one who held land of a superior lord; \n                        subordinate or dependent",
      term: "vassal",
    },
    {
      definition:
        "boasted; bragged; highly publicized; V. vaunt: boast; \n                        brag",
      term: "vaunted",
    },
    {
      definition: "change in direction; swerve",
      term: "veer",
    },
    {
      definition:
        "live in a monotonous way (without interests or activity); \n                        CF. vegetation: plants of an area; CF. vegetarian; CF. \n                        vegan",
      term: "vegetate",
    },
    {
      definition:
        "forceful; intensely emotional; with marked vigor; strong; \n                        N. vehemence",
      term: "vehement",
    },
    {
      definition: "speed",
      term: "velocity",
    },
    {
      definition: "capable of being bribed; corrupt; CF. vernal",
      term: "venal",
    },
    {
      definition: "blood feud (esp. between two families); CF. Nina Williams",
      term: "vendetta",
    },
    {
      definition: "seller",
      term: "vendor",
    },
    {
      definition:
        "thin surface layer (of good quality wood, glued to \n                        a base of inferior material); cover; surface show; fa\\c{c}ade; \n                        V.",
      term: "veneer",
    },
    {
      definition:
        "deserving high respect; commanding respect; CF. command: \n                        deserve and get",
      term: "venerable",
    },
    {
      definition: "revere; treat with great respect",
      term: "venerate",
    },
    {
      definition: "(of a fault or sin) forgivable; trivial",
      term: "venial",
    },
    {
      definition:
        "meat of a deer; CF. cow: beef; CF. pig: pork, ham, \n                        bacon; CF. calf: veal; CF. sheep: mutton; CF. lamb: lamb",
      term: "venison",
    },
    {
      definition:
        "poison (of an animal); hatred; Ex. remarks full of \n                        venom; ADJ. venomous",
      term: "venom",
    },
    {
      definition:
        "release or discharge through a vent; express (esp. \n                        unfairly); utter; Ex. He vented his wrath on his family.",
      term: "vent",
    },
    {
      definition: "admit fresh air into to replace stale air",
      term: "ventilate",
    },
    {
      definition: "abdominal",
      term: "ventral",
    },
    {
      definition:
        "someone who can make his or her voice seem to come \n                        from another person or thing (without moving lips or jaws); \n                        N. ventriloquism, ventriloquy",
      term: "ventriloquist",
    },
    {
      definition: "risk; expose to risk; dare; undertake a risk; N.",
      term: "venture",
    },
    {
      definition:
        "(of a person) bold; adventurous; daring; (of an action) \n                        risky",
      term: "venturesome",
    },
    {
      definition:
        "location; place (of a crime, trial, gathering, etc.); \n                        CF. come",
      term: "venue",
    },
    {
      definition: "(of a person) truthful",
      term: "veracious",
    },
    {
      definition: "truthfulness; adherence to the truth",
      term: "veracity",
    },
    {
      definition:
        "put into words; ADJ. verbal: of words; spoken rather \n                        than written; oral; of a verb",
      term: "verbalize",
    },
    {
      definition:
        "word for word; in the same words; repeating the actual \n                        words exactly",
      term: "verbatim",
    },
    {
      definition:
        "pompous array of words; too many unnecessary words; \n                        wordiness",
      term: "verbiage",
    },
    {
      definition: "wordy; N. verbosity",
      term: "verbose",
    },
    {
      definition:
        "green; covered with green plants or grass; lush in \n                        vegetation; Ex. verdant meadows",
      term: "verdant",
    },
    {
      definition:
        "green coating or patina on copper which has been exposed \n                        to the weather",
      term: "verdigris",
    },
    {
      definition:
        "border; edge, rim, or margin; Ex. on the verge of: \n                        very near to; V: border on",
      term: "verge",
    },
    {
      definition:
        "having the appearance of truth or reality; probable \n                        or likely to be true; plausible",
      term: "verisimilar",
    },
    {
      definition:
        "appearance of truth; quality of appearing to be true \n                        or real; likelihood; Ex. verisimilitude of her performance \n                        as Lady Macbeth",
      term: "verisimilitude",
    },
    {
      definition:
        "being truly so; real or genuine; actual; not false \n                        or imaginary",
      term: "veritable",
    },
    {
      definition:
        "quality of being true; lasting truth or principle; \n                        Ex. the verity of his testimony; Ex. one of the eternal \n                        verities",
      term: "verity",
    },
    {
      definition:
        "living language (as compared to the official language); \n                        language spoken in a country or region; natural style; \n                        Ex. lapse into the vernacular",
      term: "vernacular",
    },
    {
      definition: "pertaining to spring",
      term: "vernal",
    },
    {
      definition:
        "having many talents; capable of working in many fields; \n                        having many uses or functions; N. versatility",
      term: "versatile",
    },
    {
      definition:
        "having a backbone or spinal column; N: group of animals \n                        having a segmented spinal column",
      term: "vertebrate",
    },
    {
      definition: "summit; highest point; PL. vertices",
      term: "vertex",
    },
    {
      definition: "severe dizziness; giddiness",
      term: "vertigo",
    },
    {
      definition:
        "enthusiasm (as in artistic performance or composition); \n                        liveliness; vigor",
      term: "verve",
    },
    {
      definition: "trace; remains; Ex. vestiges of some ancient religion",
      term: "vestige",
    },
    {
      definition:
        "vested power to reject a bill; exercise of this right; \n                        V: prevent or forbid by exercising the power of veto",
      term: "veto",
    },
    {
      definition: "annoy; distress",
      term: "vex",
    },
    {
      definition:
        "capable of maintaining life; feasible; practical or \n                        workable; Ex. viable scheme",
      term: "viable",
    },
    {
      definition: "food; CF. live",
      term: "viand",
    },
    {
      definition: "full of vigor or energy; vibrating",
      term: "vibrant",
    },
    {
      definition: "parish priest; representative",
      term: "vicar",
    },
    {
      definition:
        "experienced as if one were taking part in the experience \n                        of another; done by a deputy for other people; acting \n                        as a substitute; Ex. vicarious thrill at the movies; Ex. \n                        the vicarious sufferings of Christ",
      term: "vicarious",
    },
    {
      definition:
        "change (esp. from good to bad); change of fortune; \n                        CF. the last emperor of China",
      term: "vicissitude",
    },
    {
      definition: "food; provisions; V. victual: provide with food",
      term: "victuals",
    },
    {
      definition: "contend; compete",
      term: "vie",
    },
    {
      definition:
        "keeping watch (during normal sleeping hours); Ex. all-night \n                        vigil",
      term: "vigil",
    },
    {
      definition:
        "watchful; on the alert; watchfully awake; alert to \n                        spot danger; N. vigilance",
      term: "vigilant",
    },
    {
      definition: "one who without authority assumes law enforcement powers",
      term: "vigilante",
    },
    {
      definition:
        "small drawing placed at the beginning or end of a chapter; \n                        picture; short literary sketch; short written description \n                        of a character or scene",
      term: "vignette",
    },
    {
      definition: "active strength; energy; enthusiasm; ADJ. vigorous",
      term: "vigor",
    },
    {
      definition: "despicable; unpleasant; disgusting; Ex. vile slander",
      term: "vile",
    },
    {
      definition: "slander; speak evil of; N. vilification",
      term: "vilify",
    },
    {
      definition:
        "clear from blame; free from blame or accusation (with \n                        supporting proof); exonerate; substantiate; justify or \n                        support; avenge; Ex. vindicate one's client; Ex. vindicate \n                        one's claim; CF. vindicator",
      term: "vindicate",
    },
    {
      definition:
        "disposed to revenge; vengeful; out for revenge; spiteful; \n                        intended to cause harm; malicious; Ex. vindictive streak",
      term: "vindictive",
    },
    {
      definition: "wine merchant; winemaker; seller of wine",
      term: "vintner",
    },
    {
      definition:
        "break (a law); defile; desecrate; assault sexually; \n                        Ex. violate graves",
      term: "violate",
    },
    {
      definition: "poisonous snake",
      term: "viper",
    },
    {
      definition:
        "manly; having masculine spirit or strength; full of \n                        strength",
      term: "virile",
    },
    {
      definition:
        "in essence; existing in essence though not in actual \n                        form; for practical purposes; Ex. virtual ruler/space",
      term: "virtual",
    },
    {
      definition:
        "goodness; moral excellence; good quality; advantage; \n                        Ex. by virtue of; Ex. make a virtue of necessity",
      term: "virtue",
    },
    {
      definition: "highly skilled artist (esp. in music); Ex. piano virtuoso",
      term: "virtuoso",
    },
    {
      definition:
        "(of a disease or poison) extremely harmful or poisonous; \n                        (of a feeling) hostile; bitter; N. virulence; CF. virus; \n                        CF. venom",
      term: "virulent",
    },
    {
      definition: "disease communicator",
      term: "virus",
    },
    {
      definition: "face; appearance",
      term: "visage",
    },
    {
      definition:
        "felt in one's inner organs; N. viscera: internal body \n                        organs; CF. eviscerate",
      term: "visceral",
    },
    {
      definition: "adhesive; gluey",
      term: "viscid",
    },
    {
      definition:
        "(of a liquid) thick and sticky; gluey; viscid; CF. \n                        consistency",
      term: "viscous",
    },
    {
      definition: "vice; tool for holding work in place; clamping device",
      term: "vise",
    },
    {
      definition:
        "eyesight; foresight; mental image produced by the imagination; \n                        experience of seeing the supernatural",
      term: "vision",
    },
    {
      definition:
        "produced by imagination; fanciful; mystical; showing \n                        foresight; N: one having foresight; one given to speculative \n                        impractical ideas",
      term: "visionary",
    },
    {
      definition:
        "full of life; animated; vibrant and lively; critical; \n                        of great importance; necessary to stay alive; of life; \n                        living; breathing; N. vitality; V. vitalize",
      term: "vital",
    },
    {
      definition: "spoil the effect of; make inoperative; corrupt morally",
      term: "vitiate",
    },
    {
      definition:
        "of glass; pertaining to or resembling glass; V. vitrify: \n                        change into glass; CF. petrify",
      term: "vitreous",
    },
    {
      definition:
        "causing sharp pain to the mind; caustic; corrosive; \n                        sarcastic; of vitriol; N. vitriol: sulphuric acid (which \n                        burns flesh deeply); bitterly abusive expression; caustic \n                        expression; CF. glass",
      term: "vitriolic",
    },
    {
      definition:
        "abusive; scolding; V. vituperate: berate; scold; rail \n                        against abusively",
      term: "vituperative",
    },
    {
      definition: "lively or animated; sprightl sprightly/lively",
      term: "vivacious",
    },
    {
      definition:
        "(of light or color) bright and distinct; evoking lifelike \n                        mental images; Ex. vivid red hair/description",
      term: "vivid",
    },
    {
      definition: "act of dissecting living animals",
      term: "vivisection",
    },
    {
      definition: "female fox; ill-tempered woman; CF. shrew",
      term: "vixen",
    },
    {
      definition:
        "clamorous; noisy; V. vociferate: cry out loudly (when \n                        complaining)",
      term: "vociferous",
    },
    {
      definition: "popular fashion; Ex. Jeans became the vogue.",
      term: "vogue",
    },
    {
      definition:
        "changeable; of a quickly changing nature (as of temper); \n                        mercurial; tending to violence; evaporating rapidly; Ex. \n                        volatile character/situation in the street",
      term: "volatile",
    },
    {
      definition:
        "act of using one's will; act of making a conscious \n                        choice; Ex. She selected this dress of her own volition.",
      term: "volition",
    },
    {
      definition: "simultaneous discharge of a number of shots; V.",
      term: "volley",
    },
    {
      definition: "fluent; talkative; glib; N. volubility",
      term: "voluble",
    },
    {
      definition:
        "having great volume (as of a garment or container); \n                        bulky; large",
      term: "voluminous",
    },
    {
      definition:
        "sensual; of or giving sensual pleasure; indulging in \n                        sensual pleasures; Ex. voluptuous lines; Ex. voluptuous \n                        life of the Romans; N. voluptuary: voluptuous person",
      term: "voluptuous",
    },
    {
      definition: "religion practiced chiefly in Haiti",
      term: "voodoo",
    },
    {
      definition:
        "ravenous; eating large quantities of food; exceedingly \n                        eager; insatiable; Ex. voracious animal/reader",
      term: "voracious",
    },
    {
      definition:
        "whirlwind; whirlpool; center of turbulence; predicament \n                        into which one is inexorably plunged",
      term: "vortex",
    },
    {
      definition:
        "give a personal guarantee; Ex. I can vouch for his \n                        integrity; N. voucher",
      term: "vouch",
    },
    {
      definition:
        "grant condescendingly; guarantee; Ex. vouchsafe your \n                        fair return on your investment",
      term: "vouchsafe",
    },
    {
      definition:
        "Peeping Tom; person who derives sexual gratification \n                        from observing the sexual acts of others",
      term: "voyeur",
    },
    {
      definition:
        "of the common people; deficient in refinement; not \n                        refined; coarse; Ex. vulgar display of wealth; N. vulgarism: \n                        vulgarity; crudely indecent word; CF. vulgarian: vulgar \n                        person; boor; lout",
      term: "vulgar",
    },
    {
      definition: "susceptible to wounds or attack; N. vulnerability",
      term: "vulnerable",
    },
    {
      definition: "like a fox; crafty",
      term: "vulpine",
    },
    {
      definition: "carrion-eating birds",
      term: "vulture",
    },
    {
      definition: "contending; CF. vie",
      term: "vying",
    },
    {
      definition:
        "build; lie; make up (a story) in order to deceive; \n                        Ex. fabricate the whole story; CF. fabric: underlying \n                        structure; Ex. fabric of society",
      term: "fabricate",
    },
    {
      definition:
        "front or face (of building); superficial or false appearance",
      term: "facadefa\\c{c}ade)",
    },
    {
      definition: "small plane surface (of a gem(precious stone)); a side",
      term: "facet",
    },
    {
      definition: "joking (often inappropriately); unserious; humorous",
      term: "facetious",
    },
    {
      definition:
        "easily accomplished; ready or fluent; superficial; \n                        not deep; Ex. facile solution to a complex problem; Ex. \n                        facile speaker; N. facility: ability to do something easily \n                        and well; ease in doing resulting from skill or aptitude; \n                        something that facil",
      term: "facile",
    },
    {
      definition: "help bring about; make less difficult",
      term: "facilitate",
    },
    {
      definition: "copy",
      term: "facsimile",
    },
    {
      definition: "party; clique (within a large group); dissension",
      term: "faction",
    },
    {
      definition: "inclined to form factions; causing dissension",
      term: "factious",
    },
    {
      definition:
        "artificial; produced artificially; sham; false; Ex. \n                        factitious tears",
      term: "factitious",
    },
    {
      definition:
        "handyman; person who does all kinds of work; CF. do \n                        everything",
      term: "factotum",
    },
    {
      definition: "mental or bodily powers; teaching staff",
      term: "faculty",
    },
    {
      definition:
        "not genuine; N: one that is not genuine; impostor; \n                        sham; V: counterfeit; Ex. fake the results of the experiment/the \n                        signature",
      term: "fake",
    },
    {
      definition:
        "false; based on a fallacy; misleading; N. fallacy: \n                        false idea or notion; false reasoning; Ex. popular fallacy; \n                        Ex. fallacy of the argument",
      term: "fallacious",
    },
    {
      definition: "liable to err",
      term: "fallible",
    },
    {
      definition:
        "(of land) plowed but not sowed (to improve the quality); \n                        uncultivated",
      term: "fallow",
    },
    {
      definition: "make (something written) false by changing",
      term: "falsify",
    },
    {
      definition:
        "hesitate; weaken in purpose or action; walk or move \n                        unsteadily through weakness; N.",
      term: "falter",
    },
    {
      definition:
        "excessive zeal; extreme devotion to a belief or cause; \n                        N. fanatic; ADJ. fanatic",
      term: "fanaticism",
    },
    {
      definition: "imagined; unreal",
      term: "fancied",
    },
    {
      definition:
        "breeder or dealer of animals; one who has a special \n                        interest, as for raising specific plant or animal",
      term: "fancier",
    },
    {
      definition:
        "whimsical; visionary; imaginary; produced by imagination; \n                        Ex. fanciful scheme",
      term: "fanciful",
    },
    {
      definition:
        "imagination (of a whimsical or fantastic nature); capricious \n                        liking; V: imagine; be fond of; ADJ. decorative; elaborate",
      term: "fancy",
    },
    {
      definition:
        "call by bugles or trumpets; showy display; spectacular \n                        public display",
      term: "fanfare",
    },
    {
      definition:
        "broad comedy; mockery; humorous play full of silly \n                        things happening; ADJ. farcical",
      term: "farce",
    },
    {
      definition:
        "too improbable to be believed; implausible; Ex. far-fetched \n                        story",
      term: "farfetched ",
    },
    {
      definition: "give shape to; make; Ex. fashion the pot out of clay",
      term: "fashion",
    },
    {
      definition: "difficult to please; squeamish; fussy; finicky",
      term: "fastidious",
    },
    {
      definition:
        "belief that events are determined by forces or fates \n                        beyond one's control; ADJ. fatalistic; CF. fatal: causing \n                        death",
      term: "fatalism",
    },
    {
      definition:
        "comprehend; investigate; determine the depth of; N. \n                        unit of measurement for the depth of water",
      term: "fathom",
    },
    {
      definition: "too deep to be measured or understood; unfathomable",
      term: "fathomless",
    },
    {
      definition:
        "smugly and unconsciously foolish; inane; silly; N. \n                        fatuity, fatuousness",
      term: "fatuous",
    },
    {
      definition: "animals of a period or region; CF. flora",
      term: "fauna",
    },
    {
      definition: "display of partiality toward a favored person",
      term: "favoritism",
    },
    {
      definition:
        "courting favor by cringing and flattering; V. fawn: \n                        exhibit affection as a dog; seek favor or attention by \n                        obsequiousness",
      term: "fawning",
    },
    {
      definition: "disconcert; dismay; embarrass",
      term: "faze",
    },
    {
      definition: "practical; able to be carried out; practicable",
      term: "feasible",
    },
    {
      definition:
        "distinctive part of the faces (as the eyes or mouth); \n                        features: overall appearance of the face; prominent or \n                        distinctive quality; prominent article; film; V: make \n                        prominent",
      term: "feature",
    },
    {
      definition: "feverish",
      term: "febrile",
    },
    {
      definition:
        "fertility; fruitfulness; ADJ. fecund: very productive \n                        of crops or young",
      term: "fecundity",
    },
    {
      definition: "deficient in intelligence; very stupid",
      term: "feebleminded",
    },
    {
      definition: "pretend",
      term: "feign",
    },
    {
      definition:
        "trick; shift; sham blow; feigned attack to draw away \n                        defensive action; V.",
      term: "feint",
    },
    {
      definition:
        "(of a word or remark) apt; suitably expressed; well \n                        chosen",
      term: "felicitous",
    },
    {
      definition:
        "happiness; appropriateness (of a remark, choice, etc.); \n                        quality of being felicitous",
      term: "felicity",
    },
    {
      definition: "of a member of the cat family; N.",
      term: "feline",
    },
    {
      definition:
        "cut or knock down (a tree or a person); bring down \n                        (with a missile)",
      term: "fell",
    },
    {
      definition:
        "person convicted of a grave crime; CF. felony: serious \n                        crime",
      term: "felon",
    },
    {
      definition: "(of an animal) not domestic; wild",
      term: "feral",
    },
    {
      definition:
        "agitation; commotion(noisy and excited activity); unrest \n                        (of a political kind); V. produce by fermentation; undergo \n                        fermentation; cause (a state of trouble)",
      term: "ferment",
    },
    {
      definition:
        "chemical reaction that splits complex organic compounds; \n                        unrest; agitation",
      term: "fermentation",
    },
    {
      definition: "fierce; violent; N. ferocity",
      term: "ferocious",
    },
    {
      definition:
        "drive or hunt out of hiding; hunt with ferrets; drive \n                        out (as from a hiding place); expel; uncover or discover \n                        by searching; Ex. ferret out the secret; N. small fierce \n                        animal which catches rats and rabbits by going into their \n                        holes",
      term: "ferret",
    },
    {
      definition:
        "producing many young, fruits, or seeds; (of land) producing \n                        good crops; V. fertilize",
      term: "fertile",
    },
    {
      definition: "ardent; zealous; hot",
      term: "fervent",
    },
    {
      definition: "ardent; zealous; hot",
      term: "fervid",
    },
    {
      definition:
        "glowing ardor; intensity of feeling; quality of being \n                        fervent or fervid; zeal; intense heat",
      term: "fervor",
    },
    {
      definition:
        "rankle; produce irritation or resentment; (of a cut \n                        or wound) generate pus or rot; Ex. His insult festered \n                        in my mind for days.",
      term: "fester",
    },
    {
      definition: "joyous; celebratory; relating to a feast or festival",
      term: "festive",
    },
    {
      definition:
        "honor at a festival; celebrate or honor with a feast; \n                        N. (outdoor) festival or feast; CF. feast",
      term: "fetef\\^ete) ",
    },
    {
      definition: "malodorous; foul",
      term: "fetidfoetid) ",
    },
    {
      definition:
        "object believed to have spiritual powers; object of \n                        excessive attention or reverence; CF. fetishism",
      term: "fetishfetich) ",
    },
    {
      definition:
        "shackle; restrict the freedom of; N. chain or shackle \n                        for the foot of a prisoner; CF. foot",
      term: "fetter",
    },
    {
      definition:
        "bitter prolonged quarrel (usually between two peoples \n                        or families); V. CF. Romeo and Juliet; CF. feudal, feudalism",
      term: "feud",
    },
    {
      definition: "total failure; CF. bottle",
      term: "fiasco",
    },
    {
      definition:
        "command; arbitrary order; Ex. presidential fiat; CF. \n                        let it be done",
      term: "fiat",
    },
    {
      definition: "changeable (in affections or friendship); faithless",
      term: "fickle",
    },
    {
      definition:
        "imaginary; non-existent; purposely invented to deceive; \n                        untrue; Ex. fictitious name/boyfriend; CF. fictional",
      term: "fictitious",
    },
    {
      definition: "loyalty; accuracy",
      term: "fidelity",
    },
    {
      definition: "evil spirit; devil",
      term: "fiend",
    },
    {
      definition:
        "invention; something invented; imaginary thing; Ex. \n                        figment of your imagination",
      term: "figment",
    },
    {
      definition:
        "not literal but metaphorical; using a figure(impression) \n                        of speech",
      term: "figurative",
    },
    {
      definition:
        "written symbols; number; amount represented in numbers; \n                        outline or silhouette of a thing or human body; person \n                        (well-known); impression; diagram; pattern; group in a \n                        dance; Ex. figure of speech; V. calculate with numbers; \n                        adorn with figures; app",
      term: "figure",
    },
    {
      definition: "small ornamental statuette(very small statue)",
      term: "figurine",
    },
    {
      definition: "steal (things of small value)",
      term: "filch",
    },
    {
      definition:
        "pertaining to or befitting a son or daughter; Ex. filial \n                        respect",
      term: "filial",
    },
    {
      definition:
        "block legislation or prevent action in a lawmaking \n                        body by making very slow long speeches; N; freebooter",
      term: "filibuster",
    },
    {
      definition: "delicate ornamental lacelike metalwork",
      term: "filigree",
    },
    {
      definition: "particle removed by a file",
      term: "filing",
    },
    {
      definition: "dirty matter; ADJ. filthy",
      term: "filth",
    },
    {
      definition: "conclusion; concluding part",
      term: "finale",
    },
    {
      definition: "beautiful clothes for a special occasion",
      term: "finery",
    },
    {
      definition: "delicate skill; V: handle with finesse",
      term: "finesse",
    },
    {
      definition:
        "too particular; fussy; difficult to please; too concerned \n                        with unimportant details or quality; Ex. finicky about \n                        her food",
      term: "finicky",
    },
    {
      definition: "surface texture; completeness of execution",
      term: "finish",
    },
    {
      definition:
        "properly made and complete; Ex. finished product/performance",
      term: "finished",
    },
    {
      definition: "limited",
      term: "finite",
    },
    {
      definition:
        "piece of burning wood; hothead; troublemaker; person \n                        who stirs up trouble",
      term: "firebrand",
    },
    {
      definition: "crevice; crack",
      term: "fissure",
    },
    {
      definition:
        "sudden outburst of an illness or feeling; convulsion \n                        caused by epilepsy",
      term: "fit",
    },
    {
      definition: "spasmodic; intermittent; irregular",
      term: "fitful",
    },
    {
      definition: "flabby; lacking firmness; weak; Ex. flaccid muscles",
      term: "flaccid",
    },
    {
      definition:
        "droop; grow feeble; decline in vigor or strength; ADJ. \n                        flagging; CF. unflagging",
      term: "flag",
    },
    {
      definition:
        "conspicuously wicked, bad, or offensive; blatant; outrageous",
      term: "flagrant",
    },
    {
      definition:
        "beat with or as if with a flail; move wildly; thresh \n                        grain by hand; strike or slap; toss about; N: threshing \n                        tool consisting of a stick swinging from the end of a \n                        long handle",
      term: "flail",
    },
    {
      definition: "talent",
      term: "flair",
    },
    {
      definition:
        "ornate; highly elaborate; richly colored; ostentatious; \n                        showy; CF. flame",
      term: "flamboyant",
    },
    {
      definition: "showy; gaudy; giving a momentary brilliance",
      term: "flashy",
    },
    {
      definition:
        "display ostentatiously; Ex. ``Honey, if you've got \n                        it, flaunt it !''",
      term: "flaunt",
    },
    {
      definition:
        "strip off skin; plunder; remove the skin from; criticize \n                        harshly",
      term: "flay",
    },
    {
      definition: "spot; mark with flecks; N: small mark or spot",
      term: "fleck",
    },
    {
      definition:
        "inexperienced; N: young bird that has acquired wing \n                        feathers and is learning to fly; inexperienced person",
      term: "fledglingfledgeling)",
    },
    {
      definition:
        "wool coat of a sheep; V: shear the fleece from; rob \n                        by a trick; swindle; plunder",
      term: "fleece",
    },
    {
      definition: "fast; rapid; N. ADJ. fleeting: passing quickly; ephemeral",
      term: "fleet",
    },
    {
      definition:
        "light stroke as with a whip; V: move with a light quick \n                        blow; strike with a light quick blow (as from a whip); \n                        Ex. flick the switch",
      term: "flick",
    },
    {
      definition:
        "burn unsteadily or fitfully; move waveringly; N: flickering movement or light; brief sensation; Ex. flicker of excitement",
      term: "flicker",
    },
    {
      definition:
        "(esp. of a woman's behavior) capricious; often changing, \n                        esp. from one lover to another; impulsive",
      term: "flighty",
    },
    {
      definition:
        "hesitate; shrink back (in fear of something unpleasant); \n                        Ex. She did not flinch in the face of danger.",
      term: "flinch",
    },
    {
      definition:
        "send (something) spinning, often into the air, by striking \n                        with a light quick blow; turn over; Ex. flip over",
      term: "flip",
    },
    {
      definition:
        "lacking proper seriousness; Ex. flippant remarks about \n                        death; N. flippancy",
      term: "flippant",
    },
    {
      definition:
        "behave in a way that attracts (sexual) attention; deal \n                        triflingly with; N: one (or woman) given to flirting; \n                        ADJ. flirtatious",
      term: "flirt",
    },
    {
      definition:
        "fly; fly or move lightly or quickly; dart lightly; \n                        pass swiftly by; Ex. a bee flitting from flower to flower",
      term: "flit",
    },
    {
      definition: "flat mass of floating ice",
      term: "floe",
    },
    {
      definition: "plants of a region or era",
      term: "flora",
    },
    {
      definition: "condition or period of flowering",
      term: "florescence",
    },
    {
      definition:
        "ruddy; (of a complexion) reddish; flowery; very ornate; \n                        CF. rose",
      term: "florid",
    },
    {
      definition: "drifting wreckage",
      term: "flotsam",
    },
    {
      definition:
        "struggle and thrash about; proceed clumsily or falter \n                        (as in water, mud, snow, etc.); proceed in confusion",
      term: "flounder",
    },
    {
      definition:
        "grow well; prosper; make sweeping gestures; wave; brandish; \n                        Ex. The trees flourished in the sun. N: showy movement \n                        or gesture; embellishment or ornamentation (esp. in handwriting)",
      term: "flourish",
    },
    {
      definition:
        "reject; mock; show contempt for; scorn; Ex. flout the \n                        rules",
      term: "flout",
    },
    {
      definition: "full of flowers; full of ornate expressions",
      term: "flowery",
    },
    {
      definition:
        "waver; shift; rise and fall as if in waves; change \n                        or vary irregularly",
      term: "fluctuate",
    },
    {
      definition: "smoothness of speech; ADJ. fluent",
      term: "fluency",
    },
    {
      definition:
        "unlikely occurrence; stroke of fortune; accidental \n                        stroke of good luck; ADJ. fluky",
      term: "fluke",
    },
    {
      definition:
        "redden; blush; flow suddenly and abundantly; wash out \n                        by a rapid brief flow of water; N: reddish tinge; blush; \n                        brief rush; rush of strong feeling; Ex. flush of pride; \n                        ADJ: having surfaces in the same plane; even; blushing",
      term: "flush",
    },
    {
      definition: "confuse; make nervous and confused; N.",
      term: "fluster",
    },
    {
      definition:
        "having vertical parallel grooves (as in a pillar); \n                        V. flute: make long parallel inward curves in; N. flute: \n                        long rounded groove incised on the shaft of a column",
      term: "fluted",
    },
    {
      definition:
        "(of a bird with large wings) wave (the wings) lightly, \n                        rapidly, and irregularly; vibrate rapidly or erratically; \n                        fly by waving quickly; flitter; N.",
      term: "flutter",
    },
    {
      definition:
        "flowing; series of changes; fluctuation; Ex. in a state \n                        of flux",
      term: "flux",
    },
    {
      definition:
        "coarse food for cattle, horses, etc.; feed for livestock; \n                        CF. food",
      term: "fodder",
    },
    {
      definition: "small weakness of character; slight fault; CF. feeble",
      term: "foible",
    },
    {
      definition:
        "defeat; frustrate; prevent from being successful; thwart; \n                        CF. fail",
      term: "foil",
    },
    {
      definition:
        "insert improperly; impose upon another by coercion; \n                        palm off; pass off as genuine or worthy; CF. fist",
      term: "foist",
    },
    {
      definition: "masses of leaves; CF. defoliate",
      term: "foliage",
    },
    {
      definition:
        "stir up; incite; instigate; promote the growth of (something \n                        evil or unpleasant)",
      term: "foment",
    },
    {
      definition: "rash; reckless; foolishly daring",
      term: "foolhardy",
    },
    {
      definition:
        "vain about dress and appearance; N. fop: man who takes \n                        too much interest in his clothes and appearance",
      term: "foppish",
    },
    {
      definition: "raid; sudden raid or military advance; V.",
      term: "foray",
    },
    {
      definition:
        "patience; forgiveness; V. forbear: refrain from (in \n                        a generous and forgiving way); be patient; Ex. forbear \n                        to send him to prison",
      term: "forbearance",
    },
    {
      definition: "place where a river can be crossed on foot; V.",
      term: "ford",
    },
    {
      definition: "ancestors",
      term: "forebearsforbears)",
    },
    {
      definition:
        "premonition of evil; feeling of coming evil; V. forebode: \n                        be a warning of (something unpleasant)",
      term: "foreboding",
    },
    {
      definition:
        "suitable to debate or courts of law; of or used in \n                        legal proceedings and the tracking of criminals; Ex. forensic \n                        science/medicine",
      term: "forensic",
    },
    {
      definition:
        "predecessor; one that comes before and indicates the \n                        approach of another",
      term: "forerunner",
    },
    {
      definition:
        "give an indication beforehand; be a sign of (what is \n                        coming); portend; prefigure",
      term: "foreshadow",
    },
    {
      definition:
        "ability to foresee future happenings; prudence in providing \n                        for the future",
      term: "foresight",
    },
    {
      definition: "prevent by taking action in advance",
      term: "forestall",
    },
    {
      definition:
        "something surrendered as punishment for a crime or \n                        breach of contract; V: lose as a forfeit; N. forfeiture",
      term: "forfeit",
    },
    {
      definition:
        "counterfeit; reproduce fraudulently; form by heating \n                        in a forge and hammering into shape; move with a sudden \n                        increase of speed or power; Ex. forged ahead in the last \n                        two years; N: furnace where metals are heated",
      term: "forge",
    },
    {
      definition: "give up; do without",
      term: "forgoforego) ",
    },
    {
      definition: "sad and lonely; wretched; desolate",
      term: "forlorn",
    },
    {
      definition:
        "ceremonious quality; ceremonious adherence to rules; \n                        something done just for form's sake; Ex. mere formality",
      term: "formality",
    },
    {
      definition:
        "menacing; arousing fear; threatening; difficult to \n                        defeat; Ex. formidable foe/question",
      term: "formidable",
    },
    {
      definition: "desert; abandon; renounce",
      term: "forsake",
    },
    {
      definition:
        "renounce under oath; abandon; make a solemn promise \n                        to give up; CF. abjure",
      term: "forswear",
    },
    {
      definition: "strong point or special talent in a person's character",
      term: "forte",
    },
    {
      definition:
        "happening in the near future; ready; willing to help; \n                        Ex. No answer was forthcoming.",
      term: "forthcoming",
    },
    {
      definition: "straightforward; direct; frank",
      term: "forthright",
    },
    {
      definition: "bravery; courage; strength of mind",
      term: "fortitude",
    },
    {
      definition: "accidental; by chance; N. fortuity",
      term: "fortuitous",
    },
    {
      definition:
        "public square of an ancient Roman city; public place \n                        for open discussion; court of law",
      term: "forum",
    },
    {
      definition: "presumptuous or bold",
      term: "forward",
    },
    {
      definition:
        "rear; bring up (for a certain period only); encourage; \n                        promote the development of (feelings or ideas); Ex. help \n                        foster friendly relations; ADJ: giving parental care although \n                        not related by blood; Ex. foster parents",
      term: "foster",
    },
    {
      definition:
        "very bad or disagreeable; very dirty; Ex. foul smell/flavor/temper/language/air/deed/weather/means; \n                        N. act against the rules; V. make or become foul; commit \n                        a foul",
      term: "foul",
    },
    {
      definition: "person who establishes (an organization or business)",
      term: "founder",
    },
    {
      definition:
        "brawl(noisy quarrel or fight) in which a number of \n                        people take part; melee",
      term: "fracas",
    },
    {
      definition:
        "unruly; peevish; cranky; bad-tempered; Ex. fractious \n                        horse",
      term: "fractious",
    },
    {
      definition: "weak; N. frailty",
      term: "frail",
    },
    {
      definition:
        "right or privilege granted by authority; right to vote; \n                        license to sell a product in a particular territory",
      term: "franchise",
    },
    {
      definition:
        "wild; distraught as from fear or worry; Ex. frantic \n                        with fear",
      term: "frantic",
    },
    {
      definition:
        "cheating; deceitful; Ex. fraudulent means; N. fraud: \n                        deception; swindle",
      term: "fraudulent",
    },
    {
      definition:
        "filled (with something unpleasant); full; Ex. fraught \n                        with danger and difficulties; CF. freight",
      term: "fraught",
    },
    {
      definition:
        "brawl; fight; V: wear away or unravel by rubbing; have \n                        loose threads developing; cause to become worn out (a \n                        person's temper or nerves); CF. rub",
      term: "fray",
    },
    {
      definition:
        "pirate or plunderer who makes war in order to grow \n                        rich",
      term: "freebooter",
    },
    {
      definition: "frenzied; frantic",
      term: "freneticphrenetic)",
    },
    {
      definition: "madly excited; N. frenzy: violent wild excitement",
      term: "frenzied",
    },
    {
      definition: "painting on wet plaster (usually fresh)",
      term: "fresco",
    },
    {
      definition:
        "be annoyed or vexed; Ex. fret over your poor grades; \n                        N: irritation of mind; ADJ. fretful",
      term: "fret",
    },
    {
      definition: "clash or conflict in opinion; rubbing against",
      term: "friction",
    },
    {
      definition: "ornamental horizontal band on a wall",
      term: "frieze",
    },
    {
      definition: "intensely cold; cold in manner; Ex. frigid zone",
      term: "frigid",
    },
    {
      definition: "decorative edge of hanging threads; edge",
      term: "fringe",
    },
    {
      definition: "move about playfully; froric; ADJ. frisky: playful",
      term: "frisk",
    },
    {
      definition: "waste (time or money on unimportant things)",
      term: "fritter",
    },
    {
      definition:
        "lacking in seriousness; flippant; self-indulgently \n                        carefree; unworthy of serious attention; relatively unimportant; \n                        trivial",
      term: "frivolous",
    },
    {
      definition: "long loose garment (worn by monks)",
      term: "frock",
    },
    {
      definition:
        "play and jump about happily; frisk; Ex. frolicking \n                        young lambs",
      term: "frolic",
    },
    {
      definition: "prankish; gay; playful; merry; frisky",
      term: "frolicsome",
    },
    {
      definition: "fern leaf; palm or banana leaf",
      term: "frond",
    },
    {
      definition: "bear fruit; produce fruit",
      term: "fructify",
    },
    {
      definition:
        "thrift; economy; ADJ. frugal: practicing economy; costing \n                        little; inexpensive",
      term: "frugality",
    },
    {
      definition:
        "producing results; profitable; prolific; producing \n                        in abundance",
      term: "fruitful",
    },
    {
      definition:
        "bearing of fruit; fulfillment; realization; Ex. come \n                        to/be brought to fruition",
      term: "fruition",
    },
    {
      definition: "thwart; defeat; prevent from accomplishing a purpose",
      term: "frustrate",
    },
    {
      definition:
        "make stupid or confused as with alcholic drink; N. \n                        in a fuddle: confused",
      term: "fuddle",
    },
    {
      definition:
        "fleeting or transitory; lasting only a short time; \n                        roving(wandering); running away or fleeing as from the \n                        law; N: one who flees; Ex. fugitives at large",
      term: "fugitive",
    },
    {
      definition: "support on which a lever rests or pivots",
      term: "fulcrum",
    },
    {
      definition: "thunder; explode; issue a severe denunciation",
      term: "fulminate",
    },
    {
      definition:
        "disgustingly excessive; offensively flattering; Ex. \n                        fulsome praise/expressions of admire",
      term: "fulsome",
    },
    {
      definition:
        "move the fingers and hands awkwardly (in search of \n                        something); mishandle or drop a ball that is in play; \n                        bungle; botch; spoil by mishandling; N.",
      term: "fumble",
    },
    {
      definition:
        "made for practical use only (without decoration); functioning; \n                        Ex. functional modern furniture; CF. functionalism",
      term: "functional",
    },
    {
      definition: "official (who performs a particular function)",
      term: "functionary",
    },
    {
      definition: "basic; primary; essential",
      term: "fundamental",
    },
    {
      definition: "sad; solemn; suitable for a funeral",
      term: "funereal",
    },
    {
      definition: "frenzy; great anger and excitement; CF. fury",
      term: "furor",
    },
    {
      definition:
        "long shallow trench made by a plow; deep wrinkle in \n                        the skin; V.",
      term: "furrow",
    },
    {
      definition:
        "stealthy; quiet and secret (trying to escape notice); \n                        sneaky; Ex. furtive glance",
      term: "furtive",
    },
    {
      definition:
        "simultaneous firing or outburst (of missiles, questions, \n                        etc.)",
      term: "fusillade",
    },
    {
      definition: "union; coalition; V. fuse",
      term: "fusion",
    },
    {
      definition:
        "trouble or worry over trifles; make nervous; pay too much attention to; N: needless concern or worry (about a trivial thing); anxious nervous condition; display of attention; Ex. make a fuss over the baby",
      term: "fuss",
    },
    {
      definition: "fastidious; finicky; easily upset",
      term: "fussy",
    },
    {
      definition: "useless; hopeless; ineffectual",
      term: "futile",
    },
    {
      definition: "being everywhere; omnipresent; N. ubiquity",
      term: "ubiquitous",
    },
    {
      definition:
        "sore place appearing on the skin inside or outside \n                        the body; Ex. stomach ulcer; ADJ. ulcerous; V. ulcerate",
      term: "ulcer",
    },
    {
      definition:
        "intentionally hidden; beyond what is evident; situated \n                        beyond; unstated and often questionable; Ex. ulterior \n                        motive",
      term: "ulterior",
    },
    {
      definition:
        "final; not susceptible to further analysis; fundamental; \n                        Ex. The sun is the ultimate source of energy.",
      term: "ultimate",
    },
    {
      definition:
        "last demand; last warning; last statement of conditions \n                        that must be met; Ex. They have ignored our ultimatum.",
      term: "ultimatum",
    },
    {
      definition:
        "resentment; anger; sense of injury or insult; Ex. take \n                        umbrage at his rudeness",
      term: "umbrage",
    },
    {
      definition:
        "unexplicable; impossible to account for; unreasonable \n                        or mysterious",
      term: "unaccountable",
    },
    {
      definition: "complete agreement; ADJ. unanimous",
      term: "unanimity",
    },
    {
      definition: "not open to attack; impregnable; not subject to question",
      term: "unassailable",
    },
    {
      definition: "unsatisfied; not soothed",
      term: "unassuaged",
    },
    {
      definition: "modest; Ex. the champion's unassuming manner",
      term: "unassuming",
    },
    {
      definition: "violent; uncontrolled; Ex. unbridled rage/greed",
      term: "unbridled",
    },
    {
      definition: "strange; mysterious; Ex. uncanny knack",
      term: "uncanny",
    },
    {
      definition: "not done politely without due formalities",
      term: "unceremonious",
    },
    {
      definition:
        "unscrupulous; not guided by conscience; excessive; \n                        beyond reason; Ex. unconscionable demand",
      term: "unconscionable",
    },
    {
      definition: "boorish; clumsy in speech or behavior; outlandish",
      term: "uncouth",
    },
    {
      definition: "the act of anointing with oil; Ex. extreme unction",
      term: "unction",
    },
    {
      definition: "oily; bland; insincerely suave",
      term: "unctuous",
    },
    {
      definition: "done slyly and secretly (being dishonest)",
      term: "underhandunderhanded)",
    },
    {
      definition: "lying below; fundamental",
      term: "underlying",
    },
    {
      definition: "weaken gradually; sap; dig a mine beneath",
      term: "undermine",
    },
    {
      definition: "underline; emphasize",
      term: "underscore",
    },
    {
      definition:
        "state with less truth than seems warranted by the facts; \n                        Ex. He understated the seriousness of the crime; N. understatement; \n                        OP. overstate",
      term: "understate",
    },
    {
      definition:
        "funeral director; one whose business is to arrange \n                        burials",
      term: "undertaker",
    },
    {
      definition:
        "moving with a wavelike motion; V. undulate; CF. und: \n                        wave",
      term: "undulating",
    },
    {
      definition:
        "dig up; discover (facts) by careful searching; Ex. \n                        He unearthed some secrets about her; OP. conceal",
      term: "unearth",
    },
    {
      definition: "not earthly; supernatural; weird; ghostly",
      term: "unearthly",
    },
    {
      definition: "plain; clear; obvious",
      term: "unequivocal",
    },
    {
      definition: "infallibly; ADJ. unerring: making no mistakes",
      term: "unerringly",
    },
    {
      definition: "entirely acceptable; not offering any basis for criticism",
      term: "unexceptionable",
    },
    {
      definition: "steadfast; firm; not changing",
      term: "unfaltering",
    },
    {
      definition: "genuine; real",
      term: "unfeigned",
    },
    {
      definition: "liberate; free from chains; V. unfetter",
      term: "unfetter",
    },
    {
      definition:
        "immature; not having the feathers necessary to fly; \n                        CF. fledgling",
      term: "unfledged",
    },
    {
      definition: "defrock; strip a priest or minister of church authority",
      term: "unfrock",
    },
    {
      definition:
        "(of someone) awkward in movement; clumsy; (of something) \n                        unwieldy; Ex. ungainly dancer/instrument",
      term: "ungainly",
    },
    {
      definition: "ointment",
      term: "unguent",
    },
    {
      definition: "sameness; monotony; ADJ. uniform: the same all over",
      term: "uniformity",
    },
    {
      definition:
        "one-sided; involving or affecting only one side; Ex. \n                        unilateral declaration",
      term: "unilateral",
    },
    {
      definition:
        "that cannot be impeached; beyond doubt or question; \n                        blameless and exemplary",
      term: "unimpeachable",
    },
    {
      definition: "unrepressed; free in behavior and feelings",
      term: "uninhibited",
    },
    {
      definition: "unfrightening",
      term: "unintimating",
    },
    {
      definition: "without an equal; single in kind",
      term: "unique",
    },
    {
      definition:
        "unity of pitch (in musical performance); complete accord; \n                        Ex. The choir sang in unison.",
      term: "unison",
    },
    {
      definition:
        "characterizing or affecting all; general; present everywhere; \n                        of the universe; cosmic; Ex. universal agreement; Ex. \n                        a subject of universal interest",
      term: "universal",
    },
    {
      definition:
        "disheveled; uncared for in appearance; not combed; \n                        CF. comb",
      term: "unkempt",
    },
    {
      definition:
        "(of something bad) not moderated; unrelieved or immoderate; \n                        without qualification; absolute; Ex. unmitigated disaster",
      term: "unmitigated",
    },
    {
      definition: "inconspicuous; not blatant",
      term: "unobtrusive",
    },
    {
      definition: "having no previous example; novel; unparalleled",
      term: "unprecedented",
    },
    {
      definition: "unattractive",
      term: "unprepossessing",
    },
    {
      definition: "disentangle; solve",
      term: "unravel",
    },
    {
      definition: "making no attempt to change one's bad practices",
      term: "unregenerate",
    },
    {
      definition: "not requited; not reciprocated; Ex. unrequited love",
      term: "unrequited",
    },
    {
      definition: "disobedient; lawless; difficult to control",
      term: "unruly",
    },
    {
      definition:
        "distasteful; disagreeable; morally offensive; Ex. unsavory \n                        activity/reputation",
      term: "unsavory",
    },
    {
      definition: "unharmed; Ex. escape the accident unscathed",
      term: "unscathed",
    },
    {
      definition:
        "unbecoming; not proper in behavior; indecent; Ex. leave \n                        with unseemly haste",
      term: "unseemly",
    },
    {
      definition: "ugly; unpleasant to look at",
      term: "unsightly",
    },
    {
      definition: "untarnished; CF. sully",
      term: "unsullied",
    },
    {
      definition:
        "(of a position, esp. in an argument) indefensible; \n                        not able to be maintained",
      term: "untenable",
    },
    {
      definition:
        "unexpected and adverse; unfortunate or unlucky; Ex. \n                        untoward encounter",
      term: "untoward",
    },
    {
      definition:
        "unjustified; having no justification; groundless; baseless; \n                        undeserved",
      term: "unwarranted",
    },
    {
      definition: "awkward (to carry or move); cumbersome; unmanageable",
      term: "unwieldy",
    },
    {
      definition:
        "not knowing; unaware; unintentional; Ex. She was their \n                        unwitting accomplice; Ex. unwitting insult; CF. wit: know",
      term: "unwitting",
    },
    {
      definition:
        "unaccustomed; unusual; Ex. He arrived with unwonted \n                        punctuality.",
      term: "unwonted",
    },
    {
      definition: "reprimand; severely scold",
      term: "upbraid",
    },
    {
      definition: "(sitting or standing) straight up; honest; moral",
      term: "upright",
    },
    {
      definition: "noisy confusion",
      term: "uproar",
    },
    {
      definition:
        "marked by commotion or uproar; very noisy (esp. with \n                        laughter); hilarious; causing loud laughter; extremely \n                        funny",
      term: "uproarious",
    },
    {
      definition: "outcome; final result",
      term: "upshot",
    },
    {
      definition: "suave; refined in manner; elegant",
      term: "urbane",
    },
    {
      definition:
        "mischievous child (usually a boy); CF. urchin: hedgehog; \n                        CF. porcupine: pig with spikes ?; CF. sea urchin",
      term: "urchin",
    },
    {
      definition:
        "drive or force forward (by causing impulses); drive \n                        to take action; impel; entreat earnestly; Ex. urge horses; \n                        N: impulse that prompts action",
      term: "urge",
    },
    {
      definition:
        "compelling immediate action; pressing; persistent; \n                        importunate; Ex. urgent in his demands",
      term: "urgent",
    },
    {
      definition: "bearlike; pertaining to a bear",
      term: "ursine",
    },
    {
      definition:
        "act or manner of using; accepted practice; way in which \n                        words are actually used",
      term: "usage",
    },
    {
      definition:
        "seize another's power or rank (without legal authority); \n                        supplant; appropriate; N. usurpation; CF. take for one's \n                        own use",
      term: "usurp",
    },
    {
      definition: "lending money at illegal high rates of interest",
      term: "usury",
    },
    {
      definition: "ideal place, state, or society; ADJ. utopian",
      term: "utopia",
    },
    {
      definition:
        "excessively submissive or devoted to one's wife; CF. \n                        uxor: wife",
      term: "uxorious",
    },
    {
      definition:
        "walk through a substance, such as water, that impedes \n                        movement",
      term: "wade",
    },
    {
      definition: "speak equivocally about an issue; N.",
      term: "waffle",
    },
    {
      definition:
        "move gently (in air or in seas) by wind or waves; Ex. \n                        leaves wafting past the window",
      term: "waft",
    },
    {
      definition:
        "shake repeatedly from side to side; Ex. The dog wagged \n                        its tail; N: humorous person; wit",
      term: "wag",
    },
    {
      definition: "begin and continue (a war)",
      term: "wage",
    },
    {
      definition: "humorous; mischievous; tricky",
      term: "waggish",
    },
    {
      definition: "homeless child or animal; Ex. waifs and strays",
      term: "waif",
    },
    {
      definition:
        "give up temporarily; yield; N. waiver: waiving a right \n                        or claim; document that waives a right or claim",
      term: "waive",
    },
    {
      definition:
        "trail of ship or other object through water; path of \n                        something that has gone before; Ex. hunger followed in \n                        the wake of the war",
      term: "wake",
    },
    {
      definition:
        "roll in mud; indulge in; (of a ship) roll in a rough \n                        sea; become helpless; Ex. wallow in the mud/luxury",
      term: "wallow",
    },
    {
      definition: "having a pale or sickly color; pallid",
      term: "wan",
    },
    {
      definition: "strong longing to travel",
      term: "wanderlust",
    },
    {
      definition:
        "decrease in size or strength (after being full); grow \n                        gradually to an end; Ex. The moon waxes and wanes every \n                        month; N.",
      term: "wane",
    },
    {
      definition:
        "achieve by cleverness or trick; wiggle out; fake; Ex. \n                        She tried to wangle an invitation to the party.",
      term: "wangle",
    },
    {
      definition:
        "unrestrained; gratuitously cruel; willfully malicious; \n                        unchaste; sexually improper; promiscuous; Ex. wanton spending/killing; \n                        CF. having no just cause",
      term: "wanton",
    },
    {
      definition: "(of a bird) sing; babble; N.",
      term: "warble",
    },
    {
      definition:
        "administrative division of a city; division in a hospital \n                        or prison; incompetent person placed under the protection \n                        of a guardian; V: guard; ward off: avert",
      term: "ward",
    },
    {
      definition: "twist out of shape; N.",
      term: "warp",
    },
    {
      definition:
        "justification; written order that serves as authorization \n                        (esp. a judicial writ); Ex. search/death warrant; V: justify; \n                        guarantee",
      term: "warrant",
    },
    {
      definition: "justified; authorized",
      term: "warranted",
    },
    {
      definition: "guarantee; assurance by seller",
      term: "warranty",
    },
    {
      definition:
        "tunnels in which rabbits live; overcrowded living area; \n                        crowded conditions in which people live",
      term: "warren",
    },
    {
      definition: "very cautious; watchful",
      term: "wary",
    },
    {
      definition: "waster; profligate",
      term: "wastrel",
    },
    {
      definition:
        "move or swing back and forth; be uncertain or unsteady \n                        in decision or movement; Ex. wavering between accepting \n                        and refusing",
      term: "waver",
    },
    {
      definition: "increase gradually (as the moon); grow",
      term: "wax",
    },
    {
      definition: "ambush; lie in wait for and attack",
      term: "waylay",
    },
    {
      definition:
        "accustom a baby not to nurse; accustom (the young of \n                        a mammal) to take nourishment other than by suckling; \n                        give up a cherished activity; cause to gradually leave \n                        (an interest or habit); Ex. wean oneself from cigarettes",
      term: "wean",
    },
    {
      definition: "tired after long work; V.",
      term: "weary",
    },
    {
      definition:
        "pass safely through (a storm or difficult period); \n                        endure the effects of weather or other forces",
      term: "weather",
    },
    {
      definition: "eerie; strange; unnatural",
      term: "weird",
    },
    {
      definition: "of good upbringing; well-mannered and refined",
      term: "wellbred ",
    },
    {
      definition: "raised mark from a beating or whipping",
      term: "welt",
    },
    {
      definition:
        "wallow (as in mud or high seas); lie soaked (as in \n                        blood); Ex. The victims weltered in their blood.",
      term: "welter",
    },
    {
      definition:
        "deceive, persuade, or obtain by flattery; cajole; coax; \n                        Ex. wheedle a promise out of her",
      term: "wheedle",
    },
    {
      definition:
        "young animal (esp. of the dog or cat family); young \n                        wolf, dog, tiger, etc.",
      term: "whelp",
    },
    {
      definition: "sharpen; stimulate; Ex. whet someone's appetite",
      term: "whet",
    },
    {
      definition:
        "puff or gust (of air, scent, etc.); short-lasting smell; \n                        hint; Ex. whiff of perfume/scandal",
      term: "whiff",
    },
    {
      definition: "sudden capricious idea; fancy",
      term: "whim",
    },
    {
      definition: "capricious; fanciful; amusingly strange",
      term: "whimsical",
    },
    {
      definition:
        "whim; tendency to behave amusingly strangely; Ex. story \n                        full of whimsy",
      term: "whimsy",
    },
    {
      definition:
        "complain (in a sad voice); make a high sad sound (as \n                        in pain or supplication)",
      term: "whine",
    },
    {
      definition:
        "neigh like a horse; CF. neigh: make the sound which \n                        horses make",
      term: "whinny",
    },
    {
      definition: "small amount; smallest speck; Ex. not a whit of",
      term: "whit",
    },
    {
      definition:
        "pare; cut away thin bits (from wood); fashion in this \n                        way; reduce gradually; trim",
      term: "whittle",
    },
    {
      definition: "conducive to mental or physical health; healthful",
      term: "wholesome",
    },
    {
      definition:
        "ring of leaves around stem; ring; circular arrangement; \n                        Ex. whorls on the fingers",
      term: "whorl",
    },
    {
      definition:
        "wriggle; move from side to side with irregular twisting \n                        motions",
      term: "wiggle",
    },
    {
      definition: "wilful; intentional; headstrong",
      term: "willful",
    },
    {
      definition: "flexible; pliant; slender; CF. willow",
      term: "willowy",
    },
    {
      definition: "loose freshness; droop",
      term: "wilt",
    },
    {
      definition: "crafty; cunning; artful; N. wile: deceitful stratagem",
      term: "wily",
    },
    {
      definition:
        "move back suddenly; shrink back; flinch; Ex. She winced \n                        as she touched the cold body.",
      term: "wince",
    },
    {
      definition: "fallen fruit; unexpected lucky event",
      term: "windfall",
    },
    {
      definition:
        "sift; separate the chaff from grain by blowing; separate \n                        good parts from bad; CF. wind",
      term: "winnow",
    },
    {
      definition:
        "charming (in a childlike way); agreeable; gracious; \n                        engaging",
      term: "winsome",
    },
    {
      definition: "small bunch (of hair); faint streak (of smoke)",
      term: "wisp",
    },
    {
      definition: "thin; slight; barely discernible",
      term: "wispy",
    },
    {
      definition:
        "sadly thoughtful (because of desires or memories); \n                        sadly pensive; vaguely longing",
      term: "wistful",
    },
    {
      definition:
        "introverted; retiring; remote remote/distant in manner; \n                        aloof",
      term: "withdrawn",
    },
    {
      definition:
        "(of a plant) dry up from loss of moisture; lose freshness; \n                        shrivel; decay",
      term: "wither",
    },
    {
      definition: "refuse to give; hold back; Ex. withholding tax",
      term: "withhold",
    },
    {
      definition: "stand up against; resist successfully",
      term: "withstand",
    },
    {
      definition: "lacking intelligence or wit; foolish; idiotic",
      term: "witless",
    },
    {
      definition: "witty saying; wisecrack(clever joking remark)",
      term: "witticism",
    },
    {
      definition: "sorcery; magic",
      term: "wizardry",
    },
    {
      definition: "shriveled; withered; Ex. wizened apple/old lady",
      term: "wizened",
    },
    {
      definition:
        "great sorrow; deep inconsolable grief; affliction; \n                        suffering; Ex. financial woes",
      term: "woe",
    },
    {
      definition:
        "sad; (of something bad) deplorable; deplorably bad; \n                        Ex. woeful housing conditions",
      term: "woeful",
    },
    {
      definition:
        "(the stated person's) habit or custom; habitual procedure; \n                        ADJ. wonted: customary",
      term: "wont",
    },
    {
      definition:
        "engrossed in matters of this earth; not spiritual; \n                        of the material world",
      term: "worldly",
    },
    {
      definition:
        "quarrel noisily; obtain through arguing; herd cattle; \n                        N.",
      term: "wrangle",
    },
    {
      definition: "anger; fury",
      term: "wrath",
    },
    {
      definition: "inflict; Ex. wreak one's vengeance on",
      term: "wreak",
    },
    {
      definition:
        "twist; pull; strain; Ex. He wrenched the gun out of \n                        her hands.",
      term: "wrench",
    },
    {
      definition:
        "obtain by pulling violently; pull away; take by violence; \n                        Ex. wrest victory from their grasp",
      term: "wrest",
    },
    {
      definition:
        "miserable person; bad or despicable person; ADJ. wretched: \n                        miserable; bad; contemptible; vile",
      term: "wretch",
    },
    {
      definition:
        "twist (to extract liquid); extract by twisting; wrench \n                        painfully (necks or hands)",
      term: "wring",
    },
    {
      definition: "small ridge on a smooth surface (face or cloth); V.",
      term: "wrinkle",
    },
    {
      definition:
        "written command issued by a court (telling someone \n                        to do or not to do something)",
      term: "writ",
    },
    {
      definition: "twist in coils; contort in pain",
      term: "writhe",
    },
    {
      definition: "stubbornly wrong",
      term: "wrongheaded",
    },
    {
      definition:
        "(esp. of an expression of the face) twisted; with a \n                        humorous twist (expressing displeasure)",
      term: "wry",
    },
    {
      definition:
        "one who commits sabotage; destroyer of property; N. \n                        sabotage: destruction of property (usually carried out \n                        secretly)",
      term: "saboteur",
    },
    {
      definition: "cloying sweet; characteristic of sugar or saccharin",
      term: "saccharine",
    },
    {
      definition:
        "desecrating; profane; N. sacrilege: desecration, misuse, \n                        or theft of something sacred",
      term: "sacrilegious",
    },
    {
      definition: "invioably sacred; most sacred; inviolable",
      term: "sacrosanct",
    },
    {
      definition: "inclined to cruelty; N. sadism: delight in cruelty",
      term: "sadistic",
    },
    {
      definition: "Scandinavian myth; any legend; long heroic narrative",
      term: "saga",
    },
    {
      definition: "wise; perceptive; shrewd; having insight; N. sagacity",
      term: "sagacious",
    },
    {
      definition: "person celebrated for wisdom; wise person; ADJ: wise",
      term: "sage",
    },
    {
      definition: "lascivious; lustful; Ex. salacious monk",
      term: "salacious",
    },
    {
      definition:
        "prominent; projecting beyond a line; conspicuous; Ex. \n                        salient features",
      term: "salient",
    },
    {
      definition: "salty",
      term: "saline",
    },
    {
      definition:
        "(of the skin) yellowish and unhealthy-looking; sickly \n                        in color; Ex. sallow complexion due to jaundice",
      term: "sallow",
    },
    {
      definition:
        "healthful; conducive to health or well-being; socially \n                        desirable; Ex. salubrious area; CF. health",
      term: "salubrious",
    },
    {
      definition:
        "tending to improve; beneficial; wholesome; Ex. The \n                        punishment had a salutary effect on the boy; CF. health",
      term: "salutary",
    },
    {
      definition:
        "rescue (goods or property) from loss; N: saving; property \n                        saved",
      term: "salvage",
    },
    {
      definition:
        "displaying ostentatious or hypocritical devoutness; \n                        N. sanctimony: hypocritical piety",
      term: "sanctimonious",
    },
    {
      definition:
        "approve; ratify; N: permission; penalty intended to \n                        enforce compliance",
      term: "sanction",
    },
    {
      definition:
        "place of refuge; shelter; shrine; holy place; Ex. The \n                        outlaw was granted sanctuary in the church.",
      term: "sanctuary",
    },
    {
      definition: "bloody; with much bloodshed",
      term: "sanguinary",
    },
    {
      definition:
        "optimistic; cheerful; hopeful; of the color of blood; \n                        red",
      term: "sanguine",
    },
    {
      definition:
        "diminish; weaken; undermine the foundations of (a fortification); \n                        Ex. The element kryptonite sapped his strength.",
      term: "sap",
    },
    {
      definition:
        "cutting ironic remark; scornful remarks; stinging rebuke; \n                        ADJ. sarcastic",
      term: "sarcasm",
    },
    {
      definition:
        "scornfully mocking; disdainful; sarcastic; cynical; \n                        Ex. sardonic smile",
      term: "sardonic",
    },
    {
      definition:
        "pertaining to tailors or tailoring; Ex. a man of great \n                        sartorial elegance; CF. sartor: tailor",
      term: "sartorial",
    },
    {
      definition: "satisfy to the full; satisfy to excess; cloy",
      term: "sate",
    },
    {
      definition: "small body revolving around a larger one",
      term: "satellite",
    },
    {
      definition:
        "satisfy fully (physical needs such as hunger); sate; \n                        N. satiety: condition of being satiated",
      term: "satiate",
    },
    {
      definition:
        "form of literature in which irony, sarcasm, and ridicule \n                        are employed to attack human vice and folly",
      term: "satire",
    },
    {
      definition: "using satire; mocking",
      term: "satirical",
    },
    {
      definition:
        "soak thoroughly; imbue; impregnate; charge; fill to \n                        capacity",
      term: "saturate",
    },
    {
      definition:
        "morose; gloomy; Ex. Do not be misled by his saturnine \n                        countenance.",
      term: "saturnine",
    },
    {
      definition:
        "half-human, half-bestial being in the court of Dionysus \n                        (resembling a goat), portrayed as wanton(unrestrained) \n                        and cunning; lecher; CF. faun; CF. goat: lecherous man",
      term: "satyr",
    },
    {
      definition: "stroll(go for a leisurely walk) slowly; N.",
      term: "saunter",
    },
    {
      definition: "scholar; learned person; CF. savoir: know",
      term: "savant",
    },
    {
      definition:
        "enjoy; have a distinctive flavor, smell, or quality; \n                        N: taste or smell; distinctive quality",
      term: "savor",
    },
    {
      definition:
        "pleasant in taste; tasty; pleasing, attractive, or \n                        agreeable; Ex. savory reputation",
      term: "savory",
    },
    {
      definition: "case for a sword blade; sheath",
      term: "scabbard",
    },
    {
      definition: "a great quantity; Ex. scads of clothes",
      term: "scad",
    },
    {
      definition:
        "temporary platform for workers (to work at heights \n                        above the ground); bracing framework; platform for execution",
      term: "scaffold",
    },
    {
      definition:
        "climb up; ascend; remove or come off in scales; N: \n                        flake of epidermis; ascending or descending series of \n                        musical tones",
      term: "scale",
    },
    {
      definition: "meager; insufficient",
      term: "scanty",
    },
    {
      definition:
        "someone who bears the blame for others; whipping boy; \n                        CF. escape+goat",
      term: "scapegoat",
    },
    {
      definition:
        "hunt through discarded materials for usable items or \n                        food; search, especially for food; N. scavenger: one who \n                        scavenges; animal that feeds on refuse and carrion",
      term: "scavenge",
    },
    {
      definition:
        "plot outline; screenplay(script for a movie); opera \n                        libretto; outline of possible future events",
      term: "scenario",
    },
    {
      definition:
        "of a schema or scheme; relating to an outline or diagram; \n                        using a system of symbols; N. schema: diagrammatic representation; \n                        outline",
      term: "schematic",
    },
    {
      definition:
        "systematic plan; plot; clever dishonest plan; orderly \n                        arrangement of elements; Ex. health insurance scheme; \n                        Ex. a scheme to escape taxes; Ex. a color scheme; Ex. \n                        a story with no scheme; V: contrive a scheme",
      term: "scheme",
    },
    {
      definition:
        "division into factions (esp. within a religious body); \n                        split",
      term: "schism",
    },
    {
      definition:
        "full of learning; erudite; like a scholar; Ex. scholarly \n                        journal",
      term: "scholarly",
    },
    {
      definition:
        "trace; minute amount; shred; least bit; Ex. There is \n                        not a scintilla of truth; CF. spark",
      term: "scintilla",
    },
    {
      definition:
        "sparkle; flash; be animated; be full of life; Ex. scintillating \n                        conversation",
      term: "scintillate",
    },
    {
      definition: "detached plant shoot used in grafting; descendant",
      term: "scion",
    },
    {
      definition: "laugh (at); mock; ridicule; Ex. scoff at their threats",
      term: "scoff",
    },
    {
      definition: "sear; N.",
      term: "scorch",
    },
    {
      definition:
        "number of points; written form of a musical composition; \n                        reason; group of 20; notch or incision; Ex. full/vocal \n                        score; Ex. Don't worry on that score; V: mark with lines \n                        or notches; Ex. score the paper to make it easy to fold",
      term: "score",
    },
    {
      definition:
        "stamp out(put an end to); thwart; hinder; Ex. scotch \n                        the rumor; CF. cut; CF. 劝悼阑 临捞绰 狼固",
      term: "scotch",
    },
    {
      definition:
        "lash; whip (formerly used for punishment); source of \n                        severe punishment; V: whip; afflict",
      term: "scourge",
    },
    {
      definition: "frown angrily; N: angry frown",
      term: "scowl",
    },
    {
      definition:
        "small bit or fragment; discarded waste material; fight; \n                        Ex. a scrap of paper/cloth; V: break into parts for disposal; \n                        discard as worthless; fight; quarrel",
      term: "scrap",
    },
    {
      definition: "quarrelsome",
      term: "scrappy",
    },
    {
      definition: "leftover food",
      term: "scraps",
    },
    {
      definition: "unpleasant high sharp sound; shriek; V.",
      term: "screech",
    },
    {
      definition: "disorderly fight between two or more people",
      term: "scrimmage",
    },
    {
      definition:
        "hesitate for ethical reasons; fret about; Ex. She did \n                        not scruple to read his diary; N: uneasy feeling arising \n                        from conscience; conscience",
      term: "scruple",
    },
    {
      definition: "conscientious; extremely thorough; Ex. scrupulous worker",
      term: "scrupulous",
    },
    {
      definition: "examine closely and critically; N. scrutiny",
      term: "scrutinize",
    },
    {
      definition:
        "struggle confusedly; move off in a confused hurry; \n                        N. CF. scuffling twins ?",
      term: "scuffle",
    },
    {
      definition: "abusive; obscene; indecent; Ex. scurrilous remark",
      term: "scurrilous",
    },
    {
      definition: "move hastily; hurry; move briskly",
      term: "scurry",
    },
    {
      definition:
        "contemptible; despicable; N: disease caused by deficiency \n                        of Vitamin C",
      term: "scurvy",
    },
    {
      definition:
        "sink (a ship) by cutting holes in the hull; scrap; \n                        discard; N: small hatch in a ship's deck or hull",
      term: "scuttle",
    },
    {
      definition:
        "sordid; base; filthy; unwholesome; Ex. seamy side of \n                        city life",
      term: "seamy",
    },
    {
      definition:
        "burn the surface of; char or burn; brand; parch; cause \n                        (a plant) to wither",
      term: "sear",
    },
    {
      definition:
        "enhance the flavor of by adding a spice, etc.; inure; \n                        harden; N. seasoning: something used in seasoning",
      term: "season",
    },
    {
      definition:
        "occurring at the proper time or season; opportune; \n                        Ex. seasonable intervention in the dispute",
      term: "seasonable",
    },
    {
      definition: "of a particular season; Ex. seasonal rise in employment",
      term: "seasonal",
    },
    {
      definition: "experienced",
      term: "seasoned",
    },
    {
      definition: "withdrawal; V. secede: withdraw formally from membership",
      term: "secession",
    },
    {
      definition:
        "isolation; solitude; V. seclude: set apart from others; \n                        isolate",
      term: "seclusion",
    },
    {
      definition:
        "conceal; hide away or cache; produce and release a \n                        substance into an organism; CF. secretive",
      term: "secrete",
    },
    {
      definition:
        "separate religious body; faction; group of people with \n                        common beliefs within a larger group",
      term: "sect",
    },
    {
      definition:
        "of a sect; narrow-minded; parochial; N: member of a \n                        sect; narrow-minded person",
      term: "sectarian",
    },
    {
      definition:
        "worldly; not pertaining to church matters or religion; \n                        temporal",
      term: "secular",
    },
    {
      definition:
        "composed (with no excitement); grave; V: administer \n                        a sedative to; CF. sedative",
      term: "sedate",
    },
    {
      definition:
        "requiring sitting; done while sitting; not moving from \n                        one place to another; settled; Ex. sedentary job/population",
      term: "sedentary",
    },
    {
      definition:
        "conduct or language inciting rebellion; rebellion; \n                        resistance to authority; insubordination; ADJ. seditious",
      term: "sedition",
    },
    {
      definition: "lead away from proper conduct; entice; ADJ. seductive",
      term: "seduce",
    },
    {
      definition: "diligent; assiduous; paying attention; N. sedulity",
      term: "sedulous",
    },
    {
      definition:
        "run-down; decrepit; disreputable; having many seeds; \n                        Ex. seedy downtown hotel",
      term: "seedy",
    },
    {
      definition: "(of behavior) proper; appropriate",
      term: "seemly",
    },
    {
      definition:
        "pass slowly through small openings; ooze; trickle; \n                        N. seepage",
      term: "seep",
    },
    {
      definition:
        "be violently disturbed; boil; (of a liquid) move about \n                        wildly as if boiling; Ex. The nation was seething with \n                        discontent.",
      term: "seethe",
    },
    {
      definition: "seine net; net for catching fish",
      term: "seine",
    },
    {
      definition: "pertaining to earthquakes",
      term: "seismic",
    },
    {
      definition:
        "careful in choosing; having an effect only on certain \n                        things; not general; Ex. eclectic weed killer",
      term: "selective",
    },
    {
      definition: "excessive indulgence of one's own desire",
      term: "selfindulgence ",
    },
    {
      definition: "sure of one's own righteousness; moralistic",
      term: "selfrighteous ",
    },
    {
      definition:
        "outward appearance; guise; Ex. We called in the troops \n                        to bring a/some semblance of order to the city.",
      term: "semblance",
    },
    {
      definition:
        "related to seed or semen; germinal; creative; providing \n                        a basis for further development; influencing future developments; \n                        Ex. seminal research in a new field",
      term: "seminal",
    },
    {
      definition:
        "school for training future ministers; secondary school, \n                        especially for young women",
      term: "seminary",
    },
    {
      definition:
        "old age; feeblemindedness of old age; ADJ. senile: \n                        resulting from old age; showing the weakness of body or \n                        mind from old age; Ex. senile dementia",
      term: "senility",
    },
    {
      definition:
        "process of being made sensitive or acutely responsive \n                        to an external agent or substance; V. sensitize: make \n                        or become sensitive",
      term: "sensitization",
    },
    {
      definition:
        "devoted to the pleasures of the sense; carnal; voluptuous; \n                        Ex. sensual woman/curves/lips",
      term: "sensual",
    },
    {
      definition:
        "giving pleasure to the senses; pertaining to the physical \n                        senses; operating through the senses; sensuous feeling \n                        of soft velvet on the skin",
      term: "sensuous",
    },
    {
      definition: "pithy; terse; concise; aphoristic",
      term: "sententious",
    },
    {
      definition:
        "capable of sensation and conscious; aware; sensitive; \n                        Ex. sentient creature; N. sentience",
      term: "sentient",
    },
    {
      definition: "swayed by sentiment; appealing to the sentiments",
      term: "sentimental",
    },
    {
      definition: "sentry; lookout",
      term: "sentinel",
    },
    {
      definition:
        "of or causing sepsis; putrid; producing putrefaction; \n                        N. sepsis: poisoning of part of the body (producing pus)",
      term: "septic",
    },
    {
      definition: "tomb; V: place in a sepulcher; ADJ. sepulchral",
      term: "sepulcher",
    },
    {
      definition: "isolate; segregate; seclude; retire from public life",
      term: "sequester",
    },
    {
      definition: "sear; parched; dry",
      term: "sere",
    },
    {
      definition:
        "gift for finding valuable things by accident; accidental \n                        good fortune or luck; CF. The Three Princes of Serendip",
      term: "serendipity",
    },
    {
      definition: "calmness; placidity; ADJ. serene",
      term: "serenity",
    },
    {
      definition:
        "winding; twisting; of or like a serpent; Ex. serpentine \n                        course of the river; N. serpent: snake",
      term: "serpentine",
    },
    {
      definition: "having a sawtoothed edge; Ex. serrated leaf",
      term: "serrated",
    },
    {
      definition: "slavish; cringing; N. servility",
      term: "servile",
    },
    {
      definition: "slavery; compulsory labor imposed as a punishment",
      term: "servitude",
    },
    {
      definition:
        "separate; cut off (a part) from a whole; break up (a \n                        relationship); N. severance; CF. severance pay: extra \n                        pay given an employee upon leaving a position",
      term: "sever",
    },
    {
      definition:
        "harshness; intensity; sternness; austerity; ADJ. severe: \n                        harsh; strict; extremely violent or intense",
      term: "severity",
    },
    {
      definition:
        "navigation tool used to determine a ship's latitude \n                        and longitude (by measuring the altitudes of stars)",
      term: "sextant",
    },
    {
      definition: "crude cabin",
      term: "shack",
    },
    {
      definition: "chain; fetter; confine with shackles; N.",
      term: "shackle",
    },
    {
      definition:
        "slight difference in degree; nuance; degree of color; \n                        Ex. shades of meaning/grey",
      term: "shade",
    },
    {
      definition:
        "pretend; feign; ADJ: not genuine; fake; Ex. sham jewelry; \n                        N: something that is not what it appears; impostor; pretense; \n                        Ex. The agreement was a sham.",
      term: "sham",
    },
    {
      definition:
        "(place or scene of) complete disorder or ruin; wreck; \n                        mess; Ex. After the hurricane, the coast was a shambles.",
      term: "shambles",
    },
    {
      definition: "imaginary remote paradise on earth; CF. Lost Horizon",
      term: "shangrila ",
    },
    {
      definition:
        "fragment generally of broken pottery (glass, clay bowl, \n                        or cup)",
      term: "shard",
    },
    {
      definition:
        "very thin piece, usually of wood (cut from a surface \n                        with a sharp blade)",
      term: "shaving",
    },
    {
      definition:
        "bundle of stalks of grain; any bundle of things tied \n                        together",
      term: "sheaf",
    },
    {
      definition:
        "remove (fleece or hair) by cutting; remove the hair \n                        or fleece from; cut with or as if with shears; N: shears; \n                        pair of scissors",
      term: "shear",
    },
    {
      definition:
        "place into a case; insert into or provide with a sheath; \n                        Ex. He sheathed his dagger; N. sheath: case for a blade",
      term: "sheathe",
    },
    {
      definition:
        "small roofed structure for storage and shelter; V: \n                        pour forth; lose by natural process; repel without allowing \n                        penetration; radiate; cast; Ex. shed tears/light/water/skin/leaves",
      term: "shed",
    },
    {
      definition: "pure; thin and transparent; very steep",
      term: "sheer",
    },
    {
      definition: "flavored dessert ice",
      term: "sherbet",
    },
    {
      definition:
        "change position or place; exchange (one thing) for \n                        another; change in direction or position; Ex. shift the \n                        stolen goods; N. group of workers which takes turns with \n                        other groups; working period of such a group",
      term: "shift",
    },
    {
      definition:
        "shine with a flickering light; glimmer intermittently; \n                        Ex. The moonlight shimmered on the water; N.",
      term: "shimmer",
    },
    {
      definition: "avoid (responsibility, work, etc.); malinger",
      term: "shirk",
    },
    {
      definition:
        "made of inferior material; sham; not genuine; inferior; \n                        dishonest; Ex. shoddy goods/trick",
      term: "shoddy",
    },
    {
      definition: "new growth from a plant",
      term: "shoot",
    },
    {
      definition:
        "push forward; push roughly; Ex. pushing and shoving \n                        to get on the bus; N.",
      term: "shove",
    },
    {
      definition: "scolding woman; very small mouselike animal",
      term: "shrew",
    },
    {
      definition: "clever; astute",
      term: "shrewd",
    },
    {
      definition: "make or become shrunken and wrinkled (often by drying)",
      term: "shrivel",
    },
    {
      definition: "shake uncontrollably; tremble; V.",
      term: "shudder",
    },
    {
      definition:
        "mix together; jumble; move (something) from one place \n                        to another; slide (the feet) along the ground while walking; \n                        Ex. shuffle papers from one pile to another; N.",
      term: "shuffle",
    },
    {
      definition:
        "keep away from; avoid deliberately; Ex. She has been \n                        shunned by her neighbors.",
      term: "shun",
    },
    {
      definition:
        "move (a railway train) from one track to another; turn \n                        aside; divert; sidetrack; Ex. shunt traffic around an \n                        accident; N.",
      term: "shunt",
    },
    {
      definition: "lawyer using questionable methods; unscrupulous practioner",
      term: "shyster",
    },
    {
      definition: "brother or sister",
      term: "sibling",
    },
    {
      definition:
        "prophetic; oracular; N. sibyl: woman prophet (in the \n                        ancient world)",
      term: "sibylline",
    },
    {
      definition: "relating to stars; Ex. sidereal day",
      term: "sidereal",
    },
    {
      definition:
        "switch (a railroad car) to a siding; divert from a \n                        main issue; N. CF. siding: short section of railroad track \n                        connected by switches with a main track",
      term: "sidetrack",
    },
    {
      definition:
        "put through a sieve to separate fine from coarse particles; \n                        sort or examine carefully",
      term: "sift",
    },
    {
      definition:
        "expressing a meaning; important; Ex. significant smile; \n                        N. significance: importance; meaning; V. signify: denote; \n                        mean; signal; make known; matter; be significant",
      term: "significant",
    },
    {
      definition:
        "sediment deposited by running water (at the entrance \n                        to a harbor or by a bend in a river)",
      term: "silt",
    },
    {
      definition: "monkeylike; N: ape or monkey",
      term: "simian",
    },
    {
      definition:
        "comparison of one thing with another, using the word \n                        like or as",
      term: "simile",
    },
    {
      definition: "smirk; smile in a silly way; smile affectedly",
      term: "simper",
    },
    {
      definition: "oversimplified",
      term: "simplistic",
    },
    {
      definition: "feign; imitate",
      term: "simulate",
    },
    {
      definition:
        "well-paid position with little responsibility; CF. \n                        sine cure: without care; CF. San Serif",
      term: "sinecure",
    },
    {
      definition:
        "(of meat) tough; strong and firm; muscular; N. sinew: \n                        tendon; strong cord connecting a muscle to a bone",
      term: "sinewy",
    },
    {
      definition:
        "being only one; individual; unique; extraordinary; \n                        odd; Ex. singular beauty/behavior",
      term: "singular",
    },
    {
      definition: "evil; ominous",
      term: "sinister",
    },
    {
      definition:
        "twisting; winding; bending in and out; not morally \n                        honest",
      term: "sinuous",
    },
    {
      definition: "apparatus for making sounds; womanlike creature",
      term: "siren",
    },
    {
      definition:
        "sceptic; doubter; person who suspends judgment until \n                        he has examined the evidence supporting a point of view; \n                        ADJ. skeptical; N. skepticism; scepticism",
      term: "skeptic",
    },
    {
      definition: "small light sailboat or rowboat",
      term: "skiff",
    },
    {
      definition:
        "read or glance through quickly; touch lightly in passing; \n                        brush; remove from the surface of a liquid",
      term: "skim",
    },
    {
      definition:
        "provide or use scantily; live very economically; Ex. \n                        skimp on necessities; ADJ. skimpy: inadequate in amount; \n                        scanty; stingy; niggardly",
      term: "skimp",
    },
    {
      definition: "miser; stingy person",
      term: "skinflint",
    },
    {
      definition: "minor fight; minor battle in war; V.",
      term: "skirmish",
    },
    {
      definition:
        "inconstant; capricious; frivolous; not serious; Ex. \n                        charming but skittish young woman; CF. skit",
      term: "skittish",
    },
    {
      definition:
        "dishonest behavior or action; Ex. skulduggery in the \n                        election",
      term: "skulduggeryskullduggery)",
    },
    {
      definition:
        "move furtively and secretly; Ex. He skulked through \n                        the less fashionable sections of the city.",
      term: "skulk",
    },
    {
      definition:
        "moving slowly; sluggish; inactive; (of a rope) loose; \n                        negligent; lax; Ex. slack season; Ex. slack in one's work; \n                        N. V.",
      term: "slack",
    },
    {
      definition: "slow up; loosen; make or become slack",
      term: "slacken",
    },
    {
      definition: "glassy residue from smelting metal; dross; waste matter",
      term: "slag",
    },
    {
      definition: "satisfy (thirst); quench; sate",
      term: "slake",
    },
    {
      definition:
        "defamation; utterance of false and malicious statements; \n                        V. ADJ. slanderous",
      term: "slander",
    },
    {
      definition:
        "hit quickly with the flat part of the hand; N. CF. \n                        smack",
      term: "slap",
    },
    {
      definition: "hasty and careless; haphazard; sloppy(carelessly done)",
      term: "slapdash",
    },
    {
      definition:
        "killing of animals for food; massacre; V: butcher (animals) \n                        for food; kill in large numbers",
      term: "slaughter",
    },
    {
      definition:
        "of or like a slave; servile; showing no originality; \n                        copied very closely; Ex. slavish devotion/copy of the \n                        original",
      term: "slavish",
    },
    {
      definition:
        "shabby and dirty; flimsy; insubstantial; Ex. sleazy \n                        back-street hotel/fabric",
      term: "sleazy",
    },
    {
      definition: "large sled drawn by work animals",
      term: "sledge",
    },
    {
      definition: "smooth and shining (as from good health); V.",
      term: "sleek",
    },
    {
      definition:
        "one that achieves unexpected success; something originally \n                        of little value or importance that in time becomes very \n                        valuable",
      term: "sleeper",
    },
    {
      definition: "large vehicle drawn by a horse over snow or ice",
      term: "sleigh",
    },
    {
      definition:
        "dexterity; CF. sleight of hand: legerdemain; quickness \n                        of the hands in doing tricks",
      term: "sleight",
    },
    {
      definition: "large quantity or number; Ex. slew of errands left",
      term: "slew",
    },
    {
      definition:
        "make smooth or glossy; N: smooth surface; Ex. oil slick; \n                        ADJ: smooth; glossy; deftly executed; adroit; glib",
      term: "slick",
    },
    {
      definition:
        "insult to one's dignity; snub; V: treat as if of small \n                        importance; insult; snub; ADJ. small in size; of small \n                        importance",
      term: "slight",
    },
    {
      definition:
        "move furtively; ADJ. slinky: stealthy; furtive; sneaky \n                        (as in ambush)",
      term: "slink",
    },
    {
      definition:
        "slovenly; careless; sloppy; untidy; shabby; Ex. slipshod \n                        work",
      term: "slipshod",
    },
    {
      definition: "slip or slide",
      term: "slither",
    },
    {
      definition:
        "slow moving tree-dwelling mammal; laziness; ADJ. slothful: \n                        lazy; indolent",
      term: "sloth",
    },
    {
      definition:
        "(of a snake) shed or cast off (dead outer skin); N: \n                        outer layer that is shed",
      term: "slough",
    },
    {
      definition:
        "untidy; careless in work habits; slipshod; N. sloven: \n                        one who is habitually untidy or careless",
      term: "slovenly",
    },
    {
      definition: "lazy person",
      term: "sluggard",
    },
    {
      definition:
        "lazy; slow; inactive; lethargic; CF. slug: nail with \n                        no shell",
      term: "sluggish",
    },
    {
      definition:
        "artificial channel for directing or controlling the \n                        flow of water (with a gate to regulate the flow)",
      term: "sluice",
    },
    {
      definition: "pronounce indistinctly; speak indistinctly; mumble",
      term: "slur",
    },
    {
      definition:
        "clever in deceiving; secretive; not telling one's intentions",
      term: "sly",
    },
    {
      definition:
        "intelligent; quick and energetic; fashionable; Ex. \n                        smart pace/restaurant; V: cause or feel a sharp pain; \n                        N: smarting pain",
      term: "smart",
    },
    {
      definition:
        "slight knowledge; small scattered number or amount; \n                        Ex. smattering of German",
      term: "smattering",
    },
    {
      definition:
        "spread or cover with a sticky substance; N: mark made \n                        by smearing",
      term: "smear",
    },
    {
      definition:
        "melt (ore) for separating and removing the metal; melt \n                        or blend ores changing their chemical composition",
      term: "smelt",
    },
    {
      definition:
        "conceited smile; offensively self-satisfied smile (often \n                        at someone else's misfortune); V.",
      term: "smirk",
    },
    {
      definition:
        "smoulder; burn slowly without flame; be liable to break \n                        out at any moment; exist in a suppressed state; Ex. smoldering \n                        anger",
      term: "smolder",
    },
    {
      definition:
        "kill from lack of air; suppress; cover thickly; Ex. \n                        smothered in little stickers",
      term: "smother",
    },
    {
      definition: "dirty mark with unclear edges made by rubbing; V.",
      term: "smudge",
    },
    {
      definition: "self-satisfied; complacent",
      term: "smug",
    },
    {
      definition:
        "move, give, or take in a quiet, stealthy way; N: one \n                        who sneaks; ADJ. sneaky",
      term: "sneak",
    },
    {
      definition: "half-stifled(suppressed) laugh; V.",
      term: "snicker",
    },
    {
      definition: "short quick cut with scissors; V: cut with scissors",
      term: "snip",
    },
    {
      definition:
        "complain or whine tearfully; run at the nose; snuffle; \n                        Ex. Don't come back sniveling to me.",
      term: "snivel",
    },
    {
      definition:
        "ignore or behave coldly toward; Ex. I made a suggestion \n                        but she snubbed me; N.",
      term: "snub",
    },
    {
      definition:
        "sniffle; sniff repeatedly (in order to keep liquid \n                        from running out of the nose)",
      term: "snuffle",
    },
    {
      definition:
        "rise or fly high in the air; Ex. The rocket soared \n                        into the sky.",
      term: "soar",
    },
    {
      definition:
        "serious; solemn; not drunken; abstemious or temperate; \n                        V: make or become sober",
      term: "sober",
    },
    {
      definition:
        "moderation (especially regarding indulgence in alcohol); \n                        seriousness",
      term: "sobriety",
    },
    {
      definition: "thoroughly soaked; dull or stupid as if from drink",
      term: "sodden",
    },
    {
      definition: "temporary stay; V: stay for a time",
      term: "sojourn",
    },
    {
      definition:
        "comfort in sorrow or trouble; consolation; V: comfort \n                        or console in time of sorrow or trouble",
      term: "solace",
    },
    {
      definition:
        "repair or make whole by using a metal alloy; N: metal \n                        alloy (usually tin and lead) used in the molten state \n                        to join metallic parts",
      term: "solder",
    },
    {
      definition:
        "nonstandard grammatical construction; construction \n                        that is flagrantly incorrect grammatically; violation \n                        of social etiquette",
      term: "solecism",
    },
    {
      definition: "seriousness; gravity",
      term: "solemnity",
    },
    {
      definition:
        "entreat; request earnestly; seek to obtain; Ex. solicit \n                        votes; CF. solicitor: one who solicits; chief law officer",
      term: "solicit",
    },
    {
      definition: "lawyer in the lower court of law",
      term: "solicitor",
    },
    {
      definition:
        "anxious; worried; concerned; eager; Ex. solicitous \n                        to do something; N. solicitude",
      term: "solicitous",
    },
    {
      definition:
        "talking to oneself (esp. in a play); CF. monologue: \n                        soliloquy; long speech by one person (often monopolizing \n                        a conversation)",
      term: "soliloquy",
    },
    {
      definition:
        "state of being alone; seclusion; ADJ. solitary: existing \n                        or living alone (esp. by choice); remote or secluded; \n                        single; sole; Ex. solitary life/inn; Ex. no solitary piece \n                        of proof",
      term: "solitude",
    },
    {
      definition:
        "point or time at which the sun is farthest from the \n                        equator",
      term: "solstice",
    },
    {
      definition:
        "able to be dissolved in a liquid; able to be worked \n                        out or solved",
      term: "soluble",
    },
    {
      definition:
        "substance that dissolves another; ADJ: capable of dissolving \n                        another substance",
      term: "solvent",
    },
    {
      definition: "pertaining to the body; bodily; physical",
      term: "somatic",
    },
    {
      definition: "dark; gloomy; melancholy; depressing; CF. shadow",
      term: "somber",
    },
    {
      definition: "sleepwalker; V. somnambulate; N. somnambulism",
      term: "somnambulist",
    },
    {
      definition: "half asleep; drowsy; N. somnolence",
      term: "somnolent",
    },
    {
      definition: "of sound or its speed in air; CF. subsonic, supersonic",
      term: "sonic",
    },
    {
      definition: "14-line poetic verse form with a fixed rhyme pattern",
      term: "sonnet",
    },
    {
      definition: "resonant; producing a full deep sound; producing sound",
      term: "sonorous",
    },
    {
      definition: "one who foretells the future",
      term: "soothsayer",
    },
    {
      definition:
        "teacher of philosophy; quibbler; employer of fallacious \n                        reasoning; N. sophism: plausible but fallacious argument",
      term: "sophist",
    },
    {
      definition:
        "worldly wise and urbane; refined; complex; N. sophistication; \n                        V. sophisticate",
      term: "sophisticated",
    },
    {
      definition: "seemingly plausible but fallacious reasoning; sophism",
      term: "sophistry",
    },
    {
      definition: "immature; half-baked; like a sophomore",
      term: "sophomoric",
    },
    {
      definition: "sleep-causing; marked by sleepiness; drowsy",
      term: "soporific",
    },
    {
      definition: "filthy; foul; base; vile; Ex. sordid bed/story",
      term: "sordid",
    },
    {
      definition:
        "in good condition; showing good judgment or good sense; \n                        thorough; complete; Ex. sound mind/investment/training",
      term: "sound",
    },
    {
      definition:
        "having a sharp or acid taste; acid; tart; bad-tempered; \n                        V.",
      term: "sour",
    },
    {
      definition:
        "ruler in a monarchy; ADJ: (of a country) independent \n                        and self-governing; having supreme power; supreme; excellent",
      term: "sovereign",
    },
    {
      definition:
        "complete independence and self-government (of a country); \n                        supremacy of authority; power to govern",
      term: "sovereignty",
    },
    {
      definition: "plant or scatter seed",
      term: "sow",
    },
    {
      definition:
        "small shiny metallic piece sewn to clothing for ornamentation",
      term: "spangle",
    },
    {
      definition:
        "give; use; refrain from harming; save from experiencing; \n                        exempt; Ex. spare me 5 minutes; Ex. Take this money and \n                        spare my life; Ex. The emperor was spared the onus; ADJ: \n                        kept in reserve; free for other use; unoccupied; Ex. spare \n                        time",
      term: "spare",
    },
    {
      definition: "not thick; thinly scattered; scanty",
      term: "sparse",
    },
    {
      definition:
        "without attention to comfort; lacking luxury and comfort; \n                        sternly disciplined; Ex. spartan living condition/life",
      term: "spartan",
    },
    {
      definition:
        "fitful; periodic; of or like a spasm; N. spasm: sudden \n                        involuntary muscular contraction; sudden burst of energy \n                        or emotion",
      term: "spasmodic",
    },
    {
      definition: "squabble; minor dispute; minor quarrel",
      term: "spat",
    },
    {
      definition: "sudden flood or rush; Ex. spate of accidents",
      term: "spate",
    },
    {
      definition: "relating to space",
      term: "spatial",
    },
    {
      definition: "broad-bladed instrument used for spreading or mixing",
      term: "spatula",
    },
    {
      definition:
        "lay eggs (in large numbers); produce offspring (in \n                        large numbers); N: eggs of aquatic animals",
      term: "spawn",
    },
    {
      definition:
        "seemingly reasonable but incorrect; misleading (often \n                        intentionally)",
      term: "specious",
    },
    {
      definition: "small piece or mark; Ex. speck of dust in the eye",
      term: "speck",
    },
    {
      definition: "ghostly; N. specter: spectre; ghost; phantom",
      term: "spectral",
    },
    {
      definition:
        "colored band produced when a beam of light passes through \n                        a prism; broad and continuous range; Ex. whole spectrum \n                        of modern thoughts",
      term: "spectrum",
    },
    {
      definition:
        "unable for the moment to speak (because of strong feeling); \n                        Ex. speechless with anger",
      term: "speechless",
    },
    {
      definition: "someone who wastes money; CF. thrift: accumulated wealth",
      term: "spendthrift",
    },
    {
      definition: "enigmatic; mysterious",
      term: "sphinxlike ",
    },
    {
      definition:
        "rotate swiftly; make (thread) by twisting (cotton, \n                        wool, etc.); N.",
      term: "spin",
    },
    {
      definition:
        "join together end to end to make one continuous length; \n                        fasten together; unite; Ex. splice two strips of tape; \n                        N.",
      term: "splice",
    },
    {
      definition: "one who spoils the pleasure of others",
      term: "spoilsport",
    },
    {
      definition:
        "lack of premeditation; naturalness; freedom from constraint; \n                        ADJ. spontaneous: self-generated; unpremeditated; happening \n                        without being planned",
      term: "spontaneity",
    },
    {
      definition: "parody",
      term: "spoof",
    },
    {
      definition:
        "accidental transposition of sounds in successive words; \n                        Ex. ``Let me sew you to your sheet'' for ``Let me show \n                        you to your seat''; CF. William Spooner",
      term: "spoonerism",
    },
    {
      definition: "occurring irregularly; intermittent",
      term: "sporadic",
    },
    {
      definition:
        "playful; frolicsome; merry; CF. sport: play or frolic; \n                        CF. sportsmanlike",
      term: "sportive",
    },
    {
      definition:
        "begin to grow; give off shoots or buds; N: new growth \n                        on a plant; shoot",
      term: "sprout",
    },
    {
      definition:
        "neat and trim in appearance; smart; Ex. Be spruce for \n                        your job interview; V.",
      term: "spruce",
    },
    {
      definition: "(esp. of older people) vigorously active; nimble",
      term: "spry",
    },
    {
      definition:
        "false; counterfeit; forged; illogical; Ex. spurious \n                        arguments",
      term: "spurious",
    },
    {
      definition:
        "reject disdainfully; scorn; Ex. She spurned all offers \n                        of help.",
      term: "spurn",
    },
    {
      definition:
        "minor quarrel; bickering; V: engage in a minor quarrel; \n                        Ex. squabbling children",
      term: "squabble",
    },
    {
      definition:
        "condition of being squalid; filth; degradation; dirty \n                        neglected state; ADJ. squalid: dirty; sordid; morally \n                        repulsive; Ex. squalid story",
      term: "squalor",
    },
    {
      definition: "waste; spend foolishly",
      term: "squander",
    },
    {
      definition: "crush; quash; suppress",
      term: "squash",
    },
    {
      definition: "short and thick; stocky; Ex. ugly squat tower; V. N.",
      term: "squat",
    },
    {
      definition:
        "easily shocked or sickened by unpleasant things; fastidious; \n                        Ex. A nurse should not be squeamish.",
      term: "squeamish",
    },
    {
      definition:
        "produce a splashing sound (when stepping through mud); \n                        crush; squash;",
      term: "squelch",
    },
    {
      definition:
        "played in an abrupt manner; marked by abrupt sharp \n                        sound; Ex. staccato applause",
      term: "staccato",
    },
    {
      definition:
        "(of water) not flowing (often bad-smelling); motionless; \n                        stale; not developing; inactive; dull; Ex. stagnant industrial \n                        output",
      term: "stagnant",
    },
    {
      definition:
        "serious and sedate; sober; Ex. staid during the funeral \n                        ceremony",
      term: "staid",
    },
    {
      definition: "deadlock; situation in which further action is blocked",
      term: "stalemate",
    },
    {
      definition:
        "physically strong; brawny; steadfast; strong in mind \n                        or determination; Ex. stalwart supporter; N: stalwart \n                        follower",
      term: "stalwart",
    },
    {
      definition: "power of endurance; strength; staying power",
      term: "stamina",
    },
    {
      definition: "speak with involuntarily pauses or repetitions",
      term: "stammer",
    },
    {
      definition:
        "step on heavily (so as to crush or extinguish); put \n                        an end to; imprint or impress with a mark, design, or \n                        seal; shape with a die; characterize; Ex. machine stamping \n                        out car bodies; Ex. newspaper stamping him as a liar; \n                        N. stamping; implement us",
      term: "stamp",
    },
    {
      definition:
        "sudden frenzied rush (of panic-stricken animals or \n                        people); V: participate in or cause stampede; Ex. stampede \n                        before the price rises",
      term: "stampede",
    },
    {
      definition:
        "stop or check flow of blood; Ex. stanch the gushing \n                        wound",
      term: "stanch",
    },
    {
      definition: "condition of no movement or activity; stop",
      term: "standstill",
    },
    {
      definition: "division of a poem (composed of two or more lines)",
      term: "stanza",
    },
    {
      definition:
        "move suddenly or involuntarily; Ex. start at the sight \n                        of a snake",
      term: "start",
    },
    {
      definition: "formal; ceremonious; grand in style or size; majestic",
      term: "stately",
    },
    {
      definition:
        "having no motion; unchanging; lacking development; \n                        N. stasis: stable state",
      term: "static",
    },
    {
      definition: "law enacted by the legislature",
      term: "statute",
    },
    {
      definition:
        "created by statute or legislative action; regulated \n                        by statute; Ex. statutory age limit",
      term: "statutory",
    },
    {
      definition: "steadily loyal; unswerving; steady",
      term: "steadfast",
    },
    {
      definition:
        "action of moving secretly or unseen; slyness; sneakiness; \n                        secretiveness; ADJ. stealthy",
      term: "stealth",
    },
    {
      definition:
        "soak; saturate; Ex. steep the fabric in the dye bath; \n                        ADJ: precipitous",
      term: "steep",
    },
    {
      definition:
        "pertaining to the stars; of a star performer; outstanding; \n                        Ex. stellar attraction of the entire performance",
      term: "stellar",
    },
    {
      definition:
        "stop or check (the flow of); Ex. stem the bleeding \n                        from the slashed artery; N: main axis of a plant; stalk",
      term: "stem",
    },
    {
      definition: "arise from; originate from",
      term: "stemfrom ",
    },
    {
      definition: "strong foul odor; reek; stink",
      term: "stench",
    },
    {
      definition:
        "(of the voice) extremely loud; CF. Stentor: a loud \n                        herald in the Iliad",
      term: "stentorian",
    },
    {
      definition:
        "one regarded as embodying a set image or type; fixed \n                        and unvarying representation; standardized mental picture \n                        often reflecting prejudice; Ex. stereotype of the happy \n                        slave; V: make a stereotype of; represent by a stereotype; \n                        Ex. It is wrong to ster",
      term: "stereotype",
    },
    {
      definition:
        "incapable of producing young; free from microorganism; \n                        V. sterilize",
      term: "sterile",
    },
    {
      definition:
        "perfectionist; person who insists things be exactly \n                        right",
      term: "stickler",
    },
    {
      definition: "suppress; extinguish; inhibit; smother or suffocate",
      term: "stifle",
    },
    {
      definition:
        "token of disgrace; brand; V. stigmatize: mark with \n                        a stigma; characterize as disgraceful",
      term: "stigma",
    },
    {
      definition:
        "bombastic; stiffly pompous; Ex. stilted rhetoric; CF. \n                        stiff: formal",
      term: "stilted",
    },
    {
      definition: "stench; V: emit a strong foul odor",
      term: "stink",
    },
    {
      definition:
        "supply; allotted amount of work; assigned portion of \n                        work; limitation; Ex. two-year stint in the army; Ex. \n                        without stint",
      term: "stint",
    },
    {
      definition: "pay for services",
      term: "stipend",
    },
    {
      definition: "paint or draw with dots or short strokes",
      term: "stipple",
    },
    {
      definition:
        "state as a necessary condition (of an agreement); make \n                        express conditions; specify; Ex. He stipulated payment \n                        in advance",
      term: "stipulate",
    },
    {
      definition:
        "standard; kept regularly in stock or supply; typical; \n                        routine; common; Ex. stock sizes of paper; Ex. stock excuse/character; \n                        N: goods for sale in a shop; OP. unique",
      term: "stock",
    },
    {
      definition:
        "wooden enclosure or pen; fixed line of posts used as \n                        defensive barrier",
      term: "stockade",
    },
    {
      definition: "dull; stuffy; boringly conservative; Ex. stodgy book",
      term: "stodgy",
    },
    {
      definition:
        "stoical; impassive; unmoved by joy or grief; N. CF. \n                        stoicism",
      term: "stoic",
    },
    {
      definition: "stir up a fire or furnace; feed plentifully",
      term: "stoke",
    },
    {
      definition:
        "dull; impassive; showing little emotion when strong \n                        feelings are expected",
      term: "stolid",
    },
    {
      definition:
        "bend forward and down; lower or debase oneself; fall \n                        to a lower standard of behavior by doing something; condescend; \n                        Ex. stoop to lying",
      term: "stoop",
    },
    {
      definition:
        "rather fat; strong in body; sturdy; resolute; determined; \n                        strong in determination; Ex. stout stick/supporter",
      term: "stout",
    },
    {
      definition:
        "stray or fall behind (a main group); spread out in \n                        a scattered group; Ex. straggling marathon racer; Ex. \n                        straggling branch",
      term: "straggle",
    },
    {
      definition: "kill by choking or suffocating; suppress",
      term: "strangle",
    },
    {
      definition: "deceptive scheme; clever trick",
      term: "stratagem",
    },
    {
      definition: "divided into classes; arranged into strata; V. stratify",
      term: "stratified",
    },
    {
      definition: "layer of earth's surface; layer of society; PL. strata",
      term: "stratum",
    },
    {
      definition:
        "spread randomly; sprinkle; scatter; Ex. flower girl \n                        strewing rose petals",
      term: "strew",
    },
    {
      definition:
        "marked with parallel bands; striped; grooved; Ex. striated \n                        rocks; V. striate; N. stria: thin groove or line",
      term: "striated",
    },
    {
      definition:
        "severe and adverse criticism; critical comments; limit \n                        or restriction",
      term: "stricture",
    },
    {
      definition: "loud and harsh; insistent; N. stridency",
      term: "strident",
    },
    {
      definition:
        "(of rules) binding; rigid; marked by scarcity of money; \n                        Ex. stringent economic conditions",
      term: "stringent",
    },
    {
      definition: "supporting bar; CF. airplane wing building support",
      term: "strut",
    },
    {
      definition:
        "carefully contrived; calculated; unspontaneous; deliberate; \n                        thoughtful; Ex. studied remark",
      term: "studied",
    },
    {
      definition: "given to diligent study",
      term: "studious",
    },
    {
      definition:
        "make stupid in mind; cause to appear or become stupid \n                        or inconsistent; suppress; frustrate or hinder; Ex. stultifying \n                        effect of uninteresting work; Ex. stultify free expression",
      term: "stultify",
    },
    {
      definition:
        "trip and almost fall; proceed unsteadily; act falteringly; \n                        N.",
      term: "stumble",
    },
    {
      definition:
        "base of a tree trunk left after the rest has been cut \n                        down; V: walk in a heavy manner; baffle; puzzle",
      term: "stump",
    },
    {
      definition: "make unconscious or numb as by a blow; amaze; astound",
      term: "stun",
    },
    {
      definition: "stun; make numb (as with a drug); amaze",
      term: "stupefy",
    },
    {
      definition:
        "state of being stupefied; state of apathy; daze; lack \n                        of awareness",
      term: "stupor",
    },
    {
      definition: "strong and firm (in the body)",
      term: "sturdy",
    },
    {
      definition:
        "unpleasantly dark; gloomy; hellish; deathly; CF. Styx: \n                        the chief river in the subterranean land of the dead",
      term: "stygian",
    },
    {
      definition: "thwart; present an obstacle; stump",
      term: "stymie",
    },
    {
      definition: "urbanity; polish; ADJ. suave: smooth and courteous",
      term: "suavity",
    },
    {
      definition: "subordinate",
      term: "subaltern",
    },
    {
      definition:
        "less intense; quieter; Ex. subdued lighting; Ex. subdue: \n                        conquer; make less intense; quiet; Ex. subdue one's anger",
      term: "subdue",
    },
    {
      definition:
        "influenced by personal feelings; occurring or taking \n                        place within the mind; unreal; Ex. subjective sensation \n                        of the ghostly presence",
      term: "subjective",
    },
    {
      definition: "conquer; bring under control",
      term: "subjugate",
    },
    {
      definition:
        "refine; purify; replace (natural urges) with socially \n                        acceptable activities; change between a solid state and \n                        a gaseous state",
      term: "sublimate",
    },
    {
      definition:
        "causing deep feelings of wonder, joy, respect, etc.; \n                        exalted; noble and uplifting; utter",
      term: "sublime",
    },
    {
      definition:
        "below the threshold of conscious perception; Ex. subliminal \n                        advertisement",
      term: "subliminal",
    },
    {
      definition:
        "place under water; dip; go under water; cover completely \n                        (as with water); Ex. submerged in work",
      term: "submerge",
    },
    {
      definition: "willing to obey orders; yielding; timid",
      term: "submissive",
    },
    {
      definition:
        "occupying a lower rank; inferior; submissive; N. V: \n                        put in a lower rank or class",
      term: "subordinate",
    },
    {
      definition:
        "persuade to act unlawfully (especially to commit perjury); \n                        N. subornation",
      term: "suborn",
    },
    {
      definition:
        "writ(written command issued by a court) summoning a \n                        witness to appear in court; V: summon with a subpoena",
      term: "subpoena",
    },
    {
      definition: "following in time or order; later",
      term: "subsequent",
    },
    {
      definition:
        "behaving like a slave; servile; obsequious; subordinate; \n                        N. subservience",
      term: "subservient",
    },
    {
      definition:
        "sink to a lower level; settle down; sink to the bottom \n                        (as a sediment); descend; grow quiet; become less; moderate; \n                        abate",
      term: "subside",
    },
    {
      definition:
        "serving to assist; subordinate; secondary; of a subsidy; \n                        N.",
      term: "subsidiary",
    },
    {
      definition:
        "direct financial aid by government, etc.; V. subsidize: \n                        assist with a subsidy",
      term: "subsidy",
    },
    {
      definition:
        "existence; means of subsisting; means of support; livelihood; \n                        V. subsist: exist; maintain life (at a meager level)",
      term: "subsistence",
    },
    {
      definition:
        "of substance; material; solid; essential or fundamental; \n                        ample; considerable; well-to-do; wealthy",
      term: "substantial",
    },
    {
      definition:
        "support (a claim) with evidence; establish with evidence; \n                        verify",
      term: "substantiate",
    },
    {
      definition:
        "substantial; essential; pertaining to the substance; \n                        substantial; considerable; Ex. substantive issues",
      term: "substantive",
    },
    {
      definition: "include (as a member of a group); encompass",
      term: "subsume",
    },
    {
      definition:
        "stratagem(deceptive scheme); pretense; evasion; Ex. \n                        resort to a harmless subterfuge",
      term: "subterfuge",
    },
    {
      definition:
        "perceptiveness; ingenuity; delicacy; ADJ. subtle: delicate; \n                        so slight as to be difficult to detect; able to make fine \n                        distinctions; clever; Ex. subtle mind/differences in meaning",
      term: "subtlety",
    },
    {
      definition:
        "tending to overthrow or ruin; V. subvert: overthrow \n                        completely (an established system); destroy completely; \n                        CF. undermine ?",
      term: "subversive",
    },
    {
      definition: "assist (someone in difficulty); aid; comfort; N.",
      term: "succor",
    },
    {
      definition:
        "juicy; full of juice or sap; full of richness; N: succulent \n                        plant such as a cactus",
      term: "succulent",
    },
    {
      definition:
        "yield (to something overwhelming); give in; die; Ex. \n                        succumb to the illness",
      term: "succumb",
    },
    {
      definition: "give or take milk at the breast or udder",
      term: "suckle",
    },
    {
      definition: "die or kill from lack of air; suppress",
      term: "suffocate",
    },
    {
      definition:
        "advocate of the extension of voting rights (for women); \n                        CF. suffrage",
      term: "suffragist",
    },
    {
      definition:
        "spread through or over (with a color or liquid); charge; \n                        Ex. A blush suffused her cheeks.",
      term: "suffuse",
    },
    {
      definition: "man who is courting a woman",
      term: "suitor",
    },
    {
      definition: "silently showing ill humor or resentment; dark; gloomy",
      term: "sullen",
    },
    {
      definition:
        "defile; soil; tarnish; Ex. sully one's hands in menial \n                        labor",
      term: "sully",
    },
    {
      definition: "(of weather) hot; sweltering; sensual; voluptuous",
      term: "sultry",
    },
    {
      definition:
        "act of finding the total; summing-up; summary (esp. \n                        one given by the judge at the end of a trial)",
      term: "summation",
    },
    {
      definition:
        "grand suggesting great expense; lavish; rich; Ex. sumptuous \n                        feast",
      term: "sumptuous",
    },
    {
      definition: "separate; part; CF. asunder",
      term: "sunder",
    },
    {
      definition:
        "miscellaneous; various; several; N. sundries: small \n                        miscellaneous items",
      term: "sundry",
    },
    {
      definition: "retired or disqualified because of age; outmoded; obsolete",
      term: "superannuated",
    },
    {
      definition:
        "haughty; arrogant; condescending; patronizing; CF. \n                        eyebrow, cilium",
      term: "supercilious",
    },
    {
      definition: "superfluous; more than needed or demanded",
      term: "supererogatory",
    },
    {
      definition:
        "of the surface; not deep; shallow; not thorough; trivial; \n                        Ex. superficial analysis/knowledge",
      term: "superficial",
    },
    {
      definition: "excessive; overabundant; unnecessary; N. superfluity",
      term: "superfluous",
    },
    {
      definition: "place over something else",
      term: "superimpose",
    },
    {
      definition:
        "person or thing excess of what is necessary; extra; \n                        ADJ: additional to the usual or necessary number",
      term: "supernumerary",
    },
    {
      definition:
        "replace; cause to be set aside; make obsolete; N. supersession",
      term: "supersede",
    },
    {
      definition:
        "lying on back; passive; inactive; Ex. The defeated \n                        pugilist lay supine; Ex. supine acceptance of the decision",
      term: "supine",
    },
    {
      definition: "take the place of unfairly; usurp; replace",
      term: "supplant",
    },
    {
      definition: "flexible; limber; pliant",
      term: "supple",
    },
    {
      definition: "entreating; beseeching; N.",
      term: "suppliant",
    },
    {
      definition: "one who supplicates; ADJ.",
      term: "supplicant",
    },
    {
      definition: "petition humbly; pray to grant a favor",
      term: "supplicate",
    },
    {
      definition: "assumption; hypothesis; surmise; V. suppose",
      term: "supposition",
    },
    {
      definition: "assumed; counterfeit; hypothetical",
      term: "supposititious",
    },
    {
      definition:
        "put an end to forcibly; subdue; stifle; overwhelm; \n                        inhibit the expression of; check; prevent from being published \n                        or made public; Ex. suppress a smile; Ex. suppress the \n                        magazine/truth",
      term: "suppress",
    },
    {
      definition:
        "satiate; feed or supply to excess; stuff; indulge to \n                        excess in anything; N: surfeiting; excessive amount; Ex. \n                        surfeit of food",
      term: "surfeit",
    },
    {
      definition: "powerful movement of or like a wave; V.",
      term: "surge",
    },
    {
      definition: "bad-tempered; rude; cross",
      term: "surly",
    },
    {
      definition: "guess; N.",
      term: "surmise",
    },
    {
      definition: "overcome",
      term: "surmount",
    },
    {
      definition: "exceed",
      term: "surpass",
    },
    {
      definition: "done secretly; secret; furtive; sneaky; hidden",
      term: "surreptitious",
    },
    {
      definition:
        "substitute; person or thing used in place of another; \n                        Ex. surrogate mother; ADJ.",
      term: "surrogate",
    },
    {
      definition:
        "close observation of a person (esp. one under suspicion); \n                        watching; guarding",
      term: "surveillance",
    },
    {
      definition:
        "impressionable; easily influenced; sensitive; having \n                        little resistance as to a disease; likely to suffer; receptive \n                        to; capable of accepting; Ex. susceptible to persuasion/colds; \n                        Ex. The agreement is not susceptible of alteration; N. \n                        susceptibility",
      term: "susceptible",
    },
    {
      definition:
        "cause to stop for a period; interrupt; hold in abeyance; \n                        defer; hang from above; exclude for a period from a position; \n                        Ex. suspended state; Ex. suspend judgment; Ex. suspended \n                        from the team; N. suspension",
      term: "suspend",
    },
    {
      definition:
        "state of being undecided; anxiety or apprehension resulting \n                        from uncertainty",
      term: "suspense",
    },
    {
      definition:
        "suffer (harm or loss); experience; support; prop; maintain; \n                        keep in existence; nourish (to maintain life); Ex. sustain \n                        the family/the trapped miners",
      term: "sustain",
    },
    {
      definition:
        "sustaining; means of livelihood, support, food, nourishment; \n                        something that maintains life; food",
      term: "sustenance",
    },
    {
      definition:
        "stitches sewn to hold the cut edges of a wound or incision; \n                        material used in sewing; V: sew together a wound",
      term: "suture",
    },
    {
      definition: "walk or behave with an over-confident manner",
      term: "swagger",
    },
    {
      definition:
        "wetland; marsh; V: flood; overwhelm; drench in with \n                        liquid",
      term: "swamp",
    },
    {
      definition:
        "large group of insects moving in a mass; crowd of people \n                        or animals; V: move in a crowd or mass",
      term: "swarm",
    },
    {
      definition:
        "(of a skin or complexion) dark; dusky; Ex. swarthy \n                        Italian ?",
      term: "swarthy",
    },
    {
      definition:
        "swath; wrap around; bandage; Ex. one's head swathed \n                        in bandages",
      term: "swathe",
    },
    {
      definition:
        "swing from side to side; influence (someone) to change \n                        one's opinion; N.",
      term: "sway",
    },
    {
      definition: "vow; promise; use profane oaths; use offensive words",
      term: "swear",
    },
    {
      definition: "word considered offensive; Ex. ``bloody''",
      term: "swearword ",
    },
    {
      definition:
        "long wave of water that moves continuously without \n                        breaking; V.",
      term: "swell",
    },
    {
      definition:
        "(of a person) suffer from oppressive heat; be oppressed \n                        by heat",
      term: "swelter",
    },
    {
      definition:
        "deviate; turn aside sharply from a straight course; \n                        Ex. swerve from the principle; Ex. The car swerved to \n                        the right.",
      term: "swerve",
    },
    {
      definition: "drink greedily",
      term: "swill",
    },
    {
      definition: "cheater",
      term: "swindler",
    },
    {
      definition: "hit with a sweeping motion; N.",
      term: "swipe",
    },
    {
      definition:
        "lover of luxury; person devoted to pleasure and luxury; \n                        CF. Sybaris: an ancient Greek city in Italy",
      term: "sybarite",
    },
    {
      definition: "servile flatterer; bootlicker; yes man; ADJ. sycophantic",
      term: "sycophant",
    },
    {
      definition:
        "logical formula consisting of a major premise, a minor \n                        premise and a conclusion; deceptive or specious argument",
      term: "syllogism",
    },
    {
      definition: "pertaining to the woods or the country",
      term: "sylvan",
    },
    {
      definition:
        "interdependent relationship (between groups, species) \n                        often mutually beneficial; ADJ. symbiotic; CF. together \n                        + life",
      term: "symbiosis",
    },
    {
      definition:
        "arrangement of parts so that balance is obtained; congruity; \n                        ADJ. symmetrical",
      term: "symmetry",
    },
    {
      definition:
        "similarly timed; simultaneous with; occurring at the \n                        same time; V. synchronize",
      term: "synchronous",
    },
    {
      definition: "providing a general overview; summary; N. synopsis",
      term: "synoptic",
    },
    {
      definition:
        "combining parts or separate things into a whole; the \n                        whole so formed; PL. syntheses; V. synthesize",
      term: "synthesis",
    },
    {
      definition:
        "not natural; artificial; resulting from synthesis; \n                        Ex. synthetic fiber; N.",
      term: "synthetic",
    },
    {
      definition:
        "small round piece of medicine; flat piece of stone \n                        or metal bearing an inscription; Ex. stone tablet on the \n                        wall",
      term: "tablet",
    },
    {
      definition:
        "understood (without actually being expressed); not \n                        put into words; Ex. tacit agreement",
      term: "tacit",
    },
    {
      definition: "habitually silent; talking little",
      term: "taciturn",
    },
    {
      definition:
        "skill or sensitivity in dealing with people without \n                        causing offence",
      term: "tact",
    },
    {
      definition: "careful no to cause offence; OP. tactless",
      term: "tactful",
    },
    {
      definition: "pertaining to the organs or sense of touch",
      term: "tactile",
    },
    {
      definition:
        "contaminate; cause to lose purity; modify with a trace \n                        of something bad; Ex. tainted reputation; N: stain; touch \n                        of decay or bad influence; CF. touch",
      term: "taint",
    },
    {
      definition: "burlesque; act of leaving the ground",
      term: "takeoff",
    },
    {
      definition:
        "charm; object believed to give supernatural powers \n                        to or protect its bearer",
      term: "talisman",
    },
    {
      definition: "claw of bird",
      term: "talon",
    },
    {
      definition:
        "convert (hide) into leather; make brown by exposure \n                        to the sun",
      term: "tan",
    },
    {
      definition:
        "only slightly connected; not central; peripheral; digressing; \n                        showing divergence; CF. tangent",
      term: "tangential",
    },
    {
      definition:
        "able to be touched; real; concrete; palpable; possible \n                        to realize or understand; Ex. tangible proof",
      term: "tangible",
    },
    {
      definition: "person who turns animal hides into leather",
      term: "tanner",
    },
    {
      definition:
        "tease; excite by exposing something desirable while \n                        keeping it out of reach; torture with disappointment; \n                        CF. Tantalus: Greek mythological figure",
      term: "tantalize",
    },
    {
      definition:
        "equivalent in effect or value; Ex. This invasion is \n                        tantamount to a declaration of war; CF. amount",
      term: "tantamount",
    },
    {
      definition:
        "fit of bad temper; fit of petulance; caprice; Ex. The \n                        child went into tantrums.",
      term: "tantrum",
    },
    {
      definition:
        "very thin candle; gradual decrease in the width of \n                        a long object; V. make or become gradually narrower toward \n                        one end",
      term: "taper",
    },
    {
      definition: "venomous spider",
      term: "tarantula",
    },
    {
      definition: "slow; sluggish; not on time; late; Ex. tardy arrival",
      term: "tardy",
    },
    {
      definition: "make or become dull or discolored; N.",
      term: "tarnish",
    },
    {
      definition: "linger; delay in starting or going; dawdle",
      term: "tarry",
    },
    {
      definition:
        "sharp to the taste; acid-tasting; caustic; sarcastic; \n                        Ex. tart apple/reply",
      term: "tart",
    },
    {
      definition:
        "torn piece of cloth; ADJ. tattered: (of clothes) old \n                        and torn; (of a person) dressed in old torn clothes",
      term: "tatter",
    },
    {
      definition: "deride or provoke; challenge in derision; N.",
      term: "taunt",
    },
    {
      definition: "tight; strained; tense; ready; OP. slack",
      term: "taut",
    },
    {
      definition:
        "needlessly repetitious; Ex. ``It was visible to the \n                        eye''; N. tautology: needless repetition of the same sense; \n                        statement that is always true",
      term: "tautological",
    },
    {
      definition: "cheap and gaudy; Ex. tawdry jewelry",
      term: "tawdry",
    },
    {
      definition: "brownish yellow",
      term: "tawny",
    },
    {
      definition:
        "specialist in classifying (animals, etc.); CF. taxonomy: \n                        science of classification",
      term: "taxonomist",
    },
    {
      definition: "boredom; weariness; ADJ. tedious",
      term: "tedium",
    },
    {
      definition:
        "practice of abstaining totally from alcoholic drinks; \n                        N. teetotaler;; ADJ. teetotal; CF. T + total",
      term: "teetotalism",
    },
    {
      definition:
        "boldness; nerve; rashness; Ex. temerity to ask for \n                        a pay increase after only three day's work",
      term: "temerity",
    },
    {
      definition:
        "moderate; make less severe; tone down or restrain; \n                        toughen (steel) as by alternate heating and cooling",
      term: "temper",
    },
    {
      definition:
        "characteristic frame of mind; disposition; emotional \n                        excess; ADJ. temperamental: of temperament; having frequent \n                        changes of temper; Ex. temperamental dislike of sports; \n                        Ex. temperamental actress",
      term: "temperament",
    },
    {
      definition:
        "moderate; restrained; self-controlled; moderate in \n                        respect to temperature; CF. temperance: moderation and \n                        self-restraint; abstinence of alcoholic drinks; Ex. temperance \n                        society",
      term: "temperate",
    },
    {
      definition: "stormy; violent; impassioned; N. tempest: violent storm",
      term: "tempestuous",
    },
    {
      definition: "speed of music",
      term: "tempo",
    },
    {
      definition:
        "of time; not lasting forever; limited by time; temporary; \n                        secular; worldly",
      term: "temporal",
    },
    {
      definition:
        "gain time as by postponing an action; avoid committing \n                        oneself",
      term: "temporize",
    },
    {
      definition: "holding fast (as to a belief); persistent",
      term: "tenacious",
    },
    {
      definition: "firmness; persistence",
      term: "tenacity",
    },
    {
      definition:
        "possession of land or building by rent; period of a \n                        tenant's occupancy",
      term: "tenancy",
    },
    {
      definition: "one that pays rent to use property owned by another",
      term: "tenant",
    },
    {
      definition:
        "have a tendency; take care of; minister; serve at; \n                        apply one's attention; attend",
      term: "tend",
    },
    {
      definition:
        "promoting a particular point of view; biased; having \n                        an aim; designed to further a cause; Ex. tendentious rather \n                        than truth-seeking; CF. tend: move in a certain direction",
      term: "tendentious",
    },
    {
      definition:
        "offer formally; extend; Ex. tender one's resignation/the \n                        exact fare; N: formal offer; money; Ex. legal tender; \n                        ADJ: young and vulnerable; sensitive to the touch; sore; \n                        soft; delicate; Ex. child of tender years; Ex. tender \n                        wound",
      term: "tender",
    },
    {
      definition: "doctrine; dogma",
      term: "tenet",
    },
    {
      definition:
        "capable of being stretched; of tension; Ex. tensile \n                        rubber",
      term: "tensile",
    },
    {
      definition:
        "stretching; condition of being stretched; mental strain; \n                        strained relationship between groups or people",
      term: "tension",
    },
    {
      definition:
        "not fully worked out or developed; provisional; experimental; \n                        uncertain; hesitant; not definite or positive; Ex. tentative \n                        agreement/reply",
      term: "tentative",
    },
    {
      definition: "thin; slim; rare",
      term: "tenuous",
    },
    {
      definition:
        "holding of an office or real estate; time during which \n                        such an office is held",
      term: "tenure",
    },
    {
      definition:
        "lukewarm; slightly warm; half-hearted; not eager; Ex. \n                        tepid reaction to the new film; Ex. tepid supporter",
      term: "tepid",
    },
    {
      definition:
        "part that forms the end; railroad or bus station; ADJ. \n                        forming an end; ending in death; fatal; Ex. terminal cancer",
      term: "terminal",
    },
    {
      definition: "end; V. terminate",
      term: "termination",
    },
    {
      definition: "terms used in a science or art; study of nomenclature",
      term: "terminology",
    },
    {
      definition: "last stop of railroad; end",
      term: "terminus",
    },
    {
      definition: "on or relating to the earth",
      term: "terrestrial",
    },
    {
      definition: "concise; abrupt; pithy",
      term: "terse",
    },
    {
      definition: "third in order or rank",
      term: "tertiary",
    },
    {
      definition: "mosaic; inlaid; Ex. tessellated pattern",
      term: "tessellated",
    },
    {
      definition: "maker of a will; CF. testatrix",
      term: "testator",
    },
    {
      definition:
        "irritable; impatient and bad-tempered; short-tempered; \n                        N. testiness",
      term: "testy",
    },
    {
      definition:
        "tie (an animal) with a rope or tether; N: rope or chain \n                        to which an animal is tied; limit of one's endurance; \n                        Ex. the end of one's tether",
      term: "tether",
    },
    {
      definition: "of a theme; relating to a unifying motif or idea",
      term: "thematic",
    },
    {
      definition: "government run by religious leaders",
      term: "theocracy",
    },
    {
      definition: "based on theory; not practical or applied; hypothetical",
      term: "theoretical",
    },
    {
      definition: "curative; N. therapy",
      term: "therapeutic",
    },
    {
      definition:
        "pertaining to heat; producing heat; warm; Ex. thermal \n                        bath; N: rising current of warm air",
      term: "thermal",
    },
    {
      definition: "opinion put forward and supported by reasoned arguments",
      term: "thesis",
    },
    {
      definition: "pertaining to drama; N: actor or actress",
      term: "thespian",
    },
    {
      definition:
        "slave; bondage; slavery; Ex. Her beauty held him in \n                        thrall; CF. enthrall",
      term: "thrall",
    },
    {
      definition:
        "beat with a whip or flail; defeat utterly; talk about \n                        thoroughly in order to find the answer; move wildly or \n                        violently; Ex. The fishes thrashed about in the net.",
      term: "thrash",
    },
    {
      definition:
        "worn through till the threads show; shabby and poor; \n                        hackneyed; Ex. threadbare excuses",
      term: "threadbare",
    },
    {
      definition:
        "sign or warning (of coming danger); Ex. threat of rain; \n                        V: express a threat; give warning of (something bad); \n                        Ex. The cloud threatens rain.",
      term: "threat",
    },
    {
      definition:
        "beat (cereal plants) with a machine or flail to separate \n                        the grains from the straw",
      term: "thresh",
    },
    {
      definition: "careful about money; economical; N. thrift",
      term: "thrifty",
    },
    {
      definition: "prosper; flourish",
      term: "thrive",
    },
    {
      definition:
        "(of a heart or machine) beat rapidly or violently; \n                        N. Ex. hearthrob: heartbeat; sweetheart",
      term: "throb",
    },
    {
      definition: "violent anguish",
      term: "throes",
    },
    {
      definition: "crowd (of people or things); V.",
      term: "throng",
    },
    {
      definition:
        "strangle; regulate the speed of with a throttle; N: \n                        valve that regulates the flow; CF. throat ?",
      term: "throttle",
    },
    {
      definition: "block or hinder; baffle; frustrate",
      term: "thwart",
    },
    {
      definition: "touch (the body) lightly so as to cause laughter; please",
      term: "tickle",
    },
    {
      definition: "miser; excessively frugal person",
      term: "tightwad",
    },
    {
      definition: "handle used to move boat's rudder (to steer)",
      term: "tiller",
    },
    {
      definition:
        "quality of a musical tone produced by a musical instrument \n                        (which distinguishes it from others of the same pitch)",
      term: "timbre",
    },
    {
      definition: "lack of self-confidence or courage",
      term: "timidity",
    },
    {
      definition: "fearful; timid; demonstrating fear",
      term: "timorous",
    },
    {
      definition:
        "give a slight degree of a color or quality to; N: slight \n                        degree of a color or quality; Ex. tinged with grey/jealousy",
      term: "tinge",
    },
    {
      definition: "slight degree of color; V: give a tint to",
      term: "tint",
    },
    {
      definition:
        "drink (alcoholic beverages) frequently; N: alcoholic \n                        drink",
      term: "tipple",
    },
    {
      definition:
        "long angry denunciatory speech; diatribe; harangue; \n                        extended scolding; denunciation",
      term: "tirade",
    },
    {
      definition: "gigantic; N. titan",
      term: "titanic",
    },
    {
      definition:
        "tax of one-tenth (contributed to a church); V: pay \n                        a tithe",
      term: "tithe",
    },
    {
      definition:
        "tickle; excite pleasantly; Ex. not to titillate the \n                        audience but to enlighten it",
      term: "titillate",
    },
    {
      definition:
        "name (of a book, film, etc.); mark of rank; formal \n                        appellation as of rank or office (such as Lord or General); \n                        right or claim to possession; championship; Ex. title \n                        as head of the family; Ex. title to the estate",
      term: "title",
    },
    {
      definition: "nervous giggle; nervous laugh; V.",
      term: "titter",
    },
    {
      definition:
        "of a title; in name only; nominal; having the title \n                        of an office without the obligations; Ex. titular head \n                        of the company",
      term: "titular",
    },
    {
      definition:
        "servile flatterer; yes man; sycophant; V: be a toady \n                        to; fawn",
      term: "toady",
    },
    {
      definition: "Roman outer robe",
      term: "toga",
    },
    {
      definition: "outward sign; Ex. a token of our gratitude",
      term: "token",
    },
    {
      definition:
        "sound (a large bell) slowly at regular intervals; N: \n                        sound of a bell; fixed tax or charge",
      term: "toll",
    },
    {
      definition: "large volume; book",
      term: "tome",
    },
    {
      definition:
        "shaving of the head especially by person entering religious \n                        orders; V.",
      term: "tonsure",
    },
    {
      definition:
        "physical features of a region (such as the shape and \n                        height); CF. topo-: place",
      term: "topography",
    },
    {
      definition: "become unsteady and fall down",
      term: "topple",
    },
    {
      definition: "underwater explosive apparatus; V.",
      term: "torpedo",
    },
    {
      definition:
        "lethargy; sluggishness; dormancy; ADJ. torpid: lethargic; \n                        lazy; inactive; (of an animal) dormant; hibernating",
      term: "torpor",
    },
    {
      definition: "twisting force; force producing rotation",
      term: "torque",
    },
    {
      definition: "rushing stream; flood; Ex. The rain fell in torrents.",
      term: "torrent",
    },
    {
      definition:
        "(of weather) hot or scorching; passionate; Ex. torrid \n                        love affairs",
      term: "torrid",
    },
    {
      definition:
        "trunk of statue with head and limbs missing; human \n                        trunk",
      term: "torso",
    },
    {
      definition: "winding; full of curves; Ex. tortuous mountain road",
      term: "tortuous",
    },
    {
      definition:
        "throw lightly; move or lift (the head) with a sudden \n                        motion; flip (a coin) to decide something",
      term: "toss",
    },
    {
      definition:
        "animal, plant, or natural object serving as a symbol \n                        of a clan or family; representation of this; Ex. totem \n                        pole",
      term: "totem",
    },
    {
      definition: "shake or move unsteadily; sway as if about to fall",
      term: "totter",
    },
    {
      definition:
        "causing a feeling of pity or sympathy; pathetic; V. \n                        touch: cause to feel pity or sympathy; ADJ. touched",
      term: "touching",
    },
    {
      definition:
        "stone used to test the fineness of gold alloys; criterion; \n                        standard",
      term: "touchstone",
    },
    {
      definition:
        "oversensitive; easily offended; irasible; delicate; \n                        needing delicate handling; Ex. touchy situation",
      term: "touchy",
    },
    {
      definition:
        "promote or publicize (one's goods or service); praise \n                        excessively (as a form of advertisement); CF. advertise",
      term: "tout",
    },
    {
      definition: "poisonous; N. toxicity",
      term: "toxic",
    },
    {
      definition:
        "propaganda pamphlet (esp. by a religious or political \n                        group); expanse of land; region of indefinite size; system \n                        of related organs; Ex. digestive tract",
      term: "tract",
    },
    {
      definition:
        "docile; easily managed; (of something) easily changed \n                        or molded; N. tractability",
      term: "tractable",
    },
    {
      definition: "expose to slander",
      term: "traduce",
    },
    {
      definition: "path taken by a projectile; Ex. trajectory of a bullet",
      term: "trajectory",
    },
    {
      definition:
        "walk with a heavy step; travel on foot; N: vagrant; \n                        one who travels aimlessly about; long walk; sound of heavy \n                        walking",
      term: "tramp",
    },
    {
      definition: "step heavily with the feet; crush under the feet",
      term: "trample",
    },
    {
      definition:
        "hypnotic state; ecstatic state; detachment from one's \n                        physical surrounding (as in contemplation or daydreaming); \n                        CF. transition",
      term: "trance",
    },
    {
      definition: "calmness; peace",
      term: "tranquillity",
    },
    {
      definition:
        "exceeding ordinary limits; superior; surpassing; V. \n                        transcend: go beyond; exceed; surpass; N. transcendancy",
      term: "transcendent",
    },
    {
      definition:
        "going beyond common thought or ideas; impossible to \n                        understand by practical experiences or practices; known \n                        only by studying thoughts or intuition; OP. empirical; \n                        CF. transcendentalism",
      term: "transcendental",
    },
    {
      definition: "copy; write a copy of; N. transcription",
      term: "transcribe",
    },
    {
      definition:
        "violation of a law; sin; V. transgress: go beyond (a \n                        limit); violate; do wrong",
      term: "transgression",
    },
    {
      definition:
        "staying for a short time; momentary; temporary; N: \n                        one that is transient",
      term: "transient",
    },
    {
      definition: "going from one state of action to another",
      term: "transition",
    },
    {
      definition: "transient; impermanent; fleeting; N. transitoriness",
      term: "transitory",
    },
    {
      definition: "partly transparent",
      term: "translucent",
    },
    {
      definition: "transform; change; convert to something different",
      term: "transmute",
    },
    {
      definition:
        "permitting light to pass through freely; easily detected; \n                        obvious; clear; Ex. transparent lie",
      term: "transparent",
    },
    {
      definition:
        "(of a fact) become known; be revealed; happen; give \n                        off (watery waste matter) through pores",
      term: "transpire",
    },
    {
      definition:
        "strong emotion; rapture; Ex. in a transport/transports \n                        of; V: move to strong emotion; enrapture",
      term: "transport",
    },
    {
      definition: "reverse the order or position of",
      term: "transpose",
    },
    {
      definition:
        "outward decorations; ornaments (as an outward sign \n                        of rank)",
      term: "trappings",
    },
    {
      definition:
        "(of an experience) deeply shocking; pertaining to an \n                        injury caused by violence; N. trauma: serious wound; emotional \n                        shock that causes lasting psychological damage",
      term: "traumatic",
    },
    {
      definition: "strenuous work; toil; painful labor; labor of childbirth",
      term: "travail",
    },
    {
      definition: "go through or across",
      term: "traverse",
    },
    {
      definition:
        "copy or example of something that completely misrepresents \n                        the true nature of the real thing; comical parody or imitation; \n                        treatment aimed at making something appear ridiculous; \n                        Ex. travesty of justice; OP. paragon",
      term: "travesty",
    },
    {
      definition:
        "walk; trample; N: grooved face of a tire; horizontal \n                        part of a step",
      term: "tread",
    },
    {
      definition: "keep as precious; cherish",
      term: "treasure",
    },
    {
      definition: "article treating a subject systematically and thoroughly",
      term: "treatise",
    },
    {
      definition: "travel; journey; V: make a long difficult journey",
      term: "trek",
    },
    {
      definition:
        "trembling; slight quiver (as of the earth or from nervous \n                        agitation)",
      term: "tremor",
    },
    {
      definition: "trembling; wavering",
      term: "tremulous",
    },
    {
      definition: "cutting; incisive; keen",
      term: "trenchant",
    },
    {
      definition: "fear; nervous apprehension",
      term: "trepidation",
    },
    {
      definition: "suffering; ordeal; distress; trial",
      term: "tribulation",
    },
    {
      definition: "court of justice",
      term: "tribunal",
    },
    {
      definition:
        "official of ancient Rome elected by the plebians to \n                        protect their rights; protector of the people",
      term: "tribune",
    },
    {
      definition:
        "tax levied by a ruler; payment made by one nation to \n                        another in acknowledgment of submission; mark of respect \n                        (such as praise or gift); Ex. pay tribute to",
      term: "tribute",
    },
    {
      definition: "flow in drops or in a thin stream; N.",
      term: "trickle",
    },
    {
      definition: "person who cheats people",
      term: "trickster",
    },
    {
      definition: "three-pronged spear",
      term: "trident",
    },
    {
      definition:
        "something of little importance or value; small amount; \n                        Ex. a trifle; V: treat without seriousness; flirt",
      term: "trifle",
    },
    {
      definition: "trivial; unimportant",
      term: "trifling",
    },
    {
      definition: "set off; start",
      term: "trigger",
    },
    {
      definition:
        "group of three related works (connected by a shared \n                        subject but each complete in itself)",
      term: "trilogy",
    },
    {
      definition:
        "make neat or tidy by clipping; reduce by removing what \n                        is unnecessary; ornament; decorate (round the edges); \n                        Ex. trim the cost; Ex. jacket trimmed with fur; N. ADJ: \n                        tidy; in good order",
      term: "trim",
    },
    {
      definition: "knickknack; bauble; cheap jewelry",
      term: "trinket",
    },
    {
      definition: "hackneyed; commonplace",
      term: "trite",
    },
    {
      definition: "trifles; unimportant matters",
      term: "trivia",
    },
    {
      definition:
        "pledge of good faith especially in betrothal; betrothal; \n                        Ex. by my troth",
      term: "troth",
    },
    {
      definition:
        "long narrow container for feeding farm animals; lowest \n                        point (of a wave, business cycle, etc.); long narrow depression \n                        as between waves",
      term: "trough",
    },
    {
      definition:
        "aggressiveness; ferocity; ADJ. truculent: aggressive; \n                        pugnacious; fierce",
      term: "truculence",
    },
    {
      definition: "self-evident truth",
      term: "truism",
    },
    {
      definition: "cut the top off; shorten",
      term: "truncate",
    },
    {
      definition:
        "main wooden stem of a tree; human body excluding the \n                        head and limbs; torso; prehensile nose of an elephant",
      term: "trunk",
    },
    {
      definition:
        "meeting arranged by lovers; arrangement between lovers \n                        to meet",
      term: "tryst",
    },
    {
      definition:
        "(of a part of the body) swollen; distended; bombastic; \n                        pompous",
      term: "tumid",
    },
    {
      definition:
        "commotion of a great crowd; riot; noise; uproar; ADJ. \n                        tumultuous: noisy and disorderly",
      term: "tumult",
    },
    {
      definition:
        "rolling treeless plain in Siberia and arctic North \n                        America",
      term: "tundra",
    },
    {
      definition:
        "(of a liquid) having the sediment disturbed; muddy; \n                        thick",
      term: "turbid",
    },
    {
      definition:
        "state of violent agitation; ADJ. turbulent: violently \n                        agitated or disturbed",
      term: "turbulence",
    },
    {
      definition: "deep dish for serving soup",
      term: "tureen",
    },
    {
      definition: "swollen; distended (as from liquid)",
      term: "turgid",
    },
    {
      definition:
        "extreme confusion; great commotion and confusion; Ex. \n                        throw the country into turmoil",
      term: "turmoil",
    },
    {
      definition: "traitor",
      term: "turncoat",
    },
    {
      definition: "depravity; baseness; Ex. moral turpitude",
      term: "turpitude",
    },
    {
      definition: "guardianship; training; function of a tutor; instruction",
      term: "tutelage",
    },
    {
      definition:
        "protective; pertaining to a guardianship; Ex. tutelary \n                        deities",
      term: "tutelary",
    },
    {
      definition:
        "wealthy and powerful businessperson; wealthy leader; \n                        magnate; Ex. business tycoon",
      term: "tycoon",
    },
    {
      definition: "tropical hurricane or cyclone",
      term: "typhoon",
    },
    {
      definition:
        "oppression; cruel government; ADJ. tyrannical: of a \n                        tyrant or tyranny; despotic; V. tyrannize: treat tyrannically; \n                        oppress",
      term: "tyranny",
    },
    {
      definition: "beginner; novice",
      term: "tyro",
    },
    {
      definition:
        "be suited to; be incumbent upon; be right and necessary; Ex. It behooves one to do.",
      term: "behove",
    },
    {
      definition: "gay; joyous",
      term: "blithe",
    },
    {
      definition: "gay; joyous",
      term: "blithesome",
    },
    {
      definition: "large kettle",
      term: "caldron",
    },
    {
      definition: "large kettle",
      term: "cauldron",
    },
    {
      definition:
        "unit of weight for precious stones; measure of the purity of gold",
      term: "carat",
    },
    {
      definition:
        "unit of weight for precious stones; measure of the purity of gold",
      term: "karat",
    },
    {
      definition: "make watertight (by blocking up cracks as in a ship)",
      term: "caulk",
    },
    {
      definition: "make watertight (by blocking up cracks as in a ship)",
      term: "calk",
    },
    {
      definition:
        "marked by great changes in fortune; with many changes of fortuene; CF. checked: having a pattern of squares",
      term: "checkered",
    },
    {
      definition:
        "marked by great changes in fortune; with many changes of fortuene; CF. checked: having a pattern of squares",
      term: "chequered",
    },
    {
      definition:
        "phrase dulled in meaning by repetition; platitude; ADJ. clich\\'ed",
      term: "cliche",
    },
    {
      definition: "trusted friend (to whom one tells one's secret)",
      term: "confidant",
    },
    {
      definition: "trusted friend (to whom one tells one's secret)",
      term: "confidante",
    },
    {
      definition:
        "school of the fine arts (especially music or drama); glass-enclosed area; CF. conservancy",
      term: "consanguineous",
    },
    {
      definition:
        "school of the fine arts (especially music or drama); glass-enclosed area; CF. conservancy",
      term: "consanguine",
    },
    {
      definition: "fiendish; cruel; N. demon: evil supernatural being; devil",
      term: "demoniac",
    },
    {
      definition: "fiendish; cruel; N. demon: evil supernatural being; devil",
      term: "demoniacal",
    },
    {
      definition:
        "astonish (making dumb); ADJ. dumbfounded, dumfounded, dumbstruck",
      term: "dumbfound",
    },
    {
      definition:
        "astonish (making dumb); ADJ. dumbfounded, dumfounded, dumbstruck",
      term: "dumfound",
    },
    {
      definition:
        "(of people or their behavior) respectful; obedient (filled with a sense of duty)",
      term: "dutiful",
    },
    {
      definition:
        "(of people or their behavior) respectful; obedient (filled with a sense of duty)",
      term: "duteous",
    },
    {
      definition:
        "enclose; place in something; fix firmly in a surrounding mass",
      term: "embed",
    },
    {
      definition:
        "enclose; place in something; fix firmly in a surrounding mass",
      term: "imbed",
    },
    {
      definition:
        "entrance; a way in; right to enter; main dish of a meal; Ex. entree into the exclusive circle",
      term: "entree",
    },
    {
      definition:
        "entrance; a way in; right to enter; main dish of a meal; Ex. entree into the exclusive circle",
      term: "eon",
    },
    {
      definition:
        "entrance; a way in; right to enter; main dish of a meal; Ex. entree into the exclusive circle",
      term: "aeon",
    },
    {
      definition: "ornament worn on the shoulder (of a uniform, etc.)",
      term: "epaulet",
    },
    {
      definition: "ornament worn on the shoulder (of a uniform, etc.)",
      term: "epaulette",
    },
    {
      definition: "public revelation of something discreditable",
      term: "expose",
    },
    {
      definition:
        "front or face (of building); superficial or false appearance",
      term: "facade",
    },
    {
      definition:
        "too improbable to be believed; implausible; Ex. far-fetched story",
      term: "far-fetched",
    },
    {
      definition:
        "honor at a festival; celebrate or honor with a feast; N. (outdoor) festival or feast; CF. feast",
      term: "fete",
    },
    {
      definition: "malodorous; foul",
      term: "fetid",
    },
    {
      definition: "malodorous; foul",
      term: "foetid",
    },
    {
      definition:
        "object believed to have spiritual powers; object of excessive attention or reverence; CF. fetishism",
      term: "fetish",
    },
    {
      definition:
        "object believed to have spiritual powers; object of excessive attention or reverence; CF. fetishism",
      term: "fetich",
    },
    {
      definition:
        "inexperienced; N: young bird that has acquired wing feathers and is learning to fly; inexperienced person",
      term: "fledgling",
    },
    {
      definition:
        "inexperienced; N: young bird that has acquired wing feathers and is learning to fly; inexperienced person",
      term: "fledgeling",
    },
    {
      definition: "ancestors",
      term: "forebears",
    },
    {
      definition: "ancestors",
      term: "forbears",
    },
    {
      definition: "give up; do without",
      term: "forgo",
    },
    {
      definition: "give up; do without",
      term: "forego",
    },
    {
      definition: "frenzied; frantic",
      term: "frenetic",
    },
    {
      definition: "frenzied; frantic",
      term: "phrenetic",
    },
    {
      definition: "highly pretentious or inflated",
      term: "high-flown",
    },
    {
      definition: "religious image; idol; image or representation",
      term: "icon",
    },
    {
      definition: "religious image; idol; image or representation",
      term: "ikon",
    },
    {
      definition:
        "short poem idealizing rural life; simple happy period of life (in the country); scene from such a time; Ex. idyll of two young lovers",
      term: "idyll",
    },
    {
      definition:
        "short poem idealizing rural life; simple happy period of life (in the country); scene from such a time; Ex. idyll of two young lovers",
      term: "idyl",
    },
    {
      definition: "farewell or departure",
      term: "leave-taking",
    },
    {
      definition:
        "strategic military or naval movement (done for training purposes); carefully planned process; stratagem; V: carry out a military maneuver; use maneuvers in gaining an end",
      term: "maneuver",
    },
    {
      definition:
        "strategic military or naval movement (done for training purposes); carefully planned process; stratagem; V: carry out a military maneuver; use maneuvers in gaining an end",
      term: "manoeuver",
    },
    {
      definition: "dramatic or musical performance given in the afternoon",
      term: "matinee",
    },
    {
      definition: "extremely small",
      term: "minuscule",
    },
    {
      definition: "extremely small",
      term: "miniscule",
    },
    {
      definition:
        "periodically shed or cast off hairs or feathers (for replacement by a new growth)",
      term: "molt",
    },
    {
      definition:
        "periodically shed or cast off hairs or feathers (for replacement by a new growth)",
      term: "moult",
    },
    {
      definition:
        'quality of being unsophisticated; simplicity; artlessness; gullibility; ADJ. naive(na\\"ive): ingenuous; lacking worldliness; simple; credulous',
      term: "naivety",
    },
    {
      definition: "in confusion; disorderly; Ex. dash pell-mell",
      term: "pell-mell",
    },
    {
      definition:
        "hanging down from something; pending; N: ornament (hanging from a necklace etc.)",
      term: "pendant",
    },
    {
      definition:
        "hanging down from something; pending; N: ornament (hanging from a necklace etc.)",
      term: "pendent",
    },
    {
      definition:
        "any gain above stipulated salary; Ex. perquisites such as free meals and a car",
      term: "perquisite",
    },
    {
      definition:
        "any gain above stipulated salary; Ex. perquisites such as free meals and a car",
      term: "perk",
    },
    {
      definition:
        "causing plague; tending to cause death; baneful; N. pestilence: fatal epidemic disease (esp. bubonic plague)",
      term: "pestilential",
    },
    {
      definition:
        "causing plague; tending to cause death; baneful; N. pestilence: fatal epidemic disease (esp. bubonic plague)",
      term: "pestilent",
    },
    {
      definition:
        "aggressive in verbal attack; disputatious (rather than simply expressing opinions)",
      term: "polemical",
    },
    {
      definition:
        "abstract; concise summing up of main points; concise summary of a text",
      term: "precis",
    },
    {
      definition:
        "substance which propels or drives forward (such as an explosive charge or a rocket fuel)",
      term: "propellant",
    },
    {
      definition:
        "substance which propels or drives forward (such as an explosive charge or a rocket fuel)",
      term: "propellent",
    },
    {
      definition: "person receiving protection and support from a patron",
      term: "protege",
    },
    {
      definition: "to decrease; reduce",
      term: "abate",
    },
    {
      definition: "to give up a position, right, or power",
      term: "abdicate",
    },
    {
      definition: "deviating from what is normal",
      term: "aberrant",
    },
    {
      definition: "temporary suppression or suspension",
      term: "abeyance",
    },
    {
      definition: "miserable; pitiful",
      term: "abject",
    },
    {
      definition: "to reject; abandon formally",
      term: "abjure",
    },
    {
      definition:
        "n. the act of cutting; the natural separation of a leaf or other part of a plant, v. to cut off or away (abscise)",
      term: "abscission",
    },
    {
      definition: "to depart secretly",
      term: "abscond",
    },
    {
      definition: "moderate in appetite",
      term: "abstemious",
    },
    {
      definition: "the giving up of certain pleasures",
      term: "abstinence",
    },
    {
      definition: "very bad",
      term: "abysmal",
    },
    {
      definition: "growth in size or increase in amount",
      term: "accretion",
    },
    {
      definition: "to accumulate; grow by additions",
      term: "accrue",
    },
    {
      definition: "uncompromising; unyielding",
      term: "adamant",
    },
    {
      definition: "something added, attached, or joined",
      term: "adjunct",
    },
    {
      definition: "to caution or reprimand",
      term: "admonish",
    },
    {
      definition: "to corrupt or make impure",
      term: "adulterate",
    },
    {
      definition:
        "adj. relating to beauty or art, n. a conception of what is artistically beautiful",
      term: "aesthetic",
    },
    {
      definition: "pretentious, phony",
      term: "affected",
    },
    {
      definition: "fondness; liking; similarity",
      term: "affinity",
    },
    {
      definition: "to make larger or greater",
      term: "aggrandize",
    },
    {
      definition:
        "adj. amounting to a whole; total, v. to collect into a mass, n. collective mass or sum",
      term: "aggregate",
    },
    {
      definition: "cheerful willingness; eagerness; speed",
      term: "alacrity",
    },
    {
      definition:
        "medieval chemical philosophy based on changing metal into gold; a seemingly magical power or process of transmutation",
      term: "alchemy",
    },
    {
      definition: "to lessen; ease; soothe",
      term: "allay",
    },
    {
      definition: "to relieve; improve partially",
      term: "alleviate",
    },
    {
      definition: "a combination; a mixture of two or more metals",
      term: "alloy",
    },
    {
      definition: "the power to entice by charm",
      term: "allure",
    },
    {
      definition: "to combine into a unified whole",
      term: "amalgamate",
    },
    {
      definition: "unclear or doubtful in meaning",
      term: "ambiguous",
    },
    {
      definition: "the state of having conflicting emotional attitudes",
      term: "ambivalence",
    },
    {
      definition: "something delicious; the food of the gods",
      term: "ambrosia",
    },
    {
      definition: "to improve",
      term: "ameliorate",
    },
    {
      definition: "agreeable; cooperative; suited",
      term: "amenable",
    },
    {
      definition: "something that increases comfort",
      term: "amenity",
    },
    {
      definition: "ornament worn as a charm against evil spirits",
      term: "amulet",
    },
    {
      definition: "something out of the proper time",
      term: "anachronism",
    },
    {
      definition: "medication that reduces or elimates pain",
      term: "analgesic",
    },
    {
      definition:
        "adj. comparable, n. a similarity in some ways between things that are otherwise dissimilar (analogy)",
      term: "analogous",
    },
    {
      definition:
        "n. absence of government; state of disorder, adj. lacking order or control (anarchic)",
      term: "anarchy",
    },
    {
      definition:
        "n. something that calms or soothes pain, adj. relaxing, or capable of soothing pain",
      term: "anodyne",
    },
    {
      definition: "irregular; deviating from the norm",
      term: "anomalous",
    },
    {
      definition: "something that comes before",
      term: "antecedent",
    },
    {
      definition: "prehistoric",
      term: "antediluvian",
    },
    {
      definition: "dislike; hostility",
      term: "antipathy",
    },
    {
      definition: "indifference",
      term: "apathy",
    },
    {
      definition: "the highest point",
      term: "apex",
    },
    {
      definition:
        "the point in an orbit most distant from the body being orbited; the highest point",
      term: "apogee",
    },
    {
      definition: "a terse, witty saying",
      term: "apothegm",
    },
    {
      definition: "to calm; pacify; placate",
      term: "appease",
    },
    {
      definition: "name",
      term: "appellation",
    },
    {
      definition: "strinkingly appropriate and relevant",
      term: "apposite",
    },
    {
      definition: "to inform",
      term: "apprise",
    },
    {
      definition: "praise; approval",
      term: "approbation",
    },
    {
      definition: "to take possession for one's own use; confiscate",
      term: "appropriate",
    },
    {
      definition: "relevant",
      term: "apropos",
    },
    {
      definition:
        "ornate design featuring intertwined curves; a ballet position in which one leg is extended in back while the other supports the weight of the body",
      term: "arabesque",
    },
    {
      definition: "the study of material evidence of past human life",
      term: "archeology",
    },
    {
      definition: "great emotion or passion",
      term: "ardor",
    },
    {
      definition: "extremely difficult; laborious",
      term: "arduous",
    },
    {
      definition: "a specialized vocabulary used by a group",
      term: "argot",
    },
    {
      definition: "to stop; to seize",
      term: "arrest",
    },
    {
      definition: "item made by human craft",
      term: "artifact",
    },
    {
      definition: "guileless; natural",
      term: "artless",
    },
    {
      definition:
        "n. one who practices self-denial, adj. self-denying or austere",
      term: "ascetic",
    },
    {
      definition: "severity; harshness; irritability",
      term: "asperity",
    },
    {
      definition: "slander; false rumor",
      term: "aspersion",
    },
    {
      definition: "diligent; hard-working",
      term: "assiduous",
    },
    {
      definition: "to make less severe",
      term: "assuage",
    },
    {
      definition: "harsh; severe",
      term: "astringent",
    },
    {
      definition: "place of refuge or shelter",
      term: "asylum",
    },
    {
      definition:
        "in biology, the reappearance of a characteristic in an organism after several generations of absence; individual or a part that exhibits atavism; return of a trait after a period of absence",
      term: "atavism",
    },
    {
      definition: "to weaken",
      term: "attenuate",
    },
    {
      definition: "bold; daring",
      term: "audacious",
    },
    {
      definition: "stern; unadorned",
      term: "austere",
    },
    {
      definition: "self-governing; independent",
      term: "autonomous",
    },
    {
      definition: "greed",
      term: "avarice",
    },
    {
      definition: "to affirm; declare to be true",
      term: "aver",
    },
    {
      definition: "secondary occupation",
      term: "avocation",
    },
    {
      definition: "like an uncle, benevolent and tolerant",
      term: "avuncular",
    },
    {
      definition: "taken for granted",
      term: "axiomatic",
    },
    {
      definition:
        "pertaining to riotous or drunken festivity; pertaining to revelry",
      term: "bacchanalian",
    },
    {
      definition: "commonplace; trite",
      term: "banal",
    },
    {
      definition: "playful conversation",
      term: "banter",
    },
    {
      definition: "poet",
      term: "bard",
    },
    {
      definition: "obscene",
      term: "bawdy",
    },
    {
      definition: "to sanctify; to bless; to ascribe a virtue to",
      term: "beatify",
    },
    {
      definition: "to dress in a vulgar; showy manner",
      term: "bedizen",
    },
    {
      definition: "huge creature; anything very large and powerful",
      term: "behemoth",
    },
    {
      definition: "to contradict; misrepresent; give a false impression",
      term: "belie",
    },
    {
      definition: "kindly; doing good",
      term: "beneficent",
    },
    {
      definition: "to divide into two parts",
      term: "bifurcate",
    },
    {
      definition: "n. flattery, v. to coax with flattery (blandish)",
      term: "blandishment",
    },
    {
      definition: "bored because of frequent indulgence; unconcerned",
      term: "blase",
    },
    {
      definition: "to give a boost to; prop up; support",
      term: "bolster",
    },
    {
      definition: "pompous; using inflated language",
      term: "bombastic",
    },
    {
      definition: "rude; insensitive",
      term: "boorish",
    },
    {
      definition: "cowlike",
      term: "bovine",
    },
    {
      definition: "bold; shameless",
      term: "brazen",
    },
    {
      definition: "to mention for the first time",
      term: "broach",
    },
    {
      definition: "characteristic of the countryside; rustic; pastoral",
      term: "bucolic",
    },
    {
      definition: "to flourish",
      term: "burgeon",
    },
    {
      definition: "to polish",
      term: "burnish",
    },
    {
      definition: "to reinforce; support",
      term: "buttress",
    },
    {
      definition: "unpleasant or harsh-sounding",
      term: "cacophonous",
    },
    {
      definition: "to beg; sponge",
      term: "cadge",
    },
    {
      definition: "thick-skinned; insensitive",
      term: "callous",
    },
    {
      definition: "false and malicious accusation; slander",
      term: "calumny",
    },
    {
      definition: "false, deliberately misleading story",
      term: "canard",
    },
    {
      definition:
        "an established principle; a basis or standard for judgment; a group of literary works",
      term: "canon",
    },
    {
      definition: "insincere talk; language of a particular group",
      term: "cant",
    },
    {
      definition: "irritable; ill-humored",
      term: "cantankerous",
    },
    {
      definition:
        "adj. fickle, n. inclination to change one's mind compulsively",
      term: "capricious",
    },
    {
      definition: "faultfinding; intended to entrap, as in an argument",
      term: "captious",
    },
    {
      definition: "of foremost importance",
      term: "cardinal",
    },
    {
      definition: "of the flesh or body; related to physical appetites",
      term: "carnal",
    },
    {
      definition: "to find fault; complain",
      term: "carping",
    },
    {
      definition: "science of making maps",
      term: "cartography",
    },
    {
      definition:
        "any of the hereditary social classes of hindu society; social stratification",
      term: "caste",
    },
    {
      definition: "punishment; chastisement; criticism",
      term: "castigation",
    },
    {
      definition: "a violent upheaval that causes great destruction and change",
      term: "cataclysm",
    },
    {
      definition: "something causing change",
      term: "catalyst",
    },
    {
      definition: "absolute; without exception",
      term: "categorical",
    },
    {
      definition: "smaller group within an organization",
      term: "caucus",
    },
    {
      definition: "involving a cause",
      term: "causal",
    },
    {
      definition: "sarcastically biting; burning",
      term: "caustic",
    },
    {
      definition: "concerning the sky or heavens; sublime",
      term: "celestial",
    },
    {
      definition: "moving away from a center",
      term: "centrifugal",
    },
    {
      definition: "moving or directed toward a center",
      term: "centripetal",
    },
    {
      definition: "to defend or support",
      term: "champion",
    },
    {
      definition: "to correct by punishment or reproof; to restrain or subdue",
      term: "chasten",
    },
    {
      definition: "trickery; fraud",
      term: "chicanery",
    },
    {
      definition:
        "the qualities idealized by knighthood such as bravery and gallantry toward women",
      term: "chivalry",
    },
    {
      definition: "rude; boorish",
      term: "churlish",
    },
    {
      definition: "roundabout",
      term: "circuitous",
    },
    {
      definition: "one who can predict the future; psychic",
      term: "clairvoyant",
    },
    {
      definition: "noisy outcry",
      term: "clamor",
    },
    {
      definition: "a small, exclusive group",
      term: "clique",
    },
    {
      definition: "thicken; congeal",
      term: "coagulate",
    },
    {
      definition:
        "v. to confine; seclude, n. monastery or convent, adj. shut away from the world (cloistered)",
      term: "cloister",
    },
    {
      definition: "to cause to beome one",
      term: "coalesce",
    },
    {
      definition:
        "concluding part of a literary or musical composition; something that summarizes or concludes",
      term: "coda",
    },
    {
      definition: "systematize",
      term: "codify",
    },
    {
      definition: "informed; conscious; aware",
      term: "cognizant",
    },
    {
      definition:
        "artistic composition of materials pasted over a surface; an assemblage of diverse elements",
      term: "collage",
    },
    {
      definition: "proportional",
      term: "commensurate",
    },
    {
      definition: "brief, comprehensive summary",
      term: "compendium",
    },
    {
      definition: "self-satisfied",
      term: "complacent",
    },
    {
      definition: "overly polite; willing to please; obliging",
      term: "complaisant",
    },
    {
      definition: "something that completes or makes up a whole",
      term: "complement",
    },
    {
      definition: "yielding",
      term: "compliant",
    },
    {
      definition: "uneasiness caused by guilt",
      term: "compunction",
    },
    {
      definition: "curving inward",
      term: "concave",
    },
    {
      definition: "overcoming distrust or hostility",
      term: "conciliatory",
    },
    {
      definition: "invent",
      term: "concoct",
    },
    {
      definition: "existing concurrently",
      term: "concomitant",
    },
    {
      definition: "to overlook volutarily; forgive",
      term: "condone",
    },
    {
      definition: "to baffle; perplex; mix up",
      term: "confound",
    },
    {
      definition: "similar in tastes and habits; friendly; suited to",
      term: "congenial",
    },
    {
      definition: "pertaining to marriage agreement",
      term: "conjugal",
    },
    {
      definition:
        "a person possessing expert knowledge or training; a person of informed and discriminating taste",
      term: "connoisseur",
    },
    {
      definition:
        "n. person compulsorily enrolled for military service, v. to enroll a person for military service",
      term: "conscript",
    },
    {
      definition: "to declare sacred",
      term: "consecrate",
    },
    {
      definition: "v. to assert, n. an assertion (contention)",
      term: "contend",
    },
    {
      definition: "quarrelsome; causing quarrels",
      term: "contentious",
    },
    {
      definition: "self-control; abstention from sexual activity",
      term: "continence",
    },
    {
      definition: "very sorrowful for a wrong",
      term: "contrite",
    },
    {
      definition: "disobedient; rebellious",
      term: "contumacious",
    },
    {
      definition: "riddle; puzzle with no solution",
      term: "conundrum",
    },
    {
      definition: "touching, neighboring; connecting without a break",
      term: "contiguous",
    },
    {
      definition:
        "n. practice widely observed in a group; custom; accepted technique or device, adj. customary or commonplace (conventional)",
      term: "convention",
    },
    {
      definition: "to approach; come together; tend to meet",
      term: "converge",
    },
    {
      definition: "curved outward",
      term: "convex",
    },
    {
      definition: "sociable",
      term: "convivial",
    },
    {
      definition: "twisted; complicated",
      term: "convoluted",
    },
    {
      definition: "abundant; plentiful",
      term: "copious",
    },
    {
      definition: "woman who flirts",
      term: "coquette",
    },
    {
      definition: "horn overflowing with fruit and grain; state of abundance",
      term: "cornucopia",
    },
    {
      definition:
        "study of the universe as a totality;theory of the origin and structure of the universe",
      term: "cosmology",
    },
    {
      definition: "hidden; secret",
      term: "covert",
    },
    {
      definition: "desiring something owned by another",
      term: "covetous",
    },
    {
      definition: "to mislead by trick or fraud; deceive",
      term: "cozen",
    },
    {
      definition: "cowardly",
      term: "craven",
    },
    {
      definition: "acceptance of something as true",
      term: "credence",
    },
    {
      definition: "statement of belief or principle; creed",
      term: "credo",
    },
    {
      definition: "to discourage; intimidate; dishearten",
      term: "daunt",
    },
    {
      definition: "scarcity",
      term: "dearth",
    },
    {
      definition: "corruption",
      term: "debauchery",
    },
    {
      definition: "proper behavior",
      term: "decorum",
    },
    {
      definition: "to malign; harm someone's reputation",
      term: "defame",
    },
    {
      definition: "to fail to act",
      term: "default",
    },
    {
      definition: "respect; regard for another's wish",
      term: "deference",
    },
    {
      definition: "no longer existing",
      term: "defunct",
    },
    {
      definition: "to represent or depict",
      term: "delineate",
    },
    {
      definition: "related to population balance",
      term: "demographic",
    },
    {
      definition: "pertaining to people",
      term: "demotic",
    },
    {
      definition: "to express doubt",
      term: "demur",
    },
    {
      definition: "to slur someone's reputation",
      term: "denigrate",
    },
    {
      definition: "an inhabitant; a regular visitor",
      term: "denizen",
    },
    {
      definition:
        "outcome; unraveling of the plot of a play or work of literature",
      term: "denouement",
    },
    {
      definition: "to mock",
      term: "deride",
    },
    {
      definition: "something derived; unoriginal",
      term: "derivative",
    },
    {
      definition: "to dry completely",
      term: "desiccate",
    },
    {
      definition: "state of disuse",
      term: "desuetude",
    },
    {
      definition: "random; disconnected; rambling",
      term: "desultory",
    },
    {
      definition: "something that discourages or hinders",
      term: "deterrent",
    },
    {
      definition:
        "the act of taking away; derogatory comment on a person's character",
      term: "detraction",
    },
    {
      definition: "transparent; fine-textured; insubstantial; vague",
      term: "diaphanous",
    },
    {
      definition: "bitter verbal attack",
      term: "diatribe",
    },
    {
      definition: "division into two usually contradictory parts",
      term: "dichotomy",
    },
    {
      definition: "shyness; lack of confidence",
      term: "diffidence",
    },
    {
      definition: "v. to spread out, adj. wordy; rambling; spread out",
      term: "diffuse",
    },
    {
      definition: "act of straying from the main point",
      term: "digression",
    },
    {
      definition: "funeral hymn",
      term: "dirge",
    },
    {
      definition: "to free from misconception",
      term: "disabuse",
    },
    {
      definition: "perceptive; exhibiting keen insight and good judgment",
      term: "discerning",
    },
    {
      definition: "to make uneasy; disconcert",
      term: "discomfit",
    },
    {
      definition: "not in tune",
      term: "discordant",
    },
    {
      definition: "to dishonor; disgrace; cause to be doubted",
      term: "discredit",
    },
    {
      definition: "difference between",
      term: "discrepancy",
    },
    {
      definition: "constituting a separate thing; distinct",
      term: "discrete",
    },
    {
      definition:
        "quality of showing self-restraint in speech or actions; circumspection; freedom to act on one's own",
      term: "discretion",
    },
    {
      definition: "not candid; crafty",
      term: "disingenuous",
    },
    {
      definition: "unprejudiced; objection",
      term: "disinterested",
    },
    {
      definition: "lacking order or coherence; dislocated",
      term: "disjointed",
    },
    {
      definition: "put away from consideration; reject",
      term: "dismiss",
    },
    {
      definition: "to belittle",
      term: "disparage",
    },
    {
      definition: "dissimilar",
      term: "disparate",
    },
    {
      definition: "to pretend; disguise one's motinves",
      term: "dissemble",
    },
    {
      definition: "to spread; scatter; disperse",
      term: "disseminate",
    },
    {
      definition: "person who disagrees about belief, etc.",
      term: "dissident",
    },
    {
      definition: "disintegration; debauchery",
      term: "dissolution",
    },
    {
      definition: "discord; lack of harmony",
      term: "dissonance",
    },
    {
      definition: "to expand; swell out",
      term: "distend",
    },
    {
      definition: "extract the essential elements",
      term: "distill",
    },
    {
      definition: "inattentive; preoccupied",
      term: "distrait",
    },
    {
      definition: "to vary; go in different directions from the same point",
      term: "diverge",
    },
    {
      definition: "to strip; deprive; rid",
      term: "divest",
    },
    {
      definition: "to make known something that is secret",
      term: "divulge",
    },
    {
      definition:
        "relating to a person who cannot compromise about points of a theory or doctrine; dogmatic; unyielding",
      term: "doctrinaire",
    },
    {
      definition: "to provide with written evidence to support",
      term: "document",
    },
    {
      definition: "poor verse",
      term: "doggerel",
    },
    {
      definition: "stating opinions without proof",
      term: "dogmatic",
    },
    {
      definition: "inactive",
      term: "dormant",
    },
    {
      definition: "waste; worthless matter; trivial matter",
      term: "dross",
    },
    {
      definition: "to deceive; trick",
      term: "dupe",
    },
    {
      definition: "exhilarated; enthusiastic",
      term: "ebullient",
    },
    {
      definition: "selecting from various sources",
      term: "eclectic",
    },
    {
      definition:
        "state of high spirits or liveliness; the process of bubbling as gas escapes",
      term: "effervescence",
    },
    {
      definition: "depleted of vitality; overrefined; decadent",
      term: "effete",
    },
    {
      definition: "efficiency; effectiveness",
      term: "efficacy",
    },
    {
      definition: "shameless boldness; presumptuousness",
      term: "effrontery",
    },
    {
      definition:
        "the tendency to see thing in relation to oneself; self-centered",
      term: "egoism",
    },
    {
      definition: "excessively self-centered; conceited",
      term: "egotistical",
    },
    {
      definition: "poem or song expressing lamentation",
      term: "elegy",
    },
    {
      definition: "to provoke; draw out",
      term: "elicit",
    },
    {
      definition: "a substance believed to have the power to cure ills",
      term: "elixir",
    },
    {
      definition: "blissful; delightful",
      term: "elysian",
    },
    {
      definition: "thin and wasted",
      term: "emaciated",
    },
    {
      definition:
        "to adorn; decorate; enhance; make more attractive by adding details",
      term: "embellish",
    },
    {
      definition:
        "adj. soothing; mollifying, n. an agent that soothes or makes more acceptable",
      term: "emollient",
    },
    {
      definition: "derived observation and experiment",
      term: "empirical",
    },
    {
      definition: "to imitate; copy",
      term: "emulate",
    },
    {
      definition: "a formal expression of praise",
      term: "encomium",
    },
    {
      definition: "inherent; belonging to an area",
      term: "endemic",
    },
    {
      definition: "to weaken",
      term: "enervate",
    },
    {
      definition: "to cause; produce",
      term: "engender",
    },
    {
      definition: "to increase; improve",
      term: "enhance",
    },
    {
      definition: "the scientific study of insects",
      term: "entomology",
    },
    {
      definition: "to pronounce clearly",
      term: "enuciate",
    },
    {
      definition: "short-lived; fleeting",
      term: "ephemeral",
    },
    {
      definition: "branch of philosophy that examines the nature of knowledge",
      term: "epistemology",
    },
    {
      definition: "steady; unvarying; serene",
      term: "equable",
    },
    {
      definition: "composure; calmness",
      term: "equanimity",
    },
    {
      definition: "to intentionally use vague language",
      term: "equivocation",
    },
    {
      definition: "mistaken; straying from the proper course",
      term: "errant",
    },
    {
      definition: "learned; scholarly",
      term: "erudite",
    },
    {
      definition: "hard to understand; known only to a few",
      term: "esoteric",
    },
    {
      definition: "to make an attempt; subject to a test",
      term: "essay",
    },
    {
      definition: "admirable; possible to estimate",
      term: "estimable",
    },
    {
      definition: "based on the attitude that one's group is superior",
      term: "ethnocentric",
    },
    {
      definition: "causes or origins",
      term: "etiology",
    },
    {
      definition: "origin and history of a word",
      term: "etymology",
    },
    {
      definition:
        "study of factors that influence the hereditary qualities of the human race and ways to improve these qualities",
      term: "eugenics",
    },
    {
      definition: "high praise, especially of a person who has recently died",
      term: "eulogy",
    },
    {
      definition:
        "use of agreeable or inoffensive language in place of unpleasant or offensive language",
      term: "euphemism",
    },
    {
      definition: "a feeling of extreme happiness",
      term: "euphoria",
    },
    {
      definition: "mercy killing",
      term: "euthanasia",
    },
    {
      definition: "to show plainly; be an indication of",
      term: "evince",
    },
    {
      definition: "tending to call to mind or produce a reaction",
      term: "evocative",
    },
    {
      definition: "to aggravate; make worse",
      term: "exacerbate",
    },
    {
      definition:
        "v. to force the payment of; demand and obtain by authority, adj. extremely demanding (exacting)",
      term: "exact",
    },
    {
      definition: "to clear of blame; vindicate",
      term: "exculpate",
    },
    {
      definition: "detestable; abhorrent",
      term: "execrable",
    },
    {
      definition: "to urge by strong appeals",
      term: "exhort",
    },
    {
      definition: "crisis; urgent requirements",
      term: "exigency",
    },
    {
      definition:
        "having to do with existence; based on experience; having to do with the philosophy of existentialism",
      term: "existential",
    },
    {
      definition: "to expel evil spirits; free from bad influences",
      term: "exorcise",
    },
    {
      definition: "to speak or write at length",
      term: "expatiate",
    },
    {
      definition: "to send into exile",
      term: "expatriate",
    },
    {
      definition: "to atone for",
      term: "expiate",
    },
    {
      definition: "to explain; interpret; clarify",
      term: "explicate",
    },
    {
      definition: "explanatory",
      term: "expository",
    },
    {
      definition: "in existence; not lost",
      term: "extant",
    },
    {
      definition: "unrehearsed",
      term: "extemporaneous",
    },
    {
      definition: "to root up; to destroy",
      term: "extirpate",
    },
    {
      definition: "not essential",
      term: "extraneous",
    },
    {
      definition: "the act of estimation by projecting known information",
      term: "extrapolation",
    },
    {
      definition: "not inherent or essential",
      term: "extrinsic",
    },
    {
      definition: "humorous",
      term: "facetious",
    },
    {
      definition: "to make less difficult",
      term: "facilitate",
    },
    {
      definition: "a person who does all sorts of work; a handyman",
      term: "factotum",
    },
    {
      definition: "based on a false idea or fact; misleading",
      term: "fallacious",
    },
    {
      definition: "plowed but not sowed; uncultivated",
      term: "fallow",
    },
    {
      definition: "foolishly self-satisfied",
      term: "fatuous",
    },
    {
      definition: "animals of a period or region",
      term: "fauna",
    },
    {
      definition: "seeking favor by flattery",
      term: "fawning",
    },
    {
      definition: "suitably expressed; appropriate; well-chosen",
      term: "felicitous",
    },
    {
      definition: "existing in a wild or untamed state",
      term: "feral",
    },
    {
      definition:
        "n. warmth and intensity of emotion, adj. full of strong emotion or impassioned (fervent)",
      term: "fervor",
    },
    {
      definition: "having a bad smell",
      term: "fetid",
    },
    {
      definition:
        "v. to bind; confine, n. something that restricts or restrains",
      term: "fetter",
    },
    {
      definition: "arbitrary order; authorization",
      term: "fiat",
    },
    {
      definition: "loyalty; exact correspondence",
      term: "fidelity",
    },
    {
      definition:
        "use of obstructive tactics in a legislature to block passage of a law",
      term: "filibuster",
    },
    {
      definition:
        "to handle with a deceptive or evasive strategy; to use finesse, that is, refinement in performance",
      term: "finesse",
    },
    {
      definition: "crevice",
      term: "fissure",
    },
    {
      definition: "to droop; grow weak",
      term: "flag",
    },
    {
      definition: "beginner; novice",
      term: "fledgling",
    },
    {
      definition: "plants of a region or era",
      term: "flora",
    },
    {
      definition: "ruddy; reddish; flowery",
      term: "florid",
    },
    {
      definition:
        "n. an embellishment or ornamentation, v. meaning to grow vigorously, or to thrive",
      term: "flourish",
    },
    {
      definition: "to treat scornfully",
      term: "flout",
    },
    {
      definition: "flowing; a continuous moving",
      term: "flux",
    },
    {
      definition: "to incite; arouse",
      term: "foment",
    },
    {
      definition: "patience",
      term: "forbearance",
    },
    {
      definition: "to prevent; delay",
      term: "forestall",
    },
    {
      definition: "menacing; threatening",
      term: "formidable",
    },
    {
      definition: "renounce; repudiate",
      term: "forswear",
    },
    {
      definition: "to sink; fail; collapse",
      term: "founder",
    },
    {
      definition: "a loud quarrel; brawl",
      term: "fracas",
    },
    {
      definition: "quarrelsome; unruly; rebellious",
      term: "fractious",
    },
    {
      definition: "a painting done on plaster",
      term: "fresco",
    },
    {
      definition: "ornamental band on a wall",
      term: "frieze",
    },
    {
      definition: "stubbornly contrary; obstinately disobedient",
      term: "froward",
    },
    {
      definition: "thrift",
      term: "frugality",
    },
    {
      definition: "to attack loudly; denounce",
      term: "fulminate",
    },
    {
      definition: "so excessive as to be disgusting",
      term: "fulsome",
    },
    {
      definition: "union; synthesis",
      term: "fusion",
    },
    {
      definition: "ineffective; useless; fruitless",
      term: "futile",
    },
    {
      definition: "to deny; dispute; oppose",
      term: "gainsay",
    },
    {
      definition: "to frolic; leap playfully",
      term: "gambol",
    },
    {
      definition: "very talkative; wordy",
      term: "garrulous",
    },
    {
      definition: "coarse and uncouth; clumsy",
      term: "gauche",
    },
    {
      definition: "cheerfulness; kindliness; sociability",
      term: "geniality",
    },
    {
      definition:
        "to divide an area into voting districts in a way that favors a political party",
      term: "gerrymander",
    },
    {
      definition: "fluent in an insincere way; offhand",
      term: "glib",
    },
    {
      definition: "to prod; urge on",
      term: "goad",
    },
    {
      definition: "sheer; light and delicate, like cobwebs",
      term: "gossamer",
    },
    {
      definition: "to tear out; scoop out; overcharge",
      term: "gouge",
    },
    {
      definition: "pompous; bombastic",
      term: "grandiloquent",
    },
    {
      definition: "sociable",
      term: "gregarious",
    },
    {
      definition: "to complain",
      term: "grouse",
    },
    {
      definition: "free of cunning or deceit; artless",
      term: "guileless",
    },
    {
      definition: "outward appearance; false appearance; pretense",
      term: "guise",
    },
    {
      definition: "easily deceived",
      term: "gullible",
    },
    {
      definition: "affecting the sense of taste",
      term: "gustatory",
    },
    {
      definition: "calm and peaceful; happy; golden; prosperous",
      term: "halcyon",
    },
    {
      definition: "holy; sacred",
      term: "hallowed",
    },
    {
      definition: "long, pompous speech; tirade",
      term: "harangue",
    },
    {
      definition: "extremely distressing; terrifying",
      term: "harrowing",
    },
    {
      definition:
        "relating to a herbivore, an animal that feeds mainly on plants",
      term: "herbivorous",
    },
    {
      definition: "tightly sealed; magical",
      term: "hermetic",
    },
    {
      definition: "unorthodox; not widely accepted",
      term: "heterodox",
    },
    {
      definition:
        "a system of writing in which pictorial symbols represent meaning or sounds; writing or symbols that are difficult to decipher; the symbols used in advanced mathematics",
      term: "hieroglyphic",
    },
    {
      definition: "covered with hair",
      term: "hirsute",
    },
    {
      definition:
        "relating to exaggerated emotional behavior calculated for effect; theatrical arts or performances",
      term: "histrionic",
    },
    {
      definition:
        "automatic maintenance by an organism of normal temperature, chemical balance, etc. within itself",
      term: "homeostasis",
    },
    {
      definition: "sermon; tedious moralizing lecture; platitude",
      term: "homily",
    },
    {
      definition: "composed of identical parts; uniform in composition",
      term: "homogeneous",
    },
    {
      definition: "purposeful exaggeration for effect",
      term: "hyperbole",
    },
    {
      definition: "attacking cherished tradition",
      term: "iconoclastic",
    },
    {
      definition: "idol worship; blind or excessive devotion",
      term: "idolatry",
    },
    {
      definition: "produced by fire; volcanic",
      term: "igneous",
    },
    {
      definition: "complicated situation; an entanglement",
      term: "imbroglio",
    },
    {
      definition: "unchangeable",
      term: "immutable",
    },
    {
      definition: "to damage; injure",
      term: "impair",
    },
    {
      definition: "showing no emotion",
      term: "impassive",
    },
    {
      definition: "poor; having no money",
      term: "impecunious",
    },
    {
      definition: "to hinder; block",
      term: "impede",
    },
    {
      definition: "impossible to penetrate",
      term: "impermeable",
    },
    {
      definition: "not easily disturbed",
      term: "imperturbable",
    },
    {
      definition: "impossible to penetrate; incapable of being affected",
      term: "impervious",
    },
    {
      definition: "to strike; encroach",
      term: "impinge",
    },
    {
      definition: "inflexible; incapable of being pleased",
      term: "implacable",
    },
    {
      definition: "unlikely; unbelievable",
      term: "implausible",
    },
    {
      definition: "implied; understood but not stated",
      term: "implicit",
    },
    {
      definition: "collapse inward violently",
      term: "implode",
    },
    {
      definition: "curse",
      term: "imprecation",
    },
    {
      definition:
        "to relate to a particular cause or source; attribute the fault to; assign as a characteristic",
      term: "impute",
    },
    {
      definition: "carelessly; unintentionally",
      term: "inadvertently",
    },
    {
      definition: "having bodily form",
      term: "incarnate",
    },
    {
      definition: "imperfectly formed or formulated",
      term: "inchoate",
    },
    {
      definition: "state of not fitting",
      term: "incongruity",
    },
    {
      definition: "insignificant; unimportant",
      term: "inconsequential",
    },
    {
      definition:
        "introduce something into another thing already in existence; combine",
      term: "incorporate",
    },
    {
      definition: "sudden invasion",
      term: "incursion",
    },
    {
      definition: "uncertain; indefinite",
      term: "indeterminate",
    },
    {
      definition: "poverty",
      term: "indigence",
    },
    {
      definition: "habitually lazy; idle",
      term: "indolent",
    },
    {
      definition: "not to be avoided or escaped; inevitable",
      term: "ineluctable",
    },
    {
      definition: "unable to move; sluggish",
      term: "inert",
    },
    {
      definition: "naive and trusting; lacking sophistication",
      term: "ingenuous",
    },
    {
      definition: "firmly established by nature or habit",
      term: "inherent",
    },
    {
      definition: "harmless",
      term: "innocuous",
    },
    {
      definition: "unconscious; unresponsive",
      term: "insensible",
    },
    {
      definition: "to suggest; say indirectly; imply",
      term: "insinuate",
    },
    {
      definition: "lacking in flavor; dull",
      term: "insipid",
    },
    {
      definition: "indifferent; lacking concern or care",
      term: "insouciant",
    },
    {
      definition: "narrow-mindedness; isolation",
      term: "insularity",
    },
    {
      definition: "insurmountable; unconquerable",
      term: "insuperable",
    },
    {
      definition: "not material",
      term: "intangible",
    },
    {
      definition:
        "to forbid; prohibit; to confront and halt the activities, advance, or entry of",
      term: "interdict",
    },
    {
      definition: "deadly to both sides",
      term: "internecine",
    },
    {
      definition: "to insert; change by adding new words or material",
      term: "interpolate",
    },
    {
      definition: "interval between reigns; gap in continuity",
      term: "interregnum",
    },
    {
      definition: "marked by close acquaintance",
      term: "intimate",
    },
    {
      definition: "not easily managed",
      term: "intractable",
    },
    {
      definition: "stubbornness; refusal to compromise",
      term: "intransigence",
    },
    {
      definition: "contemplating one's own thoughts and feelings",
      term: "introspective",
    },
    {
      definition: "to cover with water; overwhelm",
      term: "inundate",
    },
    {
      definition: "hardened; accustomed; used to",
      term: "inured",
    },
    {
      definition: "verbal abuse",
      term: "invective",
    },
    {
      definition: "to disapprove; protest vehemently",
      term: "inveigh",
    },
    {
      definition: "to win over by flattery or coaxing",
      term: "inveigle",
    },
    {
      definition: "confirmed; long-standing; deeply rooted",
      term: "inveterate",
    },
    {
      definition: "likely to provoke ill will; offensive",
      term: "invidious",
    },
    {
      definition: "easily angered",
      term: "irascible",
    },
    {
      definition: "unsure of how to act; weak",
      term: "irresolute",
    },
    {
      definition: "wandering from place to place; unsettled",
      term: "itinerant",
    },
    {
      definition: "route of a traveler's journey",
      term: "itinerary",
    },
    {
      definition:
        "having a yellowish discoloration of the skin; affected by envy, resentment, or hostility",
      term: "jaundiced",
    },
    {
      definition: "to be in agreement",
      term: "jibe",
    },
    {
      definition: "fond of joking; jocular; playful",
      term: "jocose",
    },
    {
      definition: "huge force destroying everything in its path",
      term: "juggernaut",
    },
    {
      definition: "group of people united in politic intrigue",
      term: "junta",
    },
    {
      definition: "place side by side",
      term: "juxtapose",
    },
    {
      definition: "fame; glory; gonor",
      term: "kudos",
    },
    {
      definition: "likely to change",
      term: "labile",
    },
    {
      definition: "using few words",
      term: "laconic",
    },
    {
      definition: "to thrash verbally or physically",
      term: "lambaste",
    },
    {
      definition: "lustful",
      term: "lascivious",
    },
    {
      definition: "lethargy; sluggishness",
      term: "lassitude",
    },
    {
      definition: "present but hidden; potential",
      term: "latent",
    },
    {
      definition: "to praise",
      term: "laud",
    },
    {
      definition: "inactive",
      term: "lethargic",
    },
    {
      definition: "an embankment that prevents a river from overflowing",
      term: "levee",
    },
    {
      definition: "light manner or attitude",
      term: "levity",
    },
    {
      definition: "tolerant; broad-minded; generous; lavish",
      term: "liberal",
    },
    {
      definition: "one without moral restraint",
      term: "libertine",
    },
    {
      definition: "sexual desire",
      term: "libido",
    },
    {
      definition: "extremely small",
      term: "lilliputian",
    },
    {
      definition: "to draw; describe",
      term: "limn",
    },
    {
      definition: "clear; transparent",
      term: "limpid",
    },
    {
      definition: "pertaining to language",
      term: "linguistic",
    },
    {
      definition: "lengthy recitation; repetitive chant",
      term: "litany",
    },
    {
      definition: "scholarly or learned persons",
      term: "literati",
    },
    {
      definition: "legal proceedings",
      term: "litigation",
    },
    {
      definition: "record of a voyage; record of daily activities",
      term: "log",
    },
    {
      definition: "talkative",
      term: "loquacious",
    },
    {
      definition: "bright; clear; intelligible",
      term: "lucid",
    },
    {
      definition: "money or profits",
      term: "lucre",
    },
    {
      definition: "bright; brilliant; glowing",
      term: "luminous",
    },
    {
      definition: "shining",
      term: "lustrous",
    },
    {
      definition: "crafty; double-dealing",
      term: "machiavellian",
    },
    {
      definition: "plots or schemes",
      term: "machination",
    },
    {
      definition: "whirlpool; turmoil",
      term: "maelstrom",
    },
    {
      definition: "generosity; nobility",
      term: "magnanimity",
    },
    {
      definition: "to speak evil of",
      term: "malign",
    },
    {
      definition: "to feign illness to escape duty",
      term: "malinger",
    },
    {
      definition: "capable of being shaped by pounding; impressionable",
      term: "malleable",
    },
    {
      definition: "dissenter",
      term: "maverick",
    },
    {
      definition: "delusions of power or importance",
      term: "megalomania",
    },
    {
      definition: "a variety of animals kept together",
      term: "menagerie",
    },
    {
      definition: "dishonest",
      term: "mendacious",
    },
    {
      definition: "beggar",
      term: "mendicant",
    },
    {
      definition: "gaudy; plausible but false; specious",
      term: "meretricious",
    },
    {
      definition: "to hypnotize",
      term: "mesmerize",
    },
    {
      definition: "change; transformation",
      term: "metamorphosis",
    },
    {
      definition:
        "a branch of philosophy that investigates the ultimate nature of reality",
      term: "metaphysics",
    },
    {
      definition: "concerned with the weather",
      term: "meteorological",
    },
    {
      definition: "very careful; fastidious",
      term: "meticulous",
    },
    {
      definition: "courage; endurance",
      term: "mettle",
    },
    {
      definition: "full of courage and fortitude; spirited",
      term: "mettlesome",
    },
    {
      definition:
        "a small system having analogies to a larger system; small world",
      term: "microcosm",
    },
    {
      definition: "to work against",
      term: "militate",
    },
    {
      definition: "threatening; menacing",
      term: "minatory",
    },
    {
      definition: "very small",
      term: "minuscule",
    },
    {
      definition: "petty details",
      term: "minutia",
    },
    {
      definition: "one who hates humanity",
      term: "misanthrope",
    },
    {
      definition: "mixture of writings on various subjects",
      term: "miscellany",
    },
    {
      definition: "villain; criminal",
      term: "miscreant",
    },
    {
      definition: "one who hates women",
      term: "misogynist",
    },
    {
      definition:
        "to cause to become less harsh; severe, or painful; alleviate",
      term: "mitigate",
    },
    {
      definition:
        "adj. related to memory; assisting memory, n. a system that develops and improves the memory",
      term: "mnemonic",
    },
    {
      definition: "limited quantity",
      term: "modicum",
    },
    {
      definition: "soothe",
      term: "mollify",
    },
    {
      definition: "solid and uniform; constituting a single, unified whole",
      term: "monolithic",
    },
    {
      definition: "ill-humored; sullen",
      term: "morose",
    },
    {
      definition: "many colored; made up of many parts",
      term: "motley",
    },
    {
      definition: "diverse",
      term: "multifarious",
    },
    {
      definition:
        "worldly as opposed to spiritual; concerned with the ordinary",
      term: "mundane",
    },
    {
      definition: "black magic",
      term: "necromancy",
    },
    {
      definition: "to cancel out; nullify",
      term: "negate",
    },
    {
      definition: "new word or expression",
      term: "neologism",
    },
    {
      definition: "novice; beginner",
      term: "neophyte",
    },
    {
      definition:
        "a means of connection; a connected group or series; a center",
      term: "nexus",
    },
    {
      definition: "bewildered",
      term: "nonplussed",
    },
    {
      definition: "sentimental longing for a past time",
      term: "nostalgia",
    },
    {
      definition: "medicine or remedy of doubtful effectiveness; supposed cure",
      term: "nostrum",
    },
    {
      definition: "trifling; invalid",
      term: "nugatory",
    },
    {
      definition: "stubborn",
      term: "obdurate",
    },
    {
      definition: "overly submissive",
      term: "obsequious",
    },
    {
      definition: "funeral ceremony (often used in the plural, obsequies)",
      term: "obsequy",
    },
    {
      definition: "to make unnecessary; to anticipate and prevent",
      term: "obviate",
    },
    {
      definition: "to shut; block",
      term: "occlude",
    },
    {
      definition: "relating to practices connected with supernatural phenomena",
      term: "occult",
    },
    {
      definition: "a long adventurous voyage; a quest",
      term: "odyssey",
    },
    {
      definition: "too helpful; meddlesome",
      term: "officious",
    },
    {
      definition: "concerning the sense of smell",
      term: "olfactory",
    },
    {
      definition:
        "form of government in which power belongs to only a few leaders",
      term: "oligarchy",
    },
    {
      definition: "burdensome",
      term: "onerous",
    },
    {
      definition:
        "formation or use of words that imitate sounds of the actions they refer to",
      term: "onomatopoeia",
    },
    {
      definition: "disgrace; contempt",
      term: "opprobrium",
    },
    {
      definition: "scientist who studies birds",
      term: "ornithologist",
    },
    {
      definition: "to move back and forth",
      term: "oscillate",
    },
    {
      definition: "showy; trying to attract attention; pretentious",
      term: "ostentatious",
    },
    {
      definition: "presumptuous; arrogant; overbearing",
      term: "overweening",
    },
    {
      definition: "song of joy or triumph; a fervent expression of joy",
      term: "paean",
    },
    {
      definition: "study of past geological eras through fossil remains",
      term: "paleontology",
    },
    {
      definition: "lacking color or liveliness",
      term: "pallid",
    },
    {
      definition: "elaborate praise; formal hymn of praise",
      term: "panegyric",
    },
    {
      definition: "model of excellence or perfection",
      term: "paragon",
    },
    {
      definition:
        "one-sided; committed to a party, group. or cause; prejudiced",
      term: "partisan",
    },
    {
      definition: "departing from normal condition",
      term: "pathological",
    },
    {
      definition: "a regional dialect; nonstandard speech; jargon",
      term: "patois",
    },
    {
      definition: "scarcity",
      term: "paucity",
    },
    {
      definition: "showing off learning",
      term: "pedantic",
    },
    {
      definition: "transparent; translucent; easily understood",
      term: "pellucid",
    },
    {
      definition: "inclination",
      term: "penchant",
    },
    {
      definition: "extreme poverty",
      term: "penurty",
    },
    {
      definition: "a wandering from place to place",
      term: "peregrination",
    },
    {
      definition: "imperative; leaving no choice",
      term: "peremptory",
    },
    {
      definition: "present throughout the years; persistent",
      term: "perennial",
    },
    {
      definition: "faithless; disloyal; untrustworthy",
      term: "perfidious",
    },
    {
      definition: "superficial; not thorough; performed really as a duty",
      term: "perfunctory",
    },
    {
      definition: "point in an orbit that is closest to the earth",
      term: "perigee",
    },
    {
      definition: "penetrable",
      term: "permeable",
    },
    {
      definition:
        "to disturb greatly; make uneasy or anxious; cause a body to deviate from its regular orbit",
      term: "perturb",
    },
    {
      definition: "spread throughout every part",
      term: "pervasive",
    },
    {
      definition: "rude; peevish",
      term: "petulant",
    },
    {
      definition: "calm in temperament; sluggish",
      term: "phlegmatic",
    },
    {
      definition:
        "mythical, immortal bird that lives for 500 years, burns itself to death, and rises from the ashes; anything that is restored after suffering great destruction",
      term: "phoenix",
    },
    {
      definition: "facial features",
      term: "physiognomy",
    },
    {
      definition: "devoutness",
      term: "piety",
    },
    {
      definition: "appealingly stimulating; pleasantly pungent; attrative",
      term: "piquant",
    },
    {
      definition: "n. fleeting feeling of hurt pride, v. to provoke or arouse",
      term: "pique",
    },
    {
      definition: "to lessen another's anger; to pacify",
      term: "placate",
    },
    {
      definition: "calm",
      term: "placid",
    },
    {
      definition: "melancholy; mournful",
      term: "plaintive",
    },
    {
      definition: "condition of being able to be shaped or formed; pliability",
      term: "plasticity",
    },
    {
      definition: "stale, overused expression",
      term: "platitude",
    },
    {
      definition: "spiritual; without sensual desire; theoretical",
      term: "platonic",
    },
    {
      definition: "excess; overabundance",
      term: "plethora",
    },
    {
      definition: "to determine the depth; to examine deeply",
      term: "plumb",
    },
    {
      definition: "to congratulate oneself in a self-satisfied way",
      term: "plume",
    },
    {
      definition: "to fall; plunge",
      term: "plummet",
    },
    {
      definition: "society ruled by the wealthy",
      term: "plutocracy",
    },
    {
      definition: "full of holes; permeable to liquids",
      term: "porous",
    },
    {
      definition:
        "person who affects an attitude or identity to impress others",
      term: "poseur",
    },
    {
      definition: "practical",
      term: "pragmatic",
    },
    {
      definition: "to talk idly; chatter",
      term: "prate",
    },
    {
      definition: "meaningless, foolish talk",
      term: "prattle",
    },
    {
      definition: "preliminary statement",
      term: "preamble",
    },
    {
      definition: "uncertain",
      term: "precarious",
    },
    {
      definition: "principle; law",
      term: "precept",
    },
    {
      definition:
        "v. to cause to happen; throw down from a height, adj. rash; hasty sudden",
      term: "precipitate",
    },
    {
      definition: "forerunner; predecessor",
      term: "precursor",
    },
    {
      definition: "to supersede; appropriate for oneself",
      term: "preempt",
    },
    {
      definition: "capable of grasping",
      term: "prehensile",
    },
    {
      definition: "forewarning; presentiment",
      term: "premonition",
    },
    {
      definition: "to foretell; indicate in advance",
      term: "presage",
    },
    {
      definition: "rude; improperly bold",
      term: "presumptuous",
    },
    {
      definition: "beyond the normal course of nature; supernatural",
      term: "preternatural",
    },
    {
      definition: "to quibble; evade the truth",
      term: "prevaricate",
    },
    {
      definition: "original; existing from the beginning",
      term: "primordial",
    },
    {
      definition: "untouched; uncorrupted",
      term: "pristine",
    },
    {
      definition: "honesty; high-mindedness",
      term: "probity",
    },
    {
      definition: "posing a problem; doubtful; unsettled",
      term: "problematic",
    },
    {
      definition: "wasteful; extravagant; lavish",
      term: "prodigal",
    },
    {
      definition: "deep; not superficial",
      term: "profound",
    },
    {
      definition:
        "so high as to prevent the purchase or use of; preventing; forbidding",
      term: "prohibitive",
    },
    {
      definition: "to increase rapidly",
      term: "proliferate",
    },
    {
      definition: "to win over; appease",
      term: "propitiate",
    },
    {
      definition: "inclination; tendency",
      term: "propensity",
    },
    {
      definition: "correct conduct; fitness",
      term: "propriety",
    },
    {
      definition: "v. to condemn; forbid outlaw, adj. relating to prohibition",
      term: "proscribe",
    },
    {
      definition: "providing for future needs; frugal",
      term: "provident",
    },
    {
      definition: "powerful",
      term: "puissant",
    },
    {
      definition: "careful in observing rules of behavior or ceremony",
      term: "punctilious",
    },
    {
      definition:
        "strong or sharp in smell or taste; penetrating; caustic; to the point",
      term: "pungent",
    },
    {
      definition:
        "v. to profess; suppose; claim, n. meaning intended or implied",
      term: "purport",
    },
    {
      definition: "cowardly",
      term: "pusillanimous",
    },
    {
      definition: "marsh; difficult situation",
      term: "quagmire",
    },
    {
      definition: "to cower; lose heart",
      term: "quail",
    },
    {
      definition: "limited; restricted",
      term: "qualified",
    },
    {
      definition:
        "sudden feeling of faintness or nausea; uneasy feeling about the rightness of actions",
      term: "qualm",
    },
    {
      definition: "to question",
      term: "query",
    },
    {
      definition: "to argue over insignificant and irrelevant details",
      term: "quibble",
    },
    {
      definition: "inactive; still",
      term: "quiescent",
    },
    {
      definition: "number of members necessary to conduct a meeting",
      term: "quorum",
    },
    {
      definition: "witty, skillful storyteller",
      term: "raconteur",
    },
    {
      definition: "to scold with bitter or abusive language",
      term: "rail",
    },
    {
      definition: "clothing",
      term: "raiment",
    },
    {
      definition: "implication; outgrowth; consequence",
      term: "ramification",
    },
    {
      definition: "refined",
      term: "rarefied",
    },
    {
      definition: "fundamental reason",
      term: "rationale",
    },
    {
      definition: "puzzle in which pictures or symbols represent words",
      term: "rebus",
    },
    {
      definition: "resisting authority or control",
      term: "recalcitrant",
    },
    {
      definition: "to retract a statement or opinion",
      term: "recant",
    },
    {
      definition: "person who lives in seclusion and often in solitude",
      term: "recluse",
    },
    {
      definition: "abstruse; profound",
      term: "recondite",
    },
    {
      definition: "formidable; arousing fear; worthy of respect",
      term: "redoubtable",
    },
    {
      definition:
        "stubborn; unmanageable; resisting ordinary methods of treatment",
      term: "refractory",
    },
    {
      definition: "deflect light or sound",
      term: "refract",
    },
    {
      definition: "brightly shining; resplendent",
      term: "refulgent",
    },
    {
      definition: "to contradict; disapprove",
      term: "refute",
    },
    {
      definition: "entertain",
      term: "regale",
    },
    {
      definition: "to consign to an inferior position",
      term: "relegate",
    },
    {
      definition: "to object or protest",
      term: "remonstrate",
    },
    {
      definition: "to go back on one's word",
      term: "renege",
    },
    {
      definition: "amends; compensation",
      term: "reparation",
    },
    {
      definition: "fret; complain",
      term: "repine",
    },
    {
      definition: "repetition, especially of a piece of music",
      term: "reprise",
    },
    {
      definition: "to find fault with; blame",
      term: "reproach",
    },
    {
      definition: "morally unprincipled person",
      term: "reprobate",
    },
    {
      definition: "to reject as having no authority",
      term: "repudiate",
    },
    {
      definition: "to cancel",
      term: "rescind",
    },
    {
      definition: "determination; resolve",
      term: "resolution",
    },
    {
      definition: "determination; firmness of purpose",
      term: "resolve",
    },
    {
      definition: "not speaking freely; reserved; reluctant",
      term: "reticent",
    },
    {
      definition: "expressing deep respect; worshipful",
      term: "reverent",
    },
    {
      definition: "retaliatory action or retort",
      term: "riposte",
    },
    {
      definition:
        "excessively ornate; highly decorated; style of architecture in eighteenth century europe",
      term: "rococo",
    },
    {
      definition:
        "title or heading; category; established mode of procedure or conduct; protocol",
      term: "rubric",
    },
    {
      definition: "to regret",
      term: "rue",
    },
    {
      definition: "trick; crafty stratagem; subterfuge",
      term: "ruse",
    },
    {
      definition: "wise",
      term: "sage",
    },
    {
      definition: "lascivious; lustful",
      term: "salacious",
    },
    {
      definition: "healthful",
      term: "salubrious",
    },
    {
      definition: "expecting an improvement; favorable to health",
      term: "salutary",
    },
    {
      definition:
        "v. to approve; ratify; permit, n. approval; ratification; permission; penalize",
      term: "sanction",
    },
    {
      definition: "cynical; scornfully mocking",
      term: "sardonic",
    },
    {
      definition: "pertaining to tailors",
      term: "sartorial",
    },
    {
      definition: "to satisfy",
      term: "satiate",
    },
    {
      definition: "to soak thoroughly; imbue throughout",
      term: "saturate",
    },
    {
      definition: "gloomy",
      term: "saturnine",
    },
    {
      definition:
        "a creature that is half-man, half-beast with the horns and legs of a goat; it is a follower of dionysos; a lecher",
      term: "satyr",
    },
    {
      definition: "to enjoy; have a distinctive flavor or smell",
      term: "savor",
    },
    {
      definition: "relating to or in the form of an outline or diagram",
      term: "schematic",
    },
    {
      definition: "produce and release substance into an organism",
      term: "secrete",
    },
    {
      definition: "behavior prompting rebellion",
      term: "sedition",
    },
    {
      definition: "diligent",
      term: "sedulous",
    },
    {
      definition: "relating to earthquakes; earthshaking",
      term: "seismic",
    },
    {
      definition:
        "relating to the senses; gratifying the physical senses, especially sexual appetites",
      term: "sensual",
    },
    {
      definition: "relating to the senses; operating through the senses",
      term: "sensuous",
    },
    {
      definition: "aware; conscious; able to perceive",
      term: "sentient",
    },
    {
      definition: "submissive; obedient",
      term: "servile",
    },
    {
      definition: "navigation tool that determines latitude and longitude",
      term: "sextant",
    },
    {
      definition: "a piece of broken glass or pottery",
      term: "shard",
    },
    {
      definition: "relating to the stars",
      term: "sidereal",
    },
    {
      definition: "apelike; relating to apes",
      term: "simian",
    },
    {
      definition: 'comparison of one thing with another using "like" or "as"',
      term: "simile",
    },
    {
      definition: "well-paying job or office that requires little or no work",
      term: "sinecure",
    },
    {
      definition: "unique; extraordinary; odd",
      term: "singular",
    },
    {
      definition: "winding; intricate; complex",
      term: "sinuous",
    },
    {
      definition: "one who doubts",
      term: "skeptic",
    },
    {
      definition: "seriousness",
      term: "sobriety",
    },
    {
      definition: "thoroughly soaked; saturated",
      term: "sodden",
    },
    {
      definition: "concerned; attentive; eager",
      term: "solicitous",
    },
    {
      definition:
        "literary or dramatic speech by one character, not addressed to others",
      term: "soliloquy",
    },
    {
      definition: "able to meet financial obligation",
      term: "solvent",
    },
    {
      definition: "relating to or affecting the body; corporeal",
      term: "somatic",
    },
    {
      definition: "sleep producing",
      term: "soporific",
    },
    {
      definition: "filthy; contemptible and corrupt",
      term: "sordid",
    },
    {
      definition: "seeming to be logical and sound, but not really so",
      term: "specious",
    },
    {
      definition:
        "band of colors produced when sunlight passes through a prism; a broad range of related ideas or objects",
      term: "spectrum",
    },
    {
      definition:
        "n. person who spends money recklessly, adj. wasteful and extravagant",
      term: "spendthrift",
    },
    {
      definition: "irregular",
      term: "sporadic",
    },
    {
      definition: "filthy, wretched condition",
      term: "squalor",
    },
    {
      definition: "marked by abrupt, clear-cut sounds",
      term: "staccato",
    },
    {
      definition: "to stop or check the flow of",
      term: "stanch",
    },
    {
      definition: "extremely loud",
      term: "stentorian",
    },
    {
      definition: "mark of disgrace or inferiority",
      term: "stigma",
    },
    {
      definition: "v. to be sparing, n. a period of time spent doing something",
      term: "stint",
    },
    {
      definition: "to specify as an essential condition",
      term: "stipulate",
    },
    {
      definition: "having or showing little emotion",
      term: "stolid",
    },
    {
      definition: "arranged in layers",
      term: "stratified",
    },
    {
      definition: "marked with thin, narrow grooves or channels",
      term: "striated",
    },
    {
      definition: "something that restrains; negative criticism",
      term: "stricture",
    },
    {
      definition: "loud; harsh; unpleasantly noisy",
      term: "strident",
    },
    {
      definition: "to swagger; display to impress others",
      term: "strut",
    },
    {
      definition: "to impair or reduce to uselessness",
      term: "stultify",
    },
    {
      definition: "to dull the senses of; stun; astonish",
      term: "stupefy",
    },
    {
      definition: "dark and gloomy; hellish",
      term: "stygian",
    },
    {
      definition: "notice ordering someone to appear in court",
      term: "subpoena",
    },
    {
      definition: "to settle down; grow quiet",
      term: "subside",
    },
    {
      definition: "to support with proof or evidence",
      term: "substantiate",
    },
    {
      definition: "essential; pertaining to the substance",
      term: "substantive",
    },
    {
      definition: "to include; incorporate",
      term: "subsume",
    },
    {
      definition:
        "intended to undermine or overthrow, especially an established government",
      term: "subversive",
    },
    {
      definition: "relief; help in time of distress or want",
      term: "succor",
    },
    {
      definition: "the right to vote",
      term: "suffrage",
    },
    {
      definition: "various",
      term: "sundry",
    },
    {
      definition:
        "to replace, especially to displace as inferior or antiquated",
      term: "supersede",
    },
    {
      definition: "lying on the back; marked by lethargy",
      term: "supine",
    },
    {
      definition: "to replace; substitute",
      term: "supplant",
    },
    {
      definition: "beseeching",
      term: "suppliant",
    },
    {
      definition: "one who asks humbly and earnestly",
      term: "supplicant",
    },
    {
      definition: "the act of assuming to be true or real",
      term: "supposition",
    },
    {
      definition:
        "a form of deductive reasoning that has a major premise, a minor premise, and a conclusion",
      term: "syllogism",
    },
    {
      definition: "related to the woods or forest",
      term: "sylvan",
    },
    {
      definition: "silently understood; implied",
      term: "tacit",
    },
    {
      definition: "charm to bring good luck and avert misfortune",
      term: "talisman",
    },
    {
      definition: "peripheral; digressing",
      term: "tangential",
    },
    {
      definition: "unnecessary repetition",
      term: "tautology",
    },
    {
      definition:
        "science of classification; in biology, the process of classifying organsims in categories",
      term: "taxonomy",
    },
    {
      definition: "belief; doctrine",
      term: "tenet",
    },
    {
      definition: "weak; insubstantial",
      term: "tenuous",
    },
    {
      definition: "earthly; commonplace",
      term: "terrestrial",
    },
    {
      definition: "government by priests representing a god",
      term: "theocracy",
    },
    {
      definition: "an actor or actress",
      term: "thespian",
    },
    {
      definition:
        "the characteristic quality of sound produced by a particular instrument or voice; tone color",
      term: "timbre",
    },
    {
      definition: "long, violent speech; verbal assault",
      term: "tirade",
    },
    {
      definition: "flatterer; hanger-on; yes-man",
      term: "toady",
    },
    {
      definition: "book, usually large and academic",
      term: "tome",
    },
    {
      definition: "lethargy; dormancy; sluggishness",
      term: "torpor",
    },
    {
      definition:
        "a turning or twisting force; the moment of a force; the measure of a force's tendency to produce twisting or turning and rotation around an axis",
      term: "torque",
    },
    {
      definition: "having many twists and turns; highly complex",
      term: "tortuous",
    },
    {
      definition: "to promote or praise energetically",
      term: "tout",
    },
    {
      definition: "obedient; yielding",
      term: "tractable",
    },
    {
      definition: "act of trespassing or violating a law or rule",
      term: "transgression",
    },
    {
      definition: "temporary; short-lived; fleeting",
      term: "transient",
    },
    {
      definition: "partially transparent",
      term: "translucent",
    },
    {
      definition:
        "n. work, especially arduous work; tribulation; anguish, v. to work strenuously",
      term: "travail",
    },
    {
      definition: "parody; exaggerated imitation; caricature",
      term: "travesty",
    },
    {
      definition: "article treating a subject systematically and thoroughly",
      term: "treatise",
    },
    {
      definition: "trembling; quivering; frugal; timid",
      term: "tremulous",
    },
    {
      definition: "fear and anxiety",
      term: "trepidation",
    },
    {
      definition: "aggressiveness; ferocity",
      term: "truculence",
    },
    {
      definition: "agreement between lovers to meet; rendezvous",
      term: "tryst",
    },
    {
      definition: "a social condition marked by a breakdown of social norms",
      term: "anomie",
    },
    {
      definition: "swollen; distended",
      term: "tumid",
    },
    {
      definition: "muddy; opaque; in a state of great confusion",
      term: "turbid",
    },
    {
      definition: "swollen; bloated; pompous",
      term: "turgid",
    },
    {
      definition: "serving as a guardian or protector",
      term: "tutelary",
    },
    {
      definition: "mysterious; strange",
      term: "uncanny",
    },
    {
      definition: "moving in waves",
      term: "undulating",
    },
    {
      definition: "not false; not made up; genuine",
      term: "unfeigned",
    },
    {
      definition: "indefensible",
      term: "untenable",
    },
    {
      definition: "not favorable; troublesome; adverse; unruly",
      term: "untoward",
    },
    {
      definition: "practice of lending money at exorbitant rates",
      term: "usury",
    },
    {
      definition: "to waver; oscillate",
      term: "vacillate",
    },
    {
      definition: "empty; void; lacking intelligence; purposeless",
      term: "vacuous",
    },
    {
      definition: "pertaining to a farewell",
      term: "valedictory",
    },
    {
      definition: "tasteless; dull",
      term: "vapid",
    },
    {
      definition: "varied; marked with different colors",
      term: "variegated",
    },
    {
      definition: "to boast; brag",
      term: "vaunt",
    },
    {
      definition: "bribable; mercenary; corruptible",
      term: "venal",
    },
    {
      definition: "prolonged feud marked by bitter hostility",
      term: "vendetta",
    },
    {
      definition:
        "v. to adore; honor; respect, adj. respected because of age, character, or position",
      term: "venerate",
    },
    {
      definition: "truthful; accurate",
      term: "veracious",
    },
    {
      definition: "wordy",
      term: "verbose",
    },
    {
      definition: "dizziness",
      term: "vertigo",
    },
    {
      definition: "irritation; annoyance; confusion; puzzlement",
      term: "vexation",
    },
    {
      definition: "practicable; capable of developing",
      term: "viable",
    },
    {
      definition: "spiteful; vengeful; unforgiving",
      term: "vindictive",
    },
    {
      definition: "someone with masterly skills; expert musician",
      term: "virtuoso",
    },
    {
      definition: "countenance; appearance; aspect",
      term: "visage",
    },
    {
      definition: "thick, syrupy, and sticky",
      term: "viscous",
    },
    {
      definition: "to impair the quality of; corrupt morally; make inoperative",
      term: "vitiate",
    },
    {
      definition: "using or containing harsh, abusive censure",
      term: "vituperative",
    },
    {
      definition:
        "dissection; surgery; or painful experiments performed on a living animal for the purpose of scientific research",
      term: "vivisection",
    },
    {
      definition: "prevailing fashion or practice",
      term: "vogue",
    },
    {
      definition: "tending to vary frequently; fickle",
      term: "volatile",
    },
    {
      definition: "whirlpool; whirlwind; center of turbulence",
      term: "vortex",
    },
    {
      definition:
        "adj. justified, v. to attest to the accuracy or quality; justify; grant authorization",
      term: "warranted",
    },
    {
      definition: "careful; cautious",
      term: "wary",
    },
    {
      definition: "to wallow or roll; toss about; be in turmoil",
      term: "welter",
    },
    {
      definition: "fanciful; unpredictable",
      term: "whimsical",
    },
    {
      definition: "playful or fanciful idea",
      term: "whimsy",
    },
    {
      definition: "vaguely longing; sadly thoughtful",
      term: "wistful",
    },
    {
      definition: "one who is fanatically devoted to a cause",
      term: "zealot",
    },
    {
      definition: "fanaticism",
      term: "zealotry",
    },
    {
      definition:
        "in fact, whether by right or not; exercising power without being legally established",
      term: "de facto",
    },
    {
      definition:
        "a person whose behavior differs from the accepted standards of society",
      term: "deviant",
    },
    {
      definition:
        "to submit to the wishes of another due to respect or recognition of the person's authority or knowledge",
      term: "defer",
    },
    {
      definition: "spiritual, without sensual desire, or theoretical",
      term: "platonic",
    },
    {
      definition: "to perceive something obscure",
      term: "discern",
    },
    {
      definition:
        "the application of biological principles to the the design of electrical or engineering systems",
      term: "bionics",
    },
    {
      definition:
        "relating to a speculative formulation guiding the investigation or solution of a problem; educational method in which students learn from their own investigations",
      term: "heuristic",
    },
    {
      definition: "fair; just; impartial",
      term: "equitable",
    },
    {
      definition: "deception or trickery",
      term: "guile",
    },
    {
      definition:
        "attempting to explain complex phenomena by simple principles",
      term: "reductionistic",
    },
    {
      definition: "disinclination to action or change",
      term: "inertia",
    },
    {
      definition: "a quality that causes a feeling of pity or sorrow",
      term: "pathos",
    },
    {
      definition: "uninspired, boring academic",
      term: "pedant",
    },
    {
      definition:
        "(of a place) dilapidated; in a bad condition; (of a person) weak or exhausted",
      term: "run-down",
    },
    {
      definition: "excessive indulgence of one's own desire",
      term: "self-indulgence",
    },
    {
      definition: "sure of one's own righteousness; moralistic",
      term: "self-righteous",
    },
    {
      definition: "imaginary remote paradise on earth; CF. Lost Horizon",
      term: "Shangri-la",
    },
    {
      definition:
        "dishonest behavior or action; Ex. skulduggery in the election",
      term: "skulduggery",
    },
    {
      definition:
        "dishonest behavior or action; Ex. skulduggery in the election",
      term: "skullduggery",
    },
    {
      definition: "enigmatic; mysterious",
      term: "sphinx-like",
    },
    {
      definition: "word considered offensive; Ex. ``bloody''",
      term: "swear-word",
    },
    {
      definition: "done slyly and secretly (being dishonest)",
      term: "underhand",
    },
    {
      definition: "done slyly and secretly (being dishonest)",
      term: "underhanded",
    },
    {
      definition: "of good upbringing; well-mannered and refined",
      term: "well-bred",
    },
  ];
  return data[Math.floor(Math.random() * data.length)];
};

module.exports = getWord;