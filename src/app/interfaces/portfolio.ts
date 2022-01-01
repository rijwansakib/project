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
  serviceType: string | ServiceType;
  description: string;
}

export interface Experience {
  experienceType: string | ExperienceType;
  description: string;
  startYear: string;
  endYear: string;
}

export interface Education {
  experienceType: string | EducationType;
  description: string;
  startYear: string;
  endYear: string;
}

export interface Work {
  serviceType: string | ServiceType;
  name: string;
  url: string;
}
