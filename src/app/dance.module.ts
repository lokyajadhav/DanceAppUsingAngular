import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanceRoutingModule } from './dance-routing.module';
import { GetDancesComponent } from './get-dances/get-dances.component';
import { AddDancesComponent } from './add-dances/add-dances.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GetDancesComponent,
    AddDancesComponent,

  ],
  imports: [
    CommonModule,
    DanceRoutingModule,
    FormsModule,

  ]
})
export class DanceModule { }
