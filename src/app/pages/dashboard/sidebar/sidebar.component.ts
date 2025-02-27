import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { iUser } from '../../../interfaces/iuser';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private authSvc: AuthService, private userSvc: UserService) {}

  user!: iUser;
  role!: string;

  ngOnInit() {
    this.userSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
    this.authSvc.authData$.subscribe((data) => {
      if (data) {
        this.role = data.role;
      }
    });
  }
}
