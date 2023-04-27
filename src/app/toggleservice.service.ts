import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleserviceService {
  constructor() {
    if(localStorage.getItem('isToggled') === null){
      localStorage.setItem('isToggled', JSON.stringify(false))
    }
  }

  getToggledState() {
    return JSON.parse(localStorage.getItem('isToggled') || 'true');
  }
  toggle() {
    const isToggled = !this.getToggledState();
    localStorage.setItem('isToggled', JSON.stringify(isToggled))
  }
}
