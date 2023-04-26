import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleserviceService {
  constructor() { }
  private isToggled = false;

  getToggledState(){
    return this.isToggled;
  }
  toggle(){
    this.isToggled = !this.isToggled
    console.log(this.isToggled)
  }

}
