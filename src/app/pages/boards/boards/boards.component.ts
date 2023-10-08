import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: []
})
export class BoardsComponent implements OnInit {

  faTrello = faTrello;
  faWaveSquare = faWaveSquare;
  faBox = faBox;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
  constructor() { }

  ngOnInit() {
  }

}
