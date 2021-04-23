import { Component, OnInit } from '@angular/core';
import {User} from '../../entity/user';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {

  users: User[] = [
    {id: 1, name: 'username'},
    {id: 2, name: 'another'},
    {id: 3, name: 'a new one'}
  ];

  constructor() { }

  ngOnInit(): void {}

}
