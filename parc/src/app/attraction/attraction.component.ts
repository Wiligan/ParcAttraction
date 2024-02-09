import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AttractionInterface} from '../Interface/attraction.interface';
import {AttractionService} from '../Service/attraction.service';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attraction',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './attraction.component.html',
  styleUrl: './attraction.component.scss'
})
export class AttractionComponent {

  public attraction: AttractionInterface|null = null

  constructor(private route: ActivatedRoute, public attractionService: AttractionService) {
    let attractionID: string | null;
    attractionID = this.route.snapshot.paramMap.get('id');
    this.attractionService.getAttraction(attractionID).subscribe(attraction => {
      this.attraction = attraction;
    });
  }

}
