import { Component, OnInit } from '@angular/core';
import { SidebarItem } from 'src/app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {

  sidebarItems: SidebarItem[] = [
    { label: 'Dashboard', icon: 'dashboard-line', route: '/customer/dashboard' },
    { label: 'Transactions', icon: 'exchange-funds-line', route: '/customer/transactions' },
    { label: 'Money Transfer', icon: 'send-plane-line', route: '/customer/money-transfer' },
    { label: 'Loans', icon: 'money-dollar-circle-line', route: '/customer/loans' },
    { label: 'Profile', icon: 'user-settings-line', route: '/customer/profile' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
