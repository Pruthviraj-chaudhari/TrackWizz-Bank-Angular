import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/core/accounts/account.service';
import { CustomerService } from 'src/app/core/customer/customer.service';
import { IAccount, IUser } from 'src/app/types';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
})
export class AccountsComponent implements OnInit {
  accountForm: FormGroup;
  customers: IUser[] = [];
  accounts: IAccount[] = [];
  filteredAccounts: IAccount[] = [];

  createdAccount: any | null = null;
  selectedAccount: any | null = null;
  selectedCustomerId: string = '';
  searchQuery: string = '';
  filterType: string = '';
  filterStatus: string = '';

  totalRecords: number = 1;
  totalPages: number = 1;
  pageNumber: number = 1;
  pageSize: number = 10;

  accountTypes = ['Savings', 'Current', 'Fixed Deposit'];
  statuses = ['Active', 'Inactive'];

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private customerService: CustomerService
  ) {
    this.accountForm = this.fb.group({
      userId: [null, Validators.required],
      accountType: ['', Validators.required],
      initialBalance: ['', [Validators.required, Validators.min(100)]],
    });
  }

  ngOnInit(): void {
    this.fetchCustomers();
    this.fetchAccounts();
  }

  fetchCustomers(): void {
    this.customerService.getAllCustomers(1, 100).subscribe((data) => {
      this.customers = data.data.$values;
    });
  }

  fetchAccounts(): void {
    this.accountService
      .getAllAccounts(this.pageNumber, this.pageSize)
      .subscribe((data: any) => {
        this.totalRecords = data.totalRecords;
        this.pageNumber = data.pageNumber;
        this.pageSize = data.pageSize;
        this.totalPages = Math.ceil(this.totalRecords / this.pageSize);

        this.accounts = data.data.$values;
        this.filteredAccounts = [...this.accounts];

      });
  }

  createAccount(): void {
    if (this.accountForm.valid) {
      console.log('Form Submitted:', this.accountForm.value);

      this.accountService.createAccount(this.accountForm.value).subscribe(
        (newAccount) => {
          console.log('New Account: ', newAccount);
          this.createdAccount = newAccount;

          const customerDetails = this.customers.find(
            (c) => c.customerId == newAccount.userId
          );

          this.createdAccount = {
            ...newAccount,
            customer: customerDetails || null,
          };

          console.log('createdAccount: ', this.createdAccount);
          this.selectedAccount = this.createdAccount;
          this.fetchAccounts();
          alert('Account Created Successfully!');
        },
        (error) => {
          console.error('Account creation failed:', error);
          alert('Failed to create account. Please check the details.');
        }
      );
    }
  }

  downloadPassbook(account: any): void {
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
    doc.text(`Name: ${this.createdAccount.customer.fullName}`, 10, 40);
    doc.text(`Email: ${this.createdAccount.customer.email}`, 10, 50);
    doc.text(`Phone: ${this.createdAccount.customer.phoneNumber}`, 10, 60);
    doc.setFontSize(12);
    doc.text('Account Details:', 10, 80);
    doc.setFontSize(10);
    doc.text(`Account Number: ${account.accountNumber}`, 10, 90);
    doc.text(`Account Type: ${account.accountType}`, 10, 100);
    doc.text(`Balance: RS. ${account.balance.toFixed(2)}`, 10, 110);
    doc.text(`Status: ${account.status}`, 10, 120);
    doc.save(`Passbook_${account.accountNumber}.pdf`);
  }

  filterAccounts(): void {
    this.filteredAccounts = this.accounts.filter((account) => {
      const matchesSearch =
        this.searchQuery.trim() === '' ||
        account.accountType
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase()) ||
        account.accountNumber
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase()) ||
        account.fullName?.toLowerCase()
          .includes(this.searchQuery.toLowerCase());

      const matchestype = (this.filterType ? account.accountType === this.filterType : true) 
      const matchesStatus =  (this.filterStatus ? account.status === this.filterStatus : true)

      return matchesSearch && matchesStatus && matchestype;
    });
  }

  previousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.fetchAccounts();
    }
  }

  nextPage(): void {
    if (this.pageNumber < this.totalPages) {
      this.pageNumber++;
      this.fetchAccounts();
    }
  }
}
