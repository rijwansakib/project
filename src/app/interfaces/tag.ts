export interface Tag {
  _id?: string;
  tagName: string;
  tagSlug: string;
  createdAt?: Date;
  updatedAt?: Date;
  select?: boolean;
}
