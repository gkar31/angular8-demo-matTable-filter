import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import  { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

const Material = [
  MatButtonModule,
  MatTableModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];


@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
