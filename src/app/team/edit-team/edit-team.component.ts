import { Component, OnInit } from '@angular/core';
import {TeamsService} from "../../TeamsService.service";
import {Team} from "../../team.model";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {httpService} from "../../httpService.service";

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamToEdit: Team ;
  teamId: number;
  teamsDataUrl ="https://my-project-c46a9.firebaseio.com/Teams";

  constructor(private teamsService: TeamsService, private router: Router, private routh: ActivatedRoute) {}

  ngOnInit() {
    this.teamId = this.routh.snapshot.params['id'];
    console.log(this.teamId);
    this.teamToEdit = this.teamsService.getTeam(this.teamId);
  }
  onSubmit(form: NgForm) {
    this.teamToEdit.status = form.value.teamStatus;
    this.teamToEdit.coach = form.value.teamCoach;
    this.teamToEdit.defencePlayers = form.value.defencePlayers;
    this.teamToEdit.midfieldPlayers = form.value.midfieldPlayers;
    this.teamToEdit.attackPlayers = form.value.attackPlayers;
    this.teamsService.updateTeamsDataOnServer();
    this.router.navigate(['teams']);
}

}
