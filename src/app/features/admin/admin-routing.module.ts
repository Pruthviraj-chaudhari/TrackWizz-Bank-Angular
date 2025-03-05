import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { LoansComponent } from './loans/loans.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

const routes: Routes = [{ 
  path: '', 
  component: AdminComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'accounts', component: AccountsComponent },
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
export class AdminRoutingModule { }
