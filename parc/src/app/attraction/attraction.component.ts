import {Component} from '@angular/core';
import {AttractionInterface} from '../Interface/attraction.interface';
import {AttractionService} from '../Service/attraction.service';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ActivatedRoute, Router} from '@angular/router';
import {CritiqueInterface} from "../Interface/critique.interface";
import {CritiqueComponent} from "../critique/critique.component";
import {CritiqueService} from "../Service/critique.service";

@Component({
  selector: 'app-attraction',
  standalone: true,
  imports: [CommonModule, MatCardModule, CritiqueComponent],
  templateUrl: './attraction.component.html',
  styleUrl: './attraction.component.scss'
})
export class AttractionComponent {

  public attraction: AttractionInterface | null = null
  public critiques: CritiqueInterface[] | null = null;
  public hasCritics: boolean = false;

  constructor(private route: ActivatedRoute, public attractionService: AttractionService, public critiqueService: CritiqueService) {
    let attractionID: string | null;
    attractionID = this.route.snapshot.paramMap.get('id');

    this.attractionService.getAttraction(attractionID).subscribe(attraction => {
      this.attraction = attraction;
    });

    this.critiqueService.getCritiquesAttraction(attractionID).subscribe(critiques => {
      this.critiques = critiques;
      this.hasCritics = critiques.length > 0;
    })
  }
}
