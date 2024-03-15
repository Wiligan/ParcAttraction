import {Component, inject, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {CritiqueService} from "../Service/critique.service";
import {transformToCritiqueInterface} from "../Interface/critique.interface";

@Component({
  selector: 'app-critique',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    NgForOf
  ],
  templateUrl: './critique.component.html',
  styleUrl: './critique.component.scss'
})
export class CritiqueComponent {
  @Input() attraction_id: number | null = null;

  fb = inject(FormBuilder);
  http = inject(HttpClient);

  form = this.fb.nonNullable.group({
    name: [''],
    surname: [''],
    critique: ['', Validators.required],
    note: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
  });

  private critiqueService: CritiqueService;

  public constructor(critiqueService: CritiqueService) {
    this.critiqueService = critiqueService;
  }

  public addCritique() {
    if (this.form.valid) {
      const formData = transformToCritiqueInterface(this.form.value);
      console.log(this.form.value);
      if (this.attraction_id != null) {
        formData.attraction_id = this.attraction_id;
      }
      console.log(formData);
      this.critiqueService.postCritiquesAttraction(formData).subscribe();
    }
  }
}
