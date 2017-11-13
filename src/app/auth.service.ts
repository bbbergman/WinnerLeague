import * as firebase from 'firebase' ;
import {Router} from "@angular/router";
import {Injectable, ViewContainerRef } from "@angular/core";
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

@Injectable()
export class AuthService {
  token: string;

  constructor (private router: Router, public modal: Modal) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['']);
          const dialogRef = this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('sign in successfully')
            .body('enjoy')
            .open();
        }
      )
      .catch(error => {
        console.log(error);
    const dialogRef = this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Error!')
      .body(error)
      .open();
      });
  }
    signInUser(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
          response => {
            this.router.navigate(['']);
            console.log(response)
            firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token);
            const dialogRef = this.modal.alert()
              .size('lg')
              .showClose(true)
              .title('you are logged In!')
              .body('enjoy')
              .open();
          })
        .catch(error => {
          console.log(error);
      const dialogRef = this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Error!')
        .body(error)
        .open();
        });
  }
  isAuthenticated() {
    return this.token != null;
  }
  logout() {
    firebase.auth().signOut();
    this.token = null ;
    const dialogRef = this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('logged out successfully!')
      .body('')
      .open();
    this.router.navigate(['']);
  }
}
