import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faUser      = faUser;
  faUsers     = faUserFriends;
  faFolder    = faFolder;
  faControlP  = faSlidersH;
  faGroupChat = faComments;
  faReports   = faBars;
  faLogs      = faSignInAlt;
  faProjets   = faCalendarDay;
  displayed   = '';


  constructor() { }

  ngOnInit(): void {
  }

  resDisplay(): string
  {
    if (this.displayed === 'displayed') { this.displayed = ''; }
    else {this.displayed = 'displayed'; }
    return this.displayed ;
  }
}
