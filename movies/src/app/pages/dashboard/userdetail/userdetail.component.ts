import { Component, Input } from '@angular/core';
import { iUser } from '../../../interfaces/iuser';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.scss',
})
export class UserdetailComponent {
  constructor(private userSvc: UserService) {}

  user!: Partial<iUser>;

  ngOnInit() {
    this.userSvc.user$.subscribe((user) => {
      if (user) if (user) this.user = user;
    });
  }
}
