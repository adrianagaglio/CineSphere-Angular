import { Component, Input } from '@angular/core';
import { iUser } from '../../../interfaces/iuser';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../auth/auth.service';
import { FavouritesService } from '../../../services/favourites.service';
import { iAuth } from '../../../interfaces/iauth';
import { iUpdateuserinfo } from '../../../interfaces/iupdateuserinfo';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.scss',
})
export class UserdetailComponent {
  constructor(private authSvc: AuthService, private userSvc: UserService) {}

  user!: iUser;
  changeRequest!: iUpdateuserinfo;
  changeMode: boolean = false;
  authData!: iAuth;

  ngOnInit() {
    this.authSvc.authData$.subscribe((authData: iAuth | null) => {
      if (authData) {
        this.authData = authData;
        this.user = authData.user;
        console.log(this.user);
        this.changeRequest = {
          id: this.user.id,
          firstName: '',
          lastName: '',
          email: '',
          username: '',
          actualPassword: '',
          newPassword: '',
        };
      }
    });
  }

  change() {
    this.changeMode = !this.changeMode;
    if (!this.changeMode) {
      this.changeRequest = {
        id: this.user.id,
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        actualPassword: '',
        newPassword: '',
      };
    }
  }

  updateUser() {
    this.userSvc.updateUser(this.changeRequest).subscribe((res) => {
      this.user = res;
      this.authData!.user = this.user;
      localStorage.setItem('authData', JSON.stringify(this.authData));
      this.changeMode = false;
    });
  }
}
