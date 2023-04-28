import { Component } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ToggleserviceService } from './toggleservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  light = faSun
  dark = faMoon
  toggleVar: ToggleserviceService;
  constructor(private toggleService: ToggleserviceService){
    this.toggleVar = toggleService
  }
  title = 'portfolio'
  ngOnInit():void{
    this.toggleService.toggle()
    this.changeBodyTheme()
  }

  changeBodyTheme(){
    this.toggleService.toggle()
  }
}
