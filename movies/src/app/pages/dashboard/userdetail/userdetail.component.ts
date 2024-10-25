import { Component, Input } from '@angular/core';
import { iUser } from '../../../interfaces/iuser';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.scss',
})
export class UserdetailComponent {
  constructor(private userSvc: UserService, private authSvc: AuthService) {}

  user!: Partial<iUser>;

  ngOnInit() {
    this.authSvc.restoreUser();
    this.userSvc.user$.subscribe((user) => {
      if (user) if (user) this.user = user;
    });
  }
}
