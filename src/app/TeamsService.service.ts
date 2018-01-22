import {EventEmitter, Injectable} from "@angular/core";
import {Team} from "./team.model";
import 'rxjs/Rx';
import {httpService} from "./httpService.service";

@Injectable()
export class TeamsService {
  constructor(private httpService: httpService) {}

  private teamsUrl = "https://my-project-c46a9.firebaseio.com/Teams.json";
  teamChanged = new EventEmitter<Team[]>();
  showTeamDetails = new EventEmitter<number>();
  editTeam =  new EventEmitter<number>();
  private teams: Team[]  ;

  getTeams(): Promise<any> {
     return this.httpService.getDataFromServer(this.teamsUrl).then((data) => {
      this.teams = data;
      return this.teams.slice();
    })
      .catch(error => {
        console.log("error in get teams :" + error);
      });
  }
  getTeams2() {
    return this.teams.slice();
  }
  getTeam(i: number) {
    return this.teams[i];
}
  updateTeam(teamId: number , team: Team) {
    this.teams[teamId] = team;
    this.teamChanged.emit(this.teams.slice());
}
}

