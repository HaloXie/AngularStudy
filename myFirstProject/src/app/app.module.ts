import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.moudle';

import { AppComponent } from './app.component';
import { FormDomComponent } from './components/form-dom/form-dom.component';
import { DemoToDoListComponent } from './components/demo-to-do-list/demo-to-do-list.component';
import { DemoToDoListSearchComponent } from './components/demo-to-do-list-search/demo-to-do-list-search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FormDomComponent,
    DemoToDoListComponent,
    DemoToDoListSearchComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
