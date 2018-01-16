import {Component, OnInit} from '@angular/core';
import {TeamsService} from "./TeamsService.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as firebase from 'firebase';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  constructor(private router: Router, private routh: ActivatedRoute , public authService: AuthService) {}
  ngOnInit() {
    firebase.initializeApp({apiKey: 'AIzaSyCzxAI0qc-3qmObiUNvOWVmnu-h8_C-UIk',
                                    authDomain: 'my-project-c46a9.firebaseapp.com'});
  }

  onLogout() {
   this.authService.logout();
  }
}
