import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients:any[]=[
    {name:'aditya',bloodgroup:'A+',address:'Hyderabad',ContactNumber:'1222121222'},
    {name:'wendy',bloodgroup:'AB+',address:'Shimla',ContactNumber:'2211334455'},
    {name:'Chandru',bloodgroup:'B+',address:'delhi',ContactNumber:'3322114422'},
    {name:'Vendiya',bloodgroup:' O-',address:'Banglore',ContactNumber:'5544663322'},
    {name:'Gogkul',bloodgroup:'AB-',address:'manali',ContactNumber:'3322114455'},
    {name:'lavnya',bloodgroup:'O+',address:'Mysore',ContactNumber:'3421356421'}
  ];
  private patientSubject:BehaviorSubject<any[]>=new BehaviorSubject<any[]>(this.patients)
    getEmployees():Observable<any[]>{
      return this.patientSubject.asObservable();
    }

  constructor() { }
}
