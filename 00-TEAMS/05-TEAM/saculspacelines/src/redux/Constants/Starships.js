const DARK = 'DARK';
const LIGHT = 'LIGHT';
const NEUTRAL = 'NEUTRAL';

const STARSHIPS = [
  {
    name: 'CR90 corvette',
    imgUrl: 'https://i.pinimg.com/originals/c5/a3/d9/c5a3d9128458241aad10c2b14d0a4f54.jpg',
    faction: NEUTRAL
  },
  {
    name: 'Star Destroyer',
    imgUrl: 'https://geekculture.co/wp-content/uploads/2019/08/lego-star-wars-ucs-imperial-star-destroyer-75252-featured-1200x500.jpg',
    faction: DARK
  },
  {
    name: 'Sentinel-class landing craft',
    imgUrl: 'https://cdnb.artstation.com/p/marketplace/presentation_assets/000/723/563/large/file.jpg?1613256199',
    faction: DARK
  },
  {
    name: 'Death Star',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C31%2C1600%2C800',
    faction: DARK
  },
  {
    name: 'Millennium Falcon',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8d/A_screenshot_from_Star_Wars_Episode_IV_A_New_Hope_depicting_the_Millennium_Falcon.jpg',
    faction: LIGHT
  },

  {
    name: 'Y-wing',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864',
    faction: LIGHT
  },

  {
    name: 'X-wing',
    imgUrl: 'https://www.playstationlifestyle.net/assets/uploads/2019/05/x-wing-1280x720.jpg',
    faction: LIGHT
  },

  {
    name: 'TIE Advanced x1',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080&width=1536',
    faction: DARK
  },

  {
    name: 'Executor',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845&width=960',
    faction: DARK
  },

  {
    name: 'Rebel transport',
    imgUrl: 'https://images.dakkadakka.com/s/i/gallery/img/2018/1/7/923964.jpg',
    faction: LIGHT
  },

  {
    name: 'Slave 1',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/slave-i-main_1f3c9b0d.jpeg?region=116%2C62%2C844%2C475',
    faction: NEUTRAL
  },

  {
    name: 'Imperial shuttle',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/veh_ia_1752_040381b2.jpeg?region=0%2C70%2C1280%2C720&width=960',
    faction: DARK
  },

  {
    name: 'EF76 Nebulon-B escort frigate',
    imgUrl: 'https://i.pinimg.com/originals/ee/81/c1/ee81c1f60032400bc29eda33a910467b.jpg',
    faction: DARK
  },

  {
    name: 'Calamari Cruiser',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/e6d_ia_2581_47f64de7.jpeg?region=254%2C0%2C1426%2C802&width=960',
    faction: LIGHT
  },

  {
    name: 'A-wing',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-05-26_at_5_16a39e17.png?region=0%2C71%2C812%2C457',
    faction: LIGHT
  },

  {
    name: 'B-wing',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/databank_bwingfighter_01_169_460cc528.jpeg?region=0%2C0%2C1560%2C878&width=960',
    faction: LIGHT
  },

  {
    name: 'Republic Cruiser',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/databank_republiccruiser_01_169_fd769e33.jpeg?region=0%2C0%2C1560%2C878&width=1536',
    faction: LIGHT
  },

  {
    name: 'Droid control ship',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLXhlSsrPrkdgCskSnLR0I8iDP70ZM5S2zA&usqp=CAU',
    faction: DARK
  },
  {
    name: 'Naboo fighter',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/databank_naboon1starfighter_01_169_26691adf.jpeg?region=0%2C0%2C1560%2C878&width=960',
    faction: NEUTRAL
  },

  {
    name: 'Naboo Royal Starship',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/databank_nabooroyalstarship_01_169_e61f677e.jpeg?region=0%2C0%2C1560%2C878&width=960',
    faction: NEUTRAL
  },

  {
    name: 'Scimitar',
    imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab940dbf-6b1c-43d5-9e49-aa8736340b2d/ddstjfs-0f65c332-8798-4417-8677-01a87cfd09c2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiOTQwZGJmLTZiMWMtNDNkNS05ZTQ5LWFhODczNjM0MGIyZFwvZGRzdGpmcy0wZjY1YzMzMi04Nzk4LTQ0MTctODY3Ny0wMWE4N2NmZDA5YzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jI9mh6Q15xSNYE2dfL9y1j8n5g46Sk1tkoYNitMdAi0',
    faction: DARK
  },

  {
    name: 'J-type diplomatic barge',
    imgUrl: 'https://cdna.artstation.com/p/assets/images/images/009/100/184/large/alexey-novikov-_-forest-cat-amidalaship2-ue4-1.jpg?1517152573',
    faction: NEUTRAL
  },

  {
    name: 'AA-9 Coruscant freighter',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/aa-9-coruscant-freighter_a856053d.jpeg?region=92%2C0%2C1181%2C665&width=960',
    faction: LIGHT
  },

  {
    name: 'Jedi starfighter',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ciWYi4UyL._AC_SX569_.jpg',
    faction: LIGHT
  },

  {
    name: 'H-type Nubian yacht',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/h-type-nubian-yacht_7d67bc00.jpeg?region=0%2C0%2C1181%2C663&width=960',
    faction: NEUTRAL
  },

  {
    name: 'Republic Assault ship',
    imgUrl: 'https://i.pinimg.com/originals/ba/c1/37/bac13734c76eabcd33aea13a483ce361.jpg',
    faction: LIGHT
  },
  {
    name: 'Solar Sailer',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/databank_geonosiansolarsailer_01_169_b3873578.jpeg?region=0%2C0%2C1560%2C878&width=960',
    faction: DARK
  },

  {
    name: 'Trade Federation cruiser',
    imgUrl: 'https://static.planetminecraft.com/files/resource_media/screenshot/1145/providenceca_808287.jpg',
    faction: DARK
  },
  {
    name: 'Theta-class T-2c shuttle',
    imgUrl: 'https://i.pinimg.com/originals/e2/ee/f7/e2eef736ae40d407696a5f47ba65ade3.jpg',
    faction: DARK
  },

  {
    name: 'Republic attack cruiser',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/databank_republicattackcruiser_01_169_812f153d.jpeg?region=0%2C0%2C1560%2C878&width=1536',
    faction: LIGHT
  },
  {
    name: 'Naboo star skiff',
    imgUrl: 'https://forum.rebelscum.com/legacy/photogallery/data/500/medium/IMG_1049-cropped.jpg',
    faction: NEUTRAL
  },

  {
    name: 'Jedi Interceptor',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/ETA-2-starfighter-main-image_bedd3aaa.jpeg?region=232%2C0%2C1451%2C816',
    faction: LIGHT
  },
  {
    name: 'arc-170',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/databank_arc170starfighter_01_169_f932abcb.jpeg?region=0%2C0%2C1560%2C878&width=960',
    faction: LIGHT
  },

  {
    name: 'Banking clan frigte',
    imgUrl: 'https://i.pinimg.com/originals/c4/e5/e5/c4e5e5915500e020b152da939c524a64.gif',
    faction: DARK
  },
  {
    name: 'Belbullab-22 starfighter',
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/databank_soullessone_01_169_08305d9b.jpeg?region=0%2C0%2C1560%2C878&width=1536',
    faction: DARK
  },

  {
    name: 'V-wing',
    imgUrl: 'https://cdna.artstation.com/p/marketplace/presentation_assets/000/598/618/large/file.jpg?1605535338',
    faction: LIGHT
  }
];

export default STARSHIPS;
