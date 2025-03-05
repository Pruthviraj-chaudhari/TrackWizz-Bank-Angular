import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/core/accounts/account.service';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
})
export class MoneyTransferComponent implements OnInit {
  
  moneyTransferForm: FormGroup;
  errorMessage: null | string = null;
  successMessage: null | { 
    message: string;
    senderAccountNumber: string;
    recipientAccountNumber: string;
    amount: number;
  } = null;
  
  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.moneyTransferForm = this.fb.group({
      senderAccountNumber: ['', Validators.required],
      recipientAccountNumber: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
    });
  }

  transferMoney() {
    this.errorMessage = null;
    this.successMessage = null;
    if (this.moneyTransferForm.valid) {
      console.log('Form Submitted:', this.moneyTransferForm.value);

      this.accountService.moneyTransfer(this.moneyTransferForm.value).subscribe(
        (data) => {
          this.successMessage = {
            message: 'Money Transferred Successfully!',
            senderAccountNumber: this.moneyTransferForm.value.senderAccountNumber,
            recipientAccountNumber: this.moneyTransferForm.value.recipientAccountNumber,
            amount: this.moneyTransferForm.value.amount
          };
          console.log('Money transfer sucess:', data);
        },
        (error) => {
          this.errorMessage =  error.error.error
          console.log('Money transfer failed:', error.error.error);
        }
      );
    } else {
      // alert('Invalid Details, Please provide correct details.');
      this.errorMessage = 'Invalid Details, Please provide correct details.'
      console.log("Form is not valid")
    }
  }

  ngOnInit(): void {}
}
