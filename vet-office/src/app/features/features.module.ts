import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SpecializationsComponent } from './components/specializations/specializations.component';
import { SuccessComponent } from './components/success/success.component';
import { TeamComponent } from './components/team/team.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    SpecializationsComponent,
    SuccessComponent,
    TeamComponent
  ],
  exports: [
    HomeComponent,
    SpecializationsComponent,
    SuccessComponent,
    TeamComponent]
})
export class FeaturesModule { }
