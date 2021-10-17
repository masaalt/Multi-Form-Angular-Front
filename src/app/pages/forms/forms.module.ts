import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
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
import { NgoComponent } from './ngo/ngo.component';
import { OtherGroupsComponent } from './otherGroups/otherGroups.component';
import { QuranCenterComponent } from './quranCenter/quranCenter.component';
import { QuranSchoolComponent } from './quranSchool/quranSchool.component';
import { SchoolComponent } from './school/school.component';
import { ShoppingCenterComponent } from './shoppingCenter/shoppingCenter.component';
import { SmokeComponent } from './smoke/smoke.component';
import { UniversityComponent } from './university/university.component';
import { EduComponent } from './edu/edu.component';


import { FormsModule as ngFormsModule } from '@angular/forms';
import { ReportMosqueComponent } from './report-mosque/report-mosque.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    CenterComponent,
    CharityComponent,
    CinemaComponent,
    ClinicComponent,
    CultureComponent,
    EntertisementComponent,
    GovermentsComponent,
    GroupComponent,
    GymComponent,
    HobbyComponent,
    HolyShrineComponent,
    KarevanComponent,
    KidCenterComponent,
    LaborComponent,
    MosqueComponent,
    NgoComponent,
    OtherGroupsComponent,
    QuranCenterComponent,
    QuranSchoolComponent,
    SchoolComponent,
    ShoppingCenterComponent,
    SmokeComponent,
    UniversityComponent,
    EduComponent,
    ReportMosqueComponent,
  ],
})
export class FormsModule { }
