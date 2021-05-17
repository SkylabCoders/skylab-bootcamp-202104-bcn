import avataTest from '../../../Images/polismassa.png';

const USERS = [
  {
    email: 'admin@admin.com',
    username: 'admin',
    faction: 'DARK',
    avatar: 'https://staticdelivery.nexusmods.com/mods/2229/images/thumbnails/5267/5267-1612801430-1758384712.png',
    wishlist: [{
      id: 0,
      planet: 'Naboo',
      starship: 'Death Star',
      price: 0
    },
    {
      id: 1,
      planet: 'Blabla',
      starship: 'Tie',
      price: 100
    },
    {
      id: 2,
      planet: 'Namekuzen',
      starship: 'capsule',
      price: 100
    }
    ]
  },
  {
    email: 'emerson@admin.com',
    username: 'emerson',
    password: 'xxxxx',
    faction: 'DARK',
    avatar: avataTest,
    wishlist: [{
      id: 0,
      planet: 'Naboo',
      starship: 'Death Star',
      price: 0
    },
    {
      id: 1,
      planet: 'Blabla',
      starship: 'Tie',
      price: 100
    },
    {
      id: 2,
      planet: 'Namekuzen',
      starship: 'capsule',
      price: 100
    }
    ]
  }
];

export default USERS;
