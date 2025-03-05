export interface IUser {
  userId?: string;
  customerId?: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address?: string;
  role?: string;
  dob?: Date;
  status?: string;
  createdAt?: Date;
  accounts?: IAccount[];
}

export interface IAccount {
  accountId: number;
  userId: string;
  fullName?: string;
  accountNumber: string;
  accountType: string;
  balance: number;
  status: string;
  createdAt: Date;
  showBalance?:boolean;
}


export interface ICustomer {
    customerId: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    status: string;
    accounts: IAccount[];
  }
  
  export interface IPaginatedCustomers {
    data: IUser[];
    totalRecords: number;
    pageNumber: number;
    pageSize: number;
  }
  
  export interface IMoneyTransfer {
    senderAccountNumber:string , 
    recipientAccountNumber:string, 
    amount:number
  }

  export interface ITransaction {
    id: string;
    transactionId: string;
    accountId: string;
    type: 'Credit' | 'Debit'; 
    amount: number;
    recipientAccountNumber: string;
    status: 'Pending' | 'Completed' | 'Failed'; 
    createdAt: string; 
    accountNumber: string;
  }
  
  