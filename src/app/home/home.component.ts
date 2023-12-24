import { Component } from '@angular/core';
import { faDiscord, faFacebook, faTwitter, faTelegram, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase,faCakeCandles, faUser, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { ToggleserviceService } from '../toggleservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  toggle : ToggleserviceService
  constructor(private toggleService: ToggleserviceService){
    this.toggle = toggleService
  }
  
  discord = faDiscord
  facebook = faFacebook
  instagram = faInstagram
  telegram = faTelegram
  twitter = faTwitter
  youtube = faYoutube
  birthday = faCakeCandles
  name = faUser
  occupation = faBriefcase
  languages = faLanguage

  infoCard = [
    {
      title : "Mohamed Amine Belkacem",
      icon : this.name
    },
    {
      title : "21 November 2005",
      icon : this.birthday
    },
    {
      title : "Student",
      icon : this.occupation
    },
    {
      title : "Arabic - English - French",
      icon : this.languages
    }
  ]

  ngOnInit(): void {
    this.runScript();
  }
  possessions = ["a novice full-stack dev", "Moroccan", "an engineering student at ENSA-K","an enthusiast", "a cybersecurity nerd"];
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
