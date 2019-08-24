import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  entryComponents:[RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
