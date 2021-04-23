import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './inc/navbar/navbar.component';
import { SidebarComponent } from './inc/sidebar/sidebar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { UsersPanelComponent } from './interface/users-panel/users-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    UsersPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
