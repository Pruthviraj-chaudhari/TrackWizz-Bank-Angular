import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/accounts/account.service';
import { IAccount, ITransaction } from 'src/app/types';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  accounts: IAccount[] = [];
  transactions: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.fetchMyAccounts();
    this.fetchRecentTransactions();
  }

  fetchMyAccounts(): void {
    this.accountService.getAllAccounts(1, 10).subscribe(
      (data: any) => {
        this.accounts = data.data.$values.map((account: IAccount) => ({
          ...account,
          showBalance: false 
        }));
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }

  fetchRecentTransactions(): void {
    // Replace this with an API call
    this.transactions = [
      { date: new Date(), type: 'Deposit', amount: 5000, status: 'Success' },
      { date: new Date(), type: 'Withdrawal', amount: 2000, status: 'Success' },
      { date: new Date(), type: 'Transfer', amount: 1500, status: 'Failed' }
    ];
  }

  downloadPassbook(account: IAccount): void {
    if (!account) {
      alert('No account selected!');
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('TrackWizz Bank Passbook', 80, 15);
    doc.setFontSize(12);
    doc.text('Customer Details:', 10, 30);
    doc.setFontSize(10);
    doc.text(`Name: ${account.fullName}`, 10, 40);
    doc.setFontSize(12);
    doc.text('Account Details:', 10, 80);
    doc.setFontSize(10);
    doc.text(`Account Number: ${account.accountNumber}`, 10, 90);
    doc.text(`Account Type: ${account.accountType}`, 10, 100);
    doc.text(`Balance: RS. ${account.balance.toFixed(2)}`, 10, 110);
    doc.text(`Status: ${account.status}`, 10, 120);
    doc.save(`Passbook_${account.accountNumber}.pdf`);
  }
}
