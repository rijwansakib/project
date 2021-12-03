import {ProductCategory} from './product-category';

export interface ProductSubCategory {
  readOnly?: boolean;
  _id?: string;
  subCategoryName: string;
  subCategorySlug: string;
  brand?: any;
  category: string | ProductCategory;
  attributes?: any[];
}
