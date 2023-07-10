import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDancesComponent } from './get-dances/get-dances.component';
import { AddDancesComponent } from './add-dances/add-dances.component';
import { UpdateDanceComponent } from './update-dance/update-dance.component';

const routes: Routes = [
  {path:'getDances', component:GetDancesComponent, children:[{path: ':id', component: UpdateDanceComponent }]},
  {path:'addDance',component: AddDancesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanceRoutingModule { }
