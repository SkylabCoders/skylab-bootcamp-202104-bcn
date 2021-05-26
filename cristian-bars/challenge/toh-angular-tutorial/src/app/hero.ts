export interface Hero {
  id: number;
  name: string;
  powerstats: {
    intelligence: Number,
    strength: Number,
    speed: Number,
    durability: Number,
    power: Number,
    combat: Number
  },
  aliases: {};
}
