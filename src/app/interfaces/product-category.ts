export interface ProductCategory {
  readOnly?: boolean;
  _id?: string;
  categoryName: string;
  categorySlug: string;
  priority?: number;
  attributes?: any[];
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  select?: boolean;
}
