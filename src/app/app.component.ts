import { Component, Renderer2, ElementRef } from '@angular/core';
import { IconDefinition, faLightbulb, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ToggleserviceService } from './toggleservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private renderer: Renderer2, private el: ElementRef, private toggleService: ToggleserviceService){}
  title = 'portfolio'
  theme:IconDefinition = faLightbulb;
  ngOnInit():void{
    this.toggleService.toggle()
    this.changeBodyTheme()
  }
  toggleNav(target:string, replace:string, element:HTMLElement){
    this.renderer.removeClass(element, replace)
    this.renderer.addClass(element, target)

  }
  changeBodyTheme(){
    const body = this.el.nativeElement.ownerDocument.body;
    const navPc = document.getElementById("nav");
    const navPhone = document.getElementById("nav-phone");
    if(this.toggleService.getToggledState()){
      this.renderer.setAttribute(body,'class', 'nature-background');
      this.theme = faSun
      if(navPc !== null && navPhone !== null) {
        this.toggleNav("nav-nature", "nav-sakura", navPc);
        this.toggleNav("nav-nature", "nav-sakura", navPhone);}
    } else {
      this.theme = faMoon
      this.renderer.setAttribute(body,'class', 'sakura-background');
      if(navPc !== null && navPhone !== null) {
        this.toggleNav("nav-sakura","nav-nature", navPc);
         this.toggleNav("nav-sakura","nav-nature", navPhone)}
    }
    this.toggleService.toggle()
  }
}
