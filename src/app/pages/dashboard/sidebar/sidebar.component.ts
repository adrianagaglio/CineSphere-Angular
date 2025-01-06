import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { iUser } from '../../../interfaces/iuser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private authSvc: AuthService) {}

  user!: iUser;

  ngOnInit() {
    this.authSvc.authData$.subscribe((data) => {
      if (data) {
        this.user = data.user;
      }
    });
  }
}
