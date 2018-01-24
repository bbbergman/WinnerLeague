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
import { TopPlayersComponent } from './top-players/top-players.component';
import {playersService} from "./playersService.service";
import {HttpModule} from "@angular/http";
import {httpService} from "./httpService.service";
import {StorageService} from "./storageService.service";
import * as $ from 'jquery';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

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
    CartComponent,
    TopPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    HttpModule,
    ScrollToModule.forRoot()
  ],
  providers: [TeamsService, AuthService, ShoppingItemService,playersService,httpService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
