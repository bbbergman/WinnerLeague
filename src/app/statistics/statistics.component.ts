import { Component, OnInit } from '@angular/core';
import {playersService} from "../playersService.service";
import {player} from "../player.model";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  topScorers: player[];
  topAssists:player[];

  constructor(private playerService: playersService) {}

  ngOnInit() {
    this.topScorers = this.playerService.getGoalLeadersAfterLoading();
    this.topAssists = this.playerService.getAssistslLeadersAfterLoading();
  }

}
