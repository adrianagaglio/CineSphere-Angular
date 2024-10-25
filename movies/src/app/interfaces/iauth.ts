import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
export interface iAuth {
  accessToken: string;
  user: { email: string; password: string };
}
