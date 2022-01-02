import {User} from "./user";
import {ProductSubCategory} from "./product-sub-category";

export interface Blog {
  _id?: string;
  slug: string;
  title: string;
  platform: string | ProductSubCategory;
  shortDescription: string;
  body?: string;
  image: string;
  author: string | User;
  isFeatured?: number;
  votes?: number;
  createdAt?: Date;
  updatedAt?: Date;
  select?: boolean;
}
