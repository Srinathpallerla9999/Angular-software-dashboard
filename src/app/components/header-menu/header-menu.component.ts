import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  constructor() { }

  userName: string = "Srinath Pallerla"
  userDetails = ["Profile Details", "Other Details", "Contacts"]
  languages = ["English", "Hindi", "Telugu", "Kannada", "Tamil", "Malyalam", "Gujarathi"]
  selectedLanguage: string = this.languages[0];
  
  ngOnInit(): void {
  }


}
