import {EventEmitter} from "@angular/core";
import {Team} from "./team.model";

export class TeamsService {
  teamChanged = new EventEmitter<Team[]>();
  showTeamDetails = new EventEmitter<number>();
  editTeam =  new EventEmitter<number>();
  private teams: Team[] = [
    {
      name: 'Maccabi Haifa',
      status: 'in progress',
      imageUrl: 'http://mhaifafc.com/images/logo_big.png',
      TeamImageUrl:'https://img.wcdn.co.il/f_auto,w_700/2/4/6/4/2464380-46.jpg',
      coach: 'Guy Lozon',
      defencePlayers: ['dekel kinan', 'dos santos'],
      midfieldPlayers: ['alberman'],
      attackPlayers: ['klaus']
    },
    {
      name: 'Hapoel Tel Aviv',
      status: 'league2',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Hapoel_Tel_Aviv_New_Badge.jpg',
      TeamImageUrl:'http://www.htafc.co.il/wp-content/uploads/2017/12/IMG_5752.jpg',
      coach: 'tbd',
      defencePlayers: ['player'],
      midfieldPlayers: ['player2', 'player3'],
      attackPlayers: ['hirch']
    },
    {
    name: 'Hapoel Beer Sheva',
    status: 'champions',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/he/e/eb/LogoOfHBS.png',
      TeamImageUrl:'https://img.wcdn.co.il/f_auto,w_1000/2/5/1/9/2519779-46.jpg',
      coach: 'Barak Bhachar',
      defencePlayers: ['elhamid'],
      midfieldPlayers: ['melikson', 'ohana'],
      attackPlayers: ['shahr']
    },
    {
      name: 'Maccabi Tel Aviv',
      status: '2 place',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f8/MTAFC_logo.png',
      TeamImageUrl:'https://img.wcdn.co.il/f_auto,w_700/2/4/6/2/2462939-46.jpg',
      coach: 'Jordi Kroif',
      defencePlayers: ['ben haim'],
      midfieldPlayers: ['azili'],
      attackPlayers: ['atar', 'kiartenson']
    },
    {
      name: 'Beitar Jerusalem',
      status: '3 place',
      imageUrl: 'https://img.wcdn.co.il/f_auto,w_300,t_53/2/4/5/8/2458702-46.jpg',
      TeamImageUrl:'https://img.wcdn.co.il/f_auto,w_1000/2/4/9/4/2494138-46.jpg',
      coach: '',
      defencePlayers: [''],
      midfieldPlayers: ['benayoun'],
      attackPlayers: ['shechter']
    }
  ];
  getTeams() {
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

