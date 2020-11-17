import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DrugAddComponent } from './drug-add/drug-add.component';
import { DrugBillingComponent } from './drug-billing/drug-billing.component';
import { DrugDetailComponent } from './drug-detail/drug-detail.component';
import { DrugsComponent } from './drugs/drugs.component';

const routes: Routes = [
  { path: 'drugs', component: DrugsComponent },
  { path: 'drugs-detail', component: DrugDetailComponent },
  { path: 'drugs-add', component: DrugAddComponent },
  { path: 'home', component: AppComponent },
  { path: 'billing', component: DrugBillingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
