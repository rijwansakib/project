import {User} from "./user";

export interface Blog {
  _id?: string;
  slug: string;
  title: string;
  shortDesc: string;
  image: string;
  author: string | User;
  createdAt?: Date;
  updatedAt?: Date;
}
