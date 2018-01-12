import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from './app.component';
import {NgModel} from "@angular/forms";
import {NgModule} from "@angular/core";
import {TeamsComponent} from './teams/teams.component';
import {TeamComponent} from "./team/team.component";
import {EditTeamComponent} from "./team/edit-team/edit-team.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {ShopComponent} from "./shop/shop.component";
import {CartComponent} from "./cart/cart.component";
import {TopPlayersComponent} from "./top-players/top-players.component";

const appRoutes: Routes = [
  // path: '', component: AppComponent, pathMatch: 'full'},
  {path: '', component: WelcomeComponent },
  {path: 'teams', component: TeamsComponent },
  {path: 'edit/:id', component: EditTeamComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent},
  {path: 'topPlayers', component: TopPlayersComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



