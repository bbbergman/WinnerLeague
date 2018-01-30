import {Component, OnInit} from '@angular/core';
import {TeamsService} from "./TeamsService.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as firebase from 'firebase';
import {AuthService} from "./auth.service";
import {playersService} from "./playersService.service";
import {ShoppingItemService} from "./shoppingItemService.service";
import {StorageService} from "./storageService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  dataFromLocalStorage;

  constructor(private router: Router, private routh: ActivatedRoute, public authService: AuthService,
              private teamsService: TeamsService, private playersService: playersService,
              private shoppingItemService: ShoppingItemService, private storageService: StorageService) {
  }

  ngOnInit() {
    this.getDataFromLocalStorage();
    firebase.initializeApp({
      apiKey: 'AIzaSyCzxAI0qc-3qmObiUNvOWVmnu-h8_C-UIk',
      authDomain: 'my-project-c46a9.firebaseapp.com'
    });
    this.teamsService.getTeams();
    this.playersService.getPlayers();
    this.shoppingItemService.getShoppingItems();
    this.playersService.getGoalLeaders();
    this.playersService.getAssistsLeaders();
  }

  onLogout() {
    this.authService.logout();
  }

  onRefresh() {
    const dataToLocalStorage = {'token': this.authService.token};
    this.storageService.write('loginData', dataToLocalStorage);
  }

  getDataFromLocalStorage() {
    this.dataFromLocalStorage = this.storageService.read('loginData');
    if (this.dataFromLocalStorage !== null) {
      this.authService.setToken(this.dataFromLocalStorage['token']);
    }
  }
}

