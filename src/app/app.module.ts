import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HttpClient  } from '@angular/common/http';
import { DrugsComponent } from './drugs/drugs.component';
import { DrugDetailComponent } from './drug-detail/drug-detail.component';
import { DrugAddComponent } from './drug-add/drug-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DrugBillingComponent } from './drug-billing/drug-billing.component';
@NgModule({
  declarations: [
    AppComponent,
    DrugDetailComponent,
    DrugsComponent,
    DrugAddComponent,
    DrugBillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
