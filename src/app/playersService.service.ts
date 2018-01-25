import {player} from "./player.model";
import {httpService} from "./httpService.service";
import {Injectable} from "@angular/core";

@Injectable()
export class playersService {
  constructor(private httpService: httpService) {}

  private playersUrl = "https://my-project-c46a9.firebaseio.com/Players.json";
  private goalLeadersUrl = "https://my-project-c46a9.firebaseio.com/GoalLeaders.json";
  private assistsLeadersUrl = "https://my-project-c46a9.firebaseio.com/AssistsLeaders.json";

  private players: player[];
  private goalLeaders:player[];
  private assistsLeaders:player[];

  getPlayers(): Promise<any> {
    return this.httpService.getDataFromServer(this.playersUrl).then((data) => {
      this.players = data;
    })
      .catch(error => {
        console.log("error in get players :"+error);
      });
  }

  getGoalLeaders(): Promise<any> {
    return this.httpService.getDataFromServer(this.goalLeadersUrl).then((data) => {
      this.goalLeaders = data;
    })
      .catch(error => {
        console.log("error in get goalLeaders :"+error);
      });
  }
  getAssistsLeaders(): Promise<any> {
    return this.httpService.getDataFromServer(this.assistsLeadersUrl).then((data) => {
      this.assistsLeaders = data;
    })
      .catch(error => {
        console.log("error in get assistsLeaders :"+error);
      });
  }

  getPlayersAfterLoading() {
    return this.players.slice();
  }
  getPlayer(i: number) {
    return this.players[i];
  }
  getGoalLeadersAfterLoading() {
    return this.goalLeaders.slice();
  }
  getAssistslLeadersAfterLoading() {
    return this.assistsLeaders.slice();
  }
}

