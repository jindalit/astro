import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { TrainingProgramComponent } from './training-program/training-program.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ContactUsComponent } from './contact-us/contact-us.component' ;
const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'training', component: TrainingProgramComponent },
    { path: 'consultation', component: ConsultationComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes,{enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent,ServiceComponent,TrainingProgramComponent,ConsultationComponent,ContactUsComponent]