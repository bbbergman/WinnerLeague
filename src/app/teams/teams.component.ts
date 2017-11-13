import { Component, OnInit } from '@angular/core';
import {TeamsService} from "../TeamsService.service";
import {Team} from "../team.model";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  filteredStatus: '';
  teams: Team[] = [];
  constructor(private teamsService: TeamsService) {}
  ngOnInit() {
    this.teams = this.teamsService.getTeams();
    // this.teamsService.teamChanged.subscribe((teams: Team[]) => {this.teams = teams; }) ;
  }

  onTeamClick(i: number) {
    this.teamsService.showTeamDetails.emit(i);
}


}
