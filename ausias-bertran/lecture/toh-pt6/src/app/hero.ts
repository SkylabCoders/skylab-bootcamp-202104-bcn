export interface Hero {
  id: number;
  name: string;
  appearance: {
    gender: string;
    race: string;
    height: [string];
    weight: [string];
    eyeColor: string;
    hairColor: string;
  }
}
