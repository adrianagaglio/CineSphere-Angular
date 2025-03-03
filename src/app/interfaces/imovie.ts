import { iActor } from './iactor';
import { iGenre } from './igenre';
import { iRate } from './irate';

export interface iMovie {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  year: number;
  director: string;
  actors: iActor[];
  genres: iGenre[];
  rates: iRate[];
}
