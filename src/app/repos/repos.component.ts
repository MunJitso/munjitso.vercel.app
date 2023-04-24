import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { faJava, faPython, faJs, faHtml5, faCss3, faRust, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

interface LanguageIcons{
  [key : string] : IconDefinition
}
interface Repo {
  id : number;
  name : string;
  description: string;
  html_url:string;
  language:string;
}
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent {
  languageIcons : LanguageIcons = {
    "Java" : faJava,
    "HTML" : faHtml5,
    "CSS" : faCss3,
    "Python" : faPython,
    "Rust" : faRust,
    "JavaScript" : faJs,
    "TypeScript" : faJs
  }
  
  constructor(private apiService: ApiService, public router : Router){}
  reposList : Repo[] = [];
  names = [];
  ngOnInit(): void {
    this.apiService.getRepos().subscribe(repos => {
      this.reposList = repos;
    });
  }
} 
