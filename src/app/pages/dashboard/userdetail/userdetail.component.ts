import { Component, Input, ViewChild } from '@angular/core';
import { iUser } from '../../../interfaces/iuser';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../auth/auth.service';
import { FavouritesService } from '../../../services/favourites.service';
import { iAuth } from '../../../interfaces/iauth';
import { iUpdateuserinfo } from '../../../interfaces/iupdateuserinfo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.scss',
})
export class UserdetailComponent {
  constructor(private authSvc: AuthService, private userSvc: UserService) {}

  user!: iUser;
  changeRequest!: Partial<iUpdateuserinfo>;
  changeMode: boolean = false;
  authData!: iAuth;

  @ViewChild('form') form!: NgForm;

  ngOnInit() {
    this.authSvc.authData$.subscribe((authData: iAuth | null) => {
      if (authData) {
        this.authData = authData;
        this.user = authData.user;
        this.changeRequest = {
          id: this.user.id,
          actualPassword: '',
          newPassword: '',
        };
      }
    });
  }

  updateUser() {
    if (this.form.valid) {
      this.userSvc.updateUser(this.changeRequest).subscribe((res) => {
        this.user = res;
        this.authData!.user = this.user;
        localStorage.setItem('authData', JSON.stringify(this.authData));
        this.changeMode = false;
      });
    }
  }
}
