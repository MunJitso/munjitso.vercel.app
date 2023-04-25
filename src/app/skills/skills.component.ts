import { Component } from '@angular/core';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import { faBrush, faComputer, faCode, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor(){}
  faLinux = faLinux;
  faBrush = faBrush;
  faComputer = faComputer;
  faCode = faCode;
  faGear = faGear
}
