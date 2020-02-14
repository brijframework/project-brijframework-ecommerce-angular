import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppContentComponent } from './app-content/app-content.component';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    AppHeaderComponent,
    AppContentComponent,
    ChatPanelComponent,
    RightSidebarComponent,
    StudentregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
