import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { LoansComponent } from './loans/loans.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapArrowDownRight, bootstrapArrowUpRight, bootstrapCreditCard2BackFill, bootstrapGraphUpArrow, bootstrapPeopleFill } from '@ng-icons/bootstrap-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CustomersComponent,
    AccountsComponent,
    TransactionsComponent,
    MoneyTransferComponent,
    LoansComponent,
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ bootstrapGraphUpArrow,bootstrapArrowDownRight, bootstrapArrowUpRight, bootstrapCreditCard2BackFill, bootstrapPeopleFill }),
  ]
})
export class AdminModule { }
