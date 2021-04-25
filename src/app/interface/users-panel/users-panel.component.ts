import {Component, OnInit} from '@angular/core';
import {User} from '../../entity/user';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {
  faLeft  = faChevronLeft;
  faEdit  = faPen;
  faTrash = faTrash;
  faView  = faEdit;
  faArrow = faArrowsAltV;

  /* generate fake users */
  users: User[] =  [
    {
      id: 0,
      picture: 'https://picsum.photos/200',
      name: 'Kim Emily',
      mobile: '9580174532',
      email: 'zachary39@yahoo.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 1,
      picture: 'https://picsum.photos/200',
      name: 'Carter Jesus',
      mobile: '+1-184-467-0235x3237',
      email: 'tyler14@saunders.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 2,
      picture: 'https://picsum.photos/200',
      name: 'Gibson Joshua',
      mobile: '(875)811-2234x65266',
      email: 'shawn85@gillespie.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 3,
      picture: 'https://picsum.photos/200',
      name: 'Gibson Matthew',
      mobile: '+1-358-990-3053x02425',
      email: 'russellalex@gomez.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 4,
      picture: 'https://picsum.photos/200',
      name: 'Fletcher Ashley',
      mobile: '(726)865-3017x4243',
      email: 'jasmineblake@gmail.com',
      isActive: false,
      isAdmin: true
    },
    {
      id: 5,
      picture: 'https://picsum.photos/200',
      name: 'Arnold Corey',
      mobile: '360.043.1353x95919',
      email: 'parsonsandrew@yahoo.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 6,
      picture: 'https://picsum.photos/200',
      name: 'Warner Autumn',
      mobile: '(173)229-5780x489',
      email: 'mariacampbell@hernandez-rodriguez.org',
      isActive: true,
      isAdmin: false
    },
    {
      id: 7,
      picture: 'https://picsum.photos/200',
      name: 'Lowery Alyssa',
      mobile: '099-244-0247x101',
      email: 'zanderson@mcfarland.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 8,
      picture: 'https://picsum.photos/200',
      name: 'Murphy Jeremy',
      mobile: '134-824-6897',
      email: 'scottanna@curtis.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 9,
      picture: 'https://picsum.photos/200',
      name: 'Lopez Robert',
      mobile: '715-084-0251',
      email: 'lgarcia@hotmail.com',
      isActive: false,
      isAdmin: true
    },
    {
      id: 10,
      picture: 'https://picsum.photos/200',
      name: 'Thomas Michael',
      mobile: '+1-983-254-7838x209',
      email: 'myersjeffrey@gmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 11,
      picture: 'https://picsum.photos/200',
      name: 'Castillo Pamela',
      mobile: '987-317-3542x6746',
      email: 'lauravang@gmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 12,
      picture: 'https://picsum.photos/200',
      name: 'Garza Christopher',
      mobile: '626-717-1664x52552',
      email: 'shannon87@yahoo.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 13,
      picture: 'https://picsum.photos/200',
      name: 'Fernandez David',
      mobile: '001-597-241-4888x457',
      email: 'marquezcaroline@ortiz.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 14,
      picture: 'https://picsum.photos/200',
      name: 'Brown Christina',
      mobile: '463-890-6333x66640',
      email: 'nmurphy@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 15,
      picture: 'https://picsum.photos/200',
      name: 'Taylor Kristen',
      mobile: '+1-545-744-9089x5338',
      email: 'caseycarol@gmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 16,
      picture: 'https://picsum.photos/200',
      name: 'Butler Janet',
      mobile: '+1-428-085-3931x9481',
      email: 'jacksonspencer@hotmail.com',
      isActive: false,
      isAdmin: true
    },
    {
      id: 17,
      picture: 'https://picsum.photos/200',
      name: 'Arnold Renee',
      mobile: '(817)870-6202',
      email: 'pamela01@yahoo.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 18,
      picture: 'https://picsum.photos/200',
      name: 'Henson Penny',
      mobile: '932.949.0884',
      email: 'michael31@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 19,
      picture: 'https://picsum.photos/200',
      name: 'Wu Jeffrey',
      mobile: '(267)350-3687',
      email: 'imaddox@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 20,
      picture: 'https://picsum.photos/200',
      name: 'Turner Cindy',
      mobile: '+1-333-794-5648x65690',
      email: 'hdavis@yahoo.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 21,
      picture: 'https://picsum.photos/200',
      name: 'Cochran Karen',
      mobile: '382-538-3177',
      email: 'andrewanderson@hotmail.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 22,
      picture: 'https://picsum.photos/200',
      name: 'Foster Laurie',
      mobile: '869.897.1023x50941',
      email: 'paullove@thomas-kennedy.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 23,
      picture: 'https://picsum.photos/200',
      name: 'Black Lisa',
      mobile: '001-331-303-6974x1335',
      email: 'nathan97@hotmail.com',
      isActive: false,
      isAdmin: true
    },
    {
      id: 24,
      picture: 'https://picsum.photos/200',
      name: 'Schaefer Brittany',
      mobile: '+1-989-813-8110x0240',
      email: 'hurstjoseph@gutierrez.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 25,
      picture: 'https://picsum.photos/200',
      name: 'Kelly Jennifer',
      mobile: '020.278.4327',
      email: 'xdavis@harper.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 26,
      picture: 'https://picsum.photos/200',
      name: 'Moore Jason',
      mobile: '+1-752-811-6235x7967',
      email: 'lisa67@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 27,
      picture: 'https://picsum.photos/200',
      name: 'Flores David',
      mobile: '001-783-982-7731',
      email: 'dsullivan@underwood-barnett.net',
      isActive: true,
      isAdmin: true
    },
    {
      id: 28,
      picture: 'https://picsum.photos/200',
      name: 'Snow Charles',
      mobile: '830.603.3497',
      email: 'ewingkara@hotmail.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 29,
      picture: 'https://picsum.photos/200',
      name: 'Little Cindy',
      mobile: '(674)702-5172x3297',
      email: 'linda96@yahoo.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 30,
      picture: 'https://picsum.photos/200',
      name: 'Shelton Jesse',
      mobile: '001-299-738-1977x9820',
      email: 'benjaminhunt@hotmail.com',
      isActive: false,
      isAdmin: true
    },
    {
      id: 31,
      picture: 'https://picsum.photos/200',
      name: 'Thomas Hannah',
      mobile: '(325)728-8282x95267',
      email: 'jacob04@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 32,
      picture: 'https://picsum.photos/200',
      name: 'Ruiz Michael',
      mobile: '761-889-8102',
      email: 'jonesemily@yahoo.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 33,
      picture: 'https://picsum.photos/200',
      name: 'Burns Ashley',
      mobile: '(888)520-9893x6022',
      email: 'jacqueline65@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 34,
      picture: 'https://picsum.photos/200',
      name: 'Reynolds Kevin',
      mobile: '+1-320-933-3012x189',
      email: 'bryanmiller@yahoo.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 35,
      picture: 'https://picsum.photos/200',
      name: 'Bryan Evelyn',
      mobile: '001-721-198-6215x8314',
      email: 'qkelly@hicks.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 36,
      picture: 'https://picsum.photos/200',
      name: 'Stokes Brian',
      mobile: '001-156-660-7746x8909',
      email: 'emorrison@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 37,
      picture: 'https://picsum.photos/200',
      name: 'Murphy Heidi',
      mobile: '140-712-1543',
      email: 'rodney21@logan.org',
      isActive: true,
      isAdmin: false
    },
    {
      id: 38,
      picture: 'https://picsum.photos/200',
      name: 'Williams Andrew',
      mobile: '093.129.2614x45015',
      email: 'ztucker@martin-beard.org',
      isActive: true,
      isAdmin: true
    },
    {
      id: 39,
      picture: 'https://picsum.photos/200',
      name: 'Wyatt Erin',
      mobile: '+1-709-739-7163x75033',
      email: 'michelejames@yahoo.com',
      isActive: true,
      isAdmin: true
    }];

  displayUsers: User[]  = [];
  activeUser: number;
  memberBtn     = 'selected';
  adminBtn      = '';
  filterSwitch  = 'filterOff';

  constructor() { }

  ngOnInit(): void {
    this.displayUsers = this.users;
    this.activeUser = this.getActiveUsers().length;
  }

   /******************** WE GET ALL USERS (Active & inactive) ****************/
  getAllUsers(): User[] {
    this.adminBtn = '';
    this.memberBtn = 'selected';
    this.displayUsers = this.users;
    this.activeUser = this.getActiveUsers().length;
    return this.displayUsers ;
  }

  /******************** WE GET ALL ADMINS (Active & inactive) ****************/
  getAllAdmins(): User[]
  {
    if (this.adminBtn === '') {
      const adminList = [];
      for (const u of this.users) {
        if (u.isAdmin) { adminList.push(u); }
        this.displayUsers = adminList;
      }
      this.activeUser = this.getActiveUsers().length;
    }

    this.adminBtn = 'selected';
    if (this.memberBtn === 'selected') {  this.memberBtn = ''; }
    return this.displayUsers;
  }

  /******************** WE GET ALL ACTIVE USERS ****************/
  getActiveUsers(): User[]
  {
    const activeUsers = [];
    for (const u of this.displayUsers) {
      if (u.isActive) { activeUsers.push(u); }
    }
    return activeUsers;
  }

  /******************** WE GET ALL INACTIVE USERS ****************/
  getInactiveUsers(): User[]
  {
    const inactiveUsers = [];
    for (const u of this.displayUsers) {
      if (!u.isActive) { inactiveUsers.push(u); }
    }
    return inactiveUsers;
  }

  /******************** SORT ONCLICK ON TABLE HEADER ****************/
  sortBy(p: string): User[] {
    let hasBeenSort = false;
    this.displayUsers.sort((a, b) => {
      if (a[p].toLowerCase() < b[p].toLowerCase()) {
        hasBeenSort = true;
        return -1;
      }
    });
    if (!hasBeenSort)  {this.displayUsers.sort().reverse(); }
    return this.displayUsers;
  }

  /******************** DISPLAY FILTER BOX ON CLICK ****************/
  FilterSwitcher(): void {
    if (this.filterSwitch === 'filterOn')  { this.filterSwitch = 'filterOff'; }
    else { this.filterSwitch = 'filterOn'; }
  }

  /******************** FILTER : USER BY STATUS ****************/
  FilterByStatus(p: string): User[]
  {
    if (this.memberBtn === 'selected')      { this.displayUsers = this.getAllUsers(); }
    else if (this.adminBtn === 'selected')  { this.adminBtn = ''; this.displayUsers = this.getAllAdmins(); }

    if (p === 'active')   { return this.displayUsers = this.getActiveUsers(); }
    else if (p === 'inactive') {return this.displayUsers = this.getInactiveUsers(); }
    else {return this.displayUsers; }
  }
}
