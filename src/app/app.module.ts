import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Style1Component } from './style1/style1.component';
import { Style2Component } from './style2/style2.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { Style3Component } from './style3/style3.component';
import { Style4Component } from './style4/style4.component';
import { FillerComponent } from './filler/filler.component';

@NgModule({
  declarations: [
    AppComponent,
    Style1Component,
    Style2Component,
    NavMenuComponent,
    Style3Component,
    Style4Component,
    FillerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
