import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';

import { CenterComponent } from './center/center.component';
import { CharityComponent } from './charity/charity.component';
import { CinemaComponent } from './cinema/cinema.component';
import { ClinicComponent } from './clinic/clinic.component';
import { CultureComponent } from './culture/culture.component';
import { EntertisementComponent } from './entertisement/entertisement.component';
import { GovermentsComponent } from './goverments/goverments.component';
import { GroupComponent } from './group/group.component';
import { GymComponent } from './gym/gym.component';
import { HobbyComponent } from './hobby/hobby.component';
import { HolyShrineComponent } from './holyShrine/holyShrine.component';
import { KarevanComponent } from './karevan/karevan.component';
import { KidCenterComponent } from './kidCenter/kidCenter.component';
import { LaborComponent } from './labor/labor.component';
import { MosqueComponent } from './mosque/mosque.component';
import { ReportMosqueComponent } from './report-mosque/report-mosque.component';
import { NgoComponent } from './ngo/ngo.component';
import { OtherGroupsComponent } from './otherGroups/otherGroups.component';
import { QuranCenterComponent } from './quranCenter/quranCenter.component';
import { QuranSchoolComponent } from './quranSchool/quranSchool.component';
import { SchoolComponent } from './school/school.component';
import { ShoppingCenterComponent } from './shoppingCenter/shoppingCenter.component';
import { SmokeComponent } from './smoke/smoke.component';
import { UniversityComponent } from './university/university.component';
import { EduComponent } from './edu/edu.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
      {
        path: 'center',
        component: CenterComponent,
      },
      {
        path: 'charity',
        component: CharityComponent,
      },
      {
        path: 'cinema',
        component: CinemaComponent,
      },
      {
        path: 'clinic',
        component: ClinicComponent,
      },
      {
        path: 'culture',
        component: CultureComponent,
      },
      {
        path: 'entertisement',
        component: EntertisementComponent,
      },
      {
        path: 'goverments',
        component: GovermentsComponent,
      },
      {
        path: 'group',
        component: GroupComponent,
      },
      {
        path: 'gym',
        component: GymComponent,
      },
      {
        path: 'hobby',
        component: HobbyComponent,
      },
      {
        path: 'holyShrine',
        component: HolyShrineComponent,
      },
      {
        path: 'karevan',
        component: KarevanComponent,
      },
      {
        path: 'kidCenter',
        component: KidCenterComponent,
      },
      {
        path: 'labor',
        component: LaborComponent,
      },
      {
        path: 'mosque',
        component: MosqueComponent,
      },
      {
        path: 'Report-mosque',
        component: ReportMosqueComponent,
      },
      {
        path: 'ngo',
        component: NgoComponent,
      },
      {
        path: 'otherGroups',
        component: OtherGroupsComponent,
      },
      {
        path: 'quranCenter',
        component: QuranCenterComponent,
      },
      {
        path: 'quranSchool',
        component: QuranSchoolComponent,
      },
      {
        path: 'school',
        component: SchoolComponent,
      },
      {
        path: 'shoppingCenter',
        component: ShoppingCenterComponent,
      },
      {
        path: 'smoke',
        component: SmokeComponent,
      },
      {
        path: 'university',
        component: UniversityComponent,
      },
      {
        path: 'edu',
        component: EduComponent,
      },

    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

