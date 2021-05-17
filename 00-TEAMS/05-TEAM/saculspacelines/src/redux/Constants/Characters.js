const DARK = 'DARK';
const LIGHT = 'LIGHT';

const CHARACTERS = [
  {
    name: 'Luke Skywalker',
    imgUrl: 'https://iconarchive.com/download/i62278/jonathan-rey/star-wars-characters/Luke-Skywalker-02.ico',
    faction: LIGHT
  },
  {
    name: 'C-3PO',
    imgUrl: 'https://pbs.twimg.com/profile_images/685741938780299264/ytHuOoAT.jpg',
    faction: LIGHT
  },
  {
    name: 'R2-D2',
    imgUrl: 'https://pbs.twimg.com/profile_images/620767378239045632/STpzI3oc.png',
    faction: LIGHT
  },
  {
    name: 'Darth Vader',
    imgUrl: 'https://i.pinimg.com/originals/3f/a9/87/3fa987589666e0b7ec37879811576ffb.png',
    faction: DARK
  },
  {
    name: 'Leia Organa',
    imgUrl: 'https://pbs.twimg.com/profile_images/3779883399/3f5a24d13d0c87dfaa6e02164369f322.jpeg',
    faction: LIGHT
  },
  {
    name: 'Owen Lars',
    imgUrl: 'https://pm1.narvii.com/6955/a83af791b89832b1f0a5bdff9978d98cca10b7dfr1-377-382v2_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Beru Whitesun lars',
    imgUrl: 'https://pm1.narvii.com/6471/7afabf719558e3f03d3f8554d7b58abd3f12c490_128.jpg',
    faction: LIGHT
  },
  {
    name: 'R5-D4',
    imgUrl: 'https://pm1.narvii.com/6734/6269b0b4b1a9dc80ba4d61f58b5d3291d84218f3v2_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Biggs Darklighter',
    imgUrl: 'https://pm1.narvii.com/6332/3c971ceaa5f329c26849e4b1710e9db42e843a1d_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Obi-Wan Kenobi',
    imgUrl: 'https://pbs.twimg.com/profile_images/675393797799460865/N58WAkoH_400x400.jpg',
    faction: LIGHT
  },
  {
    name: 'Anakin Skywalker',
    imgUrl: 'https://i.pinimg.com/favicons/bb59a933ec8686986cb5de47201a6c31074870da65c7affb107a136a.png?4ab74532a58ae1e9d89c4973da22f915',
    faction: LIGHT
  },
  {
    name: 'Wilhuff Tarkin',
    imgUrl: 'https://64.media.tumblr.com/avatar_5fc3a0ca64cb_128.pnj',
    faction: DARK
  },
  {
    name: 'Chewbacca',
    imgUrl: 'https://pbs.twimg.com/profile_images/378800000522420373/64830ac2d705e9949442eff90f9853d0.jpeg',
    faction: LIGHT
  },
  {
    name: 'Han Solo',
    imgUrl: 'https://c-sf.smule.com/rs-s32/arr/7e/05/dd18c31e-36a3-4c34-8b9e-1f0668bac3e4.jpg',
    faction: LIGHT
  },
  {
    name: 'Greedo',
    imgUrl: 'https://pm1.narvii.com/6575/38050803ad0960a47761780ad7fed00db24e9958_128.jpg',
    faction: DARK
  },
  {
    name: 'Jabba Desilijic Tiure',
    imgUrl: 'https://pm1.narvii.com/6366/4fab9137a340e2cd1cbd9a75a0800e2b6c6d231b_128.jpg',
    faction: DARK
  },
  {
    name: 'Wedge Antilles',
    imgUrl: 'https://pm1.narvii.com/6890/66f18c17c39cb46280f26ff70ac298fdd8f5cb79r1-720-894v2_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Jek Tono Porkins',
    imgUrl: 'https://pm1.narvii.com/6523/1167499f4b7425f8cf7d596cc6c84ee3d3aae7dd_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Yoda',
    imgUrl: 'https://staticdelivery.nexusmods.com/mods/2229/images/thumbnails/5267/5267-1612801430-1758384712.png',
    faction: LIGHT
  },
  {
    name: 'Palpatine',
    imgUrl: 'https://pbs.twimg.com/profile_images/2927044018/865cc537fda13e48e529e014a05b0389.jpeg',
    faction: DARK
  },
  {
    name: 'Boba Fett',
    imgUrl: 'https://pbs.twimg.com/profile_images/696421014989701120/u96FU4Pp_400x400.jpg',
    faction: DARK
  },
  {
    name: 'IG-88',
    imgUrl: 'https://pm1.narvii.com/7420/f5392a4e70722c5cb25b999c67e19a61d8278f71r1-1144-1360v2_128.jpg',
    faction: DARK
  },
  {
    name: 'Bossk',
    imgUrl: 'https://pbs.twimg.com/profile_images/3726179286/73389aab0a24682c110b8d7257e3b2d0.png',
    faction: DARK
  },
  {
    name: 'Lando Calrissian',
    imgUrl: 'https://pm1.narvii.com/6116/9adce80a1bce151df0db2aa3b4b199bcda3e624e_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Lobot',
    imgUrl: 'https://pm1.narvii.com/6467/bc36f9306209e5c46ffd1d6e93ec54564c231e35_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Ackbar',
    imgUrl: 'https://pbs.twimg.com/profile_images/3502794462/482b710f15612ad1090862f3a81a8ef7.jpeg',
    faction: LIGHT
  },
  {
    name: 'Mon Mothma',
    imgUrl: 'https://pm1.narvii.com/6476/e8af574ff5b48f495ea609a5678c8df7533d140b_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Arvel Crynyd',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/arvel-crynyd-19239.jpg',
    faction: LIGHT
  },
  {
    name: 'Wicket Systri Warrick',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Wicket_W_Warrick.png/220px-Wicket_W_Warrick.png',
    faction: LIGHT
  },
  {
    name: 'Nien Nunb',
    imgUrl: 'https://pm1.narvii.com/6326/d09d685179b69ad9d365aea66624426b3c1b8ade_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Qui-Gon Jinn',
    imgUrl: 'https://pm1.narvii.com/6680/e94ce47cdea018f130def01e872b9691cbb2c9b4_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Nute Gunray',
    imgUrl: 'https://64.media.tumblr.com/avatar_788754dd09b6_128.pnj',
    faction: DARK
  },
  {
    name: 'Finis Valorum',
    imgUrl: 'https://pm1.narvii.com/6928/f23eace5ffb75161d2ba74c5d3726ed192ad83ffr1-371-389v2_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Padmé Amidala',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnceAUpnaZrzZ7lav5TLp2WzwYBh702nxww&usqp=CAU',
    faction: LIGHT
  },
  {
    name: 'Jar Jar Binks',
    imgUrl: 'https://pbs.twimg.com/profile_images/682165368459247616/0s1d8mVy_400x400.jpg',
    faction: LIGHT
  },
  {
    name: 'Roos Tarpals',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/arme-electropole-gungan-11179.jpg',
    faction: LIGHT
  },
  {
    name: 'Rugor Nass',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/personnage-boss-nass.jpg',
    faction: LIGHT
  },
  {
    name: 'Ric Olié',
    imgUrl: 'https://i.pinimg.com/474x/13/60/20/136020623287ea00a5650382d5ab8443.jpg',
    faction: LIGHT
  },
  {
    name: 'Watto',
    imgUrl: 'https://pbs.twimg.com/profile_images/733097627210940420/uujxJC9d_400x400.jpg',
    faction: LIGHT
  },
  {
    name: 'Sebulba',
    imgUrl: 'https://pm1.narvii.com/6595/44fd8dd5f1745703510b566a331ac66fb7f3ab4f_128.jpg',
    faction: DARK
  },
  {
    name: 'Quarsh Panaka',
    imgUrl: 'https://pm1.narvii.com/7094/0c6e479add793e4c466a11133b172d7f95a0a46br1-1080-810v2_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Shmi Skywalker',
    imgUrl: 'http://images5.fanpop.com/image/photos/25400000/Shmi-Skywalker-and-Qui-gon-Jinn-qui-gon-jinn-and-shmi-skywalker-25484503-226-223.jpg',
    faction: LIGHT
  },
  {
    name: 'Darth Maul',
    imgUrl: 'https://pm1.narvii.com/7060/c85223b52697e00ae0a7e1225ed9834d9fce6d54r1-495-619v2_128.jpg',
    faction: DARK
  },
  {
    name: 'Bib Fortuna',
    imgUrl: 'https://pbs.twimg.com/profile_images/707622467112570880/RV1_YOEl_400x400.jpg',
    faction: DARK
  },
  {
    name: 'Ayla Secura',
    imgUrl: 'https://pbs.twimg.com/profile_images/708335013251715072/JnnvkIhk.jpg',
    faction: LIGHT
  },
  {
    name: 'Ratts Tyerel',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/espece-aleena-14020.jpg',
    faction: LIGHT
  },
  {
    name: 'Dud Bolt',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/espece-vulptereen-7833.jpg',
    faction: DARK
  },
  {
    name: 'Gasgano',
    imgUrl: 'https://pbs.twimg.com/profile_images/743375495727767552/ZDizY8S2_400x400.jpg',
    faction: LIGHT
  },
  {
    name: 'Ben Quadinaros',
    imgUrl: 'https://pm1.narvii.com/7084/97a8b3daf4778c747f52102ba699a4cdcdd8d60er1-720-792v2_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Mace Windu',
    imgUrl: 'https://pbs.twimg.com/profile_images/744677616397987840/YcwpqdOA_400x400.jpg',
    faction: LIGHT
  },
  {
    name: 'Ki-Adi-Mundi',
    imgUrl: 'https://pm1.narvii.com/6290/ca40b917f3fb395bf7d36c6322263385fcd19b3b_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Kit Fisto',
    imgUrl: 'https://pm1.narvii.com/6300/5e2e15a89d453a8aaebf10a5738bb957884ece74_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Eeth Koth',
    imgUrl: 'https://pm1.narvii.com/6364/e310225aeea707f340d7ddff3fd2117689739cfc_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Adi Gallia',
    imgUrl: 'https://pm1.narvii.com/6439/f6bf808c3681e01c2a4b501f8bfff0e19deb73f8_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Saesee Tiin',
    imgUrl: 'https://pm1.narvii.com/6583/54ca381174a21e4c5952c454ba50a22d9f7896ae_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Yarael Poof',
    imgUrl: 'https://pm1.narvii.com/6671/2f79cf1959994e3d3aecc5b63cacad9ec0936da5_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Plo Koon',
    imgUrl: 'https://pbs.twimg.com/profile_images/709171774315859968/0biW1AYm_400x400.jpg',
    faction: LIGHT
  },
  {
    name: 'Mas Amedda',
    imgUrl: 'https://pm1.narvii.com/6968/f3306092dd0ae14a5958c34bb80e7528cbbedb24r1-238-254v2_128.jpg',
    faction: DARK
  },
  {
    name: 'Gregar Typho',
    imgUrl: 'https://i.ytimg.com/vi/lb2xQXn3hu0/hqdefault.jpg',
    faction: LIGHT
  },
  {
    name: 'Cordé',
    imgUrl: 'https://www.tonica.la/__export/1608419929874/sites/debate/img/2020/12/19/the_mandalorian-ahsoka_tano-star_wars_1.jpg_1037907269.jpg',
    faction: LIGHT
  },
  {
    name: 'Cliegg Lars',
    imgUrl: 'https://scontent.fqsa1-1.fna.fbcdn.net/v/t1.18169-9/1497181_1548426455480885_5859051151025351062_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=yP3KhtKTlRsAX_xpMpz&_nc_ht=scontent.fqsa1-1.fna&oh=6951dbcaf6739fbb3db8f71b1f875f6d&oe=60B2949B',
    faction: LIGHT
  },
  {
    name: 'Poggle the Lesser',
    imgUrl: 'https://pm1.narvii.com/6959/e8ecaeab175884d294c0a6892e73df20ddd58b36r1-749-518v2_128.jpg',
    faction: DARK
  },
  {
    name: 'Luminara Unduli',
    imgUrl: 'https://pm1.narvii.com/6499/8c7bed264c7c94637ff923a6d81e955aed7c62f7_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Barriss Offee',
    imgUrl: 'https://pm1.narvii.com/6009/a4a9d0feb8d15edf4bbaacccc66d082c80c27c42_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Dormé',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/personnage-dorme.jpg',
    faction: LIGHT
  },
  {
    name: 'Dooku',
    imgUrl: 'https://pbs.twimg.com/profile_images/649563581738934272/HSMMCYoR.jpg',
    faction: DARK
  },
  {
    name: 'Bail Prestor Organa',
    imgUrl: 'https://pm1.narvii.com/7129/807ee5597f7456ca476137e85387ed10d178a174r1-480-479v2_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Jango Fett',
    imgUrl: 'https://pbs.twimg.com/profile_images/724992769756942337/g1wqfreT_400x400.jpg',
    faction: DARK
  },
  {
    name: 'Zam Wesell',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/personnage-zam-wesell.jpg',
    faction: DARK
  },
  {
    name: 'Dexter Jettster',
    imgUrl: 'https://pm1.narvii.com/6569/1a59ea4749a8413ef38bb686e3a17aa048ad8988_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Lama Su',
    imgUrl: 'https://pm1.narvii.com/6731/4ba6d59c2e4b5219ed6d6ef8771a737b11693473v2_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Taun We',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/personnage-taun-we.jpg',
    faction: LIGHT
  },
  {
    name: 'Jocasta Nu',
    imgUrl: 'https://pm1.narvii.com/6366/5f02bdb7c82997df5494bbdc9d28e4ac2ef69d87_128.jpg',
    faction: LIGHT
  },
  {
    name: 'R4-P17',
    imgUrl: 'https://yt3.ggpht.com/ytc/AAUvwnhYb2sjaG64FggVGPQX-aO3gqUUvJvwxTNLrNUugw=s900-c-k-c0x00ffffff-no-rj',
    faction: LIGHT
  },
  {
    name: 'Wat Tambor',
    imgUrl: 'https://pm1.narvii.com/6903/d7d692339ebed87d22b6843710fa3ca9525c0e73r1-640-480v2_128.jpg',
    faction: DARK
  },
  {
    name: 'San Hill',
    imgUrl: 'https://www.cultture.com/pics/2018/02/noke01.jpg',
    faction: DARK
  },
  {
    name: 'Shaak Ti',
    imgUrl: 'https://pm1.narvii.com/6236/6224158df116778a6190ce1ecd9737ac1712aee4_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Grievous',
    imgUrl: 'https://pm1.narvii.com/6215/0ac278c5fc1dd4e1b0bd69c9ca92510db8e6c664_128.jpg',
    faction: DARK
  },
  {
    name: 'Tarfful',
    imgUrl: 'https://pm1.narvii.com/7727/814d215c9e0630fade20c198b6f85e8c7006d687r1-555-640v2_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Raymus Antilles',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/personnage-raymus-antilles.jpg',
    faction: DARK
  },
  {
    name: 'Sly Moore',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/personnage-sly-moore.jpg',
    faction: LIGHT
  },
  {
    name: 'Tion Medon',
    imgUrl: 'https://media.anakinworld.com/uploads/entries/square_large/personnage-tion-medon.jpg',
    faction: DARK
  }
];

export default CHARACTERS;
