import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MatCardModule } from '@angular/material/card';
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  constructor(private router: Router, public attractionService: AttractionService)
  {}

  goToDetails(id: number | null | undefined) {
    this.router.navigate(['/attraction/', id]);
  }

  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()
}
