import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: User;
  key: string = '';
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.user = new User();
  }
 
  onSubmit() {
    if (this.key) {
      this.userService.update(this.user, this.key);
    } else {
      this.userService.insert(this.user);
    }
 
    this.user = new User();
  }

  validacao(){
    this.userService.validade('12345','123', '-LfzwJinhH3y0h69rb8A');
  }
}