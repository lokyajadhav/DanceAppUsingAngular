import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDancesComponent } from './get-dances/get-dances.component';
import { AddDancesComponent } from './add-dances/add-dances.component';
import { UpdateDanceComponent } from './update-dance/update-dance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'updateDance',component: UpdateDanceComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: '',redirectTo:'/login',pathMatch:'full'},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
