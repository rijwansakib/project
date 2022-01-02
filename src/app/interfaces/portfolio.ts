import {ServiceType} from "./service-type";
import {ExperienceType} from "./experience-type";
import {EducationType} from "./education-type";


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
  services?: Service[];
  experiences?: Experience[];
  educations?: Education[];
  works?: Work[];
  createdAt?: Date;
  updatedAt?: Date;
  select?: boolean;
}

export interface Service {
  _id?: string;
  serviceType: string | ServiceType;
  description: string;
}

export interface Experience {
  _id?: string;
  experienceType: string | ExperienceType;
  description: string;
  startYear: string;
  endYear: string;
}

export interface Education {
  _id?: string;
  educationType: string | EducationType;
  description: string;
  startYear: string;
  endYear: string;
}

export interface Work {
  _id?: string;
  serviceType: string | ServiceType;
  name: string;
  url: string;
  description: string;
}
