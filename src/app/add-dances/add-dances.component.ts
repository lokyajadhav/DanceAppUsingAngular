import { Component,OnInit} from '@angular/core';
import { Dance } from '../Models/Dance';
import { DanceServiceService } from '../dance-service.service';

@Component({
  selector: 'app-add-dances',
  templateUrl: './add-dances.component.html',
  styleUrls: ['./add-dances.component.css']
})
export class AddDancesComponent implements OnInit {
  message!:string;
  dance:any={
    id:3123213,
    name:'',
    state_of_origin:''
  }
  

  constructor(private danceService: DanceServiceService){
  }
  ngOnInit(): void {
    
  }
  addDance()
  {
   this.danceService.addDance(this.dance).subscribe((data)=> this.message='dance added successfully')
    console.log(this.dance);
  }
}

