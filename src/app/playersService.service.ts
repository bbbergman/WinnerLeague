import {player} from "./player.model";
import {httpService} from "./httpService.service";
import {Injectable} from "@angular/core";

@Injectable()
export class playersService {
  constructor(private httpService: httpService) {}

  private playersUrl = "https://my-project-c46a9.firebaseio.com/Players.json";
  private players: player[];

  getPlayers(): Promise<any> {
    return this.httpService.getDataFromServer(this.playersUrl).then((data) => {
      this.players = data;
    })
      .catch(error => {
        console.log("error in get players :"+error);
      });
  }

  getPlayersAfterLoading() {
    return this.players.slice();
  }
  getPlayer(i: number) {
    return this.players[i];
  }
}

