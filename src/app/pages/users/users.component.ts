import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { iUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  constructor(private userSvc: UserService) {}

  users!: iUser[];
  isLoading: boolean = true;

  ngOnInit() {
    this.userSvc.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
      this.isLoading = false;
    });
  }
}
