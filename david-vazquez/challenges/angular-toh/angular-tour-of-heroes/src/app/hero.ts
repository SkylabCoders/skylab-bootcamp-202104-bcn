export interface Hero {
    _id: string,
    id: number,
    name: string,
    biography: {
      aliases: [string]
    }
  }