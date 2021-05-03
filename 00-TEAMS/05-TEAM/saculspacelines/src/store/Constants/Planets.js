import FACTION from './Faction';
import yaviniv from '../../Images/yaviniv.png';
import chandrila from '../../Images/chandrila.png';
import socorro from '../../Images/socorro.png';
import polismassa from '../../Images/polismassa.png';
import aleenMinor from '../../Images/aleen-minor.png';
import dorin from '../../Images/dorin.png';
import zolan from '../../Images/zolan.png';
import shili from '../../Images/shili.png';

const { DARK, LIGHT, NEUTRAL } = FACTION;

const PLANETS = [
  {
    name: 'Tatooine',
    url: 'https://i.pinimg.com/474x/69/9a/5b/699a5bdbf5511dfeddeab7dd39862237.jpg',
    faction: NEUTRAL
  },
  {
    name: 'Alderaan',
    url: 'https://pm1.narvii.com/6421/6ad212ae67500ae08a79f0ac96a7825d6b07b367_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Yavin IV',
    url: yaviniv,
    faction: LIGHT
  },
  {
    name: 'Hoth',
    url: 'https://pbs.twimg.com/profile_images/689630166025265152/SQxWZC_J.jpg',
    faction: NEUTRAL
  },
  {
    name: 'Dagobah',
    url: 'https://pm1.narvii.com/5990/4cd6c45dbf0765ff73656b92e3a03ad8520ae80a_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Bespin',
    url: 'https://media.anakinworld.com/uploads/entries/square_large/planete-bespin.jpg',
    faction: LIGHT
  },
  {
    name: 'Endor',
    url: 'https://pm1.narvii.com/6551/8a8b6560a5b1c883e34f3f37a14c1bc7696a1336_128.jpg',
    faction: LIGHT
  },
  {
    name: 'Naboo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/SHplanet.jpg',
    faction: NEUTRAL
  },
  {
    name: 'Coruscant',
    url: 'https://i.pinimg.com/originals/17/a3/fd/17a3fdc7ac714ea17be17824fcd3ca83.jpg',
    faction: LIGHT
  },
  {
    name: 'Kamino',
    url: 'https://i.ytimg.com/vi/hzkmWxhTJKU/maxresdefault.jpg',
    faction: LIGHT
  },
  {
    name: 'Geonosis',
    url: 'https://i.pinimg.com/originals/21/c7/3a/21c73ae28de02eaeee9dc34a22e0aadf.jpg',
    faction: NEUTRAL
  },
  {
    name: 'Utapau',
    url: 'https://cdnb.artstation.com/p/assets/images/images/019/814/973/4k/dennis-welling-img-1820.jpg?1565121618',
    faction: DARK
  },
  {
    name: 'Mustafar',
    url: 'https://cdn.wallpapersafari.com/96/60/5Q8qNO.jpg',
    faction: DARK
  },
  {
    name: 'Kashyyyk',
    url: 'http://pm1.narvii.com/6603/55590a48b178e458276d75e5088b3455b889f57f_00.jpg',
    faction: LIGHT
  },
  {
    name: 'Polis Massa',
    url: polismassa,
    faction: NEUTRAL
  },
  {
    name: 'Mygeeto',
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2dee0018-9712-4233-8c23-0392f5f2eeaa/dd1mlh-cf85b254-eac7-4c3a-9fa8-0e0201a1d51b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkZWUwMDE4LTk3MTItNDIzMy04YzIzLTAzOTJmNWYyZWVhYVwvZGQxbWxoLWNmODViMjU0LWVhYzctNGMzYS05ZmE4LTBlMDIwMWExZDUxYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.IHv1bA4fBKkVIs-3JQx05SA1Su7k2r5t0QA3owOwXKU',
    faction: DARK
  },
  {
    name: 'Felucia',
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2dee0018-9712-4233-8c23-0392f5f2eeaa/dcvit4-023c43c3-d8a9-4765-a325-8a0480ed7184.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkZWUwMDE4LTk3MTItNDIzMy04YzIzLTAzOTJmNWYyZWVhYVwvZGN2aXQ0LTAyM2M0M2MzLWQ4YTktNDc2NS1hMzI1LThhMDQ4MGVkNzE4NC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jMfSsXr0Aq2-5ynKxybWRbcKAgv1XhKvvX57xcQCcEE',
    faction: NEUTRAL
  },
  {
    name: 'Cato Neimoidia',
    url: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/03/03c0bf08a8c070479cf5ddb92ecf0172e8c5299e_full.jpg',
    faction: DARK
  },
  {
    name: 'Saleucami',
    url: 'http://2.bp.blogspot.com/_CcuBCSF5vtk/Rtpjm9jSjyI/AAAAAAAAC54/hZjzmg-hh20/w1200-h630-p-k-no-nu/Saleucami.JPG',
    faction: NEUTRAL
  },
  {
    name: 'Stewjon',
    url: 'https://i.redd.it/94430srq9ez41.png',
    faction: LIGHT
  },
  {
    name: 'Eriadu',
    url: 'http://pm1.narvii.com/6532/9e2fcb993eee9b7c30d89acfe29f9e5a70645d85_00.jpg',
    faction: DARK
  },
  {
    name: 'Corellia',
    url: 'https://cdnb.artstation.com/p/assets/images/images/006/189/823/medium/yuval-halevy-corellia-3.jpg?1496688979',
    faction: LIGHT
  },
  {
    name: 'Rodia',
    url: 'https://i.pinimg.com/originals/5c/ae/dd/5caedd0e8263970811996e1331cb6a44.jpg',
    faction: DARK
  },
  {
    name: 'Nal Hutta',
    url: 'http://4.bp.blogspot.com/_iRFa-dX-qzU/SwP1dbMt35I/AAAAAAAAA6Q/OzImDmIqbdQ/s400/Hutta-TOR.jpg',
    faction: DARK
  },
  {
    name: 'Dantooine',
    url: 'https://sacredicon.files.wordpress.com/2020/12/taris.png?w=1024',
    faction: NEUTRAL
  },
  {
    name: 'Bestine IV',
    url: 'https://i.pinimg.com/originals/d9/dd/d4/d9ddd494fe4a38db6b2f4ea9af512596.png',
    faction: LIGHT
  },
  {
    name: 'Ord Mantell',
    url: 'https://img.swcombine.com//galaxy/planets/custom/large/6269.gif',
    faction: DARK
  },
  {
    name: 'unknown',
    url: 'https://fandomwire.com/wp-content/uploads/2020/07/star-wars-unknown-regions.jpg',
    faction: NEUTRAL
  },
  {
    name: 'Trandosha',
    url: 'http://pm1.narvii.com/7615/6d27d12797de117cc626b2d0994ab5fd0000811cr1-2048-1431v2_uhq.jpg',
    faction: DARK
  },
  {
    name: 'Socorro',
    url: socorro,
    faction: DARK
  },
  {
    name: 'Mon Cala',
    url: 'https://pm1.narvii.com/7282/9182cd609e88621c4f4152f94ca3c441f82e603er4-546-273_00.jpg',
    faction: LIGHT
  },
  {
    name: 'Chandrila',
    url: chandrila,
    faction: LIGHT
  },
  {
    name: 'Sullust',
    url: 'http://pm1.narvii.com/5885/4322f398bd9279ae93b2b300d1b68edd88c943b9_00.jpg',
    faction: DARK
  },
  {
    name: 'Toydaria',
    url: 'https://i.pinimg.com/236x/07/56/4b/07564bd067f1eefbd247b5b802221be5.jpg',
    faction: NEUTRAL
  },
  {
    name: 'Malastare',
    url: 'https://i.pinimg.com/originals/40/a1/7c/40a17c230f477e803eefaca98040afd1.jpg',
    faction: DARK
  },
  {
    name: 'Dathomir',
    url: 'http://pm1.narvii.com/5885/751d4d8fb50343678f8cc3fd823899521d9f597d_00.jpg',
    faction: DARK
  },
  {
    name: 'Ryloth',
    url: 'https://i.pinimg.com/originals/6a/9c/a7/6a9ca77bac49aec10410856561522634.jpg',
    faction: LIGHT
  },
  {
    name: 'Aleen Minor',
    url: aleenMinor,
    faction: LIGHT
  },
  {
    name: 'Vulpter',
    url: 'https://media.moddb.com/images/mods/1/22/21018/Sins_of_a_Solar_Empire_Rebellio_2014-05-11_16-46-48-16.png',
    faction: NEUTRAL
  },
  {
    name: 'Troiken',
    url: 'http://www.theforce.net/timetales/tt1-1/malastare.jpg',
    faction: LIGHT
  },
  {
    name: 'Tund',
    url: 'https://starwarsblog.starwars.com/wp-content/uploads/2013/12/Prakith.jpg',
    faction: LIGHT
  },
  {
    name: 'Haruun Kal',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFaIVwEmCEl-S_nSSuzaMhGw2d6jJ3Y88i0hhR2euAFMJelb73XPrMlYxkhhUn9McbYQ&usqp=CAU',
    faction: LIGHT
  },
  {
    name: 'Cerea',
    url: 'https://www.marxist.com/images/stories/theory/misc/global-warming.jpg',
    faction: LIGHT
  },
  {
    name: 'Glee Anselm',
    url: 'https://i.pinimg.com/originals/ab/dd/9f/abdd9fed6bb63ded876215b0e8d9ab6e.jpg',
    faction: LIGHT
  },
  {
    name: 'Iridonia',
    url: 'http://pm1.narvii.com/6470/a423b239d39b46dd223fbbcc6c975146e014362d_00.jpg',
    faction: DARK
  },
  {
    name: 'Tholoth',
    url: 'https://i.pinimg.com/236x/ee/bd/49/eebd49b04cf0b71079bb98e908d90b3c--planet-clone-wars.jpg',
    faction: LIGHT
  },
  {
    name: 'Iktotch',
    url: 'https://i.pinimg.com/originals/cf/2c/ad/cf2cadcf1d861397b2efe7b2a366671b.jpg',
    faction: NEUTRAL
  },
  {
    name: 'Quermia',
    url: 'https://sites.google.com/site/starwarswork/_/rsrc/1468759304813/planets/ando/Ando.jpg',
    faction: DARK
  },
  {
    name: 'Dorin',
    url: dorin,
    faction: DARK
  },
  {
    name: 'Champala',
    url: 'https://img.swcombine.com//galaxy/planets/custom/large/6166.gif',
    faction: DARK
  },
  {
    name: 'Mirial',
    url: 'https://www.jediholo.net/wp-content/uploads/2019/08/Mirial_Planet_Preview.png',
    faction: LIGHT
  },
  {
    name: 'Serenno',
    url: 'http://pm1.narvii.com/6110/344f6c947f9ccea218deb5f289790da990bc3461_00.jpg',
    faction: DARK
  },
  {
    name: 'Concord Dawn',
    url: 'https://pbs.twimg.com/media/EYjMO0hXkAAH7gg.jpg',
    faction: NEUTRAL
  },
  {
    name: 'Zolan',
    url: zolan,
    faction: DARK
  },
  {
    name: 'Ojom',
    url: 'https://lh3.googleusercontent.com/proxy/8pYnFBsPlUqTKMx5cZdSjVR6nbVfKSqW1fh1IV4JGbkvaCbXDIzBKZf_6ONZBgMDDDj0lCl0trEjJwYIVMsMwj0TFqW8GIjMws2ONz9lEPa3MCVFVrgb',
    faction: LIGHT
  },
  {
    name: 'Skako',
    url: 'https://media.moddb.com/cache/images/mods/1/13/12901/thumb_620x2000/sweawfoc-20120307-221144.png',
    faction: DARK
  },
  {
    name: 'Muunilinst',
    url: 'https://img1.starwars-holonet.com/holonet/dictionnaire/photos/planete_muunilinst.jpg',
    faction: DARK
  },
  {
    name: 'Shili',
    url: shili,
    faction: LIGHT
  },
  {
    name: 'Kalee',
    url: 'https://www.pngkit.com/png/full/3-32091_new-science-fiction-author-e-j-deen-dark.png',
    faction: DARK
  },
  {
    name: 'Umbara',
    url: 'https://rpggamer.org/uploaded_images/Moraband_Planet.png',
    faction: DARK
  }
];

export default PLANETS;
