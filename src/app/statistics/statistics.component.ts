import { Component, OnInit } from '@angular/core';
import {playersService} from "../playersService.service";
import {player} from "../player.model";
import {StorageService} from "../storageService.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  topScorers: player[];
  topAssists:player[];
  dataFromLocalStorage;

  constructor(private playerService: playersService,private storageService: StorageService) {}

  ngOnInit() {
    if (this.getDataFromLocalStorage() === false) {
      this.topScorers = this.playerService.getGoalLeadersAfterLoading();
      this.topAssists = this.playerService.getAssistslLeadersAfterLoading();
    }
  }
  onRefresh() {
    const dataToLocalStorage = {'topScorers': this.topScorers , 'topAssists': this.topAssists};
    this.storageService.write('topData', dataToLocalStorage);
  }

  getDataFromLocalStorage() {
    this.dataFromLocalStorage = this.storageService.read('topData');
    if (this.dataFromLocalStorage !== null ) {
      this.topScorers = this.dataFromLocalStorage['topScorers'];
      this.topAssists = this.dataFromLocalStorage['topAssists'];
    }
    else{
      return false;}
  }
}
