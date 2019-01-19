export interface ICharacter {
  id: number;
  name: string;
  race: string;
  strength?: number;
  createdSince: any;
}

export interface IUser {
  UserId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
