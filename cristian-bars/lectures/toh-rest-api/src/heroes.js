const heroes = [
  {
    id: 1,
    name: 'A-Bomb',
    slug: '1-a-bomb',
    powerstats: {
      intelligence: 38,
      strength: 100,
      speed: 17,
      durability: 80,
      power: 24,
      combat: 64
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'8", '203 cm'],
      weight: ['980 lb', '441 kg'],
      eyeColor: 'Yellow',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Richard Milhouse Jones',
      alterEgos: 'No alter egos found.',
      aliases: ['Rick Jones'],
      placeOfBirth: 'Scarsdale, Arizona',
      firstAppearance: 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
      publisher: 'Marvel Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Musician, adventurer, author; formerly talk show host',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
      relatives: 'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg'
    }
  },
  {
    id: 2,
    name: 'Abe Sapien',
    slug: '2-abe-sapien',
    powerstats: {
      intelligence: 88,
      strength: 28,
      speed: 35,
      durability: 65,
      power: 100,
      combat: 85
    },
    appearance: {
      gender: 'Male',
      race: 'Icthyo Sapien',
      height: ["6'3", '191 cm'],
      weight: ['145 lb', '65 kg'],
      eyeColor: 'Blue',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Abraham Sapien',
      alterEgos: 'No alter egos found.',
      aliases: ['Langdon Everett Caul', 'Abraham Sapien', 'Langdon Caul'],
      placeOfBirth: '-',
      firstAppearance: 'Hellboy: Seed of Destruction (1993)',
      publisher: 'Dark Horse Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Paranormal Investigator',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Bureau for Paranormal Research and Defense',
      relatives: 'Edith Howard (wife, deceased)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/2-abe-sapien.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/2-abe-sapien.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/2-abe-sapien.jpg'
    }
  },
  {
    id: 3,
    name: 'Abin Sur',
    slug: '3-abin-sur',
    powerstats: {
      intelligence: 50,
      strength: 90,
      speed: 53,
      durability: 64,
      power: 99,
      combat: 65
    },
    appearance: {
      gender: 'Male',
      race: 'Ungaran',
      height: ["6'1", '185 cm'],
      weight: ['200 lb', '90 kg'],
      eyeColor: 'Blue',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: '',
      alterEgos: 'No alter egos found.',
      aliases: ['Lagzia'],
      placeOfBirth: 'Ungara',
      firstAppearance: 'Showcase #22 (October, 1959)',
      publisher: 'DC Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Green Lantern, former history professor',
      base: 'Oa'
    },
    connections: {
      groupAffiliation: 'Green Lantern Corps, Black Lantern Corps',
      relatives: 'Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/3-abin-sur.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/3-abin-sur.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/3-abin-sur.jpg'
    }
  },
  {
    id: 4,
    name: 'Abomination',
    slug: '4-abomination',
    powerstats: {
      intelligence: 63,
      strength: 80,
      speed: 53,
      durability: 90,
      power: 62,
      combat: 95
    },
    appearance: {
      gender: 'Male',
      race: 'Human / Radiation',
      height: ["6'8", '203 cm'],
      weight: ['980 lb', '441 kg'],
      eyeColor: 'Green',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Emil Blonsky',
      alterEgos: 'No alter egos found.',
      aliases: ['Agent R-7', 'Ravager of Worlds'],
      placeOfBirth: 'Zagreb, Yugoslavia',
      firstAppearance: 'Tales to Astonish #90',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: 'Ex-Spy',
      base: 'Mobile'
    },
    connections: {
      groupAffiliation: 'former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten',
      relatives: 'Nadia Dornova Blonsky (wife, separated)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/4-abomination.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/4-abomination.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/4-abomination.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/4-abomination.jpg'
    }
  },
  {
    id: 5,
    name: 'Abraxas',
    slug: '5-abraxas',
    powerstats: {
      intelligence: 88,
      strength: 63,
      speed: 83,
      durability: 100,
      power: 100,
      combat: 55
    },
    appearance: {
      gender: 'Male',
      race: 'Cosmic Entity',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      eyeColor: 'Blue',
      hairColor: 'Black'
    },
    biography: {
      fullName: 'Abraxas',
      alterEgos: 'No alter egos found.',
      aliases: ['-'],
      placeOfBirth: 'Within Eternity',
      firstAppearance: 'Fantastic Four Annual #2001',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: 'Dimensional destroyer',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Cosmic Beings',
      relatives: 'Eternity ("Father")'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/5-abraxas.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/5-abraxas.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/5-abraxas.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/5-abraxas.jpg'
    }
  },
  {
    id: 6,
    name: 'Absorbing Man',
    slug: '6-absorbing-man',
    powerstats: {
      intelligence: 38,
      strength: 80,
      speed: 25,
      durability: 100,
      power: 98,
      combat: 64
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'4", '193 cm'],
      weight: ['270 lb', '122 kg'],
      eyeColor: 'Blue',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Carl Creel',
      alterEgos: 'No alter egos found.',
      aliases: [
        'Greithoth',
        '"Crusher" Creel',
        'Rocky Davis',
        'Dynamite Davis',
        'Lightningbolt',
        'Prisoner #24957'
      ],
      placeOfBirth: 'New York City, New York',
      firstAppearance: 'Daredevil #1 (April, 1964) (As Rocky Davis)',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: 'Professional criminal; former professional boxer',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Masters of Evil, Lethal Legion; formerly Worthy, Frightful Four: former agent of Loki and They Who Wield Power',
      relatives: 'Mary MacPherran (Titania) (wife); Jerry Sledge (son); Rockwell "Rocky" Davis (Hi-Llite) (cousin)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/6-absorbing-man.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/6-absorbing-man.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/6-absorbing-man.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/6-absorbing-man.jpg'
    }
  },
  {
    id: 7,
    name: 'Adam Monroe',
    slug: '7-adam-monroe',
    powerstats: {
      intelligence: 63,
      strength: 10,
      speed: 12,
      durability: 100,
      power: 100,
      combat: 64
    },
    appearance: {
      gender: 'Male',
      race: null,
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: '',
      alterEgos: 'No alter egos found.',
      aliases: ['Takezo Kensei', 'Richard Sanders'],
      placeOfBirth: '-',
      firstAppearance: 'Heroes S02E01 - Four Months Later...',
      publisher: 'NBC - Heroes',
      alignment: 'good'
    },
    work: {
      occupation: 'former samurai swordsman, former British mercenary commander, former soldier in the Confederate Army',
      base: 'U.S.; formerly Diedenshausen, Germany; Milan, Italy; Paris, France; Japan; England; Atlanta, GA; Montreal, Canada'
    },
    connections: {
      groupAffiliation: '-',
      relatives: '-'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/7-adam-monroe.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/7-adam-monroe.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/7-adam-monroe.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/7-adam-monroe.jpg'
    }
  },
  {
    id: 8,
    name: 'Adam Strange',
    slug: '8-adam-strange',
    powerstats: {
      intelligence: 69,
      strength: 10,
      speed: 33,
      durability: 40,
      power: 37,
      combat: 50
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'1", '185 cm'],
      weight: ['195 lb', '88 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: 'Adam Strange',
      alterEgos: 'No alter egos found.',
      aliases: ['Warrior of Two Worlds', 'Savior of Rann'],
      placeOfBirth: 'Chicago, Illinois',
      firstAppearance: 'Outsiders #6 (April, 1986)',
      publisher: 'DC Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Adventurer, archaelogist, ambassador',
      base: 'Rann, Alpha Centauri System'
    },
    connections: {
      groupAffiliation: 'Omega Men, L.E.G.I.O.N., R.E.B.E.L.S., formerly Seven Soldiers of Victory',
      relatives: 'Alanna Strange (wife); Aleea Strange (daughter); Sardath (father-in-law); Janey Strange (sister); Todd Strange (brother, deceased); Bantteir (mother-in-law); Adam Strange II (descendent)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/8-adam-strange.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/8-adam-strange.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/8-adam-strange.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/8-adam-strange.jpg'
    }
  },
  {
    id: 10,
    name: 'Agent Bob',
    slug: '10-agent-bob',
    powerstats: {
      intelligence: 10,
      strength: 8,
      speed: 13,
      durability: 5,
      power: 5,
      combat: 20
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["5'10", '178 cm'],
      weight: ['181 lb', '81 kg'],
      eyeColor: 'Brown',
      hairColor: 'Brown'
    },
    biography: {
      fullName: 'Bob',
      alterEgos: 'No alter egos found.',
      aliases: ['Bob', 'agent of Hydra', 'Bob', 'agent of A.I.M'],
      placeOfBirth: '-',
      firstAppearance: 'Cable & Deadpool #38 (May, 2007)',
      publisher: 'Marvel Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Mercenary, janitor; former pirate, terrorist',
      base: 'Mobile; formerly Manhattan, Hellcarrier'
    },
    connections: {
      groupAffiliation: 'A.I.M., Deadpool; formerly Agency X, Hydra',
      relatives: 'Allison (ex-wife); Terry and Howie (sons)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/10-agent-bob.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/10-agent-bob.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/10-agent-bob.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/10-agent-bob.jpg'
    }
  },
  {
    id: 11,
    name: 'Agent Zero',
    slug: '11-agent-zero',
    powerstats: {
      intelligence: 75,
      strength: 28,
      speed: 38,
      durability: 80,
      power: 72,
      combat: 95
    },
    appearance: {
      gender: 'Male',
      race: null,
      height: ["6'3", '191 cm'],
      weight: ['230 lb', '104 kg'],
      eyeColor: '-',
      hairColor: '-'
    },
    biography: {
      fullName: 'Christoph Nord',
      alterEgos: 'No alter egos found.',
      aliases: ['Maverick'],
      placeOfBirth: 'Unrevealed location in former East Germany',
      firstAppearance: '-',
      publisher: 'Marvel Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Mercenary, former government operative, freedom fighter',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Formerly Weapon X, Weapon Plus, Team X, Cell Six, former bodyguard of Psi-Borg, former agent of Major Barrington',
      relatives: 'Unidentified parents (deceased), Andreas Nord (brother, deceased), Ginetta Lucia Barsalini (wife, deceased), unnamed child (deceased)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/11-agent-zero.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/11-agent-zero.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/11-agent-zero.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/11-agent-zero.jpg'
    }
  },
  {
    id: 12,
    name: 'Air-Walker',
    slug: '12-air-walker',
    powerstats: {
      intelligence: 50,
      strength: 85,
      speed: 100,
      durability: 85,
      power: 100,
      combat: 40
    },
    appearance: {
      gender: 'Male',
      race: null,
      height: ["6'2", '188 cm'],
      weight: ['240 lb', '108 kg'],
      eyeColor: 'Blue',
      hairColor: 'White'
    },
    biography: {
      fullName: 'Gabriel Lan',
      alterEgos: 'No alter egos found.',
      aliases: ['-'],
      placeOfBirth: 'Xandar, a planet in the Tranta system, Andromeda galaxy',
      firstAppearance: 'Fantastic Four #120',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: 'Former starship captain, Herald of Galactus',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Former member of Nova Corps, Heralds of Galactus',
      relatives: '-'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/12-air-walker.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/12-air-walker.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/12-air-walker.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/12-air-walker.jpg'
    }
  },
  {
    id: 13,
    name: 'Ajax',
    slug: '13-ajax',
    powerstats: {
      intelligence: 56,
      strength: 48,
      speed: 35,
      durability: 80,
      power: 34,
      combat: 55
    },
    appearance: {
      gender: 'Male',
      race: 'Cyborg',
      height: ["6'4", '193 cm'],
      weight: ['200 lb', '90 kg'],
      eyeColor: 'Brown',
      hairColor: 'Black'
    },
    biography: {
      fullName: 'Francis',
      alterEgos: 'No alter egos found.',
      aliases: ['"Frankie"', 'the A-Man', 'the Attending'],
      placeOfBirth: '-',
      firstAppearance: 'Deadpool #14 (March, 1998)',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: '-',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Formerly Weapon X',
      relatives: '-'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/13-ajax.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/13-ajax.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/13-ajax.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/13-ajax.jpg'
    }
  },
  {
    id: 14,
    name: 'Alan Scott',
    slug: '14-alan-scott',
    powerstats: {
      intelligence: 63,
      strength: 80,
      speed: 23,
      durability: 90,
      power: 100,
      combat: 32
    },
    appearance: {
      gender: 'Male',
      race: null,
      height: ["5'11", '180 cm'],
      weight: ['201 lb', '90 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: 'Alan Ladd Wellington Scott',
      alterEgos: 'No alter egos found.',
      aliases: ['Green Lantern', 'White King', 'Sentinal'],
      placeOfBirth: 'Gotham City',
      firstAppearance: 'All-American Comics 16 (1940)',
      publisher: 'DC Comics',
      alignment: 'good'
    },
    work: {
      occupation: '-',
      base: 'Gotham City and New York City; Formerly Capitol City'
    },
    connections: {
      groupAffiliation: 'Justice Society of America; Formerly Checkmate; the Sentinels of Magic; Formerly All-Star Squadron',
      relatives: 'Harlequin (Molly Mayne-Scott) (wife), Thorn (Rose Canton) (first wife, deceased), Todd Rice (Obsidian, son), Jennie-Lynn Hayden (Jade, daughter, deceased)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/14-alan-scott.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/14-alan-scott.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/14-alan-scott.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/14-alan-scott.jpg'
    }
  },
  {
    id: 15,
    name: 'Alex Mercer',
    slug: '15-alex-mercer',
    powerstats: {
      intelligence: 50,
      strength: 80,
      speed: 42,
      durability: 90,
      power: 100,
      combat: 50
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      eyeColor: '-',
      hairColor: '-'
    },
    biography: {
      fullName: 'Alexander J. Mercer',
      alterEgos: 'No alter egos found.',
      aliases: ['Prototype', 'Zues', 'Blacklight'],
      placeOfBirth: '-',
      firstAppearance: '-',
      publisher: 'Wildstorm',
      alignment: 'bad'
    },
    work: {
      occupation: '-',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Gentek, The Infected',
      relatives: 'Dana Mercer (sister)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/15-alex-mercer.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/15-alex-mercer.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/15-alex-mercer.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/15-alex-mercer.jpg'
    }
  },
  {
    id: 17,
    name: 'Alfred Pennyworth',
    slug: '17-alfred-pennyworth',
    powerstats: {
      intelligence: 63,
      strength: 10,
      speed: 17,
      durability: 10,
      power: 7,
      combat: 55
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["5'10", '178 cm'],
      weight: ['160 lb', '72 kg'],
      eyeColor: 'Blue',
      hairColor: 'Black'
    },
    biography: {
      fullName: 'Alfred Thaddeus Crane Pennyworth',
      alterEgos: 'No alter egos found.',
      aliases: ['Alfred Beagle'],
      placeOfBirth: '-',
      firstAppearance: 'Batman #16 (April, 1943)',
      publisher: 'DC Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Butler; Caretaker, former Actor; Field Medic; Government Agent',
      base: 'Wayne Manor; Batcave; Gotham City'
    },
    connections: {
      groupAffiliation: 'Batman Family, Outsiders',
      relatives: 'Jarvis Pennyworth (father, deceased), Wilfred Pennyworth (older brother), Daphne Pennyworth (niece); Bruce Wayne (Batman, legal ward)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/17-alfred-pennyworth.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/17-alfred-pennyworth.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/17-alfred-pennyworth.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/17-alfred-pennyworth.jpg'
    }
  },
  {
    id: 18,
    name: 'Alien',
    slug: '18-alien',
    powerstats: {
      intelligence: 50,
      strength: 28,
      speed: 42,
      durability: 90,
      power: 57,
      combat: 60
    },
    appearance: {
      gender: 'Male',
      race: 'Xenomorph XX121',
      height: ["8'0", '244 cm'],
      weight: ['375 lb', '169 kg'],
      eyeColor: '-',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Xenomorph',
      alterEgos: 'No alter egos found.',
      aliases: ['-'],
      placeOfBirth: 'Your chest :)',
      firstAppearance: 'Alien (1979)',
      publisher: 'Dark Horse Comics',
      alignment: 'bad'
    },
    work: {
      occupation: '-',
      base: '-'
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Alien Queen (mother)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/18-alien.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/18-alien.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/18-alien.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/18-alien.jpg'
    }
  },
  {
    id: 20,
    name: 'Amazo',
    slug: '20-amazo',
    powerstats: {
      intelligence: 63,
      strength: 100,
      speed: 83,
      durability: 100,
      power: 100,
      combat: 100
    },
    appearance: {
      gender: 'Male',
      race: 'Android',
      height: ["8'5", '257 cm'],
      weight: ['385 lb', '173 kg'],
      eyeColor: 'Red',
      hairColor: '-'
    },
    biography: {
      fullName: '',
      alterEgos: 'No alter egos found.',
      aliases: [
        'Professor Ivos Amazing Android',
        'Timazo',
        'Humazo',
        'Hourmazo'
      ],
      placeOfBirth: '-',
      firstAppearance: 'Brave and the Bold #30 (July, 1960)',
      publisher: 'DC Comics',
      alignment: 'bad'
    },
    work: {
      occupation: '-',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Formerly the Secret Society of Super Villains',
      relatives: 'Professor Ivo (creator), Kid Amazo (cyborg offspring)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/20-amazo.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/20-amazo.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/20-amazo.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/20-amazo.jpg'
    }
  },
  {
    id: 23,
    name: 'Angel',
    slug: '23-angel',
    powerstats: {
      intelligence: 75,
      strength: 30,
      speed: 58,
      durability: 90,
      power: 100,
      combat: 75
    },
    appearance: {
      gender: 'Male',
      race: 'Vampire',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      eyeColor: '-',
      hairColor: '-'
    },
    biography: {
      fullName: 'Liam',
      alterEgos: 'No alter egos found.',
      aliases: ['Angelus', 'Twilight'],
      placeOfBirth: '-',
      firstAppearance: '-',
      publisher: 'Dark Horse Comics',
      alignment: 'good'
    },
    work: {
      occupation: '-',
      base: '-'
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Kathy (sister), Connor (son), Twilight ("child")'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/23-angel.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/23-angel.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/23-angel.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/23-angel.jpg'
    }
  },
  {
    id: 24,
    name: 'Angel',
    slug: '24-angel',
    powerstats: {
      intelligence: 63,
      strength: 13,
      speed: 46,
      durability: 64,
      power: 28,
      combat: 42
    },
    appearance: {
      gender: 'Male',
      race: null,
      height: ["6'0", '183 cm'],
      weight: ['150 lb', '68 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: 'Warren Kenneth Worthington III',
      alterEgos: 'Archangel',
      aliases: [
        'Formerly Death',
        'Dark Angel',
        'Angel',
        'Avenging Angel',
        'Archangel'
      ],
      placeOfBirth: 'Centerport, Long Island, New York',
      firstAppearance: 'X-Men #54-56 (1969)',
      publisher: 'Archangel',
      alignment: 'good'
    },
    work: {
      occupation: 'Adventurer, chairman & principal stockholder of Worthington Industries, former terrorist',
      base: '-'
    },
    connections: {
      groupAffiliation: "X-Men, Mutantes Sans Fronti?res, Hellfire Club; formerly Secret Defenders, X-Factor/X-Terminators, Horsemen of Apocalypse, Defenders, Death's champions, Champions of Los Angeles",
      relatives: 'Warren Kenneth Worthington Sr. (grandfather, deceased), Warren Kenneth Worthington Jr. (father, deceased), Kathryn Worthington (mother, deceased), Burtram "Burt" Worthington (Dazzler, paternal uncle), unnamed cousin'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/24-angel.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/24-angel.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/24-angel.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/24-angel.jpg'
    }
  },
  {
    id: 25,
    name: 'Angel Dust',
    slug: '25-angel-dust',
    powerstats: {
      intelligence: 38,
      strength: 55,
      speed: 23,
      durability: 42,
      power: 17,
      combat: 30
    },
    appearance: {
      gender: 'Female',
      race: 'Mutant',
      height: ["5'5", '165 cm'],
      weight: ['126 lb', '57 kg'],
      eyeColor: 'Yellow',
      hairColor: 'Black'
    },
    biography: {
      fullName: 'Christina',
      alterEgos: 'No alter egos found.',
      aliases: ['Angel', 'Dusty'],
      placeOfBirth: '-',
      firstAppearance: 'Morlocks #1',
      publisher: 'Marvel Comics',
      alignment: 'good'
    },
    work: {
      occupation: '-',
      base: 'Chicago, Illinois'
    },
    connections: {
      groupAffiliation: '-',
      relatives: '-'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/25-angel-dust.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/25-angel-dust.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/25-angel-dust.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/25-angel-dust.jpg'
    }
  },
  {
    id: 26,
    name: 'Angel Salvadore',
    slug: '26-angel-salvadore',
    powerstats: {
      intelligence: 38,
      strength: 10,
      speed: 28,
      durability: 28,
      power: 56,
      combat: 60
    },
    appearance: {
      gender: 'Female',
      race: null,
      height: ["5'4", '163 cm'],
      weight: ['121 lb', '54 kg'],
      eyeColor: 'Brown',
      hairColor: 'Black'
    },
    biography: {
      fullName: 'Angel Salvadore Bohusk',
      alterEgos: 'Tempest',
      aliases: ['Tempest'],
      placeOfBirth: '-',
      firstAppearance: 'New X-Men #118 (November, 2001)',
      publisher: 'Tempest',
      alignment: 'good'
    },
    work: {
      occupation: '-',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Formerly New Warriors; Special Class',
      relatives: 'Tito Bohusk (son); Axel Bohusk (son); Kara Bohusk (daughter); three other unidentified children;'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/26-angel-salvadore.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/26-angel-salvadore.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/26-angel-salvadore.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/26-angel-salvadore.jpg'
    }
  },
  {
    id: 28,
    name: 'Animal Man',
    slug: '28-animal-man',
    powerstats: {
      intelligence: 56,
      strength: 48,
      speed: 47,
      durability: 85,
      power: 73,
      combat: 80
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'0", '183 cm'],
      weight: ['185 lb', '83 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: 'Bernhard Baker',
      alterEgos: 'No alter egos found.',
      aliases: ['The Human Zoo; A-Man; The Man with Animal Powers'],
      placeOfBirth: '-',
      firstAppearance: 'Strange Adventures #180 (September, 1965)',
      publisher: 'DC Comics',
      alignment: 'good'
    },
    work: {
      occupation: '-',
      base: 'San Diego, California'
    },
    connections: {
      groupAffiliation: 'Formerly Animal Masters, Forgotten Heroes, Justice League of America, Justice League Europe',
      relatives: 'Ellen Frazier (wife), Cliff Baker (son), Maxine Baker (daughter), unnamed second daughter, Frank Baker, Jr. (father), Phyllis Baker (mother), unnamed sister, Frank, Sr (grandfather), Teddy (great grandfather), Sherman (great-great grandfather), Jack (great-great-great grandfather), Mary Frazier (mother-in-law), Dudley (uncle-in-law), Annie Cassidy (mother of second daughter), Lucy Cassidy (half-sister of second daughter)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/28-animal-man.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/28-animal-man.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/28-animal-man.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/28-animal-man.jpg'
    }
  },
  {
    id: 29,
    name: 'Annihilus',
    slug: '29-annihilus',
    powerstats: {
      intelligence: 75,
      strength: 80,
      speed: 47,
      durability: 56,
      power: 59,
      combat: 64
    },
    appearance: {
      gender: 'Male',
      race: null,
      height: ["5'11", '180 cm'],
      weight: ['200 lb', '90 kg'],
      eyeColor: 'Green',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Annihilus',
      alterEgos: 'No alter egos found.',
      aliases: ['The Living Death That Walks', 'Lord of the Negative Zone'],
      placeOfBirth: 'Planet of Arthros, Sector 17A, Negative Zone',
      firstAppearance: 'Fantastic Four Annual #6 (1968)',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: 'Conqueror, scavenger',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Sometime ally of Blastaar',
      relatives: 'Annihilus is a series of clonal scions'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/29-annihilus.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/29-annihilus.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/29-annihilus.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/29-annihilus.jpg'
    }
  },
  {
    id: 30,
    name: 'Ant-Man',
    slug: '30-ant-man',
    powerstats: {
      intelligence: 100,
      strength: 18,
      speed: 23,
      durability: 28,
      power: 32,
      combat: 32
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'11", '211 cm'],
      weight: ['270 lb', '122 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: 'Hank Pym',
      alterEgos: 'Giant-Man, Goliath, Wasp II, Yellowjacket',
      aliases: [
        'Hank Pym',
        'Doctor Pym',
        'Ant-Man',
        'Goliath',
        'Yellowjacket',
        'Wasp',
        "Earth's Scientist Supreme"
      ],
      placeOfBirth: 'Elmsford, New York',
      firstAppearance: 'Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)',
      publisher: 'Giant-Man',
      alignment: 'good'
    },
    work: {
      occupation: 'Adventurer, Biochemist, former manager of Avengers Compound',
      base: 'Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York'
    },
    connections: {
      groupAffiliation: "Avengers Academy, Secret Avengers; formerly Mighty Avengers, Avengers (founding member), Defenders, Future Iron Man's Team",
      relatives: '-'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/30-ant-man.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/30-ant-man.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/30-ant-man.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/30-ant-man.jpg'
    }
  },
  {
    id: 31,
    name: 'Ant-Man II',
    slug: '31-ant-man-ii',
    powerstats: {
      intelligence: 75,
      strength: 18,
      speed: 17,
      durability: 40,
      power: 53,
      combat: 30
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'0", '183 cm'],
      weight: ['190 lb', '86 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: 'Scott Lang',
      alterEgos: 'No alter egos found.',
      aliases: ['Myrmidon', 'Scott Edward Harris Lang'],
      placeOfBirth: 'Coral Gables, Florida',
      firstAppearance: 'Avengers Vol 1 #181 (March, 1979)',
      publisher: 'Marvel Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Electronics Technician,',
      base: 'South Beach, Miami, Florida; formerly Farmingdale, Long Island, New York'
    },
    connections: {
      groupAffiliation: 'Ant-Man Security Solutions; formerly Future Foundation (leader), Fantastic Four (leader), Defenders, Avengers, Heroes For Hire, Stark Industries',
      relatives: 'Cassandra Eleanor Lang (daughter), Ruth (sister), Carl (brother-in-law), Peggy Rae (ex-wife)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/31-ant-man-ii.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/31-ant-man-ii.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/31-ant-man-ii.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/31-ant-man-ii.jpg'
    }
  },
  {
    id: 32,
    name: 'Anti-Monitor',
    slug: '32-anti-monitor',
    powerstats: {
      intelligence: 88,
      strength: 100,
      speed: 50,
      durability: 100,
      power: 100,
      combat: 90
    },
    appearance: {
      gender: 'Male',
      race: 'God / Eternal',
      height: ['200', '61.0 meters'],
      weight: ['- lb', '0 kg'],
      eyeColor: 'Yellow',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: '',
      alterEgos: 'No alter egos found.',
      aliases: ['Monitor', 'Mobius'],
      placeOfBirth: 'Moon of Qward',
      firstAppearance: 'Crisis on Infinite Earths #4',
      publisher: 'DC Comics',
      alignment: 'bad'
    },
    work: {
      occupation: '-',
      base: 'Qward, Antimatter Universe'
    },
    connections: {
      groupAffiliation: 'Sinestro Corps, Weaponers of Qward, Thunderers of Qward, Shadow Demons',
      relatives: 'Monitor ("brother"), The Monitors'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/32-anti-monitor.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/32-anti-monitor.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/32-anti-monitor.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/32-anti-monitor.jpg'
    }
  },
  {
    id: 34,
    name: 'Anti-Venom',
    slug: '34-anti-venom',
    powerstats: {
      intelligence: 75,
      strength: 60,
      speed: 65,
      durability: 90,
      power: 96,
      combat: 84
    },
    appearance: {
      gender: 'Male',
      race: 'Symbiote',
      height: ["7'6", '229 cm'],
      weight: ['795 lb', '358 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: 'Eddie Brock',
      alterEgos: 'Toxin, Venom',
      aliases: [
        'Eddie',
        'Edwin Brock',
        'Venom',
        'Lethal Protector',
        'White Venom',
        '998th'
      ],
      placeOfBirth: 'San Francisco, California',
      firstAppearance: 'Amazing Spider-Man #569 (as Anti-Venom)',
      publisher: 'Toxin',
      alignment: '-'
    },
    work: {
      occupation: 'Vigilante; former journalist for the Daily Globe',
      base: 'New York, New York'
    },
    connections: {
      groupAffiliation: '-',
      relatives: "Carl Brock (father, estranged), Janine Brock (mother, deceased), Mary Brock (sister), Ann Weying (ex-wife, deceased), Symbiotes' relatives: Toxin Symbiote (current symbiote, former grandson), Venom Symbiote (former symbiote, grandfather, former brother), Agony, Phage, Riot, Lasher (uncles, former sons), Scorn (sister, former niece), Carnage (father, former son), Scream (aunt, former daughter, deceased), Hybrid (uncle, former son, deceased)"
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/34-anti-venom.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/34-anti-venom.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/34-anti-venom.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/34-anti-venom.jpg'
    }
  },
  {
    id: 35,
    name: 'Apocalypse',
    slug: '35-apocalypse',
    powerstats: {
      intelligence: 100,
      strength: 100,
      speed: 33,
      durability: 100,
      power: 100,
      combat: 60
    },
    appearance: {
      gender: 'Male',
      race: 'Mutant',
      height: ["7'0", '213 cm'],
      weight: ['300 lb', '135 kg'],
      eyeColor: 'Red',
      hairColor: 'Black'
    },
    biography: {
      fullName: 'En Sabah Nur',
      alterEgos: 'No alter egos found.',
      aliases: [
        'The Eternal One',
        'the High Lord',
        'Set',
        'Huitxilopochti',
        'Sauru',
        'Kali-Ma'
      ],
      placeOfBirth: 'Akkaba, Egypt',
      firstAppearance: 'X-Factor #5 (June, 1986)',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: 'Student; formerly Conqueror; Scientist',
      base: 'Celestial Ship, mobile'
    },
    connections: {
      groupAffiliation: "Clan Akkaba, employer of Apocalypse's Horsemen, Dark Riders, former employer of the Alliance of Evil, 198",
      relatives: 'Baal of the Crimson Sands (adopted father, deceased)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/35-apocalypse.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/35-apocalypse.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/35-apocalypse.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/35-apocalypse.jpg'
    }
  },
  {
    id: 36,
    name: 'Aquababy',
    slug: '36-aquababy',
    powerstats: {
      intelligence: 10,
      strength: 16,
      speed: 12,
      durability: 14,
      power: 37,
      combat: 14
    },
    appearance: {
      gender: 'Male',
      race: null,
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: 'Arthur Curry, Jr.',
      alterEgos: 'No alter egos found.',
      aliases: ['-'],
      placeOfBirth: '-',
      firstAppearance: 'Aquaman #23 (October, 1965)',
      publisher: 'DC Comics',
      alignment: 'good'
    },
    work: {
      occupation: '-',
      base: 'Atlantis'
    },
    connections: {
      groupAffiliation: 'Aquaman Family',
      relatives: 'Aquaman (Orin/Arthur Curry) (father); Mera (mother); Koryak (half-brother); A.J. (half-brother); Atlan (grandfather); Tom Curry (adoptive grandfather, deceased); Orm Marius (uncle); Kordax (ancestor, deceased); Arthur Joseph Curry (adoptive cousin)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/36-aquababy.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/36-aquababy.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/36-aquababy.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/36-aquababy.jpg'
    }
  }
];

module.exports = heroes;
