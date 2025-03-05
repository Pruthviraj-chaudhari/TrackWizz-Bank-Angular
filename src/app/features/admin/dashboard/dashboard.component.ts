import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/accounts/account.service';
import { ITransaction } from 'src/app/types';

interface Stat {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  bgColor: string;
}

interface Alert {
  id: number;
  message: string;
  severity: 'high' | 'medium' | 'low';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  transactions: ITransaction[] = [];

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.accountService
      .getTransactions(30, 5)
      .subscribe(
        (data: any) => {

          this.transactions = data.transactions.$values;
        },
        (error) => {
          console.error('Error fetching customers:', error);
        }
      );
  }

  navigateToTransactions() {
    this.router.navigate(['/admin/transactions']);
  }

  stats: Stat[] = [
    {
      title: 'Total Customers',
      value: '24,521',
      change: '+12.5%',
      isPositive: true,
      icon: 'bootstrapPeopleFill',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Active Accounts',
      value: '18,364',
      change: '+7.2%',
      isPositive: true,
      icon: 'bootstrapCreditCard2BackFill',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Total Transactions',
      value: '2445',
      change: '+22.5%',
      isPositive: true,
      icon: 'bootstrapArrowUpRight',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Loans Accounts',
      value: '134',
      change: '+5.7%',
      isPositive: false,
      icon: 'bootstrapArrowDownRight',
      bgColor: 'bg-orange-50',
    },
  ];

  alerts: Alert[] = [
    {
      id: 1,
      message: 'Unusual withdrawal pattern detected for account #78954',
      severity: 'high',
    },
    {
      id: 2,
      message: 'System maintenance scheduled for tonight at 2:00 AM',
      severity: 'medium',
    },
    {
      id: 3,
      message: '5 new customer verification requests pending approval',
      severity: 'low',
    },
  ];
}
