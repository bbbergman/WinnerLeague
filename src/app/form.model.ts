export class form {
  public name: string;
  public email: string;
  public city: string;
  public comment: string;
  public gender: string;

  constructor(name: string, email: string, city: string, comment: string,gender:string) {
    this.name = name;
    this.email = email;
    this.city = city;
    this.comment = comment;
    this.gender= gender;
  }
}
