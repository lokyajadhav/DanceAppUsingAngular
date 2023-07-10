import { Component, OnInit } from '@angular/core';
import { DanceServiceService } from '../dance-service.service';
import { Dance } from '../Models/Dance';

@Component({
  selector: 'app-get-dances',
  templateUrl: './get-dances.component.html',
  styleUrls: ['./get-dances.component.css']
})
export class GetDancesComponent implements OnInit {
  
  
  danceList: any;
  constructor(private danceService: DanceServiceService){}
  ngOnInit(): void {
    this.danceService.getDances().subscribe((data)=> {
      this.danceList=data;
      console.log(data)
    })
  }
  deleteObjectById(id: number)
  {
    this.danceService.deleteDances(id).subscribe((data)=> {
      this.danceList=data;
      console.log(data)
    })
  }
  updateObjectById(danceid: number)
  {
      
  }
  
}
