import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TeamsService} from "../TeamsService.service";
import {Team} from "../team.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamId: number;
  show = false;
  team: Team;
  // @Output() teamCreated = new EventEmitter<string>();

  constructor(private teamsService: TeamsService, private router: Router, private routh: ActivatedRoute) { }

  ngOnInit() {
    this.teamsService.showTeamDetails.subscribe((teamId) => {this.teamId = teamId; this.show = true;
    this.team = this.teamsService.getTeam(teamId) ; });
  }

  editClick() {
    // this.teamsService.editTeam.emit(this.teamId);
    this.router.navigate(['/edit', this.teamId]);
  }

}
