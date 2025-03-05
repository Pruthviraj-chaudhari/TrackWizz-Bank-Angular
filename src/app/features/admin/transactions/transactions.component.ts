import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/accounts/account.service';
import { ITransaction } from 'src/app/types';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {

  totalRecords: number = 1;
  totalPages: number = 1;
  pageNumber: number = 1;
  pageSize: number = 10;

  transactions: ITransaction[] = [];
  filteredTransactions: ITransaction[] = [];
  searchTerm: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.accountService.getTransactions(this.pageNumber, this.pageSize)
      .subscribe(
        (data: any) => {
          this.totalRecords = data.totalRecords;
          this.pageNumber = data.pageNumber;
          this.pageSize = data.pageSize;
          this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
          this.transactions = data.transactions.$values;
          this.filteredTransactions = [...this.transactions];
        },
        (error) => {
          console.error('Error fetching customers:', error);
        }
      );
  }

  filterTransactions(): void {
    this.filteredTransactions = this.transactions.filter((transaction) =>
      transaction.accountNumber.includes(this.searchTerm) ||
      transaction.type.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  previousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.fetchTransactions();
    }
  }

  nextPage(): void {
    if (this.pageNumber < this.totalPages) {
      this.pageNumber++;
      this.fetchTransactions();
    }
  }
}
