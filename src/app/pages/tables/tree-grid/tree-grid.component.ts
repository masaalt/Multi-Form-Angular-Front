import { Component, Input, Inject } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  شناسه: string;
  آدرس: string;
  نام: string;
  جمعیت?: number;
}
interface mosque {
  id: number;
  mosqueName: string;
  Address: string;
  populationAverage: string;
  city: string;
  region: string;
  district: string;
  entryUser: string;
  entryDate: string;
}
@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})

export class TreeGridComponent {
  mosqueSelected: number;
  customColumn = 'id';
  defaultColumns =
    ['mosqueName', 'Address', 'populationAverage', 'city', 'region', 'district', 'entryUser', 'entryDate'];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: Array<mosque>;
  baseUrl: string = 'https://localhost:44389/';
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  public mosques: mosque[];
  constructor(http: HttpClient,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<mosque>) {
    http.get<mosque[]>(this.baseUrl + 'api/centers/GetMosques').subscribe(result => {
      // this.data2.push(result);
      console.log(result);
      // this.data2['data']
      this.dataSource = result['data'];
      // this.dataSource = dataSourceBuilder.create(result['data']);
    }, error => console.error(error));
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }


  private data2: TreeNode<mosque>[] = [
    {
      data: {
        id: 1, mosqueName: '1.8 MB', Address: '5', populationAverage: 'dir'
        , city: '1', region: '1.8 MB', district: '5', entryUser: 'dir', entryDate: 'dir'
      },
    },
    {
      data: {
        id: 1, mosqueName: '1.8 MB', Address: '5', populationAverage: 'dir'
        , city: '1', region: '1.8 MB', district: '5', entryUser: 'dir', entryDate: 'dir'
      },
    },
  ];
  private data: TreeNode<FSEntry>[] = [
    {
      data: { شناسه: 'Projects', آدرس: '1.8 MB', جمعیت: 5, نام: 'dir' },
      children: [
        { data: { شناسه: 'project-1.doc', نام: 'doc', آدرس: '240 KB' } },
        { data: { شناسه: 'project-2.doc', نام: 'doc', آدرس: '290 KB' } },
        { data: { شناسه: 'project-3', نام: 'txt', آدرس: '466 KB' } },
        { data: { شناسه: 'project-4.docx', نام: 'docx', آدرس: '900 KB' } },
      ],
    },
    {
      data: { شناسه: 'Reports', نام: 'dir', آدرس: '400 KB', جمعیت: 2 },
    },
    {
      data: { شناسه: '1', نام: 'جامع', آدرس: 'شیراز', جمعیت: 2000 },
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
  onMosqueFilterChanged(event: any, value: number) {
  event.preventDefault();
  this.mosqueSelected = value;
}
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
