import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CustomerService } from 'src/app/core/customer/customer.service';
import { IUser } from 'src/app/types';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  showAddCustomerModal: boolean = false;
  totalRecords: number = 1;
  totalPages: number = 1;
  pageNumber: number = 1;
  pageSize: number = 10;
  searchTerm: string = '';
  selectedStatus: string = 'All';

  customers: IUser[] = [];
  filteredCustomers: IUser[] = [];

  newCustomer: IUser = {
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  };

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.customerService
      .getAllCustomers(this.pageNumber, this.pageSize)
      .subscribe(
        (data: any) => {
          if (!data || !data.data || !data.data.$values) {
            console.error('Invalid data received: ', data);
            return;
          }

          this.totalRecords = data.totalRecords;
          this.pageNumber = data.pageNumber;
          this.pageSize = data.pageSize;
          this.totalPages = Math.ceil(this.totalRecords / this.pageSize);

          this.customers = data.data.$values.map((customer: any) => ({
            ...customer,
            accounts: customer.accounts?.$values || [],
          }));

          this.filteredCustomers = [...this.customers];
        },
        (error) => {
          console.error('Error fetching customers:', error);
        }
      );
  }

  openAddCustomerModal(): void {
    this.showAddCustomerModal = true;
  }

  closeAddCustomerModal(): void {
    this.showAddCustomerModal = false;
    this.newCustomer = {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
    };
  }

  saveNewCustomer(): void {
    if (
      this.newCustomer.fullName &&
      this.newCustomer.email &&
      this.newCustomer.phoneNumber &&
      this.newCustomer.password
    ) {
      this.customerService.addCustomer(this.newCustomer).subscribe((data) => {
        this.fetchCustomers(); // Refresh customer list
        this.closeAddCustomerModal();
      });
    }
  }

  filterCustomers(): void {
    this.filteredCustomers = this.customers.filter((customer) => {
      const matchesSearch =
        this.searchTerm.trim() === '' ||
        customer.fullName
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        customer.phoneNumber
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());

      const matchesStatus =
        this.selectedStatus === 'All' ||
        customer.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  previousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.fetchCustomers();
    }
  }

  nextPage(): void {
    if (this.pageNumber < this.totalPages) {
      this.pageNumber++;
      this.fetchCustomers();
    }
  }
}
