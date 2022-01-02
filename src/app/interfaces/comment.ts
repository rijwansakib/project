import {User} from './user';
import {Blog} from './blog';

export interface Comment {
  _id?: string;
  user: string | User;
  blog: string | Blog;
  name?: string;
  commentDate?: string;
  comment: string;
  votes?: number;
  status: boolean;
  reply?: string;
  replyDate?: string;
}
