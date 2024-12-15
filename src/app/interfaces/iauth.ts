import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { iUser } from './iuser';
export interface iAuth {
  accessToken: string;
  user: Partial<iUser>;
}
