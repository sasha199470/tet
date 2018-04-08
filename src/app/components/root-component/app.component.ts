import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  optionChange = [
    {value: {'surname': 'surname'}, viewValue: 'Смена имени'},
    {value: {'doc': 'doc', 'date': 'date', 'code': 'code'}, viewValue: 'Смена типа документа'},
    {value: {'date': 'date'}, viewValue: 'Смена даты выдачи'},
    {value: {'code': 'code'}, viewValue: 'Смена кода подраздения'},
  ];
  type = {};
  typeChange = {};
   user = new User;
   changeUser = new User;

  constructor(
    private userService: UserService
  ) {}
  ngOnInit() {
    // this.userService.getUser().subscribe(
    //   user => {console.log(); this.user = user; console.log(user.address);
    //    }
    // );
    // this.user = this.userService.getUser();
    this.userService.getUser().subscribe(
      user => {
        this.user = user;
    }
    );
 }
  copyField(key) {
    this.changeUser[key] = this.user[key];
    console.log(this.changeUser);
  }
}
