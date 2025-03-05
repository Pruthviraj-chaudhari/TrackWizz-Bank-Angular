import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { LoansComponent } from './loans/loans.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

const routes: Routes = [{ 
  path: '', 
  component: CustomerComponent, 
  children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'money-transfer', component: MoneyTransferComponent },
      { path: 'loans', component: LoansComponent },
      { path: 'profile', component: ProfileSettingsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
