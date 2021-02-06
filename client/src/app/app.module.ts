import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
// import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackerMainComponent } from './tracker-main/tracker-main.component';
import { LoaderComponent } from './loader/loader.component';
import { TrackerInfoComponent } from './tracker-info/tracker-info.component';
import { TrackerFormComponent } from './tracker-form/tracker-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerMainComponent,
    LoaderComponent,
    TrackerInfoComponent,
    TransactionHistoryComponent,
    TrackerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
