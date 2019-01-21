import { Character } from "../character/character";

export interface ICharacter {
  id: number;
  name: string;
  race: string;
  
}

export interface IUser {
  UserId: number;
  Characters: Character[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
