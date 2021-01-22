import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ImpactsByDateComponent } from './impacts-by-date/impacts-by-date.component';

const routes: Routes = [
  { path: '', component: AuthorizationComponent},
  { path: 'impacts-by-date', component: ImpactsByDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
