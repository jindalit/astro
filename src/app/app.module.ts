import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule, routedComponents } from './app.routing';
import { NgxCarouselModule } from 'ngx-carousel';
import { CarouselComponent } from './common/carousel';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './common/banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { TrainingProgramComponent } from './training-program/training-program.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ContactUsComponent } from './contact-us/contact-us.component' ;


@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    ServiceComponent,
    TrainingProgramComponent,
    ConsultationComponent,
    ContactUsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
