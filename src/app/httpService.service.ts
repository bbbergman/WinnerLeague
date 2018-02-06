import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

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
  saveDataToServer(url,data){
    return this.http.put(url,data)
      .catch(this.handleError);
  }
    storeForm(url,form) {
       return this.http.post(url,form)
         .catch(this.handleError);

    }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
