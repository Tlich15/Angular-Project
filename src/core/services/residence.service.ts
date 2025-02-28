import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Residence } from '../models/Residence';


@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor( private http: HttpClient) { }

  residenceUrl ='http://localhost:3000/residences';


  getresidences(){
    return this.http.get<Residence[]>(this.residenceUrl);
}

addResidence(residence: Residence){
  return this.http.post(this.residenceUrl, residence);
}
}
