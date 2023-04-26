import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import {
  faJava,
  faPython,
  faJs,
  faHtml5,
  faCss3,
  faRust,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { Router } from "@angular/router";
import { ToggleserviceService } from "../toggleservice.service";

interface LanguageIcons {
  [key: string]: IconDefinition;
}
interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}
@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.css"],
})
export class ReposComponent {
  languageIcons: LanguageIcons = {
    Java: faJava,
    HTML: faHtml5,
    CSS: faCss3,
    Python: faPython,
    Rust: faRust,
    JavaScript: faJs,
    TypeScript: faJs,
  };
  toggle : ToggleserviceService
  constructor(private apiService: ApiService, public router: Router, private toggleService: ToggleserviceService) {
  this.toggle = toggleService;
  }
  searchQuery: string = "";
  reposList: Repo[] = [];
  reposUpdated: Repo[] = [];

  ngOnInit(): void {
    this.apiService.getRepos().subscribe((repos) => {
      this.reposList = repos;
      this.reposUpdated = repos;
    });
  }

  onSearch() {
    const filteredRepos = this.reposList.filter((repo) => {
      let searchQuery = this.searchQuery;
      if (repo.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
      }
      return false;
    });
    this.reposUpdated = filteredRepos;
  }
}
