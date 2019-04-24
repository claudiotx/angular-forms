import { Item } from '../item/models/item.model';

export class Group {
  title: string;
  items: Item[];

  constructor(title: string, items?: Item[]) {
    this.title = title;
    this.items = items;
  }
};
