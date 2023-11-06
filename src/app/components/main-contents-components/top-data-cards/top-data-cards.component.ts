import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-top-data-cards',
  templateUrl: './top-data-cards.component.html',
  styleUrls: ['./top-data-cards.component.scss'],

})
export class TopDataCardsComponent implements OnInit {

  constructor(public userDetails: UserDetailsService) { }

  userData: any = []
  ngOnInit(): void {
  }
}
