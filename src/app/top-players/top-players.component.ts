import { Component, OnInit } from '@angular/core';
import {playersService} from "../playersService.service";
import {player} from "../player.model";
import {StorageService} from "../storageService.service";

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  showPlayerDetails = false;
  players: player[] = [];
  player: player;
  dataFromLocalStorage;

  constructor(private playersService: playersService,private storageService : StorageService) {
  }

  ngOnInit() {
    // this.playersService.getPlayers().then((data) => {
    //   this.players = data;
    // });
    if (this.getDataFromLocalStorage() === false) {
      this.players = this.playersService.getPlayersAfterLoading();
    }
  }

  getDetails(index: number) {
    this.showPlayerDetails = true;
    this.player = this.players[index];
  }

  getFontColor(player: player) {
    switch(player.team) {
      case 'hapoel beer sheva':
       return 'red';
      case 'maccabi tel aviv':
        return 'yellow';
      case 'maccabi haifa':
        return 'white';
      case 'beitar jerusalem':
        return 'yellow';
    }
  }

  getBackgroundColor(player: player) {
    switch(player.team) {
      case 'hapoel beer sheva':
        return 'black';
      case 'maccabi tel aviv':
        return 'darkblue';
      case 'maccabi haifa':
        return 'green';
      case 'beitar jerusalem':
        return 'black';
    }
  }

  onRefresh() {
    const dataToLocalStorage = {'players': this.players};
    this.storageService.write('playersData', dataToLocalStorage);
  }
  getDataFromLocalStorage() {
    this.dataFromLocalStorage = this.storageService.read('playersData');
    if (this.dataFromLocalStorage !== null ) {
      this.players = this.dataFromLocalStorage['players'];
    } else {
      return false; }}
}

