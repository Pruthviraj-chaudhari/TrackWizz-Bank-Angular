import { Component, OnInit } from '@angular/core';
import { SidebarItem } from 'src/app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  sidebarItems: SidebarItem[] = [
    { label: 'Dashboard', icon: 'dashboard-line', route: '/admin/dashboard' },
    { label: 'Customers', icon: 'user-line', route: '/admin/customers' },
    { label: 'Accounts', icon: 'bank-card-line', route: '/admin/accounts' },
    { label: 'Transactions', icon: 'exchange-funds-line', route: '/admin/transactions' },
    { label: 'Money Transfer', icon: 'send-plane-line', route: '/admin/money-transfer' },
    { label: 'Loans', icon: 'money-dollar-circle-line', route: '/admin/loans' },
    { label: 'Profile Settings', icon: 'settings-line', route: '/admin/profile' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
