import {Validators} from "@angular/forms";


export interface Portfolio {
  _id?: string;
  name: string;
  introBio?: string;
  introImage?: string;
  bio?: string;
  age?: string;
  residence?:string;
  email?: string;
  phoneNo?: string;
  aboutImage?: string;
  cvLink?: string;
  createdAt?: Date;
  updatedAt?: Date;
  select?: boolean;
}
