import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { iUser } from './iuser';
export interface iAuth {
  token: string;
  user: Partial<iUser>;
}
