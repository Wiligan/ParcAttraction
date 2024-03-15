import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CritiqueInterface} from "../Interface/critique.interface";
import {DataService} from "./data.service";
import {AttractionInterface} from "../Interface/attraction.interface";
import {MessageInterface} from "../Interface/message.interface";

@Injectable({
  providedIn: 'root'
})
export class CritiqueService {

  constructor(private dataService: DataService) { }

  public getCritiquesAttraction(attractionID: string | null) : Observable<CritiqueInterface[]> {
    const url = "http://127.0.0.1:5000/attraction/critiques/" + attractionID
    const data = this.dataService.getData(url);
    return data as Observable<CritiqueInterface[]>;
  }

  public postCritiquesAttraction(critique: CritiqueInterface): Observable<MessageInterface> {
    console.log("Test", critique);
    const url = "http://127.0.0.1:5000/critique";
    const data = this.dataService.postData(url, critique);
    return data as Observable<MessageInterface>;
  }

}
