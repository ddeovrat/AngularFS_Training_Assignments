import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatProgressSpinnerModule,MatMenuModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatCardModule,MatToolbarModule,MatIconModule
  ],
  exports:[MatProgressSpinnerModule,MatMenuModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatCardModule,MatToolbarModule,MatIconModule]
})
export class MaterialModule { }
