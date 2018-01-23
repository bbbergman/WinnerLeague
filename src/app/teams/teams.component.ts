import { Component, OnInit } from '@angular/core';
import {TeamsService} from "../TeamsService.service";
import {Team} from "../team.model";
import {StorageService} from "../storageService.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  filteredStatus: '';
  teams: Team[] = [];
  dataFromLocalStorage;
  constructor(private teamsService: TeamsService,private storageService : StorageService) {}
  ngOnInit() {
     // this.teamsService.getTeams().then((data) => {
     //   this.teams = data;
     // });
    if (this.getDataFromLocalStorage() === false) {
      this.teams = this.teamsService.getTeamsAfterLoading();
    }
    // this.teamsService.teamChanged.subscribe((teams: Team[]) => {this.teams = teams; }) ;
  }

  onTeamClick(i: number) {
    this.teamsService.showTeamDetails.emit(i);
}

  onRefresh() {
    const dataToLocalStorage = {'teams': this.teams};
    this.storageService.write('teamsData', dataToLocalStorage);
  }
  getDataFromLocalStorage() {
    this.dataFromLocalStorage = this.storageService.read('teamsData');
    if (this.dataFromLocalStorage !== null ) {
      this.teams = this.dataFromLocalStorage['teams'];
    } else {
      return false; }}

}
