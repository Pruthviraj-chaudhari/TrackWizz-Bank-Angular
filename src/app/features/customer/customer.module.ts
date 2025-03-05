import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { LoansComponent } from './loans/loans.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapCreditCard2BackFill } from '@ng-icons/bootstrap-icons';


@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    LoansComponent,
    MoneyTransferComponent,
    ProfileSettingsComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HeaderComponent,
    SidebarComponent,
    NgIconsModule.withIcons({ bootstrapCreditCard2BackFill }),
  ]
})
export class CustomerModule { }
