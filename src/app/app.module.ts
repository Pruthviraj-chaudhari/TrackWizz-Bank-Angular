import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './features/landing/landing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGraphUpArrow } from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    FormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({ bootstrapGraphUpArrow })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
