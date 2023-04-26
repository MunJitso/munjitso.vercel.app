import { Component } from '@angular/core';
import { faBrush, faComputer, faCode, faGear } from '@fortawesome/free-solid-svg-icons';
import { ToggleserviceService } from '../toggleservice.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  toggle : ToggleserviceService
  constructor(private toggleService: ToggleserviceService){
    this.toggle = toggleService
  }
  faBrush = faBrush;
  faComputer = faComputer;
  faCode = faCode;
  faGear = faGear
  

  skillsCard = [
    {
      title : "OPERATING SYSTEMS",
      element : "Windows - Linux",
      icon : this.faComputer
    },
    {
      title : "FRONT-END",
      element : "HTML - CSS - JavaScript - Angular - Tailwind CSS",
      icon : this.faBrush
    },
    {
      title : "BACK-END",
      element : "Spring Boot",
      icon : this.faGear
    },
    {
      title : "PROGRAMMING LANGUAGES",
      element : "Python - Rust - Java - TypeScript - Bash",
      icon : this.faCode
    }
  ]
}
