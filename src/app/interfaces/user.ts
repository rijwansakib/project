import {UserTypeEnum} from "../enum/user-type.enum";
import {ProductCategory} from "./product-category";
import {ProductSubCategory} from "./product-sub-category";

export interface User {
  _id?: string;
  fullName: string;
  email?: string;
  username?: string;
  userType?: UserTypeEnum;
  category?: string | ProductCategory;
  subCategory?: string[] | ProductSubCategory[];
  phoneNo?: string;
  registrationAs?: UserTypeEnum;
  githubProfile?: string;
  referenceUrl?: string;
  isDeveloperAccess?: boolean;
  profileImg?: string;
  registrationType?: string;
  // Additional
  gender?: string;
  birthdate?: Date;
  address?: string;
  password?: string;
  isPhoneVerified?: boolean;
  isEmailVerified?: boolean;
  hasAccess?: boolean;
  occupation?: string;
  createdAt?: any;
  updatedAt?: any;
  // Remove Letter
  name?: string;
  profileImage?: string;
}
