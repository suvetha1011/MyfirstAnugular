import { Component,OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  patients:any[]=[];
constructor(private patientService:PatientService){}
ngOnInit(){
  this.patientService.getEmployees().subscribe((data)=>{
    this.patients=data;
  });
}

}
