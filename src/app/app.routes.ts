import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { UserReservationComponent } from './layout/user-reservation/user-reservation.component';
import { BmiCalculatorComponent } from './layout/bmi-calculator/bmi-calculator.component';
import { AboutComponent } from './layout/about/about.component';
import { HomeComponent } from './layout/home/home.component';
import { TeamComponent } from './layout/team/team.component';
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AdminTrainingCreatorComponent } from './layout/admin-training-creator/admin-training-creator.component';
import { ClassBodyMindComponent } from './layout/classbodymind/classbodymind';
import { ClassFullBodyWorkoutComponent } from './layout/classFullBodyWorkout/classFullBodyWorkout';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Register', component: RegisterComponent }, 
    { path: 'Login', component: LoginComponent }, 
    { path: 'AdminTrainingCreator', component: AdminTrainingCreatorComponent }, 
    { path: 'Reservatiotn', component:UserReservationComponent }, 
    { path: 'About', component:AboutComponent }, 
    { path: 'BmiCalculator', component:BmiCalculatorComponent }, 
    { path: 'Home', component:HomeComponent }, 
     { path: 'Team', component:TeamComponent }, 
     { path: 'BodyMind', component:ClassBodyMindComponent }, 
     { path: 'BodyMind/:id', component:ClassBodyMindComponent }, 
     { path: 'FullBodyWorkout/:id', component:ClassFullBodyWorkoutComponent }, 
     { path: 'FullBodyWorkout', component:ClassFullBodyWorkoutComponent }, 

     
     
];
