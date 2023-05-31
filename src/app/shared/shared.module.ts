import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './components/star-rating/star-rating.component';



@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     StarRatingComponent,
  ]
})
export class SharedModule { }
