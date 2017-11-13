import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { AppComponent } from './app.component';
import {TeamsService} from './TeamsService.service';
import {AppRoutingModule} from './app-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './team/team.component';
import { EditTeamComponent } from './team/edit-team/edit-team.component';
import {FormsModule} from "@angular/forms";
import { WelcomeComponent } from './welcome/welcome.component';
import { FilterPipe } from './filter.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from "./auth.service";
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ShopComponent } from './shop/shop.component';
import {ShoppingItemService} from "./shoppingItemService.service";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamComponent,
    EditTeamComponent,
    WelcomeComponent,
    FilterPipe,
    ContactFormComponent,
    SignupComponent,
    SignInComponent,
    ShopComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [TeamsService, AuthService, ShoppingItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
