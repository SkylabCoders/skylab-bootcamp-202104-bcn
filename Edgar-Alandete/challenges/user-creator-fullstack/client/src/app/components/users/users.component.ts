import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user'
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users : User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  deleteUser(userIdToDelete: string): void {
    this.users = this.users.filter(({_id}) => _id !== userIdToDelete);
    this.userService.deleteUser(userIdToDelete)
      .subscribe(() => this.getUsers());
  }

}
