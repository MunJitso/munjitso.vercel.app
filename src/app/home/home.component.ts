import { Component } from '@angular/core';
import { faDiscord, faFacebook, faTwitter, faTelegram, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  discord = faDiscord
  facebook = faFacebook
  instagram = faInstagram
  telegram = faTelegram
  twitter = faTwitter
  youtube = faYoutube
  ngOnInit(): void {
    this.runScript();
  }
  possessions = ["a novice full-stack dev", "Moroccan", "high-school student ","an enthusiast"];
  possession = this.possessions[0]
  async runScript(){
    let i = 0;
      while(true){
        if (i >= this.possessions.length) {
          i = 0;
        } else {
          this.possession = this.possessions[i]
          await new Promise(resolve => setTimeout(resolve, 3000))
          i++
        }
      }
    }
  }
