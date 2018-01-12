import { Component, OnInit } from '@angular/core';
import {playersService} from "../playersService.service";
import {player} from "../player.model";

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  showPlayerDetails = false;
  players: player[] = [];
  player: player;

  constructor(private playersService: playersService) {
  }

  ngOnInit() {
    this.players = this.playersService.getPlayers();
  }

  getDetails(index: number) {
    this.showPlayerDetails = true;
    this.player = this.players[index];
  }

  getFontColor(player: player) {
    return player.team === 'hapoel beer sheva' ? 'red' : 'yellow';

  }

  getBackgroundColor(player: player) {
    return player.team === 'hapoel beer sheva' ? 'black' : 'darkblue';
  }
}
