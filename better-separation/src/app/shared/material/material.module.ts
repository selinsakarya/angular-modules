import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
