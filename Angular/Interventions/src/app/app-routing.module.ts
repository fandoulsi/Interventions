import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DeclarerUnProblemeComponent } from './declarer-un-probleme/declarer-un-probleme.component';

const routes: Routes = [
  { path : 'accueil', component : AccueilComponent},
  { path : '', redirectTo : 'accueil', pathMatch : 'full'},
  //{ path : '**', redirectTo : 'accueil', pathMatch : 'full'}, // Si la route est inexistant, rediriger l'utilisateur vers l'accueil.
  { path : 'declarer-un-probleme', component : DeclarerUnProblemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
