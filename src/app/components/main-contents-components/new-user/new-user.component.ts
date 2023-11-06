import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

    constructor(public userDetails: UserDetailsService) { }

    ngOnInit(): void {
    }

    getProgressColor(progress: number): string {
        if (progress <= 25) {
            return 'bg-danger'; // Red
        } else if (progress <= 50) {
            return 'bg-warning'; // Yellow
        } else if (progress <= 75) {
            return 'bg-info'; // Blue
        } else {
            return 'bg-success'; // Green
        }
    }
}
