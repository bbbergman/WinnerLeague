import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
cities = ['Kiriat Ono', 'Tel Aviv', 'Haifa'];
genders = ['male', 'female'];
  constructor(private router: Router, public modal: Modal) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value.name);
    const dialogRef = this.modal.confirm()
      .size('lg')
      .showClose(true)
      .title('form submitted successfully!')
      .body('thank you')
      .open();
    this.router.navigate(['']);
}

}
