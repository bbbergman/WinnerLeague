import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import {httpService} from "../httpService.service";
import {form} from "../form.model";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
cities = ['Kiriat Ono', 'Tel Aviv', 'Haifa'];
genders = ['male', 'female'];
formToSubmit;
formsUrl = "https://my-project-c46a9.firebaseio.com/form.json";
  constructor(private router: Router, public modal: Modal,private httpService:httpService) { }

  ngOnInit() {
  }

  onSubmit(formData: NgForm) {
    let name = formData.value.name;
    let email = formData.value.email;
    let city = formData.value.city;
    let comment = formData.value.comment;
    let gender = formData.value.gender;
    this.formToSubmit  = new form(name,email,city,comment,gender);
       this.httpService.storeForm(this.formsUrl,this.formToSubmit)
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
    const dialogRef = this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('form submitted successfully!')
      .body('thank you')
      .open();
    this.router.navigate(['']);
}

}
