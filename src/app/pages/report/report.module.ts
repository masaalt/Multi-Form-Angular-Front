import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MosqueComponent } from './mosque/mosque.component';

@NgModule({
  declarations: [MosqueComponent],
  imports: [
    CommonModule,
    ReportModule
  ]
})
export class ReportModule { }
