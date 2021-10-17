import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';


@Component({
  selector: 'ngx-report-mosque',
  templateUrl: './report-mosque.component.html',
  styleUrls: ['./report-mosque.component.scss']
})
export class ReportMosqueComponent  {

}
