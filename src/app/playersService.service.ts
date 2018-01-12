import {player} from "./player.model";

export class playersService {
  private players: player[] = [
    {
      name: 'Maor Melikson',
      team: 'hapoel beer sheva',
      goals: 3,
      assists: 5,
      firstImageUrl:"https://d3jv0e4bp39jgm.cloudfront.net/wp-content/themes/kingclub-theme/images/players/45792.png",
      secondImageUrl: 'http://b7net.co.il/dyncontent/Old/b7net/dyncontent/t_post/2016/11/8/573225700430413241636.jpg',
      clubLogoUrl:'https://upload.wikimedia.org/wikipedia/he/e/eb/LogoOfHBS.png',
      bio: 'Maor Melikson (Hebrew: מאור מליקסון‎; born 30 October 1984 in Yavne) is an Israeli footballer who plays as a midfielder for Hapoel Beer Sheva and the Israel national football team'
    },
    {
      name: 'Dor Micha',
      team: 'maccabi tel aviv',
      goals: 0,
      assists: 6,
      firstImageUrl:"https://d3jv0e4bp39jgm.cloudfront.net/wp-content/themes/kingclub-theme/images/players/127665.png",
      secondImageUrl: 'https://img.wcdn.co.il/f_auto,w_700/2/4/6/4/2464353-46.jpg',
      clubLogoUrl:'https://upload.wikimedia.org/wikipedia/en/f/f8/MTAFC_logo.png',
      bio:'Dor Micha (or Dor Miha, Hebrew: דור מיכה‎; born March 2, 1992), is an Israeli footballer who plays as a midfielder for Israeli football club Maccabi Tel Aviv. Micha can play either at the right or left side of the midfield'
    },
    {
      name: 'Anthony Nwakaemea',
      team: 'hapoel beer sheva',
      goals: 13,
      assists: 2,
      firstImageUrl:"https://d3jv0e4bp39jgm.cloudfront.net/wp-content/themes/kingclub-theme/images/players/118011.png",
      secondImageUrl: 'https://img.wcdn.co.il/f_auto,w_700,t_18/2/5/1/0/2510659-46.jpg',
      clubLogoUrl:'https://upload.wikimedia.org/wikipedia/he/e/eb/LogoOfHBS.png',
      bio:'Anthony Nwakaeme (born 21 March 1989), also known as Tony, is a Nigerian footballer who plays as a Forward for Hapoel Beer Sheva in Israeli Premier League'
}
  ];
  getPlayers() {
    return this.players.slice();
  }
  getPlayer(i: number) {
    return this.players[i];
  }
}

