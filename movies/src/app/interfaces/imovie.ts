import { iRate } from './irate';

export interface iMovie {
  id: number;
  title: string;
  description: string;
  coverImage: string[];
  year: number;
  director: string;
  cast: string[];
  genres: string[];
  rate: iRate;
}
