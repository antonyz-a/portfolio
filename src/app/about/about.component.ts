import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  diplomaImage: string = "../../assets/images/diploma.jpg";
  hobbiesImage: string = "../../assets/images/hobbies.jpg"

  printWork: boolean = false;
  printEducation: boolean = true;
  printLanguage: boolean = false;
  printHobby: boolean = false;

  ngOnInit(): void {



    
  }

  workButton() {
    this.printWork = true;
    this.printEducation = false;
    this.printHobby = false;
    this.printLanguage = false;
  }

  educationButton() {
    this.printWork = false;
    this.printEducation = true;
    this.printHobby = false;
    this.printLanguage = false;
  }

  languageButton() {
    this.printWork = false;
    this.printEducation = false;
    this.printHobby = false;
    this.printLanguage = true;
  }

  hobbieButton() {
    this.printWork = false;
    this.printEducation = false;
    this.printHobby = true;
    this.printLanguage = false;
  }

}
