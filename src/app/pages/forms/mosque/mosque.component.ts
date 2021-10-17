import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-mosque',
  styleUrls: ['./mosque.component.scss'],
  templateUrl: './mosque.component.html',
})
export class MosqueComponent {
  public mosque: mosque;
  public result: string;
  public ersal() {
   alert("ثبت شد.");
  }
}
interface mosque {
  mosqueName: string;
  Address: string;
  populationAverage: string;
  city: string;
  region: string;
  district: string;
  entryUser: string;
  entryDate: string;
}
