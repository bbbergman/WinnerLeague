import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class httpService {
  constructor(private http: Http) {
  }

  getDataFromServer(url:string): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then((res) => {
       const data = res.json();
        return data;
      })
      .catch(error => {
        throw new Error(error);
      });
  }
}
