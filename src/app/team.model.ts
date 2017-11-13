export class Team {
  public name: string;
  public status: string;
  public imageUrl: string;
  public coach: string;
  public defencePlayers: string[] ;
  public midfieldPlayers: string[] ;
  public attackPlayers: string[] ;

  constructor(name: string, status: string, imageUrl: string, coach: string) {
    this.name = name;
    this.status = status;
    this.imageUrl = imageUrl;
    this.coach = coach;
  }
}
