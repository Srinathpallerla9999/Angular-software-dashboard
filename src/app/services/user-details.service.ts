import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }
  userData: any = []

  getUserDetails() {
    this.http.get(environment.userDetails).subscribe((res: any) => {
      this.userData = res
    })
  }

}
