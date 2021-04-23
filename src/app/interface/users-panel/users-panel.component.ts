import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../entity/user';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {viewClassName} from '@angular/compiler';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {

  faEdit = faPen;
  faTrash = faTrash;
  faView = faEdit;


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
    },
    {
      id: 40,
      picture: 'https://picsum.photos/200',
      name: 'Holmes Brian',
      mobile: '001-484-420-3167x1823',
      email: 'christine47@bridges.info',
      isActive: true,
      isAdmin: false
    },
    {
      id: 41,
      picture: 'https://picsum.photos/200',
      name: 'Mueller John',
      mobile: '122.937.4886',
      email: 'arthuralvarado@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 42,
      picture: 'https://picsum.photos/200',
      name: 'Vaughn Daniel',
      mobile: '+1-901-608-0681x86801',
      email: 'ddavis@yahoo.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 43,
      picture: 'https://picsum.photos/200',
      name: 'Sutton Eduardo',
      mobile: '(064)645-6698',
      email: 'adamtrujillo@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 44,
      picture: 'https://picsum.photos/200',
      name: 'Williamson Stephen',
      mobile: '001-385-423-6508x350',
      email: 'williamsronnie@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 45,
      picture: 'https://picsum.photos/200',
      name: 'Ryan John',
      mobile: '416.822.7050x47624',
      email: 'brownronald@moore-russell.net',
      isActive: true,
      isAdmin: true
    },
    {
      id: 46,
      picture: 'https://picsum.photos/200',
      name: 'Salinas Jacob',
      mobile: '935-692-3048x522',
      email: 'geraldhoward@hotmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 47,
      picture: 'https://picsum.photos/200',
      name: 'Bell Brian',
      mobile: '(963)547-3332x4191',
      email: 'qshaw@gmail.com',
      isActive: false,
      isAdmin: true
    },
    {
      id: 48,
      picture: 'https://picsum.photos/200',
      name: 'Hull Anthony',
      mobile: '462-785-7356x608',
      email: 'kimberly40@tanner.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 49,
      picture: 'https://picsum.photos/200',
      name: 'Beck David',
      mobile: '001-456-958-5066x53247',
      email: 'tammy26@huff-perry.com',
      isActive: false,
      isAdmin: true
    },
    {
      id: 50,
      picture: 'https://picsum.photos/200',
      name: 'Holland Jared',
      mobile: '+1-587-786-2572x28900',
      email: 'kmack@lopez.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 51,
      picture: 'https://picsum.photos/200',
      name: 'Walker Michael',
      mobile: '725-922-4011x6599',
      email: 'yli@higgins-fleming.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 52,
      picture: 'https://picsum.photos/200',
      name: 'English Phillip',
      mobile: '354-534-1292x249',
      email: 'kaylee15@baldwin.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 53,
      picture: 'https://picsum.photos/200',
      name: 'Schwartz Daniel',
      mobile: '(598)130-6354x43519',
      email: 'michael04@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 54,
      picture: 'https://picsum.photos/200',
      name: 'Cervantes Andre',
      mobile: '231-611-1160',
      email: 'lancealexander@vargas.info',
      isActive: true,
      isAdmin: false
    },
    {
      id: 55,
      picture: 'https://picsum.photos/200',
      name: 'Robinson Kara',
      mobile: '4079165633',
      email: 'fpeters@waters.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 56,
      picture: 'https://picsum.photos/200',
      name: 'Fuller James',
      mobile: '660-778-0291x281',
      email: 'keith18@gmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 57,
      picture: 'https://picsum.photos/200',
      name: 'Molina Patrick',
      mobile: '(281)169-6740',
      email: 'linda26@luna.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 58,
      picture: 'https://picsum.photos/200',
      name: 'Graves Jeffrey',
      mobile: '9875122017',
      email: 'michael54@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 59,
      picture: 'https://picsum.photos/200',
      name: 'Spencer Nathan',
      mobile: '(791)088-0840x96377',
      email: 'salinasmaria@perez-green.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 60,
      picture: 'https://picsum.photos/200',
      name: 'Gonzalez Charles',
      mobile: '247.811.8290',
      email: 'joseph03@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 61,
      picture: 'https://picsum.photos/200',
      name: 'Hunter Christie',
      mobile: '399-806-9673x029',
      email: 'powellangela@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 62,
      picture: 'https://picsum.photos/200',
      name: 'Bass Eileen',
      mobile: '+1-599-004-8315x59075',
      email: 'sandersjames@hotmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 63,
      picture: 'https://picsum.photos/200',
      name: 'Jacobs Tammie',
      mobile: '489.472.0524x585',
      email: 'rsmith@yahoo.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 64,
      picture: 'https://picsum.photos/200',
      name: 'Holland Julie',
      mobile: '667-855-4296x6701',
      email: 'williamdavis@stephens.com',
      isActive: false,
      isAdmin: true
    },
    {
      id: 65,
      picture: 'https://picsum.photos/200',
      name: 'Arellano Natalie',
      mobile: '776-384-1014x0340',
      email: 'johnmendoza@hotmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 66,
      picture: 'https://picsum.photos/200',
      name: 'Russell Gregory',
      mobile: '9338962179',
      email: 'duranmichael@hotmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 67,
      picture: 'https://picsum.photos/200',
      name: 'Whitehead Carolyn',
      mobile: '(697)072-2586x65570',
      email: 'sreed@wise.net',
      isActive: true,
      isAdmin: true
    },
    {
      id: 68,
      picture: 'https://picsum.photos/200',
      name: 'Baird Jeremy',
      mobile: '237.618.4334x66818',
      email: 'theresathomas@hinton-camacho.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 69,
      picture: 'https://picsum.photos/200',
      name: 'Burns Teresa',
      mobile: '9091447487',
      email: 'rebecca12@hotmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 70,
      picture: 'https://picsum.photos/200',
      name: 'Jordan Joseph',
      mobile: '595.421.1581x4742',
      email: 'dspears@mcgee-mccoy.info',
      isActive: true,
      isAdmin: false
    },
    {
      id: 71,
      picture: 'https://picsum.photos/200',
      name: 'Hoffman Timothy',
      mobile: '966.930.5349x226',
      email: 'brownmicheal@yahoo.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 72,
      picture: 'https://picsum.photos/200',
      name: 'Gutierrez Connie',
      mobile: '+1-292-998-4280x140',
      email: 'amber78@gmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 73,
      picture: 'https://picsum.photos/200',
      name: 'Bell Angela',
      mobile: '437-809-2620x4912',
      email: 'yhansen@peterson-robles.info',
      isActive: true,
      isAdmin: true
    },
    {
      id: 74,
      picture: 'https://picsum.photos/200',
      name: 'Mann Brenda',
      mobile: '+1-523-602-1216x4521',
      email: 'cindy41@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 75,
      picture: 'https://picsum.photos/200',
      name: 'Thomas Karen',
      mobile: '376-211-8533x87122',
      email: 'barbaramiller@cooper.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 76,
      picture: 'https://picsum.photos/200',
      name: 'Davis Teresa',
      mobile: '001-664-068-3376',
      email: 'lauren09@hotmail.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 77,
      picture: 'https://picsum.photos/200',
      name: 'Holt Amanda',
      mobile: '+1-301-151-0963x892',
      email: 'laura33@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 78,
      picture: 'https://picsum.photos/200',
      name: 'Martin Megan',
      mobile: '277.018.1388x871',
      email: 'pjacobs@gmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 79,
      picture: 'https://picsum.photos/200',
      name: 'Figueroa Christopher',
      mobile: '798-165-8512',
      email: 'xmiddleton@gmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 80,
      picture: 'https://picsum.photos/200',
      name: 'Byrd Megan',
      mobile: '001-422-859-3775x18586',
      email: 'gregory15@hotmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 81,
      picture: 'https://picsum.photos/200',
      name: 'Chan Kelly',
      mobile: '128-067-0168x895',
      email: 'rmoreno@hotmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 82,
      picture: 'https://picsum.photos/200',
      name: 'House Daniel',
      mobile: '001-792-659-6407x51296',
      email: 'brenda44@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 83,
      picture: 'https://picsum.photos/200',
      name: 'Allen Luis',
      mobile: '198-861-7999x0338',
      email: 'benjaminmoore@jackson.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 84,
      picture: 'https://picsum.photos/200',
      name: 'Sanders Brittany',
      mobile: '047-992-1728x809',
      email: 'wallerpamela@hotmail.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 85,
      picture: 'https://picsum.photos/200',
      name: 'Quinn Rebecca',
      mobile: '567.216.8118x77366',
      email: 'amanda86@hotmail.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 86,
      picture: 'https://picsum.photos/200',
      name: 'Peterson Ashley',
      mobile: '001-615-227-8005x4410',
      email: 'bonnie18@yahoo.com',
      isActive: false,
      isAdmin: true
    },
    {
      id: 87,
      picture: 'https://picsum.photos/200',
      name: 'Floyd Aaron',
      mobile: '130-847-6228',
      email: 'robertlopez@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 88,
      picture: 'https://picsum.photos/200',
      name: 'Stone Collin',
      mobile: '560-091-1626',
      email: 'valdezalexander@rodriguez-castaneda.biz',
      isActive: true,
      isAdmin: true
    },
    {
      id: 89,
      picture: 'https://picsum.photos/200',
      name: 'Hahn Andrea',
      mobile: '001-199-141-6306',
      email: 'lisa20@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 90,
      picture: 'https://picsum.photos/200',
      name: 'Barker Veronica',
      mobile: '+1-458-593-8220x63774',
      email: 'rachelyu@potter.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 91,
      picture: 'https://picsum.photos/200',
      name: 'Williams Sean',
      mobile: '+1-132-855-7622',
      email: 'monicavalentine@lyons.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 92,
      picture: 'https://picsum.photos/200',
      name: 'Rice Kimberly',
      mobile: '(044)076-1972x729',
      email: 'dgonzalez@larsen.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 93,
      picture: 'https://picsum.photos/200',
      name: 'Oliver Shannon',
      mobile: '(709)166-6168x111',
      email: 'michellewinters@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 94,
      picture: 'https://picsum.photos/200',
      name: 'Foster Victoria',
      mobile: '001-016-134-0950x772',
      email: 'chungashlee@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 95,
      picture: 'https://picsum.photos/200',
      name: 'Perez Eric',
      mobile: '954.690.5186x98692',
      email: 'micheal99@james.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 96,
      picture: 'https://picsum.photos/200',
      name: 'Gomez Heather',
      mobile: '(420)922-5735',
      email: 'harrisjeffrey@yahoo.com',
      isActive: false,
      isAdmin: false
    },
    {
      id: 97,
      picture: 'https://picsum.photos/200',
      name: 'Ruiz Daniel',
      mobile: '362.865.7609',
      email: 'pennygraves@yahoo.com',
      isActive: true,
      isAdmin: true
    },
    {
      id: 98,
      picture: 'https://picsum.photos/200',
      name: 'Mayo Stephen',
      mobile: '7335088950',
      email: 'barrbrandon@hotmail.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 99,
      picture: 'https://picsum.photos/200',
      name: 'Vargas Christy',
      mobile: '160-512-7521x410',
      email: 'amandajames@perez.com',
      isActive: true,
      isAdmin: false
    },
    {
      id: 100,
      picture: 'https://picsum.photos/200',
      name: 'Christian Cindy',
      mobile: '001-168-365-7367x16168',
      email: 'tranandrew@nolan-day.com',
      isActive: true,
      isAdmin: false
    }];

  displayUsers: User[] = [];
  memberBtn = 'selected';
  adminBtn = '';

  constructor() { }

  ngOnInit(): void {
    this.displayUsers = this.users;
  }


  getAllUsers(): User[] {
    this.adminBtn = '';
    this.memberBtn = 'selected';
    return this.displayUsers = this.users;
  }

  getAllAdmins(): User[]
  {
    const adminList = [];
    for (const u of this.users) {
      if (u.isAdmin) { adminList.push(u); }
    }
    this.adminBtn = 'selected';
    this.memberBtn = '';
    return this.displayUsers = adminList;
  }


  sortBy(p: string): User[] {
    let hasBeenSort = false;
    this.displayUsers.sort((a, b) => {
      if (a[p].toLowerCase() < b[p].toLowerCase()) {
        hasBeenSort = true;
        return -1;
      }
    });
    if (hasBeenSort === false)  {this.displayUsers.sort().reverse(); }
    return this.displayUsers;
  }
}
